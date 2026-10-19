import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { serverEnv } from "@/lib/env";
import { reportError } from "@/lib/report";
import { profile } from "@/lib/profile";
import { MS_PER_YEAR } from "@/lib/constants";
import { sample, sampleWeeks } from "./samples/github";

export type GH = {
  followers: number;
  repos: number;
  stars: number;
  weeks: { l: number; label: string }[][]; // levels 0-4, [week][day]
  total: number;
  joined: string; // ISO date
  joinedYears: number;
  streak: { current: number; longest: number };
  busiest: { count: number; date: string };
  mix: { commits: number; prs: number; issues: number; reviews: number };
  languages: { name: string; percent: number }[];
  topRepos: { name: string; stars: number; language: string | null; url: string }[];
  events: { type: "Commit" | "PR" | "Issue"; text: string; repo: string; url: string }[];
};

type GhUser = { followers: number; public_repos: number; created_at: string };
type GhRepo = {
  name: string;
  full_name: string;
  html_url: string;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
};
type GhEvent = {
  type: string;
  repo: { name: string };
  payload: {
    ref?: string;
    commits?: { message: string }[];
    number?: number;
    action?: string;
    pull_request?: { number: number; title?: string; html_url?: string };
    issue?: { number: number; title: string; html_url: string };
  };
};
type ContributionDay = { contributionLevel: string; contributionCount: number; date: string };
type ContributionsCollection = {
  totalCommitContributions: number;
  totalPullRequestContributions: number;
  totalIssueContributions: number;
  totalPullRequestReviewContributions: number;
  pullRequestContributions: {
    nodes: {
      pullRequest: {
        number: number;
        title: string;
        url: string;
        repository: { nameWithOwner: string };
      };
    }[];
  };
  contributionCalendar: {
    totalContributions: number;
    weeks: { contributionDays: ContributionDay[] }[];
  };
};

const API = "https://api.github.com";
const LEVELS = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];
const CONTRIBUTIONS_QUERY = `query($u:String!){user(login:$u){contributionsCollection{totalCommitContributions totalPullRequestContributions totalIssueContributions totalPullRequestReviewContributions pullRequestContributions(last:3){nodes{pullRequest{number title url repository{nameWithOwner}}}} contributionCalendar{totalContributions weeks{contributionDays{contributionLevel contributionCount date}}}}}}`;

function parseEvents(evs: GhEvent[]): GH["events"] {
  const events: GH["events"] = [];
  for (const e of evs) {
    const url = `https://github.com/${e.repo.name}`;
    const { commits, pull_request: pr, issue } = e.payload;
    if (e.type === "PushEvent") {
      // GitHub dropped `commits` from PushEvent payloads; fall back to the branch name.
      const text = commits?.length
        ? commits.at(-1)!.message.split("\n")[0]
        : `Pushed to ${e.payload.ref?.replace("refs/heads/", "") ?? "branch"}`;
      if (!events.some((x) => x.type === "Commit" && x.repo === e.repo.name && x.text === text))
        events.push({ type: "Commit", text, repo: e.repo.name, url });
    } else if (e.type === "PullRequestEvent" && pr) {
      // Events API no longer includes title/html_url for PRs.
      const prUrl = pr.html_url ?? `https://github.com/${e.repo.name}/pull/${pr.number}`;
      // One event per action (opened, closed, ...): keep only the latest per PR.
      if (!events.some((x) => x.type === "PR" && x.url === prUrl))
        events.push({
          type: "PR",
          text: `#${pr.number} ${pr.title ?? `Pull request ${e.payload.action ?? ""}`.trim()}`,
          repo: e.repo.name,
          url: prUrl,
        });
    } else if (e.type === "IssuesEvent" && issue) {
      // One event per action (opened, labeled, ...): keep only the latest per issue.
      if (!events.some((x) => x.type === "Issue" && x.url === issue.html_url))
        events.push({
          type: "Issue",
          text: `#${issue.number} ${issue.title}`,
          repo: e.repo.name,
          url: issue.html_url,
        });
    }
  }
  return events;
}

const EVENT_LIMIT = 5;

// Keep PRs/issues from being drowned out by pushes: max 2 per type first, then
// fill remaining slots with the rest so we always show EVENT_LIMIT. Original order kept.
function pickEvents(all: GH["events"]): GH["events"] {
  const seen: Record<string, number> = {};
  const picked = new Set(all.filter((e) => (seen[e.type] = (seen[e.type] ?? 0) + 1) <= 2));
  for (const e of all) if (picked.size < EVENT_LIMIT) picked.add(e);
  return all.filter((e) => picked.has(e)).slice(0, EVENT_LIMIT);
}

function parseContributions(
  cc: ContributionsCollection,
): Pick<GH, "weeks" | "total" | "streak" | "busiest" | "mix"> {
  const cal = cc.contributionCalendar;
  const days = cal.weeks.flatMap((w) => w.contributionDays);
  let longest = 0,
    run = 0;
  for (const d of days) {
    run = d.contributionCount > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  let i = days.length - 1;
  if (days[i]?.contributionCount === 0) i--; // today may not have contributions yet
  let current = 0;
  for (; i >= 0 && days[i].contributionCount > 0; i--) current++;
  const best = days.reduce((a, d) => (d.contributionCount > a.contributionCount ? d : a), days[0]);
  return {
    streak: { current, longest },
    busiest: { count: best.contributionCount, date: best.date },
    mix: {
      commits: cc.totalCommitContributions,
      prs: cc.totalPullRequestContributions,
      issues: cc.totalIssueContributions,
      reviews: cc.totalPullRequestReviewContributions,
    },
    // First week can start mid-week: pad the first week so days stay aligned to Sunday.
    weeks: cal.weeks.map((w, wi) => [
      ...(wi === 0
        ? Array.from({ length: 7 - w.contributionDays.length }, () => ({ l: -1, label: "" }))
        : []),
      ...w.contributionDays.map((d) => ({
        l: LEVELS.indexOf(d.contributionLevel),
        label: `${d.contributionCount} contribution${d.contributionCount === 1 ? "" : "s"} · ${d.date}`,
      })),
    ]),
    total: cal.totalContributions,
  };
}

function topLanguages(own: GhRepo[]): GH["languages"] {
  const count = new Map<string, number>();
  for (const r of own) if (r.language) count.set(r.language, (count.get(r.language) ?? 0) + 1);
  const total = [...count.values()].reduce((a, b) => a + b, 0) || 1;
  return [...count]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([name, n]) => ({ name, percent: Math.round((n / total) * 100) }));
}

function topRepos(own: GhRepo[]): GH["topRepos"] {
  return [...own]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3)
    .map((r) => ({
      name: r.name,
      stars: r.stargazers_count,
      language: r.language,
      url: r.html_url,
    }));
}

async function fetchContributions(user: string, headers: HeadersInit) {
  const g = await getJson<{
    data?: { user?: { contributionsCollection?: ContributionsCollection } };
  }>(`${API}/graphql`, {
    method: "POST",
    headers,
    body: JSON.stringify({ query: CONTRIBUTIONS_QUERY, variables: { u: user } }),
  });
  const cc = g.data?.user?.contributionsCollection;
  if (!cc) throw new Error("GitHub GraphQL returned no user");
  return cc;
}

export async function getGithub(): Promise<Widget<GH>> {
  "use cache";
  cacheLife("hours");
  const user = profile.github;
  const { githubToken: token } = serverEnv();
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  try {
    const [u, repos, evs] = await Promise.all([
      getJson<GhUser>(`${API}/users/${user}`, { headers }),
      getJson<GhRepo[]>(`${API}/users/${user}/repos?per_page=100`, { headers }),
      getJson<GhEvent[]>(`${API}/users/${user}/events/public?per_page=100`, { headers }),
    ]);
    const cc = token ? await fetchContributions(user, headers) : null;
    const contrib = cc ? parseContributions(cc) : null;
    // Events API drops old PRs from its feed; GraphQL keeps real titles and history.
    const prs: GH["events"] = (cc?.pullRequestContributions.nodes ?? [])
      .reverse()
      .map(({ pullRequest: p }) => ({
        type: "PR",
        text: `#${p.number} ${p.title}`,
        repo: p.repository.nameWithOwner,
        url: p.url,
      }));
    const own = repos.filter((r) => !r.fork);
    return {
      sample: !contrib,
      data: {
        followers: u.followers,
        repos: u.public_repos,
        stars: repos.reduce((n, r) => n + r.stargazers_count, 0),
        weeks: contrib?.weeks ?? sampleWeeks(),
        total: contrib?.total ?? 0,
        joined: u.created_at,
        joinedYears: Math.max(
          0,
          Math.floor((Date.now() - new Date(u.created_at).getTime()) / MS_PER_YEAR),
        ),
        streak: contrib?.streak ?? sample.streak,
        busiest: contrib?.busiest ?? sample.busiest,
        mix: contrib?.mix ?? sample.mix,
        languages: topLanguages(own),
        topRepos: topRepos(own),
        events: pickEvents([...parseEvents(evs).filter((e) => e.type !== "PR"), ...prs]),
      },
    };
  } catch (err) {
    reportError("github", err);
    return { data: sample, sample: true };
  }
}

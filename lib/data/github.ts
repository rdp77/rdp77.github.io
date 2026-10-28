import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { serverEnv } from "@/lib/env";
import { reportError } from "@/lib/report";
import { profile } from "@/lib/profile";
import { MS_PER_YEAR } from "@/lib/constants";
import { sample, sampleWeeks } from "./samples/github";

export type GhEvent = { text: string; repo: string; url: string; date: string; state?: string };

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
  activity: Record<"commits" | "prs" | "issues", GhEvent[]>;
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
type ContributionDay = { contributionLevel: string; contributionCount: number; date: string };
type ContributionsCollection = {
  totalCommitContributions: number;
  totalPullRequestContributions: number;
  totalIssueContributions: number;
  totalPullRequestReviewContributions: number;
  contributionCalendar: {
    totalContributions: number;
    weeks: { contributionDays: ContributionDay[] }[];
  };
};

const API = "https://api.github.com";
const LEVELS = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];
const CONTRIBUTIONS_QUERY = `query($u:String!){user(login:$u){contributionsCollection{totalCommitContributions totalPullRequestContributions totalIssueContributions totalPullRequestReviewContributions contributionCalendar{totalContributions weeks{contributionDays{contributionLevel contributionCount date}}}}}}`;

const EVENT_LIMIT = 5;
const ITEMS_QUERY = `query($u:String!){user(login:$u){pullRequests(first:5,orderBy:{field:CREATED_AT,direction:DESC}){nodes{number title url state createdAt repository{nameWithOwner}}} issues(first:5,orderBy:{field:CREATED_AT,direction:DESC}){nodes{number title url state createdAt repository{nameWithOwner}}}}}`;

type GhItem = {
  number: number;
  title: string;
  url: string;
  createdAt: string;
  state: string;
  repository: { nameWithOwner: string };
};
type GhCommit = {
  html_url: string;
  commit: { message: string; author: { date: string } };
  repository: { full_name: string };
};

// Events API only keeps 90 days; GraphQL + commit search have no age limit.
async function fetchActivity(
  user: string,
  headers: HeadersInit,
  hasToken: boolean,
): Promise<GH["activity"]> {
  const [commits, items] = await Promise.all([
    getJson<{ items: GhCommit[] }>(
      `${API}/search/commits?q=author:${user}&sort=author-date&order=desc&per_page=${EVENT_LIMIT}`,
      { headers },
    ).then(
      (r) => r.items,
      () => [] as GhCommit[],
    ),
    hasToken
      ? getJson<{
          data?: {
            user?: { pullRequests: { nodes: GhItem[] }; issues: { nodes: GhItem[] } };
          };
        }>(`${API}/graphql`, {
          method: "POST",
          headers,
          body: JSON.stringify({ query: ITEMS_QUERY, variables: { u: user } }),
        }).then(
          (r) => r.data?.user,
          () => undefined,
        )
      : undefined,
  ]);
  // Orgs that reject the token return null nodes; drop them.
  const item = (i: GhItem): GhEvent => ({
    text: `#${i.number} ${i.title}`,
    repo: i.repository.nameWithOwner,
    url: i.url,
    date: i.createdAt,
    state: i.state.toLowerCase(),
  });
  return {
    commits: commits.map((c) => ({
      text: c.commit.message.split("\n")[0],
      repo: c.repository.full_name,
      url: c.html_url,
      date: c.commit.author.date,
    })),
    prs: items?.pullRequests.nodes.filter(Boolean).map(item) ?? [],
    issues: items?.issues.nodes.filter(Boolean).map(item) ?? [],
  };
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
    const [u, repos, activity] = await Promise.all([
      getJson<GhUser>(`${API}/users/${user}`, { headers }),
      getJson<GhRepo[]>(`${API}/users/${user}/repos?per_page=100`, { headers }),
      fetchActivity(user, headers, !!token),
    ]);
    const cc = token ? await fetchContributions(user, headers) : null;
    const contrib = cc ? parseContributions(cc) : null;
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
        activity,
      },
    };
  } catch (err) {
    reportError("github", err);
    return { data: sample, sample: true };
  }
}

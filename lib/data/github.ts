import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { profile } from "@/lib/profile";

export type GH = {
  followers: number; repos: number; stars: number;
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

function sampleWeeks(): GH["weeks"] {
  let s = 7;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => { const r = rnd(); const l = r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.85 ? 2 : r < 0.95 ? 3 : 4; return { l, label: `Sample · level ${l}` }; }));
}

const sample: GH = {
  followers: 128, repos: 42, stars: 315, total: 1204, weeks: sampleWeeks(),
  joined: "2018-01-01T00:00:00Z", joinedYears: 8, streak: { current: 4, longest: 31 }, busiest: { count: 24, date: "2025-03-14" },
  mix: { commits: 980, prs: 120, issues: 40, reviews: 64 },
  languages: [{ name: "TypeScript", percent: 40 }, { name: "PHP", percent: 30 }, { name: "Go", percent: 20 }, { name: "Python", percent: 10 }],
  topRepos: [{ name: "rdp77/sample", stars: 120, language: "TypeScript", url: "https://github.com/rdp77" }],
  events: [
    { type: "Commit", text: "feat: add dashboard widgets", repo: "rdp77/rdp77.github.io", url: "https://github.com/rdp77" },
    { type: "PR", text: "Open pull request #12", repo: "rdp77/sample", url: "https://github.com/rdp77" },
    { type: "Issue", text: "Opened issue #3", repo: "rdp77/sample", url: "https://github.com/rdp77" },
  ],
};

type Ev = { type: string; repo: { name: string }; payload: { commits?: { message: string }[]; action?: string; pull_request?: { number: number; title: string; html_url: string }; issue?: { number: number; title: string; html_url: string } } };

export async function getGithub(): Promise<Widget<GH>> {
  "use cache";
  cacheLife("hours");
  const user = profile.github;
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) };
  try {
    const [u, repos, evs] = await Promise.all([
      getJson<{ followers: number; public_repos: number; created_at: string }>(`https://api.github.com/users/${user}`, { headers }),
      getJson<{ name: string; full_name: string; html_url: string; fork: boolean; language: string | null; stargazers_count: number }[]>(`https://api.github.com/users/${user}/repos?per_page=100`, { headers }),
      getJson<Ev[]>(`https://api.github.com/users/${user}/events/public?per_page=30`, { headers }),
    ]);
    const events: GH["events"] = [];
    for (const e of evs) {
      const url = `https://github.com/${e.repo.name}`;
      if (e.type === "PushEvent" && e.payload.commits?.length) events.push({ type: "Commit", text: e.payload.commits.at(-1)!.message.split("\n")[0], repo: e.repo.name, url });
      else if (e.type === "PullRequestEvent" && e.payload.pull_request) events.push({ type: "PR", text: `#${e.payload.pull_request.number} ${e.payload.pull_request.title}`, repo: e.repo.name, url: e.payload.pull_request.html_url });
      else if (e.type === "IssuesEvent" && e.payload.issue) events.push({ type: "Issue", text: `#${e.payload.issue.number} ${e.payload.issue.title}`, repo: e.repo.name, url: e.payload.issue.html_url });
    }
    let weeks = sampleWeeks(), total = 0, realGraph = false;
    let streak = sample.streak, busiest = sample.busiest, mix = sample.mix;
    if (token) {
      const g = await getJson<{ data: { user: { contributionsCollection: { totalCommitContributions: number; totalPullRequestContributions: number; totalIssueContributions: number; totalPullRequestReviewContributions: number; contributionCalendar: { totalContributions: number; weeks: { contributionDays: { contributionLevel: string; contributionCount: number; date: string }[] }[] } } } } }>("https://api.github.com/graphql", {
        method: "POST", headers,
        body: JSON.stringify({ query: `query($u:String!){user(login:$u){contributionsCollection{totalCommitContributions totalPullRequestContributions totalIssueContributions totalPullRequestReviewContributions contributionCalendar{totalContributions weeks{contributionDays{contributionLevel contributionCount date}}}}}}`, variables: { u: user } }),
      });
      const cc = g.data.user.contributionsCollection;
      const cal = cc.contributionCalendar;
      const days = cal.weeks.flatMap((w) => w.contributionDays);
      let longest = 0, run = 0;
      for (const d of days) { run = d.contributionCount > 0 ? run + 1 : 0; longest = Math.max(longest, run); }
      let i = days.length - 1;
      if (days[i]?.contributionCount === 0) i--; // today may not have contributions yet
      let current = 0;
      for (; i >= 0 && days[i].contributionCount > 0; i--) current++;
      const best = days.reduce((a, d) => (d.contributionCount > a.contributionCount ? d : a), days[0]);
      streak = { current, longest }; busiest = { count: best.contributionCount, date: best.date };
      mix = { commits: cc.totalCommitContributions, prs: cc.totalPullRequestContributions, issues: cc.totalIssueContributions, reviews: cc.totalPullRequestReviewContributions };
      const lv = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];
      weeks = cal.weeks.map((w) => w.contributionDays.map((d) => ({ l: lv.indexOf(d.contributionLevel), label: `${d.contributionCount} contribution${d.contributionCount === 1 ? "" : "s"} · ${d.date}` })));
      total = cal.totalContributions; realGraph = true;
    }
    const own = repos.filter((r) => !r.fork);
    const langCount = new Map<string, number>();
    for (const r of own) if (r.language) langCount.set(r.language, (langCount.get(r.language) ?? 0) + 1);
    const langTotal = [...langCount.values()].reduce((a, b) => a + b, 0) || 1;
    const languages = [...langCount].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([name, n]) => ({ name, percent: Math.round((n / langTotal) * 100) }));
    const topRepos = [...own].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3).map((r) => ({ name: r.name, stars: r.stargazers_count, language: r.language, url: r.html_url }));
    return { sample: !realGraph, data: { followers: u.followers, repos: u.public_repos, stars: repos.reduce((n, r) => n + r.stargazers_count, 0), weeks, total, joined: u.created_at, joinedYears: Math.max(0, Math.floor((Date.now() - new Date(u.created_at).getTime()) / 31557600000)), streak, busiest, mix, languages, topRepos, events: events.slice(0, 6) } };
  } catch {
    return { data: sample, sample: true };
  }
}

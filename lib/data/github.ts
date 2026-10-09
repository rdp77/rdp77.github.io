import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { profile } from "@/lib/profile";

export type GH = {
  followers: number; repos: number; stars: number;
  weeks: number[][]; // contribution levels 0-4, [week][day]
  total: number;
  events: { type: "Commit" | "PR" | "Issue"; text: string; repo: string; url: string }[];
};

function sampleWeeks(): number[][] {
  let s = 7;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  return Array.from({ length: 53 }, () => Array.from({ length: 7 }, () => { const r = rnd(); return r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.85 ? 2 : r < 0.95 ? 3 : 4; }));
}

const sample: GH = {
  followers: 128, repos: 42, stars: 315, total: 1204, weeks: sampleWeeks(),
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
      getJson<{ followers: number; public_repos: number }>(`https://api.github.com/users/${user}`, { headers }),
      getJson<{ stargazers_count: number }[]>(`https://api.github.com/users/${user}/repos?per_page=100`, { headers }),
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
    if (token) {
      const g = await getJson<{ data: { user: { contributionsCollection: { contributionCalendar: { totalContributions: number; weeks: { contributionDays: { contributionLevel: string }[] }[] } } } } }>("https://api.github.com/graphql", {
        method: "POST", headers,
        body: JSON.stringify({ query: `query($u:String!){user(login:$u){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{contributionLevel}}}}}}`, variables: { u: user } }),
      });
      const cal = g.data.user.contributionsCollection.contributionCalendar;
      const lv = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];
      weeks = cal.weeks.map((w) => w.contributionDays.map((d) => lv.indexOf(d.contributionLevel)));
      total = cal.totalContributions; realGraph = true;
    }
    return { sample: !realGraph, data: { followers: u.followers, repos: u.public_repos, stars: repos.reduce((n, r) => n + r.stargazers_count, 0), weeks, total, events: events.slice(0, 6) } };
  } catch {
    return { data: sample, sample: true };
  }
}

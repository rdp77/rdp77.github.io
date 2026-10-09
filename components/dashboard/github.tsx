import { getGithub } from "@/lib/data/github";
import { Card, Stat, Badge, EmptyState } from "@/components/ui/primitives";
import { Heatmap } from "@/components/ui/heatmap";
import { profile } from "@/lib/profile";
import { Counter, Bar } from "@/components/ui/motion";

const fmt = (iso: string, o: Intl.DateTimeFormatOptions) => new Date(iso).toLocaleDateString("en-US", { timeZone: "UTC", ...o });

export async function GithubCard() {
  const { data: d, sample } = await getGithub();
  return (
    <Card title="GitHub activity" sample={sample} className="md:col-span-3" action={<a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-fg hover:underline">@{profile.github} ↗</a>}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-x-6">
        <Stat label="Stars"><Counter value={d.stars} /></Stat>
        <Stat label="Followers"><Counter value={d.followers} /></Stat>
        <Stat label="Repositories"><Counter value={d.repos} /></Stat>
        <Stat label="Joined GitHub">{fmt(d.joined, { month: "short", year: "numeric" })} <span className="font-mono text-xs text-muted">· {d.joinedYears} yrs</span></Stat>
      </div>
      <div className="mt-6"><Heatmap weeks={d.weeks} hint={`${d.total} contributions in the last year`} aria={`Contribution graph${d.total ? `, ${d.total} contributions in the last year` : ""}`} /></div>
      <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 border-t border-line pt-6 sm:grid-cols-4 sm:gap-x-6">
        <Stat label="Current streak">{d.streak.current} <span className="font-mono text-xs text-muted">days</span></Stat>
        <Stat label="Longest streak">{d.streak.longest} <span className="font-mono text-xs text-muted">days</span></Stat>
        <Stat label="Busiest day">{d.busiest.count} <span className="font-mono text-xs text-muted">· {fmt(d.busiest.date, { month: "short", day: "numeric", year: "numeric" })}</span></Stat>
        <Stat label="Reviews & PRs">{d.mix.reviews + d.mix.prs} <span className="font-mono text-xs text-muted">this year</span></Stat>
      </div>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="mb-2 text-xs text-faint">Top languages</p>
          <ul className="space-y-2">
            {d.languages.map((l) => (
              <li key={l.name} className="text-sm">
                <div className="mb-1 flex justify-between"><span>{l.name}</span><span className="font-mono text-xs text-muted">{l.percent}%</span></div>
                <Bar percent={l.percent} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs text-faint">Contribution mix</p>
          <ul className="space-y-2 text-sm">
            {([["Commits", d.mix.commits], ["Pull requests", d.mix.prs], ["Code reviews", d.mix.reviews], ["Issues", d.mix.issues]] as const).map(([k, v]) => (
              <li key={k} className="flex justify-between"><span>{k}</span><span className="font-mono text-xs text-muted">{v}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs text-faint">Top repositories</p>
          {d.topRepos.length === 0 ? <p className="text-sm text-faint">No public repos yet</p> : (
            <ul className="space-y-2 text-sm">
              {d.topRepos.map((r) => (
                <li key={r.name} className="flex items-center justify-between gap-2">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="min-w-0 truncate hover:underline">{r.name}</a>
                  <span className="shrink-0 font-mono text-xs text-muted">★ {r.stars}{r.language ? ` · ${r.language}` : ""}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p className="mb-2 mt-6 text-xs text-faint">Recent commits, pull requests &amp; issues</p>
      {d.events.length === 0 ? <EmptyState>No recent public activity.</EmptyState> : (
        <ul className="divide-y divide-line text-sm">
          {d.events.map((e, i) => (
            <li key={i} className="flex items-center gap-3 py-2">
              <Badge tone={e.type === "PR" ? "warn" : e.type === "Issue" ? "bad" : "neutral"}>{e.type}</Badge>
              <a href={e.url} target="_blank" rel="noopener noreferrer" className="min-w-0 flex-1 truncate hover:underline">{e.text}</a>
              <span className="hidden font-mono text-xs text-faint sm:inline">{e.repo}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

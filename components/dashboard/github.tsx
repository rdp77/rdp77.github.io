import { getGithub } from "@/lib/data/github";
import { Card, Stat, Badge, EmptyState } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/motion";

const shade = ["bg-line", "bg-violet/25", "bg-violet/50", "bg-violet/75", "bg-violet"];

export async function GithubCard() {
  const { data: d, sample } = await getGithub();
  return (
    <Card title="GitHub activity" sample={sample} className="md:col-span-3">
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <Stat label="Stars"><Counter value={d.stars} /></Stat>
        <Stat label="Followers"><Counter value={d.followers} /></Stat>
        <Stat label="Repositories"><Counter value={d.repos} /></Stat>
      </div>
      <div className="mt-6 overflow-x-auto" role="img" aria-label={`Contribution graph${d.total ? `, ${d.total} contributions in the last year` : ""}`}>
        <div className="flex w-max gap-[3px] pb-1">
          {d.weeks.map((w, i) => (
            <div key={i} className="flex flex-col gap-[3px]">{w.map((l, j) => <span key={j} className={`size-[10px] ${shade[Math.max(0, l)]}`} />)}</div>
          ))}
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

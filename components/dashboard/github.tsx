import { getGithub } from "@/lib/data/github";
import { Card, Stat, Badge, EmptyState } from "@/components/ui/primitives";
import { Heatmap } from "@/components/ui/heatmap";
import { Counter } from "@/components/ui/motion";


export async function GithubCard() {
  const { data: d, sample } = await getGithub();
  return (
    <Card title="GitHub activity" sample={sample} className="md:col-span-3">
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <Stat label="Stars"><Counter value={d.stars} /></Stat>
        <Stat label="Followers"><Counter value={d.followers} /></Stat>
        <Stat label="Repositories"><Counter value={d.repos} /></Stat>
      </div>
      <div className="mt-6"><Heatmap weeks={d.weeks} hint={`${d.total} contributions in the last year`} aria={`Contribution graph${d.total ? `, ${d.total} contributions in the last year` : ""}`} /></div>
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

import { getWakatime } from "@/lib/data/wakatime";
import { Card, Stat, Badge } from "@/components/ui/primitives";
import { Bar } from "@/components/ui/motion";

function Breakdown({ title, rows }: { title: string; rows: { name: string; percent: number }[] }) {
  return (
    <div>
      <p className="mb-2 text-xs text-faint">{title}</p>
      {rows.length === 0 ? <p className="text-sm text-faint">No data yet</p> : <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="text-sm">
            <div className="mb-1 flex justify-between"><span>{r.name}</span><span className="font-mono text-xs text-muted">{r.percent}%</span></div>
            <Bar percent={r.percent} />
          </li>
        ))}
      </ul>}
    </div>
  );
}

export async function WakatimeCard() {
  const { data: d, sample } = await getWakatime();
  const maxDay = Math.max(1, ...d.daily.map((x) => x.seconds));
  const aiPct = Math.round((d.ai.aiLines / Math.max(1, d.ai.aiLines + d.ai.humanLines)) * 100);
  return (
    <Card title="WakaTime" sample={sample} className="md:col-span-2">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Stat label="Total">{d.total}</Stat>
        <Stat label="Today">{d.today}</Stat>
        <Stat label="This week">{d.week}</Stat>
        <Stat label="Last activity"><span className="text-base">{d.lastActivity}</span></Stat>
        <Stat label="Daily average"><span className="text-xl">{d.dailyAverage}</span></Stat>
        <Stat label="Best day (7d)"><span className="text-xl">{d.bestDay}</span></Stat>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs text-faint">Coding time · last 7 days</p>
          <div className="flex h-28 items-end gap-2" role="img" aria-label="Daily coding time, last 7 days">
            {d.daily.map((x, i) => (
              <div key={i} className="group/b flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1">
                <div className="peer w-full bg-violet transition-opacity hover:opacity-80" style={{ height: `${Math.max(2, (x.seconds / maxDay) * 100)}%` }} title={`${x.day}: ${(x.seconds / 3600).toFixed(1)} hrs`} />
                <span className="font-mono text-[10px] text-faint transition-colors group-hover/b:text-fg">{(x.seconds / 3600).toFixed(1)}h · {x.day}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs text-faint">AI-assisted coding · last 7 days</p>
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Sessions"><span className="text-xl">{d.ai.sessions}</span></Stat>
            <Stat label="Prompts"><span className="text-xl">{d.ai.prompts}</span></Stat>
            <Stat label="AI lines"><span className="text-xl">{d.ai.aiLines.toLocaleString("en-US")}</span></Stat>
          </div>
          <div className="mt-4 flex h-2 overflow-hidden bg-line" role="img" aria-label={`${aiPct}% of added lines by AI`}><div className="bg-violet" style={{ width: `${aiPct}%` }} /></div>
          <p className="mt-1.5 flex justify-between text-xs text-faint"><span>AI {aiPct}%</span><span>Human {100 - aiPct}%</span></p>
          {d.ai.models.length > 0 && <p className="mt-3 flex flex-wrap gap-1.5">{d.ai.models.map((m) => <Badge key={m.name}>{m.name}</Badge>)}</p>}
        </div>
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Breakdown title="Categories" rows={d.categories} />
        <Breakdown title="Languages" rows={d.languages} />
        <Breakdown title="Editors" rows={d.editors} />
        <Breakdown title="Operating systems" rows={d.os} />
      </div>
    </Card>
  );
}

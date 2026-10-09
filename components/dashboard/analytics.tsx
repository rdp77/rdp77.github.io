import { getAnalytics } from "@/lib/data/analytics";
import { Card, Stat } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/motion";

function List({ title, rows }: { title: string; rows: { label: string; value: number }[] }) {
  return (
    <div>
      <p className="mb-2 text-xs text-faint">{title}</p>
      <ul className="space-y-1 text-sm">
        {rows.map((r) => <li key={r.label} className="flex justify-between gap-2"><span className="truncate">{r.label}</span><span className="font-mono text-xs text-muted">{r.value.toLocaleString("en-US")}</span></li>)}
      </ul>
    </div>
  );
}

export async function AnalyticsCard() {
  const { data: d, sample } = await getAnalytics();
  return (
    <Card title={`Analytics · ${d.provider} · 30 days`} sample={sample} className="md:col-span-3">
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <Stat label="Visitors"><Counter value={d.visitors} /></Stat>
        <Stat label="Page views"><Counter value={d.pageviews} /></Stat>
        <Stat label="Views / visitor">{(d.pageviews / Math.max(d.visitors, 1)).toFixed(1)}</Stat>
      </div>
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <List title="Top pages" rows={d.pages} />
        <List title="Top referrers" rows={d.referrers} />
        <List title="Countries" rows={d.countries} />
        <List title="Devices" rows={d.devices} />
      </div>
    </Card>
  );
}

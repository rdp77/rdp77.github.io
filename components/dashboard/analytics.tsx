import { getAnalytics } from "@/lib/data/analytics";
import { Card, Stat } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/motion";

function List({ title, rows }: { title: string; rows: { label: string; value: number }[] }) {
  return (
    <div>
      <p className="mb-2 text-xs text-faint">{title}</p>
      <ul className="space-y-1 text-sm">
        {rows.map((r) => (
          <li key={r.label} className="flex justify-between gap-2">
            <span className="truncate">{r.label}</span>
            <span className="font-mono text-xs text-muted">{r.value.toLocaleString("en-US")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const countries = new Intl.DisplayNames("en", { type: "region" });
const countryName = (c: string) => {
  try {
    return countries.of(c) ?? c;
  } catch {
    return c;
  }
};

function Chart({ daily }: { daily: { date: string; visitors: number; pageviews: number }[] }) {
  const max = Math.max(...daily.map((d) => d.pageviews), 1);
  const fmt = (d: string) =>
    new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    });
  return (
    <figure className="mt-8" aria-label="Daily page views and visitors, last 30 days">
      <div className="mb-2 flex items-center gap-4 text-xs text-faint">
        <span className="flex items-center gap-1.5">
          <i className="size-2 bg-wisteria" />
          Page views
        </span>
        <span className="flex items-center gap-1.5">
          <i className="size-2 bg-violet" />
          Visitors
        </span>
      </div>
      <div className="flex h-32 items-end gap-[3px] border-b border-line">
        {daily.map((d) => (
          <div
            key={d.date}
            title={`${fmt(d.date)}: ${d.pageviews} views, ${d.visitors} visitors`}
            className="relative flex h-full flex-1 items-end hover:bg-tint"
          >
            <div
              className="absolute inset-x-0 bottom-0 bg-wisteria"
              style={{ height: `${(d.pageviews / max) * 100}%`, minHeight: d.pageviews ? 2 : 0 }}
            />
            <div
              className="absolute inset-x-0 bottom-0 bg-violet"
              style={{ height: `${(d.visitors / max) * 100}%`, minHeight: d.visitors ? 2 : 0 }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between font-mono text-xs text-faint">
        <span>{fmt(daily[0].date)}</span>
        <span>{fmt(daily[daily.length - 1].date)}</span>
      </div>
    </figure>
  );
}

export async function AnalyticsCard() {
  const { data: d, sample } = await getAnalytics();
  return (
    <Card title={`Analytics · ${d.provider} · 30 days`} sample={sample} className="md:col-span-3">
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <Stat label="Visitors">
          <Counter value={d.visitors} />
        </Stat>
        <Stat label="Page views">
          <Counter value={d.pageviews} />
        </Stat>
        <Stat label="Views / visitor">{(d.pageviews / Math.max(d.visitors, 1)).toFixed(1)}</Stat>
      </div>
      {d.daily.length > 1 && <Chart daily={d.daily} />}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <List title="Top pages" rows={d.pages} />
        <List title="Top referrers" rows={d.referrers} />
        <List
          title="Countries"
          rows={d.countries.map((r) => ({ ...r, label: countryName(r.label) }))}
        />
        <List title="Devices" rows={d.devices} />
      </div>
    </Card>
  );
}

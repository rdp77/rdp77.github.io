import { profile } from "@/lib/profile";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";
import { getStatus } from "@/lib/data/status";
import { Presence } from "@/components/dashboard/presence";

const meta = [
  ["role", profile.role],
  ["handle", `@${profile.handle}`],
  ["region", "Asia / Jakarta"],
  ["refresh", "hourly"],
];

export async function DashboardHero() {
  const monitored = (await getStatus()).filter((s) => s.health !== "unmonitored");
  const offline = monitored.filter((s) => s.health === "offline").length;
  const degraded = monitored.filter((s) => s.health === "degraded").length;
  const [text, fg] = offline
    ? [`${offline} of ${monitored.length} services offline`, "text-bad-fg"]
    : degraded
      ? [`${degraded} of ${monitored.length} services degraded`, "text-warn-fg"]
      : ["All systems operational", "text-ok-fg"];
  return (
    <section aria-labelledby="dash-title" className="relative border-b border-line">
      <div className="dash-fade pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative py-12 md:py-16">
        <Reveal>
          <p className="font-mono text-xs text-faint">~ / <span className="text-fg">dashboard</span></p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h1 id="dash-title" className="display text-4xl sm:text-5xl md:text-6xl">Control <span className="grad">panel</span></h1>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <p className={`inline-flex items-center gap-2 border border-line bg-bg px-3 py-1.5 font-mono text-xs ${fg}`}>
                <span className="pulse-dot size-2 rounded-full bg-current" aria-hidden />{text}
              </p>
              <Presence />
            </div>
          </div>
          <p className="mt-4 max-w-xl text-muted">Live coding time, GitHub activity, wallet, traffic and service health for {profile.name}.</p>
          <dl className="mt-8 grid grid-cols-2 border border-line bg-bg md:grid-cols-4">
            {meta.map(([k, v]) => (
              <div key={k} className="min-w-0 border-line p-4 max-md:border-b max-md:odd:border-r max-md:nth-[n+3]:border-b-0 md:border-r md:last:border-r-0">
                <dt className="font-mono text-xs text-faint">{k}</dt>
                <dd className="mt-1 truncate text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

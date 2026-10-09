import { getStatus, type Health } from "@/lib/data/status";
import { Card, Badge } from "@/components/ui/primitives";

const tone: Record<Health, "ok" | "warn" | "bad" | "neutral"> = { healthy: "ok", degraded: "warn", offline: "bad", unmonitored: "neutral" };
const label: Record<Health, string> = { healthy: "Healthy", degraded: "Degraded", offline: "Offline", unmonitored: "Not monitored" };

export async function StatusCard() {
  const services = await getStatus();
  return (
    <Card title="Infrastructure status" className="md:col-span-3">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[360px] text-left text-sm">
          <thead className="text-xs text-faint"><tr><th className="pb-2 font-normal">Service</th><th className="pb-2 font-normal">Status</th><th className="pb-2 font-normal">Response</th></tr></thead>
          <tbody className="divide-y divide-line">
            {services.map((s) => (
              <tr key={s.name}>
                <td className="py-2.5">{s.name}</td>
                <td><Badge tone={tone[s.health]}>{label[s.health]}</Badge></td>
                <td className="font-mono text-xs text-muted">{s.ms === null ? "—" : `${s.ms} ms`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

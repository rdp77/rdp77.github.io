import { cacheLife } from "next/cache";
import { siteUrl } from "@/lib/profile";

export type Health = "healthy" | "degraded" | "offline" | "unmonitored";
export type Service = { name: string; health: Health; ms: number | null; uptime: string; lastIncident: string };

// Probed live (cached). Internal services without a health URL are shown as unmonitored
// until you set STATUS_API_URL / STATUS_DB_URL / STATUS_REDIS_URL / STATUS_SERVER_URL.
const targets = (): { name: string; url?: string }[] => [
  { name: "Website", url: siteUrl },
  { name: "API", url: process.env.STATUS_API_URL },
  { name: "Database", url: process.env.STATUS_DB_URL },
  { name: "Redis", url: process.env.STATUS_REDIS_URL },
  { name: "Server", url: process.env.STATUS_SERVER_URL },
  { name: "GitHub API", url: "https://api.github.com/zen" },
  { name: "WakaTime API", url: "https://wakatime.com/api/v1/" },
  { name: "Vercel API", url: "https://api.vercel.com/" },
  { name: "Umami API", url: process.env.UMAMI_API_URL ? process.env.UMAMI_API_URL.replace(/\/api\/?$/, "/api/heartbeat") : "https://api.umami.is/v1/me" },
];

async function probe(t: { name: string; url?: string }): Promise<Service> {
  if (!t.url) return { name: t.name, health: "unmonitored", ms: null, uptime: "—", lastIncident: "—" };
  const start = performance.now();
  try {
    const res = await fetch(t.url, { method: "GET", signal: AbortSignal.timeout(5000), redirect: "follow" });
    const ms = Math.round(performance.now() - start);
    // 401/403 still means the service answered.
    const up = res.status < 500;
    return { name: t.name, health: !up ? "offline" : ms > 1500 ? "degraded" : "healthy", ms, uptime: "—", lastIncident: up ? "None observed" : "Now" };
  } catch {
    return { name: t.name, health: "offline", ms: null, uptime: "—", lastIncident: "Just now" };
  }
}

export async function getStatus(): Promise<Service[]> {
  "use cache";
  cacheLife("minutes");
  return Promise.all(targets().map(probe));
}

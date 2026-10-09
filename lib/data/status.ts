import { cacheLife } from "next/cache";

export type Health = "healthy" | "degraded" | "offline" | "unmonitored";
export type Service = { name: string; health: Health; ms: number | null };

// Probed live (cached).
const targets = (): { name: string; url?: string }[] => [
  { name: "GitHub API", url: "https://api.github.com/zen" },
  { name: "WakaTime API", url: "https://wakatime.com/api/v1/" },
  { name: "Vercel Analytics API", url: "https://api.vercel.com/" },
  { name: "Etherscan API", url: "https://api.etherscan.io/v2/chainlist" },
  { name: "Spotify API", url: "https://api.spotify.com/v1/" },
  { name: "Online Status API", url: "https://api.lanyard.rest/v1/users/493350564785029142" },
  { name: "Web3Forms API", url: "https://api.web3forms.com/" },
];

async function probe(t: { name: string; url?: string }): Promise<Service> {
  if (!t.url) return { name: t.name, health: "unmonitored", ms: null };
  const start = performance.now();
  try {
    const res = await fetch(t.url, { method: "GET", signal: AbortSignal.timeout(5000), redirect: "follow" });
    const ms = Math.round(performance.now() - start);
    // 401/403 still means the service answered.
    const up = res.status < 500;
    return { name: t.name, health: !up ? "offline" : ms > 1500 ? "degraded" : "healthy", ms };
  } catch {
    return { name: t.name, health: "offline", ms: null };
  }
}

export async function getStatus(): Promise<Service[]> {
  "use cache";
  cacheLife("minutes");
  return Promise.all(targets().map(probe));
}

import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";

type Row = { label: string; value: number };
export type Analytics = {
  provider: "Vercel";
  visitors: number; pageviews: number;
  pages: Row[]; referrers: Row[]; countries: Row[]; devices: Row[];
};

const sample: Analytics = {
  provider: "Vercel", visitors: 1840, pageviews: 5920,
  pages: [{ label: "/", value: 3200 }, { label: "/projects", value: 1100 }, { label: "/about", value: 820 }],
  referrers: [{ label: "google.com", value: 640 }, { label: "github.com", value: 410 }, { label: "x.com", value: 180 }],
  countries: [{ label: "Indonesia", value: 980 }, { label: "United States", value: 310 }, { label: "Singapore", value: 140 }],
  devices: [{ label: "desktop", value: 1100 }, { label: "mobile", value: 690 }, { label: "tablet", value: 50 }],
};

// Vercel Web Analytics REST API: https://vercel.com/docs/analytics/web-analytics-api
const API = "https://api.vercel.com/v1/query/web-analytics/visits";
type VRow = Record<string, string | number | null>;

export async function getAnalytics(): Promise<Widget<Analytics>> {
  "use cache";
  cacheLife("hours");
  const { VERCEL_TOKEN: token, VERCEL_PROJECT_ID: projectId, VERCEL_TEAM_ID: teamId } = process.env;
  if (!token || !projectId) return { data: sample, sample: true };
  const headers = { Authorization: `Bearer ${token}` };
  const day = (t: number) => new Date(t).toISOString().slice(0, 10);
  const base = new URLSearchParams({ projectId, since: day(Date.now() - 30 * 864e5), until: day(Date.now()) });
  if (teamId) base.set("teamId", teamId);
  const by = async (dim: string): Promise<Row[]> => {
    const q = new URLSearchParams(base); q.set("by", dim); q.set("limit", "5");
    const { data } = await getJson<{ data: VRow[] }>(`${API}/aggregate?${q}`, { headers });
    return data.map((r) => ({ label: String(r[dim] || "(direct)"), value: Number(r.pageviews) }));
  };
  try {
    const [total, pages, referrers, countries, devices] = await Promise.all([
      getJson<{ data: { pageviews: number; visitors: number } }>(`${API}/count?${base}`, { headers }),
      by("requestPath"), by("referrerHostname"), by("country"), by("deviceType"),
    ]);
    return { sample: false, data: { provider: "Vercel", visitors: total.data.visitors, pageviews: total.data.pageviews, pages, referrers, countries, devices } };
  } catch {
    return { data: sample, sample: true };
  }
}

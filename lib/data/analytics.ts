import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { MS_PER_DAY } from "@/lib/constants";
import { serverEnv } from "@/lib/env";
import { reportError } from "@/lib/report";
import { sample } from "./samples/analytics";

type Row = { label: string; value: number };
export type Analytics = {
  provider: "Vercel";
  visitors: number;
  pageviews: number;
  daily: { date: string; visitors: number; pageviews: number }[];
  pages: Row[];
  referrers: Row[];
  countries: Row[];
  devices: Row[];
};

// Vercel Web Analytics REST API: https://vercel.com/docs/analytics/web-analytics-api
const API = "https://api.vercel.com/v1/query/web-analytics/visits";
type VRow = Record<string, string | number | null>;

export async function getAnalytics(): Promise<Widget<Analytics>> {
  "use cache";
  cacheLife("days");
  const { token, projectId, teamId } = serverEnv().vercel;
  if (!token || !projectId) return { data: sample, sample: true };
  const headers = { Authorization: `Bearer ${token}` };
  const day = (t: number) => new Date(t).toISOString().slice(0, 10);
  const base = new URLSearchParams({
    projectId,
    since: day(Date.now() - 30 * MS_PER_DAY),
    until: day(Date.now()),
  });
  if (teamId) base.set("teamId", teamId);
  const by = async (dim: string): Promise<Row[]> => {
    const q = new URLSearchParams(base);
    q.set("by", dim);
    q.set("limit", "5");
    const { data } = await getJson<{ data: VRow[] }>(`${API}/aggregate?${q}`, { headers });
    return data.map((r) => ({ label: String(r[dim] || "(direct)"), value: Number(r.pageviews) }));
  };
  const daily = async () => {
    const q = new URLSearchParams(base);
    q.set("by", "day");
    q.set("limit", "31");
    const { data } = await getJson<{
      data: { timestamp: string; visitors: number; pageviews: number }[];
    }>(`${API}/aggregate?${q}`, { headers });
    return data.map((r) => ({
      date: r.timestamp.slice(0, 10),
      visitors: r.visitors,
      pageviews: r.pageviews,
    }));
  };
  try {
    const [total, series, pages, referrers, countries, devices] = await Promise.all([
      getJson<{ data: { pageviews: number; visitors: number } }>(`${API}/count?${base}`, {
        headers,
      }),
      daily(),
      by("requestPath"),
      by("referrerHostname"),
      by("country"),
      by("deviceType"),
    ]);
    return {
      sample: false,
      data: {
        provider: "Vercel",
        visitors: total.data.visitors,
        pageviews: total.data.pageviews,
        daily: series,
        pages,
        referrers,
        countries,
        devices,
      },
    };
  } catch (err) {
    reportError("analytics", err);
    return { data: sample, sample: true };
  }
}

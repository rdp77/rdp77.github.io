import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";
import { serverEnv } from "@/lib/env";
import { reportError } from "@/lib/report";
import { sample } from "./samples/wakatime";

type Slice = { name: string; percent: number; text: string };
export type Waka = {
  total: string; today: string; week: string; weekSeconds: number;
  languages: Slice[]; editors: Slice[]; os: Slice[]; categories: Slice[]; lastActivity: string;
  dailyAverage: string; bestDay: string;
  daily: { day: string; seconds: number }[];
  ai: { sessions: number; prompts: number; aiLines: number; humanLines: number; models: { name: string; lines: number }[] };
};

const pick = (xs: Slice[] = []) => xs.slice(0, 5).map(({ name, percent, text }) => ({ name, percent: Math.round(percent), text }));

type WakaStats = {
  total_seconds: number; human_readable_total: string; languages: Slice[]; editors: Slice[]; operating_systems: Slice[]; modified_at: string;
  categories?: Slice[]; human_readable_daily_average?: string; best_day?: { text: string; date: string };
  ai_sessions?: number; ai_prompt_events_total?: number; ai_additions?: number; human_additions?: number; ai_model_line_changes?: Record<string, number>;
};
type WakaSummary = { range: { date: string }; grand_total: { total_seconds: number } };

const API = "https://wakatime.com/api/v1/users/current";

function mapDaily(sums: WakaSummary[]): Waka["daily"] {
  if (!sums.length) return sample.daily;
  return sums.map((x) => ({ day: new Date(x.range.date + "T00:00:00Z").toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }), seconds: x.grand_total.total_seconds }));
}

function mapAi(w: WakaStats): Waka["ai"] {
  return {
    sessions: w.ai_sessions ?? 0, prompts: w.ai_prompt_events_total ?? 0, aiLines: w.ai_additions ?? 0, humanLines: w.human_additions ?? 0,
    models: Object.entries(w.ai_model_line_changes ?? {}).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([name, lines]) => ({ name, lines })),
  };
}

function formatLastActivity(modifiedAt: string | undefined): string {
  if (!modifiedAt) return "—";
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(modifiedAt)) + " WIB";
}

export async function getWakatime(): Promise<Widget<Waka>> {
  "use cache";
  cacheLife("hours");
  const { wakatimeKey: key } = serverEnv();
  if (!key) return { data: sample, sample: true };
  try {
    const headers = { Authorization: `Basic ${Buffer.from(key).toString("base64")}` };
    const [week, today, all, sums] = await Promise.all([
      getJson<{ data: WakaStats }>(`${API}/stats/last_7_days`, { headers }),
      getJson<{ data: { grand_total: { text: string } } }>(`${API}/status_bar/today`, { headers }),
      getJson<{ data: { text: string } }>(`${API}/all_time_since_today`, { headers }),
      getJson<{ data: WakaSummary[] }>(`${API}/summaries?range=last_7_days`, { headers }).catch(() => ({ data: [] as WakaSummary[] })),
    ]);
    const w = week.data;
    return {
      sample: false,
      data: {
        total: all.data.text, today: today.data.grand_total.text, week: w.human_readable_total, weekSeconds: w.total_seconds,
        languages: pick(w.languages), editors: pick(w.editors), os: pick(w.operating_systems),
        categories: pick(w.categories),
        daily: mapDaily(sums.data),
        ai: mapAi(w),
        dailyAverage: w.human_readable_daily_average ?? sample.dailyAverage,
        bestDay: w.best_day ? `${w.best_day.text} · ${w.best_day.date.slice(5)}` : "—",
        lastActivity: formatLastActivity(w.modified_at),
      },
    };
  } catch (err) {
    reportError("wakatime", err);
    return { data: sample, sample: true };
  }
}

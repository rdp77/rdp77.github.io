import { cacheLife } from "next/cache";
import { getJson, type Widget } from "@/lib/utils";

type Slice = { name: string; percent: number; text: string };
export type Waka = {
  total: string; today: string; week: string; weekSeconds: number;
  languages: Slice[]; editors: Slice[]; os: Slice[]; categories: Slice[]; lastActivity: string;
  dailyAverage: string; bestDay: string;
  daily: { day: string; seconds: number }[];
  ai: { sessions: number; prompts: number; aiLines: number; humanLines: number; models: { name: string; lines: number }[] };
};

const sample: Waka = {
  total: "2,140 hrs", today: "3 hrs 12 mins", week: "27 hrs 40 mins", weekSeconds: 27 * 3600 + 2400,
  languages: [
    { name: "TypeScript", percent: 42, text: "11 hrs 38 mins" }, { name: "PHP", percent: 24, text: "6 hrs 38 mins" },
    { name: "Dart", percent: 14, text: "3 hrs 52 mins" }, { name: "CSS", percent: 8, text: "2 hrs 12 mins" }, { name: "Other", percent: 12, text: "3 hrs 20 mins" },
  ],
  editors: [{ name: "VS Code", percent: 78, text: "21 hrs 34 mins" }, { name: "PhpStorm", percent: 22, text: "6 hrs 6 mins" }],
  os: [{ name: "Linux", percent: 100, text: "27 hrs 40 mins" }],
  categories: [{ name: "Coding", percent: 70, text: "19 hrs 20 mins" }, { name: "AI Coding", percent: 30, text: "8 hrs 20 mins" }],
  daily: [3, 4, 2.5, 5, 3.2, 1, 3.5].map((h, i) => ({ day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i], seconds: h * 3600 })),
  ai: { sessions: 120, prompts: 180, aiLines: 2400, humanLines: 800, models: [{ name: "Sonnet", lines: 1500 }, { name: "Hermes", lines: 900 }] },
  dailyAverage: "3 hrs 57 mins", bestDay: "5 hrs 10 mins",
  lastActivity: "Sample data",
};

const pick = (xs: Slice[] = []) => xs.slice(0, 5).map(({ name, percent, text }) => ({ name, percent: Math.round(percent), text }));

export async function getWakatime(): Promise<Widget<Waka>> {
  "use cache";
  cacheLife("hours");
  const key = process.env.WAKATIME_API_KEY;
  if (!key) return { data: sample, sample: true };
  try {
    const headers = { Authorization: `Basic ${Buffer.from(key).toString("base64")}` };
    const base = "https://wakatime.com/api/v1/users/current";
    const [week, today, all, sums] = await Promise.all([
      getJson<{ data: { total_seconds: number; human_readable_total: string; languages: Slice[]; editors: Slice[]; operating_systems: Slice[]; modified_at: string; categories?: Slice[]; human_readable_daily_average?: string; best_day?: { text: string; date: string }; ai_sessions?: number; ai_prompt_events_total?: number; ai_additions?: number; human_additions?: number; ai_model_line_changes?: Record<string, number> } }>(`${base}/stats/last_7_days`, { headers }),
      getJson<{ data: { grand_total: { text: string } } }>(`${base}/status_bar/today`, { headers }),
      getJson<{ data: { text: string } }>(`${base}/all_time_since_today`, { headers }),
      getJson<{ data: { range: { date: string }; grand_total: { total_seconds: number } }[] }>(`${base}/summaries?range=last_7_days`, { headers }).catch(() => ({ data: [] })),
    ]);
    const w = week.data;
    return {
      sample: false,
      data: {
        total: all.data.text, today: today.data.grand_total.text, week: w.human_readable_total, weekSeconds: w.total_seconds,
        languages: pick(w.languages), editors: pick(w.editors), os: pick(w.operating_systems),
        categories: pick(w.categories),
        daily: sums.data.length ? sums.data.map((x) => ({ day: new Date(x.range.date + "T00:00:00Z").toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }), seconds: x.grand_total.total_seconds })) : sample.daily,
        ai: {
          sessions: w.ai_sessions ?? 0, prompts: w.ai_prompt_events_total ?? 0, aiLines: w.ai_additions ?? 0, humanLines: w.human_additions ?? 0,
          models: Object.entries(w.ai_model_line_changes ?? {}).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([name, lines]) => ({ name, lines })),
        },
        dailyAverage: w.human_readable_daily_average ?? sample.dailyAverage,
        bestDay: w.best_day ? `${w.best_day.text} · ${w.best_day.date.slice(5)}` : "—",
        lastActivity: w.modified_at ? new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Jakarta", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(w.modified_at)) + " WIB" : "—",
      },
    };
  } catch {
    return { data: sample, sample: true };
  }
}

import type { Waka } from "../wakatime";

export const sample: Waka = {
  total: "2,140 hrs",
  today: "3 hrs 12 mins",
  week: "27 hrs 40 mins",
  weekSeconds: 27 * 3600 + 2400,
  languages: [
    { name: "TypeScript", percent: 42, text: "11 hrs 38 mins" },
    { name: "PHP", percent: 24, text: "6 hrs 38 mins" },
    { name: "Dart", percent: 14, text: "3 hrs 52 mins" },
    { name: "CSS", percent: 8, text: "2 hrs 12 mins" },
    { name: "Other", percent: 12, text: "3 hrs 20 mins" },
  ],
  editors: [
    { name: "VS Code", percent: 78, text: "21 hrs 34 mins" },
    { name: "PhpStorm", percent: 22, text: "6 hrs 6 mins" },
  ],
  os: [{ name: "Linux", percent: 100, text: "27 hrs 40 mins" }],
  categories: [
    { name: "Coding", percent: 70, text: "19 hrs 20 mins" },
    { name: "AI Coding", percent: 30, text: "8 hrs 20 mins" },
  ],
  daily: [3, 4, 2.5, 5, 3.2, 1, 3.5].map((h, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    seconds: h * 3600,
  })),
  ai: {
    sessions: 120,
    prompts: 180,
    aiLines: 2400,
    humanLines: 800,
    models: [
      { name: "Sonnet", lines: 1500 },
      { name: "Hermes", lines: 900 },
    ],
  },
  dailyAverage: "3 hrs 57 mins",
  bestDay: "5 hrs 10 mins",
  lastActivity: "Sample data",
};

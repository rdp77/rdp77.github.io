import type { Analytics } from "../analytics";
import { MS_PER_DAY } from "@/lib/constants";

export const sample: Analytics = {
  provider: "Vercel", visitors: 1840, pageviews: 5920,
  daily: Array.from({ length: 30 }, (_, i) => ({ date: new Date(Date.now() - (29 - i) * MS_PER_DAY).toISOString().slice(0, 10), visitors: 20 + ((i * 37) % 60), pageviews: 50 + ((i * 53) % 130) })),
  pages: [{ label: "/", value: 3200 }, { label: "/projects", value: 1100 }, { label: "/about", value: 820 }],
  referrers: [{ label: "google.com", value: 640 }, { label: "github.com", value: 410 }, { label: "x.com", value: 180 }],
  countries: [{ label: "Indonesia", value: 980 }, { label: "United States", value: 310 }, { label: "Singapore", value: 140 }],
  devices: [{ label: "desktop", value: 1100 }, { label: "mobile", value: 690 }, { label: "tablet", value: 50 }],
};

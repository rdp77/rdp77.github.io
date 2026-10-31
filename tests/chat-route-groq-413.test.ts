// Repro for Sentry PERSONAL-WEB-B ("Error: groq 413", POST /api/chat).
// Cause: ask() keeps only the LAST model's status. When every model fails, a 413 (request too
// large) from the final fallback is reported to Sentry even though earlier models returned 429
// (expected rate limit), and the user gets a 502 instead of the polite 429 message.
import { describe, it, expect, vi, beforeEach } from "vitest";

const reportError = vi.fn();
vi.mock("@/lib/report", () => ({ reportError }));
vi.mock("@toon-format/toon", () => ({ encode: () => "" }));
vi.mock("@/lib/profile", () => ({
  siteUrl: "", profile: { name: "Ravi" }, story: "", projects: [], skills: [],
  experience: [], education: [], achievements: [],
}));
const empty = { data: {}, sample: true };
vi.mock("@/lib/data/wakatime", () => ({ getWakatime: async () => empty }));
vi.mock("@/lib/data/github", () => ({ getGithub: async () => empty }));
vi.mock("@/lib/data/youtube", () => ({ getYoutube: async () => ({ videos: [] }) }));
vi.mock("@/lib/data/ethereum", () => ({ getEthereum: async () => empty }));
vi.mock("@/lib/data/analytics", () => ({ getAnalytics: async () => empty }));
vi.mock("@/lib/data/spotify", () => ({ getNowPlaying: async () => ({ playing: false }) }));
vi.mock("@/lib/data/status", () => ({ getStatus: async () => empty }));

const post = async (q: string) => {
  const { POST } = await import("@/app/api/chat/route");
  return POST(new Request("http://x/api/chat", { method: "POST", body: JSON.stringify({ q }) }));
};

describe("POST /api/chat when every Groq model fails", () => {
  beforeEach(() => {
    vi.resetModules();
    reportError.mockClear();
    process.env.GROQ_API_KEY = "test";
  });

  it("429, 429, 413 -> rate-limit response, nothing sent to Sentry", async () => {
    const statuses = [429, 429, 413];
    vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: statuses.shift()! })));
    const res = await post("what do you do? 1");
    expect(reportError).not.toHaveBeenCalled(); // FAILS today: reports "groq 413"
    expect(res.status).toBe(429);
  });

  it("413 on every model is reported once with the real status", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 413 })));
    const res = await post("what do you do? 2");
    expect(res.status).toBe(502);
    expect(reportError).toHaveBeenCalledTimes(1);
  });
});

import type { GH } from "../github";

export function sampleWeeks(): GH["weeks"] {
  let s = 7;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  return Array.from({ length: 53 }, () =>
    Array.from({ length: 7 }, () => {
      const r = rnd();
      const l = r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.85 ? 2 : r < 0.95 ? 3 : 4;
      return { l, label: `Sample · level ${l}` };
    }),
  );
}

export const sample: GH = {
  followers: 128,
  repos: 42,
  stars: 315,
  total: 1204,
  weeks: sampleWeeks(),
  joined: "2018-01-01T00:00:00Z",
  joinedYears: 8,
  streak: { current: 4, longest: 31 },
  busiest: { count: 24, date: "2025-03-14" },
  mix: { commits: 980, prs: 120, issues: 40, reviews: 64 },
  languages: [
    { name: "TypeScript", percent: 40 },
    { name: "PHP", percent: 30 },
    { name: "Go", percent: 20 },
    { name: "Python", percent: 10 },
  ],
  topRepos: [
    { name: "rdp77/sample", stars: 120, language: "TypeScript", url: "https://github.com/rdp77" },
  ],
  events: [
    {
      type: "Commit",
      text: "feat: add dashboard widgets",
      repo: "rdp77/rdp77.github.io",
      url: "https://github.com/rdp77",
    },
    {
      type: "PR",
      text: "Open pull request #12",
      repo: "rdp77/sample",
      url: "https://github.com/rdp77",
    },
    {
      type: "Issue",
      text: "Opened issue #3",
      repo: "rdp77/sample",
      url: "https://github.com/rdp77",
    },
  ],
};

/** Server-only env, read per call (not at module load) so it stays valid inside `"use cache"` functions. */
export function serverEnv() {
  const e = process.env;
  return {
    githubToken: e.GITHUB_TOKEN,
    wakatimeKey: e.WAKATIME_API_KEY,
    etherscanKey: e.ETHERSCAN_API_KEY,
    vercel: { token: e.VERCEL_TOKEN, projectId: e.VERCEL_PROJECT_ID, teamId: e.VERCEL_TEAM_ID },
    spotify: { id: e.SPOTIFY_CLIENT_ID, secret: e.SPOTIFY_CLIENT_SECRET, refresh: e.SPOTIFY_REFRESH_TOKEN },
  };
}

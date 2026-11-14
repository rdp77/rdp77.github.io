// One-off: node scripts/tiktok-token.mjs  -> prints TIKTOK_REFRESH_TOKEN.
// Needs TIKTOK_CLIENT_KEY/SECRET in .env and redirect URI https://rdp77.github.io/creators in Login Kit.
// TikTok only accepts https redirects, so paste the URL you land on back into the terminal.
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline/promises";

const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => [
      l.slice(0, l.indexOf("=")).trim(),
      l
        .slice(l.indexOf("=") + 1)
        .trim()
        .replace(/^["']|["']$/g, ""),
    ]),
);
const key = env.TIKTOK_CLIENT_KEY,
  secret = env.TIKTOK_CLIENT_SECRET;
if (!key || !secret) {
  console.error("TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET missing in .env");
  process.exit(1);
}

// Must match a Login Kit redirect URI byte for byte (override with TIKTOK_REDIRECT_URI in .env).
const redirect =
  env.TIKTOK_REDIRECT_URI ?? `${env.NEXT_PUBLIC_SITE_URL ?? "https://rdp77.github.io"}/creators`;
console.log("redirect_uri:", redirect);
const state = Math.random().toString(36).slice(2);
const url =
  "https://www.tiktok.com/v2/auth/authorize/?" +
  new URLSearchParams({
    client_key: key,
    response_type: "code",
    scope: "user.info.basic,user.info.stats,video.list",
    redirect_uri: redirect,
    state,
  });
console.log("1. Open this URL in your browser and approve:\n\n" + url + "\n");

const rl = createInterface({ input: process.stdin, output: process.stdout });
const back = new URL((await rl.question("2. Paste the full URL you were redirected to:\n> ")).trim());
rl.close();
const code = back.searchParams.get("code");
if (!code || back.searchParams.get("state") !== state) {
  console.error("No code or state mismatch:", back.search);
  process.exit(1);
}

const r = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    client_key: key,
    client_secret: secret,
    code,
    grant_type: "authorization_code",
    redirect_uri: redirect,
  }),
});
const j = await r.json();
console.log(j.refresh_token ? `\nTIKTOK_REFRESH_TOKEN=${j.refresh_token}` : j);

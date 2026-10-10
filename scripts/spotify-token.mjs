// One-off: node scripts/spotify-token.mjs  -> prints SPOTIFY_REFRESH_TOKEN.
// Needs SPOTIFY_CLIENT_ID/SECRET in .env and redirect URI http://127.0.0.1:8888/callback in the Spotify app.
import { readFileSync } from "node:fs";
import { createServer } from "node:http";

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
const id = env.SPOTIFY_CLIENT_ID,
  secret = env.SPOTIFY_CLIENT_SECRET;
if (!id || !secret) {
  console.error("SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET missing in .env");
  process.exit(1);
}

const redirect = "http://127.0.0.1:8888/callback";
const url =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({
    client_id: id,
    response_type: "code",
    redirect_uri: redirect,
    scope: "user-read-currently-playing",
  });
console.log("Open this URL in your browser and approve:\n\n" + url + "\n");

const server = createServer(async (req, res) => {
  const code = new URL(req.url, "http://127.0.0.1:8888").searchParams.get("code");
  if (!code) {
    res.end("No code.");
    return;
  }
  const r = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${id}:${secret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: redirect }),
  });
  const j = await r.json();
  res.end(j.refresh_token ? "Done. Check your terminal." : "Failed: " + JSON.stringify(j));
  console.log(j.refresh_token ? `SPOTIFY_REFRESH_TOKEN=${j.refresh_token}` : j);
  server.close();
});
server.listen(8888, "127.0.0.1");

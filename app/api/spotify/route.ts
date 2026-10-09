// Now-playing via Spotify Web API. Env: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN (scope: user-read-currently-playing).
import { serverEnv } from "@/lib/env";
import { reportError } from "@/lib/report";

type Creds = { id: string; secret: string; refresh: string };

let cached: { token: string; exp: number } | null = null;

async function accessToken({ id, secret, refresh }: Creds) {
  if (cached && cached.exp > Date.now() + 10_000) return cached.token;
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString("base64")}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: refresh }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`token ${res.status}`);
  const j = await res.json();
  cached = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return cached.token;
}

// Shared across all visitors: Spotify is hit at most once per TTL, so rate limits don't scale with traffic.
let last: { body: unknown; exp: number } | null = null;
const TTL = 10_000;

export async function GET() {
  const headers = { "Cache-Control": "no-store" };
  if (last && last.exp > Date.now()) return Response.json(last.body, { headers });
  const body = await fetchNowPlaying();
  last = { body, exp: Date.now() + TTL };
  return Response.json(body, { headers });
}

async function fetchNowPlaying() {
  const { id, secret, refresh } = serverEnv().spotify;
  if (!id || !secret || !refresh) return { configured: false, playing: false };
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${await accessToken({ id, secret, refresh })}` },
      cache: "no-store",
    });
    if (res.status === 204 || res.status >= 400) return { configured: true, playing: false };
    const j = await res.json();
    const t = j.item;
    if (!j.is_playing || !t || j.currently_playing_type !== "track") return { configured: true, playing: false };
    return {
      configured: true,
      playing: true,
      song: t.name,
      artist: t.artists.map((a: { name: string }) => a.name).join(", "),
      album: t.album.name,
      art: t.album.images[0]?.url ?? "",
      id: t.id,
      progress: j.progress_ms,
      duration: t.duration_ms,
      at: Date.now(),
    };
  } catch (err) {
    reportError("spotify", err);
    return { configured: true, playing: false };
  }
}

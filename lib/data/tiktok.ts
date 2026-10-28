import { cacheLife } from "next/cache";

type TtVideo = { id: string; title: string; thumb: string; url: string; views: number };
export type Tt = { videos: TtVideo[] };

const API = "https://open.tiktokapis.com/v2";

// Access tokens last 24h; the refresh token lives in env (TIKTOK_REFRESH_TOKEN).
async function accessToken() {
  const r = await fetch(`${API}/oauth/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key: process.env.TIKTOK_CLIENT_KEY ?? "",
      client_secret: process.env.TIKTOK_CLIENT_SECRET ?? "",
      grant_type: "refresh_token",
      refresh_token: process.env.TIKTOK_REFRESH_TOKEN ?? "",
    }),
  });
  const j = await r.json();
  if (!j.access_token) throw new Error(`tiktok token: ${j.error_description ?? r.status}`);
  return j.access_token as string;
}

export async function getTiktok(): Promise<Tt> {
  "use cache";
  cacheLife("hours");
  if (!process.env.TIKTOK_REFRESH_TOKEN) return { videos: [] };
  const token = await accessToken();
  const r = await fetch(`${API}/video/list/?fields=id,title,cover_image_url,share_url,view_count`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ max_count: 12 }),
  });
  if (!r.ok) throw new Error(`tiktok list ${r.status}`);
  const j = await r.json();
  return {
    videos: (j.data?.videos ?? []).map(
      (v: {
        id: string;
        title: string;
        cover_image_url: string;
        share_url: string;
        view_count: number;
      }) => ({
        id: v.id,
        title: v.title,
        thumb: v.cover_image_url,
        url: v.share_url,
        views: v.view_count,
      }),
    ),
  };
}

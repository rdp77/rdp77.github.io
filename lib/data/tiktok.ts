import { cacheLife } from "next/cache";

type TtVideo = { id: string; title: string; thumb: string; url: string; views: number };
type TtStats = { videos: number; followers: number; following: number; likes: number };
export type Tt = { videos: TtVideo[]; avatar?: string | null; stats?: TtStats | null };

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

// Stats need the user.info.stats scope; without it fall back to the avatar alone.
async function userInfo(token: string) {
  const get = (fields: string) =>
    fetch(`${API}/user/info/?fields=${fields}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((j) => j.data?.user);
  const u =
    (await get("avatar_url,follower_count,following_count,likes_count,video_count")) ??
    (await get("avatar_url"));
  return {
    avatar: (u?.avatar_url as string) ?? null,
    stats:
      u?.follower_count != null
        ? {
            videos: u.video_count,
            followers: u.follower_count,
            following: u.following_count,
            likes: u.likes_count,
          }
        : null,
  };
}

export async function getTiktok(): Promise<Tt> {
  "use cache";
  cacheLife("hours");
  if (!process.env.TIKTOK_REFRESH_TOKEN) return { videos: [] };
  const token = await accessToken();
  const user = await userInfo(token).catch(() => ({ avatar: null, stats: null }));
  const r = await fetch(`${API}/video/list/?fields=id,title,cover_image_url,share_url,view_count`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ max_count: 12 }),
  });
  if (!r.ok) throw new Error(`tiktok list ${r.status}`);
  const j = await r.json();
  return {
    ...user,
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

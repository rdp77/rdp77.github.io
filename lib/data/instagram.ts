import { cacheLife } from "next/cache";

type IgPost = { id: string; thumb: string; url: string; caption: string };
export type Ig = {
  posts: IgPost[];
  avatar: string | null;
  stats: { posts: number; followers: number; following: number } | null;
};

const API = "https://graph.instagram.com";

// Refreshing extends the same token another 60d (must be >24h old). Cached daily, so it
// runs far more often than the expiry; a failure (e.g. token too new) must not break the feed.
async function keepAlive(token: string) {
  "use cache";
  cacheLife("days");
  try {
    await fetch(`${API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`);
  } catch {}
}

// Instagram API with Instagram Login: long-lived token (60d) in INSTAGRAM_ACCESS_TOKEN.
export async function getInstagram(): Promise<Ig> {
  "use cache";
  cacheLife("hours");
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return { posts: [], avatar: null, stats: null };
  await keepAlive(token);
  const q = (p: string, fields: string) =>
    fetch(`${API}/${p}?fields=${fields}&access_token=${token}`).then((r) => {
      if (!r.ok) throw new Error(`instagram ${p} ${r.status}`);
      return r.json();
    });
  const [me, media] = await Promise.all([
    q("me", "profile_picture_url,followers_count,follows_count,media_count"),
    q("me/media", "id,media_type,media_url,thumbnail_url,permalink,caption&limit=12"),
  ]);
  return {
    avatar: me.profile_picture_url ?? null,
    stats: { posts: me.media_count, followers: me.followers_count, following: me.follows_count },
    posts: (media.data ?? []).map(
      (p: {
        id: string;
        media_url: string;
        thumbnail_url?: string;
        permalink: string;
        caption?: string;
      }) => ({
        id: p.id,
        thumb: p.thumbnail_url ?? p.media_url,
        url: p.permalink,
        caption: p.caption ?? "",
      }),
    ),
  };
}

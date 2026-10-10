import { cacheLife } from "next/cache";
import { reportError } from "@/lib/report";

type YtVideo = {
  id: string;
  title: string;
  thumb: string;
  views: number;
  likes: number | null;
  published: string;
};

const CHANNEL_ID = "UCgy1w-3_8D1VMfarucu2lrA";
export type Yt = { videos: YtVideo[]; avatar: string | null };

const API = "https://www.googleapis.com/youtube/v3";

// Official Data API v3 (~3 quota units/call).
async function viaApi(key: string): Promise<Yt> {
  const get = async (path: string) => {
    const r = await fetch(`${API}/${path}&key=${key}`, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) throw new Error(`youtube api ${r.status}`);
    return r.json();
  };
  const uploads = "UU" + CHANNEL_ID.slice(2);
  const [pl, ch] = await Promise.all([
    get(`playlistItems?part=contentDetails&maxResults=12&playlistId=${uploads}`),
    get(`channels?part=snippet&id=${CHANNEL_ID}`),
  ]);
  const ids = (pl.items ?? []).map((i: any) => i.contentDetails.videoId).join(",");
  const vids = await get(`videos?part=snippet,statistics&id=${ids}`);
  const byId = new Map<string, any>((vids.items ?? []).map((v: any) => [v.id, v]));
  const videos = (pl.items ?? []).flatMap((i: any) => {
    const v = byId.get(i.contentDetails.videoId);
    if (!v) return [];
    return [
      {
        id: v.id,
        title: v.snippet.title,
        thumb: `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`,
        views: Number(v.statistics.viewCount ?? 0),
        likes: v.statistics.likeCount ? Number(v.statistics.likeCount) : null,
        published: v.snippet.publishedAt,
      },
    ];
  });
  const avatar = ch.items?.[0]?.snippet?.thumbnails?.medium?.url ?? null;
  return { videos, avatar };
}

// Throws on failure so "use cache" never stores an empty result for hours.
export async function getYoutube(): Promise<Yt> {
  "use cache";
  cacheLife("hours");
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) throw new Error("YOUTUBE_API_KEY not set");
  return viaApi(key);
}

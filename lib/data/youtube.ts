import { cacheLife } from "next/cache";
import { reportError } from "@/lib/report";

export type YtVideo = { id: string; title: string; thumb: string; views: number; likes: number | null; published: string };

const CHANNEL_ID = "UCgy1w-3_8D1VMfarucu2lrA";
const tag = (xml: string, re: RegExp) => xml.match(re)?.[1] ?? "";
const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");

// Public RSS feed: no API key, latest 15 videos with views/likes.
export type Yt = { videos: YtVideo[]; avatar: string | null };

export async function getYoutube(): Promise<Yt> {
  "use cache";
  cacheLife("hours");
  try {
    const [res, page] = await Promise.all([
      fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`, { signal: AbortSignal.timeout(8000) }),
      fetch("https://www.youtube.com/@ravidwiputra", { headers: { "User-Agent": "Mozilla/5.0", Cookie: "CONSENT=YES+1" }, signal: AbortSignal.timeout(8000) }).then((r) => r.text()).catch(() => ""),
    ]);
    if (!res.ok) return { videos: [], avatar: null };
    const xml = await res.text();
    const avatar = page.match(/<meta property="og:image" content="([^"]+)"/)?.[1].replace(/=s\d+/, "=s96") ?? null;
    const videos = xml.split("<entry>").slice(1, 7).map((e) => {
      const id = tag(e, /<yt:videoId>([^<]+)/);
      const likes = tag(e, /starRating count="(\d+)"/);
      return {
        id,
        title: decode(tag(e, /<title>([^<]+)/)),
        thumb: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
        views: Number(tag(e, /statistics views="(\d+)"/)),
        likes: likes ? Number(likes) : null,
        published: tag(e, /<published>([^<]+)/),
      };
    });
    return { videos, avatar };
  } catch (err) {
    reportError("youtube", err);
    return { videos: [], avatar: null };
  }
}

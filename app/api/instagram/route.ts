import { getInstagram } from "@/lib/data/instagram";
import { reportError } from "@/lib/report";

const CDN = "public, s-maxage=3600, stale-while-revalidate=86400";

export async function GET() {
  try {
    return Response.json(await getInstagram(), { headers: { "Cache-Control": CDN } });
  } catch (err) {
    reportError("instagram", err);
    return Response.json({ posts: [], avatar: null, stats: null });
  }
}

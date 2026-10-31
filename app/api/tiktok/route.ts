import { getTiktok } from "@/lib/data/tiktok";
import { reportError } from "@/lib/report";

const CDN = "public, s-maxage=3600, stale-while-revalidate=86400";

export async function GET() {
  try {
    return Response.json(await getTiktok(), { headers: { "Cache-Control": CDN } });
  } catch (err) {
    reportError("tiktok", err);
    return Response.json({ videos: [] });
  }
}

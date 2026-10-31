import { getYoutube } from "@/lib/data/youtube";
import { reportError } from "@/lib/report";

const CDN = "public, s-maxage=3600, stale-while-revalidate=86400";

export async function GET() {
  try {
    return Response.json(await getYoutube(), { headers: { "Cache-Control": CDN } });
  } catch (err) {
    reportError("youtube", err);
    return Response.json({ videos: [], avatar: null });
  }
}

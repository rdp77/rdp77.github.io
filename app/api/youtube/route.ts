import { getYoutube } from "@/lib/data/youtube";
import { reportError } from "@/lib/report";

export async function GET() {
  try {
    return Response.json(await getYoutube());
  } catch (err) {
    reportError("youtube", err);
    return Response.json({ videos: [], avatar: null });
  }
}

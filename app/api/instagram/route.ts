import { getInstagram } from "@/lib/data/instagram";
import { reportError } from "@/lib/report";

export async function GET() {
  try {
    return Response.json(await getInstagram());
  } catch (err) {
    reportError("instagram", err);
    return Response.json({ posts: [], avatar: null, stats: null });
  }
}

import { getTiktok } from "@/lib/data/tiktok";
import { reportError } from "@/lib/report";

export async function GET() {
  try {
    return Response.json(await getTiktok());
  } catch (err) {
    reportError("tiktok", err);
    return Response.json({ videos: [] });
  }
}

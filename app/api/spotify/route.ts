import { getNowPlaying } from "@/lib/data/spotify";

export async function GET() {
  return Response.json(await getNowPlaying(), { headers: { "Cache-Control": "no-store" } });
}

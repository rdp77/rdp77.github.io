import { connection } from "next/server";
import { getNowPlaying } from "@/lib/data/spotify";

export async function GET() {
  await connection();
  return Response.json(await getNowPlaying(), { headers: { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=30" } });
}

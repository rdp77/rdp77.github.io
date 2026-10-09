import { getYoutube } from "@/lib/data/youtube";

export async function GET() {
  return Response.json(await getYoutube());
}

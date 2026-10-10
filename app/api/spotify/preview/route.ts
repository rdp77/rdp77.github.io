// 30s preview clip for a track via the public iTunes Search API (Spotify removed preview_url).
export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get("q")?.slice(0, 200);
  if (!q) return Response.json({ url: null }, { status: 400 });
  try {
    const res = await fetch(
      `https://itunes.apple.com/search?${new URLSearchParams({ term: q, media: "music", entity: "song", limit: "1" })}`,
      { next: { revalidate: 86_400 } },
    );
    const j = await res.json();
    const url: string | null = j.results?.[0]?.previewUrl ?? null;
    return Response.json({ url }, { headers: { "Cache-Control": "public, max-age=86400" } });
  } catch {
    return Response.json({ url: null });
  }
}

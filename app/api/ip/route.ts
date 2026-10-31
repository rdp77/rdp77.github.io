import { connection } from "next/server";

const dec = (v: string | null) => {
  if (!v) return null;
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
};

// Echoes the caller's own IP + geo (Vercel edge headers). Nothing is stored or logged.
export async function GET(req: Request) {
  await connection();
  const h = req.headers;
  const ip =
    h.get("x-vercel-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-forwarded-for")?.split(",")[0].trim() ||
    h.get("x-real-ip") ||
    null;
  const code = h.get("x-vercel-ip-country");
  let country: string | null = null;
  try {
    country = code ? (new Intl.DisplayNames("en", { type: "region" }).of(code) ?? code) : null;
  } catch {
    country = code;
  }
  let isp: string | null = null;
  let geo: { city?: string; region?: string } = {};
  if (ip) {
    try {
      const r = await fetch(`https://ipwho.is/${ip}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(4000),
      });
      const j = await r.json();
      if (j.success) {
        isp = j.connection?.isp || j.connection?.org || null;
        geo = { city: j.city, region: j.region };
      }
    } catch {}
  }
  return Response.json(
    {
      isp,
      ip,
      version: ip ? (ip.includes(":") ? "IPv6" : "IPv4") : null,
      country,
      countryCode: code,
      region: geo.region || dec(h.get("x-vercel-ip-country-region")),
      city: dec(h.get("x-vercel-ip-city")) || geo.city || null,
      timezone: h.get("x-vercel-ip-timezone"),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

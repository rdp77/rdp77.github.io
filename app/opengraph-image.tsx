import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile, siteHost } from "@/lib/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toDataUri = async (file: string, mime: string) =>
  `data:${mime};base64,${(await readFile(path.join(process.cwd(), "public", file))).toString("base64")}`;

export default async function Image() {
  const bg = await toDataUri("og-bg.png", "image/png");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#000",
        color: "#f5f5f5",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={bg} alt="" width={1200} height={630} style={{ position: "absolute", inset: 0 }} />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 230,
          background: "linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 72,
          right: 72,
          bottom: 56,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 26, marginTop: 10, color: "#b4b4b4" }}>
            {`${profile.role} · Surabaya, Indonesia`}
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#9a9a9a", letterSpacing: 1 }}>{siteHost}</div>
      </div>
    </div>,
    size,
  );
}

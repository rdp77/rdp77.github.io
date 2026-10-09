import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0d0d0d", color: "#fff" }}>
        <div style={{ fontSize: 76, fontWeight: 600 }}>{profile.name}</div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#a3a3a3" }}>{`${profile.role} · Surabaya, Indonesia`}</div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#737373" }}>rdp77.github.io</div>
      </div>
    ),
    size,
  );
}

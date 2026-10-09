import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.handle,
    description: profile.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d0d",
    theme_color: "#0d0d0d",
    icons: [{ src: "/logo-light.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

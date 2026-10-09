import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/creators", "/about", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`, changeFrequency: "weekly", priority: p === "" ? 1 : 0.7,
  }));
}

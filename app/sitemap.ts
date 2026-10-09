import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/projects", "/creators", "/about", "/contact"].map((p) => ({
    url: `${siteUrl}${p}`, lastModified, changeFrequency: p === "" ? "daily" : "monthly", priority: p === "" ? 1 : 0.7,
  }));
}

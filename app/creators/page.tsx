import type { Metadata } from "next";
import { JsonLd, breadcrumb, pageMeta } from "@/lib/seo";
import { Creators } from "@/components/sections/creators";

export const metadata: Metadata = pageMeta(
  "Creators",
  "Content by Moh Ravi Dwi Putra on YouTube, TikTok and Instagram about software, tech and building in public.",
  "/creators",
);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb(["Creators", "/creators"])} />

      <Creators />
    </>
  );
}

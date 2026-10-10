import type { Metadata } from "next";
import { JsonLd, breadcrumb, pageMeta, projectsList } from "@/lib/seo";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = pageMeta(
  "Projects",
  "Selected web, mobile, desktop and networking projects by Moh Ravi Dwi Putra: Laravel, Flutter, Next.js and more.",
  "/projects",
);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb(["Projects", "/projects"])} />
      <JsonLd data={projectsList} />
      <Projects />
    </>
  );
}

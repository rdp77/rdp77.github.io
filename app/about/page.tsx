import type { Metadata } from "next";
import { JsonLd, breadcrumb, pageMeta, profilePage } from "@/lib/seo";
import { About } from "@/components/sections/about";

export const metadata: Metadata = pageMeta("About", "Story, skills, experience, education and certifications of Moh Ravi Dwi Putra, a software engineer from Surabaya, Indonesia.", "/about");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb(["About", "/about"])} />
      <JsonLd data={profilePage} />
      <About />
    </>
  );
}

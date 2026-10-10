import type { Metadata } from "next";
import { JsonLd, breadcrumb, pageMeta, contactPage } from "@/lib/seo";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = pageMeta(
  "Contact",
  "Get in touch with Moh Ravi Dwi Putra for software engineering projects, collaboration and freelance work.",
  "/contact",
);

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumb(["Contact", "/contact"])} />
      <JsonLd data={contactPage} />
      <Contact />
    </>
  );
}

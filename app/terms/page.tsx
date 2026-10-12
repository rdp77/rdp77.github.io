import type { Metadata } from "next";
import { Section } from "@/components/ui/primitives";
import { profile, siteHost, siteUrl } from "@/lib/profile";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Terms of Service",
  `Terms of use for ${siteHost}.`,
  "/terms",
);

export default function Page() {
  return (
    <Section id="terms" title="Terms of Service" h1>
      <div className="space-y-4 text-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-fg">
        <p>Last updated: 12 October 2026.</p>
        <p>
          By using {siteUrl} (the &quot;site&quot;), a personal portfolio of Moh Ravi Dwi Putra, you
          agree to these terms.
        </p>
        <h2>Use of the site</h2>
        <p>
          The site is provided for information about my work. Use it lawfully and do not attempt to
          disrupt it, scrape it at scale, or abuse its contact form, chat or APIs.
        </p>
        <h2>Content</h2>
        <p>
          Unless stated otherwise, the content is mine. Videos, logos and other material from
          YouTube, TikTok, GitHub and other services belong to their respective owners.
        </p>
        <h2>AI chat</h2>
        <p>
          The chat assistant is automated and may give incorrect answers. It is not professional
          advice. Do not submit sensitive information, and do not use it to generate harmful content
          or to abuse the service.
        </p>
        <h2>No warranty</h2>
        <p>
          The site is provided &quot;as is&quot; without warranties. Live data may be delayed or
          unavailable, and I am not liable for any loss from using it.
        </p>
        <h2>Contact</h2>
        <p>Questions: {profile.email}.</p>
      </div>
    </Section>
  );
}

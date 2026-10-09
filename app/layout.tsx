import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { ThemeShell } from "@/components/theme-shell";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { Motion } from "@/components/ui/motion";
import { profile, siteUrl } from "@/lib/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — ${profile.role}`, template: `%s · ${profile.name}` },
  description: profile.tagline,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: profile.name, title: `${profile.name} — ${profile.role}`, description: profile.tagline },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.role}`, description: profile.tagline },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  sameAs: profile.socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} antialiased`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-inverse-bg focus:px-4 focus:py-2 focus:text-inverse-fg">Skip to content</a>
        <Motion>
          <ThemeShell>
            <Nav />
            <main id="main" className="flex-1">{children}</main>
            <Footer />
          </ThemeShell>
        </Motion>
        <Cursor />
        <Analytics />
      </body>
    </html>
  );
}

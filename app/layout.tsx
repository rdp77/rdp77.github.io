import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { ThemeShell } from "@/components/theme-shell";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { Motion } from "@/components/ui/motion";
import { profile, siteUrl } from "@/lib/profile";
import { JsonLd, keywords, siteDescription, siteGraph } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — ${profile.role}`, template: `%s · ${profile.name}` },
  description: siteDescription,
  keywords,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  other: { "geo.region": "ID-JI", "geo.placename": "Surabaya", "geo.position": "-7.2575;112.7521", ICBM: "-7.2575, 112.7521" },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/logo-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/logo-light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: { type: "website", url: siteUrl, siteName: profile.name, title: `${profile.name} — ${profile.role}`, description: siteDescription, locale: "en_US" },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.role}`, description: siteDescription },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} antialiased`}>
      <body>
        <JsonLd data={siteGraph} />
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

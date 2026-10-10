import type { Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/nav";
import { ThemeShell } from "@/components/theme-shell";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
import { TerminalProvider, TerminalFab, Terminal } from "@/components/terminal/terminal";
import { Motion } from "@/components/ui/motion";
import { JsonLd, siteGraph, siteMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${mono.variable} antialiased`}>
      <body suppressHydrationWarning>
        <TerminalProvider>
          <JsonLd data={siteGraph} />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-inverse-bg focus:px-4 focus:py-2 focus:text-inverse-fg"
          >
            Skip to content
          </a>
          <Motion>
            <ThemeShell>
              <Nav />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
            </ThemeShell>
          </Motion>
          <Cursor />
          <Analytics />
          <TerminalFab />
          <Terminal />
        </TerminalProvider>
      </body>
    </html>
  );
}

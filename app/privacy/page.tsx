import type { Metadata } from "next";
import { Section } from "@/components/ui/primitives";
import { profile, siteHost, siteUrl } from "@/lib/profile";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Privacy Policy",
  `How ${siteHost} handles personal data, including data accessed through the TikTok Display API.`,
  "/privacy",
);

export default function Page() {
  return (
    <Section id="privacy" title="Privacy Policy" h1>
      <div className="space-y-4 text-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-fg">
        <p>Last updated: 12 October 2026.</p>
        <p>
          This policy covers {siteUrl}, a personal portfolio run by Moh Ravi Dwi Putra (the
          &quot;site&quot;).
        </p>
        <h2>Data collected</h2>
        <p>
          The site has no accounts. If you use the contact form, the name, email and message you
          submit are sent to me by email through Web3Forms and are used only to reply to you. The
          form is protected by hCaptcha, which may process your IP address and browser data and set
          cookies under its own policy.
        </p>
        <p>
          Anonymous page-view statistics are collected by Vercel Analytics. Errors are reported to
          Sentry, which may receive technical data such as your IP address, browser and the page
          where the error happened. I do not use either to identify visitors.
        </p>
        <h2>IP lookup</h2>
        <p>
          The "Your connection" widget on the home page shows your own public IP address, ISP and
          approximate location. Your IP is requested from ipify by your browser and sent by the
          server to ipwho.is to find the ISP and location. The result is shown only to you; I do not
          store or log it. Both services apply their own privacy policies.
        </p>
        <h2>AI chat</h2>
        <p>
          Questions you type into the chat or terminal assistant are sent to a third-party AI
          provider (Groq, via OpenRouter) to generate an answer. Do not enter personal or sensitive
          information. I do not store the messages; answers are cached briefly in server memory only
          to save resources. Answers may be inaccurate.
        </p>
        <h2>TikTok and Instagram data</h2>
        <p>
          The Creators page uses the TikTok Display API and the Instagram API to show public content
          and statistics of my own accounts (profile picture, post or video list, thumbnails,
          captions, links, follower and view counts) with my authorization. No data of visitors or
          other users of these platforms is collected. The data is cached temporarily on the server
          for display only and is not sold, shared or used for advertising.
        </p>
        <h2>Third parties</h2>
        <p>
          The site may load content or data from YouTube, GitHub, Spotify, WakaTime, Etherscan,
          ipify, ipwho.is, Discord (Lanyard), Groq, OpenRouter, TikTok, Instagram (Meta), hCaptcha
          and similar services. Their own privacy policies apply to that content.
        </p>
        <h2>Your rights</h2>
        <p>
          To ask about or delete any message you sent me,{" "}
          {profile.email ? `contact ${profile.email}.` : "use the contact form."}
        </p>
        <h2>Changes</h2>
        <p>This policy may be updated; the date above shows the latest revision.</p>
      </div>
    </Section>
  );
}

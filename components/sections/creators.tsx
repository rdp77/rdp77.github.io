"use client";

import { Tabs } from "radix-ui";
import { Heart, MessageCircle, Share2, Play, Bookmark, Eye, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { m } from "motion/react";
import { Section } from "@/components/ui/primitives";
import { profile } from "@/lib/profile";
import type { Yt } from "@/lib/data/youtube";
import { SocialIcon } from "@/components/social-icon";

const soon = <span className="rounded-sm bg-carbon px-2 py-0.5 font-mono text-xs text-white">Coming soon</span>;
const thumb = "bg-gradient-to-br from-wisteria to-tint";
const link = (l: string) => profile.socials.find((s) => s.label === l)?.href ?? "#";

// Remote channel photo; falls back to the local avatar if it fails to load.
function Avatar({ src }: { src: string }) {
  const [url, setUrl] = useState(src);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt="" width={40} height={40} onError={() => setUrl("/avatar.jpg")} className="size-10 rounded-full object-cover" />;
}

function Head({ platform, live, avatar }: { platform: string; live?: boolean; avatar?: string | null }) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-line p-4">
      {avatar
        ? <Avatar src={avatar} />
        : <span className="grid size-10 place-items-center bg-carbon text-white"><SocialIcon label={platform} /></span>}
      <div className="min-w-0"><p className="font-medium">@{link(platform).split("/").pop()?.replace("@", "")}</p><p className="text-xs text-faint">{platform} · {live ? "latest videos" : "posts will appear here"}</p></div>
      <span className="ml-auto flex items-center gap-3">{!live && soon}<a href={link(platform)} target="_blank" rel="noopener noreferrer" className="border border-fg px-3 py-1.5 text-xs font-medium hover:bg-tint">Follow</a></span>
    </div>
  );
}

// TikTok: vertical 9:16 clips
const TikTok = () => (
  <div className="border border-line">
    <Head platform="TikTok" />
    <ul className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4">
      {[0, 1, 2, 3].map((i) => (
        <li key={i} className={`relative aspect-[9/16] ${thumb} ${i > 1 ? "max-sm:hidden" : ""} ${i === 3 ? "max-lg:hidden" : ""}`}>
          <Play className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-fg/60" aria-hidden />
          <div className="absolute bottom-2 left-2 right-2 space-y-1.5" aria-hidden><div className="h-2 w-3/4 bg-fg/20" /><div className="h-2 w-1/2 bg-fg/20" /></div>
          <div className="absolute bottom-3 right-2 hidden flex-col items-center gap-3 text-fg/60 sm:flex" aria-hidden><Heart size={16} /><MessageCircle size={16} /><Share2 size={16} /></div>
        </li>
      ))}
    </ul>
  </div>
);

// YouTube: live 16:9 cards from the channel's public feed
const nf = new Intl.NumberFormat("en", { notation: "compact" });
const YouTube = ({ videos, avatar }: Yt) => (
  <div className="border border-line">
    <Head platform="YouTube" live={videos.length > 0} avatar={avatar} />
    {videos.length === 0 ? <p className="p-4 text-sm text-muted">Videos unavailable right now.</p> : (
      <ul className="grid gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <li key={v.id}>
            <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-video overflow-hidden bg-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.thumb} alt="" loading="lazy" className="size-full object-cover transition-transform group-hover:scale-105" />
                <Play className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100" aria-hidden />
              </div>
              <p className="mt-3 line-clamp-2 text-sm font-medium group-hover:text-violet">{v.title}</p>
              <p className="mt-1 flex items-center gap-3 text-xs text-faint">
                <span className="inline-flex items-center gap-1"><Eye size={12} />{nf.format(v.views)} views</span>
                {v.likes != null && <span className="inline-flex items-center gap-1"><ThumbsUp size={12} />{nf.format(v.likes)}</span>}
                <time dateTime={v.published}>{new Date(v.published).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" })}</time>
              </p>
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// Instagram: profile header + square grid
const Instagram = () => (
  <div className="border border-line">
    <Head platform="Instagram" />
    <div className="grid grid-cols-3 border-b border-line text-center text-sm">
      {["Posts", "Followers", "Following"].map((l) => <div key={l} className="p-3"><p className="font-mono">—</p><p className="text-xs text-faint">{l}</p></div>)}
    </div>
    <ul className="grid grid-cols-3 gap-1 p-1">
      {Array.from({ length: 6 }, (_, i) => (
        <li key={i} className={`group relative aspect-square ${thumb}`}>
          <Bookmark className="absolute right-2 top-2 size-4 text-fg/40" aria-hidden />
        </li>
      ))}
    </ul>
  </div>
);

// Replace a tab's `content` with a real embed later; nothing else changes.
export function Creators({ yt }: { yt: Yt }) {
  const tabs = [
    { id: "tiktok", label: "TikTok", content: <TikTok /> },
    { id: "youtube", label: "YouTube", content: <YouTube {...yt} /> },
    { id: "instagram", label: "Instagram", content: <Instagram /> },
  ];
  return (
    <Section h1 id="creators" title="Content & community">
      <p className="-mt-6 mb-8 max-w-xl text-muted">YouTube shows my latest videos live; TikTok and Instagram layouts are placeholders until content goes live.</p>
      <Tabs.Root defaultValue="tiktok">
        <Tabs.List aria-label="Platforms" className="flex overflow-x-auto overflow-y-hidden border-b border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-line">
          {tabs.map((t) => (
            <Tabs.Trigger key={t.id} value={t.id} className="-mb-px whitespace-nowrap border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted hover:text-fg data-[state=active]:border-violet data-[state=active]:text-fg">{t.label}</Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((t) => <Tabs.Content key={t.id} value={t.id} className="pt-6"><m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>{t.content}</m.div></Tabs.Content>)}
      </Tabs.Root>
    </Section>
  );
}

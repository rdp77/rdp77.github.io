"use client";

import { Tabs } from "radix-ui";
import { Play, Eye, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { m } from "motion/react";
import { Section } from "@/components/ui/primitives";
import { profile } from "@/lib/profile";
import type { Yt } from "@/lib/data/youtube";
import type { Tt } from "@/lib/data/tiktok";
import type { Ig } from "@/lib/data/instagram";
import { SocialIcon } from "@/components/social-icon";

const soon = (
  <span className="rounded-sm bg-carbon px-2 py-0.5 font-mono text-xs text-white">Coming soon</span>
);
const link = (l: string) => profile.socials.find((s) => s.label === l)?.href ?? "#";

// Remote channel photo; falls back to the local avatar if it fails to load.
function Avatar({ src }: { src: string }) {
  const [url, setUrl] = useState(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt=""
      width={40}
      height={40}
      onError={() => setUrl("/avatar.jpg")}
      className="size-10 rounded-full object-cover"
    />
  );
}

function Head({
  platform,
  live,
  avatar,
}: {
  platform: string;
  live?: boolean;
  avatar?: string | null;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-line p-4">
      {avatar ? (
        <Avatar src={avatar} />
      ) : (
        <span className="grid size-10 place-items-center bg-carbon text-white">
          <SocialIcon label={platform} />
        </span>
      )}
      <div className="min-w-0">
        <p className="font-medium">@{link(platform).split("/").pop()?.replace("@", "")}</p>
        <p className="text-xs text-faint">
          {platform} · {live ? "latest" : "unavailable"}
        </p>
      </div>
      <span className="ml-auto flex items-center gap-3">
        {!live && soon}
        <a
          href={link(platform)}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-fg px-3 py-1.5 text-xs font-medium hover:bg-tint"
        >
          Follow
        </a>
      </span>
    </div>
  );
}

// TikTok: vertical 9:16 cards from the Display API
function TikTok() {
  const [tt, setTt] = useState<Tt | null>(null);
  useEffect(() => {
    fetch("/api/tiktok")
      .then((r) => r.json())
      .then(setTt)
      .catch(() => setTt({ videos: [] }));
  }, []);
  const videos = tt?.videos ?? [];
  return (
    <div className="border border-line">
      <Head platform="TikTok" live={videos.length > 0} />
      {videos.length === 0 ? (
        <p className="p-4 text-sm text-muted">
          {tt ? "Videos unavailable right now." : "Loading videos…"}
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4">
          {videos.map((v) => (
            <li key={v.id}>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[9/16] overflow-hidden bg-line"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.thumb}
                  alt={v.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform group-hover:scale-105"
                />
                <Play
                  className="absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </a>
              <p className="mt-2 line-clamp-2 text-xs text-muted">{v.title}</p>
              <p className="flex items-center gap-1 text-xs text-faint">
                <Eye className="size-3" aria-hidden />
                {nf.format(v.views)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// YouTube: live 16:9 cards from the channel's public feed
const nf = new Intl.NumberFormat("en", { notation: "compact" });
function YouTube() {
  const [yt, setYt] = useState<Yt | null>(null);
  useEffect(() => {
    fetch("/api/youtube")
      .then((r) => r.json())
      .then(setYt)
      .catch(() => setYt({ videos: [], avatar: null }));
  }, []);
  const { videos, avatar } = yt ?? { videos: [], avatar: null };
  return (
    <div className="border border-line">
      <Head platform="YouTube" live={videos.length > 0} avatar={avatar} />
      {videos.length === 0 ? (
        <p className="p-4 text-sm text-muted">
          {yt ? "Videos unavailable right now." : "Loading videos…"}
        </p>
      ) : (
        <ul className="grid gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <li key={v.id}>
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden bg-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumb}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform group-hover:scale-105"
                  />
                  <Play
                    className="absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 drop-shadow transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 line-clamp-2 text-sm font-medium group-hover:text-violet">
                  {v.title}
                </p>
                <p className="mt-1 flex items-center gap-3 text-xs text-faint">
                  <span className="inline-flex items-center gap-1">
                    <Eye size={12} />
                    {nf.format(v.views)} views
                  </span>
                  {v.likes != null && (
                    <span className="inline-flex items-center gap-1">
                      <ThumbsUp size={12} />
                      {nf.format(v.likes)}
                    </span>
                  )}
                  <time dateTime={v.published}>
                    {new Date(v.published).toLocaleDateString("en", {
                      timeZone: "UTC",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Instagram: live profile stats + square grid
function Instagram() {
  const [ig, setIg] = useState<Ig | null>(null);
  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then(setIg)
      .catch(() => setIg({ posts: [], avatar: null, stats: null }));
  }, []);
  const { posts, avatar, stats } = ig ?? { posts: [], avatar: null, stats: null };
  const live = posts.length > 0;
  return (
    <div className="border border-line">
      <Head platform="Instagram" live={live} avatar={avatar} />
      <div className="grid grid-cols-3 border-b border-line text-center text-sm">
        {(
          [
            ["Posts", stats?.posts],
            ["Followers", stats?.followers],
            ["Following", stats?.following],
          ] as const
        ).map(([l, v]) => (
          <div key={l} className="p-3">
            <p className="font-mono">{v != null ? nf.format(v) : "—"}</p>
            <p className="text-xs text-faint">{l}</p>
          </div>
        ))}
      </div>
      {live ? (
        <ul className="grid grid-cols-3 gap-1 p-1">
          {posts.map((p) => (
            <li key={p.id} className="aspect-square overflow-hidden bg-line">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block size-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.thumb}
                  alt={p.caption.slice(0, 100)}
                  loading="lazy"
                  className="size-full object-cover transition-transform group-hover:scale-105"
                />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="p-4 text-sm text-muted">{ig ? "Posts unavailable right now." : "Loading posts…"}</p>
      )}
    </div>
  );
}

// Replace a tab's `content` with a real embed later; nothing else changes.
export function Creators() {
  const tabs = [
    { id: "tiktok", label: "TikTok", content: <TikTok /> },
    { id: "youtube", label: "YouTube", content: <YouTube /> },
    { id: "instagram", label: "Instagram", content: <Instagram /> },
  ];
  return (
    <Section h1 id="creators" title="Content & community">
      <p className="-mt-6 mb-8 max-w-xl text-muted">
        YouTube, TikTok and Instagram show my latest content live.
      </p>
      <Tabs.Root defaultValue="tiktok">
        <Tabs.List
          aria-label="Platforms"
          className="flex [scrollbar-width:none] overflow-x-auto overflow-y-hidden border-b border-line [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((t) => (
            <Tabs.Trigger
              key={t.id}
              value={t.id}
              className="-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm font-medium whitespace-nowrap text-muted hover:text-fg data-[state=active]:border-violet data-[state=active]:text-fg"
            >
              {t.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((t) => (
          <Tabs.Content key={t.id} value={t.id} className="pt-6">
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.content}
            </m.div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Card, Badge } from "@/components/ui/primitives";

type Track = {
  song: string;
  artist: string;
  album: string;
  art: string;
  id: string;
  start: number;
  end: number;
};

const mmss = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

// Live "now playing" via /api/spotify (Spotify Web API, server-side token).
export function SpotifyCard() {
  const [track, setTrack] = useState<Track | null>(null);
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const sp = await (await fetch("/api/spotify", { cache: "no-store" })).json();
        const start = sp.at - sp.progress;
        if (alive)
          setTrack(
            sp.playing
              ? {
                  song: sp.song,
                  artist: sp.artist,
                  album: sp.album,
                  art: sp.art,
                  id: sp.id,
                  start,
                  end: start + sp.duration,
                }
              : null,
          );
      } catch {
        if (alive) setTrack(null);
      } finally {
        if (alive) setReady(true);
      }
    };
    load();
    const poll = setInterval(load, 15_000);
    return () => {
      alive = false;
      clearInterval(poll);
    };
  }, []);

  useEffect(() => {
    if (!track) return;
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, [track]);

  const dur = track ? track.end - track.start : 0;
  const pos = track ? Math.min(Math.max(now - track.start, 0), dur) : 0;

  return (
    <Card title="Spotify" className="flex flex-col md:col-span-1">
      {!ready ? (
        <div
          className="min-h-64 flex-1 animate-pulse bg-tint"
          role="status"
          aria-label="Loading Spotify"
        />
      ) : !track ? (
        <div className="flex min-h-64 flex-1 flex-col items-center justify-center gap-2 border border-dashed border-line p-6 text-center">
          <span className="size-2 rounded-full bg-faint" aria-hidden />
          <p className="text-sm">Not listening right now</p>
          <p className="text-xs text-faint">Live from Spotify, updates every 15s</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <Badge tone="ok">
              <span className="pulse-dot mr-1.5 size-1.5 rounded-full bg-ok-fg" aria-hidden />
              Listening now
            </Badge>
            <span className="flex h-4 items-end gap-[3px]" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="eq-bar w-[3px] bg-violet"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              ))}
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={track.art}
            alt={`Album art, ${track.album}`}
            width={640}
            height={640}
            className="mt-4 aspect-square w-full border border-line object-cover"
          />
          <div className="mt-auto pt-5">
            <p className="text-xs text-faint">Now playing</p>
            <a
              href={`https://open.spotify.com/track/${track.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block truncate text-xl font-light tracking-tight transition-colors hover:text-violet sm:text-2xl"
            >
              {track.song}
            </a>
            <p className="mt-1 truncate text-sm text-muted">{track.artist}</p>
            <p className="truncate text-xs text-faint">{track.album}</p>
            <div
              className="mt-4"
              role="progressbar"
              aria-label="Track progress"
              aria-valuemin={0}
              aria-valuemax={dur}
              aria-valuenow={pos}
            >
              <div className="h-2 bg-line">
                <div
                  className="h-full bg-violet"
                  style={{ width: `${dur ? (pos / dur) * 100 : 0}%` }}
                />
              </div>
              <p className="mt-1.5 flex justify-between font-mono text-xs text-faint tabular-nums">
                <span>{mmss(pos)}</span>
                <span>{mmss(dur)}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

"use client";

import { useEffect, useState } from "react";

const LANYARD_URL = "https://api.lanyard.rest/v1/users/493350564785029142";
type State = "loading" | "online" | "offline";

// Discord "online" = online here; anything else (idle, dnd, offline, error) counts as offline.
export function Presence() {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const res = await fetch(LANYARD_URL, { cache: "no-store" });
        const json = await res.json();
        if (alive) setState(json?.data?.discord_status === "online" ? "online" : "offline");
      } catch {
        if (alive) setState("offline");
      }
    };
    load();
    const id = setInterval(load, 60_000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  const on = state === "online";
  return (
    <p
      role="status"
      aria-live="polite"
      className={`inline-flex items-center gap-2 border border-line bg-bg px-3 py-1.5 font-mono text-xs ${on ? "text-ok-fg" : "text-muted"}`}
    >
      <span className={`size-2 rounded-full ${on ? "pulse-dot bg-ok-fg" : "bg-faint"}`} aria-hidden />
      {state === "loading" ? "Checking presence…" : on ? "Online now" : "Offline"}
    </p>
  );
}

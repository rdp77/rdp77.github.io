"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/primitives";

type Info = {
  ip: string | null;
  isp: string | null;
  version: string | null;
  country: string | null;
  countryCode: string | null;
  region: string | null;
  city: string | null;
  timezone: string | null;
};

const btn =
  "rounded-sm border border-line px-3 py-2 text-sm transition-colors hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-2 min-h-11";

// Visitor's own public IP + location, from /api/ip (edge headers). Copy as IP only or full block.
export function IpCard() {
  const [info, setInfo] = useState<Info | null>(null);
  const [v4, setV4] = useState<string | null>(null);
  const [v6, setV6] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/ip", { cache: "no-store" })
      .then((r) => r.json())
      .then(setInfo)
      .catch(() => setFailed(true));
    const get = (u: string, set: (v: string) => void) =>
      fetch(u)
        .then((r) => r.text())
        .then((t) => set(t.trim()))
        .catch(() => {});
    get("https://api4.ipify.org", setV4);
    get("https://api6.ipify.org", setV6);
  }, []);

  const place = info && [info.city, info.region, info.country].filter(Boolean).join(", ");
  const rows: [string, string | null][] = info
    ? [
        ["IPv4", v4 ?? (info.version === "IPv4" ? info.ip : null)],
        ["IPv6", v6 ?? (info.version === "IPv6" ? info.ip : null)],
        ["ISP", info.isp],
        ["Country", info.country && `${info.country} (${info.countryCode})`],
        ["Region", info.region],
        ["City", info.city],
        ["Timezone", info.timezone],
      ]
    : [];
  const full = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const copy = async (text: string, what: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMsg(`${what} copied`);
    } catch {
      setMsg("Copy blocked by browser");
    }
    setTimeout(() => setMsg(""), 2500);
  };

  return (
    <Card title="Your connection" className="md:col-span-3">
      {failed || (info && !info.ip) ? (
        <p className="border border-dashed border-line p-6 text-sm text-faint">
          {failed ? "Could not read your IP right now." : "No IP in this environment (local dev)."}
        </p>
      ) : !info ? (
        <div className="h-24 animate-pulse bg-tint" role="status" aria-label="Loading your IP" />
      ) : (
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="min-w-0">
            <p className="text-xs text-faint">
              Your public IP{info.version && ` (${info.version})`}
            </p>
            <p className="mt-1 font-mono text-2xl tracking-tight break-all sm:text-4xl">
              {info.ip}
            </p>
            {info.isp && <p className="mt-3 text-sm">ISP: {info.isp}</p>}
            <p className="mt-1 text-sm">{place || "Location unavailable"}</p>
            {info.timezone && <p className="text-xs text-faint">{info.timezone}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" className={btn} onClick={() => copy(info.ip!, "IP")}>
              Copy IP
            </button>
            <button type="button" className={btn} onClick={() => copy(full, "Details")}>
              Copy with location
            </button>
            <span role="status" className="min-w-28 text-xs text-faint">
              {msg}
            </span>
          </div>
        </div>
      )}
      <p className="mt-5 text-xs text-faint">
        Read from your request headers, shown only to you, never stored. Location is approximate.
      </p>
    </Card>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

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
  "min-h-11 border border-line px-3 text-sm transition-colors hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-2";

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

  const rows: [string, string | null][] = info
    ? [
        ["IPv4", v4 ?? (info.version === "IPv4" ? info.ip : null)],
        ["IPv6", v6 ?? (info.version === "IPv6" ? info.ip : null)],
        ["ISP", info.isp],
        ["City", info.city],
        ["Region", info.region],
        ["Country", info.country && `${info.country} (${info.countryCode})`],
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
        <div className="h-40 animate-pulse bg-tint" role="status" aria-label="Loading your IP" />
      ) : (
        <>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {rows.slice(0, 2).map(([k, v]) => (
              <div key={k} className="flex min-w-0 flex-col gap-3 bg-bg p-4 sm:p-5">
                <p className="text-xs text-faint">{k} address</p>
                <p
                  className={cn(
                    "font-mono text-base tracking-tight break-all sm:text-lg",
                    !v && "text-faint",
                  )}
                >
                  {v ?? "Not detected"}
                </p>
                {v && (
                  <button
                    type="button"
                    className={cn(btn, "mt-auto self-start")}
                    onClick={() => copy(v, k)}
                  >
                    Copy {k}
                  </button>
                )}
              </div>
            ))}
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-5">
            {rows.slice(2).map(([k, v]) => (
              <div key={k} className="min-w-0">
                <dt className="text-xs text-faint">{k}</dt>
                <dd className="mt-1 text-sm break-words">{v || "Unknown"}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button type="button" className={btn} onClick={() => copy(full, "Details")}>
              Copy all details
            </button>
            <span role="status" className="text-xs text-faint">
              {msg}
            </span>
          </div>
        </>
      )}
      <p className="mt-5 text-xs text-faint">
        Read from your request headers, shown only to you, never stored. Location is approximate.
      </p>
    </Card>
  );
}

"use client";

import { useState } from "react";

export type HeatCell = { l: number; label: string }; // l: 0-4, -1 = empty slot
const MOBILE_WEEKS = 26; // below sm only the latest half year shows, so cells stay tappable
const shade = ["bg-line", "bg-violet/40", "bg-violet/60", "bg-violet/80", "bg-violet"];

// Year heatmap: cells stretch to fill the card; hover/focus shows a readout.
export function Heatmap({
  weeks,
  hint,
  aria,
}: {
  weeks: HeatCell[][];
  hint: string;
  aria: string;
}) {
  const [tip, setTip] = useState<string | null>(null);
  return (
    <div>
      <div role="img" aria-label={aria}>
        <div
          className="flex gap-[3px] sm:gap-[3px]"
          onMouseLeave={() => setTip(null)}
        >
          {weeks.map((w, i) => (
            <div
              key={i}
              className={`grid min-w-0 flex-1 content-start gap-[3px] ${i < weeks.length - MOBILE_WEEKS ? "max-sm:hidden" : ""}`}
            >
              {w.map((c, j) =>
                c.l < 0 ? (
                  <span key={j} className="aspect-square" />
                ) : (
                  <span
                    key={j}
                    onMouseEnter={() => setTip(c.label)}
                    onClick={() => setTip(c.label)}
                    className={`aspect-square origin-center transition-transform duration-150 hover:z-10 hover:scale-150 hover:outline hover:outline-1 hover:outline-fg motion-reduce:transition-none ${shade[Math.min(4, c.l)]}`}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <p
        className="mt-2 flex min-h-5 items-center justify-between gap-3 text-xs text-faint"
        aria-hidden
      >
        <span className="font-mono text-fg">
          {tip ?? hint}
          {!tip && <span className="sm:hidden"> · last 6 mo</span>}
        </span>
        <span className="flex items-center gap-1">
          Less
          {shade.map((s) => (
            <span key={s} className={`size-2.5 ${s}`} />
          ))}
          More
        </span>
      </p>
    </div>
  );
}

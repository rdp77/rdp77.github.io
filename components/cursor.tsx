"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE =
  "a,button,[role=button],summary,label,select,input,textarea,[data-cursor=hover]";

export function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const root = document.documentElement;
    const r = ring.current!,
      d = dot.current!;
    root.classList.add("has-cursor");
    let x = -100,
      y = -100,
      rx = x,
      ry = y,
      raf = 0;

    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      r.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      d.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      r.dataset.on = "1";
      d.dataset.on = "1";
      r.dataset.hover = (e.target as Element | null)?.closest?.(INTERACTIVE) ? "1" : "0";
    };
    const down = () => {
      r.dataset.down = "1";
    };
    const up = () => {
      r.dataset.down = "0";
    };
    const leave = () => {
      r.dataset.on = "0";
      d.dataset.on = "0";
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-pos" aria-hidden>
        <div className="cursor-ring" />
      </div>
      <div ref={dot} className="cursor-pos" aria-hidden>
        <div className="cursor-dot" />
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";

// Thin top bar: starts on internal link click, completes when the route changes.
export function NavProgress() {
  const path = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      const u = new URL(a.href, location.href);
      if (u.origin === location.origin && u.pathname !== location.pathname) setState("loading");
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  useEffect(() => {
    const a = setTimeout(() => setState((s) => (s === "loading" ? "done" : s)), 0);
    const b = setTimeout(() => setState("idle"), 350);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [path]);
  return (
    <AnimatePresence>
      {state !== "idle" && (
        <m.div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-violet"
          initial={{ scaleX: 0, opacity: 1 }} animate={{ scaleX: state === "done" ? 1 : 0.8, opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: state === "done" ? 0.2 : 8, ease: state === "done" ? "easeOut" : [0.1, 0.8, 0.2, 1] }} />
      )}
    </AnimatePresence>
  );
}

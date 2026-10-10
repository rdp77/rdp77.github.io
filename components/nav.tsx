"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Menu, X, User, Clapperboard, LayoutDashboard, FolderGit2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/profile";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/about", icon: User, label: "About" },
  { href: "/creators", icon: Clapperboard, label: "Creators" },
  { href: "/", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/projects", icon: FolderGit2, label: "Projects" },
  { href: "/contact", icon: Mail, label: "Contact" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const isActive = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md">
      <Container className="relative flex flex-wrap items-center justify-between gap-x-6 border-b border-line md:flex-nowrap">
        <Link href="/" className="flex h-14 items-center gap-2 font-mono text-sm font-medium md:h-16" onClick={() => setOpen(false)}>
          <Image src="/logo-light.svg" alt="" width={24} height={24} className="size-6" priority />
          {profile.handle}
        </Link>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}
          className="-mr-2 grid size-11 place-items-center rounded-sm hover:bg-tint md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <m.span key={open ? "x" : "m"} initial={{ opacity: 0, rotate: -90, scale: 0.7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.7 }} transition={{ duration: 0.15 }}>
              {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </m.span>
          </AnimatePresence>
        </button>
        <nav aria-label="Primary" className="hidden md:flex">
          {routes.map((r) => {
            const active = isActive(r.href);
            return (
              <Link key={r.href} href={r.href} aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative flex h-11 items-center whitespace-nowrap px-3 text-sm font-medium transition-colors md:h-16",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}>
                <span className={cn("absolute inset-x-1 inset-y-2 -z-10 rounded-sm transition-colors", active ? "bg-tint" : "group-hover:bg-tint")} aria-hidden />
                {active && <span className="mr-2 size-1.5 bg-violet" aria-hidden />}
                {r.label}
                <span className={cn("absolute inset-x-3 bottom-0 h-0.5 origin-left bg-violet transition-transform duration-200", active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-line")} aria-hidden />
              </Link>
            );
          })}
        </nav>
        <AnimatePresence>
          {open && (
            <m.nav id="mobile-menu" aria-label="Mobile" className="absolute inset-x-0 top-full overflow-hidden border-b border-line bg-bg md:hidden"
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
              <m.ul className="px-6 py-2" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } } }}>
                {routes.map((r) => {
                  const active = isActive(r.href);
                  return (
                    <m.li key={r.href} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }} className="border-b border-line last:border-b-0">
                      <Link href={r.href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}
                        className={cn("flex h-12 items-center gap-3 text-base font-medium", active ? "text-fg" : "text-muted active:text-fg")}>
                        <r.icon size={18} className={active ? "text-violet" : "text-muted"} aria-hidden />
                        {r.label}
                      </Link>
                    </m.li>
                  );
                })}
              </m.ul>
            </m.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}

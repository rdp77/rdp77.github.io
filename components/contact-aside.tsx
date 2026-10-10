"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Clock, Mail } from "lucide-react";
import { profile } from "@/lib/profile";
import { EmailLink } from "@/components/email-link";
import { SocialIcon } from "@/components/social-icon";

function LocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () =>
      setT(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: profile.timezone,
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    f();
    const id = setInterval(f, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono tabular-nums">{t || "--:--"}</span>;
}

const row = "flex items-center gap-3 border-b border-line py-3 text-sm last:border-b-0";

export function ContactAside() {
  return (
    <aside aria-label="Profile and links" className="min-w-0 space-y-8">
      <div className="border border-line p-5">
        <p className="text-lg font-medium">{profile.name}</p>
        <p className="text-sm text-muted">{profile.role}</p>
        <ul className="mt-4">
          <li className={row}>
            <MapPin size={16} className="text-faint" aria-hidden />
            <span className="text-faint">Based in</span>
            <span className="ml-auto">{profile.location}</span>
          </li>
          <li className={row}>
            <Clock size={16} className="text-faint" aria-hidden />
            <span className="text-faint">Local time</span>
            <span className="ml-auto">
              <LocalTime /> <span className="text-faint">· {profile.timezone}</span>
            </span>
          </li>
          <li className={row}>
            <Mail size={16} className="text-faint" aria-hidden />
            <span className="text-faint">Email</span>
            <span className="ml-auto min-w-0">
              <EmailLink className="text-sm" arrow="size-3.5" />
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-3 font-mono text-xs text-faint">Find me online</h2>
        <ul className="border-t border-line">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border-b border-line py-3 transition-colors hover:text-violet"
              >
                <SocialIcon label={s.label} />
                <span className="bg-gradient-to-r from-violet to-marigold bg-[length:0%_1px] bg-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]">
                  {s.label}
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="ml-auto -translate-x-1 translate-y-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

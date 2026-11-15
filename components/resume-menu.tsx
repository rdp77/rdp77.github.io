"use client";

import type { ReactNode } from "react";
import { DropdownMenu } from "radix-ui";
import { profile } from "@/lib/profile";

const options = [
  { label: "Designed version", note: "Visual layout", href: profile.resumeUrl },
  { label: "ATS version", note: "Plain text, job portals", href: profile.resumeAtsUrl },
];

export function ResumeMenu({ className, children }: { className: string; children: ReactNode }) {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className={className}>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={6}
          className="z-50 min-w-56 border border-line bg-bg p-1 text-fg"
        >
          {options.map((o) => (
            <DropdownMenu.Item key={o.href} asChild>
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block min-h-11 rounded-sm px-3 py-2 outline-none data-highlighted:bg-tint"
              >
                <span className="block text-sm font-medium">{o.label}</span>
                <span className="block text-xs text-muted">{o.note}</span>
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

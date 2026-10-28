"use client";

import { Tabs } from "radix-ui";
import { EmptyState, Badge } from "@/components/ui/primitives";
import type { GH } from "@/lib/data/github";

const tabs = [
  { id: "commits", label: "Commits" },
  { id: "prs", label: "Pull requests" },
  { id: "issues", label: "Issues" },
] as const;

const day = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function ActivityTabs({ activity }: { activity: GH["activity"] }) {
  return (
    <Tabs.Root defaultValue="commits">
      <Tabs.List
        aria-label="Recent GitHub activity"
        className="flex [scrollbar-width:none] overflow-x-auto overflow-y-hidden border-b border-line [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((t) => (
          <Tabs.Trigger
            key={t.id}
            value={t.id}
            className="-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm font-medium whitespace-nowrap text-muted hover:text-fg data-[state=active]:border-violet data-[state=active]:text-fg"
          >
            {t.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((t) => (
        <Tabs.Content key={t.id} value={t.id} className="pt-2">
          {activity[t.id].length === 0 ? (
            <EmptyState>No public {t.label.toLowerCase()} yet.</EmptyState>
          ) : (
            <ul className="divide-y divide-line text-sm">
              {activity[t.id].map((e) => (
                <li key={e.url} className="flex items-center gap-3 py-2">
                  {e.state && (
                    <Badge tone={e.state === "merged" ? "ok" : "neutral"}>{e.state}</Badge>
                  )}
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 flex-1 truncate hover:underline"
                  >
                    {e.text}
                  </a>
                  <span className="hidden font-mono text-xs text-faint sm:inline">{e.repo}</span>
                  <span className="font-mono text-xs text-faint">{day(e.date)}</span>
                </li>
              ))}
            </ul>
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

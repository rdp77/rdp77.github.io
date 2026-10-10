"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/profile";
import { Section, Badge, TechIcon } from "@/components/ui/primitives";
import { HoverLift } from "@/components/ui/motion";

const order = ["Web App", "Website", "Mobile", "Desktop", "Networking"];
const categories = ["All", ...order.filter((c) => projects.some((p) => p.category.includes(c)))];

export function Projects() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category.includes(active));
  return (
    <Section h1 id="projects" title="Things I've built">
      <div role="group" aria-label="Filter by category" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`border px-3 py-1.5 text-sm font-medium transition-colors ${active === c ? "border-fg bg-inverse-bg text-inverse-fg" : "border-line text-muted hover:text-fg"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.name}>
            <HoverLift className="h-full">
              <article className="flex h-full flex-col border border-line bg-bg">
                <div className="relative aspect-video bg-tint">
                  <Image
                    src={p.image}
                    alt={`${p.name} thumbnail`}
                    fill
                    sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-medium">{p.name}</h3>
                    <span className="flex flex-wrap justify-end gap-1">
                      {p.category.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                  <ul
                    className="mt-4 flex flex-wrap gap-3 text-muted"
                    aria-label="Technology stack"
                  >
                    {p.stack.map((s) => (
                      <li key={s}>
                        <TechIcon icon={s} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </HoverLift>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import { projects, type StackItem } from "@/lib/profile";
import { Section, Badge, TechIcon, btnGhost } from "@/components/ui/primitives";
import { Stagger, StaggerItem, HoverLift } from "@/components/ui/motion";
import { ExternalLink, Code2 } from "lucide-react";

const icon: Record<StackItem, string> = {
  nextjs: "siNextdotjs", react: "siReact", laravel: "siLaravel", flutter: "siFlutter", typescript: "siTypescript", tailwind: "siTailwindcss",
  mysql: "siMysql", postgresql: "siPostgresql", redis: "siRedis", docker: "siDocker", cloudflare: "siCloudflare", vercel: "siVercel", graphql: "siGraphql",
};

export function Projects() {
  return (
    <Section h1 id="projects" eyebrow="Projects" title="Things I've built">
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <StaggerItem key={p.name}>
            <HoverLift className="h-full">
              <article className="flex h-full flex-col border border-line bg-bg">
                {/* Thumbnail placeholder: swap for next/image when assets exist */}
                <div className="aspect-video bg-tint" role="img" aria-label={`${p.name} thumbnail placeholder`} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-medium">{p.name}</h3>
                    <Badge tone={p.status === "Live" ? "ok" : p.status === "Beta" ? "warn" : "neutral"}>{p.status}</Badge>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-3 text-muted" aria-label="Technology stack">
                    {p.stack.map((s) => <li key={s}><TechIcon icon={icon[s]} /></li>)}
                  </ul>
                  <div className="mt-5 flex gap-3">
                    {p.demo && <a className={`${btnGhost} !px-3 !py-1.5 text-sm`} href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} aria-hidden />Live demo</a>}
                    {p.source && <a className={`${btnGhost} !px-3 !py-1.5 text-sm`} href={p.source} target="_blank" rel="noopener noreferrer"><Code2 size={14} aria-hidden />Source</a>}
                  </div>
                </div>
              </article>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

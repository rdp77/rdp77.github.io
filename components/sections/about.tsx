import { story, skills, experience, education, achievements, profile } from "@/lib/profile";
import { Section, TechIcon, btnPrimary } from "@/components/ui/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { Download } from "lucide-react";

const toc = [
  { id: "story", label: "Story" }, { id: "skills", label: "Skills" }, { id: "experience", label: "Experience" },
  { id: "education", label: "Education" }, { id: "achievements", label: "Achievements" },
];

function Timeline({ items }: { items: { title: string; sub: string; when: string; body?: string }[] }) {
  return (
    <ol className="border-l border-line">
      {items.map((it) => (
        <li key={it.title + it.when} className="relative pb-8 pl-6 last:pb-0">
          <span className="absolute -left-[5px] top-1.5 size-2.5 bg-violet" aria-hidden />
          <p className="font-mono text-xs text-faint">{it.when}</p>
          <h4 className="mt-1 font-medium">{it.title}</h4>
          <p className="text-sm text-muted">{it.sub}</p>
          {it.body && <p className="mt-2 text-sm text-muted">{it.body}</p>}
        </li>
      ))}
    </ol>
  );
}

export function About() {
  const groups = ["Award", "Certification"] as const;
  return (
    <Section h1 id="about" eyebrow="About" title="The person behind the code">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="Resume contents">
            <p className="mb-3 font-mono text-xs text-faint">On this page</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm lg:block lg:space-y-2">{toc.map((t) => <li key={t.id}><a className="text-muted hover:text-fg" href={`#${t.id}`}>{t.label}</a></li>)}</ul>
          </nav>
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-6 text-sm`}><Download size={16} aria-hidden />Download resume</a>
        </aside>

        <div className="min-w-0 space-y-16">
          <Reveal><section id="story" aria-labelledby="story-h"><h3 id="story-h" className="h2 text-2xl">Story</h3><div className="mt-4 max-w-2xl space-y-4 text-muted">{story.map((p) => <p key={p}>{p}</p>)}</div></section></Reveal>

          <section id="skills" aria-labelledby="skills-h">
            <h3 id="skills-h" className="h2 text-2xl">Skills</h3>
            <Stagger className="mt-6 grid gap-5 sm:grid-cols-2">
              {Object.entries(skills).map(([cat, list]) => (
                <StaggerItem key={cat}>
                  <div className="border border-line p-5">
                    <p className="mb-3 font-mono text-xs text-faint">{cat}</p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2">{list.map((s) => <li key={s.name} className="flex items-center gap-2 text-sm"><TechIcon icon={s.icon} size={16} label="" />{s.name}</li>)}</ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </section>

          <Reveal><section id="experience" aria-labelledby="exp-h"><h3 id="exp-h" className="h2 mb-6 text-2xl">Experience</h3>
            <Timeline items={experience.map((e) => ({ title: e.position, sub: e.company, when: e.duration, body: e.description }))} /></section></Reveal>

          <Reveal><section id="education" aria-labelledby="edu-h"><h3 id="edu-h" className="h2 mb-6 text-2xl">Education</h3>
            <Timeline items={education.map((e) => ({ title: e.degree, sub: e.school, when: e.duration, body: e.description }))} /></section></Reveal>

          <Reveal><section id="achievements" aria-labelledby="ach-h"><h3 id="ach-h" className="h2 mb-6 text-2xl">Achievements</h3>
            {groups.map((g) => (
              <div key={g} className="mb-6">
                <h4 className="font-mono text-sm text-violet">{g === "Award" ? "Awards" : "Certifications"}</h4>
                <ul className="mt-2 divide-y divide-line border-y border-line">
                  {achievements.filter((a) => a.type === g).map((a, i) => (
                    <li key={a.name + i} className="py-3"><p className="font-medium">{a.name}</p><p className="text-sm text-muted">{a.issuer}{a.credential && <> · <span className="font-mono text-xs">{a.credential}</span></>}</p></li>
                  ))}
                </ul>
              </div>
            ))}</section></Reveal>
        </div>
      </div>
    </Section>
  );
}

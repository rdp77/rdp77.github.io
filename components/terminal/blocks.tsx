import { profile, story, projects, skills, experience, education } from "@/lib/profile";

// Palette copied from brainless.swerdlow.dev (Claude Code suite).
export const C = { fg: "#c0caf5", dim: "#949494", sub: "#8b8fa3", faint: "#565f89", arg: "#7dcfff", ok: "#4ea96f", bad: "#f7768e", accent: "#cd694a" };

export const Tool = ({ name, arg, note, children, bad }: { name: string; arg: string; note: string; children?: React.ReactNode; bad?: boolean }) => (
  <div className="min-w-0">
    <div className="flex items-baseline gap-2">
      <span aria-hidden style={{ color: bad ? C.bad : C.ok }}>⏺</span>
      <span className="min-w-0 break-words">{name}<span style={{ color: C.faint }}>(</span><span style={{ color: C.arg }}>{arg}</span><span style={{ color: C.faint }}>)</span></span>
    </div>
    <div className="flex items-baseline gap-2" style={{ color: C.sub }}>
      <span aria-hidden className="invisible">⏺</span><span aria-hidden style={{ color: C.faint }}>⎿</span><span className="min-w-0 break-words">{note}</span>
    </div>
    {children && <div className="mt-2 space-y-2 pl-[3ch]">{children}</div>}
  </div>
);

const Row = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div className="flex gap-3"><span className="w-[12ch] shrink-0" style={{ color: C.dim }}>{k}</span><span className="min-w-0 break-words">{children}</span></div>
);
const Link = ({ href }: { href: string }) => <a href={href} target="_blank" rel="noreferrer" className="underline" style={{ color: C.arg }}>{href}</a>;

export const About = () => (
  <Tool name="Read" arg="about" note={`${profile.name} · ${profile.role}`}>
    {story.map((p, i) => <p key={i}>{p}</p>)}
  </Tool>
);

export const Projects = () => (
  <Tool name="Read" arg="projects" note={`Read ${projects.length} projects`}>
    {projects.map((p) => (
      <div key={p.name}><span className="font-semibold">{p.name}</span> <span style={{ color: C.dim }}>[{p.category.join(", ")}]</span>
        <div style={{ color: C.sub }}>{p.description}</div></div>
    ))}
  </Tool>
);

export const Experience = () => (
  <Tool name="Read" arg="experience" note={`${experience.length} roles · ${education.length} schools`}>
    {experience.map((e) => (
      <div key={e.company + e.duration}><span className="font-semibold">{e.position}</span> <span style={{ color: C.dim }}>@ {e.company} · {e.duration}</span>
        <div style={{ color: C.sub }}>{e.description}</div></div>
    ))}
    <div className="pt-1 font-semibold" style={{ color: C.accent }}>Education</div>
    {education.map((e) => <div key={e.school}>{e.school} <span style={{ color: C.dim }}>· {e.degree} · {e.duration}</span></div>)}
  </Tool>
);

export const Skills = () => (
  <Tool name="Read" arg="skills" note={`${Object.keys(skills).length} groups`}>
    {Object.entries(skills).map(([g, items]) => <Row key={g} k={g.toLowerCase()}>{items.map((s) => s.name).join(", ")}</Row>)}
  </Tool>
);

export const Creators = () => (
  <Tool name="Read" arg="creators" note="YouTube · TikTok · Instagram">
    {profile.socials.filter((s) => ["YouTube", "TikTok", "Instagram"].includes(s.label)).map((s) => <Row key={s.label} k={s.label.toLowerCase()}><Link href={s.href} /></Row>)}
  </Tool>
);

export const Contact = () => (
  <Tool name="Read" arg="contact" note={profile.email}>
    {profile.socials.map((s) => <Row key={s.label} k={s.label.toLowerCase()}><Link href={s.href} /></Row>)}
  </Tool>
);

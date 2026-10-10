import { profile, story, projects, skills, experience, education } from "@/lib/profile";

const Row = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div className="flex gap-3"><span className="w-24 shrink-0 text-faint">{k}</span><span className="min-w-0 break-words">{children}</span></div>
);
const Title = ({ children }: { children: React.ReactNode }) => <div className="mb-2 text-violet">● {children}</div>;

export const About = () => (
  <div><Title>about</Title>
    <Row k="name">{profile.name} ({profile.handle})</Row>
    <Row k="role">{profile.role}</Row>
    <Row k="location">{profile.location}</Row>
    <div className="mt-3 space-y-2 text-muted">{story.map((p, i) => <p key={i}>{p}</p>)}</div>
  </div>
);

export const Projects = () => (
  <div><Title>projects ({projects.length})</Title>
    <ul className="space-y-2">{projects.map((p) => (
      <li key={p.name}><span className="text-fg">{p.name}</span> <span className="text-faint">[{p.category.join(", ")}]</span>
        <div className="text-muted">{p.description}</div></li>
    ))}</ul>
  </div>
);

export const Experience = () => (
  <div><Title>experience</Title>
    <ul className="space-y-2">{experience.map((e) => (
      <li key={e.company + e.duration}><span className="text-fg">{e.position}</span> <span className="text-faint">@ {e.company} · {e.duration}</span>
        <div className="text-muted">{e.description}</div></li>
    ))}</ul>
    <div className="mb-2 mt-4 text-violet">● education</div>
    <ul className="space-y-1">{education.map((e) => (
      <li key={e.school}><span className="text-fg">{e.school}</span> <span className="text-faint">· {e.degree} · {e.duration}</span></li>
    ))}</ul>
  </div>
);

export const Skills = () => (
  <div><Title>skills</Title>
    {Object.entries(skills).map(([group, items]) => (
      <Row key={group} k={group.toLowerCase()}>{items.map((s) => s.name).join(", ")}</Row>
    ))}
  </div>
);

export const Creators = () => (
  <div><Title>creators</Title>
    {profile.socials.filter((s) => ["YouTube", "TikTok", "Instagram"].includes(s.label)).map((s) => (
      <Row key={s.label} k={s.label.toLowerCase()}><a className="underline" href={s.href} target="_blank" rel="noreferrer">{s.href}</a></Row>
    ))}
  </div>
);

export const Contact = () => (
  <div><Title>contact</Title>
    <Row k="email">{profile.email}</Row>
    {profile.socials.map((s) => (
      <Row key={s.label} k={s.label.toLowerCase()}><a className="underline" href={s.href} target="_blank" rel="noreferrer">{s.href}</a></Row>
    ))}
  </div>
);

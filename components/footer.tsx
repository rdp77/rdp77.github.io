import { Heart, Coffee, Wallet } from "lucide-react";
import { profile } from "@/lib/profile";
import { Container, TechIcon } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/motion";
import { EmailLink } from "@/components/email-link";
import { SocialIcon } from "@/components/social-icon";

// Shown on the Creators page instead.
const creatorPlatforms = ["Instagram", "TikTok", "YouTube"];
const col = "group inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-fg";
const ico = "shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-violet motion-reduce:transition-none";
const donateIcon: Record<string, React.ReactNode> = { "GitHub Sponsors": <Heart size={16} />, "Buy Me a Coffee": <Coffee size={16} />, Yapp: <Wallet size={16} /> };

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <Reveal className="min-w-0">
          <h2 className="mb-3 font-mono text-xs text-faint">Contact</h2>
          <EmailLink />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mb-3 font-mono text-xs text-faint">Social</h2>
          <ul className="space-y-2">{profile.socials.filter((s) => !creatorPlatforms.includes(s.label)).map((s) => <li key={s.label}><a className={col} href={s.href} target="_blank" rel="noopener noreferrer"><span className={ico}><SocialIcon label={s.label} size={16} /></span>{s.label}</a></li>)}</ul>
        </Reveal>
        <Reveal delay={0.16}>
          <h2 className="mb-3 font-mono text-xs text-faint">Donate</h2>
          <ul className="space-y-2">
            {profile.donate.map((s) => <li key={s.label}><a className={col} href={s.href} target="_blank" rel="noopener noreferrer"><span className={ico}>{donateIcon[s.label]}</span>{s.label}</a></li>)}
            <li className="flex items-start gap-2.5 text-sm text-muted"><TechIcon icon="siEthereum" label="Ethereum" size={16} /><code className="break-all font-mono text-xs">{profile.wallet}</code></li>
          </ul>
        </Reveal>
      </Container>
      <Container className="flex flex-wrap justify-between gap-2 border-t border-line py-6 text-xs text-faint">
        <span>© {profile.name}</span>
        <span>Design inspired by Render.com.</span>
      </Container>
    </footer>
  );
}

import { profile, siteUrl, projects } from "@/lib/profile";

export function GET() {
  const body = `# ${profile.name} (${profile.handle})

> ${profile.role} based in Surabaya, Indonesia. ${profile.tagline}

## Pages
- [Home](${siteUrl}/): live dashboard of coding, GitHub and on-chain activity
- [Projects](${siteUrl}/projects): ${projects.length} projects across web, mobile and networking
- [Creators](${siteUrl}/creators): content on YouTube, TikTok and Instagram
- [About](${siteUrl}/about): story, skills, experience, education, certifications
- [Contact](${siteUrl}/contact): get in touch

## Profiles
${profile.socials.map((s) => `- [${s.label}](${s.href})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

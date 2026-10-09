// Single place to edit personal content. Placeholder values are marked.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdp77.github.io";

export const profile = {
  name: "Moh Ravi Dwi Putra",
  handle: "rdp77",
  role: "Full-stack Developer",
  tagline: "I build fast, reliable web and mobile products — and keep an eye on them like a production service.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com", // set NEXT_PUBLIC_CONTACT_EMAIL
  github: "rdp77",
  wallet: process.env.NEXT_PUBLIC_ETH_ADDRESS ?? "0x0000000000000000000000000000000000000000",
  location: "Indonesia", // placeholder
  timezone: "Asia/Jakarta",
  resumeUrl: "/resume.pdf", // drop a file in /public
  socials: [
    { label: "GitHub", href: "https://github.com/rdp77" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rdp77" },
    { label: "X", href: "https://x.com/rdp77" },
    { label: "Instagram", href: "https://instagram.com/rdp77" },
    { label: "TikTok", href: "https://tiktok.com/@rdp77" },
    { label: "YouTube", href: "https://youtube.com/@rdp77" },
  ],
  donate: [
    { label: "GitHub Sponsors", href: "https://github.com/sponsors/rdp77" },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/rdp77" },
  ],
};

export const story = [
  "I'm a developer who likes products that feel quick, quiet and dependable. I started with PHP and Laravel, moved through React and Next.js, and now build across web, mobile and cloud.",
  "Outside of client work I make open-source tools, tinker with Web3, and share what I learn as a creator. This site is my personal operating system — the live numbers on the dashboard are real.",
  "Placeholder copy: replace this story in lib/profile.ts.",
];

export type StackItem = "nextjs" | "react" | "laravel" | "flutter" | "typescript" | "tailwind" | "mysql" | "postgresql" | "redis" | "docker" | "cloudflare" | "vercel" | "graphql";

export const projects: {
  name: string; description: string; status: "Live" | "Beta" | "Archived";
  demo?: string; source?: string; stack: StackItem[];
}[] = [
  { name: "Portfolio OS", description: "This site: a developer dashboard with live coding, GitHub, wallet and uptime widgets.", status: "Live", demo: "https://rdp77.github.io", source: "https://github.com/rdp77/rdp77.github.io", stack: ["nextjs", "react", "typescript", "tailwind", "vercel"] },
  { name: "Admin Platform", description: "Placeholder: an admin platform with role-based access and audit logs.", status: "Beta", source: "https://github.com/rdp77", stack: ["laravel", "mysql", "redis", "docker"] },
  { name: "Offline Mobile App", description: "Placeholder: a cross-platform mobile app with offline sync.", status: "Live", demo: "#", stack: ["flutter", "postgresql", "graphql"] },
  { name: "Edge API Gateway", description: "Placeholder: an edge-cached API gateway with analytics.", status: "Archived", source: "https://github.com/rdp77", stack: ["typescript", "cloudflare", "redis"] },
];

export const skills: Record<string, { name: string; icon: string }[]> = {
  Frontend: [{ name: "React", icon: "siReact" }, { name: "Next.js", icon: "siNextdotjs" }, { name: "TypeScript", icon: "siTypescript" }, { name: "Tailwind CSS", icon: "siTailwindcss" }],
  Backend: [{ name: "Laravel", icon: "siLaravel" }, { name: "Node.js", icon: "siNodedotjs" }, { name: "GraphQL", icon: "siGraphql" }, { name: "PHP", icon: "siPhp" }],
  Mobile: [{ name: "Flutter", icon: "siFlutter" }, { name: "Dart", icon: "siDart" }],
  Cloud: [{ name: "Cloudflare", icon: "siCloudflare" }, { name: "Vercel", icon: "siVercel" }],
  DevOps: [{ name: "Docker", icon: "siDocker" }, { name: "GitHub Actions", icon: "siGithubactions" }, { name: "Linux", icon: "siLinux" }],
  Database: [{ name: "MySQL", icon: "siMysql" }, { name: "PostgreSQL", icon: "siPostgresql" }, { name: "Redis", icon: "siRedis" }],
  Web3: [{ name: "Ethereum", icon: "siEthereum" }, { name: "Solidity", icon: "siSolidity" }],
  Tools: [{ name: "Git", icon: "siGit" }, { name: "Figma", icon: "siFigma" }, { name: "VS Code", icon: "siVscodium" }],
};

// Most recent first. Placeholder entries.
export const experience = [
  { company: "Company Name", position: "Senior Full-stack Developer", duration: "2023 — Present", description: "Placeholder: led development of customer-facing products and internal tooling." },
  { company: "Previous Company", position: "Full-stack Developer", duration: "2020 — 2023", description: "Placeholder: shipped features across Laravel and React stacks." },
  { company: "First Company", position: "Junior Developer", duration: "2018 — 2020", description: "Placeholder: built and maintained websites and APIs." },
];

export const education = [
  { school: "University Name", degree: "Bachelor of Computer Science", duration: "2014 — 2018" },
];

export const achievements: { year: number; name: string; credential: string; issuer: string }[] = [
  { year: 2026, name: "Certification Name (placeholder)", credential: "CREDENTIAL-ID-0001", issuer: "Issuer" },
  { year: 2025, name: "Certification Name (placeholder)", credential: "CREDENTIAL-ID-0002", issuer: "Issuer" },
];

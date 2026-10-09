// Single place to edit personal content. Placeholder values are marked.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdp77.github.io";

export const profile = {
  name: "Moh Ravi Dwi Putra",
  handle: "rdp77",
  role: "Software Engineer",
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
  { company: "Company Name", position: "Senior Software Engineer", duration: "2023 — Present", description: "Placeholder: led development of customer-facing products and internal tooling." },
  { company: "Previous Company", position: "Software Engineer", duration: "2020 — 2023", description: "Placeholder: shipped features across Laravel and React stacks." },
  { company: "First Company", position: "Junior Developer", duration: "2018 — 2020", description: "Placeholder: built and maintained websites and APIs." },
];

export const education = [
  { school: "University Name", degree: "Bachelor of Computer Science", duration: "2014 — 2018" },
];

export const achievements: { type: "Award" | "Certification"; name: string; issuer: string; credential: string }[] = [
  { type: "Award", name: "Certificate of Award, 2nd Class Winner", issuer: "SMK Rajasa", credential: "" },
  { type: "Award", name: "Certificate of Award, 3rd Class Winner", issuer: "SMK Rajasa", credential: "" },
  { type: "Certification", name: "HTML Fundamentals Course", issuer: "SoloLearn", credential: "#1014-11011596" },
  { type: "Certification", name: "SEO 101: Cara Membuat Website Eksis Di Halaman Depan Google", issuer: "Skill Academy", credential: "B4BBTZ7UKBA4NK" },
  { type: "Certification", name: "SEO 101: Cara Membuat Website Eksis Di Halaman Depan Google", issuer: "Skill Academy", credential: "HLR743SYF8FE88" },
  { type: "Certification", name: "PHP Tutorial Course", issuer: "SoloLearn", credential: "#1059-11011596" },
  { type: "Certification", name: "CSS Fundamentals Course", issuer: "SoloLearn", credential: "#1023-11011596" },
  { type: "Certification", name: "Lintasarta Developer Talk Online Series #2 - Simple Animation on Android", issuer: "Dicoding", credential: "" },
  { type: "Certification", name: "Lintasarta Developer Talk Online Series #3 - Boost Android App using Android Jetpack", issuer: "Dicoding", credential: "" },
  { type: "Certification", name: "Lintasarta Developer Talk Online Series #4 - Best Practices and Lessons Learned as a Developer", issuer: "Dicoding", credential: "" },
  { type: "Certification", name: "SEO Tutorial for Beginners", issuer: "Udemy", credential: "UC-fc84da27-f5dd-4476-b753-201d4bbdae2e" },
  { type: "Certification", name: "Primavera Practice in the Classroom", issuer: "Oracle Academy", credential: "" },
  { type: "Certification", name: "Unmask Cyber Crime", issuer: "Surabaya Hacker Link", credential: "" },
  { type: "Certification", name: "Javascript Tutorial Course", issuer: "SoloLearn", credential: "#1024-11011596" },
  { type: "Certification", name: "SQL Fundamentals Course", issuer: "SoloLearn", credential: "#1060-11011596" },
  { type: "Certification", name: "IT Essentials", issuer: "Cisco Networking Academy", credential: "#9190197" },
  { type: "Certification", name: "Basic English Conversation", issuer: "Dharma Cendekia Utama", credential: "DCU12016009" },
  { type: "Certification", name: "Praktek Kerja Industri Diskominfo", issuer: "Dinas Komunikasi dan Informatika", credential: "072/4550/436.6.8/2017" },
  { type: "Certification", name: "Praktek Kerja Industri Broadband Learning Center", issuer: "SMK Rajasa", credential: "106/SMKR.Sby/H/Prakerin/VIII/2017" },
  { type: "Certification", name: "Certificate of Competency", issuer: "PT. Rahajasa Media Internet", credential: "135A/PIMP/SMKR.SBY/III/2018" },
  { type: "Certification", name: "Flutter Mobile Developer", issuer: "BuildWithAngga", credential: "ToYhyizkTl" },
  { type: "Certification", name: "Menyusun Strategi Pemasaran dan Penjualan dengan Kecerdasan Buatan (AI)", issuer: "Karier.mu", credential: "#9190197" },
  { type: "Certification", name: "Software Development", issuer: "Badan Nasional Sertifikasi Profesi (BNSP)", credential: "J.62019.251400.5.0000285.2021" },
  { type: "Certification", name: "Software Testing Fundamentals", issuer: "Great Learning", credential: "" },
  { type: "Certification", name: "Python for Data Science", issuer: "IBM", credential: "#9190197" },
];

// Single place to edit personal content. Placeholder values are marked.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rdp77.github.io";
export const siteHost = new URL(siteUrl).host;

export const profile = {
  name: "Moh Ravi Dwi Putra",
  handle: "rdp77",
  role: "Software Engineer",
  tagline:
    "I build fast, reliable web and mobile products, and keep an eye on them like a production service.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "", // set NEXT_PUBLIC_CONTACT_EMAIL; empty hides email
  github: "rdp77",
  wallet: process.env.NEXT_PUBLIC_ETH_ADDRESS ?? "0x0000000000000000000000000000000000000000",
  location: "Indonesia", // placeholder
  timezone: "Asia/Jakarta",
  resumeUrl: "https://link.wreative.com/ravi",
  resumeAtsUrl: "https://link.wreative.com/ravi-ats",
  socials: [
    { label: "GitHub", href: "https://github.com/rdp77" },
    { label: "LinkedIn", href: "https://linkedin.com/in/ravidwiputra" },
    { label: "X", href: "https://x.com/ravidwiputra" },
    { label: "Instagram", href: "https://instagram.com/ravidwiputra.dev" },
    { label: "TikTok", href: "https://tiktok.com/@ravidwiputraa" },
    { label: "YouTube", href: "https://youtube.com/@ravidwiputra" },
  ],
  donate: [
    { label: "GitHub Sponsors", href: "https://github.com/sponsors/rdp77" },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/rdp77" },
    { label: "Yapp", href: "https://yapp.ink/rdp77" },
  ],
};

export const story = [
  "I'm Ravi, a full-stack developer with 7+ years of experience building e-commerce solutions, maintaining APIs and integrating systems. I started with networks and Mikrotik in vocational school, then moved into PHP and Laravel, through React and Next.js, and now build across web, mobile and cloud. Today I build back-end APIs at AsiaCommerce Network with Node.js, Docker, GraphQL and REST.",
  "Outside of client work I make open-source tools, tinker with Web3, and share what I learn as a creator and in my local community. I like products that feel quick, quiet and dependable, and I enjoy finding defects in free apps and fixing them.",
  "I'm also a dedicated IT support professional who can optimize your systems while teaching your team best practices, so let's talk. This site is my personal operating system. The live numbers on the dashboard are real.",
];

export const skills: Record<string, { name: string; icon: string }[]> = {
  Frontend: [
    { name: "React", icon: "siReact" },
    { name: "Next.js", icon: "siNextdotjs" },
    { name: "TypeScript", icon: "siTypescript" },
    { name: "Tailwind CSS", icon: "siTailwindcss" },
    { name: "HTML5", icon: "siHtml5" },
    { name: "CSS", icon: "siCss" },
    { name: "Sass", icon: "siSass" },
    { name: "jQuery", icon: "siJquery" },
    { name: "JavaScript", icon: "siJavascript" },
    { name: "Bootstrap", icon: "siBootstrap" },
    { name: "Gatsby", icon: "siGatsby" },
    { name: "WordPress", icon: "siWordpress" },
    { name: "Blogger", icon: "siBlogger" },
    { name: "Webflow", icon: "siWebflow" },
    { name: "Framer", icon: "siFramer" },
  ],
  Backend: [
    { name: "Laravel", icon: "siLaravel" },
    { name: "Node.js", icon: "siNodedotjs" },
    { name: "GraphQL", icon: "siGraphql" },
    { name: "PHP", icon: "siPhp" },
    { name: "Python", icon: "siPython" },
    { name: "Livewire", icon: "siLivewire" },
    { name: "Filament", icon: "siFilament" },
    { name: "Java", icon: "siOpenjdk" },
    { name: "C#", icon: "siSharp" },
    { name: "C++", icon: "siCplusplus" },
    { name: "C", icon: "siC" },
    { name: "CodeIgniter", icon: "siCodeigniter" },
    { name: "Visual Basic .NET", icon: "siDotnet" },
  ],
  Mobile: [
    { name: "Flutter", icon: "siFlutter" },
    { name: "Dart", icon: "siDart" },
    { name: "Android", icon: "siAndroid" },
    { name: "Android Studio", icon: "siAndroidstudio" },
    { name: "Firebase", icon: "siFirebase" },
  ],
  Cloud: [
    { name: "Cloudflare", icon: "siCloudflare" },
    { name: "Vercel", icon: "siVercel" },
    { name: "Netlify", icon: "siNetlify" },
    { name: "GitHub Pages", icon: "siGithubpages" },
  ],
  DevOps: [
    { name: "Docker", icon: "siDocker" },
    { name: "Podman", icon: "siPodman" },
    { name: "GitHub Actions", icon: "siGithubactions" },
    { name: "Linux", icon: "siLinux" },
    { name: "Nginx", icon: "siNginx" },
  ],
  Database: [
    { name: "MySQL", icon: "siMysql" },
    { name: "PostgreSQL", icon: "siPostgresql" },
    { name: "Redis", icon: "siRedis" },
    { name: "MariaDB", icon: "siMariadb" },
    { name: "MongoDB", icon: "siMongodb" },
    { name: "phpMyAdmin", icon: "siPhpmyadmin" },
  ],
  Web3: [
    { name: "Ethereum", icon: "siEthereum" },
    { name: "Solidity", icon: "siSolidity" },
  ],
  Tools: [
    { name: "Git", icon: "siGit" },
    { name: "Figma", icon: "siFigma" },
    { name: "VS Code", icon: "siVscodium" },
    { name: "GitHub", icon: "siGithub" },
    { name: "Postman", icon: "siPostman" },
    { name: "Jupyter", icon: "siJupyter" },
    { name: "Bash", icon: "siGnubash" },
  ],
  Networking: [
    { name: "Mikrotik", icon: "siMikrotik" },
    { name: "Cisco", icon: "siCisco" },
  ],
};

// Most recent first.
export const experience = [
  {
    company: "AsiaCommerce Network",
    position: "Back End Developer",
    duration: "2022 – Present",
    description:
      "Builds and maintains API services for mobile and front end, adopting GraphQL, on Laravel with CI/CD.",
  },
  {
    company: "CV. Batu Beling",
    position: "Full Stack Developer",
    duration: "2020 – 2021",
    description:
      "Developed internal systems with Laravel, provided IT support, maintained the CMS website and set digital marketing strategy.",
  },
  {
    company: "Wreative",
    position: "Full Stack Developer",
    duration: "2018 – 2020",
    description:
      "Built custom applications, maintenance and portfolio websites, and introduced products to simplify data processing.",
  },
  {
    company: "Indihome",
    position: "Technician",
    duration: "2018",
    description:
      "Installed Telkom internet from the customer's home to the ODP, then configured access points and DHCP servers.",
  },
  {
    company: "Freelance",
    position: "Technician",
    duration: "2017 – 2018",
    description:
      "Worked in a team on network installations and Mikrotik configuration, and troubleshot network issues.",
  },
  {
    company: "Diskominfo",
    position: "Internship",
    duration: "2017",
    description:
      "Taught word processing and computer use to the surrounding community, and maintained and optimized the computers used for learning.",
  },
];

export const education = [
  {
    school: "University 17 Agustus Surabaya",
    degree: "University",
    duration: "2018 – 2022",
    description:
      "Learned to manage projects well and to communicate quickly and accurately with new people.",
  },
  {
    school: "SMK Rajasa",
    degree: "Vocational High School",
    duration: "2015 – 2018",
    description: "Focused on one field and learned how to run a project well.",
  },
  {
    school: "SMP PGRI 1",
    degree: "Junior High School",
    duration: "2012 – 2015",
    description:
      "Discovered the fun of learning and exploring, with a growing interest in technology.",
  },
  {
    school: "SDN Gading VII",
    degree: "Elementary School",
    duration: "2006 – 2012",
    description: "Learned to be an active student and to dare to ask questions.",
  },
];

export const achievements: {
  type: "Award" | "Certification";
  name: string;
  issuer: string;
  credential: string;
  date?: string;
}[] = [
  {
    type: "Award",
    name: "Certificate of Award, 2nd Class Winner",
    issuer: "SMK Rajasa",
    credential: "",
  },
  {
    type: "Award",
    name: "Certificate of Award, 3rd Class Winner",
    issuer: "SMK Rajasa",
    credential: "",
  },
  {
    type: "Certification",
    name: "HTML Fundamentals Course",
    issuer: "SoloLearn",
    credential: "#1014-11011596",
    date: "Mar 2020",
  },
  {
    type: "Certification",
    name: "SEO 101: Cara Membuat Website Eksis Di Halaman Depan Google",
    issuer: "Skill Academy",
    credential: "B4BBTZ7UKBA4NK",
    date: "Mar 2020",
  },
  {
    type: "Certification",
    name: "SEO 101: Cara Membuat Website Eksis Di Halaman Depan Google",
    issuer: "Skill Academy",
    credential: "HLR743SYF8FE88",
    date: "Mar 2020",
  },
  {
    type: "Certification",
    name: "PHP Tutorial Course",
    issuer: "SoloLearn",
    credential: "#1059-11011596",
    date: "Mar 2020",
  },
  {
    type: "Certification",
    name: "PHP Fundamentals Course",
    issuer: "SoloLearn",
    credential: "",
    date: "Mar 2020",
  },
  {
    type: "Certification",
    name: "CSS Fundamentals Course",
    issuer: "SoloLearn",
    credential: "#1023-11011596",
  },
  {
    type: "Certification",
    name: "Lintasarta Developer Talk Online Series #2 - Simple Animation on Android",
    issuer: "Dicoding",
    credential: "",
    date: "Mar 2020",
  },
  {
    type: "Certification",
    name: "Lintasarta Developer Talk Online Series #3 - Boost Android App using Android Jetpack",
    issuer: "Dicoding",
    credential: "",
    date: "Apr 2020",
  },
  {
    type: "Certification",
    name: "Lintasarta Developer Talk Online Series #4 - Best Practices and Lessons Learned as a Developer",
    issuer: "Dicoding",
    credential: "",
  },
  {
    type: "Certification",
    name: "SEO Tutorial for Beginners",
    issuer: "Udemy",
    credential: "UC-fc84da27-f5dd-4476-b753-201d4bbdae2e",
    date: "Jul 2021",
  },
  {
    type: "Certification",
    name: "Primavera Practice in the Classroom",
    issuer: "Oracle Academy",
    credential: "",
    date: "Nov 2019",
  },
  {
    type: "Certification",
    name: "Unmask Cyber Crime",
    issuer: "Surabaya Hacker Link",
    credential: "",
  },
  {
    type: "Certification",
    name: "Javascript Tutorial Course",
    issuer: "SoloLearn",
    credential: "#1024-11011596",
    date: "Sep 2020",
  },
  {
    type: "Certification",
    name: "SQL Fundamentals Course",
    issuer: "SoloLearn",
    credential: "#1060-11011596",
    date: "Sep 2020",
  },
  {
    type: "Certification",
    name: "IT Essentials",
    issuer: "Cisco Networking Academy",
    credential: "#9190197",
    date: "Jun 2018",
  },
  {
    type: "Certification",
    name: "Basic English Conversation",
    issuer: "Dharma Cendekia Utama",
    credential: "DCU12016009",
    date: "Oct 2017",
  },
  {
    type: "Certification",
    name: "Praktek Kerja Industri Diskominfo",
    issuer: "Dinas Komunikasi dan Informatika",
    credential: "072/4550/436.6.8/2017",
    date: "Mar 2017",
  },
  {
    type: "Certification",
    name: "Praktek Kerja Industri Broadband Learning Center",
    issuer: "SMK Rajasa",
    credential: "106/SMKR.Sby/H/Prakerin/VIII/2017",
    date: "Aug 2017",
  },
  {
    type: "Certification",
    name: "Certificate of Competency",
    issuer: "PT. Rahajasa Media Internet",
    credential: "135A/PIMP/SMKR.SBY/III/2018",
    date: "Mar 2018",
  },
  {
    type: "Certification",
    name: "Flutter Mobile Developer",
    issuer: "BuildWithAngga",
    credential: "ToYhyizkTl",
    date: "Feb 2022",
  },
  {
    type: "Certification",
    name: "Menyusun Strategi Pemasaran dan Penjualan dengan Kecerdasan Buatan (AI)",
    issuer: "Karier.mu",
    credential: "#9190197",
    date: "Sep 2023",
  },
  {
    type: "Certification",
    name: "Software Development",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    credential: "J.62019.251400.5.0000285.2021",
    date: "Nov 2021 (valid until Nov 2024)",
  },
  {
    type: "Certification",
    name: "Software Testing Fundamentals",
    issuer: "Great Learning",
    credential: "",
    date: "Dec 2021",
  },
  { type: "Certification", name: "Python for Data Science", issuer: "IBM", credential: "#9190197" },
];

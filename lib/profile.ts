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
  resumeUrl: "https://link.wreative.com/ravi",
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
  "I'm Ravi, a software engineer born in Lamongan and raised in Surabaya. I like products that feel quick, quiet and dependable. I started with networks and Mikrotik in vocational school, then moved into PHP and Laravel, through React and Next.js, and now build across web, mobile and cloud. Today I build back-end APIs at AsiaCommerce Network.",
  "Outside of client work I make open-source tools, tinker with Web3, and share what I learn as a creator. I enjoy finding defects in free apps and fixing them, and I care about building things that are lightweight, fast and dependable. Building relationships and running small businesses keeps my entrepreneurial side growing, and I like contributing to the growth of people in my country.",
  "This site is my personal operating system. The live numbers on the dashboard are real.",
];

export const projects: { name: string; category: string[]; image: string; description: string; stack: string[] }[] = [
  { name: "Universitas Airlangga", category: ["Networking"], image: "/projects/network.png", description: "Network infrastructure installation for Universitas Airlangga Campus B, delivered in one day by a six-person team.", stack: ["siCisco"] },
  { name: "Dryas Library", category: ["Web App"], image: "/projects/dryaslibrary.png", description: "Library management system for University of 17 August 1945 Surabaya: book inventory and shelf organization.", stack: ["siLaravel", "siPostgresql", "siPhp"] },
  { name: "Warunk Zaman Now", category: ["Networking"], image: "/projects/network.png", description: "Network setup and MikroTik router configuration for a restaurant in Surabaya across three installation points.", stack: ["siMikrotik"] },
  { name: "Corona", category: ["Web App"], image: "/projects/corona.png", description: "COVID-19 tracker showing cases, recoveries and deaths per Indonesian province from third-party APIs.", stack: ["siLaravel", "siPhp"] },
  { name: "Traffic Light Simulation", category: ["Desktop"], image: "/projects/network.png", description: "Crossroad traffic light simulation with cars moving in sync with the light timing.", stack: ["siDotnet"] },
  { name: "Sports Skuyy", category: ["Mobile"], image: "/projects/sportsskuyy.png", description: "Android fitness tracker that logs exercises by difficulty and calculates calories burned per movement.", stack: ["siFlutter", "siFirebase"] },
  { name: "Stack Games", category: ["Web App"], image: "/projects/stack-games.png", description: "Game portal with a Laravel backend for gamers, with secure data and access control.", stack: ["siLaravel", "siPostgresql"] },
  { name: "Personal Web", category: ["Website"], image: "/projects/code.png", description: "Personal portfolio website, evolved from Jekyll to Next.js, with PWA support and a Web3Forms contact form.", stack: ["siJekyll", "siNextdotjs", "siTailwindcss", "siVercel"] },
  { name: "Messi Kasih Khitan", category: ["Website"], image: "/projects/wordpress.png", description: "WordPress site for a circumcision service provider, with location marking, Google Business and contact features.", stack: ["siWordpress"] },
  { name: "Our Enterprise", category: ["Website"], image: "/projects/ourenterprise.png", description: "Website for a multi-service business, built for both looks and function.", stack: ["siGatsby", "siJavascript", "siVercel"] },
  { name: "Pode", category: ["Website"], image: "/projects/code.png", description: "Portfolio platform for designers, built as a fast, data-efficient static site.", stack: ["siJekyll", "siRuby"] },
  { name: "Veyaz", category: ["Web App"], image: "/projects/veyaz.png", description: "Premium Laravel admin template with Bootstrap, jQuery UI and async support via AJAX and axios.", stack: ["siLaravel", "siMysql", "siLivewire"] },
  { name: "KSP Sumber Rejeki", category: ["Web App"], image: "/projects/ksp-sumberrejeki.png", description: "Cooperative savings and loan system with loan period calculation and daily, weekly and monthly reports.", stack: ["siLaravel", "siMysql"] },
  { name: "Andromart", category: ["Web App"], image: "/projects/andromart.png", description: "Point-of-sale system with inventory, employees, ledger and balance sheet, stock control and KPI reporting.", stack: ["siLaravel"] },
  { name: "Report Management BatuBeling", category: ["Web App"], image: "/projects/batubeling.png", description: "Employee daily report system with filtering and export by day, week and month.", stack: ["siLaravel"] },
  { name: "CV. Bima Sakti", category: ["Website"], image: "/projects/wordpress.png", description: "Company profile website for CV. Bima Sakti.", stack: ["siWordpress"] },
  { name: "Farmer Distribution", category: ["Web App", "Mobile"], image: "/projects/farmer-distribution.png", description: "Platform connecting farmers with suppliers and raw materials, with price comparison. Laravel API plus Flutter app.", stack: ["siLaravel", "siMysql", "siFlutter"] },
  { name: "First Media Surabaya", category: ["Website"], image: "/projects/first-media.png", description: "Company website for First Media Surabaya.", stack: ["siWordpress"] },
  { name: "Sakpattana Jawa Timur", category: ["Website"], image: "/projects/sakpattana.png", description: "Company website for Sakpattana Jawa Timur.", stack: ["siWordpress"] },
  { name: "CV. Putra Kubota", category: ["Website"], image: "/projects/kubota.png", description: "Company website for CV. Putra Kubota.", stack: ["siWordpress"] },
  { name: "CV. Wahyu Dewanagari", category: ["Website"], image: "/projects/wahyu-dewanagari.png", description: "Company website for CV. Wahyu Dewanagari.", stack: ["siWordpress"] },
  { name: "IKAPENS", category: ["Mobile"], image: "/projects/ikapens.png", description: "Mobile app for the IKAPENS alumni community.", stack: ["siFlutter"] },
  { name: "AsiaCommerce", category: ["Web App"], image: "/projects/asiacommerce.png", description: "E-commerce backend work: API optimization, system integration and less data redundancy.", stack: ["siLaravel", "siMysql", "siGraphql", "siDocker"] },
  { name: "PolaPedia", category: ["Web App"], image: "/projects/polapedia.png", description: "B2B marketplace for architectural designs, raw materials and construction services.", stack: ["siLaravel", "siMysql"] },
  { name: "Wara Wara", category: ["Mobile"], image: "/projects/code.png", description: "Mobile application.", stack: ["siFlutter"] },
  { name: "Hardware Maintenance Management", category: ["Web App", "Mobile"], image: "/projects/hmm.png", description: "Hardware maintenance prediction using MTBF/MTTR metrics and QR code detection. Laravel API plus Flutter app.", stack: ["siLaravel", "siMysql", "siFlutter"] },
  { name: "PT. Modern Coco International", category: ["Website"], image: "/projects/mci.png", description: "Company website for PT. Modern Coco International.", stack: ["siWordpress"] },
];

export const skills: Record<string, { name: string; icon: string }[]> = {
  Frontend: [{ name: "React", icon: "siReact" }, { name: "Next.js", icon: "siNextdotjs" }, { name: "TypeScript", icon: "siTypescript" }, { name: "Tailwind CSS", icon: "siTailwindcss" }, { name: "HTML5", icon: "siHtml5" }, { name: "CSS", icon: "siCss" }, { name: "Sass", icon: "siSass" }, { name: "jQuery", icon: "siJquery" }, { name: "JavaScript", icon: "siJavascript" }, { name: "Bootstrap", icon: "siBootstrap" }, { name: "Gatsby", icon: "siGatsby" }, { name: "WordPress", icon: "siWordpress" }],
  Backend: [{ name: "Laravel", icon: "siLaravel" }, { name: "Node.js", icon: "siNodedotjs" }, { name: "GraphQL", icon: "siGraphql" }, { name: "PHP", icon: "siPhp" }, { name: "Python", icon: "siPython" }, { name: "Livewire", icon: "siLivewire" }, { name: "Filament", icon: "siFilament" }, { name: "Java", icon: "siOpenjdk" }, { name: "C#", icon: "siSharp" }, { name: "C++", icon: "siCplusplus" }, { name: "C", icon: "siC" }, { name: "CodeIgniter", icon: "siCodeigniter" }, { name: "Visual Basic .NET", icon: "siDotnet" }],
  Mobile: [{ name: "Flutter", icon: "siFlutter" }, { name: "Dart", icon: "siDart" }, { name: "Android", icon: "siAndroid" }, { name: "Android Studio", icon: "siAndroidstudio" }, { name: "Firebase", icon: "siFirebase" }],
  Cloud: [{ name: "Cloudflare", icon: "siCloudflare" }, { name: "Vercel", icon: "siVercel" }, { name: "Netlify", icon: "siNetlify" }, { name: "GitHub Pages", icon: "siGithubpages" }],
  DevOps: [{ name: "Docker", icon: "siDocker" }, { name: "GitHub Actions", icon: "siGithubactions" }, { name: "Linux", icon: "siLinux" }, { name: "Nginx", icon: "siNginx" }],
  Database: [{ name: "MySQL", icon: "siMysql" }, { name: "PostgreSQL", icon: "siPostgresql" }, { name: "Redis", icon: "siRedis" }, { name: "MariaDB", icon: "siMariadb" }, { name: "MongoDB", icon: "siMongodb" }],
  Web3: [{ name: "Ethereum", icon: "siEthereum" }, { name: "Solidity", icon: "siSolidity" }],
  Tools: [{ name: "Git", icon: "siGit" }, { name: "Figma", icon: "siFigma" }, { name: "VS Code", icon: "siVscodium" }, { name: "GitHub", icon: "siGithub" }, { name: "Postman", icon: "siPostman" }, { name: "Jupyter", icon: "siJupyter" }, { name: "Bash", icon: "siGnubash" }],
  Networking: [{ name: "Mikrotik", icon: "siMikrotik" }, { name: "Cisco", icon: "siCisco" }],
};

// Most recent first.
export const experience = [
  { company: "AsiaCommerce Network", position: "Back End Developer", duration: "2022 — Present", description: "Builds and maintains API services for mobile and front end, adopting GraphQL, on Laravel with CI/CD." },
  { company: "CV. Batu Beling", position: "Full Stack Developer", duration: "2020 — 2021", description: "Developed internal systems with Laravel, provided IT support, maintained the CMS website and set digital marketing strategy." },
  { company: "Wreative", position: "Full Stack Developer", duration: "2018 — 2020", description: "Built custom applications, maintenance and portfolio websites, and introduced products to simplify data processing." },
  { company: "Indihome", position: "Technician", duration: "2018", description: "Installed Telkom internet from the customer's home to the ODP, then configured access points and DHCP servers." },
  { company: "Freelance", position: "Technician", duration: "2017 — 2018", description: "Worked in a team on network installations and Mikrotik configuration, and troubleshot network issues." },
  { company: "Diskominfo", position: "Internship", duration: "2017", description: "Taught word processing and computer use to the surrounding community, and maintained and optimized the computers used for learning." },
];

export const education = [
  { school: "University 17 Agustus Surabaya", degree: "University", duration: "2018 — 2022", description: "Learned to manage projects well and to communicate quickly and accurately with new people." },
  { school: "SMK Rajasa", degree: "Vocational High School", duration: "2015 — 2018", description: "Focused on one field and learned how to run a project well." },
  { school: "SMP PGRI 1", degree: "Junior High School", duration: "2012 — 2015", description: "Discovered the fun of learning and exploring, with a growing interest in technology." },
  { school: "SDN Gading VII", degree: "Elementary School", duration: "2006 — 2012", description: "Learned to be an active student and to dare to ask questions." },
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

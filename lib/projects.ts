export const projects: {
  name: string;
  category: string[];
  image: string;
  description: string;
  stack: string[];
}[] = [
  {
    name: "Universitas Airlangga",
    category: ["Networking"],
    image: "/projects/network.png",
    description:
      "Network infrastructure installation for Universitas Airlangga Campus B, delivered in one day by a six-person team.",
    stack: ["siCisco"],
  },
  {
    name: "Dryas Library",
    category: ["Web App"],
    image: "/projects/dryaslibrary.png",
    description:
      "Library management system for University of 17 August 1945 Surabaya: book inventory and shelf organization.",
    stack: ["siLaravel", "siPostgresql", "siPhp"],
  },
  {
    name: "Warunk Zaman Now",
    category: ["Networking"],
    image: "/projects/network.png",
    description:
      "Network setup and MikroTik router configuration for a restaurant in Surabaya across three installation points.",
    stack: ["siMikrotik"],
  },
  {
    name: "Corona",
    category: ["Web App"],
    image: "/projects/corona.png",
    description:
      "COVID-19 tracker showing cases, recoveries and deaths per Indonesian province from third-party APIs.",
    stack: ["siLaravel", "siPhp"],
  },
  {
    name: "Traffic Light Simulation",
    category: ["Desktop"],
    image: "/projects/network.png",
    description:
      "Crossroad traffic light simulation with cars moving in sync with the light timing.",
    stack: ["siDotnet"],
  },
  {
    name: "Sports Skuyy",
    category: ["Mobile"],
    image: "/projects/sportsskuyy.png",
    description:
      "Android fitness tracker that logs exercises by difficulty and calculates calories burned per movement.",
    stack: ["siFlutter", "siFirebase"],
  },
  {
    name: "Stack Games",
    category: ["Web App"],
    image: "/projects/stack-games.png",
    description:
      "Game portal with a Laravel backend for gamers, with secure data and access control.",
    stack: ["siLaravel", "siPostgresql"],
  },
  {
    name: "Personal Web",
    category: ["Website"],
    image: "/og-bg.png",
    description:
      "Personal portfolio website, evolved from Jekyll to Next.js, with PWA support and a Web3Forms contact form.",
    stack: ["siJekyll", "siNextdotjs", "siTailwindcss", "siVercel"],
  },
  {
    name: "Messi Kasih Khitan",
    category: ["Website"],
    image: "/projects/wordpress.png",
    description:
      "WordPress site for a circumcision service provider, with location marking, Google Business and contact features.",
    stack: ["siWordpress"],
  },
  {
    name: "Our Enterprise",
    category: ["Website"],
    image: "/projects/ourenterprise.png",
    description: "Website for a multi-service business, built for both looks and function.",
    stack: ["siGatsby", "siJavascript", "siVercel"],
  },
  {
    name: "Pode",
    category: ["Website"],
    image: "/og-bg.png",
    description: "Portfolio platform for designers, built as a fast, data-efficient static site.",
    stack: ["siJekyll", "siRuby"],
  },
  {
    name: "Veyaz",
    category: ["Web App"],
    image: "/projects/veyaz.png",
    description:
      "Premium Laravel admin template with Bootstrap, jQuery UI and async support via AJAX and axios.",
    stack: ["siLaravel", "siMysql", "siLivewire"],
  },
  {
    name: "KSP Sumber Rejeki",
    category: ["Web App"],
    image: "/projects/ksp-sumberrejeki.png",
    description:
      "Cooperative savings and loan system with loan period calculation and daily, weekly and monthly reports.",
    stack: ["siLaravel", "siMysql"],
  },
  {
    name: "Andromart",
    category: ["Web App"],
    image: "/projects/andromart.png",
    description:
      "Point-of-sale system with inventory, employees, ledger and balance sheet, stock control and KPI reporting.",
    stack: ["siLaravel"],
  },
  {
    name: "Report Management BatuBeling",
    category: ["Web App"],
    image: "/projects/batubeling.png",
    description: "Employee daily report system with filtering and export by day, week and month.",
    stack: ["siLaravel"],
  },
  {
    name: "CV. Bima Sakti",
    category: ["Website"],
    image: "/projects/wordpress.png",
    description: "Company profile website for CV. Bima Sakti.",
    stack: ["siWordpress"],
  },
  {
    name: "Farmer Distribution",
    category: ["Web App", "Mobile"],
    image: "/projects/farmer-distribution.png",
    description:
      "Platform connecting farmers with suppliers and raw materials, with price comparison. Laravel API plus Flutter app.",
    stack: ["siLaravel", "siMysql", "siFlutter"],
  },
  {
    name: "First Media Surabaya",
    category: ["Website"],
    image: "/projects/first-media.png",
    description: "Company website for First Media Surabaya.",
    stack: ["siWordpress"],
  },
  {
    name: "Sakpattana Jawa Timur",
    category: ["Website"],
    image: "/projects/sakpattana.png",
    description: "Company website for Sakpattana Jawa Timur.",
    stack: ["siWordpress"],
  },
  {
    name: "CV. Putra Kubota",
    category: ["Website"],
    image: "/projects/kubota.png",
    description: "Company website for CV. Putra Kubota.",
    stack: ["siWordpress"],
  },
  {
    name: "CV. Wahyu Dewanagari",
    category: ["Website"],
    image: "/projects/wahyu-dewanagari.png",
    description: "Company website for CV. Wahyu Dewanagari.",
    stack: ["siWordpress"],
  },
  {
    name: "IKAPENS",
    category: ["Mobile"],
    image: "/projects/ikapens.png",
    description: "Mobile app for the IKAPENS alumni community.",
    stack: ["siFlutter"],
  },
  {
    name: "AsiaCommerce",
    category: ["Web App"],
    image: "/projects/asiacommerce.png",
    description:
      "E-commerce backend work: API optimization, system integration and less data redundancy.",
    stack: ["siLaravel", "siMysql", "siGraphql", "siDocker"],
  },
  {
    name: "PolaPedia",
    category: ["Web App"],
    image: "/projects/polapedia.png",
    description:
      "B2B marketplace for architectural designs, raw materials and construction services.",
    stack: ["siLaravel", "siMysql"],
  },
  {
    name: "Wara Wara",
    category: ["Mobile"],
    image: "/og-bg.png",
    description: "Mobile application.",
    stack: ["siFlutter"],
  },
  {
    name: "Hardware Maintenance Management",
    category: ["Web App", "Mobile"],
    image: "/projects/hmm.png",
    description:
      "Hardware maintenance prediction using MTBF/MTTR metrics and QR code detection. Laravel API plus Flutter app.",
    stack: ["siLaravel", "siMysql", "siFlutter"],
  },
  {
    name: "PT. Modern Coco International",
    category: ["Website"],
    image: "/projects/mci.png",
    description: "Company website for PT. Modern Coco International.",
    stack: ["siWordpress"],
  },
  {
    name: "Wreative App",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Client companion app for Wreative: browse the portfolio, track project progress, chat and approve deliverables.",
    stack: ["siFlutter", "siDart", "siFirebase"],
  },
  {
    name: "TikCheck",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Event ticketing app with QR entry scanning, guest list management, offline sync and event analytics.",
    stack: ["siFlutter", "siDart", "siFirebase"],
  },
  {
    name: "TBCeria",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Health companion for tuberculosis patients: symptom tracking, medication reminders and doctor chat.",
    stack: ["siFlutter", "siDart"],
  },
  {
    name: "Sijalu",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Wound information network for patients and medical staff: wound tracking, treatment reminders and consultations.",
    stack: ["siFlutter", "siDart", "siFirebase"],
  },
  {
    name: "Ceting Gmeil",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Pregnancy companion that monitors maternal health, tracks milestones and sends prenatal reminders.",
    stack: ["siFlutter", "siDart"],
  },
  {
    name: "Mitra Jaya Cellular",
    category: ["Mobile"],
    image: "/og-bg.png",
    description: "PPOB platform for data bundles, top-ups and bill payments.",
    stack: ["siFlutter", "siDart"],
  },
  {
    name: "Momora",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Parenting app for tracking baby growth, reading educational content and buying baby essentials.",
    stack: ["siFlutter", "siDart"],
  },
  {
    name: "Voilla",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Mobile learning management system for courses, assignments, class materials and progress tracking.",
    stack: ["siFlutter", "siDart"],
  },
  {
    name: "Sigap",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Emergency response app for fast reporting, real-time updates and coordinated action, built with NativePHP.",
    stack: ["siLaravel", "siLivewire", "siTailwindcss"],
  },
  {
    name: "Tridentacare",
    category: ["Mobile"],
    image: "/og-bg.png",
    description:
      "Dental damage detection from photos using a YOLO segmentation model behind a Node.js API.",
    stack: ["siFlutter", "siDart", "siNodedotjs", "siPython"],
  },
  {
    name: "MelCalm",
    category: ["Mobile"],
    image: "/og-bg.png",
    description: "Wellness screening app with health assessments and personalized recommendations.",
    stack: ["siFlutter", "siDart", "siFirebase"],
  },
  {
    name: "Nikifit",
    category: ["Web App"],
    image: "/og-bg.png",
    description:
      "Booking app for a women-only Pilates studio: class booking, progress tracking and schedule updates.",
    stack: ["siLaravel", "siLivewire", "siTailwindcss", "siMysql"],
  },
  {
    name: "Tipotix",
    category: ["Web App"],
    image: "/og-bg.png",
    description:
      "Ticketing and event management with Midtrans payments and a Filament admin panel.",
    stack: ["siLaravel", "siLivewire", "siFilament", "siTailwindcss", "siMysql"],
  },
  {
    name: "Gabungin",
    category: ["Web App"],
    image: "/og-bg.png",
    description:
      "All-in-one service for shared access to premium apps, with TriPay payments and a browser extension.",
    stack: ["siNextdotjs", "siTypescript", "siTailwindcss", "siMysql"],
  },
  {
    name: "Sultan Top Up",
    category: ["Web App"],
    image: "/og-bg.png",
    description: "Game top-up and digital product store with Midtrans payments.",
    stack: ["siNextdotjs", "siTypescript", "siTailwindcss", "siMysql"],
  },
  {
    name: "SINFRA",
    category: ["Web App"],
    image: "/og-bg.png",
    description:
      "Information system for managing and monitoring regional infrastructure development.",
    stack: ["siLaravel", "siMysql", "siJavascript"],
  },
  {
    name: "Data Room KPBU",
    category: ["Web App"],
    image: "/og-bg.png",
    description:
      "Central data room for managing and sharing public-private partnership (KPBU) project documents.",
    stack: ["siLaravel", "siMysql", "siJavascript"],
  },
  {
    name: "Sajodo",
    category: ["Web App"],
    image: "/og-bg.png",
    description: "Product data management platform for a snack and food business.",
    stack: ["siLaravel", "siMysql", "siJavascript"],
  },
  ...(
    [
      [
        "Spesialis Karangan Bunga Indonesia",
        "Florist site with bouquet galleries, occasion-based collections and nationwide delivery info.",
      ],
      [
        "BE MODE Indonesia",
        "Fashion e-commerce store with lookbook galleries, size guides and WooCommerce checkout.",
      ],
      [
        "SG Academy",
        "Training academy site with course catalog, instructor profiles and online enrollment.",
      ],
      [
        "Roby Saputra Grup",
        "Holding company profile with division overview, leadership team and achievements.",
      ],
      [
        "Kontraktor Surabaya",
        "Contractor services site for Surabaya with project portfolio and client testimonials.",
      ],
      [
        "Wase Bumi Indonesia",
        "Corporate site for a natural resource company with company profile and services.",
      ],
      [
        "Cubicle Toilet",
        "Cubicle and toilet partition catalog with specifications, project gallery and inquiries.",
      ],
      [
        "PT. Adikarya Pesona Intinusa",
        "Education institution site with course listings, faculty profiles and online registration.",
      ],
      [
        "Wreative Store",
        "WooCommerce store for digital products and services with payment gateway.",
      ],
      ["Home Baraka", "Property platform with listings, service bookings and search."],
      ["Wreative", "Main site for the Wreative digital agency: portfolio, services and team."],
      [
        "Fajar Florist",
        "Online florist with seasonal collections and city-wide delivery ordering.",
      ],
      [
        "DPU Bina Marga Musi",
        "Public works department site with transparency reports and infrastructure updates.",
      ],
      [
        "Chicken Explorer",
        "Culinary brand site with menu showcase, online ordering and branch locator.",
      ],
      ["Kurir Pulsa", "Digital products and top-up store with automated order fulfillment."],
      [
        "Panji Semesta",
        "General trading company profile with services, partners and business inquiry forms.",
      ],
      [
        "Dzata Lombok Transport",
        "Lombok transport and travel site with booking, fleet and tour packages.",
      ],
      ["Pernikahan Ini", "Wedding planning platform with vendor directory, packages and gallery."],
      [
        "Pos Satpam",
        "Security post and equipment catalog with project references and quotation requests.",
      ],
      [
        "Toilet Portabel",
        "Portable toilet rental with pricing, event booking calendar and service areas.",
      ],
      [
        "Aviso",
        "Business consulting site with service packages, consultant profiles and case studies.",
      ],
      [
        "LPK Furinkazan",
        "Japanese language training institute with course levels and Japan placement program.",
      ],
    ] as const
  ).map(([name, description]) => ({
    name,
    category: ["Website"],
    image: "/projects/wordpress.png",
    description,
    stack: ["siWordpress"],
  })),
];

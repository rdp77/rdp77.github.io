import type { Project } from ".";

export const webApp: Project[] = [
  {
    name: "Dryas Library",
    category: ["Web App"],
    image: "/projects/dryaslibrary.png",
    description:
      "Library management system for University of 17 August 1945 Surabaya: book inventory and shelf organization.",
    stack: ["siLaravel", "siPostgresql", "siPhp"],
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
    name: "Stack Games",
    category: ["Web App"],
    image: "/projects/stack-games.png",
    description:
      "Game portal with a Laravel backend for gamers, with secure data and access control.",
    stack: ["siLaravel", "siPostgresql"],
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
    name: "Farmer Distribution",
    category: ["Web App", "Mobile"],
    image: "/projects/farmer-distribution.png",
    description:
      "Platform connecting farmers with suppliers and raw materials, with price comparison. Laravel API plus Flutter app.",
    stack: ["siLaravel", "siMysql", "siFlutter"],
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
    name: "Hardware Maintenance Management",
    category: ["Web App", "Mobile"],
    image: "/projects/hmm.png",
    description:
      "Hardware maintenance prediction using MTBF/MTTR metrics and QR code detection. Laravel API plus Flutter app.",
    stack: ["siLaravel", "siMysql", "siFlutter"],
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
];

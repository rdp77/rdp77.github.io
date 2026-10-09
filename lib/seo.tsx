import type { Metadata } from "next";
import { profile, siteUrl, experience, education, skills, projects } from "@/lib/profile";

const ID = { person: `${siteUrl}/#person`, site: `${siteUrl}/#website` };
const desc = `${profile.name} (${profile.handle}) — ${profile.role} based in Surabaya, Indonesia. Back-end APIs, Laravel, Next.js, Flutter, cloud and Web3.`;

export const keywords = [
  "Moh Ravi Dwi Putra", "Ravi Dwi Putra", "rdp77", "Software Engineer", "Back End Developer", "Full Stack Developer",
  "Laravel", "Next.js", "React", "Flutter", "GraphQL", "Web3", "Surabaya", "Indonesia", "Portfolio",
];

/** Per-page metadata with canonical, OG and Twitter wired consistently. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: { type: "website", url, title: `${title} · ${profile.name}`, description, siteName: profile.name, locale: "en_US" },
    twitter: { card: "summary_large_image", title: `${title} · ${profile.name}`, description },
  };
}

export const siteDescription = desc;

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function breadcrumb(...items: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", ""], ...items].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${siteUrl}${path}` })),
  };
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": ID.site,
      url: siteUrl,
      name: `${profile.name} — ${profile.role}`,
      description: desc,
      inLanguage: "en",
      publisher: { "@id": ID.person },
    },
    {
      "@type": "Person",
      "@id": ID.person,
      name: profile.name,
      alternateName: [profile.handle, "Ravi Dwi Putra"],
      url: siteUrl,
      image: `${siteUrl}/avatar.jpg`,
      jobTitle: profile.role,
      description: desc,
      birthPlace: { "@type": "Place", name: "Lamongan, Indonesia" },
      homeLocation: {
        "@type": "Place",
        name: "Surabaya, East Java, Indonesia",
        address: { "@type": "PostalAddress", addressLocality: "Surabaya", addressRegion: "East Java", addressCountry: "ID" },
      },
      nationality: { "@type": "Country", name: "Indonesia" },
      worksFor: { "@type": "Organization", name: experience[0].company },
      alumniOf: education.slice(0, 2).map((e) => ({ "@type": "EducationalOrganization", name: e.school })),
      knowsAbout: Object.values(skills).flat().map((s) => s.name),
      knowsLanguage: ["en", "id"],
      sameAs: profile.socials.map((s) => s.href),
      mainEntityOfPage: { "@id": ID.site },
    },
  ],
};

export const profilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${siteUrl}/about`,
  name: `About ${profile.name}`,
  mainEntity: { "@id": ID.person },
};

export const projectsList = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${siteUrl}/projects`,
  name: `Projects by ${profile.name}`,
  author: { "@id": ID.person },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "CreativeWork", name: p.name, description: p.description, image: `${siteUrl}${p.image}`, author: { "@id": ID.person } },
    })),
  },
};

export const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteUrl}/contact`,
  name: `Contact ${profile.name}`,
  mainEntity: { "@id": ID.person },
};

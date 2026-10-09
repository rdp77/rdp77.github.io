# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two equal audiences: hiring managers/clients evaluating Moh Ravi Dwi Putra (rdp77) as a full-stack developer, and developer peers/followers of his open-source and creator work. Jobs: judge credibility quickly, then contact, hire, follow, or sponsor.

## Product Purpose
Personal portfolio framed as a developer dashboard / "personal operating system". Shows who he is, what he has built, and how he works. Success: visitors reach contact, sponsor, or follow actions.

## Positioning
Portfolio that behaves like an observability dashboard (coding time, GitHub activity, wallet, analytics, service status) rather than a static résumé.

## Operating Context
Next.js (App Router) + TypeScript + Tailwind + Radix; deployed on Vercel/GitHub Pages domain rdp77.github.io. Personal content centralized in `lib/profile.ts`. Contact via Web3Forms + Turnstile.

## Capabilities and Constraints
- Widgets: WakaTime, GitHub, Ethereum wallet, Umami analytics, infrastructure status. Mixed data: some live (needs API keys in env), some sample/decorative; sample data shown until keys exist.
- Sections: Dashboard, Projects, Creators (TikTok/YouTube/Instagram tabs, "Coming Soon"), About, Contact.
- Languages: English and Indonesian copy required (i18n not yet implemented).
- Must respect prefers-reduced-motion; SEO files present (robots, sitemap).

## Brand Commitments
Name: Moh Ravi Dwi Putra, handle rdp77. Existing DESIGN.md (Render-style reference) is the incumbent visual authority per plan.md.

## Evidence on Hand
Social links and sponsor links in `lib/profile.ts`. Absent: `public/resume.pdf`, real project entries, real story copy, real email (placeholders). Do not fabricate.

## Product Principles
- Real data over decoration; label anything sample.
- Fast, quiet, dependable, like a production service.
- Content lives in one editable place.
- Both audiences reach a clear action within one screen.

## Accessibility & Inclusion
Reduced-motion support required; bilingual (EN/ID) audience.

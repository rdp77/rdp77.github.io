# Personal Portfolio Website

Build a modern, premium, developer portfolio website using **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **radix UI**.

The website should feel like a combination of a modern portfolio, an observability dashboard (similar to Render/Vercel), and a personal operating system.

---

# Primary Design Rule

**Strictly follow the provided `DESIGN.md` file.**

The design.md file is the single source of truth for:

- Color palette
- Typography
- Spacing
- Border radius
- Shadows
- Layout
- Component styling
- Accessibility
- Responsive behavior
- Motion principles

Do **not** introduce a new design language that conflicts with design.md.

---

# Overall Goals

The website should be:

- Minimal
- Modern
- Premium
- Clean
- Fast
- Accessible
- Responsive
- Dark mode first
- SEO friendly
- Highly maintainable
- Production ready

Avoid unnecessary visual clutter.

---

# Tech Stack

Use:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- radix UI
- Motion (motion.dev) preferred
- GSAP only when Motion cannot achieve the desired interaction
- Lucide Icons
- Simple Icons / Devicon for technology logos

---

# Animations

Use Motion (motion.dev) throughout the website.

Animations should be:

- Smooth
- Fast
- Subtle
- Professional

Include:

- Fade In
- Blur Reveal
- Slide Up
- Stagger Children
- Hover Effects
- Page Transitions
- Number Counter Animations
- Loading Animations
- Scroll Reveal

Respect `prefers-reduced-motion`.

Avoid flashy animations.

---

# Navigation

Sticky navigation bar with backdrop blur.

Menu:

- Dashboard (Default menu)
- Projects
- Creators
- About
- Contact

Smooth scrolling between sections.

---

# Dashboard (Landing Page)

The homepage should function as a personal developer dashboard.

Every widget should be displayed as modern dashboard cards.

---

## WakaTime Dashboard

Display:

- Total Coding Time
- Today's Coding Time
- Weekly Coding Time
- Language Breakdown
- Editors
- Operating Systems
- Last Activity

---

## Ethereum Dashboard

Display:

- Wallet Address
- ENS Name (if available)
- ETH Balance
- Total Transactions
- Latest Transactions
- Network

Design should resemble a blockchain wallet dashboard.

---

## Analytics Dashboard

Support:

- Umami Analytics
- Vercel Analytics

Display:

- Visitors
- Sessions
- Page Views
- Top Pages
- Top Referrers
- Countries
- Devices

Use modern statistic cards.

---

## GitHub Activity

Display:

- Contribution Graph
- Recent Commits
- Pull Requests
- Issues
- Repository Statistics
- Stars
- Followers

---

## Infrastructure Status

Inspired by Render's service status dashboard.

Monitor:

- Website
- API
- Database
- Redis
- Server
- Third-party APIs

Examples:

- GitHub API
- WakaTime API
- Vercel API
- Umami API

Each service should display:

- Healthy
- Degraded
- Offline

Include:

- Uptime Percentage
- Response Time
- Last Incident

The design should resemble a professional observability dashboard.

---

# Projects

Display projects in a responsive grid.

Each project card should include:

- Thumbnail
- Project Name
- Short Description
- Status
- Live Demo
- Source Code

Display the technology stack using official logos.

Examples:

- Next.js
- React
- Laravel
- Flutter
- TypeScript
- Tailwind CSS
- MySQL
- PostgreSQL
- Redis
- Docker
- Cloudflare
- Vercel
- GraphQL

---

# Creators

Use Tabs.

Tabs:

- TikTok
- YouTube
- Instagram

For now, use placeholder content indicating "Coming Soon".

The architecture should allow replacing placeholders with embedded social content in the future.

---

# Contact

Create a contact form using Web3Forms.

Fields:

- Name
- Email
- Subject
- Message

Requirements:

- Cloudflare Turnstile validation
- Client-side validation
- Loading state
- Success state
- Error state

---

# About

## Story

A storytelling section introducing the developer.

---

## Skills

Display categorized skills with icons.

Suggested categories:

- Frontend
- Backend
- Mobile
- Cloud
- DevOps
- Database
- Web3
- Tools

Each skill should have an icon.

---

## Experience

Display work experience in a vertical timeline.

Each item includes:

- Company
- Position
- Duration
- Description

Sort by most recent first.

---

## Resume

Create a sticky sidebar.

Include:

- Table of Contents
- Download Resume button

The sidebar should remain sticky while scrolling.

---

## Education

Display education in a clean timeline.

---

## Achievements

Group achievements by year.

Each item includes:

- Award or Certification Name
- Credential Code
- Issuer

Example:

### 2026

- AWS Certified Developer
- Credential ID
- Amazon Web Services

### 2025

- Google Cloud Certification
- Credential ID
- Google

Use a clean list layout.

---

# Footer

Create a footer inspired by **Render.com** while remaining consistent with the design system in `design.md`.

Sections:

## Contact

- Email

## Social

- GitHub
- LinkedIn
- X
- Instagram
- TikTok
- YouTube

## Donate

Support:

- GitHub Sponsors
- Buy Me a Coffee
- Ethereum Wallet
- QRIS (optional)

Include a small note:

> Design inspired by Render.com.

---

# Performance

The website should be optimized for performance.

Requirements:

- Image Optimization
- Lazy Loading
- Route-based Code Splitting
- Dynamic Imports where appropriate
- Server Components by default
- Client Components only when necessary
- Proper caching strategy
- Optimized fonts
- Lighthouse score above 95

---

# SEO

Implement:

- Metadata API
- Open Graph
- Twitter Card
- robots.txt
- sitemap.xml
- Structured Data (JSON-LD)
- Canonical URLs

---

# Accessibility

Meet WCAG AA standards.

Requirements:

- Keyboard navigation
- Focus states
- Proper ARIA attributes
- Semantic HTML
- Screen reader support
- Color contrast compliance

---

# Code Quality

The project should follow clean architecture principles.

Requirements:

- Modular folder structure
- Reusable components
- Strong TypeScript typing
- Proper error boundaries
- Loading UI
- Empty states
- Error states
- Reusable hooks
- Reusable utility functions

---

# API Integration

All external API requests should be handled securely.

Use server-side API routes or Server Actions whenever possible.

Never expose API keys or secrets to the client.

Design the architecture so that adding new dashboard widgets requires minimal changes.

Use cache headers and revalidation strategies to minimize API calls.

---

# References

Use these websites only as inspiration for layout, interaction, information hierarchy, and user experience.

Do **not** copy any design directly.

References:

- https://www.ravidwiputra.web.id/
- https://www.satriabahari.my.id/
- https://ridwaanhall.com/
- https://aulianza.com/
- https://dimrak.me/
- https://render.com/

---

# Expected Result

Create a world-class developer portfolio that feels like a hybrid of:

- A premium SaaS dashboard
- A modern developer portfolio
- A personal operating system
- An observability platform similar to Render or Vercel

The final experience should be elegant, polished, highly interactive, extremely performant, and maintainable while remaining faithful to the provided `design.md`.

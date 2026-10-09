# Graph Report - rdp77.github.io  (2026-10-09)

## Corpus Check
- 180 files · ~78,918 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .ico 1, .css 1)

## Summary
- 1243 nodes · 1334 edges · 150 communities (68 shown, 82 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dee3e95a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Node.js Best Practices
- Components
- plan.md
- Accessibility (a11y)
- Node.js Backend Patterns
- SEO optimization
- index.tsx
- Accessibility Code Patterns
- Cache Components (Next.js 16+)
- TypeScript Advanced Types
- Self-Hosting Next.js
- Next.js Best Practices
- wakatime.tsx
- Metadata
- Tailwind CSS Development Patterns
- compilerOptions
- Parallel & Intercepting Routes
- React Composition Patterns
- Tailwind CSS Documentation
- Data Patterns
- 5. Re-render Optimization
- profile.ts
- Bundling
- 7. JavaScript Performance
- Quick Reference
- motion.tsx
- Tailwind CSS Accessibility Guidelines
- Tailwind CSS Configuration
- package.json
- Tailwind CSS Layout Patterns
- Error Handling
- File Conventions
- Font Optimization
- 6. Rendering Performance
- layout.tsx
- React Composition Patterns
- Dark Mode
- React Composition Patterns
- Async Params and SearchParams
- Available Tools
- Functions
- Common Causes and Fixes
- React Best Practices
- 3. Server-Side Performance
- Sections
- Tailwind CSS Animations & Transitions
- tailwind-css-patterns/SKILL.md
- Tailwind CSS Performance Optimization
- footer.tsx
- status.tsx
- next-best-practices/SKILL.md
- primitives.tsx
- creators.tsx
- Image Optimization
- Route Handlers
- Scripts
- Product
- Directives
- Detection Rules
- Runtime Selection
- 1. Eliminating Waterfalls
- 2. Bundle Size Optimization
- 8. Advanced Patterns
- Sections
- React Best Practices
- Suspense Boundaries
- 4. Client-Side Data Fetching
- async-cheap-condition-before-await.md
- Prefer Statically Analyzable Paths
- README.md
- frontend-design/SKILL.md
- Upgrade Next.js
- AGENTS.md
- architecture-avoid-boolean-props.md
- architecture-compound-components.md
- patterns-children-over-render-props.md
- patterns-explicit-variants.md
- react19-no-forwardref.md
- state-context-interface.md
- state-decouple-implementation.md
- state-lift-state.md
- composition-patterns/rules/_template.md
- advanced-effect-event-deps.md
- advanced-event-handler-refs.md
- advanced-init-once.md
- advanced-use-latest.md
- async-api-routes.md
- async-dependencies.md
- async-parallel.md
- async-suspense-boundaries.md
- bundle-barrel-imports.md
- bundle-conditional.md
- bundle-defer-third-party.md
- bundle-dynamic-imports.md
- bundle-preload.md
- client-event-listeners.md
- client-localstorage-schema.md
- client-passive-event-listeners.md
- client-swr-dedup.md
- js-batch-dom-css.md
- js-cache-function-results.md
- js-cache-property-access.md
- js-cache-storage.md
- js-combine-iterations.md
- js-early-exit.md
- js-flatmap-filter.md
- js-hoist-regexp.md
- js-index-maps.md
- js-length-check-first.md
- js-min-max-loop.md
- js-request-idle-callback.md
- js-set-map-lookups.md
- js-tosorted-immutable.md
- rendering-activity.md
- rendering-animate-svg-wrapper.md
- rendering-conditional-render.md
- rendering-content-visibility.md
- rendering-hoist-jsx.md
- rendering-hydration-no-flicker.md
- rendering-hydration-suppress-warning.md
- rendering-resource-hints.md
- rendering-script-defer-async.md
- rendering-svg-precision.md
- rendering-usetransition-loading.md
- rerender-defer-reads.md
- rerender-dependencies.md
- rerender-derived-state.md
- rerender-derived-state-no-effect.md
- rerender-functional-setstate.md
- rerender-lazy-state-init.md
- rerender-memo.md
- rerender-memo-with-default-value.md
- rerender-move-effect-to-event.md
- rerender-no-inline-components.md
- rerender-simple-expression-in-memo.md
- rerender-split-combined-hooks.md
- rerender-transitions.md
- rerender-use-deferred-value.md
- rerender-use-ref-transient-values.md
- server-after-nonblocking.md
- server-auth-actions.md
- server-cache-lru.md
- server-dedup-props.md
- server-parallel-fetching.md
- server-parallel-nested-fetching.md
- server-serialization.md
- react-best-practices/rules/_template.md

## God Nodes (most connected - your core abstractions)
1. `Next.js Best Practices` - 20 edges
2. `next` - 18 edges
3. `Tailwind CSS Documentation` - 17 edges
4. `compilerOptions` - 16 edges
5. `5. Re-render Optimization` - 16 edges
6. `7. JavaScript Performance` - 15 edges
7. `Node.js Best Practices` - 14 edges
8. `Render — Style Reference` - 14 edges
9. `Components` - 14 edges
10. `Self-Hosting Next.js` - 12 edges

## Surprising Connections (you probably didn't know these)
- `3.3 Avoid Shared Module State for Request Data` --references--> `Dashboard()`  [INFERRED]
  .agents/skills/react-best-practices/AGENTS.md → components/dashboard/index.tsx
- `Avoid Shared Module State for Request Data` --references--> `Dashboard()`  [INFERRED]
  .agents/skills/react-best-practices/rules/server-no-shared-module-state.md → components/dashboard/index.tsx
- `Container()` --calls--> `cn()`  [EXTRACTED]
  components/ui/primitives.tsx → lib/utils.ts
- `TechIcon()` --calls--> `getIcon()`  [EXTRACTED]
  components/ui/primitives.tsx → lib/icons.ts
- `AnalyticsCard()` --calls--> `getAnalytics()`  [EXTRACTED]
  components/dashboard/analytics.tsx → lib/data/analytics.ts

## Import Cycles
- None detected.

## Communities (150 total, 82 thin omitted)

### Community 0 - "Node.js Best Practices"
Cohesion: 0.05
Nodes (39): 10. Decision Checklist, 1. Framework Selection (2025), 2. Runtime Considerations (2025), 3. Architecture Principles, 4. Error Handling Principles, 5. Async Patterns Principles, 6. Validation Principles, 7. Security Principles (+31 more)

### Community 1 - "Components"
Cohesion: 0.05
Nodes (38): Agent Prompt Guide, Border Radius, Components, CSS Custom Properties, Do, Do's and Don'ts, Don't, Dropdown / Select Input (+30 more)

### Community 2 - "plan.md"
Cohesion: 0.06
Nodes (35): 2025, 2026, About, Accessibility, Achievements, Analytics Dashboard, Animations, API Integration (+27 more)

### Community 3 - "Accessibility (a11y)"
Cohesion: 0.06
Nodes (35): Accessibility (a11y), Accessible authentication (3.3.8) — new in 2.2, ARIA usage (4.1.2), Automated testing, Color contrast (1.4.3, 1.4.6), Common issues by impact, Conformance levels, Consistent help (3.2.6) — new in 2.2 (+27 more)

### Community 4 - "Node.js Backend Patterns"
Cohesion: 0.06
Nodes (33): API Response Format, Authentication & Authorization, Caching Strategies, Database Patterns, Dependency Injection, DI Container, JWT Authentication, MongoDB with Mongoose (+25 more)

### Community 5 - "SEO optimization"
Cohesion: 0.06
Nodes (34): Article, Breadcrumbs, Crawlability, Critical, FAQ, Font sizes, Heading structure, High priority (+26 more)

### Community 6 - "index.tsx"
Cohesion: 0.10
Nodes (26): AnalyticsCard(), EthereumCard(), shade, GithubCard(), shade, widgets, Counter(), EmptyState() (+18 more)

### Community 7 - "Accessibility Code Patterns"
Cohesion: 0.07
Nodes (25): Accessibility Code Patterns, ARIA tabs, Dragging movements, Error handling, Form labels, Live regions and notifications, Modal focus trap, Screen reader commands (+17 more)

### Community 8 - "Cache Components (Next.js 16+)"
Cohesion: 0.07
Nodes (26): 1. Static (Auto-Prerendered), 2. Cached (`use cache`), 3. Dynamic (Suspense), Built-in Profiles, Cache Components (Next.js 16+), Cache Invalidation, Cache Key Generation, Cache Profiles (+18 more)

### Community 9 - "TypeScript Advanced Types"
Cohesion: 0.08
Nodes (23): 1. Generics, 1. Infer Keyword, 2. Conditional Types, 2. Type Guards, 3. Assertion Functions, 3. Mapped Types, 4. Template Literal Types, 5. Utility Types (+15 more)

### Community 10 - "Self-Hosting Next.js"
Cohesion: 0.09
Nodes (22): Build-time vs Runtime, Docker Compose, Docker Deployment, Dockerfile, Environment Variables, Health Check Endpoint, Image Optimization, ISR and Cache Handlers (+14 more)

### Community 11 - "Next.js Best Practices"
Cohesion: 0.10
Nodes (20): Async Patterns, Bundling, Data Patterns, Debug Tricks, Directives, Error Handling, File Conventions, Font Optimization (+12 more)

### Community 12 - "wakatime.tsx"
Cohesion: 0.19
Nodes (11): WakatimeCard(), Nav(), Bar(), Badge(), Card(), getWakatime(), pick(), sample (+3 more)

### Community 13 - "Metadata"
Cohesion: 0.11
Nodes (18): Avoid Duplicate Fetches, Basic OG Image, Custom Fonts, Dynamic Metadata, Dynamic OG Image, File Naming, Important Rules, Important: Server Components Only (+10 more)

### Community 14 - "Tailwind CSS Development Patterns"
Cohesion: 0.11
Nodes (19): Best Practices, Classes Not Applying, Common Patterns, Constraints and Warnings, Dark Mode Issues, Dark Mode Toggle, Examples, External Resources (+11 more)

### Community 15 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 16 - "Parallel & Intercepting Routes"
Cohesion: 0.11
Nodes (17): 1. Missing `default.tsx` → 404 on Refresh, 2. Modal Persists After Navigation, 3. Nested Parallel Routes Need Defaults Too, 4. Intercepted Route Shows Wrong Content, 5. TypeScript Errors with `params`, Common Gotchas, Complete Example: Photo Gallery Modal, File Structure (+9 more)

### Community 17 - "React Composition Patterns"
Cohesion: 0.12
Nodes (16): 1.1 Avoid Boolean Prop Proliferation, 1.2 Use Compound Components, 1. Component Architecture, 2.1 Decouple State Management from UI, 2.2 Define Generic Context Interfaces for Dependency Injection, 2.3 Lift State into Provider Components, 2. State Management, 3.1 Create Explicit Component Variants (+8 more)

### Community 18 - "Tailwind CSS Documentation"
Cohesion: 0.12
Nodes (17): Applying Variants in CSS, Arbitrary Values, Color System, Custom Theme Configuration, Custom Utilities, Custom Variants, Dark Mode, Functions and Directives (+9 more)

### Community 19 - "Data Patterns"
Cohesion: 0.12
Nodes (15): Avoiding Data Waterfalls, Client Component Data Fetching, Data Patterns, Decision Tree, Option 1: Pass from Server Component (Preferred), Option 2: Fetch on Mount (When Necessary), Option 3: Server Action for Reads (Works But Not Ideal), Pattern 1: Server Components (Preferred for Reads) (+7 more)

### Community 20 - "5. Re-render Optimization"
Cohesion: 0.12
Nodes (16): 5.10 Subscribe to Derived State, 5.11 Use Functional setState Updates, 5.12 Use Lazy State Initialization, 5.13 Use Transitions for Non-Urgent Updates, 5.14 Use useDeferredValue for Expensive Derived Renders, 5.15 Use useRef for Transient Values, 5.1 Calculate Derived State During Rendering, 5.2 Defer State Reads to Usage Point (+8 more)

### Community 21 - "profile.ts"
Cohesion: 0.16
Nodes (9): metadata, About(), toc, achievements, education, experience, siteUrl, skills (+1 more)

### Community 22 - "Bundling"
Cohesion: 0.13
Nodes (14): Bundle Analysis, Bundling, Common Problematic Packages, CSS Imports, Error Signs, Error Signs, ESM/CommonJS Issues, Migrating from Webpack to Turbopack (+6 more)

### Community 23 - "7. JavaScript Performance"
Cohesion: 0.13
Nodes (15): 7.10 Hoist RegExp Creation, 7.11 Use flatMap to Map and Filter in One Pass, 7.12 Use Loop for Min/Max Instead of Sort, 7.13 Use Set/Map for O(1) Lookups, 7.14 Use toSorted() Instead of sort() for Immutability, 7.1 Avoid Layout Thrashing, 7.2 Build Index Maps for Repeated Lookups, 7.3 Cache Property Access in Loops (+7 more)

### Community 24 - "Quick Reference"
Cohesion: 0.13
Nodes (14): 1. Eliminating Waterfalls (CRITICAL), 2. Bundle Size Optimization (CRITICAL), 3. Server-Side Performance (HIGH), 4. Client-Side Data Fetching (MEDIUM-HIGH), 5. Re-render Optimization (MEDIUM), 6. Rendering Performance (MEDIUM), 7. JavaScript Performance (LOW-MEDIUM), 8. Advanced Patterns (LOW) (+6 more)

### Community 25 - "motion.tsx"
Cohesion: 0.14
Nodes (12): metadata, icon, Projects(), ease, HoverLift(), Motion(), PageTransition(), Stagger() (+4 more)

### Community 26 - "Tailwind CSS Accessibility Guidelines"
Cohesion: 0.14
Nodes (13): Accessibility Checklist, Alert Dialog, ARIA Patterns with Tailwind, Color Contrast, Contrast Guidelines, Focus Management, Focus Visible vs Focus, Motion Preferences (+5 more)

### Community 27 - "Tailwind CSS Configuration"
Cohesion: 0.14
Nodes (13): Advanced v4.1 Features, Creating a Reusable Preset, CSS-First Configuration (v4.1+), Custom Plugin Example, Custom Utilities, Enhanced Arbitrary Values, JavaScript Configuration (Legacy), Native CSS Custom Properties (+5 more)

### Community 28 - "package.json"
Cohesion: 0.05
Nodes (39): eslintConfig, dependencies, lucide-react, motion, next, radix-ui, @radix-ui/themes, react (+31 more)

### Community 29 - "Tailwind CSS Layout Patterns"
Cohesion: 0.12
Nodes (16): Background Colors, Colors, Container & Max Width, Flexbox Layouts, Font Size & Weight, Grid Layouts, Layout Utilities, Line Height & Letter Spacing (+8 more)

### Community 30 - "Error Handling"
Cohesion: 0.17
Nodes (11): Auth Errors, Error Boundaries, Error Handling, Error Hierarchy, `error.tsx`, `global-error.tsx`, Not Found, `not-found.tsx` (+3 more)

### Community 31 - "File Conventions"
Cohesion: 0.17
Nodes (11): File Conventions, File Conventions Reference, Intercepting Routes, Middleware / Proxy, Next.js 14-15: `middleware.ts`, Next.js 16+: `proxy.ts`, Parallel Routes, Private Folders (+3 more)

### Community 32 - "Font Optimization"
Cohesion: 0.18
Nodes (11): Common Mistakes, Display Strategy, Don't Use Manual Font Links, Font in Specific Components, Font Optimization, Font Weights and Styles, Google Fonts, Local Fonts (+3 more)

### Community 33 - "6. Rendering Performance"
Cohesion: 0.17
Nodes (12): 6.10 Use React DOM Resource Hints, 6.11 Use useTransition Over Manual Loading States, 6.1 Animate SVG Wrapper Instead of SVG Element, 6.2 CSS content-visibility for Long Lists, 6.3 Hoist Static JSX Elements, 6.4 Optimize SVG Precision, 6.5 Prevent Hydration Mismatch Without Flickering, 6.6 Suppress Expected Hydration Mismatches (+4 more)

### Community 34 - "layout.tsx"
Cohesion: 0.11
Nodes (15): app_globals, inter, jsonLd, metadata, mono, viewport, Footer(), NavProgress() (+7 more)

### Community 35 - "React Composition Patterns"
Cohesion: 0.18
Nodes (10): 1. Component Architecture (HIGH), 2. State Management (MEDIUM), 3. Implementation Patterns (MEDIUM), 4. React 19 APIs (MEDIUM), Full Compiled Document, How to Use, Quick Reference, React Composition Patterns (+2 more)

### Community 36 - "Dark Mode"
Cohesion: 0.18
Nodes (10): Basic Dark Mode Support, Container Queries (v4.1+), Dark Mode, Dark Mode Best Practices, Dark Mode Toggle (React), Mobile-First Responsive Layout, Responsive Card Component, Responsive Design Patterns (+2 more)

### Community 37 - "React Composition Patterns"
Cohesion: 0.20
Nodes (9): Component Architecture (CRITICAL), Core Principles, Creating a New Rule, Impact Levels, Implementation Patterns (MEDIUM), React Composition Patterns, Rules, State Management (HIGH) (+1 more)

### Community 38 - "Async Params and SearchParams"
Cohesion: 0.20
Nodes (9): Async Cookies and Headers, Async Params and SearchParams, Async Patterns, generateMetadata, Migration Codemod, Pages and Layouts, Route Handlers, SearchParams (+1 more)

### Community 39 - "Available Tools"
Cohesion: 0.20
Nodes (10): Available Tools, Example: Get Errors, `get_errors`, `get_logs`, `get_page_metadata`, `get_project_metadata`, `get_routes`, `get_server_action_by_id` (+2 more)

### Community 40 - "Functions"
Cohesion: 0.20
Nodes (9): After Response, Common Examples, Functions, Generate Functions, Navigation, Navigation Hooks (Client), Request/Response, Server Functions (+1 more)

### Community 41 - "Common Causes and Fixes"
Cohesion: 0.20
Nodes (9): Browser-only APIs, Common Causes and Fixes, Date/Time Rendering, Debugging, Error Signs, Hydration Errors, Invalid HTML Nesting, Random Values or IDs (+1 more)

### Community 42 - "React Best Practices"
Cohesion: 0.40
Nodes (4): Abstract, React Best Practices, References, Table of Contents

### Community 43 - "3. Server-Side Performance"
Cohesion: 0.12
Nodes (13): 3.10 Use after() for Non-Blocking Operations, 3.1 Authenticate Server Actions Like API Routes, 3.2 Avoid Duplicate Serialization in RSC Props, 3.3 Avoid Shared Module State for Request Data, 3.4 Cross-Request LRU Caching, 3.5 Hoist Static I/O to Module Level, 3.6 Minimize Serialization at RSC Boundaries, 3.7 Parallel Data Fetching with Component Composition (+5 more)

### Community 44 - "Sections"
Cohesion: 0.20
Nodes (9): 1. Eliminating Waterfalls (async), 2. Bundle Size Optimization (bundle), 3. Server-Side Performance (server), 4. Client-Side Data Fetching (client), 5. Re-render Optimization (rerender), 6. Rendering Performance (rendering), 7. JavaScript Performance (js), 8. Advanced Patterns (advanced) (+1 more)

### Community 45 - "Tailwind CSS Animations & Transitions"
Cohesion: 0.20
Nodes (9): Basic Transitions, Built-in Animations, Common Use Cases, Custom Animations (v4.1+), Global Reduced Motion Support, Motion Preferences, Tailwind CSS Animations & Transitions, Transform Effects (+1 more)

### Community 46 - "tailwind-css-patterns/SKILL.md"
Cohesion: 0.20
Nodes (7): Card Component, Form Elements, Modal/Dialog, Navigation Bar, React Button Component with Variants, Responsive User Card, Tailwind CSS Component Patterns

### Community 47 - "Tailwind CSS Performance Optimization"
Cohesion: 0.20
Nodes (9): Best Practices for Performance, Bundle Size Optimization, Content Path Best Practices, CSS Optimization Techniques, Development Performance (v4.1+), Minification, Production Build Optimization, PurgeCSS Configuration (+1 more)

### Community 48 - "footer.tsx"
Cohesion: 0.33
Nodes (7): EmailLink(), donateIcon, map, SocialIcon(), TechIcon(), profile, lucide-react

### Community 49 - "status.tsx"
Cohesion: 0.31
Nodes (8): label, StatusCard(), tone, getStatus(), Health, probe(), Service, targets()

### Community 51 - "primitives.tsx"
Cohesion: 0.12
Nodes (14): metadata, ContactAside(), Contact(), State, DashboardHero(), meta, Reveal(), btnPrimary (+6 more)

### Community 52 - "creators.tsx"
Cohesion: 0.20
Nodes (6): metadata, Creators(), Head(), link(), tabs, radix-ui

### Community 53 - "Image Optimization"
Cohesion: 0.22
Nodes (9): Always Use next/image, Blur Placeholder, Common Mistakes, Image Optimization, Priority Loading, Remote Images Configuration, Required Props, Responsive Images (+1 more)

### Community 54 - "Route Handlers"
Cohesion: 0.22
Nodes (9): Basic Usage, Dynamic Route Handlers, Environment Behavior, GET Handler Conflicts with page.tsx, Request Helpers, Response Helpers, Route Handlers, Supported Methods (+1 more)

### Community 55 - "Scripts"
Cohesion: 0.22
Nodes (9): Don't Put Script in Head, Google Analytics, Google Tag Manager, Inline Scripts Need ID, Loading Strategies, Other Third-Party Scripts, Quick Reference, Scripts (+1 more)

### Community 56 - "Product"
Cohesion: 0.17
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 58 - "Directives"
Cohesion: 0.29
Nodes (6): Directives, Next.js Directive, React Directives, `'use cache'`, `'use client'`, `'use server'`

### Community 59 - "Detection Rules"
Cohesion: 0.29
Nodes (6): 1. Async Client Components Are Invalid, 2. Non-Serializable Props to Client Components, 3. Server Actions Are the Exception, Detection Rules, Quick Reference, RSC Boundaries

### Community 60 - "Runtime Selection"
Cohesion: 0.29
Nodes (6): Detection, Edge Runtime, Node.js Runtime (Default), Runtime Selection, Use Node.js Runtime by Default, When to Use Each

### Community 61 - "1. Eliminating Waterfalls"
Cohesion: 0.29
Nodes (7): 1.1 Check Cheap Conditions Before Async Flags, 1.2 Defer Await Until Needed, 1.3 Dependency-Based Parallelization, 1.4 Prevent Waterfall Chains in API Routes, 1.5 Promise.all() for Independent Operations, 1.6 Strategic Suspense Boundaries, 1. Eliminating Waterfalls

### Community 62 - "2. Bundle Size Optimization"
Cohesion: 0.29
Nodes (7): 2.1 Avoid Barrel File Imports, 2.2 Conditional Module Loading, 2.3 Defer Non-Critical Third-Party Libraries, 2.4 Dynamic Imports for Heavy Components, 2.5 Prefer Statically Analyzable Paths, 2.6 Preload Based on User Intent, 2. Bundle Size Optimization

### Community 63 - "8. Advanced Patterns"
Cohesion: 0.40
Nodes (5): 8.1 Do Not Put Effect Events in Dependency Arrays, 8.2 Initialize App Once, Not Per Mount, 8.3 Store Event Handlers in Refs, 8.4 useEffectEvent for Stable Callback Refs, 8. Advanced Patterns

### Community 64 - "Sections"
Cohesion: 0.33
Nodes (5): 1. Component Architecture (architecture), 2. State Management (state), 3. Implementation Patterns (patterns), 4. React 19 APIs (react19), Sections

### Community 65 - "React Best Practices"
Cohesion: 0.33
Nodes (5): Creating a New Rule, Getting Started, React Best Practices, Rule File Structure, Structure

### Community 66 - "Suspense Boundaries"
Cohesion: 0.40
Nodes (4): Quick Reference, Suspense Boundaries, usePathname, useSearchParams

### Community 67 - "4. Client-Side Data Fetching"
Cohesion: 0.40
Nodes (5): 4.1 Deduplicate Global Event Listeners, 4.2 Use Passive Event Listeners for Scrolling Performance, 4.3 Use SWR for Automatic Deduplication, 4.4 Version and Minimize localStorage Data, 4. Client-Side Data Fetching

### Community 70 - "Prefer Statically Analyzable Paths"
Cohesion: 0.50
Nodes (3): File-System Paths, Import Paths, Prefer Statically Analyzable Paths

### Community 75 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **807 isolated node(s):** `metadata`, `metadata`, `metadata`, `inter`, `mono` (+802 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 925 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **82 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `React Best Practices` connect `React Best Practices` to `6. Rendering Performance`, `4. Client-Side Data Fetching`, `3. Server-Side Performance`, `5. Re-render Optimization`, `7. JavaScript Performance`, `1. Eliminating Waterfalls`, `2. Bundle Size Optimization`, `8. Advanced Patterns`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `3. Server-Side Performance` connect `3. Server-Side Performance` to `React Best Practices`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `Dashboard()` connect `3. Server-Side Performance` to `primitives.tsx`, `index.tsx`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _807 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Node.js Best Practices` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Components` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Should `plan.md` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
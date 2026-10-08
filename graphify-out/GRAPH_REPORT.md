# Graph Report - rdp77.github.io  (2026-10-08)

## Corpus Check
- 154 files · ~72,363 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .css 2)

## Summary
- 1215 nodes · 1143 edges · 149 communities (67 shown, 82 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53ce2a26`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- tsconfig.json
- components.json
- components/theme-provider.tsx
- dependencies
- devDependencies
- Environment API (Vite 6+)
- Button
- scripts
- compilerOptions
- React + TypeScript + Vite + shadcn/ui
- compilerOptions
- app_globals
- lib_utils_cn
- Node.js Best Practices
- Styling & Customization
- Tailwind v4 + shadcn/ui Production Stack
- Accessibility (a11y)
- Node.js Backend Patterns
- SEO optimization
- Accessibility Code Patterns
- Migration Guide: Hardcoded Colors → CSS Variables
- Common Gotchas & Solutions
- TypeScript Advanced Types
- Vite Features
- compilerOptions
- Dark Mode Implementation
- React Composition Patterns
- Commands
- Tailwind CSS Layout Patterns
- Tailwind CSS Documentation
- templates/components.json
- 5. Re-render Optimization
- 7. JavaScript Performance
- Quick Reference
- Customization & Theming
- Tailwind CSS Accessibility Guidelines
- Tailwind CSS Configuration
- Component Composition
- Vite Configuration
- Vite Plugin API
- 6. Rendering Performance
- Tools
- React Composition Patterns
- 3. Server-Side Performance
- Dark Mode
- Tailwind CSS Development Patterns
- Tailwind v4 Plugins Reference
- React Composition Patterns
- Sections
- shadcn/ui
- Tailwind CSS Animations & Transitions
- tailwind-css-patterns/SKILL.md
- Tailwind CSS Performance Optimization
- Base vs Radix
- 1. Eliminating Waterfalls
- 2. Bundle Size Optimization
- templates/vite.config.ts
- eslint.config.js
- Sections
- React Best Practices
- Critical Rules
- React Best Practices
- 4. Client-Side Data Fetching
- 8. Advanced Patterns
- Icons
- async-cheap-condition-before-await.md
- Prefer Statically Analyzable Paths
- server-hoist-static-io.md
- Troubleshooting
- Examples
- frontend-design/SKILL.md
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
- GENERATION.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `compilerOptions` - 19 edges
3. `Tailwind v4 + shadcn/ui Production Stack` - 18 edges
4. `Tailwind CSS Documentation` - 17 edges
5. `5. Re-render Optimization` - 16 edges
6. `compilerOptions` - 15 edges
7. `7. JavaScript Performance` - 15 edges
8. `Node.js Best Practices` - 14 edges
9. `Component Composition` - 13 edges
10. `Node.js Backend Patterns` - 12 edges

## Surprising Connections (you probably didn't know these)
- `No sizing classes on icons inside components` --references--> `Button()`  [INFERRED]
  .agents/skills/shadcn/rules/icons.md → src/components/ui/button.tsx
- `Forms & Inputs → [forms.md](./rules/forms.md)` --references--> `Button()`  [INFERRED]
  .agents/skills/shadcn/SKILL.md → src/components/ui/button.tsx
- `Icons → [icons.md](./rules/icons.md)` --references--> `Button()`  [INFERRED]
  .agents/skills/shadcn/SKILL.md → src/components/ui/button.tsx
- `Button / trigger as non-button element (base only)` --references--> `Button()`  [INFERRED]
  .agents/skills/shadcn/rules/base-vs-radix.md → src/components/ui/button.tsx
- `Buttons inside inputs use InputGroup + InputGroupAddon` --references--> `Button()`  [INFERRED]
  .agents/skills/shadcn/rules/forms.md → src/components/ui/button.tsx

## Import Cycles
- None detected.

## Communities (149 total, 82 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.12
Nodes (15): name, private, type, version, @fontsource-variable/geist, lucide-react, prettier, prettier-plugin-tailwindcss (+7 more)

### Community 1 - "tsconfig.json"
Cohesion: 0.40
Nodes (4): compilerOptions, paths, files, references

### Community 2 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 3 - "components/theme-provider.tsx"
Cohesion: 0.07
Nodes (27): initialState, Theme, ThemeProviderContext, ThemeProviderProps, ThemeProviderState, cn, motion, react (+19 more)

### Community 4 - "dependencies"
Cohesion: 0.15
Nodes (13): dependencies, @base-ui/react, class-variance-authority, cn, @fontsource-variable/geist, lucide-react, motion, react (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, prettier, prettier-plugin-tailwindcss (+7 more)

### Community 6 - "Environment API (Vite 6+)"
Cohesion: 0.04
Nodes (43): build, Build and SSR, createServer, JavaScript API, Library Mode, loadEnv, Multi-Page App, Multiple Entries (+35 more)

### Community 7 - "Button"
Cohesion: 0.15
Nodes (14): Button / trigger as non-button element (base only), Buttons inside inputs use InputGroup + InputGroupAddon, Contents, Field validation and disabled states, FieldSet + FieldLegend for grouping related fields, Forms & Inputs, Forms use FieldGroup + Field, InputGroup requires InputGroupInput/InputGroupTextarea (+6 more)

### Community 8 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, lint, preview, typecheck

### Community 9 - "compilerOptions"
Cohesion: 0.09
Nodes (21): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+13 more)

### Community 10 - "React + TypeScript + Vite + shadcn/ui"
Cohesion: 0.50
Nodes (3): Adding components, React + TypeScript + Vite + shadcn/ui, Using components

### Community 11 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 14 - "Node.js Best Practices"
Cohesion: 0.05
Nodes (39): 10. Decision Checklist, 1. Framework Selection (2025), 2. Runtime Considerations (2025), 3. Architecture Principles, 4. Error Handling Principles, 5. Async Patterns Principles, 6. Validation Principles, 7. Security Principles (+31 more)

### Community 15 - "Styling & Customization"
Cohesion: 0.05
Nodes (35): Built-in variants first, className for layout only, Contents, No manual dark: color overrides, No manual z-index on overlay components, No raw color values for status/state indicators, No space-x-* / space-y-*, Prefer size-* over w-* h-* when equal (+27 more)

### Community 16 - "Tailwind v4 + shadcn/ui Production Stack"
Cohesion: 0.05
Nodes (36): 1. Create ThemeProvider, 1. Install Dependencies, 2. Configure Vite, 2. Wrap Your App, 3. Add Theme Toggle, 3. Update components.json, 4. Delete tailwind.config.ts, Advanced Topics (+28 more)

### Community 17 - "Accessibility (a11y)"
Cohesion: 0.06
Nodes (35): Accessibility (a11y), Accessible authentication (3.3.8) — new in 2.2, ARIA usage (4.1.2), Automated testing, Color contrast (1.4.3, 1.4.6), Common issues by impact, Conformance levels, Consistent help (3.2.6) — new in 2.2 (+27 more)

### Community 18 - "Node.js Backend Patterns"
Cohesion: 0.06
Nodes (33): API Response Format, Authentication & Authorization, Caching Strategies, Database Patterns, Dependency Injection, DI Container, JWT Authentication, MongoDB with Mongoose (+25 more)

### Community 19 - "SEO optimization"
Cohesion: 0.06
Nodes (34): Article, Breadcrumbs, Crawlability, Critical, FAQ, Font sizes, Heading structure, High priority (+26 more)

### Community 20 - "Accessibility Code Patterns"
Cohesion: 0.07
Nodes (25): Accessibility Code Patterns, ARIA tabs, Dragging movements, Error handling, Form labels, Live regions and notifications, Modal focus trap, Screen reader commands (+17 more)

### Community 21 - "Migration Guide: Hardcoded Colors → CSS Variables"
Cohesion: 0.08
Nodes (25): 1. Forgetting to Map in @theme inline, 2. Wrong Opacity Syntax, 3. Mixing Approaches, 4. Not Testing Dark Mode, Common Pitfalls, Example: Badge Component, Further Customization, Migration Guide: Hardcoded Colors → CSS Variables (+17 more)

### Community 22 - "Common Gotchas & Solutions"
Cohesion: 0.08
Nodes (24): 10. Hardcoded Color Values, 13. Wrong Tailwind Package, 14. Missing Dependencies, 15. Not Testing Both Themes, 16. Not Checking Contrast, 17. tw-animate-css Import Error (REAL-WORLD ISSUE), 18. Duplicate @layer base After shadcn init (REAL-WORLD ISSUE), 1. `:root` Inside `@layer base` (+16 more)

### Community 23 - "TypeScript Advanced Types"
Cohesion: 0.08
Nodes (23): 1. Generics, 1. Infer Keyword, 2. Conditional Types, 2. Type Guards, 3. Assertion Functions, 3. Mapped Types, 4. Template Literal Types, 5. Utility Types (+15 more)

### Community 24 - "Vite Features"
Cohesion: 0.09
Nodes (22): Asset Import Queries, Built-in Constants, CSS Modules, Custom Queries, Custom Variables, Eager Loading, Environment Variables, Explicit URL (+14 more)

### Community 25 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, baseUrl, jsx, lib, module, moduleDetection, moduleResolution (+12 more)

### Community 26 - "Dark Mode Implementation"
Cohesion: 0.11
Nodes (17): Common Issues, Dark Mode Implementation, Full Implementation, How It Works, Issue: Dark mode not switching, Issue: Flash of wrong theme on load, Issue: Icons not changing, Issue: Theme resets on page refresh (+9 more)

### Community 27 - "React Composition Patterns"
Cohesion: 0.12
Nodes (16): 1.1 Avoid Boolean Prop Proliferation, 1.2 Use Compound Components, 1. Component Architecture, 2.1 Decouple State Management from UI, 2.2 Define Generic Context Interfaces for Dependency Injection, 2.3 Lift State into Provider Components, 2. State Management, 3.1 Create Explicit Component Variants (+8 more)

### Community 28 - "Commands"
Cohesion: 0.12
Nodes (17): `add` — Add components, `apply` — Apply a preset to an existing project, `build` — Build a custom registry, Commands, Contents, `diff` — Check for updates, `docs` — Get component documentation URLs, Dry-Run Mode (+9 more)

### Community 29 - "Tailwind CSS Layout Patterns"
Cohesion: 0.12
Nodes (16): Background Colors, Colors, Container & Max Width, Flexbox Layouts, Font Size & Weight, Grid Layouts, Layout Utilities, Line Height & Letter Spacing (+8 more)

### Community 30 - "Tailwind CSS Documentation"
Cohesion: 0.12
Nodes (17): Applying Variants in CSS, Arbitrary Values, Color System, Custom Theme Configuration, Custom Utilities, Custom Variants, Dark Mode, Functions and Directives (+9 more)

### Community 31 - "templates/components.json"
Cohesion: 0.12
Nodes (16): aliases, components, hooks, lib, ui, utils, rsc, $schema (+8 more)

### Community 32 - "5. Re-render Optimization"
Cohesion: 0.12
Nodes (16): 5.10 Subscribe to Derived State, 5.11 Use Functional setState Updates, 5.12 Use Lazy State Initialization, 5.13 Use Transitions for Non-Urgent Updates, 5.14 Use useDeferredValue for Expensive Derived Renders, 5.15 Use useRef for Transient Values, 5.1 Calculate Derived State During Rendering, 5.2 Defer State Reads to Usage Point (+8 more)

### Community 33 - "7. JavaScript Performance"
Cohesion: 0.13
Nodes (15): 7.10 Hoist RegExp Creation, 7.11 Use flatMap to Map and Filter in One Pass, 7.12 Use Loop for Min/Max Instead of Sort, 7.13 Use Set/Map for O(1) Lookups, 7.14 Use toSorted() Instead of sort() for Immutability, 7.1 Avoid Layout Thrashing, 7.2 Build Index Maps for Repeated Lookups, 7.3 Cache Property Access in Loops (+7 more)

### Community 34 - "Quick Reference"
Cohesion: 0.13
Nodes (14): 1. Eliminating Waterfalls (CRITICAL), 2. Bundle Size Optimization (CRITICAL), 3. Server-Side Performance (HIGH), 4. Client-Side Data Fetching (MEDIUM-HIGH), 5. Re-render Optimization (MEDIUM), 6. Rendering Performance (MEDIUM), 7. JavaScript Performance (LOW-MEDIUM), 8. Advanced Patterns (LOW) (+6 more)

### Community 35 - "Customization & Theming"
Cohesion: 0.14
Nodes (14): 1. Built-in variants, 2. Tailwind classes via `className`, 3. Add a new variant, 4. Wrapper components, Adding Custom Colors, Border Radius, Changing the Theme, Checking for Updates (+6 more)

### Community 36 - "Tailwind CSS Accessibility Guidelines"
Cohesion: 0.14
Nodes (13): Accessibility Checklist, Alert Dialog, ARIA Patterns with Tailwind, Color Contrast, Contrast Guidelines, Focus Management, Focus Visible vs Focus, Motion Preferences (+5 more)

### Community 37 - "Tailwind CSS Configuration"
Cohesion: 0.14
Nodes (13): Advanced v4.1 Features, Creating a Reusable Preset, CSS-First Configuration (v4.1+), Custom Plugin Example, Custom Utilities, Enhanced Arbitrary Values, JavaScript Configuration (Legacy), Native CSS Custom Properties (+5 more)

### Community 38 - "Component Composition"
Cohesion: 0.15
Nodes (13): Avatar always needs AvatarFallback, Button has no isPending or isLoading prop, Callouts use Alert, Card structure, Choosing between overlay components, Component Composition, Contents, Dialog, Sheet, and Drawer always need a Title (+5 more)

### Community 39 - "Vite Configuration"
Cohesion: 0.15
Nodes (12): Async Config, Basic Setup, build.target, Conditional Config, define (Global Constants), Key Config Options, plugins, resolve.alias (+4 more)

### Community 40 - "Vite Plugin API"
Cohesion: 0.15
Nodes (13): Basic Structure, Client-Server Communication, Conditional Application, config, configResolved, configureServer, handleHotUpdate, Plugin Ordering (+5 more)

### Community 41 - "6. Rendering Performance"
Cohesion: 0.17
Nodes (12): 6.10 Use React DOM Resource Hints, 6.11 Use useTransition Over Manual Loading States, 6.1 Animate SVG Wrapper Instead of SVG Element, 6.2 CSS content-visibility for Long Lists, 6.3 Hoist Static JSX Elements, 6.4 Optimize SVG Precision, 6.5 Prevent Hydration Mismatch Without Flickering, 6.6 Suppress Expected Hydration Mismatches (+4 more)

### Community 42 - "Tools"
Cohesion: 0.17
Nodes (11): Configuring Registries, Setup, `shadcn:get_add_command_for_items`, `shadcn:get_audit_checklist`, `shadcn:get_item_examples_from_registries`, `shadcn:get_project_registries`, `shadcn:list_items_in_registries`, shadcn MCP Server (+3 more)

### Community 43 - "React Composition Patterns"
Cohesion: 0.18
Nodes (10): 1. Component Architecture (HIGH), 2. State Management (MEDIUM), 3. Implementation Patterns (MEDIUM), 4. React 19 APIs (MEDIUM), Full Compiled Document, How to Use, Quick Reference, React Composition Patterns (+2 more)

### Community 44 - "3. Server-Side Performance"
Cohesion: 0.18
Nodes (10): 3.10 Use after() for Non-Blocking Operations, 3.1 Authenticate Server Actions Like API Routes, 3.2 Avoid Duplicate Serialization in RSC Props, 3.3 Avoid Shared Module State for Request Data, 3.4 Cross-Request LRU Caching, 3.5 Hoist Static I/O to Module Level, 3.6 Minimize Serialization at RSC Boundaries, 3.7 Parallel Data Fetching with Component Composition (+2 more)

### Community 45 - "Dark Mode"
Cohesion: 0.18
Nodes (10): Basic Dark Mode Support, Container Queries (v4.1+), Dark Mode, Dark Mode Best Practices, Dark Mode Toggle (React), Mobile-First Responsive Layout, Responsive Card Component, Responsive Design Patterns (+2 more)

### Community 46 - "Tailwind CSS Development Patterns"
Cohesion: 0.18
Nodes (11): Best Practices, Common Patterns, Constraints and Warnings, External Resources, Instructions, Overview, Quick Reference, References (+3 more)

### Community 47 - "Tailwind v4 Plugins Reference"
Cohesion: 0.18
Nodes (10): Common Plugin Errors, Error 1: Using v3 config file syntax, Error 2: Using @import instead of @plugin, Forms Plugin - Reset Form Element Styles, Multiple Plugins, Official Documentation, Official Plugins (Tailwind Labs), Overview (+2 more)

### Community 48 - "React Composition Patterns"
Cohesion: 0.20
Nodes (9): Component Architecture (CRITICAL), Core Principles, Creating a New Rule, Impact Levels, Implementation Patterns (MEDIUM), React Composition Patterns, Rules, State Management (HIGH) (+1 more)

### Community 49 - "Sections"
Cohesion: 0.20
Nodes (9): 1. Eliminating Waterfalls (async), 2. Bundle Size Optimization (bundle), 3. Server-Side Performance (server), 4. Client-Side Data Fetching (client), 5. Re-render Optimization (rerender), 6. Rendering Performance (rendering), 7. JavaScript Performance (js), 8. Advanced Patterns (advanced) (+1 more)

### Community 50 - "shadcn/ui"
Cohesion: 0.20
Nodes (10): Component Docs, Examples, and Usage, Current Project Context, Detailed References, Key Fields, Key Patterns, Principles, Quick Reference, shadcn/ui (+2 more)

### Community 51 - "Tailwind CSS Animations & Transitions"
Cohesion: 0.20
Nodes (9): Basic Transitions, Built-in Animations, Common Use Cases, Custom Animations (v4.1+), Global Reduced Motion Support, Motion Preferences, Tailwind CSS Animations & Transitions, Transform Effects (+1 more)

### Community 52 - "tailwind-css-patterns/SKILL.md"
Cohesion: 0.20
Nodes (7): Card Component, Form Elements, Modal/Dialog, Navigation Bar, React Button Component with Variants, Responsive User Card, Tailwind CSS Component Patterns

### Community 53 - "Tailwind CSS Performance Optimization"
Cohesion: 0.20
Nodes (9): Best Practices for Performance, Bundle Size Optimization, Content Path Best Practices, CSS Optimization Techniques, Development Performance (v4.1+), Minification, Production Build Optimization, PurgeCSS Configuration (+1 more)

### Community 54 - "Base vs Radix"
Cohesion: 0.25
Nodes (8): Accordion, Base vs Radix, Composition: asChild (radix) vs render (base), Contents, Select, Select — multiple selection and object values (base only), Slider, ToggleGroup

### Community 55 - "1. Eliminating Waterfalls"
Cohesion: 0.29
Nodes (7): 1.1 Check Cheap Conditions Before Async Flags, 1.2 Defer Await Until Needed, 1.3 Dependency-Based Parallelization, 1.4 Prevent Waterfall Chains in API Routes, 1.5 Promise.all() for Independent Operations, 1.6 Strategic Suspense Boundaries, 1. Eliminating Waterfalls

### Community 56 - "2. Bundle Size Optimization"
Cohesion: 0.29
Nodes (7): 2.1 Avoid Barrel File Imports, 2.2 Conditional Module Loading, 2.3 Defer Non-Critical Third-Party Libraries, 2.4 Dynamic Imports for Heavy Components, 2.5 Prefer Statically Analyzable Paths, 2.6 Preload Based on User Intent, 2. Bundle Size Optimization

### Community 58 - "templates/vite.config.ts"
Cohesion: 0.38
Nodes (5): ref_node_path, ref_path, @tailwindcss/vite, vite, @vitejs/plugin-react

### Community 59 - "eslint.config.js"
Cohesion: 0.29
Nodes (6): eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, typescript-eslint

### Community 60 - "Sections"
Cohesion: 0.33
Nodes (5): 1. Component Architecture (architecture), 2. State Management (state), 3. Implementation Patterns (patterns), 4. React 19 APIs (react19), Sections

### Community 61 - "React Best Practices"
Cohesion: 0.33
Nodes (5): Creating a New Rule, Getting Started, React Best Practices, Rule File Structure, Structure

### Community 62 - "Critical Rules"
Cohesion: 0.33
Nodes (6): CLI, Component Structure → [composition.md](./rules/composition.md), Critical Rules, Forms & Inputs → [forms.md](./rules/forms.md), Icons → [icons.md](./rules/icons.md), Use Components, Not Custom Markup → [composition.md](./rules/composition.md)

### Community 63 - "React Best Practices"
Cohesion: 0.40
Nodes (4): Abstract, React Best Practices, References, Table of Contents

### Community 64 - "4. Client-Side Data Fetching"
Cohesion: 0.40
Nodes (5): 4.1 Deduplicate Global Event Listeners, 4.2 Use Passive Event Listeners for Scrolling Performance, 4.3 Use SWR for Automatic Deduplication, 4.4 Version and Minimize localStorage Data, 4. Client-Side Data Fetching

### Community 65 - "8. Advanced Patterns"
Cohesion: 0.40
Nodes (5): 8.1 Do Not Put Effect Events in Dependency Arrays, 8.2 Initialize App Once, Not Per Mount, 8.3 Store Event Handlers in Refs, 8.4 useEffectEvent for Stable Callback Refs, 8. Advanced Patterns

### Community 66 - "Icons"
Cohesion: 0.40
Nodes (4): Icons, Icons in Button use data-icon attribute, No sizing classes on icons inside components, Pass icons as component objects, not string keys

### Community 68 - "Prefer Statically Analyzable Paths"
Cohesion: 0.50
Nodes (3): File-System Paths, Import Paths, Prefer Statically Analyzable Paths

### Community 70 - "Troubleshooting"
Cohesion: 0.50
Nodes (4): Classes Not Applying, Dark Mode Issues, Responsive Styles Not Working, Troubleshooting

### Community 71 - "Examples"
Cohesion: 0.50
Nodes (4): Dark Mode Toggle, Examples, Form Input, Responsive Card Component

## Knowledge Gaps
- **844 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+839 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 953 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **82 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Button()` connect `Button` to `Icons`, `Critical Rules`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `shadcn/ui` connect `shadcn/ui` to `shadcn/SKILL.md`, `Critical Rules`, `Button`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _844 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `components/theme-provider.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06970128022759602 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
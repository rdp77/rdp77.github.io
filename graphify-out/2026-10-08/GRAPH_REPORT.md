# Graph Report - rdp77.github.io  (2026-10-08)

## Corpus Check
- 17 files · ~1,763 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 8, .ico 1, .css 1)

## Summary
- 134 nodes · 141 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `81caa1d8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- components.json
- layout.tsx
- dependencies
- devDependencies
- loader.tsx
- button.tsx
- scripts
- tailwind
- Next.js template
- AGENTS.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 7 edges
3. `tailwind` - 6 edges
4. `aliases` - 6 edges
5. `Button()` - 3 edges
6. `cn` - 3 edges
7. `next` - 3 edges
8. `Next.js template` - 3 edges
9. `ThemeProvider()` - 2 edges
10. `isTypingTarget()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (14 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.10
Nodes (19): eslintConfig, name, private, type, version, eslint, eslint-config-next, lucide-react (+11 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "components.json"
Cohesion: 0.12
Nodes (15): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+7 more)

### Community 3 - "layout.tsx"
Cohesion: 0.15
Nodes (11): app_globals, fontMono, geist, isTypingTarget(), ThemeHotkey(), onKeyDown(), ThemeProvider(), nextConfig (+3 more)

### Community 4 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @base-ui/react, class-variance-authority, cn, lucide-react, motion, next, next-themes (+4 more)

### Community 5 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, eslint, eslint-config-next, prettier, prettier-plugin-tailwindcss, tailwindcss, @tailwindcss/postcss, @types/node (+3 more)

### Community 6 - "loader.tsx"
Cohesion: 0.28
Nodes (5): LoaderDemo(), Loader(), LoaderProps, lib_utils_cn, motion

### Community 7 - "button.tsx"
Cohesion: 0.28
Nodes (5): Button(), buttonVariants, @base-ui/react, class-variance-authority, cn

### Community 8 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, format, lint, start, typecheck

### Community 9 - "tailwind"
Cohesion: 0.33
Nodes (6): tailwind, baseColor, config, css, cssVariables, prefix

### Community 10 - "Next.js template"
Cohesion: 0.50
Nodes (3): Adding components, Next.js template, Using components

## Knowledge Gaps
- **88 isolated node(s):** `geist`, `fontMono`, `$schema`, `style`, `rsc` (+83 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 96 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `geist`, `fontMono`, `$schema` to the rest of the system?**
  _88 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
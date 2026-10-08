# Graph Report - rdp77.github.io  (2026-10-08)

## Corpus Check
- 15 files · ~2,497 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 5, .css 1)

## Summary
- 168 nodes · 182 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `bef800d3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- tsconfig.json
- components.json
- theme-provider.tsx
- dependencies
- devDependencies
- loader.tsx
- button.tsx
- scripts
- compilerOptions
- React + TypeScript + Vite + shadcn/ui
- compilerOptions
- app_globals
- lib_utils_cn

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 20 edges
2. `compilerOptions` - 15 edges
3. `scripts` - 7 edges
4. `tailwind` - 6 edges
5. `aliases` - 6 edges
6. `ThemeProvider()` - 6 edges
7. `cn` - 3 edges
8. `react` - 3 edges
9. `React + TypeScript + Vite + shadcn/ui` - 3 edges
10. `@base-ui/react` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.09
Nodes (25): name, private, type, version, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+17 more)

### Community 1 - "tsconfig.json"
Cohesion: 0.40
Nodes (4): compilerOptions, paths, files, references

### Community 2 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 3 - "theme-provider.tsx"
Cohesion: 0.16
Nodes (14): react, react-dom, disableTransitionsTemporarily(), getSystemTheme(), isEditableTarget(), isTheme(), ResolvedTheme, Theme (+6 more)

### Community 4 - "dependencies"
Cohesion: 0.15
Nodes (13): dependencies, @base-ui/react, class-variance-authority, cn, @fontsource-variable/geist, lucide-react, motion, react (+5 more)

### Community 5 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, prettier, prettier-plugin-tailwindcss (+7 more)

### Community 6 - "loader.tsx"
Cohesion: 0.28
Nodes (6): motion, App(), LoaderDemo(), Loader(), LoaderProps, src_lib_utils_cn

### Community 7 - "button.tsx"
Cohesion: 0.33
Nodes (5): @base-ui/react, class-variance-authority, cn, Button(), buttonVariants

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

## Knowledge Gaps
- **113 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 120 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Why does `react` connect `theme-provider.tsx` to `package.json`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _113 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08994708994708994 - nodes in this community are weakly interconnected._
- **Should `components.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
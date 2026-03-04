# STRUCTURE.md

## Folder Structure

```
/
├── docs/                          # Project documentation (this folder)
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                    # Static image assets (logos, photos)
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout (fonts, metadata)
│   │   ├── globals.css            # Global styles + CSS variables
│   │   ├── page.tsx               # Homepage
│   │   ├── opportunity/
│   │   │   └── page.tsx
│   │   ├── campaign/
│   │   │   └── page.tsx
│   │   ├── media/
│   │   │   └── page.tsx
│   │   ├── budget/
│   │   │   └── page.tsx
│   │   ├── team/
│   │   │   └── page.tsx
│   │   └── success/
│   │       └── page.tsx
│   ├── components/
│   │   ├── sections/              # Page section components (Hero, Cards, etc.)
│   │   └── ui/                    # shadcn primitives (auto-generated)
│   ├── content/                   # Static content/data files (JSON or TS)
│   └── lib/
│       └── utils.ts               # shadcn utility (cn function)
├── Information/                   # Original proposal documents (source of truth)
│   ├── Bitexen_SA_Launch_Proposal_Broadbrand.md
│   ├── Bitexen_Annexure_Media_Plan.md
│   └── Bitexen_Success_Measures.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts             # (if present; Tailwind v4 uses postcss.config.mjs)
└── pnpm-lock.yaml
```

## Section Composition Rules

1. **Each page section is a dedicated component** in `src/components/sections/`. Named descriptively (e.g. `HeroSection.tsx`, `TeamSection.tsx`).
2. **shadcn primitives** are used for all interactive and styled elements (Card, Button, Badge, Tabs, Accordion, etc.). Do not create custom styled components where a shadcn primitive exists.
3. **No inline styles.** Use Tailwind utility classes only.
4. **Responsive by default.** All sections must be readable on mobile (375px) and desktop (1280px+).
5. **No hardcoded colours.** Use CSS variables defined in `globals.css` via shadcn's theming system.

## Content Management Approach

- Content is stored as TypeScript constants or JSON files in `src/content/`
- No CMS is used at launch; content is updated by editing source files and redeploying
- The `Information/` folder contains the source-of-truth markdown documents; website content should stay in sync with these
- For future phases, a headless CMS (e.g. Sanity, Contentlayer) can be added without restructuring the components

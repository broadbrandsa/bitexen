# DEPLOYMENT.md

## GitHub Repository

- **URL:** https://github.com/broadbrandsa/bitexen
- **Branch:** `main` (production)
- **Visibility:** Public (or Private — confirm with team)

All commits to `main` trigger an automatic Vercel deployment.

---

## Vercel Project Setup

1. Go to [vercel.com](https://vercel.com) and create a new project
2. Import from GitHub: `broadbrandsa/bitexen`
3. Configure the following settings:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `.` (project root) |
| Build Command | `pnpm build` |
| Install Command | `pnpm install` |
| Output Directory | *(leave blank — Next.js default)* |

4. No `vercel.json` is required for this configuration.

---

## Environment Variables

No environment variables are required at launch. If analytics or CMS integrations are added later:

| Variable | Purpose | Where to set |
|----------|---------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID | Vercel Dashboard > Settings > Environment Variables |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | Vercel Dashboard |

**Rule:** All client-side variables must be prefixed with `NEXT_PUBLIC_`. Server-only secrets must never be prefixed.

---

## Root Directory Rules

The project root (`/`) is the Next.js app root. There are no monorepo packages or nested apps. The `Information/` folder contains source documents and is not part of the build output.

The `.next/` build directory and `node_modules/` are gitignored and never committed.

---

## How to Redeploy

**Automatic:** Push any commit to `main`. Vercel picks it up automatically.

**Manual:** In the Vercel dashboard, go to the project → Deployments → click "Redeploy" on any deployment.

**Preview deployments:** Any pull request or non-main branch push creates a Vercel preview URL automatically. Use these to review changes before merging to `main`.

---

## Custom Domain

When a custom domain is ready (e.g. `proposal.broadbrand.co.za` or `bitexen.broadbrand.co.za`):

1. In Vercel Dashboard → Project → Settings → Domains
2. Add the domain
3. Update DNS records at the registrar (Vercel provides the required A/CNAME records)
4. SSL is provisioned automatically by Vercel

---

## Build Health

Confirm the following before every deploy:

```bash
pnpm build   # must complete with no errors
```

TypeScript errors will fail the build. ESLint warnings will not (but should be addressed).

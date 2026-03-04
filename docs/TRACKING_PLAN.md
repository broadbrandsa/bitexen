# TRACKING_PLAN.md

## Analytics Overview

This document defines the tracking and analytics plan for the Bitexen Proposal website. The site is primarily a sales/presentation asset, so tracking focuses on engagement signals and conversion events that indicate stakeholder interest.

---

## 1. Google Analytics (GA4)

**Status:** Placeholder — not yet implemented.

**Implementation:**
- Add GA4 measurement ID to `src/app/layout.tsx` via `@next/third-parties/google` (Google's official Next.js integration)
- Use `GoogleAnalytics` component from `next/third-parties`
- Measurement ID to be created in Broadbrand's GA4 property

```tsx
// layout.tsx (when ready)
import { GoogleAnalytics } from '@next/third-parties/google'
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 2. Vercel Analytics

**Status:** Placeholder — can be enabled with one line.

**Implementation:**
- Install `@vercel/analytics`
- Add `<Analytics />` component to `layout.tsx`

```tsx
import { Analytics } from '@vercel/analytics/react'
<Analytics />
```

**Provides:** Page views, unique visitors, top pages, referrers — all privacy-first with no cookies.

---

## 3. Event Tracking Placeholder

Key events to track once GA4 is wired up:

| Event Name | Trigger | Category |
|-----------|---------|----------|
| `cta_click` | Any primary CTA button click | Engagement |
| `section_view` | User scrolls into each major section | Engagement |
| `page_view` | Standard page navigation | Navigation |
| `tab_change` | User switches tabs in media/campaign pages | Engagement |
| `accordion_open` | User expands an accordion item | Engagement |
| `contact_initiated` | User clicks contact/email CTA | Conversion |

---

## 4. Form Submission Tracking

**Status:** No form backend at launch. CTA is a mailto link or static contact block.

**When a form is added:**
- Fire `form_submit` event on successful submission
- Include `form_id` parameter to distinguish multiple forms
- Track `form_start` (first field interaction) and `form_abandon` (blur without submit)

---

## 5. Conversion Goals

| Goal | Description | Target |
|------|-------------|--------|
| Primary | Stakeholder views proposal (session > 60s) | Bitexen team |
| Secondary | Stakeholder navigates to 3+ pages | High engagement |
| Tertiary | Stakeholder clicks contact CTA | Intent signal |

---

## 6. UTM Parameters

All shared links should include UTM parameters so traffic sources are trackable:

```
https://[site-url]/?utm_source=email&utm_medium=direct&utm_campaign=bitexen-proposal
```

Suggested parameters for stakeholder share:
- `utm_source=bitexen`
- `utm_medium=proposal`
- `utm_campaign=sa-launch-2026`

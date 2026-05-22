# Agrawal Khandelwal & Associates LLP — Website Claude Code Context

## Project
Next.js 15 website for **Agrawal Khandelwal & Associates LLP**, a CA firm based in Nashik and Sillod, Maharashtra.

- **Domain:** agrawalkhandelwal.com
- **Stack:** Next.js 15.5, React 19, TypeScript, CSS (no Tailwind)
- **Fonts:** Montserrat + Open Sans via next/font/google
- **Colors:** Navy `#0A2E5B` + Red `#D22B2B` — use CSS variables only, never hardcoded hex
- **GA4 ID:** G-41NNQG654M (already wired in layout.tsx)

## Commands
```
Dev:   node ".\node_modules\next\dist\bin\next" dev
Build: node ".\node_modules\next\dist\bin\next" build
```
npm run build has a path/space issue — always use the node command directly.

## Key People
- **CA Mehul Agrawal** — Partner, Nashik office, UAE Corporate Taxation certified
- **CA Rupesh Khandelwal** — Partner, Sillod office

## Offices
- **Nashik:** Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik – 422011 | +91 95275 33506
- **Sillod:** Near Datta Mandir, Tilak Nagar, Sillod – 431112 | +91 95955 85953
- **Email:** mehul@agrawalkhandelwal.com | rupesh@agrawalkhandelwal.com

## Site Structure
```
src/app/
  page.tsx                          # Homepage
  layout.tsx                        # Root layout — GA4, JSON-LD org schema, navbar, footer
  Navbar.tsx                        # Nav with Services dropdown
  services/page.tsx                 # All services overview
  ca-in-nashik/page.tsx             # Local SEO page (Nashik)
  ca-in-sillod/page.tsx             # Local SEO page (Sillod)
  transfer-pricing/page.tsx
  uae-tax-advisory/page.tsx
  offshore-accounting/page.tsx
  company-incorporation/page.tsx
  startups/page.tsx
  nri-tax-advisory/page.tsx
  blog/page.tsx                     # Blog listing
  blog/[slug]/page.tsx              # Catch-all: has 2 posts inline (essential-compliance, dtaa)
  blog/company-incorporation-india-guide/page.tsx
  blog/new-income-tax-act-rules-2025/page.tsx
  blog/uae-corporate-tax-indian-impact/page.tsx
  blog/uae-entity-setup-when-it-makes-sense/page.tsx
  tools/page.tsx                    # Tools hub
  tools/capital-gains/page.tsx
  tools/sip-planner/page.tsx
  tools/incorporation-wizard/
  tax-calculator/page.tsx           # Client component — metadata in layout.tsx
  sitemap.ts                        # 20+ URLs, all real pages
  robots.ts
```

## CSS Rules
- Use `minmax(min(100%, Xpx), 1fr)` for grids — never `minmax(400px, 1fr)` or larger
- All colors via CSS variables from globals.css
- Logo is white-background PNG — wrapped in `.logo-wrapper` badge in navbar
- Blog post HTML content uses `.blog-content` class for h2/ul/ol/p styling

## SEO Status (as of May 2026)
**Done:**
- Sitemap submitted to Google Search Console
- All pages have explicit canonical tags (all point to non-www)
- JSON-LD Service + FAQ + Breadcrumb schema on all service pages
- Organization schema in root layout
- FAQ (FAQPage) schema only on pages with a matching visible FAQ section:
  homepage + each service page. Never add FAQPage to the root layout - it then
  lands on pages with no visible FAQ content and Search Console flags it Invalid.
- www → non-www 308 redirect configured in Vercel domain settings (see Domain Canonicalization below)
- Listed on: IndiaMart, Justdial, Sulekha, ICAI directory
- GA4 wired up (G-41NNQG654M)
- Blog posts expanded to ~900 words with proper HTML structure

**Not done yet:**
- Google Business Profile (most important remaining task — free, unlocks Maps pack)
- Google reviews from clients (need 5+ to compete in local search)
- LinkedIn weekly posts (building authority + backlinks)
- More blog content targeting low-competition keywords

**Search Console findings (May 2026):**
- 1 page indexed (sitemap just submitted — more will be indexed over coming weeks)
- Brand searches ("khandelwal", "ca khandelwal") drive most impressions
- Zero visibility for non-brand/service keywords yet
- May 21: found the redirect was BACKWARDS — non-www was redirecting to www (307),
  while all canonicals/sitemap/schema point to non-www. This conflict kept Google
  from indexing pages and left www duplicate URLs in the report. Fixed in Vercel
  (see Domain Canonicalization). Expect indexing to recover over 1-4 weeks.

## Domain Canonicalization
- **Canonical host is non-www: `agrawalkhandelwal.com`** — all canonical tags, sitemap.ts,
  robots.ts, and JSON-LD use non-www. Never change these to www.
- Redirect is configured in the **Vercel dashboard → Settings → Domains**, NOT in
  next.config.js (a redirect in next.config.js on Vercel causes an infinite loop).
- Correct Vercel setup:
  - `agrawalkhandelwal.com` → "Connect to an environment" → Production (serves the site)
  - `www.agrawalkhandelwal.com` → "Redirect to Another Domain" → `agrawalkhandelwal.com`,
    type **308 Permanent Redirect** (never 307 Temporary — temp redirects don't consolidate ranking)
- Verify with: `curl -I https://agrawalkhandelwal.com/` (expect 200) and
  `curl -I https://www.agrawalkhandelwal.com/` (expect 308 → non-www).

## Brand Name Rule
Always use the full name **Agrawal Khandelwal & Associates LLP** everywhere — page titles, meta descriptions, JSON-LD schema, and visible text. Never abbreviate to "AK & Associates" or "AK Associates". Reasons:
- "AK & Associates" is not unique — dozens of CA firms share those initials
- Abbreviation splits brand signal across two names in Google's index
- The full name matches official ICAI, MCA, and directory registrations
- "Khandelwal" and "Agrawal" are the distinctive keywords already gaining traction in Search Console
- If a page title is too long, trim the service keyword — never trim the firm name

## Key Decisions Made
- No dark/light toggle — removed, dark theme only
- No em dashes anywhere on the site — use hyphens
- Services dropdown in navbar links to individual service pages
- Blog [slug] page uses `dangerouslySetInnerHTML` for HTML content (for proper h2/ul rendering)
- Grid columns: `minmax(min(100%, 340px), 1fr)` pattern throughout

## What Needs to Happen Next
1. User sets up Google Business Profile at business.google.com
2. User asks 5 clients for Google reviews
3. Add more blog posts targeting low-competition keywords (I can write these)
4. Monitor Search Console — expect more pages indexed within 2–4 weeks of sitemap submission

# Agrawal Khandelwal & Associates LLP — Website Claude Code Context

## Project
Next.js 15 website for **Agrawal Khandelwal & Associates LLP**, a CA firm based in Nashik and Sillod, Maharashtra.

- **Domain:** agrawalkhandelwal.com
- **Established:** 2023 (use this everywhere — `foundingDate` in schema + visible copy.
  Do NOT claim "5+ years" / 2019; the firm is ~3 years old. Conflicting age claims hurt
  both SEO trust and AI/GEO citation confidence.)
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
- Google Business Profile is set up (dashboard at business.google.com) — do NOT list this as a pending task

**Not done yet:**
- LinkedIn weekly posts (building authority + backlinks)
- More blog content targeting low-competition keywords
- Backlink building — only 1 external backlink on record as of Jun 22 export (a LinkedIn post)

**Search Console findings (May 2026):**
- 1 page indexed (sitemap just submitted — more will be indexed over coming weeks)
- Brand searches ("khandelwal", "ca khandelwal") drive most impressions
- Zero visibility for non-brand/service keywords yet
- May 21: found the redirect was BACKWARDS — non-www was redirecting to www (307),
  while all canonicals/sitemap/schema point to non-www. This conflict kept Google
  from indexing pages and left www duplicate URLs in the report. Fixed in Vercel
  (see Domain Canonicalization). Expect indexing to recover over 1-4 weeks.

**Search Console findings (Jun 2, 2026 — 28-day window):**
- INDEXING RECOVERED: the May 21 redirect fix is working. 13 non-www pages now
  generate impressions (vs ~7 on May 28). All service pages, blog, and a blog
  post are surfacing. Homepage 253 impr, ca-in-nashik 60 impr (up from 23).
- Real problem now is RANKING DEPTH, not indexing/technical. Impressions are
  rising but average position is drifting deeper (daily position ~3-6 early May
  → 12-23 by month end), so clicks flatlined at 0 in the last ~5 days despite
  25-29 impressions/day.
- All 14 clicks still come from brand queries + homepage + ca-in-nashik. Money
  keywords are buried too deep to convert: offshore accounting pos 24, ca firms
  pos 31, ca firms in nashik pos 66, offshore bookkeepers in india pos 71,
  tax consultant in nashik pos 95.
- Stale www duplicates (www/, www/blog, www/services, www/startups, www/tools)
  still in the report but numbers are FROZEN identical to May 28 = pre-redirect
  leftovers aging out. 308 redirect verified live and correct. No action needed;
  they drop off as Google recrawls.
- Takeaway: technical SEO is healthy. The lever now is content + local authority,
  i.e. the two pending items below (Google reviews, low-competition blog content).

**Work shipped (Jun 4, 2026 — commit af13387, live + verified):**
- Jun 4 GSC export confirmed the diagnosis above and showed one regression:
  `/offshore-accounting` slipped pos 24 → 31 (most-trafficked service page, 35 impr,
  0 clicks because buried). Acted on it.
- `/offshore-accounting` strengthened: title changed to "Offshore Accounting Services
  India" (matches the exact query at pos 59), added a ~400-word long-form section
  "Building an Offshore Accounting Team in India" with H3s echoing the deep long-tail
  queries (offshore bookkeepers in india, build offshore accounting team in india,
  offshore accounting companies in india), plus 2 new FAQs (pricing models, dedicated
  team) that auto-extend the FAQPage schema. The page was card-heavy / prose-thin;
  this adds the crawlable depth competitors had.
- Verified live: titles correct (no brand doubling), founding 2023, schema rendering.

## GEO (Generative Engine Optimization)
GEO = getting cited/recommended inside AI answers (ChatGPT, Claude, Perplexity, Google
AI Overviews), distinct from SEO (ranking for clicks). Most SEO work doubles as GEO;
the GEO-specific levers are entity consistency, machine-readable facts, authority signals.

**Done (Jun 4, 2026 — commit af13387):**
- `Person` schema for both partners on the homepage (`peopleLd` @graph in page.tsx):
  jobTitle, `worksFor` → org `@id`, `knowsAbout`, `hasCredential` (ICAI + Mehul's UAE
  Corporate Taxation cert), Rupesh `alumniOf` Deloitte, Mehul LinkedIn in `sameAs`.
  Lets AI resolve named-expert queries ("UAE corporate tax CA in Nashik") to the firm.
- `knowsAbout` + `founder` (linking the two Person `@id`s) added to the org
  AccountingService schema in layout.tsx.
- Org `sameAs` expanded to 4 verified profiles: LinkedIn firm page, Justdial, Sulekha,
  and Google Business Profile (`https://maps.google.com/?cid=17018233718758486792`).
  Org `hasMap` upgraded from a generic search query to that GBP CID URL.
- IMPORTANT: only PUBLIC profile URLs work in `sameAs` — the seller/dashboard login
  URLs (seller.indiamart.com, business.justdial.com, etc.) are NOT usable.

**Done (aggregateRating):**
- `aggregateRating` schema live on layout.tsx, ca-in-nashik, and ca-in-sillod:
  ratingValue 5.0, reviewCount 13 (GBP has 13+ reviews as of Jul 2026 — update this
  number periodically as more reviews come in, all 3 files must stay in sync).

**Pending GEO:**
- Add IndiaMart PUBLIC seller page to `sameAs` (need the public URL; only have dashboard).

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
1. Build backlinks — only 1 external backlink on record (Jun 22 export). Ask ICAI
   Nashik branch to hyperlink the firm name on job postings, get IndiaMart/Justdial/
   Sulekha profiles linked, keep posting on LinkedIn.
2. Add more blog posts targeting low-competition keywords, following the winning
   pattern proven by tds-on-nri-property-sale-india (narrow + numeric + year-anchored
   + FAQPage schema): an NRI-cluster follow-up (seller-side capital gains guide, Form 13
   deep-dive) is the highest-value next post, ahead of the generic queue
   (dpiit/gst-exports/tp-checklist already scheduled Jul 11/18/25).
3. Add IndiaMart PUBLIC seller URL to org `sameAs` (need the public page from the user)
4. `/offshore-accounting` has been flat at ~pos 28 since Jun 4 despite the content
   rewrite — more on-page content isn't moving it; treat as an authority/backlink
   problem, not a content-depth problem.
5. Keep `reviewCount` in aggregateRating schema (layout.tsx, ca-in-nashik, ca-in-sillod)
   in sync with actual GBP review count as new reviews come in.

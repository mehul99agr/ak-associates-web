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

## Verified Firm Stats — Do Not Invent Numbers
The user (Aug 17, 2026) flagged fabricated track-record claims that had crept into
several pages and asked for a full site-wide audit. Ground rules going forward:
- **"100+ clients/businesses"** — confirmed accurate by the user. OK to use.
- **"3+ Years"** — correct, matches the 2023 founding date. Never "5+ Years" (was
  wrong on ca-in-sillod and startups pages, fixed commit b3e97f4).
- **"20+ Expert Consultants"** — confirmed FALSE by the user, removed from homepage,
  ca-in-nashik, ca-in-sillod stat grids (commit 1569fee). Do not reintroduce a team
  headcount number without asking the user for the real figure first.
- **Never invent specific numbers** for anything client/experience-related — no
  "X companies incorporated," "seen N businesses do Y," "helped Z founders," etc.
  — unless the user has explicitly given you that number. If a draft (yours or
  Codex's) includes a number like this without a cited source, treat it as
  fabricated and either cut it or ask before publishing. This applies to blog
  copy, stat blocks, and testimonial-style anecdotes alike.

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
  blog/rnor-status-tax-guide-returning-nris/page.tsx
  blog/poem-place-of-effective-management-india/page.tsx
  blog/nre-vs-nro-account-fema-repatriation-limits/page.tsx
  blog/esop-taxation-for-nris-india/page.tsx
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
- Backlink building — as of Jun 22 export only 1 external backlink existed (a LinkedIn post).
  Jul 8, 2026: first high-authority backlink landed — guest post published on TaxGuru.in
  ("Transfer Pricing Documentation Checklist for FY 2025-26"), byline CA Mehul Agrawal with
  a link to agrawalkhandelwal.com/transfer-pricing in the author bio. See
  backlinks/guest-post-taxguru-transfer-pricing.md for the submission record and live URL.

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

**Search Console findings (Aug 24, 2026 — week-over-week, Aug 16-22 vs Aug 9-15):**
- Strong response to the Aug 16-20 work (Phase 5 cluster completion + audit fixes:
  shortened titles, internal links, BreadcrumbList, FAQ content). Impressions +129%
  (1280 -> 2934), clicks +79% (24 -> 43), weighted avg position improved 12.25 -> 10.48.
  Growth is concentrated on Aug 19-20 (645 and 541 impr those two days vs ~150-450/day
  the prior week) — lines up with the 97e1b04/3ba8f3d/a1ca0be/27d30f1 commits landing
  and getting recrawled.
- CTR dipped slightly (1.88% -> 1.47%) even as position improved — expected: new/
  newly-indexed pages are picking up impressions before they've climbed to a clickable
  position. Not a regression signal on its own; watch that it recovers as position
  keeps improving.
- Biggest 5-day page gainers (impressions): the new Phase 5 Company Incorporation
  posts are the standout — `form-3ceb-transfer-pricing-audit-report` (+249 impr, +5
  clicks), `dsc-din-application-director-guide` (+231 impr), `company-name-reservation-
  run-form-india` (+158 impr, first clicks). Existing earners also grew: `tds-on-nri-
  property-sale-india` (+213 impr), `tan-application-guide-buyer-nri-property` (+112
  impr, +5 clicks), `ca-in-nashik` (+106 impr), `poem-place-of-effective-management-
  india` (+129 impr, +2 clicks). Several NRI posts went from near-zero to double-digit
  impressions for the first time (`nro-account-repatriation-rules-process`, `nri-itr-
  filing-guide-from-abroad`, `pan-card-nri-application-aadhaar-linking`, `angel-tax-
  section-56-share-premium-startups`, `nri-gift-inheritance-tax-rules`).
- Query side: growth is mostly new long-tail impressions with 0 clicks yet (`form
  3ceb due date`, `3ceb due date`, `tds on property purchase from nri fy 2026-27`,
  `din and dsc`) — these are freshly-indexed pages surfacing for the first time, not
  yet ranked high enough to convert. Local/brand queries also ticking up steadily
  (`ca firms in nashik`, `ca in nashik`, `ca nashik`).
- Takeaway: the Aug 16-20 push (3-cluster content completion + on-page audit fixes)
  is showing up in GSC within days, same pattern as past content pushes. No action
  needed yet — let the new pages continue climbing; revisit in ~2-3 weeks to see if
  the long-tail 3CEB/NRI queries convert to clicks or stay stuck deep like
  `/offshore-accounting` did.

## Topical Content Clusters (Aug 2026)
Built out three topical authority clusters — Transfer Pricing, Startups (Compliance &
Advisory), and Company Incorporation — across 5 phases, each following the same
pattern: Article + FAQPage schema, TL;DR box at the top, cross-links within and across
clusters, wired into `blog/page.tsx` (chronological order) and `sitemap.ts`, and a
Related Reading section update on the matching service page. Copy for most phases was
drafted via OpenAI Codex (through the `codex:codex-rescue` subagent) then fact-checked,
templated, and shipped by Claude; Phase 5's last 4 posts were written directly by Claude
after the Codex draft output was lost to a context/task-file issue.

- **Phase 1-2 (Aug 9-13, 2026):** migrated 2 catch-all posts to standalone pages
  (essential-compliance, virtual-cfo), added Form 3CEB, Master File/Local File/CbCR,
  Post-Incorporation Checklist, Startup Compliance Calendar.
- **Phase 3 (commit 2376f0b):** 6 Transfer Pricing posts — TP Methods, Safe Harbour, APA,
  TP for IT Services, TP Audit/Assessment, India-UAE TP Compliance. Corrected a factual
  error in the existing TP documentation checklist post (Local File/Master File
  thresholds and Section 271BA vs 271AA penalties were conflated).
- **Phase 4 (commit 688e561):** 7 Startup posts — ESOP Structuring, Angel Tax (corrected
  effective date to April 1, 2024 per Finance (No. 2) Act 2024, abolished for ALL
  investors not just residents), Startup Valuation, Convertible Notes vs Equity, Founder
  Agreement Essentials, GST Registration for Startups, Due Diligence Checklist.
- **Phase 5 (commit 87c6541, Aug 16, 2026):** 6 Company Incorporation posts — LLP vs
  Private Limited, Annual ROC Filing (AOC-4/MGT-7/DIR-3 KYC), Foreign Subsidiary
  Registration (FDI route), OPC to Private Limited Conversion, DSC/DIN Application
  Guide, Company Name Reservation (SPICe+ Part A/RUN). This closed out the full
  3-cluster/5-phase plan. Where source figures were uncertain (OPC mandatory
  conversion thresholds, sectoral FDI caps), used qualitative language instead of a
  specific number rather than risk a wrong figure — same discipline as the [VERIFY]
  handling in earlier phases.
- Build verified clean after each phase (`node ".\node_modules\next\dist\bin\next" build`).
- All phase commits pushed to `origin/main`.

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

**Done (Aug 8, 2026 — schema audit + Knowledge Hub):**
- Ran a full site-wide JSON-LD audit: FAQPage/Person/AccountingService schema was already far
  more complete than this file's "Done" list suggested (nearly every service page and most
  blog posts already had Article/FAQPage/Person schema from earlier sessions). Only two real
  gaps existed and were fixed:
  - `/about` had zero Person schema despite being the richest bio content on the site
    (ICAI numbers, specializations, credentials) — only a BreadcrumbList. Added the same
    `peopleLd` `@graph` used on the homepage, reusing the identical `@id`s
    (`#mehul-agrawal` / `#rupesh-khandelwal`) so Google merges it into one entity.
  - `blog/dubai-company-registration-guide` had a visible 6-question FAQ section with no
    FAQPage schema at all. Extracted the Q&A into a shared `faqs` array so the visible
    render and the schema can't drift apart, then added the FAQPage script tag.
- Published 4 new "direct answer" Knowledge Hub guides (Article + FAQPage schema, TL;DR
  callout box at the top of each, following the tds-on-nri-property-sale-india template):
  `rnor-status-tax-guide-returning-nris`, `poem-place-of-effective-management-india`,
  `nre-vs-nro-account-fema-repatriation-limits`, `esop-taxation-for-nris-india`. Wired into
  `blog/page.tsx` posts array and `sitemap.ts`. Build verified clean (48/48 static pages).
- Did NOT retrofit TL;DR/FAQ onto the older posts still missing them (uae-corporate-tax-
  indian-impact, uae-entity-setup-when-it-makes-sense, new-income-tax-act-rules-2025, and
  the 4 posts inside blog/[slug]) — fabricating FAQ content without real Q&A backing it
  risks the same "Invalid" Search Console flag noted below. Treat as a real next-content
  task, not a schema task: write genuine FAQ content for those posts, then add schema.

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
1. Build backlinks — 1 on record as of Jun 22 export, now 2 after the Jul 8 TaxGuru guest
   post. Keep submitting guest posts to other tax/finance publications, ask ICAI Nashik
   branch to hyperlink the firm name on job postings, get IndiaMart/Justdial/Sulekha
   profiles linked, keep posting on LinkedIn.
2. Add more blog posts targeting low-competition keywords, following the winning
   pattern proven by tds-on-nri-property-sale-india (narrow + numeric + year-anchored
   + FAQPage schema). Aug 8, 2026: shipped 4 such posts (RNOR, POEM, NRE vs NRO, ESOP
   for NRIs). Aug 16, 2026: completed the full 3-cluster/5-phase content plan (see
   Topical Content Clusters section above) — Transfer Pricing, Startups, and Company
   Incorporation clusters are all now built out. Next candidates: retrofit TL;DR + real
   FAQ content onto the older posts that still lack it (see GEO section above), or pick
   a new topical cluster to map and build (e.g. GST for services businesses, individual
   tax planning/ITR filing, or extend NRI/FEMA further with RNOR + foreign retirement
   account taxability, NRI GAAR exposure).
3. Add IndiaMart PUBLIC seller URL to org `sameAs` (need the public page from the user)
4. `/offshore-accounting` has been flat at ~pos 28 since Jun 4 despite the content
   rewrite — more on-page content isn't moving it; treat as an authority/backlink
   problem, not a content-depth problem.
5. Keep `reviewCount` in aggregateRating schema (layout.tsx, ca-in-nashik, ca-in-sillod)
   in sync with actual GBP review count as new reviews come in.

# Agrawal Khandelwal & Associates LLP — Website Claude Code Context

## Project
Next.js 15 website for **Agrawal Khandelwal & Associates LLP**, a CA firm based in Nashik and Sillod, Maharashtra.

- **Domain:** agrawalkhandelwal.com
- **Established:** 2023 (use this everywhere — `foundingDate` in schema + visible copy.
  Do NOT claim "5+ years" / 2019; the firm is ~3 years old. Conflicting age claims hurt
  both SEO trust and AI/GEO citation confidence.)
- **Stack:** Next.js 15.5, React 19, TypeScript, CSS (no Tailwind)
- **Fonts:** Montserrat (headings/UI) + Open Sans (body) + Cormorant Garamond (serif display: hero H1, section titles) via next/font/google
- **Colors:** Navy `#0A2E5B` + Red `#D22B2B` — use CSS variables only, never hardcoded hex. Tokens in `globals.css` include `--white`, `--success`, `--warning`, `--danger` (+ `-light` variants); use them instead of `#fff`/`#10b981` etc. (`opengraph-image.tsx` is the only exception, it can't use CSS vars)
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
  Sep 14, 2026: audited 5 directory/aggregator listings the user surfaced — only 2 are real
  backlinks (verified live via browser, checked `<a href>` + `rel` attribute on each):
  - **Crunchbase** (crunchbase.com/organization/agrawal-khandelwal-associates) — links to
    agrawalkhandelwal.com, but `rel="nofollow noopener noreferrer"`. Nofollow backlink —
    still useful for GEO/entity signals, no direct ranking-authority pass-through.
  - **TheOrg** (theorg.com/org/agrawal-khandelwal-associates-llp) — links to
    agrawalkhandelwal.com, `rel="noopener noreferrer"` only (no nofollow). **Dofollow
    backlink** — the one real authority-passing link of the five.
  - **Sulekha** listing — text-only mention of "agrawalkhandelwal.com" inside JSON-LD
    schema, no clickable `<a>` link on the page. NAP citation, not a backlink.
  - **Filesure** (filesure.in/company/...) — no mention of the domain anywhere on the
    page at all (no website field populated for this listing).
  - **Jobstore** (jobstore.com/in/company/...) — same as Filesure, no mention/link found.
  Net effect: 2 new backlinks to log (1 dofollow via TheOrg, 1 nofollow via Crunchbase),
  not 5. Filesure/Jobstore listings could be claimed and updated with the website URL if
  the user wants to pursue that later, but as-is they contribute nothing.
  Same day, checked 4 more listings the user surfaced:
  - **Nashik100** (nashik100.com/business/Agrawal-Khandelwal---Associates-LLP/47207) —
    links to agrawalkhandelwal.com/ca-in-nashik, no `rel` attribute at all (default
    dofollow). **Dofollow backlink.**
  - **Magicpin** (magicpin.in/.../Agrawal-Khandelwal-and-Associates-Llp/store/32b171c) —
    links to agrawalkhandelwal.com, `rel="noopener noreferrer"` only (no nofollow).
    **Dofollow backlink.**
  - **Filesure director page** (filesure.in/director/mehul-rajendra-agrawal/11130056) —
    no mention of the domain, same gap as Filesure's company page.
  - **Falconebiz** (falconebiz.com/LLP/AGRAWAL-KHANDELWAL-ASSOCIATES-LLP-ACO-7072) — no
    mention of the domain either.
  Running tally after both audits: **4 confirmed real backlinks** — TheOrg, Nashik100,
  Magicpin (all dofollow) + Crunchbase (nofollow) — on top of the existing LinkedIn post
  and TaxGuru guest post. Sulekha is a citation only (no link). Filesure (both pages) and
  Jobstore/Falconebiz have no mention of the domain at all — these MCA-data aggregators
  don't expose a website field for this listing, so there's nothing to "fix" without an
  editable claim/profile process on their end.
  Sep 18, 2026: a second CAclubindia guest post went live — "Tax Audit Deadline AY 2026-27:
  A Practical Compliance Checklist for CAs and Taxpayers"
  (caclubindia.com/articles/.../56242.asp). Verified live via browser: same pattern as the
  first CAclubindia post (Aug 2) — article body link stripped to plain text, real backlink
  lives on the author's CAclubindia member profile (member_id=4323716), which was already
  linking to agrawalkhandelwal.com from the first submission. **Not a new referring
  domain** — same profile link counted already. See
  `backlinks/guest-post-caclubindia-tax-audit-deadline.md` for the record.
  **Sep 21, 2026 correction — CAclubindia/TaxGuru backlinks re-verified live via Claude in
  Chrome and found to be dead, not just nofollow.** Checked all 3 known CAclubindia
  articles (offshore-accounting, tax-audit-deadline, and 2 more previously-undocumented
  ones by the same author found on the profile page — `llp-vs-private-limited-choosing-
  the-right-structure...-56245`, `fema-compliance-checklist-for-startups...-56244`,
  `transfer-pricing-documentation-for-smes...-56243`), the TaxGuru transfer-pricing post,
  and the CAclubindia profile page (member_id=4323716) itself, via `read_page`/`find` (not
  just get_page_text, which can't distinguish plain text from a real `<a href>`). **None
  of them have a live clickable link to agrawalkhandelwal.com anywhere** — not in the
  article body, not in the author bio box, not on the CAclubindia profile page (the
  "Firm website: https://agrawalkhandelwal.com" line on the profile is plain text, no
  `<a>` tag), not on the TaxGuru author page. Only bare-text domain/email mentions exist.
  This contradicts the note above that "the real backlink lives on the author's
  CAclubindia member profile" — that was apparently wrong or the link has since been
  stripped. **Correction to the running backlink tally:** neither CAclubindia nor TaxGuru
  currently contribute a real backlink (dofollow or nofollow) — they contribute brand/
  citation value only. The TaxGuru guest post should no longer be described as "the first
  high-authority backlink" in outreach claims — it is a high-authority citation, not a
  backlink, unless re-verified with a live `<a href>` in the future. The Sep 14 directory
  audit's "4 confirmed real backlinks" tally (TheOrg, Nashik100, Magicpin, Crunchbase) is
  unaffected. Also found: 2 more CAclubindia guest-post articles by the same author were
  live but never logged in `backlinks/` — worth writing up and adding to tracking if the
  user wants full credit for that outreach work.

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
  i.e. the pending items below (backlinks, low-competition blog content).

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

**Search Console findings (Sep 10, 2026 — 28-day window):**
- Totals: 247 clicks, 16.1k impressions, 1.5% CTR, avg. position 11.2.
- Brand query is airtight: "agrawal khandelwal & associates llp" — 6/6 clicks, 100% CTR,
  position 1.0.
- The TDS-on-NRI-property-sale cluster is the clear standout non-brand performer, ranking
  position 1.0-2.5 across variants ("tds rate on sale of property by nri for fy 2026-27",
  "tds on sale/purchase of property by nri for fy 2026-27", etc.) and actually converting
  clicks. This is the strongest content asset on the site right now.
- Local Nashik queries generate real impression volume but rank too deep to convert:
  "ca in nashik" 125 impr/pos 19.5, "ca firms in nashik" 57 impr/pos 13.8, "chartered
  accountant in nashik" 34 impr/pos 22.6. "ca nashik" is the exception, converting at
  pos 10.9. Same pattern as `/offshore-accounting` — authority/backlink problem, not
  content depth.
- "Near me" / directory-intent queries ("ca office near me" pos 7.5, "ca near me" pos
  13.6, "chartered accountant near me" pos 8, "ca firms near me" pos 11) have decent
  position but 0 clicks — worth a look at title/meta snippet appeal for these, since
  position alone isn't converting.
- The Aug 16 Phase 5 cluster posts (3CEB, DSC/DIN, company name reservation, etc.) are
  still mostly in the "impressions with 0 clicks" phase 3-4 weeks post-publish — consistent
  with the documented 4-6 week climb pattern, not a regression.
- Noted "ca in aurangabad" / "ca in chhatrapati sambhaji nagar" impressions with no
  matching clicks — Sillod office is geographically adjacent to Aurangabad/Sambhaji Nagar;
  worth checking whether ca-in-sillod targets these terms.
- A portion of long-tail impressions are AI-assistant-style prompts ("find the business
  development head...", "what automation tools help with rbi odi reporting...") likely
  surfaced via AI Overviews rather than real prospect searches — not actionable, just
  context for why raw impression counts include some noise.

**Search Console findings (Sep 14, 2026 - 28-day window, Aug 16-Sep 12, pulled live via
Claude in Chrome logged into search.google.com):**
- Totals: 142 clicks, 10.7k impressions, 1.3% CTR, avg. position 10.9.
- **Clicks and impressions down vs the Sep 10 entry above** (247 clicks / 16.1k impr /
  1.5% CTR for a near-identical Aug 13-Sep 9 window) despite avg. position improving
  slightly (10.9 vs 11.2). A ~40% click drop on an overlapping window is a real signal,
  not just a date-range artifact - worth re-checking in a few days to see if it's a
  transient dip or the start of a regression. No content/technical cause identified yet.
- Top pages by clicks: tan-application-guide-buyer-nri-property (26 clicks/1,145
  impr) and tds-on-nri-property-sale-india (16/1,189) are now the two biggest earners
  on the site, ahead of the homepage (14/385). Then ca-in-nashik (8/853),
  company-name-reservation-run-form-india (8/630), form-3ceb-transfer-pricing-audit-
  report (8/510), dsc-din-application-director-guide (7/342),
  poem-place-of-effective-management-india (4/196), tds-nro-interest-fd-dtaa-relief
  (4/196), transfer-pricing-methods-india-explained (3/381). 97 pages total generated
  impressions this window.
- Top query is now non-brand: "tds rate on sale of property by nri for fy 2026-27"
  (4 clicks/256 impr), ahead of "ca nashik" (2/26), "tp audit means" (1/63), "tds on
  property purchase from nri fy 2026-27" (1/61), "chartered accountant in nashik"
  (1/29). The brand query "agrawal khandelwal & associates llp" shows only 1 click/1
  impression in this specific 28-day slice (vs 6/6 clicks over the trailing 3 months
  per the Sep 10 data) - brand search volume is front-loaded earlier in the quarter,
  not evenly spread, so a single 28-day slice can understate brand strength.

**Search Console findings (Sep 16, 2026 - 28-day window, Aug 19-Sep 15, pulled live via
Claude in Chrome logged into search.google.com):**
- Totals: 138 clicks, 10.8k impressions, 1.3% CTR, avg. position 10.8. Essentially flat
  vs the Sep 14 pull (142 clicks / 10.7k impr / 1.3% CTR / 10.9 pos on an overlapping
  Aug 16-Sep 12 window) - the ~40% click drop flagged in the Sep 14 entry has not
  worsened and position ticked slightly better. Reads as a stable plateau, not an
  ongoing regression; still worth another check in 1-2 weeks to confirm the trend line.
- Top pages by clicks (98 total pages generating impressions this window):
  tan-application-guide-buyer-nri-property (25 clicks/1,168 impr) and
  tds-on-nri-property-sale-india (15/1,186) remain the two biggest earners, well ahead
  of the homepage (13/385). Then company-name-reservation-run-form-india (8/643),
  form-3ceb-transfer-pricing-audit-report (8/510), ca-in-nashik (7/853),
  dsc-din-application-director-guide (7/343), tds-nro-interest-fd-dtaa-relief (4/202),
  transfer-pricing-methods-india-explained (3/403), poem-place-of-effective-management-
  india (3/178). Same core set of top performers as the Sep 14 pull, in a similar order
  - no new page has broken into the top ranks yet.
- Did not re-pull the full query list breakdown this session (only totals + pages) -
  next full audit should include queries/countries/devices for a complete comparison.

**Root-cause dig on the "click/impression drop" (Sep 16, 2026):** User flagged the
apparent decline; investigated via Manual Actions, Page Indexing, and a full day-by-day
breakdown (Aug 15-Sep 13) rather than just re-reading rolling 28-day totals.
- **No technical cause.** Manual Actions: clean, no issues. Page Indexing: 83 indexed /
  7 not indexed (3 redirect, 2 crawled-not-indexed, 2 discovered-not-indexed) - normal
  background noise, nothing new.
- **Real daily pattern:** Aug 15-18 baseline was low (103-457 impr/day). Aug 19-20 spiked
  hard (645 and 541 impr; 16 and 11 clicks) - the recrawl bump from the Phase 5 content +
  audit-fix commits landing, same event already documented in the Aug 24 entry above.
  Since then (Aug 21-Sep 13) it settled into a plateau of ~250-520 impr/day and 1-9
  clicks/day - noisy but not trending further down, and still above the pre-spike Aug
  15-18 baseline. There is no ongoing collapse in the underlying daily data.
- **The "16.1k impressions" figure in the Sep 10, 2026 entry above is almost certainly a
  data-recording error from that session, not a real prior traffic level.** It matches
  this session's 3-month total (263 clicks / 17.9k impressions / 1.5% CTR / 10.9 avg
  position) almost exactly, while manually summing this session's actual daily
  impressions never produces anywhere near 16.1k for any 28-day window - real 28-day
  totals have consistently landed in the 10-11k range. Most likely that earlier session
  read the "3 months" view totals while believing it was on "28 days". Treat the
  Sep 10 entry's totals as unreliable; the Sep 14/Sep 16 entries (both ~138-142 clicks /
  10.7-10.8k impressions) are the trustworthy baseline going forward.
- **Takeaway for future GSC pulls:** always sanity-check a fetched total against the
  visible date-range chips (24 hours / 7 days / 28 days / 3 months) in a screenshot
  before recording it - don't trust total-clicks/impressions numbers pulled via
  get_page_text alone without confirming which range toggle was actually active.

**Search Console findings (Sep 21, 2026 - 28-day window, pulled live via Claude in
Chrome logged into search.google.com):**
- Totals: 171 clicks, 12.8k impressions, 1.3% CTR, avg. position 10.2. Verified against
  the visible "28 days" chip in a screenshot per the Sep 16 lesson above (the
  get_page_text extraction returned stale/cached 3-month totals - 329 clicks/22.4k
  impressions - despite the UI correctly showing 28-day data; screenshots were the
  reliable source this session, not get_page_text).
- Continues the stable plateau documented Sep 14-16: clicks/impressions/CTR all close
  to the Sep 16 pull (138 clicks/10.8k impr/1.3%/10.8 pos), position ticked slightly
  better (10.2 vs 10.8). No regression, no new spike.
- Top pages by clicks: tan-application-guide-buyer-nri-property (22 clicks/1,440 impr)
  and tds-on-nri-property-sale-india (19/1,270) remain the two biggest earners, well
  ahead of the homepage (12/416). Then company-name-reservation-run-form-india (9/691),
  ca-in-nashik (8/953), nri-agricultural-land-india-fema-rules (8/347, a new entrant to
  the top ranks - part of the Sep FEMA mini-cluster), dsc-din-application-director-guide
  (7/233), nri-capital-gains-inherited-gifted-property (7/105, also new - part of the
  Sep 17 NRI/FEMA niche batch), tax-audit-due-date-penalty-for-delay (5/250). Same core
  leaderboard as recent pulls, with two Sep-published posts now breaking into the top 8.
- Top query: "tds rate on sale of property by nri for fy 2026-27" (5 clicks/269 impr),
  same top performer as every recent pull - this remains the site's single strongest
  ranking asset.
- Did not pull the full query-list breakdown beyond the top rows, or countries/devices,
  this session - just totals + top pages/queries for a plateau check.

## FEMA Mini-Cluster (Sep 1-10, 2026)
Added 4 new posts at the user's request, dated across Sep 1-10, 2026 to spread publish
dates rather than batch-publish same-day:
- **Sep 1** - `fast-ds-2026-foreign-assets-disclosure-scheme` (category: Tax Compliance):
  covers the real FAST-DS 2026 scheme (Finance Act 2026 Ch. IV Sections 130-144 + FAST-DS
  Rules 2026) - verified via web search before writing (user's initial description of the
  scheme name was confirmed accurate). Rs 1 crore small-taxpayer ceiling, Aug 16-Dec 31,
  2026 window, 30%+30% effective 60% tax, Black Money Act protection.
- **Sep 4** - `odi-overseas-direct-investment-guide-india` (FEMA & Compliance): general ODI
  guide (Overseas Investment Rules/Regulations/Directions 2022) - explicitly notes ODI is
  for persons resident in India, NOT the route NRIs use to invest abroad, to avoid the
  scope confusion the original request implied.
- **Sep 7** - `fdi-in-india-routes-compliance-guide` (FEMA & Compliance): automatic vs
  government route, Press Note 3 land-border rule, FC-GPR/FC-TRS reporting, pricing
  guidelines. Notes agriculture is FDI-restricted, cross-links to the agri-land post.
- **Sep 10** - `nri-agricultural-land-india-fema-rules` (NRI Taxation): the core requested
  topic. NRIs/OCIs cannot purchase agricultural land/plantation/farmhouse under FEMA
  Non-Debt Instruments Rules 2019 - only inheritance, gift from resident relative, or
  pre-NRI-status ownership are valid holding routes; resale of inherited land is resident-
  only; breach voids the transaction plus up to 3x penalty. Explicitly states neither FDI
  nor ODI offers a structuring workaround around the restriction.
- User's original ask bundled "FAST-DS2026, FDI, ODI and agri-land FEMA compliance" as one
  post; clarified via AskUserQuestion that FAST-DS (a resident-taxpayer foreign-asset
  disclosure scheme) doesn't naturally connect to NR-held Indian agri-land (an FEMA
  property-holding rule) and split into 4 standalone posts per the user's direction, rather
  than forcing an inaccurate connection between unrelated compliance regimes.
- All legal claims verified via web search before drafting (agri-land restriction, FDI
  sectoral/route rules, ODI framework) - no invented figures, per the site's no-fabrication
  discipline. Wired into `blog/page.tsx` and `sitemap.ts`. Build verified clean.

## NRI/FEMA Niche Topics Batch (dated Apr 25 - Aug 22, 2026)
5 more posts at the user's request for "niche, value-adding, top-10-spot" NRI/FEMA topics,
backdated into gaps in the existing publish calendar (Apr 2026 - Sep 10, 2026) rather than
appended at the end:
- **Apr 25** - `tcs-foreign-remittance-lrs-rates-fy2026-27` (FEMA & Compliance): deep-dive
  on the Budget 2026 TCS/LRS rate revision (Section 394(1), earlier 206C(1G)) - Rs 10 lakh
  threshold (up from Rs 7 lakh), 0% for loan-funded education, 2% for self-funded
  education/medical/tour packages, 20% for other purposes, effective April 1, 2026.
- **May 22** - `aadhaar-pan-linking-nri-without-aadhaar` (NRI Taxation): Section 262
  (earlier Section 139AA) - clarifies most NRIs are outside the mandatory PAN-Aadhaar
  linking requirement since they're not Aadhaar-eligible, vs NRIs who held Aadhaar as a
  resident before emigrating (still on the hook).
- **Jun 10** - `nri-property-sale-below-stamp-duty-value-section-50c` (NRI Taxation):
  Section 78 (earlier Section 50C) deemed full-value-of-consideration rule, safe harbour
  tolerance, and the buyer's separate Section 92 (earlier 56(2)(x)) deemed-income exposure.
- **Jul 20** - `nri-selling-shares-indian-private-company-tax-fema` (NRI Taxation): FEMA
  pricing guidelines/DCF-NAV valuation, TDS under Section 393(2), capital gains, and
  FC-TRS reporting for an NRI exiting a private company.
- **Aug 22** - `nri-gaar-cross-border-structures` (International Tax): GAAR under Part T of
  the Income Tax Act 2025 (earlier Sections 95-102/Chapter X-A), the Impermissible
  Avoidance Arrangement test, and the Rs 3 crore Rule 10U threshold.
- **IMPORTANT correction made in this batch:** `lrs-liberalised-remittance-scheme-guide`
  (published Jun 20, 2026) had stale pre-Budget-2026 TCS figures (Rs 7 lakh threshold,
  5%/20% education-medical split) that were simply wrong for a post published after the
  April 1, 2026 rate change took effect - this was an error in the original post, not a
  later staleness issue. Fixed the TL;DR, FAQ, table, and both narrative mentions to the
  current Rs 10 lakh / 0-2-20% structure, and cross-linked to the new deep-dive post.
  `dateModified` set to 2026-09-10 (the actual correction date) - never backdate a
  dateModified before a post's own datePublished, it breaks the Article schema's internal
  logic even when the surrounding narrative is being backdated.
- Section renumbering convention (Income Tax Act 2025 vs 1961 Act) already established
  elsewhere on the site was reused and extended: 195->393(2), 197->395, 201->398,
  56(2)(x)/56->92, 271-I->359, 13->128 (form), 27Q->144 (form), 15CA/15CB->145/146 (form).
  New mappings added this batch, verified via web search before use: 206C(1G)->394(1),
  50C->78, 139AA->262. GAAR (95-102) has no single clean new section number - cited as
  "Part T" per source rather than inventing one.
- All facts verified via web search before writing (TCS rates/threshold, Section 50C/78
  safe harbour existence, GAAR Rs 3 crore Rule 10U threshold, FC-TRS requirement) - no
  invented figures. Wired into `blog/page.tsx` (inserted in date order, not appended) and
  `sitemap.ts`. Build verified clean.

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

## 250-Topic Content Expansion Plan (Sep 2026 — IN PROGRESS)
User asked (Sep 16-17, 2026) to expand into GST, Income Tax, Tax Audit, and other
overlapping categories, targeting a total of 250 blog topics (86 existing + 164 new).
Full approved list with categories, notes, and section-mapping status lives in
**`blog-topics-250-for-approval.csv`** at the project root — user marked every row "Yes"
after one correction round (see Income Tax Act 2025 discipline below). Treat that CSV
as the source of truth for what's approved and roughly what order to build in; do not
regenerate the topic list from scratch in a future session, just keep working through it.

**Process being used (repeat this for every remaining batch):**
1. Take the next ~15 unbuilt topics from the CSV, grouped by category.
2. Split into 5 parallel subagents (Agent tool, `general-purpose`), 3 posts each.
3. Each agent prompt includes: the house-style template (point to 2-3 recent example
   posts, e.g. `input-tax-credit-itc-gst-guide` or `income-tax-notices-explained-143-1-143-2-148`
   for how unconfirmed section numbers are handled), the Income Tax Act 2025 verified
   mapping table (below), instructions to web-search current thresholds/rates rather
   than assume, the no-fabricated-stats rule, and explicit instructions NOT to touch
   `blog/page.tsx`, `sitemap.ts`, or run the build (avoids merge conflicts between
   parallel agents).
4. After all 5 agents in a batch report back: run the build once, fix any syntax errors
   (apostrophe/quote-escaping bugs in FAQ strings have been the most common issue),
   spot-check 1-2 posts in full for house-style/fact discipline, then wire all posts
   into `blog/page.tsx` and `sitemap.ts` centrally in one pass (a Python script run via
   Bash is faster and more reliable than manual Edit calls for 15 rows at once).
5. Commit and push per batch, not per post.

**Batches shipped so far:**
- **Batch 1 (commit 7f22f47, Sep 17-22 dates):** 15 GST posts — registration, composition
  scheme, GSTR-1/3B/9/9C, ITC, RCM, e-way bill, e-invoicing, real estate GST, works
  contract, e-commerce TCS, late fees, cancellation/revocation, LUT for exports, GST audit.
- **Batch 2-3 (commit dbb3552, Sep 22-Oct 2 dates):** 30 Income Tax fundamentals — slabs/
  regime comparison, ITR filing/forms, Form 16, HRA, 80C/80D, house property income,
  capital gains (property + shares/MF, explicitly resident-focused to avoid cannibalizing
  existing NRI posts), clubbing of income, HUF, crypto/VDA, gaming/lottery, gift tax,
  advance tax, refunds, rectification, notices (143/148), faceless assessment,
  condonation of delay, ITR-U, presumptive taxation (44AD/44ADA/44AE), TDS (192/194-IB/
  194J/194C/194Q).
- **Batch 4 (commit 2e4aff8, Oct 3-8 dates):** 15 more — remaining Income Tax (206C(1H)
  repeal explainer, standard deduction, tax-saving beyond 80C, freelancer/gig taxation,
  87A rebate, set-off/carry-forward, 43B(h)) + first 8 Tax Audit posts (44AB thresholds,
  Form 3CA/3CB/3CD, tax audit vs statutory vs GST audit, due date/271B penalty,
  who-needs-audit checklist, 44AA books of accounts, scrutiny response strategy, 144
  best judgment assessment).
- **Batches 5-7 (commit ae7f430, Oct 16-Nov 6 dates):** 43 more — drafted via 15 parallel
  subagents (3 posts each, run all at once) then wired centrally in one pass. Remaining
  13 Tax Audit topics (appeals CIT(Appeals)->ITAT, faceless appeal scheme, Section 270A
  under/misreporting penalty, Section 132 search & seizure, Section 220(6) stay of
  demand, Vivad Se Vishwas VSV 2.0, Form 61A/SFT, AIS vs Form 26AS, e-commerce tax audit,
  Section 276C/276CC prosecution). All 15 Corporate Tax & Compliance topics (dividend/
  DDT-abolition taxation, Oct-2024 buyback tax regime change, statutory audit, board/AGM
  calendar, Section 188 RPT, Section 166/164 director liability, STK-2 strike off,
  secretarial audit, CHG charge forms, Section 185/186 related-party loans, XBRL, Section
  135 CSR, Section 90 SBO). 9 of 10 MSME & Registrations topics (Udyam, Shop &
  Establishment/Gumasta, IEC, Maharashtra Professional Tax, trademark registration,
  Startup India vs DPIIT clarification, Udyam vs DPIIT comparison, FSSAI, trade license).
  6 of 8 Trusts & NGOs topics (12A/80G registration, Trust vs Society vs Section 8,
  FCRA, charitable trust taxation, NGO compliance calendar, CSR fund utilisation for
  receiving trusts, 80GGC political donations).
  One planned topic (`msme-payment-delay-rules-the-45-day-rule-under-section-43b-h`) was
  skipped as a confirmed duplicate of the already-live `section-43bh-msme-payment-
  disallowance-buyers` from Batch 4 — caught by the drafting subagent itself. One
  drafted post (`best-judgment-assessment-under-section-144-what-it-means`) was cut
  during the centralized wiring pass as a duplicate of the already-live
  `best-judgment-assessment-section-144` from Batch 4 — both subagents worked from the
  same CSV row without knowing the topic was already covered; the file was deleted and
  the entry removed before commit. Lesson for future parallel batches: cross-check new
  topics against `blog/page.tsx`'s existing slugs by keyword (not just exact slug match)
  before assigning them to agents, since a topic can already be live under a
  differently-worded slug.
- **Batch 8, partial (commit d950ae0, Nov 9-15 dates):** 3 of 15 planned topics —
  Payroll Compliance Checklist, Gratuity Payment Rules, Labour Law Compliance overview
  (all Payroll & Labour Compliance category). **First batch drafted via Gemini CLI
  instead of Claude subagents** (`gemini -p "<prompt>"` headless, invoked via Bash since
  the `gemini-cli` MCP server (`gemini-mcp-tool` npm package) is broken on this Windows
  machine — its `ask-gemini` tool fails immediately with `'agy.exe' is not recognized`,
  a path-quoting bug unrelated to the underlying `gemini` CLI, which works fine directly.
  If revisiting the MCP route later, that's the first thing to debug; the direct CLI
  route works and is the documented fallback).
  Process used: wrote 5 grouped prompts (3 topics each) to scratch files, ran all 5
  `gemini -p` calls in parallel via Bash background jobs, asked Gemini to output
  structured fields (SLUG/TITLE/META_DESCRIPTION/KEYWORDS/TLDR/BODY_HTML/FAQS) per post,
  then a Python script parsed that output and templated it into the site's exact
  page.tsx house style (same template as the Claude-subagent batches).
  **Result: only 1 of 5 groups succeeded.** Running 5 parallel `gemini -p` calls at once
  exhausted the Gemini free-tier daily quota (`generativelanguage.googleapis.com` 429
  RESOURCE_EXHAUSTED, "You have exhausted your daily quota") after the first group
  finished — the other 4 groups (12 posts: remaining Payroll topics, EPF, ESI, Form
  10B/10BB, OPC registration, 3 Transfer Pricing topics) all failed outright and
  produced no content, not even partial/truncated output. This is a materially worse
  parallelization failure mode than the Claude-subagent batches (5-7) had: a duplicate
  topic there still produced usable content that just needed dropping, whereas a
  Gemini quota failure produces nothing to recover — same input topic just needs a full
  rerun once quota resets. **Do not run more than 1 `gemini -p` call at a time on the
  free tier** (or check the current tier/quota first) — sequential-with-delay is the
  safe pattern, not parallel, unlike the Claude subagent approach which parallelizes
  fine.
  Additionally, the Gemini-drafted content needed two mechanical fixes the Claude
  subagent pipeline never produced: (1) a factual math error (Rs 20 lakh gratuity
  exemption ceiling written out as "Rs 20,000,000" = 2 crore, a 10x error — caught by
  manual review, not by web-search verification since it's arithmetic, not a sourced
  fact), and (2) raw HTML `style="..."` string attributes inside `<table>` markup,
  which is valid HTML but invalid JSX (React requires `style={{...}}` objects) and
  would have failed the build silently if not caught before running it. Both fixed
  before commit. Lesson: when templating AI-drafted HTML directly into `.tsx` source
  (not via `dangerouslySetInnerHTML`), always grep the draft for `style="` and other
  raw-HTML-only syntax before running the build, regardless of which model wrote it.
- **Batch 8, completed (commit 45a3a2c, Sep 17, 2026 — dates staggered Sep 25-Dec 1
  in the posts themselves):** the remaining 12 topics were drafted via 4 parallel
  Claude subagents (3 posts each, general-purpose) after the Gemini quota failure —
  EPF, ESI, Contract Labour vs Employment, Minimum Wages Act, POSH Act, Form 24Q vs
  26Q, Perquisites & Fringe Benefits (Payroll & Labour Compliance, closing out all 10
  planned topics in that category); Form 10B/10BB (closing out Trusts & NGOs); OPC
  Registration (closing out Company Incorporation); Cost Plus Method, Profit Split
  Method, Section 92CE secondary adjustment (closing out Transfer Pricing additions).
  Centralized wiring caught and fixed: an unescaped-apostrophe syntax error in the
  minimum-wages post, a hardcoded "18%" in the 92CE post's metadata that contradicted
  its own correctly-qualitative body/FAQ treatment of that rate, and several same-day
  publish-date collisions (staggered across Sep-Dec 2026 per site convention). Build
  verified clean (234 static pages). **Important finding from this batch:** the OPC
  post confirmed via web search that the OPC mandatory-conversion thresholds (Rs 50
  lakh paid-up capital / Rs 2 crore turnover) and the 2-year minimum holding period
  before voluntary conversion were BOTH removed by the Companies (Incorporation)
  Second Amendment Rules, 2021, effective April 1, 2021. The existing
  `opc-to-private-limited-conversion-india` post still describes the old mandatory
  thresholds as current and is now stale — needs a correction pass (not done yet).
- **Batch 9 (final batch), completed (commit 5d549f7, Sep 17, 2026 — dates staggered
  Sep 17-Nov 7 in the posts themselves):** the last 18 topics (all of NRI Taxation and
  Startup Advisory additions) drafted via 6 parallel Claude subagents (3 posts each).
  NRI Taxation (10): FD comparison (NRE/NRO/FCNR), Section 91 double-taxation relief,
  inherited-agricultural-land sale, real estate investing, remote work for foreign
  employers, life insurance/ULIP taxation, power of attorney, demat PIS vs non-PIS,
  seafarer/merchant navy taxation, OCI vs NRI vs PIO. Startup Advisory (8): ESOP pool
  sizing, term sheet negotiation, SAFE notes legal status, exit strategies, co-founder
  equity disputes, cap table mistakes, Fast Track Exit/winding up, bank account opening.
  Several topics deliberately overlapped with existing posts (NRE/NRO account post, NRI
  agricultural land post, ESOP structuring post, convertible notes post, general winding-
  up post) — each subagent read the existing post first and scoped the new one to a
  distinct angle, with cross-links added both directions; confirmed no duplicate coverage.
  **Two notable findings:** (1) a US-style SAFE note is NOT a recognised capital
  instrument under the Companies Act or FEMA's Non-Debt Instruments Rules — the Indian
  market workaround is the "iSAFE," legally structured as CCPS, not a bare SAFE contract
  (verified across multiple independent legal-advisory sources); (2) "Fast Track Exit
  (FTE)" is defunct MCA terminology — the scheme was superseded by Section 248/Form
  STK-2 in December 2016 — the new post states this honestly (targets the still-common
  search term but explains the current process) rather than presenting FTE as live.
  Centralized wiring staggered publish dates to avoid collisions and verified a clean
  build (252 static pages, no duplicate slugs).
- **Total: 222 posts live, 134 of 134 planned new topics done, no duplicate slugs,
  build clean after every batch. The 250-topic content expansion plan (see below) is
  now complete — all approved rows in `blog-topics-250-for-approval.csv` are live.**

**Important correction found during Batch 4:** Section 206C(1H) (TCS on sale of goods)
was verified via web search to have been **repealed effective April 1, 2025**, made
redundant by Section 194Q (buyer-side TDS on the same transaction class). The CSV's
planned "TCS on Sale of Goods: Section 206C(1H) Explained" topic was rewritten as
`tcs-sale-of-goods-section-206c1h-repealed`, a "what changed and why" explainer rather
than a live-provision guide. If any future topic references 206C(1H) as active, verify
first — it is not.

**Income Tax Act 2025 renumbering discipline (mandatory for every Income Tax / Tax
Audit / Corporate Tax post going forward):** Old, commonly-searched section numbers go
in the **title and slug** (that's the actual search term). New-Act numbers are cited in
body copy ONLY where independently verified — never guess, matching the existing GAAR
("Part T") precedent. Verified mappings confirmed so far (safe to reuse without
re-verifying):
- 44AB (tax audit) → Section 63
- 44AA (books of accounts) → Section 62
- 44AD / 44ADA / 44AE (presumptive taxation) → Section 58
- 43B(h) (MSME payment) → Section 37
- 56(2)(x) (gifts) → Section 92
- 80G → Section 133
- 80GGC → Section 137
- 87A (rebate) → Section 156
- 192 (TDS salary) → Section 392 (read with Section 402)
- 194C, 194J (TDS) → Section 393 (consolidated TDS section; no sub-item/table number
  has been confirmed, don't invent one)
- 206C → Section 394 (but 206C(1H) specifically is repealed, see above)
- 12A (trust registration) → spread across Chapter XVII-B (~Sections 332-355), not one
  clean section
- Form 24Q → Form 138, Form 26Q → Form 140, Form 27Q → Form 144 (TDS return forms,
  independently corroborated via a second source in this project)
- 80C → Section 123 (deduction cap unchanged at ₹1.5 lakh, eligible-investment list
  moved to Schedule XV) — reversed from "rejected" during the Sep 17, 2026 fact-check
  audit: a Batch 2 session had rejected this on a single low-authority source, but this
  session independently corroborated it across 8+ higher-authority sources (BusinessToday,
  Outlook Money, Upstox, ClearTax, caclubindia, referencing CBDT statements) with no
  conflicting figures found. Lesson: a "rejected as unverified" note isn't permanent —
  re-check it if a later session finds stronger corroboration, as happened here.
- 80D → Section 126 (deduction limits unchanged: ₹25,000 general / ₹50,000 senior
  citizen) — confirmed via ClearTax, Axis Max Life, mStock, independently in the same
  Sep 17, 2026 audit.
- 147 (income escaping assessment) → Section 279; 148 (notice for reassessment) →
  Section 280 — both confirmed via ClearTax, TaxTMI, and TaxBuddy independently in the
  Sep 25, 2026 site-wide fact-check pass.
- **Forms 3CA, 3CB, and 3CD (tax audit report) → consolidated into a single Form 26**
  under Rule 47 of the Income-tax Rules 2026, governed by Section 63 (renumbered
  44AB), applicable for tax years commencing April 1, 2026 (i.e. current for FY
  2026-27 audits now). Confirmed live on incometax.gov.in/incometaxindia.gov.in
  directly (not a draft), plus TaxScan, TaxGuru, Verotus, Toolisky. Structure: Parts
  A/B = old Form 3CD statement of particulars; Part C = old Form 3CA/3CB audit
  report/opinion. Underlying audit-applicability thresholds unchanged. All posts
  referencing 3CA/3CB/3CD individually were updated Sep 25, 2026 to note this; the
  dedicated `tax-audit-report-forms-3ca-3cb-3cd-explained` post was rewritten to lead
  with Form 26 as current rather than "proposed."
Confirmed UNRELIABLE / not confidently mappable as of Oct 2026 (use qualitative framing,
e.g. "renumbered under the Income Tax Act 2025; confirm the exact section reference at
filing time" — do not guess): Sections 144, 154, 133A, 139(8A), 194-IB, 194Q, 271B, and
12A's exact sub-references. One lead found Sep 25, 2026 (143(1)→270, 143(2)→270(8) per
TaxGuru) but only on a single source — do not treat as verified until a second
independent source corroborates it.

**Remaining work: none.** All categories in `blog-topics-250-for-approval.csv` are
complete as of Batch 9 (Sep 17, 2026). If the user wants further content expansion,
a fresh topic list would need to be scoped and approved first — do not assume the
old CSV has unbuilt rows without checking it again, and do not silently generate new
topics without approval (see the CSV-approval precedent at the top of this section).

The proven process for any future batch (reuse if a new list is approved): parallel
Claude subagents, 3 posts each, run all at once, then a single centralized wiring
pass (check for raw `style="..."` strings, run the build, fix syntax errors, stagger
any same-day publish-date collisions, wire into `blog/page.tsx` and `sitemap.ts`,
spot-check 1-2 posts in full, then build once more before committing). Gemini CLI's
free-tier quota does not support running more than 1 call at a time (see Batch 8
notes above) — Claude subagents are the reliable method going forward.

**Stale content fixed (commit f28508f, Sep 17, 2026):** the `opc-to-private-limited-
conversion-india` post previously described OPC mandatory-conversion thresholds (Rs 50
lakh capital / Rs 2 crore turnover) and a 2-year minimum holding period as current;
both were removed by the 2021 amendment (see Batch 8 finding above). Corrected the
TL;DR, two body sections, and two FAQ entries; added `dateModified: '2026-09-17'` and
a cross-link to `one-person-company-opc-registration-eligibility-and-compliance`.

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

**Removed (Sep 26, 2026):** `aggregateRating` schema and the Google reviews block were removed site-wide at the user's request (see Front-End Audit).

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

## Legal/Regulatory Corrections Log
- **Sep 25, 2026 — TAN requirement for buying property from an NRI (partially removed, Oct 1,
  2026):** CBDT Notification No. 121/2026 (G.S.R. 830(E), dated Sep 22, 2026) inserted a new
  Schedule E into Form 141, titled "TDS on any consideration on transfer of any immovable
  property covered under section 393(2)" (the NRI-seller provision, old Section 195). From
  **October 1, 2026**, a **resident individual or HUF** buyer purchasing property from a
  non-resident can report and deposit TDS via this PAN-based schedule instead of obtaining a
  TAN. This does **not** extend to buyers that are companies, firms, or LLPs, and does not
  apply retroactively to payments made before Oct 1, 2026 — those cases still need a TAN and
  Form 27Q (now Form 144) under Section 195/393(2).
  Two of the site's top-earning blog posts (`tan-application-guide-buyer-nri-property` and
  `tds-on-nri-property-sale-india`) previously stated the *opposite* — that the Budget 2026
  PAN-based Form 141 change applied only to resident-seller purchases and explicitly did NOT
  cover NRI sellers. That was accurate as of when it was written (before the Sep 22
  notification existed) but became wrong once the amendment landed. Both posts corrected
  Sep 25, 2026 — TL;DR, FAQ schema, and body callout boxes updated with the individual/HUF
  vs. company/firm distinction and the Oct 1, 2026 effective date; `dateModified` bumped on
  both. **Lesson: a "no, that's a misreading" correction written into a post is not
  permanent — a live regulation can change after the correction was published. Before
  reusing or citing either post's TAN guidance, or writing new content that touches
  NRI-property TDS/TAN mechanics, re-verify against current CBDT notifications rather than
  trusting the in-post "Budget 2026 Update" framing.** If reviewing again after Oct 1, 2026,
  confirm Schedule E is live and working on the e-filing portal as described, not just
  notified.

- **Sep 25, 2026 — Site-wide fact-check pass (recent/high-risk changes only, scoped at
  user's request via AskUserQuestion, not a full 250-post sweep):** ran 5 parallel
  research forks covering TDS/TCS rates, Income Tax Act 2025 renumbering, GST rules
  (incl. GST 2.0 rate rationalization), company law/MSME/startup rules, and NRI/FEMA
  rules. Most clusters came back clean (TDS/TCS, GST, NRI/FEMA, most company-law facts
  all still accurate). Two real, material findings, both fixed same day:
  1. **Buyback of shares taxation reversed again, effective April 1, 2026.** The
     `buyback-of-shares-tax-implications-for-companies-and-shareholders` post described
     the Oct 1, 2024 "deemed dividend" regime (full proceeds taxed as dividend at
     shareholder's slab rate) as current. Budget 2026-27 reverted this to a capital-gains
     framework under **Section 69** of the Income Tax Act 2025: only the gain (buyback
     price minus cost of acquisition) is taxed, 12.5% LTCG (with the usual ₹1.25 lakh
     exemption) / 20% STCG for listed shares, plus a new **Special Additional Tax on
     promoters** (~22% corporate / ~30% non-corporate — exact triggering
     threshold/condition NOT independently confirmed, flagged qualitatively in the post
     rather than guessed). Section 115QA stays repealed, not reinstated. TDS mechanism
     for the new regime also NOT confirmed — post flags this rather than assuming
     Section 194 still applies. This is the **third** buyback-tax regime change in ~18
     months (pre-Oct 2024 → Oct 2024 → Apr 2026) — treat as a fast-moving area, re-verify
     before reusing any figure from this post in new content.
  2. **Forms 3CA/3CB/3CD consolidated into a single Form 26** — added to the Income Tax
     Act 2025 mapping table above; 6 posts referencing the old three-form structure were
     updated (`tax-audit-report-forms-3ca-3cb-3cd-explained` rewritten most
     substantially, since it was the dedicated post and had called this "proposed" when
     it's now confirmed live).
  Two lower-priority completeness gaps noted but NOT acted on (informational only, not
  errors): (a) the Section 194-IA ₹50 lakh threshold now aggregates across joint
  buyers/sellers since Finance (No.2) Act 2024 — not mentioned in
  `26qb-vs-27q-nri-property-tds`; (b) DPIIT startup turnover cap doubled to ₹200 crore
  (Notification G.S.R. 108(E), Feb 4, 2026) plus a new Deep Tech category — the
  `startup-india-registration-vs-dpiit-recognition...` post speaks generically without
  a number, so isn't wrong, just could cite the current figure.
  **Process note for future fact-check passes:** parallel research forks (not fresh
  subagents) worked well here since they inherit full site context and can both
  websearch and grep the codebase directly, avoiding a re-briefing step. Scoping to
  "recent/high-risk changes" via AskUserQuestion rather than attempting a full sweep in
  one pass kept this tractable — a full 250+ post sweep would need to be its own
  multi-session effort if ever requested.

## Key Decisions Made
- No dark/light toggle. The site is a light theme with a dark navy hero and footer (not a dark theme; corrected Sep 26, 2026)
- Consultations stay FREE. Do not add paid booking or payment flows (user decision, Sep 26, 2026)
- Homepage "Global Reach" pins (Mumbai/Bangalore/Delhi) and the Bangalore/Mumbai startup copy are KEPT on purpose: the user confirmed most clients are in those cities (Sep 26, 2026). Do not remove them as unverified
- No em dashes anywhere on the site — use hyphens
- Services dropdown in navbar links to individual service pages
- Blog [slug] page uses `dangerouslySetInnerHTML` for HTML content (for proper h2/ul rendering)
- Grid columns: `minmax(min(100%, 340px), 1fr)` pattern throughout

## Front-End Audit (Sep 26, 2026 - actioned)
Full audit done in a real browser (375px checks via same-origin iframe, production build) plus
code review. The Sep 25 Opus review's leads were verified and fixed. What changed:
- **Lead capture:** `ContactClickTracker.tsx` (site-wide `contact_click` GA4 event for call /
  WhatsApp / email / booking links, `TrackedLink` marks its own with `data-tracked` to avoid
  double counting); `tools/ResultCTA.tsx` under the NRI TDS, capital gains and SIP results;
  `PostCTA` now used by all blog posts (213 hand-copied CTA blocks converted, 6 posts that had
  none got one). Homepage hero rewritten with NRI / Founder / Business path cards.
  Contact FORM intentionally not built (user skipped it). Mark `contact_click` as a GA4 key event.
- **Cookie banner** no longer covers the mobile action bar (`.cookie-banner` sits above it).
  GA only loads after consent, so declined visitors are not tracked.
- **Google reviews removed completely** (user decision): deleted `GoogleReviews.tsx`, the
  homepage block, and the `aggregateRating` schema in layout.tsx / ca-in-nashik / ca-in-sillod
  (schema reviews with no visible reviews on the page is a Google policy risk). Do not re-add
  the `reviewCount` sync task; it no longer exists.
- **Accessibility:** tool labels linked (`htmlFor`/`id`), `role="status"` on tool results,
  skip-to-content link, mobile menu (Escape, focus trap, focus-in, aria-expanded/controls,
  scrolls when Services accordion is open), visible `:focus-visible` on inputs, contrast fixes
  (`--text-muted` #5b6472, `--footer-text-dim` #7c8ba1, both >= 4.5:1), footer tap targets.
- **Blog index (`BlogGrid.tsx`):** search box, topic filter as `aria-pressed` buttons (was a
  tablist with no panels), state mirrored to `?topic=&q=`, cards use `content-visibility`, link
  text is "Read guide: <title>" for screen readers. All 222 cards are still in the server HTML
  on purpose (internal links stay crawlable), so there is no pagination.
- **Blog dates:** `scripts/sync-blog-dates.py` rewrites each post's visible Published/Updated
  text from its `datePublished`/`dateModified`. It found 36 posts whose visible date had drifted
  from the schema. Run it (or `--check`) after adding or editing posts.
- **Cleanup:** broken internal links, em dashes, `--text-heading` and `--white` (was used but
  undefined), hardcoded hex replaced by tokens, `BOOKING_LINK` constant used in Navbar/page,
  footer "About Us" -> /about, team photos recompressed (360KB -> 115KB), footer logo `sizes`.
- **Known/deferred:** ~225 blog `page.tsx` files are still individual files with inline styles
  (CTA and FAQ are shared components now, the article body markup is not); `TLDRBox.tsx` still
  unused. CSP (`next.config.js`) blocks external form endpoints and payment scripts, so update
  it before adding any form/embed. Real-phone rendering has not been tested.

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
5. (Removed) aggregateRating/reviewCount schema no longer exists; nothing to keep in sync.

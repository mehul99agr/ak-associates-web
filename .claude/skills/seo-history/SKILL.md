---
name: seo-history
description: SEO status, dated Google Search Console findings and work logs, FEMA/NRI/topic-cluster notes, past site audits, open SEO to-dos and the 100 clicks/day plan for agrawalkhandelwal.com. Use before any SEO, Search Console, ranking or blog-planning work on this site.
---

# SEO history for agrawalkhandelwal.com

Moved verbatim from CLAUDE.md on Nov 21, 2026 so it loads only when needed.

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

**Search Console findings (Oct 5, 2026 - 28-day window, Sep 6-Oct 3, pulled live via
Claude in Chrome; "28 days" chip confirmed in a screenshot):**
- User asked why clicks/impressions dropped. Totals: 607 clicks, 56.9k impressions, 1.1%
  CTR, avg. position 7 - vs 137 clicks / 9.09k impressions / 1.5% / 11.6 in the previous
  28 days. The 28-day picture is a large gain, not a decline; the "drop" is the tail of a
  spike.
- **Daily pattern:** Sep 6-19 baseline 280-1,170 impr/day and 1-18 clicks/day. Sep 20-30
  spike of 3,000-4,560 impr/day and 19-59 clicks/day (peak Sep 21: 59 clicks / 4,560
  impr). Oct 1-3 fell to 1,700-2,730 impr/day and 21-25 clicks/day - still roughly 4x the
  pre-spike baseline.
- **Main cause: the Sep 30 tax-audit / trust-audit deadline passing.** Last 7 days vs
  previous 7 (208 vs 298 clicks, 21.2k vs 27.8k impr), biggest losers:
  `form-10b-10bb-audit-report-for-trusts-applicability-and-due-date` (2,223 -> 925 impr,
  23 -> 6 clicks) and `tax-audit-due-date-penalty-for-delay` (1,584 -> 1,074 impr,
  21 -> 5 clicks). Falling queries: "trust audit due date", "form 10b and 10bb
  applicability", "penalty for late filing of tax audit report". Seasonal demand - expect
  it back before the next deadline.
- **Several newer posts lost almost all impressions week-on-week:**
  `related-party-loans-and-section-185-186-compliance` (252 -> 1), `faceless-assessment-
  scheme-how-it-works` (122 -> 1), `stay-of-demand-...` (131 -> 10), `board-meeting-and-
  agm-compliance-calendar-...` (132 -> 11). The related-party loans post is live, 200,
  `index, follow`, correct canonical. Likely Google still settling rankings for recently
  published posts - an inference, not confirmed. Recheck these four specifically.
- Smaller 20-40% declines spread across many other posts (secretarial audit, 44AA books
  of accounts, FSSAI, POSH, statutory audit, 194C).
- **Ruled out:** site up (homepage, sitemap, robots.txt, top posts all 200; www 308 to
  non-www); the three losing posts checked are indexable with correct canonicals; the
  Sep 26-29 deploys do not line up with the drop (Sep 28-29 were among the strongest days
  at 43 and 49 clicks). NOT rechecked this session: Manual Actions and Page Indexing.
- **Next check: around Oct 12-15.** If daily impressions hold at ~1,500-2,500, that is
  the new baseline. Supersedes the Sep 14-21 "10-13k impressions / 28 days" plateau as
  the reference level.
- Tooling note: in compare mode the GSC results table reports as not visible to a
  `offsetParent` check and the Days tab does not render a table - load the report with
  `breakdown=date` and no `compare_date` for daily rows, and read compare tables by
  picking the largest `<table>` via `javascript_tool` rather than filtering on visibility.

**Search Console findings (Oct 9, 2026 - 28-day window, Sep 9-Oct 6, "28 days" chip
confirmed in a screenshot):**
- Totals: 690 clicks, 64.1k impressions, 1.1% CTR, avg. position 7.1. Daily run rate
  recovered to ~3,200 impr / 37-41 clicks on Oct 5-6 after the Oct 2-4 post-deadline dip.
- **Blog takes 643 of 690 clicks; all 21 non-blog pages together got 47 clicks / 2,432
  impr.** Service pages are near-invisible (/transfer-pricing 1 click, /offshore-accounting
  3, /startups 0 at pos 30, /nri-tax-advisory 0, /company-incorporation 0).
- Only 47 of 690 clicks trace to a visible query; no query brings more than 3 clicks.
  Top-3 rankings convert badly (196 queries, 1,748 impr, 13 clicks) - definitional queries
  answered on the results page.
- Local: "ca in nashik" 107 impr / pos 11.6 / 0 clicks; all Nashik queries ~360 impr, 3
  clicks. Aurangabad queries pos 27-29.
- **`tds-on-nri-property-sale-india` lost its head query.** Queries containing "sale of
  property by nri" ranked pos 1-5 with 5-27 impr/day until Sep 18, then fell to pos 50-60
  with 0-4 impr/day from Sep 19-20 - before the Sep 25 content correction, so that edit
  did not cause it. Page is 200, indexable, canonical correct; no other page of ours took
  the query. Live SERP (Oct 9) is taxguru, incometaxindia.gov.in, ICICI, tdsman, caclubindia
  etc. Reads as an authority/freshness loss, not an on-page fault (inference).
- **GA4 is effectively blind:** 7 users / 17 page_views / 0 `contact_click` in 28 days vs
  690 GSC clicks, because GA loads only after an explicit cookie "granted". The user says
  the site has produced 10+ client calls, so enquiries exist - GA4 just cannot see them.
  Do not use GA4 numbers to judge the funnel until this is changed (Consent Mode v2 with
  denied-by-default is the option; user decision pending).
- **Content direction (Oct 9):** stop adding generic compliance explainers - 145 of 286
  URLs with impressions got zero clicks and the audience is largely accountants/students.
  The bottleneck for service and local pages is backlinks + Google Business Profile
  reviews, not more posts.
- Changes made (uncommitted at time of writing): query-matched titles/descriptions on
  `tax-audit-report-forms-3ca-3cb-3cd-explained`, `form-24q-vs-form-26q-...`,
  `professional-tax-registration-...-maharashtra`, and `tds-on-nri-property-sale-india`
  (now `absolute` title "TDS Rate on Sale of Property by NRI (FY 2026-27): Buyer Guide" -
  the "leave top earners untouched" rule no longer applies to this post); WhatsApp
  enquiry button replaced the generic /services button on the XBRL, CSR fund utilisation,
  Form 10B/10BB and 43B(h) posts. Recheck these in GSC around Oct 23-30.
- **User's stated target (Oct 9, 2026): ~100 clicks/day and ~5,000 impressions/day**
  (28-day average then: 25 clicks, 2,290 impressions). For that goal, deadline-driven and
  rule-change posts ARE wanted (this narrows the "stop generic explainers" note above:
  no more definitional explainers, yes to deadline and notification coverage, published
  2-3 weeks before a due date or within days of a notification). New topics still need
  the user's approval first.
- Later the same day (all pushed): `tds-on-nri-property-sale-india` got a full section on
  the Oct 1, 2026 Form 141 Schedule E route and re-indexing was requested in GSC; titles
  on 20 more high-impression posts were matched to their GSC queries (commit 0e74335);
  `tax-audit-due-date-penalty-for-delay` now covers the CBDT press release of Sep 28, 2026
  extending the AY 2026-27 tax audit report to Oct 21, 2026 and the audit-case return to
  Nov 21, 2026 (Form 3CEB cases excluded; trust Form 10B/10BB coverage NOT confirmed).
- GSC Links report (Oct 9): 8 external links from 5 sites (crunchbase 3, nashik100 2,
  bebee 1, caclubindia 1, magicpin 1). Google does count one caclubindia.com link, despite
  the Sep 21 browser check finding no live `<a>` there.
- User has a CAclubindia Pro membership and an X account they want used for traffic. X
  posts must be shown to the user for approval before posting.
- **Deadline/rule-change batch (Oct 9, 2026, user-approved list of 8):** 3 new posts live
  (225 posts total): `57th-gst-council-meeting-key-recommendations` (recommendations of
  Oct 8, 2026, NOT yet law - revisit when notified; single-source items such as Section
  17(5) relaxations and the EV/delivery 5% options were left out),
  `itr-due-date-audit-cases-ay-2026-27-extended`, `last-date-to-claim-itc-fy-2025-26`.
  Refreshed with FY 2025-26 dates: `form-3ceb-transfer-pricing-audit-report` (Oct 31 / Nov
  30, 2026, not extended) and `annual-roc-filing-aoc4-mgt7-dir3-kyc` (Oct 30 / Nov 29, 2026
  for a Sep 30 AGM; no MCA extension found as of Oct 9). **Still owed from the approved
  list:** refresh `gstr-9-gstr-9c-annual-return-guide` (mid-Nov), the advance tax post for
  the Dec 15 instalment (late Nov), and `belated-revised-updated-returns-itr-u-139-8a` for
  the Dec 31 deadline (early Dec) - verify each date against the official source first.
  Generator used: a Python template script (title/desc/TL;DR/body/FAQ fields -> page.tsx,
  then prepends to `posts.ts` and appends to `sitemap.ts`); new posts go at the TOP of the
  `posts` array, which the blog index renders in array order.
- X: one post published from @CAMehulAg on Oct 9 (NRI property TAN change). The account
  has 4 followers, an outdated bio with no website link, and X showed a "graduated access"
  notice (limited discoverability until the account shows normal human activity). Only
  NRI-related posts are approved for X.
- **Where the Oct 9 session stopped (resume here):**
  - X: six link-free NRI posts ending "Questions? DM me." are scheduled via X's own
    scheduler for Oct 10-15, 2026 at 7:30 PM IST. The user still needs to update the X bio
    (three drafts were given), set location to Nashik, add the website, and open DMs.
  - Backlinks: the user asked for "5 backlinks a day for a month" in the style of a
    YouTube video on automated link building. Declined as bulk directory spam; also blocked
    in practice because Claude does not create accounts or solve CAPTCHAs. Agreed
    alternative, NOT started: (1) add the website link to existing profiles the user is
    logged into (Sulekha, CAclubindia Pro profile, Justdial, IndiaMart), with approval per
    profile; (2) research 30-40 vetted listings and verify each gives a real `<a href>`;
    (3) a paste-ready firm profile pack; (4) fill in each listing after the user registers.
    Waiting on the user to say which profiles they are logged into.
  - Offered, not yet answered: re-indexing requests for the three new Oct 9 posts.
  - Recheck in GSC around Oct 23-30: the 24 retitled posts, the NRI TDS head query, and
    progress toward 100 clicks / 5,000 impressions a day.
- Tooling note: in GSC, clicking the inspect box by coordinate is unreliable; focus it
  with JS (`input[role=combobox]`), then type the URL and press Return.
- Tooling note: the GSC results table holds up to 1,000 rows in the DOM regardless of the
  rows-per-page setting, and `javascript_tool` output is cut at ~1,000 characters - do the
  aggregation in page JS and return short summaries. `start_date`/`end_date` (YYYYMMDD),
  `page=*text` and `query=*text` URL params work for custom ranges and filters.

**Search Console findings (Oct 26, 2026 - "why is it falling", last 7 days Oct 19-25 vs
Oct 12-18, pulled live):**
- Clicks 414 -> 274 (-34%) but impressions 27.4k -> 33.6k (+23%). Not a site-wide fall.
- One post explains the whole click loss: `last-date-to-claim-itc-fy-2025-26` 205 -> 56
  clicks (all other pages net +9). Daily: 24-40 clicks/day Oct 12-17 at pos ~1.9, then 5-8/day
  from Oct 18 at pos ~3. Head queries ("last date to claim itc for fy 2025-26") slipped pos
  1.2-1.8 -> 3.3-3.8. Search demand also peaked before the Oct 20 GSTR-3B date (inference).
  The real deadline (Nov 30, 2026) is still ahead, so expect demand back in mid/late Nov.
- Impressions rose from the Oct 21 tax audit report deadline (`tax-audit-due-date-penalty-
  for-delay` 2.0k -> 4.7k impr, `books-of-accounts-section-44aa`, 3CA/3CB/3CD post). Those
  convert at <1% CTR, which pulled site CTR down. Peak day Oct 21: 7,374 impr / 58 clicks.
- Oct 24-25 low days = weekend + post-deadline + Oct 25 data still incomplete.
- Recheck ~Oct 30 with complete data; check the live SERP for the ITC head query.

**NRI + US enquiry push (Oct 26, 2026):** GSC 28 days: NRI posts ~109 clicks / 7.8k impr
(mostly the two property-TDS posts); US pages ~11 clicks / 230 impr (near-invisible).
- **US filing model (user-confirmed):** our team prepares US returns; a US partner reviews
  and files them. Do not call the partner a CPA/EA unless the user confirms which.
- **Published fees (user-given):** NRI property sale advisory ₹25,000-50,000 per property;
  NRI ITR from ₹10,000; US LLC annual $850; US C-Corp annual $1,250. Single source:
  `src/lib/servicePricing.ts` (the blog `ServiceOffer.tsx` text repeats them - keep in step).
  Package inclusion bullets were drafted by Claude and need the user's confirmation.
- Shipped locally: packages + fee FAQ on `/nri-tax-advisory` and `/us-cross-border` (US page
  refocused on C-Corp: Form 1120, Delaware franchise tax, Indian subsidiary);
  `<ServiceOffer variant=...>` under the TL;DR of 32 NRI/US posts.
- Proposed, awaiting topic approval: Form 1120+5472 for Indian-owned C-Corp; Delaware
  franchise tax (APV method); India-to-US flip; Indian subsidiary of a US C-Corp. Also
  suggested US CPA / incorporation-platform referral partnerships.

**Search Console findings (Nov 10, 2026 - 28 days Oct 12-Nov 8, "28 days" chip confirmed):**
- Totals: 1,220 clicks, 119k impressions, 1% CTR, avg. position 7.4 (~44 clicks / ~4,250
  impr per day vs the 100 / 5,000 target). Impressions near target; clicks are the gap.
- Week Nov 2-8 vs Oct 26-Nov 1 (page table sums): 234 vs 321 clicks, 25.1k vs 32.8k impr.
  Nov 7-8 fell to 10-12 clicks / ~2,000 impr at pos ~12. Losses are deadline posts after
  their dates passed (ITC cut-off post 57->36 clicks, tax audit due date 21->6, 3CEB, 24Q/26Q,
  ITR audit-case date); their positions held, so it reads as demand, not ranking.
- `tds-on-nri-property-sale-india` has not recovered: 184 -> 60 impr/week, 0 clicks.
  Non-blog pages together: 10 clicks / 640 impr in the week; /nri-tax-advisory 2 impr.
- **Not deployed:** last commit is Oct 11. The Oct 15 paid-consult change and the Oct 26
  NRI/US packages are only in the working tree (144 files); live /consult is 404 and live
  pages still carry tel:/wa.me links.

**Nov 10, 2026 work (committed + pushed):**
- Deployed the Oct 15 paid-consult change and the Oct 26 NRI/US packages (had sat uncommitted
  since Oct 11). `/consult` errors now point the visitor to the partner's email.
- MCA General Circular 05/2026 (Oct 24, 2026): FY 2025-26 AOC-4 without additional fees to
  Dec 31, 2026, MGT-7/7A to Jan 31, 2027 (fee relaxation, AGM date unchanged). Added to
  `dueDates.ts` SPECIFIC and the ROC post (TL;DR, FAQ, title).
- Revised return for AY 2026-27 runs to Mar 31, 2027 (Finance Act 2026, s.263(5) of the 2025
  Act, fee after 9 months - fee amount NOT confirmed); belated return stays Dec 31, 2026.
  Several secondary sources agree; resolves the Oct 11 open question. Belated post fixed (it
  wrongly said "before the end of the assessment year").
- GSTR-9/9C (Dec 31, 2026, no extension as of Nov 10) and advance tax (Dec 15) posts refreshed.
- New `blog/_components/DeadlineNotice.tsx`: "Next deadline" box under the TL;DR of the 10 posts
  that `dueDates.ts` points to, shown only when the date is within 120 days. Those posts set
  `export const revalidate = 3600`. A new deadline post needs the component + revalidate.
- (Superseded the same day) The Razorpay env vars were never set; the site's Razorpay flow was then replaced by Zoho Bookings, so no Vercel env vars are needed for `/consult`.

**SEO/AEO/GEO audit (Nov 10, 2026) and fixes shipped the same day:**
- Live crawl of all 250 sitemap URLs: all 200, canonicals correct, one H1 each, og:image everywhere, no
  duplicate titles/descriptions, no tel:/wa.me. GSC: 246 indexed, 10 not indexed (mostly non-pages); Core
  Web Vitals 97/97 good on mobile and desktop. Agent-skill digests valid. Bing indexes the key pages.
- Audit tooling note: titles must be measured after `html.unescape` - `&amp;` inflated 30 "long titles"
  to an actual 13 (12 non-blog brand-tail cases, accepted, plus 1 blog post).
- Fixed: org `sameAs` + Crunchbase/TheOrg/Nashik100; Mehul Person `sameAs` + x.com/CAMehulAg; `WebSite`
  JSON-LD in layout; IndexNow key `public/4bb375fd3e44d4e404a86a200473c38f.txt` + `scripts/indexnow.py`
  (run after each deploy, optionally with changed paths); TL;DR added to 16 posts that lacked one;
  `understanding-new-tax-regime-2025-26` refreshed for FY 2026-27 (slabs unchanged by Budget 2026);
  `new-income-tax-act-rules-2025` rewritten (it contained unverified claims: "regime convergence",
  AI assessments, valuation rules) around the Act in force Apr 1, 2026, Rules 2026 notified Mar 20, 2026,
  tax year, and verified section/form mappings; DPIIT post had a wrong Rs 100 crore cap (Rs 200 crore since
  G.S.R. 108(E), Feb 4, 2026) and wrong angel-tax law (Finance (No. 2) Act 2024, w.e.f. Apr 1, 2024);
  `**` markdown leaking into the UAE CT post; tax calculator gained FY 2026-27; FAQs + FAQPage on
  /tax-calculator and /tools/incorporation-wizard; CSR post linked from 3 trust/NGO posts (was "crawled -
  not indexed"); 3 titles + /ca-in-sillod description.
- Not changed: `tds-on-nri-property-sale-india` content is already complete (rate table, worked example,
  Schedule E, Form 128, refunds); its loss reads as authority, so it needs outside links, not rewrites.
  The 7 US-founder posts (last updated May 2025-Feb 2026) are due a refresh around January 2027.
- User-side: GBP reviews, real `<a href>` links from CAclubindia/TaxGuru and directory profiles, WhatsApp
  number in Zoho's Booked email, Zoho plan before trial ends.
- **Consent Mode v2 ON (user approved Nov 10, 2026):** `GoogleAnalytics.tsx` now loads gtag for every
  visitor with `analytics_storage` denied by default (granted on load if localStorage says 'granted'), all
  ad signals always denied, `ads_data_redaction` on; Accept/Decline sends `gtag('consent','update')`.
  Privacy policy updated to match. GA4 numbers from Nov 10 onward include modelled/cookieless data, so
  they are NOT comparable with the pre-Nov 10 consent-gated figures (7 users / 28 days).

**GEO audit + fixes (Nov 10, 2026, commits b765eec, 6149c02, e6de6cb):**
- On-site GEO is strong (AI bots allowed, llms files current, Person/Org/Article/FAQ schema, TL;DR + FAQ on
  all 225 posts). Off-site is the gap: a web search for the exact firm name or "CA Mehul Agrawal Nashik"
  returned other Agrawal/Khandelwal firms, not us; "best CA in Nashik for NRI tax" answers cite
  threebestrated.in, busy.in, kmgcollp.com and a Jurishour listicle; no Wikidata item. Bing/Perplexity/
  ChatGPT were not tested live (Chrome disconnected). User-side: get listed on those directories, GBP
  reviews, identical "CA Mehul Agrawal, Partner, Agrawal Khandelwal & Associates LLP, Nashik" bio everywhere,
  Wikidata item (Claude can draft the fields).
- **All "WhatsApp" CTAs removed** (they led to the paid /consult page): secondary buttons are now "Email us"
  (`EMAIL_LINK` in constants.ts; `WHATSAPP_LINK`/`WHATSAPP_ARTICLE_LINK` no longer exist), the desktop floating
  button is a booking button (`.book-fab`), the mobile bar is Email + Book. Do not reintroduce WhatsApp CTAs.
- UAE CT post refreshed and re-bylined to Mehul. **Small Business Relief was extended (Aug 2026) to tax periods
  ending on or before Dec 31, 2029.** Post also says UAE CT paid by a UAE subsidiary is NOT automatically
  creditable to the Indian parent (India-UAE DTAA underlying credit unconfirmed).
- 7 US posts refreshed: FBAR/8938 apply to US persons only (a founder living in India files neither for
  personal accounts; the US LLC can owe FBAR); Form 5472 + pro forma 1120 due Apr 15 / Oct 15 with 7004;
  BOI exemption for US-formed entities (Mar 2025); foreign R&E still 15-year amortisation under s.174 after
  OBBBA (domestic expensing via s.174A); India-US DTAA services PE related-enterprise limb; FTC Form 67 ->
  reported Form 44 from tax year 2026-27 (single-source, flagged as "confirm at filing"). Delaware LLC tax
  stated as USD 300 "in recent years" because some sources report an increase for 2026.
- 21 top posts got an "Official sources:" line naming the notification/circular/section/rule with links to
  official sites. incometaxindia.gov.in and mca.gov.in deep pages return 403 to scripts and failed in Chrome,
  so those link to the site home pages; deep links were used only where they returned 200.

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

## Front-End Audit (Sep 26, 2026 - actioned)
Full audit done in a real browser (375px checks via same-origin iframe, production build) plus
code review. The Sep 25 Opus review's leads were verified and fixed. What changed:
- **Lead capture:** `ContactClickTracker.tsx` (site-wide `contact_click` GA4 event for call /
  WhatsApp / email / booking links, `TrackedLink` marks its own with `data-tracked` to avoid
  double counting); `tools/ResultCTA.tsx` under the NRI TDS, capital gains and SIP results;
  `PostCTA` now used by all blog posts (213 hand-copied CTA blocks converted, 6 posts that had
  none got one). Homepage hero rewritten with NRI / Founder / Business path cards.
  Contact FORM intentionally not built (user skipped it) - superseded Nov 21, 2026: built (Web3Forms). Mark `contact_click` as a GA4 key event.
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

## SEO Audit Fixes (Oct 5, 2026 - not yet committed/deployed at time of writing)
Audit run with the `claude-seo` plugin's method (its own scripts need `/seo setup`, which only
the user can trigger, so the crawl was done with a custom script; no Lighthouse/CWV data).
All 245 pages were technically clean. Fixed:
- **Share image:** a page-level `openGraph`/`twitter` block replaces the root one wholesale, so
  240 of 245 pages had no `og:image`. Every page with its own block now sets
  `images: OG_IMAGES` (from `@/lib/constants`). **New pages must do the same.**
- **Blog titles (resolves the pending title decision):** blog posts now use
  `title: { absolute: '...' }` with no firm-name suffix and stay <=65 chars (the 38-char brand
  suffix was pushing them to 90-100 and truncating in Google). 21 were also reworded to fit.
  The Brand Name Rule still applies to every non-blog page. `tds-on-nri-property-sale-india`
  and `tan-application-guide-buyer-nri-property` were deliberately left untouched (top earners).
  Non-blog pages at 66-74 chars were left as is (only the brand tail truncates).
- **Posts list moved** from `blog/page.tsx` to `src/app/blog/posts.ts`. Wire new posts there
  (older notes in this file that say "wire into blog/page.tsx" mean this file now).
- **`blog/_components/PostFooterLinks.tsx`** (`<PostFooterLinks slug="..." />` before the CTA
  in all 222 posts): 3 related guides from the same topic group (ring order, so every post
  gets the same number of inbound links), a link to the matching service page plus
  `/ca-in-nashik` and `/ca-in-sillod`, and the official portal(s) for the topic. Before this,
  33 posts were linked only from the blog index and the two local pages had 4 and 2 in-content
  links. New posts need this line and a category that exists in the component's `GROUPS`.
  The official-source links are topic-level portals, not per-post citations of the specific
  notification - that would be a separate content pass.
- **Author signals:** bylines link to `/about#mehul-agrawal`; Article schema has `image`;
  `/about` gained a firm section (offices, focus areas, service links) using only facts already
  on the site. Two old posts still carry team bylines ("Advisory Team", "International Tax
  Desk") - left for the user to decide.
- **Small items:** 16 descriptions trimmed to <=160; `src/app/manifest.ts` added.
- After content changes: build, `python scripts/generate-agent-files.py`, build again.

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
6. **Open items from the Sep 29, 2026 session (resume here):**
   - Meta descriptions: DONE (commit fe3b891) - all 173 over-length descriptions rewritten to
     <=160 chars. Keep new ones <=160 (audit script flags >165).
   - Titles: DONE Oct 5, 2026 for blog posts (see SEO Audit Fixes section above).
   - BuiltWith AI Index: recheck the score after BuiltWith rescans (agent-readiness files
     shipped Sep 29, commit fd92ca2). Expect Agent Readiness/Maturity > 0, Visibility ~35.
   - Optional: full fact-check of all 222 posts was NOT done - only the posts flagged by the
     Sep 29 audit plus a site-wide grep for the same stale facts.

## 100 Clicks/Day Plan (approved Oct 11, 2026)
Plan file: `C:\Users\MEHUL\.claude\plans\wise-baking-widget.md`. Levers, in order: deadline
content, a permanent due-date hub, CTR on existing impressions, internal links to service pages.
- **Shipped Oct 11:** `/tools/compliance-calendar` (Oct 2026-Mar 2027; extend `RANGE_END` in
  the page when the next half-year is verified). All dates live in **`src/lib/dueDates.ts`**
  (`MONTHLY`, `ANNUAL`, and year-specific `SPECIFIC` entries; a `SPECIFIC` entry with the same
  `id` replaces the annual date it was extended from). The blog index strip and the homepage
  "Upcoming Compliance Deadlines" strip read the same file, so **an extension is one edit
  there** plus the post itself. The old blog-index generator was showing unextended dates.
  `PostFooterLinks` now links the calendar from every post and sends Income Tax / GST / Tax
  Audit posts to `/services#taxation` / `#audit`. ca-in-nashik Open Graph text no longer says
  "Best CA" / "Top-rated".
- **Correction to the plan:** `ca-in-sillod` already covers Aurangabad / Chhatrapati
  Sambhajinagar (FAQs, body, schema `areaServed`); the plan's claim that it did not came from
  a failed grep. Nothing to add there; pos 27-29 for those queries is an authority problem.
- **Not changed, user to decide:** ca-in-nashik visible H2 "Why ... is the Best CA Firm in
  Nashik" (unsupported superlative; ICAI advertising guidelines are a consideration).
- **(Resolved Nov 10, see above) Check before the Dec refresh of `belated-revised-updated-returns-itr-u-139-8a`:** several
  secondary sources say Budget 2026 moved the *revised* return deadline for AY 2026-27 to
  March 31, 2027 (with a fee after Dec 31), while the belated return stays Dec 31, 2026. Not
  verified against the Act; the calendar lists only the belated-return date for that reason.
- **Still to do:** Oct 19-20 and Nov 18-19 extension rechecks; GSC pull + second title round
  (Oct 19-25); GSTR-9, advance tax, FAST-DS refreshes (Nov); belated return refresh (early
  Dec); "upcoming deadline" callouts on the top 10 posts; Consent Mode v2 (done Nov 10, 2026).


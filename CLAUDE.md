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

## CSS Rules
- Use `minmax(min(100%, Xpx), 1fr)` for grids — never `minmax(400px, 1fr)` or larger
- All colors via CSS variables from globals.css
- Logo is white-background PNG — wrapped in `.logo-wrapper` badge in navbar
- Blog post HTML content uses `.blog-content` class for h2/ul/ol/p styling

## SEO History, Search Console Logs and Plans
Moved to the `seo-history` skill (`.claude/skills/seo-history/SKILL.md`): SEO done/not-done lists,
every dated Search Console finding and work log, the FEMA/NRI/topic-cluster notes, the Sep-Oct 2026
audits, "What Needs to Happen Next" and the 100 Clicks/Day plan. Load it before any SEO, GSC or
blog-planning work.

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

**Batches shipped so far:** see `src/app/blog/posts.ts` and `git log` for what is published.

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

**Done (Sep 29, 2026 - agent readiness, for the BuiltWith AI Index / Cloudflare Agent Readiness checks):**
- `robots.ts` replaced by static `public/robots.txt` (Next's robots helper can't emit custom
  lines): named AI bot groups + `Content-Signal: search=yes, ai-input=yes, ai-train=yes`.
  ai-train=yes keeps the previous allow-all behaviour; flip to `no` if the user decides to opt
  out of training.
- `public/llms-full.txt` (full Markdown content of every sitemap page) and
  `public/.well-known/agent-skills/` (3 SKILL.md files + `index.json` with sha256 digests),
  both generated by `scripts/generate-agent-files.py` from the build output. Re-run it after
  adding posts or editing a SKILL.md (a stale digest makes the skills index invalid), then
  build again and commit.
- `next.config.js`: `Link` header on `/` (sitemap, llms.txt, agent-skills), CORS +
  content types for llms files and agent-skills.
- BuiltWith's AI Visibility score rewards visible AI tech (chatbots etc.) - deliberately not
  pursued (tax-advice chatbot risk). API catalog / OAuth / MCP server card: nothing to publish.

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

- **Sep 29, 2026 - Whole-site recheck.** Live: all 245 sitemap URLs 200, www/http 308 to
  canonical, no broken internal links, canonicals/H1s/JSON-LD valid, blog dates in sync.
  Fixed: (1) FAQPage schema out of sync with visible FAQ on `fema-compliance-foreign-
  investment-startups` and `company-incorporation-india-guide` (the latter had no visible FAQ
  at all) - both now render the visible FAQ from the schema array; (2) stale facts in those
  posts: Form ARF (receipt reporting) was discontinued Sep 1, 2018 - now 60-day allotment
  window + FC-GPR; late FC-GPR is regularised via the RBI Late Submission Fee (Rs 7,500 +
  0.025% x amount x years, A.P. (DIR) Circular 16 of Sep 30, 2022), not "Rs 5,000-300%
  compounding"; FEMA convertible notes need Rs 25 lakh per single tranche (not USD 2 lakh),
  10-year conversion; Press Note 3 covers all land-border countries; resident director is
  182 days in the *financial year* (s.149(3)), not "previous calendar year" (also fixed in
  `foreign-subsidiary-registration-india-fdi`); MCA SPICe+ fee is nil up to Rs 15 lakh
  authorised capital (removed the invented "Rs 8,000-15,000 govt fees" / "Rs 15,000-40,000
  all-in" figures); (3) **Section 115BAB (15% new manufacturing) closed to new entrants** -
  manufacturing had to commence by Mar 31, 2024 and was not extended; corrected
  `corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg`; (4) em dashes on
  privacy-policy / terms-of-use. Not changed (flagged to user): ~176 titles >65 chars and 67
  titles using `absolute` without the brand (deliberate from the Aug audit), ~173 meta
  descriptions >165 chars.

- **Transfer pricing (fixed Nov 21, 2026):** Form 3CEB (s.92E) is required for ANY international transaction, whatever
  its value; Rs 1 crore is only the Rule 10D documentation (Local File) threshold. Penalties: s.271BA Rs 1 lakh for not
  furnishing 3CEB; s.271AA 2% for missing documentation; s.271G 2% for not producing documents to the TPO; s.270A 50%
  (under-reporting) / 200% (misreporting). Never cite "100-300% concealment" (old s.271(1)(c)). CbCR threshold is
  Rs 6,400 crore (raised from 5,500 crore in 2021). Master File Part B: Rs 500 crore group revenue plus Rs 50 crore
  international transactions or Rs 10 crore intangibles. Form 3CEB is due October 31.

## Key Decisions Made
- No dark/light toggle. The site is a light theme with a dark navy hero and footer (not a dark theme; corrected Sep 26, 2026)
- **Paid contact (user decision Oct 15, 2026; revised Nov 10, 2026; SUPERSEDED IN PART Nov 21, 2026 - see
  "Booking conversion push" below: a free screened 15-min call and an enquiry form now exist):** calls are paid, only email is
  free. Reason: random callers and calendar no-shows. **Current setup (Nov 10):** one product, a 30-minute
  call at Rs 999 (adjusted against fees), booked AND paid on Zoho Bookings (event "30-minute consultation
  call", Full Payment, payment mode Online, 15-min post-buffer, 4-hour minimum notice, 30-day window).
  Gateway fees are borne by the firm (user decision Nov 10, 2026): a flat Rs 25 surcharge was tried and
  reverted, and Razorpay's per-method Customer Fee Bearer needs support activation - user chose not to pursue it.
  **All calls go to CA Mehul Agrawal**, including visitors who chose Rupesh / Sillod (user: "I'll be the one
  supporting"). `/consult` links straight to the Zoho page (`CONSULT_BOOKING_URL` in `src/lib/consult.ts`);
  publishing that URL is fine because Zoho takes payment before confirming the slot. The site's own Razorpay
  checkout and `/api/consult/*` routes were removed (they would have charged twice), and Razorpay was taken
  out of the CSP. The WhatsApp number is never on the site: it belongs only in Zoho's "Booked" confirmation
  email, so it is never cheaper than a call. Still never put a phone number, `tel:` or `wa.me` link in the
  code, schema, meta descriptions or `public/` files. `BOOKING_LINK` / `WHATSAPP_LINK` point to `/consult`;
  the `?partner=` / `?for=whatsapp` query strings on old links are now ignored. Phone numbers were also
  removed from JSON-LD (`telephone`) on purpose; GBP keeps its own number.
- Homepage "Global Reach" pins (Mumbai/Bangalore/Delhi) and the Bangalore/Mumbai startup copy are KEPT on purpose: the user confirmed most clients are in those cities (Sep 26, 2026). Do not remove them as unverified
- No em dashes anywhere on the site — use hyphens
- Services dropdown in navbar links to individual service pages
- Blog [slug] page uses `dangerouslySetInnerHTML` for HTML content (for proper h2/ul rendering)
- Grid columns: `minmax(min(100%, 340px), 1fr)` pattern throughout

## International bookings push (Nov 18, 2026)
- **User goal:** ~200 clicks/day and 2 paid calls/day, mainly from 4 segments: Indian incorporation (LLP + Pvt Ltd only), NRI, US compliance, startup compliance in India. Use X + LinkedIn + CAclubindia/TaxGuru for audience.
- GSC 28 days (Oct 20-Nov 16): 1,070 clicks / 118k impr / 0.9% CTR / pos 8.2. Not falling (Nov 16 best day, 69 clicks). Non-India clicks ~3/day; US-segment pages 9 clicks. Judge progress by international bookings, not total clicks.
- **Call price Rs 999** (`src/lib/consult.ts`; briefly Rs 1,000 on Nov 18, back to Rs 999 on Nov 21 to match Zoho, user decision). Zoho charges INR via Razorpay, so the site shows "about US$11". `CONSULT_BOOKING_URL_INTL` (null) shows a "Pay in US$" button once a USD event (e.g. Zoho + Stripe) exists.
- Zoho findings (CORRECTED Nov 25: 3 paid bookings did occur Nov 17-20, see Growth goal section): zero real bookings to date (only a "Payment Failure" test); trial ends ~Nov 25; slots 11:00-15:15 IST only (US visitors cannot book). User to: change Zoho price/description, add 7:30-10:30 PM IST slots, confirm Razorpay international cards, upgrade plan.
- 10 buyer-intent posts published (dated Nov 18): pvt ltd registration cost, LLP registration, LLP Form 8/11, INC-20A, DPT-3, MSME-1, Delaware franchise tax APV, Form 5472 penalty, India-US flip, Indian subsidiary of US C-Corp. Drafted by Sonnet subagents; secondary-source figures are worded qualitatively in the posts.
- Drafts awaiting user approval (scratchpad, not in repo): 2-week X/LinkedIn calendar, 2 CAclubindia + 1 TaxGuru guest articles.
- Nov 18 (later): X - 24 single posts scheduled via X's scheduler (Nov 19-Dec 2, 7:30 PM + 9:00 PM IST); 4 threads cannot be scheduled on X web and must be posted manually. X lifted "graduated access" on this account. LinkedIn - 9 posts rewritten in plain practitioner voice (user asked: no AI-sounding language), all 9 scheduled at 8:30 AM IST (Nov 19-Dec 2). LinkedIn scheduling quirk: the time field needs clear + type "8:30 AM" twice before Confirm enables; never press Escape in the dialog (opens "save as draft").

## Booking conversion push (Nov 21, 2026 - user decisions)
- Why: bookings fell from ~5-7/month (free Google Calendar link, Aug-Oct) to ~0-1 after the paid-only Rs 1,000 call.
- **Free 15-min intro call + paid 30-min call side by side on `/consult`.** The free call is screened by the
  enquiry form (topic, country, timeline, message); only non-"just exploring" visitors see the booking link
  after submitting. `FREE_CALL_BOOKING_URL` in `src/lib/consult.ts` is a **Google Calendar appointment
  schedule** (`calendar.app.google/bpXoaqzsoohX36Zf6`, "15 min call with CA Mehul Agrawal"). Zoho's free plan
  allows only one event, so Zoho keeps the paid 30-min call and Google Calendar takes the free one (user, Nov 21).
  The old 30-min Google link (`Ln2Xg6PeDQ4dTrgT7`) is NOT used.
- **Enquiry form** `src/app/EnquiryForm.tsx` posts to Web3Forms (`api.web3forms.com`, added to CSP connect-src).
  Access key is in `consult.ts` (public by design; form "Website Enquiries" on the user's Web3Forms account,
  mehul@agrawalkhandelwal.com). `NEXT_PUBLIC_WEB3FORMS_KEY` overrides it. With no key the form falls back to a mailto. Fires GA4 `generate_lead`. Used on /consult, /contact and, via
  `ServiceEnquiry.tsx`, above the closing CTA of the 7 service pages.
- Service-page and blog `ServiceOffer` booking links now use `/consult?topic=<slug>` (slugs in `ENQUIRY_TOPICS`),
  which preselects the form topic. `?partner=` is still ignored.
- Paid card headline: "Fully adjusted against our fee if you engage us". Company-incorporation "Free Advisory
  Call" buttons now say "Book a Free 15-min Call" (it is genuinely free now).
- `/consult/booked` (noindex, not in sitemap) fires GA4 `booking_complete`, but it is UNUSED: Zoho's free plan has no
  redirect-after-booking setting and the user said to ignore it (Nov 21). Count paid bookings in Zoho's Appointments.
  `generate_lead` still needs starring as a GA4 key event once it appears under Admin > Events > Recent events.
- **Still unchanged on purpose (user, Nov 21):** no phone numbers, `tel:` or `wa.me` anywhere; no reviews or
  testimonials block. "What happens on the call" + partner photos added to /consult instead.

## AI-assistant booking (Nov 21, 2026 - user approved options 1 and 2; option 3, an own ChatGPT/Claude MCP app, NOT built)
- **WebMCP** (`src/app/WebMcpTools.tsx`, mounted in layout.tsx): registers `get_consultation_options` (read-only)
  and `request_free_call` on `navigator.modelContext` when the browser exposes it; no-op otherwise. The tool
  submits via the shared `src/lib/enquiry.ts` (same as EnquiryForm, Web3Forms `source: webmcp`, GA4
  `generate_lead` with `channel: webmcp`). Not testable end-to-end in the user's Chrome (no `modelContext`) as
  of Nov 21. If the WebMCP spec renames `registerTool`/`provideContext`, update the component.
- `book-consultation` SKILL.md and `llms.txt` describe the free call and the tools. Re-run
  `scripts/generate-agent-files.py` after editing a SKILL.md (digests).
- **Google Business Profile (Nov 21):** booking links are now `https://agrawalkhandelwal.com/consult` (PREFERRED)
  only (the user's old `wa.me` booking link and WhatsApp chat entry were removed on Nov 21 at the user's request,
  matching the site's no-WhatsApp rule); the old preferred link
  `calendar.app.google/DRd1KFnX9Lz2ChXs6` was replaced. Description's last line changed from "Book a FREE 30-minute
  consultation today." to "Book a free 15-minute intro call through the Book online button." (URLs are not
  allowed in GBP descriptions). GBP has no public phone number (left as the user had it).

## Site consistency pass (Nov 21, 2026, user-confirmed facts)
- **Hours:** Monday to Saturday 11:00 to 19:30, Sunday closed (both offices; GBP set to match).
- **Nashik address = GBP:** `Shop No. 12&13, Ram Plaza, Bhabha Nagar, Mumbai Naka, Nashik 422011` (in `OFFICES`).
- **Coordinates:** Nashik 19.9877793, 73.7898192 (from the GBP listing, place `0x3bddeb72f06cdfe9:0xd08936960d1177d0`,
  `cid=15026601649790613456`; the old cid 17018233718758486792 was dead). Sillod has no GBP listing: 20.3055, 75.6518 is
  taken from a neighbouring business at Datta Mandir, Tilak Nagar (approximate).
- **Partner roles:** all international tax (TP, UAE, US, DTAA, FEMA, NRI) is CA Mehul Agrawal; domestic tax and audit is both
  partners. Only Rupesh is ex-Deloitte. Never credit Rupesh with TP or international work.
- **Cities served:** Nashik, Sillod, Mumbai, Bangalore (India) and the UAE and US (outside India). No Pune.
- **Incorporation costs:** the MCA SPICe+ fee is nil up to Rs 15 lakh authorised capital. Never quote a "government fee" range.
  Pvt Ltd 15,000 to 40,000; LLP 12,000 to 30,000; OPC 10,000 to 25,000.
- **Offshore accounting:** step 1 is the free 15-minute intro call (user decision); quotes "within one business day".
- **Privacy policy** covers Web3Forms, Google Calendar, WebMCP requests and maps on four pages. Update it when a new
  data flow is added.
- **Open question:** GBP "Opening date" is January 2024, but the site says founded 2023.
- **Titles (checked Nov 21, 2026):** the Sep "~176 long titles" note is stale. Live: 0 titles over 77 chars; the
  only ones over 60 are pages with the " | Agrawal Khandelwal & Associates LLP" suffix, whose keyword part is under 60
  chars, so Google truncates only the brand tail. Deliberately NOT shortened (brand rule; renaming ranking pages risks CTR).
- **Breadcrumbs:** every sitemap page has BreadcrumbList. Use `src/app/_components/BreadcrumbLd.tsx` on new pages.

## Growth goal and funnel push (Nov 25, 2026 - user decisions)
- **Goal (user, Nov 25):** 200 clicks/day, 5% of clicks book a call, 1% become clients. ONLY three segments: NRIs, US corps/LLCs
  (Indian-owned), startups in India. Do not write new posts outside these segments; keep the existing off-target posts.
- **Baseline (GSC Oct 27-Nov 23):** 1,240 clicks / 129k impr / 1.0% CTR / pos 7.9. Segment pages: NRI 107 clicks, startup 94,
  US 21 = ~8/day of ~44/day; 82% of clicks are off-target (ITC, TDS, POSH...). The ITC FY 2025-26 post (208 clicks) is seasonal
  and fades after Nov 30. Non-India ~5/day (US 28, UK 19, UAE 11, Canada 11, Singapore 8).
- **Bookings baseline:** Zoho paid Rs 999 calls DID happen: booking IDs AG-00003/4/5 (Nov 17, 19, 20) - the Nov 18 "zero real
  bookings" note was wrong (Zoho's Upcoming tab hid past calls). Free 15-min Google Calendar call: first booking Nov 23 (US NRI).
  Count bookings from Google Calendar events ("30-minute consultation call with ..." = Zoho paid, "15 min call with ..." = free).
- **GA4 is still blind** (126 views vs 1,240 clicks; consent default denied, too little traffic for modelling). Added
  **Vercel Web Analytics** (`@vercel/analytics`, `<Analytics />` in layout.tsx, cookieless, privacy policy updated Nov 25).
  Use Vercel Analytics + GSC for traffic; Web3Forms emails + calendar for leads.
- **Free-call form** (`EnquiryForm` mode="free-call") now asks only email, topic, country, timeline; name and situation come
  from the Google Calendar booking form. Button: "See free call times". New topic `nri-banking`; countries list adds
  Canada, Singapore, Australia. WebMCP `request_free_call` unchanged (still takes name + message).
- **Evening slots (Nov 25):** Google Calendar free call AND Zoho paid call now Mon-Fri 11:00-16:00 + 19:30-22:30 IST
  (US East Coast mornings). Google booking description fixed from "free 30-minute" to "free 15-minute".
- **Retitled for real queries (Nov 25):** PIS post (ranked ~40 for "pis account meaning/full form": new title + definition
  section), NRO TDS (pos 17-30 for "tds on nro account"), LLP Form 8/11 (pos 3-8, title said "was due": added FY 2026-27 dates),
  OPC ("opc turnover limit"), Udyam ("udyam registration benefits"). Re-check their GSC position/CTR around Dec 20, 2026.
- **DIR-3 KYC is triennial** (verified Nov 25 via ICAI/TaxGuru/Business Standard: from Mar 31, 2026, once every three FYs by
  June 30, plus within 30 days of a contact-detail change). Fixed site-wide Nov 25: LLP Form 8/11, OPC, annual ROC filing, DSC/DIN, essential startup compliance,
  startup compliance calendar. Other mentions are link titles only. No page says annual / September 30 now.
- **Next (plan agreed Nov 25):** package pages with "from Rs X" prices for NRI / US LLC / startup (NEED the user's fees - never
  invent), segment-matched CTAs in posts, 3-4 segment buyer-intent posts a week, 2 CAclubindia posts a month, NRI communities.

## Status and backlog (updated Nov 21, 2026 - "we'll keep getting better later")
**Where things stand:** whole-site live check passed (260 URLs, all 200). AI crawlers allowed, llms files and agent
skills live, every blog post has Article (author + dateModified) + FAQPage schema, TL;DR, question headings, 2+ internal
links in. Breadcrumbs on every page (live, verified after deploy). Transfer pricing 3CEB/penalty/CbCR facts corrected
on the TP page + 7 posts (see Legal log). Titles left as is (see "Titles" above).

**Open, for a later session:**
- GBP opening date (Jan 2024) vs site "founded 2023" - user said leave it as is (Nov 22, 2026). Do not raise again.
- GBP edits still in Google review: hours, description, WhatsApp chat removal - confirm they went live.
- GA4: star `generate_lead` as a key event once it shows under Admin > Events.
- Zoho Bookings: keeps working on the free tier after the trial ends (~Nov 25). Razorpay accepts international payments (confirmed by user Nov 22, 2026). Evening IST slots for US visitors still optional.
- Mobile layout tested Nov 22, 2026 (puppeteer-core device emulation, iPhone 390px + Android 360px, all 28 non-blog pages + 3 posts): fixed `.btn` nowrap overflow at <=480px (company-incorporation quiz button), 44px hamburger tap area, centred mobile SERVICES item. Cookie banner/sticky bar text is 11.5px (left as is).
- HRA metro-city wording: open question raised in the consistency audit, not yet answered.
- Thin pages (/tools, /contact, two calculators under 300 words) - fine for now; add short explainers only if they rank.
- IndiaMart public seller URL for `sameAs` (still only have the dashboard link).
- GA4 (checked Nov 22, 2026): `generate_lead` has not been received yet (no form submissions), so it cannot be starred; the new GA4 UI has no "new key event by name" option. Star it once it appears under Recent events.
- X growth (Nov 22, 2026): account @CAMehulAg had 4 followers. Bio changed to option A ("CA helping NRIs and Indian founders get India tax, FEMA and US-entity filings right. Plain answers, no jargon. Partner, Agrawal Khandelwal & Associates LLP"). All 19 queued posts (Nov 22-Dec 2) rewritten in place, same times: no links (X suppresses link posts), hook first line, question at the end; DIR-3 KYC post corrected to the triennial regime (from Mar 31, 2026, due June 30; next for most directors June 30, 2028). Drafts in `x-queue-rewrite-2026-11-22.md`. Next: pinned thread, finish 4 threads, daily reply-target list. No auto-follow/like/reply.
- Social status (Nov 22, 2026): X - 5 scheduled posts live (Nov 19-21, 3-11 views each), 19 queued to Dec 2 (rewritten, see above); 4 threads still need manual posting. LinkedIn - scheduled posts going out (LLP vs Pvt Ltd 693 impressions, belated return 202). CAclubindia - 2 guest articles published (Form 5472, Nov 19; ROC due dates, Nov 20); Sep articles' best is the tax-audit checklist at 10k+ views. TaxGuru - NRI property TDS article REJECTED Nov 18: TaxGuru charges for articles with links ("SEO Articles are Chargeable"); resubmit without links if wanted.
- Security audit (Nov 23, 2026): Next 15.5.29 / React 19.0.9 (the 2 PostCSS advisories left need Next 16). Removed the 3 one-off July publish workflows (their crons repeat yearly) and `X-Powered-By`. Contact form has the Web3Forms `botcheck` honeypot; restricting the key to the domain is a Web3Forms dashboard task for the user.
- Email DNS (Spaceship): SPF + DKIM live; DMARC added Nov 22, 2026 at `p=none` with `rua=dmarc@` (reporting phase, deliberate, not a gap). Next: confirm reports arrive, then `p=quarantine` around Dec 7, 2026, later `p=reject`.
- GitHub repo `mehul99agr/ak-associates-web` is PUBLIC (CLAUDE.md, seo-history, backlinks drafts readable). Recommended making it private (Nov 23, 2026); pending user decision.
- Measure: judge progress by bookings (free Google Calendar + paid Zoho) and international clicks in GSC, not total clicks.

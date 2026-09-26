import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Startup Winding Up: Fast Track Exit (FTE) Mode Guide',
  description: 'What "Fast Track Exit" means for a startup shutting down today: why FTE is the old scheme name, how the current STK-2 process applies to a DPIIT-recognised startup, and a realistic timeline.',
  keywords: [
    'fast track exit startup', 'FTE mode company closure', 'startup winding up india',
    'stk-2 startup closure', 'close startup company india', 'DPIIT startup shut down',
    'fast track exit scheme', 'startup company strike off',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/startup-winding-up-fast-track-exit-fte-mode-guide' },
  openGraph: {
    title: 'Startup Winding Up: Fast Track Exit (FTE) Mode Guide',
    description: 'Why "FTE" is the old scheme name, how startups actually close down today via Form STK-2, and a realistic timeline.',
    url: 'https://agrawalkhandelwal.com/blog/startup-winding-up-fast-track-exit-fte-mode-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Winding Up: Fast Track Exit (FTE) Mode Guide',
    description: '"Fast Track Exit" is the old scheme name. Here is how a startup actually winds down today, and how long it takes.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Startup Winding Up: Fast Track Exit (FTE) Mode Guide', 'startup-winding-up-fast-track-exit-fte-mode-guide')

const articleLd = buildArticleLd({
  headline: 'Startup Winding Up: Fast Track Exit (FTE) Mode Guide',
  description: 'Why "Fast Track Exit" (FTE) is the older, now-superseded MCA scheme name, how the current Section 248 / Form STK-2 process applies to a DPIIT-recognised startup with minimal operations, and a realistic closure timeline.',
  datePublished: '2026-09-10',
  slug: 'startup-winding-up-fast-track-exit-fte-mode-guide',
})

const faqs: [string, string][] = [
  [
    'Is "Fast Track Exit (FTE)" still the correct name for closing a company in India?',
    'No, not officially. FTE was a guideline-based scheme introduced by the MCA in 2011 under the old Companies Act, 1956, to let inoperative companies close quickly. It was formally replaced with effect from December 2016 by the "Removal of Names of Companies from the Register of Companies" process under Section 248 of the Companies Act, 2013, filed through Form STK-2, and processed today via the Centre for Processing Accelerated Corporate Exit (C-PACE). Many founders and even some service providers still refer to this current process colloquially as "Fast Track Exit" because the underlying idea (a quicker voluntary strike-off for a defunct company) is the same, but the scheme itself has a different legal basis now.',
  ],
  [
    'Why would a startup wind up instead of just staying inactive?',
    'An inactive but un-struck-off company continues to attract annual ROC filing obligations (AOC-4, MGT-7), DIN KYC for directors, and penalty exposure for missed deadlines, none of which pause just because the startup has stopped operating. For a founder who has decided the venture is not continuing, a formal strike-off stops this compliance clock and closes out the legal entity cleanly, rather than letting penalties and late fees accumulate on a company nobody is running.',
  ],
  [
    'What makes a startup wind-up different from winding up any other private limited company?',
    'The legal mechanism (Section 248, Form STK-2) is identical for a DPIIT-recognised startup and any other private limited company. What differs in practice is the profile: most startups considering an early wind-up have minimal or no revenue, a short operating history, a small founder-only cap table, and few if any outstanding vendor or lender obligations, which generally makes them faster to close than an older company with more transaction history to account for. A startup should also formally intimate DPIIT of the closure and stop claiming Startup India recognition benefits once the company is no longer operating.',
  ],
  [
    'What are the most common reasons early-stage startups wind up?',
    'The recurring patterns are running out of runway before reaching the next fundraise, the founders deciding to pursue a different idea or pivot into a fresh entity rather than restructure the existing one, a co-founder dispute that makes continuing impractical, or the business model simply not finding product-market fit within the runway available. In each case, the earlier the decision to close is made and acted on, the cleaner (and usually cheaper) the exit, since compliance backlogs and unresolved vendor dues are what most commonly slow down a strike-off application.',
  ],
  [
    'Can a startup with unpaid vendor dues or an open bank loan use this route?',
    'No. Eligibility for Form STK-2 strike-off requires nil assets and nil liabilities, or all liabilities fully settled, along with no pending litigation and no open charge against the company\'s assets. A startup that owes money to vendors, has an outstanding loan, or has an unresolved dispute needs to settle or resolve those first; the strike-off route is only for a company that is genuinely and completely wound down operationally and financially before the application is filed.',
  ],
  [
    'How long does it take a startup to close down through this process?',
    'For a startup with clean, up-to-date compliance and no assets or liabilities, the process from filing Form STK-2 to the company being struck off in the Official Gazette typically takes three to six months, driven mainly by the Registrar\'s mandatory public notice and objection window. If the startup has overdue annual filings or DIN KYC to catch up on first, which is common for a company that has been inactive for a while, add the time needed to bring that current; this is usually the longer part of the process for an early-stage company, not the STK-2 filing itself.',
  ],
]

const faqLd = buildFaqLd(faqs)

export default function StartupWindingUpFTEBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">Startup Advisory</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Startup Winding Up: Fast Track Exit (FTE) Mode Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 10, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>&quot;Fast Track Exit (FTE)&quot; is the older MCA scheme name</strong> (2011, under the Companies Act, 1956); it was formally superseded in December 2016 by <strong>Section 248</strong> of the Companies Act, 2013, filed via <strong>Form STK-2</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>People still search &quot;Fast Track Exit&quot;, but the live mechanism today is the STK-2 strike-off route, now processed via C-PACE.</li>
                    <li style={{ marginBottom: '0.4rem' }}>For a startup with no assets, no liabilities, and minimal operating history, this is usually the fastest legal way to close down cleanly.</li>
                    <li style={{ marginBottom: 0 }}>Realistic timeline: roughly <strong>three to six months</strong>, longer if compliance backlog needs clearing first.</li>
                  </ul>
                </div>

                <p>Founders searching for how to close down a startup quickly almost always land on the term &quot;Fast Track Exit&quot; or &quot;FTE mode&quot;. It&apos;s worth being upfront about this before going further: <strong>FTE, as a named scheme, no longer exists.</strong> It was replaced years ago, and this guide uses the term because that&apos;s still how people search and talk about it, while explaining exactly what the current process actually is, and how it applies specifically to a startup rather than an established company.</p>

                <h2>FTE vs the Current Process: What Actually Changed</h2>
                <p>The Fast Track Exit Scheme was introduced by the MCA in <strong>2011</strong> as a guideline-based route under Section 560 of the Companies Act, 1956, to let genuinely defunct companies close without going through a full winding-up process. When the Companies Act, 2013 came into force, this was gradually phased out, and with effect from <strong>December 2016</strong>, it was formally replaced by the &quot;Removal of Names of Companies from the Register of Companies&quot; process under <strong>Section 248</strong> of the Companies Act, 2013, read with the Companies (Removal of Names of Companies from the Register of Companies) Rules, 2016. The operative form is <strong>Form STK-2</strong>, and applications are now centrally processed through the <strong>Centre for Processing Accelerated Corporate Exit (C-PACE)</strong>, set up by the MCA in 2023 to speed up and standardise strike-off processing nationally.</p>
                <p>In practice, the underlying idea behind &quot;FTE&quot; and the current STK-2 process is the same: a faster, cheaper way for an inactive company with no assets or liabilities to exit the register instead of undergoing a formal winding-up. The name changed, the filing form changed, and the processing authority changed; the core eligibility logic (dormant, debt-free, asset-free) carried forward. Our companion post covers the <Link href="/blog/winding-up-strike-off-a-private-limited-company-process-and-timeline" style={{ color: 'var(--primary)', fontWeight: 600 }}>full general STK-2 procedure, eligibility conditions, and required documents</Link> in detail; this guide focuses on what&apos;s specifically relevant when the company being closed is a young startup.</p>

                <h2>What&apos;s Different When the Company Closing Down Is a Startup</h2>
                <p>The legal mechanism is identical whether the company being struck off is a five-year-old trading company or a startup that raised a small pre-seed round eighteen months ago. What differs is the practical profile, and it generally works in a startup&apos;s favour:</p>
                <ul>
                  <li><strong>Shorter transaction history.</strong> A startup that has been operating for a year or two typically has fewer historical filings, vendor relationships, and contracts to unwind compared to an older company, which can make the pre-filing cleanup faster.</li>
                  <li><strong>Simpler, founder-heavy cap table.</strong> Early-stage startups with only founders (and perhaps one small external round) on the cap table have less shareholder coordination to manage when obtaining the required board and member approvals.</li>
                  <li><strong>DPIIT recognition needs a separate wind-down step.</strong> If the startup is registered with DPIIT under Startup India, the founders should formally intimate DPIIT of the closure and stop claiming any Startup India benefits (tax holiday eligibility, exemptions, etc.) once the company ceases operations; this is separate from, and in addition to, the MCA strike-off filing itself.</li>
                  <li><strong>Investor consent, if any funding was raised.</strong> Even a small external round means investor shareholders need to be part of the special resolution approving the closure, and any investor-side consent rights in a shareholders&apos; agreement should be checked before assuming the founders alone can approve the wind-down.</li>
                </ul>

                <h2>Why Startups End Up Winding Down Early</h2>
                <p>A few patterns show up repeatedly among early-stage startups that choose to close rather than continue: running out of runway before reaching a fundable milestone, founders deciding to redirect their energy into a different idea rather than restructure the existing entity, an unresolved co-founder dispute that makes continuing untenable, or simply not finding product-market fit within the time and capital available. None of these are unusual or something to be defensive about; what matters operationally is recognising the decision early, since a startup that keeps the entity alive and non-compliant for years before deciding to close ends up with a larger backlog of overdue filings and accumulated late fees to clear before it can even apply for strike-off.</p>

                <h2>Eligibility: The Same Bar as Any Company</h2>
                <p>A startup wanting to use this route still needs to meet the standard eligibility conditions: no business commenced within a year of incorporation, or no operations for the two preceding financial years; nil assets and nil liabilities as on the date of application, or all liabilities fully settled; no pending litigation; and no open charge registered against the company&apos;s assets. All overdue annual returns and financial statements generally need to be filed up to date before applying, and approval requires board consent followed by a special resolution or seventy-five percent member consent in terms of paid-up capital. A startup that raised even a modest external round should confirm no investor consent rights are being bypassed before filing.</p>

                <h2>Realistic Timeline for a Startup</h2>
                <p>For a startup that already has clean, current compliance and genuinely has no assets or liabilities left to account for, the process from filing Form STK-2 to the company being struck off typically takes <strong>three to six months</strong>, driven mostly by the Registrar&apos;s mandatory public notice and objection window rather than anything within the founders&apos; control. Where a startup has let annual filings lapse during its inactive period, which is common, add the time needed to bring DIR-3 KYC, AOC-4, and MGT-7 filings current first; for many early-stage startups considering closure, this compliance cleanup, not the STK-2 filing itself, is the longer part of the exercise. Before deciding, it&apos;s worth comparing the cost of clearing that backlog against simply keeping the entity dormant a little longer if there&apos;s any realistic chance of reviving it.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>For the Full Procedural Detail</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>This post focuses on the startup-specific context. For the complete step-by-step STK-2 filing process, the full document checklist (indemnity bond, statement of accounts, affidavits), and what strike-off does and doesn&apos;t erase for directors afterward, see our detailed <Link href="/blog/winding-up-strike-off-a-private-limited-company-process-and-timeline" style={{ color: 'var(--primary)', fontWeight: 600 }}>winding up / strike-off process and timeline guide</Link>.</p>
                </div>

                <p>Closing a startup is rarely the outcome founders plan for, but doing it cleanly through a proper strike-off, rather than simply abandoning the entity and letting penalties accumulate, protects both the founders&apos; compliance record and their ability to start a new venture without an unresolved legal tail from the previous one.</p>
              </div>

              <PostCTA
            heading="Winding down your startup?"
            description="We check eligibility, clear any pending ROC filings, coordinate investor consents if needed, and handle the STK-2 filing end to end."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20wind%20up%20my%20startup."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/winding-up-strike-off-a-private-limited-company-process-and-timeline" style={{ color: 'var(--primary)', fontWeight: 600 }}>Winding Up / Strike Off a Private Limited Company: Process &amp; Timeline</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar: Year 1-3</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Company Incorporation Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

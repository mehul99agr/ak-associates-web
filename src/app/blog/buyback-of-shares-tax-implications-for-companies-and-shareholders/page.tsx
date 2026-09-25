import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Buyback of Shares: Tax Implications for Companies & Shareholders (FY 2026-27)' },
  description: 'How share buybacks are taxed from April 1, 2026: back to a capital-gains framework under Section 69 (not deemed dividend), plus a new Special Additional Tax on promoters.',
  keywords: [
    'buyback of shares tax', 'share buyback taxation India', 'section 115QA buyback tax',
    'buyback capital gains 2026', 'buyback tax rules FY 2026-27', 'capital loss on buyback shares',
    'section 69 buyback income tax act 2025', 'special additional tax buyback promoters',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/buyback-of-shares-tax-implications-for-companies-and-shareholders' },
  openGraph: {
    title: 'Buyback of Shares: Tax Implications for Companies & Shareholders',
    description: 'Buyback taxation reverted to a capital-gains framework from April 1, 2026, with a new Special Additional Tax on promoters. What changed, again.',
    url: 'https://agrawalkhandelwal.com/blog/buyback-of-shares-tax-implications-for-companies-and-shareholders',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyback of Shares: Tax Implications for Companies & Shareholders',
    description: 'From April 1, 2026: capital gains treatment replaces the deemed-dividend regime, plus a new Special Additional Tax on promoters.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Buyback of Shares: Tax Implications for Companies & Shareholders', 'buyback-of-shares-tax-implications-for-companies-and-shareholders')

const articleLd = buildArticleLd({
  headline: 'Buyback of Shares: Tax Implications for Companies & Shareholders',
  description: 'Buyback taxation from April 1, 2026: a capital-gains framework under Section 69 of the Income Tax Act 2025, replacing the October 2024 deemed-dividend regime, plus a new Special Additional Tax on promoters.',
  datePublished: '2026-08-28',
  dateModified: '2026-09-25',
  slug: 'buyback-of-shares-tax-implications-for-companies-and-shareholders',
})

const faqs: [string, string][] = [
  [
    'How are buybacks taxed for FY 2026-27, and is this different from last year?',
    'Yes, buyback taxation changed again for buybacks undertaken on or after April 1, 2026. From that date, buyback proceeds are taxed as capital gains under Section 69 of the Income Tax Act 2025 (the sale consideration minus the shareholder\'s cost of acquisition, taxed under normal LTCG/STCG rules), reversing the October 1, 2024 "deemed dividend" regime under which the entire proceeds were taxed as dividend at the shareholder\'s slab rate. Buybacks undertaken between October 1, 2024 and March 31, 2026 remain governed by the deemed-dividend rules described further below; only buybacks from April 1, 2026 onward use the capital-gains approach.',
  ],
  [
    'How is buyback consideration taxed in the shareholder\'s hands now (from April 1, 2026)?',
    'For most (non-promoter) shareholders, only the gain, buyback price minus cost of acquisition, is taxed, not the full proceeds. Long-term gains (shares held over the applicable period) are taxed at 12.5%, with the same ₹1.25 lakh annual exemption available to listed equity LTCG. Short-term gains are taxed at 20% for listed shares, or at the applicable rate for unlisted shares. This is a return to how buybacks were effectively treated before October 2024, though under a new section number rather than a revival of the pre-2024 rules as such.',
  ],
  [
    'Is there a separate tax on promoters in a buyback?',
    'Yes. Alongside the capital-gains treatment for ordinary shareholders, the FY 2026-27 rules introduce a Special Additional Tax that applies specifically to promoters participating in a buyback, at an effective combined rate of roughly 22% for corporate promoters and roughly 30% for non-corporate promoters. The precise shareholding threshold or condition that triggers this promoter-specific tax was not consistently detailed across the sources we reviewed, so promoters planning to participate in a buyback should confirm their specific exposure with a CA before relying on a general figure.',
  ],
  [
    'Does Section 115QA come back into force under the new rules?',
    'No. Section 115QA (the pre-October 2024 company-level buyback tax) remains repealed; it is not reinstated. The new April 1, 2026 regime uses a different mechanism entirely, Section 69 capital-gains treatment for shareholders plus the Special Additional Tax on promoters, rather than reviving the old company-level tax.',
  ],
  [
    'Is TDS still deducted on buyback proceeds the same way?',
    'The exact TDS mechanism for buybacks from April 1, 2026 was not something we could independently confirm with confidence at the time of writing; sources agree the underlying tax treatment shifted from dividend to capital gains, but do not consistently specify whether TDS continues under Section 194 (dividend TDS) or shifts to a different withholding provision. Confirm the applicable TDS section with your CA before a buyback closes rather than assuming the old Section 194 dividend-TDS mechanics still apply unchanged.',
  ],
  [
    'Is this buyback tax treatment guaranteed to stay the same going forward?',
    'No. This is the third material change to buyback taxation in about 18 months (the pre-October 2024 company-tax regime, the October 2024 deemed-dividend regime, and the April 1, 2026 capital-gains regime), so treat buyback taxation as one of the fastest-moving areas of Indian corporate tax rather than a settled rule. Always confirm the specific tax treatment applicable to the financial year in which a buyback is actually undertaken with your CA before relying on any figure in this or any other article.',
  ],
  [
    'Why would a company still consider a buyback instead of a dividend?',
    'A buyback still serves distinct purposes a dividend does not: it returns capital to shareholders who choose to participate rather than to the entire shareholder base, it can improve per-share metrics for remaining shareholders, and it gives promoters or investors an exit route for a portion of their holding without a full share transfer negotiation. With the April 1, 2026 shift back to capital-gains treatment for ordinary shareholders, a buyback can again be more tax-efficient than a dividend for many shareholders, though promoters need to separately account for the Special Additional Tax before assuming that advantage applies to them.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function BuybackOfSharesTaxBlog() {
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
              <span className="section-badge">Corporate Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Buyback of Shares: Tax Implications for Companies &amp; Shareholders
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 28, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Update, September 25, 2026:</strong> buyback taxation changed again, effective <strong>April 1, 2026</strong>. Proceeds are back to capital-gains treatment under Section 69 of the Income Tax Act 2025, not the deemed-dividend rule used between Oct 2024 and Mar 2026.</li>
                    <li style={{ marginBottom: '0.4rem' }}>For ordinary shareholders, only the <strong>gain</strong> (buyback price minus cost of acquisition) is taxed: 12.5% LTCG (with the usual ₹1.25 lakh exemption) or 20% STCG for listed shares.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A new <strong>Special Additional Tax on promoters</strong> applies on top of this, at roughly 22% (corporate promoters) or 30% (non-corporate promoters); the exact triggering threshold is unconfirmed, so promoters should confirm their exposure with a CA.</li>
                    <li style={{ marginBottom: 0 }}>Buybacks from <strong>Oct 1, 2024 to Mar 31, 2026</strong> are still governed by the older deemed-dividend regime described later in this article; only buybacks from April 1, 2026 use the capital-gains approach.</li>
                  </ul>
                </div>

                <p>Buyback taxation has now changed twice in about 18 months. Before October 2024, the company absorbed the tax cost under Section 115QA and the shareholder received proceeds tax-free. From October 2024 to March 2026, that flipped: the company paid nothing, and the shareholder was taxed on the full proceeds as deemed dividend. From <strong>April 1, 2026</strong>, it has changed again: buyback proceeds are back to a capital-gains framework for ordinary shareholders, with a new tax specifically targeting promoters layered on top. Both companies planning a buyback and shareholders participating in one need the current mechanics, not last year&apos;s, before assuming any figure still applies.</p>

                <h2>The Current Rule: Capital Gains Treatment from April 1, 2026</h2>
                <p><strong>For buybacks undertaken on or after April 1, 2026, buyback proceeds are taxed as capital gains under Section 69 of the Income Tax Act 2025</strong>, not as deemed dividend. The shareholder is taxed only on the difference between the buyback price and their cost of acquisition, using the normal LTCG/STCG framework: 12.5% for long-term gains (with the same ₹1.25 lakh annual exemption available to listed equity LTCG generally), and 20% for short-term gains on listed shares (the applicable rate for unlisted shares). Section 115QA, the old company-level buyback tax, remains repealed; it is not reinstated as part of this change.</p>
                <p>Layered on top of this, a new <strong>Special Additional Tax</strong> applies specifically to promoters participating in a buyback, at an effective combined rate of roughly 22% for corporate promoters and roughly 30% for non-corporate promoters. We were not able to independently confirm the exact shareholding percentage or condition that triggers this promoter-specific tax from the sources available at the time of writing, so treat the existence and approximate rate as confirmed, but the precise triggering mechanics as something to verify with a CA before a buyback involving promoter participation is finalised.</p>
                <p>The TDS mechanism applicable to this capital-gains treatment was also not something we could independently confirm with confidence; whether TDS continues under Section 194 (the dividend TDS provision used under the Oct 2024-Mar 2026 regime) or shifts to a different withholding section has not been consistently reported across sources. Confirm this specifically with your CA before a buyback closes.</p>

                <h2>The Regime This Replaced: Deemed Dividend (Oct 1, 2024 to Mar 31, 2026)</h2>
                <p>The rest of this section describes the rules that applied to buybacks undertaken between October 1, 2024 and March 31, 2026, kept here for reference since some ongoing disputes, refunds, or historical filings may still turn on this period&apos;s treatment. If you are planning a buyback now, the current rule above is what applies, not this section.</p>

                <h3>What Changed on October 1, 2024</h3>
                <p>Before this date, a company undertaking a buyback paid tax under <strong>Section 115QA</strong> at an effective rate of roughly 23.3% (inclusive of applicable surcharge and cess) on the distributed income, essentially the difference between the buyback price and the amount originally received by the company for those shares. The shareholder receiving buyback proceeds paid no further tax on that amount, since it was exempt under a corresponding provision.</p>
                <p><strong>For buybacks from October 1, 2024 onward, Section 115QA no longer applies at the company level.</strong> Instead, a new limb was added to Section 2(22)(f) bringing the entire sum received by a shareholder on a buyback within the definition of &quot;dividend.&quot; The practical result: the company no longer bears a buyback tax, but the shareholder now pays tax on the full proceeds as deemed dividend, at their own applicable slab rate, with no offset for the amount they originally paid for the shares at the time the dividend income is computed.</p>

                <h3>How the Shareholder Was Taxed Under This Regime</h3>
                <p>The full buyback amount received by the shareholder was treated as deemed dividend income and taxed at their applicable slab rate (or the relevant treaty rate, for non-resident shareholders), the same way ordinary dividend income is taxed after the abolition of DDT. For a shareholder in a high tax bracket, this meant a substantially higher effective tax cost on the buyback proceeds than a flat company-level buyback tax used to produce, particularly compared to the pre-October 2024 regime where the shareholder paid nothing directly.</p>
                <p>This mirrored the shareholder-level taxation approach in place for ordinary dividends since DDT was abolished; see our companion guide on <Link href="/blog/dividend-distribution-and-taxation-company-and-shareholder-perspective" style={{ color: 'var(--primary)', fontWeight: 600 }}>dividend distribution and taxation</Link> for how that works for a regular payout.</p>

                <h3>The Capital Loss Mechanic Under Section 46A (Oct 2024-Mar 2026 Buybacks)</h3>
                <p>Here is the part that often got missed: because the buyback consideration was taxed entirely as deemed dividend, what happened to the shareholder&apos;s original cost of acquiring those shares? Under the amended <strong>Section 46A</strong>, the sale consideration used to compute capital gains on the buyback was deemed to be <strong>nil</strong>. Since the shareholder received no capital gains credit for the buyback amount (it had already been taxed as dividend), the entire cost of acquisition of the shares surrendered in the buyback effectively became a <strong>capital loss</strong>.</p>
                <p>Whether this loss was short-term or long-term depended on how long the shareholder held the shares before the buyback. That capital loss could be set off against other capital gains in the same year under the normal set-off rules (long-term loss only against long-term gains; short-term loss against either), and any unabsorbed loss can still be carried forward for up to 8 assessment years from the year it arose. This mechanic no longer applies to buybacks from April 1, 2026 onward, since those are directly taxed as capital gains rather than as dividend plus a separate loss.</p>

                <h3>TDS on Buyback Proceeds Under This Regime</h3>
                <p>Because buyback proceeds were classified as deemed dividend under this regime, the same withholding mechanism applied as for an ordinary dividend payout: TDS under <strong>Section 194</strong> for resident shareholders once the prescribed annual threshold was crossed, at the standard rate applicable to dividend income, and TDS under <strong>Section 195</strong> for non-resident shareholders. As noted above, whether this carries over unchanged to buybacks from April 1, 2026 has not been confirmed; do not assume it does.</p>

                <h2>What This Means for Companies Planning a Buyback Now</h2>
                <p>With the shift back to capital-gains treatment from April 1, 2026, a buyback is closer to being a genuinely tax-efficient route for ordinary shareholders again, since only the gain is taxed rather than the full proceeds. But this no longer applies uniformly: promoters face the new Special Additional Tax on top of the capital-gains number, and the exact trigger for that tax needs confirming case by case. Companies should model the after-tax outcome separately for promoter and non-promoter shareholders, factoring in each shareholder&apos;s holding period and whether the promoter-specific tax applies to their participation, rather than assuming either the old deemed-dividend numbers or a blanket capital-gains rate for everyone. For closely held companies weighing a buyback as part of a broader promoter exit or capital restructuring, this is worth modelling alongside our guidance on <Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup valuation</Link> and cap table planning.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning a share buyback or a shareholder exit?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We model the after-tax outcome for the company and each class of shareholder before a buyback is finalised.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dividend-distribution-and-taxation-company-and-shareholder-perspective" style={{ color: 'var(--primary)', fontWeight: 600 }}>Dividend Distribution &amp; Taxation: Company and Shareholder Perspective</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Convertible Notes vs Equity for Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Corporate Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

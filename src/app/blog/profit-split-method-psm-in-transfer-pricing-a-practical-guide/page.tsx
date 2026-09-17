import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Profit Split Method (PSM) in Transfer Pricing: A Practical Guide',
  description: 'How the Profit Split Method under Rule 10B(1)(d) allocates combined profit between associated enterprises, when it is the most appropriate method, and how contribution and residual profit split analyses differ.',
  keywords: [
    'profit split method transfer pricing', 'PSM transfer pricing India', 'Rule 10B(1)(d)',
    'residual profit split method', 'contribution profit split method',
    'profit split method unique intangibles', 'PSM India example',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/profit-split-method-psm-in-transfer-pricing-a-practical-guide' },
  openGraph: {
    title: 'Profit Split Method (PSM) in Transfer Pricing: A Practical Guide',
    description: 'How PSM allocates combined profit under Rule 10B(1)(d), when it applies, and how residual vs contribution profit split differ.',
    url: 'https://agrawalkhandelwal.com/blog/profit-split-method-psm-in-transfer-pricing-a-practical-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profit Split Method (PSM) in Transfer Pricing',
    description: 'When PSM is the most appropriate method and how residual vs contribution profit split analyses work.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Profit Split Method (PSM) in Transfer Pricing: A Practical Guide', 'profit-split-method-psm-in-transfer-pricing-a-practical-guide')

const articleLd = buildArticleLd({
  headline: 'Profit Split Method (PSM) in Transfer Pricing: A Practical Guide',
  description: 'How the Profit Split Method under Rule 10B(1)(d) allocates combined profit between associated enterprises, when it is the most appropriate method, and how contribution and residual profit split analyses differ.',
  datePublished: '2026-08-17',
  slug: 'profit-split-method-psm-in-transfer-pricing-a-practical-guide',
})

const faqs: [string, string][] = [
  ['What is the Profit Split Method in transfer pricing?', 'The Profit Split Method (PSM), under Rule 10B(1)(d) of the Income Tax Rules, 1962, determines the combined net profit earned by associated enterprises from one or more related international transactions, evaluates each enterprise\'s relative contribution based on functions performed, assets employed, and risks assumed, and then splits the combined profit between them in proportion to those relative contributions to arrive at an arm\'s length allocation.'],
  ['When is PSM the most appropriate method?', 'PSM is generally appropriate where the international transaction involves transfer of unique, valuable intangibles by one or both parties, where two or more associated enterprises are so highly integrated that their individual contributions cannot be reliably evaluated in isolation, or where multiple related transactions are so interlinked that they cannot be benchmarked separately using a one-sided method like TNMM or CPM.'],
  ['What is the difference between contribution and residual profit split?', 'A contribution analysis splits the entire combined profit directly based on the relative value of each party\'s functions, assets, and risks, without a separate routine-return step. A residual (two-stage) analysis first allocates a routine, market-based return to each party for its more standard functions using an external benchmark, then splits only the leftover residual profit, usually attributable to unique intangibles or integration, based on relative contribution.'],
  ['Why is PSM not commonly used as a first choice in India?', 'PSM requires defining a combined profit pool, agreeing an allocation key, and often assigning value to hard-to-benchmark contributions like proprietary technology or brand, all of which involve more judgment and are harder to support with objective data than a one-sided method. Tax authorities also tend to scrutinise the allocation key closely, so PSM is generally reserved for genuinely integrated or intangible-heavy transactions rather than applied by default.'],
  ['Can PSM be used alongside TNMM for the same group of transactions?', 'Yes, where a taxpayer has multiple classes of international transactions with different characteristics. A group might use PSM for a jointly developed intangible or a highly integrated manufacturing-and-distribution arrangement, while using TNMM for a separate, more routine service transaction with the same or a different associated enterprise, provided each method selection is independently justified.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function PSMBlog() {
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
              <span className="section-badge">Transfer Pricing</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Profit Split Method (PSM) in Transfer Pricing: A Practical Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 17, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>PSM, under <strong>Rule 10B(1)(d)</strong>, splits the <strong>combined profit</strong> of associated enterprises based on their relative contributions, not comparable pricing or margins.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It fits transactions with <strong>unique intangibles</strong> or genuinely <strong>integrated</strong> operations that a one-sided method cannot evaluate separately.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Two variants exist: a direct <strong>contribution analysis</strong>, or a two-stage <strong>residual analysis</strong> (routine return first, then split the residual).</li>
                    <li style={{ marginBottom: 0 }}>It is not a routine fallback; PSM is unsuitable where the transaction is standard enough for comparables to exist.</li>
                  </ul>
                </div>

                <p>Most Indian transfer pricing files settle on TNMM or CUP because a one-sided comparable can usually be found. PSM is different: it does not ask what an independent party would have charged for a similar transaction, it asks how the combined profit from a genuinely joint effort should be divided between the parties that created it. That makes it the most conceptually demanding of the five Rule 10B methods, and also the one most often misapplied when treated as a default rather than a deliberate choice. This guide builds on our <Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>overview of all five transfer pricing methods</Link>, which introduces PSM briefly alongside CUP, RPM, CPM, and TNMM.</p>

                <h2>How PSM Works Under Rule 10B(1)(d)</h2>
                <p>Rule 10B(1)(d) sets out PSM in four steps:</p>
                <ol>
                  <li><strong>Determine the combined net profit</strong> earned by the associated enterprises from the international transaction (or transactions) being tested.</li>
                  <li><strong>Evaluate relative contributions</strong> of each enterprise to that combined profit, based on the functions performed, assets employed (including intangibles), and risks assumed by each party, ideally using reliable external market data to benchmark the value of each contribution.</li>
                  <li><strong>Split the combined profit</strong> between the enterprises in proportion to their evaluated relative contributions.</li>
                  <li><strong>Arrive at the arm&apos;s length price</strong> for the tested transaction by taking into account the profit apportioned to the Indian entity.</li>
                </ol>
                <p>The rule explicitly allows the combined profit to be split using either a direct contribution analysis or a two-stage residual analysis, discussed below, and permits factoring in market data on how independent enterprises performing comparable functions under comparable circumstances would have divided a similar combined profit.</p>

                <h2>When PSM Is the Most Appropriate Method</h2>
                <p>PSM is generally the right choice, rather than a fallback, where:</p>
                <ul>
                  <li><strong>Unique, valuable intangibles</strong> are transferred or exploited by one or both parties, such as jointly developed technology, proprietary processes, or brand value that has no independent market comparable.</li>
                  <li><strong>Operations are highly integrated</strong>, so that neither party&apos;s contribution can be meaningfully isolated and tested on a standalone basis; for example, a global product where R&amp;D, manufacturing, and marketing intangibles are all held or developed jointly across group entities.</li>
                  <li><strong>Multiple related transactions are interlinked</strong> such that evaluating any single transaction separately, as CUP, RPM, CPM, or TNMM would require, does not produce a reliable result on its own.</li>
                </ul>
                <p>PSM is <strong>not</strong> appropriate where the transaction involves only routine functions and reliable one-sided comparables exist; in that scenario TNMM, CPM, or RPM will generally give a more objective and defensible answer with less room for dispute over the allocation key.</p>

                <h2>Contribution Analysis vs Residual (Two-Stage) Analysis</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Approach</th><th style={thStyle}>How It Works</th><th style={thStyle}>Typically Used When</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}><strong>Contribution analysis</strong></td><td style={tdStyle}>Splits the entire combined profit directly, in a single step, based on the relative value of each party&apos;s functions, assets, and risks</td><td style={tdStyle}>Both parties make significant, hard-to-separate contributions and no cleaner routine/residual split can be justified</td></tr>
                      <tr><td style={tdAltStyle}><strong>Residual (two-stage) analysis</strong></td><td style={tdAltStyle}>Stage 1 allocates each party a routine, market-benchmarked return for its standard functions; Stage 2 splits only the leftover residual profit (usually tied to unique intangibles) based on relative contribution</td><td style={tdAltStyle}>One or both parties perform some routine functions that can be benchmarked externally, alongside a smaller pool of unique, intangible-driven profit</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>The residual approach is generally preferred where it is feasible, because the first stage anchors part of the analysis to observable market comparables (for example, a contract manufacturer&apos;s routine return benchmarked the same way a CPM or TNMM analysis would), leaving only the harder-to-benchmark residual profit to the more judgment-driven allocation key. This reduces the portion of the total profit split that rests purely on subjective weighting.</p>

                <h2>Choosing an Allocation Key</h2>
                <p>Whichever variant is used, the credibility of a PSM analysis rests heavily on the allocation key chosen to divide profit (or residual profit) between the parties. Common keys include relative revenue, relative operating costs, relative headcount or compensation of key personnel, relative asset base (including capitalised intangible development spend), or a weighted combination of these, depending on which best reflects the actual economic drivers of value in the transaction. The key should be chosen based on the facts of the business, not selected retroactively to produce a particular allocation, and the reasoning should be documented as thoroughly as the profit computation itself, since tax authorities scrutinise the allocation key at least as closely as the profit pool.</p>

                <h2>Illustrative Example: Jointly Developed Software Platform</h2>
                <p>Assume an Indian subsidiary and its overseas parent jointly develop and commercially exploit a software platform: the parent contributed the original core architecture and owns the brand, while the Indian entity built substantial new modules, contributes ongoing R&amp;D, and operates key customer-facing functions. Neither party&apos;s standalone contribution can be reliably benchmarked against an independent comparable, because the platform itself is unique.</p>
                <p>A residual analysis might first allocate each entity a routine return for functions that can be benchmarked (for instance, a modest cost-plus return to the Indian entity for defined support functions, using CPM or TNMM comparables), then split the substantial remaining residual profit between the two entities using a key such as relative qualified R&amp;D headcount or relative development spend over the relevant period, reflecting each party&apos;s actual contribution to the intangible that drives the residual profit. The specific split ratio in any real case depends entirely on the facts and the comparability analysis performed; there is no standard percentage that applies generically.</p>

                <h2>Documentation Expectations</h2>
                <p>A PSM study should document the transactions and parties covered, how the combined profit pool was computed and reconciled to financial statements, the functional analysis supporting each party&apos;s relative contribution, why a contribution or residual approach was chosen, the allocation key and the reasoning for it, and why PSM was selected over a one-sided method. This reasoning is typically the first thing examined in a <Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>transfer pricing audit</Link>, and where applicable the transaction still needs to be reported in <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB</Link> alongside the supporting documentation.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Working with unique intangibles or integrated operations across borders?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help groups build defensible profit-split analyses, choose the right allocation key, and prepare the supporting Form 3CEB documentation.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Methods in India: All 5 Methods Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/cost-plus-method-cpm-in-transfer-pricing-when-it-applies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Cost Plus Method (CPM): When It Applies</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/secondary-adjustment-under-transfer-pricing-section-92ce-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Secondary Adjustment Under Section 92CE Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

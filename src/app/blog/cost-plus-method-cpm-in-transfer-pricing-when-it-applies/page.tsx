import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Cost Plus Method (CPM) in Transfer Pricing: When It Applies',
  description: 'How the Cost Plus Method under Rule 10B(1)(c) works, which cost base it uses, when it is the most appropriate method for contract manufacturers and low-risk service providers, and why TNMM often replaces it in practice.',
  keywords: [
    'cost plus method transfer pricing', 'CPM transfer pricing India', 'Rule 10B(1)(c)',
    'cost plus method contract manufacturing', 'gross mark up transfer pricing',
    'cost plus method vs TNMM', 'cost plus method India example',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/cost-plus-method-cpm-in-transfer-pricing-when-it-applies' },
  openGraph: {
    title: 'Cost Plus Method (CPM) in Transfer Pricing: When It Applies',
    description: 'How CPM works under Rule 10B(1)(c), the cost base it uses, and when it beats TNMM for contract manufacturers and low-risk service providers.',
    url: 'https://agrawalkhandelwal.com/blog/cost-plus-method-cpm-in-transfer-pricing-when-it-applies',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cost Plus Method (CPM) in Transfer Pricing',
    description: 'When CPM is the most appropriate method, the cost base it uses, and a worked mark-up example.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Cost Plus Method (CPM) in Transfer Pricing: When It Applies', 'cost-plus-method-cpm-in-transfer-pricing-when-it-applies')

const articleLd = buildArticleLd({
  headline: 'Cost Plus Method (CPM) in Transfer Pricing: When It Applies',
  description: 'How the Cost Plus Method under Rule 10B(1)(c) works, the cost base it uses, when it is the most appropriate method, and why TNMM often replaces it in practice.',
  datePublished: '2026-10-06',
  slug: 'cost-plus-method-cpm-in-transfer-pricing-when-it-applies',
})

const faqs: [string, string][] = [
  ['What is the Cost Plus Method in transfer pricing?', 'The Cost Plus Method (CPM) is one of the five methods prescribed under Rule 10B of the Income Tax Rules, 1962 for determining the arm\'s length price of an international transaction. It starts with the direct and indirect costs incurred by the supplier in producing goods or providing services to an associated enterprise, then adds a normal gross profit mark-up earned by, or from, comparable uncontrolled transactions to arrive at the arm\'s length price.'],
  ['When is CPM the most appropriate method?', 'CPM is typically most appropriate for transactions such as contract or toll manufacturing, sale of semi-finished goods between associated enterprises, long-term buy-sell arrangements, and the provision of certain services (engineering, technical support, back-office processing) where the tested party is a low-risk, contract-style provider and a reliable gross-margin comparable exists.'],
  ['Why is TNMM often used instead of CPM in India?', 'CPM requires comparing gross profit mark-ups, which depend heavily on how costs are classified below the gross-profit line (cost of goods sold vs operating expenses). Public financial databases rarely disclose this breakdown consistently across companies, making reliable gross-margin comparables hard to find. TNMM, which compares net operating margins, tolerates more of these accounting differences, so it is frequently selected in practice even where CPM would be conceptually appropriate.'],
  ['What costs go into the CPM cost base?', 'The cost base generally includes direct costs (materials, labour directly attributable to production) and indirect costs (production overheads reasonably allocable to the transaction). Costs that require separate treatment include pass-through or reimbursed expenses, abnormal or non-recurring costs, and items such as foreign exchange gains or losses, since including or excluding these inconsistently between the tested party and comparables can distort the mark-up comparison.'],
  ['Can CPM and TNMM be used for different transactions in the same year?', 'Yes. A taxpayer can apply different most appropriate methods to different classes of international transactions within the same financial year, provided the choice for each transaction is supported by its own functional analysis and comparability reasoning. A company might use CPM for a contract manufacturing arrangement with strong gross-margin comparables and TNMM for a services arrangement where only net-margin data is available.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function CPMBlog() {
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
                Cost Plus Method (CPM) in Transfer Pricing: When It Applies
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 6, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>CPM, under <strong>Rule 10B(1)(c)</strong>, adds a normal gross profit mark-up to the supplier&apos;s direct and indirect costs to arrive at the arm&apos;s length price.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It fits <strong>contract/toll manufacturing</strong>, sale of semi-finished goods, long-term supply arrangements, and certain low-risk services.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Reliable <strong>gross-margin comparables</strong> are hard to find in public data, which is why TNMM is often used instead even for a textbook CPM fact pattern.</li>
                    <li style={{ marginBottom: 0 }}>What sits inside the cost base (pass-through costs, forex, abnormal items) determines whether the mark-up comparison is even meaningful.</li>
                  </ul>
                </div>

                <p>Of the five methods prescribed under Rule 10B for testing an arm&apos;s length price in India, the Cost Plus Method is the one most closely tied to how a manufacturer or service provider actually prices a transaction in commercial practice: cost plus a margin. That familiarity makes it conceptually the most intuitive method for contract manufacturing and similar arrangements, but in practice it is also one of the harder methods to apply cleanly, because the reliability of the result depends entirely on getting the cost base and the comparable mark-up right. This is a companion deep-dive to our <Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>overview of all five transfer pricing methods</Link>, which introduces CPM alongside CUP, RPM, PSM, and TNMM; this post goes further into when CPM specifically is the most appropriate method and how the computation actually works.</p>

                <h2>How CPM Works Under Rule 10B(1)(c)</h2>
                <p>Rule 10B(1)(c) of the Income Tax Rules, 1962 lays out CPM in essentially three steps: identify the direct and indirect costs of production incurred by the supplier in a controlled transaction, determine the normal gross profit mark-up earned in a comparable uncontrolled transaction (either by the same enterprise with an unrelated party, or between two unrelated enterprises), and add that mark-up percentage to the cost base to arrive at the arm&apos;s length price. Adjustments are then made for material differences between the controlled and uncontrolled transactions that would affect the mark-up, such as functional differences, contractual terms, or market conditions, and the result is compared against the price actually charged.</p>
                <p>The output is a gross-margin figure, specifically gross profit as a percentage of cost of production, which is a narrower and more exacting benchmark than the net-margin comparison used in TNMM.</p>

                <h2>When CPM Is the Most Appropriate Method</h2>
                <p>CPM tends to be the most defensible choice where the tested party performs a relatively routine, cost-driven function and a genuine mark-up comparable is available. Common fact patterns include:</p>
                <ul>
                  <li><strong>Contract and toll manufacturing:</strong> the Indian entity manufactures goods to a related party&apos;s specification, using raw materials or designs supplied by (or on account of) the associated enterprise, and bears limited market or inventory risk.</li>
                  <li><strong>Sale of semi-finished goods between associated enterprises:</strong> where the entity further processes, or receives further-processed, intermediate goods within the group.</li>
                  <li><strong>Long-term supply or purchase agreements:</strong> where pricing is structured around a cost-plus formula in the underlying commercial contract itself.</li>
                  <li><strong>Certain low-risk services:</strong> engineering support, technical assistance, and back-office or shared-service functions provided on a cost-plus basis to group entities, where the service provider does not carry significant market risk.</li>
                </ul>
                <p>CPM is generally less suitable where the tested party owns valuable intangibles, bears meaningful market or inventory risk, or where accounting practices among available comparables differ too much for a clean gross-margin comparison; in those situations RPM, TNMM, or PSM (depending on the transaction) tend to be more reliable.</p>

                <h2>Why TNMM Often Wins Out in Practice</h2>
                <p>A recurring theme in Indian transfer pricing practice is that CPM is conceptually the right method for a contract manufacturer, but gets displaced by TNMM at the documentation stage. The reason is data availability: gross profit depends on where a company draws the line between cost of goods sold and operating expenses below the gross-profit line, and that classification is rarely disclosed consistently across companies in public financial databases. Two otherwise-comparable manufacturers can report very different gross margins purely because one capitalises certain overheads into cost of sales and the other expenses them below the line, with no real economic difference between them.</p>
                <p>TNMM sidesteps much of this by comparing net operating margins, which are less sensitive to where a particular cost is classified, provided the classification differences do not distort the operating-profit line itself. This is why, even for a textbook contract-manufacturing fact pattern, a benchmarking study will often end up applying TNMM with an operating-profit-to-cost profit level indicator rather than a strict CPM gross mark-up, simply because reliable CPM comparables cannot be assembled.</p>

                <h2>What Belongs in the Cost Base</h2>
                <p>Getting the cost base right is the single most common source of dispute in a CPM analysis. Items that typically need separate, explicit treatment include:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Item</th><th style={thStyle}>Typical Treatment</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Pass-through or reimbursed expenses</td><td style={tdStyle}>Usually excluded from the cost base, since no mark-up is expected on amounts merely recovered from the associated enterprise at cost</td></tr>
                      <tr><td style={tdAltStyle}>Abnormal or non-recurring costs</td><td style={tdAltStyle}>Generally excluded or separately adjusted, so a one-off cost spike does not distort the mark-up for the tested year</td></tr>
                      <tr><td style={tdStyle}>Foreign exchange gains or losses</td><td style={tdStyle}>Needs consistent treatment between the tested party and comparables; including it for one and not the other skews the comparison</td></tr>
                      <tr><td style={tdAltStyle}>Depreciation and overheads</td><td style={tdAltStyle}>Included where they reasonably relate to the production function being tested, allocated on a consistent, defensible basis</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2>Worked Example: A Contract Manufacturer</h2>
                <p>Assume an Indian entity manufactures components exclusively for its overseas parent under a toll manufacturing arrangement, bearing no inventory or market risk.</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Particulars</th><th style={thStyle}>Amount</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Direct materials and labour</td><td style={tdStyle}>Rs 6 crore</td></tr>
                      <tr><td style={tdAltStyle}>Production overheads</td><td style={tdAltStyle}>Rs 1.5 crore</td></tr>
                      <tr><td style={tdStyle}><strong>Total cost of production</strong></td><td style={tdStyle}><strong>Rs 7.5 crore</strong></td></tr>
                      <tr><td style={tdAltStyle}>Amount invoiced to parent</td><td style={tdAltStyle}>Rs 8.25 crore</td></tr>
                      <tr><td style={tdStyle}>Gross profit</td><td style={tdStyle}>Rs 0.75 crore</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>The gross mark-up on cost works out to Rs 0.75 crore / Rs 7.5 crore = <strong>10%</strong>. If comparable independent contract manufacturers in the same industry are found, after screening and adjustments, to earn a median gross mark-up of 8.5% on cost, the tested company&apos;s 10% mark-up sits above the benchmark and the pricing is likely supportable, subject to the reliability of the comparables and consistent cost-base treatment on both sides of the comparison.</p>

                <h2>Documentation Expectations</h2>
                <p>Where CPM is applied, the transfer pricing study should clearly set out the cost base and how it was arrived at, the comparable companies or transactions used for the mark-up and why they were selected, any comparability adjustments made, and a reasoned explanation of why CPM was chosen over TNMM or another method for this particular transaction. This method-selection reasoning matters as much as the final mark-up figure if the file is picked up for a <Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>transfer pricing audit</Link>, and where the transaction value crosses the applicable threshold, the analysis feeds directly into <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help applying CPM to a manufacturing or services arrangement?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare method-selection memoranda, cost-base workpapers, and benchmarking studies for Indian companies with cross-border related-party transactions.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/profit-split-method-psm-in-transfer-pricing-a-practical-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Profit Split Method (PSM): A Practical Guide</Link></li>
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

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'TNMM: Transactional Net Margin Method Explained (India)',
  description: 'How TNMM works under Rule 10B, why it is the default method for Indian captive service providers and IT/ITES companies, profit level indicators, comparable selection, and a worked example.',
  keywords: [
    'TNMM India', 'transactional net margin method', 'TNMM transfer pricing',
    'TNMM method example', 'profit level indicator transfer pricing',
    'TNMM captive service provider', 'operating margin transfer pricing India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tnmm-transactional-net-margin-method-india' },
  openGraph: {
    title: 'TNMM: Transactional Net Margin Method Explained (India)',
    description: 'How TNMM works, why it is the default for captive service providers, and a worked margin example.',
    url: 'https://agrawalkhandelwal.com/blog/tnmm-transactional-net-margin-method-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNMM Explained (India)',
    description: 'Profit level indicators, comparable selection, and a worked TNMM margin example.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TNMM: Transactional Net Margin Method Explained (India)', 'tnmm-transactional-net-margin-method-india')

const articleLd = buildArticleLd({
  headline: 'TNMM: Transactional Net Margin Method Explained (India)',
  description: 'How TNMM works under Rule 10B, why it is the default method for Indian captive service providers, profit level indicators, comparable selection, and a worked example.',
  datePublished: '2026-09-14',
  slug: 'tnmm-transactional-net-margin-method-india',
})

const faqs: [string, string][] = [
  ['Why is TNMM the most commonly used transfer pricing method in India?', 'TNMM tolerates more functional and accounting differences between the tested party and comparables than CUP, RPM, or CPM, and net-margin data is far more accessible from public databases than gross-margin data. This makes it practical for captive service providers, software companies, and routine distributors where clean gross-margin comparables are hard to find.'],
  ['What is a profit level indicator (PLI) in TNMM?', 'A PLI is the ratio used to measure the tested party\'s net margin, chosen to suit the function performed. Operating profit to operating cost (OP/OC) is standard for cost-plus service providers such as captive software or ITES centres. Operating profit to sales (OP/Sales) is standard for distributors and resellers.'],
  ['Who should be the tested party in a TNMM analysis?', 'Normally the less complex party to the transaction, the one with the simpler functional, asset, and risk profile and for whom the most reliable comparable data is available. For an Indian captive service provider transacting with a foreign principal, the Indian entity is almost always the tested party.'],
  ['How many comparable companies are needed for a TNMM benchmarking study?', 'There is no fixed statutory minimum, but a defensible study typically works with a reasonably sized final set after applying qualitative and quantitative filters (functional comparability, related-party transaction thresholds, persistent losses, data availability). A set that is too thin invites the Transfer Pricing Officer to challenge the search process itself.'],
  ['Can the Transfer Pricing Officer reject a taxpayer\'s TNMM comparables?', 'Yes. Comparable rejection and the addition of fresh comparables by the TPO is one of the most common sources of transfer pricing disputes in India. The accept/reject rationale in the taxpayer\'s own search matters as much as the final margin, since it is the first thing scrutinised in an audit.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function TNMMBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>TNMM: Transactional Net Margin Method Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 14, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>TNMM compares the tested party&apos;s <strong>net operating margin</strong> against comparable independent companies, one of the 5 methods prescribed under Rule 10B.</li>
                  <li style={{ marginBottom: '0.4rem' }}>It is the default choice for Indian captive service providers, software development centres, and ITES businesses because net-margin comparable data is easier to source than gross-margin data.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Choosing the right profit level indicator (OP/OC vs OP/Sales) and identifying the correct tested party matters as much as the comparable set itself.</li>
                  <li style={{ marginBottom: 0 }}>Comparable rejection by the Transfer Pricing Officer is the single most common source of TNMM disputes; the search-and-rejection rationale needs to be documented, not just the final margin.</li>
                </ul>
              </div>

              <p>TNMM is the workhorse of Indian transfer pricing. Most captive service providers, software development centres, and routine distributors end up using it, not because it is the theoretically purest method, but because it tolerates the kind of functional and accounting differences that make CUP, RPM, or CPM impractical in real-world comparable searches.</p>

              <h2>What TNMM Tests</h2>
              <p>TNMM compares the net operating margin earned by the tested party in a controlled transaction with the net operating margin earned by independent companies performing similar functions. Unlike CUP (which tests price) or RPM/CPM (which test gross margins), TNMM works at the net-profit level, after operating expenses. This makes it more forgiving of minor differences in product mix, accounting classification, and contract structure between the tested party and its comparables, provided those differences don&apos;t materially distort net margins.</p>

              <h2>Choosing the Profit Level Indicator (PLI)</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>PLI</th><th style={thStyle}>Formula</th><th style={thStyle}>Typically Used For</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}><strong>OP/OC</strong> (Operating Profit / Operating Cost)</td><td style={tdStyle}>Operating profit divided by total operating cost</td><td style={tdStyle}>Captive service providers, software development centres, back-office/ITES on a cost-plus basis</td></tr>
                    <tr><td style={tdAltStyle}><strong>OP/Sales</strong> (Operating Margin)</td><td style={tdAltStyle}>Operating profit divided by sales revenue</td><td style={tdAltStyle}>Distributors and resellers whose remuneration is revenue-driven</td></tr>
                    <tr><td style={tdStyle}><strong>Berry Ratio</strong></td><td style={tdStyle}>Gross profit divided by operating expenses</td><td style={tdStyle}>Limited-risk distributors or agents where operating expenses are the key value driver, used less often and more likely to be contested</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The PLI should match how the tested party is actually remunerated and what drives its cost structure. Using OP/Sales for an entity that is really cost-plus remunerated (and vice versa) is a common, avoidable error that draws immediate scrutiny.</p>

              <h2>Identifying the Tested Party</h2>
              <p>TNMM is applied to the &quot;tested party&quot;, ideally the less complex entity in the transaction, the one whose functions, assets, and risks are simplest to benchmark and for whom reliable comparable data exists. For an Indian captive software development centre serving a foreign parent, the Indian entity is almost always the tested party since its limited-risk, cost-plus profile is easier to benchmark than the foreign principal&apos;s. Getting this wrong, or being unable to justify it, undermines the entire analysis regardless of how clean the comparable set is.</p>

              <h2>Building the Comparable Set</h2>
              <p>A TNMM study typically starts from a database search (Prowess, Capitaline, or similar), then applies qualitative filters, functional comparability, similar business description, absence of related-party transactions above a threshold, and quantitative filters, data availability, positive net worth, no persistent losses, and export-turnover filters where relevant for captive units. Each rejected company needs a documented reason. A thin or poorly justified final set is the most frequent point of dispute; the Transfer Pricing Officer routinely adds back rejected comparables or applies fresh filters of its own during assessment.</p>

              <h2>Worked Example: Captive IT Services Centre</h2>
              <p>An Indian company provides software-testing services exclusively to its overseas parent, bears limited market risk, and is remunerated on a cost-plus basis.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Particulars</th><th style={thStyle}>Amount</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Employee costs</td><td style={tdStyle}>Rs 8 crore</td></tr>
                    <tr><td style={tdAltStyle}>Rent, technology, and administration</td><td style={tdAltStyle}>Rs 2 crore</td></tr>
                    <tr><td style={tdStyle}><strong>Total operating cost</strong></td><td style={tdStyle}><strong>Rs 10 crore</strong></td></tr>
                    <tr><td style={tdAltStyle}>Amount invoiced to parent</td><td style={tdAltStyle}>Rs 11.20 crore</td></tr>
                    <tr><td style={tdStyle}>Operating profit</td><td style={tdStyle}>Rs 1.20 crore</td></tr>
                  </tbody>
                </table>
              </div>
              <p>OP/OC works out to Rs 1.20 crore / Rs 10 crore = <strong>12%</strong>. Suppose the benchmarking study identifies comparable independent software service companies with a median margin of 10.5% on operating cost after filters and adjustments. The tested company&apos;s 12% sits above the comparable median, so the pricing is broadly supportable, subject to the quality of the comparables selected. If the invoiced amount had instead been Rs 10.70 crore (a 7% margin, below the benchmark), the study would quantify the shortfall: a 10.5% mark-up on Rs 10 crore cost implies arm&apos;s length revenue of Rs 11.05 crore, showing precisely how much the company under-billed.</p>

              <h2>Where TNMM Analyses Run Into Trouble</h2>
              <p>The most common failure points are not the arithmetic but the supporting judgement calls: choosing a PLI that doesn&apos;t match the actual remuneration model, misclassifying pass-through or reimbursed costs inside the operating cost base, selecting a tested party without a documented functional analysis, and a comparable search with weak or inconsistent accept/reject reasoning. A defensible TNMM study documents each of these decisions, not just the final margin, because a <Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>transfer pricing audit</Link> typically starts by testing exactly these assumptions.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need a TNMM benchmarking study for your captive entity?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare TNMM benchmarking studies, comparable searches, and Form 3CEB documentation for Indian captive service providers and distributors.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>All 5 Transfer Pricing Methods Explained</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-it-services-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing for IT Services Companies</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Audit: Handling a Transfer Pricing Assessment</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

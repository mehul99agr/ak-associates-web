import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Comparable Uncontrolled Price (CUP) Method: India Transfer Pricing Guide',
  description: 'How the CUP method works under Rule 10B, internal vs external CUP, when it fits loans, royalties, and commodity transactions, comparability adjustments, and a worked example.',
  keywords: [
    'comparable uncontrolled price method', 'CUP method transfer pricing',
    'CUP method India', 'internal CUP external CUP', 'CUP transfer pricing example',
    'arm\'s length price loan royalty transfer pricing',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/comparable-uncontrolled-price-method-cup-india' },
  openGraph: {
    title: 'Comparable Uncontrolled Price (CUP) Method: India Guide',
    description: 'Internal vs external CUP, when it fits loans/royalties/commodities, and a worked example.',
    url: 'https://agrawalkhandelwal.com/blog/comparable-uncontrolled-price-method-cup-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CUP Method Explained (India)',
    description: 'Internal vs external CUP, comparability adjustments, and a worked loan-pricing example.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Comparable Uncontrolled Price (CUP) Method: India Transfer Pricing Guide', 'comparable-uncontrolled-price-method-cup-india')

const articleLd = buildArticleLd({
  headline: 'Comparable Uncontrolled Price (CUP) Method: India Transfer Pricing Guide',
  description: 'How the CUP method works under Rule 10B, internal vs external CUP, when it fits loans, royalties, and commodity transactions, comparability adjustments, and a worked example.',
  datePublished: '2026-09-16',
  slug: 'comparable-uncontrolled-price-method-cup-india',
})

const faqs: [string, string][] = [
  ['What is the CUP method in transfer pricing?', 'The Comparable Uncontrolled Price method compares the price charged in a related-party transaction directly with the price charged in a comparable transaction between independent parties, or between the taxpayer and an independent party. It tests price itself, unlike TNMM, RPM, or CPM, which test profit margins.'],
  ['What is the difference between internal and external CUP?', 'An internal CUP exists when the same taxpayer sells the same or similar product or service to both a related party and an independent party under comparable conditions. An external CUP relies on price data from transactions between two unrelated third parties, such as published market quotations or independent licence agreements. Internal CUP is generally considered more reliable because it removes cross-company differences entirely.'],
  ['When is CUP the most appropriate transfer pricing method?', 'CUP works best where a genuinely comparable transaction exists with minimal adjustment needed: intra-group loans (against comparable third-party borrowing), royalty and licence payments (against comparable independent agreements), and commodity transactions with observable market prices. It is rarely usable for differentiated products or services where no close market comparable exists.'],
  ['What adjustments does a CUP analysis usually require?', 'Adjustments for differences in contract terms, volume, timing, currency, credit period, geographic market, and, for loans specifically, tenure, currency, borrower credit rating, security, and subordination. Even small unadjusted differences can undermine a CUP comparison, since it tests price directly rather than a more forgiving profit-level measure.'],
  ['Why isn\'t CUP used more often for Indian intra-group services?', 'Genuinely comparable uncontrolled prices are hard to find for most services and intangibles because pricing typically depends on the specific relationship, scale, and risk allocation involved, factors that rarely repeat identically between two independent parties. This is why CUP tends to be reserved for loans, royalties, and commodities, while TNMM is used for most service transactions.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function CUPBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Comparable Uncontrolled Price (CUP) Method: India Guide</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 16, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>CUP compares the <strong>price</strong> charged in a related-party transaction directly against a comparable uncontrolled transaction, the most direct of the 5 Rule 10B methods when a genuine comparable exists.</li>
                  <li style={{ marginBottom: '0.4rem' }}>An <strong>internal CUP</strong> (same taxpayer, related and independent customers) is more reliable than an <strong>external CUP</strong> (third-party market data).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Best suited to intra-group loans, royalties and licence fees, and commodity transactions where observable market pricing exists.</li>
                  <li style={{ marginBottom: 0 }}>Even small unadjusted differences in contract terms, timing, volume, or currency can undermine a CUP comparison, since it tests price rather than a more forgiving profit margin.</li>
                </ul>
              </div>

              <p>Of the 5 methods prescribed under Rule 10B, CUP is conceptually the most direct: find a price charged between independent parties for something comparable, and use it to test the price charged between related parties. When a genuinely comparable transaction exists, CUP produces the most reliable arm&apos;s length conclusion, precisely because it doesn&apos;t rely on the layer of profit-margin analysis that TNMM, RPM, and CPM all require.</p>

              <h2>Internal CUP vs External CUP</h2>
              <p>An <strong>internal CUP</strong> exists when the taxpayer itself sells the same or a similar product or service to both a related party and an independent party under otherwise comparable conditions. This is the strongest form of CUP because the comparison happens within one company&apos;s own transactions, removing most inter-company differences in accounting policy, market positioning, and business scale.</p>
              <p>An <strong>external CUP</strong> draws on price data from transactions between two unrelated third parties, market quotations, published commodity prices, independent licence agreements, or comparable loan transactions reported in financial databases. External CUP is weaker evidence than internal CUP because it requires more adjustment for differences the taxpayer cannot directly observe or control.</p>

              <h2>Where CUP Typically Applies</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Transaction Type</th><th style={thStyle}>Typical CUP Source</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Intra-group loans</td><td style={tdStyle}>Comparable third-party loan yields, adjusted for currency, tenure, credit rating, security</td></tr>
                    <tr><td style={tdAltStyle}>Royalty / licence fees</td><td style={tdAltStyle}>Comparable independent licence agreements for similar intangibles</td></tr>
                    <tr><td style={tdStyle}>Commodity sales/purchases</td><td style={tdStyle}>Published market quotations, adjusted for quality, freight, and timing</td></tr>
                    <tr><td style={tdAltStyle}>Standardised goods</td><td style={tdAltStyle}>Internal CUP where the same product is sold to both related and independent buyers</td></tr>
                  </tbody>
                </table>
              </div>
              <p>CUP is rarely practical for differentiated services or bespoke intangibles, where no close market comparable exists; this is precisely the gap TNMM is designed to fill for the bulk of Indian captive-service and distribution transactions.</p>

              <h2>Adjustments a CUP Analysis Needs</h2>
              <p>Because CUP compares price directly, it is unusually sensitive to differences that a margin-based method would tolerate. A defensible CUP study adjusts for contract terms (volume commitments, exclusivity, payment terms), timing (prices move; a quotation from a different period needs adjustment), currency and geographic market, and, specifically for loans, tenure, currency of denomination, the borrower&apos;s credit rating, security or collateral, and subordination relative to other debt. Skipping these adjustments is the most common reason a CUP comparison gets challenged; a superficially similar transaction with unadjusted differences in even one of these variables is not a reliable comparable.</p>

              <h2>Worked Example: Pricing an Intra-Group Loan</h2>
              <p>An Indian subsidiary borrows USD 5 million from its foreign parent for 3 years, unsecured.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Particulars</th><th style={thStyle}>Detail</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Loan amount and tenure</td><td style={tdStyle}>USD 5 million, 3 years, unsecured</td></tr>
                    <tr><td style={tdAltStyle}>Interest rate charged by parent</td><td style={tdAltStyle}>5.5% per annum</td></tr>
                    <tr><td style={tdStyle}>External CUP: comparable unrelated borrowers</td><td style={tdStyle}>Similarly rated unsecured 3-year USD borrowers pay 5.2%-6.0%</td></tr>
                  </tbody>
                </table>
              </div>
              <p>At 5.5%, the intra-group rate falls within the range observed for comparable independent unsecured borrowers of similar credit standing and tenure, so the pricing is broadly supportable. If the comparable range had instead been built from secured loans or a different tenure, an adjustment would be required before drawing that conclusion; the security and tenure mismatch alone can easily move a benchmark rate by more than a percentage point, which is the kind of gap a margin-based method would absorb but CUP cannot.</p>

              <h2>CUP in the Context of the Other Methods</h2>
              <p>CUP is one part of a broader toolkit; a company may use CUP for its intra-group loans and royalty payments while using TNMM for its services transactions in the same financial year. See the full <Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>comparison of all 5 transfer pricing methods</Link> for how CUP sits alongside RPM, CPM, PSM, and TNMM, and how to document why a given method, and not the others, was the most appropriate choice for each transaction class.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Pricing an intra-group loan, royalty, or commodity transaction?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare CUP benchmarking analyses, loan pricing studies, and Form 3CEB documentation for Indian companies with cross-border related-party transactions.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tnmm-transactional-net-margin-method-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TNMM Explained in Depth</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/resale-price-method-transfer-pricing-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Resale Price Method (RPM) Explained</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Audit: Handling a Transfer Pricing Assessment</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

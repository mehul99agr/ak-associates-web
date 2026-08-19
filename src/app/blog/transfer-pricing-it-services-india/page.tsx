import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transfer Pricing for IT Services (India)',
  description: 'Why TNMM is the default method for Indian IT/ITES captive service providers, limited-risk vs entrepreneur profiles, common TPO disputes over comparables and working capital, and safe harbour fit.',
  keywords: [
    'transfer pricing IT services India', 'transfer pricing software development company',
    'ITES BPO transfer pricing', 'captive service provider transfer pricing',
    'TNMM software company India', 'comparable company selection dispute TPO',
    'working capital adjustment transfer pricing',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/transfer-pricing-it-services-india' },
  openGraph: {
    title: 'Transfer Pricing for IT Services (India)',
    description: 'TNMM as the default method, limited-risk profiles, common TPO disputes, and safe harbour fit for IT/ITES captives.',
    url: 'https://agrawalkhandelwal.com/blog/transfer-pricing-it-services-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transfer Pricing for IT Services (India)',
    description: 'TNMM, comparable selection disputes, and safe harbour fit for captive IT/ITES providers.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Transfer Pricing for IT Services (India)',
  description: 'Why TNMM is the default method for Indian IT/ITES captive service providers, functional profile considerations, common TPO disputes, and safe harbour fit.',
  datePublished: '2026-08-07', dateModified: '2026-08-07',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/transfer-pricing-it-services-india',
}

const faqs: [string, string][] = [
  ['Why is TNMM used for transfer pricing of Indian software companies?', 'TNMM is commonly used because independent net-margin data is more readily available than reliable gross-margin data. It is particularly suitable for routine Indian captive software development and ITES service providers operating on a cost-plus basis.'],
  ['What margin should an Indian IT captive service provider earn?', 'There is no universal settled margin. The appropriate margin depends on the service profile, functions, risks, cost base, comparable set, and year-specific market data - it should be tested with a current benchmarking study, not assumed from a prior year or another company.'],
  ['Can a software product company be compared with a software services company?', 'Usually not without strong evidence of comparability. Product companies may own intellectual property, earn entrepreneurial returns, and assume materially different risks from routine service providers, making them poor comparables for a captive TNMM analysis.'],
  ['Are foreign exchange gains operating income for IT transfer pricing?', 'The answer depends on the nature of the gain or loss and the consistent facts of the case. Foreign exchange differences closely linked to service-revenue realisation are often analysed differently from financing-related exchange items.'],
  ['Can an ITES company use transfer pricing safe harbour rules?', 'Eligible ITES companies may consider safe harbour if they satisfy the notified conditions. They should compare the prescribed return with an ordinary TNMM result before filing Form 3CEFA.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function TPITServicesBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Transfer Pricing for IT Services and ITES Companies in India</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 7, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Most Indian captive IT and ITES companies are tested as <strong>limited-risk cost-plus</strong> service providers.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>TNMM</strong> is commonly selected because net-margin comparables are more accessible than gross-margin data.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Comparable selection and functional profiling drive most disputes with the Transfer Pricing Officer.</li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/safe-harbour-rules-transfer-pricing-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Safe harbour</Link> may offer certainty for eligible companies, but current rates must be compared against market results.</li>
                </ul>
              </div>

              <p>Many Indian software development centres, BPO units, and KPO operations provide services exclusively or primarily to an overseas parent or group company. The Indian entity employs staff, incurs delivery costs, and is remunerated under a cost-plus agreement. A typical limited-risk captive model has these characteristics: the overseas group owns the customer relationship and product strategy, the Indian entity performs development, testing, support, or analytics work, it does not own the core product IP, and it earns a routine return on relevant operating cost. This model must reflect reality - if the Indian company develops valuable IP, negotiates directly with customers, or bears significant business risk, a simple limited-risk description may not be sustainable.</p>

              <h2>Why TNMM Is Usually Chosen</h2>
              <p><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>TNMM</Link> is commonly used for software development and ITES businesses because it compares the Indian entity&apos;s net operating margin with comparable independent companies. The usual tested-party margin is operating profit to operating cost - practical because public databases generally provide operating-profit data more consistently than reliable gross-profit information. A clean TNMM analysis requires correct classification of operating and non-operating items, a detailed functional/asset/risk analysis, search criteria aligned with the actual service profile, careful comparable-company screening, and consistency between the intercompany agreement and actual conduct.</p>

              <h2>Software Development, ITES, and KPO Are Not Identical</h2>
              <p>Software development may involve coding, testing, maintenance, and product support. ITES/BPO may involve customer support, transaction processing, finance and accounting support, or data processing. KPO may involve higher-skill analytics, research, or specialised advisory support. The label used in an agreement is not decisive - a Transfer Pricing Officer will review employee profiles, service descriptions, revenue model, ownership of deliverables, and actual risk allocation. Typical market margin ranges fluctuate with the comparable set, year, service profile, and screening criteria - do not treat any standard percentage as settled without a current benchmarking study.</p>

              <h2>Limited-Risk Provider vs Full-Fledged Entrepreneur</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Factor</th><th style={thStyle}>Limited-Risk Captive Provider</th><th style={thStyle}>Full-Fledged Entrepreneur</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Customer acquisition</td><td style={tdStyle}>Overseas group</td><td style={tdStyle}>Indian company may acquire customers</td></tr>
                    <tr><td style={tdAltStyle}>IP ownership</td><td style={tdAltStyle}>Usually no core IP ownership</td><td style={tdAltStyle}>May develop or own valuable IP</td></tr>
                    <tr><td style={tdStyle}>Market risk</td><td style={tdStyle}>Usually borne by overseas group</td><td style={tdStyle}>Indian company bears market risk</td></tr>
                    <tr><td style={tdAltStyle}>Pricing</td><td style={tdAltStyle}>Cost-plus routine return</td><td style={tdAltStyle}>Entrepreneurial residual profit or loss</td></tr>
                    <tr><td style={tdStyle}>Method outcome</td><td style={tdStyle}>Routine TNMM margin often relevant</td><td style={tdStyle}>Requires more nuanced analysis</td></tr>
                  </tbody>
                </table>
              </div>
              <p>A company cannot claim limited risk merely because it bills a group entity - the contract, board decisions, project-management records, and financial conduct should support the profile.</p>

              <h2>Common TPO Focus Areas</h2>
              <p>Comparable-company selection is the most frequent area of dispute. The taxpayer may choose companies with similar service profiles, while the TPO may include businesses with different products, scale, brand value, intangibles, or risk profiles. Common issues include:</p>
              <ul>
                <li>Inclusion of companies owning significant brands or proprietary products</li>
                <li>Exclusion of companies with extraordinary events such as mergers or acquisitions</li>
                <li>Turnover filters and scale differences</li>
                <li>Related-party transaction filters</li>
                <li>Functional differences between software products and software services</li>
                <li>Treatment of unusually high-profit comparables</li>
              </ul>
              <p><strong>Working-capital adjustments</strong> can also be material - a captive service provider with prompt group-company collections may have a different working-capital profile from an independent company with trade receivables and customer-credit exposure. <strong>Foreign exchange gain or loss</strong> treatment is another recurring issue: a gain or loss closely connected to export service revenue may require different analysis from a financing-related foreign exchange item, and the treatment should follow the nature of the item consistently.</p>

              <h2>Related-Party Filters and Segmental Data</h2>
              <p>Comparable companies should have sufficient independent business - a company with substantial related-party transactions may not represent uncontrolled market conditions. Segmental information is equally important: a diversified company may report software products, consulting, cloud platforms, and IT services together, and if a reliable service segment is unavailable, it may not be comparable to a routine captive provider. Maintain clear reject reasons - a one-line statement that a company is &quot;functionally different&quot; is rarely enough. The file should explain whether the difference arises from products, IP ownership, revenue model, customer base, risk assumption, scale, extraordinary events, or unavailable segmental data.</p>

              <h2>Safe Harbour for IT and ITES Companies</h2>
              <p>Safe harbour may be considered by eligible software development and ITES companies that meet the notified requirements, providing a prescribed return and reducing annual benchmarking controversy. The decision is commercial: compare the safe harbour result against an ordinary TNMM result, projected over the applicable multi-year lock-in period. See our <Link href="/blog/safe-harbour-rules-transfer-pricing-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>safe harbour rules guide</Link> for the full eligibility framework and opt-in process.</p>

              <h2>Year-End Operating Controls</h2>
              <p>A finance controller should not wait for Form 3CEB season to test the margin. Review the cost-plus outcome quarterly, focusing on the actual operating-cost base versus the contractual cost base, excluded pass-through or reimbursed costs, employee utilisation and bench costs, foreign exchange treatment, and related-party invoices raised and collected. Where international transactions exceed <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Rs 1 crore, Form 3CEB is required</Link> and due October 31 - a well-managed year-end true-up is usually easier to defend than a large adjustment booked after the accounts are closed.</p>

              <h2>Documentation That Withstands Review</h2>
              <p>A robust file for an IT or ITES captive should include the intercompany agreement, service descriptions, organisation chart, employee data, project-delivery flow, invoices, cost-base workings, and the transfer pricing study. The strongest documentation links the legal agreement to operational evidence - if the agreement says the overseas parent controls product risk, the records should show that it controls product roadmap, customer commitments, and commercial decisions.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Run a captive IT or ITES service provider?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare TNMM benchmarking, comparable analysis, and Form 3CEB documentation for Indian software and ITES service providers.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing Services</Link>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map(([q, a], i) => (
                  <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Methods Explained</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/safe-harbour-rules-transfer-pricing-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Safe Harbour Rules for Transfer Pricing</Link></li>
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

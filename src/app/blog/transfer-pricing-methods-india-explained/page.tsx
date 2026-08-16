import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transfer Pricing Methods Explained: CUP, TNMM, RPM, CPM & PSM',
  description: 'The 5 methods prescribed under Rule 10B for testing arm\'s length pricing in India: what each tests, when it is the most appropriate method, and a worked TNMM example for a captive service provider.',
  keywords: [
    'transfer pricing methods India', 'TNMM India', 'CUP method transfer pricing',
    'resale price method India', 'cost plus method transfer pricing', 'profit split method India',
    'most appropriate method rule 10B', 'arm\'s length price India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/transfer-pricing-methods-india-explained' },
  openGraph: {
    title: 'Transfer Pricing Methods Explained: CUP, TNMM, RPM, CPM & PSM',
    description: 'What each of the 5 prescribed methods tests, when to use which, and a worked TNMM example.',
    url: 'https://agrawalkhandelwal.com/blog/transfer-pricing-methods-india-explained',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transfer Pricing Methods Explained (India)',
    description: 'CUP, RPM, CPM, PSM, TNMM - what each tests and when to use it, with a worked example.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Transfer Pricing Methods Explained: CUP, TNMM, RPM, CPM & PSM',
  description: 'The 5 methods prescribed under Rule 10B for testing arm\'s length pricing in India, when each is the most appropriate method, and a worked TNMM example.',
  datePublished: '2026-07-30', dateModified: '2026-07-30',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/transfer-pricing-methods-india-explained',
}

const faqs: [string, string][] = [
  ['Which transfer pricing method is most commonly used in India?', 'TNMM is commonly used, especially for captive service providers, software development companies, ITES businesses, and routine distributors. It is popular because reliable net-margin comparable data is more accessible than gross-margin or transaction-price data.'],
  ['When should an Indian company use CUP for transfer pricing?', 'CUP is most suitable where a genuinely comparable uncontrolled price exists, such as for loans, royalties, commodities, or standardised products. The comparison must account for material differences in contract terms, timing, volume, currency, and risk.'],
  ['Is TNMM suitable for a captive software development centre in India?', 'Yes, TNMM is frequently used for Indian captive software development centres operating on a cost-plus basis with limited risk. The analysis typically compares operating profit to operating cost against comparable independent software service providers.'],
  ['Can one company use different transfer pricing methods for different transactions?', 'Yes. A company may apply different most appropriate methods to different classes of international transactions - for example, TNMM for services and CUP for an intra-group loan, within the same financial year.'],
  ['Does using TNMM eliminate the need for detailed documentation?', 'No. TNMM still requires a functional analysis, comparable company selection, margin computation, and a reasoned explanation of why the method is appropriate. Weak comparable selection is one of the most common reasons for disputes with the Transfer Pricing Officer.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function TPMethodsBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Transfer Pricing Methods in India: CUP, RPM, CPM, PSM and TNMM Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 30, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Rule 10B prescribes <strong>5 methods</strong> for determining an arm&apos;s length price - the &quot;most appropriate method&quot; depends on the transaction, not preference.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>TNMM</strong> is the most commonly used method for Indian captive service and distribution businesses because net-margin data is more accessible than gross-margin data.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Method selection should be documented with a written memo explaining why the chosen method - and not the others - was used.</li>
                  <li style={{ marginBottom: 0 }}>A defensible method selection matters as much as the final margin number in an audit.</li>
                </ul>
              </div>

              <p>Indian transfer pricing documentation should explain why a particular method is the most appropriate method for the tested transaction - not simply whichever method produces the most convenient result. Rule 10B recognises five methods, and the right choice depends on the transaction type, available comparables, and the functions, assets, and risks of each party.</p>

              <h2>The Five Methods at a Glance</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Method</th><th style={thStyle}>What Is Tested</th><th style={thStyle}>Usually Suitable For</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}><strong>CUP</strong></td><td style={tdStyle}>Price charged in a comparable uncontrolled transaction</td><td style={tdStyle}>Loans, royalties, commodities, licence fees</td></tr>
                    <tr><td style={tdAltStyle}><strong>RPM</strong></td><td style={tdAltStyle}>Gross margin earned by a reseller</td><td style={tdAltStyle}>Pure distributors buying and reselling finished goods</td></tr>
                    <tr><td style={tdStyle}><strong>CPM</strong></td><td style={tdStyle}>Gross mark-up on relevant costs</td><td style={tdStyle}>Contract manufacturing, routine production, certain services</td></tr>
                    <tr><td style={tdAltStyle}><strong>PSM</strong></td><td style={tdAltStyle}>Combined profit allocated between related parties</td><td style={tdAltStyle}>Highly integrated businesses with unique contributions</td></tr>
                    <tr><td style={tdStyle}><strong>TNMM</strong></td><td style={tdStyle}>Net operating margin of the tested party</td><td style={tdStyle}>Captive services, software development, ITES, most distributors</td></tr>
                  </tbody>
                </table>
              </div>
              <p>A company may need different methods for different transaction classes in the same year - for example, TNMM for software development services and CUP for an intra-group loan.</p>

              <h2>Comparable Uncontrolled Price (CUP)</h2>
              <p>CUP compares the price charged in a related-party transaction with the price charged in a comparable transaction between independent parties. It tests price itself rather than a downstream profit outcome, which usually makes it the most direct method when a genuine comparable exists.</p>
              <p>An <strong>internal CUP</strong> may exist where the Indian company sells the same product to both its foreign parent and independent customers. An <strong>external CUP</strong> may come from market quotations, independent licensing arrangements, comparable loan yields, or published commodity prices. CUP is particularly useful for intra-group loans (compared against similar third-party borrowing), royalty payments (against comparable licence agreements), and commodity transactions, subject to adjustments for quality, contract terms, freight, timing, and volume. CUP is sensitive to small differences in contractual terms - a loan comparison should consider currency, tenure, borrower credit rating, security, subordination, and repayment terms.</p>

              <h2>Resale Price Method (RPM)</h2>
              <p>RPM begins with the price at which a product bought from an associated enterprise is resold to an independent customer, then reduces an appropriate gross margin to arrive at the arm&apos;s length purchase price. It is generally suitable where the Indian entity is a routine distributor that purchases finished goods, resells without material processing, does not own significant marketing intangibles, and does not undertake substantial product development.</p>
              <p>RPM becomes less reliable when accounting classifications vary among comparables - one company may classify freight, warranty, or sales-support costs differently from another. A distributor that undertakes significant local marketing, provides installation, or modifies products may be too complex for a straightforward RPM analysis.</p>

              <h2>Cost Plus Method (CPM)</h2>
              <p>CPM starts with the supplier&apos;s direct and indirect costs and adds an arm&apos;s length gross mark-up. It is often relevant for contract manufacturing, toll manufacturing, engineering and technical support, and certain back-office services. The key question is which costs belong in the relevant cost base - pass-through costs, reimbursed expenses, abnormal costs, and foreign exchange items may need separate treatment.</p>
              <p>CPM is conceptually appealing for a contract manufacturer, but reliable gross-profit comparables can be hard to obtain because public financial data often does not provide consistent gross-margin information. In practice, TNMM is frequently selected instead because net-profit data is more accessible.</p>

              <h2>Profit Split Method (PSM)</h2>
              <p>PSM evaluates the combined profit from controlled transactions and divides it between associated enterprises according to their relative contributions. It is not a routine fallback - it is generally appropriate where both parties make unique and valuable contributions that cannot be reliably benchmarked separately, such as joint intangible development, highly integrated operations, or where a one-sided method would overlook important contributions by the other participant.</p>
              <p>PSM requires defining the combined profit pool, identifying routine returns where appropriate, and establishing a credible allocation key - revenue, costs, assets, development effort, or employee compensation may all be relevant depending on the facts.</p>

              <h2>Transactional Net Margin Method (TNMM)</h2>
              <p>TNMM compares the net operating margin of the tested party with margins earned by comparable independent companies. It is widely used in India because it tolerates more transactional differences than CUP, RPM, or CPM, provided those differences do not materially affect net margins or can be addressed through adjustments. Common profit level indicators include operating profit to operating cost (used for captive service providers) and operating profit to sales (used for distributors). The tested party should generally be the less complex entity with the simpler functional profile and more reliable comparable data.</p>

              <h2>Worked TNMM Example: An Indian Captive Service Provider</h2>
              <p>Assume an Indian company provides software-testing services exclusively to its overseas parent. It does not own the software product, bears limited market risk, and is remunerated on a cost-plus basis.</p>
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
              <p>The operating profit to operating cost margin is Rs 1.20 crore / Rs 10 crore = <strong>12%</strong>. Suppose the transfer pricing study identifies comparable independent software service companies, and after applying filters and adjustments, the arm&apos;s length range supports a median margin of 10.5% on operating cost. The tested company&apos;s 12% margin sits above the comparable median, so the pricing is likely supportable, subject to the quality of comparables selected.</p>
              <p>If the same company had invoiced only Rs 10.70 crore, its margin would have been 7% - below the benchmark. The study would then quantify the shortfall: a 10.5% mark-up on a Rs 10 crore cost base implies arm&apos;s length revenue of Rs 11.05 crore, showing exactly how much the company under-billed. The cost base, operating-profit calculation, and comparable selection must all be consistent - a margin cannot be defended by applying one accounting policy to the tested party and another to the comparables.</p>

              <h2>Document the Method Selection Before Filing</h2>
              <p>For each material transaction, maintain a concise method-selection memorandum covering the transaction and contractual terms, functions/assets/risks of each party, why the selected method is the most appropriate, why alternatives are less reliable, the search strategy and accept/reject rationale for comparables, and the final arm&apos;s length conclusion. Where international transactions exceed <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Rs 1 crore, Form 3CEB is required</Link> and due October 31 - the underlying analysis should not be prepared only after a notice arrives.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help selecting and defending your TP method?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare method-selection memoranda, benchmarking studies, and Form 3CEB documentation for Indian companies with cross-border related-party transactions.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-it-services-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing for IT Services Companies</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-documentation-checklist-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Documentation Checklist</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

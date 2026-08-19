import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Form 3CEB: Due Date, Filing Process & Penalties (FY 2026-27)',
  description: 'Who must file Form 3CEB, what the CA certifies, the October 31 due date, the e-filing process, and the Rs 1 lakh penalty under Section 271BA for late or non-filing.',
  keywords: [
    'form 3CEB', 'form 3CEB due date', 'form 3CEB filing process', 'form 3CEB penalty',
    'section 92E India', 'section 271BA penalty', 'transfer pricing audit report',
    'accountant report transfer pricing India', 'form 3CEB threshold Rs 1 crore',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-3ceb-transfer-pricing-audit-report' },
  openGraph: {
    title: 'Form 3CEB: Due Date, Filing Process & Penalties (FY 2026-27)',
    description: 'Who must file, the October 31 due date, the e-filing process, and the Rs 1 lakh penalty for missing it.',
    url: 'https://agrawalkhandelwal.com/blog/form-3ceb-transfer-pricing-audit-report',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 3CEB: Due Date, Process & Penalties (FY 2026-27)',
    description: 'Who must file, when it is due, and what happens if you miss it.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Form 3CEB: Due Date, Filing Process & Penalties (FY 2026-27)',
  description: 'Who must file Form 3CEB, what the CA certifies, the October 31 due date, the e-filing process, and the Rs 1 lakh penalty under Section 271BA.',
  datePublished: '2026-08-09', dateModified: '2026-08-09',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/form-3ceb-transfer-pricing-audit-report',
}

const faqs: [string, string][] = [
  ['Who needs to file Form 3CEB in India?', 'An Indian taxpayer generally needs Form 3CEB where aggregate international transactions with associated enterprises exceed Rs 1 crore in a financial year. It can also apply to specified domestic transactions above the applicable threshold. A loss-making company or one claiming a tax holiday must still comply if it has qualifying transactions - profitability is not the test.'],
  ['What is the due date for Form 3CEB for FY 2026-27?', 'The due date is October 31, 2027, one month ahead of the income tax return due date for taxpayers with transfer pricing reporting, which generally falls on November 30. Build your internal timeline around the original statutory date rather than assuming a CBDT extension will be issued.'],
  ['Who uploads Form 3CEB on the income tax portal?', 'The appointed Chartered Accountant uploads Form 3CEB using their own login on the e-filing portal. The filing is not complete until the assessee separately logs in and accepts the uploaded report - a step that is frequently missed. Always obtain and retain the acceptance acknowledgment.'],
  ['What is the penalty for not filing Form 3CEB?', 'Section 271BA of the Income Tax Act imposes a flat penalty of Rs 1 lakh for failure to furnish the Section 92E accountant\'s report. This is not tied to the transaction value. Missing Form 3CEB can also trigger scrutiny and weaken your position when defending the transfer pricing during an assessment.'],
  ['Is Form 3CEB enough for transfer pricing compliance?', 'No. Form 3CEB is the CA-certified statutory report, but you must separately maintain transaction-level documentation known as the Local File, which supports the arm\'s length position reported in the form. Depending on group revenue, Master File and Country-by-Country Reporting obligations may also apply.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function Form3CEBBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Form 3CEB: Due Date, Filing Process and Penalties for FY 2026-27</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 9, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Form 3CEB is required where international transactions with associated enterprises exceed <strong>Rs 1 crore</strong> in a financial year.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The CA uploads the report on the e-filing portal, then the assessee must separately <strong>accept</strong> it - a step commonly missed.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Due date is <strong>October 31</strong> following the financial year, one month before the transfer pricing ITR deadline.</li>
                  <li style={{ marginBottom: 0 }}>Late or non-filing attracts a flat <strong>Rs 1 lakh penalty</strong> under Section 271BA, regardless of transaction value.</li>
                </ul>
              </div>

              <p>Form 3CEB is the accountant&apos;s report for transfer pricing compliance under Section 92E. It confirms that a taxpayer with specified related-party transactions has obtained a report from a Chartered Accountant and has furnished the prescribed particulars of those transactions. It is not an income tax return, and it is not a substitute for <Link href="/blog/transfer-pricing-documentation-checklist-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>transfer pricing documentation</Link> - it is a separate CA-certified report that lists the transactions and the method used to test whether the pricing is at arm&apos;s length.</p>

              <h2>Who Must File Form 3CEB</h2>
              <p>The core trigger is international transactions with associated enterprises. Form 3CEB is required where the aggregate value of such transactions exceeds <strong>Rs 1 crore</strong> during the financial year. This commonly includes:</p>
              <ul>
                <li>Purchase or sale of goods with a foreign group company</li>
                <li>Management, technical, accounting, marketing, or IT support services</li>
                <li>Royalty, brand, software, or intellectual property payments</li>
                <li>Loans, guarantees, cash-pooling arrangements, or interest payments</li>
                <li>Reimbursements and cost allocations</li>
                <li>Transfer of shares, business assets, or intangible property</li>
                <li>Any other transaction between associated enterprises that affects income, expense, assets, or liabilities</li>
              </ul>
              <p>The obligation can also arise for specified domestic transactions where statutory conditions are met. A common misconception is that Form 3CEB is necessary only where a company has taxable profit - that is incorrect. A loss-making company, a newly incorporated subsidiary, or a company claiming a tax holiday must still comply if it has qualifying transactions.</p>

              <h2>What Counts as an Associated Enterprise</h2>
              <p>The relationship goes beyond identical shareholding. It may arise through direct or indirect participation in management, control, or capital, or through certain financing, dependency, or control situations under the statutory definition. In most MNC structures the relationship is straightforward - an Indian subsidiary transacting with its overseas parent, a fellow subsidiary, or a group service company. But do not stop the analysis at the company chart: a loan, guarantee, exclusive technology arrangement, or dependency on a single supplier may also qualify. Map related entities before the year closes, not when the filing deadline is approaching.</p>

              <h2>What the CA Certifies</h2>
              <p>The CA does not certify that every commercial decision was ideal. The report certifies the prescribed particulars of international and specified domestic transactions and confirms the information has been examined in accordance with the law and rules. The exercise generally involves:</p>
              <ul>
                <li>Identifying all associated enterprises</li>
                <li>Listing each category of reportable transaction</li>
                <li>Reconciling transaction values with the books of account</li>
                <li>Reviewing agreements, invoices, debit notes, and ledger extracts</li>
                <li>Identifying the tested party and transfer pricing method</li>
                <li>Reviewing the arm&apos;s length analysis and reporting the conclusions</li>
              </ul>
              <p>The CA relies on management representations and underlying records - which is why finance teams must maintain a clean transaction trail throughout the year. A vague ledger entry like &quot;group expenses&quot; is not enough. Each entry should identify the group entity, nature of service, agreement reference, invoice basis, and evidence of benefit received.</p>

              <h2>Form 3CEB Due Date for FY 2026-27</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Compliance Item</th><th style={thStyle}>Expected Timing</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Close and reconcile FY 2026-27 related-party data</td><td style={tdStyle}>April - June 2027</td></tr>
                    <tr><td style={tdAltStyle}>Finalise transfer pricing documentation</td><td style={tdAltStyle}>Before Form 3CEB filing</td></tr>
                    <tr><td style={tdStyle}><strong>Furnish Form 3CEB</strong></td><td style={tdStyle}><strong>October 31, 2027</strong></td></tr>
                    <tr><td style={tdAltStyle}>File income tax return (transfer pricing taxpayers)</td><td style={tdAltStyle}>November 30, 2027</td></tr>
                  </tbody>
                </table>
              </div>
              <p>These dates can be extended by CBDT notification, but do not plan around an extension that may not come. Build your internal timetable around the original statutory due date.</p>

              <h2>How Form 3CEB Is Filed</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Step</th><th style={thStyle}>Who</th><th style={thStyle}>What Happens</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Appoint the CA</td><td style={tdStyle}>Assessee</td><td style={tdStyle}>Add or assign the CA for Form 3CEB on the e-filing portal</td></tr>
                    <tr><td style={tdAltStyle}>Prepare the report</td><td style={tdAltStyle}>CA + finance team</td><td style={tdAltStyle}>Reconcile transactions, agreements, and select the TP method</td></tr>
                    <tr><td style={tdStyle}>Upload Form 3CEB</td><td style={tdStyle}>CA</td><td style={tdStyle}>CA uploads using their own portal login and digital signature</td></tr>
                    <tr><td style={tdAltStyle}><strong>Accept the report</strong></td><td style={tdAltStyle}>Assessee</td><td style={tdAltStyle}>Authorised signatory must separately accept it on the portal</td></tr>
                    <tr><td style={tdStyle}>Retain records</td><td style={tdStyle}>Assessee</td><td style={tdStyle}>Keep signed agreements, workings, and the accepted filing PDF</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The acceptance step is the one most often missed. A CA may upload the form, but the filing is not operationally complete until the taxpayer accepts it through the portal. Obtain the acknowledgment and preserve a copy of the accepted filing.</p>

              <h2>Penalty for Late Filing or Non-Filing</h2>
              <p>Under <strong>Section 271BA</strong> of the Income Tax Act, failure to furnish the accountant&apos;s report required under Section 92E attracts a penalty of <strong>Rs 1 lakh</strong>. This is a flat penalty, not a percentage of transaction value - but that does not make the risk minor. Missing Form 3CEB can also trigger scrutiny, delay completion of the assessment, and weaken the taxpayer&apos;s position when defending its transfer pricing. Separate penalties may apply for inaccurate information, failure to maintain documentation, or adjustments made during assessment, so treat Form 3CEB as one layer of a broader compliance framework.</p>

              <h2>How Form 3CEB Connects to the Local File and Master File</h2>
              <p>Form 3CEB is the outward-facing annual report. The <Link href="/blog/master-file-local-file-cbcr-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Local File is the detailed documentation</Link> supporting the transaction pricing, and the Master File gives the tax department a group-level picture of the multinational enterprise.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Document</th><th style={thStyle}>Main Purpose</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Form 3CEB</td><td style={tdStyle}>CA-certified statutory report of what transactions occurred</td></tr>
                    <tr><td style={tdAltStyle}>Local File</td><td style={tdAltStyle}>Transaction-level defence showing why Indian pricing is arm&apos;s length</td></tr>
                    <tr><td style={tdStyle}>Master File</td><td style={tdStyle}>Group-level transfer pricing profile: intangibles, financing, policies</td></tr>
                    <tr><td style={tdAltStyle}>CbCR</td><td style={tdAltStyle}>Jurisdiction-by-jurisdiction revenue, profit, and tax data</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Do not prepare Form 3CEB first and try to construct the Local File afterward. The better sequence is: identify transactions, prepare the Local File analysis, finalise the arm&apos;s length position, and only then complete Form 3CEB using the validated information.</p>

              <h2>Pre-Filing Checklist</h2>
              <p>Start the review before March close. By the time the statutory deadline arrives, group personnel may have changed, agreements may be hard to locate, and foreign headquarters will be focused on their own deadlines. Before filing, confirm:</p>
              <ul>
                <li>Every foreign related party has been identified</li>
                <li>Ledger balances agree with invoices and intercompany confirmations</li>
                <li>Agreements are signed and current for the relevant year</li>
                <li>Service charges have evidence of actual benefit received</li>
                <li>Loan and guarantee arrangements have been separately reviewed</li>
                <li>The transfer pricing method is documented with benchmarking support</li>
                <li>The portal assignment and authorised signatory details are active</li>
                <li>Master File and CbCR applicability have been separately checked</li>
              </ul>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need Form 3CEB filed correctly and on time?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare Form 3CEB, the supporting Local File, and Master File documentation for Indian companies with cross-border related-party transactions.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/master-file-local-file-cbcr-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Master File vs Local File vs CbCR</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-documentation-checklist-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Documentation Checklist for Indian Subsidiaries</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

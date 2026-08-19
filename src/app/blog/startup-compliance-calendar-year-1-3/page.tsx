import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Compliance Calendar (Year 1-3)',
  description: 'Month-by-month and year-by-year compliance roadmap for an Indian startup: GST returns, TDS, MCA annual filings, advance tax, FEMA reporting, ESOP, and DPIIT self-certification.',
  keywords: [
    'startup compliance calendar India', 'startup compliance checklist year 1',
    'MCA annual filing startup', 'AOC-4 MGT-7 due date', 'FC-GPR 30 days',
    'FLA return July 15', 'advance tax instalments India', 'startup compliance roadmap',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/startup-compliance-calendar-year-1-3' },
  openGraph: {
    title: 'Startup Compliance Calendar (Year 1-3)',
    description: 'The recurring, quarterly, and annual compliance rhythm for an Indian Private Limited startup.',
    url: 'https://agrawalkhandelwal.com/blog/startup-compliance-calendar-year-1-3',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Compliance Calendar: Year 1 to Year 3',
    description: 'GST, TDS, MCA filings, advance tax, FEMA, ESOP, and DPIIT - the full operating rhythm.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Startup Compliance Calendar (Year 1-3)', item: 'https://agrawalkhandelwal.com/blog/startup-compliance-calendar-year-1-3' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Startup Compliance Calendar (Year 1-3)',
  description: 'A month-by-month and year-by-year compliance roadmap for an Indian startup from incorporation through year 3.',
  datePublished: '2026-08-13', dateModified: '2026-08-13',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/startup-compliance-calendar-year-1-3',
}

const faqs: [string, string][] = [
  ['What compliances does a Private Limited startup need to do every month?', 'A startup typically needs monthly bookkeeping, bank reconciliation, payroll processing, GST review, and TDS deposit. TDS is generally deposited by the 7th of the following month, while GST filing frequency depends on the taxpayer\'s registration and scheme (monthly or QRMP).'],
  ['When are AOC-4 and MGT-7 due for a startup?', 'Form AOC-4 is generally filed within 30 days of the Annual General Meeting, and Form MGT-7 within 60 days of the AGM. The company must complete its statutory audit and hold the AGM before these deadlines can be calculated.'],
  ['What is the deadline for FC-GPR after foreign investment in an Indian startup?', 'Form FC-GPR is generally required within 30 days from the date shares or other capital instruments are allotted to a non-resident investor. Prepare valuation, remittance proof, KYC report, Board approval, and allotment documents before starting the filing.'],
  ['When is the annual FLA return due in India?', 'A company with foreign direct investment or overseas investment on its balance sheet generally files the annual Foreign Liabilities and Assets return by July 15 each year. It reports the previous financial year\'s position and is separate from FC-GPR reporting.'],
  ['Does a startup need to file PAS-3 for ESOP shares?', 'Yes. When shares are allotted following ESOP exercise, the company generally files Form PAS-3 within the applicable return-of-allotment deadline, commonly 30 days from allotment. The company must also update its Register of Members, cap table, and ESOP records.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function StartupComplianceCalendarBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Startup Compliance Calendar: Year 1 to Year 3 for Indian Private Limited Companies</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 13, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>File GST returns and deposit TDS on a recurring monthly schedule from the first taxable transaction or TDS-liable payment.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Hold at least <strong>four Board meetings</strong> each year, with no gap exceeding <strong>120 days</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>File AOC-4 within <strong>30 days</strong> of the AGM and MGT-7 within <strong>60 days</strong> of the AGM.</li>
                  <li style={{ marginBottom: 0 }}>Report foreign investment via FC-GPR within <strong>30 days</strong> of allotment and file the annual FLA return by <strong>July 15</strong>.</li>
                </ul>
              </div>

              <p>Most startup compliance failures are not caused by one difficult form - they happen because a founder treats compliance as an annual task and discovers, too late, that the company had monthly, quarterly, event-based, and annual obligations running simultaneously. A Private Limited Company should run compliance through a calendar. The founder does not need to personally prepare every return, but one person must own the timetable and ensure the accountant, Company Secretary, payroll team, and bank records stay aligned. If you have just registered, start with our <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link> before working through this calendar.</p>

              <h2>The Recurring Compliance Dashboard</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Frequency</th><th style={thStyle}>Core Task</th><th style={thStyle}>Typical Timing</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Monthly</td><td style={tdStyle}>Bookkeeping, payroll, invoices, bank reconciliation</td><td style={tdStyle}>Before next month&apos;s tax cycle</td></tr>
                    <tr><td style={tdAltStyle}>Monthly</td><td style={tdAltStyle}>TDS deposit</td><td style={tdAltStyle}>By the 7th of the following month</td></tr>
                    <tr><td style={tdStyle}>Monthly / quarterly</td><td style={tdStyle}>GST returns</td><td style={tdStyle}>Depends on scheme (regular or QRMP)</td></tr>
                    <tr><td style={tdAltStyle}>Quarterly</td><td style={tdAltStyle}>TDS statements + Board meeting</td><td style={tdAltStyle}>Prescribed due dates, max 120-day gap</td></tr>
                    <tr><td style={tdStyle}>Quarterly</td><td style={tdStyle}>Advance tax instalment</td><td style={tdStyle}>Jun / Sep / Dec / Mar</td></tr>
                    <tr><td style={tdAltStyle}>Annual</td><td style={tdAltStyle}>Audit, AGM, AOC-4, MGT-7, ITR</td><td style={tdAltStyle}>After year-end, staggered deadlines</td></tr>
                    <tr><td style={tdStyle}>Annual</td><td style={tdStyle}>DIR-3 KYC for DIN holders</td><td style={tdStyle}>By September 30</td></tr>
                    <tr><td style={tdAltStyle}>Event-based</td><td style={tdAltStyle}>Share allotment, ESOP, foreign investment</td><td style={tdAltStyle}>Deadline depends on the event</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Year 1: Set Up the Company Correctly</h2>
              <p>Year 1 starts on incorporation day. See our <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>first 30 days checklist</Link> for the foundational steps: PAN/TAN verification, current account, first Board meeting, first auditor appointment, and share certificate issuance.</p>
              <h3>First Share Allotment or Funding Round</h3>
              <p>When a company allots shares, it must complete corporate law and, where relevant, FEMA reporting. A domestic allotment needs Board and shareholder approvals depending on the issue type, valuation support where applicable, and Form PAS-3 return of allotment - generally filed within 30 days of allotment.</p>
              <p>If the investor is a non-resident, <Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA reporting</Link> is equally important: Form FC-GPR is generally required within 30 days from the date of allotment of capital instruments to a non-resident. Have the valuation, remittance proof, KYC report, Board approval, and allotment documents ready before starting the RBI reporting process - do not wait until day 30 to assemble them, since delayed FEMA reporting complicates future funding diligence.</p>
              <h3>GST in Year 1</h3>
              <p>After GST registration, decide whether monthly filing or the QRMP (Quarterly Return Monthly Payment) scheme applies. Issue compliant tax invoices, reconcile outward supplies with books, match purchase invoices against input tax credit, file GSTR-1 and GSTR-3B per the applicable frequency, and track reverse-charge transactions.</p>
              <h3>TDS and Payroll in Year 1</h3>
              <p>TDS applies to more than salaries - rent, professional fees, contractor payments, commission, interest, and royalty payments all need review. A practical monthly cycle: finalise payroll and vendor data, identify TDS-liable payments, deposit TDS by the 7th of the following month, reconcile challans, file quarterly TDS statements, and issue Form 16/16A on time. For payments to non-residents, do not apply routine domestic TDS logic - review the treaty position, Form 15CA/15CB requirements, and FEMA implications before remitting.</p>

              <h3>Year 1 Annual Close</h3>
              <p>The year-end process should include full bank, debtor, creditor, and related-party reconciliations; inventory and fixed-asset records where applicable; TDS and GST reconciliation; confirmation that statutory registers match the cap table; financial statement preparation; statutory audit; Board approval of accounts; the Annual General Meeting; and ROC/income-tax filings. The first AGM may extend to nine months from the end of the first financial year, versus six months in subsequent years. After the AGM:</p>
              <ul>
                <li>File Form AOC-4 within 30 days of the AGM</li>
                <li>File Form MGT-7 within 60 days of the AGM</li>
                <li>File the income tax return by the applicable due date</li>
                <li>Complete DIR-3 KYC for DIN holders by September 30</li>
              </ul>

              <h2>Year 2: From Founder-Led Records to Controlled Processes</h2>
              <p>By Year 2, transaction volumes and investor expectations usually increase. The main change is not a new form - it is the need for repeatable controls. Every month, reconcile bank accounts and payment gateways, close sales/expenses/payroll, review GST output tax and input credit, deposit TDS, process payroll deductions (EPF, ESIC, Professional Tax), and review related-party transactions. If books are six months behind, no annual deadline will feel comfortable - the founder should receive a brief monthly finance pack covering revenue, receivables, cash balance, GST liability, TDS liability, and upcoming deadlines.</p>
              <p>Each quarter, schedule TDS return filing, GST reconciliation, the Board meeting and minutes, advance tax estimation, and a cap table/ESOP register update. Under Section 173 of the Companies Act, 2013, most companies must hold at least four Board meetings a year with a maximum 120-day gap between two meetings.</p>

              <h3>Advance Tax Instalments</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Instalment Date</th><th style={thStyle}>Cumulative Advance Tax Payable</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>On or before June 15</td><td style={tdStyle}>15%</td></tr>
                    <tr><td style={tdAltStyle}>On or before September 15</td><td style={tdAltStyle}>45%</td></tr>
                    <tr><td style={tdStyle}>On or before December 15</td><td style={tdStyle}>75%</td></tr>
                    <tr><td style={tdAltStyle}>On or before March 15</td><td style={tdAltStyle}>100%</td></tr>
                  </tbody>
                </table>
              </div>
              <p>A startup with book losses may still need advance tax planning because of disallowances, interest income, or foreign exchange gains. Review the forecast every quarter instead of assuming an accounting loss means nil tax.</p>

              <h3>Year 2 Funding, ESOP, and FEMA</h3>
              <p>Year 2 is often when a company issues preference shares, brings in foreign capital, or launches an ESOP. For foreign investment: file FC-GPR within 30 days of allotment, and file the annual <strong>FLA (Foreign Liabilities and Assets) return by July 15</strong> each year where the company has foreign investment on its balance sheet. For ESOPs, maintain the plan, shareholder and Board approvals, grant register, vesting data, and exercise records - and when shares are allotted on exercise, file Form PAS-3 within the applicable deadline, generally 30 days from allotment.</p>

              <h2>Year 3: Prepare for Scale, Scrutiny, and Diligence</h2>
              <p>By Year 3, your company may be preparing for external funding, debt, acquisition, or expansion into new states. This is where poor historic compliance becomes visible. Review whether all ROC forms and annual returns were filed, financial statements reconcile with GST/TDS/income-tax records, every share allotment has a PAS-3 and updated cap table, all directors completed DIR-3 KYC, auditor appointments and ADT-1 filings are current, related-party transactions have required approvals, ESOP records match issued share capital, foreign investment filings and FLA returns are complete, and statutory registers and minute books are current. Investors do not only examine revenue - they review corporate records, FEMA compliance, cap table accuracy, statutory filings, and founder transactions.</p>

              <h2>DPIIT-Recognised Startup Compliance</h2>
              <p><Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT recognition</Link> provides access to certain benefits, subject to conditions - it does not remove ordinary company law, GST, TDS, FEMA, or income-tax obligations. A DPIIT-recognised startup should monitor the annual self-certification requirement on the Startup India portal and keep evidence supporting eligibility, innovation, or scalability criteria. If claiming a tax holiday or other startup-specific benefit, plan the tax return and audit position with a CA well before the deadline.</p>

              <h2>A Practical Calendar You Can Run</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Period</th><th style={thStyle}>Action</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Every month</td><td style={tdStyle}>Close books, reconcile bank and GST, deposit TDS, process payroll</td></tr>
                    <tr><td style={tdAltStyle}>Every quarter</td><td style={tdAltStyle}>File TDS returns, hold Board meeting, review advance tax</td></tr>
                    <tr><td style={tdStyle}>June</td><td style={tdStyle}>Pay first advance tax instalment (15%)</td></tr>
                    <tr><td style={tdAltStyle}><strong>July</strong></td><td style={tdAltStyle}><strong>File FLA return by July 15</strong> if foreign assets/liabilities exist</td></tr>
                    <tr><td style={tdStyle}>September</td><td style={tdStyle}>Pay second advance tax instalment (45% cumulative), complete DIR-3 KYC</td></tr>
                    <tr><td style={tdAltStyle}>October - November</td><td style={tdAltStyle}>Complete audit, AGM, AOC-4, MGT-7, income tax filings</td></tr>
                    <tr><td style={tdStyle}>December</td><td style={tdStyle}>Pay third advance tax instalment (75% cumulative)</td></tr>
                    <tr><td style={tdAltStyle}>March</td><td style={tdAltStyle}>Pay final advance tax instalment (100%), close compliance evidence</td></tr>
                    <tr><td style={tdStyle}>Within 30 days of foreign allotment</td><td style={tdStyle}>File FC-GPR</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Review the calendar at every Board meeting. If a deadline has passed, identify the corrective filing path immediately rather than leaving it to the next financial year.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Want us to run this calendar for you?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle GST, TDS, MCA annual filings, advance tax, and FEMA reporting year-round for startups across Nashik, Mumbai, and Bangalore.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/essential-compliance-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Essential Compliance for Indian Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT Registration & 80-IAC Tax Benefit</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA Compliance for Foreign-Funded Startups</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

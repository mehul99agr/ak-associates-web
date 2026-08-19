import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Annual ROC Filing Guide (India)',
  description: 'Every mandatory annual MCA filing for an Indian company: AOC-4 financial statements, MGT-7/7A annual return, DIR-3 KYC, ADT-1, deadlines relative to your AGM, and the penalty for late filing.',
  keywords: [
    'AOC-4 due date', 'MGT-7 due date', 'DIR-3 KYC deadline', 'annual ROC filing India',
    'ADT-1 auditor appointment', 'MGT-7A small company', 'ROC late filing penalty',
    'company annual compliance calendar India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc' },
  openGraph: {
    title: 'Annual ROC Filing Guide (India)',
    description: 'Deadlines, penalties, and a compliance calendar for every mandatory annual MCA filing.',
    url: 'https://agrawalkhandelwal.com/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annual ROC Filing Guide: AOC-4, MGT-7 & DIR-3 KYC',
    description: 'Every mandatory annual MCA filing, deadlines, and penalties for late filing.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Annual ROC Filing Guide (India)',
  description: 'Every mandatory annual MCA filing for an Indian company, deadlines relative to the AGM, and the penalty structure for late filing.',
  datePublished: '2026-06-18', dateModified: '2026-06-18',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc',
}

const faqs: [string, string][] = [
  ['What is the due date for AOC-4 filing?', 'AOC-4 is due within 30 days of the AGM. If the AGM is not held, the due date is generally linked to the date by which the AGM should have been held, subject to the company\'s facts and applicable rules.'],
  ['When is MGT-7 or MGT-7A due?', 'MGT-7, or for eligible small companies MGT-7A, is due within 60 days of the AGM. The correct form depends on the company\'s current eligibility under the small company definition and exclusions for that year.'],
  ['Is DIR-3 KYC compulsory for inactive directors?', 'Yes, annual DIR-3 KYC applies to all DIN holders, including individuals who may not currently be an active director. It is due by September 30 each year regardless of whether the person currently holds an appointment.'],
  ['What happens if a company files ROC forms late?', 'Late forms can attract daily additional fees that continue accruing until the filing is completed, and this can become substantial. Delays also create problems in funding, banking, and due diligence during a future transaction.'],
  ['Is ADT-1 filed every year?', 'ADT-1 is filed for auditor appointment or reappointment where applicable, generally within 15 days of the AGM. Confirm the requirement for your auditor\'s current appointment cycle with your compliance adviser rather than assuming from the prior year.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function AnnualROCFilingBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Annual ROC Filing for Private Limited Companies: AOC-4, MGT-7 and DIR-3 KYC</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published June 18, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>AOC-4</strong> files audited financial statements <strong>within 30 days</strong> of the AGM.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>MGT-7</strong> or MGT-7A files the annual return <strong>within 60 days</strong> of the AGM.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Every DIN holder must complete <strong>DIR-3 KYC by September 30</strong> each year.</li>
                  <li style={{ marginBottom: 0 }}>Late ROC filing fees can accrue <strong>daily</strong> and are often far more expensive than founders expect.</li>
                </ul>
              </div>

              <p>A Private Limited Company has an annual filing cycle even when it has no revenue, no employees, or no major transactions. Dormant operations do not automatically remove the company&apos;s legal filing responsibilities. A company that misses dates may face additional filing fees, director-related restrictions, delayed fundraising due diligence, and difficulty closing loans, investments, or exits.</p>

              <h2>AOC-4: Filing the Financial Statements</h2>
              <p>AOC-4 is the MCA filing used to submit a company&apos;s financial statements, generally including the balance sheet, statement of profit and loss where applicable, cash-flow statement where applicable, Board&apos;s report, auditor&apos;s report, and relevant attachments. The filing is due within <strong>30 days of the AGM</strong>. If an AGM is not held, the due date is generally reckoned from the date on which the AGM should have been held. The financial statements must first be properly prepared, approved by the Board, audited, and adopted through the required corporate process - AOC-4 is not a mere upload.</p>

              <h2>MGT-7 and MGT-7A: Filing the Annual Return</h2>
              <p>The annual return captures the company&apos;s ownership and governance picture: registered office, principal business activities, shareholding, directors and key managerial personnel, meetings, remuneration, indebtedness, and other statutory disclosures. MGT-7 is the annual return form for companies generally; eligible small companies use MGT-7A. Whether a company qualifies as a small company must be checked against the current statutory definition for the relevant year. The filing is due within <strong>60 days of the AGM</strong>, and should match the company&apos;s statutory registers, share records, Board documents, and financial statements - a mismatch often surfaces later during investment due diligence.</p>

              <h2>DIR-3 KYC: Every DIN Holder Must Act</h2>
              <p>DIR-3 KYC is the annual KYC requirement for every individual holding a Director Identification Number, including persons who are not currently acting as a director of an active company. The due date is <strong>September 30</strong> each year. A director should not assume that leaving a Board, moving abroad, or having no current company filings removes this responsibility. Keep mobile number, email address, PAN, and address proof current - if the DIN is deactivated due to non-compliance, restoring it can disrupt urgent filings and director appointments.</p>

              <h2>ADT-1: Auditor Appointment and Reappointment</h2>
              <p>ADT-1 notifies the ROC of an auditor&apos;s appointment or reappointment where filing is applicable, generally due within <strong>15 days of the AGM</strong>. The auditor&apos;s tenure and whether an ADT-1 filing is needed should be reviewed with the company&apos;s CA rather than assumed from the prior year - first auditor appointments and subsequent appointments operate under different Companies Act timelines. The first auditor is appointed within 30 days of incorporation by the Board or 90 days by members.</p>

              <h2>Compliance Calendar Around a Typical AGM</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Filing or Action</th><th style={thStyle}>What It Covers</th><th style={thStyle}>Typical Deadline</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Board approval of accounts</td><td style={tdStyle}>Approves draft financial statements and Board&apos;s report</td><td style={tdStyle}>Before audit completion and AGM</td></tr>
                    <tr><td style={tdAltStyle}>AGM</td><td style={tdAltStyle}>Adoption of accounts and relevant shareholder business</td><td style={tdAltStyle}>Within applicable statutory AGM timeline</td></tr>
                    <tr><td style={tdStyle}>AOC-4</td><td style={tdStyle}>Financial statements</td><td style={tdStyle}>Within 30 days of AGM</td></tr>
                    <tr><td style={tdAltStyle}>MGT-7 / MGT-7A</td><td style={tdAltStyle}>Annual return</td><td style={tdAltStyle}>Within 60 days of AGM</td></tr>
                    <tr><td style={tdStyle}>ADT-1</td><td style={tdStyle}>Auditor appointment/reappointment where applicable</td><td style={tdStyle}>Within 15 days of AGM</td></tr>
                    <tr><td style={tdAltStyle}>DIR-3 KYC</td><td style={tdAltStyle}>Annual KYC for DIN holders</td><td style={tdAltStyle}>By September 30 each year</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Use this as a planning calendar, not a substitute for checking the company&apos;s actual AGM date and facts. A company with a delayed AGM, a first financial year, a changed auditor, or a changed director may require a different sequence.</p>

              <h2>Why Late Filing Becomes Expensive</h2>
              <p>MCA late filing is not usually a one-time inconvenience. Many forms attract additional fees calculated per day of delay, and the financial impact can continue growing until filing is completed. Late filing also creates indirect costs: auditor and professional time rises when records must be reconstructed, bank and investor due diligence may fail, directors may face difficulty with DIN-related compliance, and a future strike-off, closure, conversion, or funding round becomes harder. The worst pattern is ignoring an old default because the company has become inactive - the default does not disappear simply because the founder has moved on.</p>

              <h2>Build a Record-Keeping System Before Year-End</h2>
              <p>Maintain statutory registers and shareholding records, Board and shareholder resolutions, bank statements and accounting records, invoices and payroll data, loan and related-party documentation, and changes in directors, registered office, capital, or share transfers throughout the year. The annual return is only as accurate as these underlying records - a company that records changes when they happen spends far less at year-end and avoids contradictory filings.</p>

              <h2>A Founder&apos;s Annual Compliance Checklist</h2>
              <p>Start the process well before the AGM deadline. Confirm whether the company is eligible to use MGT-7A, whether the auditor appointment requires ADT-1, whether all directors have completed <Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DIR-3 KYC</Link>, whether there were changes in shareholding or registered office, and whether all financial statements reconcile with GST, TDS, income tax, and bank records. A clean annual compliance file is one of the cheapest ways to make a business fundable.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need your annual ROC filings handled end-to-end?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We manage AOC-4, MGT-7, DIR-3 KYC, and ADT-1 filings for Indian companies, tracked against your actual AGM calendar.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/company-incorporation" className="btn btn-outline">Incorporation Services</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN Application Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

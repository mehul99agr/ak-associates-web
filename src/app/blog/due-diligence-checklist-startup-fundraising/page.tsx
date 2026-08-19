import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Due Diligence Checklist for Fundraising',
  description: 'What investors check during startup due diligence: corporate records, cap table reconciliation, IP ownership, material contracts, tax and FEMA history, and a data room preparation timeline.',
  keywords: [
    'startup due diligence checklist India', 'fundraising data room checklist',
    'cap table reconciliation due diligence', 'FEMA due diligence startup',
    'IP due diligence startup', 'investor due diligence documents India',
    'PAS-3 cap table diligence',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/due-diligence-checklist-startup-fundraising' },
  openGraph: {
    title: 'Due Diligence Checklist for Fundraising',
    description: 'Corporate records, cap table reconciliation, IP ownership, and a data room timeline before investors ask.',
    url: 'https://agrawalkhandelwal.com/blog/due-diligence-checklist-startup-fundraising',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Fundraising Due Diligence Checklist',
    description: 'What investors actually check, and how to prepare your data room in advance.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Due Diligence Checklist for Fundraising', item: 'https://agrawalkhandelwal.com/blog/due-diligence-checklist-startup-fundraising' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Due Diligence Checklist for Fundraising',
  description: 'What investors check during due diligence before a funding round, and how founders should prepare their data room in advance.',
  datePublished: '2026-08-04', dateModified: '2026-08-04',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/due-diligence-checklist-startup-fundraising',
}

const faqs: [string, string][] = [
  ['What documents do investors check during startup due diligence in India?', 'Investors typically review corporate records, cap table, IP ownership, material contracts, financial statements, GST and TDS compliance, tax notices, litigation history, and FEMA compliance history where the company has foreign investment.'],
  ['How early should a startup prepare a data room before fundraising?', 'Start at least six to eight weeks before the target closing date. Begin earlier if the company has prior funding rounds, foreign investors, an ESOP pool, or incomplete historic records that need reconciliation.'],
  ['Why do investors compare PAS-3 filings with the startup cap table?', 'PAS-3 supports the legal record of share allotments. If the cap table, share certificates, Board approvals, and PAS-3 filings do not match, investors may question whether ownership has been validly documented - a common and avoidable diligence gap.'],
  ['What FEMA documents are needed for due diligence after foreign investment?', 'Keep remittance records, valuation reports, allotment approvals, FC-GPR acknowledgements, and annual FLA return records. FC-GPR is filed within 30 days of allotment of capital instruments to a non-resident, and each filing should be traceable to a specific round.'],
  ['Can a startup fix compliance gaps during fundraising due diligence?', 'Often yes, but the impact depends on the specific gap and remedy available. Identify issues early, obtain advice, document the remediation plan, and disclose material matters honestly rather than allowing the investor to discover them independently.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function DueDiligenceChecklistBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Startup Fundraising Due Diligence Checklist: Build a Data Room Before Investors Ask</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 4, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Investors assess whether the company&apos;s legal, financial, and ownership records match its fundraising story.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Cap-table mismatches</strong> between share certificates, PAS-3 filings, and ESOP records are a frequent, avoidable problem.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Historic FEMA and tax gaps should be identified <strong>before</strong> a foreign investor sees them.</li>
                  <li style={{ marginBottom: 0 }}>Begin data-room preparation at least <strong>6-8 weeks</strong> before the target closing date, and earlier for a complex round.</li>
                </ul>
              </div>

              <p>Investor due diligence is not only a search for major fraud or litigation. It tests whether the startup is capable of scaling with reliable controls. A diligence team wants to know whether the company owns what it says it owns, has issued shares properly, can support its financial metrics, has complied with major laws, and has identified its risks honestly. A missing document is not always fatal - an unexplained inconsistency is more damaging. Founders should prepare a structured data room before the term sheet becomes a closing deadline.</p>

              <h2>Corporate Records</h2>
              <p>The data room should contain the company&apos;s foundational records: certificate of incorporation, Memorandum and Articles of Association, PAN, GST and other core registrations, Board and shareholder resolutions, statutory registers, ROC filing history, and records of any charges, borrowings, or defaults. For a newly incorporated company, check the early compliance record: the first Board meeting must be held within 30 days of incorporation under Section 173 of the Companies Act, 2013; the first auditor must be appointed within 30 days by the Board or 90 days by members under Section 139(6); and share certificates must be issued within 60 days of incorporation under Section 56. These details may look administrative, but an investor&apos;s counsel often uses them to test whether the company handles statutory governance reliably. See our <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link> if any of these steps were missed.</p>

              <h2>Reconcile the Cap Table Before Sharing It</h2>
              <p>A cap table should not be a spreadsheet maintained separately from legal records - it should reconcile to every historical issue and transfer of securities.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Diligence Item</th><th style={thStyle}>What Investors Compare It Against</th><th style={thStyle}>Common Gap</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Issued share capital</td><td style={tdStyle}>MOA, statutory register, and filings</td><td style={tdStyle}>Spreadsheet shows shares never allotted</td></tr>
                    <tr><td style={tdAltStyle}>Allotments</td><td style={tdAltStyle}>Board approvals, PAS-3, and share certificates</td><td style={tdAltStyle}>PAS-3 or certificate missing</td></tr>
                    <tr><td style={tdStyle}>ESOP pool and grants</td><td style={tdStyle}>Scheme, approvals, and grant register</td><td style={tdStyle}>Options omitted from fully diluted ownership</td></tr>
                    <tr><td style={tdAltStyle}>Convertible instruments</td><td style={tdAltStyle}>Subscription documents and cap table</td><td style={tdAltStyle}>Conversion terms not modelled</td></tr>
                    <tr><td style={tdStyle}>Transfers</td><td style={tdStyle}>Transfer forms, approvals, and register</td><td style={tdStyle}>Founder transfer not recorded</td></tr>
                  </tbody>
                </table>
              </div>
              <p><strong>PAS-3 return of allotment is generally filed within 30 days of allotment.</strong> The cap table should show the same allotment date, number of shares, class of shares, and holders reflected in the underlying records. Do not wait for counsel to find the mismatch - reconcile the cap table internally, then prepare an exception note for any historic issue that requires corrective action or legal advice.</p>

              <h2>Intellectual Property and Product Ownership</h2>
              <p>Investors need confidence that the company owns its product, code, brand, and data rights - especially where founders started work before incorporation or used freelancers. Collect founder <Link href="/blog/founder-agreement-essentials-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>IP assignment agreements</Link>, contractor and agency agreements, employment agreements with IP and confidentiality clauses, trademark and domain ownership records, an open-source software inventory, and customer permissions for data use where relevant. If the first product was built by a friend, freelancer, or former employer of a founder, document the ownership position before due diligence begins - a later assignment may be possible, but an unexplained gap can delay the round.</p>

              <h2>Material Contracts and Commercial Risk</h2>
              <p>Create a contract schedule for material customers, vendors, channel partners, landlords, lenders, and service providers, including expiry dates, termination rights, exclusivity obligations, minimum commitments, indemnities, payment terms, and change-of-control clauses. Investors particularly focus on contracts that can create a liability disproportionate to current revenue - unlimited indemnities, long lock-ins, restrictive exclusivity, unusual penalties, and customer obligations the current team cannot deliver. Do not hide a difficult contract - explain it, quantify the risk, and state the mitigation plan.</p>

              <h2>Financial, GST, and Tax Records</h2>
              <p>The finance folder should include audited financial statements if available, management accounts, bank statements, budgets, debt details, GST returns, TDS compliance records, and material tax notices or demands. Diligence often compares revenue in management accounts against bank collections, GST turnover, TDS records, customer contracts, payroll costs, and unit-economics metrics. Differences can be legitimate - GST turnover may not match revenue because of timing, credit notes, or supply classification - but prepare the reconciliation rather than waiting for the investor to ask. See our <Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST registration and filing guide</Link> for the underlying compliance basics.</p>

              <h2>FEMA History for Companies With Foreign Investment</h2>
              <p>If the company has received foreign investment, create a FEMA compliance folder: remittance evidence, valuation reports, Board and shareholder approvals, allotment records, FC-GPR acknowledgements, and annual FLA return records. FC-GPR is filed within 30 days of allotment of capital instruments to a non-resident, and the annual FLA return, due July 15, should be checked for every applicable year. Historic errors should be reviewed before a new foreign investor begins diligence - a late or missing filing may be capable of remediation, but surprise is expensive in a closing process. See our <Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>convertible notes vs equity guide</Link> for FEMA instrument classification.</p>

              <h2>Litigation, Notices, and Regulatory History</h2>
              <p>Prepare a schedule covering current, threatened, and historic material disputes - income tax notices, GST notices, labour claims, customer disputes, IP claims, regulatory correspondence, and founder-related disputes affecting the company. The schedule should state the matter, amount involved, current status, adviser handling it, and management&apos;s assessment. Do not label a matter &quot;immaterial&quot; without explaining why.</p>

              <h2>Data-Room Timeline</h2>
              <p>Start preparation at least <strong>six to eight weeks</strong> before the target closing date - earlier if the company has multiple rounds, foreign investors, complex ESOPs, historic contractor arrangements, or regulatory gaps.</p>
              <ul>
                <li><strong>8 weeks before closing:</strong> Create index, assign owners, identify missing documents</li>
                <li><strong>6 weeks before closing:</strong> Reconcile cap table, tax records, and corporate filings</li>
                <li><strong>4 weeks before closing:</strong> Complete IP and contract review, prepare disclosure schedules</li>
                <li><strong>2 weeks before closing:</strong> Answer diligence queries, update documents, lock final transaction schedules</li>
                <li><strong>Closing week:</strong> Verify approvals, bank receipts, allotment, and post-closing filings have owners and deadlines</li>
              </ul>
              <p>The data room should have a single owner - usually the finance lead, founder, or transaction coordinator. Multiple people can upload documents, but one person must control versioning and answer tracking.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Preparing for a funding round?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We reconcile cap tables, review FEMA and tax compliance history, and build data rooms that survive investor scrutiny.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/founder-agreement-essentials-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Founder Agreement Essentials</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Convertible Notes vs Equity (FEMA)</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

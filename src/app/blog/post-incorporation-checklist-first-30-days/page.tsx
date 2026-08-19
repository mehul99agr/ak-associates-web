import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post-Incorporation Checklist: First 30 Days',
  description: 'What to do after getting your Certificate of Incorporation: PAN/TAN, bank account, GST, first Board meeting, auditor appointment, and share certificates - all with statutory deadlines.',
  keywords: [
    'post incorporation compliance India', 'after company registration checklist',
    'first board meeting 30 days', 'first auditor appointment company', 'share certificate 60 days',
    'company incorporation next steps', 'ADT-1 first auditor', 'new company checklist India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/post-incorporation-checklist-first-30-days' },
  openGraph: {
    title: 'Post-Incorporation Checklist: First 30 Days',
    description: 'PAN/TAN, bank account, GST, first Board meeting, auditor appointment, and share certificates - with statutory deadlines.',
    url: 'https://agrawalkhandelwal.com/blog/post-incorporation-checklist-first-30-days',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Incorporation Checklist: First 30 Days',
    description: 'Everything a founder must do after getting the Certificate of Incorporation, with statutory deadlines.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Post-Incorporation Checklist: First 30 Days',
  description: 'What a founder must do after receiving the Certificate of Incorporation for a Private Limited Company - PAN/TAN, banking, GST, first Board meeting, auditor appointment, share certificates.',
  datePublished: '2026-08-12', dateModified: '2026-08-12',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/post-incorporation-checklist-first-30-days',
}

const faqs: [string, string][] = [
  ['Is PAN automatically issued after Private Limited Company incorporation?', 'PAN is commonly allotted through the integrated incorporation process, and TAN is often issued alongside it. Verify both on the income tax portal before relying on them - a current account, TDS compliance, and GST registration all depend on accurate PAN and TAN details matching the Certificate of Incorporation.'],
  ['When must the first Board meeting be held after company incorporation?', 'A Private Limited Company must hold its first Board meeting within 30 days of incorporation under Section 173 of the Companies Act, 2013. Keep signed minutes and resolutions covering bank account opening, auditor appointment, and other initial compliance decisions.'],
  ['When should a company appoint its first auditor?', 'The Board should appoint the first auditor within 30 days of incorporation under Section 139(6) of the Companies Act, 2013. If the Board does not act, the members must appoint the auditor within 90 days at an Extraordinary General Meeting.'],
  ['When must a new company issue share certificates?', 'Share certificates for subscribers to the Memorandum of Association must generally be issued within 60 days of incorporation under Section 56 of the Companies Act, 2013. Update the Register of Members and share certificate records at the same time - do not leave this until a funding round.'],
  ['Do I need GST registration immediately after incorporating?', 'Not necessarily. GST registration becomes mandatory once your turnover or business model crosses the applicable threshold or falls under a compulsory-registration category, such as interstate supply. Voluntary registration can still be useful earlier if customers require GST invoices or input tax credit matters commercially.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function PostIncorporationChecklistBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Post-Incorporation Checklist: Your First 30 Days After Registering a Private Limited Company</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 12, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Verify PAN and TAN immediately - commonly allotted with incorporation, but banking and tax registrations depend on correct details.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Hold the <strong>first Board meeting within 30 days</strong> of incorporation under Section 173.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Issue <strong>share certificates within 60 days</strong> and update the Register of Members.</li>
                  <li style={{ marginBottom: 0 }}>Appoint the <strong>first auditor within 30 days</strong> under Section 139(6).</li>
                </ul>
              </div>

              <p>Receiving the Certificate of Incorporation means your Private Limited Company legally exists - it does not mean the compliance work is done. The first 30 days matter because several statutory actions are time-bound, and others are practically necessary before you can collect customer payments, hire employees, or raise investment. Missing these early steps creates avoidable complications later, especially during a funding round, statutory audit, GST registration, or due diligence. See our full <Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>incorporation guide</Link> if you have not yet registered.</p>

              <h2>Day 1 to Day 7: Collect and Verify the Incorporation Records</h2>
              <p>Start with a single digital folder containing the final signed and issued documents: the Certificate of Incorporation, Memorandum and Articles of Association, PAN and TAN details, DIN details of directors, registered-office proof, initial subscriber and shareholding details, and Digital Signature Certificate details for directors or authorised signatories.</p>
              <p>PAN and TAN are commonly generated through the integrated incorporation process - do not assume they are available simply because the company has a CIN. Verify the PAN and TAN status on the tax portal and confirm the company name, incorporation date, and address match the Certificate exactly. A mismatch should be corrected early, since banks, GST authorities, TDS filings, and investor documentation all rely on these identifiers.</p>

              <h2>Open the Company Current Account</h2>
              <p>A Private Limited Company should operate through a dedicated current account - do not run customer revenue or company expenses through a founder&apos;s personal bank account except for limited, documented reimbursements. Banks commonly request the Certificate of Incorporation, company PAN, Memorandum and Articles, a Board resolution authorising the account and signatories, KYC documents for directors and authorised signatories, and registered-office address proof. Requirements vary by bank, so ask for the checklist before visiting the branch.</p>
              <p>Once the account is open, set basic financial controls: decide who can approve payments, set transaction limits per signatory, enable statements and alerts to the finance email, and record initial subscription money received. Avoid cash payments unless there is a genuine business need with clear tax implications considered.</p>

              <h2>Check Whether GST Registration Is Mandatory</h2>
              <p>GST registration is not automatic on incorporation - it becomes mandatory once you cross the applicable turnover threshold or fall under a compulsory-registration trigger, such as interstate taxable supplies, supply through e-commerce operators in prescribed cases, or reverse-charge obligations. Register voluntarily earlier if customers require GST invoices or you expect to cross the threshold shortly, but remember it also creates recurring filing obligations - register for a commercial reason, not because another startup did.</p>

              <h2>Shops and Establishments and Professional Tax</h2>
              <p>Shops and Establishments registration requirements are state-specific. Maharashtra has its own Shops and Establishments law and local registration process. Professional Tax is also state-specific - in Maharashtra, employer registration is generally required once the company employs staff whose salaries fall within the applicable slab structure. Do not treat these as pan-India registrations; a company operating from Nashik, Sillod, Mumbai, and Bangalore may face different local requirements in each state.</p>

              <h2>Hold the First Board Meeting Within 30 Days</h2>
              <p>Under Section 173 of the Companies Act, 2013, every company must hold its first Board meeting within 30 days of incorporation. This should not be a formality - it establishes the company&apos;s initial governance record. A typical agenda includes:</p>
              <ul>
                <li>Noting the Certificate of Incorporation, PAN, and TAN</li>
                <li>Confirming the registered office</li>
                <li>Appointment of the first auditor</li>
                <li>Approval to open the current account and authorise banking signatories</li>
                <li>Noting subscriber share capital and approving share certificate issuance</li>
                <li>Authorising GST, Shops &amp; Establishments, and Professional Tax registrations</li>
                <li>Approving the accounting year, software, and record-keeping process</li>
              </ul>
              <p>Prepare signed Board resolutions and minutes - these will be repeatedly requested by banks, investors, auditors, and regulators.</p>

              <h2>Appoint the First Auditor Within 30 Days</h2>
              <p>Under Section 139(6) of the Companies Act, 2013, the Board must appoint the first auditor within 30 days of registration. If the Board fails to act, the members must appoint the auditor within 90 days at an Extraordinary General Meeting. The first auditor holds office until the conclusion of the first Annual General Meeting. Discuss the appointment with a Chartered Accountant before the Board meeting so the consent, eligibility confirmation, and required documents are ready. Even where a specific ROC filing is not mandatory for the first auditor, retain the Board resolution, consent letter, and eligibility certificate.</p>

              <h2>Issue Share Certificates Within 60 Days</h2>
              <p>This falls outside the first 30 days but must be scheduled immediately. Under Section 56 of the Companies Act, 2013, share certificates must generally be delivered within two months of incorporation to subscribers of the memorandum. The company should confirm subscription money has been received, prepare certificates in the prescribed format, obtain required signatures, enter the issue in the Register of Members, and record certificate numbers, folio numbers, and distinctive share numbers. Do not leave this until a funding round - investors routinely ask for the cap table, share certificates, and Register of Members, and reconstructing them later is slower and more expensive.</p>

              <h2>Maintain Statutory Registers from Day One</h2>
              <p>A small company is still a company - it must maintain records establishing who owns it, who directs it, and what decisions have been made. At minimum, set up and maintain a Register of Members, Register of Directors and Key Managerial Personnel, Register of Director Shareholding, Register of Charges (if the company creates security), minutes books for Board and general meetings, and share certificate/transfer records. A cloud folder is useful but is not a substitute for maintaining statutory registers in the prescribed manner.</p>

              <h2>Consider MSME / Udyam Registration</h2>
              <p>Udyam registration can be valuable if the company meets the applicable MSME classification conditions, assisting with access to certain schemes, credit support, and delayed-payment protections. Eligibility is based on investment and turnover criteria checked on the official Udyam portal - do not assume every startup automatically qualifies as an MSME.</p>

              <h2>Your First-Month Operating Checklist</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Action</th><th style={thStyle}>Target Timing</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Verify PAN and TAN</td><td style={tdStyle}>First week</td></tr>
                    <tr><td style={tdAltStyle}>Open current account</td><td style={tdAltStyle}>First 7-14 days</td></tr>
                    <tr><td style={tdStyle}><strong>Hold first Board meeting</strong></td><td style={tdStyle}><strong>Within 30 days</strong></td></tr>
                    <tr><td style={tdAltStyle}><strong>Appoint first auditor</strong></td><td style={tdAltStyle}><strong>Within 30 days</strong></td></tr>
                    <tr><td style={tdStyle}>Evaluate GST registration</td><td style={tdStyle}>Before taxable supplies require it</td></tr>
                    <tr><td style={tdAltStyle}>Check Shops &amp; Establishments / Professional Tax</td><td style={tdAltStyle}>First month</td></tr>
                    <tr><td style={tdStyle}><strong>Issue share certificates</strong></td><td style={tdStyle}><strong>Within 60 days</strong></td></tr>
                    <tr><td style={tdAltStyle}>Set up statutory registers</td><td style={tdAltStyle}>Immediately</td></tr>
                    <tr><td style={tdStyle}>Consider Udyam registration</td><td style={tdStyle}>First month</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The strongest early compliance habit is simple: document each action when it happens. A properly signed Board resolution, acknowledgment, certificate, and register entry is far easier to maintain than to recreate two years later. If you are hiring or raising funds soon after incorporation, see our guide on <Link href="/blog/essential-compliance-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>essential ongoing compliance for startups</Link>.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Just incorporated? Get the first 30 days right.</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle first Board meeting documentation, auditor appointment, share certificates, GST registration, and statutory register setup for newly incorporated companies.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>How to Incorporate a Company in India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/essential-compliance-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Essential Compliance for Indian Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar: Year 1 to Year 3</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

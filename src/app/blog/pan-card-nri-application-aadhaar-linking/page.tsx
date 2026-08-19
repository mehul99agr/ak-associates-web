import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PAN Card for NRIs (2026)',
  description: 'How NRIs apply for a PAN card from abroad (Form 49A vs 49AA), Aadhaar-PAN linking exemption, when PAN is required for property and investments, and what happens if PAN becomes inoperative.',
  keywords: ['PAN card NRI', 'NRI PAN application', 'PAN card for NRI from abroad', 'Aadhaar PAN linking NRI', 'NRI PAN inoperative', 'Form 49A NRI', 'PAN required NRI property'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/pan-card-nri-application-aadhaar-linking' },
  openGraph: { title: 'PAN Card for NRIs: Application & Aadhaar Linking', description: 'How to apply from abroad, Aadhaar exemption, and when PAN is required.', url: 'https://agrawalkhandelwal.com/blog/pan-card-nri-application-aadhaar-linking', type: 'article' },
}

const articleLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'PAN Card for NRIs (2026)', description: 'PAN application, Aadhaar linking, and requirements for NRIs.', datePublished: '2026-04-18', dateModified: '2026-04-18', author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' }, publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } }, inLanguage: 'en-IN', isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' }, mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/pan-card-nri-application-aadhaar-linking' }

const faqs: [string, string][] = [
  ['How can an NRI apply for a PAN card from abroad?', 'NRIs can apply online through the Protean (NSDL) portal using Form 49A (for Indian citizens, including NRIs) or Form 49AA (for foreign citizens). The application requires passport copy, overseas address proof, and a photograph. Documents must be self-attested and, for applications from abroad, attested by the Indian Embassy/Consulate or an apostille. PAN is typically issued within 15-20 working days and can be sent to a foreign address.'],
  ['Do NRIs need to link Aadhaar with PAN?', 'NRIs who do not have Aadhaar are generally exempt from the mandatory Aadhaar-PAN linking requirement. The Income Tax Act requires linking for residents; NRIs who have never obtained Aadhaar or whose Aadhaar is not updated are not penalised. However, NRIs who do have Aadhaar and are enrolled in the UIDAI database may still receive linking reminders. If you have Aadhaar and can link it, doing so avoids potential system-level issues.'],
  ['When is PAN required for NRIs?', 'PAN is required for: buying or selling property in India, opening NRO/NRE bank accounts, investing in mutual funds or stocks, filing Indian ITR, receiving taxable payments (the payer needs your PAN for TDS compliance), and most financial transactions above Rs 50,000. Without PAN, TDS is deducted at the higher rate of 20% instead of the applicable rate.'],
  ['What happens if an NRI\'s PAN becomes inoperative?', 'If PAN is flagged as inoperative (typically due to non-linking with Aadhaar for those required to link), TDS is deducted at 20% instead of the applicable rate, tax refunds are not processed, and the PAN cannot be used for financial transactions. NRIs who are exempt from Aadhaar linking should ensure their exemption is properly recorded. If your PAN has been flagged in error, contact the jurisdictional Assessing Officer or file a grievance on the e-filing portal.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function PANCardNRIBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>PAN Card for NRIs: How to Apply, Aadhaar Linking, and When You Need It</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published April 18, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Apply online via Protean (NSDL) using <strong>Form 49A</strong> (Indian citizen NRIs) or <strong>Form 49AA</strong> (foreign citizens).</li>
                  <li style={{ marginBottom: '0.4rem' }}>NRIs without Aadhaar are generally <strong>exempt from Aadhaar-PAN linking</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>PAN is required for property transactions, bank accounts, investments, and ITR filing.</li>
                  <li style={{ marginBottom: 0 }}>Without PAN, TDS jumps to <strong>20%</strong> instead of the applicable rate.</li>
                </ul>
              </div>

              <p>PAN is the gateway to every financial transaction an NRI has in India. Without it, you cannot buy or sell property, open bank accounts, invest in mutual funds, or file a tax return. Yet many NRIs either do not have one (common for those who left India early) or have a PAN that has become inoperative due to Aadhaar linking issues. Here is how to get it sorted.</p>

              <h2>How to Apply for PAN from Abroad</h2>
              <h3>Form 49A vs Form 49AA</h3>
              <ul>
                <li><strong>Form 49A:</strong> For Indian citizens (including NRIs holding Indian passport). Apply through the Protean (NSDL) portal or UTIITSL portal.</li>
                <li><strong>Form 49AA:</strong> For foreign citizens (OCI holders, foreign nationals with Indian income). Same portals.</li>
              </ul>
              <h3>Documents Required</h3>
              <ul>
                <li>Passport copy (mandatory for NRIs as identity and address proof)</li>
                <li>Overseas address proof (utility bill, bank statement, or driving licence from country of residence)</li>
                <li>Passport-size photograph</li>
                <li>For applications from abroad: documents must be attested by the Indian Embassy/Consulate, or apostilled, or notarised by a local notary</li>
              </ul>
              <h3>Processing</h3>
              <p>PAN is typically allotted within 15-20 working days. The physical card can be sent to a foreign address (select &quot;Communication Address outside India&quot; in the application). An e-PAN (digital copy) is available sooner via email.</p>

              <h2>Aadhaar-PAN Linking: NRI Exemption</h2>
              <p>Section 139AA mandates Aadhaar-PAN linking for all PAN holders. However, NRIs who do not have Aadhaar (or whose Aadhaar is not enrolled) are <strong>generally exempt</strong>. The mandate primarily targets resident Indians who are eligible for Aadhaar. Key points:</p>
              <ul>
                <li>If you never enrolled for Aadhaar: you are exempt. Your PAN should remain operative.</li>
                <li>If you have Aadhaar but it is not linked: the system may flag your PAN. Link it if possible, or file a grievance explaining NRI status.</li>
                <li>If your PAN was flagged inoperative in error: contact the jurisdictional AO or use the e-filing portal&apos;s grievance mechanism.</li>
              </ul>

              <h2>When NRIs Need PAN</h2>
              <ul>
                <li><strong>Property transactions:</strong> Both buyer and seller need PAN for registration. TDS compliance under <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 393(2)</Link> (earlier Section 195) requires the NRI seller&apos;s PAN.</li>
                <li><strong>Bank accounts:</strong> PAN is mandatory for opening NRE/NRO accounts and for KYC.</li>
                <li><strong>Investments:</strong> Required for mutual fund KYC, demat account opening, and stock trading via PIS.</li>
                <li><strong><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>ITR filing</Link>:</strong> PAN is the login credential for the e-filing portal.</li>
                <li><strong>TDS compliance:</strong> Without PAN, TDS is deducted at the higher rate of 20% (or the applicable rate, whichever is higher) under Section 206AA.</li>
              </ul>

              <h2>Higher TDS Without PAN (Section 206AA)</h2>
              <p>If an NRI does not furnish PAN to the payer, TDS is deducted at the higher of:</p>
              <ul>
                <li>The rate specified in the relevant section</li>
                <li>The rate in force (as per Finance Act)</li>
                <li><strong>20%</strong></li>
              </ul>
              <p>For NRO interest where the domestic rate is already 30%, this does not make a difference. But for income where DTAA rates (10-15%) could apply, not having PAN means you lose the treaty benefit entirely and pay 20% minimum. Get PAN before entering any Indian financial transaction.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help with PAN application or Aadhaar issues?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We assist NRIs with PAN applications from abroad, Aadhaar linking exemptions, and resolving inoperative PAN issues.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing from Abroad</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

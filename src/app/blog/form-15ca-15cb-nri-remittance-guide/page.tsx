import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Form 15CA & 15CB (Now 145 & 146): NRI Remittance Compliance Guide (2026)',
  description: 'When Form 15CA/15CB is required, the 4 parts of Form 15CA, when a CA certificate (15CB) is needed, step-by-step filing on the Income Tax portal, and what happens if you skip it.',
  keywords: [
    'form 15CA', 'form 15CB', 'form 145', 'form 146', '15CA 15CB NRI',
    'form 15CA online filing', 'form 15CB CA certificate', 'NRI remittance form',
    'form 15CA parts', 'when is 15CB required', 'form 15CA 15CB for property sale',
    'foreign remittance form India', 'form 145 146 income tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-15ca-15cb-nri-remittance-guide' },
  openGraph: {
    title: 'Form 15CA & 15CB (Now 145 & 146): NRI Remittance Compliance Guide',
    description: 'When required, which part to file, CA certificate process, and penalties for skipping Form 15CA/15CB.',
    url: 'https://agrawalkhandelwal.com/blog/form-15ca-15cb-nri-remittance-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 15CA & 15CB for NRI Remittances: Complete Guide (2026)',
    description: 'Which part of Form 15CA to file, when 15CB CA certificate is needed, and step-by-step process.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Form 15CA & 15CB (Now 145 & 146): NRI Remittance Compliance Guide (2026)',
  description: 'When Form 15CA/15CB is required, the 4 parts of Form 15CA, when a CA certificate (15CB) is needed, step-by-step filing, and penalties.',
  datePublished: '2026-06-27',
  dateModified: '2026-06-27',
  author: {
    '@type': 'Person',
    '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
    name: 'CA Mehul Agrawal',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://agrawalkhandelwal.com/#organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' },
  },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/form-15ca-15cb-nri-remittance-guide',
}

const faqs: [string, string][] = [
  [
    'When is Form 15CA (now Form 145) required?',
    'Form 15CA (now Form 145) is required before making any foreign remittance that is chargeable to tax in India. This includes property sale proceeds, rent, interest, professional fees, and any other payment to a non-resident. Certain payments are exempt from the Form 15CA requirement, including remittances covered by a specified list of non-taxable payments (listed in Rule 37BB), and payments below Rs 5 lakh in a financial year that are not chargeable to tax.',
  ],
  [
    'When is Form 15CB (now Form 146) required?',
    'Form 15CB (now Form 146) is a Chartered Accountant certificate required when the remittance exceeds Rs 5 lakh and is chargeable to tax. The CA certifies that applicable Indian taxes have been paid or deducted. It is not required for remittances below Rs 5 lakh, for payments covered under the exempt list in Rule 37BB, or where the remitter has obtained a nil withholding certificate from the Assessing Officer.',
  ],
  [
    'What are the 4 parts of Form 15CA?',
    'Form 15CA has four parts: Part A is for remittances below Rs 5 lakh (no CA certificate needed). Part B is for remittances covered by a lower or nil withholding certificate from the Assessing Officer (Form 13/Form 128). Part C is for remittances above Rs 5 lakh where a CA certificate (Form 15CB/Form 146) has been obtained. Part D is for remittances that are not chargeable to tax. Most NRI property sale repatriations fall under Part B (if Form 13 was obtained) or Part C.',
  ],
  [
    'Can the bank process a remittance without Form 15CA/15CB?',
    'No. The Authorised Dealer bank is legally required to obtain Form 15CA before processing any foreign remittance that falls within the scope of Rule 37BB. Banks will not release the funds without the Form 15CA acknowledgment number and, where applicable, the Form 15CB certificate. Attempting to remit without these forms will result in the bank rejecting the transfer request.',
  ],
  [
    'What is the penalty for not filing Form 15CA/15CB?',
    'Failure to furnish Form 15CA attracts a penalty of Rs 1 lakh under Section 271-I of the Income Tax Act (now Section 359). Additionally, the bank may report the non-compliance to the Income Tax department, which can lead to scrutiny of both the remitter and the recipient. Filing incorrect information in Form 15CA or 15CB can also attract penalty proceedings.',
  ],
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function Form15CA15CBBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Form 15CA &amp; 15CB (Now 145 &amp; 146): The Forms Your Bank Won&apos;t Process Without
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published June 27, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 145 (earlier Form 15CA)</strong> is a declaration filed online by the remitter before any foreign remittance that is chargeable to Indian tax.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 146 (earlier Form 15CB)</strong> is a CA certificate required for remittances above Rs 5 lakh, certifying that taxes have been paid or deducted.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Your bank will not process the remittance without these forms. No exceptions.</li>
                    <li style={{ marginBottom: 0 }}>Penalty for non-filing is Rs 1 lakh under Section 359 (earlier Section 271-I under the 1961 Act).</li>
                  </ul>
                </div>

                <p>Every NRI who has tried to repatriate money from India has encountered these two forms, usually at the worst possible moment: when the bank holds up a transfer they expected to go through smoothly. Form 145 and 146 (earlier Form 15CA and 15CB under the 1961 Act) are the Income Tax department&apos;s mechanism for tracking foreign remittances and ensuring tax compliance before money leaves the country. Here is how they work, when each is required, and how to file them correctly.</p>

                <h2>What Is Form 145 (Earlier Form 15CA)?</h2>
                <p>Form 145 (earlier Form 15CA) is an online declaration filed by the person making the remittance (the remitter) on the Income Tax e-filing portal. It provides the department with details of the remittance: the nature of the payment, the amount, the recipient, and the tax treatment. Think of it as an advance information report that lets the department verify tax compliance before the money leaves India.</p>
                <p>The form must be filed <strong>before</strong> the remittance is made. Once submitted, you receive an acknowledgment number, which you provide to your bank along with the other repatriation documentation.</p>

                <h2>The 4 Parts of Form 145</h2>
                <p>Form 145 is not a single form but four parts, and you file only the one that matches your situation:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Part</th>
                        <th style={thStyle}>When to Use</th>
                        <th style={thStyle}>CA Certificate (Form 146) Needed?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>Part A</strong></td>
                        <td style={tdStyle}>Remittance is chargeable to tax but total amount does not exceed Rs 5 lakh in the financial year</td>
                        <td style={tdStyle}>No</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Part B</strong></td>
                        <td style={tdAltStyle}>Remitter has obtained a certificate from the Assessing Officer (Form 128, earlier Form 13, or Section 395 order) for lower or nil withholding</td>
                        <td style={tdAltStyle}>No (AO certificate substitutes)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Part C</strong></td>
                        <td style={tdStyle}>Remittance exceeds Rs 5 lakh and is chargeable to tax (no AO certificate obtained)</td>
                        <td style={tdStyle}><strong>Yes (Form 146)</strong></td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Part D</strong></td>
                        <td style={tdAltStyle}>Remittance is not chargeable to tax under the Income Tax Act or any DTAA</td>
                        <td style={tdAltStyle}>No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Most NRI property sale repatriations fall under <strong>Part B</strong> (if a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> was obtained) or <strong>Part C</strong> (if TDS was deducted at full rates and the repatriation exceeds Rs 5 lakh).</p>

                <h2>What Is Form 146 (Earlier Form 15CB)?</h2>
                <p>Form 146 (earlier Form 15CB) is a certificate issued by a Chartered Accountant. It is required whenever Form 145 Part C applies (remittance above Rs 5 lakh, chargeable to tax, no AO certificate). The CA reviews the following before signing the certificate:</p>
                <ul>
                  <li>Nature of the remittance and the applicable tax provision</li>
                  <li>Whether TDS has been correctly deducted and deposited (TDS certificate / Form 131)</li>
                  <li>Whether any DTAA benefit is being claimed, and if so, whether a Tax Residency Certificate has been obtained</li>
                  <li>Whether the remitter has any outstanding tax demands</li>
                  <li>The source of funds and supporting documents</li>
                </ul>
                <p>The CA uploads Form 146 to the Income Tax portal, and the remitter then links it to their Form 145 Part C filing. The bank verifies both before processing the remittance.</p>

                <h2>Step-by-Step: Filing Form 145 and 146</h2>
                <ol>
                  <li><strong>Determine which Part applies.</strong> Check the amount, whether tax is chargeable, and whether you have an AO certificate (Form 128, earlier Form 13).</li>
                  <li><strong>If Part C: Engage a CA for Form 146 first.</strong> The CA needs your TDS certificates, sale deed or source documents, PAN, passport copy, and bank details. Allow 2-3 working days for the CA to review and upload Form 146.</li>
                  <li><strong>Log in to the Income Tax e-filing portal</strong> (eportal.incometax.gov.in) and navigate to e-File &rarr; Income Tax Forms &rarr; File Income Tax Forms &rarr; Form 145.</li>
                  <li><strong>Select the correct Part</strong> (A, B, C, or D) and fill in the remittance details: amount, recipient details, nature of payment, tax provision, TDS details.</li>
                  <li><strong>If Part C: Link the Form 146</strong> uploaded by your CA. The portal will show the available Form 146 certificates filed against your PAN.</li>
                  <li><strong>Submit and download the acknowledgment.</strong> You will receive a unique acknowledgment number.</li>
                  <li><strong>Submit the acknowledgment to your bank</strong> along with Form 146 (if applicable), source documents, and the rest of the <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>repatriation documentation</Link>.</li>
                </ol>

                <h2>When Form 145/146 Is NOT Required</h2>
                <p>Certain remittances are exempt from the Form 145/146 requirement under Rule 37BB. These include:</p>
                <ul>
                  <li>Remittances by individuals under the Liberalised Remittance Scheme (LRS) that do not involve purchase of assets or investment (e.g., travel, education, medical treatment)</li>
                  <li>Payments covered by a specified list of 33 nature codes in Rule 37BB (listed in the annexure to the rule) that are not chargeable to tax</li>
                  <li>Payments from NRE or FCNR accounts (since these are already freely repatriable and not chargeable to Indian tax)</li>
                </ul>
                <p><strong>NRO repatriations are NOT exempt.</strong> Any remittance from an NRO account, whether property proceeds, rent, or interest, requires Form 145/146 compliance.</p>

                <h2>Common Mistakes That Delay or Block Remittances</h2>
                <ul>
                  <li><strong>Filing the wrong Part:</strong> Filing Part D (not chargeable to tax) for a property sale proceeds remittance that is clearly chargeable. Banks and the department catch this.</li>
                  <li><strong>Amount mismatch:</strong> The amount in Form 145 must match the actual remittance amount. A mismatch with Form 146 or with the bank instruction leads to rejection.</li>
                  <li><strong>Form 146 not linked:</strong> Filing Part C without first having the CA upload Form 146. The portal requires the linkage.</li>
                  <li><strong>Expired Form 128:</strong> Using Part B with an AO certificate that has expired or does not cover the current remittance amount.</li>
                  <li><strong>PAN issues:</strong> An inoperative PAN prevents Form 145 filing altogether.</li>
                </ul>

                <h2>Penalties for Non-Compliance</h2>
                <p>Failure to furnish Form 145 attracts a <strong>penalty of Rs 1 lakh</strong> under Section 359 (earlier Section 271-I under the 1961 Act). Filing with incorrect information can attract separate penalty proceedings. The bank itself faces regulatory consequences from RBI for processing remittances without Form 145, which is why they are strict about requiring it.</p>

                <h2>Form 145/146 Under the New Income Tax Act 2025</h2>
                <p>The new Act replaces the old form numbers but does not change the substance:</p>
                <ul>
                  <li><strong>Form 145</strong> replaces Form 15CA</li>
                  <li><strong>Form 146</strong> replaces Form 15CB</li>
                  <li>The four-part structure is retained in Form 145</li>
                  <li>All threshold amounts, CA certification requirements, and penalty provisions remain the same</li>
                </ul>
                <p>Both old and new form numbers are currently in use during the transition period. Your bank and CA should accept either reference.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need Form 15CB (146) certification for your remittance?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We issue Form 146 (15CB) CA certificates, file Form 145 (15CA), and handle end-to-end remittance documentation for NRI clients.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation: Rules, Limits & Process</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-repatriation-property-sale-proceeds" style={{ color: 'var(--primary)', fontWeight: 600 }}>Repatriating NRI Property Sale Proceeds</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale: Complete Guide</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

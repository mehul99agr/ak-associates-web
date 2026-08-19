import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Section 195 TDS Guide (FY 2026-27)',
  description: 'When and how to deduct TDS under Section 195 on payments to NRIs: property sale, rent, professional fees, interest. Rate table, TAN requirement, Form 27Q filing, and penalties for non-compliance.',
  keywords: [
    'section 195 TDS', 'TDS on payment to NRI', 'section 195 income tax',
    'TDS NRI India', 'section 195 TDS rate', 'when to deduct TDS section 195',
    'TDS on rent to NRI', 'TDS on professional fees NRI', 'section 195 property NRI',
    'form 27Q section 195', 'TAN requirement NRI payment',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-195-tds-nri-payments-guide' },
  openGraph: {
    title: 'Section 195 TDS Guide (FY 2026-27)',
    description: 'Rate table, TAN process, Form 27Q filing, and penalties for TDS on all payment types to NRIs under Section 195.',
    url: 'https://agrawalkhandelwal.com/blog/section-195-tds-nri-payments-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 195 TDS Guide (FY 2026-27)',
    description: 'When and how to deduct TDS under Section 195 on payments to NRIs: property, rent, fees, interest.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Section 195 TDS Guide (FY 2026-27)',
  description: 'When and how to deduct TDS under Section 195 on payments to NRIs: property sale, rent, professional fees, interest. Rate table, TAN requirement, Form 27Q filing, and penalties.',
  datePublished: '2026-06-12',
  dateModified: '2026-06-12',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/section-195-tds-nri-payments-guide',
}

const faqs: [string, string][] = [
  [
    'Does Section 195 apply to all payments made to NRIs?',
    'Section 195 applies to any payment to a non-resident that is chargeable to tax in India. If the income is not taxable in India, for example NRE fixed deposit interest which is exempt under Section 10(4)(ii), Section 195 does not require TDS. The key test is whether the payment constitutes income chargeable to tax under the Income Tax Act, not simply whether the recipient is an NRI.',
  ],
  [
    'What is the TDS rate under Section 195?',
    'There is no single rate. Section 195 requires TDS at the rates in force for the specific type of income: 12.5% for long-term capital gains on property (held over 2 years), 30% for short-term capital gains and rental income, 10% for royalties and fees for technical services, and the applicable slab rate for salary. Surcharge and 4% cess are added on top. If the NRI has a lower deduction certificate under Section 197 (Form 13, now Form 128), the rate specified in that certificate applies instead.',
  ],
  [
    'Is TAN mandatory for Section 195 deductions?',
    'Yes. Unlike Section 194-IA (resident property seller, where TAN is not required and the buyer files Form 26QB with just a PAN), all Section 195 deductions require the payer to have a Tax Deduction Account Number (TAN). Apply using Form 49B on the Protean (NSDL) portal. TAN is typically issued within 7 to 10 working days.',
  ],
  [
    'What is the difference between Section 195 and Section 194-IA?',
    'Section 194-IA covers TDS on property purchases from resident sellers above Rs 50 lakh, at a flat 1% rate, filed via Form 26QB without needing a TAN. Section 195 covers TDS on any payment to a non-resident (NRI) that is chargeable to Indian tax, at rates ranging from 10% to 30% plus surcharge and cess, filed via Form 27Q and requiring a TAN. Applying Section 194-IA when the seller is an NRI is one of the most common and costly compliance errors.',
  ],
  [
    'Can DTAA reduce the TDS rate under Section 195?',
    'Yes, for certain income types. Interest, royalties, and fees for technical services often have lower treaty rates (typically 10-15%) under India\'s Double Taxation Avoidance Agreements. However, capital gains on immovable property are almost never reduced by DTAA because most treaties give India unrestricted taxing rights on property gains. To claim a lower DTAA rate, the NRI must provide a Tax Residency Certificate and the payer should verify the applicable treaty article before applying the reduced rate.',
  ],
  [
    'What happens if TDS under Section 195 is not deducted?',
    'The payer becomes an assessee in default under Section 201 (now Section 398). They are personally liable for the full TDS amount plus interest at 1% per month for non-deduction and 1.5% per month for non-deposit. A penalty equal to the TDS amount can be levied under Section 271C, and willful non-deposit can attract prosecution under Section 276B with imprisonment from 3 months to 7 years.',
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

export default function Section195Blog() {
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
                Section 195 TDS on Payments to NRIs: Everything the Payer Needs to Know
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published June 12, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Section 393(2) (earlier Section 195 under the 1961 Act) requires TDS on any payment to a non-resident that is chargeable to Indian tax.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It covers property sales, rent, professional fees, interest, royalties, and any other income with an Indian source - not just property.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The payer (not the NRI) is responsible for obtaining a TAN, deducting at the correct rate, depositing via Challan ITNS-281, and filing Form 144 (earlier Form 27Q) quarterly.</li>
                    <li style={{ marginBottom: 0 }}>Getting it wrong means the payer is personally liable for the TDS amount, interest, penalty, and potential prosecution.</li>
                  </ul>
                </div>

                <p>Section 195 is the provision most people encounter only when they buy property from an NRI, and it surprises them. But Section 195 is far broader than property. It applies to every payment to a non-resident that carries an Indian tax liability: rent on Indian property, fees for professional services rendered in India, interest on Indian deposits, royalties, and more. Most people know the property angle because the numbers are large enough to attract attention. The smaller payments - a monthly rent to an NRI landlord, a consulting fee to a non-resident professional - slip through, and that is where compliance gaps turn into notices.</p>

                <h2>When Does Section 195 Apply?</h2>
                <p>Two conditions must be met simultaneously:</p>
                <ol>
                  <li><strong>The recipient is a non-resident</strong> under Section 6 of the Income Tax Act for the financial year in which the payment is made. This is determined by the recipient&apos;s <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>residential status</Link>, not their citizenship or passport.</li>
                  <li><strong>The payment is chargeable to tax in India.</strong> If the income is exempt under the Act (e.g., NRE deposit interest under Section 10(4)(ii)) or not sourced from India, Section 195 does not apply.</li>
                </ol>
                <p>The payer can be anyone - an individual, a company, a partnership, or an HUF. There is no threshold below which Section 195 disappears, unlike Section 194-IA which only kicks in above Rs 50 lakh for resident property sellers.</p>

                <h2>TDS Rate Table Under Section 195 (FY 2026-27)</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Nature of Payment</th>
                        <th style={thStyle}>Base TDS Rate</th>
                        <th style={thStyle}>Effective Rate (with surcharge + cess)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>LTCG on property</strong> (held &gt;2 years)</td>
                        <td style={tdStyle}>12.5%</td>
                        <td style={tdStyle}>~13% to 14.95% depending on value</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>STCG on property</strong> (held &le;2 years)</td>
                        <td style={tdAltStyle}>30%</td>
                        <td style={tdAltStyle}>~31.2% to 42.74%</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Rental income</strong></td>
                        <td style={tdStyle}>30%</td>
                        <td style={tdStyle}>~31.2% to 42.74%</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Interest</strong> (NRO deposits, bonds)</td>
                        <td style={tdAltStyle}>30%</td>
                        <td style={tdAltStyle}>~31.2% (or DTAA rate if lower)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Royalties</strong></td>
                        <td style={tdStyle}>10%</td>
                        <td style={tdStyle}>~10.4% (or DTAA rate)</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Fees for technical services</strong></td>
                        <td style={tdAltStyle}>10%</td>
                        <td style={tdAltStyle}>~10.4% (or DTAA rate)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Any other income</strong></td>
                        <td style={tdStyle}>30%</td>
                        <td style={tdStyle}>~31.2% to 42.74%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>Important:</strong> TDS under Section 195 for property is computed on the <strong>full sale consideration</strong>, not the profit. This is why the actual TDS deducted often far exceeds the NRI&apos;s real tax liability, and why a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> is critical for property sales.</p>

                <h2>Section 195 vs Section 194-IA: The Confusion That Costs Money</h2>
                <p>This is the single most common compliance error we see in NRI property transactions. Here is the difference in plain terms:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}></th>
                        <th style={thStyle}>Section 194-IA</th>
                        <th style={thStyle}>Section 195</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>Applies when seller is</strong></td>
                        <td style={tdStyle}>Resident</td>
                        <td style={tdStyle}>Non-Resident (NRI)</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>TDS Rate</strong></td>
                        <td style={tdAltStyle}>1% (above Rs 50 lakh)</td>
                        <td style={tdAltStyle}>12.5% to 30% + surcharge + cess</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>TAN Required?</strong></td>
                        <td style={tdStyle}>No</td>
                        <td style={tdStyle}>Yes</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Form to File</strong></td>
                        <td style={tdAltStyle}><Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 26QB</Link></td>
                        <td style={tdAltStyle}>Form 144 (earlier Form 27Q)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Threshold</strong></td>
                        <td style={tdStyle}>Rs 50 lakh</td>
                        <td style={tdStyle}>No threshold</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>A buyer who files Form 26QB for an NRI seller has filed the wrong form at the wrong rate. The 1% deduction under Section 194-IA is a fraction of what Section 195 requires, and the buyer becomes personally liable for the shortfall plus interest.</p>

                <h2>Step-by-Step: Complying with Section 195</h2>
                <ol>
                  <li><strong>Verify the recipient&apos;s residential status.</strong> Ask for a declaration or check their India presence for the financial year. If they qualify as a resident (even under <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR status</Link>), Section 195 does not apply.</li>
                  <li><strong>Obtain a TAN.</strong> Apply via Form 49B on the Protean (NSDL) portal. See our <Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN application guide</Link> for the complete walkthrough. Allow 7 to 10 working days.</li>
                  <li><strong>Determine the correct TDS rate.</strong> Use the table above, and check whether a DTAA provides a lower rate for the specific income type. For property sales, consider whether the NRI has a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 certificate</Link> for a reduced rate.</li>
                  <li><strong>Deduct TDS at the time of payment or credit</strong>, whichever is earlier. For property transactions with multiple instalments, deduct on each instalment.</li>
                  <li><strong>Deposit via Challan ITNS-281</strong> by the 7th of the following month (30th April for March deductions).</li>
                  <li><strong>File Form 144</strong> (earlier Form 27Q) quarterly on the TRACES portal: July 31 (Q1), October 31 (Q2), January 31 (Q3), May 31 (Q4).</li>
                  <li><strong>Issue Form 131</strong> (earlier Form 16A) to the NRI within 15 days of the Form 144 due date. The NRI needs this to claim TDS credit in their Indian ITR.</li>
                </ol>

                <h2>The Rental Income Trap</h2>
                <p>Most people associate Section 195 with property sales because the amounts are large and visible. But the most overlooked application is <strong>rent paid to an NRI landlord</strong>. If your landlord is a non-resident and the rent is sourced from an Indian property, you are required to deduct TDS at 30% (plus surcharge and cess) under Section 393(2), obtain a TAN, and file Form 144 quarterly.</p>
                <p>In practice, many tenants do not even know their landlord is an NRI, or they assume the standard 10% TDS under Section 194-I applies. It does not. Section 194-I covers rent to residents only. When the landlord is a non-resident, Section 195 overrides, the rate jumps to 30%, and the compliance requirements change entirely.</p>
                <p>For the NRI landlord, this 30% TDS on gross rent (before any deductions for repairs, property tax, or the standard 30% deduction) typically far exceeds their actual tax liability. The remedy is the same as for property sales: apply for a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link>, or file an ITR to <Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>claim a TDS refund</Link>.</p>

                <h2>DTAA and Section 195: When Treaty Rates Apply</h2>
                <p>India has Double Taxation Avoidance Agreements with over 90 countries. For certain income types, the DTAA rate is lower than the domestic Section 195 rate:</p>
                <ul>
                  <li><strong>Interest:</strong> The domestic rate is 30%, but the India-US DTAA caps it at 15%, and the India-UAE DTAA at 12.5%.</li>
                  <li><strong>Royalties and FTS:</strong> Domestic rate is 10%, and some DTAAs provide the same or even lower rates.</li>
                  <li><strong>Capital gains on property:</strong> Most DTAAs give India unrestricted taxing rights, so DTAA does not reduce TDS on property sales.</li>
                </ul>
                <p>To apply a DTAA rate, the NRI must provide a valid Tax Residency Certificate (TRC) from their country of residence, and the payer should verify the applicable treaty article. Without a TRC, the domestic rate applies.</p>

                <h2>Section 195 Under the New Income Tax Act 2025</h2>
                <p>The new Income Tax Act 2025 (effective April 1, 2026) replaces old Section 195 with <strong>Section 393(2)</strong>, but the substance remains the same. The corresponding form changes are:</p>
                <ul>
                  <li><strong>Form 144</strong> replaces Form 27Q</li>
                  <li><strong>Form 131</strong> replaces Form 16A</li>
                  <li><strong>Form 128</strong> replaces Form 13</li>
                  <li><strong>Form 145</strong> replaces Form 15CA</li>
                  <li><strong>Form 146</strong> replaces Form 15CB</li>
                </ul>
                <p>The obligations, rates, and penalties are unchanged. If you were compliant under the old numbering, you are compliant under the new one.</p>

                <h2>Penalties for Non-Compliance</h2>
                <p>The consequences of failing to deduct or deposit TDS under Section 195 are severe and fall entirely on the payer:</p>
                <ul>
                  <li><strong>Personal liability (Section 398, earlier Section 201):</strong> The payer must pay the TDS amount from their own funds, regardless of whether the NRI has since paid their taxes independently.</li>
                  <li><strong>Interest:</strong> 1% per month for non-deduction, 1.5% per month for deduction but non-deposit.</li>
                  <li><strong>Penalty (Section 271C):</strong> Equal to the TDS amount not deducted.</li>
                  <li><strong>Prosecution (Section 276B):</strong> Willful failure to deposit deducted TDS can attract imprisonment from 3 months to 7 years.</li>
                  <li><strong>Disallowed expense:</strong> Under Section 40(a)(i), any payment on which TDS was required but not deducted is disallowed as a business expense for the payer in that year.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with Section 195 compliance?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle TAN applications, Form 27Q filing, Form 13 certificates, and DTAA rate determinations for all types of NRI payments.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale: Complete Guide (FY 2026-27)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide for NRI Property Buyers</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13: How to Get a Lower TDS Certificate</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>How NRIs Can Claim a TDS Refund</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/tools/nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Property TDS Calculator</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

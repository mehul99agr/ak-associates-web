import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI DTAA Guide by Country (2026)',
  description: 'DTAA treaty rates for NRIs by country: dividend, interest, royalty, and capital gains withholding rates for US, UK, UAE, Canada, Australia, and Singapore. How to claim benefits with TRC and Form 10F.',
  keywords: [
    'DTAA India NRI', 'India US DTAA', 'India UK DTAA', 'India UAE DTAA',
    'double taxation NRI', 'DTAA rates India', 'India Canada DTAA',
    'India Australia DTAA', 'India Singapore DTAA', 'DTAA tax relief NRI',
    'TRC Form 10F NRI', 'foreign tax credit India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/dtaa-guide-nri-country-wise' },
  openGraph: {
    title: 'India DTAA Guide for NRIs by Country (2026)',
    description: 'Treaty rates for 6 key NRI corridors, how to claim benefits, and Form 10F process.',
    url: 'https://agrawalkhandelwal.com/blog/dtaa-guide-nri-country-wise',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India DTAA Rates for NRIs: US, UK, UAE, Canada, Australia, Singapore',
    description: 'Treaty withholding rates, TRC process, and Form 10F for claiming DTAA benefits.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'India DTAA Guide for NRIs by Country: US, UK, UAE, Canada, Australia, Singapore',
  description: 'DTAA treaty rates for NRIs by country and how to claim benefits.',
  datePublished: '2026-08-11', dateModified: '2026-08-11',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/dtaa-guide-nri-country-wise',
}

const faqs: [string, string][] = [
  ['What is a DTAA and how does it help NRIs?', 'A Double Taxation Avoidance Agreement (DTAA) is a bilateral treaty between India and another country that prevents the same income from being taxed twice. For NRIs, DTAAs reduce withholding tax rates on interest, dividends, royalties, and certain other income types. They also provide tie-breaker rules for determining tax residency when an individual qualifies as resident in both countries during a transition year.'],
  ['How do I claim DTAA benefits in India?', 'To claim DTAA benefits, you need: (1) a Tax Residency Certificate (TRC) from your country of residence, (2) Form 10F filed on the Indian Income Tax portal declaring treaty details, and (3) a self-declaration of not having a Permanent Establishment in India (where applicable). Provide these to the payer before the payment for lower withholding, or claim the benefit when filing your Indian ITR.'],
  ['Does DTAA reduce TDS on NRI property sale?', 'Generally no. Most of India\'s DTAAs give India unrestricted taxing rights on capital gains from immovable property (real estate). This means the full domestic TDS rate applies to property sales regardless of which country the NRI resides in. DTAA relief is more useful for interest income, dividends, and fees for technical services.'],
  ['What is Form 10F and who needs to file it?', 'Form 10F is a declaration filed by non-residents on the Indian Income Tax portal to claim DTAA benefits. It contains details of the taxpayer\'s country of residence, TIN, residency period, and the specific DTAA article being invoked. It must be filed before claiming any treaty benefit, either for lower withholding or when filing an ITR. A valid TRC from the country of residence is a prerequisite.'],
  ['Can I claim foreign tax credit in India?', 'Yes. If you are a resident of India (including RNOR) and have paid tax on the same income in another country, you can claim a foreign tax credit under Section 90 (for countries with DTAA) or Section 91 (for countries without DTAA). File Form 67 on the Income Tax portal before the ITR due date. The credit is limited to the lower of the foreign tax paid or the Indian tax on that income.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function DTAAGuideBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">International Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>India DTAA Guide for NRIs: Treaty Rates by Country and How to Claim Them</h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 11, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>
              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>India has DTAAs with 90+ countries. The treaty rate is often lower than the domestic rate for interest, dividends, and royalties.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Capital gains on Indian property are <strong>not</strong> reduced by DTAA in most treaties. India retains full taxing rights.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Claiming DTAA benefits requires a <strong>Tax Residency Certificate (TRC)</strong> from your country + <strong>Form 10F</strong> on the Indian portal.</li>
                    <li style={{ marginBottom: 0 }}>Foreign tax credits (for returning NRIs now resident in India) are claimed via <strong>Form 67</strong> before the ITR due date.</li>
                  </ul>
                </div>

                <p>DTAAs are the most underused tool in NRI tax planning. Most NRIs know they exist, few know the specific rates that apply to their country, and even fewer actually claim the benefits. Here are the treaty rates for the 6 countries that cover the vast majority of Indian NRIs, along with the process for claiming them.</p>

                <h2>Treaty Rate Comparison: 6 Key NRI Corridors</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Income Type</th>
                        <th style={thStyle}>Domestic Rate</th>
                        <th style={thStyle}>US</th>
                        <th style={thStyle}>UK</th>
                        <th style={thStyle}>UAE</th>
                        <th style={thStyle}>Canada</th>
                        <th style={thStyle}>Australia</th>
                        <th style={thStyle}>Singapore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>Interest</strong></td>
                        <td style={tdStyle}>30%</td>
                        <td style={tdStyle}>15%</td>
                        <td style={tdStyle}>15%</td>
                        <td style={tdStyle}>12.5%</td>
                        <td style={tdStyle}>15%</td>
                        <td style={tdStyle}>15%</td>
                        <td style={tdStyle}>15%</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Dividends</strong></td>
                        <td style={tdAltStyle}>20%</td>
                        <td style={tdAltStyle}>25%*</td>
                        <td style={tdAltStyle}>15%</td>
                        <td style={tdAltStyle}>10%</td>
                        <td style={tdAltStyle}>25%*</td>
                        <td style={tdAltStyle}>15%</td>
                        <td style={tdAltStyle}>15%</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Royalties</strong></td>
                        <td style={tdStyle}>10%</td>
                        <td style={tdStyle}>15%*</td>
                        <td style={tdStyle}>15%*</td>
                        <td style={tdStyle}>10%</td>
                        <td style={tdStyle}>15%*</td>
                        <td style={tdStyle}>10%</td>
                        <td style={tdStyle}>10%</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>FTS</strong></td>
                        <td style={tdAltStyle}>10%</td>
                        <td style={tdAltStyle}>15%*</td>
                        <td style={tdAltStyle}>15%*</td>
                        <td style={tdAltStyle}>No FTS article</td>
                        <td style={tdAltStyle}>15%*</td>
                        <td style={tdAltStyle}>10%</td>
                        <td style={tdAltStyle}>10%</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Property capital gains</strong></td>
                        <td style={tdStyle}>12.5-30%</td>
                        <td style={tdStyle}>No reduction</td>
                        <td style={tdStyle}>No reduction</td>
                        <td style={tdStyle}>No reduction</td>
                        <td style={tdStyle}>No reduction</td>
                        <td style={tdStyle}>No reduction</td>
                        <td style={tdStyle}>No reduction</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Pension</strong></td>
                        <td style={tdAltStyle}>Slab rate</td>
                        <td style={tdAltStyle}>Residence state</td>
                        <td style={tdAltStyle}>Residence state</td>
                        <td style={tdAltStyle}>No pension article</td>
                        <td style={tdAltStyle}>Residence state</td>
                        <td style={tdAltStyle}>Residence state</td>
                        <td style={tdAltStyle}>Residence state</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>* Where DTAA rate exceeds domestic rate, domestic rate applies (Section 90(2) - beneficial provisions prevail). FTS = Fees for Technical Services. Rates shown are before surcharge and cess. All rates subject to treaty-specific conditions and LOB provisions.</p>

                <h2>Key Takeaway by Country</h2>

                <h3>US NRIs</h3>
                <p>The India-US DTAA is most valuable for <strong>interest income</strong> (15% vs 30% domestic). For NRO FD interest, this cuts TDS in half. For <Link href="/blog/nri-rental-income-tax-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>rental income</Link> and <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>property capital gains</Link>, the DTAA does not help since India retains full taxing rights. <Link href="/blog/foreign-retirement-fund-taxation-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Pension/401(k) withdrawals</Link> are taxable in the country of residence under the treaty.</p>

                <h3>UK NRIs</h3>
                <p>Similar to the US DTAA: interest at 15%, dividends at 15%. The key difference is <Link href="/blog/foreign-retirement-fund-taxation-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>UK pension treatment</Link>: both state pension and private pension are taxable in the country of residence. The 25% UK tax-free lump sum (PCLS) may still be taxable in India.</p>

                <h3>UAE NRIs</h3>
                <p>The India-UAE DTAA offers the best dividend rate (10%) and competitive interest (12.5%). Since the UAE has no personal income tax, NRIs in the UAE effectively get single taxation at these treaty rates on their Indian income. This makes the UAE the most tax-efficient NRI corridor for passive Indian income. The <Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>POEM risk</Link> for UAE entity owners is the main compliance concern.</p>

                <h3>Canada, Australia, Singapore</h3>
                <p>All three have standard 15% rates on interest and dividends. Australia and Singapore match or beat the domestic rate on royalties and FTS (10%). The main DTAA value for these corridors is on interest income and pension (taxable in residence state, with credit for source-country tax).</p>

                <h2>How to Claim DTAA Benefits</h2>
                <h3>Step 1: Obtain a Tax Residency Certificate (TRC)</h3>
                <p>Apply to the tax authority of your country of residence. The TRC confirms that you are a tax resident of that country for the relevant period. Processing time varies: the US IRS can take several weeks; the UK HMRC is faster; UAE requires a valid residency visa and typically issues through the FTA or local government.</p>

                <h3>Step 2: File Form 10F on the Indian Portal</h3>
                <p>Log in to the Income Tax e-filing portal and file Form 10F electronically. Provide your foreign TIN, the DTAA country, the period of residency, and the treaty article you are invoking. This must be filed before claiming any treaty benefit.</p>

                <h3>Step 3: Provide TRC + Form 10F to the Payer</h3>
                <p>For lower withholding at source (e.g., 15% instead of 30% on NRO interest), provide the TRC and Form 10F to the payer (bank, tenant, AMC) before the payment. The payer then deducts at the treaty rate instead of the domestic rate.</p>

                <h3>Alternative: Claim in ITR</h3>
                <p>If TDS was deducted at the full domestic rate (because TRC/Form 10F was not provided in advance), you can still claim DTAA benefits when <Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>filing your ITR</Link>. Report the income, compute tax at the treaty rate, and claim the excess TDS as a refund.</p>

                <h2>Foreign Tax Credit (For Returning NRIs)</h2>
                <p>If you have become an Indian resident (including <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR</Link>) and are paying tax on the same income in both countries, you claim a foreign tax credit under Section 90 (DTAA countries) or Section 91 (non-DTAA countries):</p>
                <ul>
                  <li>File <strong>Form 67</strong> on the Income Tax portal <strong>before the ITR due date</strong>.</li>
                  <li>Attach proof of foreign tax paid (foreign tax return, withholding certificate).</li>
                  <li>Credit is limited to the lower of foreign tax paid or Indian tax on that income.</li>
                  <li>Country-by-country and income-by-income matching is required.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help claiming DTAA benefits or foreign tax credits?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We advise NRIs on treaty rate optimisation, TRC procurement, Form 10F filing, and Form 67 foreign tax credit claims.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/foreign-retirement-fund-taxation-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foreign Retirement Fund Taxation</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing from Abroad</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: 182-Day Rule</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/navigating-international-taxation-dtaa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Navigating International Taxation & DTAA</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

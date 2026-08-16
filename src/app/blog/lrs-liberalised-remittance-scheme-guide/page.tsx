import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LRS (Liberalised Remittance Scheme): USD 250K Limit, TCS & Compliance (2026)',
  description: 'Everything about India\'s Liberalised Remittance Scheme: USD 250,000 annual limit, permitted purposes, TCS rates (5-20%), Form A2, and how LRS interacts with NRI accounts and FEMA.',
  keywords: ['LRS India', 'liberalised remittance scheme', 'USD 250000 limit India', 'LRS TCS rate', 'LRS permitted purposes', 'send money abroad India', 'LRS FEMA', 'outward remittance India'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/lrs-liberalised-remittance-scheme-guide' },
  openGraph: { title: 'LRS: USD 250K Limit, TCS & Compliance (2026)', description: 'Permitted purposes, TCS rates, Form A2, and FEMA interaction.', url: 'https://agrawalkhandelwal.com/blog/lrs-liberalised-remittance-scheme-guide', type: 'article' },
}

const articleLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'LRS (Liberalised Remittance Scheme): USD 250K Limit, TCS & Compliance (2026)', description: 'LRS guide for outward remittances from India.', datePublished: '2026-06-20', dateModified: '2026-06-20', author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' }, publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } }, mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/lrs-liberalised-remittance-scheme-guide' }

const faqs: [string, string][] = [
  ['What is the LRS limit for FY 2026-27?', 'The Liberalised Remittance Scheme allows resident Indians to remit up to USD 250,000 per financial year (April to March) for any permitted purpose. This is a per-person, per-year limit, not per transaction. A family of four can collectively remit up to USD 1 million. The limit covers all LRS remittances in the year, including gifts, investments, education, travel, and maintenance of relatives abroad.'],
  ['What are the TCS rates on LRS remittances?', 'TCS (Tax Collected at Source) applies on LRS remittances above Rs 7 lakh in a financial year: 20% for most purposes (investment, gifts, general remittances), 5% for education (if financed by loan) and medical treatment, and 20% for education (if not financed by loan). The Rs 7 lakh threshold is cumulative across all LRS remittances in the year. TCS is not a separate tax - it is claimable as credit when filing your Indian ITR.'],
  ['Can NRIs use LRS?', 'No. LRS is available only to resident Indians. NRIs who want to send money from India use the NRO repatriation route (USD 1 million annual limit with Form 145/146) or freely repatriate from NRE/FCNR accounts. However, LRS is relevant to NRIs indirectly: when their resident family members send them money from India, the family member uses LRS and pays TCS.'],
  ['What is Form A2 in LRS?', 'Form A2 is the application-cum-declaration form submitted to the Authorised Dealer (AD) bank for processing an LRS remittance. It declares the purpose of remittance, the amount, the beneficiary details, and confirms that the remitter has not exceeded the USD 250,000 annual limit. The bank verifies the declaration and processes the remittance. PAN is mandatory for LRS transactions above Rs 50,000.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function LRSGuideBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">FEMA &amp; Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>LRS (Liberalised Remittance Scheme): The USD 250K Route for Sending Money Abroad</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published June 20, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>LRS allows <strong>resident Indians</strong> to remit up to <strong>USD 250,000 per financial year</strong> for permitted purposes. NRIs cannot use LRS.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>TCS of 5-20%</strong> applies on remittances above Rs 7 lakh (claimable as credit in ITR).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Permitted purposes include gifts to NRI family, overseas investments, education, medical treatment, travel, and maintenance of relatives abroad.</li>
                  <li style={{ marginBottom: 0 }}>This is different from <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO repatriation</Link> (USD 1M limit for NRIs) and <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE repatriation</Link> (unlimited for NRIs).</li>
                </ul>
              </div>

              <p>LRS is India&apos;s framework for allowing resident Indians to send money abroad. Every time a parent sends money to an NRI child for education, a resident invests in foreign stocks, or someone sends a gift to family abroad, LRS is the mechanism. It does not apply to NRIs directly, but it is deeply relevant to every NRI whose family sends them money from India.</p>

              <h2>Who Can Use LRS?</h2>
              <p>Only <strong>resident Indians</strong> (individuals, not companies). NRIs have separate remittance mechanisms:</p>
              <ul>
                <li><strong>NRIs:</strong> Repatriate from <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO accounts</Link> (USD 1M/year with <Link href="/blog/form-15ca-15cb-nri-remittance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 145/146</Link>) or freely from <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE/FCNR accounts</Link>.</li>
                <li><strong>Residents:</strong> Use LRS (USD 250K/year) via their resident bank account with Form A2.</li>
              </ul>

              <h2>Permitted Purposes</h2>
              <ul>
                <li>Maintenance of close relatives abroad (including NRI children, parents, spouse)</li>
                <li>Gifts and donations to NRIs or foreign persons</li>
                <li>Education abroad (tuition, living expenses)</li>
                <li>Medical treatment abroad</li>
                <li>Travel (business and personal)</li>
                <li>Investment in foreign equity, debt, mutual funds, and real estate</li>
                <li>Opening foreign bank accounts</li>
                <li>Lending to NRIs who are close relatives</li>
              </ul>
              <p><strong>Not permitted under LRS:</strong> Trading in foreign exchange on margin, lottery/sweepstake remittances, purchase of Foreign Currency Convertible Bonds issued by Indian companies abroad, and remittances to countries identified by FATF as non-cooperative.</p>

              <h2>TCS on LRS Remittances</h2>
              <p>Tax Collected at Source applies on LRS remittances exceeding Rs 7 lakh (cumulative) in a financial year:</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  <thead><tr>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Purpose</th>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>TCS Rate (above Rs 7L)</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Education (funded by loan)', '5%'],
                      ['Education (not funded by loan)', '20%'],
                      ['Medical treatment', '5%'],
                      ['Overseas tour package', '20%'],
                      ['Investment, gift, maintenance, all other', '20%'],
                    ].map(([purpose, rate], i) => (
                      <tr key={i}>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{purpose}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p><strong>TCS is not an additional tax.</strong> It is collected by the bank at the time of remittance and appears as a tax credit in the remitter&apos;s Form 26AS. The remitter claims it as a credit when <Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>filing their ITR</Link>. If total tax liability is lower than TCS collected, the excess is refunded.</p>

              <h2>LRS Process: Step by Step</h2>
              <ol>
                <li><strong>Visit your AD Bank</strong> (Authorised Dealer - any scheduled commercial bank).</li>
                <li><strong>Fill Form A2:</strong> Declare the purpose, amount, beneficiary details, and confirm you have not exceeded USD 250,000 in the year.</li>
                <li><strong>Provide PAN:</strong> Mandatory for remittances above Rs 50,000.</li>
                <li><strong>Bank deducts TCS</strong> (if applicable) and processes the remittance.</li>
                <li><strong>Bank reports to RBI</strong> and the Income Tax department.</li>
              </ol>

              <h2>LRS and NRI Families: Common Scenarios</h2>
              <h3>Parents Sending Money to NRI Children</h3>
              <p>A resident parent can send up to USD 250,000/year to their NRI child for maintenance, gift, or education. TCS of 20% applies above Rs 7 lakh (for gifts/maintenance). The parent claims TCS credit in their ITR. The NRI child receives it tax-free in India (gift from relative exemption under <Link href="/blog/nri-gift-inheritance-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 56(2)(x)</Link>), but should check taxability in their country of residence.</p>

              <h3>Resident Investing in Foreign Stocks/Funds</h3>
              <p>LRS covers investment in foreign securities. TCS at 20% applies above Rs 7 lakh. When the resident later becomes NRI (e.g., moves abroad for work), the foreign investments made under LRS remain valid. Capital gains on sale are taxable based on residential status at the time of sale.</p>

              <h3>Returning NRI Who Has Become Resident</h3>
              <p>A <Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>returning NRI</Link> who has become an Indian resident can use LRS to send money abroad from their resident accounts. This is relevant for maintaining overseas investments, sending money to family abroad, or funding foreign property after becoming resident. The NRO repatriation route is no longer available once you are resident; LRS is the correct mechanism.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help with outward remittances or FEMA compliance?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We advise on LRS compliance, TCS optimisation, and cross-border remittance structuring for NRI families.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-gift-inheritance-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Gift & Inheritance Tax</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/form-15ca-15cb-nri-remittance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 15CA/15CB Guide</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

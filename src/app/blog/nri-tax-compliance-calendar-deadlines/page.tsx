import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Tax Compliance Calendar: Key Dates & Deadlines (FY 2026-27)',
  description: 'Every tax deadline NRIs need to know for FY 2026-27: advance tax dates, ITR deadline, TDS return filing (Form 27Q), FLA return, and Form 15CA/15CB timelines.',
  keywords: ['NRI tax deadline', 'NRI ITR deadline', 'NRI compliance calendar', 'advance tax NRI', 'Form 27Q deadline', 'NRI tax dates India', 'NRI FLA return deadline'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-tax-compliance-calendar-deadlines' },
  openGraph: { title: 'NRI Tax Compliance Calendar (FY 2026-27)', description: 'Every deadline: advance tax, ITR, TDS returns, FLA, Form 15CA/15CB.', url: 'https://agrawalkhandelwal.com/blog/nri-tax-compliance-calendar-deadlines', type: 'article' },
}

const articleLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'NRI Tax Compliance Calendar: Key Dates & Deadlines (FY 2026-27)', description: 'Tax deadlines for NRIs.', datePublished: '2026-08-16', dateModified: '2026-08-16', author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' }, publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } }, mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-tax-compliance-calendar-deadlines' }

const faqs: [string, string][] = [
  ['Do NRIs need to pay advance tax?', 'Yes, if the total tax liability for the year exceeds Rs 10,000 after TDS credits. Advance tax is payable in quarterly instalments: 15% by June 15, 45% by September 15, 75% by December 15, and 100% by March 15. Failure to pay attracts interest under Sections 234B and 234C. In practice, most NRIs whose income is limited to TDS-covered sources (rent, interest, property gains) do not need advance tax because TDS covers their liability.'],
  ['What is the penalty for late ITR filing by NRIs?', 'Filing after July 31 but before December 31 attracts a late fee of Rs 5,000 under Section 234F (Rs 1,000 if total income is below Rs 5 lakh). Filing after December 31 is not permitted for the original return. Additionally, interest under Section 234A accrues at 1% per month on unpaid tax from the due date until filing. Losses (except house property loss) cannot be carried forward if the return is filed late.'],
  ['When is the FLA return due?', 'The Annual FLA (Foreign Liabilities and Assets) return is due by July 15 of each year and must be filed by Indian entities that have received foreign direct investment (FDI) or made overseas direct investment (ODI). This applies to companies and LLPs, not individual NRIs. Individual NRIs disclose foreign assets through Schedule FA in their ITR, not the FLA return.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }

export default function NRIComplianceCalendarBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI Tax Compliance Calendar: Every Deadline You Need (FY 2026-27)</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 16, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <p>Missing a tax deadline as an NRI does not just mean a late fee. It can mean losing the right to carry forward losses, paying interest on tax you did not know you owed, or having your <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>repatriation held up</Link> because Form 145/146 was not filed in time. Here is every deadline that matters for NRIs in FY 2026-27.</p>

              <h2>The Calendar</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  <thead><tr><th style={thStyle}>Date</th><th style={thStyle}>What</th><th style={thStyle}>Who</th></tr></thead>
                  <tbody>
                    {[
                      ['June 15, 2026', 'Advance tax - 1st instalment (15%)', 'NRIs with tax liability above Rs 10,000 after TDS'],
                      ['July 15, 2026', 'TDS return Form 144 (earlier 27Q) - Q1 (Apr-Jun)', 'Buyers/tenants who deducted TDS on NRI payments'],
                      ['July 31, 2026', 'Form 131 (earlier 16A) Q1 issuance deadline', 'Buyers/tenants to NRI sellers/landlords'],
                      ['July 31, 2027', 'ITR filing deadline (non-audit)', 'NRIs with Indian income above Rs 3 lakh or claiming refund'],
                      ['September 15, 2026', 'Advance tax - 2nd instalment (45% cumulative)', 'NRIs with advance tax obligation'],
                      ['October 15, 2026', 'TDS return Form 144 - Q2 (Jul-Sep)', 'Buyers/tenants'],
                      ['October 31, 2027', 'ITR filing deadline (audit cases)', 'NRIs with business income requiring audit'],
                      ['October 31, 2026', 'Form 131 (Q2) issuance deadline', 'Buyers/tenants'],
                      ['December 15, 2026', 'Advance tax - 3rd instalment (75% cumulative)', 'NRIs with advance tax obligation'],
                      ['December 31, 2027', 'Belated ITR filing deadline', 'NRIs who missed July 31 (Rs 5,000 late fee applies)'],
                      ['January 15, 2027', 'Form 131 (Q3) issuance deadline', 'Buyers/tenants'],
                      ['January 31, 2027', 'TDS return Form 144 - Q3 (Oct-Dec)', 'Buyers/tenants'],
                      ['March 15, 2027', 'Advance tax - final instalment (100%)', 'NRIs with advance tax obligation'],
                      ['March 31, 2027', 'End of financial year', 'Residential status determined for full year'],
                      ['May 31, 2027', 'TDS return Form 144 - Q4 (Jan-Mar)', 'Buyers/tenants'],
                      ['Before remittance', 'Form 145 (ex-15CA) filing', 'NRI initiating any taxable foreign remittance'],
                      ['Before remittance', 'Form 146 (ex-15CB) CA certificate', 'For remittances above Rs 5 lakh (CA issues)'],
                      ['Before ITR due date', 'Form 67 for foreign tax credit', 'Residents/RNOR claiming DTAA credit'],
                    ].map(([date, what, who], i) => (
                      <tr key={i}>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, whiteSpace: 'nowrap', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{date}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{what}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-light)', fontSize: '0.9rem', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{who}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>Key Notes</h2>
              <ul>
                <li><strong>Advance tax:</strong> Most NRIs whose income is covered by TDS (rent, interest, property gains) do not need to pay advance tax since TDS covers the liability. Advance tax is relevant when there is income without TDS (e.g., capital gains on <Link href="/blog/nri-mutual-fund-stock-taxation-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>stocks sold through a broker</Link> where TDS was not deducted on the gain).</li>
                <li><strong>Form 144 (earlier Form 27Q):</strong> This is the tenant&apos;s or buyer&apos;s responsibility, not the NRI&apos;s. But the NRI should ensure it is filed, because their TDS credit in Form 26AS depends on it. See our <Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>26QB vs 27Q guide</Link>.</li>
                <li><strong>Form 145/146:</strong> Unlike other deadlines, these are event-driven - they must be filed before the <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>remittance</Link>, not by a fixed date. See our <Link href="/blog/form-15ca-15cb-nri-remittance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 15CA/15CB guide</Link>.</li>
                <li><strong><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>Residential status</Link></strong> is determined at year-end (March 31) based on total days in India during the year. Track your days throughout the year, not just at filing time.</li>
              </ul>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Want us to manage your NRI tax compliance?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle ITR filing, advance tax computation, Form 27Q verification, and Form 145/146 certification for NRI clients year-round.</p>
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
          </article>
        </div></div>
      </div>
    </>
  )
}

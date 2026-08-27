import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'TDS on NRO Interest & FD (FY 2026-27)',
  description: 'TDS on NRO savings and FD interest for NRIs: 30% domestic rate, how to claim lower DTAA treaty rates (10-15%), TRC and Form 10F process, and ITR refund for excess TDS.',
  keywords: ['TDS NRO interest', 'NRO FD TDS rate', 'NRO interest tax NRI', 'DTAA NRO interest', 'NRO TDS refund', 'NRO FD tax rate NRI', 'TDS on NRO savings account'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-nro-interest-fd-dtaa-relief' },
  openGraph: { title: 'TDS on NRO Interest & FD: DTAA Relief for NRIs', description: '30% TDS on NRO interest, how to cut it to 10-15% with DTAA, TRC process.', url: 'https://agrawalkhandelwal.com/blog/tds-nro-interest-fd-dtaa-relief', type: 'article' },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TDS on NRO Interest & FD (FY 2026-27)', 'tds-nro-interest-fd-dtaa-relief')

const articleLd = buildArticleLd({
  headline: 'TDS on NRO Interest & FD (FY 2026-27)',
  description: 'TDS on NRO interest, DTAA treaty rates, TRC process, and refund claims.',
  datePublished: '2026-07-08',
  slug: 'tds-nro-interest-fd-dtaa-relief',
})

const faqs: [string, string][] = [
  ['What is the TDS rate on NRO FD interest for NRIs?', 'The domestic TDS rate on NRO fixed deposit and savings account interest for NRIs is 30% plus applicable surcharge and 4% cess (effective rate approximately 31.2%). This applies to all NRO interest income regardless of the amount. NRIs can reduce this to the DTAA treaty rate (typically 10-15%) by providing a Tax Residency Certificate and Form 10F to their bank before the interest is credited.'],
  ['Is NRE FD interest also taxable for NRIs?', 'No. Interest on NRE savings and fixed deposit accounts is fully exempt from Indian income tax under Section 10(4)(ii) as long as the account holder maintains non-resident status under FEMA. No TDS is deducted. This exemption ends when the NRI becomes a resident and the account is redesignated.'],
  ['How do I get lower TDS on NRO interest using DTAA?', 'Obtain a Tax Residency Certificate (TRC) from your country of residence, file Form 10F on the Indian Income Tax portal, and submit both to your bank along with a self-declaration. The bank then deducts TDS at the treaty rate instead of 30%. For US/UK/Canada/Australia NRIs, the treaty rate on interest is typically 15%. For UAE NRIs, it is 12.5%.'],
  ['Can I claim refund of excess TDS on NRO interest?', 'Yes. If TDS was deducted at 30% but the DTAA rate is lower, or if your total Indian income falls below the taxable threshold, file an Indian ITR to claim the excess TDS as a refund. Report the NRO interest under "Income from Other Sources" and claim credit for TDS shown in Form 26AS.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function TDSNROInterestBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>TDS on NRO Interest and FD: Why You Are Probably Overpaying (and How to Fix It)</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 8, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Banks deduct <strong>30% TDS</strong> (+ surcharge + cess) on NRO interest by default. <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE interest is tax-free</Link> - this only affects NRO.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Most NRIs can cut this to <strong>10-15%</strong> using their country&apos;s <Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>DTAA treaty rate</Link>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>You need a <strong>Tax Residency Certificate + Form 10F</strong> submitted to your bank before the interest credit date.</li>
                  <li style={{ marginBottom: 0 }}>If you missed it, file an <Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>ITR</Link> to claim the excess TDS back as a refund.</li>
                </ul>
              </div>

              <p>This is probably the easiest tax saving available to NRIs, and most people do not claim it. Your bank deducts 30% TDS on every rupee of NRO interest because that is the default domestic rate. But if you live in a country with a DTAA with India (which covers over 90 countries), the treaty rate on interest is typically 10-15%. The difference on a Rs 50 lakh NRO FD earning 7% is roughly Rs 52,500 per year - recovered with one TRC and one Form 10F submission.</p>

              <h2>NRO Interest: The Default 30% Problem</h2>
              <p>Under <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 393(2)</Link> (earlier Section 195 under the 1961 Act), banks deduct TDS on NRO interest at 30% (plus surcharge and cess, effective ~31.2%). This applies to:</p>
              <ul>
                <li>NRO savings account interest</li>
                <li>NRO fixed deposit interest</li>
                <li>NRO recurring deposit interest</li>
              </ul>
              <p>Unlike resident accounts where TDS is 10% above Rs 40,000, NRO interest has no minimum threshold. Even Rs 100 of interest gets TDS at 30%.</p>
              <p>Contrast this with <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE accounts</Link> where interest is fully exempt from tax and zero TDS is deducted.</p>

              <h2>DTAA Treaty Rates on Interest</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
                  <thead><tr>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Country</th>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Domestic Rate</th>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>DTAA Rate</th>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Annual Saving on Rs 50L FD @ 7%</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['US', '30%', '15%', '~Rs 52,500'],
                      ['UK', '30%', '15%', '~Rs 52,500'],
                      ['UAE', '30%', '12.5%', '~Rs 61,250'],
                      ['Canada', '30%', '15%', '~Rs 52,500'],
                      ['Australia', '30%', '15%', '~Rs 52,500'],
                      ['Singapore', '30%', '15%', '~Rs 52,500'],
                    ].map(([country, domestic, dtaa, saving], i) => (
                      <tr key={i}>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{country}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{domestic}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{dtaa}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, color: 'var(--accent)', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{saving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>How to Get Lower TDS from Your Bank</h2>
              <ol>
                <li><strong>Obtain a Tax Residency Certificate (TRC)</strong> from the tax authority of your country of residence. Processing time varies: IRS (US) can take weeks, HMRC (UK) is faster, UAE requires residency visa.</li>
                <li><strong>File Form 10F</strong> on the Indian Income Tax e-filing portal (eportal.incometax.gov.in). This declares your treaty country, TIN, and the DTAA article for interest.</li>
                <li><strong>Submit TRC + Form 10F acknowledgment + self-declaration</strong> to your bank&apos;s NRI services desk. Most banks have a standard format for the self-declaration confirming beneficial ownership and no PE in India.</li>
                <li><strong>Bank applies treaty rate</strong> on subsequent interest credits for the financial year. You typically need to renew annually as the TRC is valid for one year.</li>
              </ol>

              <h2>Missed It? Claim a Refund via ITR</h2>
              <p>If your bank already deducted TDS at 30% (because you did not submit TRC/Form 10F in time), you can still recover the excess by <Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>filing an Indian ITR</Link>:</p>
              <ul>
                <li>Report NRO interest under &quot;Income from Other Sources&quot;</li>
                <li>Compute tax at the DTAA rate (claim treaty benefit in the ITR)</li>
                <li>Claim credit for TDS shown in Form 26AS</li>
                <li>The difference is refunded, typically in 3-6 months</li>
              </ul>

              <h2>NRO Interest and Repatriation</h2>
              <p>After-tax NRO interest can be <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>repatriated abroad</Link> within the USD 1 million annual limit. The interest is classified as &quot;current income&quot; for repatriation purposes, requiring <Link href="/blog/form-15ca-15cb-nri-remittance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 145/146</Link> compliance but generally straightforward once TDS certificates are in order.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Want to reduce TDS on your NRO deposits?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle TRC coordination, Form 10F filing, bank submissions, and ITR refund claims for NRO interest overpayment.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>India DTAA Guide by Country</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account Comparison</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing from Abroad</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

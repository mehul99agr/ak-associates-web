import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'TCS on Foreign Remittance Under LRS: Rates FY 2026-27',
  description: 'TCS on LRS remittances after the Budget 2026 revision: the Rs 10 lakh threshold, 0% for loan-funded education, 2% for self-funded education/medical/tour packages, 20% for other purposes, and how to claim the credit.',
  keywords: [
    'TCS foreign remittance FY 2026-27', 'TCS LRS rate 2026', 'Section 394(1) TCS',
    'TCS Rs 10 lakh threshold', 'TCS education remittance', 'TCS overseas tour package',
    'Section 206C(1G) new rate', 'LRS TCS credit ITR',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tcs-foreign-remittance-lrs-rates-fy2026-27' },
  openGraph: {
    title: 'TCS on Foreign Remittance Under LRS: Rates FY 2026-27',
    description: 'The revised Rs 10 lakh threshold and 0-20% TCS rate structure on LRS remittances after Budget 2026, with worked examples.',
    url: 'https://agrawalkhandelwal.com/blog/tcs-foreign-remittance-lrs-rates-fy2026-27',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCS on LRS Remittances: FY 2026-27 Rates',
    description: 'The revised Rs 10 lakh threshold and 0-20% TCS rate structure on LRS remittances after Budget 2026.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TCS on Foreign Remittance Under LRS: Rates FY 2026-27', 'tcs-foreign-remittance-lrs-rates-fy2026-27')

const articleLd = buildArticleLd({
  headline: 'TCS on Foreign Remittance Under LRS: Rates & Exemptions FY 2026-27',
  description: 'How TCS applies on LRS remittances after the Budget 2026 rate revision: the Rs 10 lakh threshold, the 0-20% rate structure, and how to claim the TCS credit in your ITR.',
  datePublished: '2026-04-25',
  slug: 'tcs-foreign-remittance-lrs-rates-fy2026-27',
})

const faqs: FaqPair[] = [
  ['What is the TCS threshold on LRS remittances for FY 2026-27?', 'Following the Budget 2026 revision effective April 1, 2026, TCS on most LRS remittances applies only above a cumulative Rs 10 lakh per financial year, per remitter, up from the earlier Rs 7 lakh threshold. This threshold is tracked across all your LRS remittances for the year, not reset per transaction or per bank.'],
  ['Is there TCS on an education loan remittance?', 'No. Remittances for education funded by a loan taken from an Indian bank or NBFC attract 0% TCS, with no threshold; this exemption applies regardless of the amount remitted. This is the most favourable category under the current structure, meant to keep loan-funded overseas education genuinely cost-neutral on the TCS front.'],
  ['What is the TCS rate for self-funded education and medical treatment remittances?', 'Self-funded education (not through a bank/NBFC loan) and medical treatment remittances attract 2% TCS on the amount above Rs 10 lakh in the financial year. This is down from the earlier 5% rate.'],
  ['What is the TCS rate on an overseas tour package?', 'Overseas tour packages attract a flat 2% TCS from the first rupee; there is no Rs 10 lakh threshold for this category, unlike other purposes. This means even a modest tour package booking will have some TCS collected on it.'],
  ['What is the TCS rate for other LRS purposes like investment or gifts?', 'Investment in foreign securities or property, gifts to relatives abroad, and general maintenance remittances continue to attract 20% TCS on the amount above Rs 10 lakh in the financial year. This is the category where the rate has not been reduced by the Budget 2026 change.'],
  ['How do I claim back TCS collected on my remittance?', 'TCS is not an additional tax; it is a prepayment collected by your bank and reflected as a credit in your Form 26AS/AIS. You claim it while filing your income tax return: if your actual tax liability for the year is lower than the TCS collected, the excess is refunded after processing. If you have significant TCS building up mid-year and your actual tax liability is materially lower, you can also apply to your Assessing Officer for a lower/nil TCS certificate to avoid the cash flow lock-up in the first place.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function TcsLrsFy2627Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">FEMA &amp; Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>TCS on Foreign Remittance Under LRS: Rates &amp; Exemptions FY 2026-27</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published April 25, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>Budget 2026 raised the LRS TCS threshold to Rs 10 lakh and cut several rates, effective April 1, 2026.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Education funded by an Indian bank/NBFC loan: 0% TCS, no threshold.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Self-funded education and medical treatment: 2% above Rs 10 lakh.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Overseas tour packages: 2% flat, from the first rupee.</li>
                  <li style={{ marginBottom: 0 }}>Investment, gifts, and all other purposes: 20% above Rs 10 lakh; unchanged from before.</li>
                </ul>
              </div>

              <p>Every resident Indian sending money abroad under the Liberalised Remittance Scheme; for a child&apos;s tuition, a medical procedure, a foreign investment, or simply a gift to family overseas; runs into TCS at the point of remittance. Budget 2026 meaningfully reshaped this structure effective <strong>April 1, 2026</strong>: the threshold moved up, and the rate for the two most common individual-facing purposes, education and medical, came down sharply. Here is exactly what changed and what it means in practice for FY 2026-27.</p>

              <h2>The Legal Basis: Section 394(1), Earlier Section 206C(1G)</h2>
              <p>TCS on LRS remittances is levied under <strong>Section 394(1) of the Income Tax Act, 2025</strong> (the corresponding provision under the earlier 1961 Act was <strong>Section 206C(1G)</strong>). The substantive TCS obligation (collected by your Authorised Dealer bank at the point of remittance) carries forward under the new Act; what changed with Budget 2026 was the rate and threshold structure applied under it, not the underlying mechanism.</p>

              <h2>The Rs 10 Lakh Threshold</h2>
              <p>For most LRS purposes, TCS now applies only on the amount remitted <strong>above a cumulative Rs 10 lakh</strong> in a financial year, per individual remitter; up from the earlier Rs 7 lakh. This threshold tracks all your LRS remittances together across the year, regardless of which bank or which specific transaction pushes you over it, and regardless of how many separate purposes those remittances cover (excluding the two purposes below that have their own distinct treatment).</p>

              <h2>The Rate Structure for FY 2026-27</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  <thead><tr>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Purpose</th>
                    <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>TCS Rate</th>
                  </tr></thead>
                  <tbody>
                    {[
                      ['Education funded by an Indian bank/NBFC loan', '0% (no threshold)'],
                      ['Education (self-funded) or medical treatment', '2% above Rs 10 lakh'],
                      ['Overseas tour package', '2% from the first rupee'],
                      ['Investment, gift, maintenance, and all other purposes', '20% above Rs 10 lakh'],
                    ].map(([purpose, rate], i) => (
                      <tr key={i}>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{purpose}</td>
                        <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Two things stand out here. First, <strong>loan-funded education is now effectively TCS-free</strong>, which materially improves cash flow for families financing overseas education through an Indian lender rather than personal savings. Second, <strong>overseas tour packages have no threshold at all</strong>: even a small package attracts the 2% rate from the very first rupee, which is easy to miss since every other category has the Rs 10 lakh cushion.</p>

              <h2>Worked Example</h2>
              <p>Consider a resident parent remitting Rs 15 lakh in a financial year to fund a child&apos;s self-funded (not loan-financed) overseas education. TCS applies only on the Rs 5 lakh above the Rs 10 lakh threshold, at 2%: <strong>Rs 10,000 TCS</strong>. If the same amount had instead been routed through an education loan from an Indian bank, the TCS would be <strong>nil</strong> on the entire Rs 15 lakh. If, instead, the same Rs 15 lakh were remitted as a gift to an NRI relative (not for education), TCS would apply at 20% on the Rs 5 lakh above threshold: <strong>Rs 1,00,000</strong>: a stark difference purely based on the stated purpose of remittance, which is why declaring the correct purpose on Form A2 matters well beyond simple paperwork accuracy.</p>

              <h2>Claiming the TCS Credit</h2>
              <p>TCS collected under LRS is <strong>not an additional tax</strong>: it is a prepayment that shows up as a credit in your Form 26AS and Annual Information Statement (AIS). You claim it against your total tax liability when filing your income tax return; if your actual liability for the year is lower than the TCS collected, the excess is refunded after processing. For remitters who anticipate a large mismatch between TCS collected and actual tax liability during the year; for example, a large one-time investment remittance; it is possible to apply to the Assessing Officer for a lower or nil TCS certificate in advance, avoiding the cash flow lock-up rather than waiting for a refund after filing.</p>

              <h2>How This Affects NRI Families</h2>
              <p>LRS itself is only available to resident Indians, not NRIs directly; but it is central to how resident family members in India fund an NRI relative&apos;s education, medical expenses, or receive gifts sent the other way. Where the NRI is the sender back into India, a different framework applies entirely; see our <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO repatriation guide</Link> and <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO repatriation limits</Link> for that side. For the fuller LRS picture; permitted purposes, Form A2, and returning-NRI scenarios; see our <Link href="/blog/lrs-liberalised-remittance-scheme-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>complete LRS guide</Link>, now updated with these FY 2026-27 rates.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Planning a large foreign remittance?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help structure the remittance purpose correctly, estimate the TCS impact in advance, and file for a lower TCS certificate where it makes sense.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/lrs-liberalised-remittance-scheme-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>LRS Guide: USD 250K Limit &amp; TCS</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation Rules</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account Repatriation Limits</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

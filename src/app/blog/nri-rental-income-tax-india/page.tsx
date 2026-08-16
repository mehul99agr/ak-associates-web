import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Rental Income Tax in India: TDS, Deductions & Filing (FY 2026-27)',
  description: 'How rental income from Indian property is taxed for NRIs: 30% TDS by tenant under Section 195, standard deduction, municipal tax deduction, ITR filing for refund, and Form 13 for lower TDS.',
  keywords: [
    'NRI rental income tax India', 'TDS on rent to NRI', 'NRI property rent tax',
    'rental income NRI India', 'section 195 rent NRI', 'NRI TDS rental income',
    'NRI rent ITR filing', 'NRI property income India', 'tenant TDS NRI landlord',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-rental-income-tax-india' },
  openGraph: {
    title: 'NRI Rental Income Tax in India: TDS, Deductions & Filing',
    description: '30% TDS on rent, deductions, ITR refund process, and Form 13 for NRI landlords.',
    url: 'https://agrawalkhandelwal.com/blog/nri-rental-income-tax-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Rental Income Tax India (FY 2026-27)',
    description: '30% TDS by tenant, deductions available, and how to claim refund.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'NRI Rental Income Tax in India: TDS, Deductions & Filing (FY 2026-27)',
  description: 'How rental income is taxed for NRIs: TDS, deductions, ITR refund, Form 13.',
  datePublished: '2026-07-14', dateModified: '2026-07-14',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-rental-income-tax-india',
}

const faqs: [string, string][] = [
  ['What is the TDS rate on rent paid to an NRI landlord?', 'TDS on rent paid to an NRI landlord is 30% (plus applicable surcharge and 4% cess) under Section 195. This is significantly higher than the 10% TDS under Section 194-I that applies when the landlord is a resident. The 30% is computed on the gross rent, before any deductions the NRI might be entitled to (like the 30% standard deduction or municipal taxes).'],
  ['Does the tenant need a TAN to deduct TDS on rent to NRI?', 'Yes. Unlike rent to a resident landlord where TAN may not be required for individual tenants, rent to an NRI falls under Section 195 which mandates TAN. The tenant must obtain a TAN via Form 49B, deduct TDS at 30% plus surcharge and cess, deposit it via Challan ITNS-281, and file Form 27Q quarterly.'],
  ['What deductions can an NRI claim on rental income?', 'NRIs can claim the same deductions as residents on rental income: municipal taxes actually paid during the year, and the standard deduction of 30% of Net Annual Value (Gross Rent minus Municipal Taxes). Interest on home loan for the rented property is also deductible under Section 24(b), without the Rs 2 lakh cap that applies to self-occupied properties. These deductions are claimed when filing the ITR, not at the TDS stage.'],
  ['Can an NRI get lower TDS on rental income?', 'Yes. An NRI landlord can apply for a Form 13 (now Form 128) lower deduction certificate under Section 197. This is particularly useful when the actual tax liability (after deductions) is much lower than the 30% TDS on gross rent. For example, if gross rent is Rs 50,000/month but the NRI has a large home loan interest deduction, actual tax may be minimal. The Form 13 certificate authorises the tenant to deduct at the AO-specified lower rate.'],
  ['How does an NRI file ITR for rental income?', 'NRIs with Indian rental income should file ITR-2 (or ITR-3 if they have business income). The rental income is reported under "Income from House Property" with all applicable deductions. TDS credit is claimed based on Form 16A issued by the tenant. If TDS exceeds actual liability (common due to 30% on gross rent), the excess is refunded. File by July 31 of the assessment year.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRIRentalIncomeBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI Rental Income Tax: What the Tenant and Landlord Both Need to Know</h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 14, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>
              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Tenant must deduct TDS at <strong>30% (+ surcharge + cess)</strong> on rent to an NRI landlord under <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195</Link>. Not 10% (that is for resident landlords).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Tenant needs a <strong>TAN</strong>, must file <strong>Form 144</strong> (earlier Form 27Q) quarterly, and issue <strong>Form 131</strong> (earlier Form 16A) to the NRI.</li>
                    <li style={{ marginBottom: '0.4rem' }}>NRI landlord can claim <strong>30% standard deduction + municipal taxes + home loan interest</strong> when filing ITR.</li>
                    <li style={{ marginBottom: 0 }}>Actual tax is almost always lower than TDS deducted. <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13</Link> or ITR refund recovers the excess.</li>
                  </ul>
                </div>

                <p>Rental income from Indian property is one of the most common income types for NRIs, and one of the most consistently mis-handled. Tenants assume the same 10% TDS that applies to resident landlords works here. It does not. NRI rental income falls under Section 393(2) (earlier Section 195 under the 1961 Act), not Section 194-I, and the compliance requirements are entirely different. Here is what both sides need to know.</p>

                <h2>How Rental Income Is Taxed for NRIs</h2>
                <p>Rental income from an Indian property is taxable in India regardless of where the NRI resides. It is computed under &quot;Income from House Property&quot; in the same way as for residents:</p>
                <ol>
                  <li><strong>Gross Annual Value (GAV):</strong> The actual rent received or receivable (or fair market rent if higher, per Section 23).</li>
                  <li><strong>Less: Municipal taxes</strong> actually paid by the owner during the year.</li>
                  <li><strong>= Net Annual Value (NAV)</strong></li>
                  <li><strong>Less: Standard deduction</strong> of 30% of NAV (this is a flat deduction, no receipts needed).</li>
                  <li><strong>Less: Interest on home loan</strong> under Section 24(b) (no cap for rented property, unlike the Rs 2 lakh cap for self-occupied).</li>
                  <li><strong>= Taxable income from house property</strong></li>
                </ol>
                <p>The taxable income is then taxed at the NRI&apos;s applicable slab rates. For most NRIs, rental income alone pushes them into the 30% bracket.</p>

                <h2>TDS: The Tenant&apos;s Obligation</h2>
                <p>When the landlord is an NRI, every rent payment triggers <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195</Link> compliance for the tenant:</p>
                <ul>
                  <li><strong>Rate:</strong> 30% plus applicable surcharge and 4% cess on the <strong>gross rent</strong> (before any deductions). Effective rate is typically ~31.2%.</li>
                  <li><strong>TAN:</strong> The tenant must obtain a TAN via Form 49B before the first rent payment. See our <Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN application guide</Link>.</li>
                  <li><strong>Deposit:</strong> TDS must be deposited via Challan ITNS-281 by the 7th of the following month.</li>
                  <li><strong>Return:</strong> File <Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 144</Link> (earlier Form 27Q) quarterly.</li>
                  <li><strong>Certificate:</strong> Issue Form 131 (earlier Form 16A) to the NRI landlord within 15 days of the Form 144 due date.</li>
                </ul>
                <p>If the tenant does not deduct TDS, they become personally liable for the amount plus interest at 1% per month. Many individual tenants are unaware of this obligation, especially when they do not know their landlord is an NRI.</p>

                <h2>The Over-Deduction Problem</h2>
                <p>TDS at 30% on gross rent almost always exceeds the NRI&apos;s actual tax liability. Consider an NRI with:</p>
                <ul>
                  <li>Monthly rent: Rs 50,000 (annual: Rs 6,00,000)</li>
                  <li>Municipal taxes: Rs 20,000</li>
                  <li>Home loan interest: Rs 3,00,000</li>
                </ul>
                <p>TDS deducted by tenant: Rs 6,00,000 x 31.2% = <strong>Rs 1,87,200</strong></p>
                <p>Actual taxable income: Rs 6,00,000 - 20,000 (municipal) - 1,74,000 (30% standard deduction) - 3,00,000 (loan interest) = <strong>Rs 1,06,000</strong></p>
                <p>Tax on Rs 1,06,000 at the new regime rates: approximately <strong>Rs 5,300</strong> (within the basic exemption limit for most NRIs).</p>
                <p>The NRI has Rs 1,87,200 deducted as TDS but owes only Rs 5,300 in actual tax. The gap of Rs 1,81,900 is recoverable only by filing an ITR or by obtaining a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> in advance.</p>

                <h2>Two Remedies for Over-Deduction</h2>
                <h3>Option 1: Form 128 (Proactive)</h3>
                <p>Apply for a Form 128 (earlier Form 13) lower deduction certificate under Section 395 (earlier Section 197) before the rental year begins or at the start of the tenancy. The Assessing Officer reviews the actual income computation and authorises the tenant to deduct at a specified lower rate (sometimes nil). This avoids the cash flow problem of TDS lock-up entirely.</p>

                <h3>Option 2: ITR Refund (Reactive)</h3>
                <p>File an <Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>ITR claiming the TDS refund</Link> for the financial year. The ITR reports the actual house property income after all deductions and claims credit for TDS. The excess is refunded, typically in 3-6 months. The NRI also earns statutory interest under Section 244A on the refund for the period of delay.</p>

                <h2>Property Managed by an Agent or Family Member</h2>
                <p>Many NRI landlords have a property manager (often a family member) who collects rent on their behalf. The TDS obligation does not shift to the agent. It remains with the <strong>tenant</strong>. The tenant must deduct TDS even if they pay rent to the NRI&apos;s representative in India. The NRI should inform the tenant of their non-resident status and ensure TDS compliance from the start of the tenancy.</p>

                <h2>Repatriating Rental Income</h2>
                <p>Rental income credited to the NRI&apos;s <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO account</Link> can be repatriated abroad within the <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>USD 1 million annual limit</Link>, subject to <Link href="/blog/form-15ca-15cb-nri-remittance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 145/146</Link> compliance. Rental income is classified as &quot;current income&quot; for repatriation purposes and is generally straightforward once TDS certificates are in order.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>NRI landlord or tenant of an NRI?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 13 applications for lower TDS, Form 27Q filing for tenants, and ITR filing with TDS refund claims for NRI rental income.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195 TDS on Payments to NRIs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13: Lower TDS Certificate</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

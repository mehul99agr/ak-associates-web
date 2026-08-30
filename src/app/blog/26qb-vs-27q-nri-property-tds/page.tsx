import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: '26QB vs 27Q: NRI Property TDS Form',
  description: 'Form 26QB is for resident sellers, Form 27Q is for NRI sellers. Side-by-side comparison: when each applies, TDS rates, TAN requirement, filing process, and the penalty for using the wrong form.',
  keywords: [
    '26QB vs 27Q', 'form 26QB NRI', 'form 27Q property', '26QB for NRI seller',
    'TDS form NRI property', 'which form TDS NRI', '26QB NRI applicable',
    'form 27Q NRI property sale', 'TDS on property NRI which form',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/26qb-vs-27q-nri-property-tds' },
  openGraph: {
    title: '26QB vs 27Q: Which TDS Form When Buying Property from an NRI?',
    description: 'Form 26QB is for resident sellers, Form 27Q is for NRI sellers. Side-by-side comparison with filing steps.',
    url: 'https://agrawalkhandelwal.com/blog/26qb-vs-27q-nri-property-tds',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '26QB vs 27Q: Which TDS Form for NRI Property Purchase?',
    description: '26QB = resident seller. 27Q = NRI seller. Get it wrong and you owe the difference plus interest.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('26QB vs 27Q: Which TDS Form When Buying Property from an NRI?', '26qb-vs-27q-nri-property-tds')

const articleLd = buildArticleLd({
  headline: '26QB vs 27Q: Which TDS Form When Buying Property from an NRI?',
  description: 'Form 26QB is for resident sellers, Form 27Q is for NRI sellers. Side-by-side comparison: when each applies, TDS rates, TAN requirement, filing process, and the penalty for using the wrong form.',
  datePublished: '2026-06-05',
  slug: '26qb-vs-27q-nri-property-tds',
})

const faqs: [string, string][] = [
  [
    'Can I use Form 26QB when buying property from an NRI?',
    'No. Form 26QB is exclusively for TDS under Section 194-IA, which applies only when the seller is a resident Indian and the sale consideration exceeds Rs 50 lakh. When the seller is a non-resident (NRI), TDS falls under Section 195 (now Section 393(2)) and must be filed using Form 27Q (now Form 144). Filing 26QB for an NRI seller is filing the wrong form at the wrong rate, and the buyer is liable for the shortfall.',
  ],
  [
    'Do I need a TAN to file Form 26QB?',
    'No. Form 26QB is designed for one-off property purchases from resident sellers and uses only the buyer\'s PAN. No TAN is required. However, Form 27Q (for NRI sellers) requires the buyer to have a TAN, which must be obtained before the transaction by applying via Form 49B on the Protean (NSDL) portal.',
  ],
  [
    'What happens if I filed 26QB instead of 27Q for an NRI seller?',
    'You have deducted TDS at 1% instead of the correct rate of 12.5% to 30% (plus surcharge and cess), filed the wrong form, and likely did not obtain a TAN. You are an assessee in default under Section 398 (earlier Section 201), personally liable for the full TDS shortfall plus interest at 1% per month from the date TDS should have been deducted. You need to obtain a TAN, pay the differential TDS with interest via Challan ITNS-281, and file a corrected Form 144 (earlier Form 27Q). Consult a CA immediately to limit the damage.',
  ],
  [
    'Is Form 26QB being replaced under the new Income Tax Act 2025?',
    'Yes. Under the new Act (effective April 1, 2026), Form 26QB is being replaced by Form 141. Similarly, Form 27Q becomes Form 144. The underlying rules remain the same: Form 141 for resident sellers, Form 144 for NRI sellers. Budget 2026 also introduces a PAN-based mechanism removing TAN requirements for resident sellers effective October 1, 2026, but this change does not extend to NRI sellers.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function Form26QBvs27QBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
                26QB vs 27Q: Which TDS Form When Buying Property from an NRI?
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published June 5, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 141</strong> (earlier Form 26QB) is for buying property from a <strong>resident</strong> seller above Rs 50 lakh. TDS at 1%. No TAN needed.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 144</strong> (earlier Form 27Q) is for buying property from an <strong>NRI</strong> seller at any value. TDS at 12.5-30% + surcharge + cess. TAN is mandatory.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Filing the wrong form means you have deducted at the wrong rate. The buyer is personally liable for the shortfall plus interest.</li>
                    <li style={{ marginBottom: 0 }}>The seller&apos;s residential status in the year of sale determines which form applies, not their citizenship or where they lived when they bought the property.</li>
                  </ul>
                </div>

                <p>This is the most expensive compliance mistake in NRI property transactions: a buyer files Form 26QB and deducts 1% TDS because that is what they did when they last bought a flat from a resident seller. But the seller this time is an NRI. The correct form is 27Q, the correct rate is 12.5% or higher, and the buyer now owes the entire difference from their own pocket. We see this at least twice a month in our practice, and the fix is always more expensive than getting it right the first time.</p>

                <h2>The Complete Comparison</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}></th>
                        <th style={thStyle}>Form 141 (earlier 26QB)</th>
                        <th style={thStyle}>Form 144 (earlier 27Q)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>When to use</strong></td>
                        <td style={tdStyle}>Seller is a <strong>resident</strong></td>
                        <td style={tdStyle}>Seller is a <strong>non-resident (NRI/OCI)</strong></td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Section</strong></td>
                        <td style={tdAltStyle}>194-IA</td>
                        <td style={tdAltStyle}>393(2) (earlier <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>195</Link>)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Threshold</strong></td>
                        <td style={tdStyle}>Rs 50 lakh</td>
                        <td style={tdStyle}>No minimum threshold</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>TDS Rate</strong></td>
                        <td style={tdAltStyle}>1%</td>
                        <td style={tdAltStyle}>12.5% (LTCG) or 30% (STCG) + surcharge + 4% cess</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>TDS computed on</strong></td>
                        <td style={tdStyle}>Total consideration or stamp duty value, whichever is higher</td>
                        <td style={tdStyle}>Total sale consideration (stamp duty value not relevant for TDS deduction)</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>TAN required?</strong></td>
                        <td style={tdAltStyle}>No (PAN-only process)</td>
                        <td style={tdAltStyle}>Yes (apply via <Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 49B</Link>)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Filing frequency</strong></td>
                        <td style={tdStyle}>Per transaction (within 30 days)</td>
                        <td style={tdStyle}>Quarterly (Jul 31, Oct 31, Jan 31, May 31)</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Certificate issued</strong></td>
                        <td style={tdAltStyle}>Form 16B</td>
                        <td style={tdAltStyle}>Form 131 (earlier Form 16A)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>Lower TDS possible?</strong></td>
                        <td style={tdStyle}>Not typically (rate is already 1%)</td>
                        <td style={tdStyle}>Yes, via <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 certificate</Link></td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Challan</strong></td>
                        <td style={tdAltStyle}>Built into 26QB (auto-generated)</td>
                        <td style={tdAltStyle}>ITNS-281 (filed separately)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>How to Determine Which Form Applies</h2>
                <p>The only question that matters is: <strong>what is the seller&apos;s residential status under Section 6 of the Income Tax Act for the financial year of the sale?</strong></p>
                <ul>
                  <li>If the seller is a <strong>resident</strong> (including <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR</Link>) in the year of sale: <strong>Form 26QB</strong></li>
                  <li>If the seller is a <strong>non-resident</strong> in the year of sale: <strong>Form 144</strong> (earlier Form 27Q)</li>
                </ul>
                <p>It does not matter where the seller lived when they bought the property, whether they hold an OCI card, or what their PAN records show as their address. Residential status is recalculated every year based on physical presence in India. An NRI who has returned and qualifies as resident in the sale year follows the 26QB route. A former resident who moved abroad and is non-resident in the sale year follows the 27Q route.</p>
                <p>When in doubt, ask the seller to provide a declaration of their residential status for the current financial year, backed by their passport stamps or travel history.</p>

                <h2>What Happens When the Wrong Form Is Filed</h2>
                <p>The consequences are not hypothetical. We deal with this cleanup regularly:</p>
                <ol>
                  <li><strong>TDS shortfall:</strong> If 26QB was filed at 1% instead of 27Q at 12.5%+ the buyer owes the remaining TDS from their own funds.</li>
                  <li><strong>Interest:</strong> 1% per month from the date TDS should have been deducted until the date it is actually paid. On a Rs 1 crore property, the shortfall could be Rs 12+ lakh, and at 1% per month the interest alone adds up fast.</li>
                  <li><strong>Wrong certificate issued:</strong> The NRI receives Form 16B instead of Form 16A. They cannot use Form 16B to claim TDS credit in their ITR for NRI income. The TDS credit reconciliation fails, and the NRI&apos;s refund claim gets stuck.</li>
                  <li><strong>No TAN means no valid 27Q:</strong> Since 26QB does not require a TAN, the buyer typically does not have one, and cannot file a corrective 27Q until they obtain one.</li>
                </ol>
                <p>The fix involves obtaining a TAN, paying the differential TDS with interest via Challan ITNS-281, filing a correct Form 144 (earlier Form 27Q) for the quarter, and issuing the correct Form 131 (earlier Form 16A). A CA should handle this to minimise interest exposure and ensure the correction is processed cleanly.</p>

                <h2>Joint Ownership: When Both Forms Are Needed</h2>
                <p>If a property is co-owned by a resident and a non-resident, a single sale can require <strong>both</strong> forms. The buyer deducts at 1% on the resident co-owner&apos;s share (Form 141) and at the full Section 393(2) rate on the NRI co-owner&apos;s share (Form 144). Each form covers only that co-owner&apos;s proportionate share of the consideration.</p>

                <h2>Budget 2026 Changes: TAN Going Away for Resident Sellers Only</h2>
                <p>Budget 2026 introduces a PAN-based mechanism (Form 141) that removes the TAN requirement for property purchases from resident sellers, effective October 1, 2026. This change does <strong>not</strong> extend to NRI sellers. Where the seller is an NRI, the buyer still needs a TAN and must comply with <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195</Link> in full. Do not read &quot;TAN scrapped&quot; headlines as applying to NRI property transactions.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Buying property from an NRI? Get it right the first time.</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle TAN applications, correct TDS calculations, Form 27Q filing, and Form 13 certificates for NRI property transactions.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale: Complete Guide (FY 2026-27)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195 TDS on Payments to NRIs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide for NRI Property Buyers</Link></li>
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

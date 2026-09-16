import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'TDS on Contractor Payments: Section 194C Compliance Guide' },
  description: 'Section 194C TDS rates (1% individual/HUF, 2% others), the Rs 30,000/Rs 1 lakh thresholds, and compliance now under Section 393 of the Income Tax Act 2025.',
  keywords: [
    'Section 194C TDS', 'TDS on contractor payments', 'Section 194C rate', 'Section 194C threshold',
    'TDS on sub-contractor', 'work contract TDS India', 'Section 393 Income Tax Act 2025',
    '194C vs 194J',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-contractor-payments-section-194c-guide' },
  openGraph: {
    title: 'TDS on Contractor Payments: Section 194C Compliance Guide',
    description: 'Rates, thresholds, and filing steps for Section 194C TDS on contractor and sub-contractor payments, now under Section 393.',
    url: 'https://agrawalkhandelwal.com/blog/tds-contractor-payments-section-194c-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDS on Contractor Payments: Section 194C Compliance Guide',
    description: 'Rates, thresholds, and filing steps for Section 194C TDS on contractor and sub-contractor payments, now under Section 393.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TDS on Contractor Payments: Section 194C Compliance Guide', 'tds-contractor-payments-section-194c-guide')

const articleLd = buildArticleLd({
  headline: 'TDS on Contractor Payments: Section 194C Compliance Guide',
  description: 'Section 194C TDS rates, the Rs 30,000 single-payment and Rs 1 lakh aggregate thresholds, transporter exemption, and compliance steps, now under Section 393 of the Income Tax Act 2025.',
  datePublished: '2026-10-01',
  slug: 'tds-contractor-payments-section-194c-guide',
})

const faqs: [string, string][] = [
  [
    'What is the TDS rate under Section 194C?',
    'TDS is deducted at 1% when the contractor is a resident individual or HUF, and at 2% for any other resident contractor such as a company, partnership, or LLP. Both rates rise to 20% if the contractor does not furnish PAN.',
  ],
  [
    'What is the threshold limit under Section 194C?',
    'No TDS is required if a single payment does not exceed Rs 30,000, unless the aggregate of payments to that contractor during the financial year exceeds Rs 1 lakh, in which case TDS applies on the full aggregate amount for the year.',
  ],
  [
    'Is TDS deductible on payments to goods transport contractors?',
    'A specific exemption applies to payments to a transporter who owns 10 or fewer goods carriages during the year and furnishes a declaration to that effect along with PAN. Outside this exemption, transport contract payments are subject to Section 194C TDS in the normal way.',
  ],
  [
    'How is Section 194C different from Section 194J?',
    'Section 194C applies to a "contract for work," such as construction, manufacturing to specification, advertising, or transport, while Section 194J applies to professional or technical services. The rates also differ: 1%/2% under Section 194C versus 10%/2% under Section 194J, so misclassifying a payment changes both the rate and the compliance trail.',
  ],
  [
    'Does Section 194C still apply after the Income Tax Act 2025?',
    'The provision continues in substance but has been consolidated under Section 393(1) of the Income Tax Act 2025 along with other TDS provisions. Rates and thresholds are unchanged; only the section numbering and drafting format have changed.',
  ],
  [
    'What happens if a business fails to deduct TDS under Section 194C?',
    'The payer becomes an assessee in default for the TDS not deducted, faces interest for the delay, risks disallowance of the contract expense under Section 40(a)(ia), and may attract a penalty under Section 271C equal to the tax not deducted.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function Section194CBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                TDS on Contractor Payments: Section 194C Compliance Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 1, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Section 194C TDS is <strong>1% for individual/HUF contractors</strong> and <strong>2% for all other resident contractors</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>No deduction is needed below <strong>Rs 30,000 per payment</strong>, unless the <strong>yearly total to that contractor exceeds Rs 1 lakh</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Small transporters (10 or fewer goods carriages) with a valid PAN declaration are exempt.</li>
                    <li style={{ marginBottom: 0 }}>Now consolidated under <strong>Section 393(1) of the Income Tax Act 2025</strong>; rates and thresholds unchanged.</li>
                  </ul>
                </div>
                <p>Section 194C governs TDS on payments made under a "contract for work"; construction, manufacturing to a buyer's specification, advertising, catering, and transport are the most common examples businesses run into. It is one of the highest-volume TDS sections in day-to-day compliance, and it's frequently confused with Section 194J because both cover payments to external service providers. Here's how to get the classification, rate, and threshold right.</p>

                <h2>What Qualifies as a "Contract for Work" Under Section 194C</h2>
                <p>Section 194C applies to payments made to a resident contractor for carrying out any work, including labour supply, in pursuance of a contract between the contractor and specified persons (companies, firms, government bodies, cooperative societies, trusts, and individuals or HUFs liable to tax audit). Typical examples include construction contracts, job-work / manufacturing to the buyer's specification using material supplied by the buyer, advertising, broadcasting, transport of goods or passengers, and catering.</p>
                <p>This is distinct from a contract "for sale of goods," where the contractor uses their own materials to manufacture a standard product not customized to the buyer's specification; such transactions generally fall outside Section 194C altogether. It is also distinct from professional or technical services, which are governed by <Link href="/blog/tds-professional-technical-fees-section-194j" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194J</Link> instead.</p>

                <h2>TDS Rates Under Section 194C</h2>
                <ul>
                  <li><strong>1%</strong> where the contractor is a resident individual or HUF</li>
                  <li><strong>2%</strong> where the contractor is any other resident person: company, partnership firm, LLP, AOP, or BOI</li>
                  <li><strong>20%</strong> if the contractor does not furnish PAN, under Section 206AA, overriding the standard rate</li>
                </ul>
                <p>No surcharge or cess is added at the time of deduction for resident contractors; the rate applied is the flat percentage above.</p>

                <h2>Threshold Limits: Rs 30,000 and Rs 1 Lakh</h2>
                <p>TDS is not required if a single payment or credit to the contractor does not exceed Rs 30,000. However, if the aggregate of all payments made to the same contractor during the financial year exceeds Rs 1 lakh, TDS becomes applicable on the entire amount paid during the year, not just the portion above Rs 1 lakh. This dual-threshold structure means a business must track cumulative payments to each contractor across the year, not just evaluate each invoice in isolation.</p>
                <p>For example, four separate payments of Rs 28,000 each to the same contractor stay below the Rs 30,000 per-payment limit individually, but the Rs 1,12,000 aggregate crosses the Rs 1 lakh threshold, triggering TDS on the full amount.</p>

                <h2>The Transporter Exemption</h2>
                <p>A specific carve-out exists for payments to a goods transport contractor who owns 10 or fewer goods carriages at any time during the year and furnishes a declaration to this effect, along with a valid PAN, to the payer. Where this declaration is provided, no TDS is required under Section 194C. If the declaration is not furnished, or the transporter owns more than 10 carriages, normal TDS applies. Businesses that regularly engage small transporters should collect and retain this declaration as part of their vendor onboarding checklist, since the burden of proof sits with the payer if questioned later.</p>

                <h2>Sub-Contractor Payments</h2>
                <p>Where a contractor further sub-contracts part of the work, payments made by the main contractor to the sub-contractor are also subject to TDS under Section 194C, using the same rate structure (1% for individual/HUF sub-contractors, 2% for others). Each link in the contracting chain deducts TDS independently on its own payments; TDS deducted by the principal on payment to the main contractor does not substitute for the main contractor's own obligation to deduct on payments to its sub-contractors.</p>

                <h2>Section 393(1) of the Income Tax Act 2025</h2>
                <p>Section 194C has been consolidated, along with other TDS provisions, under Section 393(1) of the Income Tax Act 2025. The rates (1%/2%), thresholds (Rs 30,000 / Rs 1 lakh), and the transporter exemption all continue unchanged; only the section number and the surrounding drafting structure have been reorganized. Contracts and vendor agreements that still cite "Section 194C" don't need to be reworded for compliance purposes, but new documentation can reference Section 393(1) going forward.</p>

                <h2>Common Compliance Pitfalls</h2>
                <ul>
                  <li><strong>Treating a "contract for work" as a "contract for sale"</strong> to avoid TDS, when the customization or material-supply facts actually point to Section 194C.</li>
                  <li><strong>Losing track of the Rs 1 lakh aggregate</strong> across multiple small invoices to the same contractor over the year.</li>
                  <li><strong>Accepting a transporter's verbal claim</strong> of owning 10 or fewer carriages without the written declaration and PAN on file.</li>
                  <li><strong>Applying the wrong rate</strong> by not confirming whether the contractor is an individual/HUF (1%) or another entity type (2%).</li>
                </ul>
                <p>Non-deduction exposes the payer to being treated as an assessee in default, interest liability, disallowance of the contract expense under Section 40(a)(ia), and penalty exposure under Section 271C. If your business runs recurring contractor or vendor payments, a periodic reconciliation against Form 26Q filings is worth building into your monthly close.</p>

                <p>Need help setting up a TDS deduction and filing process for contractor payments, or reviewing past compliance for gaps? Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax compliance services</Link> cover both.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Running contractor or vendor payments through your business?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses classify contracts correctly, deduct TDS at the right rate, and stay current on quarterly filings.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20TDS%20under%20Section%20194C." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-professional-technical-fees-section-194j" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Professional & Technical Fees: Section 194J Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-194q-tds-purchase-of-goods" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Filing Process & Penalties</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

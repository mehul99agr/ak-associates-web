import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'TDS on Professional & Technical Fees: Section 194J Explained' },
  description: 'Section 194J TDS rates (10% professional, 2% technical), the Rs 50,000 threshold, and how it now sits under Section 393 of the Income Tax Act 2025.',
  keywords: [
    'Section 194J TDS', 'TDS on professional fees', 'TDS on technical fees', 'Section 194J rate',
    'Section 194J threshold', 'TDS professional services India', 'Section 393 Income Tax Act 2025',
    '194J vs 194C',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-professional-technical-fees-section-194j' },
  openGraph: {
    title: 'TDS on Professional & Technical Fees: Section 194J Explained',
    description: 'Rates, threshold, and compliance steps for Section 194J TDS on professional and technical fees, now consolidated under Section 393.',
    url: 'https://agrawalkhandelwal.com/blog/tds-professional-technical-fees-section-194j',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDS on Professional & Technical Fees: Section 194J Explained',
    description: 'Rates, threshold, and compliance steps for Section 194J TDS on professional and technical fees, now consolidated under Section 393.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TDS on Professional & Technical Fees: Section 194J Explained', 'tds-professional-technical-fees-section-194j')

const articleLd = buildArticleLd({
  headline: 'TDS on Professional & Technical Fees: Section 194J Explained',
  description: 'Section 194J TDS rates, the Rs 50,000 per-category threshold, deductee categories, and compliance steps, now consolidated under Section 393 of the Income Tax Act 2025.',
  datePublished: '2026-08-06',
  slug: 'tds-professional-technical-fees-section-194j',
})

const faqs: [string, string][] = [
  [
    'What is the TDS rate under Section 194J?',
    'TDS is deducted at 10% on fees for professional services and at 2% on fees for technical services (excluding professional services and film royalties). If the payee does not furnish PAN, the rate rises to 20% under Section 206AA.',
  ],
  [
    'What is the threshold limit for Section 194J?',
    'The threshold is Rs 50,000 in a financial year, applied separately for each category of payment. So professional fees and technical fees paid to the same person are each tested against their own Rs 50,000 limit rather than a combined one.',
  ],
  [
    'Does Section 194J still exist after the Income Tax Act 2025?',
    'The provision has been consolidated under Section 393 of the Income Tax Act 2025, along with several other TDS sections. The substance (rates, threshold, deductee categories) carries forward; only the section number and drafting structure have changed.',
  ],
  [
    'Is TDS under Section 194J deducted on the full amount or only the amount above Rs 50,000?',
    'Once payments to a payee in a financial year cross the Rs 50,000 threshold for that category, TDS applies to the entire amount paid during the year, not just the excess over Rs 50,000. This is different from slab-style thresholds like Section 194Q.',
  ],
  [
    'Who is required to deduct TDS under Section 194J?',
    'Any person (other than an individual or HUF not subject to tax audit in the preceding financial year) making payments for professional or technical services must deduct TDS. Individuals and HUFs liable to tax audit under Section 44AB (now Section 63) must also comply.',
  ],
  [
    'What happens if TDS under Section 194J is not deducted?',
    'The deductor becomes an assessee in default, personally liable for the TDS amount, interest at 1% to 1.5% per month, and disallowance of the expense under Section 40(a)(ia) when computing business income, in addition to potential penalty under Section 271C.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function Section194JBlog() {
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
                TDS on Professional & Technical Fees: Section 194J Explained
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
                    <li style={{ marginBottom: '0.4rem' }}>TDS under Section 194J is <strong>10% on professional fees</strong> and <strong>2% on technical fees</strong>, rising to 20% with no PAN.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The threshold is <strong>Rs 50,000 per financial year, tested separately</strong> for professional and technical payments to the same payee.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Once the threshold is crossed, TDS applies to the <strong>entire amount paid in the year</strong>, not just the excess.</li>
                    <li style={{ marginBottom: 0 }}>The provision is now consolidated under <strong>Section 393 of the Income Tax Act 2025</strong>; the substance is unchanged.</li>
                  </ul>
                </div>
                <p>Section 194J is one of the most frequently applied TDS provisions for any business that pays consultants, professionals, or technical service providers; legal fees, audit fees, IT consulting, and design or engineering services all typically fall under it. Getting the rate, the threshold, and the category right matters, because the two sub-rates (professional versus technical) are easy to mix up, and errors here get flagged in tax audits.</p>

                <h2>What Counts as Professional and Technical Services</h2>
                <p><strong>Professional services</strong> under Section 194J cover fees paid to legal, medical, engineering, architectural, accountancy, technical consultancy, interior decoration, advertising, and similar professionals, along with company secretaries and certain sportspersons. <strong>Technical services</strong> cover fees for rendering managerial, technical, or consultancy services, but exclude construction, mining, or assembly-type activities that fall under a contract for work (which is instead governed by Section 194C).</p>
                <p>The distinction matters because the two categories carry different rates. A software development retainer might be treated as a technical service (2%), while a lawyer's litigation fee is a professional service (10%). When a single invoice mixes both, apply the correct rate to each component rather than defaulting to one rate for the whole bill.</p>

                <h2>TDS Rates Under Section 194J</h2>
                <ul>
                  <li><strong>10%</strong> on fees for professional services</li>
                  <li><strong>2%</strong> on fees for technical services (excluding professional services and royalty for cinematographic films)</li>
                  <li><strong>2%</strong> on royalty paid for sale, distribution, or exhibition of cinematographic films</li>
                  <li><strong>20%</strong> if the payee does not furnish PAN, under Section 206AA, overriding the standard rate</li>
                </ul>
                <p>These rates apply regardless of whether the payee is an individual, firm, or company, as long as the payment falls within the defined categories.</p>

                <h2>The Rs 50,000 Threshold, Applied Per Category</h2>
                <p>No TDS is required if the aggregate payment to a payee for a given category (professional or technical) in a financial year does not exceed Rs 50,000. This threshold is applied separately to each category, so a business paying the same consultant Rs 40,000 for professional advice and Rs 45,000 for technical work in the same year does not cross the threshold for either, even though the combined figure exceeds Rs 50,000.</p>
                <p>Once the threshold is crossed for a category, TDS is deducted on the entire amount paid in that year for that category, not merely on the amount above Rs 50,000. This is a common point of confusion, since some other TDS provisions (like Section 194Q) work on a slab basis above the threshold; Section 194J does not.</p>

                <h2>Who Must Deduct, and When</h2>
                <p>Companies, firms, LLPs, trusts, and any person subject to tax audit under Section 44AB (now Section 63) in the preceding financial year must deduct TDS under Section 194J when making qualifying payments. Individuals and HUFs not subject to tax audit are generally exempt from this obligation, though they should confirm their audit status each year rather than assuming exemption carries forward.</p>
                <p>TDS must be deducted at the time of payment or credit to the payee's account, whichever is earlier, and deposited by the 7th of the following month (by April 30 for March deductions). The deductor must also file the quarterly TDS return (Form 26Q) and issue Form 16A to the payee.</p>

                <h2>Section 393 of the Income Tax Act 2025</h2>
                <p>Under the Income Tax Act 2025, Section 194J has been folded into a large consolidated TDS section, now Section 393, which groups together several payment types previously spread across separate sections. The rates and thresholds described above continue to apply; what has changed is the drafting structure, not the substance. When you see references to "Section 393" for professional or technical fee TDS, it is this consolidated provision, not a new set of rates.</p>

                <h2>Common Compliance Mistakes</h2>
                <ul>
                  <li><strong>Misclassifying a payment</strong> as technical when it is really professional (or vice versa), leading to the wrong rate being applied.</li>
                  <li><strong>Ignoring the per-category threshold logic</strong> and either over-deducting or under-deducting when a payee falls just below or above Rs 50,000 for one category.</li>
                  <li><strong>Missing the PAN check</strong>, which triggers the much higher 20% rate under Section 206AA.</li>
                  <li><strong>Not reconciling Section 194J deductions with Form 26Q</strong> before the quarterly due date, leading to short deductions surfacing later in a notice.</li>
                </ul>
                <p>Non-deduction or short deduction makes the deductor personally liable for the shortfall, attracts interest, and can trigger disallowance of the expense under Section 40(a)(ia) in the deductor's own income computation, in addition to the possibility of penalty. Contractor-type payments that don't fit the professional or technical definition are usually governed by <Link href="/blog/tds-contractor-payments-section-194c-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194C</Link> instead; getting this classification right upfront avoids a rework of TDS returns later.</p>

                <p>If your business regularly engages consultants, professionals, or technical service providers, a periodic TDS health check catches classification errors before they surface in a Section 143(1) intimation. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax compliance services</Link> cover TDS deduction reviews, return filing, and correction of past defaults.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with TDS compliance on professional or technical payments?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses classify payments correctly, deduct TDS at the right rate, and file accurate quarterly returns.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20TDS%20under%20Section%20194J." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-contractor-payments-section-194c-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Contractor Payments: Section 194C Compliance Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-194q-tds-purchase-of-goods" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide (NRI Property)</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale (FY 2026-27)</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

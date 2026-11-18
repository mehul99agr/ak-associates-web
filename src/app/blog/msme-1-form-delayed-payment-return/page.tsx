import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: "MSME-1 Half-Yearly Return: Due Dates & Penalty (2026)" },
  description: "Companies owing MSE suppliers beyond 45 days must file MSME-1 by Oct 31 and Apr 30. See who files, the revised format, penalty and the link to Section 43B(h).",
  keywords: ["MSME-1", "MSME Form 1 due date", "MSME-1 half yearly return", "MSME-1 penalty", "45 days MSME payment", "Section 405 Companies Act", "MSME-1 filing"],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/msme-1-form-delayed-payment-return' },
  openGraph: {
    title: "MSME-1 Half-Yearly Return: Due Dates & Penalty (2026)",
    description: "Companies owing MSE suppliers beyond 45 days must file MSME-1 by Oct 31 and Apr 30. See who files, the revised format, penalty and the link to Section 43B(h).",
    url: 'https://agrawalkhandelwal.com/blog/msme-1-form-delayed-payment-return',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: "MSME-1 Half-Yearly Return: Due Dates & Penalty (2026)",
    description: "Companies owing MSE suppliers beyond 45 days must file MSME-1 by Oct 31 and Apr 30. See who files, the revised format, penalty and the link to Section 43B(h).",
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd("MSME-1 Half-Yearly Return: Who Files, Due Dates and Penalty", 'msme-1-form-delayed-payment-return')

const articleLd = buildArticleLd({
  headline: "MSME-1 Half-Yearly Return: Who Files, Due Dates and Penalty",
  description: "Companies owing MSE suppliers beyond 45 days must file MSME-1 by Oct 31 and Apr 30. See who files, the revised format, penalty and the link to Section 43B(h).",
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  slug: 'msme-1-form-delayed-payment-return',
})

const faqs: [string, string][] = [
  ["Who has to file MSME-1?", "A company that has bought goods or services from micro or small enterprises and has payments outstanding for more than 45 days from acceptance. If there are no such dues at the end of a half-year, no return is needed."],
  ["What are the due dates for MSME-1?", "October 31 for the April to September half-year and April 30 for the October to March half-year. The April to September 2026 return was due October 31, 2026, and the next is due April 30, 2027."],
  ["Is MSME-1 required if there are no delayed payments?", "No. It is filed only where dues to micro or small suppliers are pending beyond 45 days. It is not a nil-return form."],
  ["What is the penalty for not filing MSME-1?", "Under Section 405(4) of the Companies Act, the company faces a penalty of Rs 20,000, plus Rs 1,000 for each day the failure continues, up to Rs 3 lakh. Officers in default are also liable. Registrars have issued adjudication orders under Section 454 for delayed MSME-1 filings."],
  ["Did the MSME-1 format change in 2025-26?", "The updated form on the MCA V3 portal asks for amounts paid within and after 45 days and reasons for delay, and the Ministry of MSME reiterated the requirement on March 25, 2025. We found no further change for 2025-26, but check the portal before filing."],
  ["How is MSME-1 linked to Section 43B(h)?", "Both use the 45-day rule. MSME-1 is a Companies Act reporting form, while Section 43B(h) of the Income-tax Act makes the expense deductible only on payment if the dues to a micro or small supplier remain unpaid at year end."],
]

const faqLd = buildFaqLd(faqs)

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>MSME-1 Half-Yearly Return: Who Files, Due Dates and Penalty</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>MSME-1</strong> is a half-yearly return for companies that have <strong>outstanding payments to micro or small enterprise suppliers for more than 45 days</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Due dates: <strong>October 31</strong> for April to September, and <strong>April 30</strong> for October to March. The April to September 2026 return was due October 31, 2026.</li>
                  <li style={{ marginBottom: '0.4rem' }}>If no dues to micro and small suppliers are pending beyond 45 days, there is <strong>no return to file</strong>. It is not a nil-return form.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The updated form on the MCA V3 portal asks for amounts paid within and after 45 days and the <strong>reasons for delay</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Section 405(4) penalty: <strong>Rs 20,000</strong> on the company plus Rs 1,000 a day of continuing failure, capped at <strong>Rs 3 lakh</strong>. Officers in default are also liable.</li>
                  <li style={{ marginBottom: 0 }}>Delayed payment also has a <strong>tax cost</strong>: see Section 43B(h), covered in our separate post.</li>
                </ul>
              </div>

              <p>A startup that buys from small vendors, such as a freelancer, a printer, a small manufacturer or a software agency registered as a micro or small enterprise, has a legal clock on every invoice. If payment drifts past 45 days, two things can happen: the company may owe interest to the supplier, and it may have to report the delay to the Registrar in Form MSME-1. Founders often meet both for the first time in an audit.</p>

              <h2>Who Must File MSME-1</h2>
              <p>The requirement applies to a company that has obtained goods or services from <strong>micro and small enterprises</strong> and whose payment to any such supplier has been <strong>outstanding for more than 45 days</strong> from the date of acceptance of the goods or services. It rests on the payment rules in Section 15 of the MSMED Act, 2006, and the reporting rule in Section 405 of the Companies Act read with the MCA specified companies order. Medium enterprises are not covered.</p>
              <p>Two points are easy to miss. First, the 45 days apply even where the written agreement says 60 or 90 days, because the statute caps the credit period at 45 days where there is a written agreement, and at 15 days where there is none. Second, MSME-1 is filed only if such a delay actually exists. It is not an annual nil-return.</p>

              <h2>Due Dates</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }}>
                  <thead><tr>
                    <th style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }}>Half-year</th>
                    <th style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }}>Covers</th>
                    <th style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }}>Due date</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)' }}>First half</td><td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)' }}>April to September</td><td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)' }}>October 31</td></tr>
                    <tr><td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>Second half</td><td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>October to March</td><td style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>April 30</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The return for April to September 2026 was due on October 31, 2026. We did not find a general MCA extension for it. If you missed it, file now. The next return, for October 2026 to March 2027, is due on April 30, 2027. Add both dates to your <Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup compliance calendar</Link>.</p>

              <h2>What the Return Contains</h2>
              <p>The return asks for details of each micro or small supplier with dues pending beyond 45 days: the supplier name, PAN, the amount due, the date from which it has been due, and the reason for non-payment. The updated format on the MCA V3 portal also asks for amounts paid within 45 days and amounts paid after 45 days. The Ministry of MSME reiterated the requirement through a notification dated March 25, 2025. We found no sign of a further format change for 2025-26, but check the form on the portal before you file, since MCA revises forms without much notice.</p>

              <h2>Penalty for Non-Filing</h2>
              <p>Section 405 of the Companies Act provides penalties for failing to file the return or for filing incorrect information. Under Section 405(4), the company is liable to a penalty of Rs 20,000, with a further Rs 1,000 for each day the failure continues, subject to a maximum of Rs 3 lakh, and officers in default are also liable. This is not theoretical: Registrars of Companies issued adjudication orders under Section 454 in January 2026 for MSME-1 returns filed years late. We found no filing fee for the form itself.</p>
              <p>The larger cost is usually interest. Under the MSMED Act, a buyer who delays payment owes compound interest at three times the bank rate notified by the RBI, and that interest is not deductible. A supplier can also complain through the MSME Samadhaan portal.</p>

              <h2>The Tax Link: Section 43B(h)</h2>
              <p>For income tax, a payment to a micro or small enterprise that is outstanding beyond the permitted 15 or 45 days at year end is deductible only when actually paid. This can raise taxable income in the year of default. We explain it in full in <Link href="/blog/section-43bh-msme-payment-disallowance-buyers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 43B(h) and MSME payment disallowance</Link>. MSME-1 and Section 43B(h) rest on the same 45-day idea, so one supplier ledger can serve both.</p>

              <h2>A Simple Process for a Startup</h2>
              <ol>
                <li>Ask every vendor for their Udyam registration and note whether they are micro, small or medium. See our <Link href="/blog/udyam-registration-for-msmes-process-benefits-and-eligibility" style={{ color: 'var(--primary)', fontWeight: 600 }}>Udyam registration guide</Link>.</li>
                <li>Put the 45-day limit in your vendor agreements and the payables calendar.</li>
                <li>Two weeks before each half-year end, run an ageing of payables to micro and small suppliers.</li>
                <li>If any dues are past 45 days at the end of the half-year and not paid, file MSME-1 with the reasons.</li>
                <li>Clear the oldest dues before March 31 to protect the Section 43B(h) deduction.</li>
              </ol>
              <p>If you are unsure which of your vendors counts as micro or small, our <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup advisory</Link> team can review your payables and set up the checks.</p>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Section 405 of the Companies Act, 2013; Section 15 of the MSMED Act, 2006; Ministry of MSME notification of March 25, 2025. See <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Corporate Affairs</a>.
            </p>
            <PostFooterLinks slug="msme-1-form-delayed-payment-return" />

            <PostCTA
            heading="Owe small vendors beyond 45 days?"
            description="We age your payables, tell you whether MSME-1 is due and protect your Section 43B(h) deduction."
            secondaryLabel="Startup Advisory"
            secondaryHref="/startups"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-43bh-msme-payment-disallowance-buyers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 43B(h) MSME Payment Disallowance</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar, Year 1 to 3</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/udyam-registration-for-msmes-process-benefits-and-eligibility" style={{ color: 'var(--primary)', fontWeight: 600 }}>Udyam Registration Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

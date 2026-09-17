import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Income Tax Refund Status: How to Check & Common Delays',
  description: 'How to check your income tax refund status online, typical processing timelines after e-verification, and the most common reasons refunds get delayed or fail.',
  keywords: [
    'income tax refund status', 'check ITR refund status', 'refund not credited',
    'income tax refund delay', 'how long does income tax refund take', 'refund failed reissue request',
    'ITR processing time', 'income tax refund 2026',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-tax-refund-status-check-common-delays' },
  openGraph: {
    title: 'Income Tax Refund Status: How to Check & Common Delays',
    description: 'How refund status tracking works, typical processing timelines, and the most common reasons refunds are delayed.',
    url: 'https://agrawalkhandelwal.com/blog/income-tax-refund-status-check-common-delays',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Refund Status: How to Check & Common Delays',
    description: 'Timelines, tracking steps, and the most common reasons refunds get stuck.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax Refund Status: How to Check & Common Delays', 'income-tax-refund-status-check-common-delays')

const articleLd = buildArticleLd({
  headline: 'Income Tax Refund Status: How to Check & Common Delays',
  description: 'How to check income tax refund status online, typical processing timelines after e-verification, and the most common reasons refunds get delayed or fail.',
  datePublished: '2026-07-30',
  slug: 'income-tax-refund-status-check-common-delays',
})

const faqs: [string, string][] = [
  [
    'How do I check my income tax refund status?',
    'Log in to the Income Tax e-filing portal, go to "e-File" then "Income Tax Returns" then "View Filed Returns," and select the relevant assessment year to see the current status: Submitted, Verified, Processed, or a refund-specific status such as "Refund Issued" or "Refund Failed." The portal also shows the processing intimation once issued.',
  ],
  [
    'How long does it take to get an income tax refund?',
    'For a straightforward, error-free return that is e-verified promptly, refunds are commonly processed and credited within roughly 4 to 5 weeks of e-verification, and some simple returns move faster. Returns with mismatches, high-value claims, or selected for further review can take considerably longer, sometimes several months, so treat the 4-8 week window as typical rather than guaranteed.',
  ],
  [
    'Why is my income tax refund delayed?',
    'Common causes include a mismatch between the return and Form 26AS/AIS data, an incorrect or unvalidated bank account, the return being picked up for scrutiny or additional verification, outstanding tax demands from a prior year being adjusted against the refund, or simply a backlog at the department during peak filing season. Checking the status message on the portal usually indicates which of these applies.',
  ],
  [
    'What does "Refund Failed" mean and how do I fix it?',
    'A "Refund Failed" status almost always means the bank account selected for credit was not pre-validated, had incorrect details (account number, IFSC, or name mismatch with PAN), or has since been closed. The fix is to pre-validate a correct, active bank account on the e-filing portal under "Profile," then submit a refund reissue request; there is no need to file a revised return for this.',
  ],
  [
    'Can the department adjust my refund against an old tax demand?',
    'Yes. Under Section 245, before releasing a refund the department can set it off against any outstanding tax demand from a prior year, after giving the taxpayer notice and an opportunity to respond. If you believe the old demand is incorrect or already paid, respond to the Section 245 notice on the portal promptly, since an unanswered notice is often treated as an implicit no-objection and the adjustment proceeds.',
  ],
  [
    'Does interest apply on a delayed income tax refund?',
    'Yes, the department pays simple interest on delayed refunds (under the provision applicable to interest on refunds) at a prescribed rate, calculated from the start of the relevant assessment year or the date of filing, whichever is applicable, until the date the refund is granted. The interest is factored into the refund automatically and is itself taxable in the year it is received.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function IncomeTaxRefundStatusBlog() {
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
                Income Tax Refund Status: How to Check &amp; Common Delays
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 30, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Track refund status directly on the Income Tax e-filing portal under "View Filed Returns."</li>
                    <li style={{ marginBottom: '0.4rem' }}>A clean, promptly e-verified return typically sees the refund credited in roughly <strong>4 to 5 weeks</strong>; complex or flagged returns can take much longer.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The most common delay causes: an un-validated bank account, a data mismatch with Form 26AS/AIS, or a Section 245 adjustment against an old demand.</li>
                    <li style={{ marginBottom: 0 }}>A "Refund Failed" status is usually a bank account problem, fixed by pre-validating the account and submitting a reissue request, no revised return needed.</li>
                  </ul>
                </div>

                <p>Filing the return is only half the job when a refund is due; the other half is tracking it through to credit, and knowing what a delay actually means versus what is simply normal processing time. Here is how the tracking works, what a realistic timeline looks like, and what to do when a refund gets stuck.</p>

                <h2>How to Check Your Refund Status</h2>
                <p>The most reliable way is directly on the <strong>Income Tax e-filing portal</strong>: log in, navigate to "e-File" then "Income Tax Returns" then "View Filed Returns," and select the assessment year in question. This shows the full lifecycle of the return: Submitted, Verified, Processed, and, once processing is complete, the refund-specific outcome such as "Refund Issued," "Refund Failed," "No Demand No Refund," or a demand notice if the department believes tax is still owed. The processing intimation (issued once your return is processed) is also available here and is worth downloading and keeping, since it is the formal computation the department has accepted.</p>
                <p>A secondary check is on the NSDL/Protean refund tracking page, which shows refund status by PAN and assessment year once the refund has actually been handed off for payment, though the e-filing portal is generally the more complete and current source.</p>

                <h2>Realistic Refund Timelines</h2>
                <p>For a straightforward return, filed correctly and e-verified promptly (ideally the same day as filing), refunds are commonly processed and credited within about <strong>4 to 5 weeks</strong> of e-verification. Some simple, error-free returns move faster, occasionally within 1 to 2 weeks of processing. Once a return shows "Processed" status with a refund due, the refund is typically initiated within a few days and credited to the pre-validated bank account shortly after through the department's refund banker mechanism.</p>
                <p>That said, this is a typical window, not a guarantee. Returns with larger or unusual claims, mismatches against Form 26AS or the Annual Information Statement (AIS), or those selected for scrutiny can take substantially longer, sometimes running into several months, particularly during the high-volume period right after the filing deadline. If your return has been sitting in "Processed" or under review well beyond 8 weeks, it is worth actively checking for a specific hold-up rather than assuming it will resolve on its own.</p>

                <h2>Common Reasons for Refund Delays</h2>
                <ul>
                  <li><strong>Bank account not pre-validated:</strong> The single most frequent cause. The refund can only be credited to a bank account that has been pre-validated on the e-filing portal, with the account holder's name matching PAN records.</li>
                  <li><strong>Mismatch with Form 26AS or AIS:</strong> If the TDS, income, or other figures in your return don't reconcile with what is reported by employers, banks, and other deductors, the return can be held for manual review before the refund is released.</li>
                  <li><strong>Return selected for scrutiny or additional verification:</strong> Larger refund claims, unusual deduction patterns, or random selection can route a return through a longer review process before the refund stage.</li>
                  <li><strong>Outstanding demand from a prior year:</strong> Under Section 245, the department can adjust the current refund against a pending tax demand from an earlier assessment year, after issuing a notice.</li>
                  <li><strong>PAN-Aadhaar or PAN operability issues:</strong> An inoperative PAN can stall processing until the underlying issue is resolved.</li>
                  <li><strong>Seasonal backlog:</strong> Processing volumes spike right after the filing deadline each year, which can add to typical turnaround times industry-wide, independent of anything specific to your return.</li>
                </ul>

                <h2>What "Refund Failed" Means and How to Fix It</h2>
                <p>A "Refund Failed" status means the department attempted to credit the refund but the transfer was rejected, almost always because the nominated bank account was not properly pre-validated, had an IFSC or account number error, a name mismatch with PAN, or has since been closed. The fix is straightforward: go to "Profile" on the e-filing portal, pre-validate a correct and currently active bank account, and then submit a <strong>refund reissue request</strong> under the "Services" section. This does not require filing a revised return; it is a separate administrative step to redirect the same refund.</p>

                <h2>Section 245 Adjustment Against an Old Demand</h2>
                <p>Before releasing a refund, the department is entitled to check for any outstanding demand from a previous year and adjust the refund against it, after giving notice under Section 245 and an opportunity to respond. If a notice like this appears and you believe the old demand is wrong, already paid, or under dispute, respond on the portal within the window given; an unanswered notice is often treated as acceptance and the adjustment proceeds automatically, reducing or eliminating the refund you were expecting.</p>

                <h2>Interest on Delayed Refunds</h2>
                <p>The department pays simple interest on refunds that take time to process, calculated from the relevant starting point in the assessment year until the refund is granted, and this interest is added automatically as part of the refund computation shown in the processing intimation. Note that this interest itself is taxable income in the year it is received, so it should be reported in the following year's return if material.</p>
                <p>If your refund has been stuck well past the typical window, or you are dealing with a Section 245 adjustment you don't agree with, we help clients track down the specific hold-up on the portal and respond to notices correctly rather than letting a refund sit indefinitely.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Refund stuck or delayed longer than expected?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help clients diagnose refund delays, respond to Section 245 notices, and get bank account issues sorted so refunds actually get credited.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20my%20income%20tax%20refund%20is%20delayed%20and%20I%20need%20help." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rectification-under-section-154-itr-errors" style={{ color: 'var(--primary)', fontWeight: 600 }}>Rectification Under Section 154: Fixing Errors in Your ITR</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/advance-tax-who-must-pay-due-dates-interest" style={{ color: 'var(--primary)', fontWeight: 600 }}>Advance Tax: Who Must Pay, Due Dates &amp; Interest</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI TDS Refund on Property Sale</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nro-tds-refund-claim-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account TDS Refund: Claim Process</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

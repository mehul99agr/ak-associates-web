import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Rectification Under Section 154: Fixing Errors in Your ITR',
  description: 'How to file a rectification request for a mistake in your processed ITR: what qualifies, the online process, timelines, and how it differs from a revised return.',
  keywords: [
    'rectification under section 154', 'section 154 rectification', 'how to file rectification request',
    'ITR rectification process', 'mistake apparent from record', 'rectification vs revised return',
    'income tax rectification time limit',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/rectification-under-section-154-itr-errors' },
  openGraph: {
    title: 'Rectification Under Section 154: Fixing Errors in Your ITR',
    description: 'What qualifies for rectification, the online filing process, timelines, and how it differs from a revised return.',
    url: 'https://agrawalkhandelwal.com/blog/rectification-under-section-154-itr-errors',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rectification Under Section 154: Fixing ITR Errors',
    description: 'What qualifies, how to file, and timelines for correcting a mistake in a processed income tax return.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Rectification Under Section 154: Fixing Errors in Your ITR', 'rectification-under-section-154-itr-errors')

const articleLd = buildArticleLd({
  headline: 'Rectification Under Section 154: Fixing Errors in Your ITR',
  description: 'How rectification of a mistake apparent from the record works for a processed income tax return: what qualifies, the online process, timelines, and how it differs from filing a revised return.',
  datePublished: '2026-09-27',
  slug: 'rectification-under-section-154-itr-errors',
})

const faqs: [string, string][] = [
  [
    'What is rectification under Section 154?',
    'Rectification under Section 154 is a mechanism to correct a "mistake apparent from the record" in an order already passed by the Income Tax Department, most commonly the processing intimation issued after your ITR is processed. It covers clear, self-evident errors, like a wrongly disallowed TDS credit or an arithmetic slip in the computation, not disputes that require fresh argument or evidence.',
  ],
  [
    'What kind of errors qualify for rectification?',
    'Only mistakes that are obvious from the record itself qualify: a TDS credit visible in Form 26AS but not given in the intimation, an arithmetic or computational error, a deduction claimed correctly in the return but omitted in processing, or a clerical error like a wrong assessment year or PAN reference. Errors that require re-examining facts, fresh evidence, or a debatable point of law do not qualify and instead need a revised return, appeal, or other remedy.',
  ],
  [
    'What is the time limit to file a rectification request?',
    'A rectification request must generally be filed within the statutory time limit measured from the end of the financial year in which the order sought to be rectified was passed; this is a multi-year window rather than a matter of weeks, but it is best not to sit on an identified error, since evidence and records are easier to pull together sooner rather than later.',
  ],
  [
    'How is rectification different from filing a revised return?',
    'A revised return under the applicable provision replaces your original return and can be used to correct almost any error or omission in what you originally reported, but it is only available within a fixed window tied to the assessment year. Rectification, by contrast, does not touch the return itself; it corrects a mistake in an order the department has already passed (like the processing intimation), and is appropriate only when the return was correct but the processing of it was not.',
  ],
  [
    'How do I file a rectification request online?',
    'Log in to the Income Tax e-filing portal, go to "Services" then "Rectification," select the relevant order (usually the intimation) and assessment year, choose the applicable rectification category (such as "Reprocess the case" or "Tax credit mismatch correction"), specify the exact discrepancy, and submit. No physical documents are needed for most straightforward cases, though supporting evidence like a TDS certificate should be kept ready if the department asks.',
  ],
  [
    'How long does it take for a rectification request to be processed?',
    'Processing time varies by the nature of the correction and current departmental workload; simple credit-mismatch corrections are often resolved faster than requests requiring a fresh look at the computation. There is no fixed statutory turnaround guaranteed for every case, so it is worth checking status periodically on the portal rather than assuming a specific number of weeks.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function RectificationSection154Blog() {
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
                Rectification Under Section 154: Fixing Errors in Your ITR
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 27, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Rectification (traditionally under <strong>Section 154</strong>) corrects a <strong>mistake apparent from the record</strong> in an order the department has already passed, most often the processing intimation.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It fixes clerical, arithmetic, or credit-mismatch errors, not fresh disputes or debatable points, and it does not replace the return itself.</li>
                    <li style={{ marginBottom: '0.4rem' }}>File it online under "Services" then "Rectification" on the e-filing portal; no physical paperwork is typically required.</li>
                    <li style={{ marginBottom: 0 }}>Different from a revised return: rectification fixes the department's processing of a correct return; a revised return fixes an error in the return itself.</li>
                  </ul>
                </div>

                <p>Getting an income tax intimation that doesn't match what you filed, a TDS credit that's missing, a deduction the system silently dropped, or an arithmetic figure that just looks wrong, is more common than most taxpayers expect. The remedy for this specific situation is rectification, traditionally governed by <strong>Section 154</strong> of the Income Tax Act. A quick note on numbering before we go further: this provision has been renumbered under the Income Tax Act 2025, and the exact new-Act section reference has not been consistently published across secondary sources as of this writing; we'd recommend confirming the specific new-Act clause at the time of filing rather than relying on a number here. The substance of how rectification works, and when to use it, is unaffected by the renumbering, so we'll refer to it by its familiar name, Section 154, throughout this guide.</p>

                <h2>What Rectification Actually Fixes</h2>
                <p>Rectification exists for a narrow, specific purpose: correcting a <strong>"mistake apparent from the record"</strong> in an order the department has already passed. In practice, this is almost always the processing intimation issued after your ITR is processed. It is not a general-purpose tool for disputing an assessment or reopening a debate about how the law applies to your facts; it is meant for errors that are obvious once you look at the record, no argument needed.</p>
                <p>The key phrase is "apparent from the record." If establishing the error requires digging into new facts, external evidence not already on file, or a genuinely arguable interpretation of law, it does not qualify for rectification and needs a different remedy (a revised return, a response to the notice, or an appeal, depending on the stage).</p>

                <h2>Errors That Typically Qualify</h2>
                <ul>
                  <li><strong>TDS credit mismatch:</strong> Tax deducted at source shows correctly in Form 26AS or the Annual Information Statement, but the processing intimation did not give credit for it, or gave a smaller amount.</li>
                  <li><strong>Arithmetic or computational errors:</strong> A calculation mistake in the tax, interest, or refund figure that is clearly wrong on the face of the intimation.</li>
                  <li><strong>Deduction or exemption correctly claimed but not allowed in processing:</strong> For example, a valid Chapter VI-A deduction or house property loss claimed in the return but dropped or reduced during automated processing.</li>
                  <li><strong>Clerical or factual errors:</strong> Wrong assessment year referenced, incorrect PAN linkage, or a similar administrative slip.</li>
                  <li><strong>Carry-forward loss not correctly reflected:</strong> A loss correctly computed and claimed in the return but not carried forward as it should be in the processed order.</li>
                </ul>
                <p>Errors that do <strong>not</strong> qualify include a genuine dispute over whether an expense is deductible, a claim you forgot to make in the original return (that needs a revised return, if the window is still open), or anything requiring the department to re-examine facts rather than simply re-read its own record correctly.</p>

                <h2>Rectification vs Revised Return: Choosing the Right Remedy</h2>
                <p>These two are frequently confused, but they solve different problems:</p>
                <ul>
                  <li><strong>Revised return</strong> replaces the original return itself, and can be used to correct almost any error or omission you made in what you originally reported, an income you forgot, a deduction you missed, an entire schedule filled incorrectly. It is only available within a fixed window tied to the assessment year, after which the option closes.</li>
                  <li><strong>Rectification</strong> does not touch the return at all. It corrects a mistake in how the department processed a return that was itself correct. If your return was accurate and the intimation simply got the TDS credit wrong, that is a rectification case, not a revised-return case.</li>
                </ul>
                <p>If you're not sure which applies, the quick test is: was the error in what you filed, or in what the department did with what you filed? The former needs a revised return (if still within the window); the latter needs rectification.</p>

                <h2>How to File a Rectification Request Online</h2>
                <ol>
                  <li><strong>Log in to the Income Tax e-filing portal</strong> and navigate to "Services" then "Rectification."</li>
                  <li><strong>Select the order to be rectified</strong>, typically the intimation, and the relevant assessment year.</li>
                  <li><strong>Choose the rectification category</strong> that matches the error, common options include reprocessing the return, correcting a tax credit mismatch, or correcting return data.</li>
                  <li><strong>Describe the specific discrepancy</strong> clearly, referencing the figures in the intimation versus what should be correct.</li>
                  <li><strong>Submit</strong> and note the acknowledgment number for tracking. Most straightforward cases do not require uploading physical documents, but keep TDS certificates or other supporting proof on hand in case the department requests clarification.</li>
                </ol>

                <h2>Timelines to Keep in Mind</h2>
                <p>There is a statutory window for filing a rectification request, generally measured in years from the end of the financial year in which the order was passed, so this is not an urgent same-week deadline the way some notices are. That said, the practical advice is the opposite of relying on the long window: file as soon as the error is spotted. Supporting records like TDS certificates and Form 26AS extracts are easiest to pull together while the transaction is still fresh, and an unresolved credit mismatch can otherwise trigger follow-up notices or affect a pending refund in the meantime. Processing time for the rectification itself varies by case complexity and departmental workload; there is no single guaranteed turnaround, so checking status periodically on the portal is the practical approach rather than assuming a fixed number of weeks.</p>
                <p>If a rectification request is rejected or you disagree with the outcome, the next step is typically an appeal or a fresh representation with more detailed supporting evidence, at which point professional help in framing the argument correctly becomes valuable.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Spotted an error in your intimation?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help clients identify whether rectification or a revised return is the right fix, and file it correctly the first time.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20found%20an%20error%20in%20my%20income%20tax%20intimation%20and%20need%20help." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-refund-status-check-common-delays" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Refund Status: How to Check &amp; Common Delays</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/advance-tax-who-must-pay-due-dates-interest" style={{ color: 'var(--primary)', fontWeight: 600 }}>Advance Tax: Who Must Pay, Due Dates &amp; Interest</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>New Income Tax Act 2025: Key Rules</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>Understanding the New Tax Regime</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

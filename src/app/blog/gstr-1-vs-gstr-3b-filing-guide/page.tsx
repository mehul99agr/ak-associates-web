import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'GSTR-1 vs GSTR-3B: Filing Guide & Common Mistakes' },
  description: 'The difference between GSTR-1 and GSTR-3B, due dates, QRMP scheme, late fees, and the reconciliation mistakes that trigger GST notices.',
  keywords: [
    'GSTR-1 vs GSTR-3B', 'GSTR-1 due date', 'GSTR-3B due date', 'GST return filing guide',
    'QRMP scheme GST', 'GST late fee', 'GSTR-1 GSTR-3B mismatch', 'GST return reconciliation',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gstr-1-vs-gstr-3b-filing-guide' },
  openGraph: {
    title: 'GSTR-1 vs GSTR-3B: Filing Guide & Common Mistakes',
    description: 'What each return covers, due dates and the QRMP option, late fees, and the reconciliation mistakes that lead to GST notices.',
    url: 'https://agrawalkhandelwal.com/blog/gstr-1-vs-gstr-3b-filing-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSTR-1 vs GSTR-3B: Filing Guide & Common Mistakes',
    description: 'What each return covers, due dates and the QRMP option, late fees, and the reconciliation mistakes that lead to GST notices.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GSTR-1 vs GSTR-3B: Filing Guide & Common Mistakes', 'gstr-1-vs-gstr-3b-filing-guide')

const articleLd = buildArticleLd({
  headline: 'GSTR-1 vs GSTR-3B: Filing Guide & Common Mistakes',
  description: 'A practical comparison of GSTR-1 and GSTR-3B: what each return reports, due dates, the QRMP quarterly option, late fees, and the mismatch errors that trigger GST department notices.',
  datePublished: '2026-09-18',
  slug: 'gstr-1-vs-gstr-3b-filing-guide',
})

const faqs: [string, string][] = [
  [
    'What is the difference between GSTR-1 and GSTR-3B?',
    'GSTR-1 is a detailed, invoice-wise statement of all outward supplies (sales) made during the period; it has no tax payment attached to it. GSTR-3B is a summary self-declared return of total sales, purchases, input tax credit claimed, and tax paid; it is the return through which GST is actually deposited to the government.',
  ],
  [
    'What are the due dates for GSTR-1 and GSTR-3B?',
    'For monthly filers, GSTR-1 is due on the 11th of the following month and GSTR-3B on the 20th. For businesses on the QRMP scheme, GSTR-1 (as IFF or the quarterly form) is due on the 13th of the month after the quarter, and GSTR-3B is due on the 22nd or 24th depending on the state, though tax must still be paid monthly via Form PMT-06.',
  ],
  [
    'What is the QRMP scheme and who can opt for it?',
    'QRMP (Quarterly Return Monthly Payment) lets businesses with aggregate annual turnover up to Rs 5 crore file GSTR-1 and GSTR-3B quarterly instead of monthly, while still paying tax every month through a simplified challan. It reduces the filing frequency without deferring the actual cash tax outflow.',
  ],
  [
    'What is the late fee for missing GSTR-1 or GSTR-3B?',
    'The standard late fee is Rs 50 per day of delay (Rs 20 per day for nil returns), subject to a cap that varies by return and turnover slab; interest at 18% per annum also applies on any tax paid late. Because the fee runs per return per day, a delay across both GSTR-1 and GSTR-3B compounds quickly.',
  ],
  [
    'Why do GSTR-1 and GSTR-3B need to match?',
    'The tax department reconciles the sales reported in GSTR-1 against the sales and tax declared in GSTR-3B, and any mismatch (sales declared in one but not the other, or a large recurring gap) is a common trigger for a scrutiny notice. Consistent, timely reconciliation between the two before filing is the single biggest way to avoid this.',
  ],
  [
    'Can GSTR-3B be filed if GSTR-1 has not been filed?',
    'No, GSTR-1 filing for a period generally must be completed before the corresponding GSTR-3B can be filed for that period on the portal. Filing GSTR-1 late therefore also delays GSTR-3B and stacks late fees and interest on both fronts.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function GstrFilingGuideBlog() {
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
              <span className="section-badge">GST</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                GSTR-1 vs GSTR-3B: Filing Guide &amp; Common Mistakes
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 18, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>GSTR-1</strong> reports invoice-wise sales detail; <strong>GSTR-3B</strong> is the summary return through which tax is actually paid.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Monthly due dates: GSTR-1 on the 11th, GSTR-3B on the 20th. QRMP filers get the 13th and the 22nd/24th, but still pay tax monthly.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Late fee is Rs 50/day (Rs 20/day for nil returns) plus 18% annual interest on unpaid tax.</li>
                    <li style={{ marginBottom: 0 }}>Mismatches between the two returns are one of the most common triggers for a GST scrutiny notice.</li>
                  </ul>
                </div>
                <p>GSTR-1 and GSTR-3B are the two returns every regular GST-registered business files, and confusing what each one is for is where most small-business filing mistakes start. One is a detailed sales report with no tax payment attached; the other is where tax is actually declared and paid. Getting the sequencing and reconciliation right between them matters more than most businesses realize until a mismatch notice arrives.</p>

                <h2>GSTR-1: The Sales Detail Return</h2>
                <p>GSTR-1 is an <strong>invoice-wise statement of outward supplies</strong> (sales) for the period, covering B2B invoices, B2C large-value invoices, credit and debit notes, exports, and HSN-wise summaries. It carries no tax payment; it exists purely to feed the buyer&apos;s input tax credit and to give the department a granular, invoice-level record of what was sold to whom.</p>
                <p>Because your customers&apos; input tax credit depends on what you report here, errors or delays in GSTR-1 directly affect their ability to claim credit, not just your own compliance record; this is a common source of friction with B2B customers when a supplier files late.</p>

                <h2>GSTR-3B: The Summary Return and Tax Payment</h2>
                <p>GSTR-3B is a <strong>self-declared summary return</strong>: total outward supplies, total inward supplies, input tax credit claimed, and net tax payable, all at a consolidated level rather than invoice-wise. This is the return through which GST is actually deposited to the government. Even if turnover is nil for the period, a nil GSTR-3B still needs to be filed to avoid a late fee.</p>

                <h2>Due Dates: Monthly vs QRMP</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Filing Frequency</th>
                      <th style={thStyle}>GSTR-1 Due Date</th>
                      <th style={thStyle}>GSTR-3B Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Monthly</td>
                      <td style={tdStyle}>11th of the following month</td>
                      <td style={tdStyle}>20th of the following month</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>QRMP (quarterly)</td>
                      <td style={tdAltStyle}>13th of the month after quarter-end (IFF optional monthly for the first two months)</td>
                      <td style={tdAltStyle}>22nd or 24th of the month after quarter-end, depending on state</td>
                    </tr>
                  </tbody>
                </table>
                <p><strong>QRMP (Quarterly Return Monthly Payment)</strong> is available to businesses with aggregate annual turnover up to Rs 5 crore. It reduces filing frequency to once a quarter for both returns, but tax still has to be paid every month using a simplified challan (Form PMT-06), so cash flow planning does not change; only the paperwork frequency does.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>GSTR-1 Must Be Filed Before GSTR-3B</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The portal generally requires GSTR-1 for a period to be filed before GSTR-3B for that same period can be submitted. Businesses that push GSTR-1 to the last minute often find they have also boxed themselves into a late GSTR-3B, stacking late fees and interest on both returns instead of just one.</p>
                </div>

                <h2>Late Fees and Interest</h2>
                <p>Missing either return attracts a late fee of <strong>Rs 50 per day</strong> of delay (Rs 20 per day for a nil return), subject to a cap that varies by turnover slab, applied separately to GSTR-1 and GSTR-3B. On top of the late fee, any tax paid after the due date attracts <strong>interest at 18% per annum</strong>, calculated on the outstanding tax from the due date to the date of actual payment. These add up fast for businesses that fall behind for even a few months, which is why catching up immediately rather than waiting is always the cheaper option.</p>

                <h2>Why GSTR-1 and GSTR-3B Need to Reconcile</h2>
                <p>The GST department runs automated reconciliation between the invoice-level sales reported in GSTR-1 and the summary figures declared in GSTR-3B. A recurring or large gap between the two, sales shown in one return but not matched in the other, is one of the most common triggers for a scrutiny notice or a demand for explanation. The same applies to reconciling input tax credit claimed in GSTR-3B against what actually appears in your auto-populated GSTR-2B statement from your suppliers&apos; GSTR-1 filings.</p>
                <p>Practical habits that prevent this: finalize your sales register before filing GSTR-1 rather than treating it as a draft, reconcile GSTR-3B figures against GSTR-1 for the same period before submitting, and check GSTR-2B before claiming input tax credit rather than relying on your own purchase register alone.</p>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                  <li>Filing GSTR-3B based on estimated figures and never going back to reconcile against the final GSTR-1</li>
                  <li>Claiming input tax credit that does not appear in GSTR-2B, which invites a mismatch query</li>
                  <li>Missing the nil-return filing when there is no business activity in a period, thinking no filing is needed</li>
                  <li>Amending an invoice in a later GSTR-1 without checking whether the corresponding GSTR-3B period also needs adjustment</li>
                  <li>Under QRMP, forgetting the monthly PMT-06 tax payment because the return itself is only due quarterly</li>
                </ul>
                <p>If your business is newly registered, see our guide on the <Link href="/blog/gst-registration-process-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST registration process</Link> for what happens before your first return is due, or the <Link href="/blog/gst-composition-scheme-eligibility-rates" style={{ color: 'var(--primary)', fontWeight: 600 }}>composition scheme guide</Link> if you are evaluating whether the lighter CMP-08/GSTR-4 filing cycle suits your business better than the regular GSTR-1/3B route.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Behind on GST filings or getting mismatch notices?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle monthly and QRMP GST return filing, GSTR-1/3B reconciliation, and notice responses.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20GST%20return%20filing." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-process-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration Process in India: Complete Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-composition-scheme-eligibility-rates" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Composition Scheme: Eligibility, Rates &amp; When to Opt In</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration and First Return for Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

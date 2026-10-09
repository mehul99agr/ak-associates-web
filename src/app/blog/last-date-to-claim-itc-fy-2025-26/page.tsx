import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'Last Date to Claim ITC for FY 2025-26: November 30, 2026' },
  description: 'ITC on FY 2025-26 invoices must be claimed by November 30, 2026 under Section 16(4), or earlier if GSTR-9 is filed. Dates for monthly and QRMP filers.',
  keywords: [
    'last date to claim ITC FY 2025-26', 'section 16(4) ITC time limit', 'ITC time limit 30 November 2026',
    'ITC claim last date GSTR-3B', 'ITC time limit QRMP', 'credit note time limit section 34',
    'GSTR-1 amendment last date FY 2025-26', 'ITC lapse annual return',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/last-date-to-claim-itc-fy-2025-26' },
  openGraph: {
    title: 'Last Date to Claim ITC for FY 2025-26: November 30, 2026',
    description: 'ITC on FY 2025-26 invoices must be claimed by November 30, 2026 under Section 16(4), or earlier if GSTR-9 is filed. Dates for monthly and QRMP filers.',
    url: 'https://agrawalkhandelwal.com/blog/last-date-to-claim-itc-fy-2025-26',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Date to Claim ITC for FY 2025-26: November 30, 2026',
    description: 'ITC on FY 2025-26 invoices must be claimed by November 30, 2026 under Section 16(4), or earlier if GSTR-9 is filed. Dates for monthly and QRMP filers.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Last Date to Claim ITC for FY 2025-26: November 30, 2026', 'last-date-to-claim-itc-fy-2025-26')

const articleLd = buildArticleLd({
  headline: 'Last Date to Claim ITC for FY 2025-26: November 30, 2026',
  description: 'ITC on FY 2025-26 invoices must be claimed by November 30, 2026 under Section 16(4), or earlier if GSTR-9 is filed. Dates for monthly and QRMP filers.',
  datePublished: '2026-10-09',
  slug: 'last-date-to-claim-itc-fy-2025-26',
})

const faqs: [string, string][] = [
  ['What is the last date to claim ITC for FY 2025-26?', 'November 30, 2026, or the date on which you file the annual return in GSTR-9 for FY 2025-26, whichever is earlier. This is the time limit in Section 16(4) of the CGST Act for invoices and debit notes relating to FY 2025-26.'],
  ['Which GSTR-3B is the last one in which FY 2025-26 ITC can be claimed?', 'For monthly filers it is the GSTR-3B for October 2026, due November 20, 2026. For QRMP filers it is the GSTR-3B for the July to September 2026 quarter, due October 22 or 24, 2026 depending on the State. A return for these periods filed late but by November 30, 2026 still carries the credit.'],
  ['Can ITC be claimed after November 30 by paying a late fee?', 'No. The time limit in Section 16(4) is a hard cut-off. Credit on FY 2025-26 invoices that is not taken in a return filed by November 30, 2026 lapses, and there is no late fee or condonation route for it.'],
  ['Does filing GSTR-9 before November 30 affect ITC?', 'Yes. The limit is the earlier of November 30 and the date of furnishing the annual return. If you file GSTR-9 for FY 2025-26 before November 30, 2026, you cannot claim further FY 2025-26 credit after that filing date.'],
  ['What is the last date to issue or report a credit note for FY 2025-26?', 'A credit note for a supply made in FY 2025-26 must be declared by November 30, 2026, or the date of filing the annual return for that year, whichever is earlier, for the supplier to reduce output tax liability.'],
]

const faqLd = buildFaqLd(faqs)

export default function LastDateItcFy2526Blog() {
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
                Last Date to Claim ITC for FY 2025-26: November 30, 2026
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>ITC on invoices and debit notes of FY 2025-26 must be claimed by <strong>November 30, 2026</strong>, or the date you file GSTR-9 for FY 2025-26 if that is earlier (Section 16(4)).</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Monthly filers:</strong> the last regular return is GSTR-3B for October 2026, due <strong>November 20, 2026</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>QRMP filers:</strong> the last regular return is GSTR-3B for July to September 2026, due October 22 or 24, 2026.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The same cut-off applies to credit notes and to corrections of FY 2025-26 errors in GSTR-1 and GSTR-3B.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Credit missed by the cut-off is lost permanently. There is no late fee route to recover it.</li>
                  </ul>
                </div>

                <p>Every year a block of input tax credit lapses for no better reason than that nobody claimed it in time. For purchases made in FY 2025-26, that deadline is close. This post gives the rule, the last return that works for each type of filer, and a short reconciliation routine to run before the date.</p>

                <h2>The Rule in One Line</h2>
                <p>Under Section 16(4) of the CGST Act, a registered person cannot take input tax credit on an invoice or debit note after the <strong>30th of November following the end of the financial year</strong> to which it relates, or after furnishing the <strong>annual return</strong> for that year, whichever is earlier. For FY 2025-26, that means November 30, 2026.</p>
                <p>The November 30 date has applied since October 1, 2022. Before that, the limit was tied to the due date of the September return, and some guides still quote the old rule.</p>

                <h2>The Last Return That Works</h2>
                <p>Credit is taken through GSTR-3B, so the question in practice is which return you can still file by November 30.</p>
                <div style={{ overflowX: 'auto' }}>
                  <table>
                    <thead>
                      <tr><th>Filer</th><th>Last regular GSTR-3B before the cut-off</th><th>Due date</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Monthly</td><td>October 2026</td><td>November 20, 2026</td></tr>
                      <tr><td>Quarterly (QRMP)</td><td>July to September 2026</td><td>October 22 or 24, 2026, depending on the State</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>A return for one of these periods filed late, but on or before November 30, 2026, still carries the credit; it will attract late fee and interest in the usual way. A return for November 2026, or for the October to December quarter, is filed after the cut-off and cannot be used for FY 2025-26 credit. QRMP taxpayers therefore have much less time than monthly filers and should treat October as their real deadline.</p>

                <h2>Filing GSTR-9 Early Closes the Window</h2>
                <p>The limit is the earlier of November 30 and the date the annual return is furnished. A business that files GSTR-9 for FY 2025-26 in, say, October 2026 has closed its ITC window for that year on that day. Finish the purchase reconciliation first and file the annual return after it. The annual return itself is covered in our <Link href="/blog/gstr-9-gstr-9c-annual-return-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-9 and GSTR-9C guide</Link>.</p>

                <h2>What Else Shares the November 30 Cut-Off</h2>
                <ul>
                  <li><strong>Credit notes:</strong> a supplier must declare credit notes for FY 2025-26 supplies by the same date to reduce output tax (Section 34).</li>
                  <li><strong>GSTR-1 corrections:</strong> errors or omissions in FY 2025-26 outward supply details can be rectified only up to this date (Section 37).</li>
                  <li><strong>GSTR-3B corrections:</strong> the same limit applies to rectifying a FY 2025-26 error through a later return (Section 39).</li>
                </ul>
                <p>This matters to buyers as well as sellers. If your supplier left your invoice out of GSTR-1 and does not correct it in time, the credit will not appear in your GSTR-2B and you cannot take it. Chase missing invoices now, while the supplier can still amend. Our <Link href="/blog/gstr-1-vs-gstr-3b-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-1 vs GSTR-3B guide</Link> explains how the two returns connect.</p>

                <h2>What the Deadline Does Not Do</h2>
                <p>Meeting the date does not make a credit eligible. The usual conditions still apply: a valid tax invoice or debit note, receipt of the goods or services, the supplier having reported the invoice so that it reflects in your GSTR-2B, and the credit not being blocked. These are set out in our <Link href="/blog/input-tax-credit-itc-gst-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>input tax credit guide</Link>.</p>
                <p>Two points often cause confusion:</p>
                <ul>
                  <li><strong>Debit notes follow their own year.</strong> The time limit runs from the financial year of the debit note, not of the original invoice.</li>
                  <li><strong>Re-availing reversed credit is separate.</strong> Credit reversed because the supplier was not paid within 180 days can be taken again once payment is made, and that re-availment is not subject to the Section 16(4) limit.</li>
                </ul>

                <h2>A Reconciliation Routine Before the Date</h2>
                <ol>
                  <li>Download GSTR-2B for every month of FY 2025-26 and for April to October 2026.</li>
                  <li>Match it against your purchase register for FY 2025-26 and list invoices that are in your books but not in GSTR-2B.</li>
                  <li>Ask each supplier on that list to report or amend the invoice in their next GSTR-1.</li>
                  <li>List invoices that are in GSTR-2B but were never claimed, check eligibility, and claim them in the next GSTR-3B.</li>
                  <li>Review credit notes you have issued for FY 2025-26 supplies and make sure each is reported.</li>
                  <li>File GSTR-9 only after the steps above are complete.</li>
                </ol>
                <p>The 57th GST Council, which met on October 8, 2026, recommended aligning certain return deadlines with the ITC time limits and introducing a return correction mechanism from April 2027. Neither changes the November 30, 2026 date. See our summary of <Link href="/blog/57th-gst-council-meeting-key-recommendations" style={{ color: 'var(--primary)', fontWeight: 600 }}>the 57th GST Council recommendations</Link>.</p>
              </div>

              <PostFooterLinks slug="last-date-to-claim-itc-fy-2025-26" />

              <PostCTA
                heading="Not sure how much FY 2025-26 credit you are about to lose?"
                description="We reconcile your purchase register with GSTR-2B, follow up missing invoices and make sure eligible credit is claimed before the cut-off."
                secondaryLabel="Ask on WhatsApp"
                secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20reconciling%20ITC%20for%20FY%202025-26%20before%20the%20deadline."
                secondaryExternal
              />

              <FaqSection faqs={faqs} />
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

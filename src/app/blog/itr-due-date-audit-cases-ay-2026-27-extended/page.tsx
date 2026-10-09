import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'ITR Due Date for Audit Cases AY 2026-27: Now November 21' },
  description: 'The ITR due date for audit cases for AY 2026-27 is extended from October 31 to November 21, 2026. Who is covered, who is not, and the cost of missing it.',
  keywords: [
    'ITR due date audit cases AY 2026-27', 'ITR due date extended November 21 2026', 'income tax return due date audit case',
    'tax audit due date extended October 21 2026', 'ITR due date for companies AY 2026-27', 'ITR due date partner of firm',
    'section 234F late fee', 'CBDT due date extension 2026',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/itr-due-date-audit-cases-ay-2026-27-extended' },
  openGraph: {
    title: 'ITR Due Date for Audit Cases AY 2026-27: Now November 21',
    description: 'The ITR due date for audit cases for AY 2026-27 is extended from October 31 to November 21, 2026. Who is covered, who is not, and the cost of missing it.',
    url: 'https://agrawalkhandelwal.com/blog/itr-due-date-audit-cases-ay-2026-27-extended',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITR Due Date for Audit Cases AY 2026-27: Now November 21',
    description: 'The ITR due date for audit cases for AY 2026-27 is extended from October 31 to November 21, 2026. Who is covered, who is not, and the cost of missing it.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('ITR Due Date for Audit Cases AY 2026-27: Now November 21', 'itr-due-date-audit-cases-ay-2026-27-extended')

const articleLd = buildArticleLd({
  headline: 'ITR Due Date for Audit Cases AY 2026-27: Now November 21',
  description: 'The ITR due date for audit cases for AY 2026-27 is extended from October 31 to November 21, 2026. Who is covered, who is not, and the cost of missing it.',
  datePublished: '2026-10-09',
  slug: 'itr-due-date-audit-cases-ay-2026-27-extended',
})

const faqs: [string, string][] = [
  ['What is the ITR due date for audit cases for AY 2026-27?', 'November 21, 2026. The CBDT, by a press release dated September 28, 2026, extended it from October 31, 2026. The tax audit report due date was extended at the same time from September 30 to October 21, 2026.'],
  ['Does the extension apply to partners of a firm?', 'Yes, where the firm is one whose accounts are required to be audited. A partner of such a firm falls in the same due date category as the firm, so the partner return is also due by November 21, 2026.'],
  ['Is the due date extended for transfer pricing cases?', 'No. Taxpayers who must furnish a report in Form 3CEB under Section 92E are outside the extension. Form 3CEB remains due by October 31, 2026 and the return by November 30, 2026.'],
  ['What is the late fee if an audit case return is filed after November 21, 2026?', 'A late fee under Section 234F of Rs 5,000 applies, reduced to Rs 1,000 where total income does not exceed Rs 5 lakh. Interest under Section 234A on any unpaid tax is in addition, and business and capital losses for the year cannot be carried forward.'],
  ['Does the tax audit report still have to be filed before the return?', 'Yes. The audit report is due by October 21, 2026, a month before the return. It counts as furnished only once the taxpayer accepts it on the e-filing portal after the CA uploads it.'],
]

const faqLd = buildFaqLd(faqs)

export default function ItrDueDateAuditCasesBlog() {
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
                ITR Due Date for Audit Cases AY 2026-27: Now November 21
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
                    <li style={{ marginBottom: '0.4rem' }}>For Assessment Year 2026-27, the return due date in audit cases is now <strong>November 21, 2026</strong> (was October 31).</li>
                    <li style={{ marginBottom: '0.4rem' }}>The tax audit report is due by <strong>October 21, 2026</strong> (was September 30).</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Covered:</strong> companies, other taxpayers whose accounts must be audited, and partners of audited firms.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Not covered:</strong> taxpayers who must file a transfer pricing report in Form 3CEB. Their report stays due on October 31 and their return on November 30, 2026.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Filing after November 21 means a late fee, interest on unpaid tax, and the loss of the right to carry forward most losses.</li>
                  </ul>
                </div>

                <p>By a press release dated September 28, 2026, the Central Board of Direct Taxes extended two due dates for Assessment Year 2026-27, which is Financial Year 2025-26. If your accounts are audited, your return is no longer due on October 31. This post sets out the new dates, exactly who gets the extra time, and what still applies if you file late.</p>

                <h2>The New Dates</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table>
                    <thead>
                      <tr><th>Filing</th><th>Original Due Date</th><th>Extended Due Date</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Tax audit report</td><td>September 30, 2026</td><td><strong>October 21, 2026</strong></td></tr>
                      <tr><td>Return of income, audit cases</td><td>October 31, 2026</td><td><strong>November 21, 2026</strong></td></tr>
                      <tr><td>Form 3CEB, transfer pricing cases</td><td>October 31, 2026</td><td>Not extended</td></tr>
                      <tr><td>Return of income, transfer pricing cases</td><td>November 30, 2026</td><td>Not extended</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2>Who Is Covered</h2>
                <p>The extension applies to the category of taxpayers whose normal due date was October 31:</p>
                <ul>
                  <li>every <strong>company</strong>;</li>
                  <li>any other taxpayer whose accounts must be <strong>audited</strong> under the Income-tax Act or any other law, which includes a business or professional covered by Section 44AB;</li>
                  <li>a <strong>partner of a firm</strong> whose accounts must be audited.</li>
                </ul>
                <p>Whether you fall in the audit category at all depends on turnover and on how you opted to be taxed. See our guide to <Link href="/blog/tax-audit-section-44ab-turnover-limits-fy-2026-27" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44AB tax audit turnover limits</Link> for the thresholds, and <Link href="/blog/tax-audit-due-date-penalty-for-delay" style={{ color: 'var(--primary)', fontWeight: 600 }}>the tax audit due date and Section 271B penalty</Link> for the audit report side.</p>

                <h2>Who Is Not Covered</h2>
                <p>The extension leaves out taxpayers to whom Section 92E applies, meaning those who must furnish a transfer pricing report in Form 3CEB for international or specified domestic transactions. Their dates were already later than everyone else, and they did not move. Form 3CEB remains due by October 31, 2026 and the linked return by November 30, 2026. The process is covered in our <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB guide</Link>.</p>
                <p>The extension also does nothing for returns that were due on the earlier, non-audit due date. A return that was already late stays late.</p>

                <h2>Which Act Applies</h2>
                <p>Assessment Year 2026-27 relates to income earned in Financial Year 2025-26, so it is still governed by the Income-tax Act, 1961. That is why this post uses the familiar section numbers: 44AB for tax audit, 139(1) for the due date, 234A for interest and 234F for the late fee. The Income Tax Act 2025 applies to income earned from April 1, 2026 onward.</p>

                <h2>Does the Extension Stop Interest?</h2>
                <p>The press release extends the due date; it does not say anything specific about interest. Interest under Section 234A runs from the due date, so a return filed by November 21 with the tax paid should not attract it in the ordinary case. In some earlier extensions, however, the CBDT kept interest running where unpaid self-assessment tax was above Rs 1 lakh. Since the release is silent, the safe course is to pay any self-assessment tax as early as you can and not wait for November 21.</p>

                <h2>What It Costs to Miss November 21</h2>
                <ul>
                  <li><strong>Late fee, Section 234F:</strong> Rs 5,000, or Rs 1,000 where total income does not exceed Rs 5 lakh.</li>
                  <li><strong>Interest, Section 234A:</strong> 1% per month or part of a month on the unpaid tax, from the day after the due date.</li>
                  <li><strong>Losses:</strong> a business loss or capital loss for the year cannot be carried forward if the return is filed after the due date. Loss from house property and unabsorbed depreciation are not affected. See <Link href="/blog/set-off-carry-forward-losses-income-tax" style={{ color: 'var(--primary)', fontWeight: 600 }}>set-off and carry forward of losses</Link>.</li>
                  <li><strong>The audit report:</strong> a report furnished after October 21 separately exposes you to the Section 271B penalty.</li>
                </ul>
                <p>If the date is missed, a belated return is still possible. The options are explained in our post on <Link href="/blog/belated-revised-updated-returns-itr-u-139-8a" style={{ color: 'var(--primary)', fontWeight: 600 }}>belated, revised and updated returns</Link>.</p>

                <h2>A Working Timeline</h2>
                <ol>
                  <li><strong>By October 21, 2026:</strong> your CA uploads the tax audit report and you accept it on the e-filing portal. It counts as furnished only after you accept it.</li>
                  <li><strong>As early as possible:</strong> compute and pay self-assessment tax.</li>
                  <li><strong>By November 21, 2026:</strong> file the return.</li>
                  <li><strong>Within 30 days of filing:</strong> e-verify the return. An unverified return is treated as not filed.</li>
                </ol>
                <p>Partners should note the dependency: a partner cannot finalise a return until the firm has closed its accounts and computed the share of profit, interest and remuneration, so the firm audit should not be left to the last week.</p>
              </div>

              <PostFooterLinks slug="itr-due-date-audit-cases-ay-2026-27-extended" />

              <PostCTA
                heading="Audit report or return still pending for AY 2026-27?"
                description="We handle tax audits and audit-case returns for companies, firms, LLPs and their partners, including the portal acceptance step."
                secondaryLabel="Ask on WhatsApp"
                secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20my%20tax%20audit%20and%20ITR%20for%20AY%202026-27."
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

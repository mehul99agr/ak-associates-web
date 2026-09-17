import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Tax Audit Under Section 44AB: Turnover Limits FY 2026-27',
  description: 'Current Section 44AB tax audit turnover limits for businesses and professionals in FY 2026-27, the higher digital-transaction threshold, and how presumptive taxation opt-outs trigger an audit.',
  keywords: [
    'section 44AB turnover limit', 'tax audit limit FY 2026-27', 'tax audit applicability India',
    'section 44AB tax audit', '10 crore turnover tax audit', 'professionals tax audit limit',
    '44AD 44ADA tax audit', 'who needs tax audit India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tax-audit-section-44ab-turnover-limits-fy-2026-27' },
  openGraph: {
    title: 'Tax Audit Under Section 44AB: Turnover Limits FY 2026-27',
    description: 'Current turnover thresholds for businesses and professionals, the digital-transaction relaxation, and how opting out of presumptive taxation triggers an audit.',
    url: 'https://agrawalkhandelwal.com/blog/tax-audit-section-44ab-turnover-limits-fy-2026-27',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 44AB Tax Audit: Turnover Limits FY 2026-27',
    description: 'Rs 1 crore, Rs 10 crore, or Rs 50 lakh: which limit applies to you, and when presumptive opt-out forces an audit.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Tax Audit Under Section 44AB: Turnover Limits FY 2026-27', 'tax-audit-section-44ab-turnover-limits-fy-2026-27')

const articleLd = buildArticleLd({
  headline: 'Tax Audit Under Section 44AB: Turnover Limits & Applicability FY 2026-27',
  description: 'Current Section 44AB (now Section 63 under the Income Tax Act 2025) turnover thresholds for businesses and professionals in FY 2026-27, the digital-transaction relaxation, and how presumptive taxation opt-outs trigger a mandatory audit.',
  datePublished: '2026-08-12',
  slug: 'tax-audit-section-44ab-turnover-limits-fy-2026-27',
})

const faqs: [string, string][] = [
  ['What is the tax audit turnover limit for businesses in FY 2026-27?', 'The base threshold is Rs 1 crore in turnover. This is relaxed to Rs 10 crore where cash receipts and cash payments during the year each do not exceed 5% of the respective totals; that is, the business is predominantly running through banking channels. Both conditions on the cash-transaction test must be satisfied together to claim the higher Rs 10 crore limit.'],
  ['What is the tax audit limit for professionals?', 'For professionals, the basic threshold is gross receipts exceeding Rs 50 lakh in a financial year. Unlike the business turnover limit, this threshold does not currently have a general digital-transaction enhancement; a separate, higher figure is relevant only in the context of eligibility for the Section 44ADA presumptive scheme itself, not as an audit-threshold relaxation.'],
  ['Does opting out of Section 44AD trigger a mandatory tax audit?', 'It can. If you were eligible for and used the Section 44AD presumptive scheme in an earlier year, then declare profit below the presumptive rate (or opt out) in a later year while your income still exceeds the basic exemption limit, a tax audit becomes mandatory for that year even if your turnover is well below the general Rs 1 crore/Rs 10 crore thresholds, and you may also be restricted from returning to presumptive taxation for a following block of years.'],
  ['Is tax audit compulsory if I declare profit below the 44ADA presumptive rate?', 'Similarly, yes for professionals. If gross receipts are within the Section 44ADA limit but the professional declares profit lower than the prescribed presumptive percentage and total income exceeds the basic exemption limit, a Section 44AB audit is required for that year, regardless of the professional not otherwise crossing the general Rs 50 lakh threshold.'],
  ['What happens if a business or professional required to get a tax audit fails to do so?', 'Failure to get accounts audited and furnish the report by the due date attracts a penalty under Section 271B, generally the lower of 0.5% of turnover/gross receipts or a fixed monetary cap, unless reasonable cause is shown. Beyond the penalty, an unaudited return where an audit was mandatory can also affect the validity and processing of the return itself.'],
  ['Is Section 44AB the same provision under the new Income Tax Act 2025?', 'The tax audit requirement continues under the Income Tax Act 2025, renumbered as Section 63; the reporting forms themselves (Form 3CA/3CB/3CD) are also being consolidated into a new format as part of the same transition. See our companion guide on the audit report forms for how that transition affects filings.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Section44ABBlog() {
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
              <span className="section-badge">Tax Audit</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Tax Audit Under Section 44AB: Turnover Limits &amp; Applicability FY 2026-27
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 12, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Businesses: audit required past <strong>Rs 1 crore</strong> turnover, relaxed to <strong>Rs 10 crore</strong> if cash receipts and cash payments are each 5% or less of the total.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Professionals: audit required past <strong>Rs 50 lakh</strong> gross receipts, with no general digital-transaction relaxation of this threshold.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Opting out of <strong>presumptive taxation</strong> (Section 44AD/44ADA) after using it, or declaring profit below the presumptive rate, can force an audit even below these turnover limits.</li>
                    <li style={{ marginBottom: 0 }}>Section 44AB is now <strong>Section 63</strong> under the Income Tax Act 2025.</li>
                  </ul>
                </div>

                <p>Every filing season, the same question comes up from growing businesses and professionals: "Do I need a tax audit this year?" The answer depends on turnover or gross receipts crossing a threshold, but the thresholds themselves have moved over recent Finance Acts, and the presumptive-taxation opt-out trap catches out far more taxpayers than the headline turnover numbers ever do.</p>

                <h2>Turnover Limits for Businesses</h2>
                <p>For a business, a tax audit under Section 44AB is required once turnover exceeds <strong>Rs 1 crore</strong> in the relevant financial year. This base threshold, however, is relaxed to <strong>Rs 10 crore</strong> where the business runs predominantly through the banking system, specifically where:</p>
                <ul>
                  <li>Cash receipts during the year do not exceed 5% of total receipts, and</li>
                  <li>Cash payments during the year do not exceed 5% of total payments.</li>
                </ul>
                <p>Both conditions must be satisfied together; this is a cumulative test, not an either/or choice. A business that is digitally clean on the receipts side but still makes a meaningful share of payments in cash does not qualify for the Rs 10 crore limit and remains subject to the Rs 1 crore threshold instead. For most modern businesses invoicing and collecting through bank transfers, UPI, or cards, and paying vendors the same way, the Rs 10 crore limit is the more relevant number in practice.</p>

                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Taxpayer Type</th><th style={thStyle}>Base Limit</th><th style={thStyle}>Relaxed Limit</th><th style={thStyle}>Condition for Relaxed Limit</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Business</td><td style={tdStyle}>Rs 1 crore</td><td style={tdStyle}>Rs 10 crore</td><td style={tdStyle}>Cash receipts and cash payments each 5% or less of respective totals</td></tr>
                      <tr><td style={tdAltStyle}>Professional</td><td style={tdAltStyle}>Rs 50 lakh</td><td style={tdAltStyle}>Not applicable</td><td style={tdAltStyle}>No general digital-transaction relaxation on this threshold</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2>Gross Receipts Limit for Professionals</h2>
                <p>For persons carrying on a profession (chartered accountants, doctors, architects, consultants, and other specified and notified professionals), a tax audit is required once gross receipts exceed <strong>Rs 50 lakh</strong> in the year. Unlike the business turnover limit, there is no general higher threshold tied to the proportion of digital transactions for professionals as a standalone audit-applicability relaxation. Professionals evaluating whether the presumptive scheme under <Link href="/blog/presumptive-taxation-professionals-section-44ada" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44ADA</Link> is available to them should treat that as a separate eligibility question from this general audit threshold; the two interact, but they are not the same limit.</p>

                <h2>The Presumptive Taxation Opt-Out Trap</h2>
                <p>This is where most unexpected tax audits actually come from, more often than a straightforward turnover breach. If a business has opted for the <Link href="/blog/presumptive-taxation-scheme-section-44ad" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44AD presumptive scheme</Link> in an earlier year, and in a later year either declares profit below the prescribed presumptive rate, or does not opt for presumptive taxation at all, while total income exceeds the basic exemption limit, a tax audit becomes mandatory for that year, irrespective of turnover. The same logic applies on the professional side under Section 44ADA.</p>
                <p>The consequence is not limited to the immediate year either: opting out after using the presumptive scheme can also restrict the taxpayer from returning to presumptive taxation for a specified number of subsequent years, during which ordinary books-of-account and audit rules (where applicable) apply. Any business or professional currently on presumptive taxation who is considering reporting a lower margin than the presumptive rate in a given year, for whatever commercial reason, should work through this consequence with a CA before filing, since the audit obligation and the multi-year lock-out are triggered together, not independently.</p>

                <h2>Who Actually Needs the Audit: A Quick Decision Path</h2>
                <ol>
                  <li>Is turnover/gross receipts below Rs 1 crore (business) or Rs 50 lakh (profession)? If yes and you have not opted out of presumptive taxation in a way that triggers the exception above, no audit is needed.</li>
                  <li>Is business turnover between Rs 1 crore and Rs 10 crore, and cash receipts/payments each 5% or less of the total? If yes, no audit is needed under the relaxed threshold; if the cash test fails, the audit applies once turnover exceeds Rs 1 crore.</li>
                  <li>Is turnover above Rs 10 crore (business) or gross receipts above Rs 50 lakh (profession)? Audit is mandatory regardless of the cash/digital mix.</li>
                  <li>Have you used presumptive taxation before and are now declaring a lower profit, or opting out, with income above the basic exemption limit? Audit is mandatory for that year even if turnover is well under the general limits.</li>
                </ol>

                <h2>What the Audit Involves and Where It Gets Documented</h2>
                <p>A Section 44AB audit is not a separate financial statement audit; it is carried out by a chartered accountant and results in a signed audit report along with a detailed statement of particulars, filed electronically before the applicable due date. The choice of the correct report form, and what each one covers, is explained in our companion guide on <Link href="/blog/tax-audit-report-forms-3ca-3cb-3cd-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CA, Form 3CB, and Form 3CD</Link>. The Section 43B(h) MSME payment disallowance is one of many items reported through that statement of particulars, which is why vendor-level payment tracking, discussed in our <Link href="/blog/section-43bh-msme-payment-disallowance-buyers" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide to Section 43B(h)</Link>, becomes relevant to any business already crossing the audit threshold.</p>

                <h2>Section 44AB Under the Income Tax Act 2025</h2>
                <p>The tax audit requirement itself continues unchanged in substance under the Income Tax Act 2025, where it is renumbered as <strong>Section 63</strong>. The reporting mechanics are also evolving alongside the renumbering, with a consolidated audit report format proposed to eventually replace the current Form 3CA/3CB/3CD structure; this transition is covered in more detail in the linked forms guide above.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure if your business needs a tax audit this year?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We assess turnover, presumptive-scheme history, and the cash-transaction test to confirm applicability, and handle the audit end to end where required.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-audit-report-forms-3ca-3cb-3cd-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Audit Report Forms: 3CA vs 3CB vs 3CD</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/presumptive-taxation-scheme-section-44ad" style={{ color: 'var(--primary)', fontWeight: 600 }}>Presumptive Taxation Scheme: Section 44AD</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/presumptive-taxation-professionals-section-44ada" style={{ color: 'var(--primary)', fontWeight: 600 }}>Presumptive Taxation for Professionals: Section 44ADA</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-43bh-msme-payment-disallowance-buyers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 43B(h): MSME Payment Disallowance Rules</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax &amp; Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

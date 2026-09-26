import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'GSTR-9 & GSTR-9C: Annual Return and Reconciliation Guide',
  description: 'GSTR-9 annual return and GSTR-9C reconciliation statement explained: who must file, turnover thresholds, the December 31 due date, penalties, and how the two forms fit together.',
  keywords: [
    'GSTR-9 annual return', 'GSTR-9C reconciliation statement', 'GSTR-9 due date', 'GSTR-9C applicability',
    'GSTR-9 turnover limit', 'GST annual return filing', 'GSTR-9 vs GSTR-9C', 'GSTR-9 late fee',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gstr-9-gstr-9c-annual-return-guide' },
  openGraph: {
    title: 'GSTR-9 & GSTR-9C: Annual Return and Reconciliation Guide',
    description: 'Who must file GSTR-9 and GSTR-9C, the turnover thresholds, due date, and how the two returns reconcile with your books.',
    url: 'https://agrawalkhandelwal.com/blog/gstr-9-gstr-9c-annual-return-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSTR-9 & GSTR-9C: Annual Return and Reconciliation Guide',
    description: 'Turnover thresholds, due date, and penalties for GST annual return and reconciliation statement filing.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GSTR-9 & GSTR-9C: Annual Return and Reconciliation Guide', 'gstr-9-gstr-9c-annual-return-guide')

const articleLd = buildArticleLd({
  headline: 'GSTR-9 & GSTR-9C: Annual Return and Reconciliation Guide',
  description: 'GSTR-9 annual return and GSTR-9C reconciliation statement: applicability, turnover thresholds, due date, and penalties for late filing.',
  datePublished: '2026-07-14',
  slug: 'gstr-9-gstr-9c-annual-return-guide',
})

const faqs: [string, string][] = [
  [
    'Is GSTR-9 mandatory for all GST-registered businesses?',
    'No. GSTR-9 is mandatory for regular taxpayers whose aggregate turnover in the financial year exceeds Rs 2 crore. Businesses below that threshold are exempt from filing but can file voluntarily if they want a formal annual record reconciled against their books.',
  ],
  [
    'What is the turnover limit for GSTR-9C?',
    'GSTR-9C, the reconciliation statement, applies to taxpayers with aggregate turnover above Rs 5 crore in the financial year. It is filed in addition to GSTR-9, not instead of it, and reconciles the figures in the annual return against the audited or unaudited financial statements.',
  ],
  [
    'Do I need a CA to certify GSTR-9C?',
    'No, not anymore. Since FY 2020-21, GSTR-9C is self-certified by the taxpayer rather than certified by a Chartered Accountant or Cost Accountant. That said, most businesses above the threshold still engage a CA to prepare the reconciliation correctly, since errors here draw direct scrutiny from the department.',
  ],
  [
    'What is the due date for GSTR-9 and GSTR-9C for FY 2025-26?',
    'Both GSTR-9 and GSTR-9C for FY 2025-26 are due by December 31, 2026. The government has not extended this deadline in recent years, so it is safer to plan around the statutory date rather than assume an extension.',
  ],
  [
    'What happens if GSTR-9 is filed late?',
    'Late filing of GSTR-9 attracts a late fee per day of delay, subject to a cap linked to the taxpayer\'s turnover slab, plus applicable interest on any tax shortfall identified through the reconciliation. Beyond the monetary cost, an overdue annual return also draws departmental attention and can complicate GST registration cancellation or amendment requests.',
  ],
  [
    'Can GSTR-9 figures be different from GSTR-3B and GSTR-1?',
    'Yes, and reconciling those differences is the entire purpose of the annual return. Mismatches commonly arise from amendments made after the original GSTR-1/3B filing, credit notes, or ITC claimed in a later month than the original invoice. GSTR-9 pulls all of this together into one consolidated, financial-year view, and GSTR-9C then reconciles that consolidated figure against the books.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function GSTR9GSTR9CBlog() {
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
                GSTR-9 &amp; GSTR-9C: Annual Return and Reconciliation Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 14, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>GSTR-9</strong> (annual return) is mandatory above Rs 2 crore turnover; <strong>GSTR-9C</strong> (reconciliation statement) kicks in above Rs 5 crore, filed in addition to GSTR-9.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Both are due <strong>December 31</strong> following the financial year end; CBIC has not extended this deadline in recent years.</li>
                    <li style={{ marginBottom: '0.4rem' }}>GSTR-9C is now self-certified by the taxpayer; no mandatory CA/CMA certification since FY 2020-21.</li>
                    <li style={{ marginBottom: 0 }}>Start reconciliation early: GSTR-9 pulls together an entire year of GSTR-1/3B data, and mismatches take time to trace back to source.</li>
                  </ul>
                </div>

                <p>For most businesses, monthly GST compliance runs on autopilot: file GSTR-1, file GSTR-3B, move on. The annual return changes that rhythm. GSTR-9 and GSTR-9C force a full-year reconciliation of everything reported across twelve months, and the two forms together are where small reporting inconsistencies from earlier in the year finally surface. Here is what applies to you and how to prepare.</p>

                <h2>GSTR-9: Who Must File the Annual Return</h2>
                <p><strong>GSTR-9 is mandatory for every regular taxpayer whose aggregate turnover in the financial year exceeds Rs 2 crore.</strong> Businesses at or below that threshold are exempt from filing but may do so voluntarily. Aggregate turnover is computed on an all-India, PAN-wide basis, so if you operate multiple GSTINs under the same PAN, the combined turnover across all of them decides applicability, even though each GSTIN files its own GSTR-9.</p>
                <p>GSTR-9 consolidates the entire financial year&apos;s outward supplies, inward supplies, and input tax credit availed, as reported through GSTR-1 and GSTR-3B, into a single annual statement. It also captures amendments made in later months that relate to transactions from the year in question, and any ITC reversed or reclaimed during the year.</p>
                <p>Composition taxpayers do not file GSTR-9; they file GSTR-9A instead, though this form has largely been dormant since composition annual reporting was folded into simplified quarterly filing in recent years. Check current applicability with your GST practitioner if you are on the composition scheme.</p>

                <h2>GSTR-9C: The Reconciliation Statement</h2>
                <p><strong>GSTR-9C applies once aggregate turnover crosses Rs 5 crore in the financial year.</strong> It is not a replacement for GSTR-9; it is a reconciliation layer filed on top of it, matching the turnover, tax paid, and ITC claimed in GSTR-9 against the taxpayer&apos;s audited or unaudited financial statements for the same period.</p>
                <p>The purpose is to catch exactly the kind of gap that pure return-to-return matching misses: turnover recorded differently in the books versus GST returns because of timing differences, other income wrongly included or excluded, or ITC claimed on the GST portal that doesn&apos;t tie back to the expense ledger. Since FY 2020-21, GSTR-9C is self-certified by the taxpayer rather than requiring a separate CA or Cost Accountant certification, but the reconciliation itself is detailed enough that most businesses above the threshold still involve a CA to prepare it correctly and catch discrepancies before filing rather than after a notice.</p>

                <h2>Due Date and Late Fees</h2>
                <p>Both GSTR-9 and GSTR-9C for a financial year are due by <strong>December 31</strong> of the following financial year; for FY 2025-26, that is December 31, 2026. The government has not extended this deadline in recent cycles, so plan the reconciliation exercise well before the deadline rather than assuming a filing window will open up.</p>
                <p>Missing the deadline attracts a late fee per day of delay, capped based on the taxpayer&apos;s turnover slab, along with interest on any tax shortfall the reconciliation uncovers. Beyond the direct cost, a pending annual return can also hold up other GST processes, such as registration amendments or refund claims, until it is regularised.</p>

                <h2>How GSTR-9 and GSTR-9C Fit Together</h2>
                <ol>
                  <li><strong>Compile the year&apos;s data.</strong> Pull all twelve months of GSTR-1 (outward supplies), GSTR-3B (summary returns and ITC claimed), and GSTR-2B (auto-populated ITC) for the financial year.</li>
                  <li><strong>Reconcile GSTR-1 vs GSTR-3B vs books.</strong> Identify differences from amendments, credit notes, or supplies reported in a different month than they were recorded in the books.</li>
                  <li><strong>File GSTR-9.</strong> Report the consolidated figures, including any additional tax liability identified during reconciliation, paid through Form DRC-03.</li>
                  <li><strong>If turnover exceeds Rs 5 crore, prepare GSTR-9C.</strong> Reconcile the GSTR-9 figures against the audited or provisional financial statements, and disclose the reasons for any variance.</li>
                  <li><strong>File both by December 31.</strong> GSTR-9C cannot be filed without GSTR-9 already filed for the same period.</li>
                </ol>

                <h2>Common Mistakes We See</h2>
                <ul>
                  <li><strong>Leaving reconciliation to the last week of December.</strong> A full financial year of data takes real time to trace and reconcile; starting in October or November gives room to fix issues rather than just report them.</li>
                  <li><strong>Ignoring ITC claimed after the statutory time limit.</strong> ITC availed in a later return but relating to an earlier financial year&apos;s invoice needs careful treatment in the annual return; don&apos;t just carry the GSTR-3B figure forward without checking.</li>
                  <li><strong>Treating GSTR-9C as a formality once self-certification replaced CA certification.</strong> Self-certified doesn&apos;t mean lower scrutiny; the department still reviews these reconciliations closely, and an unexplained variance is a common trigger for a GST notice.</li>
                  <li><strong>Not reconciling turnover reported to other regulators.</strong> If your books, GST returns, and income tax return show three different turnover figures for the same year, expect questions from at least one authority.</li>
                </ul>

                <p>If you are also carrying forward input tax credit that needs a closer look before you file, our guide on <Link href="/blog/input-tax-credit-itc-gst-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>ITC eligibility, reversal, and blocked credits</Link> covers the rules that most often create annual-return mismatches.</p>
              </div>

              <PostCTA
            heading="Need help with your GST annual return and reconciliation?"
            description="We prepare and file GSTR-9 and GSTR-9C for businesses across turnover slabs, and reconcile GST data against your books before the department does."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/input-tax-credit-itc-gst-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Input Tax Credit Under GST: Eligibility, Reversal &amp; Blocked Credits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/reverse-charge-mechanism-rcm-gst" style={{ color: 'var(--primary)', fontWeight: 600 }}>Reverse Charge Mechanism Under GST: When It Applies</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups: When Required &amp; First Return Guide</Link></li>
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

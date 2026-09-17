import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'GST Audit: Applicability & What Auditors Check',
  description: 'GSTR-9C reconciliation applicability above Rs 5 crore turnover, the current self-certification position, and what a departmental audit under Section 65 or a special audit under Section 66 actually examines.',
  keywords: [
    'GST audit applicability', 'GSTR-9C turnover limit', 'GST departmental audit Section 65',
    'GST special audit Section 66', 'GSTR-9C self certification', 'what does GST auditor check',
    'GST audit process India', 'annual GST return reconciliation',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-audit-applicability-guide' },
  openGraph: {
    title: 'GST Audit: Applicability & What Auditors Check',
    description: 'When GSTR-9C reconciliation applies, the current self-certification rule, and what a Section 65 departmental audit or Section 66 special audit examines.',
    url: 'https://agrawalkhandelwal.com/blog/gst-audit-applicability-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Audit: Applicability & What Auditors Check',
    description: 'GSTR-9C applicability, self-certification status, and what departmental and special GST audits examine.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST Audit: Applicability & What Auditors Check', 'gst-audit-applicability-guide')

const articleLd = buildArticleLd({
  headline: 'GST Audit: Applicability & What Auditors Check',
  description: 'GSTR-9C reconciliation statement applicability and self-certification status, plus departmental audit under Section 65 and special audit under Section 66 of the CGST Act.',
  datePublished: '2026-07-21',
  slug: 'gst-audit-applicability-guide',
})

const faqs: [string, string][] = [
  [
    'Is a Chartered Accountant certificate mandatory for GSTR-9C?',
    'No, not currently. CA or Cost Accountant certification of GSTR-9C was made optional some years ago, and taxpayers above the Rs 5 crore turnover threshold now self-certify the reconciliation statement themselves. Many businesses still engage a CA to prepare and review GSTR-9C given its complexity and the reconciliation risk involved, but it is not a statutory requirement for the certificate itself.',
  ],
  [
    'What turnover triggers GSTR-9C applicability?',
    'GSTR-9C, the reconciliation statement between the audited financial statements and the annual GST return (GSTR-9), applies to registered persons whose aggregate turnover in a financial year exceeds Rs 5 crore. Below that threshold, only GSTR-9 (the annual return itself) is required, not the GSTR-9C reconciliation.',
  ],
  [
    'What is the difference between a Section 65 audit and a Section 66 special audit?',
    'A Section 65 audit is a routine departmental audit conducted by a tax officer authorised by the Commissioner, with 15 working days\' prior notice in Form GST ADT-01. A Section 66 special audit is different in kind: it is ordered when the officer believes the case involves complexity that a routine audit cannot resolve, and is carried out by an independent Chartered Accountant or Cost Accountant nominated by the department, not by the department\'s own officers.',
  ],
  [
    'How much notice does the department give before a GST audit?',
    'For a Section 65 departmental audit, the law requires at least 15 working days\' prior notice in Form GST ADT-01 before the audit commences. A Section 66 special audit, by contrast, can be ordered without the same advance-notice requirement, since it is typically triggered when the department already suspects a specific discrepancy.',
  ],
  [
    'What records should a business have ready for a GST audit?',
    'At minimum: GSTR-1, GSTR-3B, and GSTR-9/9C for the period under review, purchase and sales registers, e-way bills, input tax credit reconciliation against GSTR-2B, stock records, bank statements, and reconciliation of turnover as per books against turnover reported in GST returns. Most audit queries arise from mismatches between these documents rather than from a single missing filing.',
  ],
  [
    'How long does a GST departmental audit take to complete?',
    'A Section 65 audit is generally required to be completed within 3 months from the date it commences, extendable by the Commissioner for a further 6 months for reasons recorded in writing. A Section 66 special audit has its own separate timeline, typically running longer given its scope, and the taxpayer is not charged the cost of a special audit.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function GSTAuditApplicabilityBlog() {
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
                GST Audit: Applicability &amp; What Auditors Check
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 22, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>&quot;GST audit&quot; covers two very different things: your own <strong>GSTR-9C reconciliation</strong> (above Rs 5 crore turnover) and a <strong>departmental audit</strong> the tax office initiates.</li>
                    <li style={{ marginBottom: '0.4rem' }}>GSTR-9C is now <strong>self-certified</strong> by the taxpayer; a mandatory CA/CMA certificate is no longer a statutory requirement.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A <strong>Section 65 audit</strong> is the department&apos;s routine review, with 15 working days&apos; notice; a <strong>Section 66 special audit</strong> is a deeper, independently-conducted review ordered in complex cases.</li>
                    <li style={{ marginBottom: 0 }}>Most audit findings trace back to mismatches between GSTR-1, GSTR-3B, GSTR-2B, and your books; not to a single missing form.</li>
                  </ul>
                </div>
                <p>Business owners often use &quot;GST audit&quot; loosely to mean anything from filing their own annual reconciliation to a tax officer showing up with a notice. These are genuinely different processes, with different applicability rules, different documents involved, and very different levels of stress. Here is exactly what each one covers.</p>

                <h2>GSTR-9C: The Annual Reconciliation Statement</h2>
                <p>GSTR-9C is a reconciliation between a taxpayer&apos;s audited financial statements and the figures reported across the year in GSTR-9, the annual GST return. It applies to registered persons whose <strong>aggregate turnover in a financial year exceeds Rs 5 crore</strong>. Below that threshold, filing GSTR-9 alone is sufficient; GSTR-9C does not apply.</p>
                <p>Where it applies, GSTR-9C reconciles turnover, tax paid, and input tax credit as per the books of account against what was declared in the GST returns filed through the year, and requires an explanation for every material difference.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Self-Certification, Not Mandatory CA Certification</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>In earlier years, GSTR-9C required certification by a practicing Chartered Accountant or Cost Accountant. That mandatory certification requirement has since been removed; taxpayers above the Rs 5 crore threshold now <strong>self-certify</strong> the reconciliation statement. Many businesses continue to have a CA prepare or review the GSTR-9C given the complexity of the reconciliation and the exposure a wrong figure creates, but the statutory sign-off requirement itself is no longer there. Confirm the current position for your filing year, since this is an area that has changed and could change again.</p>
                </div>

                <h2>Departmental Audit Under Section 65</h2>
                <p>A Section 65 audit is a routine audit conducted by a tax officer, or a team authorised by the Commissioner, to verify the correctness of turnover declared, taxes paid, refunds claimed, and input tax credit availed. Key mechanics:</p>
                <ul>
                  <li><strong>Notice period:</strong> at least 15 working days before the audit begins, issued in Form GST ADT-01.</li>
                  <li><strong>Duration:</strong> generally required to be completed within 3 months from commencement, extendable by up to 6 months by the Commissioner for recorded reasons.</li>
                  <li><strong>Conducted where:</strong> either at the taxpayer&apos;s place of business or at the tax office, at the officer&apos;s discretion.</li>
                  <li><strong>Selection:</strong> the department typically uses risk-based parameters; high ITC relative to output tax, frequent return amendments, turnover spikes without proportional tax payment, and mismatches between GSTR-1 and GSTR-3B are common triggers.</li>
                </ul>
                <p>At the end of the audit, findings are communicated in Form GST ADT-02, along with the taxpayer&apos;s rights and obligations arising from those findings, including any tax, interest, or penalty proposed.</p>

                <h2>Special Audit Under Section 66</h2>
                <p>A Section 66 special audit is a different order of scrutiny. It is invoked, at any stage of scrutiny, inquiry, or investigation, when the officer forms an opinion (with the Additional/Joint Commissioner&apos;s approval) that the value has not been correctly declared or the credit availed is not within the normal limits, and the case involves complexity that warrants deeper examination. Distinguishing features:</p>
                <ul>
                  <li><strong>Conducted by an independent CA or Cost Accountant</strong> nominated by the Commissioner, not by the department&apos;s own audit officers.</li>
                  <li><strong>No routine advance-notice requirement</strong> in the way Section 65 mandates 15 days; it is ordered specifically because a concern already exists.</li>
                  <li><strong>Cost of the special audit is borne by the department</strong>, not charged to the taxpayer.</li>
                  <li>Runs on its own extended timeline, commonly longer than a Section 65 audit given the depth of the review required.</li>
                </ul>

                <h2>What Auditors Actually Check</h2>
                <p>Across both GSTR-9C reconciliation and a Section 65/66 audit, the recurring focus areas are consistent:</p>
                <ul>
                  <li><strong>Turnover reconciliation:</strong> revenue in the audited financials against aggregate turnover reported across GSTR-1 and GSTR-3B for the year.</li>
                  <li><strong>ITC verification:</strong> input tax credit claimed against what is reflected in GSTR-2B/2A, and whether the underlying invoices meet the Section 16 conditions for eligibility.</li>
                  <li><strong>Tax rate application:</strong> whether the correct GST rate was charged on each category of supply, especially where a business deals in multiple product or service categories with different rates.</li>
                  <li><strong>Reverse charge compliance:</strong> whether tax was correctly self-assessed and paid on reverse-charge supplies, a frequently missed item.</li>
                  <li><strong>E-way bill and stock consistency:</strong> movement of goods reflected in e-way bills reconciled against sales and stock records.</li>
                  <li><strong>Refund claims:</strong> where refunds have been claimed (exports, inverted duty structure), whether the supporting documentation and eligibility conditions hold up.</li>
                </ul>
                <p>In practice, the vast majority of audit objections trace back to reconciliation gaps between what was filed month to month and what the books actually show at year-end, rather than to a single dramatic compliance failure. Keeping GSTR-1, GSTR-3B, and books reconciled every month, rather than only at year-end, is the most effective way to walk into either process with a clean file.</p>

                <p>If you are approaching the Rs 5 crore threshold, have received an ADT-01 notice, or simply want your monthly filings reconciled before year-end so GSTR-9C is a formality rather than a scramble, our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Advisory team</Link> can take this off your plate.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Received a GST audit notice, or approaching the Rs 5 crore threshold?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle GSTR-9C reconciliation, respond to Section 65 audit notices, and reconcile ITC and turnover ahead of year-end.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20a%20GST%20audit%20or%20GSTR-9C." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-cancellation-revocation" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration Cancellation &amp; Revocation</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/lut-letter-undertaking-gst-exports" style={{ color: 'var(--primary)', fontWeight: 600 }}>Letter of Undertaking (LUT) for GST-Free Exports</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

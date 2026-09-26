import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Reassessment Notice Under Section 148: Time Limits & Response' },
  description: 'How Section 148 reassessment notices work after the Finance Act 2021 reforms, the Section 148A show-cause step, current time limits, and how to respond.',
  keywords: [
    'section 148 reassessment notice', 'section 148 time limit', 'section 148a show cause notice',
    'income escaping assessment', 'reopening of assessment income tax', 'section 148 response',
    'how to reply section 148 notice', 'reassessment proceedings income tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/reassessment-notice-under-section-148-time-limits-and-response' },
  openGraph: {
    title: 'Reassessment Notice Under Section 148: Time Limits & Response',
    description: 'The Section 148A show-cause step, current time limits for reopening an assessment, and how to respond to a Section 148 notice.',
    url: 'https://agrawalkhandelwal.com/blog/reassessment-notice-under-section-148-time-limits-and-response',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reassessment Notice Under Section 148: Time Limits & Response',
    description: 'Time limits, the 148A show-cause step, and how to respond to a Section 148 reassessment notice.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Reassessment Notice Under Section 148: Time Limits & Response', 'reassessment-notice-under-section-148-time-limits-and-response')

const articleLd = buildArticleLd({
  headline: 'Reassessment Notice Under Section 148: Time Limits & Response',
  description: 'The Section 148A show-cause step, current time limits for reopening a closed assessment, and how to draft a response to a Section 148 reassessment notice.',
  datePublished: '2026-08-19',
  slug: 'reassessment-notice-under-section-148-time-limits-and-response',
})

const faqs: [string, string][] = [
  [
    'What is the current time limit to issue a Section 148 reassessment notice?',
    'For notices issued from September 1, 2024 onward, the normal time limit is 3 years and 3 months from the end of the relevant assessment year. This can extend to 5 years and 3 months where the Assessing Officer has evidence that income amounting to Rs 50 lakh or more, represented as an asset, has escaped assessment. Different, generally shorter, time limits applied to notices issued before this date under the earlier framework.',
  ],
  [
    'Can the department issue a Section 148 notice directly without any prior step?',
    'No, not ordinarily. Since the Finance Act 2021 reforms, the department must first issue a show-cause notice under Section 148A, share the information suggesting income has escaped assessment, and give the taxpayer an opportunity to respond before a reasoned order decides whether reassessment should proceed. Only after that order can a formal Section 148 notice follow, except in specific categories of cases carved out from this requirement.',
  ],
  [
    'What should I do if I receive a Section 148A show-cause notice?',
    'Treat it as the most important stage to respond at, not something to wait out. Review the information and material the department has relied on, since this is disclosed with the notice, and prepare a substantive reply explaining why the flagged income is not taxable, was already disclosed, or the material is otherwise incorrect. A strong response at the 148A stage can prevent the case from proceeding to a formal Section 148 notice at all.',
  ],
  [
    'Does a Section 148 notice mean I am automatically guilty of underreporting income?',
    'No. It means the Assessing Officer, after the Section 148A process, has formed the view that income has escaped assessment based on the available information, which is often drawn from AIS, high-value transaction reporting, or third-party data. That view can be incomplete or mistaken, for instance where the transaction was already disclosed or falls outside the taxpayer\'s taxable income for a valid reason, which is exactly what the reassessment response is meant to establish.',
  ],
  [
    'Has Section 148 been renumbered under the Income Tax Act 2025?',
    'Reassessment provisions of this kind have been renumbered under the Income Tax Act 2025. This guide was unable to confirm a reliable, independently corroborated new-Act section reference at the time of writing, so it refers to the familiar old-Act numbers, Section 148 and Section 148A, throughout. Always confirm the exact current section citation on the notice itself or with your CA before drafting a response.',
  ],
  [
    'Can a reassessment notice be challenged on limitation grounds alone?',
    'Yes, and it is one of the most effective challenges available. If a Section 148 notice is issued after the applicable time limit for the relevant assessment year and escaped-income threshold, it can be challenged as time-barred regardless of the merits of the underlying income question. Confirming the correct time limit that applied on the date the notice was issued is a necessary first step whenever a reassessment notice is received.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function ReassessmentNoticeSection148Blog() {
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
                Reassessment Notice Under Section 148: Time Limits &amp; Response
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 19, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A <strong>Section 148</strong> notice reopens a closed assessment because the department believes income has escaped assessment.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It can only follow a <strong>Section 148A</strong> show-cause step, where the material is disclosed and you get a chance to respond first.</li>
                    <li style={{ marginBottom: '0.4rem' }}>For notices from September 1, 2024, the normal time limit is <strong>3 years 3 months</strong> from the end of the relevant assessment year, extendable to <strong>5 years 3 months</strong> where escaped income of Rs 50 lakh or more is involved.</li>
                    <li style={{ marginBottom: 0 }}>These provisions have been renumbered under the Income Tax Act 2025; a reliable new-Act section number was not confirmed at the time of writing, so this guide uses the familiar old-Act names throughout.</li>
                  </ul>
                </div>

                <p>A <strong>Section 148 reassessment notice</strong> is one of the more serious communications a taxpayer can receive from the Income Tax Department, because it reopens a case that was already closed, whether it was accepted without scrutiny or fully assessed earlier. Since the Finance Act 2021 reforms, the process leading up to this notice looks quite different from the earlier regime, with more procedural steps and defined time limits built in. This guide covers how the current process works and what a proper response looks like.</p>

                <h2>Section 148A: The Mandatory Step Before Reopening</h2>
                <p>Before a formal Section 148 notice can ordinarily be issued, the Assessing Officer must first issue a <strong>show-cause notice under Section 148A</strong>. This notice discloses the information or material suggesting that income chargeable to tax has escaped assessment, most commonly drawn from the Annual Information Statement (AIS), high-value transaction reporting, or data shared by other government agencies. The taxpayer then gets an opportunity to respond, explaining why reassessment should not proceed, before the Assessing Officer passes a reasoned order deciding whether to move ahead. Certain categories of cases, such as those linked to search or requisition proceedings, are carved out from this preliminary step.</p>
                <p>This stage matters more than most taxpayers initially treat it as. A complete, evidence-backed response at the 148A stage, showing the flagged transaction was already disclosed, is not taxable, or the department&apos;s information is simply incorrect, can stop the case from ever reaching a formal notice. Once the reassessment order is passed and the Section 148 notice follows, the burden shifts more heavily onto the taxpayer to disprove the department&apos;s position within the reassessment proceedings themselves.</p>

                <h2>Current Time Limits</h2>
                <p>The time limit within which a Section 148 notice can be issued depends on the date of issuance and the scale of the alleged escaped income. For notices issued on or after <strong>September 1, 2024</strong>, the framework is:</p>
                <ul>
                  <li><strong>Normal cases:</strong> up to 3 years and 3 months from the end of the relevant assessment year.</li>
                  <li><strong>Cases involving Rs 50 lakh or more of escaped income represented as an asset:</strong> extendable up to 5 years and 3 months from the end of the relevant assessment year.</li>
                </ul>
                <p>Notices issued before September 1, 2024 were governed by a different set of time limits under the earlier version of this framework, and pending proceedings that were already underway when the new rules took effect continue to be governed by the provisions that applied to them at the time. Because the applicable limit depends on exactly when the notice was issued and what threshold the department is asserting, confirming the correct time limit for your specific notice is a necessary first step, not an afterthought, since a notice issued beyond the applicable limit can be challenged on that ground alone.</p>

                <h2>How to Respond</h2>
                <p>A disciplined response to either a 148A show-cause notice or a formal 148 notice generally follows the same structure:</p>
                <ol>
                  <li><strong>Confirm the time limit was respected</strong> for the relevant assessment year and the escaped-income threshold being claimed.</li>
                  <li><strong>Review the disclosed information</strong> carefully; the department is required to share the material it is relying on, and a response is far stronger when it addresses that material directly rather than making general submissions.</li>
                  <li><strong>Reconcile the flagged transaction</strong> against your own records, AIS, Form 26AS, and prior returns to establish whether it was already disclosed, is exempt, or belongs to a different assessment year.</li>
                  <li><strong>File the response within the stated deadline</strong> through the e-filing portal, requesting an extension if genuinely needed rather than missing the date.</li>
                </ol>
                <p>If reassessment does proceed to a formal Section 148 notice, the resulting assessment follows a process similar to scrutiny under the <Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme</Link>, and the same discipline around timely, evidence-backed responses applies just as much here as it does to a routine Section 143(2) notice, covered in our broader guide to <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices</Link>.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Sections 148 and 148A have been renumbered under the Income Tax Act 2025. At the time of writing, a reliable, independently corroborated new-Act section reference for these specific provisions was not confirmed, so this guide deliberately refers to them by their familiar old-Act numbers throughout, the same approach the site already takes for provisions like GAAR. Confirm the current section citation on the notice itself, or with your CA, before drafting any formal response.</p>
                </div>

                <h2>Why Early Involvement Matters</h2>
                <p>The single biggest determinant of how a reassessment case plays out is usually how early and how completely the taxpayer engages, ideally at the 148A show-cause stage rather than waiting for the formal notice. The information the department is acting on is disclosed upfront specifically so the taxpayer can address it; a response that engages with that material directly, backed by reconciled records, carries far more weight than a general denial. If you receive either a 148A show-cause notice or a Section 148 notice, involve a CA promptly to review the time limit, the disclosed material, and the strongest response strategy before the deadline runs out. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include reassessment response and representation before the assessing authority.</p>
              </div>

              <PostCTA
            heading="Received a Section 148 or 148A notice?"
            description="We review the time limit, the disclosed material, and prepare a complete response within the deadline."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20received%20a%20Section%20148%20reassessment%20notice."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/best-judgment-assessment-section-144" style={{ color: 'var(--primary)', fontWeight: 600 }}>Best Judgment Assessment Under Section 144: What It Means</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme: How It Works</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

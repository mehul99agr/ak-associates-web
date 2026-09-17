import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Income Tax Scrutiny Assessment: What Triggers It & How to Respond' },
  description: 'What triggers CASS selection for income tax scrutiny, how to prepare documents for a strong response, and the common mistakes that make scrutiny assessments go badly.',
  keywords: [
    'income tax scrutiny assessment', 'what triggers income tax scrutiny', 'CASS selection income tax',
    'how to respond to scrutiny notice', 'income tax scrutiny documents', 'scrutiny assessment mistakes',
    'faceless scrutiny assessment', 'section 143(2) scrutiny response',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-tax-scrutiny-assessment-how-to-respond' },
  openGraph: {
    title: 'Income Tax Scrutiny Assessment: What Triggers It & How to Respond',
    description: 'What gets a return picked for scrutiny under CASS, how to prepare a strong response, and the mistakes that turn a routine scrutiny into a prolonged dispute.',
    url: 'https://agrawalkhandelwal.com/blog/income-tax-scrutiny-assessment-how-to-respond',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Scrutiny Assessment: What Triggers It & How to Respond',
    description: 'What triggers CASS selection and how to prepare a strong scrutiny response.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax Scrutiny Assessment: What Triggers It & How to Respond', 'income-tax-scrutiny-assessment-how-to-respond')

const articleLd = buildArticleLd({
  headline: 'Income Tax Scrutiny Assessment: What Triggers It & How to Respond',
  description: 'What triggers CASS selection for income tax scrutiny, how to prepare documents for a strong response, and the common mistakes that make scrutiny assessments go badly.',
  datePublished: '2026-08-16',
  slug: 'income-tax-scrutiny-assessment-how-to-respond',
})

const faqs: [string, string][] = [
  [
    'What triggers income tax scrutiny selection?',
    'Most cases today are selected through CASS (Computer Assisted Scrutiny Selection), a risk-based algorithm that flags mismatches between your return and third-party data (Form 26AS, AIS, TDS returns), unusually large deductions or losses relative to income, high-value transactions reported by banks and registrars, or ratios that deviate sharply from industry norms. A smaller number of cases are picked manually based on specific information, and search or survey cases follow a separate compulsory-selection track.',
  ],
  [
    'Does being selected for scrutiny mean something is wrong with my return?',
    'Not by itself. CASS selection is largely mechanical and many parameters are simply statistical flags, not accusations. Plenty of scrutiny assessments close with no adjustment once the flagged item is explained with proper documentation. The outcome depends far more on how the response is prepared than on the fact of selection itself.',
  ],
  [
    'What documents should I prepare for a scrutiny response?',
    'Start with the specific query in the notice, not your entire financial history. Typically needed: books of accounts and bank statements for the relevant items, supporting invoices/contracts for large expenses or deductions claimed, reconciliation of Form 26AS/AIS figures against your return, computation sheets showing how each disputed figure was arrived at, and, where relevant, valuation reports or agreements for capital transactions. Organise everything against the exact paragraph of the notice it answers.',
  ],
  [
    'What are the most common mistakes people make in scrutiny responses?',
    'Submitting documents without a covering explanation that ties them to the query, answering only part of a multi-point notice, requesting adjournments repeatedly without genuine cause, sending inconsistent figures across different submissions in the same case, and treating an early, informal query loosely instead of building the same level of documentation you would for a formal hearing. Faceless assessment in particular penalises vague or incomplete written submissions, since there is no in-person meeting to clarify intent.',
  ],
  [
    'Is scrutiny assessment conducted in person or online?',
    'The large majority of cases now go through the Faceless Assessment Scheme, where all communication happens through the income tax e-filing portal with no physical interface with the assessing officer. Responses must therefore be complete and self-explanatory in writing, since there is limited scope to clarify a point verbally the way an in-person hearing would allow.',
  ],
  [
    'What is the difference between this and a Section 143(2) notice?',
    'A Section 143(2) notice is the formal legal instrument that opens scrutiny; we cover what it says and the statutory response mechanics in our dedicated guide to income tax notices. This article focuses on the practical side once that notice lands: what actually got the case selected, and how to build a response that closes the matter rather than inviting follow-up queries.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function ScrutinyAssessmentBlog() {
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
                Income Tax Scrutiny Assessment: What Triggers It &amp; How to Respond
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 8, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Most scrutiny cases are selected by <strong>CASS</strong>, a risk-based algorithm flagging data mismatches, unusual deductions, or high-value transactions, not a manual suspicion of wrongdoing.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The outcome depends heavily on <strong>how the response is built</strong>: documents organised against the exact query, a clear covering explanation, and complete answers to every point raised.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Faceless assessment means your written submission has to stand entirely on its own, there is no in-person clarification.</li>
                    <li style={{ marginBottom: 0 }}>For the procedural basics of what a Section 143(2) notice is and the statutory response window, see our <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>dedicated guide</Link>; this post covers the practical selection and response strategy.</li>
                  </ul>
                </div>

                <p>We get asked some version of &quot;why was I picked for scrutiny&quot; far more often than we get asked what a scrutiny notice actually says procedurally. That procedural side, what a Section 143(2) notice means and the basic statutory timeline, is covered in our <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained</Link> guide. This article is about the two things that actually matter once you are in that position: understanding what got your case flagged, and building a response that closes it cleanly.</p>

                <h2>What Actually Gets a Return Selected</h2>
                <p>The overwhelming majority of scrutiny cases today are picked through <strong>CASS, the Computer Assisted Scrutiny Selection</strong> system, an algorithm-driven process run centrally rather than by a local officer choosing cases by hand. CASS parameters change from cycle to cycle and are not published in full, but the categories that consistently drive selection are well understood in practice:</p>
                <ul>
                  <li><strong>Data mismatches:</strong> Income or TDS reported in Form 26AS/AIS that does not reconcile with the figures declared in the return.</li>
                  <li><strong>Disproportionate deductions or losses:</strong> Claims that are large relative to declared income, or losses claimed for several consecutive years without a clear business explanation.</li>
                  <li><strong>High-value transactions:</strong> Property purchases, large cash deposits, high-value mutual fund or share transactions, and foreign remittances reported by banks, registrars, and other reporting entities under the Statement of Financial Transactions framework.</li>
                  <li><strong>Ratio and trend anomalies:</strong> Gross profit or net profit ratios that deviate sharply from the taxpayer's own historical pattern or from industry norms for a similar business.</li>
                  <li><strong>Refund claims above a certain size</strong> relative to tax paid, which get a closer look before release.</li>
                  <li><strong>Specific information</strong> received from another government agency, a survey, or a search action elsewhere that names the taxpayer, leading to manual rather than algorithmic selection.</li>
                </ul>
                <p>Selection under most of these categories is a flag, not a finding. A large deduction that is fully documented, or a mismatch that traces back to a TDS return the deductor filed incorrectly, closes without adjustment once explained. The problem is never the flag; it is an unprepared response to the flag.</p>

                <h2>Building a Strong Response: Document Strategy</h2>
                <p>The single biggest lever you control is how the response is assembled. A scrutiny notice, whether the initial one or a follow-up questionnaire during faceless assessment, lists specific points. Treat each point as its own mini-file:</p>
                <ol>
                  <li><strong>Map every query to the exact figure in your return</strong> it relates to, before gathering a single document. This prevents the common error of submitting a pile of paperwork that technically supports your position but does not visibly answer the question asked.</li>
                  <li><strong>Reconcile third-party data first.</strong> If the flag involves a 26AS/AIS mismatch, prepare a line-by-line reconciliation showing the source of every figure, including TDS certificates from the deductor if the department's records lag behind.</li>
                  <li><strong>Support large deductions and expenses with primary documents</strong>, not summaries: invoices, contracts, bank payment trails, and, where the claim is unusual for the business, a short written rationale explaining the commercial context.</li>
                  <li><strong>For capital transactions</strong> (property, shares, gifts), assemble the full paper trail from acquisition to the current year: purchase deed or allotment letter, cost of improvement records, valuation reports where applicable, and computation of gains or exemption claimed.</li>
                  <li><strong>Write a short covering note</strong> for each response that states, point by point, what is being answered and where in the attached documents the officer will find the answer. This single habit does more to keep a case moving than any individual document.</li>
                </ol>

                <h2>Common Mistakes That Turn Routine Scrutiny Into a Long Dispute</h2>
                <ul>
                  <li><strong>Partial responses:</strong> Answering three of five points raised and leaving the rest for &quot;later&quot; almost always generates a follow-up notice and stretches the timeline.</li>
                  <li><strong>Document dumps without explanation:</strong> Under faceless assessment, an officer working through hundreds of cases will not infer your argument from raw documents; the covering note carries the argument.</li>
                  <li><strong>Inconsistent figures across submissions:</strong> Any inconsistency between what was said in an earlier reply and a later one becomes the new focus of the case, even if the underlying facts were never actually in dispute.</li>
                  <li><strong>Repeated adjournment requests without genuine cause:</strong> A reasonable extension request is normal; a pattern of last-minute adjournments signals an unprepared taxpayer and invites closer scrutiny of everything else in the file.</li>
                  <li><strong>Treating early informal queries casually:</strong> Some cases start with a lighter-touch query before the formal notice; responding to that stage with the same rigor as a final submission often prevents the case from escalating further at all.</li>
                  <li><strong>No professional review before submission:</strong> A response drafted without a CA's eye on how the assessing officer is likely to read it is the most avoidable mistake on this list.</li>
                </ul>

                <h2>What Happens After the Response</h2>
                <p>If the response satisfactorily addresses every point, the assessment is completed accepting the returned income, sometimes with minor adjustments. If gaps remain, expect a follow-up query narrowing in on the unresolved point rather than a fresh, broader notice; this is usually a sign the case is close to resolution, not further away from it. If the officer is not satisfied at all on a specific point, the assessment can proceed with an addition to income on that item, which can then be contested in appeal. Either way, a well-documented file built during the response stage remains the strongest asset if the matter does progress to appeal.</p>

                <p>Scrutiny assessment is manageable when treated as a documentation exercise rather than an emergency. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory and representation services</Link> include end-to-end scrutiny response drafting and representation before the assessing officer.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Under scrutiny or worried about being selected?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare complete, well-organised scrutiny responses and represent clients through the faceless assessment process.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20received%20a%20scrutiny%20notice%20and%20need%20help." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme: How It Works</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/best-judgment-assessment-section-144" style={{ color: 'var(--primary)', fontWeight: 600 }}>Best Judgment Assessment Under Section 144</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/books-of-accounts-section-44aa" style={{ color: 'var(--primary)', fontWeight: 600 }}>Books of Accounts Required Under Section 44AA</Link></li>
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

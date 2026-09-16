import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Faceless Assessment Scheme: How It Works & What to Expect' },
  description: 'How the Faceless Assessment Scheme works, why cases are assigned randomly through NFAC, and what to expect if you receive a notice under it.',
  keywords: [
    'faceless assessment scheme', 'NFAC income tax', 'faceless assessment process',
    'faceless scrutiny India', 'how faceless assessment works', 'income tax faceless notice',
    'faceless appeal scheme', 'e-assessment scheme income tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/faceless-assessment-scheme-how-it-works' },
  openGraph: {
    title: 'Faceless Assessment Scheme: How It Works',
    description: 'A practical walkthrough of the Faceless Assessment Scheme: how cases get assigned, how to respond, and what to expect at each stage.',
    url: 'https://agrawalkhandelwal.com/blog/faceless-assessment-scheme-how-it-works',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faceless Assessment Scheme: How It Works',
    description: 'A practical walkthrough of the Faceless Assessment Scheme: how cases get assigned, how to respond, and what to expect at each stage.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Faceless Assessment Scheme: How It Works & What to Expect', 'faceless-assessment-scheme-how-it-works')

const articleLd = buildArticleLd({
  headline: 'Faceless Assessment Scheme: How It Works & What to Expect',
  description: 'How the Faceless Assessment Scheme randomly assigns cases through NFAC, the stages of a faceless assessment, and how to respond to a notice under it.',
  datePublished: '2026-09-28',
  slug: 'faceless-assessment-scheme-how-it-works',
})

const faqs: [string, string][] = [
  [
    'Will I ever meet the assessing officer in a faceless assessment?',
    'No, that is the entire point of the scheme. All communication happens electronically through the income tax e-filing portal, and personal hearings, where permitted, are conducted by video conference rather than in person. You will not know the identity or location of the officer handling your case.',
  ],
  [
    'How do I know which unit or officer is handling my case?',
    'You generally do not, and that is intentional; case allocation is randomised through the National Faceless Assessment Centre (NFAC) specifically to prevent a taxpayer from identifying or approaching a particular officer. All notices and orders are issued centrally through NFAC, not from an identified local office.',
  ],
  [
    'Can I request a personal hearing in a faceless assessment?',
    'Yes, in specified circumstances you can request a hearing, which is then conducted by video conference rather than in person. Requests are considered case by case, and it is worth asking for one whenever a complex factual or valuation issue is difficult to explain in writing alone.',
  ],
  [
    'What if I miss the response deadline in a faceless assessment notice?',
    'The assessing unit can proceed to finalise the assessment based only on the material already available, which is rarely in your favour. If you need more time, request an adjournment through the e-filing portal before the deadline rather than after it lapses; genuine requests are usually accommodated.',
  ],
  [
    'Does the Faceless Assessment Scheme apply to appeals too?',
    'Yes, income tax appeals before the Commissioner (Appeals) are also handled under a parallel faceless appeal framework, following the same principle of electronic-only communication and randomised case assignment, separate from the assessment stage covered in this guide.',
  ],
  [
    'Is faceless assessment used for every type of scrutiny case?',
    'It is the default mechanism for regular scrutiny assessments today, though certain categories, such as cases involving search and seizure or specific international tax matters, can follow a different track. For most taxpayers who receive a Section 143(2) scrutiny notice, the faceless process is what applies.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function FacelessAssessmentSchemeBlog() {
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
                Faceless Assessment Scheme: How It Works & What to Expect
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 28, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Under the Faceless Assessment Scheme, your case is assigned randomly through the National Faceless Assessment Centre (NFAC), and you never meet or know the identity of the assessing officer.</li>
                    <li style={{ marginBottom: '0.4rem' }}>All notices, submissions, and orders happen electronically through the income tax e-filing portal.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The scheme replaced most in-person scrutiny assessments to reduce discretion and physical interface between taxpayers and officers.</li>
                    <li style={{ marginBottom: 0 }}>Written responses need to be self-contained and complete, since there is no informal follow-up conversation to fill gaps.</li>
                  </ul>
                </div>
                <p>If you have received a <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 143(2) scrutiny notice</Link> in recent years, it almost certainly arrived through the Faceless Assessment Scheme. This is now the default way regular income tax assessments are conducted in India, and it changes both the process and the etiquette of dealing with the tax department compared to the old system of walking into a local office with a file of documents.</p>

                <h2>What the Faceless Assessment Scheme Is</h2>
                <p><strong>The Faceless Assessment Scheme removes the physical interface between a taxpayer and the assessing officer.</strong> Instead of a case being handled by a specific, identifiable officer at a local jurisdiction, it is picked up centrally by the National Faceless Assessment Centre (NFAC) and randomly allocated to an assessment unit anywhere in the country. Every step, from the initial notice to the final assessment order, happens through the income tax e-filing portal, with no in-person meetings as a default.</p>
                <p>The scheme was introduced to address a long-standing complaint about the older jurisdiction-based system: that face-to-face interaction created room for discretion, delay, and, in some cases, harassment. By separating the taxpayer from a known officer and randomising the allocation, the design intent is a more standardised, better-documented, and less discretionary assessment process.</p>

                <h2>How a Faceless Assessment Actually Proceeds</h2>
                <p>The structure separates functions across different specialised units rather than concentrating everything with one officer:</p>
                <ul>
                  <li><strong>NFAC (National Faceless Assessment Centre):</strong> The central coordinating body. All notices to the taxpayer and communications between units flow through NFAC; it is the single point of contact from the taxpayer&apos;s side.</li>
                  <li><strong>Assessment Unit (AU):</strong> Examines the return, identifies the issues, and drafts the proposed assessment order.</li>
                  <li><strong>Verification Unit (VU):</strong> Where required, conducts verification, cross-checks, or enquiries relevant to the case.</li>
                  <li><strong>Technical Unit (TU):</strong> Provides technical assistance on legal, accounting, valuation, or transfer pricing questions where the assessment unit needs specialist input.</li>
                  <li><strong>Review Unit (RU):</strong> Reviews the draft assessment order before it is finalised, checking that the facts, evidence, and law are correctly applied.</li>
                </ul>
                <p>For the taxpayer, this internal structure is invisible; you only ever interact with NFAC through the portal. A typical sequence looks like this:</p>
                <ol>
                  <li>A notice under Section 143(2) (or a follow-up notice seeking specific information) is issued through the portal.</li>
                  <li>You respond within the stated deadline, uploading documents and written submissions against each query.</li>
                  <li>Additional queries may follow if the assessment unit needs clarification or more evidence.</li>
                  <li>Where the facts are complex, you can request a video-conference hearing rather than relying purely on written exchange.</li>
                  <li>A show-cause notice is typically issued before any adverse variation is proposed, giving you a final opportunity to respond.</li>
                  <li>The review unit examines the draft order, and NFAC issues the final assessment order electronically.</li>
                </ol>

                <h2>What to Expect and How to Prepare</h2>
                <p>Because there is no informal conversation to smooth over a gap in your explanation, every written response needs to stand on its own. A few practical habits make a real difference in faceless proceedings:</p>
                <ul>
                  <li><strong>Answer the exact query raised</strong>, point by point, rather than submitting a general narrative; faceless units work through structured queries and expect structured answers.</li>
                  <li><strong>Attach primary evidence</strong> (invoices, bank statements, agreements, reconciliations) rather than summary claims; there is no officer across the table to ask a follow-up question informally.</li>
                  <li><strong>Track every deadline on the portal</strong> and request an adjournment before it lapses if you need more time, rather than after.</li>
                  <li><strong>Use the video-conference hearing option</strong> when a point genuinely needs verbal explanation, valuation logic, or a walkthrough of documents; do not assume everything must be conveyed in writing.</li>
                  <li><strong>Keep a copy of every notice and submission</strong> with its Document Identification Number (DIN); faceless communications are DIN-tagged and any communication without a valid DIN is not considered valid.</li>
                </ul>

                <h2>Faceless Assessment vs the Faceless Appeal Scheme</h2>
                <p>It is worth distinguishing this from the separate <strong>Faceless Appeal Scheme</strong>, which applies at the next stage, if you choose to appeal an assessment order before the Commissioner (Appeals). That framework follows the same design principles (randomised allocation, electronic-only communication) but is a distinct process from the assessment covered here. If your assessment concludes with a demand you disagree with, the appeal route is the next step, not a continuation of the same faceless assessment file.</p>
                <p>Faceless assessment has made the process more standardised, but it has also raised the bar on how a response needs to be prepared: complete, evidence-backed, and submitted on time, since there is no local officer relationship to fall back on. If you have an ongoing faceless assessment or have just received a notice, our team can help draft the response and represent your case through the portal and any video-conference hearing. See our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> for details.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Facing a faceless assessment notice?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help draft complete, evidence-backed responses and represent your case through the portal, right up to a video-conference hearing if needed.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20faceless%20assessment%20notice%20and%20need%20help." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: 143(1), 143(2) & 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/condonation-of-delay-filing-itr-how-to-apply" style={{ color: 'var(--primary)', fontWeight: 600 }}>Condonation of Delay in Filing ITR</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Audit: Handling a Transfer Pricing Assessment</Link></li>
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

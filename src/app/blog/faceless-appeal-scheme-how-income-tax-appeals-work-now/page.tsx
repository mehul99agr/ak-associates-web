import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Faceless Appeal Scheme: How Income Tax Appeals Work Now' },
  description: 'How the Faceless Appeal Scheme routes income tax appeals through the National Faceless Appeal Centre, which cases are excluded, and how to respond to a notice under this scheme.',
  keywords: [
    'faceless appeal scheme income tax', 'NFAC faceless appeal', 'CIT appeals faceless',
    'faceless appeal scheme 2020', 'how faceless appeals work income tax', 'faceless CIT appeals process',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/faceless-appeal-scheme-how-income-tax-appeals-work-now' },
  openGraph: {
    title: 'Faceless Appeal Scheme: How Income Tax Appeals Work Now',
    description: 'How the National Faceless Appeal Centre allocates and decides income tax appeals, which cases are excluded, and how to respond effectively.',
    url: 'https://agrawalkhandelwal.com/blog/faceless-appeal-scheme-how-income-tax-appeals-work-now',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faceless Appeal Scheme: How Income Tax Appeals Work Now',
    description: 'How the National Faceless Appeal Centre allocates and decides income tax appeals, and which cases are excluded from the scheme.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Faceless Appeal Scheme: How Income Tax Appeals Work Now', 'faceless-appeal-scheme-how-income-tax-appeals-work-now')

const articleLd = buildArticleLd({
  headline: 'Faceless Appeal Scheme: How Income Tax Appeals Work Now',
  description: 'How the Faceless Appeal Scheme routes CIT(Appeals) proceedings through the National Faceless Appeal Centre and Appeal Units, which categories of cases are excluded, and how to respond.',
  datePublished: '2026-10-12',
  slug: 'faceless-appeal-scheme-how-income-tax-appeals-work-now',
})

const faqs: [string, string][] = [
  [
    'What is the Faceless Appeal Scheme?',
    'The Faceless Appeal Scheme routes most first-stage income tax appeals (before the Commissioner/Joint Commissioner Appeals) through a centralised, technology-driven system instead of a face-to-face hearing with a specific, identifiable officer. Case allocation, notices, submissions, and the final order are all handled through an online portal and a randomised allocation system.',
  ],
  [
    'Which appeals are excluded from the faceless system?',
    'Certain categories are kept outside the faceless mechanism, including appeals relating to serious fraud, major tax evasion, sensitive or search-and-seizure matters, and international taxation or black money cases. These continue to be handled through the conventional, non-faceless process given their nature and the coordination they often require.',
  ],
  [
    'How is my appeal assigned to a specific officer under this scheme?',
    'The National Faceless Appeal Centre (NFAC) assigns each appeal to a specific Appeal Unit through an automated, randomised allocation system. You do not know in advance, and generally never learn, which specific officer within that unit is deciding your case, which is the core design feature intended to reduce direct taxpayer-officer interaction.',
  ],
  [
    'Can I request a personal hearing under the Faceless Appeal Scheme?',
    'Yes, in defined circumstances. While the default mode is written submission through the portal, a request for a hearing (typically conducted via video conference rather than in person) can be made, and the appellate authority has discretion to allow it, particularly where the case is complex or a purely written exchange is inadequate to explain the facts.',
  ],
  [
    'How do I actually respond to a notice under the Faceless Appeal Scheme?',
    'All communication, notices, submissions, and evidence happens through the income tax e-filing portal against the specific appeal reference. Responses should be complete, well-organised, and directly address each point raised, since there is no informal in-person opportunity to clarify a submission the way there might be in a traditional hearing; ambiguity in a written submission is far more likely to be read against you.',
  ],
  [
    'Does the Faceless Appeal Scheme apply to the ITAT stage as well?',
    'No. The Faceless Appeal Scheme applies to the first appellate stage before the Commissioner/Joint Commissioner (Appeals). The Income Tax Appellate Tribunal is a separate, independent body with its own procedure and, while ITAT filing is now e-filing-only under the current rules, hearings before the Tribunal are not conducted under this faceless appeal framework.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function FacelessAppealSchemeBlog() {
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
                Faceless Appeal Scheme: How Income Tax Appeals Work Now
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 12, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Most first-appeal (CIT/JCIT Appeals) proceedings now run through the <strong>Faceless Appeal Scheme</strong>: a randomised, portal-based system with no direct taxpayer-officer interaction.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Serious fraud, major tax evasion, search cases, and international tax/black money matters are <strong>excluded</strong> and follow the conventional process instead.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Your appeal is assigned to an <strong>Appeal Unit</strong> by the National Faceless Appeal Centre (NFAC), and you generally never know which individual officer decided it.</li>
                    <li style={{ marginBottom: 0 }}>A video-conference hearing can be requested in appropriate cases, but written, portal-based submission is the default and does most of the work.</li>
                  </ul>
                </div>

                <p>If you have filed a first appeal against an income tax order recently, you are almost certainly navigating it through the <strong>Faceless Appeal Scheme</strong> rather than a traditional in-person hearing before a named Commissioner. This guide explains how the mechanism actually works, who is excluded from it, and what a response under this scheme should look like. For the deadlines and forms that get you into this system in the first place, see our companion guide on the <Link href="/blog/income-tax-appeal-process-cit-appeals-to-itat" style={{ color: 'var(--primary)', fontWeight: 600 }}>full appeal process from CIT(Appeals) to ITAT</Link>.</p>

                <h2>The Structure Behind a Faceless Appeal</h2>
                <p>The scheme runs through a small set of coordinating bodies rather than a single officer sitting across the table from you. The <strong>National Faceless Appeal Centre (NFAC)</strong> acts as the central hub: it receives the appeal, communicates with you, and allocates the case. The actual work of examining the appeal and drafting the order is done by an <strong>Appeal Unit</strong> in a Regional Faceless Appeal Centre, assigned through an automated, randomised allocation algorithm rather than manual assignment.</p>
                <p>This structure is deliberate: the taxpayer generally does not know, and does not need to know, which specific officer within the assigned unit is reviewing the case. The intent is to remove the personal-relationship element from the appellate process entirely, reducing scope for both bias and undue informal influence in either direction.</p>

                <h2>What Is Excluded From the Faceless Mechanism</h2>
                <p>Not every appeal goes through this route. Categories carved out and kept on the conventional, non-faceless track include appeals involving <strong>serious fraud, major tax evasion, sensitive matters, and cases arising from search and seizure operations</strong>, along with <strong>international taxation and black money</strong> cases. These categories often require coordination, specialised expertise, or handling that the standard faceless workflow is not designed for, so they continue through the traditional appellate route with an identified officer.</p>
                <p>If your matter falls into one of these excluded categories, do not assume it will proceed on the faceless system's typical timelines or communication pattern; confirm with your CA which track your specific appeal is actually following.</p>

                <h2>How the Process Actually Runs</h2>
                <p>Once your appeal is filed and allocated, communication happens almost entirely through the income tax e-filing portal: notices asking for clarification or additional evidence, your written submissions in response, and eventually the appellate order itself, all logged against the appeal reference with real-time alerts on filing and disposal. There is no walk-in hearing room in the traditional sense.</p>
                <p>That does not mean a hearing is never available. In appropriate cases, typically where the matter is factually or legally complex enough that a purely written exchange risks losing nuance, a request for a hearing can be made and is conducted by video conference rather than in person. The default posture of the system, however, is written submission, and most appeals proceed and conclude without ever reaching a live hearing.</p>
                <p>When the Appeal Unit finalises its view, the order is issued electronically with a digital signature and communicated to both you and the assessing officer's side simultaneously, closing the loop on that stage of the dispute.</p>

                <h2>What This Means for How You Respond</h2>
                <p>The practical shift for taxpayers is that the quality of your written submission now carries more weight than it might have in a traditional hearing, where a point could sometimes be clarified verbally on the spot. A submission under the Faceless Appeal Scheme should:</p>
                <ul>
                  <li>Directly address each specific finding or ground raised in the order under appeal, not just restate your original position.</li>
                  <li>Attach complete, clearly labelled supporting documents the first time, rather than assuming a follow-up round to add missing evidence.</li>
                  <li>Be internally consistent with what was already submitted at the assessment stage; contradictions between your assessment-stage and appeal-stage submissions are an easy target for the Appeal Unit to flag.</li>
                  <li>Explicitly request a hearing if the matter genuinely needs one, rather than assuming it will be offered automatically.</li>
                </ul>
                <p>This is broadly the same discipline that applies when responding to a <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>faceless scrutiny notice at the assessment stage</Link>: complete, well-organised, first-submission-correct responses move faster and more favourably through a faceless system than partial responses that anticipate a chance to fill gaps later.</p>

                <h2>Faceless Appeal vs Faceless Assessment</h2>
                <p>It is worth keeping the two faceless mechanisms distinct. The <Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme</Link> governs how your original scrutiny assessment under Section 143(3) is conducted, before any dispute exists. The Faceless Appeal Scheme covers what happens after you disagree with that (or another) order and file a first appeal. Both apply the same underlying philosophy of randomised allocation and portal-based communication, but they sit at different stages of the same broader dispute lifecycle, and the exclusion criteria (fraud, search cases, international tax) are similar but decided independently at each stage.</p>

                <p>Whether you are still deciding whether an order is worth appealing or you already have a faceless appeal notice in hand and are unsure how to respond, involving a CA who has handled faceless proceedings before materially improves how the written record reads to the Appeal Unit. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include drafting and managing faceless appeal submissions end to end.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Handling a faceless appeal notice?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare and manage faceless appeal submissions, including deciding when to request a hearing.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20faceless%20appeal%20notice%20and%20need%20help." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-appeal-process-cit-appeals-to-itat" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Appeal Process: CIT(Appeals) to ITAT</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme: How It Works</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/penalty-for-under-reporting-and-misreporting-of-income" style={{ color: 'var(--primary)', fontWeight: 600 }}>Penalty for Under-Reporting &amp; Misreporting of Income</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

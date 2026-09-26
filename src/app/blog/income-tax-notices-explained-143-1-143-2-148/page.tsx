import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Income Tax Notices Explained: Section 143(1), 143(2) & 148' },
  description: 'What a Section 143(1) intimation, a Section 143(2) scrutiny notice, and a Section 148 reassessment notice each mean, how to respond, and the deadlines that matter.',
  keywords: [
    'section 143(1) intimation', 'section 143(2) scrutiny notice', 'section 148 income tax notice',
    'income tax notice explained', 'how to reply to income tax notice', 'reassessment notice India',
    'types of income tax notices', 'income tax scrutiny assessment',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-tax-notices-explained-143-1-143-2-148' },
  openGraph: {
    title: 'Income Tax Notices Explained: 143(1), 143(2) & 148',
    description: 'A plain-English breakdown of the three most common income tax notices, what triggers each one, and how to respond within the deadline.',
    url: 'https://agrawalkhandelwal.com/blog/income-tax-notices-explained-143-1-143-2-148',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Notices Explained: 143(1), 143(2) & 148',
    description: 'A plain-English breakdown of the three most common income tax notices, what triggers each one, and how to respond within the deadline.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax Notices Explained: Section 143(1), 143(2) & 148', 'income-tax-notices-explained-143-1-143-2-148')

const articleLd = buildArticleLd({
  headline: 'Income Tax Notices Explained: Section 143(1), 143(2) & 148',
  description: 'What a Section 143(1) intimation, a Section 143(2) scrutiny notice, and a Section 148 reassessment notice mean, what triggers each, and how to respond.',
  datePublished: '2026-07-31',
  slug: 'income-tax-notices-explained-143-1-143-2-148',
})

const faqs: [string, string][] = [
  [
    'Is a Section 143(1) intimation the same as a notice?',
    'Not in the sense most taxpayers fear. A Section 143(1) intimation is an automated communication generated after your return is processed, confirming the return as filed, or flagging an arithmetical adjustment, a mismatch with Form 26AS/AIS, or a refund/demand. It is routine and does not by itself mean you are under scrutiny.',
  ],
  [
    'What happens if I do not respond to a Section 143(2) notice?',
    'A Section 143(2) scrutiny notice requires you to appear (usually through your CA, and typically now via the faceless assessment system) and produce the evidence and explanations called for. Ignoring it allows the assessing officer to complete the assessment ex-parte based only on the material available, which is almost always less favourable than a return filed with your own submissions.',
  ],
  [
    'Can I get a Section 148 notice even after I have filed and closed my return?',
    'Yes. A Section 148 reassessment notice can be issued after the original assessment is complete if the tax department has "information" suggesting income has escaped assessment, subject to defined time limits and, since the Finance Act 2021 reforms, a preliminary show-cause step under Section 148A before the formal notice is issued.',
  ],
  [
    'How much time do I get to respond to these notices?',
    'The deadline is stated on the notice itself and varies by type and by the specific facts of the case; a scrutiny or reassessment notice typically gives a window of a few weeks, extendable on request through the e-filing portal or NFAC in genuine cases. Missing the stated date without seeking an extension is the single biggest self-inflicted mistake taxpayers make with any of these notices.',
  ],
  [
    'Do these sections have new numbers under the Income Tax Act 2025?',
    'These provisions have been renumbered under the Income Tax Act 2025. The exact new-Act section references were not consistently confirmed across secondary sources at the time of writing, so this guide refers to them by their familiar old-Act numbers throughout; always confirm the current section citation with your CA or the notice itself before filing a response.',
  ],
  [
    'Should I reply to an income tax notice myself or involve a CA?',
    'For a simple Section 143(1) intimation confirming your return with no demand, you can usually just note it. For anything involving a demand, a mismatch you do not understand, a 143(2) scrutiny call, or any 148 reassessment notice, involve a CA before drafting a response; the wording and evidence you submit at this stage materially affects the outcome.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function IncomeTaxNoticesExplainedBlog() {
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
                Income Tax Notices Explained: Section 143(1), 143(2) & 148
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 31, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 143(1)</strong> is a routine, largely automated intimation after processing; most taxpayers get one and it is not a red flag by itself.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 143(2)</strong> is a scrutiny notice: the department wants to examine your return in detail before finalising the assessment.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 148</strong> is a reassessment notice issued after your original assessment is already closed, when the department believes income has escaped assessment.</li>
                    <li style={{ marginBottom: 0 }}>These provisions have been renumbered under the Income Tax Act 2025; the exact new-Act section numbers were not consistently confirmed at the time of writing, so this guide uses the familiar old-Act names throughout.</li>
                  </ul>
                </div>
                <p>An income tax notice lands in your inbox and the first reaction is usually panic. In most cases it shouldn&apos;t be. The Income Tax Department issues several very different types of communication under different sections, ranging from a routine acknowledgment to a formal reopening of a closed assessment, and the correct response depends entirely on which one you have received. This guide walks through the three you are most likely to encounter: Section 143(1), Section 143(2), and Section 148.</p>

                <h2>Section 143(1): The Routine Intimation</h2>
                <p>Every return you file gets processed by the Centralized Processing Centre (CPC), and the output of that processing is a <strong>Section 143(1) intimation</strong>. It is largely automated: the system checks your return for arithmetical errors, incorrect claims apparent from the return itself, and mismatches against your Form 26AS, AIS, and TDS records. The intimation comes in one of three flavours: no change (your return is accepted as filed), a refund, or a demand where the computed tax differs from what you reported.</p>
                <p>This is not a scrutiny notice and does not mean the department suspects anything. Read it carefully anyway. If it shows a demand you disagree with, most commonly from a TDS credit mismatch, you can file a rectification request under Section 154 rather than simply paying or ignoring it. If the intimation confirms your return with no adjustment, no action is needed.</p>

                <h2>Section 143(2): The Scrutiny Notice</h2>
                <p><strong>A Section 143(2) notice means your return has been picked up for detailed scrutiny.</strong> This can happen because your case was selected under the risk-based Computer Assisted Scrutiny Selection (CASS) criteria, because of a specific mismatch or high-value transaction flagged by the system, or occasionally for manual reasons. Selection alone does not mean something is wrong; it means the assessing officer wants to verify specific claims, deductions, or income heads before the assessment is finalised.</p>
                <p>Once this notice is issued, the case proceeds to assessment under Section 143(3). In practice today, most scrutiny is conducted through the <Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme</Link>, so you will not meet an officer in person; instead you respond through the income tax e-filing portal with documents and explanations against each query raised. Treat every query as an opportunity to close the point with clear, complete evidence the first time; incomplete or defensive responses tend to generate follow-up queries and prolong the case.</p>
                <p>What to do when you receive one:</p>
                <ul>
                  <li>Note the response deadline stated on the notice and calendar it immediately.</li>
                  <li>Gather supporting documents for the specific issue flagged, not your entire financial history.</li>
                  <li>Respond through the e-filing portal (or through your authorised representative) within the stated window; request an adjournment through the portal if you genuinely need more time, rather than simply missing the date.</li>
                  <li>Keep a record of every submission and the acknowledgment generated.</li>
                </ul>

                <h2>Section 148: Reassessment After the Case Is Closed</h2>
                <p><strong>A Section 148 notice is different in kind: it reopens a return that has already been assessed (or accepted without scrutiny) because the department believes income chargeable to tax has escaped assessment.</strong> This is a heavier action than routine scrutiny, and the law builds in more procedural safeguards before it can be issued.</p>
                <p>Since the Finance Act 2021 reforms, a Section 148 notice cannot ordinarily be issued directly. The department must first issue a show-cause notice under <strong>Section 148A</strong>, share the information and material suggesting escapement, give you an opportunity to respond, and pass a reasoned order before deciding whether to proceed. Only after that step, and within the applicable time limits (which are shorter for smaller escaped-income amounts and longer where the escaped income crosses a specified threshold and certain conditions are met), can the formal Section 148 notice follow, leading to reassessment proceedings.</p>
                <p>If you receive a Section 148A show-cause notice or a Section 148 notice, do not treat it as something to handle later. The information the department already holds (often from AIS, high-value transaction reporting, or third-party data) is the starting point, and a well-drafted response at the 148A stage can sometimes prevent the reassessment from proceeding at all. Once reassessment is underway, the burden is on you to explain why the flagged income is not taxable or was already disclosed.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Sections 143(1), 143(2), 148, and 148A have all been renumbered under the Income Tax Act 2025. At the time of writing, the exact new-Act section references for these specific provisions were not consistently confirmed across authoritative sources, so this guide deliberately refers to them by their familiar old-Act numbers throughout, the same approach the site already takes for provisions like GAAR. Confirm the current section citation on the notice itself, or with your CA, before drafting any formal response.</p>
                </div>

                <h2>Quick Reference: Which Notice Is Which</h2>
                <ul>
                  <li><strong>Section 143(1)</strong>: Automated intimation after processing. Routine. Action needed only if there is a demand or error.</li>
                  <li><strong>Section 143(2)</strong>: Scrutiny notice. Your filed return is being examined in detail before assessment. Respond with evidence by the deadline.</li>
                  <li><strong>Section 148 (via 148A)</strong>: Reassessment notice. A closed case is being reopened because income is believed to have escaped assessment. Respond at the show-cause stage if possible.</li>
                </ul>
                <p>Whichever notice you have received, the deadline printed on it is not negotiable by default, but extensions can be requested through the portal in genuine cases. The earlier you involve a CA who can read the notice, identify exactly what is being asked, and prepare a complete first response, the less likely the matter is to escalate into a longer-running dispute. For businesses and NRIs alike, our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include notice response and representation before the assessing officer.</p>
              </div>

              <PostCTA
            heading="Received an income tax notice?"
            description="We help individuals and businesses read the notice correctly, gather the right evidence, and respond within the deadline."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20received%20an%20income%20tax%20notice%20and%20need%20help."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme: How It Works</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/condonation-of-delay-filing-itr-how-to-apply" style={{ color: 'var(--primary)', fontWeight: 600 }}>Condonation of Delay in Filing ITR</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>Deciphering the New Income Tax Act & Rules 2025</Link></li>
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

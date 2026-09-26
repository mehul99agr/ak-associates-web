import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Best Judgment Assessment Under Section 144: What It Means' },
  description: 'When the assessing officer can proceed to a best judgment assessment under Section 144, how it differs from a normal assessment, and the appeal remedies available against it.',
  keywords: [
    'best judgment assessment section 144', 'section 144 income tax act', 'ex parte assessment income tax',
    'assessing officer best judgment', 'appeal against best judgment assessment', 'section 144 notice non compliance',
    'income tax assessment without cooperation', 'best judgment assessment remedy',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/best-judgment-assessment-section-144' },
  openGraph: {
    title: 'Best Judgment Assessment Under Section 144: What It Means',
    description: 'When a best judgment assessment applies, how it differs from a normal assessment, and the remedies available to challenge one.',
    url: 'https://agrawalkhandelwal.com/blog/best-judgment-assessment-section-144',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Judgment Assessment Under Section 144: What It Means',
    description: 'When it applies, how it differs from a normal assessment, and how to challenge one.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Best Judgment Assessment Under Section 144: What It Means', 'best-judgment-assessment-section-144')

const articleLd = buildArticleLd({
  headline: 'Best Judgment Assessment Under Section 144: What It Means',
  description: 'When the assessing officer can proceed to a best judgment assessment under Section 144, how it differs from a normal assessment, and the appeal remedies available against it.',
  datePublished: '2026-08-16',
  slug: 'best-judgment-assessment-section-144',
})

const faqs: [string, string][] = [
  [
    'What is a best judgment assessment under Section 144?',
    'It is an assessment the assessing officer is empowered to complete based on their own best judgment, using whatever material and information is available, when the taxpayer has not fully cooperated with the normal assessment process. It is completed without the benefit of the taxpayer\'s full explanation, documents, or accounts, unlike a regular assessment built around the taxpayer\'s own return and submissions.',
  ],
  [
    'When can the assessing officer proceed to a best judgment assessment?',
    'The main triggers are: failure to file the return of income at all, failure to comply with a notice requiring specific accounts or information, failure to comply with a scrutiny (143(2)) notice, failure to get accounts audited where a tax audit was mandatory, or the officer being dissatisfied with the correctness or completeness of the accounts produced despite the taxpayer\'s participation. Any one of these can open the door to Section 144, though officers generally give an opportunity to be heard before finalising it.',
  ],
  [
    'How does a best judgment assessment differ from a normal assessment?',
    'A normal assessment (whether accepted at the processing stage or completed after scrutiny) is built substantially on the figures, books, and explanations the taxpayer has submitted, with the officer verifying and where needed adjusting specific items. A best judgment assessment reverses that dynamic: because the taxpayer did not provide adequate material, the officer estimates income using external and available information, comparable cases, past assessment history, bank data, and any partial records on file, and the resulting figure is often less favourable than what a fully cooperative assessment would have produced.',
  ],
  [
    'Can a best judgment assessment be appealed?',
    'Yes, it can be appealed to the Commissioner (Appeals) and, further, to the Income Tax Appellate Tribunal, the same forums available for a normal assessment order. In practice, though, the grounds that succeed are narrower: because the assessment was made precisely due to inadequate material or cooperation, the appellate authority will scrutinise whether the officer\'s estimate was reasonable on the material actually available, rather than reopening the full merits the way it would for a fully contested normal assessment.',
  ],
  [
    'Is there a way to avoid a best judgment assessment once notices have been missed?',
    'Often, yes, if acted on quickly. Responding late but before the assessment is actually finalised, explaining the reason for the earlier default, and submitting the requested accounts and information can persuade the officer to proceed on a cooperative basis instead. Once the best judgment order is actually passed, the options narrow to appeal or, in specific circumstances, a rectification or revision application, so the window to prevent it is the more valuable one to act within.',
  ],
  [
    'What section is Section 144 under the new Income Tax Act 2025?',
    'The Income Tax Act 2025 has renumbered most assessment and reassessment provisions. The exact new-Act section reference corresponding to the old Section 144 best judgment assessment provision was not consistently confirmed across authoritative sources at the time of writing, so this guide refers to it by its familiar old-Act number throughout; confirm the current citation with your CA or the assessment order itself.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function BestJudgmentAssessmentBlog() {
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
                Best Judgment Assessment Under Section 144: What It Means
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>August 16, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A <strong>best judgment assessment</strong> under Section 144 lets the assessing officer estimate your income using available material when you have not filed a return, or have not adequately cooperated with a notice or scrutiny.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Unlike a normal assessment, it is not built around your own accounts and explanations, and the resulting figure is usually less favourable.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It can be appealed, but the grounds are narrower: the appellate authority mainly checks whether the officer&apos;s estimate was reasonable on the material actually available, not the full merits.</li>
                    <li style={{ marginBottom: 0 }}>Responding late but before the order is passed can often still avoid a best judgment assessment altogether.</li>
                  </ul>
                </div>

                <p>Most income tax assessments proceed on the basis of what the taxpayer has filed and explained. Section 144 covers the opposite scenario: what happens when the taxpayer does not give the assessing officer enough to work with. Understanding when this provision applies, and how the resulting assessment differs from a normal one, matters because the practical stakes (a higher estimated tax demand, a narrower appeal) are meaningfully different from a standard scrutiny outcome.</p>

                <h2>When Can a Best Judgment Assessment Be Made?</h2>
                <p>The assessing officer can proceed under Section 144 in a defined set of circumstances, all involving some form of non-compliance or non-cooperation rather than a simple disagreement over figures:</p>
                <ul>
                  <li><strong>Failure to file the return of income</strong> within the statutory deadline or any extended deadline allowed, and no return is filed even in response to a subsequent notice.</li>
                  <li><strong>Failure to comply with a notice</strong> requiring the taxpayer to produce accounts, documents, or specific information called for during assessment.</li>
                  <li><strong>Failure to comply with a scrutiny notice</strong> issued under Section 143(2), where the taxpayer does not respond or does not appear despite being called upon to do so. For the mechanics of what that notice itself requires, see our guide on <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices</Link>.</li>
                  <li><strong>Failure to get accounts audited</strong> where a tax audit was mandatory and the audit report was not furnished as required.</li>
                  <li><strong>Dissatisfaction with the accounts produced</strong>, even where the taxpayer has participated: if the officer is not satisfied about the correctness or completeness of the accounts, or the method of accounting has not been regularly followed, a best judgment assessment can still follow despite some level of engagement from the taxpayer.</li>
                </ul>
                <p>In each case, the officer is generally required to give the taxpayer an opportunity to be heard before finalising the assessment on a best judgment basis, except where that opportunity has already been given and ignored through the very default that triggered the provision in the first place.</p>

                <h2>How It Differs From a Normal Assessment</h2>
                <p>The core difference is the direction the evidence flows from. In a normal assessment, whether accepted at the intimation stage or completed after full scrutiny, the officer works from the taxpayer's own return, books, and submissions, verifying and adjusting specific items where warranted. The taxpayer's own version of the facts is the starting point.</p>
                <p>In a best judgment assessment, that starting point is missing or incomplete, so the officer builds the income estimate from whatever is available externally: bank statements and third-party reporting data, comparable cases in a similar business or profession, the taxpayer's own past assessment history, any partial books or documents that were produced before the default, and general knowledge of the trade or profession involved. The word &quot;judgment&quot; does not mean arbitrary; the estimate must have a rational basis connected to the material on record, but it is inherently an estimate made without the full picture the taxpayer alone could have provided. This is why best judgment assessments are very often higher than what a fully cooperative assessment would have produced, since ambiguity in the available material tends to be resolved against the non-compliant party.</p>

                <h2>Remedies: Appeal and Its Narrower Grounds</h2>
                <p>A best judgment assessment order is appealable to the Commissioner (Appeals) and, beyond that, to the Income Tax Appellate Tribunal, following the same appellate structure as any other assessment order. In practice, though, contesting a Section 144 order successfully is harder than contesting a normal scrutiny addition, for a straightforward reason: the appellate authority is reviewing whether the officer's estimate was a reasonable exercise of judgment on the material that was actually available at the time, not re-litigating the full facts as if the taxpayer had cooperated from the start.</p>
                <p>That said, several grounds do succeed regularly:</p>
                <ul>
                  <li><strong>The estimate had no rational basis</strong> or ignored material that was in fact available to the officer, such as a partial submission made before the deadline that was disregarded.</li>
                  <li><strong>Proper opportunity of being heard was not given</strong> before the order was passed, where the law required it.</li>
                  <li><strong>Procedural defects</strong> in how the assessment or the underlying notices were issued.</li>
                  <li><strong>Fresh evidence explaining the original default</strong>, for instance a return that was in fact filed but not properly recorded, or a genuine reason for non-appearance that the officer did not consider.</li>
                </ul>
                <p>What generally does not succeed is a straightforward reworking of the income computation as if the case were a normal assessment; the taxpayer's own failure to provide that computation when it mattered is the reason appellate relief on pure quantum grounds is harder to obtain here than in an ordinary scrutiny appeal.</p>

                <h2>The Better Option: Avoiding It in the First Place</h2>
                <p>Because a best judgment assessment is triggered by a default rather than a substantive tax dispute, the most reliable remedy is almost always available earlier in the process than the appeal stage. Filing the return even after the due date, responding to a notice even after the stated deadline (with a reasonable explanation for the delay), or producing the requested accounts before the assessment is actually finalised can persuade the officer to proceed on the ordinary track instead of invoking Section 144. Once the order is passed, options narrow considerably to appeal, or in limited circumstances rectification, both of which take longer and carry the narrower success grounds described above.</p>
                <p>If you have missed a filing deadline, an assessment notice, or a scrutiny appearance, the priority is to act before the assessment is closed, not after. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory and representation services</Link> include urgent response drafting to prevent a best judgment assessment, and appeal representation where one has already been passed.</p>
              </div>

              <PostCTA
            heading="Facing or worried about a best judgment assessment?"
            description="We help clients respond before an assessment is finalised, and represent them in appeal where one has already been passed."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20a%20Section%20144%20assessment."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-scrutiny-assessment-how-to-respond" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Scrutiny Assessment: What Triggers It &amp; How to Respond</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
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

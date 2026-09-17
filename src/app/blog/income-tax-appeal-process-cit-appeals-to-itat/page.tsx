import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Income Tax Appeal Process: CIT(Appeals) to ITAT' },
  description: 'How the income tax appeal ladder works from CIT(Appeals) / Joint Commissioner (Appeals) to the ITAT, High Court and Supreme Court, the forms, fees, and filing timelines.',
  keywords: [
    'income tax appeal process India', 'CIT appeals to ITAT', 'appeal against income tax order',
    'Form 35 income tax appeal', 'Form 36 ITAT appeal', 'income tax appellate tribunal appeal',
    'how to file income tax appeal', 'appeal to Commissioner of Income Tax Appeals',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-tax-appeal-process-cit-appeals-to-itat' },
  openGraph: {
    title: 'Income Tax Appeal Process: CIT(Appeals) to ITAT',
    description: 'The full appellate ladder for an income tax dispute in India: CIT(Appeals), ITAT, High Court, and Supreme Court, with forms, fees, and deadlines.',
    url: 'https://agrawalkhandelwal.com/blog/income-tax-appeal-process-cit-appeals-to-itat',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Appeal Process: CIT(Appeals) to ITAT',
    description: 'The full appellate ladder for an income tax dispute in India, with forms, fees, and filing deadlines at each stage.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax Appeal Process: CIT(Appeals) to ITAT', 'income-tax-appeal-process-cit-appeals-to-itat')

const articleLd = buildArticleLd({
  headline: 'Income Tax Appeal Process: CIT(Appeals) to ITAT',
  description: 'The appellate hierarchy for an income tax dispute in India, from the first appeal against an assessment order through to the Supreme Court, with timelines and forms at each stage.',
  datePublished: '2026-10-09',
  slug: 'income-tax-appeal-process-cit-appeals-to-itat',
})

const faqs: [string, string][] = [
  [
    'How long do I have to file the first appeal against an assessment order?',
    'The first appeal must generally be filed within 30 days of the date of service of the notice of demand or the order being appealed, whether the order was passed by an assessing officer or in a rectification, penalty, or reassessment proceeding. This 30-day window is the single most important date to calendar the moment an adverse order is received.',
  ],
  [
    'What form is used to file the first appeal, and has it changed recently?',
    'The first appeal was traditionally filed in Form 35. Under the Income Tax Act 2025 and the related e-filing rules that took effect for filings from January 2026 onward, the appeal is now filed in Form 99, with mandatory e-filing using a digital signature or EVC. Always confirm the current form number and filing mode on the income tax e-filing portal before submitting, since form numbering has changed with the new Act.',
  ],
  [
    'Do I have to pay the disputed tax before my first appeal is even accepted?',
    'Generally yes, in part. The appeal is typically not admitted unless the tax on your own returned income (the self-assessed tax you already reported as payable) has been paid; this is not the same as paying the disputed addition the department has raised. The first appellate authority can grant an exemption from this requirement in genuine hardship cases, and separately, you can apply for a stay of the disputed demand itself.',
  ],
  [
    'How long do I have to appeal to the ITAT after losing at CIT(Appeals)?',
    'An appeal to the Income Tax Appellate Tribunal (ITAT) must generally be filed within 2 months from the end of the month in which the CIT(Appeals) order is received. This was traditionally filed in Form 36; under the current e-filing framework it is filed in Form 115, with e-filing using a digital signature now mandatory and physical filing no longer accepted.',
  ],
  [
    'Is there a fee to file an ITAT appeal?',
    'Yes. The ITAT appeal fee is a slab structure based on the assessed income involved, historically a few hundred to a couple of thousand rupees for most individual and small-business appeals, with a flat lower fee for appeals not involving an assessed income figure (such as certain penalty-only appeals). Confirm the exact current slab on the ITAT e-filing portal at the time of filing, since fee schedules are revised periodically.',
  ],
  [
    'Is the ITAT the final stage, or can I appeal further?',
    'The ITAT is the final fact-finding authority; beyond it, appeals to the High Court are restricted to cases involving a "substantial question of law", not a fresh re-examination of facts. A further appeal from the High Court to the Supreme Court is possible but rare in practice, reserved for matters of significant legal importance or where High Courts have taken conflicting views.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function IncomeTaxAppealProcessBlog() {
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
                Income Tax Appeal Process: CIT(Appeals) to ITAT
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>The first appeal against an assessment, penalty, or rectification order goes to the <strong>Commissioner/Joint Commissioner (Appeals)</strong> within 30 days of the order.</li>
                    <li style={{ marginBottom: '0.4rem' }}>If you lose there, the next stage is the <strong>Income Tax Appellate Tribunal (ITAT)</strong>, within 2 months of receiving that order.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Beyond the ITAT, appeals go to the <strong>High Court</strong> only on a substantial question of law, and rarely on to the <strong>Supreme Court</strong>.</li>
                    <li style={{ marginBottom: 0 }}>Forms have been renumbered under the Income Tax Act 2025 e-filing framework: Form 35 is now Form 99 and Form 36 is now Form 115, with e-filing mandatory at both stages.</li>
                  </ul>
                </div>

                <p>Disagreeing with an income tax order, whether it is a scrutiny assessment, a penalty, or a rectification you believe is wrong, does not mean the matter ends there. The law provides a structured, multi-level appeal ladder, and each level has its own deadline, form, and procedural requirements. Missing a filing window at any stage effectively forfeits that level of appeal, so understanding the sequence before you need it matters more than most taxpayers realise.</p>

                <h2>Stage One: The First Appeal (CIT/JCIT Appeals)</h2>
                <p>The first appellate stage is before the Commissioner (Appeals) or, depending on the order, the Joint Commissioner (Appeals). This is where the vast majority of disputes are actually resolved, since most cases never proceed beyond this level. <strong>The appeal must generally be filed within 30 days</strong> of the date of service of the notice of demand or the order itself.</p>
                <p>Traditionally filed in Form 35, this appeal is now filed in <strong>Form 99</strong> under the current e-filing rules that took effect from January 2026, with mandatory electronic filing using a digital signature or EVC. Along with the form, you file a statement of facts and grounds of appeal, setting out precisely which findings you are disputing and why. A poorly drafted grounds-of-appeal document, vague, repetitive, or missing key facts, is one of the most common reasons a first appeal underperforms even when the underlying case is strong.</p>
                <p>One point catches taxpayers off guard: the appeal is generally not admitted unless the tax on your own <em>returned</em> income has been paid. That is not the same as paying the disputed addition; it simply means the self-assessed tax you already reported as payable must be cleared first. If hardship makes this difficult, an exemption can be sought from the appellate authority; separately, a stay application can be filed to hold off recovery of the disputed demand while the appeal is pending.</p>
                <p>Increasingly, first-appeal proceedings run through the same faceless, portal-based communication model used for assessments; see our companion guide on the <Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme</Link> and our dedicated post on the <Link href="/blog/faceless-appeal-scheme-how-income-tax-appeals-work-now" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Appeal Scheme</Link> for how the appellate side specifically works.</p>

                <h2>Stage Two: Appeal to the ITAT</h2>
                <p>If the first appeal does not resolve the dispute in your favour, or if the department itself wants to contest a first-appeal order that went against it, the next stage is the <strong>Income Tax Appellate Tribunal (ITAT)</strong>, an independent, quasi-judicial body separate from the tax department's administrative hierarchy. This is the first stage where the case is heard by a bench that includes a judicial member, not solely tax officers.</p>
                <p><strong>The appeal to the ITAT must generally be filed within 2 months from the end of the month in which the first-appeal order is received.</strong> This was historically filed in Form 36; it is now filed in <strong>Form 115</strong>, with e-filing via digital signature mandatory and physical filing no longer accepted under the current rules. A cross-objection can be filed by the other party (you or the department) within a shorter window if only one side initially appeals.</p>
                <p>A filing fee applies at this stage, structured in slabs tied to the assessed income involved in the dispute; a flat, lower fee applies to appeals that do not involve a specific assessed-income figure, such as certain penalty-only matters. Because fee schedules and exact slab amounts are revised from time to time, confirm the current figure on the ITAT e-filing portal at the time of filing rather than relying on an older reference.</p>
                <p>Unlike the first appellate stage, there is generally no mandatory pre-deposit requirement to have an ITAT appeal admitted, though recovery of the disputed demand can still proceed unless a separate stay application is filed and granted.</p>

                <h2>Beyond the ITAT: High Court and Supreme Court</h2>
                <p>The ITAT is the final fact-finding authority in the appeal chain. A further appeal to the jurisdictional <strong>High Court</strong> is possible, but only where the case raises a "substantial question of law", the High Court does not re-examine facts the Tribunal has already found, so an appeal that is really just a disagreement over facts (not law) typically will not get very far at this stage.</p>
                <p>From the High Court, a further appeal to the <strong>Supreme Court</strong> is legally available but rare in practice. It is generally reserved for matters of genuine national importance, cases where different High Courts have taken conflicting positions on the same legal question, or issues with wide-reaching precedent value. For most taxpayers, the practical appeal journey begins and often ends at the first two stages.</p>

                <h2>The Appeal Ladder at a Glance</h2>
                <ul>
                  <li><strong>Stage 1 - CIT/JCIT (Appeals):</strong> File within 30 days of the order, using Form 99 (previously Form 35). Self-assessed tax on returned income generally must be paid first.</li>
                  <li><strong>Stage 2 - ITAT:</strong> File within 2 months from the end of the month the Stage 1 order is received, using Form 115 (previously Form 36). Slab-based filing fee applies.</li>
                  <li><strong>Stage 3 - High Court:</strong> Only on a substantial question of law, not a fresh review of facts.</li>
                  <li><strong>Stage 4 - Supreme Court:</strong> Rare; reserved for matters of significant legal or precedent value.</li>
                </ul>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Forms and Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The Income Tax Act 2025 has renumbered the appeal provisions and, alongside a related e-filing framework rolled out from January 2026, replaced the old appeal forms: Form 35 is now Form 99 and Form 36 is now Form 115. Always verify the current form number, fee slab, and filing mode on the income tax e-filing portal or the ITAT e-filing portal at the time you actually file, since procedural rules in this area have changed more than once in a short span.</p>
                </div>

                <p>Every stage of this ladder runs on a hard deadline with no automatic extension, so the moment an adverse order arrives is the moment to start preparing the next appeal, not weeks later. If you are weighing whether an order is worth appealing, or need help drafting grounds of appeal that actually address the assessing officer's or CIT(Appeals)' specific findings, our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include representation at every stage from the first appeal through the ITAT.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Considering an appeal against an income tax order?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We assess whether an appeal is worth pursuing, draft grounds of appeal, and represent you before CIT(Appeals) and the ITAT.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20appeal%20an%20income%20tax%20order." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-appeal-scheme-how-income-tax-appeals-work-now" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Appeal Scheme: How Income Tax Appeals Work Now</Link></li>
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

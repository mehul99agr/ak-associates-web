import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Stay of Demand: How to Apply When You Dispute a Tax Assessment' },
  description: 'How to apply for stay of demand under Section 220(6) while your income tax appeal is pending, the 20% deposit benchmark, and what the Budget 2026 proposal to reduce it to 10% actually changes.',
  keywords: [
    'stay of demand income tax', 'section 220(6) income tax', 'stay of demand application',
    'income tax appeal stay recovery', '20 percent pre-deposit income tax', 'how to stop tax recovery proceedings',
    'stay petition income tax India', 'AO discretion stay of demand',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment' },
  openGraph: {
    title: 'Stay of Demand: How to Apply When You Dispute a Tax Assessment',
    description: 'The process for applying for stay of demand pending appeal, the 20% deposit benchmark, and the Budget 2026 proposal to reduce it to 10%.',
    url: 'https://agrawalkhandelwal.com/blog/stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stay of Demand: How to Apply When You Dispute a Tax Assessment',
    description: 'How to apply for stay of demand under Section 220(6) while your appeal against a tax assessment is pending.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Stay of Demand: How to Apply When You Dispute a Tax Assessment', 'stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment')

const articleLd = buildArticleLd({
  headline: 'Stay of Demand: How to Apply When You Dispute a Tax Assessment',
  description: 'How to apply for stay of demand under Section 220(6) pending an income tax appeal, the 20% deposit benchmark, and the Budget 2026 proposal to reduce it to 10%.',
  datePublished: '2026-10-04',
  slug: 'stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment',
})

const faqs: [string, string][] = [
  [
    'Do I have to pay the tax demand while my appeal is pending?',
    'Not automatically, but the demand does not pause itself just because you have filed an appeal. You must separately apply for a stay of demand under Section 220(6) (or, once your appeal is with the Commissioner (Appeals) or Tribunal, before that authority). Without a stay in place, the Assessing Officer can proceed with recovery even while your appeal is pending.',
  ],
  [
    'Is the 20% deposit mandatory to get a stay?',
    'No. Courts, including the Delhi High Court, have clarified that 20% of the disputed demand is an administrative benchmark commonly applied by Assessing Officers when considering a stay, not a fixed statutory precondition. The Assessing Officer is required to exercise independent discretion on the facts of each case under Section 220(6), and a stay can be granted for a lower amount, or on different terms, in an appropriate case such as a covered issue, financial hardship, or a high likelihood of success on appeal.',
  ],
  [
    'Has the 20% benchmark actually been reduced to 10%?',
    'Budget 2026 proposed reducing the administrative pre-deposit benchmark for stay of demand from 20% to 10% of the core tax demand. As of the time of writing, this has been announced as a relief measure but detailed operational implementation and a clear statutory substitution were still being finalised, so taxpayers should confirm the current applicable benchmark with their CA or the latest CBDT instruction before relying on either figure, rather than assuming 10% already applies to every case.',
  ],
  [
    'Where do I file a stay of demand application?',
    'The application is typically filed with the Assessing Officer under Section 220(6) once an appeal is pending before the Commissioner (Appeals). If the Assessing Officer rejects or does not adequately address the application, you can escalate to the jurisdictional Principal Commissioner or Commissioner, and, once the appeal itself moves to the Income Tax Appellate Tribunal, a separate stay application can be made to the Tribunal.',
  ],
  [
    'What happens if recovery proceedings start before my stay is decided?',
    'If the Assessing Officer initiates recovery (such as attaching a bank account) before deciding your stay application, or without giving reasons for rejecting it, this is generally treated as improper and can be challenged, including through a writ petition in appropriate cases. It is important to file the stay application promptly after filing the appeal, rather than waiting, since delay narrows your options if recovery action begins.',
  ],
  [
    'Does a stay of demand mean the tax liability is cancelled?',
    'No. A stay only pauses recovery of the disputed demand while the appeal is being heard; it does not decide the underlying dispute. If the appeal is ultimately decided against you, the demand (along with applicable interest) becomes payable. A stay is a procedural protection during the dispute, not a resolution of it.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function StayOfDemandBlog() {
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
                Stay of Demand: How to Apply When You Dispute a Tax Assessment
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 4, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Filing an appeal does not pause recovery automatically; you must separately apply for a <strong>stay of demand under Section 220(6)</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>20% of the disputed demand</strong> is the commonly applied administrative benchmark, but courts have confirmed it is not a mandatory statutory precondition; the Assessing Officer must use independent discretion.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Budget 2026 proposed reducing that benchmark to <strong>10% of core tax demand</strong>, but full operational implementation was still pending confirmation at the time of writing, so verify the current figure before relying on it.</li>
                    <li style={{ marginBottom: 0 }}>File the stay application promptly after the appeal, not later; delay narrows your options if recovery action starts.</li>
                  </ul>
                </div>

                <p>Disputing a tax assessment through an appeal is only half the problem. The demand raised by the Assessing Officer does not stop being recoverable just because you disagree with it and have filed an appeal. Unless you separately apply for and obtain a stay of demand, the department can proceed with recovery, including attaching bank accounts, while your appeal is still pending. This guide covers how that stay application actually works.</p>

                <h2>Why a Stay Is a Separate Step From the Appeal</h2>
                <p>Filing an appeal against an assessment order (typically before the Commissioner (Appeals), often using the process described in our guide to <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices</Link>) challenges the correctness of the demand. It does not, by itself, stop recovery of that demand. <strong>To pause recovery while the appeal is heard, you must apply for a stay of demand under Section 220(6)</strong> of the Income Tax Act, addressed to the Assessing Officer once the appeal is pending. Treat the two as parallel tracks: filing the appeal protects your right to contest the assessment; filing the stay application protects your cash flow and assets while that contest plays out.</p>

                <h2>The 20% Benchmark, and Why It Is Not a Hard Rule</h2>
                <p>In practice, Assessing Officers have commonly treated <strong>20% of the disputed demand</strong> as the amount a taxpayer should deposit to be granted a stay, an approach rooted in administrative instructions rather than the bare text of Section 220(6) itself. Courts, including the Delhi High Court, have repeatedly clarified that this 20% figure is not a mandatory statutory pre-condition. The Assessing Officer is required to exercise independent, case-specific discretion, considering factors such as:</p>
                <ul>
                  <li>Whether the issue in dispute is already covered by a favourable appellate or High Court decision in the taxpayer's own case or a materially similar one.</li>
                  <li>The taxpayer's financial position and genuine hardship in paying even a partial deposit.</li>
                  <li>The strength of the case on the merits as it stands at the time of the application.</li>
                </ul>
                <p>In an appropriate case, a stay can be granted on deposit of less than 20%, in instalments, or on other terms, and a blanket refusal to consider anything below 20% without recorded reasons is itself open to challenge.</p>

                <h2>The Budget 2026 Proposal: 20% to 10%</h2>
                <p>Budget 2026 proposed reducing this administrative benchmark from 20% to 10%, calculated on the core tax demand (excluding interest and penalty components). This was announced as a relief measure aimed at easing the cash-flow burden on taxpayers with a pending dispute. At the time of writing, the exact statutory mechanics and the timeline for full operational rollout were still being finalised across the underlying provisions, so it should be treated as an announced direction rather than a settled figure you can rely on for every case. <strong>Confirm the currently applicable benchmark with your CA, or check the latest CBDT instruction, before assuming either 10% or 20% applies to your specific application.</strong></p>

                <h2>How to Apply for a Stay of Demand</h2>
                <ol>
                  <li><strong>File the appeal first</strong> (or simultaneously), since a stay application only has a live appeal to attach itself to.</li>
                  <li><strong>Submit the stay application to the Assessing Officer</strong> under Section 220(6), setting out the grounds: the merits of the pending appeal, any covered-issue precedent, and financial hardship if relevant. Offer a reasonable, specific deposit percentage or instalment schedule rather than a bare request for a full stay with no terms.</li>
                  <li><strong>Follow up in writing</strong> if there is no response within a reasonable time; recovery action taken without deciding, or without giving reasons for rejecting, a pending stay application is generally treated as improper.</li>
                  <li><strong>Escalate if refused.</strong> If the Assessing Officer rejects the application or sets unreasonable terms, you can approach the jurisdictional Principal Commissioner or Commissioner, and separately, once the matter is before the Income Tax Appellate Tribunal, apply for a stay there.</li>
                  <li><strong>Keep the deposit, if any, distinct from an admission.</strong> Paying a partial amount to secure a stay is a practical step to prevent recovery; it is not a concession on the merits of the appeal itself.</li>
                </ol>

                <h2>What a Stay Does Not Do</h2>
                <p>A stay of demand pauses recovery; it does not decide the dispute. If the appeal is ultimately lost, the demand along with applicable interest becomes payable, and any deposit made is adjusted against it. Think of the stay application as buying time and protecting cash flow while the substantive dispute (which is where the real outcome is decided) proceeds through the appellate system. Businesses managing this alongside a broader tax position may also want to see our guide on <Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>how faceless assessment works</Link>, since most current disputes originate from a faceless assessment order.</p>

                <p>Getting the stay application right, with the correct grounds, a realistic deposit offer, and prompt follow-up, is often what determines whether a genuine dispute stays a manageable process or turns into a recovery crisis. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include appeal drafting and stay of demand representation.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Disputing a tax demand and need a stay?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare and file appeals and stay of demand applications, and represent clients before the Assessing Officer, Commissioner (Appeals), and Tribunal.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20applying%20for%20a%20stay%20of%20demand." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/vivad-se-vishwas-scheme-settling-pending-tax-disputes" style={{ color: 'var(--primary)', fontWeight: 600 }}>Vivad Se Vishwas Scheme: Settling Pending Tax Disputes</Link></li>
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

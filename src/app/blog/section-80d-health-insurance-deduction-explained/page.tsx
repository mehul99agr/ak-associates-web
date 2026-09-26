import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Section 80D: Health Insurance Premium Deduction Explained',
  description: 'Section 80D deduction limits for FY 2026-27: Rs 25,000 for self and family, Rs 50,000 for senior citizens, up to Rs 1 lakh combined, preventive check-up sub-limit, and why it only applies under the old tax regime.',
  keywords: [
    'section 80D deduction limit', 'health insurance premium deduction', '80D senior citizen limit',
    'section 80D old vs new regime', 'preventive health checkup deduction', 'medical insurance tax benefit India',
    '80D deduction FY 2026-27', 'parents health insurance tax deduction',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-80d-health-insurance-deduction-explained' },
  openGraph: {
    title: 'Section 80D: Health Insurance Premium Deduction Explained',
    description: 'Deduction limits for self, family, and parents, the preventive check-up sub-limit, and why 80D only works under the old tax regime.',
    url: 'https://agrawalkhandelwal.com/blog/section-80d-health-insurance-deduction-explained',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 80D Deduction Explained',
    description: 'Rs 25,000/Rs 50,000 limits, parents vs self and family, preventive check-ups, and old vs new regime.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 80D: Health Insurance Premium Deduction Explained', 'section-80d-health-insurance-deduction-explained')

const articleLd = buildArticleLd({
  headline: 'Section 80D: Health Insurance Premium Deduction Explained',
  description: 'Section 80D deduction limits for FY 2026-27 covering self, family, and parents, the senior citizen enhancement, the preventive check-up sub-limit, and applicability only under the old tax regime.',
  datePublished: '2026-07-23',
  slug: 'section-80d-health-insurance-deduction-explained',
})

const faqs: [string, string][] = [
  ['What is the maximum deduction under Section 80D?', 'The maximum possible deduction is Rs 1,00,000 in a year, where both the taxpayer (or spouse) and both parents are senior citizens aged 60 or above: Rs 50,000 for self and family plus Rs 50,000 for parents. Without any senior citizen in the mix, the combined limit is Rs 50,000 (Rs 25,000 each for self/family and parents).'],
  ['Can I claim Section 80D under the new tax regime?', 'No. Section 80D is not available under the default new tax regime (Section 115BAC). It can only be claimed if you opt for the old tax regime while filing your return, so the choice of regime should factor in your total health insurance premium outgo alongside other deductions like 80C and HRA.'],
  ['Is preventive health check-up covered under Section 80D?', 'Yes, up to Rs 5,000 per year for preventive health check-ups is included within the overall Section 80D limit, not over and above it. This sub-limit can be claimed in cash, unlike the premium itself which must be paid through a non-cash mode to qualify.'],
  ['Can I claim 80D for my in-laws or siblings?', 'No. Section 80D covers premiums paid only for self, spouse, dependent children, and parents (whether dependent or not). Premiums paid for in-laws, siblings, or other relatives are not eligible under this section.'],
  ['Does Section 80D cover premium paid in cash?', 'Health insurance premium must be paid through a non-cash mode, such as cheque, bank transfer, UPI, or card, to qualify for deduction; cash payments are disallowed except for the Rs 5,000 preventive check-up sub-limit, which is the one component that can be paid in cash.'],
  ['Is there a Section 80D benefit for a policy with no claim in a year?', 'Section 80D deduction is based on the premium paid, not on whether a claim is made during the year. A policy with zero claims still qualifies for the full premium-based deduction; some insurers separately offer a no-claim bonus that increases the sum insured, which is a different benefit from the tax deduction itself.'],
]

const faqLd = buildFaqLd(faqs)

export default function Section80DBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Income Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Section 80D: Health Insurance Premium Deduction Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 23, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Deduction is <strong>Rs 25,000</strong> for self, spouse and children (<strong>Rs 50,000</strong> if any of them is a senior citizen), plus a separate limit for parents.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Maximum combined deduction is <strong>Rs 1,00,000</strong> when both the taxpayer and the parents include a senior citizen.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A <strong>Rs 5,000 preventive check-up</strong> sub-limit sits inside the overall cap, not on top of it, and is the only part payable in cash.</li>
                  <li style={{ marginBottom: 0 }}>Section 80D is only available if you file under the <strong>old tax regime</strong>; it is not allowed under the default new regime.</li>
                </ul>
              </div>

              <p>Health insurance premium is one of the more straightforward deductions available to individual taxpayers, but the limits change depending on whose premium you are paying and whether anyone covered is a senior citizen. Here is exactly how Section 80D works and how to structure your policies to use the full limit.</p>

              <h2>Section 80D Deduction Limits at a Glance</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Category</th><th style={thStyle}>Deduction Limit</th><th style={thStyle}>Condition</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Self, spouse, dependent children</td><td style={tdStyle}>Rs 25,000</td><td style={tdStyle}>None of the insured is 60 or above</td></tr>
                    <tr><td style={tdAltStyle}>Self, spouse, dependent children</td><td style={tdAltStyle}>Rs 50,000</td><td style={tdAltStyle}>Taxpayer or spouse is a senior citizen</td></tr>
                    <tr><td style={tdStyle}>Parents</td><td style={tdStyle}>Rs 25,000</td><td style={tdStyle}>Neither parent is a senior citizen</td></tr>
                    <tr><td style={tdAltStyle}>Parents</td><td style={tdAltStyle}>Rs 50,000</td><td style={tdAltStyle}>Either parent is a senior citizen (60+)</td></tr>
                    <tr><td style={tdStyle}><strong>Maximum combined</strong></td><td style={tdStyle}><strong>Rs 1,00,000</strong></td><td style={tdStyle}>Taxpayer/spouse and parents both include a senior citizen</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The two limits (self/family and parents) are entirely independent, so a taxpayer paying premium for their own family as well as for senior citizen parents can claim both slabs in the same year without either eating into the other.</p>

              <h2>Who Counts as &quot;Family&quot; Under Section 80D</h2>
              <p>The self/family limit covers the taxpayer, spouse, and dependent children. It does not extend to parents-in-law, siblings, or other relatives. Parents are covered under a separate limit, and unlike children, they do not need to be financially dependent on the taxpayer to qualify; a parent with independent income can still be covered under the taxpayer&apos;s policy for this purpose, as long as the taxpayer is the one paying the premium.</p>

              <h2>The Rs 5,000 Preventive Health Check-up Sub-Limit</h2>
              <p>Within the overall ceiling (Rs 25,000 or Rs 50,000, as applicable), up to Rs 5,000 spent on preventive health check-ups for self, family, or parents can be claimed. This is not an additional amount over and above the main limit; it is carved out of it. For example, a taxpayer under 60 paying Rs 22,000 in premium and Rs 5,000 on check-ups can only claim Rs 25,000 in total, not Rs 27,000.</p>
              <p>The preventive check-up component is also the one exception to the payment-mode rule below: it can be paid in cash and still qualify, while the insurance premium itself cannot.</p>

              <h2>Payment Mode Matters</h2>
              <p>Health insurance premium must be paid through a non-cash mode: cheque, demand draft, net banking, UPI, debit or credit card. Premium paid in cash is not eligible for deduction at all, no exceptions. This is a stricter rule than most other Chapter VI-A deductions and catches out taxpayers who pay small top-up or family floater premiums in cash at an agent&apos;s office.</p>

              <h2>Section 80D Only Works Under the Old Tax Regime</h2>
              <p>This is the detail that trips up the most taxpayers. Section 80D, like most Chapter VI-A deductions, is not available under the default new tax regime. To claim it, you must specifically opt for the old regime while filing your return. Whether that switch is worthwhile depends on your total deductions across 80C, 80D, HRA, and home loan interest; Section 80D alone is rarely a large enough number to justify the old regime, but combined with other eligible deductions it often tips the calculation.</p>

              <h2>A Practical Example</h2>
              <p>Consider a 45-year-old taxpayer with a spouse and two children, paying Rs 20,000 annual premium for a family floater policy, plus Rs 45,000 for a policy covering his 65-year-old parents, and Rs 4,000 on preventive check-ups for the family during the year.</p>
              <ul>
                <li>Self/family: Rs 20,000 premium + Rs 4,000 check-up = Rs 24,000, within the Rs 25,000 limit, so the full Rs 24,000 is deductible.</li>
                <li>Parents: Rs 45,000 premium, within the Rs 50,000 senior citizen limit (since a parent is 60+), so the full Rs 45,000 is deductible.</li>
                <li>Total Section 80D deduction: <strong>Rs 69,000</strong>, available only if he files under the old regime.</li>
              </ul>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li><strong>Paying premium in cash</strong> to save a small processing fee and losing the entire deduction as a result.</li>
                <li><strong>Assuming in-laws are covered</strong> under the parents&apos; limit; they are not, only the taxpayer&apos;s own parents qualify.</li>
                <li><strong>Double-counting preventive check-ups</strong> as an addition to, rather than a component of, the overall limit.</li>
                <li><strong>Claiming 80D under the new regime</strong> by mistake when filing, which gets disallowed on processing.</li>
              </ul>
              <p>If you are weighing the old versus new regime for the year, it helps to lay out all your eligible deductions, including 80D, together before deciding; our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> can help you run that comparison and make sure premium payment records are structured to survive scrutiny.</p>
            </div>

            <PostCTA
            heading="Not sure which tax regime saves you more?"
            description="We compare your old-regime deductions, including Section 80D and 80C, against the new regime slabs before you file."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20deciding%20between%20old%20and%20new%20tax%20regime."
            secondaryExternal
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-from-house-property-self-occupied-let-out" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income From House Property: Self-Occupied vs Let-Out</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/capital-gains-tax-property-sale-residents-ltcg-stcg" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains Tax on Property Sale for Residents</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status Tax Guide for Returning NRIs</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Standard Deduction for Salaried Employees: Current Limits',
  description: 'The standard deduction available to salaried employees and pensioners is Rs 75,000 under the new tax regime and Rs 50,000 under the old regime for FY 2026-27. How it works, who gets it automatically, and how the two regimes compare.',
  keywords: [
    'standard deduction salaried employees', 'standard deduction new tax regime', 'standard deduction old tax regime',
    'standard deduction FY 2026-27', 'standard deduction pensioners', 'standard deduction limit India',
    'section 16 standard deduction', 'old regime vs new regime standard deduction',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/standard-deduction-salaried-employees-limits' },
  openGraph: {
    title: 'Standard Deduction for Salaried Employees: Current Limits',
    description: 'Rs 75,000 under the new regime, Rs 50,000 under the old regime. How the standard deduction works and who gets it automatically.',
    url: 'https://agrawalkhandelwal.com/blog/standard-deduction-salaried-employees-limits',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Standard Deduction for Salaried Employees: Current Limits',
    description: 'Rs 75,000 under the new regime, Rs 50,000 under the old regime for FY 2026-27. No investment or paperwork required.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Standard Deduction for Salaried Employees: Current Limits', 'standard-deduction-salaried-employees-limits')

const articleLd = buildArticleLd({
  headline: 'Standard Deduction for Salaried Employees: Current Limits',
  description: 'The standard deduction for salaried employees and pensioners is Rs 75,000 under the new tax regime and Rs 50,000 under the old regime for FY 2026-27. How it works and who is eligible.',
  datePublished: '2026-08-09',
  slug: 'standard-deduction-salaried-employees-limits',
})

const faqs: [string, string][] = [
  ['What is the standard deduction limit for FY 2026-27?', 'Rs 75,000 for salaried employees and pensioners who opt for the new tax regime, and Rs 50,000 for those who opt for the old tax regime. The higher new-regime figure has applied since FY 2024-25 and continues into FY 2026-27.'],
  ['Do I need to submit any proof or investment to claim the standard deduction?', 'No. It is a flat deduction from gross salary under Section 16, applied automatically by your employer while computing TDS on salary and reflected in your Form 16. No bills, receipts, or investment proof are required, unlike most other deductions.'],
  ['Is the standard deduction available to pensioners?', 'Yes. Pensioners receiving a pension from a former employer are treated the same as salaried employees for this purpose and get the same Rs 75,000 (new regime) or Rs 50,000 (old regime) deduction against their pension income. This is separate from the family pension deduction, which applies to a different category of pension recipients at a different amount.'],
  ['Can I claim the standard deduction under both tax regimes in the same year?', 'No. You choose one regime for the financial year (subject to the switching rules for individuals with business income), and the standard deduction that applies is whichever amount corresponds to the regime you have chosen for that year. You cannot claim Rs 75,000 while filing under the old regime, or vice versa.'],
  ['Does the standard deduction apply to freelancers or business income?', 'No. The standard deduction under Section 16 is available only against salary and pension income. Freelancers and business owners do not get this deduction against their professional or business receipts, though they can claim actual business expenses instead.'],
  ['How does the standard deduction interact with the Section 87A rebate?', 'They work independently but stack together. The standard deduction reduces your taxable salary before slab rates are applied; the Section 156 rebate (formerly Section 87A) then reduces the tax payable to nil for eligible taxpayers under the new regime up to the applicable income threshold. Between the two, many salaried taxpayers under the new regime end up with no tax liability at moderate income levels.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function StandardDeductionBlog() {
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
                Standard Deduction for Salaried Employees: Current Limits
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 3, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>For FY 2026-27, the standard deduction is <strong>Rs 75,000 under the new tax regime</strong> and <strong>Rs 50,000 under the old tax regime</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It applies automatically against salary and pension income under Section 16, with no investment or paperwork required.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The Rs 25,000 gap between the two regimes was widened in Budget 2024 as one of several levers pushing taxpayers toward the new regime.</li>
                    <li style={{ marginBottom: 0 }}>It applies once per employee per year regardless of how many employers you had, and is reflected automatically in Form 16.</li>
                  </ul>
                </div>

                <p>The standard deduction is the one tax break every salaried employee and pensioner gets without lifting a finger. There is no rent receipt to collect, no investment to make, and no proof to submit; it is simply subtracted from your gross salary before your tax is computed. The amount, however, differs depending on which tax regime you have chosen, and it has moved more than once in recent Budgets, so it is worth confirming the current figure rather than relying on what you remember from an earlier year.</p>

                <h2>Current Standard Deduction Limits for FY 2026-27</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Tax Regime</th><th style={thStyle}>Standard Deduction</th><th style={thStyle}>Applies To</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}><strong>New Tax Regime</strong></td><td style={tdStyle}>Rs 75,000</td><td style={tdStyle}>Salaried employees and pensioners</td></tr>
                      <tr><td style={tdAltStyle}><strong>Old Tax Regime</strong></td><td style={tdAltStyle}>Rs 50,000</td><td style={tdAltStyle}>Salaried employees and pensioners</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>The deduction is claimed against salary income and pension income only; it has no application to business income, capital gains, or income from house property. It is a flat amount, not a percentage of salary, so it benefits lower and moderate salary levels proportionally more than very high salaries.</p>

                <h2>How It Works in Practice</h2>
                <p>Your employer applies the standard deduction automatically while computing TDS on your salary each month, based on the regime you have declared for the year (or the default regime, if you have not made a declaration). It shows up as a direct reduction in the "Income under the head Salaries" figure on your Form 16, before any further deductions like Section 80C investments (which apply only under the old regime) are considered. You do not need to submit any document to claim it, and there is no upper income limit beyond which it stops applying.</p>
                <p>If you switch employers during the year, the deduction is available once per financial year, not once per employer. When you file your return and consolidate income from multiple Form 16s, your final computation should reflect only one standard deduction for the year; claiming it against each employer separately is a common and easily-caught filing error.</p>

                <h2>Why the New Regime Figure Is Higher</h2>
                <p>Until FY 2022-23, the standard deduction was Rs 50,000 uniformly across both structures. Budget 2024 raised the new-regime standard deduction to Rs 75,000 while leaving the old-regime figure at Rs 50,000, part of a broader pattern of Budget changes (alongside the widened slabs and the Section 156 rebate threshold) designed to make the new regime more attractive on a standalone basis, without touching the deductions and exemptions still reserved for the old regime.</p>
                <p>This means the two regimes are not directly comparable purely on the standard deduction; the new regime gives you Rs 25,000 more here, but the old regime is where deductions like <Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C investments</Link>, HRA exemption, and home loan interest under Section 24 remain available. Whether the new regime's higher standard deduction and lower slab rates beat the old regime's fuller deduction basket depends entirely on how many of those old-regime deductions you actually use.</p>

                <h2>Pensioners and Family Pension: A Different Rule</h2>
                <p>A pensioner receiving a pension from their own former employer gets the same standard deduction as a salaried employee: Rs 75,000 under the new regime or Rs 50,000 under the old regime. This is distinct from a family pension received by a dependent after the pensioner's death, which is taxed under a different head ("Income from Other Sources") and carries its own, separate and smaller deduction rather than the salary-linked standard deduction. Do not confuse the two when computing tax for a family member receiving a deceased relative's pension.</p>

                <h2>Choosing a Regime: The Standard Deduction Is One Input, Not the Whole Decision</h2>
                <p>Because the standard deduction is one of the few benefits the new regime offers at a higher amount than the old regime, it is sometimes cited as a reason to switch. In practice, it should be weighed alongside everything else you would give up: HRA exemption if you pay rent, the full Section 80C basket, health insurance premium deduction under 80D, home loan interest, and the other deductions covered in <Link href="/blog/tax-saving-investments-beyond-section-80c" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax-saving options beyond Section 80C</Link>. For a salaried employee with significant HRA, an active home loan, and full 80C utilisation, the old regime's larger deduction basket usually outweighs the new regime's higher standard deduction and lower slabs; for someone with minimal deductions, the new regime is usually the better default.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The standard deduction provision (Section 16 under the old Act) and the Section 87A rebate (now Section 156) have both been renumbered under the Income Tax Act 2025. The Section 156 mapping for the rebate is confirmed; the exact new-Act reference for the standard deduction clause itself was not confidently confirmed at the time of writing, so this guide refers to it by its familiar old-Act name. Confirm the current citation with your CA before quoting it formally.</p>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure which regime saves you more tax?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help salaried individuals compare their actual old-regime deductions against the new regime's flat structure and file under whichever genuinely lowers their tax.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/tax-calculator" className="btn btn-outline">Try Our Tax Calculator</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-saving-investments-beyond-section-80c" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Saving Investments Beyond Section 80C</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C Deductions: Eligible Investments</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>Deciphering the New Income Tax Act &amp; Rules 2025</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/tax-calculator" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Calculator</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

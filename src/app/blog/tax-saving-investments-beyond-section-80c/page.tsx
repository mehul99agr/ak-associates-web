import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Tax Saving Investment Options Beyond Section 80C',
  description: 'Once your Rs 1.5 lakh Section 80C limit is used up, NPS under 80CCD(1B), health insurance under 80D, home loan interest under Section 24, education loan interest under 80E, and donations under 80G can lower your old-regime tax further.',
  keywords: [
    'tax saving beyond 80C', 'section 80CCD(1B) NPS deduction', 'section 24 home loan interest deduction',
    'section 80E education loan interest', 'section 80G donation deduction', 'tax saving options old regime',
    'additional NPS deduction 50000', 'income tax deductions beyond 80C',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tax-saving-investments-beyond-section-80c' },
  openGraph: {
    title: 'Tax Saving Investment Options Beyond Section 80C',
    description: 'NPS, health insurance, home loan interest, education loan interest, and donations: five deductions that keep working after your Section 80C limit is exhausted.',
    url: 'https://agrawalkhandelwal.com/blog/tax-saving-investments-beyond-section-80c',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Saving Investment Options Beyond Section 80C',
    description: 'NPS (80CCD(1B)), health insurance (80D), home loan interest (Section 24), education loan interest (80E), and donations (80G) explained.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Tax Saving Investment Options Beyond Section 80C', 'tax-saving-investments-beyond-section-80c')

const articleLd = buildArticleLd({
  headline: 'Tax Saving Investment Options Beyond Section 80C',
  description: 'Five deductions available under the old tax regime after the Rs 1.5 lakh Section 80C limit is exhausted: NPS under 80CCD(1B), health insurance under 80D, home loan interest under Section 24, education loan interest under 80E, and donations under 80G.',
  datePublished: '2026-10-04',
  slug: 'tax-saving-investments-beyond-section-80c',
})

const faqs: [string, string][] = [
  ['What tax deductions are available after Section 80C is exhausted?', 'The most significant ones under the old regime are the additional Rs 50,000 NPS deduction under Section 80CCD(1B), health insurance premium under Section 80D, home loan interest on a self-occupied or let-out property under Section 24, education loan interest under Section 80E with no upper cap, and donations to eligible funds and institutions under Section 80G.'],
  ['Are these deductions available under the new tax regime?', 'Mostly no. Section 24 interest on a self-occupied property, Section 80D, Section 80CCD(1B), 80E, and 80G are all old-regime-only deductions. The one exception is employer contribution to NPS under Section 80CCD(2), which remains available under the new regime up to 14% of salary for most employees. If you rely heavily on these deductions, the old regime is usually the better fit; run both regimes through your CA before choosing.'],
  ['How much extra can I save through the NPS additional deduction?', 'Section 80CCD(1B) allows a further Rs 50,000 deduction for your own NPS contribution, over and above the Rs 1.5 lakh Section 80C ceiling. It is a distinct deduction, not part of the 80C basket, so someone who has already used the full Rs 1.5 lakh under 80C through PPF, ELSS, or life insurance can still claim this additional amount by investing in NPS.'],
  ['Is there a limit on education loan interest deduction under Section 80E?', 'No. Section 80E allows a deduction for the entire interest paid on an education loan in a financial year with no maximum rupee cap, for up to 8 consecutive years starting from the year repayment begins, or until the interest is fully repaid, whichever is earlier. The loan must be from a bank, notified financial institution, or approved charitable institution; loans from relatives or friends do not qualify.'],
  ['How much home loan interest can I deduct under Section 24?', 'Up to Rs 2 lakh a year for a self-occupied property, available only under the old regime. For a let-out property, the full interest paid is deductible against rental income with no upper cap, though the resulting loss that can be set off against other income in a year is capped, with the balance carried forward.'],
  ['Do all donations under Section 80G get a 100% deduction?', 'No. The percentage depends on the specific fund or institution: some notified funds qualify for a 100% deduction without any income-based ceiling, others for a 100% or 50% deduction subject to a ceiling of 10% of adjusted gross total income. Always confirm the applicable category and collect the donee&apos;s 80G registration details and receipt before claiming.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function BeyondSection80cBlog() {
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
                Tax Saving Investment Options Beyond Section 80C
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 4, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Once the Rs 1.5 lakh Section 80C limit is used, <strong>NPS under 80CCD(1B)</strong> adds another Rs 50,000 deduction on top.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Health insurance (80D), home loan interest (Section 24), education loan interest (80E), and donations (80G)</strong> are all separate, uncapped-or-large deductions that stack independently of 80C.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Nearly all of these are <strong>old-regime-only</strong>; the new regime's flat structure does not recognise most of them, so your regime choice should account for how many you actually use.</li>
                    <li style={{ marginBottom: 0 }}>None of these require exotic products; PPF, ELSS, and insurance already covered under 80C are separate from what is discussed here.</li>
                  </ul>
                </div>

                <p>Most taxpayers stop tax planning the moment they hit the Rs 1.5 lakh ceiling under <Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C</Link>, treating it as the full extent of what the old regime offers. It is not. Several other deductions operate entirely independently of the 80C basket and, for many salaried and self-employed taxpayers, add up to a meaningfully larger reduction in taxable income than 80C alone. This guide covers the five most useful ones: NPS, health insurance, home loan interest, education loan interest, and donations.</p>

                <h2>Quick Reference: Deductions Beyond 80C</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Deduction</th><th style={thStyle}>Section</th><th style={thStyle}>Broad Limit</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>NPS (own contribution, additional)</td><td style={tdStyle}>80CCD(1B)</td><td style={tdStyle}>Up to Rs 50,000</td></tr>
                      <tr><td style={tdAltStyle}>Health insurance premium</td><td style={tdAltStyle}>80D</td><td style={tdAltStyle}>Rs 25,000-1,00,000 depending on age/family</td></tr>
                      <tr><td style={tdStyle}>Home loan interest, self-occupied</td><td style={tdStyle}>Section 24</td><td style={tdStyle}>Up to Rs 2 lakh</td></tr>
                      <tr><td style={tdAltStyle}>Education loan interest</td><td style={tdAltStyle}>80E</td><td style={tdAltStyle}>No cap, 8 years</td></tr>
                      <tr><td style={tdStyle}>Donations to eligible funds/institutions</td><td style={tdStyle}>80G</td><td style={tdStyle}>50% or 100%, some capped at 10% of adjusted GTI</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>All five are available only under the <strong>old tax regime</strong>, with the narrow exception of employer NPS contribution under a related but different provision noted below.</p>

                <h2>NPS: The Additional Rs 50,000 Under Section 80CCD(1B)</h2>
                <p>This is the most direct extension of 80C. Once you have exhausted the Rs 1.5 lakh 80C ceiling through PPF, ELSS, life insurance premium, or other eligible instruments, Section 80CCD(1B) lets you claim a further deduction of up to Rs 50,000 for your own contribution to the National Pension System, taking the combined ceiling effectively to Rs 2 lakh. This is a personal contribution deduction and is separate from employer contribution to your NPS account, which is dealt with under Section 80CCD(2) and, notably, remains available even under the new regime up to 14% of salary for most employees (10% for certain categories), with no monetary ceiling stated in absolute terms. If your employer already offers an NPS contribution structure, check whether you are using both the 80CCD(1B) personal-contribution deduction and the separate 80CCD(2) employer-contribution benefit; many salaried employees use only one.</p>

                <h2>Health Insurance Premium Under Section 80D</h2>
                <p>Section 80D allows a deduction for health insurance premium paid for yourself, your spouse, and dependent children, with a separate additional deduction for premium paid for parents. The exact ceiling depends on whether the insured persons are senior citizens, and a smaller amount within the overall limit can be claimed for preventive health check-ups. This deduction is entirely separate from 80C and from the NPS deduction above, and is one of the few in this list that most taxpayers already have some exposure to through an existing family floater policy, even if they are not claiming it correctly. For the full premium slabs by age category and how parents' premium is treated separately, see our detailed guide: <Link href="/blog/section-80d-health-insurance-deduction-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80D: Health Insurance Deduction Explained</Link>.</p>

                <h2>Home Loan Interest Under Section 24</h2>
                <p>If you have a home loan, the interest component (not the principal, which falls under 80C) is deductible under Section 24. For a self-occupied property, this is capped at Rs 2 lakh a year. For a property that is let out, the entire interest paid is deductible against the rental income with no upper cap on the interest itself, though the resulting loss that can be set off against your other income in the same year is subject to a separate cap, with any excess carried forward to future years. This is frequently the single largest deduction available to a salaried taxpayer with an active home loan, larger than 80C, 80D, and 80CCD(1B) combined in the early years of a loan when interest forms the bulk of the EMI.</p>

                <h2>Education Loan Interest Under Section 80E</h2>
                <p>Section 80E deducts the entire interest paid on an education loan taken for higher education, for yourself, your spouse, your children, or a student for whom you are the legal guardian, with no maximum rupee limit. The deduction is available for up to 8 consecutive assessment years starting from the year repayment begins, or until the interest is fully repaid, whichever comes first. The loan must be taken from a scheduled bank, a notified financial institution, or an approved charitable institution; interest on a loan from a relative or a private lender does not qualify, regardless of how genuine the loan is. Given the size of education loans for study abroad in particular, this deduction can be substantial in the years immediately after a large loan is taken.</p>

                <h2>Donations Under Section 80G</h2>
                <p>Donations to eligible charitable institutions, relief funds, and specified government funds qualify for a deduction under Section 80G, at either 50% or 100% of the donated amount depending on the specific fund or institution, and in some cases subject to a ceiling of 10% of your adjusted gross total income. A handful of specified national funds allow a 100% deduction with no income-based ceiling at all; most other approved institutions fall into the capped categories. Always collect the donee's valid 80G registration number and a proper receipt at the time of donation; a deduction claimed without documentary proof from a properly registered institution is one of the more common items flagged during return processing.</p>

                <h2>Putting It Together: Old Regime vs New Regime</h2>
                <p>Every deduction in this guide, except employer NPS contribution under 80CCD(2), is unavailable under the new tax regime. If you have an active home loan on a self-occupied property, pay a meaningful health insurance premium, and use the 80CCD(1B) NPS window, the combined old-regime deductions can comfortably exceed the new regime's higher <Link href="/blog/standard-deduction-salaried-employees-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>standard deduction</Link> and lower slab rates. If you have none of these, the new regime is usually simpler and cheaper. This is a calculation worth doing every year rather than assuming last year's answer still holds, since your loan balance, insurance renewal, and NPS contributions all change the numbers annually.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Section 80G has been renumbered as Section 133 under the Income Tax Act 2025. Sections 80CCD(1B), Section 24 (home loan interest), and 80E have also been renumbered under the new Act; the exact new-Act references for these three were not confidently confirmed at the time of writing, so this guide uses the familiar old-Act names throughout. Confirm the current citation with your CA before quoting any of them formally.</p>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Want a full picture of your available deductions?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help individuals map every deduction they are actually eligible for, old regime and new, before filing, so nothing gets left unclaimed.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/tax-calculator" className="btn btn-outline">Try Our Tax Calculator</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C Deductions: Eligible Investments</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80d-health-insurance-deduction-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80D: Health Insurance Deduction Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/standard-deduction-salaried-employees-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>Standard Deduction for Salaried Employees</Link></li>
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

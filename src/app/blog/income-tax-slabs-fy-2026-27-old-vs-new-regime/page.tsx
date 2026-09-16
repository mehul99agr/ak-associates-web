import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Income Tax Slabs FY 2026-27: Old vs New Regime',
  description: 'Income tax slab rates for FY 2026-27 (AY 2027-28) under the old and new tax regimes, the Section 87A rebate, standard deduction, and a practical framework for choosing between them.',
  keywords: [
    'income tax slabs FY 2026-27', 'old regime vs new regime FY 2026-27', 'new tax regime slabs 2026',
    'income tax rebate 87A FY 2026-27', 'income tax calculator FY 2026-27', 'which tax regime is better',
    'old tax regime deductions', 'AY 2027-28 tax slabs',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime' },
  openGraph: {
    title: 'Income Tax Slabs FY 2026-27: Old vs New Regime',
    description: 'Slab-by-slab comparison of the old and new tax regimes for FY 2026-27, plus a framework for deciding which one saves you more.',
    url: 'https://agrawalkhandelwal.com/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax Slabs FY 2026-27: Old vs New Regime',
    description: 'Old regime vs new regime slab rates for FY 2026-27, and how to pick the one that suits you.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax Slabs FY 2026-27: Old vs New Regime', 'income-tax-slabs-fy-2026-27-old-vs-new-regime')

const articleLd = buildArticleLd({
  headline: 'Income Tax Slabs FY 2026-27: Old vs New Regime',
  description: 'Income tax slab rates for FY 2026-27 under the old and new tax regimes, the Section 87A rebate and standard deduction, and a decision framework for choosing between the two.',
  datePublished: '2026-09-22',
  slug: 'income-tax-slabs-fy-2026-27-old-vs-new-regime',
})

const faqs: [string, string][] = [
  [
    'Have the tax slabs changed for FY 2026-27?',
    'No. Budget 2026 did not revise the slab rates or basic exemption limits announced the previous year, so the new regime slabs and the Section 87A rebate that applied for FY 2025-26 continue unchanged into FY 2026-27. The old regime slabs have also stayed the same for several years now.',
  ],
  [
    'Which regime is better, old or new?',
    'It depends entirely on how much you claim in deductions. If your eligible deductions (80C, home loan interest, HRA, 80D, etc.) are modest, the new regime\'s lower rates usually win. If you have a large home loan, substantial 80C investments, and HRA, the old regime can still come out ahead. The only reliable way to know is to compute tax both ways on your actual numbers.',
  ],
  [
    'Is the new tax regime the default now?',
    'Yes. The new regime is the default regime for all taxpayers. Salaried individuals and pensioners can switch to the old regime every year simply by selecting it while filing their return; those with business or professional income have a more restricted ability to switch back once they have opted out of the new regime.',
  ],
  [
    'Up to what income is tax nil under the new regime for FY 2026-27?',
    'With the Section 87A rebate of up to Rs 60,000 available on taxable income up to Rs 12 lakh, tax works out to nil for a taxpayer with taxable income at or below that level under the new regime. For a salaried individual, the Rs 75,000 standard deduction pushes the effective tax-free gross salary higher, to around Rs 12.75 lakh.',
  ],
  [
    'Can I still claim HRA and 80C deductions under the new regime?',
    'No, most common deductions and exemptions, including 80C, HRA, and home loan interest on a self-occupied property, are not available under the new regime. A limited set of exceptions apply, such as the employer\'s NPS contribution and the standard deduction for salaried taxpayers and pensioners.',
  ],
  [
    'Do senior citizens get a higher exemption limit under the new regime?',
    'No, the new regime\'s slab structure is age-neutral; the higher basic exemption for senior and super senior citizens (Rs 3 lakh and Rs 5 lakh respectively) is a feature of the old regime only. Senior citizens with substantial deductions should compute both regimes before deciding.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function IncomeTaxSlabsFY202627Blog() {
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
                Income Tax Slabs FY 2026-27: Old Regime vs New Regime Comparison
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 22, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Slab rates for FY 2026-27 are unchanged from FY 2025-26 under both regimes; Budget 2026 made no rate revision.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Under the new regime, taxable income up to <strong>Rs 12 lakh</strong> is effectively tax-free via the Section 87A rebate (up to Rs 60,000); salaried taxpayers get this benefit up to roughly <strong>Rs 12.75 lakh</strong> gross salary after the Rs 75,000 standard deduction.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The new regime is the <strong>default</strong>; salaried individuals can switch to the old regime each year at the time of filing.</li>
                    <li style={{ marginBottom: 0 }}>The right regime depends on how much you actually claim in deductions; there is no universal answer, only a calculation specific to your numbers.</li>
                  </ul>
                </div>

                <p>The slab structure itself hasn&apos;t changed for FY 2026-27, but a surprising number of taxpayers are still filing under the wrong regime for their situation, simply because they defaulted into whichever one auto-populated on the portal. If you want the conceptual background on how the new regime works and why it was introduced, see our earlier guide on the <Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>new tax regime</Link>. This post focuses on the current FY 2026-27 numbers and a practical way to decide between the two.</p>

                <h2>New Tax Regime Slabs for FY 2026-27</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Taxable Income</th>
                      <th style={thStyle}>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>Up to Rs 4,00,000</td><td style={tdStyle}>Nil</td></tr>
                    <tr><td style={tdAltStyle}>Rs 4,00,001 - Rs 8,00,000</td><td style={tdAltStyle}>5%</td></tr>
                    <tr><td style={tdStyle}>Rs 8,00,001 - Rs 12,00,000</td><td style={tdStyle}>10%</td></tr>
                    <tr><td style={tdAltStyle}>Rs 12,00,001 - Rs 16,00,000</td><td style={tdAltStyle}>15%</td></tr>
                    <tr><td style={tdStyle}>Rs 16,00,001 - Rs 20,00,000</td><td style={tdStyle}>20%</td></tr>
                    <tr><td style={tdAltStyle}>Rs 20,00,001 - Rs 24,00,000</td><td style={tdAltStyle}>25%</td></tr>
                    <tr><td style={tdStyle}>Above Rs 24,00,000</td><td style={tdStyle}>30%</td></tr>
                  </tbody>
                </table>
                <p>Add applicable cess (4% Health and Education Cess) and surcharge for higher incomes. The Section 87A rebate wipes out tax liability entirely for taxable income up to Rs 12 lakh under this regime, and salaried individuals or pensioners get a flat <strong>Rs 75,000 standard deduction</strong>, which pushes the effective tax-free gross salary to roughly Rs 12.75 lakh.</p>

                <h2>Old Tax Regime Slabs for FY 2026-27</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Taxable Income</th>
                      <th style={thStyle}>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>Up to Rs 2,50,000</td><td style={tdStyle}>Nil</td></tr>
                    <tr><td style={tdAltStyle}>Rs 2,50,001 - Rs 5,00,000</td><td style={tdAltStyle}>5%</td></tr>
                    <tr><td style={tdStyle}>Rs 5,00,001 - Rs 10,00,000</td><td style={tdStyle}>20%</td></tr>
                    <tr><td style={tdAltStyle}>Above Rs 10,00,000</td><td style={tdAltStyle}>30%</td></tr>
                  </tbody>
                </table>
                <p>Senior citizens (60 to 80 years) get a higher basic exemption of Rs 3 lakh under the old regime, and super senior citizens (above 80 years) get Rs 5 lakh; the new regime&apos;s slabs are age-neutral and don&apos;t offer this. The old regime is where the familiar deductions live: Section 80C (up to Rs 1.5 lakh), home loan interest under Section 24(b), HRA exemption, 80D health insurance premium, and dozens of other provisions that the new regime largely strips out.</p>

                <h2>Old vs New: Side-by-Side Decision Framework</h2>
                <p>There is no single answer that fits everyone; the decision comes down to how much of your income is shielded by deductions you can genuinely claim. As a practical starting framework:</p>
                <ul>
                  <li><strong>Choose the new regime if:</strong> you have minimal deductions, no home loan, rent-free or company-provided accommodation, or you are early in your career with limited 80C investments. The lower rates and higher effective tax-free threshold usually win outright.</li>
                  <li><strong>Choose the old regime if:</strong> you have a home loan on a self-occupied property generating meaningful interest deduction, you pay significant rent and claim HRA, you max out 80C through PF/ELSS/life insurance, and you have health insurance premiums and other itemised deductions that collectively exceed roughly Rs 4 to 5 lakh.</li>
                  <li><strong>Run both calculations if you are close to the line.</strong> The crossover point depends heavily on individual circumstances (rent paid, city of residence for HRA, loan interest amount), so there is no fixed income level at which one regime universally wins.</li>
                </ul>
                <p>Business and professional taxpayers should note that once they opt out of the new regime, their ability to switch back in future years is more restricted than for salaried individuals, who can choose afresh every year at the time of filing. This is worth factoring in before making a one-time exit from the new regime if your income mix might change.</p>

                <h2>A Worked Comparison</h2>
                <p>Consider a salaried individual with a Rs 15 lakh gross salary, a home loan with Rs 2 lakh annual interest, Rs 1.5 lakh in 80C investments, and Rs 25,000 in 80D premium. Under the old regime, after the standard deduction and these itemised deductions, taxable income comes down meaningfully, and the tax computed at old-regime slab rates on that lower base may work out close to, or even below, what the new regime charges on the higher unadjusted base despite its lower rates. This is exactly the kind of case that needs an actual calculation rather than a rule of thumb; a taxpayer with the same salary but no home loan and minimal 80C would land squarely in new-regime territory.</p>

                <h2>What Hasn&apos;t Changed</h2>
                <p>It is worth being explicit that Budget 2026 left both slab structures untouched from the prior year. If you were filing under a particular regime for FY 2025-26 and your income situation is largely similar this year, the same regime is likely to remain optimal, though it is still worth re-checking if your deduction profile has changed; for example, a new home loan, a marriage, or a jump in salary that changes which slab you land in.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure which regime saves you more?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We run both calculations against your actual income, deductions, and investments before you file, so the choice is based on numbers, not guesswork.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>Understanding the New Tax Regime (FY 2025-26)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/how-to-file-itr-online-salaried-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>How to File ITR Online: Step-by-Step Guide for Salaried Individuals</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/which-itr-form-to-file-itr1-itr2-itr3-itr4" style={{ color: 'var(--primary)', fontWeight: 600 }}>Which ITR Form Should You File?</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>Deciphering the New Income Tax Act &amp; Rules 2025</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

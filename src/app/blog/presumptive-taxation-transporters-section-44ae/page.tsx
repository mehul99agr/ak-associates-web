import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Presumptive Taxation for Transporters: Section 44AE',
  description: 'Section 44AE lets goods-vehicle owners with up to 10 vehicles declare deemed income per vehicle per month instead of maintaining books. Rates, eligibility, and Section 58 renumbering explained.',
  keywords: [
    'section 44AE', 'presumptive taxation transporters', '44AE income tax',
    'goods vehicle presumptive taxation', 'section 44AE rate per vehicle',
    'heavy goods vehicle income tax', '44AE eligibility 10 vehicles', 'transporter tax scheme India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/presumptive-taxation-transporters-section-44ae' },
  openGraph: {
    title: 'Presumptive Taxation for Transporters: Section 44AE',
    description: 'Deemed income per vehicle per month for goods-vehicle owners with up to 10 vehicles; rates, eligibility, and the new Income Tax Act 2025 section number.',
    url: 'https://agrawalkhandelwal.com/blog/presumptive-taxation-transporters-section-44ae',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 44AE: Presumptive Taxation for Transporters',
    description: 'Rs 7,500/month or Rs 1,000/tonne deemed income for goods vehicle owners; eligibility, computation, and Section 58 renumbering.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Presumptive Taxation for Transporters: Section 44AE', 'presumptive-taxation-transporters-section-44ae')

const articleLd = buildArticleLd({
  headline: 'Presumptive Taxation for Transporters: Section 44AE',
  description: 'How Section 44AE deemed income works for owners of up to 10 goods vehicles, per-vehicle monthly rates for heavy and other goods vehicles, and the Income Tax Act 2025 renumbering to Section 58.',
  datePublished: '2026-08-03',
  slug: 'presumptive-taxation-transporters-section-44ae',
})

const faqs: [string, string][] = [
  ['Who is eligible for presumptive taxation under Section 44AE?', 'Any resident individual, HUF, firm, or company that owns, leases, or hires goods carriages and does not own more than 10 goods vehicles at any time during the year is eligible. There is no requirement to be in the transport business exclusively; a business that owns a few goods vehicles alongside other operations can still apply Section 44AE to that vehicle income.'],
  ['What is the deemed income under Section 44AE?', 'For a heavy goods vehicle (gross vehicle weight above 12,000 kg), deemed income is Rs 1,000 per tonne of gross vehicle weight per month. For any other goods vehicle, deemed income is a flat Rs 7,500 per month. Any part of a month during which the vehicle is owned counts as a full month for computation.'],
  ['Can a transporter declare lower profit than the Section 44AE rate?', 'Yes, but only by maintaining regular books of account under Section 44AA and getting them audited under Section 44AB (now Section 63) if the declared income is below the presumptive rate and total income exceeds the basic exemption limit. Simply declaring a lower number without books and audit is not permitted.'],
  ['What happens if a transporter owns more than 10 goods vehicles?', 'Section 44AE ceases to apply once the number of goods vehicles owned exceeds 10 at any point during the year. The taxpayer then falls outside this presumptive scheme entirely for that year and must compute income under the normal provisions, maintaining books of account and getting them audited if turnover or income thresholds under Section 44AB (now Section 63) are triggered.'],
  ['Is GST registration required for a transporter under Section 44AE?', 'GST registration depends on GST turnover thresholds and the nature of transport services, not on whether income tax is computed under Section 44AE. Goods transport agencies have separate GST rules, including reverse charge options, so Section 44AE eligibility for income tax does not by itself decide the GST position.'],
  ['Can a transporter claim depreciation separately under Section 44AE?', 'No. The deemed income under Section 44AE is treated as already computed after allowing all deductions, including depreciation, under the Act. WDV of the vehicle is still deemed to have been allowed for the purpose of computing written down value in later years, but no separate depreciation deduction can be claimed in the year Section 44AE is applied.'],
]

const faqLd = buildFaqLd(faqs)

export default function PresumptiveTransportersBlog() {
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
                Presumptive Taxation for Transporters: Section 44AE Explained
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 3, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Owners of up to <strong>10 goods vehicles</strong> can declare deemed income per vehicle per month instead of maintaining full books.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Rs 1,000 per tonne per month</strong> for heavy goods vehicles (above 12,000 kg gross weight); <strong>Rs 7,500 per month</strong> flat for any other goods vehicle.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Any part of a month counts as a full month, and the 10-vehicle cap is tested at any point during the year, not just at year-end.</li>
                    <li style={{ marginBottom: 0 }}>Section 44AE is now <strong>Section 58</strong> under the Income Tax Act 2025, the same section that houses the 44AD/44ADA turnover-based presumptive schemes, though the transporter mechanics remain distinct per-vehicle rules.</li>
                  </ul>
                </div>

                <p>Owners of goods vehicles, whether individuals running a small fleet or a firm that owns a handful of trucks alongside other business activity, often find that maintaining detailed books of account for a transport operation is disproportionate to its size. Section 44AE exists for exactly this situation: it lets an eligible owner declare a fixed deemed income per vehicle per month and skip full-scale bookkeeping and audit, provided the vehicle count stays within the prescribed cap.</p>

                <h2>Who Can Use Section 44AE</h2>
                <p>The scheme is available to any resident individual, HUF, partnership firm, or company engaged in the business of plying, hiring, or leasing goods carriages, provided the taxpayer does not own more than <strong>10 goods vehicles</strong> at any time during the previous year. &quot;Owns&quot; includes vehicles held on hire purchase or an installment purchase agreement where the buyer has possession, even if full ownership has not legally transferred. There is no requirement that transport be the taxpayer&apos;s only business; a manufacturer that also owns a few delivery trucks can apply Section 44AE to the income from those vehicles specifically.</p>

                <h2>Deemed Income: The Per-Vehicle Rates</h2>
                <p>The deemed income depends on whether a vehicle qualifies as a heavy goods vehicle:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Vehicle Type</th><th style={thStyle}>Deemed Income</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Heavy goods vehicle (gross vehicle weight above 12,000 kg)</td><td style={tdStyle}>Rs 1,000 per tonne of gross vehicle weight per month, or part of a month</td></tr>
                      <tr><td style={tdAltStyle}>Any other goods vehicle (gross vehicle weight up to 12,000 kg)</td><td style={tdAltStyle}>Rs 7,500 per month, or part of a month, per vehicle</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Note that any part of a month for which the taxpayer owns the vehicle is treated as a full month for this computation; there is no daily proration. If a heavy vehicle with a gross weight of 16 tonnes is owned for 5 months of the year, the deemed income for that vehicle alone works out to 16 x Rs 1,000 x 5 = Rs 80,000 for the year. Total presumptive income is simply the sum of the deemed income across all vehicles owned during the year, computed month by month for each vehicle based on how long it was held.</p>

                <h2>The 10-Vehicle Cap Is Tested Throughout the Year</h2>
                <p>Eligibility depends on not owning more than 10 goods vehicles <strong>at any time</strong> during the previous year, not merely at the start or the close of the year. A taxpayer who owned 8 vehicles for most of the year but briefly held 12 vehicles for two months (before selling 4) falls outside Section 44AE eligibility for that entire year, because the cap was breached at some point, even temporarily. This is a common oversight when a fleet is expanded and then scaled back within the same financial year; the test is a point-in-time count, not an average or a year-end snapshot.</p>

                <h2>Declaring Lower Income Than the Presumptive Rate</h2>
                <p>A taxpayer can declare income lower than the Section 44AE deemed rate if actual profits are genuinely lower, but this requires maintaining regular books of account under Section 44AA and, where total income exceeds the basic exemption limit, getting those books audited under <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44AB</Link> (now Section 63 under the Income Tax Act 2025). Declaring a number below the deemed rate without the supporting books and audit is not a valid option; the presumptive scheme is meant to be an alternative to bookkeeping, not a ceiling that can be undercut informally.</p>

                <h2>No Separate Deductions, Including Depreciation</h2>
                <p>The deemed income figure is treated as arrived at after allowing all deductions otherwise permissible under the Act, including depreciation, interest paid to partners (for a firm), and remuneration to partners within specified limits (which can still be claimed by a firm from the Section 44AE income, subject to the usual conditions). What cannot be done is claiming a separate depreciation deduction on top of the deemed income; however, for the purpose of computing written down value in a later year (for instance, if the taxpayer opts out of Section 44AE), depreciation is deemed to have already been allowed during the years the presumptive scheme was used.</p>

                <h2>Advance Tax and Compliance</h2>
                <p>Taxpayers opting for Section 44AE must still pay advance tax based on the deemed income if the total tax liability for the year exceeds the prescribed threshold, and must file their income tax return declaring this income under the presumptive head. Because Section 44AE removes the need for detailed books, it also reduces compliance overhead considerably compared to the normal provisions, but GST registration and returns, where applicable to the transport business, remain a separate and unaffected compliance track.</p>

                <h2>Section 44AE Under the Income Tax Act 2025</h2>
                <p>Under the Income Tax Act 2025, the presumptive taxation provisions have been consolidated into <strong>Section 58</strong>, which also houses the turnover-based presumptive schemes for small businesses and professionals (formerly Sections 44AD and 44ADA). The transporter-specific per-vehicle mechanics described above continue to apply as a distinct sub-provision within Section 58; the underlying rates, the 10-vehicle cap, and the heavy-vehicle vs other-vehicle distinction have not changed, only the section number housing them.</p>

                <h2>A Worked Example</h2>
                <p>A firm owns 6 goods vehicles through the full financial year: 2 heavy goods vehicles at 14 tonnes gross weight each, and 4 other goods vehicles. The heavy vehicles generate 2 x (14 x Rs 1,000 x 12) = Rs 3,36,000. The other vehicles generate 4 x (Rs 7,500 x 12) = Rs 3,60,000. Total presumptive income for the year is Rs 6,96,000, declared without maintaining detailed transport-wise books, subject to the firm separately claiming partner remuneration and interest within the limits the Act allows on a firm&apos;s presumptive income.</p>
              </div>

              <PostCTA
            heading="Running a transport or logistics fleet?"
            description="We help transport operators evaluate Section 44AE eligibility, compute presumptive income correctly, and decide when regular books and audit make more sense."
            secondaryLabel="Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-salary-section-192-form-24q" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Salary: Section 192 &amp; Form 24Q Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-rent-section-194ib-tenants-deduct" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Rent Under Section 194-IB</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-process-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration Process in India</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

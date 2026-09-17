import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Perquisites & Fringe Benefits Taxation for Employees',
  description: 'How rent-free accommodation, company cars, and other perquisites are valued and taxed for employees in India, including the revised Rule 3/Rule 15 valuation figures effective April 2026.',
  keywords: [
    'perquisites taxation India', 'fringe benefits tax employees', 'rent free accommodation perquisite value',
    'motor car perquisite valuation', 'section 17(2) perquisites', 'perquisite valuation rules 2026',
    'taxable perquisites salary', 'company car tax employee',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/perquisites-and-fringe-benefits-taxation-for-employees' },
  openGraph: {
    title: 'Perquisites & Fringe Benefits Taxation for Employees',
    description: 'How rent-free accommodation, company cars, and other perquisites are valued and taxed, including the revised April 2026 valuation figures.',
    url: 'https://agrawalkhandelwal.com/blog/perquisites-and-fringe-benefits-taxation-for-employees',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perquisites & Fringe Benefits Taxation for Employees',
    description: 'Rent-free accommodation, company car and other perquisite valuation rules employees and employers should know.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Perquisites & Fringe Benefits Taxation for Employees', 'perquisites-and-fringe-benefits-taxation-for-employees')

const articleLd = buildArticleLd({
  headline: 'Perquisites & Fringe Benefits Taxation for Employees',
  description: 'Valuation and taxability of rent-free accommodation, company cars, and other common perquisites under Section 17(2) and Rule 3, including the revised valuation figures effective April 1, 2026.',
  datePublished: '2026-11-25',
  slug: 'perquisites-and-fringe-benefits-taxation-for-employees',
})

const faqs: [string, string][] = [
  ['What is a perquisite under income tax law?', 'A perquisite is any benefit or amenity, in cash or kind, that an employer provides to an employee in addition to salary, such as rent-free accommodation, a company car, or subsidised loans. Perquisites are taxable under the head "Salaries" under Section 17(2), valued as per Rule 3 (now Rule 15 under the Income Tax Rules, 2026 that took effect April 1, 2026), and added to the employee\'s salary income before computing tax.'],
  ['How is rent-free accommodation valued from April 1, 2026?', 'Under the revised Rule 15 valuation effective April 1, 2026, employer-owned rent-free accommodation is valued at 10% of salary in cities with population above 40 lakh (down from the earlier 15%), 7.5% of salary in cities with population between 15 and 40 lakh, and a lower percentage for smaller towns. If the employer leases the accommodation instead of owning it, the perquisite value is the lower of the actual lease rent paid and the applicable percentage of salary.'],
  ['Has the company car perquisite value increased?', 'Yes, materially. The flat monthly valuation for an employer-owned car used for both official and personal purposes, where the employer meets running and maintenance expenses, has been revised upward: for cars with engine capacity up to 1.6 litres it moved from Rs 1,800 to Rs 5,000 per month, and for cars exceeding 1.6 litres from Rs 2,400 to Rs 7,000 per month, with an additional Rs 3,000 per month if a chauffeur is provided (up from Rs 900). This is a near three-times increase in taxable perquisite value for the same benefit.'],
  ['Are all employer-provided benefits taxable perquisites?', 'No. Certain benefits are specifically exempt or valued at a concessional or nil rate, such as medical treatment at employer-run or government-approved hospitals for specified illnesses, telephone and internet reimbursement for official use, refreshments provided during working hours, and employer contributions to a recognised provident fund up to prescribed limits. Employer contributions to NPS, superannuation fund, and recognised provident fund combined are taxable as a perquisite only above a specified aggregate annual threshold. Always check the specific exemption conditions rather than assuming a benefit is automatically tax-free.'],
  ['Is ESOP taxed as a perquisite too?', 'Yes, the difference between the fair market value of shares on the date of exercise and the exercise price paid by the employee is taxed as a perquisite under Section 17(2) in the year of exercise (subject to a deferral available to eligible start-up employees in specified cases). ESOP taxation has its own valuation and reporting mechanics distinct from accommodation or car perquisites; see our dedicated guide on ESOP structuring for founders setting up a pool, or our NRI-focused ESOP taxation guide if the employee has since moved abroad.'],
  ['Who is responsible for getting perquisite valuation right, the employer or the employee?', 'Primarily the employer. Perquisite value must be correctly computed and included in the employee\'s Form 16 and the TDS deducted under Section 192 each month, since the employer is the one legally obligated to deduct tax at source on salary income including perquisites. An employee should still cross-check Form 16 perquisite figures against actual benefits received, since under-valuation flagged later in assessment becomes the employee\'s liability along with interest.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function PerquisitesBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Payroll &amp; Labour Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Perquisites &amp; Fringe Benefits Taxation for Employees</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 25, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Perquisites (accommodation, cars, loans, ESOPs) are added to salary and taxed under <strong>Section 17(2)</strong>, valued per Rule 15 (earlier Rule 3).</li>
                  <li style={{ marginBottom: '0.4rem' }}>From <strong>April 1, 2026</strong>, rent-free accommodation valuation dropped to 10% of salary in the biggest cities (from 15%), but company car perquisite values roughly <strong>tripled</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Not every benefit is taxable; specific exemptions exist for medical treatment, official telephone use, and PF/NPS contributions within limits.</li>
                  <li style={{ marginBottom: 0 }}>The employer is responsible for correct valuation and TDS under Section 192; employees should still verify Form 16 figures.</li>
                </ul>
              </div>

              <p>Perquisites sit in a part of salary structuring that employees rarely scrutinise and employers sometimes get wrong: benefits that never show up as cash in a bank account but are still taxable income. A rent-free flat, a company car, or a subsidised loan can add a meaningful amount to taxable salary even though the employee never actually receives that value as money. Understanding how these are valued matters more than usual this year, because the valuation rules changed materially from April 1, 2026.</p>

              <h2>What Counts as a Perquisite</h2>
              <p>Under <strong>Section 17(2)</strong> of the Income Tax Act, a perquisite is any benefit or amenity provided by an employer to an employee, over and above salary, whether in cash or kind. Common examples include:</p>
              <ul>
                <li>Rent-free or concessional-rent residential accommodation</li>
                <li>A company-owned or company-leased car for personal or mixed use</li>
                <li>Interest-free or concessional loans above a specified amount</li>
                <li>Free or subsidised education for the employee&apos;s children at an employer-run institution</li>
                <li>Employer contributions to provident fund, superannuation fund and NPS above prescribed limits</li>
                <li>Stock options (ESOPs) exercised at a price below fair market value</li>
                <li>Club memberships, gas/electricity/water bills, and domestic servants paid for by the employer</li>
              </ul>
              <p>Each category has its own valuation method under the Income Tax Rules, so there is no single formula; the accommodation and car rules below are the two most common in practice.</p>

              <h2>Rent-Free Accommodation: Valuation From April 1, 2026</h2>
              <p>The CBDT revised the valuation of employer-owned residential accommodation effective April 1, 2026, replacing the earlier Rule 3 structure with Rule 15 under the Income Tax Rules, 2026. The city-tier percentages of salary were revised downward:</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>City Population</th><th style={thStyle}>Perquisite Value (% of Salary)</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Above 40 lakh</td><td style={tdStyle}>10% (down from 15%)</td></tr>
                    <tr><td style={tdAltStyle}>Between 15 and 40 lakh</td><td style={tdAltStyle}>7.5% (down from 10%)</td></tr>
                    <tr><td style={tdStyle}>Below 15 lakh / other areas</td><td style={tdStyle}>A lower prescribed percentage</td></tr>
                  </tbody>
                </table>
              </div>
              <p>If the employer leases the accommodation from a third party rather than owning it, the taxable value is the lower of the actual rent the employer pays and the applicable percentage of salary above. &quot;Salary&quot; for this purpose has its own defined meaning under the rules (broadly, basic pay plus taxable allowances and specified components, excluding certain exempt items), so it is not simply the CTC figure on an offer letter.</p>

              <h2>Motor Car Perquisite: A Sharp Increase</h2>
              <p>Unlike accommodation, the motor car perquisite value moved in the opposite direction. For an employer-owned car used for both official and personal purposes, where the employer bears running and maintenance costs, the flat monthly valuation increased roughly three-fold:</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Engine Capacity</th><th style={thStyle}>Earlier Value</th><th style={thStyle}>Revised Value (from Apr 1, 2026)</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Up to 1.6 litres</td><td style={tdStyle}>Rs 1,800/month</td><td style={tdStyle}>Rs 5,000/month</td></tr>
                    <tr><td style={tdAltStyle}>Above 1.6 litres</td><td style={tdAltStyle}>Rs 2,400/month</td><td style={tdAltStyle}>Rs 7,000/month</td></tr>
                    <tr><td style={tdStyle}>Chauffeur provided (addition)</td><td style={tdStyle}>Rs 900/month</td><td style={tdStyle}>Rs 3,000/month</td></tr>
                  </tbody>
                </table>
              </div>
              <p>For a senior employee on a company car policy, this alone can add several thousand rupees a month to taxable salary that did not exist under the earlier rules, even though nothing changed about the actual car or the employee&apos;s usage pattern. Employers reviewing CTC structures and car-lease policies for FY 2026-27 should re-run the numbers rather than assume last year&apos;s take-home projections still hold.</p>

              <h2>Benefits That Are Exempt or Concessionally Valued</h2>
              <p>Not every employer-provided benefit becomes a taxable perquisite. Common exemptions and concessions include medical treatment at employer-run or government-approved hospitals for specified diseases, reimbursement of telephone and internet expenses used for official purposes, refreshments provided during office hours, and employer contributions to a recognised provident fund, superannuation fund, and NPS, which are taxable only above a specified combined annual threshold rather than from the first rupee. Leave travel concession also has its own separate exemption conditions distinct from the general perquisite rules. Because each exemption has specific conditions attached, employers structuring a benefits package should confirm the conditions apply rather than assume a benefit is automatically tax-free just because it falls in a commonly exempted category.</p>

              <h2>ESOPs as a Perquisite</h2>
              <p>Employee stock options are taxed differently from accommodation or car perquisites but are still perquisites under Section 17(2): the difference between the fair market value of the shares on the date of exercise and the price actually paid by the employee is added to salary income in the year of exercise, with a limited deferral facility available to eligible employees of recognised start-ups in specified cases. This is a distinct compliance area with its own valuation and reporting mechanics, and NRI employees holding India-linked ESOPs face additional cross-border complications covered separately.</p>

              <h2>Employer Compliance: Getting Valuation Into Form 16 and TDS</h2>
              <p>The employer carries the primary compliance burden here. Perquisite values must be computed correctly and folded into monthly TDS under Section 192, then reflected accurately in Form 16 at year-end. Getting this wrong in either direction creates real exposure: under-valuing perquisites understates TDS and creates a shortfall the employee (and potentially the employer, for TDS default) has to make good with interest; over-valuing unnecessarily inflates an employee&apos;s tax outgo. With the April 2026 valuation changes moving accommodation and car figures in opposite directions, payroll teams should not simply carry forward last year&apos;s perquisite computation templates without updating the underlying rates.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Getting perquisite valuation and TDS right for FY 2026-27?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help employers review CTC structures, recompute perquisite valuations under the revised rules, and get Section 192 TDS and Form 16 reporting right.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/payroll-compliance-checklist-for-growing-startups-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Payroll Compliance Checklist for Growing Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gratuity-payment-rules-eligibility-and-tax-exemption-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>Gratuity Payment Rules &amp; Tax Exemption Limits</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax &amp; Compliance Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

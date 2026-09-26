import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'TDS on Rent Under Section 194-IB: When Tenants Must Deduct',
  description: 'Section 194-IB requires individuals and HUFs not liable for tax audit to deduct 2% TDS on monthly rent above Rs 50,000, filed once a year via Form 26QC with no TAN needed.',
  keywords: [
    'section 194-IB', 'TDS on rent tenant', 'form 26QC', 'TDS on rent above 50000',
    '194IB TDS rate', 'tenant TDS on rent india', 'rent TDS individual HUF', 'section 194IB threshold',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-on-rent-section-194ib-tenants-deduct' },
  openGraph: {
    title: 'TDS on Rent Under Section 194-IB: When Tenants Must Deduct',
    description: '2% TDS on monthly rent above Rs 50,000 for individual and HUF tenants; Form 26QC process, timing, and penalties for missing it.',
    url: 'https://agrawalkhandelwal.com/blog/tds-on-rent-section-194ib-tenants-deduct',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDS on Rent: Section 194-IB Explained',
    description: '2% TDS on rent above Rs 50,000/month for individual and HUF tenants; Form 26QC, no TAN required.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TDS on Rent Under Section 194-IB: When Tenants Must Deduct', 'tds-on-rent-section-194ib-tenants-deduct')

const articleLd = buildArticleLd({
  headline: 'TDS on Rent Under Section 194-IB: When Tenants Must Deduct',
  description: 'When individual and HUF tenants must deduct TDS on rent under Section 194-IB, the current threshold and rate, the one-time Form 26QC filing process, and penalties for missing it.',
  datePublished: '2026-08-05',
  slug: 'tds-on-rent-section-194ib-tenants-deduct',
})

const faqs: [string, string][] = [
  ['Who must deduct TDS under Section 194-IB?', 'Any individual or HUF paying monthly rent above the prescribed threshold for a property is covered, but only if they are not otherwise liable for tax audit under Section 44AB (now Section 63) in the preceding financial year. Individuals and HUFs who are liable for audit fall instead under the general Section 194-I TDS provisions applicable to other tenants.'],
  ['What is the current threshold and rate under Section 194-IB?', 'TDS applies once rent exceeds Rs 50,000 per month or part of a month, at a rate of 2% on the rent paid for the year. The rate was reduced from 5% to 2% effective October 1, 2024, and continues at 2% for FY 2026-27. There is no separate slab; once the monthly rent crosses the threshold, TDS applies to the full rent paid, not just the excess.'],
  ['Does a tenant need a TAN to deduct TDS under Section 194-IB?', 'No. Section 194-IB is specifically designed so that individual and HUF tenants can comply using only their PAN and the landlord\'s PAN, without obtaining a TAN. This mirrors the PAN-only approach used for property purchases from resident sellers under Section 194-IA, and is one of the reasons this provision is manageable for ordinary tenants rather than only businesses.'],
  ['When is TDS on rent deducted and deposited under Section 194-IB?', 'Unlike most TDS provisions that require monthly deduction, Section 194-IB TDS is typically deducted once, either in the last month of the tenancy during the year or in March if the tenancy continues through year-end, covering the full year\'s rent. The deducted tax must be deposited within 30 days from the end of the month in which it was deducted, along with Form 26QC.'],
  ['What is Form 26QC and how is it filed?', 'Form 26QC is a combined challan-cum-statement filed online through the Income Tax e-filing or TIN portal to report the rent paid, TDS deducted, and deposit the tax, all in a single filing. After filing, the tenant should download Form 16C from the portal and provide it to the landlord as proof of TDS deducted.'],
  ['What happens if a tenant fails to deduct TDS on rent under Section 194-IB?', 'The tenant becomes liable for interest on the TDS not deducted or deposited, and a late filing fee for Form 26QC filed after the due date, in addition to the TDS amount itself becoming payable. Continued non-compliance can also expose the tenant to penalty provisions applicable to a person who fails to deduct or deposit TDS under the Act.'],
]

const faqLd = buildFaqLd(faqs)

export default function TDSRentSection194IBBlog() {
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
                TDS on Rent Under Section 194-IB: When Tenants Must Deduct
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 5, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Individuals and HUFs not liable for tax audit must deduct <strong>2% TDS</strong> on rent once monthly rent exceeds <strong>Rs 50,000</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>No TAN is required; the tenant uses their own PAN and the landlord&apos;s PAN.</li>
                    <li style={{ marginBottom: '0.4rem' }}>TDS is usually deducted once a year, filed and deposited via <strong>Form 26QC</strong> within 30 days of the deduction month.</li>
                    <li style={{ marginBottom: 0 }}>Section 194-IB has not been confirmed to carry a specific new section number under the Income Tax Act 2025; TDS provisions were broadly consolidated under Section 393, but the exact table item for this rent provision was not confirmed across sources as of this writing.</li>
                  </ul>
                </div>

                <p>Most tenants assume TDS on rent is something only businesses and companies deal with. Section 194-IB says otherwise: it brings ordinary individual and HUF tenants paying high rent into the TDS net, but does so through a deliberately simplified, PAN-only, once-a-year compliance process rather than the full machinery businesses use for other TDS provisions.</p>

                <h2>Who Falls Under Section 194-IB</h2>
                <p>Section 194-IB applies specifically to <strong>individuals and HUFs</strong> who are paying rent for land, building, or both, and who are <strong>not otherwise liable for tax audit</strong> under Section 44AB (now Section 63) in the immediately preceding financial year. If an individual or HUF is subject to tax audit because their business turnover or professional receipts cross the audit threshold, they instead fall under the general Section 194-I rent TDS provisions that apply to other categories of tenants, which have a lower rent threshold and different compliance requirements. Section 194-IB exists as a simplified route precisely for salaried individuals, professionals below the audit threshold, and similar taxpayers who would otherwise find full TDS machinery excessive for a single rent payment.</p>

                <h2>The Threshold and Rate</h2>
                <p>TDS under Section 194-IB applies once rent for the property exceeds <strong>Rs 50,000 per month</strong>, or part of a month. Once this threshold is crossed, the tenant must deduct TDS at <strong>2%</strong> of the total rent paid for the year, not merely on the amount above the threshold. This rate was reduced from 5% to 2% effective October 1, 2024, and the 2% rate continues to apply for FY 2026-27. There is no distinction based on whether the landlord is an individual company or trust; the threshold and rate depend on the rent amount and the tenant&apos;s profile, not the landlord&apos;s status.</p>

                <h2>Why No TAN Is Needed</h2>
                <p>Unlike most TDS obligations, which require the deductor to hold a Tax Deduction Account Number, Section 194-IB is structured so that an individual or HUF tenant can comply using only their <strong>PAN</strong> and the landlord&apos;s PAN. This design mirrors the PAN-only approach used for property purchases from resident sellers under <Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194-IA</Link>, and reflects the same underlying policy: a one-off or infrequent deduction obligation for an individual should not require the same registration overhead as an employer or business making TDS deductions regularly. Contrast this with a buyer purchasing property from an NRI seller, who does need a TAN because that transaction falls under a full TDS provision rather than a PAN-only simplified route.</p>

                <h2>When and How TDS Is Deducted</h2>
                <p>Section 194-IB does not require monthly TDS deduction the way an employer deducts TDS on salary each month. Instead, the tenant typically deducts the full year&apos;s TDS <strong>once</strong>, either:</p>
                <ul>
                  <li>In the <strong>last month of the tenancy</strong> during the financial year, if the tenant vacates or the rent agreement ends mid-year, covering the cumulative rent paid up to that point; or</li>
                  <li>In <strong>March</strong>, the last month of the financial year, covering the full year&apos;s rent, if the tenancy continues beyond year-end.</li>
                </ul>
                <p>The deducted tax must then be deposited, along with the return-cum-challan, within <strong>30 days from the end of the month</strong> in which the deduction was made. For a March deduction, this means the deposit deadline typically falls at the end of April.</p>

                <h2>Filing Form 26QC</h2>
                <p>Compliance is completed through <strong>Form 26QC</strong>, a combined challan-cum-statement filed online through the Income Tax e-filing or TIN portal. In a single filing, the tenant reports the rent paid for the period, the PAN details of both parties, computes the TDS payable, and deposits the tax. After the deposit is processed, the tenant should download <strong>Form 16C</strong> from the portal, which is the TDS certificate to be issued to the landlord as evidence that tax has been deducted and deposited on their behalf; the landlord uses this to claim credit for the TDS in their own income tax return.</p>

                <h2>Consequences of Missing the Deduction</h2>
                <p>A tenant who fails to deduct TDS, deducts but delays deposit, or files Form 26QC late faces interest on the shortfall period, a late filing fee for the delayed Form 26QC, and exposure to penalty provisions that apply generally to a failure to deduct or deposit TDS under the Act. Because the obligation is often triggered just once a year and easy to overlook amid other year-end filings, tenants paying rent above the threshold should calendar the deduction and Form 26QC filing well before the 30-day deposit window closes, rather than treating it as an afterthought at lease renewal or vacating time.</p>

                <h2>Section 194-IB Under the Income Tax Act 2025</h2>
                <p>The Income Tax Act 2025 broadly consolidated the various TDS provisions scattered across Sections 192 to 206 of the earlier Act into a smaller set of sections, with most payment-based TDS obligations (including rent, contract payments, and professional fees) now grouped under <strong>Section 393</strong> and its associated table of payment categories. The specific table item corresponding to the earlier Section 194-IB rent-by-individual/HUF provision was not confirmed with confidence across available sources as of this writing, so this guide does not state a specific new sub-item number. The substance described above, the Rs 50,000 monthly threshold, the 2% rate, the PAN-only mechanism, and Form 26QC, applies regardless of the exact new-Act citation, and this article will be updated once the mapping is confirmed.</p>
              </div>

              <PostCTA
            heading="Paying high rent as an individual or HUF?"
            description="We help tenants compute and deposit rent TDS correctly and file Form 26QC on time, avoiding interest and late fees."
            secondaryLabel="Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-salary-section-192-form-24q" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Salary: Section 192 &amp; Form 24Q Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>26QB vs 27Q: NRI Property TDS Form</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide (NRI Property)</Link></li>
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

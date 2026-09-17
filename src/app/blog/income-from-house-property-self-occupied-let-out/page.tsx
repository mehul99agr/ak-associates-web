import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Income From House Property: Self-Occupied vs Let-Out Taxation',
  description: 'How self-occupied and let-out property are taxed differently in India: nil annual value vs net annual value, the 30% standard deduction, home loan interest limits, and the Rs 2 lakh loss set-off cap for FY 2026-27.',
  keywords: [
    'income from house property', 'self occupied vs let out property tax', 'section 24 standard deduction',
    'home loan interest deduction limit', 'house property loss set off Rs 2 lakh', 'net annual value calculation',
    'deemed let out property tax', 'two self occupied houses income tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-from-house-property-self-occupied-let-out' },
  openGraph: {
    title: 'Income From House Property: Self-Occupied vs Let-Out Taxation',
    description: 'Nil annual value vs net annual value, the 30% standard deduction, home loan interest limits, and the Rs 2 lakh loss set-off cap.',
    url: 'https://agrawalkhandelwal.com/blog/income-from-house-property-self-occupied-let-out',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Property: Self-Occupied vs Let-Out Taxation',
    description: 'How the two categories are computed differently, and the Rs 2 lakh loss set-off cap.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income From House Property: Self-Occupied vs Let-Out Taxation', 'income-from-house-property-self-occupied-let-out')

const articleLd = buildArticleLd({
  headline: 'Income From House Property: Self-Occupied vs Let-Out Taxation',
  description: 'How self-occupied and let-out property are computed differently under the head Income from House Property, the 30% standard deduction, home loan interest limits, and the Rs 2 lakh loss set-off cap for FY 2026-27.',
  datePublished: '2026-07-25',
  slug: 'income-from-house-property-self-occupied-let-out',
})

const faqs: [string, string][] = [
  ['Can I claim home loan interest for a self-occupied house?', 'Yes, up to Rs 2 lakh per year under Section 24(b), provided the loan was taken for purchase or construction and the construction is completed within 5 years from the end of the financial year in which the loan was taken. If construction takes longer, the deduction drops to Rs 30,000.'],
  ['How many self-occupied houses can I claim as nil annual value?', 'Up to two houses can be treated as self-occupied with nil annual value, if they are used by the owner or their family and not let out during the year. Any additional houses, even if not actually let out, are treated as deemed let out and taxed on notional rental value.'],
  ['What is the 30% standard deduction on house property income?', 'Section 24(a) allows a flat 30% deduction on the Net Annual Value of a let-out property, regardless of actual expenses incurred on repairs or maintenance. It does not apply to a self-occupied property because its annual value is nil, so there is no NAV to deduct against.'],
  ['What is the maximum house property loss I can set off against salary income?', 'A maximum of Rs 2 lakh in house property loss can be set off against other heads of income, such as salary, in the same year. Any loss beyond that limit is carried forward for up to 8 assessment years and can only be adjusted against future house property income.'],
  ['Is house property loss allowed under the new tax regime?', 'Under the new tax regime, a loss from a self-occupied property (arising purely from home loan interest, since there is no rental income to set it against) cannot be set off against salary or other heads; it can only be carried forward and set off against house property income in later years. A let-out property loss after the 30% deduction and municipal taxes can still arise, but the same restriction on inter-head set-off applies.'],
  ['What is deemed let out property?', 'If you own more than two houses and the extra ones are vacant or used only occasionally, they are still taxed as if let out, based on a notional fair rental value, even though no rent is actually received. This prevents taxpayers from avoiding tax on unused property income by simply not renting it out.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function HousePropertyBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Income From House Property: Self-Occupied vs Let-Out Taxation</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 25, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>A <strong>self-occupied house has nil annual value</strong>; a <strong>let-out house is taxed on Net Annual Value</strong> after a flat 30% standard deduction.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Home loan interest on a self-occupied house is capped at <strong>Rs 2 lakh</strong> a year; there is no cap for a let-out property, but the resulting loss set-off against other income is capped.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Up to <strong>two houses</strong> can be self-occupied at nil value; a third house, even if vacant, is taxed as <strong>deemed let out</strong>.</li>
                  <li style={{ marginBottom: 0 }}>House property loss set off against salary or other income is capped at <strong>Rs 2 lakh</strong> per year; the rest carries forward for 8 years.</li>
                </ul>
              </div>

              <p>Income from house property is computed differently depending on whether you occupy the house yourself or let it out, and the difference materially changes how much home loan interest you can actually use in a given year. Here is how the two categories work and where the common mistakes creep in.</p>

              <h2>Self-Occupied vs Let-Out: The Core Difference</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Particulars</th><th style={thStyle}>Self-Occupied</th><th style={thStyle}>Let-Out</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Annual Value</td><td style={tdStyle}>Nil</td><td style={tdStyle}>Net Annual Value (actual/expected rent less municipal taxes)</td></tr>
                    <tr><td style={tdAltStyle}>Standard Deduction (30%)</td><td style={tdAltStyle}>Not applicable (NAV is nil)</td><td style={tdAltStyle}>Available on NAV</td></tr>
                    <tr><td style={tdStyle}>Home loan interest (Sec 24(b))</td><td style={tdStyle}>Capped at Rs 2 lakh/year</td><td style={tdStyle}>No statutory cap on the deduction itself</td></tr>
                    <tr><td style={tdAltStyle}>Typical result</td><td style={tdAltStyle}>Loss limited to interest paid (subject to Rs 2 lakh cap)</td><td style={tdAltStyle}>Income or loss depending on rent vs interest</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>How Self-Occupied Property Is Taxed</h2>
              <p>When you occupy your own house (or it is vacant because you couldn&apos;t occupy it due to employment elsewhere, in certain cases), its annual value is treated as nil. Since there is no rental income to tax, the only benefit available is the home loan interest deduction under Section 24(b), capped at <strong>Rs 2 lakh per year</strong>, provided the loan was for purchase or construction and construction is completed within 5 years from the end of the financial year in which the loan was taken. If completion takes longer than that window, the cap drops sharply to Rs 30,000. Principal repayment on the loan is a separate matter, claimed under Section 80C, not under this head.</p>
              <p>Because NAV is nil, a self-occupied property typically shows a loss equal to the interest claimed (up to Rs 2 lakh), not an income.</p>

              <h2>How Let-Out Property Is Taxed</h2>
              <p>For a let-out property, you first arrive at the Gross Annual Value (actual rent received, or the higher of municipal value/fair rent/standard rent if higher than actual rent in specific situations), deduct municipal taxes actually paid during the year, to get the Net Annual Value. From the NAV, a flat <strong>30% standard deduction</strong> is allowed regardless of your actual repair or maintenance spend, followed by home loan interest, which has no statutory upper limit for a let-out property. This means a fully let-out property with a large loan can genuinely show a loss for tax purposes even while generating positive cash flow, once interest and the 30% deduction are netted against rent.</p>

              <h2>Two Houses, Not One: The Self-Occupied Limit</h2>
              <p>A taxpayer can treat <strong>up to two houses</strong> as self-occupied with nil annual value in a year, as long as they (or their family) actually use them and don&apos;t let them out. This is a relatively recent relaxation from the earlier one-house rule and is particularly relevant to families holding a home in Nashik or Sillod alongside a second property elsewhere for work or a child&apos;s education.</p>
              <p>Any house beyond the first two, even if it sits vacant all year and earns no rent, is taxed as <strong>deemed let out</strong>: its notional fair rental value is brought to tax as if it had actually been rented, and the 30% standard deduction plus uncapped interest deduction rules for let-out property apply to it.</p>

              <h2>The Rs 2 Lakh Loss Set-Off Cap</h2>
              <p>Whether the loss comes from a self-occupied property (interest-driven) or a let-out property (interest and 30% deduction exceeding rental income), the amount of house property loss that can be set off against other heads of income such as salary in the same year is capped at <strong>Rs 2 lakh</strong>. Any loss beyond that is not lost; it is carried forward for up to 8 assessment years, but in the carry-forward years it can only be set off against income from house property, not against salary or business income.</p>
              <p>This cap is a common planning trap for taxpayers who take a large loan expecting the full interest to reduce their salary tax liability in the same year; only the first Rs 2 lakh does so immediately.</p>

              <h2>Under the New Tax Regime</h2>
              <p>Under the new tax regime, a self-occupied property loss (arising from home loan interest with no rental income to absorb it) generally cannot be set off against salary or other income at all; it can only be carried forward against future house property income. If you are weighing old versus new regime and hold a home loan on a self-occupied house, this is one of the bigger numbers to model before deciding, alongside <Link href="/blog/section-80d-health-insurance-deduction-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80D</Link> and other Chapter VI-A deductions that also only apply under the old regime.</p>

              <h2>A Practical Example</h2>
              <p>A taxpayer owns one self-occupied flat in Nashik with Rs 1.8 lakh annual home loan interest, and a second let-out flat earning Rs 3 lakh annual rent with Rs 40,000 municipal taxes paid and Rs 2.5 lakh interest on a separate loan.</p>
              <ul>
                <li><strong>Self-occupied:</strong> Nil annual value, less Rs 1.8 lakh interest (within the Rs 2 lakh cap) = loss of Rs 1.8 lakh.</li>
                <li><strong>Let-out:</strong> NAV = Rs 3 lakh - Rs 40,000 = Rs 2.6 lakh; less 30% standard deduction (Rs 78,000); less Rs 2.5 lakh interest = loss of Rs 1.68 lakh.</li>
                <li><strong>Total house property loss:</strong> Rs 3.48 lakh, but only Rs 2 lakh can be set off against salary this year; the remaining Rs 1.48 lakh carries forward for up to 8 years against future house property income.</li>
              </ul>
              <p>If you are also selling a house this year, the computation of income from house property is separate from the capital gains calculation on the sale itself; see our guide on <Link href="/blog/capital-gains-tax-property-sale-residents-ltcg-stcg" style={{ color: 'var(--primary)', fontWeight: 600 }}>capital gains tax on property sale for residents</Link> for that piece.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Own more than one house or a rented-out property?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We compute house property income correctly across self-occupied and let-out properties and model old vs new regime before you file.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20house%20property%20income%20tax%20computation." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/capital-gains-tax-property-sale-residents-ltcg-stcg" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains Tax on Property Sale for Residents</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80d-health-insurance-deduction-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80D Deduction Explained</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains for NRIs on Inherited/Gifted Property</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Capital Gains Tax on Property Sale for Residents: LTCG & STCG Rates',
  description: 'How resident Indian sellers are taxed on property sale: the 24-month LTCG threshold, 12.5% LTCG rate, the pre-July 2024 indexation safeguard, Section 54/54EC exemptions, and 1% Section 194-IA TDS. For resident sellers, not NRIs.',
  keywords: [
    'capital gains tax property sale India resident', 'LTCG on property sale', 'STCG on property sale',
    'section 194-IA TDS 1 percent', 'section 54 exemption capital gains', 'indexation benefit property sale 2024',
    'capital gains tax rate FY 2026-27 property', 'long term capital gains property resident',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/capital-gains-tax-property-sale-residents-ltcg-stcg' },
  openGraph: {
    title: 'Capital Gains Tax on Property Sale for Residents: LTCG & STCG Rates',
    description: 'The 24-month LTCG threshold, 12.5% rate, the pre-July 2024 indexation safeguard, exemptions, and 1% Section 194-IA TDS for resident sellers.',
    url: 'https://agrawalkhandelwal.com/blog/capital-gains-tax-property-sale-residents-ltcg-stcg',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capital Gains Tax on Property Sale (Residents)',
    description: 'LTCG/STCG rates, indexation safeguard, exemptions, and TDS for resident property sellers.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Capital Gains Tax on Property Sale for Residents: LTCG & STCG Rates', 'capital-gains-tax-property-sale-residents-ltcg-stcg')

const articleLd = buildArticleLd({
  headline: 'Capital Gains Tax on Property Sale for Residents: LTCG & STCG Rates',
  description: 'How resident Indian sellers of immovable property are taxed: the 24-month LTCG threshold, the 12.5% LTCG rate, the pre-July 2024 acquisition indexation safeguard, Section 54/54EC exemptions, and 1% Section 194-IA TDS deducted by the buyer.',
  datePublished: '2026-07-25',
  slug: 'capital-gains-tax-property-sale-residents-ltcg-stcg',
})

const faqs: [string, string][] = [
  ['What is the holding period for LTCG on property sale in India?', 'A property held for more than 24 months from the date of acquisition qualifies as a long-term capital asset. Property sold within 24 months of acquisition is taxed as short-term capital gains at the seller\'s applicable slab rate instead.'],
  ['What is the LTCG tax rate on property sale for residents?', 'The general long-term capital gains rate on property sale is 12.5% (plus applicable surcharge and cess), computed without indexation. A safeguard applies for resident individuals and HUFs selling land or a building acquired before July 23, 2024: the tax is compared against the older 20% with indexation method, and whichever is lower for the taxpayer applies.'],
  ['Is TDS deducted when a resident sells property?', 'Yes, if the sale consideration or stamp duty value is Rs 50 lakh or more, the buyer deducts TDS at 1% under Section 194-IA and deposits it using Form 26QB, without needing a TAN. This is a different mechanism from the TDS a buyer deducts when purchasing from an NRI seller, which has no minimum threshold and requires the buyer to hold a TAN.'],
  ['How is short-term capital gains on property taxed for residents?', 'Short-term capital gains, arising when the property is held for 24 months or less, are added to the seller\'s total income and taxed at their applicable slab rate; there is no special concessional rate for short-term gains on immovable property.'],
  ['Can I claim exemption on capital gains from selling a house?', 'Yes. Section 54 allows exemption on long-term capital gains from a residential house if the gains are reinvested in another residential house within the prescribed time limits, subject to a cap on the amount of exemption for very large gains. Section 54EC separately allows exemption by investing capital gains (up to Rs 50 lakh) in specified bonds within 6 months of transfer.'],
  ['Does this article apply to NRIs selling property in India?', 'No. This guide covers resident sellers only. NRI sellers face a materially different regime, including TDS at a flat rate on the full sale value regardless of actual gain (rather than the 1% threshold-based Section 194-IA rate), no threshold exemption, and a mandatory TAN requirement for the buyer. See our dedicated guides on TDS for NRI property sales and capital gains for NRIs on inherited or gifted property.'],
]

const faqLd = buildFaqLd(faqs)

export default function CapitalGainsResidentsBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Capital Gains Tax on Property Sale for Residents: LTCG &amp; STCG Rates</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 25, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--primary)', marginBottom: '1.5rem' }}>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-light)' }}><strong>This guide is for resident Indian sellers.</strong> If you are an NRI selling property in India, the TDS mechanism, rates, and exemptions are materially different; see our guides on <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI property sale</Link> and <Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>capital gains for NRIs on inherited or gifted property</Link> instead.</p>
              </div>

              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Property held for <strong>more than 24 months</strong> is long-term; sold within 24 months, it is short-term and taxed at slab rate.</li>
                  <li style={{ marginBottom: '0.4rem' }}>LTCG rate is <strong>12.5% without indexation</strong>, with a safeguard comparison against the old 20%-with-indexation method for property acquired before July 23, 2024.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Buyer deducts <strong>1% TDS under Section 194-IA</strong> via Form 26QB if the consideration is Rs 50 lakh or more; no TAN needed for a resident-seller purchase.</li>
                  <li style={{ marginBottom: 0 }}>Sections 54 and 54EC can reduce or eliminate LTCG tax if the gain is reinvested within the prescribed time limits.</li>
                </ul>
              </div>

              <p>When a resident individual or HUF sells immovable property in India, the tax treatment depends primarily on how long the property was held, and separately on when it was originally acquired if you want the benefit of a transitional safeguard introduced after the Budget 2024 changes. Here is how the computation actually works.</p>

              <h2>Short-Term vs Long-Term: The 24-Month Line</h2>
              <p>Immovable property held for <strong>more than 24 months</strong> from the date of acquisition is a long-term capital asset. Held for 24 months or less, it is short-term. This distinction matters because the two are taxed on completely different bases.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Type</th><th style={thStyle}>Holding Period</th><th style={thStyle}>Tax Treatment</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Short-Term (STCG)</td><td style={tdStyle}>24 months or less</td><td style={tdStyle}>Added to total income, taxed at slab rate</td></tr>
                    <tr><td style={tdAltStyle}>Long-Term (LTCG)</td><td style={tdAltStyle}>More than 24 months</td><td style={tdAltStyle}>12.5% flat rate, no indexation (subject to the safeguard below)</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>How LTCG Is Computed: 12.5% Without Indexation</h2>
              <p>For long-term property sales, the standard method computes the gain as sale consideration less the actual cost of acquisition and improvement (without adjusting the cost for inflation), taxed at a flat <strong>12.5%</strong> plus applicable surcharge and cess. This removed the earlier practice of indexing the purchase cost to inflation before computing the gain, which generally raises the taxable gain compared to the older method for properties held a long time.</p>

              <h2>The Pre-July 23, 2024 Indexation Safeguard</h2>
              <p>To avoid penalising sellers who bought property years ago expecting to use indexation, a safeguard applies specifically to <strong>resident individuals and HUFs</strong> selling land or a building (not other asset classes) that was <strong>acquired before July 23, 2024</strong>. In these cases, the tax computed under the new 12.5%-without-indexation method is compared against the tax that would have resulted under the old 20%-with-indexation method, and the seller pays whichever is lower. This comparison is done automatically as part of the computation; it is not an election you separately opt into, but it does mean the old cost inflation index figures still matter for these transactions when working out which method is cheaper.</p>
              <p>Property acquired on or after July 23, 2024 does not get this comparison; it is taxed at the flat 12.5% rate on the actual (non-indexed) gain.</p>

              <h2>Short-Term Capital Gains: Just Slab Rate</h2>
              <p>If the property was held for 24 months or less, there is no special rate at all. The gain (sale price less cost, with no indexation available for short-term assets in any case) is added to the seller&apos;s other income for the year and taxed at their normal slab rate, which can be considerably higher than 12.5% for taxpayers in the higher slabs.</p>

              <h2>Section 194-IA: 1% TDS Deducted by the Buyer</h2>
              <p>When a resident buys immovable property (other than agricultural land) from a resident seller for a consideration of <strong>Rs 50 lakh or more</strong>, the buyer must deduct TDS at <strong>1%</strong> of the sale consideration or the stamp duty value, whichever is higher, and deposit it using <strong>Form 26QB</strong>. Unlike a purchase from an NRI seller, the buyer here does not need a TAN; a PAN is sufficient, and there is a clear Rs 50 lakh threshold below which no TDS applies at all.</p>
              <p>This is a meaningfully simpler regime than what applies when the seller is an NRI, where TDS applies with no minimum threshold, at rates tied to the nature and slab of the gain rather than a flat 1%, and the buyer must separately obtain a TAN; see our <Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN application guide for buyers purchasing from an NRI</Link> if that situation applies to you instead. If you are a resident seller, the 1% deducted under Section 194-IA is simply an advance credit against your final tax liability, adjusted when you file your return; it is not itself the final tax on the gain.</p>

              <h2>Exemptions That Can Reduce or Eliminate LTCG Tax</h2>
              <ul>
                <li><strong>Section 54:</strong> Available to individuals and HUFs selling a long-term residential house, if the capital gains (not the full sale proceeds) are reinvested in one residential house in India within the prescribed time before or after the sale. There is a cap on the exemption available for very large gains, so this should be modelled carefully for high-value sales.</li>
                <li><strong>Section 54EC:</strong> Allows exemption by investing long-term capital gains, up to Rs 50 lakh, in specified capital gains bonds within 6 months of the transfer, with a lock-in period on the bonds. Useful where reinvesting in another house isn&apos;t the intention.</li>
                <li><strong>Section 54F:</strong> Applies where the asset sold is not a residential house (for example, a plot of land) but the gains are reinvested in a residential house, subject to conditions on not owning multiple other houses at the time.</li>
              </ul>
              <p>These exemptions come with strict reinvestment windows and conditions; missing a deadline by even a few days can forfeit the exemption entirely, so this is worth planning before the sale closes, not after.</p>

              <h2>A Practical Example</h2>
              <p>A resident individual bought a flat in June 2020 for Rs 60 lakh and sells it in September 2026 for Rs 1.2 crore. The holding period exceeds 24 months, so it is long-term. Since the property was acquired before July 23, 2024, the safeguard comparison applies: the tax office computes the gain both ways (12.5% on Rs 60 lakh flat gain, and 20% on the indexed gain using the applicable cost inflation index), and the seller pays whichever amount is lower. Separately, since the sale value exceeds Rs 50 lakh, the buyer deducts 1% TDS (Rs 1.2 lakh) under Section 194-IA and deposits it via Form 26QB; this is credited against the seller&apos;s final tax liability when the return is filed.</p>
              <p>If this sale were instead by an NRI seller, none of the Section 194-IA mechanics above would apply; the buyer would need a TAN and would deduct tax under a different provision, with no Rs 50 lakh threshold. Always confirm the seller&apos;s residential status before assuming which regime governs a transaction.</p>
            </div>

            <PostCTA
            heading="Selling property and want to plan the capital gains tax correctly?"
            description="We work out the LTCG/STCG computation, check whether the indexation safeguard applies, and structure Section 54/54EC reinvestment before your sale closes."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20capital%20gains%20tax%20on%20a%20property%20sale."
            secondaryExternal
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale (FY 2026-27)</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains for NRIs on Inherited/Gifted Property</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide (Buyer, NRI Property)</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-from-house-property-self-occupied-let-out" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income From House Property: Self-Occupied vs Let-Out</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

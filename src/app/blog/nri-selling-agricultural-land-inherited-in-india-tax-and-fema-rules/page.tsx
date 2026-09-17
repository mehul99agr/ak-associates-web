import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'NRI Selling Agricultural Land Inherited in India: Tax & FEMA Rules',
  description: 'How an NRI sells inherited agricultural land in India: who can be the buyer, rural vs urban land capital gains treatment, TDS obligations, and repatriating the sale proceeds.',
  keywords: [
    'NRI selling inherited agricultural land', 'NRI agricultural land sale tax', 'rural agricultural land capital gains NRI',
    'TDS on NRI agricultural land sale', 'NRI agricultural land buyer resident only', 'NRI agricultural land repatriation',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-selling-agricultural-land-inherited-in-india-tax-and-fema-rules' },
  openGraph: {
    title: 'NRI Selling Agricultural Land Inherited in India: Tax & FEMA Rules',
    description: 'Who can buy, rural vs urban land capital gains treatment, TDS obligations, and repatriation for an NRI selling inherited agricultural land.',
    url: 'https://agrawalkhandelwal.com/blog/nri-selling-agricultural-land-inherited-in-india-tax-and-fema-rules',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Selling Inherited Agricultural Land: Tax & FEMA Rules',
    description: 'The sale side: eligible buyers, capital gains computation, TDS, and repatriation for an NRI selling inherited agricultural land.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Selling Agricultural Land Inherited in India: Tax & FEMA Rules', 'nri-selling-agricultural-land-inherited-in-india-tax-and-fema-rules')

const articleLd = buildArticleLd({
  headline: 'NRI Selling Agricultural Land Inherited in India: Tax & FEMA Rules',
  description: 'The sale-side mechanics for an NRI selling inherited agricultural land: eligible buyers, rural vs urban land capital gains computation, TDS obligations on the buyer, and repatriation of sale proceeds.',
  datePublished: '2026-09-23',
  slug: 'nri-selling-agricultural-land-inherited-in-india-tax-and-fema-rules',
})

const faqs: FaqPair[] = [
  ['Who can buy agricultural land that an NRI inherited?', 'Only a resident Indian citizen. An NRI who has inherited agricultural land cannot sell it to another NRI, an OCI, or a foreign national; FEMA restricts the resale to keep the land within resident ownership, regardless of how the NRI seller lawfully came to hold it.'],
  ['Is capital gains tax payable on the sale of inherited agricultural land?', 'It depends on whether the land is rural or urban agricultural land under Section 2(14) of the Income Tax Act. Rural agricultural land is not treated as a capital asset at all, so its sale attracts no capital gains tax regardless of the profit. Urban agricultural land is a capital asset, and its sale by an NRI is taxed as capital gains like any other immovable property.'],
  ['What is the cost of acquisition for inherited agricultural land in a capital gains computation?', 'For inherited property, the cost of acquisition is not what the NRI paid (they paid nothing), but the cost to the previous owner who last acquired it by purchase, plus the benefit of indexation (where applicable) computed from that original owner\'s year of acquisition, not from the year of inheritance. The holding period is also counted from the original owner\'s acquisition date, so inherited land is very often a long-term asset even if the NRI inherited it recently.'],
  ['Does the buyer need to deduct TDS when purchasing agricultural land from an NRI?', 'Yes, if the land is urban agricultural land (a capital asset generating taxable capital gains). The TDS obligation and mechanics follow the same Section 195 (now Section 393(2)) framework that applies to any NRI property sale: no minimum threshold, TDS on the full consideration, buyer TAN requirement, and Form 27Q (now Form 144) filing. See our detailed guide on TDS mechanics for the rates and process. Where the land genuinely qualifies as rural agricultural land and is therefore not a capital asset, there is no capital gains income to withhold tax against, though banks and registrars may still expect documentation establishing the rural classification before treating the transaction as TDS-exempt.'],
  ['How does an NRI repatriate the sale proceeds of inherited agricultural land?', 'The same repatriation framework applies as for any other NRI property sale: proceeds must first be credited to the NRI\'s NRO account, then repatriated up to USD 1 million per financial year (cumulative across all NRO remittances) after filing Form 145 (which replaced Form 15CA) and obtaining Form 146 (which replaced Form 15CB), a Chartered Accountant certificate confirming tax compliance, submitted to the Authorised Dealer bank.'],
  ['Can an NRI claim any exemption on capital gains from selling inherited urban agricultural land?', 'Section 54B allows reinvestment-based exemption on capital gains from transferring agricultural land, but it is conditioned on the land having been used for agricultural purposes by the individual or their parent for two years immediately preceding the transfer, and on reinvesting in another agricultural land within the specified period. Given the land-use and reinvestment conditions, and the practical question of whether an NRI can satisfy the personal-cultivation-linked conditions, eligibility should be verified on the specific facts before assuming the exemption applies; it is not automatic merely because the asset sold was agricultural land.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NriSellingInheritedAgriLandBlog() {
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
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                NRI Selling Agricultural Land Inherited in India: Tax &amp; FEMA Rules
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 23, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>An NRI can only sell inherited agricultural land to a <strong>resident Indian citizen</strong>, never to another NRI, OCI, or foreign national.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Rural agricultural land</strong> isn&apos;t a capital asset at all under Section 2(14), so its sale has no capital gains tax. <strong>Urban agricultural land</strong> is taxed like any other property sale.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Cost of acquisition and holding period for inherited land carry over from the <strong>original owner</strong>, not the date of inheritance.</li>
                    <li style={{ marginBottom: 0 }}>Where TDS applies, the same Section 195/Section 393(2) buyer-TDS mechanics apply as for any NRI property sale.</li>
                  </ul>
                </div>

                <p>Our <Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>earlier guide on NRIs and agricultural land</Link> covered the holding-restriction side of this: NRIs and OCIs cannot purchase agricultural land, but can legally come to hold it through inheritance, gift from a resident relative, or pre-existing ownership from before their NRI status began. This guide picks up from there and goes deeper on what happens next: once an NRI actually holds inherited agricultural land and wants to sell it, who can buy it, how the capital gain is computed, what TDS applies, and how the proceeds get repatriated.</p>

                <h2>Who Can Buy: The Resident-Only Restriction</h2>
                <p>This is the starting constraint on the entire transaction. Under the FEMA framework, an NRI who holds agricultural land through inheritance or gift can sell it <strong>only to a resident Indian citizen</strong>. The buyer cannot be another NRI, an OCI, or a foreign national, regardless of how lawfully the NRI seller acquired the land in the first place. This closes off any structure where agricultural land might otherwise pass between non-resident parties through a chain of inheritance-and-resale transactions, and it means the pool of eligible buyers for this specific asset class is narrower than for any other property an NRI might sell in India.</p>
                <p>Practically, this affects deal structuring more than most NRI sellers expect: the buyer needs to independently establish resident status to the satisfaction of the registering authority and, in most transactions, the bank processing the payment, before the sale can proceed cleanly.</p>

                <h2>Rural vs Urban Agricultural Land: Why It Decides the Tax Outcome</h2>
                <p>Whether the sale attracts capital gains tax at all turns entirely on whether the land is <strong>rural</strong> or <strong>urban</strong> agricultural land under the capital asset definition in Section 2(14) of the Income Tax Act:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Classification</th>
                        <th style={thStyle}>Test</th>
                        <th style={thStyle}>Capital Gains Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>Rural agricultural land</strong></td>
                        <td style={tdStyle}>Outside municipal/cantonment board limits with population under 10,000, or beyond specified aerial distance thresholds (roughly 2 km, 6 km, or 8 km depending on the nearby municipality&apos;s population) from such limits</td>
                        <td style={tdStyle}>Not a capital asset at all; <strong>no capital gains tax</strong> on sale, regardless of profit</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>Urban agricultural land</strong></td>
                        <td style={tdAltStyle}>Any agricultural land that does not meet the rural test above</td>
                        <td style={tdAltStyle}>A capital asset; capital gains tax applies as it would to any other immovable property</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>This distinction applies to NRI sellers exactly as it does to resident sellers; there is no separate, harsher rule for NRIs on this classification question. The practical first step in any inherited agricultural land sale, therefore, is confirming which category the land falls into, since it determines whether the rest of this guide (capital gains computation, TDS, exemptions) applies at all.</p>

                <h2>Capital Gains Computation for Urban Agricultural Land</h2>
                <p>Where the land is urban agricultural land and therefore a capital asset, the capital gains computation follows the same inherited-property rules that apply to any other inherited asset:</p>
                <ul>
                  <li><strong>Cost of acquisition:</strong> not what the NRI paid, since inheritance itself is not a taxable transfer and costs nothing; instead, the cost to the <strong>previous owner</strong> who last acquired the land by purchase or other qualifying mode, carried forward to the NRI.</li>
                  <li><strong>Indexation:</strong> where applicable, computed from the original owner&apos;s year of acquisition, not the year the NRI inherited the land.</li>
                  <li><strong>Holding period:</strong> also counted from the original owner&apos;s date of acquisition. This means inherited land is very often long-term capital gains (LTCG) property, even if the NRI inherited it only recently, because the clock does not restart at inheritance.</li>
                  <li><strong>Rate:</strong> LTCG on immovable property (held over 2 years, counting from the original owner&apos;s acquisition as above) is taxed at 12.5% without indexation for transfers after July 23, 2024. Short-term gains are taxed at slab rates, effectively 30% for most NRI sellers.</li>
                </ul>
                <p>If the stamp duty valuation of the land exceeds the actual sale consideration by more than the permitted tolerance, the higher stamp duty value is deemed the sale consideration for computing the capital gain, the same rule that applies to any other property sale.</p>

                <h2>TDS: The Buyer's Obligation</h2>
                <p>Where the land is urban agricultural land generating a taxable capital gain, the TDS mechanics are identical to those for any other NRI property sale: the <strong>buyer</strong>, not the NRI seller, is responsible for deducting tax at source under Section 195 (now Section 393(2) under the Income Tax Act 2025), on the full sale consideration with no minimum threshold, requiring the buyer to obtain a TAN before the transaction and file Form 27Q (now Form 144) afterward. For the complete rate table, surcharge slabs, TAN process, and Form 13 lower deduction certificate option to reduce over-deduction, see our full <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI property sale guide</Link>; the rules there apply without modification to a sale of urban agricultural land by an NRI.</p>
                <p>For land that genuinely qualifies as rural agricultural land and therefore sits outside the capital gains regime entirely, there is no capital gains income to withhold tax against. In practice, though, buyers and registrars often still expect supporting documentation establishing the rural classification (distance certificates, population data for the nearest municipality) before treating the transaction as free of TDS, so this should be resolved and documented before the sale closes, not argued after the fact if a query arises.</p>

                <h2>Repatriating the Sale Proceeds</h2>
                <p>Once tax has been settled, the repatriation sequence is the same as for any other NRI property sale: proceeds first land in the NRI&apos;s <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO account</Link>, and from there up to <strong>USD 1 million per financial year</strong> (cumulative across all NRO remittances, not just this sale) can be repatriated abroad, after filing <strong>Form 145</strong> (which replaced Form 15CA) on the income tax portal and obtaining <strong>Form 146</strong> (which replaced Form 15CB), a Chartered Accountant certificate confirming tax compliance, for submission to the Authorised Dealer bank. There is no separate or different repatriation channel for agricultural land proceeds specifically; it follows the standard NRO repatriation framework once the sale itself has cleared the resident-buyer-only and tax requirements above.</p>

                <h2>Putting It Together</h2>
                <p>Selling inherited agricultural land as an NRI is, in effect, three separate compliance questions stacked on top of each other: confirming the buyer is a resident Indian citizen (a FEMA question), determining whether the land is rural or urban and computing the capital gain accordingly if urban (an Income Tax Act question), and then routing TDS, tax settlement, and repatriation through the standard NRI property-sale machinery (a compliance-process question). Getting any one of the three wrong, selling to an ineligible buyer, misclassifying rural land as urban or vice versa, or skipping TDS documentation, creates problems that are considerably harder to unwind after the sale deed is registered than to resolve before it.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Selling agricultural land you inherited as an NRI?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We confirm rural/urban classification, compute capital gains on inherited property, handle Form 13 and TDS compliance, and manage NRO repatriation end to end.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>Can an NRI Buy Agricultural Land in India? FEMA Rules</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale (FY 2026-27)</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains for NRIs on Inherited or Gifted Property</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

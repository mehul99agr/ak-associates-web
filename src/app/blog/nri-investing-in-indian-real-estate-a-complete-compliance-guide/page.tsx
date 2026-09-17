import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'NRI Investing in Indian Real Estate: A Complete Compliance Guide',
  description: 'FEMA rules for NRIs buying residential and commercial property in India: what can and cannot be purchased, funding channels via NRE/NRO/FCNR, and repatriation of rental income.',
  keywords: [
    'NRI real estate investment India', 'NRI buying property India FEMA', 'NRI property purchase rules',
    'can NRI buy agricultural land', 'NRE NRO funds property purchase', 'repatriation rental income NRI',
    'NRI commercial property India', 'FEMA rules NRI immovable property',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-investing-in-indian-real-estate-a-complete-compliance-guide' },
  openGraph: {
    title: 'NRI Investing in Indian Real Estate: A Complete Compliance Guide',
    description: 'What NRIs can and cannot buy under FEMA, how to fund the purchase, and how to repatriate rental income.',
    url: 'https://agrawalkhandelwal.com/blog/nri-investing-in-indian-real-estate-a-complete-compliance-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Investing in Indian Real Estate: A Complete Compliance Guide',
    description: 'FEMA rules, funding channels, and rental repatriation for NRIs buying property in India.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Investing in Indian Real Estate: A Complete Compliance Guide', 'nri-investing-in-indian-real-estate-a-complete-compliance-guide')

const articleLd = buildArticleLd({
  headline: 'NRI Investing in Indian Real Estate: A Complete Compliance Guide',
  description: 'FEMA rules for NRIs buying residential and commercial property in India: permitted vs restricted property types, funding channels, and repatriation of rental income.',
  datePublished: '2026-09-26',
  slug: 'nri-investing-in-indian-real-estate-a-complete-compliance-guide',
})

const faqs: [string, string][] = [
  [
    'Can an NRI buy residential or commercial property in India without RBI approval?',
    'Yes. Under the general permission granted by the Reserve Bank of India under FEMA, NRIs and OCIs can purchase residential and commercial immovable property in India without any prior RBI approval, and there is no limit on the number of such properties they can own.',
  ],
  [
    'Can an NRI buy agricultural land, farmhouses, or plantation property?',
    'No. NRIs and OCIs are barred from purchasing agricultural land, plantation property, or farmhouses under the FEMA Non-Debt Instruments Rules. The only ways an NRI can come to hold such land are inheritance, gift from a resident relative, or having owned it before becoming an NRI. Our detailed post on NRI agricultural land rules covers the holding and resale restrictions in full.',
  ],
  [
    'What funds can an NRI use to pay for property in India?',
    'Payment must be made through normal banking channels in Indian Rupees, using funds from an NRE, NRO, or FCNR(B) account, or by inward remittance from abroad. Payment in foreign currency notes or by traveller\'s cheque is not permitted, and cash payments are not allowed at all.',
  ],
  [
    'Can an NRI take a home loan in India to buy property?',
    'Yes. Authorised dealer banks and housing finance institutions can lend to NRIs for purchasing residential property in India, subject to the RBI\'s general conditions on loan-to-value, repayment source (EMIs can be paid from NRE/NRO accounts, remittances, or rental income from the property itself), and the usual KYC and income-eligibility checks applicable to any home loan.',
  ],
  [
    'How is rental income from property owned by an NRI repatriated abroad?',
    'Rental income is first credited to the NRI\'s NRO account after applicable TDS is deducted by the tenant. From the NRO account, up to USD 1 million per financial year (net of applicable taxes) can be repatriated abroad, subject to submitting Form 15CA and, where required, a chartered accountant\'s certificate in Form 15CB confirming the tax position.',
  ],
  [
    'Does buying property change an NRI\'s residential status under the Income Tax Act?',
    'No. Owning property in India, by itself, has no bearing on residential status. Residential status is determined purely by physical presence in India during the financial year under the day-count tests, not by asset ownership. Our residential status guide covers the 182-day and 120-day rules in detail.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NriRealEstateComplianceBlog() {
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
                NRI Investing in Indian Real Estate: A Complete Compliance Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 26, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>NRIs can buy <strong>residential and commercial</strong> property in India freely, with no RBI approval and no cap on the number of properties.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Agricultural land, plantations, and farmhouses</strong> cannot be purchased; only inherited, gifted by a resident relative, or held from before NRI status.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Payment must come through banking channels via <strong>NRE, NRO, or FCNR(B)</strong> funds; cash and foreign currency notes are not permitted.</li>
                    <li style={{ marginBottom: 0 }}>Rental income routes through the NRO account and can be repatriated up to <strong>USD 1 million per financial year</strong> after tax, with Form 15CA/15CB.</li>
                  </ul>
                </div>

                <p>Indian real estate remains one of the most common investment choices NRIs make, whether for eventual return, rental yield, or simply keeping a foothold in the home market. The purchase itself is straightforward for most property types, but it sits inside a compliance framework; FEMA on one side governing what can be bought and how it is paid for, and the Income Tax Act on the other governing what happens to the rental income and, eventually, the sale proceeds. This guide covers the buying and holding side end to end. For what happens when the same property is eventually sold, see our companion guide on <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI property sale in India</Link>.</p>

                <h2>What NRIs Can and Cannot Buy</h2>
                <p>Under the general permission granted to NRIs and OCIs under FEMA's Non-Debt Instruments Rules, the position is straightforward once you separate property into two buckets:</p>
                <ul>
                  <li><strong>Permitted without RBI approval:</strong> Residential property and commercial property, in any number, anywhere in India.</li>
                  <li><strong>Not permitted to purchase:</strong> Agricultural land, plantation property, and farmhouses. This restriction is absolute for a purchase transaction; it does not matter how the funds are routed or whether the buyer intends to use the land for a non-agricultural purpose.</li>
                </ul>
                <p>The only routes by which an NRI can come to hold agricultural land are inheritance, gift from a resident relative, or having owned it before the person became an NRI. Even then, resale of such inherited agricultural land is generally restricted to a person resident in India. We cover this in full depth, including the penalty exposure for a breach, in our dedicated post on <Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI agricultural land and FEMA rules</Link>; if agricultural or farm property is part of what you are evaluating, that is the more relevant starting point than this general guide.</p>

                <h2>Funding the Purchase</h2>
                <p>Every rupee used to buy the property must move through the formal banking system in Indian Rupees. The accepted sources are:</p>
                <ul>
                  <li><strong>Funds from an NRE account</strong> (Non-Resident External), which holds foreign earnings converted to rupees and is fully repatriable.</li>
                  <li><strong>Funds from an NRO account</strong> (Non-Resident Ordinary), which typically holds India-sourced income such as rent, dividends, or pension, and carries repatriation limits.</li>
                  <li><strong>Funds from an FCNR(B) account</strong>, a foreign-currency term deposit.</li>
                  <li><strong>Direct inward remittance</strong> from abroad through normal banking channels.</li>
                </ul>
                <p>What is explicitly not permitted: payment in foreign currency notes, payment by traveller&apos;s cheque, or cash payment of any kind. A builder or seller insisting on cash or an informal payment route outside these channels is a compliance red flag that should end the negotiation, not just a documentation inconvenience. For the mechanics of which account to hold and move funds through, our guide on <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO accounts and repatriation limits</Link> is a useful companion read.</p>

                <h2>Financing With a Home Loan</h2>
                <p>NRIs are eligible to borrow from Indian banks and housing finance companies to fund a residential property purchase, subject to the lender's standard loan-to-value norms, income documentation, and KYC checks applicable to non-resident borrowers. Loan repayment (EMIs) can be funded from an NRE or NRO account, through direct remittances from abroad, or from rental income generated by the property itself. Commercial property financing is available too, though lenders typically apply tighter eligibility and documentation standards than for a residential purchase.</p>

                <h2>Holding the Property: Rental Income and Repatriation</h2>
                <p>Once purchased, rental income earned on the property is taxable in India regardless of the owner's residential status, since it is income sourced in India. Practically, this plays out as follows:</p>
                <ol>
                  <li><strong>Tenant deducts TDS</strong> on rent paid to an NRI landlord under Section 195, at a materially higher rate than the TDS a resident landlord would face; this is one of the most commonly missed obligations on the tenant's side and worth flagging proactively when leasing out to a resident tenant.</li>
                  <li><strong>Net rent is credited to the NRI's NRO account.</strong> Rental income from Indian property must route through the NRO account, not the NRE account, since it is India-sourced.</li>
                  <li><strong>Filing an Indian tax return</strong> is typically required to report the rental income, claim allowable deductions (standard deduction, home loan interest), and reconcile any excess TDS for a refund.</li>
                  <li><strong>Repatriation abroad</strong> from the NRO account is permitted up to USD 1 million per financial year (net of applicable taxes), which covers both current rental accumulation and eventual sale proceeds together, not as two separate USD 1 million ceilings. This requires Form 15CA, and for larger or more complex remittances, a chartered accountant's certificate in Form 15CB confirming taxes have been properly accounted for.</li>
                </ol>
                <p>A common planning mistake is assuming rental income can simply be wired abroad on request; in practice, the NRO repatriation process is document-heavy, and getting the Form 15CA/15CB paperwork and tax reconciliation right before the funds are needed avoids delay at the bank's end.</p>

                <h2>Does Owning Property Affect Residential Status?</h2>
                <p>No. This is a common point of confusion. Residential status under the Income Tax Act is determined entirely by physical presence in India during the financial year (and preceding years), under the day-count tests; it has nothing to do with owning, or not owning, an asset in India. An NRI can own multiple Indian properties and remain a non-resident indefinitely, provided their actual days spent in India stay within the applicable thresholds. See our detailed breakdown in the <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>residential status and 182-day rule guide</Link> for how the day-count tests actually work.</p>

                <h2>Getting the Compliance Right From the Start</h2>
                <p>The purchase-side compliance for NRI real estate is largely front-loaded: get the funding channel and documentation right at the time of purchase, and the ongoing rental-income and eventual-sale compliance flows naturally from clean records. The two most common issues we see are payments routed outside proper banking channels (often at the seller's insistence) and rental income never being formally reported because it was assumed to be "small" or informal, both of which create real exposure when the property is eventually sold or the funds need to be repatriated in bulk.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning to buy or already own property in India as an NRI?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help NRIs structure FEMA-compliant property purchases, handle rental income tax filings, and manage NRO repatriation with Form 15CA/15CB.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Agricultural Land in India: FEMA Rules</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA &amp; Repatriation Limits</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: The 182-Day Rule</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

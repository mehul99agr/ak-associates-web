import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'NRI Selling Shares in an Indian Private Company: Tax & FEMA',
  description: 'What an NRI needs to handle when selling shares in an Indian private limited company: valuation under FEMA pricing guidelines, TDS under Section 393(2), capital gains tax, and FC-TRS reporting.',
  keywords: [
    'NRI selling shares Indian company', 'NRI unlisted shares capital gains', 'FC-TRS NRI share transfer',
    'FEMA pricing guidelines share sale', 'NRI selling business India', 'TDS on NRI share sale',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-selling-shares-indian-private-company-tax-fema' },
  openGraph: {
    title: 'NRI Selling Shares in an Indian Private Company: Tax & FEMA',
    description: 'Valuation under FEMA pricing guidelines, TDS, capital gains tax, and FC-TRS reporting for an NRI selling shares in an Indian private limited company.',
    url: 'https://agrawalkhandelwal.com/blog/nri-selling-shares-indian-private-company-tax-fema',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Selling Shares in an Indian Private Company',
    description: 'Valuation, TDS, capital gains tax, and FC-TRS reporting for an NRI selling shares in an Indian private limited company.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Selling Shares in an Indian Private Company: Tax & FEMA', 'nri-selling-shares-indian-private-company-tax-fema')

const articleLd = buildArticleLd({
  headline: 'NRI Selling Shares in an Indian Private Company: Tax & FEMA Compliance',
  description: 'The valuation, TDS, capital gains tax, and FC-TRS reporting steps an NRI needs to handle when selling shares in an Indian private limited company, whether to a resident, another NRI, or a foreign investor.',
  datePublished: '2026-07-20',
  slug: 'nri-selling-shares-indian-private-company-tax-fema',
})

const faqs: FaqPair[] = [
  ['Can an NRI sell shares in an Indian private limited company freely?', 'Generally yes, but the transaction needs to comply with FEMA pricing guidelines (the sale price cannot be below fair market value when selling to a resident, mirroring the pricing rule that applies to inbound FDI), the company\'s own share transfer restrictions under its articles of association, and any shareholders\' agreement provisions such as rights of first refusal or tag-along/drag-along clauses.'],
  ['How is fair market value determined for an unlisted company\'s shares?', 'Valuation is typically done under an internationally accepted pricing methodology; commonly the Discounted Cash Flow (DCF) method or Net Asset Value (NAV) method for an unlisted company, performed by a Registered Valuer or a Chartered Accountant qualified to issue the valuation. This valuation anchors both the FEMA pricing compliance and, often, the tax computation if the transaction value is questioned.'],
  ['Is TDS deducted when an NRI sells shares in a private company?', 'Yes. Where the buyer is a resident, TDS under Section 393(2) of the Income Tax Act 2025 (earlier Section 195) applies on the capital gains portion of the sale consideration paid to the NRI seller, similar to the TDS regime for NRI property sales. Because TDS is often computed on the gross sale value rather than the actual gain, an NRI seller with a low original cost relative to sale price can face significant over-deduction, which is where a Form 128 (earlier Form 13) lower deduction certificate becomes valuable.'],
  ['How is the capital gain taxed; short-term or long-term?', 'For unlisted shares, the holding period threshold for long-term treatment is different from listed shares; unlisted shares held beyond the specified period qualify for long-term capital gains treatment, while a shorter holding period is taxed as short-term capital gains at the applicable slab-linked or specified rate. The exact rates and holding period thresholds should be confirmed for the relevant assessment year, since capital gains provisions for unlisted securities are periodically revised.'],
  ['What FEMA reporting is required after the share transfer?', 'The Indian company (or the transferring/receiving party through their Authorised Dealer bank) reports the transfer via Form FC-TRS on the FIRMS portal, since it involves a transfer of shares between a resident and a non-resident (or in some structures, between two non-residents). This is separate from the income tax return reporting of the capital gain, and both need to be completed; FC-TRS does not substitute for the tax filing, or vice versa.'],
  ['Does DTAA relief apply if the NRI is tax resident in a treaty country?', 'It can. Depending on the specific DTAA between India and the NRI\'s country of tax residence, capital gains on the sale of shares in an Indian company may get relief from double taxation, or in some older treaties, a more favourable taxing right allocation. This needs a treaty-specific review; the relief available under, say, the India-Mauritius or India-Singapore treaty for share transactions has historically differed significantly from treaties with other jurisdictions, and treaty provisions have been amended over time, so the current text needs to be checked rather than relied on from memory.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NriSellingSharesBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI Selling Shares in an Indian Private Company: Tax &amp; FEMA Compliance</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 20, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>Selling shares in an Indian private company as an NRI touches valuation, TDS, capital gains tax, and FEMA reporting; all separately.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>The price must comply with FEMA pricing guidelines, typically anchored to a DCF or NAV valuation by a Registered Valuer or CA.</li>
                  <li style={{ marginBottom: '0.4rem' }}>TDS under Section 393(2) (earlier Section 195) applies when the buyer is a resident, often over-deducting relative to actual gain.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The transfer needs separate reporting via Form FC-TRS on the FIRMS portal, on top of the income tax return.</li>
                  <li style={{ marginBottom: 0 }}>DTAA relief depends entirely on the specific treaty with the NRI's country of residence; not a blanket rule.</li>
                </ul>
              </div>

              <p>An NRI exiting a family business, a startup they co-founded before moving abroad, or an angel investment in an Indian private company runs into a materially different process than selling listed shares on an exchange. There is no ready market price, the transaction needs a defensible valuation, and at least three separate compliance threads (FEMA pricing, tax deduction, and FEMA reporting) need to be handled correctly, on top of the actual tax computation.</p>

              <h2>Step One: Getting the Valuation Right</h2>
              <p>Unlike a listed share sale, there is no market price to simply use. FEMA pricing guidelines require that a sale of shares by an NRI to a resident be priced at not below fair market value; the mirror image of the rule that prevents a resident from selling to a non-resident above fair value. Fair value for an unlisted company is typically established using the <strong>Discounted Cash Flow (DCF)</strong> or <strong>Net Asset Value (NAV)</strong> method, prepared by a <strong>Registered Valuer</strong> or a Chartered Accountant authorised to issue the valuation report. This valuation is not a formality; it anchors both the FEMA compliance of the transaction and, if the transaction value is later questioned, the starting point for the tax computation as well.</p>

              <h2>Company and Shareholder-Level Restrictions</h2>
              <p>Before pricing and FEMA compliance even come into play, check the company&apos;s own constitutional documents. A private limited company&apos;s <strong>articles of association</strong> commonly restrict free transferability of shares, and a <strong>shareholders&apos; agreement</strong>, where one exists, often layers on additional mechanics; rights of first refusal for existing shareholders, tag-along or drag-along rights, or board consent requirements. Missing one of these procedural steps can make an otherwise properly priced and reported transaction defective at the corporate law level, independent of the tax and FEMA position being correct.</p>

              <h2>TDS on the Sale</h2>
              <p>Where the buyer is a resident Indian, <strong>TDS under Section 393(2) of the Income Tax Act, 2025</strong> (earlier <strong>Section 195</strong>) applies on the capital gains element of the payment made to the NRI seller; this is the same TDS provision that governs NRI property sales. As with property, TDS is often computed conservatively relative to the actual gain, particularly where the NRI&apos;s original acquisition cost was low (common for early founders or long-held angel investments), leading to meaningful over-deduction relative to the real tax liability. A <strong>Form 128 (earlier Form 13)</strong> lower deduction certificate application before the sale closes is the standard remedy; see our <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13/128 guide</Link> for the process, which works the same way here as for property sales.</p>

              <h2>Capital Gains Tax Treatment</h2>
              <p>Unlisted shares carry their own holding-period threshold for long-term versus short-term classification, distinct from listed shares; a longer holding period is needed before the more favourable long-term treatment applies. The applicable rates and thresholds for unlisted securities have been revised across recent Finance Acts, so the current position for your specific sale year should be confirmed rather than assumed. This is also where <strong>DTAA relief</strong> becomes relevant: depending on the NRI seller&apos;s country of tax residence and the specific treaty text; which varies significantly by jurisdiction and has itself been amended over time for several major India treaty partners; there may be relief from double taxation or a different allocation of taxing rights on the share sale gain. See our <Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>country-wise DTAA guide</Link> for how this is assessed by corridor.</p>

              <h2>FEMA Reporting: Form FC-TRS</h2>
              <p>Once the transfer is executed, it needs to be separately reported to RBI via <strong>Form FC-TRS</strong> on the <strong>FIRMS portal</strong>, filed within the prescribed timeline through the relevant party&apos;s Authorised Dealer bank, since the transaction involves a share transfer between a resident and a non-resident. This is a FEMA reporting obligation entirely distinct from the income tax return disclosure of the capital gain; completing one does not satisfy the other, and both are needed for the transaction to be fully compliant.</p>

              <h2>Repatriating the Sale Proceeds</h2>
              <p>Once tax is settled and TDS reconciled, the NRI seller typically wants to repatriate the net proceeds. This follows the same repatriation framework used for other NRI transactions; proceeds routed through an NRO account are subject to the <strong>USD 1 million annual repatriation limit</strong> with Form 145/146 certification, similar to the process for property sale proceeds. See our <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO repatriation guide</Link> for the full process.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Selling shares or an equity stake in an Indian company?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle the valuation coordination, TDS/lower deduction certificate, capital gains computation, and FC-TRS reporting end to end.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 (Now 128) Lower Deduction Certificate</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>India DTAA Guide for NRIs by Country</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fdi-in-india-routes-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>FDI in India: Routes &amp; Compliance Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

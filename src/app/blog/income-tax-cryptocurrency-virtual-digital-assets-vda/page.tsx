import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)',
  description: 'How crypto and NFT gains are taxed in India: flat 30% tax under Section 115BBH, 1% TDS under Section 194S, no loss set-off, and what counts as a Virtual Digital Asset.',
  keywords: [
    'income tax on cryptocurrency india', 'virtual digital asset tax', 'VDA tax section 115BBH',
    'crypto tax india 2026', 'TDS on crypto section 194S', 'NFT tax india',
    'crypto capital loss set off', 'how is bitcoin taxed in india',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/income-tax-cryptocurrency-virtual-digital-assets-vda' },
  openGraph: {
    title: 'Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)',
    description: 'Flat 30% tax under Section 115BBH, 1% TDS under Section 194S, no loss set-off, and what qualifies as a VDA under Indian tax law.',
    url: 'https://agrawalkhandelwal.com/blog/income-tax-cryptocurrency-virtual-digital-assets-vda',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)',
    description: 'How crypto and NFT gains are taxed in India: rate, TDS, and the no-loss-set-off rule explained.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)', 'income-tax-cryptocurrency-virtual-digital-assets-vda')

const articleLd = buildArticleLd({
  headline: 'Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)',
  description: 'A complete guide to how India taxes cryptocurrency and other Virtual Digital Assets: the flat 30% rate under Section 115BBH, 1% TDS under Section 194S, and the strict no-loss-set-off rule.',
  datePublished: '2026-07-27',
  slug: 'income-tax-cryptocurrency-virtual-digital-assets-vda',
})

const faqs: [string, string][] = [
  [
    'What is the income tax rate on cryptocurrency in India?',
    'Gains from transferring a Virtual Digital Asset, including cryptocurrency and NFTs, are taxed at a flat 30% under Section 115BBH, plus applicable surcharge and cess. This rate applies regardless of your income slab and regardless of how long you held the asset, so there is no separate short-term or long-term distinction the way there is for equity or property.',
  ],
  [
    'Can I deduct expenses or set off losses against crypto gains?',
    'No deductions are allowed except the actual cost of acquiring the asset; expenses like exchange platform fees claimed separately, internet costs, or mining infrastructure costs cannot be deducted. Losses on one VDA cannot be set off against gains on another VDA, against any other head of income, or carried forward to future years. Each transfer is effectively taxed in isolation.',
  ],
  [
    'What is Section 194S and when does TDS on crypto apply?',
    'Section 194S requires the buyer (or the exchange, in most practical cases) to deduct 1% TDS on the consideration paid for transferring a VDA. The threshold for deducting is payments exceeding Rs 50,000 in a financial year for specified persons (broadly, those with business/professional income above certain limits) and Rs 10,000 in other cases. Most Indian exchanges deduct this automatically before crediting sale proceeds.',
  ],
  [
    'Does gifting or receiving crypto attract tax?',
    'Receiving a VDA as a gift is generally taxable in the recipient\'s hands under the general gift taxation rules (Section 56(2)(x), now Section 92 under the Income Tax Act 2025) if the value exceeds Rs 50,000, unless it comes from a relative or falls under another specific exemption. See our detailed guide on gift taxation for the full relative and occasion-based exemption list.',
  ],
  [
    'Do I have to report crypto holdings even if I have not sold anything?',
    'The ITR forms require disclosure of income from transfer of VDAs in the specific Schedule VDA whenever a transfer has occurred during the year. Merely holding crypto without any sale, swap, or spend transaction during the year does not by itself trigger the 30% tax, but any exchange of one crypto for another, or crypto for goods and services, is treated as a taxable transfer.',
  ],
  [
    'Is trading one cryptocurrency for another taxable?',
    'Yes. Swapping one VDA for another (for example, Bitcoin for Ethereum) is treated as a transfer of the first asset and a taxable event, even though no rupee ever changed hands. Tax is computed on the fair value of the asset received, less the cost of acquisition of the asset given up.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function CryptoVDATaxBlog() {
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
                Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 27, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Gains from crypto, NFTs, and other Virtual Digital Assets are taxed at a flat <strong>30%</strong> under Section 115BBH, regardless of your slab or holding period.</li>
                    <li style={{ marginBottom: '0.4rem' }}>No deduction is allowed except the cost of acquisition, and <strong>losses cannot be set off</strong> against other VDA gains, other income, or carried forward.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Buyers/exchanges must deduct <strong>1% TDS under Section 194S</strong> on qualifying transfers; this is separate from the 30% tax itself.</li>
                    <li style={{ marginBottom: 0 }}>Swapping one crypto for another, or crypto for goods/services, is a taxable transfer even without a cash sale.</li>
                  </ul>
                </div>

                <p>Cryptocurrency taxation in India is deliberately strict, and it catches many investors off guard because it does not follow the familiar capital gains playbook used for stocks or property. There is a flat rate, no favourable long-term treatment, and a hard rule against offsetting losses. Here is exactly how the law treats crypto, NFTs, and other Virtual Digital Assets.</p>

                <h2>What Counts as a Virtual Digital Asset (VDA)?</h2>
                <p>The Income Tax Act defines a Virtual Digital Asset broadly to include any information, code, number, or token generated through cryptographic means, and specifically covers cryptocurrencies (Bitcoin, Ethereum, and similar tokens), Non-Fungible Tokens (NFTs), and other digital assets notified by the government. Certain items such as gift cards, mileage points, and subscription vouchers have been excluded from the definition, but for practical purposes, any coin or token traded on a crypto exchange falls squarely within the VDA regime.</p>

                <h2>The Flat 30% Tax Rate Under Section 115BBH</h2>
                <p>Income from the transfer of a VDA is taxed at a flat <strong>30%</strong> under Section 115BBH, plus applicable surcharge and health and education cess. This rate has been stable since it was introduced with effect from April 1, 2022 and applies uniformly:</p>
                <ul>
                  <li>Regardless of your total income slab; even if your other income is below the basic exemption limit, VDA gains are still taxed at 30%.</li>
                  <li>Regardless of holding period; there is no distinction between short-term and long-term gains, unlike equity shares or immovable property.</li>
                  <li>Regardless of whether the gain arises from investing, trading, mining rewards, staking rewards, or airdrops, once converted or transferred.</li>
                </ul>

                <h2>No Deductions, No Loss Set-Off</h2>
                <p>This is the provision that surprises most investors. While computing income from transfer of a VDA, <strong>the only deduction permitted is the actual cost of acquiring the asset</strong>. Every other cost, including exchange platform charges billed separately, internet or hardware expenses for mining, and interest on funds borrowed to buy crypto, is disallowed.</p>
                <p>Even more restrictive is the loss rule: a loss from one VDA transaction <strong>cannot be set off against a gain from a different VDA</strong>, let alone against salary, business income, or any other head. It also cannot be carried forward to a later year. If you booked a loss on one coin and a profit on another in the same year, you still pay 30% tax on the full profit, with no relief from the loss sitting alongside it.</p>

                <h2>Section 194S: 1% TDS on Crypto Transfers</h2>
                <p>Separately from the 30% tax on the gain itself, Section 194S requires <strong>1% TDS</strong> to be deducted on the transfer consideration whenever a VDA changes hands. In practice, registered Indian exchanges deduct and deposit this automatically before crediting sale proceeds to the seller.</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Payer category</th>
                      <th style={thStyle}>TDS threshold (per financial year)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Specified persons (broadly, individuals/HUFs with business or professional turnover above the tax audit threshold)</td>
                      <td style={tdStyle}>Aggregate consideration above Rs 50,000</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>All other persons</td>
                      <td style={tdAltStyle}>Aggregate consideration above Rs 10,000</td>
                    </tr>
                  </tbody>
                </table>
                <p>This TDS is not the final tax; it is credited against your total tax liability when you file your return, similar to TDS on salary or interest. If your actual crypto tax liability is lower than the cumulative TDS deducted across exchanges during the year (uncommon given the flat 30% rate, but possible with small or loss-making portfolios), the excess can be claimed as a refund.</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-light)' }}><em>Note: commentary carrying the Income Tax Act 2025 forward generally treats Sections 115BBH and 194S as continuing without a change in substance; at the time of writing, secondary sources had not uniformly settled on their renumbered section citations under the new Act, so we have retained the familiar 1961-Act numbers here and will update this page once the renumbering is confirmed.</em></p>

                <h2>Swaps, Airdrops, and Crypto-for-Goods Transactions</h2>
                <p>A common misconception is that tax only applies when crypto is converted back to rupees. In reality, any of the following counts as a taxable transfer:</p>
                <ul>
                  <li><strong>Crypto-to-crypto swaps:</strong> Exchanging Bitcoin for Ethereum is treated as disposing of the Bitcoin at its fair value, triggering tax on the gain even though no fiat currency was received.</li>
                  <li><strong>Spending crypto on goods or services:</strong> Paying for something with crypto is treated the same way as selling it for cash and then paying.</li>
                  <li><strong>Airdrops and staking rewards:</strong> Generally taxable as income when received (at fair value, typically under "income from other sources"), with the 30% VDA regime applying again on a subsequent transfer, using that fair value as the cost base.</li>
                </ul>

                <h2>Reporting Crypto Income in Your ITR</h2>
                <p>Income tax return forms include a dedicated Schedule VDA where every transfer during the year must be reported, including the date of acquisition, date of transfer, cost, sale consideration, and resulting gain or loss. Keeping exchange-wise transaction statements and cost records through the year makes this a routine filing exercise; reconstructing it after the fact from memory rarely goes well when multiple exchanges and wallets are involved.</p>

                <p>If you have crypto or NFT transactions to report this year, or are unsure how staking, mining, or an international exchange account fits into this framework, our team can review your transaction history and prepare an accurate Schedule VDA computation before you file. For broader NRI-specific questions on foreign asset disclosure alongside crypto holdings, see our <Link href="/blog/schedule-fa-foreign-asset-disclosure-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Schedule FA guide</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help reporting crypto or VDA income correctly?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We reconcile exchange statements, compute Schedule VDA figures, and make sure your TDS credits are correctly claimed.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20crypto%20%2F%20VDA%20income%20tax%20filing." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-56-2-x-tax-on-gifts-received-rs-50000" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 56(2)(x): Tax on Gifts Received Above Rs 50,000</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-on-lottery-game-shows-online-gaming-winnings" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax on Lottery, Game Shows & Online Gaming Winnings</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/schedule-fa-foreign-asset-disclosure-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Schedule FA: Foreign Asset Disclosure for Returning Indians</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Section 56(2)(x): Tax on Gifts Received Above Rs 50,000',
  description: 'Section 56(2)(x) (now Section 92) explained for resident taxpayers: the Rs 50,000 threshold, the full relative-exemption list, marriage and other specific-occasion exemptions, and how gifted property is taxed.',
  keywords: [
    'section 56(2)(x) income tax act', 'tax on gifts received india', 'gift tax exemption relatives',
    'gift tax rs 50000 threshold', 'section 92 income tax act 2025 gift', 'gift tax marriage exemption',
    'is gift from friend taxable', 'immovable property gift tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-56-2-x-tax-on-gifts-received-rs-50000' },
  openGraph: {
    title: 'Section 56(2)(x): Tax on Gifts Received Above Rs 50,000',
    description: 'The Rs 50,000 threshold, the full relative-exemption list, marriage and other specific-occasion exemptions, and how gifted property is valued and taxed for resident taxpayers.',
    url: 'https://agrawalkhandelwal.com/blog/section-56-2-x-tax-on-gifts-received-rs-50000',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 56(2)(x): Tax on Gifts Received Above Rs 50,000',
    description: 'The relative-exemption list, occasion-based exemptions, and property valuation rules for gift taxation in India.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 56(2)(x): Tax on Gifts Received Above Rs 50,000', 'section-56-2-x-tax-on-gifts-received-rs-50000')

const articleLd = buildArticleLd({
  headline: 'Section 56(2)(x): Tax on Gifts Received Above Rs 50,000',
  description: 'A complete guide to Section 56(2)(x) (now Section 92 under the Income Tax Act 2025) for resident taxpayers: the Rs 50,000 threshold, the full relative-exemption list, occasion-based exemptions, and property valuation rules.',
  datePublished: '2026-09-26',
  slug: 'section-56-2-x-tax-on-gifts-received-rs-50000',
})

const faqs: [string, string][] = [
  [
    'What is the Rs 50,000 gift tax rule?',
    'Under Section 56(2)(x) (now Section 92 under the Income Tax Act 2025), any sum of money received without consideration is taxable as "income from other sources" if the aggregate value from all such gifts in a financial year exceeds Rs 50,000. Once the aggregate crosses the threshold, the entire amount becomes taxable, not just the excess over Rs 50,000.',
  ],
  [
    'Are gifts from parents or relatives taxable?',
    'No. Gifts of any amount received from a specified relative are fully exempt from tax, regardless of size. Specified relatives include spouse, siblings, siblings of spouse, siblings of either parent, any lineal ascendant or descendant, any lineal ascendant or descendant of the spouse, and the spouse of any of these individuals.',
  ],
  [
    'Is a wedding gift taxable in India?',
    'Gifts received by an individual on the occasion of their own marriage are fully exempt, regardless of the amount and regardless of who gives the gift, including friends and non-relatives. This is one of the few exemptions that is not limited to gifts from relatives. The exemption applies only to the couple getting married, not to gifts given at, say, a sibling\'s wedding to someone other than the bride or groom.',
  ],
  [
    'Is a gift from a friend taxable?',
    'Yes, if the aggregate value of gifts from that friend and any other non-relatives during the financial year exceeds Rs 50,000. A friend is not a "relative" for this provision, so ordinary friendship gifts above the threshold are taxed as income unless another specific exemption (such as marriage) applies.',
  ],
  [
    'How is a gift of property taxed differently from a gift of money?',
    'A gift of immovable property is taxable if its stamp duty value exceeds Rs 50,000 and no exemption applies; the full stamp duty value is taxed, subject to a tolerance band (currently up to 10% difference between stated consideration and stamp duty value being ignored). A gift of movable property such as shares, jewellery, or artwork is taxable if its fair market value exceeds Rs 50,000, computed under the applicable valuation rules for that asset class.',
  ],
  [
    'How is this different from gift tax rules for NRIs?',
    'The core Rs 50,000 threshold, relative-exemption list, and occasion-based exemptions under Section 56(2)(x)/Section 92 apply the same way to residents and NRIs. What differs for NRIs is the overlay of residential-status-based taxability (whether the gift is connected to India at all) and FEMA/LRS compliance on cross-border transfers. See our separate guide on NRI gift and inheritance tax rules for that NRI-specific layer.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function GiftTaxSection56Blog() {
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
                Section 56(2)(x): Tax on Gifts Received Above Rs 50,000
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
                    <li style={{ marginBottom: '0.4rem' }}>Gifts of money, movable property, or immovable property above <strong>Rs 50,000</strong> (aggregate per year) are taxable as &quot;income from other sources&quot; under Section 56(2)(x), now <strong>Section 92</strong> under the Income Tax Act 2025.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Gifts from a defined list of <strong>relatives are fully exempt</strong>, regardless of amount.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Specific-occasion exemptions exist too, most notably gifts received on your <strong>own marriage</strong>, and gifts under a will or inheritance.</li>
                    <li style={{ marginBottom: 0 }}>This post covers the <strong>general resident-taxpayer rule</strong>. NRIs face an additional residential-status and FEMA layer; see our linked NRI-specific guide.</li>
                  </ul>
                </div>

                <p>Most people assume gifts are simply tax-free. In reality, Section 56(2)(x) of the Income Tax Act (renumbered as <strong>Section 92</strong> under the Income Tax Act 2025) taxes a wide range of gifts once they cross a modest Rs 50,000 threshold, unless a specific exemption applies. This post covers the general rule that applies to any resident individual, HUF, or other taxpayer receiving a gift; not the NRI-specific overlay, which we cover separately.</p>

                <h2>The Basic Rule: What Triggers Tax on a Gift</h2>
                <p>Under Section 56(2)(x) (now Section 92), gifts received without consideration are taxable as &quot;income from other sources&quot; in the recipient&apos;s hands once the aggregate value in a financial year crosses <strong>Rs 50,000</strong>, across three categories:</p>
                <ul>
                  <li><strong>Money:</strong> Any sum received without consideration, aggregated across all gifts of money during the year.</li>
                  <li><strong>Immovable property:</strong> Land or a building received without consideration (or for inadequate consideration), where the stamp duty value exceeds Rs 50,000.</li>
                  <li><strong>Movable property:</strong> Shares, securities, jewellery, artwork, bullion, and similar specified assets received without consideration, where the fair market value exceeds Rs 50,000.</li>
                </ul>
                <p>An important practical point: once the aggregate value crosses Rs 50,000 in a category, <strong>the entire amount becomes taxable</strong>, not merely the excess over the threshold. Receiving Rs 60,000 in cash gifts from non-relatives during the year means the full Rs 60,000 is added to your taxable income, not just Rs 10,000.</p>

                <h2>The Relative-Exemption List</h2>
                <p>Gifts of any value from a <strong>specified relative</strong> are fully exempt, no matter how large. The specified relatives are:</p>
                <ul>
                  <li>Spouse</li>
                  <li>Brother or sister</li>
                  <li>Brother or sister of the spouse</li>
                  <li>Brother or sister of either parent</li>
                  <li>Any lineal ascendant or descendant (parents, grandparents, children, grandchildren)</li>
                  <li>Any lineal ascendant or descendant of the spouse</li>
                  <li>Spouse of any of the persons listed above</li>
                </ul>
                <p>Notably absent from this list: friends, cousins, and in-laws beyond a spouse&apos;s siblings/parents (a spouse&apos;s uncle or aunt, for instance, does not qualify). Gifts from these categories are treated the same as gifts from any stranger and are taxable once the Rs 50,000 threshold is crossed.</p>

                <h2>Specific-Occasion and Other Exemptions</h2>
                <p>Beyond the relative list, the law carves out a few situations where a gift is exempt regardless of who gives it:</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Exemption</th>
                      <th style={thStyle}>Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Gift on marriage</td>
                      <td style={tdStyle}>Received by the individual on the occasion of their own marriage, from any person</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>Gift under a will or by inheritance</td>
                      <td style={tdAltStyle}>Any amount or property received under a will or through inheritance</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Gift in contemplation of death</td>
                      <td style={tdStyle}>Received in contemplation of the donor&apos;s death</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>From a local authority</td>
                      <td style={tdAltStyle}>Gift from a local authority as defined under the Act</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>From certain funds/trusts/institutions</td>
                      <td style={tdStyle}>Registered charitable trusts, funds, universities, hospitals, and similar institutions covered under the Act</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>On certain corporate restructurings</td>
                      <td style={tdAltStyle}>Shares received under specified amalgamations, demergers, or business reorganisations</td>
                    </tr>
                  </tbody>
                </table>
                <p>The marriage exemption is the one that generates the most questions: it applies only to gifts received by the individual getting married, on that occasion, and does not extend to gifts given to other family members at the same wedding.</p>

                <h2>How Gifted Immovable Property Is Valued</h2>
                <p>When immovable property is gifted, the taxable value is its <strong>stamp duty value</strong> on the date of the transfer, not the amount, if any, actually paid. If the property is received for some consideration that is lower than the stamp duty value, the difference is taxed only if it exceeds the higher of Rs 50,000 or a specified tolerance percentage of the consideration (a safe harbour band designed to absorb minor, non-abusive valuation differences). Where a genuine gift deed is executed for a relative, no tax arises regardless of the property&apos;s value, since the relative exemption overrides the valuation rule entirely.</p>
                <p>For the recipient, the stamp duty value taken for this purpose also becomes the <strong>deemed cost of acquisition</strong> for computing capital gains if the property is sold later, which matters for the eventual tax computation even where no tax arose at the time of the gift itself.</p>

                <h2>How Gifted Movable Property Is Valued</h2>
                <p>For gifted shares, jewellery, bullion, or artwork, the taxable value is the asset&apos;s <strong>fair market value</strong> on the date of the gift, determined under the specific valuation methodology prescribed for that asset class (for unlisted shares, typically a net asset value or discounted cash flow based approach; for jewellery and bullion, valuation by a registered valuer). As with immovable property, gifts of movable property from a specified relative remain fully exempt regardless of value.</p>

                <h2>Resident vs NRI: Where This Post Stops</h2>
                <p>Everything above applies uniformly to any resident taxpayer receiving a gift, whether an individual, HUF, or other assessable entity. If you are an NRI, or you are a resident gifting money or property to an NRI relative abroad, an additional layer applies: residential-status-based taxability of whether the gift is even connected to India, plus FEMA and Liberalised Remittance Scheme (LRS) compliance for the cross-border transfer itself. That is a distinct set of rules from the general provision covered here, and we address it separately in our <Link href="/blog/nri-gift-inheritance-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Gift & Inheritance Tax guide</Link>.</p>

                <p>If you have received a significant gift this year, are planning to gift property or shares to a family member, or are unsure whether a specific transaction falls within an exemption, our team can review the facts and confirm the tax position before you file. For broader estate and succession planning questions, our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>advisory services</Link> page has more on how we can help.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Received or planning to give a large gift?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help you confirm whether a gift is exempt, correctly value gifted property, and report it accurately in your ITR.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20understanding%20gift%20tax%20under%20Section%2056(2)(x)." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-gift-inheritance-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Gift & Inheritance Tax: What Is Taxable and What Is Not</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-cryptocurrency-virtual-digital-assets-vda" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-on-lottery-game-shows-online-gaming-winnings" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax on Lottery, Game Shows & Online Gaming Winnings</Link></li>
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

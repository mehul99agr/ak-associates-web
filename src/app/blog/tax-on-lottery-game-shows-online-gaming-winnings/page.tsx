import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Tax on Lottery, Game Shows & Online Gaming Winnings',
  description: 'How lottery, game show, and online gaming winnings are taxed in India: flat 30% rate, Section 194BA TDS on net online gaming winnings, and why no basic exemption or deductions apply.',
  keywords: [
    'tax on lottery winnings india', 'game show winnings tax', 'online gaming tax section 194BA',
    'TDS on lottery winnings 194B', 'flat 30 percent tax winnings', 'net winnings online games tax',
    'KBC winnings tax', 'tax on crossword puzzle prize',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tax-on-lottery-game-shows-online-gaming-winnings' },
  openGraph: {
    title: 'Tax on Lottery, Game Shows & Online Gaming Winnings',
    description: 'Flat 30% tax, Section 194BA TDS on net online gaming winnings, and why no basic exemption or deductions apply to this income.',
    url: 'https://agrawalkhandelwal.com/blog/tax-on-lottery-game-shows-online-gaming-winnings',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax on Lottery, Game Shows & Online Gaming Winnings',
    description: 'How winnings from lotteries, game shows, and online games are taxed in India, and how TDS is deducted.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Tax on Lottery, Game Shows & Online Gaming Winnings', 'tax-on-lottery-game-shows-online-gaming-winnings')

const articleLd = buildArticleLd({
  headline: 'Tax on Lottery, Game Shows & Online Gaming Winnings',
  description: 'A complete guide to how India taxes lottery prizes, game show winnings, and online gaming income: the flat 30% rate, Section 194BA TDS on net online gaming winnings, and why no basic exemption applies.',
  datePublished: '2026-07-28',
  slug: 'tax-on-lottery-game-shows-online-gaming-winnings',
})

const faqs: [string, string][] = [
  [
    'What is the tax rate on lottery and game show winnings in India?',
    'Winnings from lotteries, crossword puzzles, card games, and game shows are taxed at a flat 30% under Section 115BB, plus applicable surcharge and cess, which works out to an effective rate close to 31.2% or higher once cess is added. This rate applies to the entire winning amount from the first rupee, with no basic exemption limit and no slab benefit.',
  ],
  [
    'Is TDS deducted before I receive lottery or game show prize money?',
    'Yes. Under Section 194B, the person paying out the prize (the lottery organiser or the show\'s production house) must deduct TDS at 30% on any single payout exceeding Rs 10,000 before releasing the winnings. What you receive is already net of this TDS, and the payer issues a TDS certificate reflecting the deduction.',
  ],
  [
    'How is online gaming taxed differently from lottery winnings?',
    'Online gaming winnings are taxed under a dedicated framework: Section 115BBJ charges net winnings at a flat 30%, and Section 194BA requires the gaming platform to deduct TDS on net winnings at the same rate, with no minimum threshold, either at the time of withdrawal or at the end of the financial year on the remaining balance. Lottery and game show winnings, by contrast, fall under the older Section 115BB/194B framework with a Rs 10,000 TDS threshold.',
  ],
  [
    'Can I claim deductions like Section 80C against lottery or gaming winnings?',
    'No. Winnings taxed under Section 115BB or Section 115BBJ cannot be reduced by any deduction under Chapter VI-A (Section 80C, 80D, and similar), nor can the basic exemption limit be applied against this income. The flat rate applies to the gross (or net winnings, for online games) amount regardless of your other deductions or investments.',
  ],
  [
    'Can I set off a loss from one online game against winnings from another?',
    'No. Net winnings from online games are computed per the platform\'s own withdrawal-based formula under Rule 133, and losses on one game or platform cannot be set off against winnings on another, nor against any other head of income. Each platform account is effectively assessed as its own closed pool for TDS purposes, though your final tax return computation still aggregates total net winnings for the year.',
  ],
  [
    'Do I need to report winnings if TDS has already been deducted?',
    'Yes. TDS deducted at source is not the end of the compliance obligation; the full winning amount must still be reported as income under "income from other sources" in your ITR, with the TDS already deducted claimed as a credit against your total tax liability. Under-reporting winnings that already appear in your Form 26AS/AIS is one of the more common triggers for a tax notice.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function LotteryGamingTaxBlog() {
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
                Tax on Lottery, Game Shows & Online Gaming Winnings (Section 194BA)
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 28, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Lottery, crossword, card game, and game show winnings are taxed at a flat <strong>30%</strong> under Section 115BB, with TDS under Section 194B on payouts above Rs 10,000.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Online gaming winnings follow a separate, stricter regime: Section 115BBJ taxes <strong>net winnings</strong> at 30%, and Section 194BA requires TDS with <strong>no minimum threshold</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>No basic exemption limit, no slab benefit, and no Chapter VI-A deductions apply to this income under either regime.</li>
                    <li style={{ marginBottom: 0 }}>Winnings must still be reported in your ITR even after TDS has been deducted at source.</li>
                  </ul>
                </div>

                <p>Winning money from a lottery, a television game show, or an online gaming app feels like a windfall, but Indian tax law treats this category of income more harshly than almost any other. There is no basic exemption, no benefit of your income slab, and in the case of online gaming, no minimum threshold before TDS kicks in. Here is how the rules actually work.</p>

                <h2>Lottery, Game Shows, and Card Games: Section 115BB and 194B</h2>
                <p>Winnings from lotteries, crossword puzzles, card games, betting, gambling, horse races, and television game shows (think KBC-style formats) are taxed under <strong>Section 115BB</strong> at a flat <strong>30%</strong>, plus surcharge and cess, taking the effective rate above 31%. This applies to the entire amount won, from the very first rupee; there is no basic exemption limit or slab-based relief the way there is for salary or business income.</p>
                <p>The payer, whether that is the lottery organiser, the state lottery department, or the broadcaster running the show, is required under <strong>Section 194B</strong> to deduct TDS at 30% on any single payment exceeding <strong>Rs 10,000</strong> before releasing the prize. In practice, most winners receive their prize money already net of this deduction, along with a TDS certificate for their records. Prizes in kind (a car, a holiday package) are handled by requiring the winner to pay the applicable tax before the prize is released, or by the payer bearing the tax and grossing up the value.</p>

                <h2>Online Gaming: A Separate, Stricter Regime</h2>
                <p>Online gaming winnings; from fantasy sports platforms, online rummy, poker, and similar apps; are governed by a dedicated framework introduced with effect from April 1, 2023, rather than the older Section 115BB/194B rules:</p>
                <ul>
                  <li><strong>Section 115BBJ</strong> taxes the <strong>net winnings</strong> from online games at a flat 30%.</li>
                  <li><strong>Section 194BA</strong> requires the gaming platform itself to deduct TDS at 30% on net winnings, computed under Rule 133, either at the time of withdrawal during the year or on the closing balance of the user account at the end of the financial year if funds are never withdrawn.</li>
                </ul>
                <p>The critical difference from lottery taxation is the <strong>absence of any minimum threshold</strong>. While Section 194B only triggers TDS above Rs 10,000, Section 194BA applies to net winnings of any size, meaning even a small profit balance withdrawn from a gaming app can attract TDS.</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Feature</th>
                      <th style={thStyle}>Lottery / Game Shows (194B)</th>
                      <th style={thStyle}>Online Gaming (194BA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Charging section</td>
                      <td style={tdStyle}>Section 115BB</td>
                      <td style={tdStyle}>Section 115BBJ</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>TDS section</td>
                      <td style={tdAltStyle}>Section 194B</td>
                      <td style={tdAltStyle}>Section 194BA</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Tax rate</td>
                      <td style={tdStyle}>30% flat</td>
                      <td style={tdStyle}>30% flat on net winnings</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>TDS threshold</td>
                      <td style={tdAltStyle}>Payout above Rs 10,000</td>
                      <td style={tdAltStyle}>No threshold</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>When TDS is deducted</td>
                      <td style={tdStyle}>Before payout</td>
                      <td style={tdStyle}>On withdrawal, or year-end balance</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-light)' }}><em>Note: some commentary tracking the Income Tax Act 2025 places the consolidated TDS provisions for such winnings under the Act&apos;s unified TDS section (Section 393) with an added sub-clause, but sources had not settled on a single confirmed citation at the time of writing; we have used the well-established 1961-Act numbers above and will update this page once the exact renumbering is confirmed.</em></p>

                <h2>Why No Deductions or Exemptions Apply</h2>
                <p>Both Section 115BB and Section 115BBJ are drafted as standalone charging provisions that override the normal computation rules. This means:</p>
                <ul>
                  <li><strong>No basic exemption limit:</strong> Even if your total income is otherwise below the taxable threshold, winnings taxed under these sections are still taxed at 30%.</li>
                  <li><strong>No Chapter VI-A deductions:</strong> Investments under Section 80C, health insurance under 80D, or any other Chapter VI-A deduction cannot be claimed against this income.</li>
                  <li><strong>No loss set-off:</strong> A loss on one game or one lottery ticket cannot be adjusted against a win on another, and there is no carry-forward of such losses.</li>
                  <li><strong>No expense deduction:</strong> Costs incurred to participate (entry fees, travel to a show, subscription costs) are not deductible against the winning amount.</li>
                </ul>

                <h2>Reporting Winnings in Your Tax Return</h2>
                <p>Winnings must be reported under "income from other sources" in your ITR even though TDS has already been deducted at source. The TDS reflected in Form 26AS/AIS is claimed as a credit against your computed tax liability at the time of filing. Because these winnings often show up automatically in your AIS from the payer's or platform's TDS filing, mismatches between what you report and what the department already has on record are a common and easily avoidable source of scrutiny notices.</p>
                <p>If you have received a sizeable lottery, game show, or online gaming payout this year and want to make sure it is reported correctly alongside your other income, or if you are structuring participation in a game show and want to understand the TDS mechanics upfront, get in touch with our team. For questions on how gifts (as opposed to winnings) are taxed, see our companion guide on <Link href="/blog/section-56-2-x-tax-on-gifts-received-rs-50000" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 56(2)(x) gift taxation</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Received lottery, game show, or online gaming winnings?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help you report winnings correctly, reconcile TDS credits, and avoid mismatches with your AIS/Form 26AS.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20reporting%20lottery%2Fgaming%20winnings%20for%20tax." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-cryptocurrency-virtual-digital-assets-vda" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax on Cryptocurrency & Virtual Digital Assets (VDA)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-56-2-x-tax-on-gifts-received-rs-50000" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 56(2)(x): Tax on Gifts Received Above Rs 50,000</Link></li>
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

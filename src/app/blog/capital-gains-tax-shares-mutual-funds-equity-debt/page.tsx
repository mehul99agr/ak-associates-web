import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'Capital Gains Tax on Shares & Mutual Funds: Equity vs Debt' },
  description: 'How resident Indians are taxed on shares and mutual fund gains: equity LTCG/STCG rates, the Rs 1.25 lakh exemption, and how debt fund taxation differs after the April 2023 rule change.',
  keywords: [
    'capital gains tax on shares India', 'equity mutual fund taxation India', 'debt mutual fund taxation India',
    'LTCG STCG on shares 2026', 'capital gains tax mutual funds resident', 'Section 112A capital gains',
    'debt fund tax slab rate', 'capital gains exemption Rs 1.25 lakh',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/capital-gains-tax-shares-mutual-funds-equity-debt' },
  openGraph: {
    title: 'Capital Gains Tax on Shares & Mutual Funds: Equity vs Debt',
    description: 'Equity LTCG/STCG rates, the Rs 1.25 lakh exemption, and how debt fund taxation differs, for resident Indian investors.',
    url: 'https://agrawalkhandelwal.com/blog/capital-gains-tax-shares-mutual-funds-equity-debt',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capital Gains Tax on Shares & Mutual Funds: Equity vs Debt',
    description: 'Equity LTCG/STCG rates, the Rs 1.25 lakh exemption, and how debt fund taxation differs, for resident Indian investors.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Capital Gains Tax on Shares & Mutual Funds: Equity vs Debt', 'capital-gains-tax-shares-mutual-funds-equity-debt')

const articleLd = buildArticleLd({
  headline: 'Capital Gains Tax on Shares & Mutual Funds: Equity vs Debt Taxation',
  description: 'A resident-focused guide to how listed shares, equity mutual funds, and debt mutual funds are taxed in India, including the Rs 1.25 lakh LTCG exemption and the April 2023 debt fund rule change.',
  datePublished: '2026-07-26',
  slug: 'capital-gains-tax-shares-mutual-funds-equity-debt',
})

const faqs: FaqPair[] = [
  [
    'What is the capital gains tax on shares in India for residents?',
    'For listed equity shares held over 1 year, long-term capital gains (LTCG) are taxed at 12.5% on gains above Rs 1.25 lakh in a financial year. Shares held for 1 year or less are taxed as short-term capital gains (STCG) at 20%. These rates apply under Section 112A (LTCG) and Section 111A (STCG) and are the same whether the shares are sold directly or through a broker.',
  ],
  [
    'How are equity mutual funds taxed differently from debt mutual funds?',
    'Equity mutual funds (schemes with at least 65% equity allocation) follow the same Section 112A/111A rates as direct shares: 12.5% LTCG above the Rs 1.25 lakh exemption for units held over 1 year, and 20% STCG otherwise. Debt mutual funds acquired on or after April 1, 2023 have no separate LTCG category at all; every unit is taxed as short-term capital gains at your income tax slab rate regardless of how long it is held.',
  ],
  [
    'Do residents pay TDS on mutual fund redemption like NRIs do?',
    'No. For resident investors, asset management companies do not deduct TDS on capital gains from equity or debt fund redemptions. TDS under Section 194K applies only to dividend/income distribution payouts above Rs 5,000 in a year, not to capital gains on redemption. NRIs, by contrast, face TDS on the capital gains itself at every redemption; see our separate guide on NRI mutual fund and stock taxation for that mechanics.',
  ],
  [
    'What happened to indexation benefit on debt funds and unlisted shares?',
    'The Finance Act 2024 removed the indexation benefit on capital assets sold after July 23, 2024, in exchange for a flat 12.5% LTCG rate (down from the earlier 20% with indexation). Debt fund units bought before April 1, 2023 that qualify for long-term treatment (over 36 months holding) are taxed at this flat 12.5% rate without indexation. Units bought on or after April 1, 2023 never reach LTCG status at all and are always taxed at slab rate.',
  ],
  [
    'Is there a way to reduce capital gains tax on shares and mutual funds legally?',
    'The main lever available to residents is the Rs 1.25 lakh annual LTCG exemption on equity shares and equity funds under Section 112A, which resets every financial year, so spreading redemptions across years can reduce the taxable portion. Tax-loss harvesting (booking losses on underperforming holdings to offset gains in the same year) is another standard, fully legal technique. There is no special exemption available for debt fund gains since they are taxed at slab rate.',
  ],
  [
    'Are gains from unlisted shares taxed the same way as listed shares?',
    'No. Unlisted shares do not fall under Section 112A. Long-term gains (holding period over 24 months) on unlisted shares are taxed at 12.5% without indexation, and short-term gains (24 months or less) are taxed at your applicable slab rate, not the flat 20% STCG rate that applies to listed shares.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function CapitalGainsSharesEquityDebtBlog() {
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
                Capital Gains Tax on Shares &amp; Mutual Funds: Equity vs Debt Taxation
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 24, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Listed shares and equity mutual funds: LTCG (over 1 year) at <strong>12.5%</strong> above a <strong>Rs 1.25 lakh</strong> annual exemption; STCG (1 year or less) at <strong>20%</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Debt mutual funds bought on or after April 1, 2023 are always taxed as short-term gains at your <strong>slab rate</strong>, no matter how long you hold them.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Residents face <strong>no TDS on capital gains</strong> from mutual fund redemption; that TDS obligation applies only to NRI investors.</li>
                    <li style={{ marginBottom: 0 }}>Indexation was removed from most capital asset sales after July 23, 2024, in exchange for flat 12.5% LTCG rates.</li>
                  </ul>
                </div>

                <p>This guide is for <strong>resident Indian investors</strong> in shares and mutual funds. If you are investing from outside India as an NRI, the rates below are largely the same, but the TDS mechanics are very different; see our dedicated <Link href="/blog/nri-mutual-fund-stock-taxation-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Mutual Fund &amp; Stock Taxation guide</Link> instead, since AMCs deduct TDS on every NRI redemption regardless of gain size, which does not happen for residents.</p>

                <h2>Equity Shares and Equity Mutual Funds</h2>
                <p>Listed equity shares and equity-oriented mutual funds (schemes holding at least 65% in equity) are taxed identically under Sections 112A and 111A:</p>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Holding Period</th><th style={thStyle}>Classification</th><th style={thStyle}>Tax Rate</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Over 1 year</td><td style={tdStyle}>Long-Term (LTCG)</td><td style={tdStyle}>12.5% on gains above Rs 1.25 lakh/year</td></tr>
                    <tr><td style={tdAltStyle}>1 year or less</td><td style={tdAltStyle}>Short-Term (STCG)</td><td style={tdAltStyle}>20% flat</td></tr>
                  </tbody>
                </table>
                <p>The Rs 1.25 lakh exemption under Section 112A applies per financial year, across all your equity LTCG put together, not per stock or per fund. Gains below that threshold in a year are entirely tax-free; only the excess is taxed at 12.5%.</p>

                <h2>Debt Mutual Funds: A Different System Entirely</h2>
                <p>Debt funds do not follow the equity rules above. Since the Finance Act 2023 rewrote how debt-oriented mutual funds (funds with less than 35% equity exposure) are taxed, the holding period stopped mattering for anything bought from April 1, 2023 onward:</p>
                <ul>
                  <li><strong>Units bought on or after April 1, 2023:</strong> Every gain, regardless of how many years you hold the units, is treated as short-term capital gains and taxed at your applicable income tax slab rate. There is no LTCG category for these units at all.</li>
                  <li><strong>Units bought before April 1, 2023:</strong> The older rules still apply if the holding period exceeds 36 months, gains qualify as LTCG, taxed at a flat 12.5% (without indexation, per the Finance Act 2024 change). Held 36 months or less, gains are STCG at slab rate.</li>
                </ul>
                <p>In practice, this means most debt fund investors today, holding units purchased in the last few years, are simply paying slab-rate tax on redemption, the same as interest income, with no long-term concession available.</p>

                <h2>Why This Matters for Portfolio Decisions</h2>
                <p>The tax gap between equity and debt funds is now structural rather than incidental. A high-income investor in the 30% slab holding a debt fund pays tax at 30% (plus surcharge and cess) on every rupee of gain, while the same investor holding an equity fund for over a year pays 12.5% above the Rs 1.25 lakh exemption. This does not mean debt funds are a poor choice; they still serve a different role (capital preservation, shorter horizons, lower volatility) but the after-tax return comparison between the two asset classes has shifted meaningfully since April 2023, and should be factored into any equity-versus-debt allocation decision, not just pre-tax return.</p>

                <h2>No TDS for Resident Investors</h2>
                <p>Unlike NRI investors, who face TDS deducted by the AMC or broker on every redemption, resident investors do not have TDS deducted on capital gains from mutual fund units or listed shares. The only TDS resident investors encounter in this space is under Section 194K, which applies to dividend or income distribution payouts from mutual funds above Rs 5,000 in a year; that is a distribution, not a capital gain, and it is a separate, much narrower obligation. This is one of the clearest practical differences between resident and NRI taxation in this area, so if you are advising a mixed-residency family (for example, a resident parent and an NRI child holding similar portfolios), do not assume the compliance steps are the same for both.</p>

                <h2>Unlisted Shares: A Third Set of Rules</h2>
                <p>If you hold shares in a private company (unlisted equity), neither Section 112A nor Section 111A applies. Instead: LTCG (holding over 24 months) is taxed at 12.5% without indexation, and STCG (24 months or less) is taxed at your slab rate rather than the flat 20% rate used for listed shares. This distinction matters for founders, early employees with vested shares, and angel investors exiting a private company; our <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup advisory</Link> team handles this category regularly alongside ESOP and cap table questions.</p>

                <h2>Reporting These Gains in Your ITR</h2>
                <p>Capital gains from shares and mutual funds must be reported under the Capital Gains schedule of your income tax return, with equity and debt gains classified separately and matched against your broker/AMC-issued capital gains statement and the transaction detail already visible in your Annual Information Statement (AIS). Mismatches between what you report and what AIS shows are a common trigger for a scrutiny notice, so reconciling the two before filing is worth the extra 20 minutes.</p>

                <p>Use our <Link href="/tools/capital-gains" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains Calculator</Link> to work out the exact tax on a specific sale, and if you are planning a larger portfolio rebalancing or exit, talk to us before you sell; the Rs 1.25 lakh exemption resets every financial year, and timing a sale across two financial years instead of one can materially change the tax outcome.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning a share or mutual fund sale?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help investors work out the exact capital gains impact before a sale, not after, so the exemption and timing decisions are made with full information.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20capital%20gains%20tax%20on%20shares%20or%20mutual%20funds." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-mutual-fund-stock-taxation-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Mutual Fund &amp; Stock Taxation in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/clubbing-of-income-spouse-minor-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>Clubbing of Income: Spouse &amp; Minor Rules</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/huf-taxation-india-formation-benefits-filing" style={{ color: 'var(--primary)', fontWeight: 600 }}>HUF Taxation in India</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/tools/capital-gains" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains Calculator</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

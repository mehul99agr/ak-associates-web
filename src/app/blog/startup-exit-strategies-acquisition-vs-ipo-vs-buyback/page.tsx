import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Startup Exit Strategies: Acquisition vs IPO vs Buyback',
  description: 'A founder-level comparison of the three main startup exit routes in India: acquisition (share sale vs slump sale), IPO (including the SME exchange), and share buyback under the Companies Act.',
  keywords: [
    'startup exit strategy India', 'startup acquisition vs IPO', 'SME IPO India', 'buyback of shares startup',
    'slump sale vs share sale startup', 'startup exit options India', 'IPO eligibility India startup',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/startup-exit-strategies-acquisition-vs-ipo-vs-buyback' },
  openGraph: {
    title: 'Startup Exit Strategies: Acquisition vs IPO vs Buyback',
    description: 'Acquisition, IPO, and buyback compared for Indian startup founders and investors planning an exit.',
    url: 'https://agrawalkhandelwal.com/blog/startup-exit-strategies-acquisition-vs-ipo-vs-buyback',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Exit Strategies: Acquisition vs IPO vs Buyback',
    description: 'The three main exit paths for Indian startups, compared side by side.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Startup Exit Strategies: Acquisition vs IPO vs Buyback', 'startup-exit-strategies-acquisition-vs-ipo-vs-buyback')

const articleLd = buildArticleLd({
  headline: 'Startup Exit Strategies: Acquisition vs IPO vs Buyback',
  description: 'A comparative overview of acquisition, IPO, and buyback as exit routes for Indian startup founders and investors, including process basics and Companies Act buyback limits.',
  datePublished: '2026-08-31',
  slug: 'startup-exit-strategies-acquisition-vs-ipo-vs-buyback',
})

const faqs: [string, string][] = [
  [
    'What is the difference between a share sale and a slump sale in an acquisition?',
    'In a share sale, the acquirer buys shares directly from existing shareholders, and the target company continues to exist with a new owner, carrying forward all its assets, liabilities, contracts, and history. In a slump sale, the company sells its business (or a specific undertaking) as a going concern for a lump sum, without assigning individual values to each asset, and the buyer typically picks up the business inside a different corporate entity. Share sales are more common for whole-company startup acquisitions; slump sales are more common when only a specific business line or product is being carved out and sold.',
  ],
  [
    'Can an Indian startup list on the main stock exchange, or does it need the SME platform first?',
    'It depends on the company\'s financial track record and size, not its startup status as such. Companies that do not yet meet the profitability, net worth, and operating history thresholds for a main-board IPO can list on the SME platforms of the NSE and BSE instead, which have lower eligibility bars. Many companies use an SME listing as a stepping stone and later migrate to the main board once they meet the higher thresholds, though migration itself has its own conditions and is not automatic.',
  ],
  [
    'What is the maximum amount a company can buy back in one year?',
    'Under Section 68 of the Companies Act, 2013, a company\'s buyback in a financial year generally cannot exceed 25% of its total paid-up equity share capital, and any buyback exceeding 10% of paid-up capital and free reserves (up to that 25% ceiling) requires a special resolution passed by shareholders at a general meeting, not just a board resolution. The company must also maintain a post-buyback debt-to-equity ratio of not more than 2:1. These figures should be confirmed against the latest rules at the time of an actual transaction, since buyback regulations are periodically revised.',
  ],
  [
    'How long must a company wait between two buybacks?',
    'The Companies Act requires a minimum gap of one year (twelve months) from the closure of one buyback offer before the company can make a fresh buyback offer. Separately, a company generally cannot issue the same kind of shares it bought back for six months after completing the buyback, except in limited cases like a bonus issue or shares issued to discharge an existing obligation.',
  ],
  [
    'Which exit route gives the best valuation, acquisition, IPO, or buyback?',
    'There is no universal answer; it depends on the company\'s growth stage, market conditions, and who is exiting. An IPO can unlock the highest headline valuation and public-market liquidity but only works for companies that meet listing eligibility and have the scale to sustain public-company reporting obligations. An acquisition can move faster and suits companies that fit strategically within a larger buyer. A buyback is usually the narrowest exit, most often used to let a specific founder or early investor cash out partially without bringing in a new owner or going public, rather than as a whole-company exit event.',
  ],
]

const faqLd = buildFaqLd(faqs)

export default function StartupExitStrategiesBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Startup Exit Strategies: Acquisition vs IPO vs Buyback</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 31, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>

            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Acquisition</strong> (share sale or slump sale) is usually the fastest full exit and the most common outcome for Indian startups.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>IPO</strong>, including the SME exchange as a lower-threshold stepping stone, offers liquidity and valuation upside but demands scale and public-company readiness.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Buyback</strong> under Section 68 of the Companies Act is capped at <strong>25% of paid-up equity capital</strong> in a year and needs a <strong>one-year gap</strong> between offers; it is usually a partial exit, not a full one.</li>
                  <li style={{ marginBottom: 0 }}>The right route depends on company stage, buyer appetite, and whether the goal is a full exit or partial liquidity.</li>
                </ul>
              </div>

              <p>Most founders and early investors think about an exit only once one is actually on the table, by which point the structural choices are already narrower than they need to be. Understanding the three broad exit paths, acquisition, IPO, and buyback, before a specific opportunity appears makes it easier to negotiate from a position of knowing what "good" looks like for each, rather than reacting to whatever term sheet lands first.</p>

              <h2>Acquisition: Share Sale vs Slump Sale</h2>
              <p>Acquisition is the most common exit route for Indian startups by a wide margin; most successful companies that exit at all are acquired rather than listed. There are two structurally different ways an acquisition can happen:</p>
              <ul>
                <li><strong>Share sale:</strong> the acquirer buys shares directly from existing shareholders (founders, investors, ESOP holders after exercise). The target company itself continues to exist unchanged as a legal entity, simply under new ownership, and all its contracts, licences, liabilities, and history carry forward with it. This is the default structure when a buyer wants the whole company, including things that are hard to separately transfer, like customer contracts, regulatory registrations, and employment relationships.</li>
                <li><strong>Slump sale:</strong> instead of buying shares, the acquirer buys the business itself, or a specific undertaking within it, as a going concern for a lump sum consideration, without itemising values against individual assets and liabilities. The selling company usually continues to exist (often as a shell or with its remaining businesses), while the acquired business moves into a different corporate entity. This is more common when a buyer wants only a specific product line, business unit, or asset bundle rather than the entire company, including its unrelated liabilities.</li>
              </ul>
              <p>The typical process for either structure runs through a term sheet, exclusivity, financial and legal due diligence (see our <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>due diligence checklist</Link> for what buyers actually dig into), a definitive agreement with representations, warranties, and indemnities, regulatory or shareholder approvals where required, and closing with fund transfer and share or asset transfer. Tax treatment differs materially between the two structures, share sale typically triggers capital gains for the selling shareholders, while a slump sale is taxed differently at the company level, so structure should be settled early with tax advice, not decided by the buyer\'s preference alone.</p>

              <h2>IPO: Main Board and the SME Exchange</h2>
              <p>An IPO (Initial Public Offering) converts a private company into a publicly listed one, letting existing shareholders sell shares to the public and giving the company access to public capital markets going forward. For most startups, an IPO is a later-stage event than acquisition, reserved for companies with enough scale, revenue history, and governance maturity to meet listing requirements and sustain the ongoing disclosure obligations of being a public company.</p>
              <p>India\'s exchanges offer two tiers relevant here. The <strong>main board</strong> (NSE/BSE) has higher eligibility thresholds around profitability, net worth, and operating track record. The <strong>SME platforms</strong> of the NSE and BSE exist specifically for smaller companies that do not yet meet main-board thresholds, with a lower minimum post-issue capital requirement and a lighter (though still real) compliance and disclosure regime. A company can list on the SME platform first and migrate to the main board later once it meets the higher-tier thresholds and follows the migration process, making the SME exchange a genuine stepping stone rather than a permanently separate track.</p>
              <p>Beyond eligibility, an IPO requires a much longer runway than an acquisition: appointing merchant bankers, preparing a draft red herring prospectus, regulatory review, roadshows, pricing, and allotment, typically spanning many months from decision to listing, plus the ongoing cost and discipline of quarterly public reporting afterward. It suits companies planning to keep operating and growing post-exit under public ownership, not founders looking for a clean, final exit.</p>

              <h2>Buyback: A Partial Exit Under the Companies Act</h2>
              <p>A buyback is different in character from the other two: instead of a new owner coming in, the <strong>company itself repurchases shares</strong> from existing shareholders, most often used to let a specific investor or founder exit partially, return excess cash to shareholders, or consolidate ownership without diluting the remaining shareholders further. It is rarely a whole-company exit event the way an acquisition or IPO is.</p>
              <p>Buybacks under Section 68 of the Companies Act, 2013 are subject to defined limits:</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Condition</th><th style={thStyle}>Rule</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Maximum buyback in a financial year</td><td style={tdStyle}>Up to 25% of total paid-up equity share capital</td></tr>
                    <tr><td style={tdAltStyle}>Approval above 10% of paid-up capital and free reserves</td><td style={tdAltStyle}>Special resolution required (shareholder approval at a general meeting), not just a board resolution</td></tr>
                    <tr><td style={tdStyle}>Post-buyback debt-to-equity ratio</td><td style={tdStyle}>Must not exceed 2:1</td></tr>
                    <tr><td style={tdAltStyle}>Gap between two buyback offers</td><td style={tdAltStyle}>Minimum one year (twelve months) from closure of the previous offer</td></tr>
                    <tr><td style={tdStyle}>Completion timeline</td><td style={tdStyle}>Buyback must be completed within one year of the resolution approving it</td></tr>
                  </tbody>
                </table>
              </div>
              <p>These limits mean a buyback is structurally capped in size and cannot be used as a mechanism to exit every shareholder at once; it works best as a targeted, partial liquidity tool. It also requires the company to have genuine free reserves or securities premium available to fund the repurchase, which makes it a realistic option mainly for profitable or well-capitalised companies rather than early-stage, cash-constrained startups.</p>

              <h2>Choosing Between the Three</h2>
              <p>As a rough framework: acquisition suits founders and investors looking for a complete, relatively fast exit and a company that fits strategically into a larger buyer\'s plans. IPO suits companies with the scale and governance readiness to operate as a public entity and where the goal is public-market liquidity plus continued independent growth. Buyback suits a narrower, partial-liquidity need, typically one investor or founder cashing out some or all of their stake while the company continues privately held. None of these is mutually exclusive over a company\'s life; a company might do an SME IPO years after an early investor already exited through a buyback, or complete a strategic acquisition of one business line via slump sale while continuing to build toward its own eventual IPO on the remainder.</p>
            </div>

            <PostCTA
            heading="Planning an exit or a buyback for your company?"
            description="We advise founders and investors on acquisition structuring, IPO readiness, and buyback compliance under the Companies Act."
            secondaryLabel="Startup Advisory"
            secondaryHref="/startups"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Fundraising</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Convertible Notes vs Equity: FEMA Rules</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

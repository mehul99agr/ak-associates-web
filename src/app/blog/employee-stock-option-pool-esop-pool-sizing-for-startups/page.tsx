import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Employee Stock Option Pool (ESOP Pool) Sizing for Startups',
  description: 'How to size an ESOP option pool at seed, Series A, and Series B: pre-money vs post-money pool creation, founder dilution impact, pool refreshes, and board/shareholder approval mechanics.',
  keywords: [
    'ESOP pool sizing', 'option pool size startup India', 'pre-money option pool', 'post-money option pool',
    'ESOP pool refresh', 'option pool dilution founders', 'series A option pool', 'esop pool expansion approval',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/employee-stock-option-pool-esop-pool-sizing-for-startups' },
  openGraph: {
    title: 'Employee Stock Option Pool (ESOP Pool) Sizing for Startups',
    description: 'Typical pool sizes at seed/Series A/B, pre-money vs post-money pool creation, dilution impact, refreshes, and approval mechanics.',
    url: 'https://agrawalkhandelwal.com/blog/employee-stock-option-pool-esop-pool-sizing-for-startups',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESOP Pool Sizing for Startups',
    description: 'Why the option pool is usually created pre-money, and what that actually costs founders in dilution.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Employee Stock Option Pool (ESOP Pool) Sizing for Startups', 'employee-stock-option-pool-esop-pool-sizing-for-startups')

const articleLd = buildArticleLd({
  headline: 'Employee Stock Option Pool (ESOP Pool) Sizing for Startups',
  description: 'Typical ESOP pool size ranges at seed, Series A, and Series B, pre-money vs post-money pool creation and its dilution impact on founders, pool refresh considerations, and approval mechanics for pool expansion.',
  datePublished: '2026-08-20',
  slug: 'employee-stock-option-pool-esop-pool-sizing-for-startups',
})

const faqs: [string, string][] = [
  [
    'How big should an ESOP pool be at the seed stage?',
    'There is no single fixed number that applies to every company, but a commonly seen range at seed stage is roughly 10 to 12 percent of fully diluted equity, sized to support around 15 to 20 key hires over the following 18 to 24 months. The right figure for a specific company still depends on the hiring plan, sector talent costs, and what the lead investor expects to see before agreeing terms.',
  ],
  [
    'Is the ESOP pool created before or after the investment amount is added, and does it matter?',
    'It matters a lot. Investors typically require the pool to be created or topped up on a pre-money basis, meaning the dilution from the new pool is absorbed by existing shareholders, mainly the founders, before the investor\'s money comes in. This makes the investor\'s effective post-money ownership percentage unaffected by the pool size, while founders bear the full dilution cost of any pool increase. Reviewing whether a pool requirement is pre-money or post-money is one of the most consequential, and most overlooked, points in a term sheet.',
  ],
  [
    'Does creating a bigger option pool dilute investors as well as founders?',
    'Only if it is negotiated on a post-money basis, which is uncommon in practice. In the standard pre-money pool-creation structure, the investor\'s stated ownership percentage in the round is calculated after the pool is already carved out of the existing cap table, so the investor\'s effective ownership is protected and the dilution falls on the founders and any existing shareholders who are not part of the new round.',
  ],
  [
    'What is an ESOP pool refresh, and when does it typically happen?',
    'A pool refresh (or top-up) is an additional allocation to the option pool at a later financing round, once the original pool has been mostly granted out or is insufficient for the next phase of hiring. It is common for a fresh pool top-up to be negotiated as part of each new priced round, often in a broadly similar range as the original allocation, again usually structured pre-money for that round, so founders should factor an expected refresh into their long-term dilution modelling rather than being surprised by it at each round.',
  ],
  [
    'What corporate approvals are needed to expand an ESOP pool in an Indian private limited company?',
    'Expanding the pool means increasing the number of shares reserved under the ESOP scheme, which generally requires Board approval followed by shareholder approval by special resolution, since it affects the company\'s authorised and reserved share capital position. If the increase also requires an increase in authorised share capital, that needs its own separate shareholder resolution and ROC filing before the expanded pool can be created.',
  ],
  [
    'How is an ESOP pool different from ESOP vesting or ESOP taxation?',
    'The pool is simply the reserved block of shares/options set aside for future grants; it is a cap-table and dilution question. Vesting is about when an individual employee\'s granted options become exercisable, and taxation is about when and how the employee is taxed on those options. These are separate topics with separate mechanics; see our companion guide on ESOP structuring for how vesting schedules and employee tax actually work once options are granted out of the pool.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function EsopPoolSizingBlog() {
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
              <span className="section-badge">Startup Advisory</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Employee Stock Option Pool (ESOP Pool) Sizing for Startups
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 20, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Pool sizes vary, but a commonly seen range is roughly <strong>10-12% at seed, 12-15% at Series A, and 15-20% at Series B</strong> of fully diluted equity, sized against the hiring plan.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Investors typically require the pool to be created or topped up <strong>pre-money</strong>, meaning founders alone absorb the dilution before the investor&apos;s money comes in.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Expect a <strong>pool refresh</strong> at most subsequent priced rounds as the original pool gets granted out; model it into long-term dilution planning, not as a surprise.</li>
                    <li style={{ marginBottom: 0 }}>Expanding the pool needs <strong>Board approval and a shareholder special resolution</strong>, plus a separate authorised-capital increase if the pool exceeds existing headroom.</li>
                  </ul>
                </div>

                <p>Pool sizing is a negotiation, not a formality. It gets bundled into term sheet discussions as a single line item, &quot;a 12% option pool,&quot; but that single number quietly determines how much dilution founders absorb before an investor&apos;s money even lands. This article is scoped specifically to sizing strategy: how big the pool should be at different stages, who actually bears the dilution cost of creating or expanding it, when refreshes happen, and how expansion gets approved. For vesting schedules, exercise pricing, and how employees are taxed once options are granted out of the pool, see our companion guide on <Link href="/blog/esop-structuring-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP structuring for Indian startups</Link>, which covers that ground in full.</p>

                <h2>Typical Pool Size Ranges by Stage</h2>
                <p>There is no legally mandated or universally &quot;correct&quot; pool percentage; the right number depends on the company&apos;s hiring roadmap, sector, and investor expectations. That said, a commonly observed pattern across venture-backed startups looks roughly like this:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Stage</th><th style={thStyle}>Commonly seen pool range</th><th style={thStyle}>What it is meant to cover</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Seed</td><td style={tdStyle}>Roughly 10-12%</td><td style={tdStyle}>Early key hires, often 15-20 people, over the next 18-24 months</td></tr>
                      <tr><td style={tdAltStyle}>Series A</td><td style={tdAltStyle}>Roughly 12-15%</td><td style={tdAltStyle}>Functional leadership hires (VP-level grants tend to run larger, junior grants smaller) and expansion hiring</td></tr>
                      <tr><td style={tdStyle}>Series B and beyond</td><td style={tdStyle}>Roughly 15-20%</td><td style={tdStyle}>Senior leadership packages, plus pool refreshes layered on top of prior grants</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>These ranges are directional, not a rule; the figure an investor actually asks for in a term sheet negotiation can sit outside them depending on the round&apos;s specifics. Treat them as a starting point for modelling, then validate against your own hiring plan; a pool built for 20 hires when the company only plans to make 8 senior hires over the same period is unnecessarily dilutive, while an undersized pool forces awkward, repeated shareholder approvals right when the company should be focused on hiring.</p>

                <h2>Pre-Money vs Post-Money Pool Creation: Why It Is the Real Negotiation</h2>
                <p>The single most consequential mechanical detail in pool sizing is not the percentage; it is <strong>whether the pool is created pre-money or post-money</strong>. Investors overwhelmingly prefer, and typically get, a pre-money pool: the pool is carved out of the company&apos;s equity <em>before</em> the new investment is added to the cap table. This means the investor&apos;s post-money ownership percentage is calculated on a base that already reflects the pool, so the pool&apos;s dilution cost lands entirely on the pre-round shareholders, which in practice means mainly the founders.</p>
                <p>Put concretely: if a term sheet states a company is raising at a certain post-money valuation with a certain investor ownership percentage, and it also requires a fresh 12% pool to be created pre-money, the effective price per share paid by the investor is higher than the headline valuation would suggest, because the founders&apos; pre-round stake is diluted first to create the pool, and only then is the investment layered in. Founders frequently focus on the headline valuation number and miss that the pool-creation mechanic is doing real economic work in the background. Reviewing this line item, and where possible negotiating a smaller pre-money pool sized closer to the actual near-term hiring plan rather than a padded round number, is one of the highest-leverage things a founder can do in a term sheet discussion.</p>

                <h2>Pool Refreshes at Later Rounds</h2>
                <p>An initial pool rarely lasts the life of the company. As grants get issued to new hires, the unallocated portion of the pool shrinks, and it is common for a fresh top-up, often called a refresh, to be negotiated as part of each subsequent priced financing round, broadly following the same pre-money mechanic as the original pool. A Series A round, for instance, will often include a pool refresh on top of whatever remained from the seed-stage pool, sized against the hiring plan for that next stage of growth.</p>
                <p>Because refreshes recur, founders should model dilution across the full expected fundraising trajectory, not just the round directly in front of them; a founder who only accounts for the pool percentage in the current round tends to be surprised by how much cumulative dilution the pool mechanic alone contributes by the time a company reaches Series B or C. Keeping a live, fully diluted cap table that projects forward through at least the next two anticipated pool refreshes gives a much more honest picture of eventual founder ownership than looking at one round in isolation.</p>

                <h2>Board and Shareholder Approval Mechanics for Pool Expansion</h2>
                <p>Increasing the size of an ESOP pool in an Indian private limited company is a corporate action, not just a cap-table spreadsheet update. It generally requires:</p>
                <ul>
                  <li><strong>Board approval</strong> recommending the increase in the number of options/shares reserved under the scheme.</li>
                  <li><strong>Shareholder approval by special resolution,</strong> since expanding the reserved pool affects how much of the company&apos;s share capital is set aside for employees versus available to existing and future shareholders.</li>
                  <li><strong>A separate increase in authorised share capital,</strong> with its own shareholder resolution and ROC filing, if the expanded pool would need more shares than the company&apos;s current authorised capital allows for.</li>
                  <li><strong>An amendment to the ESOP scheme document</strong> itself if the expansion changes eligibility categories, vesting defaults, or other scheme terms, not just the headline pool size.</li>
                </ul>
                <p>Because pool expansion is often negotiated as part of a financing round&apos;s term sheet and definitive documents, it makes sense to sequence these corporate approvals alongside the other round-closing resolutions (share allotment, amendment of Articles, investor rights) rather than treating it as a standalone administrative task after the round closes. Getting the approvals and ROC filings right at the time of the round avoids compliance gaps that surface later, typically during diligence for the next round.</p>

                <h2>Practical Takeaways for Founders</h2>
                <p>Size the pool against an actual hiring plan rather than accepting a round number an investor proposes without scrutiny. Always check whether a proposed pool is structured pre-money or post-money, since that single mechanical choice determines who pays for it. Expect and plan for refreshes at future rounds rather than being caught off guard. And treat pool expansion as a governed corporate action requiring Board and shareholder approval, sequenced with the rest of a financing round&apos;s closing documents, not an afterthought.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Structuring or negotiating your ESOP pool for an upcoming round?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders model pool dilution, review term sheet pool-creation mechanics, and handle the Board and shareholder approvals for pool expansion.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-structuring-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Structuring for Indian Startups</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/term-sheet-negotiation-key-clauses-indian-founders-should-understand" style={{ color: 'var(--primary)', fontWeight: 600 }}>Term Sheet Negotiation: Key Clauses Indian Founders Should Understand</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

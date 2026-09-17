import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Term Sheet Negotiation: Key Clauses Indian Founders Should Understand',
  description: 'Liquidation preference, anti-dilution, board control, vesting, and exit rights in an Indian VC term sheet: which clauses are market standard, which are founder-unfriendly, and what is actually binding.',
  keywords: [
    'term sheet negotiation India', 'liquidation preference India', 'anti-dilution protection startup',
    'founder vesting term sheet', 'ROFR tag along drag along', 'term sheet clauses India',
    'venture capital term sheet India', 'non-binding term sheet exclusivity',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/term-sheet-negotiation-key-clauses-indian-founders-should-understand' },
  openGraph: {
    title: 'Term Sheet Negotiation: Key Clauses Indian Founders Should Understand',
    description: 'The economic and control clauses that matter most in an Indian VC term sheet, and how to tell market-standard terms from founder-unfriendly red flags.',
    url: 'https://agrawalkhandelwal.com/blog/term-sheet-negotiation-key-clauses-indian-founders-should-understand',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Term Sheet Negotiation for Indian Founders',
    description: 'A term sheet is usually non-binding except for confidentiality and exclusivity. Here is what to scrutinise before signing.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Term Sheet Negotiation: Key Clauses Indian Founders Should Understand', 'term-sheet-negotiation-key-clauses-indian-founders-should-understand')

const articleLd = buildArticleLd({
  headline: 'Term Sheet Negotiation: Key Clauses Indian Founders Should Understand',
  description: 'The major economic and control clauses in an Indian VC term sheet: valuation, liquidation preference, anti-dilution, board composition, founder vesting, ROFR/tag-along/drag-along, and information rights, with market-standard vs founder-unfriendly framing.',
  datePublished: '2026-10-20',
  slug: 'term-sheet-negotiation-key-clauses-indian-founders-should-understand',
})

const faqs: [string, string][] = [
  [
    'Is a term sheet legally binding?',
    'Mostly no. A term sheet is typically structured as a non-binding document expressing intent to proceed on the stated terms, subject to due diligence and definitive documentation such as a Share Subscription Agreement and Shareholders Agreement. However, certain clauses are usually carved out as binding regardless: confidentiality obligations and exclusivity (also called a no-shop clause), which restricts the company from soliciting or negotiating competing offers for a defined period. Founders should read the term sheet carefully to identify exactly which clauses are marked binding, since signing still creates real legal obligations even though the overall commercial terms remain non-binding.',
  ],
  [
    'What is a market-standard liquidation preference in India?',
    'A commonly seen structure in early-stage Indian rounds is a 1x non-participating liquidation preference: on a sale or liquidation, the investor gets back the greater of their original investment amount or their as-converted common share value, but not both. This is generally considered founder-friendly and standard. A participating preference, where the investor gets their preference amount and then also shares in the remaining proceeds alongside common shareholders, or a liquidation preference multiple above 1x, are both less founder-friendly and worth pushing back on, particularly for an early round.',
  ],
  [
    'What anti-dilution protection is standard in Indian term sheets?',
    'Broad-based weighted average anti-dilution is the most commonly seen structure in Indian VC term sheets and is considered reasonably founder-friendly: it adjusts the investor\'s conversion price downward in a down round, but proportionately, factoring in the size of the new round against the company\'s full fully diluted capital base. Full ratchet anti-dilution, which resets the investor\'s conversion price entirely to the new lower price regardless of how small the down round is, is far more punitive to founders and is generally viewed as an aggressive, non-standard term outside of distressed financing situations.',
  ],
  [
    'What is the difference between tag-along, drag-along, and ROFR rights?',
    'A Right of First Refusal (ROFR) gives existing shareholders, typically investors, the right to buy shares a founder or other shareholder wants to sell before an outside buyer can. Tag-along rights let a minority shareholder join a sale that a majority shareholder is making, on the same terms, so they are not left behind holding illiquid shares. Drag-along rights work the other way: they let a defined majority force minority shareholders, including founders in some structures, to sell their shares on the same terms if the majority agrees to a sale. Drag-along clauses deserve particular attention from founders, since the threshold that triggers a forced sale and any carve-outs or minimum price conditions can materially affect founder control over an eventual exit.',
  ],
  [
    'Is full-board control by investors normal at a seed or Series A round?',
    'No, and it is a common founder-unfriendly red flag when it appears this early. At seed and Series A, board composition typically still reflects meaningful founder representation, often through founder-designated seats plus one or two investor seats and sometimes an independent director, rather than investors holding an outright board majority. Investor board control becoming standard at very early rounds, before there is a strong reason such as a structured or distressed financing, is generally a term worth pushing back on rather than accepting as boilerplate.',
  ],
  [
    'What is reverse vesting for founders, and why do investors ask for it?',
    'Reverse vesting means a founder\'s own existing shares become subject to a vesting schedule as a condition of the investment, even though the founder already legally holds those shares. If a founder leaves before the vesting period completes, the unvested portion is typically subject to buyback by the company or forfeiture, depending on the scheme. Investors ask for this to protect against a founder leaving shortly after a round closes while still holding a full, unearned equity stake. It is common and broadly market-standard at early rounds, but founders should scrutinise the vesting period, the buyback price for unvested shares (some structures use a nominal price, others fair value), and whether "good leaver" and "bad leaver" scenarios are treated differently.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function TermSheetNegotiationBlog() {
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
                Term Sheet Negotiation: Key Clauses Indian Founders Should Understand
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 20, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A term sheet is generally <strong>non-binding</strong> on commercial terms, except confidentiality and exclusivity, which usually bind regardless.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A <strong>1x non-participating liquidation preference</strong> and <strong>broad-based weighted average anti-dilution</strong> are the common, founder-reasonable market standards; participating preferences, high multiples, and full ratchet anti-dilution are red flags.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Founder-friendly board composition and reasonable reverse vesting are normal at seed/Series A; outright investor board control this early is not.</li>
                    <li style={{ marginBottom: 0 }}>ROFR, tag-along, and drag-along clauses each protect a different party; read the drag-along trigger threshold especially carefully.</li>
                  </ul>
                </div>

                <p>A term sheet reads like a short, almost casual document, often just a handful of pages, but it sets the economic and control terms that the full definitive agreements (Share Subscription Agreement, Shareholders Agreement, amended Articles) will later formalise in far more detail. Founders who negotiate hard on valuation but skim the rest of the term sheet frequently discover, only at the definitive-documentation stage, that the real economics and control were determined by clauses they barely read. This guide walks through the clauses that matter most, flags which versions are market-standard versus founder-unfriendly, and clarifies what is actually binding when you sign.</p>

                <h2>Valuation: Pre-Money vs Post-Money</h2>
                <p>The headline valuation figure needs to be read alongside how it is defined: pre-money valuation is the company&apos;s value before the new investment is added, and post-money valuation is pre-money plus the new investment amount. The two are often quoted almost interchangeably in casual conversation, but the distinction directly determines the investor&apos;s resulting ownership percentage. A term sheet should state clearly which figure is being referenced, and founders should also check whether an ESOP pool is being created or expanded as part of the same round on a pre-money basis, since that mechanic further dilutes the founders&apos; effective stake beyond what the headline valuation alone suggests; see our companion piece on <Link href="/blog/employee-stock-option-pool-esop-pool-sizing-for-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP pool sizing</Link> for how that works.</p>

                <h2>Liquidation Preference and Participation</h2>
                <p>Liquidation preference determines who gets paid first, and how much, when the company is sold, merges, or is wound up. Three structures commonly appear:</p>
                <ul>
                  <li><strong>Non-participating preference (most founder-friendly):</strong> the investor takes either their investment amount back or converts to common and takes their pro-rata share of proceeds, whichever is greater, but not both. A <strong>1x</strong> multiple on a non-participating basis is the commonly seen, reasonable standard at early rounds in India.</li>
                  <li><strong>Participating preference (less founder-friendly):</strong> the investor takes their preference amount <em>and then also</em> participates in the remaining proceeds alongside common shareholders, effectively double-dipping. This can leave founders and employee shareholders with materially less on a modest exit.</li>
                  <li><strong>Preference multiples above 1x:</strong> a 1.5x or 2x preference means the investor is paid that multiple of their investment before anyone else sees proceeds, which compounds badly for founders in a lower-than-hoped exit.</li>
                </ul>
                <p>The practical negotiation point: a 1x non-participating structure is reasonable to accept as standard; participating preferences or above-1x multiples are worth pushing back on, particularly in a seed or Series A round where the company has significant room to grow into a much larger eventual exit.</p>

                <h2>Anti-Dilution Protection</h2>
                <p>Anti-dilution clauses protect an investor if the company later raises money at a lower valuation than the current round (a &quot;down round&quot;), by adjusting how many shares their investment converts into. <strong>Broad-based weighted average</strong> anti-dilution, which factors the size and price of the dilutive round against the company&apos;s full fully diluted capital base, is the commonly seen market standard in India and is considered reasonably founder-friendly because the adjustment is proportionate. <strong>Full ratchet</strong> anti-dilution, which resets the investor&apos;s conversion price entirely to the new lower price regardless of how small that round was, is materially harsher on founders and existing shareholders and is generally viewed as an aggressive term outside distressed or turnaround financing situations. If a term sheet proposes full ratchet at a normal-course early round, that is worth specifically querying.</p>

                <h2>Board Composition and Control</h2>
                <p>Board seats determine who controls major company decisions going forward, not just who attends meetings. At seed and Series A, a reasonable structure typically still gives founders meaningful board representation, commonly through founder-designated seats alongside one or two investor seats, sometimes with an independent director. Investors obtaining outright board control at a very early round, without a specific distressed or turnaround context, is a meaningful red flag; it can let investors override founder decisions on hiring, strategy, and even a future sale, well before the company has had a chance to prove itself out. Related to board control, watch for a broad list of protective/reserved matters requiring investor consent; a reasonable list covers major events like a new financing round, sale of the company, or amendment of Articles, while an overly broad list can hand investors an effective veto over routine operating decisions.</p>

                <h2>Founder Vesting (Reverse Vesting)</h2>
                <p>Reverse vesting subjects a founder&apos;s existing shares to a vesting schedule as a condition of the investment, even though the founder already legally owns them; leaving before the vesting period completes typically triggers a buyback or forfeiture of the unvested portion. This is common and broadly market-standard at early rounds, since investors are protecting against a founder exiting shortly after the round closes while retaining full equity. The clauses worth scrutinising are the length of the vesting period, whether prior time already spent building the company is credited against it, the buyback price for unvested shares on departure (nominal versus fair value makes a large practical difference), and whether the scheme distinguishes &quot;good leaver&quot; from &quot;bad leaver&quot; outcomes.</p>

                <h2>ROFR, Tag-Along, and Drag-Along</h2>
                <p>These three clauses govern what happens when shares change hands, and each protects a different party:</p>
                <ul>
                  <li><strong>Right of First Refusal (ROFR):</strong> gives existing shareholders, usually investors, the right to buy a selling shareholder&apos;s shares before an outside buyer can, on the same terms offered.</li>
                  <li><strong>Tag-along rights:</strong> let a minority shareholder join a sale that a majority shareholder is making, on the same terms, protecting them from being left behind as a minority holder in an illiquid company after the majority exits.</li>
                  <li><strong>Drag-along rights:</strong> let a defined majority force minority shareholders, potentially including founders, to sell on the same terms if the majority agrees to an exit. This is the clause most worth close attention, since the trigger threshold (what percentage of shareholders must agree), any minimum price or valuation floor, and carve-outs for founders can materially affect how much control founders retain over a future sale process.</li>
                </ul>

                <h2>Information Rights</h2>
                <p>Investors commonly require ongoing information rights, periodic financial statements, budgets, and sometimes board observer rights or inspection rights. Reasonable information rights are standard and expected; founders should check that reporting obligations are proportionate to company stage (a two-person seed-stage team should not be committing to the same reporting cadence as a Series C company) and that any information-sharing obligations do not inadvertently conflict with confidentiality owed to other stakeholders, such as other investors or key customers.</p>

                <h2>What Is Actually Binding When You Sign</h2>
                <p>Despite covering all of the above in detail, a term sheet is typically structured as non-binding on the commercial terms; the actual legal obligations are created later, in the definitive Share Subscription Agreement and Shareholders Agreement, subject to due diligence. The clauses that are usually binding immediately on signing, however, are <strong>confidentiality</strong> and <strong>exclusivity</strong> (a no-shop period during which the company cannot solicit or negotiate a competing offer). Founders should treat the exclusivity period as a real commitment with real opportunity cost, and confirm exactly which clauses in a specific term sheet are carved out as binding, since the labelling can vary between documents.</p>

                <h2>Getting Term Sheet Review Right</h2>
                <p>The clauses above interact with each other; a founder-friendly liquidation preference paired with an aggressive drag-along threshold, for instance, can still leave founders exposed. The practical approach is to have the full term sheet reviewed as a package, comparing each clause against current Indian market norms, before signing even a non-binding document, since the exclusivity period that follows limits the company&apos;s ability to negotiate a better deal elsewhere while the definitive documents are drafted.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Reviewing a term sheet before you sign?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We review term sheets against current market norms, flag founder-unfriendly clauses, and coordinate with your legal counsel through definitive documentation.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/employee-stock-option-pool-esop-pool-sizing-for-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Employee Stock Option Pool (ESOP Pool) Sizing for Startups</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/founder-agreement-essentials-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Founder Agreement Essentials</Link></li>
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

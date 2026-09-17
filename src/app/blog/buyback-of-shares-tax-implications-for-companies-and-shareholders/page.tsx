import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Buyback of Shares: Tax Implications for Companies & Shareholders' },
  description: 'How share buybacks are taxed in India after the October 2024 rule change: deemed dividend treatment for shareholders, Section 194 TDS, and the capital loss on cost of acquisition.',
  keywords: [
    'buyback of shares tax', 'share buyback taxation India', 'section 115QA buyback tax',
    'buyback deemed dividend', 'buyback tax rules October 2024', 'capital loss on buyback shares',
    'section 46A buyback', 'TDS on buyback of shares',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/buyback-of-shares-tax-implications-for-companies-and-shareholders' },
  openGraph: {
    title: 'Buyback of Shares: Tax Implications for Companies & Shareholders',
    description: 'Deemed dividend treatment, Section 194 TDS, and the capital loss mechanics that apply to share buybacks since the October 2024 rule change.',
    url: 'https://agrawalkhandelwal.com/blog/buyback-of-shares-tax-implications-for-companies-and-shareholders',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyback of Shares: Tax Implications for Companies & Shareholders',
    description: 'How buybacks are taxed today: deemed dividend for shareholders, TDS under Section 194, and a capital loss on cost of acquisition.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Buyback of Shares: Tax Implications for Companies & Shareholders', 'buyback-of-shares-tax-implications-for-companies-and-shareholders')

const articleLd = buildArticleLd({
  headline: 'Buyback of Shares: Tax Implications for Companies & Shareholders',
  description: 'Buyback taxation since the October 1, 2024 rule change: deemed dividend treatment in the shareholder\'s hands, Section 194/195 TDS, and the capital loss on cost of acquisition under Section 46A.',
  datePublished: '2026-08-28',
  slug: 'buyback-of-shares-tax-implications-for-companies-and-shareholders',
})

const faqs: [string, string][] = [
  [
    'Does the company still pay tax on a buyback under Section 115QA?',
    'No, not for buybacks undertaken on or after October 1, 2024. Before that date, the company paid a buyback tax under Section 115QA at an effective rate of roughly 23.3% (inclusive of surcharge and cess) and the shareholder received the proceeds tax-free. For buybacks from October 1, 2024 onward, Section 115QA no longer applies to the company, and the tax burden shifts to the shareholder instead.',
  ],
  [
    'How is buyback consideration taxed in the shareholder\'s hands now?',
    'The entire amount received by the shareholder on a buyback is treated as deemed dividend under Section 2(22)(f) and taxed at the shareholder\'s applicable slab rate (or treaty rate for non-residents), with no deduction for the cost of acquisition of the shares at this stage. This is a materially different outcome from the pre-October 2024 regime where the proceeds were tax-free to the shareholder.',
  ],
  [
    'What happens to the cost of acquisition of the bought-back shares?',
    'Under the amended Section 46A, the sale consideration for capital gains purposes on a buyback is deemed to be nil. Since the shareholder receives no separate capital gains credit for what they paid to buy the shares, this effectively converts their original cost of acquisition into a capital loss (short-term or long-term depending on the holding period), which can be set off against other capital gains under the normal set-off rules and carried forward for up to 8 assessment years if unabsorbed.',
  ],
  [
    'Is TDS deducted on buyback proceeds?',
    'Yes. Since buyback proceeds are now treated as deemed dividend, the company deducts TDS under Section 194 for resident shareholders (10% with a valid PAN, subject to the prescribed annual threshold) or under Section 195 for non-resident shareholders, at the applicable domestic rate or a lower DTAA rate if claimed with the required documentation.',
  ],
  [
    'Is this buyback tax treatment guaranteed to stay the same going forward?',
    'The dividend-treatment regime described here took effect for buybacks from October 1, 2024. Tax provisions around buybacks have been an active area of legislative attention, and there has been discussion of further changes to how buyback proceeds are taxed in later financial years. Given how directly this affects the numbers, always confirm the specific tax treatment applicable to the financial year in which a buyback is actually undertaken with your CA before relying on any figure, rather than assuming a rule quoted in an older article still applies unchanged.',
  ],
  [
    'Why would a company still consider a buyback instead of a dividend?',
    'Even with the tax burden now sitting with the shareholder in both cases, a buyback still serves distinct purposes a dividend does not: it returns capital to shareholders who choose to participate rather than to the entire shareholder base, it can improve per-share metrics for remaining shareholders, and it gives promoters or investors an exit route for a portion of their holding without a full share transfer negotiation. The tax outcome is now closer between the two options than it was before October 2024, so the decision increasingly turns on corporate and shareholder-liquidity objectives rather than a tax arbitrage.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function BuybackOfSharesTaxBlog() {
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
              <span className="section-badge">Corporate Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Buyback of Shares: Tax Implications for Companies &amp; Shareholders
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 28, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Buyback taxation changed materially with effect from <strong>October 1, 2024</strong>: the company-level buyback tax under Section 115QA no longer applies.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The full buyback amount is now treated as <strong>deemed dividend</strong> under Section 2(22)(f) and taxed in the shareholder&apos;s hands at their slab rate.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The shareholder&apos;s original cost of acquisition becomes a <strong>capital loss</strong> under the amended Section 46A, since buyback consideration is deemed nil for capital gains purposes.</li>
                    <li style={{ marginBottom: 0 }}>Companies must deduct <strong>TDS under Section 194</strong> (residents) or <strong>Section 195</strong> (non-residents) on the deemed dividend, same as an ordinary dividend payout.</li>
                  </ul>
                </div>

                <p>A share buyback used to be one of the more tax-efficient ways for a company to return capital to shareholders, largely because the company absorbed the tax cost under Section 115QA and the shareholder walked away with tax-free proceeds. That changed for buybacks undertaken on or after October 1, 2024, and the shift in where the tax liability sits, and how much of it there is, is significant enough that both companies planning a buyback and shareholders participating in one need to understand the new mechanics before assuming the old numbers still apply.</p>

                <h2>What Changed on October 1, 2024</h2>
                <p>Before this date, a company undertaking a buyback paid tax under <strong>Section 115QA</strong> at an effective rate of roughly 23.3% (inclusive of applicable surcharge and cess) on the distributed income, essentially the difference between the buyback price and the amount originally received by the company for those shares. The shareholder receiving buyback proceeds paid no further tax on that amount, since it was exempt under a corresponding provision.</p>
                <p><strong>For buybacks from October 1, 2024 onward, Section 115QA no longer applies at the company level.</strong> Instead, a new limb was added to Section 2(22)(f) bringing the entire sum received by a shareholder on a buyback within the definition of &quot;dividend.&quot; The practical result: the company no longer bears a buyback tax, but the shareholder now pays tax on the full proceeds as deemed dividend, at their own applicable slab rate, with no offset for the amount they originally paid for the shares at the time the dividend income is computed.</p>

                <h2>How the Shareholder Is Taxed Now</h2>
                <p>The full buyback amount received by the shareholder is treated as deemed dividend income and taxed at their applicable slab rate (or the relevant treaty rate, for non-resident shareholders), the same way ordinary dividend income is taxed after the abolition of DDT. For a shareholder in a high tax bracket, this can mean a substantially higher effective tax cost on the buyback proceeds than a flat company-level buyback tax used to produce, particularly compared to the pre-October 2024 regime where the shareholder paid nothing directly.</p>
                <p>This mirrors the shareholder-level taxation approach already in place for ordinary dividends since DDT was abolished; see our companion guide on <Link href="/blog/dividend-distribution-and-taxation-company-and-shareholder-perspective" style={{ color: 'var(--primary)', fontWeight: 600 }}>dividend distribution and taxation</Link> for how that works for a regular payout.</p>

                <h2>The Capital Loss Mechanic Under Section 46A</h2>
                <p>Here is the part that often gets missed: because the buyback consideration is taxed entirely as deemed dividend, what happens to the shareholder&apos;s original cost of acquiring those shares? Under the amended <strong>Section 46A</strong>, the sale consideration used to compute capital gains on the buyback is deemed to be <strong>nil</strong>. Since the shareholder receives no capital gains credit for the buyback amount (it has already been taxed as dividend), the entire cost of acquisition of the shares surrendered in the buyback effectively becomes a <strong>capital loss</strong>.</p>
                <p>Whether this loss is short-term or long-term depends on how long the shareholder held the shares before the buyback. That capital loss can be set off against other capital gains in the same year under the normal set-off rules (long-term loss only against long-term gains; short-term loss against either), and any unabsorbed loss can be carried forward for up to 8 assessment years. For a shareholder who has other capital gains to absorb the loss against, this materially softens the higher dividend-tax hit; for one who does not, the loss may simply sit unused for years.</p>
                <p>This interaction, dividend tax on the full amount received plus a capital loss on the amount originally invested, is the single most important planning point in the current buyback regime, and it is easy to model incorrectly without walking through both sides together.</p>

                <h2>TDS on Buyback Proceeds</h2>
                <p>Because buyback proceeds are now classified as deemed dividend, the same withholding mechanism applies as for an ordinary dividend payout. The company deducts <strong>TDS under Section 194</strong> for resident shareholders once the prescribed annual threshold is crossed, at the standard rate applicable to dividend income, provided the shareholder has furnished a valid PAN. For non-resident shareholders, TDS is deducted under <strong>Section 195</strong>, generally at the domestic withholding rate unless a lower rate is claimed under the applicable DTAA with the required documentation (Tax Residency Certificate and Form 10F).</p>

                <h2>A Note on Section Numbering and Further Changes</h2>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Section 194 has been renumbered as Section 393(1) under the Income Tax Act 2025. The new-Act section numbers for Section 115QA and Section 2(22)(f) specifically were not confirmed through a reliable, corroborated source at the time of writing, so this guide continues to reference the familiar old-Act numbers for those two provisions. Separately, buyback taxation has been an area of active legislative attention since the October 2024 change, and the treatment described in this guide is what applies to buybacks undertaken on or after that date; always confirm the tax treatment applicable to the specific financial year of a planned buyback with your CA before finalising the numbers, rather than assuming this article covers every future change.</p>
                </div>

                <h2>What This Means for Companies Planning a Buyback</h2>
                <p>A buyback is no longer the clean tax-arbitrage tool it once was relative to a dividend; both routes now tax the shareholder directly, and the buyback route adds the capital-loss wrinkle on top. Companies should model the after-tax outcome for their actual shareholder base, factoring in each shareholder&apos;s slab rate, holding period, and whether they have other capital gains to absorb the resulting loss against, rather than defaulting to a buyback on the assumption that it remains inherently more tax-efficient than a dividend. For closely held companies weighing a buyback as part of a broader promoter exit or capital restructuring, this is worth modelling alongside our guidance on <Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup valuation</Link> and cap table planning.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning a share buyback or a shareholder exit?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We model the after-tax outcome for the company and each class of shareholder before a buyback is finalised.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dividend-distribution-and-taxation-company-and-shareholder-perspective" style={{ color: 'var(--primary)', fontWeight: 600 }}>Dividend Distribution &amp; Taxation: Company and Shareholder Perspective</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Convertible Notes vs Equity for Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Corporate Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

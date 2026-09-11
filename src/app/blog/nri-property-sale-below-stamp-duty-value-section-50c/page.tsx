import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'NRI Selling Property Below Stamp Duty Value: Section 50C',
  description: 'What happens when an NRI sells property below the stamp duty (circle rate) value: Section 78 of the Income Tax Act 2025 (earlier Section 50C), the safe harbour tolerance, TDS impact, and the buyer\'s deemed-gift exposure.',
  keywords: [
    'Section 50C NRI property', 'stamp duty value capital gains NRI', 'circle rate below market value NRI sale',
    'Section 78 Income Tax Act 2025', 'safe harbour Section 50C', 'NRI property sale stamp duty valuation',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-property-sale-below-stamp-duty-value-section-50c' },
  openGraph: {
    title: 'NRI Selling Property Below Stamp Duty Value: Section 50C',
    description: 'The deemed full-value-of-consideration rule for property sold below circle rate, the safe harbour tolerance, and its impact on both the NRI seller and the resident buyer.',
    url: 'https://agrawalkhandelwal.com/blog/nri-property-sale-below-stamp-duty-value-section-50c',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Property Sale Below Stamp Duty Value',
    description: 'Section 78 (earlier Section 50C): what happens when an NRI sells property below the stamp duty value, for both seller and buyer.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Selling Property Below Stamp Duty Value: Section 50C', 'nri-property-sale-below-stamp-duty-value-section-50c')

const articleLd = buildArticleLd({
  headline: 'NRI Selling Property Below Stamp Duty Value: Section 78 (Earlier Section 50C) Explained',
  description: 'What happens when an NRI sells property below the stamp duty (circle rate) value: the deemed full value of consideration rule, the safe harbour tolerance band, TDS impact, and the buyer\'s deemed-gift exposure under Section 92.',
  datePublished: '2026-06-10',
  slug: 'nri-property-sale-below-stamp-duty-value-section-50c',
})

const faqs: FaqPair[] = [
  ['What is Section 50C (now Section 78)?', 'It is the provision that overrides the actual agreed sale price for computing capital gains on the sale of land or a building, whenever the stamp duty (circle rate) value assessed by the state authority is higher than the actual sale consideration. In that case, the stamp duty value (not the price actually agreed and received) is treated as the full value of consideration for computing capital gains.'],
  ['Does this apply to NRI sellers too?', 'Yes. Section 78 (earlier Section 50C) applies to the sale of land or a building by any seller, resident or non-resident. An NRI selling property below the stamp duty value faces the same deemed-value computation as a resident seller would.'],
  ['Is there any tolerance if the sale price is only slightly below stamp duty value?', 'Yes, a safe harbour exists: if the actual sale consideration is not less than a specified tolerance percentage below the stamp duty value, the actual sale price is accepted for computing capital gains instead of the higher stamp duty value. The precise tolerance percentage has been revised over recent years, so the applicable figure for your transaction year should be confirmed before relying on it, rather than assumed from a prior year\'s rule.'],
  ['What happens to the buyer if the property is bought below stamp duty value?', 'Where the difference between the stamp duty value and the actual purchase price exceeds the prescribed tolerance, the buyer can face a separate tax exposure under Section 92 of the Income Tax Act 2025 (earlier Section 56(2)(x)), which treats the excess of stamp duty value over actual consideration as deemed income in the buyer\'s hands, taxable as income from other sources; independent of, and in addition to, the seller\'s capital gains computation under Section 78.'],
  ['Can the stamp duty value be challenged if it seems too high?', 'Yes. If either the seller or the buyer believes the stamp duty value assessed by the state authority does not reflect the fair market value of the property, they can request a reference to a Valuation Officer, whose determined value is then used instead if it is lower than the stamp duty value, subject to the specific procedure and conditions for making that request.'],
  ['Does TDS get computed on the actual sale price or the stamp duty value for an NRI seller?', 'TDS under Section 393(2) (earlier Section 195) on an NRI property sale is generally computed on the sale consideration actually stated in the agreement, not the stamp duty value used for the Section 78 capital gains computation. This creates a distinct compliance layer worth planning for: the TDS deducted at the point of sale and the eventual capital gains tax computed at return-filing time can diverge meaningfully when the stamp duty value substitution applies, which is one more reason a Form 128 (earlier Form 13) lower deduction certificate application benefits from getting this calculation right upfront.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Section50CNriBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI Selling Property Below Stamp Duty Value: Section 78 (Earlier Section 50C) Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published June 10, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>If an NRI sells property below the stamp duty value, capital gains are computed on the higher stamp duty value, not the actual sale price.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Governed by Section 78 of the Income Tax Act 2025 (earlier Section 50C); applies equally to resident and NRI sellers.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A safe harbour tolerance band exists; confirm the current percentage before relying on it for your transaction year.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The buyer separately risks a deemed-income hit under Section 92 (earlier Section 56(2)(x)) on the same shortfall.</li>
                  <li style={{ marginBottom: 0 }}>TDS is generally computed on the actual sale price, not the stamp duty value; the two numbers can diverge meaningfully.</li>
                </ul>
              </div>

              <p>An NRI agreeing to sell a property below what the state stamp duty authority has assessed it at; not uncommon when a sale needs to close quickly, or when the assessed circle rate has drifted well above realistic market value in a particular locality; runs into a rule that most sellers only discover after the sale deed is registered: capital gains tax does not get computed on what was actually received, but on the higher, official stamp duty value.</p>

              <h2>The Core Rule</h2>
              <p>Under <strong>Section 78 of the Income Tax Act, 2025</strong> (the corresponding provision under the 1961 Act was <strong>Section 50C</strong>), whenever land or a building is sold for a consideration lower than the value assessed by the state stamp duty authority for registration purposes, that <strong>higher stamp duty value is deemed to be the full value of consideration</strong> for computing capital gains; overriding the price actually agreed between the parties. This applies identically whether the seller is a resident Indian or an NRI; there is no NRI-specific carve-out or relief built into the rule itself.</p>

              <h2>The Safe Harbour Tolerance</h2>
              <p>A relief exists for modest gaps: where the actual sale consideration is not lower than the stamp duty value by more than a specified tolerance percentage, the actual sale price is accepted as-is, and the stamp duty value substitution does not kick in. This tolerance band has been adjusted in recent years, so before relying on a specific percentage for your transaction, confirm the figure applicable for the year of sale rather than assuming an older rate still holds; getting this wrong can mean the difference between a clean computation on the actual price and an unexpected upward adjustment to stamp duty value.</p>

              <h2>What This Means for the NRI Seller</h2>
              <p>Practically, an NRI selling below stamp duty value beyond the tolerance band faces capital gains computed on a number higher than what they actually received; meaning tax on income that, in cash terms, never came in. This is particularly relevant for NRIs selling <Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>inherited or gifted property</Link> where the seller may be less familiar with the local stamp duty landscape and can end up agreeing to a price that looks reasonable in the local market but sits below the official circle rate.</p>
              <p>If the stamp duty value genuinely appears to overstate the property&apos;s fair market value; for instance, in an area where circle rates have not kept pace with an actual market correction; either party can request a reference to a <strong>Valuation Officer</strong>. Where the Valuation Officer&apos;s determined value comes in lower than the stamp duty value, that lower figure is used instead, subject to the specific procedure for making the request. This is worth pursuing before the sale is finalised rather than after, since disputing the valuation retrospectively is a harder position.</p>

              <h2>The Buyer&apos;s Separate Exposure</h2>
              <p>The seller&apos;s Section 78 computation is not the only consequence. Where the stamp duty value exceeds the actual purchase price by more than the applicable tolerance, the <strong>buyer</strong> can separately be taxed on that excess as deemed income under <Link href="/blog/nri-gift-inheritance-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 92 of the Income Tax Act 2025 (earlier Section 56(2)(x))</Link>, treated as income from other sources. This is an entirely separate tax event from the seller&apos;s capital gains; both sides of the same transaction can end up taxed on the same valuation gap, from different angles, which is exactly why a wide, unexplained discrepancy between agreed price and stamp duty value deserves scrutiny from both parties before signing, not just the seller.</p>

              <h2>Interaction With TDS on the Sale</h2>
              <p>A subtlety that catches people out: TDS under <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 393(2) (earlier Section 195)</Link> on an NRI property sale is generally computed on the <strong>actual sale consideration</strong> stated in the agreement; not the higher stamp duty value used for the Section 78 capital gains computation. This means the TDS deducted at the point of sale can understate the eventual tax liability once the stamp duty value substitution is applied at return-filing time, leaving a balance payable rather than a refund position; the opposite of the usual NRI property sale pattern, where TDS on gross consideration typically over-deducts relative to the actual gain. Getting an accurate estimate of both numbers before the sale closes, rather than after, is what lets an NRI plan for this rather than be surprised by it when filing the ITR.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Selling property below the stamp duty value?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We estimate the Section 78 impact before you sign the sale deed, and help with a Valuation Officer reference where the circle rate looks overstated.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains for NRIs on Inherited or Gifted Property</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-gift-inheritance-tax-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Gift &amp; Inheritance Tax Rules</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

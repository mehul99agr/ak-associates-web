import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'Set-Off and Carry Forward of Losses Under Income Tax' },
  description: 'Intra-head and inter-head set-off rules, the house property loss cap, carry-forward periods for business, speculation, capital, and house property losses, and why filing on time matters for carry-forward.',
  keywords: [
    'set off and carry forward of losses', 'carry forward of business loss India',
    'capital loss carry forward income tax', 'house property loss set off cap',
    'speculation loss carry forward', 'inter head set off of losses',
    'carry forward loss due date ITR filing', 'income tax loss carry forward rules',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/set-off-carry-forward-losses-income-tax' },
  openGraph: {
    title: 'Set-Off and Carry Forward of Losses Under Income Tax',
    description: 'Intra-head/inter-head set-off rules, carry-forward periods by loss type, and the on-time filing requirement.',
    url: 'https://agrawalkhandelwal.com/blog/set-off-carry-forward-losses-income-tax',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Set-Off and Carry Forward of Losses Under Income Tax',
    description: 'How losses can be set off and carried forward, by loss type, in India.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Set-Off and Carry Forward of Losses Under Income Tax', 'set-off-carry-forward-losses-income-tax')

const articleLd = buildArticleLd({
  headline: 'Set-Off and Carry Forward of Losses Under Income Tax',
  description: 'Intra-head and inter-head set-off rules, the house property loss cap, carry-forward periods for different loss types, and the requirement to file on time to carry forward most losses.',
  datePublished: '2026-10-05',
  slug: 'set-off-carry-forward-losses-income-tax',
})

const faqs: [string, string][] = [
  [
    'What is the difference between intra-head and inter-head set-off?',
    'Intra-head set-off means adjusting a loss from one source against income from another source under the same head, for example one business\'s loss against another business\'s profit. Inter-head set-off means adjusting a loss from one head of income against income under a different head, for example a business loss against salary income, and inter-head set-off is subject to more restrictions than intra-head set-off.',
  ],
  [
    'Can a house property loss be set off against salary income without limit?',
    'No. A loss under the head house property can be set off against income from any other head, including salary, but only up to Rs 2 lakh per year. Any unabsorbed amount beyond this cap cannot be set off against other heads that year; it can only be carried forward and set off against house property income in future years. See our detailed guide on self-occupied and let-out house property taxation for how this cap interacts with home loan interest deductions.',
  ],
  [
    'How long can a business loss be carried forward?',
    'A non-speculative business loss can be carried forward for 8 assessment years following the year in which the loss arose, and set off only against business income in those subsequent years, not against salary, house property, or other heads.',
  ],
  [
    'Is the carry-forward period the same for speculation loss and capital loss?',
    'No. Speculation business loss can be carried forward for only 4 assessment years and set off only against speculation business income. Capital losses (both short-term and long-term) can be carried forward for 8 assessment years, but a long-term capital loss can only be set off against long-term capital gains, while a short-term capital loss can be set off against both short-term and long-term capital gains.',
  ],
  [
    'What happens if I file my return late? Can I still carry forward my losses?',
    'Filing your return by the due date is a precondition for carrying forward most losses, including business loss, speculation loss, and capital loss. If you file after the due date, you generally lose the right to carry forward these losses, even though the loss itself is still computed for the year. The one significant exception is house property loss, which can still be carried forward even if the return is filed after the due date.',
  ],
  [
    'Can I set off a current year loss against income before carrying forward the balance?',
    'Yes, and the law requires you to. Set-off within the same year (both intra-head and permitted inter-head set-off) must be exhausted first, in the year the loss arises, before any unabsorbed loss is carried forward to future years. You cannot choose to carry forward a loss instead of setting it off against eligible income in the same year if such income exists.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function SetOffCarryForwardLossesBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Income Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Set-Off and Carry Forward of Losses Under Income Tax</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>October 5, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Set-off within the same head is generally freer; set-off across heads is more restricted, and house property loss set off against other heads is <strong>capped at Rs 2 lakh per year</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Carry-forward periods differ by loss type: <strong>8 years</strong> for business loss, capital loss, and unabsorbed house property loss; only <strong>4 years</strong> for speculation loss.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Filing your ITR <strong>by the due date</strong> is required to carry forward most losses; house property loss is the notable exception.</li>
                  <li style={{ marginBottom: 0 }}>Current-year set-off must be exhausted first; you cannot skip straight to carrying a loss forward if eligible income exists this year.</li>
                </ul>
              </div>

              <p>A loss in one year does not have to be a dead end for tax purposes. The Income Tax Act allows losses to be set off against other income, and where they cannot be fully absorbed in the same year, carried forward to future years, but the rules differ meaningfully depending on which head the loss arises under. Getting the sequence and the carry-forward deadlines wrong is one of the more expensive mistakes a taxpayer can make, because a missed due date can permanently forfeit the right to carry a loss forward at all.</p>

              <h2>Intra-Head Set-Off: Within the Same Head of Income</h2>
              <p>Intra-head set-off allows a loss from one source to be adjusted against income from another source under the <strong>same head</strong>. For example, a loss from one business can generally be set off against profit from another business in the same year, and a loss from one house property can be set off against income from another house property. There are specific carve-outs within this rule too; for instance, a loss from a speculative business can only be set off against speculative business income, not against non-speculative business profit, even though both technically fall under "business" income.</p>

              <h2>Inter-Head Set-Off: Across Different Heads</h2>
              <p>Inter-head set-off allows a loss under one head to be adjusted against income under a <strong>different</strong> head, but only after intra-head set-off has been exhausted, and subject to specific restrictions for certain loss types. A non-speculative business loss, for example, can generally be set off against income from any other head except salary. Capital losses, by contrast, cannot be set off against any other head at all; a capital loss can only ever be set off against capital gains.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Loss Type</th><th style={thStyle}>Can Be Set Off Against</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Non-speculative business loss</td><td style={tdStyle}>Any head except salary (same year); business income only once carried forward</td></tr>
                    <tr><td style={tdAltStyle}>Speculative business loss</td><td style={tdAltStyle}>Speculative business income only</td></tr>
                    <tr><td style={tdStyle}>House property loss</td><td style={tdStyle}>Any head, capped at Rs 2 lakh/year; house property income only once carried forward</td></tr>
                    <tr><td style={tdAltStyle}>Short-term capital loss</td><td style={tdAltStyle}>Short-term or long-term capital gains only</td></tr>
                    <tr><td style={tdStyle}>Long-term capital loss</td><td style={tdStyle}>Long-term capital gains only</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>The House Property Loss Cap</h2>
              <p>House property loss deserves special attention because of a cap introduced to limit how much can be set off against other heads in a single year: a loss under the head house property, typically arising from home loan interest exceeding rental income (or from a self-occupied property with no rental income to offset the deemed interest deduction), can be set off against income from any other head, including salary, but only up to <strong>Rs 2 lakh per year</strong>. Whatever remains unabsorbed beyond that cap cannot be adjusted against other heads that year at all; it must be carried forward. Our detailed guide on <Link href="/blog/income-from-house-property-self-occupied-let-out" style={{ color: 'var(--primary)', fontWeight: 600 }}>self-occupied vs let-out house property taxation</Link> covers how this cap interacts with the home loan interest deduction and which regime (old vs new) allows it at all, since the new regime restricts this deduction significantly.</p>

              <h2>Carry-Forward Periods by Loss Type</h2>
              <p>Once current-year set-off is exhausted and a loss remains unabsorbed, it can be carried forward to future assessment years, but for a limited period that depends on the type of loss, and it can generally only be set off against specific categories of income in those future years.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Loss Type</th><th style={thStyle}>Carry-Forward Period</th><th style={thStyle}>Set Off in Future Years Against</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Non-speculative business loss</td><td style={tdStyle}>8 assessment years</td><td style={tdStyle}>Business income only</td></tr>
                    <tr><td style={tdAltStyle}>Speculative business loss</td><td style={tdAltStyle}>4 assessment years</td><td style={tdAltStyle}>Speculative business income only</td></tr>
                    <tr><td style={tdStyle}>Capital loss (short-term and long-term)</td><td style={tdStyle}>8 assessment years</td><td style={tdStyle}>Capital gains only, subject to the short-term/long-term matching rules above</td></tr>
                    <tr><td style={tdAltStyle}>Unabsorbed house property loss</td><td style={tdAltStyle}>8 assessment years</td><td style={tdAltStyle}>House property income only</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Unabsorbed depreciation is a distinct category with its own indefinite carry-forward treatment under separate provisions and is not covered by the standard loss carry-forward periods above; if your business has significant depreciation-driven losses, this needs a separate computation with your CA rather than being lumped in with ordinary business loss.</p>

              <h2>Filing On Time Is a Precondition, Except for House Property Loss</h2>
              <p>This is the rule that costs taxpayers the most when missed: to carry forward a business loss, speculation loss, or capital loss, the return for the year the loss arose must be <strong>filed by the original due date</strong>. Filing late (even if before the extended belated-return deadline) forfeits the right to carry forward these losses, even though the loss amount itself is still computed and recorded for that year.</p>
              <p><strong>House property loss is the notable exception.</strong> It can still be carried forward even if the return is filed after the due date. This distinction matters most for taxpayers who have both a business loss and a house property loss in the same year and assume a late filing affects both equally; it does not.</p>
              <p>If your business or investments have generated a loss this year, treat the filing due date as non-negotiable regardless of whether you expect a refund or think filing late carries no real consequence; the consequence here is the permanent loss of a carry-forward right that could otherwise offset tax in a profitable year down the line.</p>

              <h2>Set-Off Sequence: Current Year First, Then Carry Forward</h2>
              <p>The law requires set-off to happen in a fixed sequence: current-year intra-head set-off first, then current-year inter-head set-off (where permitted), and only the amount that remains unabsorbed after both steps gets carried forward. A taxpayer cannot choose to skip current-year set-off against eligible income in order to preserve a larger carry-forward balance for a future year with potentially higher income; the current year's eligible income must absorb the loss first, whether or not that is the more tax-efficient outcome in isolation.</p>

              <p>Loss set-off and carry-forward rules reward careful year-by-year tracking, correct sequencing, and above all, timely filing. A single missed due date can convert an otherwise valuable carry-forward asset into a loss that simply disappears for tax purposes. If your business, investments, or rental property have generated a loss this year, get the set-off computation and carry-forward schedule reviewed before filing. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> cover full loss computation, set-off planning, and carry-forward tracking across years.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Carrying a business, capital, or house property loss this year?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We compute set-off correctly, track carry-forward schedules across years, and make sure your return is filed on time to preserve your carry-forward rights.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20loss%20set-off%20and%20carry%20forward." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-from-house-property-self-occupied-let-out" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income From House Property: Self-Occupied vs Let-Out</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

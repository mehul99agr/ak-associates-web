import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Secondary Adjustment Under Transfer Pricing: Section 92CE Explained',
  description: 'When Section 92CE secondary adjustment applies, the Rs 1 crore primary adjustment threshold, the 90-day repatriation window, the deemed-advance interest treatment, and the one-time additional tax alternative on unrepatriated excess money.',
  keywords: [
    'section 92CE secondary adjustment', 'secondary adjustment transfer pricing India',
    'excess money repatriation transfer pricing', '90 day repatriation section 92CE',
    'deemed advance transfer pricing', 'section 92CE(2A) additional tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/secondary-adjustment-under-transfer-pricing-section-92ce-explained' },
  openGraph: {
    title: 'Secondary Adjustment Under Transfer Pricing: Section 92CE Explained',
    description: 'The Rs 1 crore threshold, 90-day repatriation window, deemed-advance interest, and the one-time additional tax alternative under Section 92CE.',
    url: 'https://agrawalkhandelwal.com/blog/secondary-adjustment-under-transfer-pricing-section-92ce-explained',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secondary Adjustment: Section 92CE Explained',
    description: 'When it applies, the repatriation deadline, and the deemed-advance vs one-time additional tax choice.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Secondary Adjustment Under Transfer Pricing: Section 92CE Explained', 'secondary-adjustment-under-transfer-pricing-section-92ce-explained')

const articleLd = buildArticleLd({
  headline: 'Secondary Adjustment Under Transfer Pricing: Section 92CE Explained',
  description: 'When Section 92CE secondary adjustment applies, the Rs 1 crore primary adjustment threshold, the 90-day repatriation window, the deemed-advance interest treatment, and the one-time additional tax alternative on unrepatriated excess money.',
  datePublished: '2026-08-18',
  slug: 'secondary-adjustment-under-transfer-pricing-section-92ce-explained',
})

const faqs: [string, string][] = [
  ['What is a secondary adjustment under Section 92CE?', 'A secondary adjustment is a follow-on consequence to a primary transfer pricing adjustment. Once a primary adjustment increases the taxable income of an Indian entity by pricing a related-party transaction at arm\'s length, Section 92CE treats the corresponding excess money sitting with the associated enterprise as needing to actually come back to India. If it is not repatriated within the prescribed time, that excess money is treated as a deemed advance made by the Indian entity to the associated enterprise, on which notional interest income is computed and taxed.'],
  ['What is the threshold for Section 92CE to apply?', 'Secondary adjustment provisions apply where the amount of primary adjustment made in a given year exceeds Rs 1 crore. The provision also does not apply to primary adjustments relating to assessment years before AY 2017-18, since Section 92CE was introduced with effect from AY 2018-19.'],
  ['How long does a taxpayer have to repatriate the excess money?', 'Where the primary adjustment is made suo moto by the taxpayer in its own return of income, or accepted by the taxpayer following an assessment or audit finding, the excess money must be repatriated from the associated enterprise to India within 90 days from the due date of filing the return of income for the relevant year. Where the primary adjustment arises from an Advance Pricing Agreement, a Mutual Agreement Procedure resolution, or the safe harbour rules, the 90-day window generally runs from the date the relevant order or agreement is given effect to, rather than from the return due date.'],
  ['What happens if the excess money is not repatriated in time?', 'If the excess money, or any part of it, is not repatriated within the prescribed 90-day window, it is deemed to be an advance made by the Indian entity to the associated enterprise, and notional interest on that deemed advance is computed and added to the Indian entity\'s income each year until repatriation actually happens.'],
  ['What interest rate applies to the deemed advance?', 'Based on the applicable rules, where the underlying international transaction is denominated in Indian rupees, the deemed-advance interest is computed using the one-year MCLR of the State Bank of India as on 1 April of the relevant year, plus an additional spread. Where the transaction is denominated in a foreign currency, a benchmark foreign-currency reference rate as on 30 September of the relevant year, plus a spread, applies instead. Taxpayers should confirm the exact current spread and reference-rate mechanics (including any post-LIBOR benchmark transition) with the applicable rules and their advisor at the time of computation rather than relying on a fixed figure, since reference rates and prescribed spreads can be updated.'],
  ['Can a taxpayer avoid the deemed-advance interest computation?', 'Yes. Section 92CE(2A) allows a taxpayer to instead pay a one-time additional income tax, at a flat rate, on the amount of excess money that is not repatriated within the prescribed time. Once this additional tax is paid, the taxpayer is not required to repatriate that excess money and no further secondary adjustment or deemed-advance interest is computed on it for later years. This is often the simpler compliance route for smaller unrepatriated balances, and the choice between actual repatriation, the deemed-advance route, and the one-time tax route should be evaluated based on the amount involved, the AE\'s ability to remit funds, and the relative cost of each option; taxpayers should confirm the exact currently applicable rate with their advisor before relying on a specific percentage.'],
]

const faqLd = buildFaqLd(faqs)

export default function Section92CEBlog() {
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
              <span className="section-badge">Transfer Pricing</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Secondary Adjustment Under Transfer Pricing: Section 92CE Explained
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 18, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Section 92CE applies once a <strong>primary transfer pricing adjustment exceeds Rs 1 crore</strong> in a year.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The corresponding excess money held by the associated enterprise must be <strong>repatriated to India within 90 days</strong> from the due date of filing the return (or from when the relevant order/agreement takes effect, for APA/MAP/safe harbour cases).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Miss the window, and the unrepatriated amount is treated as a <strong>deemed advance</strong> to the associated enterprise, with notional interest taxed each year until it is actually brought back.</li>
                    <li style={{ marginBottom: 0 }}>Section 92CE(2A) offers an alternative: pay a <strong>one-time additional tax</strong> on the unrepatriated amount instead of tracking deemed-advance interest indefinitely.</li>
                  </ul>
                </div>

                <p>Most discussions of Indian transfer pricing focus on the primary adjustment: correcting the price of a related-party transaction to what an arm&apos;s length party would have charged, and adding the difference to taxable income. Section 92CE goes a step further and asks a different question: if the pricing was wrong, where did the money that should have come to India actually end up, and has it come back? This is the secondary adjustment regime, and it is frequently overlooked until a primary adjustment is already final, at which point the repatriation clock is already running.</p>

                <h2>What Counts as a Primary Adjustment That Triggers Section 92CE</h2>
                <p>Section 92CE(1) lists the situations in which a primary adjustment can trigger secondary adjustment obligations: an adjustment made suo moto by the taxpayer in its own return of income, an adjustment made by the Assessing Officer that has attained finality (including one accepted by the taxpayer), an adjustment determined through an Advance Pricing Agreement entered into by the taxpayer, an adjustment made under the safe harbour rules, or an adjustment arising from a Mutual Agreement Procedure resolution under a tax treaty. In each of these, once the primary adjustment increases the Indian entity&apos;s income, the associated enterprise is treated as holding excess money that economically belongs to the Indian entity.</p>

                <h2>The Rs 1 Crore Threshold</h2>
                <p>Secondary adjustment provisions apply only where the amount of the primary adjustment exceeds <strong>Rs 1 crore</strong> for the relevant year. A primary adjustment below this threshold does not trigger the repatriation obligation or the deemed-advance mechanism, even if the transaction otherwise falls within one of the trigger categories above. The provision also has no retrospective effect on adjustments relating to assessment years before AY 2017-18, since Section 92CE itself was introduced with effect from AY 2018-19.</p>

                <h2>The 90-Day Repatriation Window</h2>
                <p>Once a covered primary adjustment is made, the excess money held by the associated enterprise needs to be repatriated to India within a defined window:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Trigger for Primary Adjustment</th><th style={thStyle}>Repatriation Window</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Suo moto adjustment by taxpayer in its own return, or accepted following an assessment</td><td style={tdStyle}>90 days from the due date of filing the return of income for the relevant year</td></tr>
                      <tr><td style={tdAltStyle}>Adjustment arising from an APA, MAP resolution, or the safe harbour rules</td><td style={tdAltStyle}>90 days generally from the date the relevant agreement or order is given effect to</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>&quot;Excess money&quot; here means the difference between the arm&apos;s length price determined and the price actually charged in the transaction, to the extent it results in higher income for the Indian entity; that difference is what needs to physically flow back from the associated enterprise.</p>

                <h2>If the Money Is Not Repatriated in Time: The Deemed Advance</h2>
                <p>If the excess money, or any part of it, remains unrepatriated once the 90-day window lapses, it is deemed to be an <strong>advance made by the Indian entity to the associated enterprise</strong>. Notional interest income on this deemed advance is then computed and added to the Indian entity&apos;s taxable income, year after year, for as long as the amount remains outstanding. This interest computation depends on the currency of the underlying transaction:</p>
                <ul>
                  <li><strong>Rupee-denominated transactions:</strong> benchmarked to the one-year MCLR of the State Bank of India as on 1 April of the relevant previous year, plus a prescribed spread over that base rate.</li>
                  <li><strong>Foreign-currency-denominated transactions:</strong> benchmarked to a specified foreign-currency reference rate as on 30 September of the relevant previous year, plus a prescribed spread.</li>
                </ul>
                <p>Because reference rates, prescribed spreads, and the underlying foreign-currency benchmark mechanics can be updated by the rules over time (including any transition away from older interbank benchmark rates), taxpayers should confirm the precise figures applicable for the relevant year with the current rules or their advisor rather than assuming a fixed percentage applies indefinitely.</p>

                <h2>The Alternative: One-Time Additional Tax Under Section 92CE(2A)</h2>
                <p>Tracking a deemed advance and computing notional interest year after year is administratively heavy, particularly for a modest excess-money balance. Section 92CE(2A) offers an alternative: the taxpayer can instead choose to pay a <strong>one-time additional income tax</strong> on the amount of excess money that has not been repatriated within the prescribed time. Once this tax is paid, the taxpayer is not obligated to repatriate that specific amount, and no further secondary adjustment or deemed-advance interest is computed on it in subsequent years, effectively closing out the exposure for that balance.</p>
                <p>Whether the repatriation route, the deemed-advance route, or the one-time tax route is more efficient depends on the amount involved, how long repatriation is expected to take, the associated enterprise&apos;s practical ability to remit funds (including any exchange control constraints in its own jurisdiction), and a comparison of the effective cost of the one-time tax against the present value of ongoing deemed-advance interest. This is a case-specific computation rather than a default choice, and taxpayers should model it against their own facts and current rates before deciding, since the applicable additional-tax rate is itself subject to change and should be confirmed at the time of payment rather than assumed from an earlier year.</p>

                <h2>Why This Matters Beyond the Primary Adjustment</h2>
                <p>A common planning mistake is treating a primary transfer pricing adjustment, whether accepted in assessment, resolved via APA, or self-reported, as the end of the exposure. Section 92CE means the real financial cost can continue accruing well after the primary adjustment is finalised, if the underlying cash does not actually move. This makes it important to track repatriation status as a distinct compliance item, separate from and after the primary transfer pricing analysis covered under the <Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>five prescribed transfer pricing methods</Link>, and to build the 90-day repatriation deadline into the compliance calendar as soon as a primary adjustment of this scale is on the horizon, rather than after the return due date has already passed. Where the underlying transaction also required <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB</Link> reporting, the secondary adjustment position should be reviewed alongside it, and any resulting deemed-advance or one-time tax exposure factored into the same year&apos;s tax provisioning.</p>
              </div>

              <PostCTA
            heading="Facing a primary adjustment and need to work out the repatriation position?"
            description="We help groups track the 90-day repatriation window, model the deemed-advance interest against the one-time tax alternative, and stay compliant under Section 92CE."
            secondaryLabel="Transfer Pricing Services"
            secondaryHref="/transfer-pricing"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Methods in India: All 5 Methods Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/cost-plus-method-cpm-in-transfer-pricing-when-it-applies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Cost Plus Method (CPM): When It Applies</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/profit-split-method-psm-in-transfer-pricing-a-practical-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Profit Split Method (PSM): A Practical Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Audit &amp; Assessment in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

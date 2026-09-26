import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'GST on Real Estate: Under-Construction vs Ready-to-Move Properties',
  description: 'Why ready-to-move properties are GST-free but under-construction flats attract 1% or 5% GST without ITC, how affordable housing is defined, and what buyers and builders should check before signing.',
  keywords: [
    'GST on real estate', 'GST on under construction property', 'GST on ready to move property',
    'GST affordable housing rate', 'GST on flat purchase', 'GST works contract construction',
    'GST builder rate without ITC', 'completion certificate GST property',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-on-real-estate-under-construction-ready' },
  openGraph: {
    title: 'GST on Real Estate: Under-Construction vs Ready-to-Move Properties',
    description: 'Why ready-to-move properties are GST-free but under-construction flats attract 1% or 5% GST without ITC, and what buyers should check before signing.',
    url: 'https://agrawalkhandelwal.com/blog/gst-on-real-estate-under-construction-ready',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST on Real Estate: Under-Construction vs Ready-to-Move Properties',
    description: 'Why ready-to-move properties are GST-free but under-construction flats attract 1% or 5% GST without ITC.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST on Real Estate: Under-Construction vs Ready-to-Move Properties', 'gst-on-real-estate-under-construction-ready')

const articleLd = buildArticleLd({
  headline: 'GST on Real Estate: Under-Construction vs Ready-to-Move Properties',
  description: 'Why ready-to-move properties are GST-free but under-construction flats attract 1% or 5% GST without ITC, how affordable housing is defined, and what buyers and builders should check before signing.',
  datePublished: '2026-07-18',
  slug: 'gst-on-real-estate-under-construction-ready',
})

const faqs: [string, string][] = [
  [
    'Is GST applicable on ready-to-move-in flats?',
    'No, generally not. If the entire sale consideration is received after the Completion Certificate (CC) is issued or after first occupation, whichever is earlier, the transaction is treated as a sale of immovable property and falls outside the scope of GST entirely. GST only applies where at least part of the payment is received before that point, which is why the CC date is the single most important fact to check before assuming a property is GST-free.',
  ],
  [
    'What is the GST rate on under-construction flats?',
    'Non-affordable residential under-construction property attracts 5% GST without input tax credit (ITC), while affordable housing units attract 1% GST without ITC. Both rates apply on the value of the flat as charged by the builder, and neither allows the builder to separately pass on ITC benefits to the buyer, since the concessional rates were structured on a no-ITC basis.',
  ],
  [
    'How is affordable housing defined for the 1% GST rate?',
    'Affordable housing is generally defined by a combination of carpet area and value caps: a residential unit with carpet area up to 60 square metres in metropolitan cities, or up to 90 square metres in other cities, and a value that does not exceed the notified ceiling, currently Rs 45 lakh. A unit has to satisfy both the area and value conditions to qualify for the 1% rate; missing either condition pushes it into the 5% non-affordable category.',
  ],
  [
    'What GST rate applies to works contract services in real estate?',
    'Works contract services for construction, such as those provided by a contractor to a builder or to a government body, are generally taxed at 12% GST with input tax credit for specified government and affordable housing-linked projects, and 18% GST with input tax credit for other, non-government works contracts. This is separate from the 1%/5% rates that apply to the builder\'s sale of the flat itself to the end buyer.',
  ],
  [
    'Does GST apply to land purchase?',
    'No. The sale of land itself, without any construction, is treated as a transaction in immovable property and is outside the scope of GST. GST becomes relevant only when construction services are bundled with the transaction, such as in a builder-buyer agreement for an under-construction unit, where the value attributable to construction (not the land component) is what gets taxed.',
  ],
  [
    'Can a buyer negotiate the GST amount with the builder?',
    'The GST rate itself (1% or 5%, as applicable) is fixed by law and is not negotiable, since it is a statutory levy the builder is required to collect and deposit. What can sometimes be discussed is the base price of the unit on which GST is calculated, or the payment schedule, which affects how much of the total consideration falls before versus after the Completion Certificate. Buyers should get the applicable rate and CC status confirmed in writing before signing the agreement.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function GstRealEstateBlog() {
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
              <span className="section-badge">GST</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                GST on Real Estate: Under-Construction vs Ready-to-Move Properties
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 18, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A property is <strong>GST-free</strong> if the full price is paid after the Completion Certificate (CC) or first occupation, whichever is earlier.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Under-construction flats attract <strong>5% GST without ITC</strong> (non-affordable) or <strong>1% GST without ITC</strong> (affordable housing).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Affordable housing needs both a carpet area cap (60 sqm metro / 90 sqm non-metro) and a value cap (currently Rs 45 lakh) to qualify.</li>
                    <li style={{ marginBottom: 0 }}>Works contract services to builders are taxed separately, generally at 12% or 18% with ITC, depending on the nature of the project.</li>
                  </ul>
                </div>

                <p>Almost every property buyer asks the same question at some point in the negotiation: &quot;why does the flat next door cost 5% less, even though it looks identical?&quot; The answer is usually GST, and specifically, which side of the Completion Certificate date the purchase falls on. Getting this wrong, on either the buyer or the builder side, means either an unexpected cost or an under-collection that the builder has to absorb later.</p>

                <h2>The Line That Decides Everything: Completion Certificate</h2>
                <p>GST on real estate turns on a single event: issuance of the <strong>Completion Certificate (CC)</strong> by the competent authority, or <strong>first occupation</strong> of the property, whichever happens earlier.</p>
                <ul>
                  <li><strong>Before CC/first occupation:</strong> The builder is still supplying a construction service, not merely transferring completed property, so GST applies on the consideration received.</li>
                  <li><strong>After CC/first occupation:</strong> The transaction is treated as a sale of immovable property, which is outside the scope of GST altogether. Stamp duty and registration charges still apply, but no GST.</li>
                </ul>
                <p>This is why a ready-to-move flat, where the full price is paid after the CC is issued, carries no GST, while an identical unit sold under construction, with instalments paid before the CC, is fully taxable on those pre-CC payments.</p>

                <h2>GST Rates on Under-Construction Residential Property</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Category</th>
                      <th style={thStyle}>GST Rate</th>
                      <th style={thStyle}>Input Tax Credit (ITC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Affordable housing</td>
                      <td style={tdStyle}>1%</td>
                      <td style={tdStyle}>Not available</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>Other (non-affordable) residential</td>
                      <td style={tdAltStyle}>5%</td>
                      <td style={tdAltStyle}>Not available</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Ready-to-move (post-CC/occupation)</td>
                      <td style={tdStyle}>Nil (outside GST)</td>
                      <td style={tdStyle}>Not applicable</td>
                    </tr>
                  </tbody>
                </table>
                <p>Both concessional rates (1% and 5%) were structured specifically on a <strong>no-ITC basis</strong>: builders paying these rates cannot claim input tax credit on the materials and services used in construction, and consequently cannot pass through any ITC benefit to buyers. This trade-off, a lower headline rate in exchange for foregoing ITC, was designed to keep the buyer-facing rate simple, even though it changes the builder&apos;s internal cost structure.</p>

                <h2>What Counts as Affordable Housing</h2>
                <p>To qualify for the 1% rate, a residential unit generally needs to satisfy <strong>both</strong> of the following conditions:</p>
                <ul>
                  <li><strong>Carpet area:</strong> Up to 60 square metres in the specified metropolitan cities, or up to 90 square metres in other cities and towns.</li>
                  <li><strong>Value:</strong> The gross value of the unit does not exceed the notified ceiling, currently <strong>Rs 45 lakh</strong>.</li>
                </ul>
                <p>A unit that meets the area condition but exceeds the value cap, or vice versa, does not qualify as affordable housing and falls into the 5% category instead. Builders selling mixed developments (some affordable-eligible units, some not) need to track this classification unit by unit, since it directly affects the rate charged on each buyer&apos;s instalments.</p>

                <h2>Works Contract GST: A Separate Layer</h2>
                <p>The 1%/5% rates apply to the <strong>builder&apos;s sale of the flat to the end buyer</strong>. A separate GST layer applies to <strong>works contract services</strong>, meaning the construction services a contractor provides to the builder (or to a government body for public infrastructure). Works contract services are generally taxed at <strong>12% with ITC</strong> for specified government and affordable-housing-linked projects, and <strong>18% with ITC</strong> for other, non-government works contracts. Builders and contractors should not confuse this contractor-facing rate with the buyer-facing 1%/5% rate; they sit at different points in the supply chain and follow different ITC rules.</p>

                <h2>Land Is Never Taxed Under GST</h2>
                <p>The outright sale of land, with no construction attached, is treated as a transfer of immovable property and is entirely outside GST&apos;s scope. GST becomes relevant only when construction services are bundled into the transaction, as in a typical builder-buyer agreement for an apartment. In practice, agreements are structured to separate the land value from the construction value, and it is only the construction-linked portion of an under-construction sale that attracts GST.</p>

                <h2>What Buyers and Builders Should Check Before Signing</h2>
                <ul>
                  <li><strong>Buyers:</strong> Confirm in writing whether the Completion Certificate has already been issued for the specific tower/unit, not just the project generally; large developments often get CC in phases. Also confirm whether the unit meets the affordable housing area and value caps, since that changes the rate from 5% to 1%.</li>
                  <li><strong>Builders:</strong> Classify each unit correctly at the time of booking and apply the rate consistently through the payment schedule; a unit that starts as affordable can lose eligibility if the sale value is later revised upward past the cap.</li>
                  <li><strong>Both parties:</strong> Keep the CC date, occupation certificate, and payment schedule clearly documented, since this evidence is what settles any later dispute over whether GST was correctly charged.</li>
                </ul>
              </div>

              <PostCTA
            heading="Buying, selling, or building? Get the GST position confirmed before you sign."
            description="We help buyers, builders, and contractors work out the correct GST treatment on real estate transactions and structure agreements accordingly."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/e-way-bill-rules-validity-penalties" style={{ color: 'var(--primary)', fontWeight: 600 }}>E-Way Bill Rules: When Required, Validity & Penalties</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/e-invoicing-gst-applicability-threshold" style={{ color: 'var(--primary)', fontWeight: 600 }}>E-Invoicing Under GST: Applicability Threshold & Process</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nri-property-sale-below-stamp-duty-value-section-50c" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Selling Property Below Stamp Duty Value: Section 78 Explained</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

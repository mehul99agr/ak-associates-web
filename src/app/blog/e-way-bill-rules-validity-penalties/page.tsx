import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'E-Way Bill Rules: When Required, Validity & Penalties',
  description: 'When an e-way bill is mandatory, the Rs 50,000 consignment value threshold, validity period by distance, extension rules, and penalties for non-compliance under GST.',
  keywords: [
    'e-way bill rules', 'e-way bill validity', 'e-way bill threshold', 'e-way bill Rs 50000 limit',
    'e-way bill penalty', 'when is e-way bill required', 'e-way bill validity period distance',
    'e-way bill generation GST',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/e-way-bill-rules-validity-penalties' },
  openGraph: {
    title: 'E-Way Bill Rules: When Required, Validity & Penalties',
    description: 'The Rs 50,000 threshold, validity period by distance, extension rules, and penalties for e-way bill non-compliance under GST.',
    url: 'https://agrawalkhandelwal.com/blog/e-way-bill-rules-validity-penalties',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Way Bill Rules: When Required, Validity & Penalties',
    description: 'The Rs 50,000 threshold, validity period by distance, and penalties for e-way bill non-compliance under GST.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('E-Way Bill Rules: When Required, Validity & Penalties', 'e-way-bill-rules-validity-penalties')

const articleLd = buildArticleLd({
  headline: 'E-Way Bill Rules: When Required, Validity & Penalties',
  description: 'When an e-way bill is mandatory, the Rs 50,000 consignment value threshold, validity period by distance, extension rules, and penalties for non-compliance under GST.',
  datePublished: '2026-07-16',
  slug: 'e-way-bill-rules-validity-penalties',
})

const faqs: [string, string][] = [
  [
    'What is the minimum value for an e-way bill?',
    'An e-way bill is generally required whenever the consignment value of goods being moved exceeds Rs 50,000, inclusive of tax. This threshold applies uniformly for inter-state movement. Several states also apply the same Rs 50,000 limit for intra-state (within-state) movement, but some states have set their own, sometimes higher, threshold for intra-state consignments, so always check the specific state notification before assuming the national limit applies.',
  ],
  [
    'How long is an e-way bill valid?',
    'Validity is based on distance: one day for every 200 km (or part thereof) the goods travel, calculated from the time of generation. For over-dimensional cargo, the norm is stricter, at one day per 20 km. A short-distance consignment of under 200 km therefore gets just one day of validity, which catches many businesses off guard when transit gets delayed.',
  ],
  [
    'Can an e-way bill be extended after it expires?',
    'Yes, but only within a limited window: extension can be requested up to 8 hours before or after the expiry time, through the e-way bill portal, by explaining the reason for the delay (traffic, vehicle breakdown, natural calamity, etc.). Extensions can be granted in stages but the total extended validity cannot exceed 360 days from the date the e-way bill was originally generated.',
  ],
  [
    'What happens if goods are transported without an e-way bill?',
    'Movement of goods above the threshold without a valid e-way bill is treated as a compliance failure that can result in detention or seizure of the goods and the vehicle by GST authorities, along with a monetary penalty. In practice, this also disrupts the consignment schedule and can trigger further scrutiny of the business\'s other filings, so most businesses treat e-way bill compliance as non-negotiable rather than a minor paperwork step.',
  ],
  [
    'Is an e-way bill required for an old invoice?',
    'No. An e-way bill cannot be generated if the base document, such as the tax invoice, bill of supply, or delivery challan, is more than 180 days old from its own date. This rule exists to prevent stale documents from being used to justify a live movement of goods, so invoicing and dispatch timelines need to stay reasonably aligned.',
  ],
  [
    'Who is responsible for generating the e-way bill, the supplier or the transporter?',
    'Primary responsibility sits with the registered person causing the movement of goods, which is usually the supplier (consignor) or, in some cases, the recipient (consignee) if they arrange the transport. If neither generates it and the goods are handed to a transporter, the transporter is required to generate the e-way bill based on the invoice or delivery challan provided. Either way, the party actually moving the goods on the road should carry a valid e-way bill or its number before the vehicle departs.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function EWayBillRulesBlog() {
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
                E-Way Bill Rules: When Required, Validity & Penalties
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 16, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>An e-way bill is required whenever consignment value crosses <strong>Rs 50,000</strong>, for inter-state movement always, and for intra-state movement in most states subject to that state&apos;s own notification.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Validity runs <strong>one day per 200 km</strong> of travel (one day per 20 km for over-dimensional cargo), starting from generation.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Extensions are allowed within 8 hours before or after expiry, but total extended validity cannot exceed <strong>360 days</strong> from the original generation date.</li>
                    <li style={{ marginBottom: 0 }}>Moving goods without a valid e-way bill risks detention or seizure of goods and vehicle, plus a monetary penalty.</li>
                  </ul>
                </div>

                <p>The e-way bill is the single most operationally disruptive GST compliance requirement for businesses that move physical goods, because a mistake here does not just create a paperwork problem later; it stops a truck on the highway right now. Most disputes we see are not about whether the rule exists, but about the details: exact thresholds, how validity is calculated, and what counts as a valid reason for an extension.</p>

                <h2>When Is an E-Way Bill Required?</h2>
                <p>An e-way bill (Form GST EWB-01) must be generated before goods worth more than <strong>Rs 50,000</strong> (inclusive of tax) are moved by road, rail, air, or vessel. This applies to inter-state movement across the board. For movement within the same state, the Rs 50,000 threshold applies in most states, but a number of states have notified their own, sometimes different, intra-state threshold. Always check the applicable state notification before assuming the national figure applies to a purely intra-state consignment.</p>
                <p>The requirement is not limited to sales. It also covers movement for job work, branch transfers, exhibitions, and returns of goods, provided the value crosses the threshold. Certain categories, such as specified exempted goods and movement by non-motorised conveyance, are excluded regardless of value.</p>

                <h2>How Validity Is Calculated</h2>
                <p>Once generated, an e-way bill is valid for:</p>
                <ul>
                  <li><strong>One day for every 200 km</strong> (or part thereof) for normal cargo</li>
                  <li><strong>One day for every 20 km</strong> (or part thereof) for over-dimensional cargo</li>
                </ul>
                <p>Validity starts from the date and time the e-way bill is generated. A consignment travelling 350 km, for example, gets 2 days of validity, not 1.75 rounded down; any part of the distance slab counts as a full additional day. This is the detail that trips up businesses estimating validity manually instead of letting the portal calculate it.</p>

                <h2>Extending an Expired or Expiring E-Way Bill</h2>
                <p>If a consignment is delayed, either the generator or the transporter can request an extension through the e-way bill portal, but only within a narrow window: <strong>8 hours before or after</strong> the current validity expires. The system requires a reason (traffic delay, vehicle breakdown, natural calamity, and similar categories are typically accepted) and, in some cases, the current location of the goods.</p>
                <p>Extensions can be granted in successive stages as needed, but the <strong>cumulative extended validity cannot exceed 360 days</strong> from the date the e-way bill was first generated. Beyond that, a fresh e-way bill has to be generated against the original document, assuming it is still within the 180-day base-document limit discussed below.</p>

                <h2>The 180-Day Rule for Base Documents</h2>
                <p>An e-way bill cannot be generated if the underlying document, the tax invoice, bill of supply, or delivery challan, is more than <strong>180 days old</strong> from its own date. This closes a gap where an old, stale invoice could otherwise be used to justify a movement of goods long after the transaction it relates to. In practice, this means businesses with a backlog of undispatched, invoiced stock need to either move the goods promptly or re-invoice before the 180-day window lapses.</p>

                <h2>Penalties for Non-Compliance</h2>
                <p>Transporting goods above the threshold without a valid e-way bill, or with an expired, incorrect, or mismatched one, exposes the consignment to detention and seizure of both the goods and the vehicle by GST enforcement officers, along with a monetary penalty. Beyond the immediate financial hit, a detained shipment usually means missed delivery commitments, demurrage costs, and, if it happens repeatedly, closer scrutiny of the business&apos;s broader GST compliance. For most businesses moving goods regularly, the practical fix is to build e-way bill generation into the dispatch workflow itself rather than treating it as a separate compliance task done after the fact.</p>

                <h2>Common Mistakes We See</h2>
                <ul>
                  <li><strong>Splitting invoices to stay under Rs 50,000:</strong> Artificially breaking a single consignment into multiple invoices to avoid the threshold is treated as an attempt to evade the requirement and invites penalty on the full consignment value.</li>
                  <li><strong>Vehicle number mismatches:</strong> The vehicle number on the e-way bill must match the vehicle actually carrying the goods; a mismatch during a transit check is one of the most common reasons for detention.</li>
                  <li><strong>Ignoring intra-state state-specific thresholds:</strong> Businesses operating across multiple states sometimes apply one state&apos;s threshold everywhere, missing a stricter requirement in another.</li>
                  <li><strong>Letting validity lapse mid-transit without extending:</strong> Once the 8-hour extension window closes, there is no way to extend that specific e-way bill; a fresh one is needed, which can delay the shipment further.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help setting up GST-compliant e-way bill workflows?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses across Nashik, Sillod, and beyond build reliable GST compliance processes, from e-way bills and e-invoicing to returns and audits.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/e-invoicing-gst-applicability-threshold" style={{ color: 'var(--primary)', fontWeight: 600 }}>E-Invoicing Under GST: Applicability Threshold & Process</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups: When Required & First Return Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-on-real-estate-under-construction-ready" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Real Estate: Under-Construction vs Ready-to-Move Properties</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

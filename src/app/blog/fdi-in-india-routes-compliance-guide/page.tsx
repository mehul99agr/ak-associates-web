import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'FDI in India: Routes, Sectoral Rules & Compliance Guide',
  description: 'How Foreign Direct Investment into India works: automatic route vs government route, sectoral caps, the Press Note 3 land-border rule, pricing guidelines, and FC-GPR/FC-TRS reporting.',
  keywords: [
    'FDI in India', 'FDI automatic route', 'FDI government route India',
    'FDI sectoral caps', 'FC-GPR filing', 'FEMA Non-Debt Instruments Rules',
    'Press Note 3 FDI', 'foreign direct investment compliance India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/fdi-in-india-routes-compliance-guide' },
  openGraph: {
    title: 'FDI in India: Routes, Sectoral Rules & Compliance Guide',
    description: 'Automatic route vs government route, sectoral caps, the Press Note 3 land-border rule, and reporting obligations for FDI into India.',
    url: 'https://agrawalkhandelwal.com/blog/fdi-in-india-routes-compliance-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDI in India: Routes & Compliance Guide',
    description: 'Automatic route vs government route, sectoral caps, and reporting obligations for FDI into India.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('FDI in India: Routes, Sectoral Rules & Compliance Guide', 'fdi-in-india-routes-compliance-guide')

const articleLd = buildArticleLd({
  headline: 'FDI in India: Routes, Sectoral Rules & Compliance Guide',
  description: 'Automatic route vs government route, sectoral caps, the Press Note 3 land-border rule, pricing guidelines, and FC-GPR/FC-TRS reporting for FDI into India.',
  datePublished: '2026-09-07',
  slug: 'fdi-in-india-routes-compliance-guide',
})

const faqs: FaqPair[] = [
  ['What governs FDI in India?', 'FDI into India is governed by the FEMA (Non-Debt Instruments) Rules, 2019 framed under the Foreign Exchange Management Act, 1999, read together with the DPIIT Consolidated FDI Policy and the sector-specific Press Notes issued from time to time. RBI and DPIIT jointly administer the framework.'],
  ['What is the difference between the automatic route and the government route?', 'Under the automatic route, a foreign investor can invest in an eligible sector without seeking prior approval from the government; only post-investment reporting to RBI is required. Under the government route, prior approval from the relevant administrative ministry or department is needed before the investment can be made. Most sectors in India are open under the automatic route; a smaller set of strategically sensitive sectors, or certain investor categories, require the government route.'],
  ['What is the Press Note 3 rule for investment from land-bordering countries?', 'Press Note 3 (2020) requires that any investment from an entity based in, or beneficially owned by a resident of, a country sharing a land border with India goes through the government approval route, regardless of the sector or the sector\'s general FDI cap. This applies to China, Pakistan, Bangladesh, Nepal, Myanmar, Bhutan, and Afghanistan. Some limited relaxations for small non-controlling stakes have been discussed in later amendments, but the safest approach for any investment structure touching these jurisdictions is to confirm the current position before proceeding, rather than assume an exemption applies.'],
  ['How is FDI reported once the investment is made?', 'The Indian investee company reports the inbound investment through the Single Master Form on the RBI\'s FIRMS portal; broadly Form FC-GPR for a fresh share allotment to a foreign investor, and Form FC-TRS for a transfer of existing shares between a resident and a non-resident. These need to be filed within the prescribed timelines after the transaction, through the company\'s Authorised Dealer bank.'],
  ['Are there pricing rules for FDI transactions?', 'Yes. Share issuances and transfers involving a non-resident need to be priced at fair market value, determined under an internationally accepted pricing methodology, subject to the specific rules for listed versus unlisted companies. A resident cannot sell shares to a non-resident below this fair value, and a non-resident cannot sell to a resident above it, which is a control designed to prevent value being artificially shifted across the transaction.'],
  ['Can FDI come into a company doing agricultural activity in India?', 'FDI in agriculture is broadly restricted, with only specific carved-out activities permitted, such as certain plantation crops, horticulture, floriculture, and animal husbandry under defined conditions; general agricultural land ownership or trading is not an FDI-eligible activity. If your business model touches agriculture or agri-adjacent land use, this needs a specific sectoral check before assuming any FDI route applies; see our related guide on FEMA rules for NR-held agricultural land.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function FdiGuideBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">FEMA &amp; Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>FDI in India: Routes, Sectoral Rules &amp; Compliance Guide</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 7, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>FDI into India runs through either the automatic route or the government route, depending on sector and investor origin.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Most sectors allow 100% FDI under the automatic route, needing only post-investment reporting, not prior approval.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Investment from entities linked to India&apos;s land-bordering neighbours needs government approval regardless of sector, under Press Note 3.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Reporting runs through FC-GPR (fresh issue) or FC-TRS (transfer) on the FIRMS portal, within prescribed timelines.</li>
                  <li style={{ marginBottom: 0 }}>Agriculture is largely FDI-restricted outside specific carved-out activities; always confirm the sector-specific position before assuming eligibility.</li>
                </ul>
              </div>

              <p>Foreign Direct Investment into an Indian company is not a single, uniform process; which route applies, whether prior approval is needed, and what gets reported afterward all depend on the sector, the structure of the investment, and sometimes the investor&apos;s country of origin. Getting the route wrong at the outset, rather than a reporting slip after the fact, is the more expensive mistake, since it can affect whether the investment was validly made at all.</p>

              <h2>The Governing Framework</h2>
              <p>FDI into India sits under the <strong>FEMA (Non-Debt Instruments) Rules, 2019</strong>, framed under the Foreign Exchange Management Act, 1999, read together with the <strong>DPIIT Consolidated FDI Policy</strong> and the sector-specific Press Notes issued periodically. RBI and DPIIT jointly administer this framework; DPIIT sets and revises sectoral policy, RBI operationalises the reporting and compliance mechanics.</p>

              <h2>Automatic Route vs Government Route</h2>
              <p>Two routes exist:</p>
              <ul>
                <li><strong>Automatic route</strong>: the foreign investor can invest without seeking prior government approval; the Indian investee company only needs to report the investment to RBI after it is made. The large majority of India&apos;s FDI inflow comes through this route, and most sectors are open under it, several of them up to 100%.</li>
                <li><strong>Government route</strong>: prior approval from the relevant administrative ministry or department is required before the investment can be completed. This applies to specific sectors treated as sensitive, and separately, to specific investor categories regardless of sector (see Press Note 3 below).</li>
              </ul>
              <p>Sectoral caps and route classifications are revised periodically through fresh Press Notes, so the applicable position for a specific sector should always be confirmed against the current Consolidated FDI Policy at the time of the transaction, rather than assumed from a prior year&apos;s position.</p>

              <h2>The Press Note 3 Rule for Land-Bordering Countries</h2>
              <p>A rule that catches many structures by surprise: any investment from an entity based in, or beneficially owned by a resident of, a country sharing a land border with India; <strong>China, Pakistan, Bangladesh, Nepal, Myanmar, Bhutan, and Afghanistan</strong>: must go through the <strong>government approval route</strong>, irrespective of the sector or that sector&apos;s general cap. This applies based on beneficial ownership, not just the immediate investing entity&apos;s registered location, so a structure routed through a third country can still be caught if the ultimate beneficial owner is based in one of these jurisdictions. Some later relaxations for small, non-controlling stakes have been discussed, but given how consequential getting this wrong is (an investment made without required approval can be treated as void) this is not a position to assume without confirming the current rule against your specific structure.</p>

              <h2>Reporting: FC-GPR and FC-TRS</h2>
              <p>Once the investment is made, the Indian investee company reports it through the <strong>Single Master Form</strong> on RBI&apos;s FIRMS portal:</p>
              <ul>
                <li><strong>Form FC-GPR</strong>: for a fresh allotment of shares (or other eligible instruments) to a foreign investor.</li>
                <li><strong>Form FC-TRS</strong>: for a transfer of existing shares between a resident and a non-resident.</li>
              </ul>
              <p>Both are filed within prescribed timelines through the company&apos;s Authorised Dealer bank, and delayed reporting is treated as a FEMA compliance lapse subject to RBI&apos;s compounding process, similar in principle to delayed ODI/APR reporting on the outbound side.</p>

              <h2>Pricing Guidelines</h2>
              <p>Share issuances and transfers involving a non-resident must be priced at <strong>fair market value</strong>, determined under an internationally accepted valuation methodology, with specific rules distinguishing listed and unlisted companies. A resident cannot sell to a non-resident below this value, and a non-resident cannot sell to a resident above it; the rule exists to prevent value being shifted across a cross-border transaction through mispricing.</p>

              <h2>Sectors Where FDI Is Restricted or Prohibited</h2>
              <p>A small number of sectors remain closed to FDI entirely or are narrowly restricted, most notably <strong>agriculture and plantation activity</strong>: general agricultural land ownership or trading is not FDI-eligible, though specific carved-out activities such as certain plantation crops, horticulture, floriculture, and animal husbandry are permitted under defined conditions. This connects directly to the separate, and often confused, question of an individual non-resident personally holding agricultural land in India, which is a FEMA property-holding restriction rather than an FDI question; see our dedicated guide on <Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA rules for NRIs holding agricultural land</Link> for that distinct topic.</p>

              <h2>Where FDI Fits With Incorporation</h2>
              <p>For a foreign investor setting up an Indian subsidiary rather than investing into an existing company, the FDI route decision happens at incorporation itself. See our guide on <Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>foreign subsidiary registration in India via the FDI route</Link> for how that process works end to end, and our <Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ODI guide</Link> for the reverse direction; Indian residents investing abroad.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Bringing FDI into an Indian entity?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We confirm the correct route, handle FC-GPR/FC-TRS reporting, and structure the valuation and documentation correctly the first time.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/company-incorporation" className="btn btn-outline">Company Incorporation Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foreign Subsidiary Registration in India (FDI Route)</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Overseas Direct Investment (ODI) Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-agricultural-land-india-fema-rules" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA Rules for NRIs Holding Agricultural Land</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

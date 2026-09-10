import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Can an NRI Buy Agricultural Land in India? FEMA Rules',
  description: 'FEMA rules on NRIs, OCIs, and foreign nationals holding agricultural land, plantation property, or a farmhouse in India: the purchase restriction, inheritance and gift exceptions, resale rules, and penalties for non-compliance.',
  keywords: [
    'NRI agricultural land India', 'NRI buy farmland India', 'FEMA agricultural land rules',
    'OCI agricultural land India', 'NRI inherited agricultural land', 'foreign national buy land India',
    'FEMA Non-Debt Instruments Rules agricultural land',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-agricultural-land-india-fema-rules' },
  openGraph: {
    title: 'Can an NRI Buy Agricultural Land in India? FEMA Rules',
    description: 'The FEMA restriction on NRIs and OCIs acquiring agricultural land, the inheritance and gift exceptions, and what happens if the rule is breached.',
    url: 'https://agrawalkhandelwal.com/blog/nri-agricultural-land-india-fema-rules',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can an NRI Buy Agricultural Land in India?',
    description: 'The FEMA restriction on NRIs and OCIs acquiring agricultural land, and the inheritance and gift exceptions that apply instead.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Can an NRI Buy Agricultural Land in India? FEMA Rules', 'nri-agricultural-land-india-fema-rules')

const articleLd = buildArticleLd({
  headline: 'Can an NRI Buy Agricultural Land in India? FEMA Rules, Exceptions & FDI/ODI Angle',
  description: 'The FEMA restriction on NRIs, OCIs, and foreign nationals acquiring agricultural land, plantation property, or a farmhouse in India, the inheritance and gift exceptions, resale rules, and consequences of non-compliance.',
  datePublished: '2026-09-10',
  slug: 'nri-agricultural-land-india-fema-rules',
})

const faqs: FaqPair[] = [
  ['Can an NRI buy agricultural land in India?', 'No. Under FEMA, 1999 read with the Foreign Exchange Management (Non-Debt Instruments) Rules, 2019, an NRI cannot purchase agricultural land, plantation property, or a farmhouse in India. This restriction applies regardless of how the funds are sourced or which state the land is in.'],
  ['Can an OCI (Overseas Citizen of India) buy agricultural land?', 'No, the same restriction applies to OCIs as to NRIs - agricultural land, plantation property, and farmhouses are outside what an OCI can purchase in India, even though OCIs otherwise have broader property rights than a general foreign national for residential or commercial property.'],
  ['How can an NRI legally come to hold agricultural land in India?', 'Only through three routes: inheriting it (from a resident or another person who held it validly), receiving it as a gift from a resident relative, or continuing to hold land they owned before their residential status changed to NRI. A purchase is not one of the permitted routes.'],
  ['Can an NRI sell agricultural land they inherited?', 'Yes, but only to a resident Indian citizen. An NRI cannot sell inherited or gifted agricultural land to another NRI, an OCI, or a foreign national - the resale itself is restricted to keep the land within resident ownership.'],
  ['What happens if an NRI buys agricultural land in breach of FEMA?', 'The transaction is void - no valid title passes to the buyer, regardless of what the sale deed says. Beyond that, it exposes the NRI to FEMA enforcement action, including a fine of up to three times the transaction value, and the property can be directed to be disposed of or confiscated. Sellers and facilitating parties can also face consequences.'],
  ['Can a foreign national (not an NRI or OCI) buy any property in India, including non-agricultural?', 'Generally no, not without prior RBI approval. A foreign citizen who is not an OCI falls outside the automatic permissions available to NRIs/OCIs and needs specific RBI approval to acquire immovable property in India of any kind, agricultural or otherwise, beyond a permitted lease arrangement.'],
  ['Can agricultural land be acquired in India through an FDI or ODI structure instead of personally?', 'No. FDI into India is broadly restricted from agricultural land ownership or trading, with only narrow carve-outs for specific activities like certain plantation crops, horticulture, and floriculture under defined conditions - it does not open a route to hold agricultural land generally. Since ODI concerns Indian residents investing abroad, it has no bearing on this question at all. There is no structuring route that converts a restricted personal purchase into a permitted corporate one for plain agricultural land.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NriAgriLandBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Can an NRI Buy Agricultural Land in India? FEMA Rules, Exceptions &amp; the FDI/ODI Angle</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 10, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>NRIs and OCIs cannot purchase agricultural land, plantation property, or a farmhouse in India under FEMA.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>The only legal routes to hold it are inheritance, a gift from a resident relative, or land owned before becoming an NRI.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Inherited or gifted agricultural land can only be resold to a resident Indian citizen, not to another NRI, OCI, or foreign national.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A breach makes the transaction void and exposes the buyer to FEMA penalties of up to 3x the transaction value.</li>
                  <li style={{ marginBottom: 0 }}>Neither an FDI nor an ODI structure provides a workaround - agricultural land is restricted from foreign investment generally, with only narrow, specific carve-outs.</li>
                </ul>
              </div>

              <p>Agricultural land is the one category of Indian property where the general NRI real estate rules do not apply. NRIs and OCIs can freely buy residential and commercial property in India, but agricultural land, plantation property, and farmhouses sit under a separate, more restrictive FEMA regime - and the restriction catches people out because it is easy to assume that if you can buy an apartment, you can buy a small farm plot the same way. You cannot, and getting this wrong voids the transaction entirely rather than just triggering a penalty on an otherwise valid purchase.</p>

              <h2>The General Rule: NRIs and OCIs Cannot Purchase Agricultural Land</h2>
              <p>Under the <strong>Foreign Exchange Management Act, 1999</strong>, read with the <strong>Foreign Exchange Management (Non-Debt Instruments) Rules, 2019</strong>, an NRI or an OCI is not permitted to purchase <strong>agricultural land, plantation property, or a farmhouse</strong> in India. This applies uniformly across states and regardless of the source of funds used - it is not a rule that can be satisfied by paying through NRE/NRO channels or by structuring the payment differently. The restriction exists to keep India&apos;s agricultural land within the hands of residents actively engaged in agriculture, rather than open to investment or speculative holding by those not resident in the country.</p>

              <h2>What NRIs and OCIs CAN Do</h2>
              <p>The rule is a restriction on <strong>purchase</strong>, not on holding altogether. There are three routes through which an NRI or OCI can validly come to hold agricultural land:</p>
              <ul>
                <li><strong>Inheritance</strong> - from a person (resident or otherwise) who held the land validly.</li>
                <li><strong>Gift from a resident relative</strong> - a resident Indian relative can gift agricultural land to an NRI or OCI relative.</li>
                <li><strong>Pre-existing ownership</strong> - land purchased while the individual was still a resident Indian, before their status changed to NRI, can continue to be held.</li>
              </ul>
              <p>What none of these routes permit is a fresh, direct purchase of agricultural land by someone who is already an NRI or OCI at the time of the transaction.</p>

              <h2>Reselling Inherited or Gifted Agricultural Land</h2>
              <p>Holding agricultural land through inheritance or gift comes with a resale restriction of its own: an NRI can sell that land only to a <strong>resident Indian citizen</strong>. Selling it to another NRI, an OCI, or a foreign national is not permitted, even though the NRI seller themselves acquired it legitimately. This closes off a potential workaround where agricultural land might otherwise circulate among non-resident buyers through a chain of inheritance-and-resale transactions.</p>

              <h2>Foreign Nationals Who Are Not OCIs</h2>
              <p>The position is stricter still for a foreign citizen who does not hold OCI status. Such a person generally <strong>cannot acquire any immovable property in India</strong> - agricultural or otherwise - without specific <strong>prior RBI approval</strong>, beyond a permitted lease arrangement of limited duration. This is a materially different (and narrower) starting position than what applies to NRIs and OCIs, who at least have the inheritance/gift/pre-existing-ownership routes available for agricultural land, and unrestricted purchase rights for residential and commercial property.</p>

              <h2>Consequences of Buying in Breach of the Rule</h2>
              <p>A purchase of agricultural land by an NRI or OCI made in violation of FEMA does not create a defective-but-valid title that can later be cured - it is treated as <strong>void</strong>. No legal ownership passes to the buyer regardless of what the registered sale deed says. Beyond the loss of title, the transaction exposes the buyer to <strong>FEMA enforcement action</strong>: a fine that can run up to <strong>three times the transaction value</strong>, and the property being directed for disposal. This makes the usual "I&apos;ll deal with it if it comes up" approach to FEMA compliance particularly costly here, since the risk is not a penalty layered on top of a valid purchase - it is the purchase itself failing.</p>

              <h2>The FDI and ODI Angle: No Structuring Workaround</h2>
              <p>A question that comes up often: can an NRI or foreign investor route around the restriction by holding the land through an Indian company or an investment structure instead of personally? The short answer is no, for two separate reasons. <strong>FDI</strong> into India is broadly restricted from general agricultural land ownership or trading, with only narrow, specific carve-outs for particular activities like certain plantation crops, horticulture, and floriculture under defined conditions - see our <Link href="/blog/fdi-in-india-routes-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>FDI in India guide</Link> for how sectoral restrictions work generally. <strong>ODI</strong>, on the other hand, is simply the wrong framework entirely here - it governs Indian residents investing abroad, not non-residents investing into India, so it has no relevance to this question at all; see our <Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ODI guide</Link> for what it actually covers. There is no combination of corporate structuring that converts a personally restricted agricultural land purchase into a permitted one.</p>

              <h2>What Changes If the NRI Becomes a Resident Again</h2>
              <p>Once an individual&apos;s residential status under FEMA reverts to resident Indian - typically by returning to India and meeting the residency threshold - the agricultural land purchase restriction no longer applies to them, since it is specifically tied to NRI/OCI/foreign-national status. See our <Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI returning to India financial checklist</Link> for the broader set of things that change on return, and our <Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>capital gains guide for inherited or gifted property</Link> if you are an NRI who already holds inherited agricultural land and are evaluating a sale.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Holding or inheriting agricultural land as an NRI?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help NRIs and OCIs confirm what they can legally hold, sell, or transfer, and handle the compliance around it.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fdi-in-india-routes-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>FDI in India: Routes &amp; Compliance Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Overseas Direct Investment (ODI) Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains for NRIs on Inherited or Gifted Property</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import ServiceOffer from '../_components/ServiceOffer'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'India to US Flip Structure: Guide for Indian Founders' },
  description: 'What a flip is, why US VCs ask for it, how the share swap works under FEMA, the Indian tax on the swap and the RBI reporting that follows.',
  keywords: ['flip structure India', 'India to US flip', 'Delaware parent Indian subsidiary', 'share swap FEMA overseas investment', 'reverse flip India'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/india-to-us-flip-structure-guide' },
  openGraph: {
    title: 'India to US Flip Structure: Guide for Indian Founders',
    description: 'What a flip is, why US VCs ask for it, how the share swap works under FEMA, the Indian tax on the swap and the RBI reporting that follows.',
    url: 'https://agrawalkhandelwal.com/blog/india-to-us-flip-structure-guide',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India to US Flip Structure: Guide for Indian Founders',
    description: 'What a flip is, why US VCs ask for it, how the share swap works under FEMA, the Indian tax on the swap and the RBI reporting that follows.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('India to US Flip Structure: Guide for Indian Founders', 'india-to-us-flip-structure-guide')

const articleLd = buildArticleLd({
  headline: 'India to US Flip Structure: Guide for Indian Founders',
  description: 'What a flip is, why US VCs ask for it, how the share swap works under FEMA, the Indian tax on the swap and the RBI reporting that follows.',
  datePublished: '2026-11-18',
  dateModified: '2026-11-25',
  slug: 'india-to-us-flip-structure-guide',
})

const faqs: [string, string][] = [
  ['What is a flip structure for an Indian startup?', 'A flip makes your Indian company a subsidiary of a new Delaware C-Corp. Founders and investors swap their Indian shares for Delaware shares, so the cap table sits in the US while operations stay in India.'],
  ['Why do US investors ask Indian founders to flip?', 'US funds and accelerators are set up for Delaware C-Corps with standard documents and a familiar exit path, and many cannot hold Indian shares directly. The request is common but not universal, so ask the investor whether it is a condition before you flip.'],
  ['Is a flip taxable in India?', 'The share swap is a transfer, so capital gains tax can arise on the difference between the value of the Delaware shares received and the cost of your Indian shares. Exemptions are conditional and may not fit an outbound flip, so get a written tax opinion first. Doing it early, when value is low, keeps the gain small.'],
  ['Which FEMA rules govern the swap?', 'Founders acquiring Delaware shares fall under the Overseas Investment Rules, 2022, which recognise swap of securities as a permitted mode. The Indian company being acquired by a foreign parent falls under the Non-Debt Instruments Rules, 2019, including Rule 9A on share swaps added in 2024. How the two fit together for resident individuals is not fully settled, so take a legal opinion.'],
  ['What RBI reporting follows a flip?', 'Founders report their overseas investment through their bank and file annual performance reports. The Indian company reports foreign ownership on FC-GPR (new issue, within 30 days of allotment) or FC-TRS (transfer of shares) and files the annual FLA return.'],
  ['Can a flip be reversed?', 'Yes, through a reverse flip, but it is its own transaction with its own tax and FEMA steps. Recent amendments have eased the FEMA side, but the tax cost can still be significant, so treat the flip as hard to undo.'],
]

const faqLd = buildFaqLd(faqs)

export default function IndiaToUsFlipStructureBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">US Cross-Border</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>India to US Flip Structure: What Indian Founders Need to Know</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>A flip makes your Indian company a subsidiary of a new Delaware C-Corp, with founders and investors holding the US shares.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Founders swap Indian shares for Delaware shares. FEMA covers it under the Overseas Investment Rules, 2022 and the Non-Debt Instruments Rules, 2019 (Rule 9A on swaps added in 2024).</li>
                  <li style={{ marginBottom: '0.4rem' }}>The swap is a transfer for Indian capital gains tax. Exemptions are conditional, so get a written tax opinion before signing. Flipping early keeps the gain small.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Reporting follows: overseas investment reporting for founders, FC-GPR (30 days from allotment) or FC-TRS for the Indian company, and the annual FLA return.</li>
                  <li style={{ marginBottom: 0 }}>Some points, such as how the round-tripping limits apply to resident individuals, are not settled. Take a legal opinion.</li>
                </ul>
              </div>
              <ServiceOffer variant="us-entity" />

              <p>A flip means moving the top of your company from India to the US. The Indian company you built becomes a subsidiary of a new Delaware C-Corp, and you and your investors hold shares in the Delaware parent instead. It is one of the first things a US investor raises with an Indian founder, and the way it is done decides how much Indian tax and RBI paperwork you carry for years.</p>

              <h2>Why US VCs and Accelerators Ask for It</h2>
              <p>US funds and accelerators such as Y Combinator are set up to invest in Delaware C-Corps with standard documents (SAFEs, preferred stock, a familiar cap table). Many US funds also cannot or prefer not to hold shares in an Indian company directly. A Delaware parent also gives a cleaner path to a US exit. The cost is that the flip is a taxable-looking event if done late, so the usual advice is to do it early, when the Indian company is worth little and the gain is small. Read <Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link> first if you have not yet chosen the entity type.</p>

              <h2>The Structure</h2>
              <p>Before: founders and investors hold shares in the Indian private limited company. After: founders and investors hold shares in a Delaware C-Corp, and the Delaware C-Corp holds the Indian company (usually 100%, with a nominee holding one share to meet the two-member minimum). Operations, employees and often the engineering team stay in India. The US entity signs customer contracts, raises money and holds IP, and the Indian entity provides services to it. That services relationship is a related-party transaction, covered in <Link href="/blog/indian-subsidiary-of-us-c-corp-setup-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>our guide to the Indian subsidiary of a US C-Corp</Link>.</p>
              <p>If the founders themselves will hold the Delaware shares while it owns the Indian company, FEMA&apos;s limits on resident individuals come into play. Many founders hold through an Indian LLP instead; see <Link href="/blog/startup-triangle-structure-llp-us-c-corp-indian-subsidiary" style={{ color: 'var(--primary)', fontWeight: 600 }}>the startup triangle structure: LLP, US C-Corp and Indian Pvt Ltd</Link>.</p>

              <h2>How the Share Swap Works Under FEMA</h2>
              <p>In the common route, each Indian-resident founder transfers their Indian shares to the Delaware company and receives Delaware shares in return, at a swap ratio fixed on valuation. Two FEMA regimes sit on top of this:</p>
              <ul>
                <li><strong>Founders acquiring Delaware shares (outbound):</strong> for a resident individual this is overseas investment under the Foreign Exchange Management (Overseas Investment) Rules, 2022. The 2022 Rules recognise acquisition by swap of securities as a permitted mode. Practitioner commentary notes the rules do not spell out every detail of how a swap works, and a resident individual&apos;s overseas investment carries its own conditions.</li>
                <li><strong>Delaware company acquiring Indian shares (inbound):</strong> this falls under the Non-Debt Instruments Rules, 2019. A 2024 amendment added Rule 9A, which expressly deals with swaps of an Indian company&apos;s equity against a foreign company&apos;s equity.</li>
              </ul>
              <p>Because the Indian company ends up owned by a foreign company that is owned by Indian residents, the structure also touches the round-tripping restrictions in the overseas investment framework. This is the least settled part of the flip. Advisers differ on how the permissions fit together for resident individuals, so a written legal opinion on the exact route is part of a proper flip, not an optional extra. We have not found an official statement that settles it for every fact pattern.</p>

              <h2>Valuation</h2>
              <p>The swap ratio needs a defensible valuation of the Indian company, normally by a SEBI-registered merchant banker or a registered valuer, using accepted methods such as discounted cash flow or net asset value. The same valuation feeds the FEMA pricing check, the Indian tax computation and the Delaware share issue. For a pre-revenue company the numbers are small, which is exactly why early flips are cheaper.</p>

              <h2>Indian Tax on the Swap</h2>
              <p>Exchanging Indian shares for foreign shares is a transfer for capital gains purposes. The gain is generally the fair value of the Delaware shares received less the cost of the Indian shares, taxed as long-term or short-term depending on how long you held them. Exemptions for transfers in a merger or restructuring exist in the Act, but they are conditional and tied to Indian companies, so they do not automatically cover an outbound flip. Whether any exemption fits your facts is a question for a written tax opinion before you sign. If the cost of your shares is close to their value, the tax can be small or nil, which again favours flipping early.</p>
              <p>The Income Tax Act, 2025 applies from April 1, 2026 and has renumbered the capital gains and exemption sections. Confirm the exact current section references before relying on older numbering. The general anti-avoidance rules can also apply if the structure has no commercial reason beyond tax.</p>

              <h2>Typical Sequence</h2>
              <ul>
                <li>Pre-flip assessment: tax opinion, FEMA route, investor term sheet.</li>
                <li>Incorporate the Delaware C-Corp and get an EIN (see <Link href="/blog/delaware-wyoming-incorporation-ein-itin-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Delaware incorporation, EIN and ITIN</Link>).</li>
                <li>Independent valuation and swap ratio.</li>
                <li>Board and shareholder approvals in both companies; share swap agreement.</li>
                <li>Overseas investment reporting for the founders and inbound reporting for the Indian company (below).</li>
                <li>Assign or license IP and move customer contracts to the US entity.</li>
                <li>Update ROC records and the Indian company&apos;s registers.</li>
              </ul>
              <p>Practitioners usually quote a few weeks to a few months end to end, mostly depending on valuation and approvals. We have not seen an official timeline.</p>

              <h2>RBI and FEMA Reporting After the Flip</h2>
              <ul>
                <li><strong>Overseas investment reporting:</strong> founders who hold the Delaware shares report the overseas investment through their authorised dealer bank and then file annual performance reporting as the Overseas Investment Rules require.</li>
                <li><strong>FC-GPR or FC-TRS:</strong> the Indian company reports foreign ownership. A fresh issue to the Delaware parent is reported on FC-GPR within 30 days of allotment, and a transfer of existing shares to it is reported on FC-TRS. See <Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA compliance for foreign investment</Link> and <Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>our ODI guide</Link>.</li>
                <li><strong>FLA return:</strong> the Indian company files the annual return on foreign liabilities and assets once it has foreign investment.</li>
              </ul>
              <p>A late filing is regularised through the RBI late submission fee instead of the old compounding route.</p>

              <h2>Reverse Flip and Alternatives</h2>
              <p>A reverse flip brings the holding company back to India. The 2024 Rule 9A amendment has made it more practical than it was, but it is a separate transaction with its own tax cost, so do not treat a flip as easily reversible. Founders who do not want to crystallise a swap sometimes build the US entity beside the Indian one and move new business there. Whether that works depends on your investors and your IP. See <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>our startup advisory</Link> for the broader compliance picture and <Link href="/us-cross-border" style={{ color: 'var(--primary)', fontWeight: 600 }}>our US cross-border services</Link>.</p>

            </div>

            <PostFooterLinks slug="india-to-us-flip-structure-guide" />

            <PostCTA segment="us"
            heading="Planning a flip to Delaware?"
            description="We help founders sequence the tax opinion, FEMA route and filings before any shares move."
            secondaryLabel="US Cross-Border Services"
            secondaryHref="/us-cross-border"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/indian-subsidiary-of-us-c-corp-setup-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>Indian Subsidiary of a US C-Corp: Setup and Compliance</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA Compliance for Foreign Investment</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/us-cross-border" style={{ color: 'var(--primary)', fontWeight: 600 }}>US Cross-Border Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'India-US DTAA Guide: Permanent Establishment and Business Profits',
  description: 'How the India-US tax treaty defines a permanent establishment, how Article 7 attributes business profits to it, and what this means for a founder running a US entity alongside Indian operations.',
  keywords: [
    'India US DTAA permanent establishment', 'Article 7 business profits DTAA',
    'India US tax treaty founder', 'PE risk US entity India operations',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/india-us-dtaa-guide' },
  openGraph: {
    title: 'India-US DTAA Guide: Permanent Establishment and Business Profits',
    description: 'Permanent establishment thresholds and Article 7 profit attribution under the India-US tax treaty.',
    url: 'https://agrawalkhandelwal.com/blog/india-us-dtaa-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India-US DTAA Guide',
    description: 'Permanent establishment and business profits under the India-US tax treaty.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('India-US DTAA Guide: Permanent Establishment and Business Profits', 'india-us-dtaa-guide')

const articleLd = buildArticleLd({
  headline: 'India-US DTAA Guide: Permanent Establishment and Business Profits',
  description: 'How the India-US double taxation avoidance agreement defines a permanent establishment under Article 5 and attributes business profits under Article 7, and its relevance to a founder running a US entity from India.',
  datePublished: '2026-02-03',
  slug: 'india-us-dtaa-guide',
})

const faqs: [string, string][] = [
  ['What is a permanent establishment under the India-US treaty?', 'Article 5 of the India-US DTAA defines a permanent establishment, generally, as a fixed place of business through which an enterprise\'s business is wholly or partly carried on, such as a branch, office, or factory, along with specific rules for construction projects and service activities carried on for a certain duration.'],
  ['How long can a construction project run before it creates a PE?', 'Under the India-US treaty, a construction or installation project generally becomes a permanent establishment once it continues for more than 120 days within a twelve-month period, so shorter projects can avoid PE status while longer ones cross into it.'],
  ['Can providing services alone create a permanent establishment?', 'Yes, under the treaty\'s services PE provisions, furnishing services through employees or other personnel for a sufficiently long duration, commonly referenced around 90 days within a twelve-month period for the relevant activities, can create a PE even without a fixed physical location, subject to the treaty\'s specific conditions.'],
  ['What does Article 7 actually tax if a PE exists?', 'Once a PE exists, Article 7 provides that the other country can tax the business profits attributable to that PE, calculated broadly as the profits the PE would have earned if it were an independent enterprise dealing at arm\'s length with the rest of the business, rather than the enterprise\'s entire worldwide profit.'],
  ['Why does this matter for a founder running a US entity while based in India?', 'If a founder\'s activities in India, such as directing operations, closing deals, or exercising authority for the US entity, are extensive enough, they can risk creating an unintended permanent establishment or otherwise triggering tax exposure in India for the US entity\'s profits, so this should be assessed alongside the corporate structure itself, not treated as a separate afterthought.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function IndiaUsDtaaGuideBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>India-US DTAA Guide: Permanent Establishment, Business Profits, and Double Tax Relief</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published February 3, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Article 5 defines when a fixed place of business, or long enough activity, becomes a permanent establishment (PE).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Construction/installation PE threshold: generally more than 120 days in a 12-month period.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Services PE can arise even without a fixed location once activity crosses a duration threshold.</li>
                  <li style={{ marginBottom: 0 }}>Article 7 taxes only the profit attributable to the PE, not the enterprise's entire worldwide income.</li>
                </ul>
              </div>

              <p>Most guidance on US structures for Indian founders focuses on incorporation, EIN, and IRS forms. The India-US DTAA is less discussed but just as important, particularly for a founder who continues to live and work in India while operating a US entity, since it directly affects whether that founder's Indian-based activity creates a taxable presence for the US business here.</p>

              <h2>What a Permanent Establishment Is</h2>
              <p>Article 5 of the India-US treaty defines a permanent establishment broadly as a fixed place of business through which an enterprise's business is wholly or partly carried on, such as a branch, office, factory, or workshop. The concept exists to draw a line: below it, a foreign enterprise's activity in a country is not taxable there; above it, the country gains the right to tax the profits connected to that activity.</p>

              <h2>Construction and Installation Projects</h2>
              <p>The treaty includes a specific duration test for construction, assembly, or installation projects: such a project generally becomes a permanent establishment once it continues for more than 120 days within a twelve-month period. A shorter project can be completed without crossing into PE status, while one that runs past this threshold brings the profits connected to it into the host country's taxing right.</p>

              <h2>Services Can Create a PE Without Any Fixed Location</h2>
              <p>This is the part founders most often miss. A services PE can arise purely from furnishing services through employees or other personnel for a sufficiently long duration, referenced around 90 days within a twelve-month period for the relevant activities under the treaty's specific conditions, without any office or fixed physical location at all. For a founder whose US entity's work is substantially delivered through people operating out of India, this duration-based test, not just the existence of an office, is the one to watch.</p>

              <h2>Article 7: What Actually Gets Taxed</h2>
              <p>Once a PE exists, Article 7 governs what the host country can tax: not the enterprise's entire worldwide profit, but specifically the profit attributable to that PE. This attribution is done broadly as if the PE were a distinct, independent enterprise dealing at arm's length with the rest of the business it is part of. This arm's-length attribution principle is the same underlying idea used in transfer pricing more broadly, and it means the profit taxed at the PE level should reflect what that establishment would have earned on its own, not an arbitrary share of total company profit.</p>

              <h2>Why This Matters for a Founder's Own Structure</h2>
              <p>A founder who incorporates a US entity but continues to run day-to-day operations, close deals, or exercise real decision-making authority from India needs to consider whether that pattern of activity itself risks creating an unintended permanent establishment, or otherwise creating Indian tax exposure for the US entity's profits, independent of how the corporate structure is set up on paper. This is a genuinely fact-specific question, since it depends on what the founder actually does day to day, not just on where the company is incorporated, and it should be assessed as part of the overall US entity plan rather than left until profits are already flowing and the pattern of activity is already established.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Running a US entity while based in India?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders assess permanent establishment risk alongside their US and Indian structuring.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>DTAA Guide: Country-Wise for NRIs</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Methods Explained</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Capital Gains on Inherited Property',
  description: 'How NRIs compute capital gains tax when selling inherited or gifted property in India — cost and holding period carryover from the original owner, TDS implications, and Form 13 relevance for FY 2026-27.',
  keywords: [
    'NRI capital gains inherited property', 'NRI sell gifted property India', 'inherited property tax NRI',
    'cost of acquisition inherited property', 'holding period inherited property capital gains',
    'NRI ancestral property sale tax', 'capital gains on gifted property India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-capital-gains-inherited-gifted-property' },
  openGraph: {
    title: 'NRI Capital Gains on Inherited Property',
    description: 'Cost and holding period carryover rules, TDS implications, and Form 13 relevance for NRIs selling inherited or gifted property in India.',
    url: 'https://agrawalkhandelwal.com/blog/nri-capital-gains-inherited-gifted-property',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Capital Gains on Inherited Property',
    description: 'Cost and holding period carryover rules, TDS implications, and Form 13 relevance for inherited or gifted property.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NRI Capital Gains on Inherited Property',
  description: 'Cost and holding period carryover from the original owner, TDS implications, and Form 13 relevance for NRIs selling inherited or gifted property in FY 2026-27.',
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
  author: {
    '@type': 'Person',
    '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
    name: 'CA Mehul Agrawal',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://agrawalkhandelwal.com/#organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' },
  },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-capital-gains-inherited-gifted-property',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is inheriting or receiving gifted property in India taxable for an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Inheriting property, or receiving it as a gift from a specified relative, does not itself trigger any tax for the NRI. Tax arises only later, when the NRI eventually sells the property, and is computed as capital gains at that point.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the cost of acquisition calculated for inherited property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For inherited or gifted property, the cost of acquisition is the cost to the original owner who first purchased it — not the market value at the time of inheritance or gift. The holding period is also calculated from the original owner\'s date of purchase, not the date of inheritance or gift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the buyer still deduct TDS when purchasing inherited property from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. TDS under Section 195 applies the same way regardless of how the NRI acquired the property. Because the original cost is often very low relative to the current sale value on inherited property, the gap between TDS deducted and actual tax liability can be especially large, making a Form 13 lower deduction certificate particularly valuable in these cases.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRIInheritedGiftedPropertyBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Capital Gains Tax for NRIs on Inherited or Gifted Property in India
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>A large share of the property NRIs sell in India wasn&apos;t purchased by them directly — it was inherited from parents or grandparents, or received as a gift from a relative. The tax treatment on eventual sale follows a specific carryover rule that surprises many NRIs, and it directly affects how much TDS gets deducted and whether a Form 13 certificate is worth pursuing.</p>

                <h2>No Tax at the Point of Inheritance or Gift</h2>
                <p>Receiving property through inheritance, or as a gift from a specified relative (parent, sibling, spouse, lineal ascendant or descendant, among others defined under Section 56), does not itself trigger any income tax for the NRI. There is no tax event at the point of transfer. Tax only arises later, when the NRI sells the property, and it is computed as a capital gain at that point — not before.</p>

                <h2>Cost of Acquisition Carries Over from the Original Owner</h2>
                <p>This is the rule that catches most NRIs off guard: for inherited or gifted property, the <strong>cost of acquisition is not the market value at the time of inheritance or gift</strong> — it is the cost to whoever originally purchased the property, going back as far as needed through the chain of inheritance or gifts. If a grandparent bought the property in 1985 for ₹2 lakh, and it eventually passes to an NRI grandchild who sells it today for ₹2 crore, the cost of acquisition used to compute capital gains is still that original 1985 purchase price (adjusted for indexation only if the pre-July 2024 option applies to the holding period in question).</p>

                <h2>Holding Period Also Carries Over</h2>
                <p>The holding period for determining long-term versus short-term capital gains is likewise measured from the <strong>original owner&apos;s date of purchase</strong>, not the date the NRI inherited or received the property. In almost all real inheritance and gift scenarios, this means the eventual sale automatically qualifies as a long-term capital gain, taxed at 12.5% rather than the 30% short-term rate — since the combined holding period across owners is typically well beyond 2 years.</p>

                <h2>Cost of Improvement Also Counts</h2>
                <p>Any documented cost of improvement incurred by the original owner or subsequent inheritors — renovations, construction additions, structural improvements — can be added to the cost of acquisition when computing the final gain, provided it is properly documented with receipts or records. This often matters significantly for older ancestral properties that have been renovated over decades.</p>

                <h2>TDS Still Applies in Full</h2>
                <p>None of this changes the buyer&apos;s obligation. <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS under Section 195 (now Section 393(2) under the Income Tax Act 2025)</Link> is still deducted on the full current sale consideration, regardless of how low the original cost of acquisition was. In fact, because inherited property often has a very low historical cost relative to today&apos;s sale value, the gap between TDS deducted and the NRI&apos;s actual tax liability tends to be even larger than on a directly purchased property — which is exactly the scenario a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> is designed for.</p>

                <h2>Documentation Challenges Are the Real Risk</h2>
                <p>The practical difficulty with inherited property isn&apos;t the tax rule itself — it&apos;s proving the original cost of acquisition decades later. Common gaps include missing original purchase deeds, undocumented improvement costs, and unclear succession records where the property passed through multiple family members before reaching the NRI. Any Form 13 application or ITR computation is only as strong as this documentation, so it is worth assembling well before a sale is finalized, not during the transaction itself. Our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory team</Link> regularly helps NRIs reconstruct acquisition cost documentation for ancestral property.</p>

                <h2>Practical Steps Before Selling</h2>
                <ul>
                  <li>Trace and retain the original purchase deed or earliest available ownership document</li>
                  <li>Collect any succession certificates, wills, or gift deeds establishing the chain of ownership</li>
                  <li>Gather receipts or records for any improvement costs incurred over the years</li>
                  <li>Get the capital gains computation done before the sale, so a Form 13 application can be filed with enough lead time</li>
                </ul>

                <p>Once the computation is ready, use our <Link href="/tools/nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Property TDS Calculator</Link> to see the statutory TDS at the current sale value, and compare it against the actual expected liability.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Selling inherited or gifted property in India?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help NRIs trace acquisition cost documentation, compute capital gains, and apply for Form 13 certificates on ancestral property sales.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20capital%20gains%20on%20inherited%20property." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqLd.mainEntity.map((faq, i) => (
                    <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{faq.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

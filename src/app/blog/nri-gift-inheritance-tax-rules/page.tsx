import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Gift & Inheritance Tax: Receiving Money from India or Abroad (2026)',
  description: 'Gift and inheritance tax rules for NRIs: taxability based on residential status, exempt gifts from relatives, FEMA implications of cross-border gifts, and LRS limits for gifts to NRIs.',
  keywords: ['NRI gift tax India', 'NRI inheritance tax', 'gift to NRI from India', 'inheritance NRI India', 'gift tax exemption NRI', 'NRI gift FEMA', 'cross border gift tax India'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-gift-inheritance-tax-rules' },
  openGraph: { title: 'NRI Gift & Inheritance Tax Rules (2026)', description: 'Taxability, exemptions, FEMA rules, and LRS limits for NRI gifts and inheritance.', url: 'https://agrawalkhandelwal.com/blog/nri-gift-inheritance-tax-rules', type: 'article' },
}

const articleLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'NRI Gift & Inheritance Tax: Receiving Money from India or Abroad (2026)', description: 'Gift and inheritance tax rules for NRIs.', datePublished: '2026-05-29', dateModified: '2026-05-29', author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' }, publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } }, mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-gift-inheritance-tax-rules' }

const faqs: [string, string][] = [
  ['Is inheritance taxable for NRIs in India?', 'No. India abolished inheritance tax (estate duty) in 1985. Money or property received through inheritance is not taxable as income for the recipient, whether NRI or resident. However, any income earned on inherited assets after receipt (rent, interest, capital gains on sale) is taxable based on the recipient\'s residential status. If an NRI inherits property and later sells it, capital gains tax applies under the normal rules.'],
  ['Are gifts from relatives taxable for NRIs?', 'Gifts received from specified relatives (spouse, parents, siblings, lineal ascendants/descendants, and their spouses) are fully exempt from income tax regardless of amount, under Section 56(2)(x). This applies whether the NRI is the giver or receiver, and whether the gift is in cash, property, or other assets. Gifts from non-relatives exceeding Rs 50,000 in a financial year are taxable for the recipient.'],
  ['Can parents gift money to NRI children?', 'Yes. Gifts between parents and children (or any specified relatives) are exempt from income tax regardless of amount. However, if the gift involves sending money abroad, the resident parent must comply with LRS (Liberalised Remittance Scheme) limits of USD 250,000 per financial year and TCS provisions. The NRI child receives it tax-free in India but should check the tax treatment in their country of residence.'],
  ['What are the FEMA rules for cross-border gifts?', 'A resident Indian can gift up to USD 250,000 per financial year to an NRI under the Liberalised Remittance Scheme (LRS). TCS of 20% applies on amounts exceeding Rs 7 lakh in a financial year (claimable as credit when filing ITR). An NRI gifting money to a resident in India can send funds from abroad or from their NRE/NRO account. Gifts from NRE accounts are freely repatriable; from NRO, they count toward the USD 1 million repatriation limit.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRIGiftInheritanceBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI Gift &amp; Inheritance Tax: What Is Taxable and What Is Not</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published May 29, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Inheritance</strong> is not taxable in India (estate duty was abolished in 1985). Income earned on inherited assets is taxable.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Gifts from relatives</strong> (parents, siblings, spouse, lineal ascendants/descendants) are fully exempt regardless of amount.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Gifts from non-relatives</strong> above Rs 50,000 are taxable as income for the recipient.</li>
                  <li style={{ marginBottom: 0 }}>Cross-border gifts involve <strong>FEMA/LRS compliance</strong> (USD 250K limit, TCS) on top of the tax rules.</li>
                </ul>
              </div>

              <p>Gift and inheritance questions come up in almost every NRI family: parents wanting to send money to children abroad, NRIs receiving inherited property in India, siblings transferring funds across borders. The tax rules are more straightforward than people assume, but the FEMA and foreign exchange rules add a compliance layer that catches people off guard.</p>

              <h2>Inheritance: Not Taxable in India</h2>
              <p>India abolished estate duty (inheritance tax) in 1985. Money, property, or any other asset received through inheritance or succession is <strong>not taxable</strong> as income for the recipient, whether they are NRI or resident. No TDS applies on inherited amounts. No gift tax provisions apply to inheritance.</p>
              <p>However, income earned on inherited assets after receipt is fully taxable based on the recipient&apos;s <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>residential status</Link>:</p>
              <ul>
                <li>Rent from inherited property: taxable as <Link href="/blog/nri-rental-income-tax-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>rental income</Link></li>
                <li>Interest on inherited deposits: taxable</li>
                <li>Capital gains on sale of inherited property: taxable, with cost of acquisition carried over from the original owner. See our guide on <Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>capital gains on inherited property</Link>.</li>
              </ul>

              <h2>Gift Tax: The Rs 50,000 Rule</h2>
              <p>Under Section 56(2)(x), gifts (money, property, or other assets) received by any person are taxable as &quot;Income from Other Sources&quot; if:</p>
              <ul>
                <li>The aggregate value of gifts received from <strong>non-relatives</strong> in a financial year exceeds <strong>Rs 50,000</strong></li>
                <li>The gift is not covered by a specific exemption (marriage, inheritance, certain trusts)</li>
              </ul>
              <p><strong>Gifts from specified relatives are fully exempt</strong> regardless of amount. Specified relatives include: spouse, brother or sister, brother or sister of spouse, brother or sister of either parent, lineal ascendant or descendant, lineal ascendant or descendant of spouse, and spouse of any of the above.</p>
              <p>The taxability depends on the recipient&apos;s residential status. If the recipient is an NRI and the gift is not connected to India (e.g., money gifted by a foreign friend deposited in a foreign account), it is not taxable in India. If the gift is received in India or connected to Indian assets, it falls under Indian tax provisions.</p>

              <h2>Common NRI Gift Scenarios</h2>
              <h3>Parents Gifting Money to NRI Children</h3>
              <p>Parents (resident) sending money to NRI children: exempt from income tax (relative gift). The parent uses the Liberalised Remittance Scheme (LRS) with a USD 250,000 per year limit. TCS of 20% applies on LRS remittances exceeding Rs 7 lakh in a year (the parent claims this back when filing their ITR). The NRI child should check whether the gift is taxable in their country of residence.</p>

              <h3>NRI Gifting Money to Parents in India</h3>
              <p>NRI sending money to resident parents: exempt from income tax (relative gift). NRI can send from their foreign account or from <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE account</Link>. However, if the parents invest the gifted money and earn income on it, the clubbing provisions under Section 64 may apply in certain cases (though typically not for gifts from adult children to parents).</p>

              <h3>NRI Receiving Inherited Property</h3>
              <p>Property inherited by an NRI is not taxable at the time of inheritance. When the NRI sells the property, <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS and capital gains tax</Link> apply. The cost of acquisition is the original owner&apos;s cost, and the holding period includes the original owner&apos;s period. <Link href="/blog/nri-repatriation-property-sale-proceeds" style={{ color: 'var(--primary)', fontWeight: 600 }}>Repatriation of sale proceeds</Link> follows the standard <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO repatriation process</Link>.</p>

              <h3>Gift of Property (Not Inheritance)</h3>
              <p>If a relative gifts property (not through inheritance but as a gift deed), the recipient does not pay tax on receiving it (relative gift exemption). The stamp duty value of the property on the date of gift becomes the deemed cost of acquisition for the recipient. When the recipient later sells it, capital gains are computed from this stamp duty value.</p>

              <h2>FEMA Compliance for Cross-Border Gifts</h2>
              <ul>
                <li><strong>Resident to NRI:</strong> LRS limit of USD 250,000/year. TCS at 20% above Rs 7 lakh. The gift must be for a permissible purpose under LRS.</li>
                <li><strong>NRI to Resident:</strong> Can send from abroad or from NRE account (freely). From NRO: subject to <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>USD 1 million repatriation limit</Link>.</li>
                <li><strong>NRI to NRI:</strong> Both being non-residents, the transaction may fall outside Indian FEMA jurisdiction if it does not involve Indian accounts or assets. But if Indian bank accounts are used, FEMA rules apply.</li>
              </ul>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need clarity on NRI gift or inheritance taxation?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We advise NRI families on gift structuring, inheritance tax implications, FEMA compliance, and property sale after inheritance.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map(([q, a], i) => (
                  <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains on Inherited/Gifted Property</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

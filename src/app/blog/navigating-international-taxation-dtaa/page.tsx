import Link from 'next/link'
import type { Metadata } from 'next'
import { BASE_URL, BOOKING_LINK, WHATSAPP_ARTICLE_LINK } from '@/lib/constants'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import PostCTA from '../_components/PostCTA'

const SLUG = 'navigating-international-taxation-dtaa'
const TITLE = 'International Taxation & DTAA Guide'
const DATE = 'March 05, 2026'
const ISO_DATE = '2026-03-05'
const CATEGORY = 'International Tax'
const META_DESCRIPTION = 'How to use India\'s DTAA treaties to reduce withholding tax, avoid permanent establishment risk, and repatriate profits without double taxation. Expert CA advisory.'

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESCRIPTION,
  keywords: ['DTAA India guide', 'double taxation avoidance India', 'withholding tax DTAA', 'tax residency certificate India', 'PE risk India', 'international tax CA India'],
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: META_DESCRIPTION,
    url: `${BASE_URL}/blog/${SLUG}`,
    type: 'article',
  },
}

const content = `<p>For a country-by-country breakdown of treaty rates for NRIs, see our <a href="/blog/dtaa-guide-nri-country-wise">India DTAA Guide by Country</a> (US, UK, UAE, Canada, Australia, Singapore).</p>

<p>Double Taxation Avoidance Agreements (DTAAs) are the foundation of international business planning. India has signed DTAAs with over 90 countries, including the US, UK, UAE, Singapore, Germany, and Australia. For Indian businesses with cross-border operations — and for foreign companies operating in India — understanding these treaties is the difference between paying tax once and paying it twice.</p>

<h2>What is a DTAA and Why Does It Matter?</h2>

<p>A DTAA is a bilateral tax treaty between two countries that determines which country has the right to tax specific types of income — dividends, interest, royalties, capital gains, business profits — and at what rate. Without a DTAA, an Indian company earning royalties from a foreign client could face withholding tax in that country and again pay full tax in India on the same income.</p>

<p>DTAAs resolve this by either exempting income in one country or providing a credit for tax paid abroad.</p>

<h2>Key DTAA Benefits for Indian Businesses</h2>

<ul>
<li><strong>Reduced withholding tax rates</strong> — The India-UAE DTAA reduces dividend withholding to 10% (vs 20% domestic rate). The India-Singapore DTAA offers 10% on interest. The India-US DTAA provides 10–15% on royalties.</li>
<li><strong>Capital gains exemption</strong> — Some treaties (India-Mauritius, India-Singapore, pre-2017) historically exempted capital gains. Post-2017 amendments have narrowed this but grandfathering provisions still apply to investments made before April 2017.</li>
<li><strong>Business profits protection</strong> — Under most DTAAs, a foreign company's business profits are taxable in India only if it has a Permanent Establishment (PE) in India. Without a PE, profits earned by the foreign entity from India remain taxable only in its home country.</li>
</ul>

<h2>How to Claim DTAA Benefits: Step by Step</h2>

<ol>
<li><strong>Obtain a Tax Residency Certificate (TRC)</strong> — The foreign entity must get a TRC from its home country's tax authority proving it is a tax resident there. For UAE entities, this is issued by the UAE Ministry of Finance.</li>
<li><strong>Submit Form 10F</strong> — Filed with the Indian tax authorities, Form 10F provides details of the foreign entity's residency, income type, and treaty article claimed. Without this, the Indian payer must deduct at the higher domestic rate.</li>
<li><strong>Apply the correct treaty article</strong> — Different income types (royalties, dividends, interest, fees for technical services) are covered by different articles. Applying the wrong article is a common audit trigger.</li>
<li><strong>Maintain substance documentation</strong> — Following OECD BEPS recommendations, Indian tax authorities increasingly scrutinise whether the foreign entity has genuine economic substance in its claimed jurisdiction (the "principal purpose test").</li>
</ol>

<h2>Permanent Establishment (PE) Risk</h2>

<p>PE risk is one of the most misunderstood areas of international tax. A foreign company creates a PE in India — and becomes taxable on Indian-source business profits — if it has:</p>

<ul>
<li>A fixed place of business (office, factory, branch) in India</li>
<li>A dependent agent in India who habitually concludes contracts on its behalf</li>
<li>A construction or installation project lasting more than 6–12 months (varies by treaty)</li>
<li>Key management personnel physically present in India for sustained periods</li>
</ul>

<p>Indian startups with overseas holding companies, or MNCs using Indian employees to service global clients, routinely create PE exposure without realising it. A PE analysis should be done before any cross-border business arrangement is finalised — not after a tax notice arrives.</p>

<h2>Transfer Pricing and Related Party Transactions</h2>

<p>When a transaction occurs between related entities in different countries — an Indian subsidiary paying a royalty to its UK parent, or an Indian company providing services to a UAE affiliate — the price must be at arm's length. The Indian Transfer Pricing regulations (Sections 92–92F) require documentation (<a href="/blog/master-file-local-file-cbcr-india">Master File, Local File</a>, <a href="/blog/form-3ceb-transfer-pricing-audit-report">Form 3CEB</a>) for transactions exceeding ₹1 crore. See our full <a href="/blog/transfer-pricing-documentation-checklist-india">transfer pricing documentation checklist</a> for the complete tier-by-tier breakdown. Underpricing or overpricing related party transactions is one of the most common sources of international tax adjustments in India.</p>

<h2>Repatriation of Profits</h2>

<p>Repatriating profits from India requires careful planning around:</p>

<ul>
<li>Dividend distribution (subject to withholding tax, reduced under applicable DTAA)</li>
<li>Buyback of shares (taxed differently post-Finance Act 2024)</li>
<li>Repayment of ECB (External Commercial Borrowings) — subject to RBI end-use restrictions and Form ECB-2 reporting</li>
<li>Royalty or management fee payments — must be at arm's length and supported by agreements</li>
</ul>

<p>FEMA governs the mechanics of repatriation. Any outward remittance of taxable income requires Form 145 (replacing the old Form 15CA) and Form 146 (replacing Form 15CB), effective under the <a href="/blog/new-income-tax-act-rules-2025">new Income Tax Act 2025</a> from April 1, 2026 — see our <a href="/blog/form-15ca-15cb-nri-remittance-guide">Form 15CA/15CB compliance guide</a> for the full filing process.</p>

<h2>Practical Takeaway</h2>

<p>International tax planning is not about minimising taxes at any cost — post-BEPS, aggressive tax positions face both financial penalties and reputational risk. The goal is to structure transactions correctly from the start: proper agreements, correct withholding, on-time forms, and documented substance. Our team handles the full cycle — from treaty analysis and TRC assistance to Form 3CEB filing, APA applications, and representation before the Authority for Advance Rulings.</p>`

const faqs: FaqPair[] = [
  ['What is a DTAA and why does it matter for Indian businesses?', 'A Double Taxation Avoidance Agreement is a bilateral tax treaty between two countries that determines which country can tax specific income types, such as dividends, interest, royalties, and capital gains, preventing the same income from being taxed twice.'],
  ['How do I claim DTAA benefits in India?', 'Obtain a Tax Residency Certificate (TRC) from your home country\'s tax authority, submit Form 10F to Indian tax authorities, apply the correct treaty article for your income type, and maintain substance documentation supporting genuine economic presence.'],
  ['What creates Permanent Establishment (PE) risk in India?', 'A foreign company creates a PE, and becomes taxable on Indian-source business profits, if it has a fixed place of business in India, a dependent agent who habitually concludes contracts, a long construction or installation project, or key management personnel based in India for sustained periods.'],
  ['What documentation is needed for related-party cross-border transactions?', 'Transactions between related entities in different countries must be priced at arm\'s length, with Transfer Pricing documentation (Master File, Local File, Form 3CEB) required for transactions exceeding Rs 1 crore under Sections 92-92F of the Income Tax Act.'],
]

const breadcrumbLd = buildBlogBreadcrumbLd(TITLE, SLUG)
const articleLd = buildArticleLd({ headline: TITLE, description: META_DESCRIPTION, datePublished: ISO_DATE, slug: SLUG })
const faqLd = buildFaqLd(faqs)

export default function NavigatingInternationalTaxationDtaaBlog() {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="section">
        <div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
            ← Back to Insights
          </Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">{CATEGORY}</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>{TITLE}</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>{DATE}</span>
              <span aria-hidden>•</span>
              <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>
              <span aria-hidden>•</span>
              <span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div
              style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Reviewed By</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>, Chartered Accountant (ICAI), UAE Corporate Taxation certified. Last reviewed {DATE}.
              </p>
              <h3 style={{ fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>Sources & References</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: 0 }}>Income Tax Department, Government of India — <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>incometax.gov.in</a></li>
              </ul>
            </div>

            <PostCTA
              heading="Need help with this?"
              description="Book a free consultation with our partners, or message us on WhatsApp for a quick answer."
              primaryLabel="Book Consultation"
              primaryHref={BOOKING_LINK}
              secondaryLabel="Ask on WhatsApp"
              secondaryHref={WHATSAPP_ARTICLE_LINK}
              secondaryExternal
              marginTop="1.5rem"
              background="var(--bg-surface)"
            />
          </article>
        </div>
      </div>
    </div>
  )
}

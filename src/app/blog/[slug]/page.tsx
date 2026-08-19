import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const BASE_URL = 'https://agrawalkhandelwal.com'

const posts = [
  {
    title: 'Understanding the New Tax Regime',
    slug: 'understanding-new-tax-regime-2025-26',
    date: 'March 18, 2026',
    isoDate: '2026-03-18',
    category: 'Tax Planning',
    metaDescription: 'The FY 2025-26 new tax regime explained: zero tax up to Rs 12 lakh under the Section 87A rebate, the revised slabs, the Rs 75,000 standard deduction, and who should still pick the old regime.',
    keywords: ['new tax regime 2025-26', 'income tax slabs FY 2025-26', 'section 87A rebate 12 lakh', 'old vs new tax regime', 'standard deduction 75000', 'income tax India 2025', 'tax planning India'],
    content: `<p>These slabs sit within the broader structural overhaul brought in by the <a href="/blog/new-income-tax-act-rules-2025">new Income Tax Act 2025</a>, which renumbers and simplifies the underlying law even where the FY 2025-26 rates below stay the same.</p>

<p>From FY 2025-26 (assessment year 2026-27), the new tax regime is not just the default option, it is genuinely the better choice for most salaried taxpayers. The headline change is significant: with the enhanced Section 87A rebate, anyone with a taxable income up to Rs 12 lakh now pays zero income tax. For a salaried person, after the Rs 75,000 standard deduction, that effectively means no tax on a salary of up to Rs 12.75 lakh.</p>

<p>Here is a clear breakdown of how the new regime works this year, and how to decide whether it is right for you.</p>

<h2>The FY 2025-26 New Regime Slabs</h2>

<p>The new regime applies the following slabs to your taxable income (after the standard deduction):</p>

<ul>
<li>Up to Rs 4,00,000 — Nil</li>
<li>Rs 4,00,001 to Rs 8,00,000 — 5%</li>
<li>Rs 8,00,001 to Rs 12,00,000 — 10%</li>
<li>Rs 12,00,001 to Rs 16,00,000 — 15%</li>
<li>Rs 16,00,001 to Rs 20,00,000 — 20%</li>
<li>Rs 20,00,001 to Rs 24,00,000 — 25%</li>
<li>Above Rs 24,00,000 — 30%</li>
</ul>

<p>A 4% Health and Education Cess applies on top of the tax computed.</p>

<h2>The Section 87A Rebate: Zero Tax up to Rs 12 Lakh</h2>

<p>This is the change that matters most. Under Section 87A, if your taxable income is up to Rs 12 lakh, the rebate wipes out your entire tax liability, you pay nothing. Combined with the Rs 75,000 standard deduction available to salaried individuals and pensioners, a person earning up to Rs 12.75 lakh in salary can have a nil tax outgo.</p>

<p>One important nuance: the rebate applies to income taxed at slab rates. It does not extend to special-rate income such as long-term capital gains on equity (taxed at 12.5%). So if part of your income is capital gains, the rebate covers only your normal income, not the gains.</p>

<h2>The Standard Deduction</h2>

<p>Salaried taxpayers and pensioners get a flat Rs 75,000 standard deduction under the new regime, up from Rs 50,000 in the old regime. It is automatic, you do not need to invest or produce proof to claim it.</p>

<h2>Old Regime vs New Regime: Who Should Still Choose Old?</h2>

<p>The new regime offers lower slab rates but almost no deductions. The old regime has higher rates but lets you claim a wide range of deductions, Section 80C (up to Rs 1.5 lakh), 80D (health insurance), home loan interest under Section 24(b) (up to Rs 2 lakh), HRA, and more.</p>

<p>The old regime can still win if you have large, genuine deductions. As a rough guide, the old regime tends to make sense when your combined deductions exceed roughly Rs 3.75 to Rs 4 lakh, typically someone paying significant home loan interest plus full 80C plus HRA plus health insurance. For most other taxpayers, especially those who do not have a home loan or who do not max out 80C, the new regime now produces a lower tax bill with zero paperwork.</p>

<h2>How to Decide</h2>

<ol>
<li><strong>Add up your real deductions</strong> — 80C, 80D, home loan interest, HRA, NPS, and so on. Be honest about what you actually claim, not what you could theoretically claim.</li>
<li><strong>Compute tax under both regimes</strong> — Run your numbers through both. Our <a href="/tax-calculator">Income Tax Estimator</a> computes the new regime liability instantly.</li>
<li><strong>Pick the lower outgo</strong> — Salaried taxpayers can switch between regimes each year, so you are not locked in. Business and professional income has more restrictive switching rules.</li>
</ol>

<h2>Practical Takeaway</h2>

<p>For the majority of salaried Indians, the FY 2025-26 new regime is now the simpler and cheaper option, the Rs 12 lakh rebate threshold is a genuine relief for the middle class. The taxpayers who should pause and run the comparison are those with substantial home loan interest and fully utilised 80C, 80D, and HRA, where the old regime may still edge ahead.</p>

<p>If your situation is borderline, or if you have capital gains, multiple income sources, or business income, the regime choice interacts with how you structure your finances. That is exactly the kind of planning where a short conversation with a CA pays for itself, getting the regime choice and the timing right can save more than any single deduction.</p>`,
  },
  {
    title: 'International Taxation & DTAA Guide',
    slug: 'navigating-international-taxation-dtaa',
    date: 'March 05, 2026',
    isoDate: '2026-03-05',
    category: 'International Tax',
    metaDescription: 'How to use India\'s DTAA treaties to reduce withholding tax, avoid permanent establishment risk, and repatriate profits without double taxation. Expert CA advisory.',
    keywords: ['DTAA India guide', 'double taxation avoidance India', 'withholding tax DTAA', 'tax residency certificate India', 'PE risk India', 'international tax CA India'],
    content: `<p>For a country-by-country breakdown of treaty rates for NRIs, see our <a href="/blog/dtaa-guide-nri-country-wise">India DTAA Guide by Country</a> (US, UK, UAE, Canada, Australia, Singapore).</p>

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

<p>FEMA governs the mechanics of repatriation. Any outward remittance of taxable income requires Form 145 (replacing the old Form 15CA) and Form 146 (replacing Form 15CB), effective under the new Income Tax Act 2025 from April 1, 2026 — see our <a href="/blog/form-15ca-15cb-nri-remittance-guide">Form 15CA/15CB compliance guide</a> for the full filing process.</p>

<h2>Practical Takeaway</h2>

<p>International tax planning is not about minimising taxes at any cost — post-BEPS, aggressive tax positions face both financial penalties and reputational risk. The goal is to structure transactions correctly from the start: proper agreements, correct withholding, on-time forms, and documented substance. Our team handles the full cycle — from treaty analysis and TRC assistance to Form 3CEB filing, APA applications, and representation before the Authority for Advance Rulings.</p>`,
  },
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: 'article',
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
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
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  }

  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <div className="section">
        <div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
            ← Back to Insights
          </Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">{post.category}</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>{post.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>{post.date}</span>
              <span aria-hidden>•</span>
              <span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div
              style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help with this?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Book a free consultation with our partners, or message us on WhatsApp for a quick answer.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Consultation</a>
                <a href="https://wa.me/919527533506?text=Hi,%20I%20read%20your%20article%20and%20have%20a%20question." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

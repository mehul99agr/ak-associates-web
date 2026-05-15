import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const BASE_URL = 'https://agrawalkhandelwal.com'

const posts = [
  {
    title: 'Essential Compliance for Indian Startups',
    slug: 'essential-compliance-indian-startups',
    date: 'March 12, 2026',
    category: 'Corporate Law',
    metaDescription: 'Complete compliance checklist for Indian startups: MCA filings, GST returns, TDS, advance tax, and FEMA reporting. Avoid penalties and stay DPIIT-eligible.',
    keywords: ['startup compliance India', 'MCA filing startup', 'GST compliance startup India', 'FEMA FC-GPR reporting', 'DPIIT compliance India'],
    content: `<p>Navigating the regulatory landscape in India can be daunting for new founders. From the day of incorporation, your startup enters a cycle of mandatory filings across multiple regulators — MCA, GST department, Income Tax, RBI, and EPFO. Missing deadlines doesn't just attract penalties; it can block DPIIT recognition, delay fundraising due diligence, and create liabilities that haunt you at Series A.</p>

<p>This guide covers the core compliance obligations every Indian startup must track from day one.</p>

<h2>1. MCA (Ministry of Corporate Affairs) Filings</h2>

<p>Every Private Limited Company and LLP must file annual forms with the Registrar of Companies (RoC):</p>

<ul>
<li><strong>AOC-4</strong> — Financial statements (within 30 days of AGM, typically by October 29)</li>
<li><strong>MGT-7</strong> — Annual return (within 60 days of AGM, typically by November 29)</li>
<li><strong>DIR-3 KYC</strong> — Annual KYC for all directors (by September 30 each year)</li>
<li><strong>ADT-1</strong> — Appointment of statutory auditor (within 15 days of AGM)</li>
</ul>

<p>Missing AOC-4 or MGT-7 attracts a penalty of ₹100 per day per form, with no cap. For startups that haven't filed for 2–3 years, accumulated penalties can cross ₹10–15 lakh before they realise it.</p>

<h2>2. GST Compliance</h2>

<p>If your turnover exceeds ₹40 lakh (₹20 lakh for services), GST registration is mandatory. Once registered, you must file:</p>

<ul>
<li><strong>GSTR-1</strong> — Monthly (11th of next month) or quarterly outward supply return</li>
<li><strong>GSTR-3B</strong> — Monthly summary return with tax payment (20th of next month)</li>
<li><strong>GSTR-9</strong> — Annual return (December 31 each year)</li>
</ul>

<p>Startups on the QRMP scheme file GSTR-1 quarterly but must pay tax monthly via PMT-06. Input tax credit (ITC) mismatches between your GSTR-2B and books are a common audit trigger — reconcile monthly, not annually.</p>

<h2>3. Income Tax & Advance Tax</h2>

<p>Startups must pay advance tax if their estimated tax liability for the year exceeds ₹10,000:</p>

<ul>
<li>15% by June 15</li>
<li>45% by September 15</li>
<li>75% by December 15</li>
<li>100% by March 15</li>
</ul>

<p>DPIIT-recognised startups can claim a 100% tax deduction on profits under Section 80-IAC for any 3 consecutive years within the first 10 years of incorporation — but only if an Inter-Ministerial Board (IMB) certificate is obtained. Missing the ITR deadline disqualifies you from certain deductions.</p>

<h2>4. TDS (Tax Deducted at Source)</h2>

<p>If your startup pays salary, rent, contractor fees, or professional charges, you must deduct TDS and deposit it by the 7th of the following month. Quarterly TDS returns (Form 26Q, 24Q) are due within 31 days of quarter end. Errors in TDS — wrong PAN, wrong section, short deduction — result in notices and interest under Section 201.</p>

<h2>5. FEMA & Foreign Investment Reporting</h2>

<p>If you've raised angel or VC funding from foreign investors, FEMA reporting is non-negotiable:</p>

<ul>
<li><strong>FC-GPR</strong> — Filed within 30 days of allotment of shares to a foreign investor</li>
<li><strong>Annual Return on Foreign Liabilities and Assets (FLA)</strong> — Filed by July 15 each year if you have foreign investment on your balance sheet</li>
<li><strong>FC-TRS</strong> — Required when shares transfer between a resident and non-resident</li>
</ul>

<p>Late FC-GPR filing attracts compounding penalties from RBI, which can run to 3× the amount of foreign investment received. Many startups discover this gap during Series A due diligence — an expensive surprise.</p>

<h2>6. ESOP Compliance</h2>

<p>Startups issuing ESOPs under a registered scheme must file a return with the RoC (PAS-3) when options are exercised and shares are allotted. TDS applies at exercise (perquisite income) and at sale (capital gains), with different rates depending on whether the startup has DPIIT recognition.</p>

<h2>Common Mistakes to Avoid</h2>

<ul>
<li>Not appointing a statutory auditor within 30 days of incorporation</li>
<li>Skipping GST registration because "revenue is low" — registration is mandatory above threshold regardless of profitability</li>
<li>Not filing nil returns — even months with zero activity require a GSTR-3B filing</li>
<li>Missing FLA return — routinely forgotten by early-stage startups with foreign seed investment</li>
<li>Not maintaining a statutory register of members, directors, and charges</li>
</ul>

<p>Building a compliance calendar from day one — and assigning ownership of each deadline — costs far less than the penalties and advisory fees of cleaning up a backlog before fundraising.</p>`,
  },
  {
    title: 'Navigating International Taxation & DTAA',
    slug: 'navigating-international-taxation-dtaa',
    date: 'March 05, 2026',
    category: 'International Tax',
    metaDescription: 'How to use India\'s DTAA treaties to reduce withholding tax, avoid permanent establishment risk, and repatriate profits without double taxation. Expert CA advisory.',
    keywords: ['DTAA India guide', 'double taxation avoidance India', 'withholding tax DTAA', 'tax residency certificate India', 'PE risk India', 'international tax CA India'],
    content: `<p>Double Taxation Avoidance Agreements (DTAAs) are the foundation of international business planning. India has signed DTAAs with over 90 countries, including the US, UK, UAE, Singapore, Germany, and Australia. For Indian businesses with cross-border operations — and for foreign companies operating in India — understanding these treaties is the difference between paying tax once and paying it twice.</p>

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

<p>When a transaction occurs between related entities in different countries — an Indian subsidiary paying a royalty to its UK parent, or an Indian company providing services to a UAE affiliate — the price must be at arm's length. The Indian Transfer Pricing regulations (Sections 92–92F) require documentation (Master File, Local File, Form 3CEB) for transactions exceeding ₹1 crore. Underpricing or overpricing related party transactions is one of the most common sources of international tax adjustments in India.</p>

<h2>Repatriation of Profits</h2>

<p>Repatriating profits from India requires careful planning around:</p>

<ul>
<li>Dividend distribution (subject to withholding tax, reduced under applicable DTAA)</li>
<li>Buyback of shares (taxed differently post-Finance Act 2024)</li>
<li>Repayment of ECB (External Commercial Borrowings) — subject to RBI end-use restrictions and Form ECB-2 reporting</li>
<li>Royalty or management fee payments — must be at arm's length and supported by agreements</li>
</ul>

<p>FEMA governs the mechanics of repatriation. Any outward remittance of taxable income requires Form 145 (replacing the old Form 15CA) and Form 146 (replacing Form 15CB), effective under the new Income Tax Act 2025 from April 1, 2026.</p>

<h2>Practical Takeaway</h2>

<p>International tax planning is not about minimising taxes at any cost — post-BEPS, aggressive tax positions face both financial penalties and reputational risk. The goal is to structure transactions correctly from the start: proper agreements, correct withholding, on-time forms, and documented substance. Our team handles the full cycle — from treaty analysis and TRC assistance to Form 3CEB filing, APA applications, and representation before the Authority for Advance Rulings.</p>`,
  },
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Agrawal Khandelwal & Associates LLP`,
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

  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
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
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Contact our partners today for a personalized consultation via WhatsApp.</p>
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Consultation</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DPIIT Registration for Startups (2026)',
  description: 'How to get DPIIT recognition for your Indian startup, eligibility criteria, the 80-IAC three-year tax holiday, and what most founders miss about the IMB certification process.',
  keywords: [
    'DPIIT registration India', 'startup India recognition', '80-IAC tax benefit',
    'DPIIT certificate', 'IMB certification India', 'startup tax holiday India',
    'DPIIT eligibility 2026', 'angel tax exemption startup India',
    'how to get DPIIT recognition', '80-IAC startup India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/dpiit-registration-startups-india-80iac' },
  openGraph: {
    title: 'DPIIT Registration for Startups (2026)',
    description: 'DPIIT recognition is not the same as 80-IAC certification. Here is what each requires, what each gives you, and what most founders get wrong about startup tax benefits.',
    url: 'https://agrawalkhandelwal.com/blog/dpiit-registration-startups-india-80iac',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DPIIT Registration for Startups (2026)',
  description: 'DPIIT recognition process, eligibility, 80-IAC tax holiday requirements, and IMB certification — a complete guide for Indian startup founders.',
  datePublished: '2026-07-25',
  dateModified: '2026-07-25',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/dpiit-registration-startups-india-80iac',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between DPIIT recognition and 80-IAC certification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DPIIT recognition is issued by the Department for Promotion of Industry and Internal Trade via the Startup India portal. It unlocks a package of regulatory benefits including labor law self-certification, patent fee rebates, and public procurement preferences, and it is the gateway for applying for other benefits. The 80-IAC tax deduction requires a separate, more rigorous application to the Inter-Ministerial Board (IMB), which independently evaluates whether the startup has a genuine innovation-based business model. Being DPIIT-recognized does not automatically grant 80-IAC status. Founders must apply to IMB after obtaining DPIIT recognition and meet stricter criteria — many DPIIT-recognized startups do not qualify for 80-IAC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the eligibility criteria for DPIIT recognition in India in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To qualify for DPIIT recognition, the entity must be incorporated as a Private Limited Company, Limited Liability Partnership, or Registered Partnership Firm in India; incorporated not more than 10 years ago from the date of incorporation; have an annual turnover not exceeding ₹100 crore in any preceding financial year; and be working towards innovation, improvement, or development of a product, process, or service, or have a scalable business model with high potential for employment generation or wealth creation. Service companies, technology platforms, manufacturing startups, and D2C brands can all qualify — the definition is broad.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Section 80-IAC tax holiday work for startups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Section 80-IAC provides a 100% deduction on profits and gains from an eligible business for 3 consecutive assessment years out of the first 10 years from the year of incorporation. To claim it, the startup must have obtained a certificate from the Inter-Ministerial Board (not just DPIIT recognition), be incorporated on or after April 1, 2016, be incorporated as a Private Limited Company or LLP, and not have been formed by splitting or reconstruction of an existing business. The benefit must be claimed by filing the ITR with the 80-IAC deduction; it does not apply automatically. The startup must remain profitable in the three years it selects — a loss year generates no benefit and that year is still counted toward the 10-year window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is angel tax still applicable to Indian startups receiving investment in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Finance Act 2025 abolished Section 56(2)(viib) of the Income Tax Act entirely, which means the angel tax provision no longer exists for any company, whether DPIIT-recognized or not. Previously, investments received at a premium over fair market value by unlisted companies were treated as income under Section 56(2)(viib). DPIIT-recognized startups had a specific exemption process, but that exemption and the underlying provision are both now removed. Investments received at any valuation by Indian startups from resident or non-resident investors are no longer subject to angel tax under the Income Tax Act.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function DPIITRegistrationBlog() {
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
              <span className="section-badge">Startup Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                DPIIT Registration for Startups: Eligibility, Process &amp; 80-IAC Tax Benefit (2026)
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 25, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>DPIIT recognition is one of the most misunderstood government registrations for Indian startups. Founders pursue it believing it automatically delivers a three-year tax holiday. It does not. The tax holiday — Section 80-IAC — is a separate application to a different body with stricter criteria, and most DPIIT-recognized startups never file for it. This article clarifies what DPIIT recognition actually gives you, what 80-IAC requires, and how to structure the applications in the right order.</p>

                <h2>What is DPIIT Recognition?</h2>
                <p>DPIIT recognition is a certification from the Department for Promotion of Industry and Internal Trade, applied for online at startupindia.gov.in. It is the government&apos;s formal acknowledgment that a company meets the definition of a startup under the Startup India initiative. Recognition unlocks a package of benefits and is the prerequisite for all other startup-specific schemes including 80-IAC and — until its recent abolition — the angel tax exemption.</p>

                <h2>Eligibility Criteria for DPIIT Recognition</h2>
                <p>All four conditions must be met at the time of application:</p>
                <ul>
                  <li><strong>Entity type:</strong> Incorporated as a Private Limited Company (under the Companies Act 2013), Limited Liability Partnership, or Registered Partnership Firm in India. One-Person Companies are not eligible.</li>
                  <li><strong>Age limit:</strong> Not more than <strong>10 years</strong> from the date of incorporation or registration. This is the most commonly missed disqualifier — founders who have been running a business for 10+ years before formalizing it under a new entity often miscount from the wrong date.</li>
                  <li><strong>Revenue cap:</strong> Annual turnover must not have exceeded ₹100 crore in any previous financial year. Once crossed, the company ceases to be a startup and loses recognition benefits going forward.</li>
                  <li><strong>Innovation criterion:</strong> The business must be working towards innovation, improvement, or development of a product, process, or service — or have a scalable business model with high potential for employment generation or wealth creation. This is self-declared in the application; DPIIT does not independently verify it at recognition stage.</li>
                </ul>

                <h2>The Application Process</h2>
                <p>DPIIT recognition is straightforward:</p>
                <ol>
                  <li>Register on startupindia.gov.in as a startup entity</li>
                  <li>Submit the application with the Certificate of Incorporation (or LLP deed), a brief description of the innovative nature of the business (this is the narrative section founders underinvest in), and entity PAN</li>
                  <li>DPIIT reviews and issues the recognition certificate, typically within 2 to 5 working days for complete applications</li>
                  <li>Apply for specific benefits separately as needed: 80-IAC via IMB, labor law compliance self-certification, patent fee rebate, etc.</li>
                </ol>
                <p>The innovation description deserves careful drafting. While DPIIT does not rigorously evaluate it at the recognition stage, this same description influences the Inter-Ministerial Board&apos;s 80-IAC decision — and a vague description submitted in the DPIIT application often causes IMB rejection later.</p>

                <h2>The 80-IAC Tax Holiday: What It Actually Requires</h2>
                <p>Section 80-IAC of the Income Tax Act provides a <strong>100% deduction on profits</strong> from an eligible startup business for 3 consecutive assessment years, chosen out of the first 10 years from the year of incorporation. On a profitable startup earning ₹2 crore a year, this deduction saves approximately ₹52 lakh in corporate tax over three years at the 26% effective rate.</p>
                <p>To claim 80-IAC, the startup must obtain a certificate from the <strong>Inter-Ministerial Board (IMB)</strong> — a separate application from DPIIT recognition. The IMB evaluates:</p>
                <ul>
                  <li><strong>Genuine innovation:</strong> The business model must involve original product or process development, not a replication of an existing business. Me-too apps, franchises, and trading companies rarely qualify.</li>
                  <li><strong>Date of incorporation:</strong> Must be on or after April 1, 2016. Companies incorporated before this date are permanently ineligible regardless of DPIIT recognition status.</li>
                  <li><strong>Entity structure:</strong> Only Private Limited Companies and LLPs are eligible. Registered Partnership Firms, despite qualifying for DPIIT recognition, are excluded from 80-IAC.</li>
                  <li><strong>Not formed by splitting or reconstruction:</strong> A company formed by spinning off or restructuring an existing profitable business does not qualify.</li>
                </ul>
                <p>The IMB application requires detailed documentation of the innovation — pitch decks, product demos, technology architecture descriptions, or proof of unique process. Applications are reviewed by representatives from DPIIT, DSIR (Department of Scientific and Industrial Research), and relevant sectoral ministries. Processing can take 3 to 6 months.</p>

                <h2>Other Benefits of DPIIT Recognition</h2>
                <ul>
                  <li><strong>Labor law self-certification:</strong> DPIIT-recognized startups can self-certify compliance with 6 central labor laws (including the Contract Labour Act and Maternity Benefit Act) and 3 environmental laws for 3 to 5 years, avoiding inspections in that window.</li>
                  <li><strong>Patent fee rebate:</strong> 80% rebate on patent filing fees. For technology startups filing multiple patents, this saves lakhs.</li>
                  <li><strong>Public procurement preference:</strong> Exemption from the prior experience and turnover requirements that typically disqualify startups from government tenders. Startups can bid on central government contracts on equal footing with established vendors.</li>
                  <li><strong>Faster insolvency resolution:</strong> 90-day winding-up process under the Insolvency and Bankruptcy Code, compared to 180+ days for regular companies. Provides a faster exit for startups that do not work out.</li>
                  <li><strong>Angel tax abolished (Finance Act 2025):</strong> Section 56(2)(viib) — which previously taxed investments received at a premium over fair market value as income — was entirely removed by Finance Act 2025. DPIIT-recognized startups previously needed a specific exemption under this provision; that provision and its exemptions no longer exist.</li>
                </ul>

                <h2>The Right Sequencing</h2>
                <p>File DPIIT recognition first — it is fast, free, and the prerequisite for everything else. Once recognition is in hand, evaluate whether 80-IAC is worth pursuing: only relevant if the company expects to be profitable within the first 10 years and has a clearly demonstrable innovation element. File the IMB application as early as possible since processing is slow and you want the certificate in hand before the profitability years begin. Retroactive 80-IAC claims for years already filed are complex and less reliable than prospective ones.</p>
                <p>Our <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory team</Link> handles DPIIT recognition applications, IMB documentation, and the complete tax compliance calendar for DPIIT-recognized startups.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need DPIIT recognition or 80-IAC certification for your startup?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle the DPIIT application, draft the IMB innovation narrative, and manage ongoing compliance for DPIIT-recognized startups.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20DPIIT%20registration." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

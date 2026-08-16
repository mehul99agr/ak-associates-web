import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POEM: When Does a Foreign Company Become an Indian Tax Resident?',
  description: 'Place of Effective Management (POEM) explained: when a UAE or foreign subsidiary is treated as an Indian tax resident, the ABOI test, the Rs 50 crore exemption, and how to avoid triggering it.',
  keywords: [
    'POEM India', 'place of effective management', 'POEM foreign company India',
    'POEM UAE subsidiary', 'active business outside India test', 'POEM Section 6(3)',
    'foreign company Indian tax resident', 'POEM CBDT guidelines',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/poem-place-of-effective-management-india' },
  openGraph: {
    title: 'POEM: When Does a Foreign Company Become an Indian Tax Resident?',
    description: 'When a UAE or foreign subsidiary is treated as an Indian tax resident under POEM, the ABOI test, the Rs 50 crore exemption, and how to avoid triggering it.',
    url: 'https://agrawalkhandelwal.com/blog/poem-place-of-effective-management-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POEM: When Does a Foreign Company Become an Indian Tax Resident?',
    description: 'The ABOI test, the Rs 50 crore exemption, and how to keep a foreign subsidiary from being taxed as Indian.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'POEM: When Does a Foreign Company Become an Indian Tax Resident?',
  description: 'Place of Effective Management explained: when a UAE or foreign subsidiary is treated as an Indian tax resident, the ABOI test, the Rs 50 crore exemption, and how to avoid triggering it.',
  datePublished: '2026-08-08',
  dateModified: '2026-08-08',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/poem-place-of-effective-management-india',
}

const faqs: [string, string][] = [
  [
    'What is POEM in Indian tax law?',
    'POEM, Place of Effective Management, is the test under Section 6(3) of the Income Tax Act used to decide whether a foreign company is treated as an Indian tax resident. If the place where key management and commercial decisions necessary for the conduct of the company\'s business as a whole are, in substance, made is in India, the foreign company is taxed as if it were an Indian company, on its worldwide income.',
  ],
  [
    'Does POEM apply to every small foreign subsidiary?',
    'No. CBDT Circular 8/2017 exempts companies with turnover or gross receipts of Rs 50 crore or less in the financial year from POEM scrutiny altogether. Most early-stage Indian startups\' UAE or Singapore entities fall below this threshold and are not POEM targets in practice, though the exemption should not be treated as a licence to run the entity entirely from India once revenue grows past it.',
  ],
  [
    'What is the Active Business Outside India (ABOI) test?',
    'ABOI is a safe-harbour test under CBDT Circular 6/2017. A foreign company passes it if less than 50% of its total income is passive income, less than 50% of its assets are in India, less than 50% of its employees are based in India or are Indian residents, and less than 50% of its payroll expense relates to such employees. If a company passes ABOI, its POEM is presumed to be outside India provided a majority of board meetings are also held outside India, unless facts show the board is a rubber stamp for decisions actually made elsewhere.',
  ],
  [
    'What happens if my UAE company is found to have Indian POEM?',
    'The foreign company is taxed as an Indian resident company on its worldwide income, becomes subject to Indian transfer pricing rules on transactions with related parties, and loses the UAE\'s favourable tax treatment for that income from India\'s perspective. Section 115JH provides specific transition rules for foreign companies found resident in India for the first time, covering computation of income, depreciation, and set-off of losses, but the core consequence, full Indian taxation, still applies.',
  ],
  [
    'Can board meetings held in Dubai protect against a POEM finding?',
    'Holding board meetings in Dubai helps but does not automatically protect the entity if the substance doesn\'t match the form. Tax authorities look past the location of the meeting to where the real decisions are made, if the board is approving decisions already finalised over email or WhatsApp by India-based promoters before the meeting, or if key executives are India-based and directing operations day to day, the meeting location alone will not establish POEM outside India.',
  ],
  [
    'Is POEM the same as Permanent Establishment (PE)?',
    'No, they are different concepts with different consequences. PE determines whether a foreign company\'s business profits from India-linked activity are taxable in India, while the company itself remains a foreign tax resident. POEM determines whether the foreign company itself becomes an Indian tax resident, exposing its entire worldwide income to Indian tax, a materially more severe outcome. A structure can have PE exposure, POEM exposure, or both, and each needs a separate analysis.',
  ],
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function POEMBlog() {
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
              <span className="section-badge">International Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                POEM: When Does a Foreign Company Become an Indian Tax Resident?
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 8, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal, UAE Corporate Tax Advisor</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>POEM (Place of Effective Management) can make a UAE or other foreign company taxable in India as if it were an Indian company, on its worldwide income.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It applies only above Rs 50 crore turnover, most small startup SPVs are exempt by CBDT Circular 8/2017.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The Active Business Outside India (ABOI) test gives a safe harbour if the entity has genuine operations, assets, and staff outside India.</li>
                    <li style={{ marginBottom: 0 }}>The real risk is India-based promoters making all key decisions by email or WhatsApp before a rubber-stamp board meeting abroad.</li>
                  </ul>
                </div>

                <p>Almost every Indian promoter who sets up a UAE holding or operating entity asks a version of the same question sooner or later: can the Indian tax department treat my Dubai company as if it were an Indian company? The answer turns on a single, deceptively simple test called Place of Effective Management, POEM. Here is how it actually works, who it applies to, and what genuinely protects a structure from it.</p>

                <h2>What POEM Determines</h2>
                <p>Under Section 6(3) of the Income Tax Act, a company incorporated outside India is treated as a <strong>resident of India</strong> for tax purposes if its Place of Effective Management in that year is in India. POEM is defined as the place where key management and commercial decisions necessary for the conduct of the business of the company as a whole are, in substance, made. This is a substance test, not a formalities test, the location of the registered office, the jurisdiction of incorporation, and even where board meetings are technically held do not settle the question on their own.</p>
                <p>If a foreign company is found to have Indian POEM, it stops being taxed only on its India-linked income and starts being taxed in India on its <strong>entire worldwide income</strong>, exactly like a domestic Indian company. This is a materially more severe outcome than Permanent Establishment (PE) exposure, where only India-linked profits are pulled into the Indian tax net while the foreign company itself remains a foreign tax resident.</p>

                <h2>The Rs 50 Crore Exemption</h2>
                <p>CBDT Circular 8/2017 provides real relief for smaller structures: POEM provisions do not apply to a foreign company with turnover or gross receipts of <strong>Rs 50 crore or less</strong> in the relevant financial year. Most early-stage Indian startups' UAE free zone entities, holding companies, or export SPVs fall comfortably below this threshold and are simply not POEM targets in practice. This exemption is a genuine planning point, but it is a threshold, not a permanent shield, once the foreign entity's revenue grows past Rs 50 crore, the full POEM analysis becomes live, and by then the operating habits of the business (who actually makes decisions, and from where) are usually already set. It's worth building the right decision-making discipline early rather than retrofitting it after the exemption stops applying.</p>

                <h2>The Two-Stage POEM Test</h2>
                <p>CBDT Circular 6/2017 sets out the operative guidance, applied in two stages once a company is above the Rs 50 crore threshold.</p>
                <h3>Stage 1: Active Business Outside India (ABOI) Test</h3>
                <p>A foreign company qualifies for the ABOI safe harbour if <strong>all</strong> of the following hold, based on a three-year average:</p>
                <ul>
                  <li>Less than 50% of total income is <strong>passive income</strong> (dividends, interest, royalty, rental, or capital gains, other than income from genuine business activity)</li>
                  <li>Less than 50% of assets are located in India</li>
                  <li>Less than 50% of employees are based in India, or are Indian residents</li>
                  <li>Less than 50% of payroll expense is paid to such India-based or India-resident employees</li>
                </ul>
                <p>If the company passes ABOI, its POEM is <strong>presumed</strong> to be outside India, provided a majority of board meetings are also held outside India. This presumption can still be rebutted if the facts show the board is not where decisions are actually made.</p>
                <h3>Stage 2: Identifying Who Really Decides, and From Where</h3>
                <p>For companies that fail the ABOI test, or where the board-meeting presumption is challenged, the analysis moves to substance: identifying the persons who actually make the company's key management and commercial decisions, and then determining where those decisions are, in substance, made. This looks past formal board minutes to emails, instructions, approvals, and the practical pattern of who directs the business day to day.</p>

                <h2>How Indian Promoters Actually Trigger POEM</h2>
                <p>In our advisory work, Indian POEM findings almost never come from a badly drafted board resolution. They come from a consistent pattern of substance not matching form:</p>
                <ul>
                  <li>Strategic and commercial decisions are effectively finalised by India-based promoters over email, WhatsApp, or phone before the "board meeting" abroad, which becomes a formality that ratifies decisions already made.</li>
                  <li>The CEO, CFO, or other key executives are India-based and direct day-to-day operations from India, even if the entity's registered office and bank accounts are in the UAE.</li>
                  <li>Local directors in the UAE entity are nominal, holding no real authority and deferring entirely to instructions from India.</li>
                  <li>The UAE entity has no meaningful local operations, staff, or decision-making infrastructure of its own, consistent with it failing the ABOI test outright.</li>
                </ul>
                <p>This is the same substance gap we cover in our broader piece on <Link href="/blog/uae-entity-setup-when-it-makes-sense" style={{ color: 'var(--primary)', fontWeight: 600 }}>when a UAE entity setup actually makes sense</Link>, POEM risk and genuine commercial substance are two sides of the same coin.</p>

                <h2>What Genuinely Protects a Structure</h2>
                <ul>
                  <li><strong>Real local decision-making authority</strong>, board members (ideally including UAE-based or independent directors) who actually deliberate and can, and do, override or amend proposals, not just approve them.</li>
                  <li><strong>Documented board process</strong>, agendas circulated in advance, substantive minutes reflecting genuine discussion, and decisions dated to the meeting itself rather than pre-agreed offline.</li>
                  <li><strong>Local operational substance</strong>, staff, office space, and business activity in the UAE that is proportionate to the entity's stated purpose, not a shell with a flexi-desk and no headcount.</li>
                  <li><strong>Clean separation of authority</strong>, India-based promoters can hold strategic input and shareholder-level rights without those rights collapsing into day-to-day management control exercised from India.</li>
                  <li><strong>Periodic POEM risk review</strong> as revenue grows toward the Rs 50 crore exemption threshold, rather than a one-time setup check.</li>
                </ul>

                <h2>Consequences If POEM Is Found</h2>
                <p>If a foreign company is determined to have Indian POEM, Section 115JH provides transitional computation rules for the first year of Indian residency, covering how income is computed, how depreciation and unabsorbed losses carry forward, and MAT applicability. But the underlying consequence remains significant: worldwide income taxed in India, full Indian transfer pricing compliance on related-party transactions, and loss of the UAE tax treatment for that income from an Indian tax perspective. It also invites scrutiny of past years' filings and can complicate DTAA benefit claims, since a dual-resident company faces its own tie-breaker analysis under the applicable treaty.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Worried your UAE entity could have Indian POEM exposure?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>CA Mehul Agrawal is UAE Corporate Tax certified. We review board process, substance, and decision-making structure to assess and mitigate POEM risk.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/uae-tax-advisory" className="btn btn-outline">UAE Tax Advisory</Link>
                  <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing</Link>
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

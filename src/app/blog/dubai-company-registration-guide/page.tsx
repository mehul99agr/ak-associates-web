import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Company Registration Guide (2026)',
  description: 'Dubai company registration guide for Indian entrepreneurs: Mainland vs Free Zone vs Offshore, costs, FEMA compliance, UAE Corporate Tax, and required documents.',
  keywords: [
    'Dubai company registration India',
    'UAE company formation Indian entrepreneurs',
    'Dubai free zone company India',
    'UAE mainland company registration',
    'FEMA compliance UAE entity',
    'Dubai company registration cost India',
    'UAE corporate tax Indian business',
    'Dubai company setup process',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/dubai-company-registration-guide' },
  openGraph: {
    title: 'Dubai Company Registration Guide (2026)',
    description: 'Mainland vs Free Zone vs Offshore, real costs, FEMA obligations, and UAE Corporate Tax — everything an Indian entrepreneur needs before registering a Dubai company.',
    url: 'https://agrawalkhandelwal.com/blog/dubai-company-registration-guide',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dubai Company Registration Guide (2026)',
  description: 'Step-by-step guide to Dubai company registration for Indian entrepreneurs: Mainland vs Free Zone vs Offshore, costs, FEMA compliance, and UAE Corporate Tax.',
  datePublished: '2026-05-19',
  dateModified: '2026-05-19',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/dubai-company-registration-guide',
}

const faqs: [string, string][] = [
  ['Can an Indian resident own 100% of a Dubai company?', 'Yes. Both mainland (for most activities) and all free zone entities allow 100% foreign ownership. The old requirement for a 51% UAE national sponsor was removed by the 2021 Commercial Companies Law amendment for most sectors.'],
  ['How long does registration take?', 'Free zone registration typically takes 5-15 business days once all documents are in order. Add 15-20 days for apostilling Indian documents, and 4-8 weeks for bank account opening.'],
  ['Do I need to be physically present in the UAE to register?', 'Not for most free zone registrations - the process can be handled remotely through a registered agent. However, most banks require an in-person visit for account opening.'],
  ['Will I pay tax in both India and the UAE?', 'The India-UAE DTAA prevents double taxation on the same income. However, this requires a valid Tax Residency Certificate from the UAE, proper substance in the UAE entity, and arm\'s-length pricing on any India-UAE transactions. Simply forming a UAE company does not automatically eliminate Indian tax liability.'],
  ['Is a physical office mandatory?', 'Most free zones allow a flexi-desk or virtual office arrangement, which satisfies the licensing requirement at a lower cost than dedicated office space. However, for UAE Corporate Tax purposes, demonstrating genuine substance may require more than a flexi-desk if your entity is in a regulated sector.'],
  ['What is the minimum share capital required?', 'Most free zones have no minimum share capital requirement, or a nominal minimum (AED 1,000-50,000). Mainland companies have activity-specific requirements but most service and trading companies have no substantial capital requirement.'],
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

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2rem',
  fontSize: '0.95rem',
}
const thStyle: React.CSSProperties = {
  background: 'var(--primary)',
  color: '#fff',
  padding: '0.75rem 1rem',
  textAlign: 'left',
  fontWeight: 700,
}
const tdStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderBottom: '1px solid var(--border)',
  color: 'var(--text-main)',
  verticalAlign: 'top',
}
const tdAltStyle: React.CSSProperties = {
  ...tdStyle,
  background: 'var(--bg-surface)',
}

export default function DubaiCompanyRegistrationBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '100px' }}>
        <div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 700, display: 'inline-block', marginBottom: '2rem' }}>
            &larr; Back to Insights
          </Link>

          <article className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem' }}>
            <div style={{ marginBottom: '3rem' }}>
              <span className="section-badge" style={{ background: 'var(--primary)', color: 'white' }}>International Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)', lineHeight: 1.25 }}>
                Dubai Company Registration: Complete Guide for Indian Entrepreneurs (2026)
              </h1>
              <p style={{ color: 'var(--text-light)', fontWeight: 600 }}>Published on May 19, 2026 &bull; By Mehul Agrawal, UAE Corporate Tax Advisor</p>
            </div>

            <div style={{ color: 'var(--text-main)', lineHeight: '1.85', fontSize: '1.05rem' }}>

              <p style={{ marginBottom: '1.5rem' }}>
                Dubai consistently ranks among the top five destinations where Indian entrepreneurs register companies. The reasons are real: a 9% corporate tax rate (compared to 25-30% in India), no personal income tax, a central time zone that spans both India and Europe, and one of the world&apos;s most efficient company registration systems.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                But the process has several moving parts — choosing between Mainland, Free Zone, and Offshore structures; satisfying India&apos;s FEMA requirements; understanding the new UAE Corporate Tax; and setting up banking. This guide covers the full picture, with real costs in both AED and INR.
              </p>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Types of Dubai Company Structures</h2>
              <p style={{ marginBottom: '1.25rem' }}>There are three main structures available to Indian entrepreneurs. The right choice depends on your business activity, whether you need local UAE market access, and your tax planning goals.</p>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Structure</th>
                      <th style={thStyle}>Best For</th>
                      <th style={thStyle}>Local Market Access</th>
                      <th style={thStyle}>Foreign Ownership</th>
                      <th style={thStyle}>Setup Cost (AED)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>Mainland</strong></td>
                      <td style={tdStyle}>Trading, retail, contracting, govt. contracts</td>
                      <td style={tdStyle}>Unrestricted</td>
                      <td style={tdStyle}>100% (post-2021 reform)</td>
                      <td style={tdStyle}>15,000 - 50,000+</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}><strong>Free Zone</strong></td>
                      <td style={tdAltStyle}>Export, consulting, tech, professional services</td>
                      <td style={tdAltStyle}>Via local distributor only</td>
                      <td style={tdAltStyle}>100%</td>
                      <td style={tdAltStyle}>12,000 - 35,000+</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Offshore</strong></td>
                      <td style={tdStyle}>Holding company, asset protection, international invoicing</td>
                      <td style={tdStyle}>Not permitted</td>
                      <td style={tdStyle}>100%</td>
                      <td style={tdStyle}>8,000 - 15,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Mainland Companies</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Licensed by the Dubai Department of Economy and Tourism (DET), mainland companies can trade directly anywhere in the UAE, bid for government contracts, and operate retail outlets. Since the 2021 Commercial Companies Law amendment, 100% foreign ownership is permitted for most activities - the old 51% local sponsor requirement is largely gone. Mainland is the right choice if your primary market is the UAE itself.
              </p>

              <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Free Zone Companies</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                There are 45+ free zones in Dubai and the wider UAE, each designed for specific industries. Free zone companies enjoy 100% foreign ownership, simplified registration, and in many cases, warehousing and office facilities within the zone itself. The trade-off: direct sale into the UAE mainland market requires a local distributor or a separate mainland entity. For Indian businesses invoicing international clients or running operations from Dubai without needing local UAE customers, a free zone is typically the most cost-effective entry point.
              </p>

              <h3 style={{ color: 'var(--primary)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.25rem' }}>Offshore Companies</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Offshore entities (registered in JAFZA Offshore, RAK ICC, or Ajman Offshore) are holding vehicles. They cannot employ staff, lease office space, or do business within the UAE. They are used for holding shares in other companies, owning international IP, or structuring cross-border investments. For Indian entrepreneurs, offshore entities require particularly careful FEMA structuring - these must not be confused with tax evasion vehicles, which they are not designed for and which Indian law specifically targets.
              </p>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Popular Free Zones for Indian Entrepreneurs</h2>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Free Zone</th>
                      <th style={thStyle}>Ideal For</th>
                      <th style={thStyle}>Starting Cost (AED/year)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['DMCC (Dubai Multi Commodities Centre)', 'Trading, commodities, consulting, tech', '15,000+'],
                      ['DIFC (Dubai International Financial Centre)', 'Financial services, fintech, funds', '25,000+'],
                      ['DAFZA (Dubai Airport Free Zone)', 'Logistics, aviation, trading', '20,000+'],
                      ['IFZA (International Free Zone Authority)', 'Consulting, services, e-commerce', '12,000+'],
                      ['Dubai South', 'Logistics, aviation, manufacturing', '15,000+'],
                      ['JAFZA (Jebel Ali Free Zone)', 'Manufacturing, trading, heavy industry', '18,000+'],
                      ['Dubai Internet City / Media City', 'Tech, media, marketing firms', '20,000+'],
                      ['RAK Free Zone', 'Budget-friendly, services and trading', '8,000+'],
                    ].map(([zone, ideal, cost], i) => (
                      <tr key={i}>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}><strong>{zone}</strong></td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{ideal}</td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ marginBottom: '1.5rem' }}>
                DMCC is the most popular choice for Indian trading and consulting businesses. IFZA and RAK Free Zone offer the most cost-efficient entry points for service businesses that primarily invoice outside the UAE.
              </p>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Step-by-Step Registration Process</h2>

              <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                {[
                  ['Choose your business activity', 'Each activity requires a specific license category - trading, professional, industrial, or e-commerce. Your activity determines which free zones or mainland categories are available to you.'],
                  ['Select your structure and jurisdiction', 'Based on whether you need local UAE market access (Mainland), international invoicing simplicity (Free Zone), or a holding vehicle (Offshore).'],
                  ['Reserve your trade name', 'Submitted to the relevant authority (DET for Mainland, the specific Free Zone authority for FZ entities). Takes 1-3 business days.'],
                  ['Apply for initial approval', 'Submit passport copies, business plan, and activity description. Approval typically takes 3-7 working days.'],
                  ['Prepare and attest incorporation documents', 'Memorandum of Association, shareholder resolution, and supporting KYC documents. Documents executed in India must be notarised and apostilled.'],
                  ['Lease office or flexi-desk space', 'A physical or virtual address is mandatory for license issuance. Flexi-desk packages (shared workspace) are the most cost-effective option for new entities.'],
                  ['Obtain trade license', 'The license is the legal permission to operate. Issued within 5-10 working days of document submission.'],
                  ['Register for UAE Corporate Tax', 'Mandatory for all entities. Registration deadline for entities incorporated before March 2024 is September 30, 2025. New entities must register within 3 months of incorporation.'],
                  ['Open corporate bank account', 'The most time-consuming step in practice. UAE banks require extensive KYC, business plans, proof of genuine operations, and often an in-person meeting. Allow 4-8 weeks.'],
                  ['Apply for investor visa', 'A UAE trade license entitles the owner to an investor/partner visa, valid for 2-3 years. Required if you intend to reside in the UAE.'],
                ].map(([title, desc], i) => (
                  <li key={i} style={{ marginBottom: '1rem' }}>
                    <strong>{title}</strong> - {desc}
                  </li>
                ))}
              </ol>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Cost Breakdown (2026)</h2>
              <p style={{ marginBottom: '1.25rem' }}>Costs vary significantly by structure and free zone. The table below reflects realistic ranges for a single-activity entity with a flexi-desk arrangement.</p>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Cost Component</th>
                      <th style={thStyle}>Mainland (AED)</th>
                      <th style={thStyle}>Free Zone (AED)</th>
                      <th style={thStyle}>Approx. INR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Trade license fee', '15,000 - 30,000', '12,000 - 20,000', '3.5 - 8.5L'],
                      ['Registration / admin fees', '3,000 - 8,000', '2,000 - 5,000', '0.5 - 2.5L'],
                      ['Office / flexi-desk', '10,000 - 25,000/yr', '6,000 - 15,000/yr', '1.5 - 7L/yr'],
                      ['Document attestation (India)', 'N/A', 'N/A', '15,000 - 40,000'],
                      ['Investor visa (per person)', '4,000 - 6,000', '4,000 - 6,000', '1 - 1.5L'],
                      ['Bank account setup', 'No fee (time cost)', 'No fee (time cost)', '-'],
                      ['Annual license renewal', '12,000 - 25,000', '10,000 - 20,000', '3 - 6L/yr'],
                    ].map(([comp, main, fz, inr], i) => (
                      <tr key={i}>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{comp}</td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{main}</td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{fz}</td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{inr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ marginBottom: '1.5rem' }}>
                Total first-year cost for a typical free zone entity with one visa and flexi-desk: <strong>AED 25,000 - 45,000 (approximately ₹6 - 12 lakhs)</strong>. Mainland entities run higher. Budget separately for professional fees if using a formation agent or CA advisor.
              </p>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Documents Required</h2>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Document</th>
                      <th style={thStyle}>Individual Shareholder</th>
                      <th style={thStyle}>Corporate Shareholder (Indian Co.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Passport copy (all pages)', 'Required', 'Authorised signatory passport'],
                      ['Visa / Emirates ID (if UAE resident)', 'If applicable', 'If applicable'],
                      ['Address proof (utility bill / bank statement)', 'Required', 'Registered office proof'],
                      ['Bank reference letter', 'Required by some banks', 'Required by some banks'],
                      ['Business plan / activity description', 'Required', 'Required'],
                      ['Certificate of Incorporation', 'N/A', 'Required - apostilled'],
                      ['MOA / AOA', 'N/A', 'Required - apostilled'],
                      ['Board resolution authorising UAE setup', 'N/A', 'Required'],
                      ['CA-certified financials (last 2 years)', 'Sometimes required', 'Often required by banks'],
                    ].map(([doc, ind, corp], i) => (
                      <tr key={i}>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}><strong>{doc}</strong></td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{ind}</td>
                        <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{corp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={{ marginBottom: '1.5rem' }}>
                Indian documents submitted to UAE authorities must be notarised by a registered notary in India and apostilled by the Ministry of External Affairs (MEA). This process takes 7-15 business days — factor it into your timeline.
              </p>

              <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', borderLeft: '5px solid var(--accent)', margin: '2.5rem 0' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>FEMA Compliance: The Step Most Formation Agents Skip</h3>
                <p style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>
                  Under India&apos;s Foreign Exchange Management Act, an Indian resident investing in or incorporating an overseas entity must comply with the Overseas Direct Investment (ODI) framework:
                </p>
                <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)' }}>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Form ODI-Part I</strong> must be filed with an Authorised Dealer (AD) bank before remitting funds for the overseas entity.</li>
                  <li style={{ marginBottom: '0.5rem' }}><strong>Annual Performance Report (APR)</strong> must be filed every year by December 31 for entities in which you hold an equity interest.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Investment limit is 400% of your net worth, subject to the Liberalised Remittance Scheme (LRS) cap of USD 250,000 per year for individuals.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Any loan, guarantee, or further investment in the UAE entity must be reported to RBI through your AD bank.</li>
                </ul>
                <p style={{ color: 'var(--text-main)', marginTop: '1rem' }}>
                  Non-compliance with FEMA attracts a penalty of up to 3x the amount involved. Formation agents are not qualified to advise on this - get proper CA / legal counsel before remitting funds.
                </p>
              </div>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>UAE Corporate Tax - What You Need to Know (2026)</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                The UAE introduced a 9% Corporate Tax effective for financial years starting on or after June 1, 2023. Key points for Indian entrepreneurs:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>0% on the first AED 375,000</strong> of taxable income - effectively a small business concession.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>9% on income above AED 375,000</strong> - still significantly lower than India&apos;s 25-30% corporate tax rates.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Free zone entities can still qualify for 0% tax</strong> on qualifying income, provided they maintain adequate substance and do not earn &quot;non-qualifying income.&quot; The definition of qualifying income is specific and must be assessed activity-by-activity.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Transfer pricing rules apply</strong> to transactions between related parties - cross-border transactions with your Indian entity must be at arm&apos;s length and documented.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Registration is mandatory</strong> for all UAE entities, even those with nil tax liability. Failure to register attracts penalties.</li>
              </ul>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Post-Registration Compliance Obligations</h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Annual trade license renewal</strong> - due before the license expiry date each year.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Corporate Tax return filing</strong> - due 9 months after financial year end.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>VAT registration and filing</strong> - mandatory if annual taxable turnover exceeds AED 375,000. Quarterly or monthly returns.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Ultimate Beneficial Owner (UBO) register</strong> - all UAE entities must maintain a UBO register and file it with the relevant authority.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Economic Substance Regulations (ESR)</strong> - entities in certain sectors (banking, insurance, IP holding, headquarters, distribution) must demonstrate genuine economic activity in the UAE. Notification and reporting deadlines apply annually.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Audited financials</strong> - required for Corporate Tax filing and increasingly required by banks. Most free zones mandate annual audits.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>India APR filing</strong> - annual performance report due by December 31 each year under FEMA.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Visa renewals</strong> - investor and employee visas are typically valid for 2-3 years and must be renewed before expiry.</li>
              </ul>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Common Mistakes Indian Entrepreneurs Make</h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}>Remitting money to the UAE before filing Form ODI with their Indian bank - a direct FEMA violation.</li>
                <li style={{ marginBottom: '0.75rem' }}>Choosing a free zone based on cost alone without checking whether their specific activity qualifies for 0% UAE Corporate Tax treatment.</li>
                <li style={{ marginBottom: '0.75rem' }}>Not maintaining proper books and audited accounts - critical for both UAE Corporate Tax compliance and for India&apos;s DTAA benefit claims.</li>
                <li style={{ marginBottom: '0.75rem' }}>Routing Indian-source revenue through the UAE entity without genuine substance - triggers India&apos;s <Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>POEM (Place of Effective Management)</Link> and GAAR provisions.</li>
                <li style={{ marginBottom: '0.75rem' }}>Missing the UAE Corporate Tax registration deadline - penalties start at AED 10,000.</li>
                <li style={{ marginBottom: '0.75rem' }}>Opening a UAE bank account in the company name but operating it like a personal account - creates AML red flags and risks account freezing.</li>
              </ul>

              <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.6rem' }}>Frequently Asked Questions</h2>

              {faqs.map(([q, a], i) => (
                <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{q}</h3>
                  <p style={{ color: 'var(--text-main)' }}>{a}</p>
                </div>
              ))}

            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/uae-entity-setup-when-it-makes-sense" style={{ color: 'var(--primary)', fontWeight: 600 }}>UAE Entity Setup: When It Makes Sense</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/uae-corporate-tax-indian-impact" style={{ color: 'var(--primary)', fontWeight: 600 }}>UAE Corporate Tax: Impact on India</Link></li>
              </ul>
            </div>

            <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '0.75rem', color: 'var(--text-main)' }}>Planning a Dubai company? Start with the FEMA and tax structure first.</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', maxWidth: '550px', margin: '0.75rem auto 2rem' }}>
                CA Mehul Agrawal is UAE Corporate Tax certified. We advise Indian entrepreneurs on the full India-UAE cross-border structure - from FEMA compliance and ODI filing to UAE CT registration and DTAA planning.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book a UAE Advisory Call
                </a>
                <Link href="/uae-tax-advisory" className="btn btn-outline">UAE Tax Advisory</Link>
                <Link href="/company-incorporation" className="btn btn-outline">Company Incorporation India</Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

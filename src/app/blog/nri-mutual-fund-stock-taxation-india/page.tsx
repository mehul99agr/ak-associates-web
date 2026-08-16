import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Mutual Fund & Stock Taxation in India (FY 2026-27)',
  description: 'How mutual funds, stocks, and capital gains are taxed for NRIs in India: LTCG/STCG rates post-Budget 2025, TDS on redemption, PIS account for direct equity, and FATCA restrictions for US/Canada NRIs.',
  keywords: [
    'NRI mutual fund tax India', 'NRI stock trading India', 'NRI capital gains tax India',
    'NRI LTCG STCG India', 'NRI TDS mutual fund', 'NRI PIS account',
    'NRI investment India tax', 'NRI equity taxation', 'FATCA NRI mutual fund',
    'NRI capital gains FY 2026-27',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-mutual-fund-stock-taxation-india' },
  openGraph: {
    title: 'NRI Mutual Fund & Stock Taxation in India (FY 2026-27)',
    description: 'LTCG/STCG rates, TDS on redemption, PIS account, and FATCA restrictions for NRI investors.',
    url: 'https://agrawalkhandelwal.com/blog/nri-mutual-fund-stock-taxation-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Mutual Fund & Stock Tax India (FY 2026-27)',
    description: 'Capital gains rates, TDS, PIS account, and US/Canada FATCA restrictions for NRI investors.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NRI Mutual Fund & Stock Taxation in India (FY 2026-27)',
  description: 'How mutual funds, stocks, and capital gains are taxed for NRIs: rates, TDS, PIS, FATCA.',
  datePublished: '2026-07-16',
  dateModified: '2026-07-16',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-mutual-fund-stock-taxation-india',
}

const faqs: [string, string][] = [
  ['Can NRIs invest in Indian mutual funds?', 'Yes. NRIs can invest in most Indian mutual funds, though some fund houses restrict investments from NRIs based in the US or Canada due to FATCA and CRS compliance costs. NRIs must invest through their NRE or NRO account and complete KYC with FATCA self-declaration. Investments from NRE accounts are fully repatriable; from NRO accounts, repatriation is subject to the USD 1 million annual limit.'],
  ['What is the TDS rate on mutual fund redemption for NRIs?', 'TDS on mutual fund capital gains for NRIs is: 12.5% on LTCG from equity funds (above Rs 1.25 lakh exemption), 20% on LTCG from debt funds, and 20% on STCG from equity funds. For STCG on debt funds, TDS is at the applicable slab rate (usually 30% for NRIs). Surcharge and 4% cess are added. TDS is deducted by the AMC at the time of redemption.'],
  ['Can NRIs trade stocks directly on Indian exchanges?', 'Yes, but only through a Portfolio Investment Scheme (PIS) account approved by RBI. The NRI must open a PIS-designated demat and trading account with a SEBI-registered broker linked to their NRE or NRO bank account. PIS has position limits: NRIs cannot hold more than 5% of a company\'s paid-up capital individually, and total NRI/FPI holding cannot exceed the sectoral FDI cap.'],
  ['Are US/Canada NRIs restricted from Indian mutual funds?', 'Many Indian AMCs do not accept investments from US and Canada-based NRIs due to the compliance burden of FATCA (Foreign Account Tax Compliance Act) and CRS reporting. However, some major fund houses like UTI, SBI, and a few others do accept US/Canada NRI investments. Check with the specific AMC before attempting to invest.'],
  ['How does an NRI claim TDS refund on mutual fund gains?', 'If the TDS deducted exceeds the actual tax liability (common when actual gains are lower than the gross redemption amount on which TDS was computed), the NRI can claim a refund by filing an Indian ITR for the year. The ITR reports the actual capital gains computation and claims credit for TDS. Alternatively, the NRI can apply for a Form 13 lower deduction certificate to reduce TDS at source.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function NRIMutualFundStockTaxBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI Mutual Fund &amp; Stock Taxation in India: What You Actually Owe</h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 16, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>
              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>NRIs pay the same capital gains tax rates as residents, but TDS is deducted at source by the AMC/broker (residents get threshold exemptions before TDS).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Equity LTCG: 12.5% (above Rs 1.25 lakh). Equity STCG: 20%. Debt LTCG: 12.5%. Debt STCG: slab rate (typically 30%).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Direct stock trading requires a PIS (Portfolio Investment Scheme) account from RBI. Mutual funds do not need PIS.</li>
                    <li style={{ marginBottom: 0 }}>US and Canada NRIs face FATCA restrictions - many AMCs refuse their investments. A handful still accept.</li>
                  </ul>
                </div>

                <p>NRIs can invest in Indian mutual funds and stocks, and many do. The tax treatment is broadly the same as for residents, but the compliance wrapper is different: TDS is deducted at source on every redemption (no threshold exemption), a PIS account is needed for direct equity, and FATCA compliance blocks some NRIs entirely. Here is how it works.</p>

                <h2>Capital Gains Tax Rates for NRIs (FY 2026-27)</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Investment Type</th><th style={thStyle}>Holding Period for LTCG</th><th style={thStyle}>LTCG Rate</th><th style={thStyle}>STCG Rate</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}><strong>Equity mutual funds</strong> (equity &ge;65%)</td><td style={tdStyle}>Over 12 months</td><td style={tdStyle}>12.5% (above Rs 1.25L exemption)</td><td style={tdStyle}>20%</td></tr>
                      <tr><td style={tdAltStyle}><strong>Debt mutual funds</strong></td><td style={tdAltStyle}>Over 24 months</td><td style={tdAltStyle}>12.5%</td><td style={tdAltStyle}>Slab rate (30% for most NRIs)</td></tr>
                      <tr><td style={tdStyle}><strong>Listed stocks</strong> (equity)</td><td style={tdStyle}>Over 12 months</td><td style={tdStyle}>12.5% (above Rs 1.25L exemption)</td><td style={tdStyle}>20%</td></tr>
                      <tr><td style={tdAltStyle}><strong>Unlisted shares</strong></td><td style={tdAltStyle}>Over 24 months</td><td style={tdAltStyle}>12.5%</td><td style={tdAltStyle}>Slab rate</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Surcharge (based on total income slabs) and 4% health and education cess are added on top. These rates reflect the changes from Finance Act 2024 (effective July 23, 2024).</p>

                <h2>TDS: The Key Difference for NRIs</h2>
                <p>For resident investors, mutual fund houses do not deduct TDS on equity fund redemptions (they deduct only on debt fund gains above Rs 10,000 in some cases). For NRIs, <strong>TDS is deducted on every redemption</strong>, regardless of the gain amount:</p>
                <ul>
                  <li><strong>Equity fund LTCG:</strong> 12.5% TDS (on gains above Rs 1.25 lakh)</li>
                  <li><strong>Equity fund STCG:</strong> 20% TDS</li>
                  <li><strong>Debt fund LTCG:</strong> 12.5% TDS</li>
                  <li><strong>Debt fund STCG:</strong> 30% TDS (or applicable slab rate)</li>
                </ul>
                <p>The TDS is computed on the <strong>capital gain</strong>, not the redemption amount. If TDS exceeds your actual liability (e.g., you have losses to set off, or your total income falls in a lower slab), you can <Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>claim a refund by filing an ITR</Link>. Alternatively, apply for a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> before a large redemption.</p>

                <h2>Mutual Fund Investment: NRE vs NRO Route</h2>
                <ul>
                  <li><strong>NRE route:</strong> Investment from an <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE account</Link>. Proceeds on redemption are fully repatriable to the NRI&apos;s foreign account without any limit. This is the preferred route for most NRIs.</li>
                  <li><strong>NRO route:</strong> Investment from an NRO account. Redemption proceeds go back to the NRO account and are subject to the <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>USD 1 million annual repatriation limit</Link> with <Link href="/blog/form-15ca-15cb-nri-remittance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 145/146</Link> compliance.</li>
                </ul>

                <h2>Direct Stock Trading: The PIS Requirement</h2>
                <p>NRIs who want to buy and sell stocks directly on Indian exchanges (BSE/NSE) must open a <strong>Portfolio Investment Scheme (PIS)</strong> account. This involves:</p>
                <ol>
                  <li>Applying to a designated AD (Authorised Dealer) bank for PIS approval under RBI regulations.</li>
                  <li>Opening a PIS-designated demat account and trading account with a SEBI-registered broker.</li>
                  <li>Linking the trading account to an NRE or NRO bank account for settlement.</li>
                </ol>
                <p><strong>Position limits apply:</strong> An individual NRI cannot hold more than 5% of a company&apos;s paid-up share capital. The aggregate NRI/FPI holding in any company cannot exceed the sectoral FDI cap (typically 24%, extendable to the FDI limit by board resolution).</p>
                <p>Mutual fund investments do <strong>not</strong> require PIS. NRIs can invest in mutual funds directly through an AMC or platform, completing KYC with FATCA self-declaration.</p>

                <h2>FATCA Restrictions: US and Canada NRIs</h2>
                <p>The Foreign Account Tax Compliance Act (FATCA) requires foreign financial institutions to report accounts held by US persons. Many Indian AMCs find the compliance burden prohibitive and simply refuse investments from NRIs based in the US or Canada. As of 2026, the AMCs that generally <strong>do</strong> accept US/Canada NRI investments include UTI Mutual Fund, SBI Mutual Fund, and a few others, though policies change and should be verified directly.</p>
                <p>For direct equity trading via PIS, the FATCA restriction is less of an issue since the reporting is handled by the broker and depository.</p>

                <h2>DTAA and Double Taxation on Indian Investments</h2>
                <p>Capital gains on Indian securities are taxable in India regardless of DTAA provisions (most treaties give India the right to tax gains on shares). However, the NRI can claim credit for Indian taxes paid when filing their return in their country of residence. For US NRIs, Indian mutual fund gains are reported on Form 1040 with foreign tax credit claimed on Form 1116.</p>

                <h2>Practical Considerations</h2>
                <ul>
                  <li><strong>SIPs from NRE:</strong> Systematic Investment Plans can be set up from NRE accounts for full repatriability.</li>
                  <li><strong>Switching between funds:</strong> A switch (from one scheme to another within the same AMC) is treated as a redemption and fresh purchase. TDS applies on the redemption leg.</li>
                  <li><strong>Dividend income:</strong> Dividends from Indian mutual funds and stocks are taxable at 20% TDS for NRIs (Section 196A for mutual fund dividends, Section 196D for FPI dividends).</li>
                  <li><strong>STT:</strong> Securities Transaction Tax is levied on equity transactions regardless of NRI status and is not adjustable against income tax.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with NRI investment taxation?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We advise NRIs on mutual fund and stock taxation, TDS refund claims, PIS compliance, and DTAA credit optimisation.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>Capital Gains on Inherited or Gifted Property</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13: Lower TDS Certificate</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

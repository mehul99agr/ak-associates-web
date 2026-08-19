import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Convertible Notes vs Equity: FEMA Rules',
  description: 'When a convertible note makes sense vs CCPS or straight equity for an Indian startup: FEMA conditions for foreign convertible notes, why optional conversion means debt treatment, and a decision framework.',
  keywords: [
    'convertible notes India startup', 'convertible note FEMA', 'CCPS vs convertible note',
    'FEMA convertible instrument startup', 'compulsorily convertible preference shares India',
    'FC-GPR convertible note', 'foreign investment startup instrument',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/convertible-notes-vs-equity-fema-startups' },
  openGraph: {
    title: 'Convertible Notes vs Equity: FEMA Rules',
    description: 'FEMA conditions for convertible notes, CCPS vs equity, and a decision framework for founders.',
    url: 'https://agrawalkhandelwal.com/blog/convertible-notes-vs-equity-fema-startups',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convertible Notes vs Equity: FEMA Rules for Startups',
    description: 'When a convertible note, CCPS, or straight equity is the right instrument.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Convertible Notes vs Equity: FEMA Rules', item: 'https://agrawalkhandelwal.com/blog/convertible-notes-vs-equity-fema-startups' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Convertible Notes vs Equity: FEMA Rules',
  description: 'When a convertible note makes sense vs CCPS or straight equity for an Indian startup raising foreign or domestic capital, and the FEMA conditions that apply.',
  datePublished: '2026-07-27', dateModified: '2026-07-27',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/convertible-notes-vs-equity-fema-startups',
}

const faqs: [string, string][] = [
  ['Can any Indian private limited company issue convertible notes to foreign investors?', 'No. The company generally needs to be a DPIIT-recognised startup and must satisfy the applicable FEMA conditions on minimum investment and conversion timelines. Confirm current thresholds with your advisor before structuring the round, since these are periodically revised.'],
  ['What is better for a Series A round, CCPS or convertible notes?', 'CCPS is often better where investors want detailed rights and valuation is agreed at closing. Convertible notes are more useful when a priced round is expected soon but the parties want to defer the valuation conversation until then.'],
  ['Are optionally convertible preference shares treated as equity under FEMA?', 'Not necessarily. Only fully and compulsorily convertible instruments are generally treated as equity instruments under FEMA. Optional conversion or redemption features can result in debt treatment and more restrictive, ECB-like conditions.'],
  ['When is FC-GPR filed for foreign investment in startup shares?', 'FC-GPR is filed within 30 days of allotment of capital instruments to a non-resident. Plan the valuation, remittance evidence, allotment approvals, and reporting into the closing checklist before the transaction, not after.'],
  ['Can a foreign investor receive a discount on conversion of a convertible note?', 'A conversion formula with a discount or valuation cap can be commercially negotiated, but it must also comply with FEMA pricing rules at the time of conversion. Obtain transaction-specific advice before finalising the discount mechanism.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function ConvertibleNotesBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Convertible Notes vs Equity for Indian Startups: FEMA Rules and Funding Choices</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 27, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Convertible notes defer pricing, but foreign investment through notes is available only to <strong>eligible DPIIT-recognised startups</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>CCPS</strong> usually suits institutional rounds needing investor protections and a defined conversion structure.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Straight equity is simplest when valuation is agreed and rights are straightforward.</li>
                  <li style={{ marginBottom: 0 }}>Optional conversion or redemption can trigger <strong>debt treatment</strong> and a materially different FEMA analysis.</li>
                </ul>
              </div>

              <p>A convertible note is an instrument under which an investor initially provides money as debt-like funding, with the amount later converting into equity or being repaid according to agreed terms. For a startup, its commercial attraction is that it can defer the valuation discussion until a later priced funding round - useful when the company is very early, the product is still being validated, or founders and investors agree that a near-term institutional round should set the price. But for Indian startups, the commercial document cannot be separated from FEMA classification - before accepting foreign capital through a convertible note, confirm the company and instrument meet the applicable regulatory conditions.</p>

              <h2>FEMA Conditions for Foreign Convertible Notes</h2>
              <p>A startup issuing convertible notes to a foreign investor must generally be a <strong>DPIIT-recognised startup</strong>, and the instrument must meet a minimum investment amount per note under FEMA. Conversion into equity must occur within a prescribed period (historically understood to be up to 10 years, though this and other conditions should be confirmed as current before structuring a round). The conversion terms, valuation formula, permitted instruments, and reporting must all be reviewed before money is received.</p>
              <p>Do not assume that a note used in another jurisdiction can simply be adapted for India - a US-style SAFE or convertible note can create classification problems if its rights do not fit Indian company law and FEMA requirements.</p>

              <h2>Convertible Note, CCPS, and Equity Compared</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Feature</th><th style={thStyle}>Convertible Note</th><th style={thStyle}>CCPS</th><th style={thStyle}>Straight Equity</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Valuation timing</td><td style={tdStyle}>Usually deferred</td><td style={tdStyle}>Set at investment</td><td style={tdStyle}>Set at investment</td></tr>
                    <tr><td style={tdAltStyle}>Investor protections</td><td style={tdAltStyle}>Can be limited until conversion</td><td style={tdAltStyle}>Usually detailed</td><td style={tdAltStyle}>Usually simpler</td></tr>
                    <tr><td style={tdStyle}>FEMA treatment</td><td style={tdStyle}>Special startup framework required</td><td style={tdStyle}>Equity if compulsorily convertible</td><td style={tdStyle}>Equity instrument</td></tr>
                    <tr><td style={tdAltStyle}>Best fit</td><td style={tdAltStyle}>Very early bridge or pre-priced round</td><td style={tdAltStyle}>Seed to Series A institutional round</td><td style={tdAltStyle}>Simple founder, angel, or strategic round</td></tr>
                    <tr><td style={tdStyle}>Main risk</td><td style={tdStyle}>Conversion and compliance complexity</td><td style={tdStyle}>Detailed rights and cap-table complexity</td><td style={tdStyle}>Immediate dilution and pricing debate</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Why CCPS Is Common in Institutional Rounds</h2>
              <p>Compulsorily Convertible Preference Shares, or CCPS, are frequently used in venture funding because they can provide economic and governance rights while remaining an equity instrument when compulsorily convertible. A CCPS term sheet may address liquidation preference, anti-dilution, conversion, voting rights, reserved matters, transfer rights, and investor information rights - these must be drafted consistently across the term sheet, subscription agreement, shareholders&apos; agreement, articles of association, and cap table.</p>
              <p>The word &quot;compulsorily&quot; is important. If an instrument is <strong>optionally</strong> convertible or redeemable, it may be treated as debt under FEMA and become subject to different and more restrictive rules, including ECB-like conditions. The legal classification depends on the actual rights, not only the document title.</p>

              <h2>FEMA Pricing and Reporting</h2>
              <p>Foreign investment in equity instruments must comply with the applicable FEMA pricing guidelines. Founders should address valuation - see our <Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup valuation guide</Link> - before finalising a conversion formula, discount, or cap. A conversion formula that looks commercially attractive can fail if it does not permit compliance with FEMA pricing at the relevant time, especially where a convertible note converts after a later round or the company&apos;s valuation changes materially.</p>
              <p>Reporting must be built into the closing calendar. <strong>FC-GPR is filed within 30 days of allotment of capital instruments to a non-resident.</strong> The precise reporting treatment for convertible notes and their conversion should be confirmed for the current transaction with your advisor. The <strong>annual FLA return, due July 15</strong>, is another continuing obligation for Indian companies that have received foreign investment.</p>

              <h2>Choosing the Right Instrument</h2>
              <p><strong>Choose a convertible note where:</strong> the company is DPIIT-recognised, a priced round is realistically expected within a defined period, the parties can agree on a conversion mechanism, and the company can manage the compliance and reporting work.</p>
              <p><strong>Choose CCPS where:</strong> an institutional investor requires structured downside protection, valuation is agreed at closing, the round includes substantial governance rights, and the company is preparing for later institutional funding.</p>
              <p><strong>Choose straight equity where:</strong> the investment is simple, the valuation is settled, investors do not require preference rights, and the cap table should remain easy to understand.</p>
              <p>The instrument should follow the commercial reality. Do not use a convertible note merely because it appears faster - a badly drafted note can make the next round harder, not easier.</p>

              <h2>Closing Checklist Before Taking Foreign Capital</h2>
              <p>Before accepting foreign investment, confirm sectoral eligibility, entry route, beneficial ownership considerations, valuation, banking documents, Board approvals, shareholder approvals, authorised capital, instrument terms, and reporting responsibilities. Also review historic FEMA compliance - investors will ask whether prior FC-GPR filings were completed and whether annual FLA returns were filed. Historic non-compliance should be identified and addressed before the new round closes, not discovered during the next round&apos;s <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>due diligence</Link>.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Structuring a funding round with foreign investors?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We advise on convertible note eligibility, CCPS drafting, FEMA pricing, and FC-GPR/FLA compliance for Indian startups.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Fundraising</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA Compliance When Raising Foreign Funding</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

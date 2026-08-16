import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Master File vs Local File vs CbCR: What Indian Subsidiaries Must Prepare',
  description: 'The three-tier transfer pricing documentation structure in India: Master File (Form 3CEAA) thresholds, Local File content, and CbCR (Form 3CEAC/3CEAD) for large MNC groups.',
  keywords: [
    'master file India transfer pricing', 'local file transfer pricing India', 'CbCR India',
    'form 3CEAA', 'form 3CEAC', 'form 3CEAD', 'master file threshold Rs 500 crore',
    'country by country reporting India', 'transfer pricing documentation tiers',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/master-file-local-file-cbcr-india' },
  openGraph: {
    title: 'Master File vs Local File vs CbCR: What Indian Subsidiaries Must Prepare',
    description: 'Thresholds, content, and deadlines for the three-tier TP documentation structure in India.',
    url: 'https://agrawalkhandelwal.com/blog/master-file-local-file-cbcr-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master File vs Local File vs CbCR in India',
    description: 'Thresholds and content for each tier of TP documentation - and which companies actually need each one.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Master File vs Local File vs CbCR: What Indian Subsidiaries Must Prepare',
  description: 'The three-tier OECD-aligned TP documentation structure under Indian law: thresholds, content requirements, and filing deadlines.',
  datePublished: '2026-08-10', dateModified: '2026-08-10',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/master-file-local-file-cbcr-india',
}

const faqs: [string, string][] = [
  ['Does every Indian subsidiary need a Master File in Form 3CEAA?', 'No. Test the Form 3CEAA thresholds first. Part A is triggered when aggregate international transactions exceed Rs 50 crore, while the detailed Part B generally requires consolidated group revenue above Rs 500 crore plus either Rs 50 crore in international transactions or Rs 10 crore in intangible-property transactions.'],
  ['What is the difference between Form 3CEB and the Local File?', 'Form 3CEB is the CA-certified transfer pricing report filed electronically with the tax department. The Local File is the detailed transaction-level documentation - agreements, benchmarking, and financial reconciliations - that supports the arm\'s length pricing reported in Form 3CEB.'],
  ['When is CbCR required in India?', 'CbCR is relevant to multinational groups with consolidated revenue above Rs 5,500 crore in the preceding accounting year. It applies to an Indian parent entity, an alternate reporting entity, or in limited cases an Indian constituent entity of a foreign group where the parent jurisdiction does not exchange the report with India.'],
  ['What is Form 3CEAC used for?', 'Form 3CEAC is the Country-by-Country Reporting notification form. An Indian constituent entity of a qualifying multinational group uses it to identify the reporting entity and the jurisdiction where that entity is tax resident, ahead of the actual CbCR filing in Form 3CEAD.'],
  ['Can a foreign parent company\'s Master File be used in India?', 'Yes, the group can prepare the underlying Master File centrally at headquarters, but the Indian constituent entity remains responsible for satisfying Form 3CEAA requirements locally. The group-level content must be complete, current, and mapped correctly to the Indian prescribed format.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function MasterFileLocalFileCbCRBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Master File, Local File and CbCR: What an Indian Subsidiary Must Actually Prepare</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 10, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB</Link> applies where international transactions exceed Rs 1 crore, but it is only the accountant&apos;s report - not the full documentation.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Part A of Form 3CEAA (Master File) triggers where international transactions exceed <strong>Rs 50 crore</strong>.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Full Master File reporting (Part B) generally applies when consolidated group revenue exceeds <strong>Rs 500 crore</strong> plus prescribed transaction thresholds.</li>
                  <li style={{ marginBottom: 0 }}>CbCR is relevant only to MNC groups with consolidated revenue above <strong>Rs 5,500 crore</strong> - not ordinary Indian subsidiaries.</li>
                </ul>
              </div>

              <p>Indian transfer pricing compliance follows the OECD&apos;s three-tier documentation approach: a Local File with detailed evidence supporting the pricing of Indian related-party transactions, a Master File giving a high-level picture of the group&apos;s global business and TP policies, and a Country-by-Country Report showing revenue, profit, and tax by jurisdiction. These are different documents with different purposes - one filing does not satisfy the others. An Indian subsidiary might need only a simple Form 3CEB, or it might face the full package including Form 3CEAA and CbCR notifications, depending on transaction values, group revenue, and its role in the multinational group.</p>

              <h2>The Quick Comparison</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Requirement</th><th style={thStyle}>Form</th><th style={thStyle}>Key Threshold</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Accountant&apos;s report</td><td style={tdStyle}>Form 3CEB</td><td style={tdStyle}>International transactions above Rs 1 crore</td></tr>
                    <tr><td style={tdAltStyle}>Local File</td><td style={tdAltStyle}>Rule 10D documentation</td><td style={tdAltStyle}>Same trigger as Form 3CEB</td></tr>
                    <tr><td style={tdStyle}>Master File - basic</td><td style={tdStyle}>Form 3CEAA Part A</td><td style={tdStyle}>International transactions above Rs 50 crore</td></tr>
                    <tr><td style={tdAltStyle}>Master File - full</td><td style={tdAltStyle}>Form 3CEAA Part B</td><td style={tdAltStyle}>Group revenue &gt; Rs 500 crore + Rs 50cr transactions or Rs 10cr intangibles</td></tr>
                    <tr><td style={tdStyle}>CbCR notification</td><td style={tdStyle}>Form 3CEAC</td><td style={tdStyle}>Group revenue above Rs 5,500 crore</td></tr>
                    <tr><td style={tdAltStyle}>CbCR report</td><td style={tdAltStyle}>Form 3CEAD</td><td style={tdAltStyle}>Group revenue above Rs 5,500 crore</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Thresholds must be checked against the relevant year, group accounts, and notified exchange-rate rules - a group can be below the threshold one year and above it the next.</p>

              <h2>Local File: The Transaction-Level Defence File</h2>
              <p>The Local File is not a single form uploaded with the return - it is the underlying documentation maintained by the taxpayer and produced when the tax authorities ask for it. For an Indian subsidiary, it answers the questions an assessing officer will raise: what was bought, sold, or provided; which associated enterprise was involved; why the price or margin was arm&apos;s length; which method was selected; and what comparable data supports the conclusion. A Local File typically contains:</p>
              <ul>
                <li>Group and Indian entity overview, ownership structure, and associated enterprise list</li>
                <li>Functional, asset, and risk analysis</li>
                <li>Details of each controlled transaction and copies of intercompany agreements</li>
                <li>Transfer pricing method selection and comparable search/benchmarking analysis</li>
                <li>Segmental financial statements and reconciliations to the books</li>
              </ul>
              <p>A company that obtains a Form 3CEB certificate but has no supporting Local File has not completed transfer pricing compliance - it has only filed the form. If Form 3CEB reports that management services were tested under a particular method, the Local File must show the agreement, charge mechanism, benefit analysis, cost base, mark-up, and benchmarking behind that conclusion.</p>

              <h2>Master File: When Form 3CEAA Applies</h2>
              <p>The Master File gives tax authorities a group-wide view - where the group creates value, owns intangibles, is financed, and allocates functions and risks across jurisdictions. Form 3CEAA is the prescribed Indian form:</p>
              <ul>
                <li><strong>Part A</strong> applies where an Indian constituent entity&apos;s aggregate international transactions exceed <strong>Rs 50 crore</strong></li>
                <li><strong>Part B</strong>, the detailed Master File content, is generally required where consolidated group revenue exceeds <strong>Rs 500 crore</strong> and either aggregate international transactions exceed Rs 50 crore, or the value of intangible-property transactions exceeds <strong>Rs 10 crore</strong></li>
              </ul>
              <p>Do not rely only on the Indian subsidiary&apos;s own turnover - the Rs 500 crore test is based on <strong>consolidated group revenue</strong>. A complete Master File covers the group&apos;s legal and ownership structure, business description and value drivers, principal markets, important intangibles, intercompany financing, consolidated financial and tax position, and overall TP policies. It may be prepared centrally by the overseas parent, but only if the Indian entity obtains the information in a usable form and files the Indian prescribed particulars correctly - a group PDF built for another country&apos;s requirements may not map cleanly to Form 3CEAA. Where multiple Indian constituent entities exist, one designated entity may file on behalf of the group, subject to formal notification.</p>
              <p>Form 3CEAA is generally due on or before the transfer pricing return deadline, typically November 30. Do not wait until November to request the file from headquarters - group-level data often needs sign-off across legal, tax, finance, and treasury teams in several countries.</p>

              <h2>CbCR: Who Actually Needs It</h2>
              <p>Country-by-Country Reporting targets very large multinational groups - it is not a routine filing for every foreign-owned Indian company. The threshold is consolidated group revenue above <strong>Rs 5,500 crore</strong> in the preceding accounting year. CbCR becomes relevant where:</p>
              <ul>
                <li>The ultimate parent entity is resident in India</li>
                <li>An Indian entity is designated as an alternate reporting entity</li>
                <li>The ultimate parent is outside India and CbCR is not exchangeable under the applicable framework</li>
                <li>An Indian constituent entity has a local filing obligation because statutory conditions are met</li>
              </ul>
              <p>Form 3CEAC is the notification form identifying the reporting entity and its tax residence. Form 3CEAD is the actual report, generally covering revenue from related and unrelated parties, profit or loss before tax, tax paid and accrued, stated capital, employee count, tangible assets, and the names and activities of constituent entities. Form 3CEAC is typically due before the CbCR notification deadline, and Form 3CEAD within 12 months from the end of the reporting accounting year. A foreign parent filing CbCR in its home jurisdiction does not automatically end the Indian compliance review - local filing rules can still apply in surrogate-parent or exchange-of-information gap situations.</p>

              <h2>Which Companies Need Which Documents</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Situation</th><th style={thStyle}>3CEB</th><th style={thStyle}>Local File</th><th style={thStyle}>Master File</th><th style={thStyle}>CbCR</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Rs 1.5cr service payment, small group</td><td style={tdStyle}>Yes</td><td style={tdStyle}>Yes</td><td style={tdStyle}>No</td><td style={tdStyle}>No</td></tr>
                    <tr><td style={tdAltStyle}>Rs 75cr transactions, group revenue Rs 300cr</td><td style={tdAltStyle}>Yes</td><td style={tdAltStyle}>Yes</td><td style={tdAltStyle}>Part A likely</td><td style={tdAltStyle}>No</td></tr>
                    <tr><td style={tdStyle}>Rs 75cr transactions, group revenue Rs 1,000cr</td><td style={tdStyle}>Yes</td><td style={tdStyle}>Yes</td><td style={tdStyle}>Part A + B likely</td><td style={tdStyle}>Only if group &gt; Rs 5,500cr</td></tr>
                    <tr><td style={tdAltStyle}>Subsidiary of Rs 10,000cr global group</td><td style={tdAltStyle}>Depends on own transactions</td><td style={tdAltStyle}>Depends on own transactions</td><td style={tdAltStyle}>Depends on thresholds</td><td style={tdAltStyle}>Notification review required</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>A Practical Annual Workflow</h2>
              <p>Build a group compliance calendar. In the first quarter after year-end, obtain the final intercompany trial balance, agreements, and foreign-entity confirmations. By mid-year, complete benchmarking and Local File work. Get the Master File and CbCR status from group headquarters early enough to identify Indian filing requirements, then finalise Form 3CEB, Form 3CEAA, and any Form 3CEAC/3CEAD filings before their deadlines. Maintain one transaction register showing each associated enterprise, transaction type, amount, agreement, withholding tax position, GST treatment, TP method, and supporting document location - this reduces both filing risk and assessment risk.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Not sure which documentation tier applies to you?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We assess your group structure and transaction values to determine your exact Form 3CEB, Master File, and CbCR obligations - then prepare the documentation.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing Services</Link>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process & Penalties</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-documentation-checklist-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Documentation Checklist for Indian Subsidiaries</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TP Audit: How to Handle a Transfer Pricing Assessment in India',
  description: 'What triggers TPO selection, the assessment sequence, how to respond to a show-cause notice, DRP vs CIT(Appeals), MAP for double taxation, and conduct that improves outcomes.',
  keywords: [
    'transfer pricing audit India', 'TPO assessment process', 'DRP transfer pricing',
    'show cause notice transfer pricing', 'MAP double taxation India', 'transfer pricing dispute resolution',
    'CIT appeals transfer pricing', 'section 271BA 271AA penalty',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/transfer-pricing-audit-assessment-india' },
  openGraph: {
    title: 'TP Audit: How to Handle a Transfer Pricing Assessment in India',
    description: 'Selection triggers, the assessment sequence, DRP vs CIT(Appeals), and MAP for double taxation.',
    url: 'https://agrawalkhandelwal.com/blog/transfer-pricing-audit-assessment-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TP Audit: Handling a Transfer Pricing Assessment',
    description: 'Selection triggers, the assessment process, DRP, and MAP for double taxation.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'TP Audit: How to Handle a Transfer Pricing Assessment in India',
  description: 'What triggers TPO selection, the assessment sequence, DRP vs CIT(Appeals), MAP for double taxation, and conduct that improves outcomes.',
  datePublished: '2026-08-15', dateModified: '2026-08-15',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/transfer-pricing-audit-assessment-india',
}

const faqs: [string, string][] = [
  ['Why was my company selected for a transfer pricing audit in India?', 'Selection can arise from risk parameters such as high related-party transaction values, persistent losses despite a profitable global group, prior-year adjustments, or unusual profitability swings. Selection itself does not establish that the company\'s transfer pricing is incorrect.'],
  ['What documents should be submitted to a Transfer Pricing Officer?', 'Submit the transfer pricing study, intercompany agreements, financial reconciliations, cost-base workings, comparable company analysis, and evidence supporting the functional profile. Responses should be accurate, internally consistent, and mapped directly to the TPO\'s specific request.'],
  ['What is the DRP route in a transfer pricing assessment?', 'The Dispute Resolution Panel route allows an eligible taxpayer to file objections against a draft assessment order before it becomes final. The DRP examines the objections and issues directions to the Assessing Officer before the final order is passed.'],
  ['Can MAP remove double taxation from an Indian transfer pricing adjustment?', 'The Mutual Agreement Procedure may help resolve double taxation under the relevant Indian tax treaty where the same income is taxed in both India and a treaty-partner jurisdiction. The process is conducted between competent authorities and is treaty-specific.'],
  ['What is the penalty for not filing Form 3CEB?', 'Where Form 3CEB is required, non-filing can attract a flat Rs 1 lakh penalty under Section 271BA. Separately, inadequate documentation can attract a penalty of up to 2% of transaction value under Section 271AA. Form 3CEB is required where international transactions exceed Rs 1 crore and is due October 31.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function TPAuditBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>TP Audit in India: How to Handle a Transfer Pricing Assessment</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 15, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>A TP assessment tests both your <strong>documentation</strong> and the <strong>commercial facts</strong> behind it - not just the Form 3CEB filing.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Responding early with a coherent factual record beats reacting to a proposed adjustment after the fact.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>DRP</strong> provides a direct route to challenge an eligible draft assessment order before it becomes final.</li>
                  <li style={{ marginBottom: 0 }}><strong>MAP</strong> can address double taxation where a treaty-partner jurisdiction is also taxing the same income.</li>
                </ul>
              </div>

              <p>A transfer pricing assessment begins when the Assessing Officer refers eligible international transactions to a Transfer Pricing Officer, who examines whether the price or margin reported by the taxpayer is at arm&apos;s length. This is not limited to checking Form 3CEB - the TPO can scrutinise the intercompany agreement, functional profile, cost-base calculation, comparable selection, financial statements, and business rationale. A well-handled assessment is a project involving finance, tax, operations, and group management - the finance controller should coordinate the factual response rather than leaving every question to an external advisor.</p>

              <h2>Why Companies Are Selected</h2>
              <p>Selection is driven by risk parameters and is not always transparent. Factors that may attract attention include significant related-party transaction values, persistent losses in India despite a profitable global group, large year-on-year changes in margins, prior-year transfer pricing adjustments, unusual royalty or management-fee payments, and significant restructuring or transfer of functions or intangibles. Selection does not mean the taxpayer has made an error - it means the file needs to withstand closer review.</p>

              <h2>The Typical Assessment Sequence</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Stage</th><th style={thStyle}>What Happens</th><th style={thStyle}>What to Do</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Notice and information request</td><td style={tdStyle}>TPO requests study, agreements, financial data</td><td style={tdStyle}>Build a response tracker and preserve source documents</td></tr>
                    <tr><td style={tdAltStyle}>Initial submissions</td><td style={tdAltStyle}>Taxpayer explains transactions and method</td><td style={tdAltStyle}>Lead with a clear functional narrative</td></tr>
                    <tr><td style={tdStyle}>TPO benchmarking</td><td style={tdStyle}>TPO may run its own comparable search</td><td style={tdStyle}>Analyse every new comparable and filter</td></tr>
                    <tr><td style={tdAltStyle}>Show-cause notice</td><td style={tdAltStyle}>Proposed adjustment and reasoning shared</td><td style={tdAltStyle}>Respond factually, legally, and with calculations</td></tr>
                    <tr><td style={tdStyle}>Draft assessment order</td><td style={tdStyle}>Adjustment may be reflected in draft order</td><td style={tdStyle}>Evaluate DRP route promptly</td></tr>
                    <tr><td style={tdAltStyle}>Final order and appeal</td><td style={tdAltStyle}>Assessment is finalised</td><td style={tdAltStyle}>Consider DRP outcome, appeal, and MAP strategy</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The first submission often frames the rest of the case. It should be complete enough to explain the business, but controlled enough to avoid unsupported statements that later become admissions.</p>

              <h2>Build the Audit File Before the First Hearing</h2>
              <p>Assemble the core documents before responding: the transfer pricing study and Form 3CEB support, intercompany agreements and amendments, group structure and transaction-flow chart, functional/asset/risk analysis, trial balance and segmental accounts, comparable-search database outputs with accept/reject rationale, invoices reconciled to books, and prior assessment orders or DRP directions. Do not send inconsistent versions of financial data - create a master reconciliation between statutory accounts, tax computation, Form 3CEB, transfer pricing study, and submissions.</p>

              <h2>Respond to the TPO&apos;s Own Benchmarking</h2>
              <p>TPOs may reject taxpayer comparables, introduce additional companies, or change the tested-party analysis. Every proposed comparable should be examined carefully: Does the company provide the same type of service? Does it own products, brands, or unique IP? Is segmental data available? Is there an extraordinary event? Does its turnover or scale make it materially different? The response should include evidence, not just conclusions - annual reports, segment notes, and business descriptions can support an exclusion argument.</p>

              <h2>The Show-Cause Notice: Your Key Opportunity</h2>
              <p>A show-cause notice usually sets out the proposed adjustment - it is the point to challenge factual errors, comparables, arithmetic, filters, risk characterisation, and the proposed adjustment itself. A strong reply should address each proposed comparable separately, recompute the TPO&apos;s margin calculation, identify accounting misclassifications, explain why an adjustment is or is not warranted, and preserve alternative arguments if the primary position is rejected. Do not concede a weak point casually in correspondence - if an issue requires review, state that the company is examining the records and provide a substantiated response within the permitted timeline.</p>

              <h2>DRP vs CIT(Appeals)</h2>
              <p>Where a draft assessment order is issued to an eligible taxpayer, the Dispute Resolution Panel route can be used instead of going directly to CIT(Appeals). The taxpayer files objections to the DRP within the prescribed time limit, and the DRP examines the objections and issues directions to the Assessing Officer before the final assessment order is passed. The strategic choice depends on the facts, timing, existing litigation, and the strength of the record - obtain advice promptly since appeal and objection deadlines are strict.</p>

              <h2>MAP and Double Taxation</h2>
              <p>A transfer pricing adjustment in India can result in the same profit being taxed in the counterparty jurisdiction. The Mutual Agreement Procedure under India&apos;s Double Taxation Avoidance Agreements can be relevant here - handled through competent authorities, not the TPO, it seeks relief from double taxation through consultation between treaty jurisdictions. A bilateral <Link href="/blog/advance-pricing-agreement-apa-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>APA</Link> may prevent this issue prospectively, while MAP is relevant once an adjustment has already arisen. MAP should be considered early where the adjustment affects a significant foreign associated enterprise and double taxation is commercially material - treaty-specific deadlines and procedural requirements must be checked.</p>

              <h2>Practical Conduct That Improves Outcomes</h2>
              <p>The strongest audit strategy is disciplined, contemporaneous, and factual:</p>
              <ul>
                <li>Keep documentation current, not reconstructed after selection</li>
                <li>Answer notices on time and request extensions early where genuinely required</li>
                <li>Make finance and operational personnel available to explain actual conduct</li>
                <li>Maintain one version of the facts across India and foreign group filings</li>
                <li>Separate primary arguments from alternative arguments</li>
                <li>Preserve data used for comparable searches and calculations</li>
              </ul>
              <p>Where international transactions exceed Rs 1 crore, <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB is required</Link> and due October 31. Non-filing attracts a flat Rs 1 lakh penalty under Section 271BA, and inadequate documentation can attract up to 2% of transaction value under Section 271AA. Those penalties are avoidable compliance risks - the larger risk is often an adjustment that repeats over several years and creates double taxation.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Facing a TP audit or notice from the TPO?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle TPO submissions, show-cause responses, DRP objections, and MAP coordination for Indian subsidiaries and JVs under assessment.</p>
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
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/advance-pricing-agreement-apa-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Advance Pricing Agreement (APA) India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-documentation-checklist-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Documentation Checklist</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transfer Pricing Documentation Checklist for Indian Subsidiaries (2026)',
  description: 'Complete TP documentation checklist for Indian companies: Form 3CEB vs Local File vs Master File thresholds, due dates, benchmarking requirements, and the gaps most audits exploit.',
  keywords: [
    'transfer pricing documentation India', 'transfer pricing checklist India',
    'form 3CEB India', 'TP documentation requirements India', 'master file local file India',
    'transfer pricing audit India', 'TP compliance checklist', 'transfer pricing methods India',
    'TNMM benchmarking India', 'CbCR India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/transfer-pricing-documentation-checklist-india' },
  openGraph: {
    title: 'Transfer Pricing Documentation Checklist for Indian Subsidiaries (2026)',
    description: 'Who needs TP documentation in India, what to prepare at each threshold tier, when it is due, and the most common gaps that trigger transfer pricing audits.',
    url: 'https://agrawalkhandelwal.com/blog/transfer-pricing-documentation-checklist-india',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Transfer Pricing Documentation Checklist for Indian Subsidiaries (2026)',
  description: 'Complete checklist for Indian TP compliance: Form 3CEB, Local File, Master File, and CbCR thresholds, due dates, and common audit triggers.',
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/transfer-pricing-documentation-checklist-india',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the threshold for transfer pricing documentation in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any Indian entity with international related-party transactions exceeding ₹1 crore in aggregate in a financial year must get a Form 3CEB report certified by a Chartered Accountant and file it with the income tax return. This ₹1 crore threshold covers all international transactions with associated enterprises combined, not per transaction. Above ₹100 crore in related-party transactions, the entity must also maintain a Local File. Group revenue above ₹1,000 crore triggers a Master File obligation, and above ₹5,500 crore triggers Country-by-Country Reporting (CbCR).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most commonly used transfer pricing method for IT and BPO companies in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Transactional Net Margin Method (TNMM) is the most widely used TP method for Indian IT subsidiaries, BPO companies, and captive service centers. TNMM compares the net profit margin of the Indian entity on the transaction with the net margins earned by comparable independent companies on similar transactions. It is preferred over the Comparable Uncontrolled Price (CUP) method because comparable internal or external prices for proprietary software and knowledge-process services are rarely available. Indian tax authorities and courts have consistently accepted TNMM for routine service transactions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the due date for filing Form 3CEB in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Form 3CEB must be filed on or before October 31 of the assessment year (i.e., by October 31, 2026 for FY 2025-26 transactions) for companies not subject to a transfer pricing audit. For companies referred to the Transfer Pricing Officer for audit, the extended due date is November 30. Missing the Form 3CEB deadline attracts a penalty of 2% of the value of each international transaction for which the report was not filed, in addition to interest on any tax shortfall.',
      },
    },
    {
      '@type': 'Question',
      name: 'What triggers a transfer pricing audit in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CBDT selects TP cases for audit based on risk parameters including: the Indian entity reporting losses while the global group is profitable, transactions with entities in low-tax or no-tax jurisdictions, royalty or management fee payments with thin margins, significant year-on-year changes in related-party transaction volumes, and the Indian entity earning margins substantially below the benchmarked range. Inadequate documentation — such as missing intercompany agreements, stale benchmarking studies, or no economic analysis — also increases audit risk since it signals the arm\'s length nature of the transactions has not been properly established.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function TPDocumentationChecklist() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">International Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Transfer Pricing Documentation Checklist for Indian Subsidiaries (2026)
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>Every Indian company that transacts with an overseas parent, subsidiary, or group entity above ₹1 crore in a financial year has a transfer pricing documentation obligation under the Income Tax Act. Most companies know they need Form 3CEB. Far fewer maintain the underlying documentation that makes Form 3CEB defensible in an audit. This checklist covers every tier — from the base 3CEB requirement to Country-by-Country Reporting — with due dates and the specific items that tend to be missing when auditors look.</p>

                <h2>The Four Tiers of Indian TP Compliance</h2>
                <p>Indian transfer pricing obligations scale with transaction volume and group size:</p>
                <ul>
                  <li><strong>Tier 1 — Form 3CEB (₹1 crore+ in international related-party transactions):</strong> A CA-certified report listing all international transactions with associated enterprises and specifying the transfer pricing method applied to each. This is the base obligation. No exemption for small companies, newly incorporated entities, or startups with foreign parents.</li>
                  <li><strong>Tier 2 — Local File (₹100 crore+ in international related-party transactions):</strong> Detailed documentation of each significant transaction category: economic analysis, benchmarking, functional analysis (functions performed, assets used, risks assumed), and financial data. India-specific local file requirements align with the OECD BEPS Action 13 template.</li>
                  <li><strong>Tier 3 — Master File (Group consolidated revenue ₹1,000 crore+):</strong> Filed by the Indian constituent entity (Form 3CEAA) covering the group&apos;s global organizational structure, business description, intangibles, intercompany financial arrangements, and consolidated financial positions. Due November 30.</li>
                  <li><strong>Tier 4 — CbCR (Group consolidated revenue ₹5,500 crore+):</strong> Country-by-Country Report (Form 3CEAD) filed 12 months after the end of the reporting accounting year, disclosing revenue, profit/loss, taxes paid, and headcount for each jurisdiction in which the group operates.</li>
                </ul>

                <h2>Documentation Checklist — What to Prepare Before October</h2>
                <p>This checklist covers the items required for Form 3CEB and Local File. Start collecting these in July-August each financial year, not in October when deadlines arrive.</p>
                <ul>
                  <li><strong>Intercompany agreements:</strong> Signed contracts for each related-party transaction type — service agreements, royalty agreements, loan agreements, cost-sharing arrangements. These must predate the transactions, not be backdated post-audit. Undated or draft-stage agreements are the single most common documentation gap.</li>
                  <li><strong>Complete transaction listing:</strong> Each international related-party transaction with the associated enterprise name, country, transaction type, and INR value. Aggregate all transactions with the same AE by type.</li>
                  <li><strong>Functional analysis:</strong> A written analysis of functions performed, assets used, and risks assumed by the Indian entity in each transaction category. Determines whether the entity is a routine service provider, limited risk distributor, or entrepreneur — which in turn determines the benchmarking approach.</li>
                  <li><strong>Transfer pricing method selection:</strong> Documented rationale for the chosen method (TNMM, CUP, RPM, Cost Plus, or PSM) for each transaction. Method selection must consider all five methods before rejecting alternatives — the &quot;most appropriate method&quot; standard applies.</li>
                  <li><strong>Benchmarking study:</strong> A search on Prowess, Capitaline, or an equivalent database identifying comparable independent companies with similar functions, assets, and risks. Must cover the current financial year data (prior-year studies are accepted with updates, but stale comparables increase audit risk). Typically 5-10 comparables survive the filtering process.</li>
                  <li><strong>Arm&apos;s length range:</strong> Calculate the interquartile range of operating margins (for TNMM) of the comparable set. Confirm the Indian entity&apos;s margin falls within this range. If it falls below the 25th percentile, document why — or expect an adjustment.</li>
                  <li><strong>Invoices and payment records:</strong> Supporting documentation for each transaction confirming the amounts transacted match what is disclosed in Form 3CEB.</li>
                  <li><strong>FEMA compliance confirmation:</strong> For royalty, dividend, and loan transactions, confirm RBI/FEMA compliance (ODI filings, ECB filings, etc.) — TP non-compliance and FEMA non-compliance often coexist and both attract penalties.</li>
                </ul>

                <h2>Due Dates at a Glance</h2>
                <ul>
                  <li><strong>October 31:</strong> Form 3CEB filing due (for companies with non-TP tax audit — i.e., most Indian subsidiaries)</li>
                  <li><strong>November 30:</strong> Form 3CEB due for TP audit cases; Master File (Form 3CEAA) due; Income Tax Return for TP companies</li>
                  <li><strong>12 months after fiscal year end:</strong> CbCR (Form 3CEAD) due</li>
                </ul>
                <p>Penalty for non-filing Form 3CEB: 2% of the value of each unreported international transaction. Penalty for concealment or misreporting of income arising from TP adjustments: 100-300% of tax on the adjusted amount.</p>

                <h2>What Triggers a TP Audit</h2>
                <p>CBDT&apos;s risk-based selection framework targets cases where:</p>
                <ul>
                  <li>The Indian entity reports consistent losses while the parent group is globally profitable</li>
                  <li>Royalty or management fee payments are high relative to revenues</li>
                  <li>Transactions are with entities in zero-tax or low-tax jurisdictions (Cayman Islands, BVI, UAE historically)</li>
                  <li>The Indian entity&apos;s net margin is below the 25th percentile of the comparable set</li>
                  <li>Related-party transactions increased significantly year-on-year without corresponding changes in business volume</li>
                </ul>
                <p>Having solid documentation in place before October does not prevent selection — but it significantly limits the scope of any adjustment the Transfer Pricing Officer can make. Companies with well-documented contemporaneous records consistently achieve better outcomes in TP audits and appeals than those who reconstruct documentation after the fact.</p>
                <p>Our <Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing practice</Link> handles Form 3CEB certification, benchmarking studies, and TP audit representation for Indian subsidiaries of multinationals across sectors.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need transfer pricing documentation for your Indian subsidiary?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare Form 3CEB, Local File, and Master File documentation for Indian entities with international related-party transactions.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20transfer%20pricing%20documentation." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

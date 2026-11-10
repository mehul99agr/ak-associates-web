import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { EMAIL_LINK, OG_IMAGES } from '@/lib/constants'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Income Tax Act 2025: What Changed From April 1, 2026' },
  description: 'The Income Tax Act 2025 is in force from April 1, 2026: the new tax year, Income-tax Rules 2026, old-to-new section and form numbers, and what stays the same.',
  keywords: [
    'new income tax act 2025 India', 'income tax act 2025 changes',
    'income tax act 2025 effective date', 'income tax rules 2026',
    'tax year 2026-27', 'income tax act 2025 section mapping',
    'new income tax act form numbers', 'income tax act 1961 vs 2025',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/new-income-tax-act-rules-2025' },
  openGraph: {
    title: 'Income Tax Act 2025: What Changed From April 1, 2026',
    description: 'Tax year, Income-tax Rules 2026, and the old-to-new section and form numbers you will now see on notices and returns.',
    url: 'https://agrawalkhandelwal.com/blog/new-income-tax-act-rules-2025',
    type: 'article',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Income Tax Act 2025: What Changed From April 1, 2026', 'new-income-tax-act-rules-2025')

const articleLd = buildArticleLd({
  headline: 'Income Tax Act 2025: What Changed From April 1, 2026',
  description: 'The Income Tax Act 2025 in force from April 1, 2026: tax year, Income-tax Rules 2026, section and form renumbering, transition rules.',
  datePublished: '2026-03-20',
  dateModified: '2026-11-10',
  slug: 'new-income-tax-act-rules-2025',
})

const faqs: [string, string][] = [
  ['When did the Income Tax Act 2025 come into force?', 'On April 1, 2026, replacing the Income-tax Act, 1961. The Income-tax Rules, 2026 and the new forms were notified by CBDT on March 20, 2026 and apply from the same date.'],
  ['Which law applies to income earned in FY 2025-26?', 'The 1961 Act. Income earned from April 1, 2025 to March 31, 2026 is assessed under the old Act, and that return (assessment year 2026-27) is filed under the old rules. The 2025 Act applies from tax year 2026-27 onwards.'],
  ['What is a tax year under the new Act?', 'The 2025 Act replaces the separate previous year and assessment year with a single tax year. The first tax year is 2026-27, running from April 1, 2026 to March 31, 2027.'],
  ['Did the new Act change the tax rates or abolish the old regime?', 'No. Budget 2026 kept the new regime slabs, the Rs 12 lakh rebate and the Rs 75,000 standard deduction unchanged, and the old regime is still available. The change is mainly in structure, language and numbering.'],
  ['Why do section and form numbers look different on notices now?', 'The provisions were renumbered. For example, 44AB (tax audit) is now Section 63, 87A (rebate) is Section 156, 80C is Section 123, 192 (TDS on salary) is Section 392, 195 is Section 393(2), Form 13 is Form 128, Form 27Q is Form 144, and Forms 3CA/3CB/3CD are now a single Form 26.'],
]

const faqLd = buildFaqLd(faqs)

export default function NewTaxActBlog() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 700, display: 'inline-block', marginBottom: '2rem' }}>
          &larr; Back to Insights
        </Link>
        
        <article className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span className="section-badge" style={{ background: 'var(--primary)', color: 'white' }}>Tax Reform</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
              Income Tax Act 2025: What Changed From April 1, 2026
            </h1>
            <p style={{ color: 'var(--text-light)', fontWeight: 600 }}>Updated November 10, 2026 • By <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)' }}>CA Mehul Agrawal</Link></p>
          </div>

          <div style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
              <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>The Income Tax Act 2025 replaced the 1961 Act on <strong>April 1, 2026</strong>. The Income-tax Rules, 2026 and new forms were notified on March 20, 2026.</li>
                <li style={{ marginBottom: '0.4rem' }}>Income of FY 2025-26 is still assessed under the 1961 Act. The new Act applies from <strong>tax year 2026-27</strong>.</li>
                <li style={{ marginBottom: '0.4rem' }}>The separate previous year and assessment year are replaced by a single <strong>tax year</strong>.</li>
                <li style={{ marginBottom: '0.4rem' }}>Tax rates did not change. Both the new and old regimes remain.</li>
                <li style={{ marginBottom: 0 }}>Most section and form numbers changed, so notices, TDS returns and audit reports now carry new numbers (tables below).</li>
              </ul>
            </div>

            <p style={{ marginBottom: '1.5rem' }}>
              In March 2026 we wrote about the new Act before it took effect. It is now in force, so this guide has been rewritten around what actually applies: the effective date, the transition rule for FY 2025-26, the new tax year, and the old-to-new numbers you will meet on notices and forms.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>1. Effective Date and Transition</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The Income Tax Act 2025 came into force on April 1, 2026 and replaced the Income-tax Act, 1961. CBDT notified the Income-tax Rules, 2026, which replace the 1962 Rules, and the corresponding forms on March 20, 2026.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The switch is not retrospective. Income earned from April 1, 2025 to March 31, 2026 is governed by the 1961 Act, and that return is filed under the old rules. Assessments, notices and appeals for earlier years continue to refer to the old sections. The new Act governs income from April 1, 2026 onwards.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>2. Tax Year Replaces Previous Year and Assessment Year</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Under the 1961 Act, income of one previous year was taxed in the following assessment year, which confused many first-time filers and NRIs. The 2025 Act uses a single <strong>tax year</strong>, the financial year in which the income is earned. The first tax year is 2026-27 (April 1, 2026 to March 31, 2027).
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>3. What Did Not Change</h2>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Rates and slabs.</strong> Budget 2026 kept the new regime slabs, the Rs 12 lakh rebate and the Rs 75,000 standard deduction. See our <Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)' }}>new tax regime guide for FY 2026-27</Link>.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Choice of regime.</strong> The old regime with deductions is still available.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Audit thresholds.</strong> Tax audit applicability is unchanged; the section and the report form changed.</li>
            </ul>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>4. Old vs New Section Numbers</h2>
            <p style={{ marginBottom: '1.5rem' }}>The provisions you are most likely to meet, with numbers we have confirmed against more than one source:</p>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead><tr><th style={{ textAlign: 'left', padding: '0.6rem', borderBottom: '2px solid var(--border)' }}>1961 Act</th><th style={{ textAlign: 'left', padding: '0.6rem', borderBottom: '2px solid var(--border)' }}>Income Tax Act 2025</th></tr></thead>
                <tbody>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>44AB (tax audit)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 63</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>44AA (books of account)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 62</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>44AD / 44ADA / 44AE (presumptive tax)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 58</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>80C</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 123</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>80D</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 126</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>87A (rebate)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 156</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>147 / 148 (reassessment)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Sections 279 / 280</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>192 (TDS on salary)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 392</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>194C, 194J and other TDS</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 393</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>195 (TDS on payments to non-residents)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 393(2)</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>197 (lower deduction certificate)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Section 395</td></tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>5. Old vs New Form Numbers</h2>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead><tr><th style={{ textAlign: 'left', padding: '0.6rem', borderBottom: '2px solid var(--border)' }}>Old form</th><th style={{ textAlign: 'left', padding: '0.6rem', borderBottom: '2px solid var(--border)' }}>New form</th></tr></thead>
                <tbody>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 13 (lower TDS certificate)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 128</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 15CA / 15CB</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 145 / 146</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 16A</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 131</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 24Q / 26Q / 27Q</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 138 / 140 / 144</td></tr>
                  <tr><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Forms 3CA, 3CB, 3CD (tax audit)</td><td style={{ padding: '0.6rem', borderBottom: '1px solid var(--border)' }}>Form 26</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>
              The three tax audit forms are now one Form 26: Parts A and B carry the old Form 3CD particulars, and Part C carries the audit opinion. More detail is in our <Link href="/blog/tax-audit-report-forms-3ca-3cb-3cd-explained" style={{ color: 'var(--primary)' }}>tax audit report forms guide</Link>.
            </p>

            <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', borderLeft: '5px solid var(--accent)', margin: '3rem 0' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>What to do now</h3>
              <p style={{ color: 'var(--text-main)', margin: 0 }}>
                Check that your payroll, TDS and accounting software use the new section codes for payments made from April 1, 2026, and keep the old numbers for anything relating to FY 2025-26 or earlier. When a notice arrives, first check which Act it was issued under, since that decides the response timelines and forms.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map(([q, a], i) => (
                <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>New Tax Regime FY 2026-27: Slabs and Rebate</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-documentation-checklist-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Documentation Checklist (2026)</Link></li>
              <li style={{ marginBottom: 0 }}><Link href="/tax-calculator" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Estimator Tool</Link></li>
            </ul>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Want a personalized impact analysis?</h3>
            <a href="/consult" className="btn btn-primary">
              Book a Consultation
            </a>
          </div>
                  <PostFooterLinks slug="new-income-tax-act-rules-2025" />

                  <PostCTA
            heading="Not sure how the new Income Tax Act affects you?"
            description="Talk to a CA about what changes for your filings and tax planning."
            secondaryLabel="Email us"
            secondaryHref={EMAIL_LINK}
            />
        </article>
      </div>
    </div>
    </>
  )
}

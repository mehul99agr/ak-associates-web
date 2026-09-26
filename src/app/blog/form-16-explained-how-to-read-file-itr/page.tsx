import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Form 16 Explained: How to Read It and File Your ITR',
  description: 'What Form 16 Part A and Part B actually show, how to match it against Form 26AS and AIS, and how to use it to file your ITR correctly for FY 2025-26.',
  keywords: [
    'Form 16 explained', 'how to read Form 16', 'Form 16 Part A Part B', 'Form 16 for ITR filing',
    'Form 16 due date', 'Form 16 vs Form 26AS', 'TDS certificate salary', 'employer did not issue Form 16',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-16-explained-how-to-read-file-itr' },
  openGraph: {
    title: 'Form 16 Explained: How to Read It and File Your ITR',
    description: 'Part A vs Part B, matching it to Form 26AS/AIS, and using it correctly to file your ITR.',
    url: 'https://agrawalkhandelwal.com/blog/form-16-explained-how-to-read-file-itr',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 16 Explained: How to Read It and File Your ITR',
    description: 'Part A vs Part B, matching it to Form 26AS/AIS, and filing your ITR correctly.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Form 16 Explained: How to Read It and File Your ITR', 'form-16-explained-how-to-read-file-itr')

const articleLd = buildArticleLd({
  headline: 'Form 16 Explained: How to Read It and File Your ITR',
  description: 'A practical walkthrough of Form 16 Part A and Part B, cross-checking it against Form 26AS and AIS, and using it to file an accurate ITR.',
  datePublished: '2026-07-23',
  slug: 'form-16-explained-how-to-read-file-itr',
})

const faqs: [string, string][] = [
  ['What is Form 16 used for?', 'Form 16 is a TDS certificate an employer issues to a salaried employee, showing the salary paid and the tax deducted at source during the financial year. It is the primary document used to fill in the salary and TDS figures while filing an income tax return.'],
  ['What is the difference between Form 16 Part A and Part B?', 'Part A is generated and downloaded from the TRACES portal and shows the employer and employee PAN/TAN details along with a quarter-wise summary of TDS deducted and deposited. Part B is prepared by the employer directly and shows the detailed salary breakup, exemptions claimed, Chapter VI-A deductions, and the final tax computation.'],
  ['By when must an employer issue Form 16?', 'For a given financial year, employers are required to issue Form 16 to employees by June 15 of the following financial year. Missing this deadline attracts a penalty of Rs 100 per day of delay under Section 272A(2)(g) of the current Act.'],
  ['Can I file my ITR without Form 16?', 'Yes. Form 16 is a convenience document, not a legal precondition for filing. You can reconstruct the salary and TDS figures from your payslips, Form 26AS, and the Annual Information Statement (AIS), though it takes more manual effort and care than working from a single consolidated Form 16.'],
  ['Why do the numbers in Form 16 and Form 26AS sometimes not match?', 'Mismatches usually happen because the employer deposited TDS late, filed a delayed or incorrect TDS return, or made a PAN entry error. Since the tax department\'s records are built from Form 26AS/AIS rather than Form 16 itself, any mismatch should be flagged to the employer before filing so a correction return can be filed if needed.'],
  ['Does Form 16 look different under the old regime versus the new tax regime?', 'The salary and TDS figures are the same, but Part B differs in what it shows below the salary computation. Under the old regime, Part B lists HRA, LTA, and Chapter VI-A deductions such as Section 80C and 80D. Under the new regime, which is now the default, most of these exemptions and deductions do not apply, so Part B is a shorter computation built mainly around the standard deduction.'],
]

const faqLd = buildFaqLd(faqs)

export default function Form16ExplainedBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Income Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Form 16 Explained: How to Read It and File Your ITR</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 23, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Form 16 has two parts: <strong>Part A</strong> (TDS summary from TRACES) and <strong>Part B</strong> (salary breakup and tax computation prepared by the employer).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Employers must issue it by <strong>June 15</strong> following the financial year; a Rs 100/day penalty applies for delay.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Always cross-check Form 16 figures against <strong>Form 26AS and AIS</strong> before filing; the department relies on the latter two.</li>
                  <li style={{ marginBottom: 0 }}>Missing a Form 16 does not stop you from filing; payslips plus Form 26AS/AIS can substitute for it.</li>
                </ul>
              </div>

              <p>Form 16 is the single most-referenced document at ITR filing time for salaried taxpayers, yet most people only glance at the final tax figure and skip the rest. Reading it properly helps you catch employer errors, understand exactly how your tax was computed, and file a return that matches what the tax department already has on record.</p>

              <h2>What Exactly Is Form 16?</h2>
              <p>Form 16 is a TDS certificate that every employer deducting tax on salary is required to issue to each employee, under Section 203 of the current Act. It certifies how much salary was paid during the financial year and how much tax was deducted and deposited against the employee&apos;s PAN. It is issued annually, typically covering the period April to March, and is expected to be reorganised under a new certificate framework once the Income Tax Act 2025 provisions for TDS certificates take prospective effect from FY 2026-27; the underlying obligation to certify salary TDS is not going away.</p>

              <h2>Part A vs Part B: What Each Section Shows</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Section</th><th style={thStyle}>Source</th><th style={thStyle}>What It Shows</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}><strong>Part A</strong></td><td style={tdStyle}>Downloaded from TRACES by the employer</td><td style={tdStyle}>Employer TAN and PAN, employee PAN, employment period, and a quarter-wise summary of TDS deducted and deposited</td></tr>
                    <tr><td style={tdAltStyle}><strong>Part B</strong></td><td style={tdAltStyle}>Prepared directly by the employer</td><td style={tdAltStyle}>Detailed salary breakup, exempt allowances, deductions claimed, and the final tax computation and net tax payable/refundable</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Part A is the more reliable of the two because it is system-generated from data the employer has actually filed with the tax department. Part B is only as accurate as the declarations and proofs the employee submitted to the employer during the year, so it is worth reviewing carefully, especially the deduction section, before relying on it.</p>

              <h2>Reading Part B Line by Line</h2>
              <p>Part B typically walks through gross salary, followed by exemptions under Section 10 such as house rent allowance and leave travel allowance (relevant only under the old regime), the standard deduction, income or loss from house property if declared to the employer, and Chapter VI-A deductions such as <Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C</Link> and Section 80D. It closes with the total taxable income, the tax computed on it, and the tax already deducted through the year, reconciled against what was actually paid in.</p>
              <p>If you are on the new tax regime, which has been the default since FY 2023-24, most of these exemptions and Chapter VI-A deductions simply will not appear, and Part B will be a much shorter computation built mainly around the standard deduction and the applicable slab rates.</p>

              <h2>Cross-Check Against Form 26AS and AIS Before Filing</h2>
              <p>Form 16 is prepared by your employer, but the tax department&apos;s own record of your income and TDS comes from Form 26AS and the Annual Information Statement (AIS), both viewable through the income tax e-filing portal. Before filing, compare the TDS amount and PAN details in Form 16 against Form 26AS. A mismatch usually points to one of a few causes:</p>
              <ul>
                <li>The employer deposited TDS late or filed the TDS return after the due date</li>
                <li>A PAN quoting error in the employer&apos;s TDS return</li>
                <li>TDS deducted but not yet reflected because the employer&apos;s return for that quarter has not been processed</li>
              </ul>
              <p>Filing your return using the Form 16 figure when Form 26AS shows something different risks a mismatch notice later, since processing is done against Form 26AS/AIS data. Flag any discrepancy to your employer&apos;s payroll or finance team promptly so a correction (revised) TDS return can be filed if the error is on their end.</p>

              <h2>Due Date and What Happens If Your Employer Is Late</h2>
              <p>Employers must issue Form 16 for a financial year by <strong>June 15</strong> of the following year. If they miss it, a penalty of Rs 100 per day of default applies to the employer under Section 272A(2)(g), continuing until the certificate is issued. This penalty is the employer&apos;s liability, not yours, but a late Form 16 can still compress the time you have to review and file your own return before the ITR due date.</p>

              <h2>Filing Your ITR Without Waiting on Form 16</h2>
              <p>A delayed or missing Form 16 is not a reason to delay your own filing. You can reconstruct the required figures from your monthly payslips, the salary structure your employer shared at the start of the year, and Form 26AS/AIS for the TDS side. This takes more manual reconciliation than working off a ready-made Form 16, but it is entirely workable, and it is the safer option if the ITR due date is approaching and the employer still has not issued the certificate.</p>

              <h2>Common Mistakes Taxpayers Make With Form 16</h2>
              <ul>
                <li><strong>Treating Part B deductions as final without proof:</strong> if you submitted proofs late in the year, some declared deductions in Part B may not have been fully verified; keep your own receipts regardless.</li>
                <li><strong>Ignoring income from a previous employer:</strong> if you switched jobs during the year, each employer issues its own Form 16 and you need to combine both when computing total taxable income; a single employer&apos;s Form 16 will understate your total income.</li>
                <li><strong>Not checking the regime assumption:</strong> confirm which regime your employer computed TDS under, since that determines whether HRA and Chapter VI-A deductions were factored in at all during the year.</li>
              </ul>
              <p>Once you have your Form 16 reconciled against Form 26AS/AIS, the actual ITR filing is largely a matter of transposing verified figures correctly into the right schedule for your income type.</p>
            </div>

            <PostCTA
            heading="Need help reconciling Form 16 and filing your ITR correctly?"
            description="We review Form 16 against Form 26AS/AIS, sort out mismatches with employers, and file accurate returns for salaried clients every year."
            secondaryLabel="Explore Our Services"
            secondaryHref="/services"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/hra-exemption-calculation-documents-needed" style={{ color: 'var(--primary)', fontWeight: 600 }}>HRA Exemption: Calculation &amp; Documents Needed</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C: Complete List of Eligible Investments</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-27q-tds-return-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 27Q: TDS Return Filing Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

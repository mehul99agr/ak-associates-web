import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'TDS on Salary: Section 192 & Form 24Q Explained',
  description: 'How employers deduct TDS on salary under Section 192, average-rate computation, old vs new regime declarations, Form 24Q filing, and the Income Tax Act 2025 renumbering to Section 392/402 and Form 138.',
  keywords: [
    'section 192 TDS on salary', 'form 24Q', 'TDS on salary india', 'form 24Q due date',
    'employer TDS deduction salary', 'section 192 income tax act', 'form 24Q quarterly return',
    'TDS salary old vs new regime',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-on-salary-section-192-form-24q' },
  openGraph: {
    title: 'TDS on Salary: Section 192 & Form 24Q Explained',
    description: 'Average-rate TDS computation on salary, old vs new regime declarations, Form 24Q quarterly filing, and the new Act renumbering.',
    url: 'https://agrawalkhandelwal.com/blog/tds-on-salary-section-192-form-24q',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDS on Salary: Section 192 & Form 24Q Explained',
    description: 'How employers compute and deposit TDS on salary, and file Form 24Q quarterly. Now Section 392/402 and Form 138.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TDS on Salary: Section 192 & Form 24Q Explained', 'tds-on-salary-section-192-form-24q')

const articleLd = buildArticleLd({
  headline: 'TDS on Salary: Section 192 & Form 24Q Explained',
  description: 'How employers deduct TDS on salary under Section 192 using the average-rate method, old vs new tax regime declarations, quarterly Form 24Q filing, and the Income Tax Act 2025 renumbering.',
  datePublished: '2026-08-05',
  slug: 'tds-on-salary-section-192-form-24q',
})

const faqs: [string, string][] = [
  ['What is Section 192 of the Income Tax Act?', 'Section 192 requires every employer to deduct tax at source on salary paid to an employee, computed at the average rate of income tax applicable to the employee\'s estimated annual income for that financial year. Under the Income Tax Act 2025, this obligation is now contained in Section 392, read with Section 402 for the computation mechanics.'],
  ['How is TDS on salary calculated under Section 192?', 'The employer estimates the employee\'s total salary income for the year, allows eligible deductions and exemptions based on the regime the employee has opted into, computes the annual tax payable, divides it by the number of months of employment remaining in the year, and deducts that average monthly amount from each salary payment. The rate is recalculated whenever the estimate changes, for example due to a mid-year salary revision or a late declaration of investments.'],
  ['What is Form 24Q and is it still called that?', 'Form 24Q is the quarterly TDS return employers file to report tax deducted on salary payments. Under the Income Tax Act 2025 and the corresponding return-form changes effective FY 2026-27, Form 24Q has been renumbered to Form 138. Employers should reference the new form number in current filings while understanding it covers the same salary-TDS reporting purpose as the earlier Form 24Q.'],
  ['What happens if an employee does not submit investment proofs on time?', 'If an employee fails to submit proof of deductions or a regime declaration in time, the employer is entitled to deduct TDS based on the default new tax regime, or based on only the exemptions and deductions actually substantiated. The employee can still claim any missed deductions at the time of filing their own income tax return and claim a refund of excess TDS if applicable.'],
  ['Can an employee choose between the old and new tax regime for TDS on salary?', 'Yes. An employee can intimate their employer of the regime they wish to have TDS computed under for that financial year; the new tax regime is the default if no intimation is made. This choice for TDS purposes does not bind the employee\'s final regime choice when filing the return, but a mismatch can result in additional tax payable or refund at the return-filing stage.'],
  ['What are the due dates for filing Form 24Q (now Form 138)?', 'Form 24Q/Form 138 is filed quarterly: for FY 2026-27, Q1 (April-June) is due July 31, Q2 (July-September) is due October 31, Q3 (October-December) is due January 31, and Q4 (January-March), which also generates Form 16 for employees, is due May 31 following the financial year end.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function TDSSalarySection192Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                TDS on Salary: Section 192 and Form 24Q Explained
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 5, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Every employer must deduct TDS on salary using the <strong>average rate method</strong>, not a flat percentage, recomputed whenever the employee&apos;s estimated annual income changes.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Section 192 is now <strong>Section 392, read with Section 402</strong>, under the Income Tax Act 2025.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 24Q has been renumbered to Form 138</strong> effective FY 2026-27, but the quarterly filing obligation and content remain the same.</li>
                    <li style={{ marginBottom: 0 }}>Q4&apos;s Form 24Q/138 also generates each employee&apos;s Form 16 and is due May 31 following the financial year.</li>
                  </ul>
                </div>

                <p>Unlike most other TDS provisions that apply a fixed percentage to a payment, Section 192 requires the employer to act almost like a mini tax assessor for each employee: estimating annual income, applying the correct slab rates and regime, and deducting an average monthly amount that should, ideally, leave the employee with little or no tax payable or refundable at year-end. Getting this computation right, and filing the resulting quarterly return correctly, is one of the most operationally involved TDS obligations any employer carries.</p>

                <h2>How Section 192 TDS Is Computed</h2>
                <p>At the start of the financial year (or when employment begins), the employer estimates the employee&apos;s total salary income for the full year, including any perquisites and profits in lieu of salary. Based on the tax regime the employee has opted for, the employer reduces eligible deductions and exemptions, such as standard deduction, house rent allowance where the old regime is chosen, and Chapter VI-A deductions substantiated by proof. Tax is computed on the resulting estimated total income at the applicable slab rates, and the resulting annual tax figure (including cess and any applicable surcharge) is divided by the number of remaining months in the employee&apos;s tenure for that year to arrive at the average monthly TDS.</p>
                <p>This average rate is not static. Whenever the estimate changes, whether due to a salary increment, a bonus, a job change during the year, or a late declaration of investments or a home loan, the employer recalculates the annual liability and adjusts the TDS for the remaining months so that, by the end of the year, the cumulative deduction closely tracks the employee&apos;s actual tax liability.</p>

                <h2>Old Regime vs New Regime for TDS Purposes</h2>
                <p>An employee can intimate the employer, typically at the start of the year or before the first salary payment, of the tax regime they wish to have TDS computed under. If no intimation is made, the employer must deduct TDS based on the default new tax regime. This intimation only affects how TDS is computed during the year; the employee retains the ability to choose a different regime when filing their own income tax return, though a mismatch between the regime used for TDS and the regime chosen at filing can result in additional tax payable, or a refund, once the return is processed.</p>

                <h2>Missing or Late Investment Declarations</h2>
                <p>Employees are usually asked to submit a declaration of proposed investments and expenses early in the year, followed by proof closer to year-end. If proofs are not submitted on time, the employer is entitled to deduct TDS without allowing the corresponding deduction, or based on the new regime default, rather than accepting an unverified claim. This can result in higher TDS during the year than the employee&apos;s actual final liability; any excess can be recovered by the employee by claiming the deduction directly in their income tax return and receiving a refund. Employers should retain documentation of what was declared, what was substantiated, and when, since this is often scrutinised in a <Link href="/blog/how-to-file-itr-online-salaried-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>salaried employee&apos;s ITR filing</Link> reconciliation.</p>

                <h2>Depositing TDS and Filing Form 24Q</h2>
                <p>TDS deducted on salary must be deposited with the government by the 7th of the following month (except for March, where the due date is April 30), using the appropriate challan. Separately, the employer must file a quarterly return reporting the salary paid and TDS deducted for each employee. This return has historically been called <strong>Form 24Q</strong>. Under the Income Tax Act 2025 and the accompanying return-form restructuring effective for FY 2026-27, Form 24Q has been renumbered to <strong>Form 138</strong>; the quarterly filing cadence and the underlying reporting requirements (employee-wise salary, deductions claimed, and tax deducted) remain the same, only the form number and reference in the rules have changed.</p>
                <p>The four quarterly due dates for FY 2026-27 are July 31 (Q1), October 31 (Q2), January 31 (Q3), and May 31 (Q4). The Q4 filing is the most consequential of the four, because it consolidates the full year&apos;s salary and TDS details and is used to generate <strong>Form 16</strong>, the annual TDS certificate every employee needs to file their own return.</p>

                <h2>Consequences of Short Deduction or Late Deposit</h2>
                <p>An employer that fails to deduct TDS correctly, deducts but fails to deposit it, or files the quarterly return late faces interest, late fees, and potential disallowance of the corresponding salary expense in the employer&apos;s own tax computation, in addition to being treated as an assessee in default for the shortfall. Because the average-rate computation depends on estimates that change through the year, employers should build in a mid-year and pre-Q4 review to true up TDS before the final quarter, rather than discovering a large shortfall only when Form 16 is being generated.</p>

                <h2>Section 192 Under the Income Tax Act 2025</h2>
                <p>The obligation to deduct tax on salary, previously Section 192, is now housed in <strong>Section 392</strong> of the Income Tax Act 2025, with the detailed computation mechanics (including the average rate method and regime-based adjustments) set out under <strong>Section 402</strong>. The substance of the provision, deduct at the average rate on estimated annual salary income, recompute as estimates change, has not been altered; only the section numbering and the corresponding return form (24Q to Form 138) have changed for filings from FY 2026-27 onward.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with payroll TDS compliance?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help employers set up accurate Section 192 TDS computation, regime handling, and quarterly Form 24Q (now Form 138) filing.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-rent-section-194ib-tenants-deduct" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Rent Under Section 194-IB</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/how-to-file-itr-online-salaried-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>How to File ITR Online: Salaried Employee Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-16-explained-how-to-read-file-itr" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 16 Explained: How to Read and File Your ITR</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Slabs FY 2026-27: Old vs New Regime</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

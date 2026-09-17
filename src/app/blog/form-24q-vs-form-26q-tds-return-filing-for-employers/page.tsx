import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'Form 24Q vs Form 26Q: TDS Return Filing for Employers' },
  description: 'The difference between Form 24Q (salary TDS) and Form 26Q (non-salary TDS), quarterly due dates, and how both are renumbered as Form 138 and Form 140 under the Income Tax Act 2025 for FY 2026-27.',
  keywords: [
    'Form 24Q vs Form 26Q', 'TDS return filing employer', 'Form 24Q salary TDS',
    'Form 26Q non-salary TDS', 'TDS return due date FY 2026-27', 'Form 138 Form 140 TDS',
    'quarterly TDS return filing', 'TDS return late filing fee',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-24q-vs-form-26q-tds-return-filing-for-employers' },
  openGraph: {
    title: 'Form 24Q vs Form 26Q: TDS Return Filing for Employers',
    description: 'Which TDS return an employer files for salary vs non-salary payments, quarterly due dates, and the new Form 138/140 numbering for FY 2026-27.',
    url: 'https://agrawalkhandelwal.com/blog/form-24q-vs-form-26q-tds-return-filing-for-employers',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 24Q vs Form 26Q: TDS Return Filing for Employers',
    description: 'Form 24Q (salary TDS) vs Form 26Q (non-salary TDS): due dates, contents, and the new Form 138/140 numbering.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Form 24Q vs Form 26Q: TDS Return Filing for Employers', 'form-24q-vs-form-26q-tds-return-filing-for-employers')

const articleLd = buildArticleLd({
  headline: 'Form 24Q vs Form 26Q: TDS Return Filing for Employers',
  description: 'The difference between Form 24Q (salary TDS) and Form 26Q (non-salary TDS), quarterly due dates, and their renumbering as Form 138 and Form 140 under the Income Tax Act 2025 for FY 2026-27.',
  datePublished: '2026-11-22',
  slug: 'form-24q-vs-form-26q-tds-return-filing-for-employers',
})

const faqs: [string, string][] = [
  [
    'What is the basic difference between Form 24Q and Form 26Q?',
    'Form 24Q is the quarterly TDS return an employer files for tax deducted at source on salary payments to employees. Form 26Q is the quarterly TDS return filed for tax deducted at source on payments other than salary made to residents, such as professional fees, contractor payments, rent, interest, and commission. An employer that also makes non-salary payments to residents (for example, paying a contractor or a consultant) needs to file both returns for the relevant quarters, not just Form 24Q.',
  ],
  [
    'Have Form 24Q and Form 26Q been renamed?',
    'Yes. Under the Income Tax Act 2025, effective for FY 2026-27 filings, Form 24Q has been renumbered as Form 138 and Form 26Q has been renumbered as Form 140. The underlying purpose and reporting content of each form remain the same; only the form numbers used in the return-filing utility and correspondence have changed. Using the old form numbers when filing for FY 2026-27 periods can cause the return to be rejected, so employers and their payroll or tax teams should update references to the new numbering.',
  ],
  [
    'What are the due dates for filing quarterly TDS returns?',
    'Both Form 24Q/138 and Form 26Q/140 follow the same quarterly filing calendar: July 31 for Q1 (April-June), October 31 for Q2 (July-September), January 31 for Q3 (October-December), and May 31 for Q4 (January-March, which also includes annual salary reconciliation for Form 24Q/138). These dates apply for the return itself; the underlying TDS deposit to the government has its own separate, earlier monthly due date.',
  ],
  [
    'What happens if a TDS return is filed late?',
    'A late fee under Section 234E applies at Rs 200 per day of delay, continuing to accrue until the return is filed, though it is capped at the total amount of TDS deductible for that quarter. Separately, the assessing officer can also levy a penalty under Section 271H, ranging from Rs 10,000 up to Rs 1,00,000, for failure to file the TDS return within the prescribed time or for filing incorrect information, though this penalty is discretionary and generally not imposed if the return is filed (with the late fee paid) before the completion of one year from the due date.',
  ],
  [
    'Does Form 24Q require anything different from Form 26Q in terms of employee details?',
    'Yes. Form 24Q has two annexures: Annexure I, filed every quarter, captures deductee-wise salary TDS details, while Annexure II, filed only with the Q4 return, captures the full annual salary breakup for each employee, including deductions claimed and the final tax computation for the year. Form 26Q does not have this annual salary-reconciliation component since it covers one-off or periodic non-salary payments rather than a running annual salary computation for a fixed set of employees.',
  ],
  [
    'Can a single deductor file both Form 24Q and Form 26Q for the same quarter?',
    'Yes, and many businesses need to. A company that pays salaries to employees and also makes payments like professional fees, rent, or contractor payments to residents in the same quarter is required to file both Form 24Q/138 (for the salary TDS) and Form 26Q/140 (for the non-salary TDS) for that quarter, using its Tax Deduction Account Number (TAN), which stays the same across both forms.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Form24Q26QBlog() {
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
              <span className="section-badge">Payroll & Labour Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Form 24Q vs Form 26Q: TDS Return Filing for Employers
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published November 22, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 24Q</strong> is for TDS on salary; <strong>Form 26Q</strong> is for TDS on non-salary payments to residents (contractors, professionals, rent, interest).</li>
                    <li style={{ marginBottom: '0.4rem' }}>For FY 2026-27, both are renumbered under the Income Tax Act 2025: Form 24Q is now <strong>Form 138</strong>, Form 26Q is now <strong>Form 140</strong>. Same content, new numbers.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Both follow the same quarterly calendar: <strong>July 31, October 31, January 31, and May 31</strong>.</li>
                    <li style={{ marginBottom: 0 }}>Late filing costs Rs 200/day under Section 234E, plus a possible Section 271H penalty up to Rs 1,00,000.</li>
                  </ul>
                </div>

                <p>Almost every employer with staff on payroll files Form 24Q every quarter without a second thought. Where confusion tends to creep in is the moment a business also starts paying professional fees, rent, or contractor invoices, because that TDS goes on an entirely separate return, Form 26Q, filed against the same TAN but reporting a different category of deduction altogether. Getting the two mixed up, or missing one of them because "the TDS return" was treated as a single annual task rather than two distinct quarterly obligations, is one of the more common payroll compliance slips for growing businesses.</p>

                <h2>Form 24Q: TDS on Salary</h2>
                <p>Form 24Q is the quarterly return an employer files to report tax deducted at source on salary paid to employees under Section 192 of the Income Tax Act (read with Section 402 for computation of the average rate of tax), renumbered as Section 392 under the Income Tax Act 2025. It has two components:</p>
                <ul>
                  <li><strong>Annexure I:</strong> Filed with every quarterly return, this captures deductee-wise (employee-wise) details of salary paid and tax deducted during that quarter.</li>
                  <li><strong>Annexure II:</strong> Filed only with the Q4 return (for the January-March quarter), this captures the complete annual salary breakup for each employee, including all exemptions, deductions under Chapter VI-A, and the final computed tax liability for the full financial year. This annexure effectively reconciles the whole year's payroll TDS in one place.</li>
                </ul>
                <p>Because Form 24Q drives the salary figures and TDS credit that show up in an employee's Form 16 and their pre-filled ITR data, accuracy here matters well beyond the employer's own compliance record; errors flow directly into every employee's individual tax filing.</p>

                <h2>Form 26Q: TDS on Non-Salary Payments to Residents</h2>
                <p>Form 26Q covers TDS deducted on payments other than salary made to resident deductees, most commonly under sections covering professional or technical fees, contractor payments, rent, commission, and interest other than interest on securities. There is no annual reconciliation annexure equivalent to Form 24Q's Annexure II, since Form 26Q is reporting discrete transaction-level deductions across vendors and payees rather than a running annual computation for a fixed employee base.</p>
                <p>A business that pays salaries and also engages contractors, consultants, or landlords needs to run both returns in parallel every quarter, tracking two separate sets of deductee-wise data against the same TAN.</p>

                <h2>New Form Numbers Under the Income Tax Act 2025</h2>
                <p>Effective for FY 2026-27, the Income Tax Act 2025 renumbers both forms as part of a broader renumbering of forms and sections across the Act:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Old Form Number</th><th style={thStyle}>New Form Number (FY 2026-27+)</th><th style={thStyle}>Covers</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Form 24Q</td><td style={tdStyle}>Form 138</td><td style={tdStyle}>TDS on salary payments</td></tr>
                      <tr><td style={tdAltStyle}>Form 26Q</td><td style={tdAltStyle}>Form 140</td><td style={tdAltStyle}>TDS on non-salary payments to residents</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>The reporting content, deductee-wise structure, and filing mechanism remain fundamentally the same; only the form numbers referenced in the return utility, acknowledgements, and correspondence have changed. Payroll teams and tax software configured to reference the old numbers should be updated, since filings for FY 2026-27 quarters that still cite the old numbering risk rejection or processing delays.</p>

                <h2>Filing Due Dates</h2>
                <p>Both forms, old or new numbering, follow an identical quarterly filing calendar:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Quarter</th><th style={thStyle}>Period</th><th style={thStyle}>Return Due Date</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Q1</td><td style={tdStyle}>April - June</td><td style={tdStyle}>July 31</td></tr>
                      <tr><td style={tdAltStyle}>Q2</td><td style={tdAltStyle}>July - September</td><td style={tdAltStyle}>October 31</td></tr>
                      <tr><td style={tdStyle}>Q3</td><td style={tdStyle}>October - December</td><td style={tdStyle}>January 31</td></tr>
                      <tr><td style={tdAltStyle}>Q4</td><td style={tdAltStyle}>January - March</td><td style={tdAltStyle}>May 31</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>These are the return-filing due dates, separate from the monthly TDS deposit due date (generally the 7th of the following month, with a relaxed deadline for March deposits). A business can be fully current on depositing TDS every month and still be non-compliant if the quarterly return itself is filed late.</p>

                <h2>Penalties for Late or Incorrect Filing</h2>
                <p>Two separate consequences apply to a delayed or incorrect TDS return:</p>
                <ul>
                  <li><strong>Late fee under Section 234E:</strong> Rs 200 for every day of delay, continuing to accrue from the due date until the return is actually filed, capped at the total amount of TDS deductible for that quarter. This is a mandatory fee, not discretionary.</li>
                  <li><strong>Penalty under Section 271H:</strong> The assessing officer may separately levy a penalty ranging from Rs 10,000 to Rs 1,00,000 for failure to file the return within the prescribed time, or for furnishing incorrect information in it. In practice, this penalty is generally not imposed if the deductor files the return (along with the Section 234E late fee and any due tax/interest) within one year of the due date, but the exposure exists and is discretionary on the officer, not automatically waived.</li>
                </ul>
                <p>Beyond the direct penalty, a late or error-filled TDS return delays the corresponding TDS credit reflecting in the deductee's Form 26AS and <Link href="/blog/annual-information-statement-ais-vs-form-26as-what-is-the-difference" style={{ color: 'var(--primary)', fontWeight: 600 }}>AIS</Link>, which creates downstream friction for employees and vendors trying to file their own returns and claim credit for tax already deducted from their payments.</p>

                <h2>Getting the Process Right</h2>
                <p>For most businesses, the practical fix is to treat Form 24Q/138 and Form 26Q/140 as two separate, parallel quarterly workflows rather than a single "TDS return" task: maintain distinct deductee-wise trackers for salary versus non-salary payments, reconcile TDS deposited each month against what will be reported in the quarter's return before the due date, and build in a buffer before July 31/October 31/January 31/May 31 rather than filing at the deadline. This fits into the same broader payroll and vendor-payment discipline covered in our <Link href="/blog/payroll-compliance-checklist-for-growing-startups-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>payroll compliance checklist</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help staying current on TDS return filing?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 24Q/138 and Form 26Q/140 filing, TDS reconciliation, and correction returns for businesses of every size.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/payroll-compliance-checklist-for-growing-startups-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Payroll Compliance Checklist for Growing Startups in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/minimum-wages-act-compliance-for-employers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Minimum Wages Act Compliance for Employers</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-43bh-msme-payment-disallowance-buyers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 43B(h): MSME Payment Disallowance Rules for Buyers</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax &amp; Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

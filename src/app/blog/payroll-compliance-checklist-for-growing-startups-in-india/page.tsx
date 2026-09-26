import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Payroll Compliance Checklist for Growing Startups in India' },
  description: 'A practical payroll compliance checklist for growing Indian startups. Learn about EPF and ESI triggers, TDS on salary, professional tax, and labour laws.',
  keywords: [
    'payroll compliance checklist',
    'startup payroll India',
    'EPF registration trigger',
    'TDS on salary section 192',
    'professional tax Maharashtra',
    'labor law compliance startups',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/payroll-compliance-checklist-for-growing-startups-in-india' },
  openGraph: {
    title: 'Payroll Compliance Checklist for Growing Startups in India',
    description: 'A practical payroll compliance checklist for growing Indian startups. Learn about EPF and ESI triggers, TDS on salary, professional tax, and labour laws.',
    url: 'https://agrawalkhandelwal.com/blog/payroll-compliance-checklist-for-growing-startups-in-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Compliance Checklist for Growing Startups in India',
    description: 'A practical payroll compliance checklist for growing Indian startups. Learn about EPF and ESI triggers, TDS on salary, professional tax, and labour laws.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Payroll Compliance Checklist for Growing Startups in India', 'payroll-compliance-checklist-for-growing-startups-in-india')

const articleLd = buildArticleLd({
  headline: 'Payroll Compliance Checklist for Growing Startups in India',
  description: 'A practical payroll compliance checklist for growing Indian startups. Learn about EPF and ESI triggers, TDS on salary, professional tax, and labour laws.',
  datePublished: '2026-09-13',
  slug: 'payroll-compliance-checklist-for-growing-startups-in-india',
})

const faqs: [string, string][] = [
  [
    'What is the penalty for late payment of EPF contributions?',
    'EPF contributions must be deposited by the 15th of the subsequent month. Delay in deposits attracts interest at 12% per annum under Section 7Q and damages ranging from 5% to 25% per annum (subject to regulatory limits) under Section 14B of the EPF Act.',
  ],
  [
    'Is ESI mandatory for all employees in a startup?',
    'No. ESI is mandatory only for establishments with 10 or more employees, and within those establishments, it applies only to individual employees whose monthly gross wages are Rs 21,000 or less. If an employee\'s salary exceeds Rs 21,000, they are out of the ESI coverage.',
  ],
  [
    'What is the difference between PTRC and PTEC in Professional Tax?',
    'PTRC (Professional Tax Registration Certificate) is obtained by an employer to deduct and deposit professional tax from employees\' salaries. PTEC (Professional Tax Enrolment Certificate) is obtained by the business entity itself to pay its own annual professional tax (which is Rs 2,500 in Maharashtra).',
  ],
  [
    'Are DPIIT recognized startups completely exempt from labour laws?',
    'No, startups are not exempt from the laws themselves. However, recognized startups are allowed to self-certify their compliance online for up to 9 labour laws for a period of 3 to 5 years, shielding them from routine, unannounced physical inspections.',
  ],
  [
    'Can an employee opt out of EPF contributions?',
    'If an employee\'s basic salary plus dearness allowance exceeds Rs 15,000 per month at the time of joining their first job, they can opt out of EPF by filing Form 11 as an "excluded employee". However, if they have ever been a member of the EPF in a previous job, they cannot opt out and must continue contributing.',
  ],
  [
    'Is a POSH committee required if all our employees are male?',
    'Yes. Under the POSH Act, 2013, any office or establishment with 10 or more employees must set up an Internal Committee (IC), regardless of the current gender ratio or composition of the workforce. Compliance is based strictly on employee headcount.',
  ]
]

const faqLd = buildFaqLd(faqs)


export default function PayrollComplianceChecklistForGrowingStartupsInIndiaBlog() {
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
                Payroll Compliance Checklist for Growing Startups in India
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 13, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <p style={{ margin: 0 }}>As an Indian startup scales from a few founders to over 50 employees, payroll compliance transitions from simple bank transfers to complex statutory mandates. This guide provides a practical checklist for managing EPF, ESI, TDS, professional tax, and workplace compliance at each headcount milestone, while leveraging Startup India self-certification.</p>
                </div>

                <h2>Introduction: From Spreadsheets to Statutory Compliance</h2>
<p>In the early stages of a startup, founders are naturally focused on finding product-market fit, acquiring customers, and raising capital. Human resources and payroll are often managed informally, sometimes using basic spreadsheets and manual bank transfers at the end of each month. However, as your team grows from a few close peers to 10, 20, and then beyond 50 employees, payroll is no longer just about sending salaries. It rapidly morphs into a complex web of statutory compliance involving multiple government departments, monthly deductions, retirement benefits, and social security contributions.</p>
<p>Failing to comply with Indian payroll regulations can result in heavy interest, monetary penalties, and even legal action against directors. Conversely, a streamlined and compliant payroll system builds trust among employees, establishes institutional credibility, and ensures a clean record during venture capital due diligence. This comprehensive guide provides a practical compliance checklist for Indian startups as they scale through various headcount milestones.</p>

<h2>Milestone 1: The Core Setup (1 to 9 Employees)</h2>
<p>Even if you have just one or two employees on your payroll, certain fundamental compliances apply from day one. At this stage, your focus must be on local business registration, professional tax, and basic income tax deductions.</p>

<h3>1. Shops and Establishments Act Registration</h3>
<p>The Shops and Establishments Act is governed by individual state governments and regulates working hours, weekly holidays, leave policies, and employment terms. In Maharashtra, for instance, this is managed under the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017. Businesses must register their office premises within 30 days of commencing operations. For micro-enterprises with fewer than 10 employees, a simple online intimation is sufficient in many states, while larger teams require a formal registration certificate.</p>

<h3>2. Tax Deducted at Source (TDS) on Salaries - Section 192</h3>
<p>Under Section 192 of the Income Tax Act, every employer is responsible for deducting tax at source (TDS) from employee salaries if their estimated total annual income exceeds the basic exemption limit under their chosen tax regime. Key requirements include:</p>
<ul>
  <li><strong>Declaration:</strong> At the start of the financial year, employees must declare whether they are opting for the Old Tax Regime or the New Tax Regime, along with their planned tax-saving investments.</li>
  <li><strong>Calculation:</strong> The employer must compute the estimated annual income, apply the standard deduction (currently Rs 75,000 under the New Regime and Rs 50,000 under the Old Regime), deduct eligible exemptions, calculate the tax liability, and deduct the TDS in equal monthly installments.</li>
  <li><strong>Filing and Issuance:</strong> TDS deducted must be deposited to the government treasury by the 7th of the following month (except for March, where the deadline is April 30). Employers must file quarterly TDS returns in Form 24Q and issue Form 16 to employees by June 15 of the following financial year.</li>
</ul>

<h3>3. Professional Tax (PT) in Maharashtra</h3>
<p>Professional Tax is a state-level tax levied on professions, trades, and employments. If you are operating from Maharashtra, you must register under two categories:</p>
<ul>
  <li><strong>PTRC (Professional Tax Registration Certificate):</strong> This is required by the employer to deduct and deposit Professional Tax from employee salaries. In Maharashtra, the standard deduction is up to Rs 2,500 per annum, typically collected as Rs 175 per month (and Rs 200 in February) for eligible employees. Women earning up to a certain threshold are exempt from PT in Maharashtra, which is a key state-specific relief.</li>
  <li><strong>PTEC (Professional Tax Enrolment Certificate):</strong> This is the tax paid by the startup itself as a corporate entity, which is a fixed annual fee of Rs 2,500.</li>
</ul>

<h2>Milestone 2: Crossing the Threshold (10 to 19 Employees)</h2>
<p>Once your startup hits a headcount of 10 employees, several social security and workplace welfare laws are triggered. This is a critical transition phase where informal systems must give way to structured policies.</p>

<h3>1. Employees' State Insurance (ESI) Registration</h3>
<p>The ESI Act, 1948 provides medical and sickness benefits to employees. ESI registration is mandatory for any non-seasonal factory or establishment employing 10 or more people. In Maharashtra, shops and commercial establishments must register once headcount reaches 10. Key compliance points include:</p>
<ul>
  <li><strong>Eligibility:</strong> ESI applies only to employees whose gross monthly wages are Rs 21,000 or less.</li>
  <li><strong>Contributions:</strong> The employer contributes 3.25% of the wages, and the employee contributes 0.75%, making a total contribution of 4.0% of the employee's gross salary.</li>
  <li><strong>Filing:</strong> Contributions must be deposited online on the ESIC portal within 15 days of the following month, accompanied by monthly return filings.</li>
</ul>

<h3>2. Prevention of Sexual Harassment (POSH) Committee</h3>
<p>Under the POSH Act, 2013, every organization with 10 or more employees must set up an Internal Committee (IC) to address complaints of sexual harassment at the workplace. The IC must have a senior woman employee as the Presiding Officer, at least two employee members committed to the cause, and one external member from an NGO or legal background. Non-compliance can lead to severe fines and cancellation of business licenses.</p>

<h3>3. Payment of Gratuity Act, 1972 (Accrual Trigger)</h3>
<p>The Gratuity Act is applicable once an establishment reaches 10 employees. Although an employee must complete 5 years of continuous service to receive gratuity, the liability begins to accrue from their first year of employment. Startups must provision for this gratuity liability in their balance sheets to reflect true financial health, and should ideally explore gratuity funding schemes to avoid sudden cash outflows in the future.</p>

<h2>Milestone 3: Scaling Up (20 to 49 Employees)</h2>
<p>Reaching a headcount of 20 employees is a massive milestone, primarily because it brings your startup under the mandatory coverage of India's primary retirement benefit scheme.</p>

<h3>1. Employees' Provident Fund (EPF) Registration</h3>
<p>The EPF and Miscellaneous Provisions Act, 1952 becomes mandatory for any establishment employing 20 or more people. Key compliance mandates under EPF are:</p>
<ul>
  <li><strong>Eligibility:</strong> Mandatory for employees with a basic salary + dearness allowance of up to Rs 15,000 per month. Employees earning above this can opt out at the start of their career, though many startups choose to extend EPF benefits to all employees.</li>
  <li><strong>Contributions:</strong> Both the employer and the employee contribute 12% of the basic salary (plus dearness allowance). Out of the employer's 12% contribution, 8.33% goes to the Employees' Pension Scheme (EPS) and the remaining 3.67% goes to the EPF account.</li>
  <li><strong>Administrative Charges:</strong> Employers also pay 0.5% as EPF admin charges and 0.5% towards the Employees' Deposit Linked Insurance (EDLI) scheme.</li>
  <li><strong>Deadlines:</strong> Monthly EPF contributions must be deposited by the 15th of the following month. Delay in payment attracts interest under Section 7Q and damages under Section 14B.</li>
</ul>

<h2>Milestone 4: Large-Scale Operations (50+ Employees)</h2>
<p>With more than 50 employees on board, your startup is now considered an established corporate entity. At this stage, compliance becomes a dedicated corporate function.</p>
<ul>
  <li><strong>Labour Law Registers:</strong> You are required to maintain exhaustive registers, including Muster Rolls, Register of Wages, Register of Fines, and Register of Overtime, either physically or electronically.</li>
  <li><strong>Contract Labour Regulation:</strong> If you hire contract staff (such as security guards or housekeeping) through agencies, and the total number of contract workers exceeds 20 (or 50 in some states), you must obtain a registration certificate as a Principal Employer.</li>
</ul>

<h2>DPIIT Startup India Benefits: A Strategic Relief</h2>
<p>To support early-stage ventures, the Department for Promotion of Industry and Internal Trade (DPIIT) offers significant compliance relaxation. Startups recognized under the Startup India initiative can self-certify compliance for up to 9 labour laws (including the EPF Act, ESI Act, Gratuity Act, and Contract Labour Act) for a period of 3 to 5 years from incorporation. This means no random inspections or audits will be conducted, provided the startup files regular self-certification returns online through the Shram Suvidha portal.</p>

<h2>Summary Table of Headcount Triggers</h2>
<table>
  <thead>
    <tr>
      <th>Headcount Trigger</th>
      <th>Applicable Law / Compliance</th>
      <th>Key Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1+ Employee</td>
      <td>Shops &amp; Establishments, TDS (Section 192), Professional Tax</td>
      <td>Local office registration, PTRC/PTEC registration (e.g. Maharashtra), monthly salary TDS deductions.</td>
    </tr>
    <tr>
      <td>10+ Employees</td>
      <td>ESI Act, POSH Act, Gratuity Act</td>
      <td>ESIC registration (wages &lt;= Rs 21,000), Internal Committee (IC) setup for POSH, gratuity accrual provisioning.</td>
    </tr>
    <tr>
      <td>20+ Employees</td>
      <td>EPF Act</td>
      <td>Provident fund registration, monthly 12% matching contributions for eligible employees.</td>
    </tr>
    <tr>
      <td>50+ Employees</td>
      <td>Comprehensive Labour Registers, Contract Labour Act</td>
      <td>Principal Employer registration if hiring contract labour, detailed automated statutory registers.</td>
    </tr>
  </tbody>
</table>

<h2>Conclusion: Automating Payroll Compliance</h2>
<p>As a founder, your focus should be on building great products and scaling your business. Trying to manually navigate ESI, EPF, TDS, and Professional Tax is not only a poor use of time but also highly risky given the legal stakes. Partnering with professional advisory firms like Agrawal Khandelwal &amp; Associates LLP ensures that your payroll compliance is fully managed by experts. From initial registrations to monthly deductions, filing returns, and managing DPIIT self-certifications, our team handles the compliance so you can focus on growth.</p>

                <p>Need help applying this to your specific situation? Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>advisory services</Link> cover compliance planning for growing businesses.</p>
              </div>

              <PostCTA
            heading="Have a Question on This?"
            description="Book a free consultation with our partners, or message us on WhatsApp for a quick answer."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20compliance%20question."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

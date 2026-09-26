import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Gratuity Payment Rules: Eligibility & Tax Exemption Limits' },
  description: 'Learn about the Payment of Gratuity Act 1972 in India. Understand the 5-year eligibility rule, the calculation formula, and the Rs 20 lakh tax ceiling.',
  keywords: [
    'gratuity payment rules',
    'gratuity eligibility 5 years',
    'gratuity formula India',
    'gratuity tax exemption ceiling',
    'gratuity trust insurance',
    'Payment of Gratuity Act 1972',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gratuity-payment-rules-eligibility-and-tax-exemption-limits' },
  openGraph: {
    title: 'Gratuity Payment Rules: Eligibility & Tax Exemption Limits',
    description: 'Learn about the Payment of Gratuity Act 1972 in India. Understand the 5-year eligibility rule, the calculation formula, and the Rs 20 lakh tax ceiling.',
    url: 'https://agrawalkhandelwal.com/blog/gratuity-payment-rules-eligibility-and-tax-exemption-limits',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratuity Payment Rules: Eligibility & Tax Exemption Limits',
    description: 'Learn about the Payment of Gratuity Act 1972 in India. Understand the 5-year eligibility rule, the calculation formula, and the Rs 20 lakh tax ceiling.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Gratuity Payment Rules: Eligibility & Tax Exemption Limits', 'gratuity-payment-rules-eligibility-and-tax-exemption-limits')

const articleLd = buildArticleLd({
  headline: 'Gratuity Payment Rules: Eligibility & Tax Exemption Limits',
  description: 'Learn about the Payment of Gratuity Act 1972 in India. Understand the 5-year eligibility rule, the calculation formula, and the Rs 20 lakh tax ceiling.',
  datePublished: '2026-09-14',
  slug: 'gratuity-payment-rules-eligibility-and-tax-exemption-limits',
})

const faqs: [string, string][] = [
  [
    'Is gratuity payable if an employee resigns before completing 5 years?',
    'No, gratuity is not payable if the employee resigns before completing 5 years of continuous service. However, if the termination of service is due to death or permanent disablement of the employee, the 5-year requirement is waived, and gratuity is calculated based on the actual years of service completed.',
  ],
  [
    'What constitutes "Salary" for the purpose of gratuity calculation?',
    'Under the Payment of Gratuity Act, 1972, "salary" or "wages" includes only Basic Salary and Dearness Allowance (DA). It specifically excludes any other allowances, such as House Rent Allowance (HRA), special allowances, bonus, commission, overtime wages, or employer PF contributions.',
  ],
  [
    'How is the service period rounded off for gratuity calculations?',
    'Under the statutory rules, if the period of service in the last year exceeds 6 months, it is rounded off to the next higher year. For example, if an employee has worked for 7 years and 8 months, it is rounded off to 8 years. If they worked for 7 years and 5 months, it is treated as 7 years.',
  ],
  [
    'Can an employer forfeit an employee\'s gratuity?',
    'Yes, but only under specific, strict statutory conditions. Gratuity can be forfeited (fully or partially) if the employee\'s services are terminated for conduct involving violence, riotous behavior, moral turpitude, or causing willful damage or destruction to the employer\'s property. The forfeiture can only be to the extent of the damage caused, and a proper domestic inquiry and notice are mandatory.',
  ],
  [
    'Is there an exemption limit for gratuity received from multiple employers?',
    'The lifetime maximum tax-exempt limit for gratuity under Section 10(10) is Rs 20 lakh. If an employee receives gratuity from more than one employer, whether in the same financial year or in different years, the total cumulative tax exemption claimed across all employers cannot exceed the lifetime cap of Rs 20 lakh.',
  ]
]

const faqLd = buildFaqLd(faqs)


export default function GratuityPaymentRulesEligibilityAndTaxExemptionLimitsBlog() {
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
                Gratuity Payment Rules: Eligibility & Tax Exemption Limits
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 14, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <p style={{ margin: 0 }}>Gratuity is a statutory retirement benefit paid by employers under the Payment of Gratuity Act, 1972. This guide explains the five-year continuous service eligibility criteria, details the mathematical formula used for calculation, explains the current Rs 20 lakh tax exemption ceiling, and explores gratuity funding options.</p>
                </div>

                <h2>Introduction: Understanding Gratuity as an Employer</h2>
<p>As businesses grow and mature, managing long-term employee benefits becomes an essential part of financial planning and human resource management. Among these benefits, gratuity is one of the most significant statutory retirement benefits in India. Governed by the Payment of Gratuity Act, 1972, gratuity is a lump-sum amount paid by an employer to an employee as a token of appreciation for their long-term service to the organization.</p>
<p>For employers, understanding gratuity is not just about fulfilling a statutory obligation - it is about strategic financial forecasting. Gratuity liabilities build up over time, and if left unplanned, they can cause sudden, massive cash flow strains when long-term employees retire or resign simultaneously. This guide covers the eligibility rules, the mathematical formula for calculation, tax exemption limits, and how businesses can systematically fund this liability.</p>

<h2>Who is Covered Under the Payment of Gratuity Act, 1972?</h2>
<p>The Payment of Gratuity Act, 1972 applies to shops, commercial establishments, factories, mines, oilfields, plantations, ports, and railway companies. The statutory trigger is simple:</p>
<ul>
  <li><strong>The Headcount Trigger:</strong> Any establishment that has employed 10 or more people on any day of the preceding 12 months is covered under the Act.</li>
  <li><strong>Once Applicable, Always Applicable:</strong> A vital feature of this law is that once your business becomes subject to the Act, it remains covered even if your employee strength subsequently falls below 10.</li>
</ul>

<h2>Key Eligibility Criteria: The Five-Year Rule and Exceptions</h2>
<p>An employee is eligible to receive gratuity only if they meet specific criteria regarding their service duration. However, there are critical statutory exceptions that every employer and employee must understand.</p>

<h3>1. The Five Years of Continuous Service Rule</h3>
<p>To qualify for gratuity, an employee must render at least five years of continuous service with the same employer. Under Section 2A of the Act, "continuous service" is defined based on the number of working days in a year:</p>
<ul>
  <li>For non-seasonal establishments working six days a week, an employee must work for at least 240 days in a year to count it as a year of continuous service.</li>
  <li>For establishments working five days a week (which includes many modern tech startups and corporate offices), the continuous service requirement is 190 days in a year.</li>
  <li>In the final year of employment, if an employee has completed more than six months of service, it is rounded up to a full year for calculation purposes.</li>
</ul>

<h3>2. Critical Exceptions to the Five-Year Rule</h3>
<p>The mandatory condition of five years of continuous service is completely waived in two specific scenarios:</p>
<ul>
  <li><strong>Death:</strong> If an employee passes away while in active service, gratuity is payable immediately to their nominee or legal heirs, regardless of how long they worked at the company.</li>
  <li><strong>Disablement:</strong> If an employee suffers permanent disablement due to an occupational disease or an accident during employment, making them incapable of continuing work, gratuity is paid immediately.</li>
</ul>

<h2>How is Gratuity Calculated? The Mathematical Formula</h2>
<p>For employees covered under the Payment of Gratuity Act, 1972, the calculation is determined by a standard statutory formula. It is based on the employee's last drawn salary and their total years of service.</p>

<h3>The Gratuity Formula</h3>
<p><strong>Gratuity = (Last Drawn Salary * 15 * Years of Service) / 26</strong></p>

<h3>Deconstructing the Components:</h3>
<ul>
  <li><strong>Last Drawn Salary:</strong> This includes only "Basic Salary" and "Dearness Allowance (DA)". It specifically excludes all other allowances, such as House Rent Allowance (HRA), special allowances, bonus, commission, and employer contributions to EPF.</li>
  <li><strong>15:</strong> Represents 15 days of wages.</li>
  <li><strong>26:</strong> Represents the standard number of working days in a month, assuming four Sundays are non-working days. This means the daily wage is calculated as Last Drawn Salary divided by 26.</li>
  <li><strong>Years of Service:</strong> The total completed years of employment. If the service period in the final year exceeds six months, it is rounded off to the next higher year. For example, 7 years and 7 months is rounded to 8 years, while 7 years and 5 months is rounded down to 7 years.</li>
</ul>

<h3>Practical Example of Gratuity Calculation</h3>
<p>Let us consider an employee who is resigning after 8 years and 7 months of continuous service. Their last drawn monthly salary details are as follows:</p>
<ul>
  <li>Basic Salary: Rs 40,000</li>
  <li>Dearness Allowance (DA): Rs 10,000</li>
  <li>House Rent Allowance (HRA): Rs 15,000</li>
  <li>Special Allowance: Rs 10,000</li>
</ul>
<p><strong>Step 1: Calculate Eligible Salary.</strong> Only Basic and DA are included. Eligible Salary = Rs 40,000 + Rs 10,000 = Rs 50,000.</p>
<p><strong>Step 2: Determine Years of Service.</strong> 8 years and 7 months is rounded up to 9 years because the fraction exceeds six months.</p>
<p><strong>Step 3: Apply the Formula.</strong><br/>
Gratuity = (Rs 50,000 * 15 * 9) / 26<br/>
Gratuity = Rs 6,75,000 / 26 = Rs 2,59,615 (approximately).</p>

<h2>Tax Exemption Limits Under Section 10(10)</h2>
<p>Gratuity received by an employee is highly tax-efficient under Section 10(10) of the Income Tax Act. The taxation rules depend on the category of the employee:</p>
<ul>
  <li><strong>Government Employees:</strong> Gratuity received by central, state, or local government employees is fully exempt from income tax.</li>
  <li><strong>Private Sector Employees (Covered under the Act):</strong> For non-government employees whose employers are covered under the Payment of Gratuity Act, the tax-exempt amount is the least of the following three options:
    <ol>
      <li>Actual gratuity received.</li>
      <li>The statutory limit, which is currently fixed at Rs 20,00,000 (Rs 20 Lakh).</li>
      <li>The gratuity amount calculated as per the statutory formula (15/26 method).</li>
    </ol>
  </li>
  <li><strong>Private Sector Employees (Not Covered under the Act):</strong> For companies not covered under the Act, gratuity can still be paid voluntarily. The tax exemption is calculated slightly differently (using 15/30 days of average salary for each completed year of service), but the overall cap remains Rs 20 Lakh.</li>
</ul>
<p>Any gratuity paid in excess of the Rs 20 Lakh tax-exempt limit is treated as taxable income under "Income from Salaries" in the financial year of receipt.</p>

<h2>How Employers Can Manage Gratuity Liabilities</h2>
<p>For growing companies, gratuity represents a significant future cash outflow. If a startup or mid-sized enterprise does not plan for this, they might face liquidity challenges when senior employees leave. Employers have two primary methods to manage this:</p>
<ul>
  <li><strong>Pay-As-You-Go Method:</strong> The company pays gratuity out of its current cash reserves when an employee leaves. This is risky for cash flow management and is not recommended as the organization scales.</li>
  <li><strong>Funded Schemes:</strong> The employer establishes an Approved Gratuity Trust under the Income Tax Rules and purchases a Group Gratuity Scheme from an insurance provider (such as LIC, SBI Life, or other private insurers). The employer makes annual contributions to this fund based on actuarial valuations.</li>
</ul>
<p>The funded scheme is highly advantageous because contributions made by the employer (up to 8.33% of the employee's salary) are deductible as a business expense under Section 36(1)(v) of the Income Tax Act, and the interest accumulated on the fund is also tax-free.</p>

<h2>Conclusion: Strategic Gratuity Management</h2>
<p>Gratuity is not just a statutory obligation but a powerful tool to retain senior talent. Implementing an approved gratuity trust or insurance scheme ensures that your business remains compliant while building a solid, tax-deductible financial cushion for future payouts. For comprehensive guidance on setting up gratuity trusts, completing actuarial valuations, and ensuring proper tax compliance, the corporate advisory team at Agrawal Khandelwal &amp; Associates LLP is ready to support your business.</p>

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

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'ESI Registration: Applicability & Employer Compliance',
  description: 'When ESI registration applies at 10 or 20 employees, the Rs 21,000 wage ceiling, the 4% employer/employee contribution split, and the ongoing filing employers must handle.',
  keywords: [
    'ESI registration applicability', 'ESI wage ceiling 21000', 'ESI contribution rate',
    'ESIC compliance employer', 'ESI 10 employees threshold', 'employee state insurance registration',
    'ESI half yearly return', 'ESIC applicability India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/esi-registration-applicability-and-employer-compliance' },
  openGraph: {
    title: 'ESI Registration: Applicability & Employer Compliance',
    description: 'The 10/20-employee ESI threshold, the Rs 21,000 wage ceiling, the 4% contribution split, and ongoing employer compliance.',
    url: 'https://agrawalkhandelwal.com/blog/esi-registration-applicability-and-employer-compliance',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESI Registration: Applicability & Employer Compliance',
    description: 'Who is covered under ESI, the wage ceiling, the contribution rates, and what ongoing compliance looks like.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('ESI Registration: Applicability & Employer Compliance', 'esi-registration-applicability-and-employer-compliance')

const articleLd = buildArticleLd({
  headline: 'ESI Registration: Applicability & Employer Compliance',
  description: 'The employee-count threshold for ESI applicability, the Rs 21,000 wage ceiling, the 4% employer/employee contribution split, and ongoing filing obligations for employers.',
  datePublished: '2026-08-04',
  slug: 'esi-registration-applicability-and-employer-compliance',
})

const faqs: [string, string][] = [
  ['At what employee count does ESI registration apply?', 'ESI generally applies to non-seasonal factories and notified establishments employing 10 or more persons, though some states still apply a higher 20-employee threshold for certain categories of establishment. Because the applicable threshold depends on the state and the type of establishment, it is worth confirming the state-specific notification rather than assuming a single all-India number.'],
  ['Does every employee count toward the ESI headcount threshold?', 'Yes. The headcount used to test applicability includes everyone on the establishment\'s rolls, including employees who earn above the ESI wage ceiling, directors drawing a salary, and contract, casual, or agency-supplied staff working at the premises. Only after the establishment is confirmed as covered does the wage ceiling decide which specific employees actually contribute.'],
  ['What is the ESI wage ceiling and who is covered?', 'Employees earning gross wages up to Rs 21,000 per month (Rs 25,000 per month for employees with disabilities) are covered under the ESI scheme once the establishment itself is registered. An employee crossing this ceiling mid-year typically continues to be covered for the remainder of that contribution period under the scheme\'s continuity rules, rather than dropping out of ESI immediately.'],
  ['What is the current ESI contribution rate?', 'The total contribution is 4% of gross wages, split as 3.25% from the employer and 0.75% from the employee. This is calculated on gross wages, not just basic pay, so allowances that form part of gross wages generally need to be included in the contribution base.'],
  ['What ongoing compliance does an ESI-registered employer have?', 'Employers must deposit monthly contributions by the 15th of the following month, maintain employee-wise wage and attendance records, register new employees and generate their Insurance Number promptly, and file the half-yearly return of contributions for each contribution period. ESIC inspections can review these records, so accurate, current record-keeping matters as much as timely payment.'],
  ['What happens if a small employer misses ESI registration after crossing the threshold?', 'Failure to register once the applicability threshold is crossed exposes the employer to demand for unpaid contributions with interest, and can attract penalty and prosecution under the ESI Act for continued default. Because coverage applies from the date the threshold is actually crossed, not the date of registration, a delayed registration can still leave a backdated contribution liability to settle.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function EsiRegistrationBlog() {
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
              <span className="section-badge">Payroll &amp; Labour Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                ESI Registration: Applicability &amp; Employer Compliance
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 4, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>ESI generally applies to establishments with <strong>10 or more employees</strong>, though some states still use a 20-employee threshold for certain establishment categories, confirm the state-specific rule.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The headcount test counts <strong>everyone</strong> on the rolls, including staff earning above the wage ceiling and agency/contract workers; only after that does the wage ceiling decide who actually contributes.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Employees earning up to <strong>Rs 21,000/month</strong> gross (Rs 25,000 for employees with disabilities) are covered.</li>
                    <li style={{ marginBottom: 0 }}>Contribution is <strong>4% of gross wages total</strong> - 3.25% employer, 0.75% employee - deposited monthly by the 15th, with a half-yearly return.</li>
                  </ul>
                </div>

                <p>ESI (Employees&apos; State Insurance) is the other statutory scheme, alongside EPF, that startups and SMEs typically discover only once headcount growth forces the question. Unlike PF, which is purely a retirement/savings scheme, ESI is a health-insurance-style benefit funded jointly by employer and employee, and it applies at a lower employee count than PF does, which means smaller businesses can be caught by it earlier than they expect.</p>

                <h2>When ESI Applies: The Employee-Count Threshold</h2>
                <p><strong>ESI generally applies to non-seasonal factories and notified categories of establishment employing 10 or more persons,</strong> though a number of states continue to apply a higher 20-employee threshold for certain classes of establishment under their own notifications. Because coverage is triggered by state-level notification for non-factory establishments, the safest approach for a business operating in a specific state is to confirm the exact threshold that state has notified for its category of establishment, rather than assuming the commonly quoted 10-employee figure applies uniformly everywhere.</p>
                <p>The headcount that determines applicability is a full-establishment count, not a count of ESI-eligible employees. It includes directors drawing a salary, contract and casual workers, and staff supplied through a housekeeping or security agency working at the premises, in addition to regular payroll employees. A business can therefore be pulled into ESI applicability well before it has 10 direct employees on its own payroll, once agency and contract staff are added in.</p>
                <p>Once an establishment is covered, coverage generally continues even if the headcount later drops below the threshold, the same continuity principle that applies under EPF. This makes ESI, like EPF, a one-way door: registering is a decision worth making deliberately once the threshold is approached, not something to defer until it becomes unavoidable.</p>

                <h2>The Rs 21,000 Wage Ceiling</h2>
                <p>Within a covered establishment, individual employee coverage depends on wages. <strong>Employees earning gross wages up to Rs 21,000 per month are covered under ESI</strong> (the ceiling is higher, at Rs 25,000 per month, for employees with disabilities). This is measured on gross wages, meaning the full package of basic pay, dearness allowance, and most regular allowances, not just basic salary.</p>
                <p>A practical wrinkle: an employee who crosses the wage ceiling mid-way through a contribution period does not immediately drop out of ESI coverage for that period under the scheme&apos;s continuity rules; coverage typically continues for the remainder of that period even though the individual is now earning above the ceiling. This detail matters for payroll teams doing periodic wage reviews, since a raise that pushes someone above Rs 21,000 does not automatically stop the ESI deduction that same month.</p>

                <h2>Contribution Rates</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Party</th><th style={thStyle}>Contribution Rate</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Employer</td><td style={tdStyle}>3.25% of gross wages</td></tr>
                      <tr><td style={tdAltStyle}>Employee</td><td style={tdAltStyle}>0.75% of gross wages</td></tr>
                      <tr><td style={tdStyle}>Total</td><td style={tdStyle}>4% of gross wages</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Because the contribution base is gross wages rather than basic pay, ESI cost calculations look different from PF cost calculations, where the statutory wage ceiling of Rs 15,000 caps the base regardless of actual pay. A payroll structure with a large allowance component relative to basic pay will generally see a proportionately larger ESI contribution base than PF contribution base, which is worth factoring into cost-to-company modelling for roles near the Rs 21,000 line.</p>

                <h2>Registration and Ongoing Compliance</h2>
                <p>ESI registration is completed online through the ESIC portal, using the establishment&apos;s PAN, incorporation and address proof, and details of employees. On registration, the establishment receives a 17-digit code number, and each covered employee is issued an Insurance Number, generated against their Aadhaar-linked KYC details.</p>
                <ul>
                  <li><strong>Monthly contribution and filing:</strong> Employer and employee contributions must be deposited by the 15th of the following month, alongside the monthly contribution statement generated on the portal.</li>
                  <li><strong>New employee registration:</strong> New joiners who fall within the wage ceiling need to be registered and their Insurance Number generated promptly, since delays can affect their ability to access benefits.</li>
                  <li><strong>Half-yearly return:</strong> Employers file a half-yearly return of contributions for each contribution period, reconciling monthly filings against actual wage records.</li>
                  <li><strong>Record maintenance:</strong> Wage registers, attendance records, and accident registers should be maintained and kept available for ESIC inspection, which can be triggered at any point after registration.</li>
                </ul>

                <h2>Non-Compliance Consequences</h2>
                <p>If an establishment fails to register after crossing the applicability threshold, ESIC can raise a demand for unpaid contributions covering the entire period of default, with interest, once the omission is discovered, whether through inspection or a claim raised by a covered employee. Continued default can also attract penalty and prosecution under the ESI Act. Because liability attaches from the date the threshold was actually crossed rather than the date of registration, a business that delays registration doesn&apos;t avoid the obligation, it simply accumulates a larger backdated liability to eventually settle.</p>

                <h2>ESI Alongside EPF and Contractor Compliance</h2>
                <p>Businesses that cross the ESI threshold are frequently close to, or already past, the <Link href="/blog/epf-registration-and-compliance-for-startups-and-smes" style={{ color: 'var(--primary)', fontWeight: 600 }}>EPF registration threshold</Link> as well, since both are driven by growing headcount. It is worth reviewing both obligations together rather than addressing them in isolation, since the underlying employee and wage data largely overlaps. Businesses that rely heavily on contract or agency staff should also examine that workforce&apos;s classification carefully, since misclassified staff can retroactively affect both ESI and EPF applicability; see our related guide on <Link href="/blog/contract-labour-vs-employment-compliance-risks-for-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>contract labour versus employment compliance risk</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure if your establishment is covered under ESI?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses check state-specific applicability, complete ESI registration, and manage monthly contributions and half-yearly returns.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/epf-registration-and-compliance-for-startups-and-smes" style={{ color: 'var(--primary)', fontWeight: 600 }}>EPF Registration &amp; Compliance for Startups and SMEs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/contract-labour-vs-employment-compliance-risks-for-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Contract Labour vs Employment: Compliance Risks for Startups</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/essential-compliance-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Essential Compliance for Indian Startups</Link></li>
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

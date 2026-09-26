import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'EPF Registration & Compliance for Startups and SMEs',
  description: 'When EPF registration becomes mandatory at 20 employees, the 12% employer/employee contribution split across EPF, EPS and EDLI, and the ongoing compliance a startup or SME must handle.',
  keywords: [
    'EPF registration startups', 'EPF applicability 20 employees', 'PF compliance SME',
    'EPF contribution rate 12%', 'EPS EDLI contribution', 'provident fund registration India',
    'EPFO compliance for startups', 'PF wage ceiling 15000',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/epf-registration-and-compliance-for-startups-and-smes' },
  openGraph: {
    title: 'EPF Registration & Compliance for Startups and SMEs',
    description: 'The 20-employee threshold, the 12% contribution split across EPF, EPS and EDLI, and ongoing PF compliance for growing businesses.',
    url: 'https://agrawalkhandelwal.com/blog/epf-registration-and-compliance-for-startups-and-smes',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPF Registration & Compliance for Startups and SMEs',
    description: 'When PF registration kicks in, how the 12% contribution splits, and what ongoing EPFO compliance looks like.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('EPF Registration & Compliance for Startups and SMEs', 'epf-registration-and-compliance-for-startups-and-smes')

const articleLd = buildArticleLd({
  headline: 'EPF Registration & Compliance for Startups and SMEs',
  description: 'The 20-employee EPF applicability threshold, the 12% employer/employee contribution split across EPF, EPS and EDLI, and ongoing compliance obligations for a growing business.',
  datePublished: '2026-07-28',
  slug: 'epf-registration-and-compliance-for-startups-and-smes',
})

const faqs: [string, string][] = [
  ['At what employee count does EPF registration become mandatory?', 'EPF registration is mandatory once an establishment employs 20 or more persons, counted on any day in the preceding 12 months. Once this threshold is crossed even for a single day, registration must be completed; there is no waiting period, and coverage continues even if headcount later falls back below 20.'],
  ['Can an establishment with fewer than 20 employees register for EPF voluntarily?', 'Yes. An establishment below the 20-employee threshold can opt for voluntary EPF coverage, and once it does, the scheme applies exactly as it would to a covered establishment. Some startups do this early to make the benefit part of their hiring pitch, though it adds a recurring compliance and cost obligation.'],
  ['What is the employer and employee PF contribution rate?', 'For establishments with 20 or more employees, both employer and employee generally contribute 12% of basic wages plus dearness allowance. A reduced rate of 10% each applies to certain notified categories of smaller or specified establishments. The employee\'s full 12% goes into the EPF account, while the employer\'s 12% is split between the EPF, EPS (pension) and EDLI schemes.'],
  ['How does the employer\'s 12% contribution get split between EPF, EPS and EDLI?', 'Of the employer\'s 12%, 8.33% goes to the Employees\' Pension Scheme (EPS), capped based on the statutory wage ceiling, and the remaining 3.67% goes to the EPF account. On top of this, the employer separately funds EDLI (Employees\' Deposit Linked Insurance) at 0.5% of wages, plus applicable administrative charges. The wage ceiling used for these statutory calculations is Rs 15,000 per month, even where actual basic wages are higher.'],
  ['What ongoing compliance does an employer have once EPF registration is done?', 'Monthly obligations include generating an Electronic Challan cum Return (ECR), depositing both employer and employee contributions by the 15th of the following month, and maintaining employee-wise wage and contribution records. Employers must also handle UAN (Universal Account Number) generation and KYC seeding for every covered employee, and process transfer or withdrawal claims as employees move between employers.'],
  ['What happens if PF contributions are deposited late?', 'Late deposit attracts interest under Section 7Q of the EPF Act and can attract damages/penalty under Section 14B, calculated on the delayed amount for the period of default. Persistent default also exposes the establishment to EPFO inspection and recovery proceedings, so treating the 15th-of-the-month deadline as a hard cutoff, not a target, is the safer practice.'],
]

const faqLd = buildFaqLd(faqs)

export default function EpfRegistrationBlog() {
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
                EPF Registration &amp; Compliance for Startups and SMEs
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 28, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>EPF registration is mandatory once an establishment employs <strong>20 or more persons</strong> on any day in the preceding 12 months.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Standard contribution is <strong>12% employer + 12% employee</strong> of basic wages plus DA, with a reduced <strong>10%</strong> rate for certain notified smaller establishments.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The employer&apos;s 12% splits into <strong>8.33% EPS</strong> (pension) and <strong>3.67% EPF</strong>, plus a separate <strong>0.5% EDLI</strong> contribution, all computed on a statutory wage ceiling of <strong>Rs 15,000/month</strong>.</li>
                    <li style={{ marginBottom: 0 }}>Monthly ECR filing and payment is due by the <strong>15th of the following month</strong>; late deposit attracts interest and damages under the EPF Act.</li>
                  </ul>
                </div>

                <p>EPF is one of the first statutory obligations a growing startup or SME runs into once it stops being a handful of founders and starts building a real headcount. Unlike GST or income tax, which most founders already track closely, PF registration tends to sneak up: a company crosses 20 employees mid-year, often through a hiring push or an acquisition of a small team, and the registration deadline is retroactive to the date the threshold was crossed, not the date someone noticed.</p>

                <h2>When EPF Registration Becomes Mandatory</h2>
                <p><strong>Any establishment employing 20 or more persons becomes covered under the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952,</strong> and registration must be obtained once that headcount is reached on any single day, even if it dips back below 20 afterward. The count includes all employees on the rolls, not only those who will ultimately be eligible to contribute, so a business should start the registration process the moment it is approaching this threshold rather than waiting for a fixed year-end review.</p>
                <p>Once registered, coverage is permanent for that establishment: EPFO applicability does not switch off if headcount later falls below 20. A common mistake among smaller SMEs is assuming a temporary dip in staff removes the obligation; it does not, and continuing full compliance is required regardless of subsequent headcount changes.</p>
                <p>Establishments below the threshold can also opt in voluntarily. Some early-stage startups choose to register before they are legally required to, either to standardise payroll processes ahead of scaling or because offering PF membership strengthens a hiring pitch for more senior candidates who expect it as a baseline benefit.</p>

                <h2>The 12% Contribution and How It Splits</h2>
                <p>The standard contribution rate is <strong>12% of basic wages plus dearness allowance from the employee, matched by 12% from the employer</strong>. A reduced rate of 10% each applies to certain categories of establishments notified separately (including some smaller or financially stressed units), so it is worth confirming which rate applies before running payroll rather than assuming the standard 12% by default.</p>
                <p>What is less commonly understood is that the employer&apos;s 12% is not a single deposit into the employee&apos;s PF account. It is split three ways:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Component</th><th style={thStyle}>Rate</th><th style={thStyle}>Purpose</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Employee EPF contribution</td><td style={tdStyle}>12% of wages</td><td style={tdStyle}>Entirely credited to the employee&apos;s EPF account</td></tr>
                      <tr><td style={tdAltStyle}>Employer EPS contribution</td><td style={tdAltStyle}>8.33% of wages</td><td style={tdAltStyle}>Employees&apos; Pension Scheme, subject to the statutory wage ceiling</td></tr>
                      <tr><td style={tdStyle}>Employer EPF contribution</td><td style={tdStyle}>3.67% of wages</td><td style={tdStyle}>Balance of the employer&apos;s 12%, credited to the EPF account</td></tr>
                      <tr><td style={tdAltStyle}>EDLI contribution</td><td style={tdAltStyle}>0.5% of wages</td><td style={tdAltStyle}>Employer-funded insurance cover for the employee&apos;s dependents</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>All of these percentages are calculated against a statutory wage ceiling of <strong>Rs 15,000 per month</strong>, even where an employee&apos;s actual basic wage is higher. Employers can voluntarily contribute on the higher actual wage, but the ceiling remains the default baseline for computing the EPS and EDLI shares in particular. There has been recurring discussion about revising this ceiling upward, but businesses should apply the currently notified figure rather than anticipate a change that has not been formally implemented.</p>

                <h2>Registration Process</h2>
                <p>EPF registration is done online through the EPFO Unified Portal (linked to the Shram Suvidha portal), using the establishment&apos;s PAN, GST registration, incorporation documents, and details of directors/partners and employees. Once registered, the establishment receives an establishment code, and each employee is assigned a <strong>Universal Account Number (UAN)</strong> that stays with them across employers for their working life.</p>
                <p>For a startup registering for the first time, the practical sequencing matters: PAN and GST registration should already be in place, bank account details for the establishment need to be ready, and employee-wise KYC (Aadhaar, PAN, bank account) should be collected before the registration is filed, since KYC seeding against each UAN is a recurring compliance step that is easier to start clean than to retrofit later.</p>

                <h2>Ongoing Monthly Compliance</h2>
                <ul>
                  <li><strong>ECR filing and payment by the 15th:</strong> Every month, the employer generates an Electronic Challan cum Return reflecting wages and contributions for each covered employee, and deposits both the employer and employee share by the 15th of the following month.</li>
                  <li><strong>UAN activation and KYC seeding:</strong> New employees need their UAN linked and KYC completed promptly so contributions are correctly credited and the employee can track their account.</li>
                  <li><strong>Transfer and withdrawal claims:</strong> As employees move between employers, PF transfer claims need employer-side approval on the portal; delays here are a common source of employee complaints even when the underlying compliance is otherwise sound.</li>
                  <li><strong>Annual returns and reconciliation:</strong> Employers should periodically reconcile ECR filings against payroll records to catch mismatches (wrong wage ceiling applied, missed new joiners, incorrect exit dates) before they compound.</li>
                </ul>

                <h2>Consequences of Non-Compliance</h2>
                <p>Late deposit of contributions attracts interest under <strong>Section 7Q</strong> of the EPF Act for every day of delay, and can additionally attract damages/penalty under <strong>Section 14B</strong>, assessed as a percentage of the defaulted amount depending on the period of delay. Beyond the direct cost, a pattern of late or missed deposits increases the likelihood of an EPFO inspection, which can extend into a broader review of wage records, headcount history, and contractor classifications; this is one reason the <Link href="/blog/contract-labour-vs-employment-compliance-risks-for-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>employment versus contract labour classification</Link> question matters for PF exposure too, since misclassified workers can retroactively pull an establishment into EPF coverage.</p>

                <h2>Getting EPF Compliance Right From Day One</h2>
                <p>For a startup or SME approaching 20 employees, the practical approach is to start the registration process before the threshold is actually crossed, build the 12%/12% contribution (or the applicable 10% rate) into cost-to-company calculations from the offer-letter stage rather than discovering it later, and set a standing monthly reminder well ahead of the 15th-of-the-month payment deadline. Treating PF as a recurring payroll discipline rather than a one-time registration event is what keeps it from becoming an audit finding later, alongside the related <Link href="/blog/esi-registration-applicability-and-employer-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESI registration</Link> obligation that often applies to the same workforce.</p>
              </div>

              <PostCTA
            heading="Approaching 20 employees or already covered?"
            description="We help startups and SMEs set up EPF registration, structure the contribution correctly in payroll, and stay current on monthly ECR filings."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esi-registration-applicability-and-employer-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESI Registration: Applicability &amp; Employer Compliance</Link></li>
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

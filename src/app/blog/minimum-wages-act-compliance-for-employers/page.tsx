import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Minimum Wages Act Compliance for Employers' },
  description: 'How minimum wage compliance works in India after the Code on Wages 2019 replaced the Minimum Wages Act 1948, including the floor wage concept, state-wise rates, and employer penalties.',
  keywords: [
    'Minimum Wages Act compliance', 'Code on Wages 2019', 'minimum wage employer India',
    'floor wage India', 'Code on Wages Rules 2026', 'minimum wages penalty employer',
    'state minimum wage rate India', 'wage compliance checklist',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/minimum-wages-act-compliance-for-employers' },
  openGraph: {
    title: 'Minimum Wages Act Compliance for Employers',
    description: 'The Minimum Wages Act 1948 has been folded into the Code on Wages 2019. What employers need to track now, including the floor wage and state rates.',
    url: 'https://agrawalkhandelwal.com/blog/minimum-wages-act-compliance-for-employers',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minimum Wages Act Compliance for Employers',
    description: 'What changed when the Minimum Wages Act 1948 was subsumed into the Code on Wages 2019, and how employers stay compliant.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Minimum Wages Act Compliance for Employers', 'minimum-wages-act-compliance-for-employers')

const articleLd = buildArticleLd({
  headline: 'Minimum Wages Act Compliance for Employers',
  description: 'Minimum wage compliance in India after the Code on Wages 2019 replaced the Minimum Wages Act 1948: the floor wage concept, state-wise rates, records, and penalties for employers.',
  datePublished: '2026-09-15',
  slug: 'minimum-wages-act-compliance-for-employers',
})

const faqs: [string, string][] = [
  [
    'Is the Minimum Wages Act 1948 still in force?',
    'No, not as a standalone law. The Minimum Wages Act 1948 has been repealed and consolidated, along with the Payment of Wages Act 1936, the Payment of Bonus Act 1965, and the Equal Remuneration Act 1976, into the Code on Wages, 2019. The Code was brought into general force on November 21, 2025, with the Wages (Central) Rules, 2026 following on May 8, 2026. The substantive obligation to pay at least the applicable minimum wage continues unchanged; only the statute and section numbers governing it have changed.',
  ],
  [
    'What is the "floor wage" under the Code on Wages?',
    'The floor wage is a new concept introduced by the Code: the central government is empowered to notify a baseline wage figure, region-wise or nationally, below which no state government can fix its own minimum wage. States remain free to set minimum wages higher than the floor wage for their jurisdiction and scheduled categories of work, but not lower. As of this writing, no floor wage figure has yet been formally notified, so state-wise minimum wage notifications remain the operative rates employers must follow.',
  ],
  [
    'Does the Code on Wages apply to all employees regardless of the type of work?',
    'Yes, that is one of the structural changes from the old Act. The Minimum Wages Act 1948 only applied to "scheduled employments," a specific list of industries and job categories notified under the Act, so certain kinds of work fell outside minimum wage protection entirely. The Code on Wages abolishes the scheduled-employment concept and extends minimum wage coverage to every employee across every sector, removing that gap.',
  ],
  [
    'What records must an employer maintain for minimum wage compliance?',
    'Employers are required to maintain wage registers, muster rolls or attendance records, and payslips showing gross wages, deductions, and net wages paid to each employee, in the form and manner prescribed under the Code on Wages Rules notified by the central government and the corresponding state rules. These records must be retained for the prescribed period and produced on inspection by a labour inspector-cum-facilitator, the Code\'s renamed inspecting authority.',
  ],
  [
    'What happens if an employer pays below the minimum wage?',
    'Paying less than the notified minimum wage is a punishable offence under the Code on Wages. Penalties escalate with repetition: a first violation can attract a fine, and a repeat offence within five years can attract both a fine and imprisonment. Employers also remain liable to pay the shortfall (the difference between what was paid and the applicable minimum wage) to the affected employees, in addition to any penalty imposed.',
  ],
  [
    'How often are minimum wage rates revised?',
    'State governments are required to review and revise minimum wage rates for their jurisdiction at intervals not exceeding five years, though in practice many states issue more frequent revisions, and dearness allowance components tied to a cost-of-living index are often revised twice a year. Employers with a multi-state workforce need a process to track notifications separately for each state and each applicable employment category, since rates are not uniform across India.',
  ],
]

const faqLd = buildFaqLd(faqs)

export default function MinimumWagesActBlog() {
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
                Minimum Wages Act Compliance for Employers
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 15, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>The <strong>Minimum Wages Act, 1948</strong> is no longer a standalone law; it has been folded into the <strong>Code on Wages, 2019</strong>, in force since <strong>November 21, 2025</strong>, with central rules from May 8, 2026.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Minimum wage coverage now applies to <strong>every employee</strong>, not just those in a notified "scheduled employment" as under the old Act.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A new <strong>floor wage</strong> mechanism lets the centre set a baseline that states cannot go below; no figure has been notified yet, so state-wise rates still govern.</li>
                    <li style={{ marginBottom: 0 }}>Underpayment is a punishable offence, with escalating fines and possible imprisonment on repeat violations, on top of having to pay the wage shortfall.</li>
                  </ul>
                </div>

                <p>For decades, minimum wage compliance in India meant checking whether your business fell under a "scheduled employment" notified under the Minimum Wages Act, 1948, and then tracking the applicable state rate for that category. That framework changed structurally when the Code on Wages, 2019 was brought into general force on November 21, 2025, consolidating four separate wage-related laws into one code and rewriting how minimum wage obligations apply. The substance of the obligation (pay employees at least the applicable minimum) has not changed. What has changed is who it covers, how the rate is set, and where the rules live.</p>

                <h2>From the Minimum Wages Act to the Code on Wages</h2>
                <p>The Code on Wages, 2019 consolidates the Minimum Wages Act, 1948, the Payment of Wages Act, 1936, the Payment of Bonus Act, 1965, and the Equal Remuneration Act, 1976 into a single legislation. All four of the earlier Acts stand repealed. The Code itself received presidential assent back in 2019 but was brought into general operation only from November 21, 2025, with the Code on Wages (Central) Rules, 2026 notified on May 8, 2026 to operationalise the central government provisions; most states have issued, or are in the process of issuing, their own corresponding state rules.</p>
                <p>For an employer, the practical continuity is this: if you were tracking Minimum Wages Act compliance before, you continue the same underlying activity (paying at least the notified rate, maintaining wage records, and responding to inspections) but under a renumbered and restructured statute. Existing state minimum wage notifications issued under the old Act have generally been carried forward or are being reissued under the Code\'s framework, so employers should not assume old rate notifications have simply lapsed without a corresponding update; they should track their state labour department\'s Code on Wages notifications directly.</p>

                <h2>Universal Coverage: No More "Scheduled Employment" Gap</h2>
                <p>The single biggest structural change for employers is the removal of the scheduled-employment concept. Under the 1948 Act, minimum wage protection only applied to employment categories that a state or central government had specifically notified as "scheduled" (a defined list of industries and job types). Any job or sector not on that list fell outside minimum wage protection altogether, which created genuine coverage gaps over the decades as the list failed to keep pace with new kinds of work.</p>
                <p>The Code on Wages abolishes this distinction. Minimum wage obligations under the Code apply to every employee across every sector, without needing a specific scheduled-employment notification to trigger coverage. This closes the old gap but also means employers in sectors that previously assumed they were outside minimum wage law (because their work wasn't on a scheduled list) need to re-check their position; that assumption no longer holds.</p>

                <h2>The Floor Wage: A New Concept</h2>
                <p>The Code introduces a "floor wage" mechanism that did not exist under the old Act. The central government is empowered to fix a floor wage, which can vary by geographical region, and state governments are then barred from setting their own minimum wage below that floor. States remain free to notify a minimum wage above the floor for their jurisdiction and job categories; they simply cannot go lower.</p>
                <p>As of this writing, the enabling provision for the floor wage is in force, but no actual floor wage figure has been formally notified by the central government. Until that happens, the operative minimum wage rates for employers to follow remain the existing state-wise notifications, which continue to vary meaningfully across states and even across zones (urban/rural, skilled/unskilled/semi-skilled) within a state. Employers should not wait for a floor wage notification to plan compliance; current state rates are what apply today, and a floor wage, once notified, would only set a minimum ceiling that states cannot fall below.</p>

                <h2>What Employers Need to Track</h2>
                <ul>
                  <li><strong>State-wise minimum wage notifications:</strong> Rates differ by state, and within a state, typically by skill category (unskilled, semi-skilled, skilled, highly skilled) and sometimes by zone or industry. A business operating across multiple states needs a rate-tracking process per location, not a single company-wide number.</li>
                  <li><strong>Dearness allowance revisions:</strong> Many states link a portion of the minimum wage to a cost-of-living index and revise it twice a year (commonly April and October), separate from the base rate revision. Missing a DA revision cycle is a common source of underpayment that isn't deliberate but is still a violation.</li>
                  <li><strong>Wage registers and payslips:</strong> The Code on Wages Rules prescribe the form and retention period for wage registers, attendance/muster records, and payslips. These need to clearly show gross wages, deductions, and net pay per employee per wage period.</li>
                  <li><strong>Equal remuneration:</strong> Since the Equal Remuneration Act is also folded into the Code, wage-fixing processes should be checked for gender-based pay disparity for the same or similar work, which the Code separately prohibits.</li>
                  <li><strong>Inspection readiness:</strong> The Code renames inspectors as "inspector-cum-facilitators" with an expanded advisory role alongside enforcement. Records should be maintained in a state that can be produced on demand rather than reconstructed after the fact.</li>
                </ul>

                <h2>Penalties for Non-Compliance</h2>
                <p>Paying below the applicable minimum wage, or otherwise contravening the wage provisions of the Code, is a punishable offence. Penalties are structured to escalate with repetition: a first-time contravention typically attracts a fine, while a repeat offence within a defined period (five years) can attract both a fine and a term of imprisonment. Separately, and regardless of any penalty imposed, the employer remains liable to pay the wage shortfall (the gap between what was actually paid and the legally applicable minimum) to the affected employees. This dual exposure (statutory penalty plus back-pay liability) is why minimum wage compliance is worth building into a recurring payroll review rather than treating as a one-time setup task, especially for businesses that operate across multiple states or bring on new categories of workers over time.</p>

                <h2>Practical Compliance Steps</h2>
                <p>For most employers, the shift to the Code on Wages is an occasion to formalise what may have been an informal or state-specific process: map every work location and job category to its current applicable minimum wage notification, build a calendar for DA revision cycles, standardise wage registers and payslip formats to match the Rules, and assign clear ownership (HR or payroll, working with a compliance advisor) for tracking new state and central notifications as they are issued. This sits alongside the other components of a broader <Link href="/blog/payroll-compliance-checklist-for-growing-startups-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>payroll compliance checklist</Link>, and alongside statutory obligations like <Link href="/blog/gratuity-payment-rules-eligibility-and-tax-exemption-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>gratuity</Link> that also depend on accurate, well-documented wage records.</p>
              </div>

              <PostCTA
            heading="Not sure your payroll is current on wage compliance?"
            description="We help businesses map state-wise minimum wage rates, set up compliant wage registers, and stay current as the Code on Wages rules roll out."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/payroll-compliance-checklist-for-growing-startups-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Payroll Compliance Checklist for Growing Startups in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gratuity-payment-rules-eligibility-and-tax-exemption-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>Gratuity Payment Rules: Eligibility &amp; Tax Exemption Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/posh-act-compliance-internal-committee-requirements-for-companies" style={{ color: 'var(--primary)', fontWeight: 600 }}>POSH Act Compliance: Internal Committee Requirements for Companies</Link></li>
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

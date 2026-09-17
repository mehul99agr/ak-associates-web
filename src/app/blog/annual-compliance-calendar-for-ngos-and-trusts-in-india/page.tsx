import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Annual Compliance Calendar for NGOs and Trusts in India' },
  description: 'A deadline-by-deadline compliance calendar for Indian NGOs and trusts: Form 10B/10BB audit report, ITR-7 filing, FCRA FC-4 return, and the 12A/80G renewal cycle.',
  keywords: [
    'NGO compliance calendar India', 'trust annual compliance', 'Form 10B due date', 'Form 10BB due date',
    'ITR-7 due date trust', 'FCRA FC-4 due date', '12A 80G renewal', 'charitable trust compliance FY 2026-27',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/annual-compliance-calendar-for-ngos-and-trusts-in-india' },
  openGraph: {
    title: 'Annual Compliance Calendar for NGOs and Trusts in India',
    description: 'Every recurring deadline an Indian NGO or trust needs to track: audit report, ITR-7, FCRA return, and registration renewals.',
    url: 'https://agrawalkhandelwal.com/blog/annual-compliance-calendar-for-ngos-and-trusts-in-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annual Compliance Calendar for NGOs and Trusts in India',
    description: 'Every recurring deadline an Indian NGO or trust needs to track: audit report, ITR-7, FCRA return, and registration renewals.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Annual Compliance Calendar for NGOs and Trusts in India', 'annual-compliance-calendar-for-ngos-and-trusts-in-india')

const articleLd = buildArticleLd({
  headline: 'Annual Compliance Calendar for NGOs and Trusts in India',
  description: 'A deadline-by-deadline compliance calendar for Indian NGOs and trusts covering the audit report, ITR-7, FCRA FC-4 return, and 12A/80G renewal cycle.',
  datePublished: '2026-09-29',
  slug: 'annual-compliance-calendar-for-ngos-and-trusts-in-india',
})

const faqs: [string, string][] = [
  [
    'What is the difference between Form 10B and Form 10BB?',
    'Both are audit reports for charitable and religious trusts and institutions claiming exemption under Sections 11-12, or approved under Section 10(23C). Form 10B applies where total income (before claiming exemption) exceeds Rs 5 crore in the previous year, or where the trust has received foreign contribution, or applied income outside India. Form 10BB applies in all other cases. Both must be filed at least one month before the ITR-7 due date.',
  ],
  [
    'Does every trust need to file an FCRA annual return?',
    'Only trusts registered under FCRA, or holding prior permission to receive foreign contribution, must file the annual return in Form FC-4. It is due by 31 December each year for the preceding financial year, and a nil return is mandatory even in a year with no foreign contribution received. A trust with no FCRA registration has no FC-4 obligation at all.',
  ],
  [
    'How often does 12A and 80G registration need to be renewed?',
    'A trust granted provisional registration must apply for regular registration in Form 10AB within six months of commencing activities or six months before the provisional period (typically 3 years) expires, whichever is earlier. Regular registration must then be renewed via Form 10AB at least six months before expiry; the validity period is 5 years generally, and 10 years for trusts whose total income did not exceed Rs 5 crore in each of the preceding two years, for applications made after March 31, 2025.',
  ],
  [
    'What happens if a trust misses the Form 10B/10BB deadline?',
    'A late or missing audit report can result in the exemption under Sections 11-12 being denied for that year, which exposes the trust\'s entire income to tax at the maximum marginal rate rather than only the unapplied portion. The audit report must be filed at least one month before the ITR-7 due date for the exemption to be validly claimed; filing the ITR-7 itself without a timely audit report does not cure the defect.',
  ],
  [
    'Is ITR-7 the correct return for all NGOs and trusts?',
    'ITR-7 is the return for persons including companies required to furnish returns under Sections 139(4A) to 139(4D), which covers trusts and institutions claiming exemption under Sections 11-12 or Section 10(23C), among others. A trust with no exemption claim and no such special filing obligation would use a different ITR form, so this calendar assumes a trust that is claiming exemption in the normal course.',
  ],
  [
    'Do these income tax provisions have new numbers under the Income Tax Act 2025?',
    'Several of the provisions referenced here have been renumbered under the Income Tax Act 2025. Where a reliable new-Act section number has been independently verified elsewhere on this site it is used; for the trust-specific sections and forms covered in this guide, a confirmed new-Act mapping was not available at the time of writing, so this guide uses the familiar old-Act references throughout. Confirm the current citation with your CA before relying on it for a filing.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function NgoTrustComplianceCalendarBlog() {
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
              <span className="section-badge">Trusts &amp; NGOs</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Annual Compliance Calendar for NGOs and Trusts in India
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 29, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form 10B/10BB</strong> (audit report) is due at least one month before the <strong>ITR-7</strong> filing deadline, which for most trusts falls on <strong>31 October</strong> following the financial year.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Trusts holding <strong>FCRA registration</strong> must file the annual return in <strong>Form FC-4 by 31 December</strong> every year, nil or not.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>12A/80G registration</strong> is not permanent: provisional registration runs about 3 years, and renewal via Form 10AB must be filed at least 6 months before expiry.</li>
                    <li style={{ marginBottom: 0 }}>Missing the audit report deadline puts the entire Section 11-12 exemption at risk, not just a penalty.</li>
                  </ul>
                </div>

                <p>Trusts and NGOs in India sit at the intersection of three separate compliance regimes: income tax exemption compliance, FCRA (if foreign funds are received), and the registration cycle under 12A/80G that makes the exemption possible in the first place. Each regime has its own filing, its own form, and its own deadline, and none of them defer to each other. Missing one does not just mean a penalty; in the case of the audit report, it can mean losing the exemption for the entire year. This calendar walks through what falls due, and when, for a typical trust claiming exemption under Sections 11 and 12.</p>

                <h2>The Core Deadline Chain: Audit Report, Then ITR-7</h2>
                <p>Two forms carry the exemption claim each year, and they are sequenced, not independent:</p>
                <ul>
                  <li><strong>Form 10B or Form 10BB (audit report):</strong> Every trust or institution claiming exemption under Sections 11-12, or approved under Section 10(23C)(iv)/(v)/(vi)/(via), must get its accounts audited and the audit report filed electronically. <strong>Form 10B</strong> applies where total income before claiming exemption exceeds Rs 5 crore in the previous year, or the trust has received foreign contribution during the year, or applied income outside India during the year. <strong>Form 10BB</strong> applies in all other cases. Both must be filed at least one month before the due date for filing the return of income.</li>
                  <li><strong>ITR-7:</strong> The income tax return for entities claiming exemption under Sections 11-12 or Section 10(23C), among other categories covered by Sections 139(4A) to 139(4D). For a trust subject to audit, the ITR-7 due date is typically <strong>31 October</strong> following the close of the financial year, which places the audit report deadline at <strong>30 September</strong> in the ordinary course. The CBDT has in some recent years extended these dates administratively (for example, the Form 10B/10BB deadline for AY 2025-26 was extended to 31 October 2025), so always confirm the current-year date on the income tax e-filing portal rather than assuming the standard date holds; do not treat an extension in one year as a precedent for the next.</li>
                </ul>
                <p>The practical sequencing point trusts miss most often: the audit report is not a formality that can be filed alongside or after the ITR-7. It must be filed first, with the return referencing the audit report's acknowledgment number. Leaving both to the last week of October regularly causes trusts to miss the audit report's own one-month-earlier cutoff.</p>

                <h2>FCRA Annual Return: Form FC-4, Due 31 December</h2>
                <p>If the trust is registered under FCRA, 2010, or holds prior permission to receive foreign contribution, a separate annual return in <strong>Form FC-4</strong> is due to the Ministry of Home Affairs by <strong>31 December</strong> for the financial year that closed on the preceding 31 March, roughly nine months after year-end. This is entirely independent of the income tax filings above and uses the trust's FCRA-designated bank account records rather than its general books.</p>
                <p>A trust with FCRA registration but no foreign contribution actually received during the year still has to file a <strong>nil return</strong>; the obligation is tied to holding the registration, not to activity in a given year. Persistent non-filing, or filing well past the deadline, exposes the trust to penalty and, in serious or repeated cases, cancellation of FCRA registration itself, which is a far more disruptive outcome than a late fee.</p>

                <h2>The 12A/80G Renewal Cycle</h2>
                <p>Registration under Sections 12A and 80G is what makes Section 11-12 exemption and donor deductions possible at all, and since the 2020 overhaul it is <strong>not a one-time, permanent grant</strong>. The cycle runs as follows:</p>
                <ul>
                  <li><strong>Provisional registration</strong> is typically granted for about 3 years to a new trust. The trust must apply for regular (final) registration in <strong>Form 10AB</strong> within six months of the commencement of its activities, or at least six months before the provisional registration expires, whichever is earlier.</li>
                  <li><strong>Regular registration</strong> then runs for <strong>5 years</strong> for most trusts, extended to <strong>10 years</strong> for trusts whose total income (before claiming exemption) did not exceed Rs 5 crore in each of the preceding two years, applicable to applications made after 31 March 2025.</li>
                  <li><strong>Renewal</strong> at the end of each validity period again uses Form 10AB and must be filed at least <strong>six months before expiry</strong> of the current registration, not after.</li>
                </ul>
                <p>Trusts that let a 12A or 80G registration lapse do not just lose the renewal paperwork battle; they lose the exemption and donor-deduction eligibility from the date of lapse forward, and re-registration does not retroactively fix the gap year. Calendaring the expiry date the moment a registration or renewal is granted, rather than waiting for a reminder closer to expiry, is the only reliable way to avoid this.</p>

                <h2>Putting It Together: A Year-Round View</h2>
                <p>For a trust with an FCRA registration and a financial year ending 31 March, the recurring annual deadlines line up roughly as follows, though the exact dates should always be reconfirmed each year against the income tax portal and MHA notifications:</p>
                <ul>
                  <li><strong>Through the year:</strong> maintain books eligible for audit, track application of income (85% application / accumulation rules), and monitor the 12A/80G registration expiry date on a standing calendar entry, not a last-minute check.</li>
                  <li><strong>By 30 September (typical, confirm annually):</strong> Form 10B or 10BB audit report filed.</li>
                  <li><strong>By 31 October (typical, confirm annually):</strong> ITR-7 filed, referencing the audit report.</li>
                  <li><strong>By 31 December:</strong> Form FC-4 annual return, if FCRA-registered, nil or otherwise.</li>
                  <li><strong>At least 6 months before expiry:</strong> Form 10AB filed for 12A/80G renewal (a one-time-per-cycle deadline, not annual, but the single most consequential one to miss).</li>
                </ul>
                <p>Trusts that also receive corporate CSR funding carry a further, separate set of obligations around CSR-1 registration and fund utilisation reporting, covered in our companion guide on <Link href="/blog/csr-fund-utilisation-compliance-for-receiving-trusts" style={{ color: 'var(--primary)', fontWeight: 600 }}>CSR fund utilisation compliance for receiving trusts</Link>. Between income tax exemption compliance, FCRA, and registration renewal, a trust's compliance calendar is genuinely denser than most private companies' — the cost of getting it wrong is not a fine but the exemption itself.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Managing compliance for a trust or NGO?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 10B/10BB audits, ITR-7 filing, FCRA returns, and 12A/80G renewal for charitable trusts and NGOs.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/csr-fund-utilisation-compliance-for-receiving-trusts" style={{ color: 'var(--primary)', fontWeight: 600 }}>CSR Fund Utilisation: Compliance for Receiving Trusts</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/political-party-donations-and-section-80ggc-deduction" style={{ color: 'var(--primary)', fontWeight: 600 }}>Political Party Donations &amp; Section 80GGC Deduction</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'LLP Form 8 and Form 11 Due Dates: FY 2025-26 and 2026-27' },
  description: 'LLP Form 11 is due May 30 and Form 8 October 30 every year. FY 2025-26 and FY 2026-27 dates, the late fee table, audit, ITR, DIR-3 KYC and strike off risks.',
  keywords: ["LLP Form 8 due date", "Form 11 due date FY 2026-27", "LLP Form 8 due date FY 2026-27", "LLP audit due date", "LLP Form 11 due date", "LLP annual filing FY 2025-26", "LLP late fee Form 8", "LLP DIR-3 KYC", "LLP strike off"],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/llp-annual-compliance-form-8-form-11-due-dates' },
  openGraph: {
    title: 'LLP Form 8 and Form 11 Due Dates: FY 2025-26 and 2026-27',
    description: 'LLP Form 11 is due May 30 and Form 8 October 30 every year. FY 2025-26 and FY 2026-27 dates, the late fee table, audit, ITR, DIR-3 KYC and strike off risks.',
    url: 'https://agrawalkhandelwal.com/blog/llp-annual-compliance-form-8-form-11-due-dates',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLP Form 8 and Form 11 Due Dates: FY 2025-26 and 2026-27',
    description: 'LLP Form 11 is due May 30 and Form 8 October 30 every year. FY 2025-26 and FY 2026-27 dates, the late fee table, audit, ITR, DIR-3 KYC and strike off risks.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('LLP Annual Compliance: Form 8 and Form 11 Due Dates for FY 2025-26', 'llp-annual-compliance-form-8-form-11-due-dates')

const articleLd = buildArticleLd({
  headline: 'LLP Annual Compliance: Form 8 and Form 11 Due Dates for FY 2025-26',
  description: 'LLP Form 11 is due May 30 and Form 8 October 30 every year. FY 2025-26 and FY 2026-27 dates, the late fee table, audit, ITR, DIR-3 KYC and strike off risks.',
  datePublished: '2026-11-18',
  dateModified: '2026-11-25',
  slug: 'llp-annual-compliance-form-8-form-11-due-dates',
})

const faqs: [string, string][] = [
  ['What are the due dates for LLP Form 8 and Form 11 for FY 2025-26?', 'Form 11 was due on May 30, 2026 and Form 8 on October 30, 2026. Both are filed every year, even if the LLP did no business.'],
  ['Has MCA extended LLP Form 8 or Form 11 for FY 2025-26?', 'We found no extension as of November 18, 2026. MCA General Circular 05/2026 relaxed additional fees only for company forms AOC-4 and MGT-7. Check the MCA portal for any later LLP circular.'],
  ['What is the late fee for LLP Form 8 and Form 11?', 'Since April 1, 2022 the additional fee is a multiple of the normal fee that rises with the delay, and a small LLP pays a lower multiple. Beyond 360 days a daily amount is added. The old flat Rs 100 per day no longer applies. Confirm exact amounts in the MCA fee calculator.'],
  ['Is an audit compulsory for an LLP?', 'A statutory audit is required if contribution exceeds Rs 25 lakh or turnover exceeds Rs 40 lakh. A tax audit under the Income Tax Act is a separate test based on turnover and other conditions.'],
  ['What are the LLP Form 8 and Form 11 due dates for FY 2026-27?', 'Form 11 is due by May 30, 2027 and Form 8 by October 30, 2027, following the same 60-day and six-months-plus-30-days rules that apply every year.'],
  ['Do designated partners need to file DIR-3 KYC?', 'Yes, if they hold a DIN. From March 31, 2026 the annual filing was replaced by a filing once every three financial years, due by June 30, plus a filing within 30 days of any change in mobile number, email or address. A director who filed in FY 2025-26 is next due by June 30, 2028. Missing it deactivates the DIN. A partner with only a DPIN may be treated differently, so check the status.'],
  ['What happens if an LLP does not file annual returns?', 'Additional fees keep accruing, DINs may be deactivated, and the ROC can strike off the LLP under Section 75 of the LLP Act. Backlog filings are normally needed before a voluntary strike off.'],
]

const faqLd = buildFaqLd(faqs)
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: 'var(--white)', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function LLPAnnualComplianceBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>LLP Form 8 and Form 11 Due Dates: FY 2025-26 and FY 2026-27</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Next due dates (FY 2026-27):</strong> Form 11 by <strong>May 30, 2027</strong> and Form 8 by <strong>October 30, 2027</strong>. The same dates apply every year.</li>
                  <li style={{ marginBottom: '0.4rem' }}><strong>Form 11</strong> was due <strong>May 30, 2026</strong> and <strong>Form 8</strong> was due <strong>October 30, 2026</strong> for FY 2025-26. We found no extension for LLPs as of November 18, 2026.</li>
                  <li style={{ marginBottom: '0.4rem' }}>MCA General Circular 05/2026 relaxed additional fees only for company forms AOC-4 and MGT-7, not LLP forms.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The old <strong>Rs 100 per day</strong> late fee was replaced from April 1, 2022 by a table of multiples of the normal fee, with a daily component only beyond 360 days.</li>
                  <li style={{ marginBottom: '0.4rem' }}>An LLP audit applies above Rs 25 lakh contribution or Rs 40 lakh turnover. The income tax return (ITR-5) and any tax audit are separate.</li>
                  <li style={{ marginBottom: 0 }}>From March 31, 2026, <strong>DIR-3 KYC is filed once every three years, by June 30</strong>, plus within 30 days of any change in contact details. Backlog filings should be cleared before any strike off or closure.</li>
                </ul>
              </div>
              <p>An LLP has two annual MCA filings and no AGM, which is why many partners forget them. Both carry per-form late fees that grow with delay, and a dormant LLP still has to file. This guide covers the FY 2025-26 dates, the current late fee structure, the income tax side, DIR-3 KYC and what happens if you stop filing. For registration, see our <Link href="/blog/llp-registration-process-cost-india-2026" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP registration guide</Link>.</p>
              <h2>The two MCA filings and their dates for FY 2025-26</h2>
              <p>Form 11 is the annual return and Form 8 is the statement of account and solvency. Both are filed every year, even if the LLP had no business.</p>
              <div style={{ overflowX: 'auto' }}>
<table style={tableStyle}>
<thead><tr><th style={thStyle}>Form</th><th style={thStyle}>What it is</th><th style={thStyle}>Due date for FY 2025-26</th><th style={thStyle}>Extended?</th></tr></thead>
<tbody>
<tr><td style={tdStyle}>Form 11</td><td style={tdStyle}>Annual return of partners and activity</td><td style={tdStyle}>May 30, 2026 (60 days from year end)</td><td style={tdStyle}>No extension found</td></tr>
<tr><td style={tdAltStyle}>Form 8</td><td style={tdAltStyle}>Statement of account and solvency</td><td style={tdAltStyle}>October 30, 2026 (30 days after six months from year end)</td><td style={tdAltStyle}>No extension found</td></tr>
</tbody>
</table>
</div>
              <p><strong>For FY 2026-27</strong> (the year ending March 31, 2027), the same rules give <strong>Form 11 by May 30, 2027</strong> and <strong>Form 8 by October 30, 2027</strong>. Check the MCA portal nearer the date for any extension.</p>
              <h2>Did MCA extend any LLP date for FY 2025-26?</h2>
              <p>As of November 18, 2026, we found no extension for LLP Form 11 or Form 8. MCA General Circular 05/2026 (October 24, 2026) relaxed additional fees only for company forms AOC-4 and MGT-7. It does not cover LLPs. If you have not filed Form 8 yet, it is already late. Check the MCA LLP circulars page before relying on any extension someone mentions.</p>
              <h2>Late fees: the daily Rs 100 charge is gone</h2>
              <p>Older guides still say Rs 100 per day. From April 1, 2022 the LLP (Amendment) Rules, 2022 replaced that with a table of additional fees based on a multiple of the normal fee. The multiple depends on how long you are late, and a small LLP pays a lower multiple. Two independent guides publish the same structure, reproduced below. Confirm it in the MCA fee calculator before relying on exact amounts.</p>
              <div style={{ overflowX: 'auto' }}>
<table style={tableStyle}>
<thead><tr><th style={thStyle}>Delay</th><th style={thStyle}>Small LLP</th><th style={thStyle}>Other LLP</th></tr></thead>
<tbody>
<tr><td style={tdStyle}>Up to 15 days</td><td style={tdStyle}>1x</td><td style={tdStyle}>1x</td></tr>
<tr><td style={tdAltStyle}>15 to 30 days</td><td style={tdAltStyle}>2x</td><td style={tdAltStyle}>4x</td></tr>
<tr><td style={tdStyle}>30 to 60 days</td><td style={tdStyle}>4x</td><td style={tdStyle}>8x</td></tr>
<tr><td style={tdAltStyle}>60 to 90 days</td><td style={tdAltStyle}>6x</td><td style={tdAltStyle}>12x</td></tr>
<tr><td style={tdStyle}>90 to 180 days</td><td style={tdStyle}>10x</td><td style={tdStyle}>20x</td></tr>
<tr><td style={tdAltStyle}>180 to 360 days</td><td style={tdAltStyle}>15x</td><td style={tdAltStyle}>30x</td></tr>
<tr><td style={tdStyle}>Beyond 360 days</td><td style={tdStyle}>15x plus Rs 10 per day</td><td style={tdStyle}>30x plus Rs 20 per day</td></tr>
</tbody>
</table>
</div>
              <h2>What is the normal fee?</h2>
              <p>The normal fee depends on contribution. Published guides list Rs 50 up to Rs 1 lakh, Rs 100 up to Rs 5 lakh, Rs 150 up to Rs 10 lakh, Rs 200 up to Rs 25 lakh, Rs 400 up to Rs 1 crore and Rs 600 above. A small LLP means contribution up to Rs 25 lakh and turnover up to Rs 40 lakh. Each form is charged separately, so a long-pending LLP pays for both forms and for every year.</p>
              <p>Separately, the LLP Act contains penalty provisions for default by the LLP and its designated partners. Those sit on top of the additional fees, and we have not quoted amounts because guides disagree on the cap.</p>
              <h2>Audit, income tax return and tax audit for LLPs</h2>
              <p>A statutory audit of the LLP&apos;s accounts is required where contribution exceeds Rs 25 lakh or turnover exceeds Rs 40 lakh. Below that, accounts must still be maintained and a solvency statement signed in Form 8.</p>
              <p>For income tax, an LLP files ITR-5. If a tax audit applies (for example because turnover crosses the Section 44AB threshold, a separate test from the LLP Act audit), audit-case dates apply. For AY 2026-27, the CBDT press release of September 28, 2026 extended the audit report to October 21, 2026 and the audit-case return to November 21, 2026, with Form 3CEB cases excluded. Read our <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 600 }}>audit case ITR due date post</Link> and confirm for your facts. LLP, income tax and GST filings are separate, and one does not substitute for another.</p>
              <h2>DIR-3 KYC for designated partners</h2>
              <p>Designated partners who hold a DIN must file DIR-3 KYC. Since March 31, 2026 this is once every three financial years, by June 30 (a director who filed in FY 2025-26 is next due by June 30, 2028), plus within 30 days of any change in mobile number, email or address. Missing it deactivates the DIN, and published guides report a fee of Rs 5,000 to reactivate. A deactivated DIN blocks the partner from signing MCA forms, including Form 8 and Form 11. One source says a partner holding only a DPIN may be treated differently, so check each partner&apos;s status. See the <Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN guide</Link>.</p>
              <h2>If you stop filing: consequences</h2>
              <p>Additional fees keep growing, and past 360 days they carry a daily component. Pending defaults also get in the way of closing the LLP: the ROC expects backlog Form 8 and Form 11 to be filed before a voluntary strike off (Form 24). The ROC can also strike off an LLP that is not carrying on business or not filing, under Section 75 of the LLP Act, which makes bank accounts and property dealings difficult and can require a court route to restore. Whether you want to keep the LLP or close it, filing the backlog is usually cheaper than leaving it.</p>
              <h2>A simple yearly calendar for your LLP</h2>
              <p>Keep books through the year, finalise accounts and the solvency statement, file DIR-3 KYC by June 30 in its three-year cycle, file Form 11 by May 30 and Form 8 by October 30, and file the ITR and any tax audit on the dates that apply. If you are unsure about the audit threshold or have an old default, see our <Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>compliance calendar</Link> or <Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>company incorporation and compliance services</Link>.</p>

            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Limited Liability Partnership Act, 2008; LLP Rules, 2009 as amended by the LLP (Amendment) Rules, 2022 (additional fees); MCA General Circular 05/2026 dated October 24, 2026 (company forms only). See <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Corporate Affairs</a>.
            </p>
            <PostFooterLinks slug="llp-annual-compliance-form-8-form-11-due-dates" />

            <PostCTA segment="startup"
            heading="Behind on LLP filings?"
            description="We clear backlog Form 8 and Form 11 filings, DIR-3 KYC and the ITR for LLPs, and set up a calendar so it does not happen again."
            secondaryLabel="Incorporation Services"
            secondaryHref="/company-incorporation"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-registration-process-cost-india-2026" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP Registration: Process, Cost and Timeline</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited Company</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing for Companies</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC and DIN Application Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

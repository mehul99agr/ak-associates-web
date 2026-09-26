import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'XBRL Filing Requirements for Companies' },
  description: 'Which companies must file financial statements in XBRL format with the MCA, the applicability thresholds, the AOC-4 XBRL deadline, and the penalty for missing it.',
  keywords: [
    'xbrl filing requirements india', 'xbrl applicability companies', 'aoc-4 xbrl due date',
    'xbrl filing mca', 'who needs to file xbrl', 'xbrl taxonomy india', 'xbrl paid up capital turnover threshold',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/xbrl-filing-requirements-for-companies' },
  openGraph: {
    title: 'XBRL Filing Requirements for Companies',
    description: 'Applicability thresholds for XBRL financial statement filing with the MCA, the filing deadline, and what happens if you miss it.',
    url: 'https://agrawalkhandelwal.com/blog/xbrl-filing-requirements-for-companies',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XBRL Filing Requirements for Companies',
    description: 'Which companies must file financial statements in XBRL format, the applicability thresholds, and the AOC-4 XBRL deadline.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('XBRL Filing Requirements for Companies', 'xbrl-filing-requirements-for-companies')

const articleLd = buildArticleLd({
  headline: 'XBRL Filing Requirements for Companies',
  description: 'Applicability thresholds for filing financial statements in XBRL format with the MCA, the AOC-4 XBRL deadline, and the consequences of non-compliance.',
  datePublished: '2026-09-02',
  slug: 'xbrl-filing-requirements-for-companies',
})

const faqs: [string, string][] = [
  [
    'Which companies are required to file financial statements in XBRL?',
    'All listed companies and their Indian subsidiaries, companies with paid-up share capital of Rs 5 crore or more, and companies with turnover of Rs 100 crore or more are required to file their financial statements in XBRL format, along with any company that was required to file in XBRL for a preceding year (once covered, a company generally continues to file in XBRL even if it later falls below the threshold, unless it is specifically exempted).',
  ],
  [
    'Are private limited companies covered by the XBRL requirement?',
    'Yes, a private company is covered the moment it crosses the paid-up capital or turnover threshold; the requirement is based on these financial criteria and listed status, not on whether the company is public or private.',
  ],
  [
    'Which companies are exempt from XBRL filing?',
    'Non-banking financial companies, housing finance companies, and companies engaged in the banking and insurance sectors are exempted from filing financial statements in XBRL under the relevant MCA rules, even if they would otherwise cross the paid-up capital or turnover threshold.',
  ],
  [
    'What is the deadline for filing AOC-4 XBRL?',
    'The XBRL financial statements are filed through Form AOC-4 XBRL (or AOC-4 CFS XBRL for consolidated statements) within 30 days of the Annual General Meeting, the same outer window that applies to the ordinary AOC-4 filing. Missing this deadline attracts a late filing penalty that accrues per day of delay with no upper cap, so the cost of delay compounds the longer the filing remains pending.',
  ],
  [
    'Do I need to attach anything besides the tagged XBRL file?',
    'Yes. Since MCA rule changes taking effect in mid-2025, companies must also attach signed PDF copies of the financial statements, the Board’s Report, and the Auditor’s Report along with the tagged XBRL instance document, not the tagged file alone.',
  ],
  [
    'Does the small company threshold increase affect XBRL applicability?',
    'Not directly. The XBRL thresholds (Rs 5 crore paid-up capital or Rs 100 crore turnover, plus listed companies) are set separately from the small-company definition used for MGT-7A and other relaxations. A company that now qualifies as a small company under the revised definition can still be required to file in XBRL if it independently crosses the XBRL-specific thresholds, so the two should be checked separately each year rather than assumed to move together.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function XbrlFilingRequirementsBlog() {
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
              <span className="section-badge">Corporate Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                XBRL Filing Requirements for Companies
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 2, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>XBRL filing applies to all listed companies and their Indian subsidiaries, plus any company with paid-up capital of Rs 5 crore+ or turnover of Rs 100 crore+.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Once a company is covered, it generally keeps filing in XBRL in later years too, unless specifically exempted.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Banking, insurance, NBFC, and housing finance companies are exempt from the XBRL requirement.</li>
                    <li style={{ marginBottom: 0 }}>Filed via <strong>Form AOC-4 XBRL</strong> within 30 days of the AGM, with signed PDF financials also required as an attachment.</li>
                  </ul>
                </div>

                <p>XBRL, short for eXtensible Business Reporting Language, is a structured, machine-readable data format the Ministry of Corporate Affairs uses to standardise how companies report their financial statements. Instead of a PDF that a human reads line by line, an XBRL filing tags every figure (revenue, expenses, each balance sheet line) against a defined taxonomy element, which lets the MCA aggregate and analyse filings across companies automatically. Not every company files this way; the requirement is triggered by specific size and listing thresholds.</p>

                <h2>Who Must File in XBRL</h2>
                <p>Under the Companies (Filing of Documents and Forms in Extensible Business Reporting Language) Rules, the following companies are required to file their financial statements and other documents in XBRL format:</p>
                <ul>
                  <li>All companies listed on any stock exchange in India, and their Indian subsidiaries.</li>
                  <li>All companies with a paid-up share capital of <strong>Rs 5 crore or more</strong>.</li>
                  <li>All companies with a turnover of <strong>Rs 100 crore or more</strong>.</li>
                  <li>Any company that was required to file its financial statements in XBRL for a preceding financial year generally continues to be covered in subsequent years, so crossing the threshold once tends to be a lasting trigger rather than a one-time event, unless the company falls within an exempted category.</li>
                </ul>
                <p>The trigger is financial size and listed status, not the private/public classification of the company. A private limited company that crosses the paid-up capital or turnover threshold is just as much in scope as a listed public company, which is where growing startups and mid-sized businesses are often caught off guard, particularly after a funding round pushes paid-up capital past Rs 5 crore.</p>

                <h2>Who Is Exempt</h2>
                <p>Non-banking financial companies (NBFCs), housing finance companies, and companies operating in the banking and insurance sectors are exempted from this XBRL filing requirement, since these sectors already report to their respective sectoral regulators in prescribed formats. Outside these carved-out categories, there is no general exemption for companies that otherwise cross the paid-up capital or turnover threshold.</p>

                <h2>Forms and What Gets Filed</h2>
                <p>The financial statements are filed using <strong>Form AOC-4 XBRL</strong> for standalone financial statements, or <strong>Form AOC-4 CFS XBRL</strong> where consolidated financial statements also need to be filed. The filing consists of a tagged XBRL instance document generated against the applicable taxonomy (for FY 2025-26 reporting, based on the updated Ind AS taxonomy), along with the required certifications.</p>
                <p>A recent procedural change matters here: since a mid-2025 MCA rule update, companies must attach signed PDF copies of the financial statements, the Board&apos;s Report, and the Auditor&apos;s Report alongside the tagged XBRL file, rather than relying on the XBRL tagging alone. Skipping this attachment, even with a technically correct XBRL instance document, can result in the filing being treated as defective.</p>

                <h2>Deadline and Penalty for Delay</h2>
                <p>Form AOC-4 XBRL follows the same filing window as the ordinary AOC-4: within <strong>30 days of the Annual General Meeting</strong>. For a company with a September AGM, this generally puts the effective outer deadline in late October. Filing late attracts a penalty computed <strong>per day of delay, with no upper limit</strong>, which means the cost of procrastination on this filing compounds in a way many of the other one-time, capped ROC penalties do not.</p>
                <p>Because the same underlying financial statements also feed the ordinary AOC-4/MGT-7 <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filing</Link>, the practical approach is to finalise the audited financials, get board and shareholder approval, and prepare both the standard filing and the XBRL tagging in the same workflow rather than treating XBRL as an afterthought once AOC-4 is already filed.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Related Threshold Changes</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The definition of a &quot;small company&quot; under the Companies Act was separately revised with effect from December 1, 2025, raising its own paid-up capital and turnover thresholds. That change affects small-company relaxations like MGT-7A eligibility; it does not, on its own, change the Rs 5 crore / Rs 100 crore XBRL thresholds described above. The two should be checked independently each year rather than assumed to track each other.</p>
                </div>

                <h2>Why This Trips Up Growing Companies</h2>
                <p>The most common way a company gets caught out is a funding round or a strong revenue year that pushes it past the paid-up capital or turnover threshold for the first time, without anyone flagging that the XBRL requirement now applies alongside the standard filings. Because XBRL tagging takes materially longer to prepare correctly than a plain PDF filing, especially the first time a company does it, leaving it to the last few days before the 30-day AOC-4 deadline is a common and avoidable source of late-filing penalties.</p>
              </div>

              <PostCTA
            heading="Not sure if your company needs to file in XBRL this year?"
            description="We check your applicability against the current thresholds, prepare the XBRL tagging, and manage the AOC-4 deadline end to end."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/related-party-loans-and-section-185-186-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>Related Party Loans &amp; Section 185/186 Compliance</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/corporate-social-responsibility-csr-compliance-and-applicability" style={{ color: 'var(--primary)', fontWeight: 600 }}>CSR Compliance &amp; Applicability</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Corporate Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

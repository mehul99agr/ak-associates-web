import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Corporate Social Responsibility (CSR) Compliance & Applicability' },
  description: 'Section 135 CSR applicability thresholds for net worth, turnover, and net profit, the 2% spend rule, when a CSR committee is required, and the penalty for non-compliance.',
  keywords: [
    'section 135 csr applicability', 'csr compliance companies act', 'csr 2% net profit rule',
    'csr committee requirement', 'corporate social responsibility india', 'csr threshold net worth turnover',
    'csr rules 2026', 'csr spending obligation',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/corporate-social-responsibility-csr-compliance-and-applicability' },
  openGraph: {
    title: 'Corporate Social Responsibility (CSR) Compliance & Applicability',
    description: 'Which companies must comply with CSR under Section 135, the 2% spend rule, and when a CSR committee is required.',
    url: 'https://agrawalkhandelwal.com/blog/corporate-social-responsibility-csr-compliance-and-applicability',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Social Responsibility (CSR) Compliance & Applicability',
    description: 'Section 135 CSR thresholds, the 2% spend rule, CSR committee requirements, and penalties for non-compliance.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Corporate Social Responsibility (CSR) Compliance & Applicability', 'corporate-social-responsibility-csr-compliance-and-applicability')

const articleLd = buildArticleLd({
  headline: 'Corporate Social Responsibility (CSR) Compliance & Applicability',
  description: 'Section 135 Companies Act CSR applicability thresholds, the 2% average net profit spend rule, CSR committee requirements, and penalties for shortfall.',
  datePublished: '2026-09-02',
  slug: 'corporate-social-responsibility-csr-compliance-and-applicability',
})

const faqs: [string, string][] = [
  [
    'Which companies must comply with CSR under Section 135?',
    'A company is covered by Section 135 if, during the immediately preceding financial year, it has a net worth of Rs 500 crore or more, a turnover of Rs 1,000 crore or more, or a net profit of Rs 5 crore or more. Meeting any one of these three thresholds, not all three, brings the company within the CSR framework.',
  ],
  [
    'How is the 2% CSR spend calculated?',
    'The obligation is 2% of the company’s average net profit made during the three immediately preceding financial years, computed under Section 198 of the Companies Act (a specific method that adjusts profit for certain items and is not the same as book profit for accounting purposes). For a company in only its first, second, or third year of existence, the average is taken over whatever shorter period has actually elapsed.',
  ],
  [
    'Is a CSR committee mandatory for every company that qualifies?',
    'Not always. A CSR committee of the board is required where the company’s CSR obligation for the year exceeds Rs 50 lakh. Below that amount, the functions of the CSR committee can be discharged by the board of directors itself, without constituting a separate committee, though the CSR policy and spend obligation still apply.',
  ],
  [
    'What happens if a company does not spend the full 2% CSR amount?',
    'Any unspent CSR amount not tied to an ongoing project must generally be transferred to a specified fund (such as the PM CARES Fund or another fund listed in Schedule VII) within six months of the end of the financial year. If the unspent amount relates to an ongoing project, it must instead be transferred to a separate Unspent CSR Account within 30 days of the financial year-end and spent within the following three financial years, failing which the balance is similarly transferred to a specified fund.',
  ],
  [
    'Is CSR applicability based on the current year’s financials or the preceding year’s?',
    'The preceding financial year’s figures decide applicability for the current year. If a company crosses any of the three thresholds in a given year, its CSR obligations kick in for the following financial year, not retroactively for the year in which it crossed the threshold.',
  ],
  [
    'Has the CSR net profit threshold changed recently?',
    'As of this writing, the statutory net profit threshold remains Rs 5 crore. A legislative proposal to raise this specific trigger to Rs 10 crore has been reported, while the net worth (Rs 500 crore) and turnover (Rs 1,000 crore) triggers are not part of that proposal. Because this change was not yet in force at the time of writing, companies should continue to apply the Rs 5 crore net profit threshold and confirm the current position before finalising CSR applicability for any given year.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function CsrComplianceApplicabilityBlog() {
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
                Corporate Social Responsibility (CSR) Compliance &amp; Applicability
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
                    <li style={{ marginBottom: '0.4rem' }}>Section 135 applies if net worth is Rs 500 crore+, turnover is Rs 1,000 crore+, <strong>or</strong> net profit is Rs 5 crore+ (any one, not all three).</li>
                    <li style={{ marginBottom: '0.4rem' }}>The spend obligation is 2% of average net profit (computed under Section 198) over the preceding three financial years.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A separate CSR committee is only mandatory once the CSR obligation exceeds Rs 50 lakh; below that, the board itself can discharge the function.</li>
                    <li style={{ marginBottom: 0 }}>Unspent amounts must be transferred to a specified fund or an Unspent CSR Account within strict deadlines, not simply carried forward informally.</li>
                  </ul>
                </div>

                <p>Corporate Social Responsibility under the Companies Act 2013 is not voluntary once a company crosses the prescribed size thresholds; it is a statutory spending obligation with its own committee, policy, reporting, and unspent-fund transfer requirements. Section 135 sets out who is covered, how much must be spent, and what happens if the company does not spend it, and getting any of these wrong is now a compliance issue with real penalties, not just a governance best practice.</p>

                <h2>Who Is Covered: The Three Thresholds</h2>
                <p>A company falls within Section 135 if, in the <strong>immediately preceding financial year</strong>, it meets any one of the following three criteria:</p>
                <ul>
                  <li><strong>Net worth</strong> of Rs 500 crore or more, or</li>
                  <li><strong>Turnover</strong> of Rs 1,000 crore or more, or</li>
                  <li><strong>Net profit</strong> of Rs 5 crore or more.</li>
                </ul>
                <p>This is an &quot;any one&quot; test, not a cumulative one: a company with a modest turnover and net worth but a strong profit year can still be pulled into CSR applicability purely on the net profit limb. Because applicability is assessed against the preceding year&apos;s figures, a company that crosses a threshold in FY 2025-26 becomes subject to CSR obligations for FY 2026-27, not retroactively for the year it crossed the line.</p>
                <p>The obligation also does not automatically switch off the moment the company dips below the threshold again; the specific triggers and any transitional relief should be checked each year against the current rules rather than assumed.</p>

                <h2>The 2% Spend Rule</h2>
                <p>A covered company must ensure that its board spends, in every financial year, at least <strong>2% of the average net profit made during the three immediately preceding financial years</strong>. This average net profit is computed under <strong>Section 198</strong> of the Companies Act, a specific formula that adjusts standard book profit for certain add-backs and deductions (such as excluding capital profits and certain provisions), so it will generally not match the profit figure shown in the statutory financial statements without adjustment.</p>
                <p>For a company that has not yet completed three financial years of existence, the average is computed over the shorter period the company has actually been in existence. The CSR policy itself, approved by the board on the CSR committee&apos;s recommendation, has to specify the activities to be undertaken, which must fall within the categories listed in Schedule VII of the Act (education, healthcare, environmental sustainability, rural development, and similar categories), and cannot simply be discretionary corporate spending dressed up as CSR.</p>

                <h2>When a CSR Committee Is Required</h2>
                <p>Every company covered by Section 135 must have a CSR policy, but a dedicated <strong>CSR committee of the board</strong> is only mandatory where the company&apos;s CSR obligation for the year exceeds <strong>Rs 50 lakh</strong>. Where the computed 2% obligation is Rs 50 lakh or below, the functions that would otherwise sit with the CSR committee, recommending the policy, the amount to spend, and monitoring implementation, can be discharged directly by the board of directors, without constituting a separate committee. This is a common area of confusion: crossing the Section 135 applicability threshold does not automatically mean a company needs a formal committee; the committee requirement is a separate, smaller-amount test layered on top.</p>

                <h2>Unspent CSR Amounts</h2>
                <p>If the full CSR amount is not spent in a given year, the treatment depends on whether the shortfall relates to an ongoing project:</p>
                <ul>
                  <li><strong>Not related to an ongoing project:</strong> the unspent amount must be transferred to a fund specified in Schedule VII (such as the PM CARES Fund or another eligible fund) within <strong>six months</strong> of the end of the financial year.</li>
                  <li><strong>Related to an ongoing project:</strong> the unspent amount must instead be transferred to a separate <strong>Unspent CSR Account</strong> within <strong>30 days</strong> of the financial year-end, and then spent on that project within the following three financial years. Any balance still unspent after that three-year window must itself be transferred to a Schedule VII fund.</li>
                </ul>
                <p>Failing to make either transfer within the prescribed timeline is treated as a distinct compliance failure from simply under-spending the 2% obligation, and both carry their own consequences.</p>

                <h2>Penalties for Non-Compliance</h2>
                <p>Where a company fails to spend the required CSR amount and does not make the corresponding transfer within the prescribed timelines, the company and every officer in default are liable to a monetary penalty under Section 135. Because the unspent-amount transfer deadlines are specific and short (30 days or six months, depending on the category), the more common real-world failure is not a company deciding to skip CSR altogether, but simply missing the transfer window after an ongoing project runs behind schedule.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on the Net Profit Threshold</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>A legislative proposal to raise the net profit trigger from Rs 5 crore to Rs 10 crore has been reported, while the net worth and turnover triggers are not part of that specific proposal. As of this writing that change was not yet in force, so this guide applies the current Rs 5 crore threshold throughout; confirm the applicable figure for your specific financial year before finalising CSR applicability, since a threshold change of this kind can move a company in or out of scope entirely.</p>
                </div>

                <p>CSR compliance sits alongside the company&apos;s other annual obligations, and the spend, committee, and reporting requirements need to be tracked on the same calendar as the statutory audit and <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filing</Link>, since the CSR report forms part of the Board&apos;s Report filed with those returns.</p>
              </div>

              <PostCTA
            heading="Not sure if your company is within CSR applicability this year?"
            description="We check the Section 135 thresholds against your financials, calculate the spend obligation, and manage the CSR committee, policy, and reporting requirements."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/xbrl-filing-requirements-for-companies" style={{ color: 'var(--primary)', fontWeight: 600 }}>XBRL Filing Requirements for Companies</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/related-party-loans-and-section-185-186-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>Related Party Loans &amp; Section 185/186 Compliance</Link></li>
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

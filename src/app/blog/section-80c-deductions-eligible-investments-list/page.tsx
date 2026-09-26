import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Section 80C Deductions: Complete List of Eligible Investments',
  description: 'The full Rs 1.5 lakh Section 80C basket: PPF, ELSS, life insurance, NSC, tax-saver FDs, home loan principal, EPF, tuition fees and more, plus what it does not cover.',
  keywords: [
    'Section 80C deductions list', 'Section 80C eligible investments', '80C limit Rs 1.5 lakh',
    'ELSS vs PPF 80C', 'tax saving investments 80C', '80C deduction old tax regime',
    'Section 80C investment options', 'best 80C investments India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-80c-deductions-eligible-investments-list' },
  openGraph: {
    title: 'Section 80C Deductions: Complete List of Eligible Investments',
    description: 'The full Rs 1.5 lakh basket of eligible investments and expenses, and the common mistakes taxpayers make claiming it.',
    url: 'https://agrawalkhandelwal.com/blog/section-80c-deductions-eligible-investments-list',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 80C Deductions: Complete List of Eligible Investments',
    description: 'The full Rs 1.5 lakh basket and common mistakes to avoid while claiming it.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 80C Deductions: Complete List of Eligible Investments', 'section-80c-deductions-eligible-investments-list')

const articleLd = buildArticleLd({
  headline: 'Section 80C Deductions: Complete List of Eligible Investments',
  description: 'The complete Rs 1.5 lakh Section 80C basket of eligible investments and expenses, how it interacts with 80CCD(1B) NPS, and common claim mistakes.',
  datePublished: '2026-07-24',
  slug: 'section-80c-deductions-eligible-investments-list',
})

const faqs: [string, string][] = [
  ['What is the maximum deduction available under Section 80C?', 'The overall Section 80C deduction limit is Rs 1.5 lakh per financial year, and this is a combined ceiling across all eligible investments and expenses claimed under the section put together, not a separate limit for each item.'],
  ['What are the most common Section 80C investment options?', 'Common options include Employee Provident Fund contributions, Public Provident Fund (PPF), Equity Linked Savings Scheme (ELSS) mutual funds, life insurance premiums, five-year tax-saver bank fixed deposits, National Savings Certificates (NSC), and Sukanya Samriddhi Yojana for a girl child. Principal repayment on a home loan and children\'s tuition fees also qualify.'],
  ['Is Section 80C available under the new tax regime?', 'No. Section 80C, like most other Chapter VI-A deductions, is available only under the old tax regime. If you opt for the new tax regime, which is now the default, none of these investments reduce your taxable income, though they may still make sense on their own investment merits.'],
  ['Is the additional NPS deduction under Section 80CCD(1B) part of the Rs 1.5 lakh 80C limit?', 'No. Section 80CCD(1B) provides an additional deduction of up to Rs 50,000 for National Pension System contributions, over and above the Rs 1.5 lakh Section 80C limit. This makes NPS one of the few ways to claim more than Rs 1.5 lakh in retirement-linked deductions in a year under the old regime.'],
  ['Does ELSS have a lock-in period?', 'Yes. ELSS mutual funds have a mandatory 3-year lock-in from the date of each investment (or each SIP instalment), which is the shortest lock-in among all Section 80C options, though the amount still carries market risk since it is equity-linked.'],
  ['Can I claim 80C for a life insurance premium paid for my spouse or children?', 'Yes, premiums paid for a life insurance policy on your own life, your spouse\'s life, or any child\'s life (dependent or not) qualify under Section 80C, subject to the policy meeting the sum-assured-to-premium ratio conditions prescribed for the deduction, and within the overall Rs 1.5 lakh cap.'],
]

const faqLd = buildFaqLd(faqs)

export default function Section80CBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Income Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Section 80C Deductions: Complete List of Eligible Investments</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 24, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Section 80C caps total deductions at <strong>Rs 1.5 lakh a year</strong>, combined across every eligible investment and expense claimed under it.</li>
                  <li style={{ marginBottom: '0.4rem' }}>EPF, PPF, ELSS, life insurance, tax-saver FDs, NSC, Sukanya Samriddhi, home loan principal, and tuition fees all draw from the same Rs 1.5 lakh basket.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Section 80C is available <strong>only under the old tax regime</strong>, not the new (default) regime.</li>
                  <li style={{ marginBottom: 0 }}>An extra Rs 50,000 NPS deduction under Section 80CCD(1B) sits <strong>outside</strong> the 80C limit and can be claimed on top of it.</li>
                </ul>
              </div>

              <p>Section 80C is the most widely used deduction in Indian personal tax planning, but the Rs 1.5 lakh limit is a single shared basket, not Rs 1.5 lakh per item. Knowing everything that draws from that basket, and what sits outside it, is what separates efficient tax planning from over-investing in one product out of habit.</p>

              <h2>The Rs 1.5 Lakh Combined Limit</h2>
              <p>Section 80C allows a deduction from total taxable income of up to <strong>Rs 1.5 lakh per financial year</strong>, available only to individuals and Hindu Undivided Families opting for the old tax regime. This is a structural provision, and the deduction limit itself is expected to carry forward unchanged once the Income Tax Act 2025 takes effect from April 1, 2026, even as the section is reorganised in the new law; confirm the exact new section reference once the final notified text is available before citing it in official filings.</p>

              <h2>Eligible Investments and Expenses</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Category</th><th style={thStyle}>Examples</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}><strong>Retirement-linked</strong></td><td style={tdStyle}>Employee Provident Fund (EPF), Public Provident Fund (PPF), Voluntary Provident Fund (VPF)</td></tr>
                    <tr><td style={tdAltStyle}><strong>Market-linked</strong></td><td style={tdAltStyle}>Equity Linked Savings Scheme (ELSS) mutual funds</td></tr>
                    <tr><td style={tdStyle}><strong>Insurance</strong></td><td style={tdStyle}>Life insurance premiums (self, spouse, or any child)</td></tr>
                    <tr><td style={tdAltStyle}><strong>Fixed income</strong></td><td style={tdAltStyle}>5-year tax-saver bank fixed deposits, National Savings Certificate (NSC), Post Office Time Deposit (5-year)</td></tr>
                    <tr><td style={tdStyle}><strong>Girl child savings</strong></td><td style={tdStyle}>Sukanya Samriddhi Yojana</td></tr>
                    <tr><td style={tdAltStyle}><strong>Housing</strong></td><td style={tdAltStyle}>Principal repayment on a home loan, stamp duty and registration charges (in the year of purchase)</td></tr>
                    <tr><td style={tdStyle}><strong>Education</strong></td><td style={tdStyle}>Tuition fees for up to two children, paid to a school, college, university, or educational institution in India</td></tr>
                    <tr><td style={tdAltStyle}><strong>Pension</strong></td><td style={tdAltStyle}>Contribution to certain pension funds under Section 80CCC (within the overall 80C limit)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Whatever combination you choose from this list, the total deduction claimed cannot exceed Rs 1.5 lakh in a year. Contributing Rs 1.5 lakh to PPF and also paying Rs 1.5 lakh in life insurance premiums does not get you Rs 3 lakh of deduction; it is still capped at Rs 1.5 lakh in total.</p>

              <h2>What 80C Does Not Cover</h2>
              <p>A few tax-saving items are commonly and mistakenly assumed to fall under Section 80C, but sit in their own separate sections instead, each with its own independent limit:</p>
              <ul>
                <li><strong>Section 80CCD(1B):</strong> an additional Rs 50,000 deduction for National Pension System (NPS) contributions, over and above the Rs 1.5 lakh 80C limit</li>
                <li><strong>Section 80D:</strong> health insurance premiums, a separate deduction with its own limits based on age and family composition</li>
                <li><strong>Section 80E:</strong> interest (not principal) on an education loan, fully deductible with no upper cap for a defined number of years</li>
                <li><strong>Home loan interest under Section 24(b):</strong> a separate deduction from house property income, distinct from the 80C claim for principal repayment</li>
              </ul>
              <p>The NPS route under Section 80CCD(1B) is worth flagging specifically: since it operates outside the 80C basket, someone who has already used up the full Rs 1.5 lakh limit through EPF, PPF, or insurance can still add another Rs 50,000 of deduction through NPS, taking old-regime deduction capacity on these two provisions alone to Rs 2 lakh.</p>

              <h2>Choosing Between the Options</h2>
              <p>There is no single best 80C investment; the right mix depends on liquidity needs, risk appetite, and how much of the limit is already used up by compulsory items like EPF and home loan principal. A few practical points worth weighing:</p>
              <ul>
                <li><strong>ELSS</strong> has the shortest lock-in among 80C options (3 years) but carries market risk since it is equity-linked</li>
                <li><strong>PPF</strong> has a long lock-in (15 years, with partial withdrawal allowed from year 7) but offers government-backed, tax-free returns</li>
                <li><strong>Life insurance</strong> bought purely to fill the 80C basket, rather than for genuine protection need, often carries a lower return than pure investment options; it&apos;s worth separating the insurance decision from the tax-saving decision</li>
                <li><strong>EPF and home loan principal</strong> are typically compulsory or near-compulsory outflows that many salaried taxpayers already have; check how much of the Rs 1.5 lakh limit these alone consume before actively investing more elsewhere</li>
              </ul>

              <h2>Remember: Old Regime Only</h2>
              <p>Section 80C, like <Link href="/blog/hra-exemption-calculation-documents-needed" style={{ color: 'var(--primary)', fontWeight: 600 }}>HRA exemption</Link>, is available only under the old tax regime. If you compute your tax under the new regime, which is now the default unless you actively opt for the old regime while filing, none of these 80C investments reduce your taxable income for that year, even though many of them remain worthwhile on pure investment grounds. Run the comparison between both regimes using your actual eligible deductions before deciding which one to file under.</p>

              <h2>A Practical Year-End Checklist</h2>
              <ol>
                <li>Add up EPF contributions already deducted from your salary through the year</li>
                <li>Add home loan principal repayment for the year, from your loan statement</li>
                <li>Add life insurance premiums actually paid (not merely due) during the financial year</li>
                <li>Calculate how much of the Rs 1.5 lakh limit remains</li>
                <li>Only then decide how much fresh investment (PPF, ELSS, NSC, Sukanya Samriddhi) is actually needed to use up the remaining room, rather than investing blindly up to Rs 1.5 lakh from scratch</li>
              </ol>
            </div>

            <PostCTA
            heading="Planning your tax-saving investments for the year?"
            description="We help individuals map exactly how much 80C room they already have used and where the remaining amount is best placed."
            secondaryLabel="Explore Our Services"
            secondaryHref="/services"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/hra-exemption-calculation-documents-needed" style={{ color: 'var(--primary)', fontWeight: 600 }}>HRA Exemption: Calculation &amp; Documents Needed</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-16-explained-how-to-read-file-itr" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 16 Explained: How to Read It and File Your ITR</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-mutual-fund-stock-taxation-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Mutual Fund &amp; Stock Taxation in India</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

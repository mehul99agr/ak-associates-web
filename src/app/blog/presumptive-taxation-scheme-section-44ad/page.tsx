import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Presumptive Taxation Scheme Section 44AD: Eligibility & Benefits',
  description: 'Section 44AD presumptive taxation for small businesses and traders: eligibility, turnover limits (Rs 2 crore / Rs 3 crore for digital receipts), 6% and 8% deemed profit rates, and when it helps vs hurts.',
  keywords: [
    'Section 44AD', 'presumptive taxation scheme', '44AD turnover limit',
    'presumptive income business', '44AD eligibility', '44AD 6% 8% profit',
    'presumptive taxation small business', 'Section 58 Income Tax Act 2025',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/presumptive-taxation-scheme-section-44ad' },
  openGraph: {
    title: 'Presumptive Taxation Scheme Section 44AD: Eligibility & Benefits',
    description: 'Turnover limits, deemed profit rates, eligibility conditions, and the lock-in rule for Section 44AD presumptive taxation.',
    url: 'https://agrawalkhandelwal.com/blog/presumptive-taxation-scheme-section-44ad',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 44AD Presumptive Taxation: Eligibility & Benefits',
    description: 'Turnover limits, deemed profit rates, and eligibility for Section 44AD presumptive taxation.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Presumptive Taxation Scheme Section 44AD: Eligibility & Benefits', 'presumptive-taxation-scheme-section-44ad')

const articleLd = buildArticleLd({
  headline: 'Presumptive Taxation Scheme Section 44AD: Eligibility & Benefits',
  description: 'Section 44AD presumptive taxation for small businesses and traders: turnover limits, deemed profit rates of 6% and 8%, eligibility conditions, and the five-year lock-in rule.',
  datePublished: '2026-08-02',
  slug: 'presumptive-taxation-scheme-section-44ad',
})

const faqs: [string, string][] = [
  [
    'What is the turnover limit for Section 44AD?',
    'The base eligibility limit is Rs 2 crore in total turnover for the financial year. This is enhanced to Rs 3 crore if at least 95% of both receipts and payments during the year are through banking channels or digital modes (not cash). Businesses above these limits fall outside 44AD and need regular books of account with tax audit as applicable.',
  ],
  [
    'What is the deemed profit rate under Section 44AD?',
    'Income is deemed to be 8% of turnover received in cash, and 6% of turnover received through banking or digital channels (account payee cheque, bank transfer, UPI, etc.). The lower 6% rate is a direct incentive for digital transactions. You can also declare a higher percentage than 6%/8% voluntarily if your actual profit margin is higher.',
  ],
  [
    'Who is eligible for Section 44AD?',
    'Resident individuals, Hindu Undivided Families (HUFs), and partnership firms (excluding LLPs) carrying on an eligible business are covered, provided turnover is within the prescribed limit. It does not apply to professionals covered separately under Section 44ADA, businesses of plying, hiring or leasing goods carriages under Section 44AE, or anyone earning commission or brokerage income, agency business, or LLPs, all of which are excluded from 44AD.',
  ],
  [
    'Do I need to maintain books of account under Section 44AD?',
    'No. The core benefit of the scheme is that you are not required to maintain regular books of account or get accounts audited under Section 44AB (now Section 63), provided you declare income at or above the prescribed 6%/8% rate. If you declare a lower profit, and your total income exceeds the basic exemption limit, you lose this exemption and must maintain books and get a tax audit done.',
  ],
  [
    'What happens if I opt out of 44AD after using it?',
    'If you declare income under 44AD in one year and then opt out (declare lower profit or don\'t use the scheme) in any of the next five consecutive years, you are barred from using 44AD again for five assessment years after that, and you must maintain regular books of account and get a tax audit done for those years if your income exceeds the basic exemption limit. This lock-in discourages taxpayers from switching in and out opportunistically.',
  ],
  [
    'Is Section 44AD renumbered under the Income Tax Act 2025?',
    'Yes. Presumptive taxation for eligible businesses under the old Section 44AD is now covered under Section 58 of the Income Tax Act 2025, along with the presumptive scheme for professionals (44ADA) and for goods carriages (44AE). The eligibility conditions and deemed profit rates carry forward; only the section citation changes.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function Section44ADBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Presumptive Taxation Scheme Section 44AD: Eligibility &amp; Benefits
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 2, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Section 44AD (now <strong>Section 58</strong> under the Income Tax Act 2025) lets small businesses and traders declare income as a flat percentage of turnover instead of maintaining full books.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Eligible up to <strong>Rs 2 crore turnover</strong>, extended to <strong>Rs 3 crore</strong> if at least 95% of receipts and payments are digital/banking, not cash.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Deemed profit: <strong>8% of cash turnover, 6% of digital turnover</strong>.</li>
                    <li style={{ marginBottom: 0 }}>Opting out after using the scheme triggers a <strong>5-year lock-out</strong> with mandatory books and audit, so think before switching in and out.</li>
                  </ul>
                </div>

                <p>Running a small trading or business operation and maintaining full-fledged books of account, ledgers, and getting a tax audit done every year is often disproportionate to the size of the business. Section 44AD exists precisely for this: a presumptive taxation scheme that lets small businesses declare income at a fixed percentage of turnover, skip detailed bookkeeping, and file a simpler return. Here is exactly who qualifies and how the numbers work.</p>

                <h2>What Is Section 44AD?</h2>
                <p><strong>Section 44AD (now Section 58 under the Income Tax Act 2025) is a presumptive taxation scheme for small businesses that lets eligible taxpayers declare a fixed percentage of turnover as taxable income, without maintaining regular books of account or undergoing a tax audit.</strong> Instead of computing actual profit from detailed accounts, you simply apply the prescribed rate to your turnover and that becomes your business income for the year.</p>

                <h2>Who Is Eligible</h2>
                <p>The scheme is available to:</p>
                <ul>
                  <li><strong>Resident individuals</strong> carrying on an eligible business</li>
                  <li><strong>Resident Hindu Undivided Families (HUFs)</strong></li>
                  <li><strong>Resident partnership firms</strong> (but not Limited Liability Partnerships)</li>
                </ul>
                <p>The business must be an &quot;eligible business,&quot; meaning it is not one of the specifically excluded categories: businesses of plying, hiring, or leasing goods carriages (covered separately under Section 44AE), agency business, or any business earning income in the nature of commission or brokerage. Professionals such as doctors, lawyers, and consultants are excluded here too; they fall under the separate <Link href="/blog/presumptive-taxation-professionals-section-44ada" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44ADA scheme</Link> with its own limits and profit percentage. LLPs are excluded entirely from 44AD, regardless of turnover.</p>

                <h2>Turnover Limits</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Condition</th>
                      <th style={thStyle}>Eligible Turnover Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Standard (any mix of cash and digital receipts)</td>
                      <td style={tdStyle}>Up to Rs 2 crore</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>At least 95% of both receipts and payments in the year are through banking/digital channels</td>
                      <td style={tdAltStyle}>Up to Rs 3 crore</td>
                    </tr>
                  </tbody>
                </table>
                <p>The enhanced Rs 3 crore limit is a deliberate incentive to move away from cash. If your business runs largely on UPI, bank transfers, and account payee instruments, with cash making up 5% or less of both what you receive and what you pay out, you can use presumptive taxation up to the higher threshold.</p>

                <h2>Deemed Profit Rates: 6% vs 8%</h2>
                <p>Once turnover is within the eligible limit, income is deemed to be:</p>
                <ul>
                  <li><strong>8% of turnover</strong> received in cash</li>
                  <li><strong>6% of turnover</strong> received through banking channels or digital modes (cheque, NEFT/RTGS, UPI, card, etc.)</li>
                </ul>
                <p>Most businesses today run a mix of both, so the actual deemed income is a blended figure: 6% applied to the digital portion and 8% applied to the cash portion. You are also free to voluntarily declare a higher percentage than these minimums if your real profit margin is higher; the 6%/8% rates are a floor, not a cap.</p>

                <h2>Key Benefits of Opting for 44AD</h2>
                <ul>
                  <li><strong>No mandatory books of account</strong> under Section 44AA (now Section 62), as long as you declare income at or above the prescribed rate.</li>
                  <li><strong>No tax audit</strong> under Section 44AB (now Section 63), which otherwise applies once turnover crosses the standard audit threshold.</li>
                  <li><strong>Simpler compliance</strong>: a straightforward computation instead of maintaining a full trial balance and profit and loss account.</li>
                  <li><strong>Reduced advance tax burden</strong>: taxpayers under 44AD only need to pay their entire advance tax in one instalment by March 15 of the financial year, instead of the usual four quarterly instalments.</li>
                </ul>

                <h2>When Declaring Lower Profit Removes the Benefit</h2>
                <p>If your actual profit is lower than the prescribed 6%/8% and you want to declare that lower, actual figure instead, you can, but only by giving up the presumptive scheme&apos;s exemptions. If your total income (from all sources) exceeds the basic exemption limit in that case, you are required to maintain regular books of account and get a tax audit done, exactly as a non-presumptive taxpayer would. This is a common trap: businesses assume they can freely declare whatever profit suits them under 44AD without consequence, but going below the deemed rate reinstates full compliance obligations.</p>

                <h2>The Five-Year Lock-In Rule</h2>
                <p>Section 44AD includes a rule specifically designed to prevent taxpayers from cherry-picking the scheme only in loss years. If you opt for presumptive taxation in one year and then opt out (by declaring profit below the prescribed rate) in any of the following five consecutive assessment years, you are barred from claiming the benefit of 44AD again for the five assessment years following that opt-out year. During that lock-out period, you must maintain full books of account and get a tax audit done if your income exceeds the basic exemption limit, regardless of your actual turnover. Plan your election with this consequence in mind rather than switching year to year based on convenience.</p>

                <h2>Is 44AD Right for Your Business?</h2>
                <p>Presumptive taxation under 44AD works well when your actual profit margin is close to or above 6-8% of turnover, since you pay tax on the deemed amount regardless of your real profit, and it saves significant compliance effort. If your genuine margins are thin, well below these rates, opting for actual computation with proper books (and the tax audit it entails) may result in a lower tax outgo, though at a higher compliance cost. This is a judgment call best made with your CA reviewing your specific numbers, especially given the five-year lock-in consequence of getting it wrong.</p>
              </div>

              <PostCTA
            heading="Not sure if presumptive taxation suits your business?"
            description="We help small businesses and traders compare 44AD against regular computation and file whichever route is genuinely more tax-efficient."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20know%20if%20Section%2044AD%20presumptive%20taxation%20suits%20my%20business."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/presumptive-taxation-professionals-section-44ada" style={{ color: 'var(--primary)', fontWeight: 600 }}>Presumptive Taxation for Professionals: Section 44ADA Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-composition-scheme-eligibility-rates" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Composition Scheme: Eligibility &amp; Rates</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Slabs FY 2026-27: Old vs New Regime</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/belated-revised-updated-returns-itr-u-139-8a" style={{ color: 'var(--primary)', fontWeight: 600 }}>Belated, Revised &amp; Updated Returns: ITR-U Under Section 139(8A)</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

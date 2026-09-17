import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Presumptive Taxation for Professionals: Section 44ADA Explained',
  description: 'Section 44ADA presumptive taxation for specified professionals: eligibility, gross receipts limits (Rs 50 lakh / Rs 75 lakh for digital receipts), the 50% deemed profit rate, and how it differs from 44AD.',
  keywords: [
    'Section 44ADA', 'presumptive taxation professionals', '44ADA limit',
    '44ADA eligible professions', 'presumptive income professionals',
    '50% deemed profit 44ADA', '44ADA vs 44AD', 'Section 58 Income Tax Act 2025',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/presumptive-taxation-professionals-section-44ada' },
  openGraph: {
    title: 'Presumptive Taxation for Professionals: Section 44ADA Explained',
    description: 'Gross receipts limits, the 50% deemed profit rate, eligible professions, and how 44ADA differs from 44AD.',
    url: 'https://agrawalkhandelwal.com/blog/presumptive-taxation-professionals-section-44ada',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 44ADA Presumptive Taxation for Professionals',
    description: 'Gross receipts limits, the 50% deemed profit rate, and eligible professions under Section 44ADA.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Presumptive Taxation for Professionals: Section 44ADA Explained', 'presumptive-taxation-professionals-section-44ada')

const articleLd = buildArticleLd({
  headline: 'Presumptive Taxation for Professionals: Section 44ADA Explained',
  description: 'Section 44ADA presumptive taxation for specified professionals: gross receipts limits, the 50% deemed profit rate, eligible professions, and how it differs from the 44AD scheme for traders.',
  datePublished: '2026-08-03',
  slug: 'presumptive-taxation-professionals-section-44ada',
})

const faqs: [string, string][] = [
  [
    'What is the gross receipts limit for Section 44ADA?',
    'The base limit is Rs 50 lakh in gross receipts for the financial year. This is enhanced to Rs 75 lakh if at least 95% of gross receipts are received through banking or digital channels, not cash. Professionals exceeding these limits fall outside 44ADA and must maintain regular books of account, with tax audit applicable as per the standard rules.',
  ],
  [
    'What percentage of income is deemed profit under Section 44ADA?',
    'Fifty percent (50%) of gross receipts is deemed to be taxable profit, regardless of how the receipts were received (cash or digital); unlike 44AD, there is no separate 6%/8% split by payment mode here. You can also voluntarily declare a higher percentage than 50% if your actual profit margin is higher.',
  ],
  [
    'Who is eligible for Section 44ADA?',
    'Resident individuals and partnership firms (excluding LLPs) carrying on a specified profession are eligible, provided gross receipts are within the prescribed limit. Specified professions include legal, medical, engineering, architectural, accountancy, technical consultancy, interior decoration, and certain other notified professions such as authorised representatives, film artists, company secretaries, and information technology professionals meeting the notified criteria.',
  ],
  [
    'What is the difference between Section 44AD and Section 44ADA?',
    'Section 44AD applies to eligible trading and business activities with turnover limits of Rs 2 crore (Rs 3 crore for digital-heavy receipts) and deemed profit of 6% (digital) or 8% (cash) of turnover. Section 44ADA applies specifically to specified professionals with lower gross receipts limits of Rs 50 lakh (Rs 75 lakh for digital-heavy receipts) and a flat 50% deemed profit rate regardless of payment mode. They are separate schemes with separate eligibility criteria; a professional cannot use 44AD, and a trader cannot use 44ADA.',
  ],
  [
    'Do I need to maintain books of account under Section 44ADA?',
    'No, not if you declare profit at or above the prescribed 50% of gross receipts. If you declare a lower profit and your total income exceeds the basic exemption limit, you lose this exemption and are required to maintain books of account under Section 44AA (now Section 62) and get a tax audit done under Section 44AB (now Section 63).',
  ],
  [
    'Is Section 44ADA renumbered under the Income Tax Act 2025?',
    'Yes. Presumptive taxation for specified professionals under the old Section 44ADA is now covered under Section 58 of the Income Tax Act 2025, the same section number that also covers the erstwhile 44AD (business) and 44AE (goods carriage) presumptive schemes as distinct sub-provisions. Do not conflate the eligibility criteria across these schemes just because they now share a section number; each retains its own limits and deemed profit rate.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function Section44ADABlog() {
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
                Presumptive Taxation for Professionals: Section 44ADA Explained
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 3, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Section 44ADA (now <strong>Section 58</strong> under the Income Tax Act 2025) is the presumptive scheme for <strong>specified professionals</strong>, not traders.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Eligible up to <strong>Rs 50 lakh gross receipts</strong>, extended to <strong>Rs 75 lakh</strong> if at least 95% of receipts are digital/banking, not cash.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Deemed profit is a flat <strong>50% of gross receipts</strong>, regardless of cash or digital mode.</li>
                    <li style={{ marginBottom: 0 }}>Distinct from Section 44AD (traders and businesses): different limits, different professions covered, different deemed rate; don&apos;t assume the two schemes work the same way.</li>
                  </ul>
                </div>

                <p>Doctors, lawyers, architects, chartered accountants, and other professionals with relatively straightforward income and expense patterns often find full bookkeeping and tax audit disproportionately burdensome for their scale of practice. Section 44ADA offers exactly this group a presumptive taxation route: declare a flat 50% of your gross receipts as taxable income, skip detailed books, and file a simpler return. It is a separate scheme from the 44AD scheme available to traders and businesses, with its own limits and its own list of eligible professions.</p>

                <h2>What Is Section 44ADA?</h2>
                <p><strong>Section 44ADA (now Section 58 under the Income Tax Act 2025) is a presumptive taxation scheme specifically for specified professionals, letting them declare 50% of gross receipts as taxable income without maintaining detailed books of account or undergoing a tax audit.</strong> It exists alongside, but separately from, Section 44AD, which covers eligible trading and business activities rather than professional services.</p>

                <h2>Who Counts as a &quot;Specified Professional&quot;</h2>
                <p>Section 44ADA applies only to professions specifically notified under the law, including:</p>
                <ul>
                  <li>Legal profession</li>
                  <li>Medical profession</li>
                  <li>Engineering</li>
                  <li>Architectural profession</li>
                  <li>Accountancy (chartered accountants and similarly qualified professionals)</li>
                  <li>Technical consultancy</li>
                  <li>Interior decoration</li>
                  <li>Other notified professions, including authorised representatives, film artists, company secretaries, and information technology professionals meeting the notified criteria</li>
                </ul>
                <p>If your income comes from a profession not on this notified list, or from a trading or business activity rather than a profession, 44ADA does not apply to you; you would need to check eligibility under <Link href="/blog/presumptive-taxation-scheme-section-44ad" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44AD</Link> instead, or fall back to regular computation with proper books.</p>
                <p>Eligible taxpayers are <strong>resident individuals and partnership firms</strong> (again, excluding LLPs) carrying on one of these specified professions.</p>

                <h2>Gross Receipts Limits</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Condition</th>
                      <th style={thStyle}>Eligible Gross Receipts Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Standard (any mix of cash and digital receipts)</td>
                      <td style={tdStyle}>Up to Rs 50 lakh</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>At least 95% of gross receipts through banking/digital channels</td>
                      <td style={tdAltStyle}>Up to Rs 75 lakh</td>
                    </tr>
                  </tbody>
                </table>
                <p>Note that the enhanced-limit condition for 44ADA looks only at the receipts side (unlike 44AD, which checks both receipts and payments), reflecting that most professional practices have simpler payment-side transactions than a trading business.</p>

                <h2>The 50% Deemed Profit Rate</h2>
                <p>Once gross receipts are within the eligible limit, taxable income is deemed to be <strong>50% of gross receipts</strong>, applied uniformly regardless of whether the receipt was in cash or digital form. This is a single flat rate, unlike the 6%/8% split under 44AD. You are free to voluntarily declare a higher percentage than 50% if your actual profit margin is genuinely higher; the 50% figure is a floor, not a ceiling.</p>
                <p>For many professionals with modest overheads (a home office, a small support staff, minimal equipment cost), actual profit margins often run close to or above 50% of receipts, which makes this scheme genuinely attractive rather than merely a compliance shortcut.</p>

                <h2>Key Benefits</h2>
                <ul>
                  <li><strong>No mandatory books of account</strong> under Section 44AA (now Section 62), as long as income is declared at or above 50% of gross receipts.</li>
                  <li><strong>No tax audit</strong> under Section 44AB (now Section 63).</li>
                  <li><strong>Single advance tax instalment</strong>: like 44AD, professionals under 44ADA pay their full advance tax liability in one instalment by March 15, instead of the usual four quarterly instalments through the year.</li>
                  <li><strong>Simplified return filing</strong>, since there is no requirement to prepare a detailed profit and loss statement or balance sheet for the practice.</li>
                </ul>

                <h2>Declaring Lower Than 50%: What It Costs You</h2>
                <p>If your actual profit margin is genuinely below 50% of gross receipts and you want to declare that lower, actual figure, you can, but only by exiting the presumptive scheme&apos;s protections for that year. If your total income (from all sources) exceeds the basic exemption limit in that case, you must maintain regular books of account and get a tax audit done, just as you would without opting for 44ADA at all. This is worth planning for in advance, since discovering it after the fact (with no books already maintained) creates a genuine compliance problem at filing time.</p>

                <h2>44ADA vs 44AD: Do Not Conflate the Two</h2>
                <p>Because both schemes were renumbered to the same new-Act section (Section 58 under the Income Tax Act 2025), it is easy to assume they now work identically. They do not; the section number is shared, but the sub-provisions, eligibility, limits, and deemed profit rates remain entirely separate:</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Feature</th>
                      <th style={thStyle}>Section 44AD (Traders/Business)</th>
                      <th style={thStyle}>Section 44ADA (Professionals)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Eligible taxpayers</td>
                      <td style={tdStyle}>Resident individuals, HUFs, partnership firms in eligible business</td>
                      <td style={tdStyle}>Resident individuals, partnership firms in specified professions</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>Base limit</td>
                      <td style={tdAltStyle}>Rs 2 crore turnover</td>
                      <td style={tdAltStyle}>Rs 50 lakh gross receipts</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Enhanced limit (digital receipts)</td>
                      <td style={tdStyle}>Rs 3 crore</td>
                      <td style={tdStyle}>Rs 75 lakh</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>Deemed profit rate</td>
                      <td style={tdAltStyle}>6% (digital) / 8% (cash) of turnover</td>
                      <td style={tdAltStyle}>Flat 50% of gross receipts</td>
                    </tr>
                  </tbody>
                </table>
                <p>A professional cannot elect 44AD, and a trader cannot elect 44ADA; they are mutually exclusive based on the nature of the income. Get this classification right before choosing a scheme, since filing under the wrong one can invite scrutiny during processing.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Practicing a specified profession and want to check 44ADA eligibility?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help professionals confirm eligibility, compute presumptive income correctly, and file returns without unnecessary compliance overhead.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20know%20if%20Section%2044ADA%20presumptive%20taxation%20applies%20to%20my%20profession." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/presumptive-taxation-scheme-section-44ad" style={{ color: 'var(--primary)', fontWeight: 600 }}>Presumptive Taxation Scheme Section 44AD: Eligibility &amp; Benefits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80d-health-insurance-deduction-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80D: Health Insurance Premium Deduction Explained</Link></li>
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

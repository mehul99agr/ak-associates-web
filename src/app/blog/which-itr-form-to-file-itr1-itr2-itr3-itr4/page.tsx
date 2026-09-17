import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Which ITR Form Should You File: ITR-1 vs 2 vs 3 vs 4',
  description: 'A practical guide to choosing between ITR-1, ITR-2, ITR-3, and ITR-4: eligibility limits, income types covered, and the mistakes that get returns flagged as defective.',
  keywords: [
    'which ITR form to file', 'ITR-1 vs ITR-2', 'ITR-2 vs ITR-3', 'ITR-4 presumptive taxation',
    'ITR form eligibility', 'ITR-1 Sahaj eligibility', 'ITR-3 business income', 'defective ITR notice',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/which-itr-form-to-file-itr1-itr2-itr3-itr4' },
  openGraph: {
    title: 'Which ITR Form Should You File: ITR-1 vs 2 vs 3 vs 4',
    description: 'Eligibility limits and income types for ITR-1, ITR-2, ITR-3, and ITR-4, and how to avoid a defective return notice.',
    url: 'https://agrawalkhandelwal.com/blog/which-itr-form-to-file-itr1-itr2-itr3-itr4',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Which ITR Form Should You File: ITR-1 vs 2 vs 3 vs 4',
    description: 'A side-by-side guide to picking the right ITR form for your income situation.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Which ITR Form Should You File? ITR-1 vs ITR-2 vs ITR-3 vs ITR-4', 'which-itr-form-to-file-itr1-itr2-itr3-itr4')

const articleLd = buildArticleLd({
  headline: 'Which ITR Form Should You File? ITR-1 vs ITR-2 vs ITR-3 vs ITR-4',
  description: 'Eligibility limits and covered income types for ITR-1, ITR-2, ITR-3, and ITR-4, and the common mistakes in form selection that lead to a defective return notice.',
  datePublished: '2026-07-22',
  slug: 'which-itr-form-to-file-itr1-itr2-itr3-itr4',
})

const faqs: [string, string][] = [
  [
    'Can I file ITR-1 if I have capital gains?',
    'Only in a very limited case: ITR-1 allows long-term capital gains under Section 112A up to Rs 1.25 lakh, and nothing beyond that. Any other capital gains, short-term or long-term, from shares, mutual funds, or property, require ITR-2 or ITR-3 depending on whether you also have business income.',
  ],
  [
    'What is the difference between ITR-2 and ITR-3?',
    'ITR-2 is for individuals with capital gains, income from multiple house properties, or foreign income/assets, but no income from business or profession. ITR-3 is for individuals who have business or professional income that is not covered under presumptive taxation, in addition to any of the income types covered in ITR-2.',
  ],
  [
    'Who should file ITR-4?',
    'ITR-4 (Sugam) is for individuals, HUFs, and firms (other than LLPs) who have opted for presumptive taxation under Sections 44AD, 44ADA, or 44AE, and whose total income does not exceed Rs 50 lakh. It is commonly used by small traders, freelancers, and professionals declaring income on a presumptive basis rather than maintaining full books.',
  ],
  [
    'What happens if I file the wrong ITR form?',
    'The income tax department can treat the return as a defective return under Section 139(9) and issue a notice giving you a limited window, typically 15 days, to correct and refile it. If not corrected in time, the original return can be treated as invalid, which carries the same consequences as not filing at all.',
  ],
  [
    'Can a salaried person with a small side freelance income use ITR-1?',
    'No. Any income from a profession or business, even modest freelance income, takes you out of ITR-1 eligibility. Depending on whether you opt for presumptive taxation under Section 44ADA, you would file either ITR-4 (presumptive) or ITR-3 (regular books of account).',
  ],
  [
    'Do I need ITR-2 if I have two house properties?',
    'Not necessarily anymore. Recent changes allow individuals with up to two house properties to still use ITR-1 or ITR-4, provided all other eligibility conditions for those forms are met. Earlier, more than one house property automatically pushed you to ITR-2; that specific restriction has since been relaxed.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function WhichITRFormBlog() {
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
                Which ITR Form Should You File? ITR-1 vs ITR-2 vs ITR-3 vs ITR-4
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 22, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>ITR-1:</strong> salary/pension, up to two house properties, other income, total income up to Rs 50 lakh, LTCG under Section 112A up to Rs 1.25 lakh.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>ITR-2:</strong> capital gains beyond ITR-1&apos;s limit, multiple properties, foreign income/assets, no business income.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>ITR-3:</strong> business or professional income outside presumptive taxation.</li>
                    <li style={{ marginBottom: 0 }}><strong>ITR-4:</strong> presumptive income under Sections 44AD/44ADA/44AE, total income up to Rs 50 lakh.</li>
                  </ul>
                </div>

                <p>Picking the wrong ITR form doesn&apos;t just create paperwork friction; it can get your return flagged as defective under Section 139(9), with a limited window to correct it before the original filing is treated as invalid. Here is how to work out which of the four individual-taxpayer forms actually fits your income.</p>

                <h2>Quick Comparison</h2>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Form</th>
                      <th style={thStyle}>Who It&apos;s For</th>
                      <th style={thStyle}>Income Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>ITR-1 (Sahaj)</td><td style={tdStyle}>Salary/pension, up to 2 house properties, other sources, limited LTCG</td><td style={tdStyle}>Up to Rs 50 lakh</td></tr>
                    <tr><td style={tdAltStyle}>ITR-2</td><td style={tdAltStyle}>Capital gains, multiple properties, foreign income/assets; no business income</td><td style={tdAltStyle}>No limit</td></tr>
                    <tr><td style={tdStyle}>ITR-3</td><td style={tdStyle}>Business/professional income outside presumptive taxation</td><td style={tdStyle}>No limit</td></tr>
                    <tr><td style={tdAltStyle}>ITR-4 (Sugam)</td><td style={tdAltStyle}>Presumptive income under 44AD/44ADA/44AE</td><td style={tdAltStyle}>Up to Rs 50 lakh</td></tr>
                  </tbody>
                </table>

                <h2>ITR-1 (Sahaj): The Simplest Form</h2>
                <p>ITR-1 fits most salaried individuals and pensioners with straightforward finances: income from salary or pension, up to two house properties (a recent relaxation; earlier only one was allowed), interest and other income from specified sources, agricultural income up to Rs 5,000, and total income not exceeding Rs 50 lakh. It also permits long-term capital gains under Section 112A (typically listed equity/equity mutual funds), but only up to Rs 1.25 lakh; cross that threshold and you move to ITR-2 even if every other condition fits ITR-1. ITR-1 is not available if you are a company director, hold unlisted shares, or have any business or professional income, however small.</p>

                <h2>ITR-2: Capital Gains and Multiple Income Streams, No Business Income</h2>
                <p>ITR-2 is the form for individuals whose income is more complex than ITR-1 allows but who still have no business or professional income. This covers: capital gains beyond ITR-1&apos;s Rs 1.25 lakh LTCG limit or of any other type (short-term gains, gains on property, unlisted shares), income from more than two house properties, foreign income or foreign assets (which also triggers Schedule FA reporting), being a director in a company, or holding unlisted equity shares at any point during the year. NRIs with capital gains or property income in India commonly file ITR-2 as well; see our <Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR filing guide</Link> for that specific situation.</p>

                <h2>ITR-3: Business or Professional Income (Regular Books)</h2>
                <p>ITR-3 applies once you have income from business or profession that isn&apos;t being reported under presumptive taxation, meaning you are maintaining regular books of account (and are subject to tax audit under Section 44AB, now Section 63, if turnover or receipts cross the applicable threshold). This includes freelancers and professionals who don&apos;t opt for the presumptive scheme, partners in a firm receiving remuneration and interest on capital, and anyone running a business with income too complex for the presumptive route. ITR-3 also covers everything ITR-2 does (capital gains, multiple properties, foreign assets) in addition to the business income.</p>

                <h2>ITR-4 (Sugam): Presumptive Taxation</h2>
                <p>ITR-4 is for individuals, HUFs, and firms (other than LLPs) who have opted for presumptive taxation under <strong>Section 44AD</strong> (small businesses), <strong>Section 44ADA</strong> (specified professionals like doctors, lawyers, consultants, and CAs), or <strong>Section 44AE</strong> (goods transport operators), with total income up to Rs 50 lakh. Presumptive taxation lets you declare income as a fixed percentage of turnover or receipts without maintaining detailed books, which is why ITR-4 is popular with small traders and independent professionals. Like ITR-1, it now permits up to two house properties. If your presumptive-scheme income plus other income exceeds Rs 50 lakh, or if you have capital gains beyond ITR-1&apos;s LTCG limit, you fall out of ITR-4 and into ITR-3.</p>

                <h2>Common Form-Selection Mistakes</h2>
                <ul>
                  <li><strong>Filing ITR-1 with undisclosed freelance income:</strong> even a small side consulting or freelance income disqualifies ITR-1 entirely; it needs ITR-3 or ITR-4.</li>
                  <li><strong>Missing the LTCG threshold in ITR-1:</strong> if your equity/equity-fund long-term gains cross Rs 1.25 lakh, ITR-1 is no longer valid, regardless of how simple the rest of your income is.</li>
                  <li><strong>Using ITR-4 with income above Rs 50 lakh:</strong> the presumptive scheme itself may still apply, but the return has to move to ITR-3 once total income exceeds that limit.</li>
                  <li><strong>Forgetting foreign assets or foreign income:</strong> holding even a small foreign bank account or foreign equity compensation (like ESOPs from a foreign parent) generally requires ITR-2 or ITR-3 along with Schedule FA, not ITR-1 or ITR-4.</li>
                </ul>
                <p>If you are unsure which form applies, it is worth a quick review before filing rather than after a defective-return notice forces a correction under time pressure. Once you have settled on the form, our <Link href="/blog/how-to-file-itr-online-salaried-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>step-by-step e-filing guide</Link> walks through the rest of the process.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure which ITR form applies to you?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We review your income sources and pick the correct form before filing, so you avoid a defective-return notice later.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/how-to-file-itr-online-salaried-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>How to File ITR Online: Step-by-Step Guide for Salaried Individuals</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Slabs FY 2026-27: Old vs New Regime</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing Guide: Which Form, How to File from Abroad</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>Understanding the New Tax Regime (FY 2025-26)</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Advance Tax: Who Must Pay, Due Dates & Interest for Default',
  description: 'Who must pay advance tax, the four quarterly due dates and cumulative percentages, and how Section 234B and 234C interest applies if you fall short.',
  keywords: [
    'advance tax due dates', 'who must pay advance tax', 'advance tax installments',
    'section 234B interest', 'section 234C interest', 'advance tax calculator',
    'advance tax FY 2026-27', 'advance tax penalty for default',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/advance-tax-who-must-pay-due-dates-interest' },
  openGraph: {
    title: 'Advance Tax: Who Must Pay, Due Dates & Interest for Default',
    description: 'The four quarterly advance tax due dates, cumulative payment percentages, and how 234B/234C interest is calculated on a shortfall.',
    url: 'https://agrawalkhandelwal.com/blog/advance-tax-who-must-pay-due-dates-interest',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advance Tax: Who Must Pay, Due Dates & Interest',
    description: 'Quarterly due dates, cumulative percentages, and 234B/234C interest explained in plain English.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Advance Tax: Who Must Pay, Due Dates & Interest for Default', 'advance-tax-who-must-pay-due-dates-interest')

const articleLd = buildArticleLd({
  headline: 'Advance Tax: Who Must Pay, Due Dates & Interest for Default',
  description: 'Who is liable to pay advance tax, the four quarterly due dates and cumulative percentages, and how interest under Section 234B and 234C is computed on a shortfall.',
  datePublished: '2026-07-29',
  slug: 'advance-tax-who-must-pay-due-dates-interest',
})

const faqs: [string, string][] = [
  [
    'Who is required to pay advance tax?',
    'Any taxpayer, individual, freelancer, professional, or business, whose estimated tax liability for the year, after reducing TDS/TCS already deducted, exceeds Rs 10,000, must pay advance tax. Salaried employees usually have most of their liability covered by employer TDS, but if they have other income (capital gains, rent, freelance fees, interest) that pushes the net liability past Rs 10,000, they must pay advance tax on that shortfall too. Senior citizens without business income are exempt from the requirement.',
  ],
  [
    'What are the advance tax due dates for FY 2026-27?',
    'The four instalments fall on June 15, September 15, December 15, and March 15, requiring cumulative payment of 15%, 45%, 75%, and 100% of the year\'s estimated tax liability respectively. Taxpayers under the presumptive schemes (Section 44AD/44ADA equivalent provisions) can instead pay the entire amount in a single instalment by March 15.',
  ],
  [
    'What happens if I miss an advance tax instalment?',
    'Two separate interest charges can apply. Section 234C charges 1% per month for a defined period on the shortfall against each quarterly instalment, even if you catch up later in the year. Section 234B separately charges 1% per month, from April 1 of the assessment year until the tax is paid, if your total advance tax paid by March 31 was less than 90% of your assessed tax. The two are not mutually exclusive; a taxpayer who defers payment can face both.',
  ],
  [
    'Is there any interest if I pay 100% by March 31 even without following the quarterly schedule?',
    'You still avoid Section 234B interest if 90% or more of the assessed tax was paid by March 31, regardless of how it was spread across the year. However, Section 234C interest on the earlier quarterly shortfalls still applies independently; it is calculated instalment-by-instalment and is not undone by catching up in the final quarter.',
  ],
  [
    'Do senior citizens have to pay advance tax?',
    'A resident senior citizen (60 years or above) who does not have income from business or profession is specifically exempt from the advance tax requirement, even if their net tax liability exceeds Rs 10,000. Their full liability can be settled through self-assessment tax at the time of filing the return, without incurring Section 234B or 234C interest.',
  ],
  [
    'Can advance tax estimates be revised during the year?',
    'Yes. Advance tax is based on your own estimate of income for the year, and there is no restriction on revising the estimate at each instalment. If your income rises later in the year (for example, an unexpected capital gain), you simply pay a higher instalment to catch the cumulative percentage up to date; if it falls, later instalments can be reduced accordingly.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function AdvanceTaxBlog() {
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
                Advance Tax: Who Must Pay, Due Dates & Interest for Default
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 29, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Advance tax applies if your net tax liability for the year (after TDS/TCS) exceeds <strong>Rs 10,000</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Pay <strong>15% by June 15, 45% by September 15, 75% by December 15, 100% by March 15</strong> (cumulative, not incremental).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Shortfalls attract <strong>1% per month interest under Section 234C</strong> per quarter, plus a separate <strong>Section 234B</strong> charge if less than 90% of assessed tax is paid by March 31.</li>
                    <li style={{ marginBottom: 0 }}>Resident senior citizens without business income are exempt from the requirement entirely.</li>
                  </ul>
                </div>

                <p>Advance tax is one of those compliance items that quietly catches freelancers, professionals, and anyone with capital gains or rental income off guard, precisely because it is not withheld by an employer the way salary TDS is. If you owe more than a small amount of tax beyond what has already been deducted at source, the law expects you to pay it in instalments through the year, not in one lump sum when you file your return. Missing this triggers interest that compounds the longer it is ignored.</p>

                <h2>Who Must Pay Advance Tax</h2>
                <p>The rule is straightforward: <strong>if your estimated tax liability for the financial year, after subtracting TDS and TCS already credited to you, exceeds Rs 10,000, you must pay advance tax.</strong> This threshold is low enough that it catches most people with any income beyond a single salary: freelancers and consultants billing clients directly, business owners, landlords with rental income, and individuals with capital gains from selling shares, mutual funds, or property.</p>
                <p>Salaried employees are often unaffected in practice because employer TDS is designed to cover the bulk of a straightforward salary. But the moment there is other income on top, bank interest, a freelance side project, a stock sale, that additional liability is the taxpayer's own responsibility to estimate and pay through advance tax; the employer's TDS does not automatically adjust for it.</p>
                <p>One specific exemption: a <strong>resident senior citizen (60 years or older) who has no income from business or profession</strong> is not required to pay advance tax at all, even if their net liability crosses Rs 10,000. They can settle the full amount as self-assessment tax when filing, without incurring interest for not paying in instalments.</p>

                <h2>Advance Tax Due Dates and Instalment Percentages</h2>
                <p>Advance tax is paid in four instalments, each requiring a <strong>cumulative</strong> percentage of the year's total estimated liability to have been paid by that date, not four equal 25% instalments:</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Due Date</th>
                      <th style={thStyle}>Cumulative % of Tax Liability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>On or before June 15</td><td style={tdStyle}>15%</td></tr>
                    <tr><td style={tdAltStyle}>On or before September 15</td><td style={tdAltStyle}>45%</td></tr>
                    <tr><td style={tdStyle}>On or before December 15</td><td style={tdStyle}>75%</td></tr>
                    <tr><td style={tdAltStyle}>On or before March 15</td><td style={tdAltStyle}>100%</td></tr>
                  </tbody>
                </table>
                <p>Taxpayers who have opted for the presumptive taxation schemes for business or professional income are treated differently: they can pay their entire advance tax liability in a single instalment on or before March 15, rather than following the four-instalment schedule.</p>
                <p>Because the percentages are cumulative, catching up matters more than hitting each individual date exactly; if you underpaid in June, paying extra in September to reach the 45% cumulative mark still keeps you broadly on track, though the June shortfall itself may still attract a small interest charge for that quarter under Section 234C.</p>

                <h2>Interest for Default: Section 234B and Section 234C</h2>
                <p>Two distinct interest provisions apply, and it is common for a taxpayer to trigger both without realising it:</p>
                <h3>Section 234C: Interest for Deferment of Individual Instalments</h3>
                <p>Section 234C charges interest at <strong>1% per month</strong> when the cumulative amount paid by a given due date falls short of the required percentage for that instalment. The interest is computed separately for each quarter in which a shortfall occurred, generally for a period of three months per shortfall (one month for the final March instalment), regardless of whether the full liability is eventually paid by year-end. In effect, this penalises deferment itself, not just an overall shortfall.</p>
                <h3>Section 234B: Interest for Shortfall in Total Advance Tax</h3>
                <p>Section 234B is a separate, broader check: if the <strong>total advance tax paid by March 31</strong> is less than 90% of the assessed tax for the year, interest at 1% per month applies on the unpaid balance, running from April 1 of the following assessment year until the tax is actually paid (typically at the time of self-assessment when filing the return, or later if a demand is raised). This can apply even if each individual instalment technically fell within the Section 234C rules, if the overall total paid was still short of the 90% mark.</p>
                <p>Together, these mean a taxpayer who consistently underpays through the year and only settles the full amount at filing time can face 234C interest for each quarter's shortfall plus 234B interest for the months between April 1 and the actual payment date. Getting each quarterly instalment right the first time avoids both.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Practical Note on Estimating Income</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Advance tax is paid on your own estimate of the year's income, and that estimate is not locked in after the first instalment. If a large capital gain or bonus arrives mid-year, adjust the next instalment upward to bring the cumulative percentage back on track; if income comes in lower than expected, later instalments can be reduced. Reviewing the estimate at each quarter, rather than setting it once in June and forgetting it, is the single most effective way to avoid a March surprise.</p>
                </div>

                <h2>How to Pay Advance Tax</h2>
                <p>Advance tax is paid online through Challan No. ITNS 280 on the Income Tax e-filing portal or via authorised bank net-banking, selecting "Advance Tax" as the payment type for the relevant assessment year. Keep the challan receipt; it is needed to claim credit for the payment when filing the return and to reconcile the instalment-wise payment history if a 234B/234C interest calculation is ever questioned.</p>
                <p>Estimating the right amount at each instalment is where most errors creep in, particularly for anyone with variable or lumpy income through the year. Our <Link href="/tax-calculator" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax calculator</Link> can help build a working estimate, and we regularly help clients set up a quarterly advance tax review so instalments are calculated against actual year-to-date income rather than a guess made once in June.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help estimating your advance tax instalments?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help individuals, freelancers, and businesses calculate quarterly advance tax accurately and avoid unnecessary 234B/234C interest.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20calculating%20my%20advance%20tax." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-refund-status-check-common-delays" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Refund Status: How to Check &amp; Common Delays</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rectification-under-section-154-itr-errors" style={{ color: 'var(--primary)', fontWeight: 600 }}>Rectification Under Section 154: Fixing Errors in Your ITR</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>Understanding the New Tax Regime</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>New Income Tax Act 2025: Key Rules</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

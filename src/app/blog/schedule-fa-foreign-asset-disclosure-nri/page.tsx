import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Schedule FA: Foreign Asset Disclosure (2026)',
  description: 'When Schedule FA kicks in, what to declare, penalties for non-disclosure, and the Foreign Assets Disclosure Scheme 2026. Applies to Residents and RNOR only, not NRIs.',
  keywords: ['Schedule FA NRI', 'foreign asset disclosure India', 'Schedule FA ITR', 'foreign assets NRI India', 'NRI foreign bank account disclosure', 'Schedule FA penalty', 'black money act NRI'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/schedule-fa-foreign-asset-disclosure-nri' },
  openGraph: { title: 'Schedule FA: Foreign Asset Disclosure for Returning NRIs', description: 'When Schedule FA applies, what to disclose, and penalties for non-compliance.', url: 'https://agrawalkhandelwal.com/blog/schedule-fa-foreign-asset-disclosure-nri', type: 'article' },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Schedule FA: Foreign Asset Disclosure (2026)', 'schedule-fa-foreign-asset-disclosure-nri')

const articleLd = buildArticleLd({ headline: 'Schedule FA: Foreign Asset Disclosure (2026)', description: 'When Schedule FA applies, what to declare, and penalties.', datePublished: '2026-07-28', slug: 'schedule-fa-foreign-asset-disclosure-nri' })

const faqs: [string, string][] = [
  ['Do NRIs need to fill Schedule FA?', 'No. Schedule FA (Foreign Assets and Income from any source outside India) is required only for individuals who qualify as Resident or RNOR under Indian tax law. Non-Residents (NRIs) are explicitly exempt from Schedule FA disclosure. This is one of the key compliance differences between NRI and RNOR/Resident status.'],
  ['What must be disclosed in Schedule FA?', 'Schedule FA requires disclosure of: foreign bank accounts (including signatory authority), foreign financial accounts (brokerage, insurance, annuity), immovable property outside India, equity/debt interest in foreign entities, trusts where you are a trustee/beneficiary/settlor, any other capital asset outside India, and signing authority in any foreign account. Both the asset details and the income earned from each must be reported.'],
  ['What is the penalty for not disclosing foreign assets?', 'Under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015, failure to disclose foreign assets can attract a penalty of Rs 10 lakh per year. Undisclosed foreign income is taxable at a flat 30% plus penalty of 3 times the tax (effectively 120% of the undisclosed income). In severe cases, prosecution can lead to imprisonment of 3 to 10 years.'],
  ['Does RNOR status exempt me from Schedule FA?', 'The position is evolving. Technically, RNOR is a sub-category of Resident, and Schedule FA is required for Residents. However, some practitioners argue that since RNOR\'s foreign income (not received in India) is not taxable, the disclosure requirement is less clear for those specific assets. The safer approach is to disclose foreign assets during RNOR years. Consult your CA for the current position.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function ScheduleFABlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Schedule FA: When Foreign Asset Disclosure Kicks In (and When It Does Not)</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 28, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>NRIs do not need to fill Schedule FA.</strong> It applies only to Residents and RNOR.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Once you become Resident (including <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR</Link>), you must disclose all foreign bank accounts, investments, property, and signing authority.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Penalty for non-disclosure: <strong>Rs 10 lakh per year</strong> under the Black Money Act. Undisclosed income taxed at 120%.</li>
                  <li style={{ marginBottom: 0 }}>The <Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>returning NRI checklist</Link> should include a foreign asset inventory before the first ITR as Resident.</li>
                </ul>
              </div>

              <p>Schedule FA is the part of the Indian ITR that scares returning NRIs the most. After years abroad with foreign bank accounts, brokerage accounts, retirement funds, and possibly real estate, the prospect of disclosing everything to the Indian tax department feels daunting. The good news: while you are NRI, Schedule FA does not apply at all. The disclosure requirement kicks in only when your <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>residential status</Link> changes to Resident or RNOR.</p>

              <h2>Who Must File Schedule FA?</h2>
              <p>Schedule FA is part of ITR-2 and ITR-3 and must be filled by any individual who is a <strong>Resident</strong> (including RNOR) and holds any foreign asset or has signing authority over any foreign account during the financial year. NRIs (Non-Residents) are exempt.</p>

              <h2>What Must Be Disclosed</h2>
              <p>Schedule FA has multiple tables covering different asset types:</p>
              <ul>
                <li><strong>Table A1:</strong> Foreign bank accounts (savings, current, deposit) - account number, bank name, country, peak balance during the year, closing balance</li>
                <li><strong>Table A2:</strong> Financial interest in any foreign entity - shares, debentures, partnership interest</li>
                <li><strong>Table A3:</strong> Immovable property outside India - address, country, date of acquisition, total investment</li>
                <li><strong>Table A4:</strong> Other capital assets held outside India (jewellery, art, vehicles, etc.)</li>
                <li><strong>Table B:</strong> Details of foreign custodial accounts</li>
                <li><strong>Table C:</strong> Foreign equity and debt interest (including stock options)</li>
                <li><strong>Table D:</strong> Signing authority in any foreign account (even if not beneficial owner)</li>
                <li><strong>Table E:</strong> Trusts where you are trustee, beneficiary, or settlor</li>
              </ul>
              <p>For each asset, you must also report the income earned from it during the year and the nature of income (interest, dividends, capital gains, rent, etc.).</p>

              <h2>Penalties for Non-Disclosure</h2>
              <p>The Black Money (Undisclosed Foreign Income and Assets) Act, 2015 imposes severe penalties:</p>
              <ul>
                <li><strong>Non-disclosure penalty:</strong> Rs 10 lakh for each year of non-disclosure</li>
                <li><strong>Tax on undisclosed income:</strong> 30% flat rate (no deductions, no exemptions)</li>
                <li><strong>Penalty on undisclosed income:</strong> 3 times the tax (i.e., 90% of the undisclosed income, making effective cost 120%)</li>
                <li><strong>Prosecution:</strong> Imprisonment of 3 to 10 years for willful evasion</li>
              </ul>

              <h2>The RNOR Transition: Preparing for Disclosure</h2>
              <p>When you <Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>return to India</Link>, your first year as RNOR is when Schedule FA typically kicks in. Use the <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR window</Link> to:</p>
              <ul>
                <li>Create a comprehensive inventory of all foreign assets</li>
                <li>Gather account statements, investment records, and property documents</li>
                <li>Convert peak balances to INR using the RBI reference rate for the relevant dates</li>
                <li>Restructure or consolidate foreign accounts before disclosure becomes mandatory</li>
              </ul>

              <h2>Foreign Assets Disclosure Scheme 2026</h2>
              <p>The government introduced a one-time disclosure scheme in 2026 for residents who failed to report foreign assets in prior years. This scheme allows voluntary disclosure with reduced penalties compared to the Black Money Act provisions. If you have unreported foreign assets from prior resident years, consult a CA about whether this scheme is still open and whether it applies to your situation.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help with Schedule FA or foreign asset disclosure?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare Schedule FA disclosures, advise on the RNOR transition, and assist with voluntary disclosure schemes.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Returning to India Checklist</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing Guide</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Returning to India: Complete Financial Checklist (2026)',
  description: 'Everything NRIs must do before and after returning to India: bank account conversion, RNOR tax planning, investment restructuring, insurance, FEMA steps, and the timeline that saves you money.',
  keywords: [
    'NRI returning to India checklist', 'NRI relocation India', 'NRI moving back to India',
    'NRI return India tax planning', 'NRI bank account conversion', 'NRI RNOR planning',
    'returning NRI financial planning', 'NRI coming back to India',
    'NRI relocation checklist 2026', 'NRI return India FEMA',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-returning-india-financial-checklist' },
  openGraph: {
    title: 'NRI Returning to India: Complete Financial Checklist (2026)',
    description: 'Bank accounts, RNOR window, investments, insurance, FEMA steps - the financial checklist for NRIs moving back.',
    url: 'https://agrawalkhandelwal.com/blog/nri-returning-india-financial-checklist',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Returning to India: Financial Checklist (2026)',
    description: 'Bank account conversion, RNOR planning, investment restructuring, and FEMA compliance for returning NRIs.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NRI Returning to India: Complete Financial Checklist (2026)',
  description: 'Bank account conversion, RNOR tax planning, investment restructuring, insurance, and FEMA compliance steps for NRIs moving back to India.',
  datePublished: '2026-08-01',
  dateModified: '2026-08-01',
  author: {
    '@type': 'Person',
    '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
    name: 'CA Mehul Agrawal',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://agrawalkhandelwal.com/#organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' },
  },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-returning-india-financial-checklist',
}

const faqs: [string, string][] = [
  [
    'When should I start planning my financial return to India?',
    'Ideally 6 to 12 months before your planned return date. Some steps, like realising foreign capital gains during RNOR years, restructuring investments, and timing your return to maximise the RNOR window, require advance planning. Bank account redesignation and FEMA notifications can be done within weeks of return, but the tax planning decisions should be made before you land.',
  ],
  [
    'Do I need to convert my NRE account when I return to India?',
    'Yes. Under FEMA, once you become a resident, your NRE and FCNR accounts must be redesignated as resident accounts (savings or RFC - Resident Foreign Currency). You cannot continue operating them as NRE/FCNR accounts. Interest earned after redesignation becomes taxable. Most banks require you to submit a redesignation request within a reasonable period of becoming resident, and some proactively freeze NRE accounts on detecting a status change.',
  ],
  [
    'How long is the RNOR tax benefit window after returning?',
    'Most NRIs who lived abroad for several years qualify as RNOR for 2 to 3 financial years after returning. During RNOR years, foreign income not received in or deemed to accrue in India stays outside Indian tax. The exact duration depends on your specific day-count history under the two RNOR tests. See our detailed RNOR status guide for the calculation methodology.',
  ],
  [
    'What happens to my foreign investments when I return to India?',
    'Your foreign investments do not need to be liquidated immediately. However, once you become a full resident (ROR), worldwide income including foreign capital gains, dividends, and interest becomes taxable in India. During RNOR years, foreign income not received in India is still exempt. This creates a planning window to realise gains, restructure portfolios, or repatriate at lower or nil Indian tax rates before full residency kicks in.',
  ],
  [
    'Do I need to inform my bank when I return to India?',
    'Yes. You are required to notify your Indian banks of your change in residential status. Banks need to redesignate your NRE/FCNR accounts, update your KYC, and change the TDS treatment on your deposits (NRE interest becomes taxable after redesignation). Failure to notify is a FEMA violation. You should also inform your foreign banks, as some may restrict services to non-residents of their country.',
  ],
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRIReturningIndiaChecklist() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                NRI Returning to India: The Financial Checklist Nobody Gives You
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 1, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Start planning 6-12 months before your return. Tax decisions made during your last NRI year and first RNOR years can save lakhs.</li>
                    <li style={{ marginBottom: '0.4rem' }}>NRE and FCNR accounts must be redesignated to resident accounts. Interest becomes taxable after conversion.</li>
                    <li style={{ marginBottom: '0.4rem' }}>You likely get 2-3 years of <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR status</Link> where foreign income stays exempt - use this window to restructure.</li>
                    <li style={{ marginBottom: 0 }}>Foreign retirement accounts (401k, pension, superannuation) need a withdrawal strategy aligned with your RNOR window.</li>
                  </ul>
                </div>

                <p>Returning to India after years abroad is not just a logistical move. It is a financial event that touches your bank accounts, investments, insurance, tax obligations in two countries, and your retirement savings. Most NRIs focus on shipping containers and school admissions, and then discover the financial implications after they have already lost the planning window. Here is the checklist, in the order things actually need to happen.</p>

                <h2>Phase 1: Before You Return (6-12 Months Out)</h2>

                <h3>Calculate Your RNOR Window</h3>
                <p>This is the single most valuable planning step. <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR (Resident but Not Ordinarily Resident)</Link> is a transitional tax status that most returning NRIs get for 2 to 3 financial years. During RNOR years, foreign income not received in or deemed to accrue in India is <strong>not taxable in India</strong>. Once you become a full resident (ROR), your worldwide income is taxed.</p>
                <p>The RNOR window depends on your specific day-count history, determined by the <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>182-day and 120-day rules</Link>. Timing your return to maximise this window - for example, returning early in a financial year rather than late - can add an extra year of RNOR status and save significant tax on foreign income realisation.</p>

                <h3>Audit Your Foreign Investment Portfolio</h3>
                <p>Before you become a full resident, review every foreign investment for RNOR window planning:</p>
                <ul>
                  <li><strong>Unrealised capital gains:</strong> Consider realising gains during RNOR years when they may not be taxable in India (if the gains accrue outside India and are not received in India).</li>
                  <li><strong>Foreign dividends:</strong> Dividend income from foreign companies becomes fully taxable once you are ROR. Time distributions if possible.</li>
                  <li><strong>Retirement accounts:</strong> <Link href="/blog/foreign-retirement-fund-taxation-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foreign retirement fund withdrawals</Link> (401k, UK pension, Australian superannuation) have complex cross-border tax treatment. Plan withdrawal timing around your RNOR window.</li>
                  <li><strong>Stock options:</strong> <Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP taxation for NRIs</Link> depends on when you exercise and when you sell. If you hold vesting ESOPs from your foreign employer, the tax treatment changes with your residential status.</li>
                </ul>

                <h3>Understand DTAA Implications</h3>
                <p>India has DTAAs with over 90 countries. These treaties determine how income is taxed when you transition from one country&apos;s tax residency to another. Key questions: Will your foreign pension be taxable in India? Can you claim foreign tax credits for taxes paid abroad on the same income? Does the treaty provide tie-breaker rules for the transition year when you might be resident in both countries?</p>

                <h2>Phase 2: Around Your Return (First 3 Months)</h2>

                <h3>Notify Your Indian Banks</h3>
                <p>Within a reasonable period of becoming resident under FEMA (which happens the moment you intend to stay in India for an indefinite period, not after 182 days), you must:</p>
                <ul>
                  <li><strong>Redesignate <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE accounts</Link></strong> to resident savings accounts or RFC (Resident Foreign Currency) accounts. NRE FDs can run to maturity at the existing rate, but new deposits cannot be made.</li>
                  <li><strong>Convert NRO accounts</strong> to regular resident savings accounts.</li>
                  <li><strong>FCNR deposits</strong> can run to maturity and then convert to RFC or resident rupee accounts.</li>
                  <li><strong>Update KYC</strong> with your new Indian address and resident status across all banks.</li>
                </ul>
                <p>Interest on NRE accounts was tax-exempt while you were NRI. After redesignation, it becomes taxable. Plan FD maturities accordingly.</p>

                <h3>Repatriate Strategically</h3>
                <p>If you have funds abroad that you want to bring to India, the <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO repatriation limits</Link> no longer apply once you are a resident. But you may want to bring funds in during your RNOR years rather than after, depending on the source and tax treatment of those funds. Inward remittances by a resident are not taxable in India (only the income on those funds is), so there is no tax cost to bringing money in - the question is timing it to optimise the overall tax position.</p>

                <h3>Notify Foreign Banks and Institutions</h3>
                <p>Your foreign banks, brokerages, and retirement fund administrators need to know you are no longer a resident of that country. Some implications:</p>
                <ul>
                  <li>Some US brokerages restrict trading for non-US-residents (you may need to transfer to a platform that serves non-residents)</li>
                  <li>UK pension drawdown rules change when you are no longer a UK tax resident</li>
                  <li>Foreign bank accounts must be declared in your Indian ITR under Schedule FA once you become ROR</li>
                </ul>

                <h2>Phase 3: First Full Financial Year as Resident</h2>

                <h3>File Your Indian ITR Correctly</h3>
                <p>Your first Indian ITR as RNOR is different from a standard resident return:</p>
                <ul>
                  <li><strong>Only India-sourced income</strong> is taxable (plus foreign income received in India). Foreign income not received in India is reported but not taxed.</li>
                  <li><strong>Schedule FA (Foreign Assets)</strong> is technically required for residents and RNOR, but the rules on disclosure during RNOR are evolving. Consult your CA on the current position.</li>
                  <li><strong>Claim DTAA credits</strong> for any foreign taxes paid on income that is also taxable in India, using Form 67 filed before the ITR due date.</li>
                  <li><strong>Use ITR-2 or ITR-3</strong> depending on whether you have business income.</li>
                </ul>

                <h3>Set Up Indian Health and Life Insurance</h3>
                <p>Foreign health insurance typically does not cover you as an Indian resident. International policies may lapse or become prohibitively expensive. Get Indian health insurance (preferably with a pre-existing conditions waiting period starting as early as possible) and review your life insurance coverage. Some NRIs carry both during the transition year.</p>

                <h3>Update Your Will and Nominations</h3>
                <p>If you have assets in multiple countries, your estate planning needs to cover Indian succession law (which varies by religion for Hindus, Muslims, and Christians), any foreign will you have, and nominee registrations on Indian bank accounts, demat accounts, and mutual funds. Cross-border estate planning is one of the most overlooked aspects of NRI relocation.</p>

                <h2>The Master Checklist</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }}>
                    <thead>
                      <tr>
                        <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>When</th>
                        <th style={{ background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['6-12 months before', 'Calculate RNOR window based on travel history'],
                        ['6-12 months before', 'Audit foreign investments for RNOR realisation strategy'],
                        ['6-12 months before', 'Plan retirement fund withdrawal timing'],
                        ['6-12 months before', 'Review DTAA provisions for your country'],
                        ['3-6 months before', 'Realise foreign capital gains if beneficial during NRI status'],
                        ['3-6 months before', 'Start Indian health insurance (waiting periods begin)'],
                        ['On return', 'Notify Indian banks of status change'],
                        ['Within 1 month', 'Redesignate NRE/FCNR accounts'],
                        ['Within 1 month', 'Update KYC at all Indian banks and brokerages'],
                        ['Within 3 months', 'Notify foreign banks and brokerages'],
                        ['Within 3 months', 'Review foreign brokerage access restrictions'],
                        ['By ITR deadline', 'File Indian ITR as RNOR with correct income classification'],
                        ['By ITR deadline', 'File Form 67 for DTAA foreign tax credits'],
                        ['Ongoing', 'Track RNOR status year-by-year - it changes each FY'],
                        ['When RNOR ends', 'Begin Schedule FA foreign asset disclosure'],
                      ].map(([when, action], i) => (
                        <tr key={i}>
                          <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top', fontWeight: 600, whiteSpace: 'nowrap', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{when}</td>
                          <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top', ...(i % 2 ? { background: 'var(--bg-surface)' } : {}) }}>{action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning your return to India?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help returning NRIs with RNOR planning, bank account conversion, investment restructuring, and the first ITR filing as a resident. Start early to maximise your tax-free window.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqs.map(([q, a], i) => (
                    <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status: How Long Is the Tax Holiday?</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>POEM: Foreign Company as Indian Tax Resident</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

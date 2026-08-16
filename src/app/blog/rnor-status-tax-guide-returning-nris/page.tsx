import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RNOR Status for Returning NRIs: How Long Is the Tax Holiday? (FY 2026-27)',
  description: 'RNOR status explained for returning NRIs: the two RNOR tests, how many tax-free years you actually get, what foreign income stays exempt, and the planning checklist before it ends.',
  keywords: [
    'RNOR status India', 'resident but not ordinarily resident', 'returning NRI tax India',
    'RNOR tax exemption', 'RNOR years calculation', 'NRI returning to India tax planning',
    'RNOR foreign income taxable', 'residential status income tax India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/rnor-status-tax-guide-returning-nris' },
  openGraph: {
    title: 'RNOR Status for Returning NRIs: How Long Is the Tax Holiday? (FY 2026-27)',
    description: 'The two RNOR tests, how many tax-free years returning NRIs actually get, what stays exempt, and what to do before RNOR status ends.',
    url: 'https://agrawalkhandelwal.com/blog/rnor-status-tax-guide-returning-nris',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RNOR Status for Returning NRIs: How Long Is the Tax Holiday?',
    description: 'The two RNOR tests, how many tax-free years you get, and the planning checklist before RNOR ends.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'RNOR Status for Returning NRIs: How Long Is the Tax Holiday? (FY 2026-27)',
  description: 'The two RNOR tests, how many tax-free years returning NRIs actually get, what foreign income stays exempt, and the planning checklist before RNOR status ends.',
  datePublished: '2026-08-08',
  dateModified: '2026-08-08',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/rnor-status-tax-guide-returning-nris',
}

const faqs: [string, string][] = [
  [
    'How many years can I stay RNOR after returning to India?',
    'Most NRIs who have lived abroad for several years qualify as RNOR for 2 to 3 financial years after returning, sometimes longer if they returned mid-year or spent limited days in India during the transition. The exact number depends on your specific day-count and prior non-resident history under the 9-out-of-10-years and 729-days tests, not a fixed rule of thumb, so it should be calculated individually for your return date.',
  ],
  [
    'Is foreign income tax-free during RNOR years?',
    'Foreign-sourced income that is not received in India and does not arise from a business controlled from India or a profession set up in India is not taxable in India during RNOR years. This covers most foreign salary already earned before return, foreign bank interest, foreign dividends, and foreign capital gains on assets held abroad. Once you become Resident and Ordinarily Resident (ROR), the same income becomes fully taxable in India.',
  ],
  [
    'Do RNOR taxpayers need to disclose foreign assets in Schedule FA?',
    'No. The Schedule FA foreign asset and foreign income disclosure requirement in the Indian ITR applies only to Resident and Ordinarily Resident (ROR) taxpayers. RNOR and non-resident taxpayers are not required to file Schedule FA, even though they must still report and pay tax on any India-sourced income and any foreign income actually received in India.',
  ],
  [
    'Is RNOR status automatic once I move back to India?',
    'No. Residential status, including RNOR, is not a status you elect. It is determined afresh for every financial year based on your actual day count in India that year and your residency history over the preceding 10 years. A returning NRI who spends far more time in India than expected in the return year, or who returned years earlier than assumed, may find they no longer qualify as RNOR and are already Resident and Ordinarily Resident.',
  ],
  [
    'What happens to my foreign investments once I become fully Resident (ROR)?',
    'Once you cross into ROR status, your worldwide income becomes taxable in India, including foreign salary, foreign capital gains, foreign rental income, and foreign investment returns, with credit generally available for tax already paid abroad under India\'s DTAA network. You also become required to file Schedule FA disclosing foreign bank accounts, brokerage accounts, and other foreign assets. This is why the RNOR window is the right time to review, restructure, or realise foreign investments, not after ROR status has already set in.',
  ],
  [
    'Does the RNOR test change under the new Income Tax Act 2025?',
    'The residential status framework, including the RNOR concept, carries forward substantively unchanged under the Income Tax Act 2025, effective April 1, 2026. The underlying day-count tests and the distinction between India-sourced and foreign-sourced income remain the operative rules; only drafting and section numbering have been reorganised. Always confirm the current position with your CA before relying on any specific section reference.',
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

const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function RNORStatusBlog() {
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
                RNOR Status for Returning NRIs: How Long Does the Tax Holiday Last?
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 8, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>RNOR (Resident but Not Ordinarily Resident) is a transitional status most returning NRIs get for roughly 2 to 3 financial years after coming back to India.</li>
                    <li style={{ marginBottom: '0.4rem' }}>During RNOR years, foreign income not received in India stays outside Indian tax, only India-sourced income is taxed.</li>
                    <li style={{ marginBottom: '0.4rem' }}>RNOR is not automatic or fixed, it is recalculated every year from your actual day count and prior residency history.</li>
                    <li style={{ marginBottom: 0 }}>The RNOR window is the right time to realise, restructure, or repatriate foreign investments, before worldwide income and Schedule FA disclosure kick in under full resident status.</li>
                  </ul>
                </div>

                <p>Every year, we see returning NRIs make one of two mistakes: assuming they get a fixed number of tax-free years after landing back in India, or not realising their RNOR window has already closed while they were still treating foreign income as exempt. Both are expensive. Here is what RNOR status actually means, how long it genuinely lasts, and what to do with the window while you have it.</p>

                <h2>What Is RNOR Status?</h2>
                <p>Indian tax law recognises three residential statuses for individuals, reassessed every financial year: <strong>Non-Resident (NR)</strong>, <strong>Resident but Not Ordinarily Resident (RNOR)</strong>, and <strong>Resident and Ordinarily Resident (ROR)</strong>. RNOR sits in between: you are treated as a resident for the year, but not yet on the hook for worldwide income the way a fully ordinary resident is. It exists specifically to give people transitioning from years abroad, whether returning NRIs, foreign nationals relocating to India, or Indian citizens coming back after a long posting, a bridge period before full Indian tax residency applies to their global finances.</p>

                <h2>How Residential Status Is Determined Each Year</h2>
                <p>Residential status starts with two basic conditions. You are a "resident" for a financial year if you satisfy either:</p>
                <ul>
                  <li>You are in India for <strong>182 days or more</strong> during the financial year, or</li>
                  <li>You are in India for <strong>60 days or more</strong> during the financial year <em>and</em> 365 days or more during the preceding 4 financial years (this 60-day limit extends to 182 days for Indian citizens or persons of Indian origin visiting India, and to 120 days for Indian citizens/PIOs with India income above ₹15 lakh visiting India).</li>
                </ul>
                <p>An Indian citizen with total Indian income exceeding ₹15 lakh who is not liable to tax in any other country by reason of domicile or residence can also be deemed a resident even without meeting the day-count tests, a provision aimed at "stateless" high-income individuals. If neither condition is met, you are a Non-Resident for the year, with no RNOR question to consider at all. If you do qualify as resident, the next question is whether you are RNOR or ROR.</p>

                <h2>The Two RNOR Tests</h2>
                <p>You qualify as RNOR (rather than the fully taxed ROR) if you satisfy either of these two tests, based on your history over the years <em>preceding</em> the year in question:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Test</th>
                        <th style={thStyle}>Condition</th>
                        <th style={thStyle}>Typical Fit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>9-out-of-10-years test</strong></td>
                        <td style={tdStyle}>Non-resident in India in 9 out of the 10 financial years immediately preceding the year in question</td>
                        <td style={tdStyle}>NRIs who lived abroad for a long stretch before returning</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>729-days test</strong></td>
                        <td style={tdAltStyle}>Present in India for 729 days or less during the 7 financial years immediately preceding the year in question</td>
                        <td style={tdAltStyle}>NRIs who made short India visits while based abroad</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Meeting either test is enough. Most long-term NRIs returning after 5 or more consecutive years abroad comfortably satisfy both in the year they return and for a couple of years after.</p>

                <h2>How Many RNOR Years Do You Actually Get?</h2>
                <p>This is where assumptions go wrong. There is no statutory "3-year RNOR period", it falls out of the two tests above, recalculated fresh every year. In practice, most NRIs who have spent a decade or more abroad and return to India permanently get RNOR status for 2 to 3 financial years, because it takes that long for the 9-out-of-10 and 729-day tests to flip against them once they start accumulating full years of Indian presence. Someone who returns partway through a financial year, and therefore doesn't cross 182 days of Indian presence in that first year, may effectively extend the practical window further, since that first partial year could still be a Non-Resident year. Someone who was already making frequent, long India visits in the years before their formal return may find their RNOR window is shorter than expected, because those visits have already been eating into the 729-day allowance.</p>
                <p>The only reliable way to know your specific window is to map out your actual day count in India for the relevant preceding years and run both tests, not to assume a round number.</p>

                <h2>What Income Is Taxable During RNOR</h2>
                <p>An RNOR is taxed like a resident on India-sourced income, salary for services rendered in India, rent from Indian property, capital gains on Indian assets, interest on Indian bank accounts, and so on. Foreign-sourced income is excluded from Indian tax during RNOR years <strong>unless</strong> it falls into one of two exceptions:</p>
                <ul>
                  <li>The income is actually <strong>received in India</strong> during the year (for example, a foreign salary credited directly to an Indian bank account), or</li>
                  <li>The income arises from a <strong>business controlled from India or a profession set up in India</strong>, even if the income itself is earned abroad.</li>
                </ul>
                <p>This means a returning NRI's pre-existing foreign salary income (before return), foreign bank interest, foreign dividends, and gains on foreign shares or property generally stay outside the Indian tax net during RNOR years, provided the funds are not routed into India in the year they arise. Once you cross into ROR status, all of that becomes taxable in India, with foreign tax credit available under the applicable DTAA for tax already paid abroad.</p>

                <h2>What RNOR Taxpayers Don't Have to Do</h2>
                <p>The <strong>Schedule FA</strong> requirement in the Indian ITR, disclosing foreign bank accounts, foreign brokerage and demat accounts, foreign retirement accounts, and other foreign assets, applies only to Resident and Ordinarily Resident (ROR) taxpayers. RNOR and non-resident filers are not required to complete Schedule FA. This is a genuine, and often overlooked, benefit of the RNOR window: you can hold foreign assets without triggering India's foreign asset reporting regime, which carries a penalty of ₹10 lakh per year for non-disclosure once you are ROR and required to report.</p>

                <h2>Common Mistakes We See</h2>
                <ul>
                  <li><strong>Assuming a fixed 2 or 3-year window</strong> without actually running the day-count tests for your specific return date and travel history.</li>
                  <li><strong>Miscounting days</strong>, the day of arrival and day of departure both typically count as a day of presence in India, and short business trips during "NRI years" add up faster than people remember.</li>
                  <li><strong>Ignoring the ₹15 lakh deemed-residency provision</strong> for Indian citizens with substantial Indian income who are not tax residents anywhere else, which can pull someone into resident status earlier than the day-count tests alone would suggest.</li>
                  <li><strong>Remitting foreign income into India</strong> during an RNOR year without realising that receipt in India makes it taxable, even though the same income would have stayed exempt if left abroad.</li>
                  <li><strong>Waiting until after RNOR status ends</strong> to think about restructuring foreign investments, by which point the income is already inside the ROR tax net.</li>
                </ul>

                <h2>Planning Checklist Before RNOR Ends</h2>
                <p>Because the RNOR window is finite and self-terminating, the value is in using it proactively, not discovering it retrospectively at tax filing time:</p>
                <ol>
                  <li><strong>Map your exact RNOR window</strong> using your real day-count history against both tests, don't rely on a rule of thumb.</li>
                  <li><strong>Review foreign investment holdings</strong>, equity, mutual funds, retirement accounts, property, for any planned liquidity events, and consider timing them inside the RNOR window if a sale is coming anyway.</li>
                  <li><strong>Time the exercise or sale of foreign equity compensation</strong> (ESOPs or RSUs from a foreign employer) with residential status in mind, see our guide on <Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP taxation for NRIs</Link> for how exercise and sale are taxed differently.</li>
                  <li><strong>Avoid remitting foreign-sourced income into India</strong> during RNOR years unless you specifically intend for it to be taxed.</li>
                  <li><strong>Plan your FEMA account structure</strong> ahead of the RNOR-to-ROR transition, since NRE and FCNR accounts must be redesignated once you become a resident, see our guide on <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO accounts and FEMA repatriation limits</Link>.</li>
                  <li><strong>Get your specific RNOR years confirmed by a CA</strong> before making irreversible decisions based on an assumed timeline.</li>
                </ol>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure how many RNOR years you have left?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We calculate your exact residential status year by year and help returning NRIs plan foreign asset liquidity and repatriation around the RNOR window.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20my%20RNOR%20status." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqLd.mainEntity.map((faq, i) => (
                    <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{faq.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

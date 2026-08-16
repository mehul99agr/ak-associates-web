import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI Residential Status: How the 182-Day and 120-Day Rules Work (FY 2026-27)',
  description: 'How to determine if you are NRI, RNOR, or Resident under Indian tax law: the 182-day rule, the 120-day deemed resident rule (Budget 2020), day counting for split years, and what each status means for your taxes.',
  keywords: [
    'NRI residential status', '182 day rule NRI', 'NRI status India',
    'residential status income tax', '120 day rule NRI', 'deemed resident India',
    'NRI RNOR resident', 'how to determine NRI status', 'NRI days in India',
    'residential status Section 6', 'non resident Indian definition',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-residential-status-182-day-rule' },
  openGraph: {
    title: 'NRI Residential Status: 182-Day and 120-Day Rules Explained (FY 2026-27)',
    description: 'NRI, RNOR, or Resident? How to determine your status under Section 6, the day-counting rules, and what each means for taxation.',
    url: 'https://agrawalkhandelwal.com/blog/nri-residential-status-182-day-rule',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Residential Status: 182-Day Rule Explained',
    description: 'How to count days, determine NRI/RNOR/Resident status, and what each means for your Indian taxes.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NRI Residential Status: How the 182-Day and 120-Day Rules Work (FY 2026-27)',
  description: 'How to determine NRI, RNOR, or Resident status under Section 6: the 182-day rule, 120-day deemed resident rule, day counting, and tax implications.',
  datePublished: '2026-05-15',
  dateModified: '2026-05-15',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-residential-status-182-day-rule',
}

const faqs: [string, string][] = [
  [
    'How many days can an NRI stay in India without becoming a resident?',
    'An NRI can stay up to 181 days in India during a financial year (April 1 to March 31) without becoming a resident under the basic 182-day rule. However, if the NRI is an Indian citizen with Indian income exceeding Rs 15 lakh and has been in India for 120 days or more, they may be deemed resident under the 120-day rule introduced in Budget 2020. In that case, the safe limit drops to 119 days.',
  ],
  [
    'What is the 120-day rule for NRI residential status?',
    'Introduced in Budget 2020, the 120-day rule applies to Indian citizens or Persons of Indian Origin who have been in India for 120 days or more during the financial year AND have Indian income (excluding foreign income) exceeding Rs 15 lakh. If both conditions are met, the individual is deemed a resident, even if they spent less than 182 days in India. This was specifically designed to cover high-income NRIs who spend extended periods in India without crossing the 182-day threshold.',
  ],
  [
    'How is the day of arrival and departure counted?',
    'The day of arrival in India is counted as a day spent in India. The day of departure from India is NOT counted. So if you arrive on March 30 and leave on March 31, that counts as 1 day (March 30 only). This is based on CBDT guidance and is the standard practice followed by the Income Tax department, though the Act itself does not explicitly state this.',
  ],
  [
    'What is the difference between NRI, RNOR, and ROR?',
    'NRI (Non-Resident Indian) pays tax only on income sourced from India. RNOR (Resident but Not Ordinarily Resident) is treated as resident for the year but still only pays tax on India-sourced income plus foreign income received in India, foreign income that is not received in India remains exempt. ROR (Resident and Ordinarily Resident) pays tax on worldwide income, including all foreign income regardless of where it is received. The status is determined each financial year based on day-count rules.',
  ],
  [
    'Can I be a tax resident of two countries at the same time?',
    'Yes. Each country has its own residency rules, and it is common to be resident under both Indian law and the law of your country of stay during a transition year. In such cases, the DTAA (Double Taxation Avoidance Agreement) between the two countries provides tie-breaker rules to determine which country has primary taxing rights. These tie-breaker tests typically look at permanent home, centre of vital interests, habitual abode, and nationality, in that order.',
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

export default function NRIResidentialStatusBlog() {
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
                NRI Residential Status: How the 182-Day and 120-Day Rules Actually Work
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published May 15, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Your residential status is recalculated every financial year (April 1 to March 31) based on days spent in India.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The basic rule: 182+ days in India = Resident. Below 182 = Non-Resident.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The 120-day exception (Budget 2020): Indian citizens with Rs 15 lakh+ Indian income become deemed resident at just 120 days.</li>
                    <li style={{ marginBottom: 0 }}>NRI pays tax only on Indian income. RNOR pays on Indian income + foreign income received in India. ROR pays on worldwide income.</li>
                  </ul>
                </div>

                <p>Every NRI tax question starts here: what is your residential status? It determines which income India can tax, which forms you file, whether you need to disclose foreign assets, and whether your NRE account interest stays tax-free. Yet the rules are frequently misunderstood - the 182-day number gets quoted without the exceptions that can change it, and the newer 120-day rule catches people who thought they were safe. Here is how it actually works.</p>

                <h2>The Three Residential Statuses</h2>
                <p>Indian income tax law classifies every individual into one of three categories every financial year:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Status</th>
                        <th style={thStyle}>What Gets Taxed in India</th>
                        <th style={thStyle}>Schedule FA Required?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>NRI (Non-Resident)</strong></td>
                        <td style={tdStyle}>Only income that accrues or arises in India (rent, capital gains on Indian property, Indian salary, NRO interest)</td>
                        <td style={tdStyle}>No</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>RNOR (Resident but Not Ordinarily Resident)</strong></td>
                        <td style={tdAltStyle}>India-sourced income + foreign income received in or deemed to accrue in India. Foreign income not received in India is exempt.</td>
                        <td style={tdAltStyle}>Generally yes (evolving)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>ROR (Resident and Ordinarily Resident)</strong></td>
                        <td style={tdStyle}>Worldwide income - all Indian and foreign income regardless of where earned or received</td>
                        <td style={tdStyle}>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Step 1: Are You a Resident? (The 182-Day Rule)</h2>
                <p>Under Section 6(1) of the Income Tax Act, an individual is a <strong>resident</strong> in India for a financial year if they satisfy <strong>either</strong> of these conditions:</p>
                <ol>
                  <li><strong>Basic condition:</strong> Present in India for <strong>182 days or more</strong> during the financial year (April 1 to March 31).</li>
                  <li><strong>Combined condition:</strong> Present in India for <strong>60 days or more</strong> during the financial year AND <strong>365 days or more</strong> during the 4 preceding financial years.</li>
                </ol>
                <p>If neither condition is met, you are a <strong>Non-Resident (NRI)</strong> for that year.</p>

                <h3>The 60-Day Exception for Indian Citizens Abroad</h3>
                <p>The 60-day combined condition is relaxed in two important cases:</p>
                <ul>
                  <li><strong>Indian citizens who left India for employment abroad</strong> or as crew on Indian ships: the 60-day threshold in condition (2) is raised to 182 days. In effect, only condition (1) applies - they become resident only if they spend 182+ days in India.</li>
                  <li><strong>Indian citizens or PIOs visiting India:</strong> The same 182-day threshold applies under condition (2). They are not caught by the 60+365 combined condition.</li>
                </ul>
                <p>This means a typical NRI working abroad only has to worry about the single 182-day count, not the combined condition.</p>

                <h2>Step 1A: The 120-Day Deemed Resident Rule (Budget 2020)</h2>
                <p>Budget 2020 introduced an additional rule specifically targeting high-income NRIs. Under Section 6(1A), an Indian citizen is deemed a <strong>Resident</strong> if:</p>
                <ol>
                  <li>They are in India for <strong>120 days or more</strong> during the financial year, AND</li>
                  <li>Their <strong>Indian income</strong> (income other than foreign income) exceeds <strong>Rs 15 lakh</strong> during the year.</li>
                </ol>
                <p>If both conditions are met, the individual is deemed resident. However, they are specifically classified as <strong>RNOR</strong> (not ROR), meaning their foreign income not received in India remains exempt. This was a deliberate design choice - the rule was meant to bring high-earning visiting NRIs into the resident net for Indian income purposes, without subjecting them to worldwide taxation.</p>
                <p>If your Indian income (rent, capital gains, NRO interest, etc.) is below Rs 15 lakh, the 120-day rule does not apply to you and the standard 182-day threshold governs.</p>

                <h2>Step 2: If Resident, Are You RNOR or ROR?</h2>
                <p>Once you have established that you are a resident for the year, you need to determine whether you are RNOR or ROR. You are <strong>RNOR</strong> if you satisfy <strong>either</strong> of these conditions:</p>
                <ol>
                  <li>You have been a <strong>non-resident in 9 out of the 10 preceding financial years</strong>, OR</li>
                  <li>You have been in India for <strong>729 days or less during the 7 preceding financial years</strong>.</li>
                </ol>
                <p>If neither RNOR condition is met, you are <strong>ROR</strong> and worldwide income is taxable.</p>
                <p>For a detailed walkthrough of how long RNOR typically lasts and what to do with the window, see our <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR status guide for returning NRIs</Link>.</p>

                <h2>How to Count Days</h2>
                <ul>
                  <li><strong>Day of arrival:</strong> Counted as a day in India.</li>
                  <li><strong>Day of departure:</strong> NOT counted as a day in India.</li>
                  <li><strong>The financial year runs April 1 to March 31.</strong> Days from January-March count toward the current FY, not the calendar year.</li>
                  <li><strong>Transit through India</strong> (e.g., connecting flight with a layover): if you clear immigration and enter Indian territory, the day counts. Airside transit without clearing immigration does not count.</li>
                  <li><strong>Keep records:</strong> Passport stamps, boarding passes, and immigration records are your evidence. The Income Tax department can request these.</li>
                </ul>

                <h2>Why Residential Status Matters for Every NRI Decision</h2>
                <p>Your status for the year determines:</p>
                <ul>
                  <li><strong>TDS on property sale:</strong> <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 393(2)</Link> (earlier Section 195) applies only if the seller is NRI. A returning NRI who is resident (even RNOR) in the year of sale follows the resident seller process instead - different form, different rate, different compliance.</li>
                  <li><strong>NRE account tax exemption:</strong> <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE interest is tax-exempt</Link> only while you maintain non-resident status under FEMA.</li>
                  <li><strong>Foreign asset disclosure:</strong> Schedule FA is required for residents and RNOR. NRIs are exempt.</li>
                  <li><strong>DTAA treaty benefits:</strong> Your country of residence for treaty purposes may differ from your Indian residential status. Tie-breaker rules in the DTAA resolve the conflict.</li>
                  <li><strong>Which ITR form to file:</strong> NRIs use ITR-2 or ITR-3. Residents with foreign assets need ITR-2 at minimum.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure about your residential status?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We calculate residential status for NRIs, determine RNOR eligibility, and advise on the tax implications of status changes. Get it right before you file.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Returning to India: Financial Checklist</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale: Complete Guide</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA Repatriation Limits</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

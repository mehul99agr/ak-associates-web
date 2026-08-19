import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRE vs NRO: FEMA Repatriation Limits',
  description: 'NRE vs NRO vs FCNR accounts compared: which income goes where, tax treatment, the USD 1 million repatriation cap, and the FEMA mistakes that freeze NRI remittances.',
  keywords: [
    'NRE vs NRO account', 'NRI repatriation limit', 'USD 1 million scheme NRI',
    'FEMA repatriation rules', 'NRE account tax India', 'NRO account TDS',
    'FCNR account NRI', 'NRI bank account types India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nre-vs-nro-account-fema-repatriation-limits' },
  openGraph: {
    title: 'NRE vs NRO: FEMA Repatriation Limits',
    description: 'Which income goes into which account, tax treatment, the USD 1 million repatriation cap, and the FEMA mistakes that freeze NRI remittances.',
    url: 'https://agrawalkhandelwal.com/blog/nre-vs-nro-account-fema-repatriation-limits',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRE vs NRO Account: FEMA Repatriation Limits Explained',
    description: 'Which income goes where, tax treatment, and the USD 1 million repatriation cap.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NRE vs NRO: FEMA Repatriation Limits',
  description: 'NRE vs NRO vs FCNR accounts compared: which income goes where, tax treatment, the USD 1 million repatriation cap, and the FEMA mistakes that freeze NRI remittances.',
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
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nre-vs-nro-account-fema-repatriation-limits',
}

const faqs: [string, string][] = [
  [
    'What is the main difference between NRE and NRO accounts?',
    'An NRE account holds foreign income remitted from abroad, is fully and freely repatriable, and its interest is tax-exempt in India. An NRO account holds India-sourced income such as rent, dividends, or pension, its interest is taxable in India with TDS deducted, and repatriation out of it is capped at USD 1 million per financial year after CA certification.',
  ],
  [
    'How much money can an NRI repatriate from India in a year?',
    'From an NRO account, repatriation is capped at USD 1 million per financial year, a cumulative limit across all NRO balances and all remittances that year, not per transaction. This requires satisfying the Authorised Dealer bank with Form 145 (which replaced Form 15CA) and Form 146 (a CA certificate, replacing Form 15CB) confirming the source of funds and that applicable tax has been paid. NRE and FCNR account balances are fully repatriable with no annual cap.',
  ],
  [
    'Can I deposit my Indian rental income into my NRE account?',
    'No, and this is one of the most common FEMA violations we see. NRE accounts are meant only for income remitted from abroad. India-sourced income, rent, dividends, pension, or sale proceeds of Indian assets, must go into an NRO account. Depositing India-sourced income into an NRE account is a FEMA violation even if done unintentionally, and banks can flag or reverse such deposits on review.',
  ],
  [
    'Is interest on an NRE account really tax-free?',
    'Yes, interest earned on an NRE savings or fixed deposit account is exempt from Indian income tax under Section 10(4)(ii) of the Income Tax Act, as long as the account holder maintains non-resident status under FEMA. The moment the holder becomes a resident under FEMA, this exemption stops applying and the account must be redesignated.',
  ],
  [
    'What happens to my NRE and FCNR accounts when I move back to India permanently?',
    'Once you become a resident under FEMA, NRE and FCNR accounts must be redesignated into resident accounts, or the FCNR deposit can run to maturity before conversion. Interest earned after redesignation is no longer tax-exempt. This is a compliance step that is frequently missed by returning NRIs who simply keep operating the accounts as before.',
  ],
  [
    'Do I need a CA certificate for every NRO repatriation?',
    'Yes, for remittances above the prescribed threshold you need Form 145 (replacing Form 15CA) filed on the income tax portal, and for most remittances a Form 146 (replacing Form 15CB) issued by a Chartered Accountant certifying the source of funds and tax compliance, before the Authorised Dealer bank will process the transfer abroad. Banks will not process an NRO repatriation without this documentation in place.',
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

export default function NREvsNROBlog() {
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
                NRE vs NRO Account: FEMA Repatriation Limits Explained
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
                    <li style={{ marginBottom: '0.4rem' }}>NRE accounts hold foreign-sourced money, are fully repatriable, and earn tax-free interest. NRO accounts hold India-sourced income, are taxable, and repatriation is capped at USD 1 million per financial year.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Depositing India-sourced income (rent, dividends, pension) into an NRE account is a FEMA violation, it belongs in NRO.</li>
                    <li style={{ marginBottom: '0.4rem' }}>NRO repatriation needs Form 145 and Form 146 (formerly 15CA/15CB) before a bank will process it.</li>
                    <li style={{ marginBottom: 0 }}>The USD 1 million cap is cumulative across all NRO remittances in the year, not per transaction.</li>
                  </ul>
                </div>

                <p>Most of the FEMA problems we see in NRI accounts trace back to one thing: money going into the wrong account. NRE and NRO look similar on a bank's app, but they follow completely different rules on tax, repatriation, and what can legally go into each. Here is how to keep them straight, and how the USD 1 million repatriation cap actually works.</p>

                <h2>The Three Account Types</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Account</th>
                        <th style={thStyle}>Holds</th>
                        <th style={thStyle}>Currency</th>
                        <th style={thStyle}>Repatriation</th>
                        <th style={thStyle}>Interest Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}><strong>NRE</strong> (Non-Resident External)</td>
                        <td style={tdStyle}>Foreign-sourced income remitted from abroad</td>
                        <td style={tdStyle}>Indian rupees</td>
                        <td style={tdStyle}>Fully repatriable, no cap</td>
                        <td style={tdStyle}>Exempt (Section 10(4)(ii))</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}><strong>NRO</strong> (Non-Resident Ordinary)</td>
                        <td style={tdAltStyle}>India-sourced income (rent, dividends, pension, sale proceeds)</td>
                        <td style={tdAltStyle}>Indian rupees</td>
                        <td style={tdAltStyle}>USD 1 million per FY, with CA certification</td>
                        <td style={tdAltStyle}>Taxable, TDS deducted</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}><strong>FCNR</strong> (Foreign Currency Non-Resident)</td>
                        <td style={tdStyle}>Foreign currency term deposits</td>
                        <td style={tdStyle}>Foreign currency (USD, GBP, AED, etc.)</td>
                        <td style={tdStyle}>Fully repatriable, no cap</td>
                        <td style={tdStyle}>Exempt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>NRE Accounts: What Goes In, What Comes Out</h2>
                <p>An NRE account exists to hold money you earn <strong>outside India</strong> that you choose to bring into an Indian rupee account, foreign salary, consulting income, business profits earned abroad, or funds transferred from your existing foreign bank account. Both the principal and the interest are fully and freely repatriable back abroad at any time, with no annual limit and minimal documentation for the outward transfer itself. Interest earned is exempt from Indian income tax under Section 10(4)(ii), as long as you continue to hold non-resident status under FEMA. NRE accounts can be held jointly with a resident close relative under the "former resident" joint holding provisions, though operational rights differ from a standard joint account.</p>
                <p>The rule that trips people up: <strong>only foreign-sourced funds should enter an NRE account.</strong> If Indian rental income, dividends from Indian shares, or maturity proceeds from an Indian fixed deposit get credited into an NRE account, that is a FEMA violation, regardless of intent. Banks can, and do, flag such deposits on review and may require the account to be corrected.</p>

                <h2>NRO Accounts: Where India-Sourced Income Belongs</h2>
                <p>An NRO account is for income that <strong>arises in India</strong> while you are a non-resident, rent from Indian property, dividends on Indian shares, interest on Indian fixed deposits, pension credited in India, or proceeds from selling Indian assets. Unlike NRE, interest on an NRO account is <strong>taxable in India</strong>, and banks deduct TDS at source, generally at a high rate (30% plus applicable surcharge and cess) unless a lower rate applies under the relevant DTAA, which requires furnishing a Tax Residency Certificate and Form 10F to the bank.</p>
                <p>Repatriation out of an NRO account is capped at <strong>USD 1 million per financial year</strong>, and this cap is cumulative, it counts all remittances out of all your NRO balances during the year, not a fresh USD 1 million allowance per transfer or per bank. Before the Authorised Dealer bank will process the transfer, you need:</p>
                <ul>
                  <li><strong>Form 145</strong> (which replaced Form 15CA), filed by you on the income tax e-filing portal, declaring the nature and amount of the remittance.</li>
                  <li><strong>Form 146</strong> (which replaced Form 15CB), a certificate from a Chartered Accountant confirming the source of funds and that applicable Indian tax has been paid or deducted, required for most remittances above the prescribed threshold.</li>
                </ul>
                <p>If you're repatriating proceeds from a property sale specifically, see our guide on <Link href="/blog/nri-repatriation-property-sale-proceeds" style={{ color: 'var(--primary)', fontWeight: 600 }}>repatriating NRI property sale proceeds</Link>. For the complete NRO repatriation process covering all income types, documents required, and common bank rejections, see our dedicated <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO account repatriation guide</Link>.</p>

                <h2>FCNR: The Foreign-Currency Option</h2>
                <p>An FCNR account is a term deposit held in a foreign currency (commonly USD, GBP, EUR, or AED) rather than Indian rupees. Because the deposit stays in foreign currency, there is no exchange rate risk on the principal between deposit and maturity, useful for NRIs who want to earn Indian bank interest rates without taking on rupee depreciation risk. Like NRE, both principal and interest are fully repatriable and interest is tax-exempt while the holder remains non-resident.</p>

                <h2>Current Income vs Capital Repatriation</h2>
                <p>A distinction worth understanding: FEMA distinguishes between repatriating <strong>current income</strong> (rent, dividends, pension, interest as it is earned) and repatriating <strong>capital</strong> (accumulated NRO balances, sale proceeds of assets). Current income is, in principle, freely remittable as it arises, but in practice banks still route it through the same NRO account, CA certification, and Form 145/146 process, and it counts toward the same cumulative USD 1 million annual cap alongside capital remittances. Don't assume rental income has a separate, uncapped remittance channel, it doesn't, in practice.</p>

                <h2>Common FEMA Mistakes</h2>
                <ul>
                  <li><strong>Depositing India-sourced income into an NRE account</strong>, the single most common error, usually from treating NRE and NRO as interchangeable "the NRI account" rather than purpose-specific accounts.</li>
                  <li><strong>Not tracking the cumulative USD 1 million cap</strong> across multiple remittances or multiple banks in the same financial year, leading to a rejected transfer late in the year.</li>
                  <li><strong>Skipping Form 145/146</strong> and expecting the bank to process an NRO remittance on request alone, banks will not move funds abroad without this documentation.</li>
                  <li><strong>Not redesignating NRE/FCNR accounts</strong> after returning to India and becoming a resident under FEMA, continuing to hold them as non-resident accounts and continuing to claim tax-exempt interest after residency has changed. <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>Returning NRIs get a short RNOR window</Link> where some foreign income stays exempt, but account redesignation is still mandatory.</li>
                  <li><strong>Assuming a joint NRE account with a resident relative</strong> carries the same free repatriation rights for the resident joint holder as it does for the NRI, it doesn't; operating rights and repatriation eligibility attach to the account holder's own status.</li>
                  <li><strong>Not claiming DTAA relief on NRO interest TDS</strong>, leaving 30%+ TDS deducted when a lower treaty rate was available with the right paperwork.</li>
                </ul>

                <h2>Practical Takeaway</h2>
                <p>The account structure question is simple once the rule is clear: foreign income into NRE or FCNR, India-sourced income into NRO. The complexity is entirely in the repatriation paperwork, and that paperwork is not optional. If you're planning a large NRO repatriation this year, whether from accumulated rental income, a maturing deposit, or an asset sale, start the Form 145/146 process well before you need the funds abroad, banks typically need 5 to 10 working days once documentation is complete.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help repatriating funds or structuring your NRI accounts correctly?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 145/146 certification, DTAA relief on NRO interest, and full FEMA compliance reviews for NRI account structures.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
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

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation: Rules & Process</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/lrs-liberalised-remittance-scheme-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>LRS: Liberalised Remittance Scheme Guide</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/tds-nro-interest-fd-dtaa-relief" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRO Interest & FD: DTAA Relief</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

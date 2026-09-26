import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'NRI Fixed Deposit Options: NRE vs NRO vs FCNR Comparison',
  description: 'NRE FD, NRO FD, and FCNR FD compared for NRIs: interest rates, taxability, TDS, repatriability, tenure, and currency risk for each fixed deposit type.',
  keywords: [
    'NRI fixed deposit', 'NRE FD vs NRO FD vs FCNR FD', 'FCNR fixed deposit NRI', 'NRE FD interest rate',
    'NRO FD TDS', 'FCNR deposit tenure', 'best FD for NRI', 'NRI FD taxability',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-fixed-deposit-options-nre-vs-nro-vs-fcnr-comparison' },
  openGraph: {
    title: 'NRI Fixed Deposit Options: NRE vs NRO vs FCNR Comparison',
    description: 'Interest rates, taxability, TDS, repatriability, and tenure compared across NRE FD, NRO FD, and FCNR FD.',
    url: 'https://agrawalkhandelwal.com/blog/nri-fixed-deposit-options-nre-vs-nro-vs-fcnr-comparison',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Fixed Deposit Options: NRE vs NRO vs FCNR',
    description: 'Which fixed deposit type suits which NRI, and how tax and repatriation rules differ across the three.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Fixed Deposit Options: NRE vs NRO vs FCNR Comparison', 'nri-fixed-deposit-options-nre-vs-nro-vs-fcnr-comparison')

const articleLd = buildArticleLd({
  headline: 'NRI Fixed Deposit Options: NRE vs NRO vs FCNR Comparison',
  description: 'A fixed-deposit-specific comparison of NRE FD, NRO FD, and FCNR FD for NRIs: interest rates, taxability, TDS, repatriability, tenure, and currency risk.',
  datePublished: '2026-09-17',
  slug: 'nri-fixed-deposit-options-nre-vs-nro-vs-fcnr-comparison',
})

const faqs: FaqPair[] = [
  ['Which NRI fixed deposit is tax-free in India?', 'Interest on both NRE FDs and FCNR FDs is fully exempt from Indian income tax under Section 10(4)(ii) (NRE) and Section 10(15)(iv)(fa)/equivalent exemption for FCNR, as long as the depositor holds non-resident status under FEMA. NRO FD interest is fully taxable in India with TDS deducted at source; there is no exempt fixed deposit option for India-sourced funds.'],
  ['What is the minimum tenure for an FCNR fixed deposit?', 'FCNR(B) deposits must be booked for a minimum tenure of 1 year and can generally run up to 5 years, with 1-to-3-year tenures being the most commonly offered. Premature withdrawal before completing the minimum lock-in typically forfeits the interest for that period, so FCNR is not a fit for money needed on short notice.'],
  ['Can I open an FCNR fixed deposit in any foreign currency?', 'No, only in the currencies a particular bank offers, commonly USD, GBP, EUR, AED, CAD, AUD, SGD, and JPY. The deposit and its interest stay denominated in that foreign currency throughout the tenure, and both principal and interest are repatriated in the same currency (or converted to INR/another currency on request at maturity).'],
  ['Does an NRO fixed deposit have a repatriation limit?', 'Yes. Both the principal and accumulated interest of an NRO FD fall under the same USD 1 million per financial year cumulative repatriation cap that applies to all NRO balances, and moving the funds abroad requires Form 145 (which replaced Form 15CA) and, for most remittances, Form 146 (which replaced Form 15CB), a Chartered Accountant certificate confirming tax compliance. NRE and FCNR FDs have no such cap.'],
  ['Why would an NRI choose an NRO FD over an NRE or FCNR FD if it is taxable?', 'Because an NRO FD is often not a choice at all: India-sourced funds, rental income, maturity proceeds of an old resident FD carried over, dividends, or sale proceeds of Indian assets, must legally be parked in an NRO account, and any FD created from that account is necessarily an NRO FD. NRE and FCNR FDs can only be funded from money remitted from abroad or transferred from an existing NRE/FCNR account, not from India-sourced income.'],
  ['Does an FCNR deposit protect against rupee depreciation?', 'Yes, that is its main structural advantage over an NRE FD. Because an FCNR deposit stays denominated in the foreign currency for its entire tenure, its principal value in that currency is unaffected by INR movements. An NRE FD, by contrast, is held in rupees, so if the rupee weakens against the depositor\'s home currency between deposit and maturity, the foreign-currency value of the NRE FD on withdrawal can be lower even though the rupee amount and interest are unchanged.'],
]

const faqLd = buildFaqLd(faqs)

export default function NriFdComparisonBlog() {
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
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                NRI Fixed Deposit Options: NRE vs NRO vs FCNR Comparison
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 17, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>NRE FD</strong>: rupee deposit, foreign-sourced funds only, interest tax-free, fully repatriable, but carries rupee depreciation risk.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>FCNR FD</strong>: stays in foreign currency for the whole tenure, interest tax-free, fully repatriable, no rupee risk on principal, minimum tenure 1 year.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>NRO FD</strong>: for India-sourced money, interest is taxable with TDS deducted, and repatriation is capped at USD 1 million/year with CA certification.</li>
                    <li style={{ marginBottom: 0 }}>Which one you can even open depends on where the money came from, not just which gives the best rate.</li>
                  </ul>
                </div>

                <p>NRIs comparing fixed deposit options usually start with interest rates and stop there, but the more important question for an NRI FD is almost always tax treatment and repatriability, not the headline rate. This guide is deliberately scoped to fixed deposits specifically: for the broader question of which savings/current account type an NRI should use for everyday banking, see our companion guide on <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO accounts and FEMA repatriation limits</Link>. Here, the focus is narrower: how NRE FDs, NRO FDs, and FCNR FDs actually differ once you decide to lock money into a term deposit.</p>

                <h2>The Three FD Types at a Glance</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Feature</th>
                        <th style={thStyle}>NRE FD</th>
                        <th style={thStyle}>NRO FD</th>
                        <th style={thStyle}>FCNR FD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}>Source of funds</td>
                        <td style={tdStyle}>Foreign income remitted from abroad</td>
                        <td style={tdAltStyle}>India-sourced income (rent, dividends, old resident FDs, sale proceeds)</td>
                        <td style={tdStyle}>Foreign income remitted from abroad</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Currency held in</td>
                        <td style={tdStyle}>Indian rupees</td>
                        <td style={tdAltStyle}>Indian rupees</td>
                        <td style={tdStyle}>Foreign currency (USD, GBP, EUR, AED, etc.)</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Interest taxability in India</td>
                        <td style={tdStyle}>Exempt (Section 10(4)(ii))</td>
                        <td style={tdAltStyle}>Taxable, TDS deducted at source</td>
                        <td style={tdStyle}>Exempt</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Repatriability</td>
                        <td style={tdStyle}>Fully repatriable, no cap</td>
                        <td style={tdAltStyle}>Capped at USD 1 million/FY, with CA certification</td>
                        <td style={tdStyle}>Fully repatriable, no cap</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Currency/exchange risk</td>
                        <td style={tdStyle}>Rupee depreciation risk on maturity value in home currency</td>
                        <td style={tdAltStyle}>Same rupee risk as NRE</td>
                        <td style={tdStyle}>None on principal; stays in the original foreign currency</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Typical minimum tenure</td>
                        <td style={tdStyle}>1 year</td>
                        <td style={tdAltStyle}>7 days</td>
                        <td style={tdStyle}>1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>NRE Fixed Deposits</h2>
                <p>An NRE FD is a rupee-denominated term deposit funded only with money remitted from abroad or transferred from an existing NRE account. Both the principal and the interest earned are <strong>fully and freely repatriable</strong> at any time with no annual cap, and the interest is <strong>exempt from Indian income tax</strong> under Section 10(4)(ii), for as long as the depositor holds non-resident status under FEMA. Banks generally require a minimum tenure of one year for an NRE FD, and premature withdrawal usually means a lower, penalty-adjusted rate on the interest actually paid.</p>
                <p>The trade-off is currency risk. Because the deposit sits in rupees, its value in the depositor&apos;s home currency floats with the exchange rate over the full tenure. An NRI depositing at a favourable INR rate can see the effective foreign-currency return eroded by rupee depreciation by the time the FD matures, even though the quoted interest rate itself was never in question.</p>

                <h2>NRO Fixed Deposits</h2>
                <p>An NRO FD holds India-sourced funds: rental income, dividends on Indian shares, pension credited in India, an old resident FD carried over after the depositor became an NRI, or sale proceeds of Indian assets. Interest earned on an NRO FD is <strong>fully taxable in India</strong>, and the bank deducts TDS at source, generally at a high rate (30% plus applicable surcharge and cess) unless a lower rate under the relevant DTAA applies, which requires the depositor to furnish a Tax Residency Certificate and Form 10F to the bank.</p>
                <p>Repatriating the maturity proceeds, principal and interest alike, out of an NRO FD falls under the same <strong>USD 1 million per financial year cumulative cap</strong> that applies to all other NRO balances and remittances put together; it is not a separate allowance for FD proceeds specifically. Moving the money abroad also requires <strong>Form 145</strong> (which replaced Form 15CA) filed on the income tax portal and, for most remittances, <strong>Form 146</strong> (which replaced Form 15CB), a Chartered Accountant certificate confirming the source of funds and tax compliance. Minimum tenure on NRO FDs is typically much shorter than NRE or FCNR, often as low as 7 days at many banks, which makes it the more flexible option purely on tenure, even though it is the least tax-efficient of the three.</p>

                <h2>FCNR Fixed Deposits</h2>
                <p>An FCNR (Foreign Currency Non-Resident) FD is booked and held in a foreign currency for its entire tenure, commonly USD, GBP, EUR, or AED depending on what the bank offers, rather than being converted into rupees. Because the deposit never touches rupees until (or unless) the depositor chooses to convert it at maturity, there is <strong>no exchange rate risk on the principal</strong> between the date of deposit and the date of maturity, the single biggest structural advantage FCNR has over an NRE FD for an NRI who wants Indian-bank interest rates without taking on rupee risk.</p>
                <p>Interest on an FCNR FD is exempt from Indian income tax on the same basis as NRE interest, for as long as the depositor remains non-resident under FEMA, and both principal and interest are fully and freely repatriable with no annual cap. The deposit generally requires a <strong>minimum tenure of one year</strong>, and premature withdrawal before completing the applicable lock-in period commonly forfeits interest for that period entirely rather than just reducing the rate, so FCNR is not the right structure for funds that might be needed on short notice. Tax may still be payable in the depositor&apos;s country of tax residence, depending on that country&apos;s own rules and any applicable DTAA, since India&apos;s exemption only removes the Indian-side liability.</p>

                <h2>Which One Actually Fits</h2>
                <p>In practice the choice is often made for you by where the money is sitting today, not by comparing rate sheets:</p>
                <ul>
                  <li><strong>Money already earned and held abroad, not yet remitted:</strong> NRE FD (if comfortable with rupee exposure for the return) or FCNR FD (if the priority is avoiding rupee risk).</li>
                  <li><strong>Money that has already arisen in India</strong> (rent, dividends, an inherited FD, sale proceeds): has to go into an NRO FD; there is no way to route India-sourced income into an NRE or FCNR deposit.</li>
                  <li><strong>Short holding period, uncertain about when the funds will be needed:</strong> NRO FD&apos;s shorter minimum tenure gives more flexibility than the typical one-year floor on NRE and FCNR, even accounting for the tax and TDS drag.</li>
                  <li><strong>Planning to return to India within the FD&apos;s tenure:</strong> both NRE and FCNR accounts must be redesignated once residential status under FEMA changes to resident, and interest earned after redesignation stops being exempt; factor the expected return date into the tenure chosen.</li>
                </ul>
                <p>For the full mechanics of the USD 1 million repatriation cap, Form 145/146 documentation, and the broader distinction between which income belongs in which account type, see our detailed guide on <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO accounts and FEMA repatriation limits</Link>. For NRIs selling Indian property and deciding what to do with the proceeds before parking them in an FD, our <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI property sale guide</Link> covers how much reaches the NRO account in the first place after tax deduction.</p>
              </div>

              <PostCTA
            heading="Deciding between NRE, NRO, and FCNR fixed deposits?"
            description="We help NRIs structure deposits for the right mix of tax efficiency, repatriability, and currency risk, and handle DTAA relief on NRO FD interest."
            secondaryLabel="NRI Tax Advisory"
            secondaryHref="/nri-tax-advisory"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO: FEMA Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-nro-interest-fd-dtaa-relief" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRO Interest &amp; FD: DTAA Relief</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation: Rules &amp; Process</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

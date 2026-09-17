import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'NRI Demat Account: PIS vs Non-PIS Explained',
  description: 'What a PIS account is, when it is needed for NRI equity investment, how non-PIS (NRO-linked) accounts work, and the 2025 RBI change merging NRE and NRO PIS accounts.',
  keywords: [
    'NRI PIS account', 'NRI non-PIS demat account', 'portfolio investment scheme NRI',
    'PIS vs non-PIS NRI', 'NRI demat account rules', 'NRE PIS account', 'NRO demat account NRI',
    'RBI PIS permission NRI', 'NRI equity investment India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-demat-account-pis-vs-non-pis-explained' },
  openGraph: {
    title: 'NRI Demat Account: PIS vs Non-PIS Explained',
    description: 'When NRIs need a PIS account, how non-PIS (NRO-linked) accounts differ, and the 2025 RBI simplification merging NRE and NRO PIS accounts.',
    url: 'https://agrawalkhandelwal.com/blog/nri-demat-account-pis-vs-non-pis-explained',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Demat Account: PIS vs Non-PIS Explained',
    description: 'PIS is for repatriable secondary-market equity; non-PIS covers NRO-linked and specific non-PIS instruments. Here is how they differ.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Demat Account: PIS vs Non-PIS Explained', 'nri-demat-account-pis-vs-non-pis-explained')

const articleLd = buildArticleLd({
  headline: 'NRI Demat Account: PIS vs Non-PIS Explained',
  description: 'What the Portfolio Investment Scheme (PIS) covers for NRIs, when a non-PIS account applies, the RBI reporting framework, and the 2025 change merging NRE and NRO PIS accounts.',
  datePublished: '2026-10-08',
  slug: 'nri-demat-account-pis-vs-non-pis-explained',
})

const faqs: [string, string][] = [
  [
    'What is a PIS account for NRIs?',
    'PIS stands for Portfolio Investment Scheme, an RBI framework under which NRIs can buy and sell shares and convertible debentures of Indian listed companies on a recognised stock exchange, on either a repatriable or non-repatriable basis. A PIS-enabled bank account (linked to your demat and trading accounts) is needed for these secondary-market equity purchases, and every such transaction is reported to the RBI through the designated PIS bank.',
  ],
  [
    'When is a PIS account mandatory for an NRI?',
    'A PIS account is required specifically for NRIs buying or selling shares of Indian listed companies on the secondary market (stock exchange) on a repatriable basis, funded through an NRE account. Purchases made on a non-repatriable basis, funded through an NRO account, along with several other categories such as mutual fund units, IPO applications, and government securities, do not require routing through the PIS framework, though they still require a demat account and applicable RBI/FEMA compliance.',
  ],
  [
    'What changed with the 2025 RBI update to PIS accounts?',
    'RBI simplified the framework so NRIs no longer need to maintain two separate PIS-designated accounts (one linked to NRE for repatriable investment, another linked to NRO for non-repatriable investment). A single NRE PIS-enabled account can now be used to route both repatriable and non-repatriable secondary-market equity investment, reducing the account-opening and reconciliation burden that the earlier two-account structure created.',
  ],
  [
    'What is a non-PIS demat account and how is it different?',
    'A non-PIS demat account is typically linked to an NRO account and used for investments that fall outside the PIS reporting requirement, such as non-repatriable secondary-market purchases, mutual fund transactions, IPO subscriptions, or holding shares acquired through means like ESOPs or inheritance. It does not require the transaction-by-transaction RBI reporting that a PIS account does, which generally makes account opening and day-to-day use simpler, though gains typically remain repatriable only up to the extent permitted for NRO funds.',
  ],
  [
    'Can an NRI hold both a PIS and a non-PIS demat account?',
    'Yes, and in practice many NRIs do: a PIS-linked account for repatriable secondary-market equity trading, and a separate non-PIS account for NRO-linked investments, mutual funds, or IPO applications. The two serve different categories of investment and are not interchangeable for the transactions each is meant to cover.',
  ],
  [
    'Does an NRI need RBI permission separately for each PIS transaction?',
    'Not for each transaction individually, but the framework is designed around ongoing RBI oversight rather than a one-time approval. Once the PIS account is opened with a bank authorised to offer the scheme, that bank monitors and reports each purchase and sale to the RBI as part of the account\'s designated-account status, and the NRI operates within the overall investment limits and reporting structure the bank enforces on the RBI\'s behalf.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NRIDematPISBlog() {
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
                NRI Demat Account: PIS vs Non-PIS Explained
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 8, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>PIS</strong> (Portfolio Investment Scheme) is required for NRIs buying/selling Indian listed shares on the secondary market on a <strong>repatriable</strong> basis, and every transaction is reported to the RBI.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Non-PIS</strong> accounts cover NRO-linked (non-repatriable) secondary-market purchases, mutual funds, IPO applications, and similar instruments; no transaction-level RBI reporting.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A <strong>2025 RBI change</strong> merged the earlier two-account PIS structure: a single NRE PIS-enabled account can now route both repatriable and non-repatriable secondary-market equity.</li>
                    <li style={{ marginBottom: 0 }}>Many NRIs hold both a PIS account (for repatriable trading) and a non-PIS account (for NRO-linked and fund investments) side by side.</li>
                  </ul>
                </div>

                <p>One of the more confusing parts of setting up an investment account as an NRI is figuring out whether you actually need a PIS account, or whether a simpler non-PIS demat account will do. The confusion is understandable: PIS was designed decades ago as an RBI reporting mechanism, and it still applies, but not to every kind of investment an NRI might want to make, and the framework itself was recently simplified in ways older guidance online has not caught up with.</p>

                <h2>What the Portfolio Investment Scheme (PIS) Actually Covers</h2>
                <p>PIS is an RBI framework, operated through banks authorised to offer the scheme, that lets NRIs purchase and sell shares and convertible debentures of Indian listed companies on a recognised stock exchange, on either a repatriable or non-repatriable basis. Two things define when PIS applies:</p>
                <ul>
                  <li>The transaction is a <strong>secondary-market purchase or sale</strong> of listed equity (buying or selling shares on the exchange, not through an IPO or a mutual fund).</li>
                  <li>The investment is <strong>routed through a PIS-designated bank account</strong>, which is linked to the investor&apos;s demat and trading accounts, and every purchase and sale is reported by that bank to the RBI as part of the scheme&apos;s ongoing oversight.</li>
                </ul>
                <p>Historically, an NRI wanting repatriable secondary-market investment needed a PIS account linked to their NRE account, while non-repatriable secondary-market investment needed a separate PIS account linked to their NRO account, two parallel PIS-designated accounts doing similar jobs for different repatriation categories.</p>

                <h2>The 2025 Simplification: One PIS Account Instead of Two</h2>
                <p>RBI has since simplified this structure. NRIs are no longer required to maintain two separate PIS-designated accounts for the repatriable and non-repatriable legs of secondary-market equity investment. A single NRE PIS-enabled account can now handle both, cutting down on the duplicate account-opening paperwork and the reconciliation effort that the two-account structure used to create for both the investor and the bank. This is a meaningful operational simplification, but it does not change the underlying principle: secondary-market equity investment still needs to be routed through a PIS-designated account and reported to the RBI; it just no longer needs two of them.</p>

                <h2>When Non-PIS Applies Instead</h2>
                <p>Several common categories of investment fall outside PIS altogether and can be handled through an ordinary non-PIS demat account, generally linked to the investor&apos;s NRO account:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Investment Type</th><th style={thStyle}>PIS or Non-PIS</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>Secondary-market equity, repatriable (NRE-funded)</td><td style={tdStyle}>PIS</td></tr>
                      <tr><td style={tdAltStyle}>Secondary-market equity, non-repatriable (NRO-funded)</td><td style={tdAltStyle}>PIS (post-2025, via the same NRE PIS account) or historically a separate NRO-linked PIS account</td></tr>
                      <tr><td style={tdStyle}>Mutual fund units</td><td style={tdStyle}>Non-PIS</td></tr>
                      <tr><td style={tdAltStyle}>IPO applications</td><td style={tdAltStyle}>Non-PIS</td></tr>
                      <tr><td style={tdStyle}>Shares acquired via ESOP, gift, or inheritance and simply held/sold later</td><td style={tdStyle}>Generally non-PIS, subject to the specific facts</td></tr>
                      <tr><td style={tdAltStyle}>Government securities, corporate bonds, NCDs</td><td style={tdAltStyle}>Non-PIS</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Because non-PIS transactions do not carry the transaction-by-transaction RBI reporting requirement that PIS does, opening and using a non-PIS account is generally simpler and faster, and it is the more common entry point for NRIs who mainly invest through mutual funds rather than direct equity trading.</p>

                <h2>Practical Account-Opening Differences</h2>
                <p>From the investor&apos;s side, the practical distinction shows up mainly at account-opening stage. A PIS account requires a specific PIS permission letter from the designated bank, linked explicitly to the demat and trading accounts used for secondary-market equity, and the bank continues to monitor and report each trade under the scheme for as long as the account is active. A non-PIS account, by contrast, is opened more like a standard NRO-linked demat and trading account, without that ongoing designated-account reporting layer, though standard FEMA and KYC norms still apply to every NRI investment account regardless of PIS status.</p>
                <p>Many NRIs end up holding both: a PIS account for direct, repatriable equity trading, and a separate non-PIS account for mutual funds, IPO applications, or NRO-linked holdings that do not need PIS routing. Which combination makes sense depends on how the NRI actually intends to invest, and getting the account type wrong at the outset (for example, trying to trade secondary-market shares through a non-PIS account) typically results in the transaction being blocked or flagged by the depository participant.</p>
                <p>Investment income and repatriation planning for NRIs also intersects closely with residential status and account structuring more broadly; see our guides on <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO accounts and repatriation limits</Link> and <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI residential status</Link> for the related compliance picture.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Setting up your NRI investment accounts correctly?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help NRIs choose the right account structure, PIS or non-PIS, and stay compliant with RBI reporting and repatriation rules.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA &amp; Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: The 182-Day Rule</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs in India</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our NRI Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

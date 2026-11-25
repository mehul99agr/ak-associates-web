import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import ServiceOffer from '../_components/ServiceOffer'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

const SLUG = 'indian-holding-company-us-uae-subsidiary-structure'
const TITLE = 'Indian Pvt Ltd Holding With US or UAE Subsidiary: Structure'
const DESC = 'Keep the head office in India and run international operations through a US C-Corp or UAE subsidiary. ODI rules, US and UAE tax, POEM, transfer pricing and filings.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    'Indian holding company foreign subsidiary', 'Indian company US subsidiary', 'Indian company UAE subsidiary', 'ODI Indian company wholly owned subsidiary',
    'India head office international expansion structure', 'US C-Corp subsidiary of Indian company', 'Dubai subsidiary of Indian private limited', 'India-first startup structure',
  ],
  alternates: { canonical: `https://agrawalkhandelwal.com/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, url: `https://agrawalkhandelwal.com/blog/${SLUG}`, type: 'article', images: OG_IMAGES },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: OG_IMAGES },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Indian Pvt Ltd Holding With US or UAE Subsidiary', SLUG)

const articleLd = buildArticleLd({
  headline: 'Indian Pvt Ltd as Holding Company With a US C-Corp or UAE Subsidiary',
  description: DESC,
  datePublished: '2026-11-25',
  dateModified: '2026-11-25',
  slug: SLUG,
})

const faqs: [string, string][] = [
  ['What is an India-first holding structure?', 'The founders own an Indian private limited company, which is the head office and top of the group. The Indian company sets up a US C-Corp, a UAE company or both as wholly owned subsidiaries to sell, sign contracts and hire abroad. Investors come in at the Indian company.'],
  ['Can an Indian private limited company own a US or UAE company?', 'Yes. An Indian company can make overseas direct investment under the Overseas Investment Rules, 2022 through its authorised dealer bank. Under the automatic route its total financial commitment can go up to 400% of its net worth as per its last audited balance sheet, and the foreign company must be in a bona fide business.'],
  ['Do founders need to make ODI themselves in this structure?', 'No. The founders hold shares only in the Indian company. The overseas investment is made by the Indian company, so the individual ODI restrictions and the LRS limit do not come into it. That is one of the main reasons founders prefer this structure when they do not need a US parent.'],
  ['Are profits of the US or UAE subsidiary taxed in India?', 'Not while they stay in the subsidiary, as long as it is genuinely managed abroad. They are taxed in India when paid to the Indian parent as dividends, with credit for foreign tax under the tax treaty. If the subsidiary is really run from India, it can be treated as Indian-resident under the place of effective management test.'],
  ['What tax applies on dividends from the US subsidiary?', 'Under the India-US DTAA, US withholding tax on dividends is limited to 15% where the Indian company holds at least 10% of the voting stock. The dividend is then taxed in India in the parent\'s hands with credit for the US tax.'],
  ['Is a UAE subsidiary a tax-free company?', 'No. UAE corporate tax is 0% on taxable income up to AED 375,000 and 9% above that. A qualifying free zone person can get 0% on qualifying income only if it has real substance in the free zone and meets the other conditions. A UAE company that only books profits shifted from India also invites transfer pricing and POEM challenges in India.'],
  ['When should a startup choose a Delaware parent instead?', 'When US venture investors or accelerators make a Delaware parent a condition of investing. US funds usually want to invest at the top of the group, so an Indian holding company with a US subsidiary may not suit them. In that case look at a flip or the LLP triangle structure.'],
]

const faqLd = buildFaqLd(faqs)

const box = { padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--bg-main)', textAlign: 'center' as const }
const arrow = { textAlign: 'center' as const, color: 'var(--accent)', fontWeight: 800, fontSize: '0.85rem', margin: '0.4rem 0' }
const link = { color: 'var(--primary)', fontWeight: 600 }

export default function IndianHoldingForeignSubsidiaryBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">US Cross-Border</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Indian Pvt Ltd as Holding Company With a US C-Corp or UAE Subsidiary</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 25, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>The structure: founders own an <strong>Indian Pvt Ltd</strong> (the head office), which owns a <strong>US C-Corp</strong>, a <strong>UAE company</strong> or both for international operations.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The Indian company makes the overseas direct investment, up to 400% of its net worth under the automatic route. Founders make no ODI themselves.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Subsidiary profits are taxed abroad and taxed in India only when paid up as dividends, with foreign tax credit, provided the subsidiary is really managed abroad.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Plan transfer pricing between India and each subsidiary, the POEM test, and the yearly ODI filings (including the Annual Performance Report by December 31).</li>
                  <li style={{ marginBottom: 0 }}>Best when you will raise from Indian or global investors who are happy at the Indian level, or want an Indian IPO. If US VCs insist on a Delaware parent, look at a flip instead.</li>
                </ul>
              </div>
              <ServiceOffer variant="us-structure" />

              <p>Not every founder needs a Delaware parent. If you are building in Bangalore or Mumbai, raising from Indian funds, and selling to customers in the US or the Gulf, the simplest group often keeps India at the top: the Indian private limited company is the head office and owns the overseas companies. This guide covers how that works under FEMA, how the US and UAE subsidiaries are taxed, and what it takes to keep it compliant.</p>

              <h2>What Does the Structure Look Like?</h2>
              <div style={{ maxWidth: '560px', margin: '1.5rem auto 2rem' }} role="img" aria-label="Founders own an Indian private limited company, which owns a US C-Corp and a UAE company as subsidiaries">
                <div style={box}><strong>Founders and investors</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Hold shares in the Indian company only</span></div>
                <div style={arrow}>&darr; equity</div>
                <div style={{ ...box, borderLeft: '4px solid var(--primary)' }}><strong>Indian Pvt Ltd (head office)</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Owns the IP, employs the core team, raises capital</span></div>
                <div style={arrow}>&darr; ODI (Overseas Investment Rules, 2022)</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.75rem' }}>
                  <div style={{ ...box, borderLeft: '4px solid var(--accent)' }}><strong>US C-Corp</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>US customers, contracts, bank account, US hires</span></div>
                  <div style={{ ...box, borderLeft: '4px solid var(--accent)' }}><strong>UAE company</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Gulf and Middle East sales, regional team</span></div>
                </div>
              </div>
              <p>Money flows one way at the start: out of India as investment in the subsidiaries. Later, profits come back as dividends or as fees for services the Indian company provides. Nothing comes back into India as foreign investment, which keeps round-tripping questions simple.</p>

              <h2>Why Keep the Head Office in India?</h2>
              <ul>
                <li><strong>No ODI for founders:</strong> founders hold Indian shares only. The individual ODI conditions and the US$250,000 LRS limit do not apply to them, unlike a structure where founders hold a foreign parent.</li>
                <li><strong>Indian listing stays open:</strong> an Indian company can list in India directly. A number of well-known startups have spent time and tax moving their holding company back to India; starting here avoids that.</li>
                <li><strong>Simpler ESOPs:</strong> options are granted by the Indian company to Indian employees under Indian rules, with no foreign security involved.</li>
                <li><strong>One cap table, in India:</strong> Indian funds, angels and DPIIT-linked benefits sit naturally at the Indian company.</li>
              </ul>
              <p>The trade-off is US venture capital. Many US funds and accelerators prefer to invest in a Delaware C-Corp at the top of the group. If that is your plan, read our <Link href="/blog/india-to-us-flip-structure-guide" style={link}>India to US flip guide</Link> and the <Link href="/blog/startup-triangle-structure-llp-us-c-corp-indian-subsidiary" style={link}>LLP, US C-Corp and Pvt Ltd triangle</Link> before you choose.</p>

              <h2>Which Structure Fits Which Founder?</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr><th style={thStyle}>Structure</th><th style={thStyle}>Top company</th><th style={thStyle}>Usually suits</th></tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>India-first holding (this guide)</td><td style={tdStyle}>Indian Pvt Ltd</td><td style={tdStyle}>Indian investors, Indian IPO plans, India-built product selling abroad</td></tr>
                    <tr><td style={tdAltStyle}>Flip</td><td style={tdAltStyle}>Delaware C-Corp</td><td style={tdAltStyle}>US VC or accelerator funding where a Delaware parent is a condition</td></tr>
                    <tr><td style={tdStyle}>LLP triangle</td><td style={tdStyle}>Delaware C-Corp, held by founders through an Indian LLP</td><td style={tdStyle}>US funding with India-resident founders who need an Indian entity to make the ODI</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>How Does the Indian Company Invest Abroad Under FEMA?</h2>
              <p>An Indian company investing in a foreign company it controls is making overseas direct investment under the Foreign Exchange Management (Overseas Investment) Rules, 2022. In practice:</p>
              <ul>
                <li><strong>Automatic route:</strong> no RBI approval is needed if the total financial commitment (equity, loans and guarantees to the subsidiary) stays within <strong>400% of the Indian company&apos;s net worth</strong> as per its last audited balance sheet, and the subsidiary is in a bona fide business. Commitments of US$1 billion or more in a financial year need RBI approval.</li>
                <li><strong>Through your bank:</strong> the remittance and the ODI reporting go through your authorised dealer bank, which reports it to RBI. Do not wire money for the US or UAE company before the bank has your ODI paperwork; that is a common and avoidable FEMA breach.</li>
                <li><strong>Annual Performance Report:</strong> the Indian company files an APR for each subsidiary through the bank, generally by <strong>December 31</strong> each year, based on the subsidiary&apos;s accounts. It also files the annual FLA return.</li>
                <li><strong>Late filings:</strong> missed ODI reports are regularised through the RBI late submission fee, and banks can hold back further remittances until the backlog is cleared.</li>
              </ul>
              <p>One limit to keep in mind: if the US or UAE subsidiary later invests back into India, the round-tripping rules apply and the structure must not exceed two layers of subsidiaries. Keep the overseas companies as operating companies, not channels for money coming back in. Our <Link href="/blog/odi-overseas-direct-investment-guide-india" style={link}>ODI guide</Link> covers the reporting in more detail.</p>

              <h2>The US C-Corp as a Subsidiary</h2>
              <p>A US subsidiary is usually set up so US customers can contract with a US company, pay into a US bank account and deal with a US team. A Delaware C-Corp is the common choice; see <Link href="/blog/us-llc-vs-c-corp-indian-founders" style={link}>US LLC vs C-Corp</Link> for when an LLC can work instead.</p>
              <ul>
                <li><strong>US tax:</strong> the C-Corp pays US federal corporate tax and any state tax where it does business.</li>
                <li><strong>Foreign-owned filings:</strong> because an Indian company owns it, the C-Corp files Form 1120 with <strong>Form 5472</strong> reporting transactions with its Indian parent. See <Link href="/blog/form-5471-5472-8858-foreign-owned-us-entity" style={link}>Forms 5471, 5472 and 8858</Link>.</li>
                <li><strong>Delaware:</strong> annual franchise tax and annual report; use the <Link href="/blog/delaware-franchise-tax-assumed-par-value-method" style={link}>Assumed Par Value method</Link> to avoid an inflated bill.</li>
                <li><strong>Dividends to India:</strong> under the India-US DTAA, US withholding on dividends is limited to <strong>15%</strong> where the Indian company holds at least 10% of the voting stock. India taxes the dividend in the parent&apos;s hands and allows credit for the US tax.</li>
              </ul>

              <h2>The UAE Company as a Subsidiary</h2>
              <p>A UAE subsidiary makes sense when you have real customers, partners or staff in the Gulf. Our <Link href="/blog/uae-entity-setup-when-it-makes-sense" style={link}>honest guide to when a UAE entity makes sense</Link> covers the business case, and the <Link href="/blog/dubai-company-registration-guide" style={link}>Dubai company registration guide</Link> covers mainland versus free zone.</p>
              <ul>
                <li><strong>UAE corporate tax:</strong> 0% on taxable income up to AED 375,000 and 9% above that.</li>
                <li><strong>Free zone 0%:</strong> a qualifying free zone person can get 0% on qualifying income, but only with adequate substance in the free zone (people and core activities there), audited accounts, transfer pricing compliance and a cap on non-qualifying revenue. See <Link href="/blog/uae-corporate-tax-indian-impact" style={link}>UAE corporate tax for Indian businesses</Link>.</li>
                <li><strong>Transfer pricing on both sides:</strong> the UAE now expects arm&apos;s length pricing too, so the India-UAE service or distribution arrangement needs one consistent policy. See <Link href="/blog/india-uae-transfer-pricing-compliance" style={link}>India-UAE transfer pricing</Link>.</li>
              </ul>
              <p>A UAE company that has no staff or decision-making in the UAE and simply books profit earned by the Indian team is the version that goes wrong: it fails UAE substance, invites an Indian transfer pricing adjustment, and can be treated as Indian-resident under POEM.</p>

              <h2>How Is Money Taxed Between India and the Subsidiaries?</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr><th style={thStyle}>Flow</th><th style={thStyle}>What to plan for</th></tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>Indian company builds the product, subsidiary sells it</td><td style={tdStyle}>Arm&apos;s length fee or margin for the Indian company (development services, licence of IP or distribution margin), with transfer pricing documentation and Form 3CEB</td></tr>
                    <tr><td style={tdAltStyle}>Subsidiary profits</td><td style={tdAltStyle}>Taxed in the US or UAE where earned; not taxed in India while retained, provided the subsidiary is managed abroad</td></tr>
                    <tr><td style={tdStyle}>Dividend to the Indian parent</td><td style={tdStyle}>Taxed in India in the parent&apos;s hands with credit for foreign tax under the DTAA; claim the credit with the prescribed form in your Indian return</td></tr>
                    <tr><td style={tdAltStyle}>Loans or guarantees from the Indian parent</td><td style={tdAltStyle}>Count towards the ODI financial commitment limit; interest and guarantee fees need arm&apos;s length pricing</td></tr>
                    <tr><td style={tdStyle}>Exit by selling the subsidiary</td><td style={tdStyle}>Capital gains in the Indian company; ODI disinvestment reporting through the bank</td></tr>
                  </tbody>
                </table>
              </div>
              <p>See <Link href="/blog/transfer-pricing-it-services-india" style={link}>transfer pricing for IT services</Link> and <Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={link}>Form 3CEB</Link> for the Indian side. The Income Tax Act, 2025 has renumbered the transfer pricing, foreign tax credit and residence sections, so confirm current references before relying on older numbering.</p>

              <h2>What Is the POEM Risk for a Foreign Subsidiary?</h2>
              <p>A foreign company is treated as resident in India if its place of effective management, where key management and commercial decisions are in substance made, is in India. With the head office in India, this is the main tax risk of the structure: if the Indian founders take every decision for the US or UAE company from Bangalore or Mumbai, India can tax its global income.</p>
              <p>CBDT has said the POEM test does not apply to a foreign company with turnover or gross receipts of Rs 50 crore or less in a financial year, and there is separate guidance for companies engaged in active business outside India. Above that size, give each subsidiary real local management: a local director or senior manager, board meetings held and minuted outside India, and local authority to sign contracts and hire. Our <Link href="/blog/poem-place-of-effective-management-india" style={link}>POEM guide</Link> explains the tests.</p>

              <h2>What Filings Does the Group Have Each Year?</h2>
              <ul>
                <li><strong>Indian Pvt Ltd:</strong> AOC-4 and MGT-7, statutory audit, ITR with Form 3CEB, the APR for each subsidiary, the FLA return, TDS, GST and payroll.</li>
                <li><strong>US C-Corp:</strong> Form 1120 with Form 5472, Delaware franchise tax and annual report, and state filings where it has nexus.</li>
                <li><strong>UAE company:</strong> corporate tax registration and return, audited financial statements where required (including for free zone 0% status), VAT if registered, transfer pricing disclosures, and the licence renewal for its zone.</li>
              </ul>
              <p>The APR depends on the subsidiaries&apos; accounts, so close the US and UAE books early enough to meet the December 31 date in India.</p>

              <h2>How Do You Set It Up, Step by Step?</h2>
              <ol>
                <li>Decide which markets need a local company, and whether a US, UAE or both subsidiaries make sense now.</li>
                <li>Check the Indian company&apos;s audited net worth against the planned investment, loans and guarantees.</li>
                <li>Pass the board resolution approving the overseas investment and fix the subsidiary&apos;s capital.</li>
                <li>Incorporate the subsidiary (see <Link href="/blog/delaware-wyoming-incorporation-ein-itin-guide" style={link}>Delaware incorporation and EIN</Link> or the <Link href="/blog/dubai-company-registration-guide" style={link}>Dubai registration guide</Link>).</li>
                <li>Submit the ODI paperwork to your bank and remit the capital through it.</li>
                <li>Sign the intercompany agreement (services, IP licence or distribution), set the transfer pricing policy, and appoint local management.</li>
                <li>Put the APR, FLA, Form 3CEB and foreign filing dates into one group compliance calendar.</li>
              </ol>

              <h2>When Is This the Wrong Structure?</h2>
              <ul>
                <li><strong>A US fund needs a Delaware parent:</strong> converting later means a flip, with its own tax cost. Decide before the term sheet.</li>
                <li><strong>The overseas company would have no real activity:</strong> a subsidiary with no staff, customers or local decisions adds cost and tax risk without benefit. Selling from India with an export invoice may be enough for now.</li>
                <li><strong>The Indian company has little net worth:</strong> the 400% limit is measured against audited net worth, so a very early company may need to raise equity before it can fund a subsidiary.</li>
              </ul>
              <p>For most India-built startups and services businesses expanding to the US or the Gulf, India-first is the cleanest starting point. See <Link href="/us-cross-border" style={link}>our US cross-border services</Link>, <Link href="/uae-tax-advisory" style={link}>UAE tax advisory</Link> and <Link href="/startups" style={link}>startup services</Link> for how we run the group&apos;s compliance across all three countries.</p>

            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Foreign Exchange Management (Overseas Investment) Rules, 2022, Regulations, 2022 and the RBI Master Direction on Overseas Investment; India-US DTAA, Article 10; CBDT Circulars 6 and 8 of 2017 on POEM; UAE Federal Decree-Law No. 47 of 2022 on corporate tax. See <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Reserve Bank of India</a> and <a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>UAE Federal Tax Authority</a>. This guide is general information, not advice on your facts.
            </p>

            <PostFooterLinks slug={SLUG} />

            <PostCTA segment="us-structure"
              heading="Expanding to the US or UAE from India?"
              description="We plan the ODI, the subsidiary set-up and transfer pricing before money moves, and run the yearly filings in India, the US and the UAE."
            />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-triangle-structure-llp-us-c-corp-indian-subsidiary" style={link}>The Startup Triangle Structure: LLP, US C-Corp and Pvt Ltd</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/india-to-us-flip-structure-guide" style={link}>India to US Flip Structure</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/odi-overseas-direct-investment-guide-india" style={link}>ODI: Overseas Direct Investment Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/uae-entity-setup-when-it-makes-sense" style={link}>UAE Entity Setup: When It Makes Sense</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/poem-place-of-effective-management-india" style={link}>POEM: Place of Effective Management</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

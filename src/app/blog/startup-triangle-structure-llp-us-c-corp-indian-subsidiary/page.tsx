import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import ServiceOffer from '../_components/ServiceOffer'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

const SLUG = 'startup-triangle-structure-llp-us-c-corp-indian-subsidiary'
const TITLE = 'LLP, US C-Corp and Pvt Ltd: The Startup Triangle Structure'
const DESC = 'Why Indian founders hold a Delaware C-Corp through an Indian LLP, with an Indian Pvt Ltd to hire the team. FEMA ODI rules, round tripping, tax and filings.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    'triangle structure startup India', 'LLP holding US C-Corp', 'Indian LLP ODI Delaware', 'US C-Corp Indian subsidiary structure',
    'founders ODI LLP', 'Delaware parent Indian subsidiary', 'round tripping ODI FDI startup', 'Indian founders US holding company structure',
  ],
  alternates: { canonical: `https://agrawalkhandelwal.com/blog/${SLUG}` },
  openGraph: { title: TITLE, description: DESC, url: `https://agrawalkhandelwal.com/blog/${SLUG}`, type: 'article', images: OG_IMAGES },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: OG_IMAGES },
}

const breadcrumbLd = buildBlogBreadcrumbLd('The Startup Triangle Structure: LLP, US C-Corp and Pvt Ltd', SLUG)

const articleLd = buildArticleLd({
  headline: 'The Startup Triangle Structure: Indian LLP, US C-Corp and Indian Pvt Ltd',
  description: DESC,
  datePublished: '2026-11-25',
  dateModified: '2026-11-25',
  slug: SLUG,
})

const faqs: [string, string][] = [
  ['What is the triangle structure for Indian startups?', 'The founders form an Indian LLP. The LLP invests in a Delaware C-Corp, which is the company US investors fund. The C-Corp then owns an Indian private limited company that employs the team in India. Money and shares move in a loop: India to the US through the LLP, and back to India as foreign investment in the Pvt Ltd.'],
  ['Why not hold the US C-Corp shares personally?', 'Under the Overseas Investment Rules, 2022, a resident individual can make overseas direct investment only in an operating foreign company that is not in financial services and that has no subsidiary or step-down subsidiary under the individual\'s control. A Delaware C-Corp that owns your Indian Pvt Ltd has exactly such a subsidiary, so founders who control it usually cannot hold it directly. An Indian entity such as an LLP is not subject to that restriction.'],
  ['Can an LLP make overseas direct investment?', 'Yes. The Overseas Investment Rules treat an LLP formed under the LLP Act, 2008 as an Indian entity. An Indian entity can commit up to 400% of its net worth, as per its last audited balance sheet, under the automatic route. For an LLP, net worth is the partners\' capital contribution plus undistributed profits.'],
  ['Is the triangle structure round tripping?', 'It is an ODI-FDI structure, which the 2022 rules allow subject to a limit: a resident cannot invest in a foreign entity that invests into India if the result is more than two layers of subsidiaries. A plain LLP, US C-Corp and Indian Pvt Ltd chain is generally read as within the limit, but adding more overseas subsidiaries can break it. Get the layer count confirmed in writing.'],
  ['How is money taxed as it moves through the triangle?', 'The Indian Pvt Ltd usually earns a service fee from the US parent, priced at arm\'s length under transfer pricing. Dividends from the US C-Corp to the LLP face US withholding tax, reduced under the India-US DTAA, and are taxed in India in the LLP\'s hands with credit for the US tax. The LLP itself is taxed as a firm. Model these flows before you raise.'],
  ['Do US investors accept an LLP on the cap table?', 'Many do, because it is a known answer to the Indian ODI rules, but some prefer founders to hold shares personally for vesting and exit reasons. Raise it with the investor and their counsel at the term sheet stage, not at closing.'],
  ['What does it cost to run the triangle every year?', 'Three sets of compliance: the LLP (Form 8, Form 11, ITR and ODI annual performance report), the US C-Corp (Form 1120, Form 5472, Delaware franchise tax and annual report) and the Indian Pvt Ltd (ROC filings, audit, ITR, transfer pricing report and FLA return). Our US C-Corp annual package starts from $1,250 a year and our incorporation plus first-year compliance package for the Pvt Ltd is Rs 99,000, plus out-of-pocket expenses and GST, if applicable.'],
]

const faqLd = buildFaqLd(faqs)

const box = { padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--bg-main)', textAlign: 'center' as const }
const arrow = { textAlign: 'center' as const, color: 'var(--accent)', fontWeight: 800, fontSize: '0.85rem', margin: '0.4rem 0' }

export default function StartupTriangleStructureBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>The Startup Triangle Structure: Indian LLP, US C-Corp and Indian Pvt Ltd</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 25, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>The triangle: founders own an <strong>Indian LLP</strong>, the LLP owns a <strong>Delaware C-Corp</strong> that US investors fund, and the C-Corp owns an <strong>Indian Pvt Ltd</strong> that employs the team.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The LLP exists because of FEMA: a resident individual cannot make overseas direct investment in a foreign company that has a subsidiary under their control. A US parent of your Indian company is exactly that.</li>
                  <li style={{ marginBottom: '0.4rem' }}>An LLP is an &quot;Indian entity&quot; under the Overseas Investment Rules, 2022 and can invest up to 400% of its net worth under the automatic route.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The chain must stay within the round-tripping limit of two layers of subsidiaries. Do not add overseas subsidiaries without checking.</li>
                  <li style={{ marginBottom: 0 }}>You run three entities in two countries: plan the transfer pricing, dividend tax, POEM risk and three sets of annual filings before the first wire.</li>
                </ul>
              </div>
              <ServiceOffer variant="us-entity" />

              <p>If you are building in Bangalore or Mumbai and a US fund or accelerator wants a Delaware C-Corp, you quickly hit a question most flip guides skip: who actually holds the US shares? The founders live in India, the team is in India, and FEMA limits how a resident individual can own a foreign company that in turn owns an Indian company. The triangle structure is the common answer. This guide explains what it is, why the LLP is there, and what it costs to run.</p>

              <h2>What Does the Triangle Look Like?</h2>
              <div style={{ maxWidth: '520px', margin: '1.5rem auto 2rem' }} role="img" aria-label="Founders own an Indian LLP, which owns a US C-Corp, which owns an Indian private limited company">
                <div style={box}><strong>Founders</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Resident in India, partners in the LLP</span></div>
                <div style={arrow}>&darr; capital contribution</div>
                <div style={{ ...box, borderLeft: '4px solid var(--primary)' }}><strong>Indian LLP</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Founders&apos; holding vehicle; makes the overseas direct investment</span></div>
                <div style={arrow}>&darr; ODI (Overseas Investment Rules, 2022)</div>
                <div style={{ ...box, borderLeft: '4px solid var(--accent)' }}><strong>US C-Corp (Delaware)</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Raises from US investors, holds IP and signs US customers</span></div>
                <div style={arrow}>&darr; FDI (Non-Debt Instruments Rules, 2019)</div>
                <div style={{ ...box, borderLeft: '4px solid var(--primary)' }}><strong>Indian Pvt Ltd</strong><br /><span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Employs the team in India and bills the US parent for services</span></div>
              </div>
              <p>The name comes from the loop: value goes out of India through the LLP and comes back into India through the Pvt Ltd. Each entity has one job, which is what makes the structure workable for investors and defensible to regulators.</p>

              <h2>Why Can&apos;t Founders Hold the US Shares Themselves?</h2>
              <p>Under the Foreign Exchange Management (Overseas Investment) Rules, 2022, a resident individual can make overseas direct investment only in an <strong>operating</strong> foreign entity that is <strong>not engaged in financial services</strong> and that has <strong>no subsidiary or step-down subsidiary where the individual has control</strong>. Founders control their startup, and the Delaware C-Corp in this structure owns the Indian Pvt Ltd. That combination generally rules out founders holding the C-Corp directly.</p>
              <p>An Indian entity is not subject to that individual-only condition. The rules define Indian entity to include a company, a body corporate, a registered partnership firm and an LLP formed under the LLP Act, 2008. That is why the founders put an LLP between themselves and the US company. Individual overseas investment also sits within the US$250,000 a year LRS limit, which is small once a company starts raising.</p>
              <p>If your US company will never own an Indian subsidiary, for example because the India team works through a contractor, the individual route may still be open. Our <Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ODI guide</Link> covers the individual and entity routes side by side.</p>

              <h2>Why an LLP and Not a Second Private Limited Company?</h2>
              <ul>
                <li><strong>Lighter compliance:</strong> an LLP has no board meetings or AGM and files Form 8 and Form 11 each year. See <Link href="/blog/llp-annual-compliance-form-8-form-11-due-dates" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP Form 8 and Form 11 due dates</Link>.</li>
                <li><strong>Tax on the way out:</strong> an LLP is taxed as a firm, and a partner&apos;s share of profit that has already been taxed in the LLP is not taxed again in the partner&apos;s hands. A company paying dividends to founders adds a second layer of tax.</li>
                <li><strong>Founder control:</strong> the LLP agreement sets each founder&apos;s share and decision rights, mirroring the founders&apos; agreed split in the US company.</li>
              </ul>
              <p>A private limited company can also hold the US shares, and some founders prefer it when they expect outside investors at the holding level. The choice is mainly about tax on distributions and how much compliance you want to carry. Our <Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs private limited comparison</Link> sets out the trade-offs.</p>

              <h2>How Much Can the LLP Invest?</h2>
              <p>Under the automatic route, an Indian entity&apos;s total financial commitment in overseas direct investment can go up to <strong>400% of its net worth</strong> as on the date of its last audited balance sheet. For an LLP, net worth is the partners&apos; capital contribution plus undistributed profits. Two practical points follow:</p>
              <ul>
                <li>Founders need to put real capital into the LLP before it invests, because the limit is measured against the LLP&apos;s own net worth.</li>
                <li>A newly formed LLP may not have an audited balance sheet yet. Ask your authorised dealer bank early how it will measure net worth for your first remittance, so the timing of your US round does not get stuck.</li>
              </ul>

              <h2>Is This Round Tripping?</h2>
              <p>Money leaving India and coming back is the textbook concern behind round-tripping rules. The 2022 rules replaced the old near-ban with a limit: a person resident in India cannot make a financial commitment in a foreign entity that has invested, or later invests, into India if the result is a structure with <strong>more than two layers of subsidiaries</strong>. The test applies at the time of investment and at any time afterwards.</p>
              <p>Practitioner commentary generally reads a plain LLP, US C-Corp and Indian Pvt Ltd chain as within the limit. The risk comes later: adding a UK or Singapore subsidiary under the US company, or a second Indian subsidiary under the first, can push you over. Keep a written layer count with your FEMA file and check it before every new entity. The general anti-avoidance rules can also apply to any structure that exists mainly for tax, so document the commercial reason: the investor&apos;s requirement for a Delaware parent.</p>

              <h2>How Does the Indian Pvt Ltd Fit In?</h2>
              <p>The Indian company receives foreign investment from the US parent under the Non-Debt Instruments Rules, 2019. Most technology and services sectors are under the automatic route, but check your sector and any land-border investor in the cap table. The Indian company then:</p>
              <ul>
                <li>Reports the share allotment to the US parent on <strong>FC-GPR within 30 days</strong> and files the annual <strong>FLA return</strong>.</li>
                <li>Employs the team and usually bills the US parent a service fee, often cost plus a markup. That is an international transaction, so <strong>transfer pricing</strong> applies and Form 3CEB is required whatever the amount. See our <Link href="/blog/indian-subsidiary-of-us-c-corp-setup-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>guide to the Indian subsidiary of a US C-Corp</Link>.</li>
                <li>Runs normal Indian compliance: ROC filings, statutory audit, ITR, TDS, GST and payroll.</li>
              </ul>
              <p>Employee stock options are usually granted by the US parent. The 2022 rules allow employees of an Indian subsidiary to acquire such options, and the benefit is taxed in India as salary on exercise. Plan the ESOP pool with the US counsel and the Indian payroll together; see <Link href="/blog/esop-structuring-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP structuring for Indian startups</Link>.</p>

              <h2>What About Tax Across the Three Entities?</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Flow</th>
                      <th style={thStyle}>What to plan for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td style={tdStyle}>US parent pays the Indian Pvt Ltd for services</td><td style={tdStyle}>Arm&apos;s length markup, transfer pricing documentation, Indian corporate tax on the margin</td></tr>
                    <tr><td style={tdAltStyle}>US C-Corp profits</td><td style={tdAltStyle}>US federal and state corporate tax; Form 1120 with Form 5472 because it is foreign-owned</td></tr>
                    <tr><td style={tdStyle}>Dividend from the US C-Corp to the LLP</td><td style={tdStyle}>US withholding tax reduced under the India-US DTAA (the rate depends on the type of shareholder, so confirm how the LLP is treated); taxed in India in the LLP with credit for US tax</td></tr>
                    <tr><td style={tdAltStyle}>LLP to founders</td><td style={tdAltStyle}>LLP taxed as a firm; profit share already taxed in the LLP is not taxed again for the partners</td></tr>
                    <tr><td style={tdStyle}>Exit (sale of the US company)</td><td style={tdStyle}>Gain arises in the LLP, which sold the shares; plan how proceeds reach the founders before you sign</td></tr>
                  </tbody>
                </table>
              </div>
              <p>One more risk: if all the real decisions of the US C-Corp are taken by founders sitting in India, the US company can be treated as resident in India under the place of effective management test. Hold US board meetings properly and keep records of where decisions are taken. Our <Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>POEM guide</Link> explains the test. The Income Tax Act, 2025 has renumbered the relevant sections, so confirm current references before relying on older numbering.</p>

              <h2>What Filings Does the Triangle Create Each Year?</h2>
              <ul>
                <li><strong>Indian LLP:</strong> Form 11 and Form 8, ITR, the ODI annual performance report through the bank, and the FLA return where it applies.</li>
                <li><strong>US C-Corp:</strong> Form 1120 with Form 5472, Delaware franchise tax and annual report (see <Link href="/blog/delaware-franchise-tax-assumed-par-value-method" style={{ color: 'var(--primary)', fontWeight: 600 }}>the Assumed Par Value method</Link>), and state filings where you have nexus.</li>
                <li><strong>Indian Pvt Ltd:</strong> AOC-4 and MGT-7, statutory audit, ITR with Form 3CEB, FC-GPR on each allotment, FLA return, TDS, GST and payroll.</li>
              </ul>
              <p>Late FEMA reports are regularised through the RBI late submission fee, which is cheaper and simpler when caught early. Keep one compliance calendar across all three entities rather than three separate ones.</p>

              <h2>How Do You Set It Up, Step by Step?</h2>
              <ol>
                <li>Agree the structure with your lead investor and get a written FEMA and tax view on your exact facts.</li>
                <li>Incorporate the Indian LLP and bring in the founders&apos; capital. See <Link href="/blog/llp-registration-process-cost-india-2026" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP registration process and cost</Link>.</li>
                <li>Incorporate the Delaware C-Corp and get its EIN (see <Link href="/blog/delaware-wyoming-incorporation-ein-itin-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Delaware incorporation, EIN and ITIN</Link>).</li>
                <li>The LLP subscribes to the C-Corp shares through its authorised dealer bank, with the ODI reporting.</li>
                <li>Incorporate the Indian Pvt Ltd with the C-Corp as shareholder, or move an existing Indian company under it through a flip (see <Link href="/blog/india-to-us-flip-structure-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>India to US flip structure</Link>).</li>
                <li>Sign the intercompany services agreement and IP assignment, set the transfer pricing policy, and file FC-GPR within 30 days of allotment.</li>
              </ol>

              <h2>When Is the Triangle the Wrong Choice?</h2>
              <ul>
                <li><strong>You are not raising from US investors:</strong> an Indian Pvt Ltd on its own, with a US subsidiary for US sales if needed, is simpler and keeps an Indian IPO open.</li>
                <li><strong>You may want to list in India:</strong> a number of well-known Indian startups have moved their holding company back to India in recent years. The 2024 fast-track merger route for a foreign holding company merging into its Indian wholly owned subsidiary has made a reverse flip more practical, but it still has a tax cost.</li>
                <li><strong>The team is tiny and early:</strong> three entities mean three sets of filings. If a US C-Corp is only a fundraising formality, compare the cost against a later flip.</li>
              </ul>
              <p>The structure is a tool, not a badge. If your investor needs a Delaware parent and your team is in India, it solves a real FEMA problem. If not, the simpler structure usually wins. See <Link href="/us-cross-border" style={{ color: 'var(--primary)', fontWeight: 600 }}>our US cross-border services</Link> and <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup services</Link> for how we run all three entities together.</p>

            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Foreign Exchange Management (Overseas Investment) Rules, 2022 and Regulations, 2022, and the RBI Master Direction on Overseas Investment; Foreign Exchange Management (Non-Debt Instruments) Rules, 2019; Companies (Compromises, Arrangements and Amalgamations) Amendment Rules, 2024. See <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Reserve Bank of India</a>. This guide is general information, not advice on your facts.
            </p>

            <PostFooterLinks slug={SLUG} />

            <PostCTA segment="us"
              heading="Setting up an LLP, US C-Corp and Indian Pvt Ltd?"
              description="We sequence the FEMA route, tax view and filings for all three entities before any money moves, and run the yearly compliance in India and the US."
            />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/india-to-us-flip-structure-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>India to US Flip Structure</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/odi-overseas-direct-investment-guide-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ODI: Overseas Direct Investment Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/indian-subsidiary-of-us-c-corp-setup-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>Indian Subsidiary of a US C-Corp</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/form-5471-5472-8858-foreign-owned-us-entity" style={{ color: 'var(--primary)', fontWeight: 600 }}>Forms 5471, 5472 and 8858</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

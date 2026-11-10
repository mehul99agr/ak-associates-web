import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { EMAIL_LINK, OG_IMAGES } from '@/lib/constants'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'UAE Corporate Tax: Impact on India' },
  description: 'UAE 9% corporate tax for Indian groups: Small Business Relief to 2029, free zone 0% rules, transfer pricing files, the 15% top-up tax and the India-UAE DTAA.',
  keywords: [
    'UAE corporate tax Indian businesses', 'India UAE DTAA', 'UAE CT 9 percent',
    'UAE corporate tax consultant India', 'transfer pricing UAE India',
    'UAE free zone tax', 'Indian subsidiary UAE', 'DTAA tax credit India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/uae-corporate-tax-indian-impact' },
  openGraph: {
    title: 'UAE Corporate Tax: Impact on India',
    description: 'How the UAE 9% Corporate Tax affects Indian companies with Gulf operations: DTAA benefits, Transfer Pricing rules, and restructuring strategies.',
    url: 'https://agrawalkhandelwal.com/blog/uae-corporate-tax-indian-impact',
    type: 'article',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('UAE Corporate Tax: Impact on India', 'uae-corporate-tax-indian-impact')

const articleLd = buildArticleLd({
  headline: 'UAE Corporate Tax: Impact on India',
  description: 'How the UAE 9% Corporate Tax affects Indian companies with Gulf operations: DTAA benefits, Transfer Pricing, and restructuring.',
  datePublished: '2026-03-08',
  dateModified: '2026-11-10',
  slug: 'uae-corporate-tax-indian-impact',
})

const faqs: [string, string][] = [
  ['What is the UAE Corporate Tax rate and when does it apply?', 'UAE corporate tax applies to financial years starting on or after June 1, 2023. Taxable income up to AED 375,000 is taxed at 0% and income above that at 9%. Large multinational groups (consolidated revenue of EUR 750 million or more) are also subject to a 15% Domestic Minimum Top-up Tax.'],
  ['Is Small Business Relief still available in 2027?', 'Yes. In August 2026 the UAE Ministry of Finance extended Small Business Relief to tax periods ending on or before December 31, 2029. A resident person with revenue of AED 3 million or less can elect it in each year\'s return and is treated as having no taxable income. It must be elected; it is not automatic.'],
  ['Can an Indian parent claim credit in India for UAE tax paid by its UAE subsidiary?', 'Not automatically. The UAE subsidiary is a separate taxpayer, and the India-UAE DTAA relief applies to tax on income that is taxed in both countries in the hands of the same person, such as a UAE branch of an Indian company. Whether any credit is available on dividends received from a UAE subsidiary should be checked against Article 25 of the treaty and current rulings before you rely on it. The UAE does not levy withholding tax on dividends paid abroad.'],
  ['Do UAE Free Zone entities still get a 0% tax rate?', 'A Qualifying Free Zone Person can pay 0% on qualifying income if it keeps adequate substance in the free zone, earns qualifying income, prepares audited financial statements, follows transfer pricing rules and stays within the de minimis limit for non-qualifying income. Failing a condition means 9% on all taxable income for that year and the next four.'],
  ['Does UAE Corporate Tax affect transactions with an Indian parent company?', 'Yes. Transactions between the UAE entity and its Indian parent must be at arm\'s length under UAE transfer pricing rules as well as Indian ones. UAE entities with revenue of AED 200 million or more, or belonging to a group with consolidated revenue of AED 3.15 billion or more, must keep a Master File and Local File and produce them within 30 days of an FTA request.'],
]

const faqLd = buildFaqLd(faqs)

export default function UAECorporateTaxBlog() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 700, display: 'inline-block', marginBottom: '2rem' }}>
          &larr; Back to Insights
        </Link>
        
        <article className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span className="section-badge" style={{ background: 'var(--primary)', color: 'var(--white)' }}>International Tax</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
              UAE Corporate Tax: Impact on Indian Businesses
            </h1>
            <p style={{ color: 'var(--text-light)', fontWeight: 600 }}>Updated November 10, 2026 • By <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)' }}>CA Mehul Agrawal</Link>, UAE Corporate Taxation certified</p>
          </div>

          <div style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
              <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.4rem' }}>UAE corporate tax is 0% on taxable income up to AED 375,000 and 9% above it, for financial years starting on or after June 1, 2023.</li>
                <li style={{ marginBottom: '0.4rem' }}>Small Business Relief (revenue up to AED 3 million) was extended in August 2026 to tax periods ending on or before December 31, 2029. It must be elected each year.</li>
                <li style={{ marginBottom: '0.4rem' }}>Free zone companies keep 0% only on qualifying income and only while they meet every condition. One failure means 9% for five years.</li>
                <li style={{ marginBottom: '0.4rem' }}>Dealings with the Indian parent must be at arm&apos;s length under both countries&apos; transfer pricing rules.</li>
                <li style={{ marginBottom: 0 }}>UAE tax paid by a UAE subsidiary is not automatically creditable in India against the parent&apos;s tax.</li>
              </ul>
            </div>

            <p style={{ marginBottom: '1.5rem' }}>
              For decades the UAE was the default low-tax base for Indian groups. Federal corporate tax changed that. A UAE subsidiary of an Indian company now registers, keeps accounts, files a return within nine months of its year end and prices its dealings with India at arm&apos;s length. This guide covers what matters for Indian parents and promoters, as of November 2026.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>1. Rates and Who Pays</h2>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>0%</strong> on taxable income up to AED 375,000 and <strong>9%</strong> above it.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>15% Domestic Minimum Top-up Tax</strong> for UAE entities of multinational groups with consolidated revenue of EUR 750 million or more, for financial years starting on or after January 1, 2025.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>No withholding tax</strong> on dividends, interest or royalties paid from the UAE.</li>
              <li style={{ marginBottom: '0.5rem' }}>Accounts follow IFRS (IFRS for SMEs is allowed for smaller businesses).</li>
            </ul>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>2. Small Business Relief, Now to 2029</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              A UAE resident person with revenue of AED 3 million or less in a tax period can elect Small Business Relief and is treated as having no taxable income for that period. The relief originally ended with tax periods ending on December 31, 2026. In August 2026 the Ministry of Finance extended it to tax periods ending on or before <strong>December 31, 2029</strong>. The election is made in each year&apos;s return. Qualifying free zone persons and members of large multinational groups cannot use it, and splitting a business to stay under the limit is treated as abuse.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>3. Free Zone Companies</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              A Qualifying Free Zone Person pays 0% on qualifying income and 9% on the rest. To qualify it must keep adequate substance in the free zone, earn qualifying income, prepare audited financial statements, follow transfer pricing rules, and keep non-qualifying revenue within the de minimis limit. Failing any condition means 9% on all taxable income for that tax period and the following four. Indian groups using a free zone entity to sell into mainland UAE or to India should review each revenue stream against these rules every year.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>4. Transfer Pricing With the Indian Parent</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Management fees, royalties, cost recharges, loans and trade between the UAE entity and its Indian parent must be at arm&apos;s length under the UAE rules as well as India&apos;s. A UAE entity with revenue of AED 200 million or more, or belonging to a group with consolidated revenue of AED 3.15 billion or more, must keep a Master File and Local File and produce them within 30 days of a request from the Federal Tax Authority. Related-party transactions are also disclosed in a schedule filed with the return. On the Indian side, the same transactions go into Form 3CEB. See our <Link href="/blog/india-uae-transfer-pricing-compliance" style={{ color: 'var(--primary)' }}>India-UAE transfer pricing guide</Link>.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>5. What the India-UAE DTAA Does and Does Not Do</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The treaty decides which country may tax each kind of income and gives relief when the same income of the same person is taxed in both. That helps an Indian company with a UAE branch, or an Indian resident with UAE-source income. It does not automatically let an Indian parent credit the corporate tax its UAE subsidiary paid against the parent&apos;s Indian tax on dividends, because the subsidiary is a separate taxpayer. Check Article 25 of the treaty and current rulings before relying on any credit of that kind.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              The treaty also matters for residence. If the UAE company is in substance managed from India, it can be treated as resident in India under the place of effective management test and taxed in India on its global income. A UAE Tax Residency Certificate does not prevent this. Our <Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)' }}>POEM guide</Link> explains the test.
            </p>

            <p style={{ marginBottom: '1.5rem' }} >
              Official sources: <a href="https://tax.gov.ae/en/taxes/corporate.tax.aspx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>UAE Federal Tax Authority, Corporate Tax</a> and <a href="https://mof.gov.ae/corporate-tax/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>UAE Ministry of Finance, Corporate Tax</a>.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>How We Can Help</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              The introduction of UAE CT necessitates a "Health Check" of your international corporate structure. Our firm specializes in <Link href="/uae-tax-advisory" style={{ color: 'var(--accent)', fontWeight: 600 }}>UAE tax advisory</Link> and <Link href="/transfer-pricing" style={{ color: 'var(--accent)', fontWeight: 600 }}>transfer pricing compliance</Link>, helping you navigate the intersection of Indian Tax laws and the new UAE regulations to ensure your global footprint remains tax-optimized and compliant.
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Frequently Asked Questions</h2>
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
              <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/uae-entity-setup-when-it-makes-sense" style={{ color: 'var(--primary)', fontWeight: 600 }}>UAE Entity Setup: When It Makes Sense</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dubai-company-registration-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Dubai Company Registration Guide (2026)</Link></li>
              <li style={{ marginBottom: 0 }}><Link href="/blog/india-uae-transfer-pricing-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>India-UAE Transfer Pricing Compliance</Link></li>
            </ul>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.75rem', color: 'var(--text-main)' }}>Discuss your UAE operations with our experts</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', maxWidth: '500px', margin: '0.75rem auto 2rem' }}>
              CA Mehul Agrawal is UAE Corporate Tax certified. We advise Indian businesses on CT compliance, DTAA structuring, and transfer pricing for India-UAE transactions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/consult" className="btn btn-primary">
                Schedule an International Tax Call
              </a>
              <Link href="/uae-tax-advisory" className="btn btn-outline">UAE Tax Advisory</Link>
              <Link href="/transfer-pricing" className="btn btn-outline">Transfer Pricing</Link>
            </div>
          </div>
                  <PostFooterLinks slug="uae-corporate-tax-indian-impact" />

                  <PostCTA
            heading="Have UAE business interests?"
            description="We advise on UAE corporate tax and its impact on your Indian tax obligations."
            secondaryLabel="Email us"
            secondaryHref={EMAIL_LINK}
            />
        </article>
      </div>
    </div>
    </>
  )
}

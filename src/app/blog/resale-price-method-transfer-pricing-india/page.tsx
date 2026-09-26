import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Resale Price Method (RPM) in Transfer Pricing: India Guide',
  description: 'How the Resale Price Method works under Rule 10B, when it fits a routine distributor, the gross margin calculation, common accounting-classification pitfalls, and a worked example.',
  keywords: [
    'resale price method India', 'RPM transfer pricing', 'resale price method transfer pricing',
    'RPM method example', 'gross margin transfer pricing distributor',
    'transfer pricing distributor India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/resale-price-method-transfer-pricing-india' },
  openGraph: {
    title: 'Resale Price Method (RPM) in Transfer Pricing: India Guide',
    description: 'When RPM fits a routine distributor, the gross margin calculation, and common pitfalls.',
    url: 'https://agrawalkhandelwal.com/blog/resale-price-method-transfer-pricing-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resale Price Method (RPM) Explained (India)',
    description: 'Gross margin calculation, when RPM applies, and a worked distributor example.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Resale Price Method (RPM) in Transfer Pricing: India Guide', 'resale-price-method-transfer-pricing-india')

const articleLd = buildArticleLd({
  headline: 'Resale Price Method (RPM) in Transfer Pricing: India Guide',
  description: 'How the Resale Price Method works under Rule 10B, when it fits a routine distributor, the gross margin calculation, common accounting-classification pitfalls, and a worked example.',
  datePublished: '2026-09-15',
  slug: 'resale-price-method-transfer-pricing-india',
})

const faqs: [string, string][] = [
  ['What is the Resale Price Method in transfer pricing?', 'RPM starts from the price at which a product purchased from an associated enterprise is resold to an independent customer, then subtracts an arm\'s length gross margin to arrive at the price that should have been charged in the original related-party purchase.'],
  ['When is RPM the most appropriate method?', 'RPM fits a distributor that buys finished goods from a related party and resells them without material processing, without owning significant marketing intangibles, and without material value addition such as product development or substantial local branding investment. The more a distributor adds functionally, the less reliable RPM becomes.'],
  ['Why is RPM less commonly used than TNMM in India?', 'Reliable gross-margin comparable data is harder to source than net-margin data because companies classify freight, warranty costs, sales-support expenses, and discounts differently in their financials. This accounting-classification inconsistency undermines RPM comparability far more than it affects a net-margin method like TNMM.'],
  ['What adjustments are typically needed in an RPM analysis?', 'Adjustments for differences in functions performed (marketing intensity, inventory risk, credit terms), contractual terms, and accounting treatment of costs that sit between gross and operating margin, most often freight-in, freight-out, discounts, rebates, and warranty provisions, so that the tested party and comparables are measured on a like-for-like basis.'],
  ['Can RPM and TNMM give different results for the same distributor?', 'Yes, because they compare different profit levels, gross margin for RPM and net margin for TNMM. A distributor can look arm\'s length under one method and outside the range under the other if there are unadjusted differences in operating expense structure between the tested party and its comparables. The most appropriate method should be chosen based on data reliability, not on which produces the more convenient outcome.'],
]

const faqLd = buildFaqLd(faqs)
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.9rem' }
const thStyle: React.CSSProperties = { background: 'var(--primary)', color: 'var(--white)', padding: '0.6rem 0.75rem', textAlign: 'left', fontWeight: 700 }
const tdStyle: React.CSSProperties = { padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
const tdAltStyle: React.CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

export default function RPMBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Transfer Pricing</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Resale Price Method (RPM) in Transfer Pricing: India Guide</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 15, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>RPM works backward from the <strong>resale price to an independent customer</strong>, reducing an arm&apos;s length gross margin to find the price that should have been paid to the related-party supplier.</li>
                  <li style={{ marginBottom: '0.4rem' }}>It suits a <strong>routine distributor</strong> that resells without material processing or significant marketing intangibles; it becomes unreliable once the distributor adds real functional value.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Gross-margin comparability is harder to establish than net-margin comparability because companies classify freight, warranty, and sales-support costs inconsistently.</li>
                  <li style={{ marginBottom: 0 }}>This accounting-classification problem is the main reason TNMM is used far more often than RPM in Indian practice, even for straightforward distributors.</li>
                </ul>
              </div>

              <p>The Resale Price Method is conceptually the most intuitive of the five Rule 10B methods for a distribution business: start with what the market will pay, subtract what a comparable independent distributor keeps as its margin, and what&apos;s left is the arm&apos;s length price for the original related-party purchase. In practice, it&apos;s used far less often in India than TNMM, largely because of comparability problems that have nothing to do with the underlying logic.</p>

              <h2>How RPM Works</h2>
              <p>RPM begins with the price at which the tested party resells a product, purchased from an associated enterprise, to an independent customer. An arm&apos;s length gross margin, derived from comparable independent resellers, is then subtracted from that resale price. The result is the arm&apos;s length purchase price the tested party should have paid its related-party supplier. The formula, in its simplest form: <strong>Arm&apos;s length purchase price = Resale price &times; (1 &minus; comparable gross margin %)</strong>.</p>

              <h2>When RPM Is the Most Appropriate Method</h2>
              <p>RPM is generally suitable where the Indian entity:</p>
              <ul>
                <li>Purchases finished goods from an associated enterprise and resells them largely unchanged</li>
                <li>Does not undertake material processing, assembly, or repackaging that adds significant value</li>
                <li>Does not own or develop significant marketing intangibles (brand equity, proprietary customer relationships)</li>
                <li>Bears limited inventory and market risk relative to a full-fledged distributor</li>
              </ul>
              <p>A pure sales-and-distribution arm of a foreign principal, importing finished products and reselling them to Indian retailers or end customers, is the textbook RPM candidate. The moment the distributor starts doing its own local marketing campaigns, extended warranty servicing, or product customisation, its functional profile diverges from a routine reseller and RPM becomes harder to defend.</p>

              <h2>Why Gross-Margin Comparability Is the Real Obstacle</h2>
              <p>RPM&apos;s theoretical simplicity runs into a practical wall: companies in public databases classify costs inconsistently between cost of goods sold and operating expenses. Freight-in, freight-out, warranty provisions, discounts, and rebates may sit above the gross-margin line for one company and below it for another. Two distributors with genuinely comparable economics can show materially different reported gross margins purely because of how their accountants classified the same categories of cost. This is precisely why TNMM, which compares net margins after all operating expenses are netted out, is used so much more often in Indian practice even where the underlying business (a routine distributor) would suit RPM on paper; net-margin data is simply more reliable to compare across companies.</p>

              <h2>Adjustments an RPM Study Typically Needs</h2>
              <p>A defensible RPM analysis normally adjusts for functional differences (inventory carrying risk, credit terms extended to customers, marketing intensity), contractual differences (exclusivity, minimum purchase commitments, return rights), and, most importantly, accounting-classification differences so that the tested party&apos;s gross margin and the comparables&apos; gross margins are measured on a consistent basis before they are compared.</p>

              <h2>Worked Example: A Routine Import Distributor</h2>
              <p>An Indian company imports finished consumer products from its foreign parent and resells them to independent retailers in India, without material local processing.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Particulars</th><th style={thStyle}>Amount</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Resale price to independent retailers</td><td style={tdStyle}>Rs 100 (per unit basis)</td></tr>
                    <tr><td style={tdAltStyle}>Comparable independent distributors&apos; gross margin</td><td style={tdAltStyle}>18% of resale price</td></tr>
                    <tr><td style={tdStyle}><strong>Implied arm&apos;s length purchase price</strong></td><td style={tdStyle}><strong>Rs 100 &times; (1 &minus; 0.18) = Rs 82</strong></td></tr>
                    <tr><td style={tdAltStyle}>Actual price paid to foreign parent</td><td style={tdAltStyle}>Rs 85</td></tr>
                  </tbody>
                </table>
              </div>
              <p>At Rs 85, the Indian distributor paid more than the Rs 82 arm&apos;s length benchmark implies, effectively earning a thinner gross margin (15%) than comparable independents (18%). Before concluding this is a transfer pricing issue, the analysis needs to check whether the comparables&apos; 18% margin is measured on a consistent cost-classification basis with the tested party&apos;s 15%; a large part of an apparent 3-point gap often disappears once freight and warranty costs are reclassified consistently.</p>

              <h2>RPM vs TNMM: Choosing Between Them for a Distributor</h2>
              <p>Both methods can apply to the same distribution business, but they test different profit levels and can produce different conclusions where operating expense structures differ between the tested party and its comparables. See the full <Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>comparison of all 5 transfer pricing methods</Link> for how RPM sits alongside CUP, CPM, PSM, and TNMM, and when each is the most appropriate method rather than simply the most convenient one.</p>
            </div>

            <PostCTA
            heading="Benchmarking a distribution or import business?"
            description="We prepare RPM and TNMM benchmarking studies, functional analyses, and Form 3CEB documentation for Indian distributors with related-party purchases."
            secondaryLabel="Transfer Pricing Services"
            secondaryHref="/transfer-pricing"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-methods-india-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>All 5 Transfer Pricing Methods Explained</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tnmm-transactional-net-margin-method-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TNMM Explained in Depth</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/transfer-pricing-audit-assessment-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TP Audit: Handling a Transfer Pricing Assessment</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-3ceb-transfer-pricing-audit-report" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 3CEB: Due Date, Process &amp; Penalties</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

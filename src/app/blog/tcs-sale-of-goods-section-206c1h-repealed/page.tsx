import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'TCS on Sale of Goods: What Happened to Section 206C(1H)',
  description: 'Section 206C(1H), the seller-side TCS on sale of goods above Rs 50 lakh, was omitted from April 1, 2025. Here is what it used to require, why it was removed, and why Section 194Q is now the operative provision.',
  keywords: [
    'section 206C(1H) repealed', 'TCS on sale of goods removed', 'section 206C(1H) omitted',
    'section 194Q vs 206C(1H)', 'TCS on sale of goods above 50 lakh', 'TDS on purchase of goods',
    'section 194Q applicability', 'seller TCS removed April 2025',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tcs-sale-of-goods-section-206c1h-repealed' },
  openGraph: {
    title: 'TCS on Sale of Goods: What Happened to Section 206C(1H)',
    description: 'Section 206C(1H) was omitted from April 1, 2025. What it used to require, why it was removed, and why Section 194Q now governs these transactions.',
    url: 'https://agrawalkhandelwal.com/blog/tcs-sale-of-goods-section-206c1h-repealed',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TCS on Sale of Goods: What Happened to Section 206C(1H)',
    description: 'Section 206C(1H) was repealed from April 1, 2025. Section 194Q now governs TDS/TCS on high-value goods sales.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TCS on Sale of Goods: What Happened to Section 206C(1H)', 'tcs-sale-of-goods-section-206c1h-repealed')

const articleLd = buildArticleLd({
  headline: 'TCS on Sale of Goods: What Happened to Section 206C(1H)',
  description: 'Section 206C(1H), the seller-side TCS on sale of goods above Rs 50 lakh, was omitted with effect from April 1, 2025. What it used to require, why it was removed, and why Section 194Q is now the operative provision for these transactions.',
  datePublished: '2026-10-03',
  slug: 'tcs-sale-of-goods-section-206c1h-repealed',
})

const faqs: [string, string][] = [
  ['Is Section 206C(1H) still applicable?', 'No. Section 206C(1H), which required a seller to collect TCS on receipts above Rs 50 lakh from a buyer in a financial year, was omitted from the statute with effect from April 1, 2025. Sellers do not need to collect TCS under this provision for transactions on or after that date.'],
  ['Why was TCS on sale of goods removed?', 'Section 206C(1H) and Section 194Q applied to substantially the same class of high-value goods transactions, one from the seller\'s side and one from the buyer\'s side. This overlap created genuine compliance friction: sellers had to track whether the buyer had already deducted TDS under Section 194Q to avoid double compliance, reconciliation between the two provisions was messy, and credit mismatches were common. The provision was withdrawn to remove this duplication.'],
  ['What replaced Section 206C(1H)?', 'Nothing new was introduced; the buyer-side obligation under Section 194Q, which already existed and applied to the same broad transaction class, continues unchanged and is now the sole operative provision. A buyer purchasing goods with turnover and value that cross the prescribed thresholds must deduct TDS under Section 194Q; the seller no longer has a parallel TCS obligation to track.'],
  ['Does this change affect transactions before April 1, 2025?', 'No. Section 206C(1H) remained in force for receipts up to March 31, 2025, so TCS collected on eligible transactions before that date remains valid and should still be reflected in the relevant TCS return and Form 27EQ for that period. The repeal only affects transactions from FY 2025-26 onward.'],
  ['If I am a seller, do I have any compliance left under this head?', 'For transactions from April 1, 2025 onward, no. Your buyer\'s TDS obligation under Section 194Q is now independent of anything you do; you do not need to collect TCS, issue a TCS certificate, or file a TCS return for these sales. If you also sell scrap, minerals, or other goods that fall under a different, unrelated sub-section of Section 206C, those obligations are unaffected and continue separately.'],
  ['Do I need to update my accounting or ERP system for this change?', 'Yes, if your systems were configured to auto-apply TCS under Section 206C(1H) on invoices above the threshold, that logic should be switched off for the current financial year to avoid incorrectly collecting TCS that no longer applies. Cross-check with your CA that no legacy 206C(1H) TCS is still being charged on customer invoices.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Tcs206c1hRepealedBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                TCS on Sale of Goods: What Happened to Section 206C(1H)
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 3, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 206C(1H) no longer applies.</strong> It was omitted with effect from April 1, 2025; sellers do not collect TCS on high-value goods sales under this provision anymore.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It was withdrawn because it duplicated <strong>Section 194Q</strong>, the buyer-side TDS provision covering the same transaction class, causing reconciliation headaches for both sides.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 194Q is now the sole operative provision.</strong> Sellers have no parallel TCS obligation to track for these transactions from FY 2025-26 onward.</li>
                    <li style={{ marginBottom: 0 }}>TCS collected before April 1, 2025 under the old provision remains valid; only transactions on or after that date are affected by the repeal.</li>
                  </ul>
                </div>

                <p>If you are a business that sells goods and remembers configuring your billing system to collect TCS above a Rs 50 lakh threshold, you may be wondering whether that obligation still exists. It does not. Section 206C(1H) of the Income-tax Act, the provision that required a seller to collect tax at source on high-value sale-of-goods receipts, was omitted from the statute effective April 1, 2025. This post explains what the provision used to require, why the government removed it, and what governs these transactions now.</p>

                <h2>What Section 206C(1H) Used to Require</h2>
                <p>Before its repeal, Section 206C(1H) applied to a seller whose total sales, gross receipts, or turnover from the business exceeded Rs 10 crore in the preceding financial year. Such a seller was required to collect TCS, at a small fraction of a percent, on the amount received from a buyer above Rs 50 lakh in aggregate during the financial year, for sale of goods (with specified exclusions such as export sales and goods already covered under other TCS/TDS provisions). The seller then had to deposit the TCS, issue a TCS certificate, and report it in the quarterly TCS return, Form 27EQ.</p>
                <p>The provision was introduced to widen the tax net by creating an information trail on large goods transactions. In practice, it sat alongside another provision aimed at the exact same class of transactions from the opposite direction.</p>

                <h2>The Overlap With Section 194Q</h2>
                <p>Section 194Q required a <strong>buyer</strong> whose turnover exceeded Rs 10 crore in the preceding year to deduct TDS on the purchase of goods from a resident seller, once purchases from that seller crossed Rs 50 lakh in the financial year. Both provisions were aimed at the same broad transaction class: high-value goods sales between businesses above the Rs 10 crore turnover threshold.</p>
                <p>Where both a buyer and a seller crossed their respective thresholds on the same transaction, the law provided that Section 194Q would take priority and Section 206C(1H) would not apply, so double taxation at source was avoided by design. But applying that priority rule correctly in practice was its own compliance burden: sellers had to actively confirm whether the buyer was in fact liable to deduct TDS under Section 194Q before deciding whether to collect TCS themselves, and mismatches between what a seller expected and what a buyer actually deducted were a recurring source of notices, Form 26AS/AIS reconciliation issues, and disputes between counterparties over who was responsible for the compliance.</p>

                <h2>Why the Government Removed Section 206C(1H)</h2>
                <p>As part of a broader rationalisation of TDS and TCS provisions, Section 206C(1H) was omitted with effect from April 1, 2025. The stated rationale was straightforward: since Section 194Q already captured the same transactions from the buyer's side, retaining a parallel seller-side TCS provision added compliance cost without adding meaningful additional information for the tax department. Removing the seller-side leg simplifies the position for both parties to a transaction, eliminates the priority-rule reconciliation that businesses previously had to perform on every large sale, and reduces the volume of TCS returns sellers needed to file purely for this class of transaction.</p>
                <p>This fits a pattern visible elsewhere in recent Budgets: where two provisions target the same underlying transaction from different sides, the government has generally preferred to retain the buyer-side TDS obligation (which ties the deduction to the person actually making the payment) and drop the seller-side TCS mirror.</p>

                <h2>What Applies Now: Section 194Q Governs These Transactions</h2>
                <p>For any sale of goods on or after April 1, 2025 that would previously have triggered Section 206C(1H), the compliance obligation now sits entirely with the buyer under <strong>Section 194Q</strong>. If your business purchases goods and your turnover and purchase value from a single seller cross the prescribed thresholds, you as the buyer must deduct TDS at the time of payment or credit, whichever is earlier, and report it through the standard TDS mechanism. If you are the seller, you no longer have any collection, certificate, or return obligation under this head for these sales.</p>
                <p>For the current mechanics of Section 194Q, including the threshold, rate, timing of deduction, and how it interacts with GST on the invoice, see our detailed guide: <Link href="/blog/section-194q-tds-purchase-of-goods" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194Q: TDS on Purchase of Goods</Link>. That is now the single provision to consult for high-value goods transactions between businesses; there is no separate seller-side rule to cross-check against.</p>

                <h2>Practical Clean-Up for Businesses</h2>
                <p>If your accounting or billing system still has logic configured to auto-apply TCS under Section 206C(1H) on invoices crossing Rs 50 lakh, that configuration should be switched off for the current and future financial years; continuing to charge it on customer invoices creates an unnecessary reconciliation problem for both sides even though it is not fraudulent. If you are a seller who collected TCS under this provision for FY 2024-25 or earlier, that TCS remains valid and should be reflected correctly in the buyer's Form 26AS/AIS and your own TCS return for that period; the repeal has no retrospective effect. Going forward, sellers should simply confirm, as a matter of good practice, that their buyers are in fact deducting TDS correctly under Section 194Q, since that is now the only compliance check left in this transaction chain, even though the seller carries no direct obligation.</p>
                <p>Other TCS provisions under Section 206C, such as those on scrap, minerals, motor vehicles above a specified value, foreign remittances under the Liberalised Remittance Scheme, and overseas tour packages, are separate sub-sections and are entirely unaffected by this repeal. Only the specific sale-of-goods TCS under sub-section (1H) has been removed.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Because Section 206C(1H) has been omitted rather than renumbered, it has no corresponding provision under the Income Tax Act 2025; there is nothing to map it to. Section 194Q itself has also been renumbered under the new Act's TDS chapter alongside the other 194-series provisions; the exact new-Act section reference was not confidently confirmed at the time of writing, so confirm the current citation with your CA before quoting it in a formal document.</p>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure whether your TDS/TCS setup is current?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses review their TDS and TCS compliance across purchase and sale transactions, correct legacy configurations, and stay ahead of provisions that change or get withdrawn between Budgets.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">Our Tax Advisory Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-194q-tds-purchase-of-goods" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 194Q: TDS on Purchase of Goods</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>Deciphering the New Income Tax Act &amp; Rules 2025</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

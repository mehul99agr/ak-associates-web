import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh' },
  description: 'Section 194Q TDS at 0.1% on goods purchases above Rs 50 lakh from a resident seller, the Rs 10 crore buyer turnover condition, and why Section 206C(1H) TCS no longer overlaps.',
  keywords: [
    'Section 194Q TDS', 'TDS on purchase of goods', 'Section 194Q threshold', 'Section 194Q rate',
    'Section 194Q vs 206C(1H)', 'TDS purchase goods Rs 50 lakh', 'buyer TDS goods India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-194q-tds-purchase-of-goods' },
  openGraph: {
    title: 'Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh',
    description: 'Rate, threshold, buyer turnover condition, and the resolved precedence between Section 194Q and Section 206C(1H) TCS on goods purchases.',
    url: 'https://agrawalkhandelwal.com/blog/section-194q-tds-purchase-of-goods',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh',
    description: 'Rate, threshold, buyer turnover condition, and the resolved precedence between Section 194Q and Section 206C(1H) TCS on goods purchases.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh', 'section-194q-tds-purchase-of-goods')

const articleLd = buildArticleLd({
  headline: 'Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh',
  description: 'Section 194Q TDS rate and threshold, the Rs 10 crore buyer turnover condition, seller-wise threshold testing, and how the overlap with Section 206C(1H) TCS was resolved.',
  datePublished: '2026-10-02',
  slug: 'section-194q-tds-purchase-of-goods',
})

const faqs: [string, string][] = [
  [
    'What is the TDS rate under Section 194Q?',
    'TDS is deducted at 0.1% on the value of goods purchased from a resident seller that exceeds Rs 50 lakh in a financial year, from that seller. If the seller does not furnish PAN, the rate rises to 5% under Section 206AA.',
  ],
  [
    'Who is required to deduct TDS under Section 194Q?',
    'A buyer whose total sales, turnover, or gross receipts exceeded Rs 10 crore in the immediately preceding financial year must deduct TDS on purchases of goods from a resident seller once the aggregate value from that seller crosses Rs 50 lakh in the current year.',
  ],
  [
    'Does Section 194Q still overlap with Section 206C(1H) TCS on sale of goods?',
    'No. Section 206C(1H), which required certain sellers to collect TCS on sale of goods, was omitted with effect from April 1, 2025. Since then, only Section 194Q governs the buyer-side deduction on qualifying goods purchases, removing the earlier overlap where both provisions could technically apply to the same transaction.',
  ],
  [
    'Is TDS under Section 194Q deducted on the full purchase value or only the amount above Rs 50 lakh?',
    'Only on the amount exceeding Rs 50 lakh from that seller in the financial year. This is different from Section 194J, where crossing the threshold pulls the entire year\'s payments into TDS; Section 194Q taxes only the excess.',
  ],
  [
    'What section does Section 194Q fall under in the Income Tax Act 2025?',
    'Purchase-of-goods TDS has been consolidated with other TDS provisions under Section 393 of the Income Tax Act 2025. The specific table item or sub-clause number for this particular provision was not confirmed consistently across available sources as of this writing, so we cite the substance and the broader Section 393 grouping rather than a precise sub-item number.',
  ],
  [
    'What happens if a buyer fails to deduct TDS under Section 194Q?',
    'The buyer becomes an assessee in default for the shortfall, is liable for interest on the delayed deduction, and risks disallowance of the corresponding purchase expense along with a penalty under Section 271C for non-compliance.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function Section194QBlog() {
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
                Section 194Q: TDS on Purchase of Goods Above Rs 50 Lakh
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 2, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Buyers with turnover above <strong>Rs 10 crore</strong> in the prior year must deduct <strong>0.1% TDS</strong> on goods purchases from a resident seller once they cross <strong>Rs 50 lakh</strong> from that seller in the year.</li>
                    <li style={{ marginBottom: '0.4rem' }}>TDS applies only to the amount <strong>above Rs 50 lakh</strong>, not the full purchase value.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The old overlap with <strong>Section 206C(1H) TCS is gone</strong>; that provision was omitted from April 1, 2025, so only Section 194Q applies now.</li>
                    <li style={{ marginBottom: 0 }}>Consolidated in substance under <strong>Section 393 of the Income Tax Act 2025</strong>; the exact sub-item number is not confirmed and is not needed to comply correctly.</li>
                  </ul>
                </div>
                <p>Section 194Q places a TDS obligation on the buyer's side of a goods purchase, once the buyer's own turnover and the purchase value from a given seller cross specified thresholds. It was introduced to bring large buyers into the TDS net for goods transactions, mirroring the TCS obligation that used to sit on the seller's side under Section 206C(1H). That mirrored provision has since been withdrawn, which simplifies compliance considerably, as explained below.</p>

                <h2>Who Must Deduct TDS Under Section 194Q</h2>
                <p><strong>A buyer must deduct TDS under Section 194Q if their total sales, turnover, or gross receipts exceeded Rs 10 crore in the immediately preceding financial year, and their aggregate purchase of goods from a particular resident seller exceeds Rs 50 lakh in the current financial year.</strong> Both conditions must be met: the turnover test looks at the buyer's own prior-year scale, and the Rs 50 lakh threshold is tested seller-by-seller, not across all purchases combined.</p>
                <p>A buyer with Rs 12 crore turnover last year, purchasing Rs 80 lakh of goods from Seller A and Rs 30 lakh from Seller B in the current year, deducts TDS only on the Rs 30 lakh excess from Seller A (Rs 80 lakh minus the Rs 50 lakh threshold); Seller B stays below the threshold and attracts no TDS.</p>

                <h2>TDS Rate and How It Is Calculated</h2>
                <p>The rate is <strong>0.1%</strong>, applied only to the portion of the purchase value from a seller that exceeds Rs 50 lakh in the financial year, not the entire purchase amount. If the seller has not furnished PAN, the rate increases to <strong>5%</strong> under Section 206AA. TDS is deducted at the time of credit to the seller's account or payment, whichever is earlier, including on advance payments.</p>
                <p>This "only on the excess" mechanic is a useful contrast with Section 194J, where crossing the Rs 50,000 threshold pulls the entire year's payments into TDS. Section 194Q, like Section 194C's Rs 1 lakh aggregate rule, applies TDS prospectively from the point the threshold is crossed rather than retroactively to the first rupee.</p>

                <h2>Section 194Q vs Section 206C(1H): The Overlap Has Been Resolved</h2>
                <p>Before April 1, 2025, Section 194Q (buyer-side TDS on goods purchases) and Section 206C(1H) (seller-side TCS on sale of goods) could technically both apply to the same transaction, since the two provisions targeted mirror-image sides of large goods transactions above similar thresholds. The law's own precedence rule addressed this by giving Section 194Q priority: where the buyer was liable to deduct TDS under Section 194Q, the seller was not required to also collect TCS under Section 206C(1H) on that same transaction.</p>
                <p><strong>Section 206C(1H) has since been omitted from the statute with effect from April 1, 2025.</strong> This means the precedence question is now moot for any transaction going forward: Section 194Q alone governs buyer-side compliance on qualifying goods purchases, and there is no parallel seller-side TCS obligation to reconcile against it. Businesses that built dual-tracking processes to manage the old overlap (checking whether the seller had already collected TCS before deciding whether to still deduct TDS) can retire that reconciliation step for current-year transactions.</p>
                <p>Note that this is a different mechanism entirely from GST's e-commerce TCS under Section 52 of the CGST Act, covered in our <Link href="/blog/gst-for-ecommerce-sellers-tcs-section-52" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST for e-commerce sellers guide</Link>; that is a GST-law TCS on marketplace transactions, unrelated to the income-tax TCS under Section 206C(1H) discussed here, despite the similar-sounding name.</p>

                <h2>Section 393 of the Income Tax Act 2025: An Unconfirmed Sub-Item</h2>
                <p>Under the Income Tax Act 2025, TDS on purchase of goods has been consolidated in substance with other TDS provisions under Section 393, the same large consolidated section that also covers what used to be Sections 194J and 194C. Unlike those two, however, we have not been able to confirm a specific table item or sub-clause number for the goods-purchase provision consistently across available sources at the time of writing. Rather than cite a number that might be wrong, we recommend treating this as "consolidated under Section 393" for now and confirming the precise sub-item with your tax advisor at the time of filing, once official notifications settle the point beyond doubt. The rate, threshold, and buyer-turnover condition described in this guide are unaffected by this numbering detail.</p>

                <h2>Compliance Steps for Buyers</h2>
                <ul>
                  <li><strong>Check your own turnover</strong> for the immediately preceding financial year against the Rs 10 crore threshold at the start of each year.</li>
                  <li><strong>Track cumulative purchases seller-by-seller</strong>, not in aggregate, since the Rs 50 lakh threshold applies per seller.</li>
                  <li><strong>Deduct TDS at 0.1%</strong> on the excess over Rs 50 lakh from each qualifying seller, deposit it by the 7th of the following month, and file the quarterly TDS return.</li>
                  <li><strong>Verify seller PAN</strong> before the first qualifying payment to avoid the 5% no-PAN rate applying retroactively across the transaction.</li>
                </ul>
                <p>Failure to deduct exposes the buyer to being treated as an assessee in default, interest on the shortfall, disallowance of the purchase expense, and penalty exposure under Section 271C. If your business crosses the Rs 10 crore turnover mark for the first time, build a seller-wise purchase tracker into your accounting system before the Rs 50 lakh threshold is reached mid-year, rather than reconciling it retrospectively at year-end.</p>

                <p>Need help setting up Section 194Q tracking across your vendor base, or reviewing whether past purchases were correctly captured? Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax compliance services</Link> cover TDS system setup and periodic health checks.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Crossing the Rs 10 crore turnover mark, or buying goods at scale?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help buyers set up seller-wise TDS tracking under Section 194Q and stay compliant on quarterly filings.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20Section%20194Q%20TDS%20on%20purchase%20of%20goods." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-contractor-payments-section-194c-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Contractor Payments: Section 194C Compliance Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-professional-technical-fees-section-194j" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on Professional & Technical Fees: Section 194J Explained</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-for-ecommerce-sellers-tcs-section-52" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST for E-commerce Sellers: TCS Under Section 52</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Input Tax Credit (ITC) Under GST: Eligibility, Reversal & Blocked Credits',
  description: 'How Input Tax Credit works under GST: conditions to claim it, the Section 16(4) time limit, the 180-day payment reversal rule, and the full list of blocked credits under Section 17(5).',
  keywords: [
    'input tax credit GST', 'ITC eligibility GST', 'blocked credit section 17(5)', 'ITC reversal 180 days',
    'section 16(4) time limit ITC', 'ineligible ITC GST', 'ITC on motor vehicles GST', 'ITC claim conditions',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/input-tax-credit-itc-gst-guide' },
  openGraph: {
    title: 'Input Tax Credit (ITC) Under GST: Eligibility, Reversal & Blocked Credits',
    description: 'Conditions to claim ITC, the Section 16(4) time limit, the 180-day reversal rule, and blocked credits under Section 17(5).',
    url: 'https://agrawalkhandelwal.com/blog/input-tax-credit-itc-gst-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Input Tax Credit (ITC) Under GST: Eligibility, Reversal & Blocked Credits',
    description: 'Everything a business needs to know before claiming ITC under GST, and where credit gets blocked or reversed.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Input Tax Credit (ITC) Under GST: Eligibility, Reversal & Blocked Credits', 'input-tax-credit-itc-gst-guide')

const articleLd = buildArticleLd({
  headline: 'Input Tax Credit (ITC) Under GST: Eligibility, Reversal & Blocked Credits',
  description: 'ITC eligibility conditions, the Section 16(4) time limit, the 180-day payment reversal rule, and blocked credits under Section 17(5) of the CGST Act.',
  datePublished: '2026-07-14',
  slug: 'input-tax-credit-itc-gst-guide',
})

const faqs: [string, string][] = [
  [
    'What are the basic conditions to claim ITC under GST?',
    'To claim ITC, you need a valid tax invoice or debit note, the goods or services must actually be received, the supplier must have paid the tax to the government and reported it on their GSTR-1 (so it reflects in your GSTR-2B), and you must have filed your own return claiming the credit. Missing any one of these conditions makes the credit ineligible even if GST was genuinely paid.',
  ],
  [
    'What is the time limit to claim ITC under Section 16(4)?',
    'ITC for a financial year must be claimed by the earlier of two dates: the due date of filing GSTR-3B for September of the following financial year, or the date the annual return (GSTR-9) is actually filed for that year. For FY 2025-26 invoices, this generally means the effective cutoff is the October 2026 due date for the September GSTR-3B, unless the annual return is filed even earlier. Once this window closes, the credit cannot be claimed at all.',
  ],
  [
    'What happens if I don\'t pay my supplier within 180 days?',
    'Under Rule 37, if you don\'t pay the supplier the invoice value plus GST within 180 days of the invoice date, you must reverse the ITC claimed on that invoice, along with interest from the date the credit was availed to the date of reversal. If you later pay the supplier, you can reclaim the reversed credit with no time limit on the reclaim itself, but the reversal and interest exposure in the meantime is real.',
  ],
  [
    'Can I claim ITC on a company car?',
    'Generally no. Section 17(5) blocks ITC on motor vehicles for transport of persons with a seating capacity up to 13, unless the vehicle is used for further supply of such vehicles, passenger transportation as a service, or driving training. ITC on related insurance, servicing, and repairs of such vehicles is similarly blocked unless the underlying exception applies.',
  ],
  [
    'Is ITC available on employee expenses like food and club memberships?',
    'No, in most cases. Section 17(5) specifically blocks ITC on food and beverages, outdoor catering, health services, cosmetic and plastic surgery, and membership of clubs, health, and fitness centres, unless the employer is legally obligated to provide that benefit to employees under a law currently in force, or the goods or services are used to make a further outward taxable supply of the same category.',
  ],
  [
    'Can blocked ITC be claimed later if circumstances change?',
    'No. Blocked credits under Section 17(5) are permanently ineligible for the specified category of expense; they are not a timing restriction like Section 16(4) or Rule 37, where the credit can eventually be claimed or reclaimed. If an expense falls under a Section 17(5) block, it stays disallowed regardless of when or how it is claimed.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function InputTaxCreditITCBlog() {
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
              <span className="section-badge">GST</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Input Tax Credit Under GST: Eligibility, Reversal &amp; Blocked Credits
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 14, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>ITC needs a valid invoice, receipt of goods/services, the supplier&apos;s tax actually reflected in your <strong>GSTR-2B</strong>, and your own return filed.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Section 16(4) sets a hard claim deadline: the earlier of the September GSTR-3B due date or the annual return filing date. Miss it and the credit is gone permanently.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Don&apos;t pay your supplier within <strong>180 days</strong> and the ITC must be reversed with interest, though it can be reclaimed once payment is made.</li>
                    <li style={{ marginBottom: 0 }}><strong>Section 17(5)</strong> permanently blocks ITC on categories like motor vehicles, food and beverages, and club memberships, with narrow exceptions.</li>
                  </ul>
                </div>

                <p>Input Tax Credit is the mechanism that keeps GST from cascading through the supply chain: the GST you pay on business purchases can be set off against the GST you collect on sales. It sounds straightforward until you actually run the numbers for a real business, because three separate rules; eligibility conditions, a claim deadline, and a permanent block list; each cut ITC differently, and most disputes with the department trace back to one of these three.</p>

                <h2>The Basic Conditions to Claim ITC</h2>
                <p>Four conditions must all be satisfied before ITC can be claimed on a purchase:</p>
                <ol>
                  <li><strong>A valid tax invoice or debit note</strong> from a registered supplier.</li>
                  <li><strong>Actual receipt of the goods or services.</strong> Credit cannot be claimed on a purchase that hasn&apos;t been delivered yet.</li>
                  <li><strong>The supplier has reported and paid the tax,</strong> which shows up as matched credit in your auto-populated GSTR-2B. If a supplier fails to file their GSTR-1 or doesn&apos;t deposit the tax, the credit will not reflect, and claiming it anyway is a common source of department queries.</li>
                  <li><strong>Your own GST return has been filed</strong> claiming the credit.</li>
                </ol>
                <p>The shift to GSTR-2B-based matching means ITC is now effectively locked to what your suppliers report, not just what your own purchase register says. This makes vendor compliance a direct input into your own cash flow; a habitually late-filing supplier can genuinely delay when you are able to claim credit on their invoices.</p>

                <h2>Section 16(4): The Time Limit to Claim ITC</h2>
                <p><strong>ITC for a financial year must be claimed by the earlier of the due date for filing the September GSTR-3B of the following financial year, or the date the annual return (GSTR-9) is actually filed for that year.</strong> For FY 2025-26 purchases, that generally means the practical cutoff is the October 2026 due date for the September 2026 GSTR-3B, unless GSTR-9 for FY 2025-26 is filed earlier than that, in which case the earlier filing date controls.</p>
                <p>This is a hard deadline with no exceptions for genuine oversight. Once it passes, unclaimed ITC on that year&apos;s invoices cannot be claimed later; there is no rectification window. The practical takeaway is to reconcile GSTR-2B against your purchase register at least quarterly rather than waiting until year-end, so nothing falls outside the window unnoticed. This same deadline is one of the reconciliation points that flows into <Link href="/blog/gstr-9-gstr-9c-annual-return-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-9 and GSTR-9C</Link> preparation.</p>

                <h2>The 180-Day Payment Rule (Rule 37)</h2>
                <p>ITC eligibility doesn&apos;t end once you&apos;ve claimed the credit; it is conditional on actually paying the supplier. <strong>If you don&apos;t pay the supplier the invoice value along with GST within 180 days of the invoice date, the ITC claimed on that invoice must be reversed,</strong> along with interest computed from the date the credit was originally availed until the date of reversal.</p>
                <p>Two practical points matter here. First, if only part of the invoice is unpaid after 180 days, only the proportionate ITC on the unpaid portion is reversed; you don&apos;t lose the entire credit over a partial payment dispute. Second, once you do pay the supplier, the reversed ITC can be reclaimed, and there is no time limit on making that reclaim. This makes the 180-day rule a cash-flow and documentation discipline issue more than a permanent loss, but it does require tracking which invoices are ageing past 180 days unpaid, something that is easy to lose track of without a dedicated ledger.</p>

                <h2>Section 17(5): Blocked Credits</h2>
                <p>Unlike the time-based restrictions above, Section 17(5) permanently disallows ITC on specific categories of expense, regardless of when or how the credit is claimed. The main blocked categories include:</p>
                <ul>
                  <li><strong>Motor vehicles</strong> for transport of persons with seating capacity up to 13 (including the driver), along with related insurance, servicing, and repairs; unless used for further supply of such vehicles, passenger transport as a service, or driving training.</li>
                  <li><strong>Food and beverages, outdoor catering, health services, and cosmetic or plastic surgery,</strong> unless the employer is statutorily obligated to provide the benefit, or the same category of goods/services is used to make a further outward taxable supply.</li>
                  <li><strong>Membership of clubs, health and fitness centres.</strong></li>
                  <li><strong>Life and health insurance,</strong> with the same statutory-obligation and further-supply exceptions as above.</li>
                  <li><strong>Works contract services for construction of immovable property</strong> (other than plant and machinery), except where it is an input service for further supply of works contract services.</li>
                  <li><strong>Goods or services received for construction of an immovable property</strong> on one&apos;s own account, other than plant and machinery, even when used in the course of business.</li>
                  <li><strong>Goods lost, stolen, destroyed, written off, or given away as gifts or free samples.</strong></li>
                  <li><strong>Tax paid due to fraud, suppression of facts, or confiscation proceedings</strong> under the relevant demand provisions.</li>
                </ul>
                <p>The recurring theme across this list is personal-consumption-adjacent or non-business-use expenditure; the law is drawing a line between genuine business inputs and costs with a personal-benefit or capital-asset character. When structuring employee benefits, company vehicle policies, or office construction, it is worth checking against this list before assuming the GST paid is recoverable.</p>

                <h2>Getting ITC Compliance Right</h2>
                <p>The practical workflow that avoids most disputes: reconcile GSTR-2B against your purchase register every month rather than at year-end, track supplier payment dates against the 180-day clock, and flag any expense category against the Section 17(5) list before claiming credit on it, not after. Businesses managing GST alongside a broader compliance calendar may also find our <Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup compliance calendar</Link> useful for keeping these deadlines in view alongside ROC and income tax obligations.</p>
              </div>

              <PostCTA
            heading="Not sure if an expense qualifies for ITC?"
            description="We review ITC claims, set up GSTR-2B reconciliation processes, and handle GST notices arising from blocked or ineligible credit."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gstr-9-gstr-9c-annual-return-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-9 &amp; GSTR-9C: Annual Return and Reconciliation Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/reverse-charge-mechanism-rcm-gst" style={{ color: 'var(--primary)', fontWeight: 600 }}>Reverse Charge Mechanism Under GST: When It Applies</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups: When Required &amp; First Return Guide</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'GST for E-Commerce Sellers: TCS Under Section 52',
  description: 'GST rules for sellers on Amazon, Flipkart, and other marketplaces: mandatory registration regardless of turnover, the Section 52 TCS rate, GSTR-8 credit reconciliation, and GSTR-1/3B implications.',
  keywords: [
    'GST for e-commerce sellers', 'TCS section 52 GST', 'GST registration e-commerce operator',
    'GSTR-8 TCS credit', 'e-commerce operator GST compliance', 'TCS on online marketplace sales',
    'GST for Amazon Flipkart sellers', 'section 52 CGST act',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-for-ecommerce-sellers-tcs-section-52' },
  openGraph: {
    title: 'GST for E-Commerce Sellers: TCS Under Section 52',
    description: 'Mandatory GST registration, the Section 52 TCS rate, and how to reconcile GSTR-8 credit for marketplace sellers.',
    url: 'https://agrawalkhandelwal.com/blog/gst-for-ecommerce-sellers-tcs-section-52',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST for E-Commerce Sellers: TCS Under Section 52',
    description: 'Registration rules, the Section 52 TCS rate, and GSTR-8 reconciliation for marketplace sellers.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST for E-Commerce Sellers: TCS Under Section 52', 'gst-for-ecommerce-sellers-tcs-section-52')

const articleLd = buildArticleLd({
  headline: 'GST for E-Commerce Sellers: TCS Under Section 52',
  description: 'GST registration requirements and the Section 52 TCS mechanism for sellers operating through e-commerce marketplaces, including how to reconcile TCS credit against GSTR-8.',
  datePublished: '2026-07-17',
  slug: 'gst-for-ecommerce-sellers-tcs-section-52',
})

const faqs: [string, string][] = [
  ['Is GST registration mandatory for sellers on Amazon or Flipkart?', 'Yes, for sellers of goods. A person supplying goods through an e-commerce operator must register for GST regardless of turnover, unlike offline sellers who benefit from a basic exemption threshold. Sellers supplying only services through an e-commerce operator are generally exempt from mandatory registration below the standard service-sector threshold, subject to conditions.'],
  ['What is the TCS rate under Section 52 for e-commerce sales?', 'The e-commerce operator collects tax at source at 0.5% of the net value of taxable supplies made through its platform, split as 0.25% CGST plus 0.25% SGST for intra-state supplies, or 0.5% IGST for inter-state supplies. This rate was reduced from the original 1% by a later notification, so always confirm the rate in force for your transaction period.'],
  ['How does a seller claim credit for TCS collected by the marketplace?', 'The e-commerce operator reports the TCS collected in Form GSTR-8, and the amount reflects in the seller\'s electronic cash ledger once the operator files that return and the seller accepts the corresponding entry on the GST portal. Sellers should reconcile the amounts reported in GSTR-8 against their own sales records every period, since a mismatch delays credit and can trigger a notice.'],
  ['Does TCS under Section 52 replace the seller\'s output GST liability?', 'No. TCS is only a mechanism to collect tax at source against the seller\'s eventual GST liability, not a substitute for it. The seller still has to compute and pay its own output tax through GSTR-3B; the TCS credit in the cash ledger is used to offset that liability, similar to an advance tax payment.'],
  ['What GST returns does an e-commerce seller need to file?', 'A seller registered for GST on account of selling through a marketplace files the regular GSTR-1 (outward supplies) and GSTR-3B (summary return and payment) like any other registered person, in addition to reconciling the TCS credit reported by the operator in GSTR-8. There is no separate special return specifically for the seller\'s own compliance beyond the standard forms.'],
  ['Is the composition scheme available to e-commerce sellers?', 'No. A person supplying goods through an e-commerce operator that is required to collect TCS under Section 52 cannot opt for the GST composition scheme, and must be registered under the regular scheme instead.'],
]

const faqLd = buildFaqLd(faqs)

export default function GSTEcommerceBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">GST</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>GST for E-Commerce Sellers: TCS Under Section 52 and Registration Rules</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 17, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Sellers of goods through an e-commerce operator must register for GST regardless of turnover; the basic exemption threshold does not apply to them.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The marketplace collects <strong>TCS at 0.5%</strong> of net taxable supplies (0.25% CGST + 0.25% SGST, or 0.5% IGST) and reports it in GSTR-8.</li>
                  <li style={{ marginBottom: '0.4rem' }}>TCS is not the seller&apos;s final tax; it lands in the electronic cash ledger and offsets the output liability computed and paid through GSTR-3B.</li>
                  <li style={{ marginBottom: 0 }}>The composition scheme is not available to sellers who transact through a TCS-collecting e-commerce operator.</li>
                </ul>
              </div>

              <p>Selling on Amazon, Flipkart, Meesho, or a similar marketplace comes with a GST compliance layer that catches many new online sellers off guard: registration is mandatory from day one, and the platform itself collects a small percentage of your sales as tax at source before you ever see the payout. Here is how the mechanism actually works.</p>

              <h2>Registration: No Threshold Exemption for Goods Sellers</h2>
              <p>Under the regular GST framework, a small business supplying goods can stay unregistered until its turnover crosses the basic exemption threshold. That exemption does not apply once you sell through an e-commerce operator that is required to collect TCS. A person supplying goods through such a platform must obtain GST registration regardless of turnover, even if annual sales are a few thousand rupees. Sellers supplying only services through a marketplace are treated differently and can generally rely on the standard threshold exemption for services, subject to conditions specific to the platform and category of service.</p>

              <h2>What Is TCS Under Section 52</h2>
              <p>Section 52 of the CGST Act requires every e-commerce operator to collect tax at source on the net value of taxable supplies made through its platform by other suppliers, where the operator collects the consideration on the supplier&apos;s behalf. The operator deposits this TCS with the government and reports it supplier-wise in a monthly return, Form GSTR-8, due by the 10th of the following month.</p>
              <p>The current TCS rate is <strong>0.5% of the net value of taxable supplies</strong>, split as 0.25% CGST plus 0.25% SGST for an intra-state supply, or 0.5% IGST for an inter-state supply. This rate was reduced from the original 1% by a later notification, so a seller comparing older articles or older TCS credit entries should check which rate applied for that specific filing period.</p>

              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Item</th><th style={thStyle}>Detail</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>TCS rate (intra-state)</td><td style={tdStyle}>0.25% CGST + 0.25% SGST</td></tr>
                    <tr><td style={tdAltStyle}>TCS rate (inter-state)</td><td style={tdAltStyle}>0.5% IGST</td></tr>
                    <tr><td style={tdStyle}>Collected by</td><td style={tdStyle}>E-commerce operator, on net taxable supply value</td></tr>
                    <tr><td style={tdAltStyle}>Reported in</td><td style={tdAltStyle}>Form GSTR-8, due 10th of the following month</td></tr>
                    <tr><td style={tdStyle}>Credit reflects in</td><td style={tdStyle}>Seller&apos;s electronic cash ledger</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>TCS Does Not Replace Your Own GST Liability</h2>
              <p>A common misunderstanding is treating TCS as if it settles the seller&apos;s tax obligation. It does not. TCS is closer to an advance collected against your eventual output GST liability. You still compute your own outward tax on all sales in GSTR-1 and pay the net liability through GSTR-3B; the TCS amount sitting in your electronic cash ledger (once the operator files GSTR-8 and you accept the entry) is available to offset that cash payment. If the operator delays filing GSTR-8, or if there is a mismatch between what the operator reports and what you recorded, the credit does not show up and you end up paying the same tax twice in cash until the mismatch is resolved.</p>

              <h2>Reconciling GSTR-8 Credit Every Period</h2>
              <p>Build a monthly habit of matching your own sales register against the TCS reported for you in GSTR-8 before you file GSTR-3B. Discrepancies typically arise from returns and cancellations processed by the platform after the sale (which reduce the net taxable value TCS is calculated on), commission or platform fee adjustments that some sellers mistakenly net off themselves, and timing differences between when a sale is recorded on the platform versus when it is invoiced by the seller. Catching these early avoids a scramble at year-end when the numbers in your books, your GSTR-1, and the operator&apos;s GSTR-8 need to tie together.</p>

              <h2>The Composition Scheme Is Off the Table</h2>
              <p>If you are considering the GST composition scheme to simplify compliance and reduce the tax rate on a small trading business, note that a supplier making sales through a TCS-collecting e-commerce operator is specifically barred from opting for it. This is a common trip-up for small sellers who start selling offline under composition and then expand onto a marketplace without realising the switch to regular registration is mandatory, not optional.</p>
            </div>

            <PostCTA
            heading="Selling on a marketplace and need GST sorted properly?"
            description="We handle GST registration, TCS/GSTR-8 reconciliation, and monthly return filing for e-commerce and D2C sellers."
            secondaryLabel="Our Services"
            secondaryHref="/services"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-works-contract-services-rate-itc" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Works Contract Services: Rate &amp; ITC Rules</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-late-fees-interest-calculation" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Late Fees and Interest: How They Are Calculated</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

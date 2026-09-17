import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'GST Late Fees & Interest: How They Are Calculated',
  description: 'How GST late fees under Section 47 and interest under Section 50 are calculated: per-day nil and non-nil rates, turnover-based caps, and why interest applies only to the cash-ledger portion of tax.',
  keywords: [
    'GST late fee calculation', 'GST interest section 50', 'nil return GST late fee',
    'GST late fee cap turnover', 'GST interest on late payment', 'section 47 CGST act late fee',
    'GST return late filing penalty', 'GST 18 percent interest',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-late-fees-interest-calculation' },
  openGraph: {
    title: 'GST Late Fees & Interest: How They Are Calculated',
    description: 'Per-day late fee rates, turnover-based caps, and how Section 50 interest is computed only on the cash-ledger portion of GST liability.',
    url: 'https://agrawalkhandelwal.com/blog/gst-late-fees-interest-calculation',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Late Fees & Interest: How They Are Calculated',
    description: 'Late fee rates, caps, and Section 50 interest calculation for delayed GST returns and payments.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST Late Fees & Interest: How They Are Calculated', 'gst-late-fees-interest-calculation')

const articleLd = buildArticleLd({
  headline: 'GST Late Fees & Interest: How They Are Calculated',
  description: 'How Section 47 late fees (nil vs non-nil returns, turnover-based caps) and Section 50 interest on delayed GST payment are calculated, with a worked example.',
  datePublished: '2026-07-20',
  slug: 'gst-late-fees-interest-calculation',
})

const faqs: [string, string][] = [
  ['How much is the GST late fee for a delayed non-nil return?', 'A non-nil return attracts a late fee of Rs 50 per day of delay (Rs 25 CGST plus Rs 25 SGST), subject to a maximum cap that depends on the taxpayer\'s aggregate turnover in the preceding financial year: Rs 2,000 for turnover up to Rs 1.5 crore, Rs 5,000 for turnover between Rs 1.5 crore and Rs 5 crore, and Rs 10,000 for turnover above Rs 5 crore. Always check the current notification for your specific return type, since caps have been revised over time.'],
  ['Is there a lower late fee for a nil GST return?', 'Yes. A nil return, one with no outward supplies, no ITC to claim, and no tax liability for the period, attracts a reduced late fee of Rs 20 per day (Rs 10 CGST plus Rs 10 SGST), capped at Rs 500. Many taxpayers wrongly assume a nil return needs no filing at all; it still needs to be filed on time to avoid this fee.'],
  ['What interest rate applies to late GST payment?', 'Interest under Section 50 of the CGST Act is charged at 18% per annum, computed from the day after the due date until the date of actual payment. A higher rate of 24% per annum applies specifically where a taxpayer has wrongly availed and utilised input tax credit, reflecting the more serious nature of that default.'],
  ['Is GST interest calculated on the entire tax liability or only part of it?', 'Interest under Section 50 is calculated only on the portion of tax liability actually discharged through the electronic cash ledger, not on the gross output tax before adjusting available input tax credit. This clarification followed earlier disputes where interest was being demanded on the full liability regardless of available ITC.'],
  ['Can GST late fees or interest be paid using input tax credit?', 'No. Both late fees under Section 47 and interest under Section 50 must be paid in cash through the electronic cash ledger; input tax credit in the electronic credit ledger cannot be used to settle either amount.'],
  ['Does filing GSTR-1 late also attract a late fee separately from GSTR-3B?', 'Yes. GSTR-1 and GSTR-3B are separate returns, and each attracts its own late fee if filed after the due date, using the same nil/non-nil structure and turnover-based caps described above. Delaying both returns for the same period can therefore result in two separate late fee calculations.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function GSTLateFeesBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>GST Late Fees and Interest: How They Are Calculated</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 20, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Late fee for a non-nil return is <strong>Rs 50/day</strong>, capped by turnover (Rs 2,000 to Rs 10,000); a nil return is <strong>Rs 20/day</strong>, capped at Rs 500.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Interest under Section 50 runs at <strong>18% per annum</strong> from the day after the due date, and only on the cash-ledger portion of tax, not the gross liability before ITC.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A higher <strong>24% rate</strong> applies where the default involves wrongly availed and utilised input tax credit.</li>
                  <li style={{ marginBottom: 0 }}>Neither late fee nor interest can be settled using input tax credit; both are payable in cash.</li>
                </ul>
              </div>

              <p>GST return delays cost money in two separate ways: a flat late fee for filing the return itself, and interest for any tax paid after the due date. Businesses often conflate the two or assume the late fee is trivial, but across GSTR-1 and GSTR-3B for the same period, and across several months of delay, the numbers add up faster than expected.</p>

              <h2>Late Fee Under Section 47: Nil vs Non-Nil Returns</h2>
              <p>Section 47 of the CGST Act prescribes a late fee for delayed filing of GSTR-1 and GSTR-3B, charged per day of delay until the return is actually filed, subject to a maximum cap.</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Return Type</th><th style={thStyle}>Per-Day Fee</th><th style={thStyle}>Maximum Cap</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Nil return</td><td style={tdStyle}>Rs 20/day (Rs 10 CGST + Rs 10 SGST)</td><td style={tdStyle}>Rs 500</td></tr>
                    <tr><td style={tdAltStyle}>Non-nil, turnover up to Rs 1.5 crore</td><td style={tdAltStyle}>Rs 50/day (Rs 25 + Rs 25)</td><td style={tdAltStyle}>Rs 2,000</td></tr>
                    <tr><td style={tdStyle}>Non-nil, turnover Rs 1.5-5 crore</td><td style={tdStyle}>Rs 50/day (Rs 25 + Rs 25)</td><td style={tdStyle}>Rs 5,000</td></tr>
                    <tr><td style={tdAltStyle}>Non-nil, turnover above Rs 5 crore</td><td style={tdAltStyle}>Rs 50/day (Rs 25 + Rs 25)</td><td style={tdAltStyle}>Rs 10,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The cap is based on aggregate turnover in the preceding financial year, and applies separately to each return and each tax period. A business that delays both GSTR-1 and GSTR-3B for the same month faces two independent late fee calculations, not one combined fee. Late fee rates and caps have been revised by government notification over the years, so confirm the figures in force for the specific period you are filing before relying on this table for an exact number.</p>

              <h2>Interest Under Section 50: The Cash-Ledger Rule</h2>
              <p>Interest is a separate charge that applies when tax itself is paid after the due date, regardless of whether the return late fee has also been paid. The standard rate is <strong>18% per annum</strong>, running from the day immediately after the due date to the date the tax is actually paid, computed on a daily basis.</p>
              <p>A point that trips up many taxpayers: interest under Section 50 is charged only on the portion of tax that is discharged through the <strong>electronic cash ledger</strong>, not on the gross output tax liability before setting off available input tax credit. If a large part of the month&apos;s liability was already covered by ITC sitting in the credit ledger, only the remaining cash-paid balance attracts interest for the delay, not the full output tax figure. This distinction matters significantly for businesses with substantial ITC balances, where the cash component of a delayed payment can be a small fraction of total liability.</p>
              <p>A higher rate of <strong>24% per annum</strong> applies in a narrower and more serious situation: where a taxpayer has wrongly availed and subsequently utilised input tax credit. This is treated differently from an ordinary payment delay because it involves credit that should not have been claimed in the first place, not just a timing lapse.</p>

              <h2>Worked Example</h2>
              <p>Suppose a business with turnover of Rs 3 crore in the preceding year files GSTR-3B for a month 20 days late, and had a net cash tax liability (after ITC set-off) of Rs 1,00,000 for that month.</p>
              <ul>
                <li><strong>Late fee:</strong> Rs 50/day x 20 days = Rs 1,000, well within the Rs 5,000 cap for this turnover band.</li>
                <li><strong>Interest:</strong> 18% per annum on Rs 1,00,000 for 20 days = Rs 1,00,000 x 18% x (20/365) &asymp; Rs 986.</li>
                <li><strong>Total cost of the 20-day delay:</strong> roughly Rs 1,986, paid entirely in cash, on top of the tax itself.</li>
              </ul>
              <p>Notice that interest here is computed only on the Rs 1,00,000 cash component, not on the business&apos;s gross output tax for the month before ITC was set off; a business with less ITC available and a larger cash-paid liability would see a proportionately higher interest figure for the same 20-day delay.</p>

              <h2>Why This Matters for Cash Flow Planning</h2>
              <p>Because both late fee and interest must be paid in cash and cannot be offset against ITC, a delay in filing does not just cost the nominal fee; it consumes cash that could otherwise fund operations. For a business managing tight working capital, building GST return deadlines into the same calendar discipline used for payroll and vendor payments avoids compounding cash-flow pressure with avoidable statutory charges.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Behind on GST filings or want to avoid it going forward?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle monthly GST return filing, reconciliation, and compliance calendars so due dates never get missed.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-works-contract-services-rate-itc" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Works Contract Services: Rate &amp; ITC Rules</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-for-ecommerce-sellers-tcs-section-52" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST for E-Commerce Sellers: TCS Under Section 52</Link></li>
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

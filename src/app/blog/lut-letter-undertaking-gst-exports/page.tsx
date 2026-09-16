import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Letter of Undertaking (LUT) for GST-Free Exports: How to File',
  description: 'Form GST RFD-11 eligibility, the step-by-step LUT filing process on the GST portal, its one-year validity, and what happens if you export without a valid LUT in place.',
  keywords: [
    'LUT GST filing process', 'Form RFD-11 GST', 'letter of undertaking GST exports',
    'LUT eligibility GST', 'LUT validity GST', 'export without LUT GST',
    'GST portal LUT filing steps', 'LUT renewal financial year',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/lut-letter-undertaking-gst-exports' },
  openGraph: {
    title: 'Letter of Undertaking (LUT) for GST-Free Exports: How to File',
    description: 'Who is eligible to file a LUT, the exact GST portal steps for Form RFD-11, its financial-year validity, and the cost of exporting without one.',
    url: 'https://agrawalkhandelwal.com/blog/lut-letter-undertaking-gst-exports',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letter of Undertaking (LUT) for GST-Free Exports: How to File',
    description: 'Form RFD-11 eligibility, filing steps, validity, and what happens if you export without a LUT.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Letter of Undertaking (LUT) for GST-Free Exports: How to File', 'lut-letter-undertaking-gst-exports')

const articleLd = buildArticleLd({
  headline: 'Letter of Undertaking (LUT) for GST-Free Exports: How to File',
  description: 'Form GST RFD-11 eligibility, step-by-step LUT filing process, one-year validity period, and consequences of exporting without a valid LUT.',
  datePublished: '2026-09-21',
  slug: 'lut-letter-undertaking-gst-exports',
})

const faqs: [string, string][] = [
  [
    'Who is eligible to file a LUT for GST exports?',
    'Any GST-registered taxpayer intending to export goods or services (or supply to a SEZ) without paying IGST can file a LUT, with one exception: a taxpayer who has been prosecuted for tax evasion of Rs 2.5 crore or more under the CGST Act, IGST Act, or an earlier indirect tax law must instead export under a bond, or pay IGST and claim a refund. There is no turnover threshold for LUT eligibility itself.',
  ],
  [
    'How long is a LUT valid?',
    'A LUT is valid only for the financial year in which it is filed, from April 1 to March 31, regardless of when during the year it was filed. It does not carry over; a fresh LUT covering the new financial year must be filed before the first export of that year, ideally before April 1.',
  ],
  [
    'What happens if I export goods or services without filing a LUT?',
    'Without a valid LUT (or a bond), you cannot export under the zero-rated-without-payment route. You would instead have to pay IGST on the export invoice at the applicable rate and separately claim a refund of that IGST later, which ties up working capital for the 30 to 90 days the refund typically takes to process. Exporting without either a LUT or IGST payment is a compliance default that can attract demand and penalty on the unpaid tax.',
  ],
  [
    'Is there a fee to file Form RFD-11 for a LUT?',
    'No, filing a LUT on the GST portal is free of cost. It is submitted online under Services > User Services > Furnish Letter of Undertaking, and does not require any government fee or stamp paper if filed electronically.',
  ],
  [
    'How long does it take for a LUT to be approved?',
    'Most LUT applications are approved automatically. If a tax officer does not act on the application within 3 working days of submission, the system grants deemed approval, and the LUT becomes usable immediately without waiting for a manual sign-off.',
  ],
  [
    'Can I file the LUT for the new financial year before the old one expires?',
    'Yes, and this is the recommended practice. The GST portal typically opens the LUT filing window for the new financial year before it begins, so exporters should file the fresh LUT in March itself for the year starting April 1, avoiding any gap in coverage for early-year export invoices.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function LUTGSTExportsBlog() {
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
                Letter of Undertaking (LUT) for GST-Free Exports: How to File
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 21, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Filing a LUT (Form GST RFD-11) lets you export goods or services <strong>without paying IGST upfront</strong>, avoiding a cash-flow drag while waiting for a refund.</li>
                    <li style={{ marginBottom: '0.4rem' }}>It is filed online, free of cost, and valid only for <strong>one financial year</strong>; a fresh LUT is needed every April 1.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Most applications get automatic <strong>&quot;deemed approved&quot;</strong> status within 3 working days.</li>
                    <li style={{ marginBottom: 0 }}>Export without a valid LUT and you must pay IGST on the invoice, then claim it back later; a slower, capital-intensive route.</li>
                  </ul>
                </div>
                <p>If your business exports goods or services from India, the LUT is the single most important document standing between you and a much slower, more expensive way of doing business. Filing it correctly, and on time each year, is what lets you invoice foreign clients without paying IGST first and chasing a refund later. This guide covers exactly how to file it. For the underlying distinction between zero-rated and exempt supplies and why exports fall into the zero-rated category, see our companion guide on <Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on exports: zero-rated vs exempt</Link>; this post focuses purely on the LUT filing mechanics.</p>

                <h2>What Is a LUT and Why File One</h2>
                <p>A Letter of Undertaking, filed in <strong>Form GST RFD-11</strong>, is a declaration by an exporter that they will fulfil all requirements of exporting under GST without paying IGST on the export invoice. Without a LUT in place, an exporter has to pay IGST on every export invoice and then apply for a refund, a process that can take 30 to 90 days and ties up working capital that would otherwise fund operations. With a LUT, you export at 0% IGST directly, and separately claim a refund of accumulated input tax credit instead of a refund of tax you already paid.</p>

                <h2>Who Can File a LUT</h2>
                <p>Any GST-registered person intending to export goods or services, or supply to a Special Economic Zone, without paying IGST is eligible to file a LUT. There is no minimum turnover requirement. The only exclusion is a taxpayer who has been <strong>prosecuted for an offence involving tax evasion of Rs 2.5 crore or more</strong> under the CGST Act, the IGST Act, or an earlier indirect tax law; such a taxpayer must furnish a bond instead, or pay IGST and claim a refund on each shipment.</p>

                <h2>Step-by-Step: Filing Form RFD-11 on the GST Portal</h2>
                <ol>
                  <li><strong>Log in to the GST portal</strong> and navigate to Services &gt; User Services &gt; Furnish Letter of Undertaking (FORM GST RFD-11).</li>
                  <li><strong>Select the financial year</strong> for which the LUT is being filed. The portal typically opens the window for the upcoming financial year before it starts.</li>
                  <li><strong>Complete the self-declaration</strong> confirming you will comply with the conditions of the LUT: exporting within the prescribed period, and remitting the tax with interest if you fail to export as declared.</li>
                  <li><strong>Fill in witness details</strong>: name, occupation, and address of two independent witnesses.</li>
                  <li><strong>Submit with a Digital Signature Certificate or EVC</strong>, the same authentication method used for other GST filings.</li>
                  <li><strong>Download the acknowledgment</strong> (Form GST RFD-11 with an ARN) immediately after submission; this is your proof of filing until the approval reflects on the portal.</li>
                </ol>
                <p>There is no fee for filing a LUT, and no requirement to submit it on physical stamp paper when filed through the portal.</p>

                <h2>Approval Timeline: Deemed Approval in 3 Days</h2>
                <p>Once submitted, a jurisdictional officer can review and approve the LUT. In practice, most applications are never manually touched: if the officer does not act within <strong>3 working days</strong> of submission, the system grants automatic deemed approval, and the LUT is usable immediately. This makes the process considerably faster than most other GST approvals, but exporters should still keep the acknowledgment on file, since some banks and customs processes ask for the accepted LUT copy alongside shipping documents.</p>

                <h2>Validity: One Financial Year, No Automatic Renewal</h2>
                <p>A LUT is valid strictly for the financial year in which it is filed, from April 1 to March 31, no matter when during that year it was actually submitted. There is no renewal process; a completely fresh Form RFD-11 must be filed for each new financial year. The most common operational mistake is assuming last year's LUT carries forward. It does not, and exporters who forget to file before April 1 find their early-April export invoices sitting in a grey zone with no valid LUT covering them. File the new year's LUT in March, before the current one lapses, rather than waiting until an export is ready to ship.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>If You Miss the Renewal Deadline</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>File the new financial year&apos;s LUT immediately; the portal accepts it even after April 1. For the gap period between the old LUT expiring and the new one being approved, export under IGST payment and claim the refund separately, rather than leaving invoices uncovered. Once the new LUT is in place, revert to the no-payment route for subsequent shipments.</p>
                </div>

                <h2>What Happens If You Export Without a Valid LUT</h2>
                <p>Exporting without a LUT (and without a bond) in force means you do not have authorisation to export without paying IGST. The practical consequence is that you must pay IGST on the export invoice at the applicable rate and then file a separate refund claim in Form RFD-01 for that IGST paid, a process that typically takes weeks to a few months depending on documentation and department processing. Treating an export as LUT-covered when no valid LUT exists for that period is a compliance gap that can attract a demand for the unpaid IGST plus interest if flagged in a departmental review, so exporters should confirm LUT status before invoicing, not after the shipment has gone out.</p>

                <p>Once your LUT is filed and the export is invoiced correctly, the next step is claiming the refund of accumulated input tax credit; our guide on <Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>zero-rated exports and the RFD-01 refund process</Link> walks through that in detail. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Advisory team</Link> also handles LUT filing and renewal as part of ongoing export compliance, so it never lapses unnoticed.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need your LUT filed or renewed before the deadline?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We file Form RFD-11 for exporters each financial year and track renewal dates so your export invoices are never left uncovered.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20filing%20my%20GST%20LUT%20for%20exports." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-audit-applicability-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Audit: Applicability &amp; What Auditors Check</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-registration-cancellation-revocation" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration Cancellation &amp; Revocation</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

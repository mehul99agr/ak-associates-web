import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GST on Exports: Zero-Rated vs Exempt — What Indian Exporters Get Wrong',
  description: 'The difference between zero-rated and exempt supplies under GST, why it matters for ITC claims, how to file a Letter of Undertaking (LUT), and the five conditions for export of services.',
  keywords: [
    'GST on exports India', 'zero rated supply GST India', 'exempt supply GST India',
    'LUT GST exports', 'letter of undertaking GST', 'GST export of services India',
    'ITC refund on exports India', 'RFD-01 export refund', 'IGST refund exports',
    'GST on export of services five conditions',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-on-exports-zero-rated-vs-exempt-india' },
  openGraph: {
    title: 'GST on Exports: Zero-Rated vs Exempt — What Indian Exporters Get Wrong',
    description: 'Exports are zero-rated under GST, not exempt — and the distinction has major consequences for input tax credit claims and refunds.',
    url: 'https://agrawalkhandelwal.com/blog/gst-on-exports-zero-rated-vs-exempt-india',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'GST on Exports: Zero-Rated vs Exempt — What Indian Exporters Get Wrong',
  description: 'Zero-rated vs exempt distinction under GST, LUT filing, export of services conditions, and ITC refund process for Indian exporters.',
  datePublished: '2026-07-18',
  dateModified: '2026-07-18',
  author: {
    '@type': 'Person',
    '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
    name: 'CA Mehul Agrawal',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://agrawalkhandelwal.com/#organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' },
  },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/gst-on-exports-zero-rated-vs-exempt-india',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between zero-rated and exempt supply under GST in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A zero-rated supply under Section 16 of the IGST Act attracts 0% GST but the supplier can still claim input tax credit (ITC) on inputs and input services used to make the supply, and receive a refund of accumulated ITC. An exempt supply under the GST Act also attracts 0% GST, but the supplier cannot claim ITC on inputs used for exempt supplies — it must be reversed under Rule 42/43. Exports of goods and services are zero-rated, not exempt. This is the most important distinction: treating exports as exempt causes exporters to erroneously reverse ITC and lose significant refund claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can file a Letter of Undertaking (LUT) for GST exports in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any GST-registered taxpayer who intends to export goods or services without paying IGST can file a Letter of Undertaking (LUT) on the GST portal at the beginning of each financial year. The LUT is available to all registered exporters except those who have been prosecuted for tax evasion involving an amount of ₹2.5 crore or more under the CGST Act, IGST Act, or earlier indirect tax laws. Once the LUT is in place, the exporter exports without paying IGST and claims a refund of accumulated input tax credit. A fresh LUT must be filed each financial year — an LUT filed for FY 2025-26 does not cover FY 2026-27 exports.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the five conditions for a supply to qualify as export of services under GST?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Section 2(6) of the IGST Act, all five conditions must be satisfied simultaneously: (1) the supplier of the service must be located in India; (2) the recipient of the service must be located outside India; (3) the place of supply of the service must be outside India; (4) the payment for the service must be received in convertible foreign exchange, or in Indian rupees wherever permitted by the Reserve Bank of India; and (5) the supplier and the recipient must not merely be establishments of the same legal entity in different countries. If any one condition fails, the supply is not an export of service and standard GST applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Indian exporters claim a GST refund on accumulated ITC from zero-rated supplies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exporters must first correctly declare exports in GSTR-1 (Table 6A for exports under LUT, Table 6B for exports with IGST payment). The refund application is filed in Form RFD-01 on the GST portal within 2 years of the relevant date — for export of services, the relevant date is the date the foreign exchange is received (i.e., when the FIRC or BRC is issued by the bank). The GST officer processes the claim within 60 days. Exporters of goods receive 90% provisionally within 7 days of acknowledgement. Supporting documents include the LUT, shipping bills or invoices, GSTR-1/3B filings, and bank realization certificates.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function GSTExportsZeroRatedBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">GST</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                GST on Exports: Zero-Rated vs Exempt — What Indian Exporters Get Wrong
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 18, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>Ask an Indian exporter whether their exports are taxable under GST and most will say no. That is correct — but for the wrong reason. Exports are not exempt from GST; they are <strong>zero-rated</strong>. The difference between these two categories is not semantic. It determines whether you can claim input tax credit on every rupee of GST you pay on raw materials, services, and overhead — and whether you can get a refund of that credit from the government. Getting this wrong costs exporters lakhs in unclaimed ITC every year.</p>

                <h2>Zero-Rated vs Exempt: Why the Distinction Matters</h2>
                <p>Under India&apos;s GST framework:</p>
                <ul>
                  <li><strong>Zero-rated supply (Section 16, IGST Act):</strong> GST rate is 0%, but the supplier retains the full right to claim input tax credit (ITC) on inputs, input services, and capital goods used in making the supply. The accumulated ITC can be claimed as a cash refund from the government. Exports of goods, exports of services, and supplies to Special Economic Zones qualify as zero-rated supplies.</li>
                  <li><strong>Exempt supply:</strong> GST rate is also 0%, but the supplier cannot claim ITC on inputs used for exempt supplies. Under Rule 42/43 of the CGST Rules, ITC attributable to exempt supplies must be reversed. Healthcare, education, and certain agricultural commodities are examples of exempt supplies.</li>
                </ul>
                <p>If you treat your export transactions as exempt instead of zero-rated, you will reverse ITC that you were legally entitled to keep — and you will not file refund claims that are rightfully yours. For a company spending ₹50 lakh a year on GST-liable inputs and services, treating exports as exempt instead of zero-rated could mean losing the entire ₹50 lakh in ITC that could have been refunded.</p>

                <h2>Two Routes for Zero-Rated Exports</h2>
                <p>For exports of goods and services (and supplies to SEZs), GST law provides two mechanisms:</p>
                <ul>
                  <li><strong>Route A — Export under Bond/LUT (recommended):</strong> File a Letter of Undertaking on the GST portal before exporting. Export without paying any IGST. Claim a refund of accumulated ITC from the GST department. This is the preferred route for most exporters because it avoids the cash flow burden of paying IGST upfront.</li>
                  <li><strong>Route B — Export on payment of IGST and claim refund:</strong> Pay IGST on the export invoice, export the goods or services, and subsequently claim a refund of the IGST paid. Refund is typically processed faster for goods (linked to shipping bill), but the exporter must fund the IGST payment until the refund arrives — which can take 30-90 days.</li>
                </ul>

                <h2>How to File a Letter of Undertaking (LUT)</h2>
                <p>The LUT must be filed on the GST portal (Services &gt; User Services &gt; Furnish Letter of Undertaking) at the start of each financial year, before the first export transaction of that year. It is valid for the entire financial year. Key points:</p>
                <ul>
                  <li>Any GST-registered person can file an LUT, with one exception: taxpayers who have been prosecuted for an offence involving tax evasion of ₹2.5 crore or more must pay IGST on exports and claim refund instead.</li>
                  <li>The LUT references a bond (actual bond for new or risky exporters, LUT for established exporters with clean track record — CBDT instructions specify the distinction).</li>
                  <li>A <strong>fresh LUT is mandatory each financial year</strong>. Exporters who forget to renew their LUT before April 1 find their early-April exports in a grey area. The workaround: file the new LUT retroactively for the financial year (GSTN accepts this), and in the interim export under IGST payment and claim refund.</li>
                </ul>

                <h2>Export of Services: The Five Conditions</h2>
                <p>For software companies, consulting firms, BPOs, and any Indian company billing an overseas client, the zero-rated benefit only applies if all five conditions under Section 2(6) of the IGST Act are simultaneously satisfied:</p>
                <ol>
                  <li>The <strong>supplier of the service</strong> is located in India</li>
                  <li>The <strong>recipient of the service</strong> is located outside India</li>
                  <li>The <strong>place of supply</strong> of the service is outside India</li>
                  <li>The <strong>payment</strong> for the service is received in convertible foreign exchange — or in Indian rupees where the RBI permits (Nepal, Bhutan)</li>
                  <li>The supplier and recipient are <strong>not merely establishments of the same legal entity</strong> — i.e., they cannot be the Indian HQ and its foreign branch invoicing each other</li>
                </ol>
                <p>Condition 4 trips up the most Indian IT and consulting companies. If payment is received in INR from a foreign client (outside RBI-permitted corridors), the supply does not qualify as export of services — and full GST applies. Ensure your invoices specify USD, EUR, GBP, or another convertible currency, and that the bank credits show the foreign inward remittance clearly with a FIRC or BRC.</p>

                <h2>ITC Refund Process for Zero-Rated Supplies</h2>
                <p>The refund cycle for accumulated ITC on exports:</p>
                <ol>
                  <li>Declare exports correctly in <strong>GSTR-1</strong> — Table 6A for goods exports and services exports under LUT (without IGST); Table 6B for exports with IGST payment</li>
                  <li>Reflect zero-rated supplies in <strong>GSTR-3B</strong></li>
                  <li>File <strong>Form RFD-01</strong> on the GST portal within 2 years of the relevant date (for services, the date of receipt of foreign exchange — when the FIRC is issued)</li>
                  <li>Upload supporting documents: LUT, export invoices, bank realization certificate (FIRC/BRC), GSTR-1 and 3B for the relevant periods</li>
                  <li>For goods: provisional refund of 90% within 7 days of acknowledgement</li>
                  <li>For services: refund processed within 60 days of acknowledgement</li>
                </ol>

                <h2>Common Mistakes Indian Exporters Make</h2>
                <ul>
                  <li><strong>Treating exports as exempt and reversing ITC</strong> — the most expensive mistake, losing all accumulated credit</li>
                  <li><strong>Forgetting to file or renew the LUT</strong> before the start of the financial year, leaving early exports uncovered</li>
                  <li><strong>Not receiving payment in foreign exchange</strong> for service exports — invoicing in USD but receiving INR conversion from the bank without a FIRC defeats the condition</li>
                  <li><strong>Missing export details in GSTR-1 Table 6A</strong> — refund application RFD-01 is rejected or delayed without GSTR-1 matching</li>
                  <li><strong>Not filing RFD-01 within 2 years</strong> of the relevant date — the claim lapses permanently</li>
                </ul>

                <p>If your business exports goods or services and has not claimed a GST refund in the past year, you likely have accumulated ITC sitting unclaimed. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Advisory team</Link> can review your returns and file a retroactive refund claim for up to 2 years.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Unclaimed GST refunds on exports? We can file retroactively.</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We review export transactions, check LUT compliance, and file RFD-01 refund claims for Indian exporters with accumulated ITC.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20GST%20export%20refund." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqLd.mainEntity.map((faq, i) => (
                    <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{faq.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

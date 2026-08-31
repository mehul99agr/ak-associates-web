import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: 'Do You Need a TAN to Buy Property From an NRI?' },
  description: 'Yes - buying property from an NRI needs a TAN, not just a PAN, and Form 26QB does not apply. Form 49B process, documents, fees and 7 to 10 day timeline.',
  keywords: [
    'TAN application for buying property from NRI', 'TAN registration India', 'form 49B TAN',
    'buyer TAN NRI property purchase', 'do I need TAN to buy NRI property', 'TAN application process',
    'TAN vs PAN property purchase',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tan-application-guide-buyer-nri-property' },
  openGraph: {
    title: 'TAN Application Guide (NRI Property)',
    description: 'Form 49B process, documents, fees, and timeline for buyers who need a TAN to purchase property from an NRI seller.',
    url: 'https://agrawalkhandelwal.com/blog/tan-application-guide-buyer-nri-property',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAN Application Guide (NRI Property)',
    description: 'Form 49B process, documents, fees, and timeline for buyers who need a TAN to purchase property from an NRI seller.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('TAN Application Guide (NRI Property)', 'tan-application-guide-buyer-nri-property')

const articleLd = buildArticleLd({
  headline: 'TAN Application Guide (NRI Property)',
  description: 'Form 49B TAN application process, documents, fees, and processing time for buyers purchasing property from an NRI seller under Section 195.',
  datePublished: '2026-07-11',
  slug: 'tan-application-guide-buyer-nri-property',
})

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does a buyer need TAN when buying property from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always. Unlike buying from a resident seller, where the buyer files Form 26QB using only a PAN, purchasing from an NRI falls under Section 195 (now Section 393(2) under the Income Tax Act 2025), which requires the buyer to hold a TAN before deducting any tax. Without a TAN, TDS cannot be deposited correctly or reported through the mandatory Form 27Q (now Form 144) return.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TAN being scrapped for buyers purchasing from an NRI in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Budget 2026 does introduce a PAN-based mechanism (Form 141) that removes the TAN requirement for property purchases from October 1, 2026, but it is explicitly restricted to resident sellers. When the seller is an NRI, Form 141 does not apply, and the buyer must continue to obtain a TAN and comply under Section 195 (now Section 393(2)), with no confirmed end date for that requirement. This is a common misreading of the Budget circulating online.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a TAN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A TAN is typically allotted within 7 to 10 working days of submitting Form 49B online through the Protean (NSDL) portal, provided the application and supporting documents are in order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a buyer reuse an existing TAN for an NRI property purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If the buyer already holds a TAN from a previous transaction — for example, as an employer deducting salary TDS, or from an earlier purchase from a non-resident — the same TAN can be used again to deduct and report TDS under Section 195 for a new NRI property purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TAN required if I buy property from an NRI below Rs 50 lakh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Rs 50 lakh threshold applies only to purchases from resident sellers under Section 194-IA. A purchase from an NRI is governed by Section 195 (now Section 393(2)), which has no minimum value, so TAN and TDS obligations apply even on a small consideration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can two joint buyers use one TAN for an NRI property purchase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each buyer who is separately liable to deduct tax needs their own TAN and must deduct their proportionate share, unless all payments are routed through a single deducting buyer named in the sale deed. Fix this structure before the first payment is made.',
      },
    },
  ],
}

const bookingLink = BOOKING_LINK

export default function TANApplicationGuideBlog() {
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
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                TAN Application Guide for Buyers Purchasing Property from an NRI
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Buying property from an NRI requires the buyer to hold a <strong>TAN</strong>, not just a PAN — the resident-seller Form 26QB / PAN-only process does not apply.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Apply for the TAN as soon as the deal is seriously under negotiation — it cannot be backdated once a payment has already been made without TDS deducted.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Missing this step makes the buyer personally liable for the full TDS, plus 1% monthly interest and a Section 271C penalty.</li>
                    <li style={{ marginBottom: 0 }}>Once the TAN is issued, the buyer deducts TDS via challan and files the quarterly Form 27Q return.</li>
                  </ul>
                </div>
                <p>If you are buying property from an NRI, one requirement catches most first-time buyers off guard: you need a <strong>TAN (Tax Deduction Account Number)</strong>, not just a PAN. This is different from buying from a resident seller, and skipping it — or discovering it too late — is the single most common mistake that creates personal TDS liability for buyers. Here is exactly how to get one.</p>

                <h2>Is TAN Mandatory for Buying Property from an NRI?</h2>
                <p><strong>Yes. When the seller is an NRI, the buyer must obtain a TAN before making any payment - a PAN alone is not enough, and the resident-seller Form 26QB route does not apply. The purchase falls under Section 195 (now Section 393(2) under the Income Tax Act 2025), which makes TAN-based TDS deduction and quarterly Form 27Q (now Form 144) reporting compulsory, with no minimum transaction value.</strong></p>
                <p>The practical sequence:</p>
                <ol>
                  <li><strong>Apply on Form 49B</strong> through the Protean (NSDL) portal as soon as the deal is firm. The fee is about ₹65 plus GST.</li>
                  <li><strong>TAN is allotted in roughly 7 to 10 working days.</strong> A 14-digit acknowledgment number lets you track status.</li>
                  <li><strong>Deduct TDS at the applicable Section 195 rate</strong> on every payment, including advances, and deposit it by the 7th of the following month via Challan ITNS-281.</li>
                  <li><strong>File Form 27Q each quarter</strong> and issue Form 16A to the NRI seller.</li>
                </ol>
                <p>Paying an NRI seller without deducting TDS makes the buyer an <strong>assessee in default under Section 201 (now Section 398)</strong>: personally liable for the full un-deducted tax, plus interest at 1% per month and a Section 271C penalty equal to the tax not deducted.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Budget 2026 Update: TAN Is Not Being Scrapped Here</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>You may have seen reports that Budget 2026 removes the TAN requirement for property purchases from October 1, 2026. That change is real, but it applies only to <strong>resident sellers</strong> — a new PAN-based challan (Form 141) replaces TAN-based compliance for those transactions. Where the seller is an NRI, Form 141 explicitly does not apply. The TAN requirement covered in this guide continues unchanged, under Section 195 (now Section 393(2) under the Income Tax Act 2025), with Form 27Q now called Form 144. Don&apos;t skip TAN registration for an NRI purchase based on the &quot;TAN scrapped&quot; headlines.</p>
                </div>

                <h2>Why a TAN Is Required Here (and Not for Resident Sellers)</h2>
                <p>When buying from a resident seller above ₹50 lakh, Section 194-IA applies, and the buyer simply files Form 26QB using their PAN — no TAN needed. When the seller is an NRI, the transaction falls under <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195 (now Section 393(2))</Link> instead, which is a full TDS obligation with no minimum threshold. Section 195 compliance requires the payer to hold a TAN, deposit TDS via challan, and file the quarterly Form 27Q (now Form 144) return — the PAN-only Form 26QB process simply does not apply.</p>

                <h2>Step-by-Step TAN Application Process</h2>
                <ol>
                  <li><strong>Get Form 49B ready:</strong> This is the TAN application form, available online through the Protean (formerly NSDL) e-Governance portal.</li>
                  <li><strong>Fill in buyer details:</strong> Full name, address, PAN, and category (individual, HUF, company, etc.).</li>
                  <li><strong>Submit online and pay the fee:</strong> The application fee is nominal, around ₹65, payable online at the time of submission.</li>
                  <li><strong>Acknowledgment generated:</strong> A 14-digit acknowledgment number is issued immediately, which can be used to track the application status.</li>
                  <li><strong>TAN allotted:</strong> The TAN is typically issued within 7 to 10 working days and communicated electronically. A physical TAN allotment letter can also be requested.</li>
                  <li><strong>Use the TAN going forward:</strong> Once allotted, the TAN is used to deposit TDS via Challan ITNS-281 and to file Form 27Q every quarter for this transaction — and can be reused for any future Section 195 deductions.</li>
                </ol>

                <h2>Documents Needed</h2>
                <ul>
                  <li>PAN card of the buyer (or all buyers, if jointly purchasing)</li>
                  <li>Address proof matching the application</li>
                  <li>Details of the category of deductor (individual, firm, company, HUF)</li>
                </ul>
                <p>The process is straightforward and does not require the NRI seller&apos;s involvement — it is entirely the buyer&apos;s responsibility and can be completed independently, ideally before the sale agreement is finalized.</p>

                <h2>Timing: Apply Before, Not After</h2>
                <p>A TAN cannot be backdated once a payment has already been made to the NRI seller without TDS deduction. Apply for the TAN as soon as the transaction is seriously under negotiation, well before any advance or full payment is made. Buyers who make payments first and try to sort out TAN and TDS afterward risk becoming an <strong>assessee in default under Section 201 (now Section 398)</strong>, with interest and penalty exposure on top of the TDS itself.</p>

                <h2>What Happens Without a TAN</h2>
                <p>If a buyer pays an NRI seller without deducting TDS because they didn&apos;t realize a TAN was required, the buyer becomes personally liable for the full TDS amount, plus interest at 1% per month for non-deduction and a penalty equal to the tax not deducted under Section 271C. Getting the TAN in place first is a small administrative step that avoids a significant personal liability later. Sellers navigating the other side of this transaction can find guidance in our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory</Link> services.</p>

                <p>Once the TAN is in hand, use our <Link href="/tools/nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Property TDS Calculator</Link> to work out exactly how much to deduct and deposit. If the NRI seller expects their actual tax liability to be much lower than the statutory TDS, point them to our guide on the <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> — it&apos;s the seller&apos;s responsibility to apply, but buyers benefit from a smoother transaction when it&apos;s in place before closing.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Buying property from an NRI seller?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help buyers with TAN registration, TDS calculation, and Form 27Q filing so the transaction stays compliant from day one.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20TAN%20and%20TDS%20for%20buying%20property%20from%20an%20NRI." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale (FY 2026-27)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>26QB vs 27Q: NRI Property TDS Form</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/pan-card-nri-application-aadhaar-linking" style={{ color: 'var(--primary)', fontWeight: 600 }}>PAN Card for NRIs (2026)</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Do You Need a TAN to Buy Property From an NRI? (Updated for Oct 2026)' },
  description: 'From Oct 1, 2026, resident individual/HUF buyers no longer need a TAN to buy property from an NRI; PAN-based Form 141 Schedule E applies instead. Rules for purchases before that date, and for company/firm buyers.',
  keywords: [
    'TAN application for buying property from NRI', 'TAN registration India', 'form 49B TAN',
    'buyer TAN NRI property purchase', 'do I need TAN to buy NRI property', 'TAN application process',
    'TAN vs PAN property purchase', 'Form 141 Schedule E NRI property',
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
  dateModified: '2026-09-25',
  slug: 'tan-application-guide-buyer-nri-property',
})

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is TAN required for purchase of property from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the buyer and the date. For payments made before October 1, 2026, every buyer purchasing from an NRI seller needs a TAN, regardless of transaction value, since the purchase falls under Section 195 (now Section 393(2) under the Income Tax Act 2025). From October 1, 2026, CBDT Notification No. 121/2026 (dated September 22, 2026) removes the TAN requirement specifically for resident individual and HUF buyers, who can instead report and deposit TDS using their PAN through a new Schedule E in Form 141. Buyers who are companies, firms, LLPs, or other non-individual/HUF entities still need a TAN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a buyer need TAN when buying property from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not anymore, if you are a resident individual or HUF buying on or after October 1, 2026. Until that date, and for company/firm/LLP buyers at any time, purchasing from an NRI falls under Section 195 (now Section 393(2) under the Income Tax Act 2025), which requires a TAN before deducting any tax and quarterly Form 27Q (now Form 144) reporting. From October 1, 2026, eligible resident individual/HUF buyers instead use the PAN-based Schedule E in Form 141, with no TAN or Form 27Q needed for that transaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TAN being scrapped for buyers purchasing from an NRI in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only partially. CBDT Notification No. 121/2026 (G.S.R. 830(E), dated September 22, 2026) inserted a new Schedule E into Form 141 titled "TDS on any consideration on transfer of any immovable property covered under section 393(2)," giving resident individual and HUF buyers a PAN-based route effective October 1, 2026, so they no longer need a TAN to buy from a non-resident seller. This is narrower than the earlier reporting that TAN was scrapped for NRI-seller purchases across the board: it does not extend to buyers who are companies, firms, LLPs, or other non-individual/HUF entities, and it does not apply retroactively to payments made before October 1, 2026.',
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
        text: 'Yes. If the buyer already holds a TAN from a previous transaction; for example, as an employer deducting salary TDS, or from an earlier purchase from a non-resident; the same TAN can be used again to deduct and report TDS under Section 195 for a new NRI property purchase.',
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
                    <li style={{ marginBottom: '0.4rem' }}><strong>Update:</strong> from October 1, 2026, resident individual/HUF buyers no longer need a TAN to buy from an NRI seller; they use the new PAN-based Schedule E in Form 141 instead (CBDT Notification No. 121/2026, dated September 22, 2026).</li>
                    <li style={{ marginBottom: '0.4rem' }}>For payments made before October 1, 2026, and for any buyer that is a company, firm, or LLP, the old rule still applies: buying from an NRI requires a <strong>TAN</strong>, not just a PAN; the resident-seller Form 26QB / PAN-only process does not apply.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Where a TAN is still needed, apply as soon as the deal is seriously under negotiation; it cannot be backdated once a payment has already been made without TDS deducted.</li>
                    <li style={{ marginBottom: 0 }}>Missing a required TAN, or filing under the wrong mechanism, makes the buyer personally liable for the full TDS, plus 1% monthly interest and a Section 271C penalty.</li>
                  </ul>
                </div>
                <p>If you are buying property from an NRI, one requirement catches most first-time buyers off guard: you need a <strong>TAN (Tax Deduction Account Number)</strong>, not just a PAN. This is different from buying from a resident seller, and skipping it (or discovering it too late) is the single most common mistake that creates personal TDS liability for buyers. Here is exactly how to get one.</p>

                <h2>Is TAN Mandatory for Buying Property from an NRI?</h2>
                <p><strong>It depends on when you pay and who the buyer is. For payments made before October 1, 2026, and for any buyer that is a company, firm, or LLP at any time, yes: the buyer must obtain a TAN before making any payment, a PAN alone is not enough, and the resident-seller Form 26QB route does not apply. The purchase falls under Section 195 (now Section 393(2) under the Income Tax Act 2025), which makes TAN-based TDS deduction and quarterly Form 27Q (now Form 144) reporting compulsory, with no minimum transaction value.</strong></p>
                <p><strong>From October 1, 2026, resident individual and HUF buyers are exempt from this requirement.</strong> CBDT Notification No. 121/2026 (G.S.R. 830(E), dated September 22, 2026) inserted a new Schedule E into Form 141, specifically for &quot;TDS on any consideration on transfer of any immovable property covered under section 393(2).&quot; An eligible resident individual or HUF buyer can now report property details, PAN, and the TDS amount directly through this schedule using only their own PAN; no TAN application, and no Form 27Q, for that transaction.</p>
                <p>The rest of this guide covers the TAN route below, which still applies if you are paying before October 1, 2026, or if the buyer is not a resident individual or HUF (for example, a company, LLP, or partnership firm).</p>
                <p>The practical sequence where a TAN is still required:</p>
                <ol>
                  <li><strong>Apply on Form 49B</strong> through the Protean (NSDL) portal as soon as the deal is firm. The fee is about ₹65 plus GST.</li>
                  <li><strong>TAN is allotted in roughly 7 to 10 working days.</strong> A 14-digit acknowledgment number lets you track status.</li>
                  <li><strong>Deduct TDS at the applicable Section 195 rate</strong> on every payment, including advances, and deposit it by the 7th of the following month via Challan ITNS-281.</li>
                  <li><strong>File Form 27Q each quarter</strong> and issue Form 16A to the NRI seller.</li>
                </ol>
                <p>Paying an NRI seller without deducting TDS makes the buyer an <strong>assessee in default under Section 201 (now Section 398)</strong>: personally liable for the full un-deducted tax, plus interest at 1% per month and a Section 271C penalty equal to the tax not deducted.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Update, September 25, 2026: TAN Is Being Removed for NRI-Seller Purchases Too, From Oct 1, 2026</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>An earlier version of this guide said the October 1, 2026 PAN-based Form 141 change applied only to resident-seller purchases. That is now out of date. CBDT Notification No. 121/2026 (G.S.R. 830(E), dated September 22, 2026) added a new <strong>Schedule E to Form 141</strong>, specifically for &quot;TDS on any consideration on transfer of any immovable property covered under section 393(2)&quot; (the NRI-seller provision). From October 1, 2026, a <strong>resident individual or HUF</strong> buying from an NRI can use this PAN-based schedule instead of applying for a TAN. This does not extend to buyers who are companies, firms, or LLPs, and it does not apply retroactively to payments made before October 1, 2026; both of those cases still follow the TAN process described in this guide.</p>
                </div>

                <h2>Why a TAN Was Required Here, and Who Still Needs One</h2>
                <p>When buying from a resident seller above ₹50 lakh, Section 194-IA applies, and the buyer simply files Form 26QB using their PAN; no TAN needed. When the seller is an NRI, the transaction falls under <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195 (now Section 393(2))</Link> instead, which is a full TDS obligation with no minimum threshold. Historically, Section 195 compliance required the payer to hold a TAN, deposit TDS via challan, and file the quarterly Form 27Q (now Form 144) return, with the PAN-only Form 26QB process not applying at all.</p>
                <p>From October 1, 2026, that changes for one category of buyer: a resident individual or HUF can instead use the new Schedule E in Form 141, reporting directly against their PAN. Everyone else (companies, firms, LLPs) and anyone paying before October 1, 2026 still needs a TAN, and the rest of this section walks through that process.</p>

                <h2>Step-by-Step TAN Application Process</h2>
                <ol>
                  <li><strong>Get Form 49B ready:</strong> This is the TAN application form, available online through the Protean (formerly NSDL) e-Governance portal.</li>
                  <li><strong>Fill in buyer details:</strong> Full name, address, PAN, and category (individual, HUF, company, etc.).</li>
                  <li><strong>Submit online and pay the fee:</strong> The application fee is nominal, around ₹65, payable online at the time of submission.</li>
                  <li><strong>Acknowledgment generated:</strong> A 14-digit acknowledgment number is issued immediately, which can be used to track the application status.</li>
                  <li><strong>TAN allotted:</strong> The TAN is typically issued within 7 to 10 working days and communicated electronically. A physical TAN allotment letter can also be requested.</li>
                  <li><strong>Use the TAN going forward:</strong> Once allotted, the TAN is used to deposit TDS via Challan ITNS-281 and to file Form 27Q every quarter for this transaction; and can be reused for any future Section 195 deductions.</li>
                </ol>

                <h2>Documents Needed</h2>
                <ul>
                  <li>PAN card of the buyer (or all buyers, if jointly purchasing)</li>
                  <li>Address proof matching the application</li>
                  <li>Details of the category of deductor (individual, firm, company, HUF)</li>
                </ul>
                <p>The process is straightforward and does not require the NRI seller&apos;s involvement; it is entirely the buyer&apos;s responsibility and can be completed independently, ideally before the sale agreement is finalized.</p>

                <h2>Timing: Apply Before, Not After</h2>
                <p>A TAN cannot be backdated once a payment has already been made to the NRI seller without TDS deduction. Apply for the TAN as soon as the transaction is seriously under negotiation, well before any advance or full payment is made. Buyers who make payments first and try to sort out TAN and TDS afterward risk becoming an <strong>assessee in default under Section 201 (now Section 398)</strong>, with interest and penalty exposure on top of the TDS itself.</p>

                <h2>What Happens Without a TAN</h2>
                <p>If a buyer pays an NRI seller without deducting TDS because they didn&apos;t realize a TAN was required, the buyer becomes personally liable for the full TDS amount, plus interest at 1% per month for non-deduction and a penalty equal to the tax not deducted under Section 271C. Getting the TAN in place first is a small administrative step that avoids a significant personal liability later. Sellers navigating the other side of this transaction can find guidance in our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory</Link> services.</p>

                <p>Once the TAN is in hand, use our <Link href="/tools/nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Property TDS Calculator</Link> to work out exactly how much to deduct and deposit. If the NRI seller expects their actual tax liability to be much lower than the statutory TDS, point them to our guide on the <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link>; it&apos;s the seller&apos;s responsibility to apply, but buyers benefit from a smoother transaction when it&apos;s in place before closing.</p>
              </div>

              <PostCTA
            heading="Buying property from an NRI seller?"
            description="We help buyers with TAN registration, TDS calculation, and Form 27Q filing so the transaction stays compliant from day one."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20TAN%20and%20TDS%20for%20buying%20property%20from%20an%20NRI."
            secondaryExternal
          />

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

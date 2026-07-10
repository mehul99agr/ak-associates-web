import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Repatriating NRI Property Sale Proceeds: Form 145/146 & USD 1 Million Scheme',
  description: 'How NRIs repatriate property sale proceeds from India under the new Income Tax Act 2025 — NRO account rules, Form 145 (ex-15CA), Form 146 (ex-15CB), and the USD 1 million scheme.',
  keywords: [
    'NRI repatriation property sale proceeds', 'form 145 146 NRI', 'form 15CA 15CB NRI property',
    'USD 1 million scheme NRI', 'NRO account repatriation limit', 'send money abroad after property sale NRI',
    'NRI FEMA repatriation rules',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-repatriation-property-sale-proceeds' },
  openGraph: {
    title: 'Repatriating NRI Property Sale Proceeds: Form 145/146 & USD 1 Million Scheme',
    description: 'NRO account rules, Form 145/146 CA certification, and the USD 1 million scheme for NRIs repatriating Indian property sale proceeds.',
    url: 'https://agrawalkhandelwal.com/blog/nri-repatriation-property-sale-proceeds',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Repatriating NRI Property Sale Proceeds: Form 145/146 & USD 1 Million Scheme',
  description: 'NRO account rules, Form 145 (ex-15CA), Form 146 (ex-15CB), and the USD 1 million scheme for NRIs repatriating Indian property sale proceeds under the new Income Tax Act 2025.',
  datePublished: '2026-07-11',
  dateModified: '2026-07-11',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-repatriation-property-sale-proceeds',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What replaced Form 15CA and 15CB for NRI remittances in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the new Income Tax Act 2025, effective April 1, 2026, Form 15CA was replaced by Form 145 and Form 15CB was replaced by Form 146. Form 145 is filed by the NRI on the Income Tax portal before the remittance; Form 146 is a Chartered Accountant certificate confirming tax compliance, required for remittances above ₹5 lakh.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can an NRI repatriate from property sale proceeds in a financial year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Up to USD 1 million per financial year can be repatriated from an NRO account, covering property sale proceeds along with any other NRO balances repatriated in the same year. Amounts beyond this limit require specific approval from the Reserve Bank of India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can property sale proceeds be sent directly abroad without going through an NRO account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Sale proceeds from an NRI\'s Indian property must first be credited to their NRO (Non-Resident Ordinary) account. Repatriation abroad happens as a separate, subsequent step from that NRO account, after tax compliance is established.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRIRepatriationBlog() {
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
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Repatriating NRI Property Sale Proceeds: Form 145/146 &amp; USD 1 Million Scheme
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>Selling the property is only half the process for an NRI. Getting the sale proceeds out of India legally requires clearing tax on the gain — through <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS and, where applicable, an ITR refund</Link> — and then following a specific FEMA-governed remittance process. Under the new Income Tax Act 2025, effective April 1, 2026, the forms involved changed. Here is the full sequence.</p>

                <h2>Step 1: Proceeds Land in the NRO Account</h2>
                <p>Sale consideration from an NRI&apos;s Indian property must first be credited to their <strong>NRO (Non-Resident Ordinary) account</strong>. It cannot be remitted directly abroad or credited to an NRE or foreign account at the time of sale. This is a FEMA requirement, not just a banking convenience — all subsequent tax certification and repatriation steps assume the funds are sitting in an NRO account.</p>

                <h2>Step 2: Settle the Tax Position First</h2>
                <p>Before initiating any remittance, the tax position on the capital gain needs to be resolved — either through TDS already deducted at the correct rate (ideally via a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link>), or through an ITR filed and any refund settled. Attempting to repatriate before this is resolved is the most common reason remittances get held up at the bank stage.</p>

                <h2>Step 3: File Form 145 (Replaces Form 15CA)</h2>
                <p>Form 145 is filed by the NRI on the Income Tax e-filing portal before the bank remittance is initiated. It declares the nature of the remittance and confirms the tax compliance position. This is a self-declaration step, filed directly by the NRI or their authorized representative.</p>

                <h2>Step 4: Obtain Form 146 (Replaces Form 15CB)</h2>
                <p>For remittances above ₹5 lakh, a practicing Chartered Accountant must issue Form 146 — a certificate confirming that applicable taxes have been paid or that TDS has been correctly deducted and deposited on the underlying transaction. The CA reviews the sale documentation, Form 16A, and the ITR or Form 13 certificate before issuing this.</p>

                <h2>Step 5: Submit to the Authorised Dealer (AD) Bank</h2>
                <p>The NRI (or their representative) submits the remittance request to the bank holding the NRO account, along with:</p>
                <ul>
                  <li>FEMA declaration confirming the source and purpose of funds</li>
                  <li>Sale deed and Form 16A (TDS certificate from the buyer)</li>
                  <li>Form 145 acknowledgment</li>
                  <li>Form 146 (CA certificate)</li>
                </ul>
                <p>The AD Bank reviews the documentation for compliance before processing the outward remittance — this is a mandatory checkpoint, not a formality, and banks routinely query incomplete submissions. Our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory team</Link> prepares Form 146 certificates and coordinates directly with AD Banks on behalf of NRI clients.</p>

                <h2>Step 6: The USD 1 Million Scheme Limit</h2>
                <p>Under RBI rules, an NRI can repatriate up to <strong>USD 1 million per financial year</strong> from their NRO account. This limit is cumulative — it covers property sale proceeds along with any other NRO balances repatriated in the same financial year, not a separate allowance per transaction. Amounts beyond this require specific RBI approval, which is a longer and less predictable process. For sales well above this threshold, plan the remittance across financial years where possible.</p>

                <h2>Realistic Timeline</h2>
                <p>Once Form 145, Form 146, and supporting documents are ready, banks typically take <strong>5 to 10 working days</strong> to process the remittance. The bottleneck is almost never the bank step itself — it&apos;s the tax settlement beforehand, particularly if a TDS refund or Form 13 certificate is still pending. Building this into the overall timeline from the day the sale agreement is signed avoids last-minute delays when the NRI actually wants the funds abroad.</p>

                <h2>Common Issues That Delay Repatriation</h2>
                <ul>
                  <li>Attempting to repatriate before the ITR refund or Form 13 process is complete</li>
                  <li>Sale proceeds credited to an NRE account instead of NRO, requiring correction before remittance can proceed</li>
                  <li>Missing or outdated Form 16A from the buyer</li>
                  <li>Underestimating how long the CA certification (Form 146) and AD Bank review take when documentation is incomplete</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help repatriating property sale proceeds?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 145/146 compliance and coordinate directly with AD Banks for NRI clients repatriating funds from India.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20repatriating%20property%20sale%20proceeds." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

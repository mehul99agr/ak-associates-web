import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Form 13 Lower TDS Certificate (FY 2026-27)',
  description: 'Apply for Form 13 (now Form 128) to cut TDS from 30% to your actual tax rate before selling property as an NRI. Step-by-step TRACES process, documents, AO jurisdiction, and 4-8 week timeline.',
  keywords: [
    'form 13 NRI', 'lower deduction certificate NRI property', 'section 197 NRI',
    'form 13 income tax NRI', 'NRI TDS certificate property sale', 'form 13 documents required',
    'form 13 processing time', 'jurisdictional assessing officer NRI',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-13-lower-deduction-certificate-nri' },
  openGraph: {
    title: 'Form 13 Lower TDS Certificate (FY 2026-27)',
    description: 'Apply for Form 13 (now Form 128) to cut TDS from 30% to your actual tax rate before selling property as an NRI. Step-by-step TRACES process, documents, and timeline.',
    url: 'https://agrawalkhandelwal.com/blog/form-13-lower-deduction-certificate-nri',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 13 Lower TDS Certificate (FY 2026-27)',
    description: 'Cut TDS from 30% to actual tax rate before selling property as an NRI. TRACES process, documents, and timeline.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Form 13 Lower Deduction Certificate for NRIs: Process, Documents & Timeline',
  description: 'Documents, jurisdictional AO, and processing timeline for an NRI Form 13 lower deduction certificate application under Section 197 for FY 2026-27.',
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
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/form-13-lower-deduction-certificate-nri',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Form 13 and who can apply for it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Form 13 (now Form 128 under the Income Tax Act 2025) is the application under Section 197 (now Section 395) of the Income Tax Act for a certificate authorizing a lower or nil rate of TDS deduction. Any taxpayer expecting their actual tax liability to be lower than the statutory TDS rate can apply, but it is especially valuable for NRIs selling property, since Section 195 (now Section 393(2)) TDS is deducted on the full sale consideration rather than the actual capital gain.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Form 13 take to process for an NRI property sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Form 13 applications for NRI property sales typically take 4 to 8 weeks from submission to certificate issuance, depending on the completeness of documentation and the workload of the jurisdictional Assessing Officer. NRIs should apply well before signing the sale agreement, not after receiving an advance payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Assessing Officer handles an NRI\'s Form 13 application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NRI Form 13 applications are handled by the Assessing Officer in the International Taxation charge that has jurisdiction over the NRI\'s PAN, not a local resident ward. Filing with the wrong jurisdiction is one of the most common causes of delay.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function Form13NRIBlog() {
  return (
    <>
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
                Form 13 Lower Deduction Certificate for NRIs: Process, Documents &amp; Timeline
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>When an NRI sells property in India, <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS under Section 195</Link> is deducted on the entire sale consideration, not the actual profit. For most NRI sellers, this means the buyer withholds far more than the real tax bill — often 5 to 10 times more. Form 13 is the mechanism that fixes this before the sale closes, instead of forcing the NRI to wait months for a refund.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Budget 2026 Update</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Under the Income Tax Act 2025 (effective April 1, 2026), Form 13 is renumbered <strong>Form 128</strong>, and the underlying provision — Section 197 — is renumbered <strong>Section 395</strong>. The application process, documents, and jurisdictional AO described below are unchanged; only the names differ. We use both terms since search volume is still concentrated on the old names.</p>
                </div>

                <h2>What Form 13 (Now Form 128) Actually Does</h2>
                <p>Form 13 is an application under Section 197 (now Section 395) of the Income Tax Act, filed with the Assessing Officer, requesting a certificate that authorizes the buyer to deduct TDS at a lower rate — or nil — instead of the full statutory rate. The AO reviews the NRI&apos;s actual computation of capital gains and, if satisfied, issues a certificate specifying the exact rate the buyer should apply. The buyer is legally protected when deducting at the certified rate, since it comes directly from the tax department.</p>

                <h2>Who Should Apply</h2>
                <p>Any NRI selling property where the actual capital gain is meaningfully smaller than the gross sale consideration should consider Form 13. This is especially relevant for properties held a long time, properties purchased at a low historical cost, or properties where significant improvement costs can be added to the acquisition cost. Without Form 13, the NRI recovers the excess only by filing an Indian ITR after the financial year ends and waiting for the refund cycle to complete. Our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory services</Link> cover this end-to-end, alongside ITR filing and repatriation.</p>

                <h2>Documents Required</h2>
                <ul>
                  <li>Computation of capital gains — sale consideration, cost of acquisition (indexed, where the pre-July 2024 option applies), cost of improvement, and the resulting tax payable</li>
                  <li>Copy of the sale agreement or agreement to sell, showing the agreed consideration and expected date of transfer</li>
                  <li>Purchase deed, allotment letter, or gift/inheritance documentation evidencing the original cost and date of acquisition</li>
                  <li>PAN card and prior years&apos; ITR acknowledgments, where available</li>
                  <li>Bank account details, usually the NRO account, for any future refund correspondence</li>
                  <li>Passport and visa/residency proof establishing NRI status for the relevant financial year</li>
                </ul>

                <h2>Step-by-Step Application Process</h2>
                <ol>
                  <li><strong>Prepare the capital gains computation:</strong> Work out the actual expected tax liability with supporting figures for cost of acquisition and improvement.</li>
                  <li><strong>File Form 13 online:</strong> Applications are submitted through the TRACES portal (the same portal used for TDS certificates and returns), attaching the documents above.</li>
                  <li><strong>Application is routed to the jurisdictional AO:</strong> NRI applications go to the Assessing Officer in the <strong>International Taxation charge</strong> covering the NRI&apos;s PAN — not a local resident ward. This is one of the most common points of confusion and delay.</li>
                  <li><strong>AO review and queries:</strong> The AO may raise queries or request additional evidence for the computation. Responding promptly keeps the timeline on track.</li>
                  <li><strong>Certificate issued:</strong> Once satisfied, the AO issues a certificate specifying the authorized lower (or nil) TDS rate, valid for the specific transaction and financial year.</li>
                  <li><strong>Share the certificate with the buyer:</strong> The buyer deducts TDS at the certified rate instead of the statutory rate shown in our <Link href="/tools/nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS calculator</Link>, and still files Form 27Q as usual.</li>
                </ol>

                <h2>How Long It Takes</h2>
                <p>Processing typically takes <strong>4 to 8 weeks</strong> from submission to certificate issuance, though this varies with the AO&apos;s workload and how complete the initial application is. Applications with a clean computation, verifiable acquisition cost documents, and no jurisdictional errors move faster. Because of this timeline, initiate the application as soon as the sale is under serious negotiation — not after signing the agreement or receiving an advance.</p>

                <h2>Common Reasons Applications Get Delayed</h2>
                <ul>
                  <li>Filing with the wrong jurisdiction — a local ward instead of the International Taxation AO handling the NRI&apos;s PAN</li>
                  <li>Incomplete or unverifiable cost of acquisition documentation, especially for older or inherited properties</li>
                  <li>Applying too close to the sale date, leaving no buffer for AO queries</li>
                  <li>Mismatch between the sale agreement consideration and the figure used in the computation</li>
                </ul>

                <p>If the certificate isn&apos;t obtained in time and TDS is deducted at the full statutory rate, the NRI can still recover the excess — see our guide on <Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>claiming a TDS refund on property sale</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help applying for a Form 13 certificate?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 13 applications end-to-end for NRI clients, from computation to certificate, well before the sale closes.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20a%20Form%2013%20application." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

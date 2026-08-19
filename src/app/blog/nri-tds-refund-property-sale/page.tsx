import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How NRIs Can Claim a TDS Refund on Property Sale in India',
  description: 'Step-by-step guide for NRIs claiming a TDS refund after selling Indian property — which ITR to file, documents needed, e-verification, refund timelines, and Section 244A interest for FY 2026-27.',
  keywords: [
    'NRI TDS refund property sale', 'TDS refund for NRI', 'how to claim TDS refund NRI',
    'NRI ITR filing property sale', 'NRI refund income tax India', 'form 16A NRI refund',
    'section 244A refund interest', 'NRI income tax refund process',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-tds-refund-property-sale' },
  openGraph: {
    title: 'How NRIs Can Claim a TDS Refund on Property Sale in India',
    description: 'Which ITR to file, documents needed, e-verification options, and refund timelines for NRIs recovering excess TDS on a property sale.',
    url: 'https://agrawalkhandelwal.com/blog/nri-tds-refund-property-sale',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How NRIs Can Claim a TDS Refund on Property Sale in India',
    description: 'Which ITR to file, documents needed, e-verification, and refund timelines for NRIs recovering excess TDS on a property sale.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How NRIs Can Claim a TDS Refund on Property Sale in India',
  description: 'ITR filing, documents, e-verification, and refund timelines for NRIs claiming back excess TDS deducted on a property sale in FY 2026-27.',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-tds-refund-property-sale',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which ITR form does an NRI file to claim a TDS refund on property sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most NRIs file ITR-2 to report capital gains from a property sale and claim the TDS credit. ITR-3 is required instead if the NRI also has business or professional income in India. The return must be filed even if the NRI has no other Indian income beyond this one sale.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an NRI TDS refund take to process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once the ITR is filed and verified, refunds are typically processed within a few weeks to a few months, depending on return complexity and whether the case is picked up for scrutiny. NRIs are entitled to statutory interest under Section 244A for the period of delay, which partially compensates for the wait.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an NRI avoid the TDS refund wait entirely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Applying for a Form 13 lower deduction certificate before the sale closes lets the buyer deduct TDS at closer to the actual tax liability from the start, instead of over-deducting and forcing the NRI through the refund process afterward.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRITDSRefundBlog() {
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
                How NRIs Can Claim a TDS Refund on Property Sale in India
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>Because <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on an NRI&apos;s property sale</Link> is deducted on the full sale consideration rather than the actual capital gain, most NRI sellers end up with far more tax withheld than they actually owe. If a Form 13 lower deduction certificate wasn&apos;t obtained before the sale, the only way to recover the difference is by filing an Indian income tax return and claiming a refund. Here is exactly how that process works.</p>

                <h2>Why NRIs End Up Overpaying TDS</h2>
                <p>Section 195 requires the buyer to deduct TDS on the gross sale value at the applicable rate (12.5% for long-term gains, 30% for short-term, plus surcharge and cess). If an NRI sells a property for ₹1.5 crore with an actual capital gain of ₹15 lakh, the buyer still deducts TDS on the full ₹1.5 crore — often several times the NRI&apos;s real tax liability. Recovering that gap requires either advance planning through Form 13, or a refund claimed after the fact through an ITR.</p>

                <h2>Step 1: Determine the Right ITR Form</h2>
                <p>Most NRIs use <strong>ITR-2</strong> to report capital gains, since it covers income from capital gains, house property, and other sources without requiring business income schedules. <strong>ITR-3</strong> applies instead if the NRI also has business or professional income in India. Filing is required for the financial year in which the sale occurred — even if the NRI has no other Indian income — because the refund can only be processed against a filed return.</p>

                <h2>Step 2: Gather the Right Documents</h2>
                <ul>
                  <li><strong>Form 16A</strong> (now Form 131) from the buyer, showing the TDS deducted and deposited under Form 27Q (now Form 144)</li>
                  <li>Sale deed and purchase deed (or cost of acquisition documentation for inherited/gifted property)</li>
                  <li>Computation of capital gains, including any cost of improvement</li>
                  <li>Bank statements for the NRO account where refunds will be credited</li>
                  <li>Passport and residency details confirming NRI status for the year</li>
                </ul>

                <h2>Step 3: File and Verify the Return</h2>
                <p>The return must be filed by the applicable deadline — 31 July for most NRIs, or 31 October if reporting foreign assets or where an audit applies. Verification is the step many NRIs get stuck on: without an Aadhaar-linked Indian mobile number, Aadhaar OTP verification isn&apos;t available. NRIs typically verify instead using a <strong>Digital Signature Certificate (DSC)</strong> or an <strong>Electronic Verification Code (EVC)</strong> generated through a linked Indian bank account. An unverified return is treated as not filed, so this step cannot be skipped. Our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory team</Link> handles ITR filing and e-verification for NRI clients remotely.</p>

                <h2>Step 4: Track and Receive the Refund</h2>
                <p>Once verified and processed, refunds are credited directly to the Indian bank account specified in the return — usually the NRO account the sale proceeds were deposited into. Processing time varies with return complexity, but typically runs from a few weeks up to a few months. Importantly, <strong>Section 244A</strong> entitles the NRI to statutory interest on the refund amount for the period of delay, which is automatically computed and included in the refund.</p>

                <h2>Refund Route vs Form 13: Which Is Better?</h2>
                <p>The refund route works, but it ties up capital for months and depends on smooth processing. The <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> route, applied for before the sale closes, avoids this entirely by having the buyer deduct closer to the actual liability from day one. As a rule of thumb: if the gap between expected TDS and actual tax liability exceeds a few lakh rupees, and there is enough lead time before the sale, Form 13 is almost always the better option. The refund route remains the fallback when TDS has already been deducted at the full rate — for example, when a sale closes faster than expected or a certificate wasn&apos;t applied for in time.</p>

                <h2>Common Mistakes That Delay Refunds</h2>
                <ul>
                  <li>Not filing an ITR at all because the NRI assumes there is no other Indian income to report</li>
                  <li>Filing the return but forgetting to e-verify it, which leaves it legally unprocessed</li>
                  <li>Mismatches between the TDS shown in Form 16A and the amount claimed in the return</li>
                  <li>Providing a bank account for refund credit that is not linked to the PAN or is not an active NRO/NRE account</li>
                </ul>

                <p>If the sale proceeds also need to leave India after the refund is settled, see our guide on <Link href="/blog/nri-repatriation-property-sale-proceeds" style={{ color: 'var(--primary)', fontWeight: 600 }}>repatriating NRI property sale proceeds</Link> under Form 145/146.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help claiming your NRI TDS refund?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We file ITRs and track refunds for NRI clients across the UAE, US, UK, Singapore, and Australia.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20claiming%20a%20TDS%20refund%20on%20property%20sale." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TDS on NRI Property Sale India: Buyer\'s Complete Guide (2026)',
  description: 'What TDS to deduct when buying property from an NRI in India — Section 195 rates, Form 26QB filing, lower deduction certificate (Form 13), and repatriation under the new Income Tax Act 2025.',
  keywords: [
    'TDS on NRI property sale India', 'TDS when buying property from NRI', 'section 195 NRI property',
    'form 26QB NRI', 'lower TDS certificate NRI property', 'NRI property sale tax India',
    'TDS rate NRI property 2026', 'form 13 NRI property', 'NRI property repatriation India',
    'buy property from NRI India TDS',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-on-nri-property-sale-india' },
  openGraph: {
    title: 'TDS on NRI Property Sale India: Buyer\'s Complete Guide (2026)',
    description: 'TDS rates, deduction process, Form 26QB, lower deduction certificate, and repatriation rules when buying Indian property from an NRI.',
    url: 'https://agrawalkhandelwal.com/blog/tds-on-nri-property-sale-india',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TDS on NRI Property Sale India: Buyer\'s Complete Guide (2026)',
  description: 'TDS rates, Form 26QB filing, lower deduction certificate, and repatriation rules under Income Tax Act 2025 when buying Indian property from an NRI.',
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/tds-on-nri-property-sale-india',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the TDS rate when buying property from an NRI in India in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For long-term capital gains (property held more than 2 years), TDS is 12.5% without indexation (per Finance Act 2024, effective for transfers after July 23, 2024), plus applicable surcharge and 4% cess. For short-term capital gains (held 2 years or less), TDS is 30% plus surcharge plus cess. Critically, TDS is deducted on the entire sale consideration — not just the profit. This often results in TDS far exceeding the actual tax liability, which the NRI recovers by filing an Indian ITR or applying for a lower deduction certificate in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an NRI get TDS deducted at a lower rate on property sale in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An NRI seller can apply to the Assessing Officer for a Lower or Nil TDS Certificate under Section 197 using Form 13, before the sale is concluded. If granted, the buyer deducts at the AO-specified rate instead of the full statutory rate. This is valuable when the actual capital gain is much smaller than the gross sale consideration — for example, when the property has a high indexed cost. Form 13 typically takes 4 to 8 weeks to process, so NRIs should initiate it well before signing the sale agreement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the buyer fails to deduct TDS when buying property from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The buyer becomes an assessee in default under Section 201 and is personally liable to pay the full TDS amount that should have been deducted, plus interest at 1.5% per month from the date of payment to the NRI. A penalty equal to the TDS amount can also be levied. The buyer\'s PAN can be flagged by the Income Tax department, which may affect future property registrations and bank approvals. The NRI seller\'s tax obligation is separate — non-deduction by the buyer does not eliminate the NRI\'s liability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does an NRI repatriate property sale proceeds from India in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the new Income Tax Act 2025 (effective April 1, 2026), the NRI must file Form 145 (which replaced Form 15CA) on the Income Tax portal before the remittance, and obtain Form 146 (which replaced Form 15CB) — a CA certificate confirming tax compliance — for remittances above ₹5 lakh. Sale proceeds first go to the NRI\'s NRO account. From the NRO account, up to USD 1 million per financial year can be repatriated after satisfying the Authorised Dealer Bank with tax payment confirmation, Form 145, and Form 146. FEMA compliance is required throughout.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function TDSNRIPropertyBlog() {
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
                TDS on NRI Property Sale India: Buyer&apos;s Complete Guide (2026)
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 1, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>When an Indian resident buys property from a Non-Resident Indian, the obligation to deduct tax at source falls on the <strong>buyer</strong>, not the seller. Most buyers discover this only after the transaction — at which point they are already personally liable for the TDS that should have been deducted, plus interest and penalty. This guide covers the rates, the filing process, and the most effective way to reduce the TDS burden before the sale closes.</p>

                <h2>Why the Buyer Bears the TDS Obligation</h2>
                <p>Section 195 of the Income Tax Act requires any person making a payment to a non-resident that constitutes income in the non-resident&apos;s hands to deduct tax at source before remitting the amount. Property sale proceeds are capital gains income for the NRI seller. The buyer is the payer — so the TDS obligation is entirely theirs, with no minimum threshold. This contrasts with Section 194IA (resident seller), which applies only above ₹50 lakh. With an NRI seller, every rupee of consideration is subject to TDS deduction.</p>

                <h2>TDS Rates Applicable in 2026</h2>
                <p>The rate depends on the property&apos;s holding period in the NRI&apos;s hands:</p>
                <ul>
                  <li><strong>Long-Term Capital Gains (held more than 2 years):</strong> 12.5% without indexation, introduced by Finance Act 2024 for transfers after July 23, 2024. For properties acquired before that date, the NRI may opt for the lower of 20% with indexation or 12.5% without. Add applicable surcharge (10% for gains between ₹50L and ₹1Cr; 15% for ₹1–2Cr; 25% for ₹2–5Cr; 37% above ₹5Cr) and 4% health and education cess.</li>
                  <li><strong>Short-Term Capital Gains (held 2 years or less):</strong> 30% plus applicable surcharge plus 4% cess.</li>
                </ul>
                <p>The deduction is on the <strong>entire sale consideration</strong>, not just the profit. If an NRI sells a ₹1.5 crore property with an actual gain of ₹15 lakh, the buyer must deduct TDS on the full ₹1.5 crore. The NRI recovers the excess by filing an income tax return in India — or avoids it entirely by obtaining a lower deduction certificate before the sale.</p>

                <h2>Step-by-Step: Deducting and Depositing TDS</h2>
                <ol>
                  <li><strong>Obtain a TAN:</strong> The buyer must apply for a Tax Deduction Account Number on the NSDL portal before making any payment. TAN is free and issued within a few days. Form 26QB cannot be filed without one.</li>
                  <li><strong>Calculate the TDS amount:</strong> Apply the correct rate to the full sale consideration. If the transaction involves multiple instalments, TDS must be deducted on each instalment at the time of payment.</li>
                  <li><strong>Withhold and deposit:</strong> Retain the TDS amount from the payment made to the NRI.</li>
                  <li><strong>File Form 26QB:</strong> This is the TDS challan-cum-return for Section 195. File online on the TIN-NSDL portal within 30 days from the end of the month in which TDS was deducted. If TDS was deducted in July, the deadline is August 31.</li>
                  <li><strong>Issue Form 16B:</strong> Download Form 16B (TDS certificate) from TRACES within 15 days of filing Form 26QB, and provide it to the NRI seller. The NRI needs Form 16B to claim the TDS credit in their Indian ITR.</li>
                </ol>

                <h2>Lower Deduction Certificate (Form 13): The NRI&apos;s Best Option</h2>
                <p>Since TDS is computed on the full sale price and not the net gain, NRIs whose actual taxable gain is significantly smaller than the consideration often face substantial over-deduction. The remedy is to apply for a <strong>Lower or Nil TDS Certificate under Section 197</strong> using Form 13, before the sale is finalized.</p>
                <p>The NRI submits a computation of the actual capital gain — cost of acquisition (indexed if applicable), improvement costs, and the resultant tax — to the Assessing Officer with supporting documents. If satisfied, the AO issues a certificate authorizing deduction at a specified lower rate. The buyer then deducts at that rate instead of the statutory rate, eliminating the need for the NRI to wait months for a large refund.</p>
                <p>Processing typically takes 4 to 8 weeks. Initiate well before executing the sale agreement. Our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory team</Link> handles Form 13 applications end-to-end.</p>

                <h2>Repatriation Under the New Income Tax Act 2025</h2>
                <p>The new Income Tax Act 2025 (effective April 1, 2026) replaced the earlier remittance forms:</p>
                <ul>
                  <li><strong>Form 145</strong> (replaces Form 15CA): Filed by the NRI on the Income Tax portal before initiating the bank remittance. Declares the nature of the remittance and confirms tax compliance.</li>
                  <li><strong>Form 146</strong> (replaces Form 15CB): Issued by a Chartered Accountant certifying that taxes have been paid or TDS has been correctly deducted and deposited. Required for remittances above ₹5 lakh.</li>
                  <li><strong>NRO account and repatriation limit:</strong> Sale proceeds land in the NRI&apos;s NRO (Non-Resident Ordinary) account. Up to <strong>USD 1 million per financial year</strong> may be repatriated from the NRO account after the AD Bank reviews tax payment confirmation, Form 145, and Form 146.</li>
                </ul>

                <h2>Common Mistakes That Create Buyer Liability</h2>
                <ul>
                  <li>Deducting TDS only on the estimated &quot;profit&quot; instead of the full consideration</li>
                  <li>Missing the 30-day Form 26QB deadline — interest accrues at 1.5% per month from the date TDS should have been deducted</li>
                  <li>Assuming the NRI will handle TDS — the buyer&apos;s obligation under Section 195 cannot be delegated</li>
                  <li>Not obtaining a TAN before the transaction date</li>
                  <li>Forgetting to issue Form 16B — without it, the NRI cannot claim TDS credit in their ITR</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with NRI property TDS or sale proceeds repatriation?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 13 applications, Form 26QB filing, and Form 145/146 compliance for NRI property transactions across India.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20NRI%20property%20TDS." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
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

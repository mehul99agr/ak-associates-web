import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRO Account Repatriation: Rules, USD 1 Million Limit & Step-by-Step Process (2026)',
  description: 'How to repatriate money from an NRO account: the USD 1 million annual limit, Form 145/146 process, documents required, TDS clearance, and common bank rejections. Updated for Income Tax Act 2025.',
  keywords: [
    'NRO repatriation', 'NRO account repatriation', 'repatriation from NRO account',
    'NRO repatriation limit', 'USD 1 million NRO', 'NRO account repatriation rules',
    'NRO to NRE transfer', 'NRO repatriation documents', 'form 15CA 15CB NRO',
    'NRO account repatriable', 'is NRO account repatriable', 'NRO non repatriable',
    'nro repatriation process', 'send money from NRO abroad',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nro-account-repatriation-rules-process' },
  openGraph: {
    title: 'NRO Account Repatriation: Rules, Limits & Step-by-Step Process (2026)',
    description: 'USD 1 million limit, Form 145/146, documents, TDS clearance, and common bank rejections for NRO repatriation.',
    url: 'https://agrawalkhandelwal.com/blog/nro-account-repatriation-rules-process',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRO Repatriation: USD 1M Limit, Process & Documents (2026)',
    description: 'Complete guide to sending money from your NRO account abroad. Rules, limits, forms, and bank requirements.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NRO Account Repatriation: Rules, USD 1 Million Limit & Step-by-Step Process (2026)',
  description: 'How to repatriate money from an NRO account: the USD 1 million annual limit, Form 145/146 process, documents required, TDS clearance, and common bank rejections.',
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nro-account-repatriation-rules-process',
}

const faqs: [string, string][] = [
  [
    'Is an NRO account repatriable?',
    'Yes, but with limits. An NRO account allows repatriation of up to USD 1 million per financial year (April to March), cumulative across all NRO accounts and all types of NRO income or balances. This covers current income (rent, interest, dividends) as well as capital receipts (property sale proceeds, inheritance, matured deposits). Amounts beyond USD 1 million in a single year require specific RBI approval. This is different from an NRE account, where the entire balance is freely repatriable without any limit.',
  ],
  [
    'What is the USD 1 million NRO repatriation limit?',
    'NRIs can repatriate up to USD 1 million per financial year from their NRO account, subject to applicable Indian taxes being paid and Form 145/146 (earlier Form 15CA/15CB) being filed. This is a cumulative cap across all NRO repatriations in the year, not per transaction. It covers rent, interest, dividends, property sale proceeds, inherited amounts, and any other NRO balance. The limit is set by RBI under FEMA regulations.',
  ],
  [
    'Do I need Form 15CA and 15CB for NRO repatriation?',
    'Yes. Under the new Income Tax Act 2025, Form 15CA is now Form 145 and Form 15CB is now Form 146. Form 145 is filed online by the NRI on the Income Tax portal before the remittance. Form 146 is a CA certificate required for remittances above Rs 5 lakh, certifying that applicable Indian taxes have been paid or deducted. Your bank will not process the remittance without these forms.',
  ],
  [
    'Can I transfer money from NRO to NRE account?',
    'Yes. You can transfer funds from NRO to NRE within the USD 1 million annual limit, subject to TDS clearance. Once the funds are in the NRE account, they become freely repatriable without further documentation. This NRO-to-NRE transfer itself counts toward the USD 1 million limit and requires Form 145/146 compliance, just like a direct remittance abroad.',
  ],
  [
    'What documents does the bank need for NRO repatriation?',
    'Banks typically require: Form 145 acknowledgment (filed on the Income Tax portal), Form 146 CA certificate (for amounts above Rs 5 lakh), proof of source of funds (sale deed, rent agreement, FD maturity certificate, etc.), Form 16A or TDS certificate showing taxes paid, ITR acknowledgment for the relevant year (if applicable), PAN card copy, and a FEMA declaration. Some banks also ask for an undertaking that the cumulative annual repatriation does not exceed USD 1 million.',
  ],
  [
    'How long does NRO repatriation take?',
    'Once all documentation is submitted to the bank, the remittance typically takes 5 to 10 working days. The most common delay is incomplete documentation, particularly missing Form 145/146 or TDS certificates. If you are repatriating property sale proceeds, factor in the time for Form 13 processing (4-8 weeks) or ITR refund (several months) before the repatriation step itself.',
  ],
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRORepatriationBlog() {
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
                NRO Account Repatriation: Rules, Limits, and the Step-by-Step Process
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 16, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>NRO accounts are repatriable, but limited to <strong>USD 1 million per financial year</strong> (cumulative across all NRO accounts).</li>
                    <li style={{ marginBottom: '0.4rem' }}>You must file <strong>Form 145</strong> (formerly 15CA) and get a <strong>Form 146</strong> (formerly 15CB) CA certificate before the bank will process any remittance above Rs 5 lakh.</li>
                    <li style={{ marginBottom: '0.4rem' }}>All applicable Indian taxes (TDS, advance tax, or ITR self-assessment tax) must be settled before the bank releases the funds.</li>
                    <li style={{ marginBottom: 0 }}>The process takes 5-10 working days at the bank stage, but allow weeks or months if you need Form 13 or an ITR refund first.</li>
                  </ul>
                </div>

                <p>The most common question we get from NRI clients is not about tax rates or filing deadlines. It is: &quot;How do I actually get my money out of India?&quot; Whether you have rental income accumulating in an NRO account, proceeds from a property sale, an inheritance, or matured fixed deposits, the repatriation process is the same, and it trips up NRIs who expect it to work like a simple bank transfer.</p>

                <h2>Is an NRO Account Repatriable?</h2>
                <p>Yes. An NRO account is repatriable, subject to two constraints: a <strong>USD 1 million annual cap</strong> and <strong>tax compliance certification</strong>. This is the key difference from an <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE account</Link>, where the entire balance is freely repatriable at any time without documentation or limits.</p>
                <p>The USD 1 million limit is set by RBI under FEMA regulations and is cumulative per financial year (April to March). It covers all types of NRO outflows: property sale proceeds, rental income, interest, dividends, inherited amounts, and any other balance. If you repatriated Rs 3 crore from a property sale in June, that counts against the same Rs 8.3 crore (approximate USD 1 million equivalent) annual cap when you try to send rental income in December.</p>

                <h2>What Can Be Repatriated from an NRO Account</h2>
                <ul>
                  <li><strong>Current income:</strong> Rent, interest on NRO deposits, dividends from Indian companies, pension</li>
                  <li><strong>Capital receipts:</strong> Property sale proceeds, matured fixed deposits, repayment of loans</li>
                  <li><strong>Inherited amounts:</strong> Funds received through inheritance or succession, including from a resident Indian</li>
                  <li><strong>Gift proceeds:</strong> Amounts received as gifts, subject to gift tax provisions</li>
                </ul>
                <p>All of the above are subject to the USD 1 million annual limit and require Form 145/146 compliance.</p>

                <h2>Step-by-Step: How to Repatriate from an NRO Account</h2>
                <ol>
                  <li>
                    <strong>Settle the tax position.</strong> This is the prerequisite that causes the most delays. Ensure that:
                    <ul>
                      <li>TDS has been correctly deducted on the income (30% on rent and NRO interest, 12.5-30% on property capital gains under <Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195</Link>)</li>
                      <li>If TDS was over-deducted (common in property sales), either a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 certificate</Link> was obtained before the transaction, or an ITR has been filed to <Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>claim the refund</Link></li>
                      <li>There are no outstanding tax demands against your PAN</li>
                    </ul>
                  </li>
                  <li>
                    <strong>File Form 145 (formerly 15CA).</strong> This is an online declaration filed by the NRI (or their authorised representative) on the Income Tax e-filing portal before initiating the bank remittance. It declares the nature of the payment, the amount, the applicable tax provision, and confirms compliance.
                  </li>
                  <li>
                    <strong>Obtain Form 146 (formerly 15CB).</strong> This is a certificate issued by a Chartered Accountant, required for remittances above Rs 5 lakh. The CA certifies that applicable Indian taxes have been paid or correctly deducted and deposited. The CA reviews TDS certificates (Form 16A/131), ITR acknowledgments, and the nature of the remittance before signing off.
                  </li>
                  <li>
                    <strong>Submit to your Authorised Dealer (AD) Bank.</strong> Along with Form 145 acknowledgment and Form 146, the bank typically requires:
                    <ul>
                      <li>Source documents: sale deed, rent agreement, FD maturity advice, succession certificate, or gift deed</li>
                      <li>TDS certificate (Form 16A/131 or Form 16B)</li>
                      <li>ITR acknowledgment for the relevant year (if applicable)</li>
                      <li>PAN card copy</li>
                      <li>FEMA declaration</li>
                      <li>An undertaking that cumulative NRO repatriation does not exceed USD 1 million in the financial year</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Bank processes the remittance.</strong> Once the bank is satisfied with the documentation, the funds are remitted to the NRI&apos;s foreign bank account, typically within 5 to 10 working days.
                  </li>
                </ol>

                <h2>NRO to NRE Transfer</h2>
                <p>Instead of remitting directly abroad, some NRIs prefer to transfer funds from NRO to NRE first. Once in the NRE account, the funds are freely repatriable without further documentation. However, the NRO-to-NRE transfer itself counts toward the USD 1 million annual limit and requires the same Form 145/146 compliance. It is not a shortcut around the documentation requirements; it simply changes the destination.</p>

                <h2>Current Income vs Capital Repatriation</h2>
                <p>RBI regulations distinguish between current income (rent, interest, dividends, pension) and capital receipts (property sale proceeds, inheritance). Both fall within the USD 1 million annual limit. The documentation differs slightly:</p>
                <ul>
                  <li><strong>Current income:</strong> Form 145/146 with TDS certificates. Generally straightforward since TDS is usually deducted at source by the tenant, bank, or company.</li>
                  <li><strong>Capital receipts (property sale):</strong> Form 145/146 plus sale deed, capital gains computation, Form 13 certificate or ITR showing refund, and proof of original acquisition. More documentation-intensive and typically takes longer.</li>
                  <li><strong>Inheritance:</strong> Form 145/146 plus succession certificate or probate, death certificate, and relationship proof. No TDS applies on inherited amounts themselves, but any income earned on inherited assets after receipt is taxable.</li>
                </ul>

                <h2>Common Reasons Banks Reject NRO Repatriation Requests</h2>
                <ul>
                  <li><strong>Missing or incomplete Form 145/146:</strong> The most common rejection. Banks will not process without these forms.</li>
                  <li><strong>TDS certificates not matching:</strong> The amount in Form 146 must reconcile with the TDS certificates provided. Any mismatch triggers a query.</li>
                  <li><strong>Exceeding USD 1 million cap:</strong> If cumulative repatriation for the year already used up the limit, additional remittances are rejected unless RBI approval is obtained.</li>
                  <li><strong>Outstanding tax demands:</strong> If the Income Tax portal shows pending demands against the NRI&apos;s PAN, banks may hold the remittance until the demand is resolved.</li>
                  <li><strong>Source of funds unclear:</strong> Banks need a clear paper trail from origin (sale deed, FD receipt, rent agreement) to NRO credit to remittance request.</li>
                  <li><strong>PAN not active:</strong> An inoperative PAN (due to Aadhaar non-linking, though NRIs are generally exempt from Aadhaar-PAN linking) can cause processing failures.</li>
                </ul>

                <h2>Beyond USD 1 Million: RBI Approval</h2>
                <p>If you need to repatriate more than USD 1 million in a single financial year, you need prior approval from the Reserve Bank of India. This is uncommon in practice but does arise with high-value property sales or large inherited estates. The application is made through your AD Bank and RBI considers it on a case-by-case basis. Processing can take several weeks.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help repatriating funds from your NRO account?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 145/146 certification, TDS compliance, and end-to-end repatriation documentation for NRI clients across India.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqs.map(([q, a], i) => (
                    <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA Repatriation Limits Explained</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-repatriation-property-sale-proceeds" style={{ color: 'var(--primary)', fontWeight: 600 }}>Repatriating NRI Property Sale Proceeds</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale: Complete Guide</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13: How to Get a Lower TDS Certificate</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

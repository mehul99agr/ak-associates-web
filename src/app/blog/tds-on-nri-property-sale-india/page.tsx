import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TDS on NRI Property Sale (FY 2026-27)',
  description: 'Complete TDS guide for NRI property sales in FY 2026-27: rate table with surcharge slabs, buyer TAN process, Form 27Q filing, Form 13 lower deduction certificate, TDS refund claims, and repatriation under the new Income Tax Act 2025.',
  keywords: [
    'TDS on NRI property sale India', 'TDS when buying property from NRI', 'section 195 NRI property',
    'form 27Q NRI', 'lower TDS certificate NRI property', 'NRI property sale tax India',
    'TDS rate NRI property FY 2026-27', 'form 13 NRI property', 'NRI property repatriation India',
    'buy property from NRI India TDS', 'NRI TDS refund property sale', 'TAN for buying property from NRI',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/tds-on-nri-property-sale-india' },
  openGraph: {
    title: 'TDS on NRI Property Sale (FY 2026-27)',
    description: 'Rate table, buyer TAN process, Form 27Q filing, Form 13 lower deduction certificate, TDS refund claims, and repatriation rules for NRI property sales in FY 2026-27.',
    url: 'https://agrawalkhandelwal.com/blog/tds-on-nri-property-sale-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDS on NRI Property Sale (FY 2026-27)',
    description: 'Rate table, buyer TAN process, Form 27Q filing, Form 13 certificate, TDS refund claims, and repatriation rules for NRI property sales.',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TDS on NRI Property Sale (FY 2026-27)',
  description: 'Rate table with surcharge slabs, buyer TAN process, Form 27Q filing, Form 13 lower deduction certificate, TDS refund claims, and repatriation under the new Income Tax Act 2025 for NRI property sales in FY 2026-27.',
  datePublished: '2026-07-01',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/tds-on-nri-property-sale-india',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the TDS rate on sale of property by NRI for FY 2026-27?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For FY 2026-27, TDS on property sold by an NRI is 12.5% (long-term, held over 2 years) or 30% (short-term, held 2 years or less), plus applicable surcharge and 4% health and education cess. Because surcharge is added on top of the base rate and cess is added on top of both, the effective TDS rate ranges from about 13% for smaller long-term sales up to roughly 42.74% for large short-term sales above ₹5 crore. The deduction is always calculated on the full sale consideration, not the profit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the buyer need TAN when buying from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Unlike buying from a resident seller (Section 194-IA, where the buyer files Form 26QB using just a PAN), buying from an NRI falls under Section 195 (now Section 393(2) under the Income Tax Act 2025), which requires the buyer to obtain a Tax Deduction Account Number (TAN) before deducting any tax. Without a TAN, the buyer cannot deposit the TDS correctly or file the mandatory Form 27Q (now Form 144) return. TAN is applied for on the Protean (NSDL) portal using Form 49B and is typically issued within 7 to 10 working days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the TAN requirement being scrapped for NRI property sales in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — this is a common misreading of Budget 2026 circulating online. Budget 2026 does introduce a PAN-based mechanism (Form 141) that removes the TAN requirement for buyers purchasing property, but that change is explicitly restricted to resident sellers, effective October 1, 2026. Where the seller is an NRI, Form 141 does not apply. The buyer must still obtain a TAN and comply under Section 195 (now Section 393(2)), filing Form 27Q (now Form 144), with no confirmed end date for that requirement. Don\'t skip TAN registration for an NRI purchase based on "TAN scrapped" headlines.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can an NRI claim TDS refund on property sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An NRI claims a TDS refund by filing an Indian income tax return (ITR-2 or ITR-3) for the financial year of sale, even if they have no other Indian income. The return reports the actual capital gain, claims credit for the TDS shown in Form 16A (now Form 131), and any excess is refunded to a bank account in India, usually the NRO account. Refunds also carry statutory interest under Section 244A for the period of delay. NRIs who expect a large gap between TDS deducted and actual liability can avoid the wait entirely by applying for a Form 13 (now Form 128) lower deduction certificate before the sale closes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an NRI get TDS deducted at a lower rate on property sale in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An NRI seller can apply to the Assessing Officer for a Lower or Nil TDS Certificate under Section 197 (now Section 395) using Form 13 (now Form 128), before the sale is concluded. If granted, the buyer deducts at the AO-specified rate instead of the full statutory rate. This is valuable when the actual capital gain is much smaller than the gross sale consideration — for example, when the property has a high indexed cost. Form 13 typically takes 4 to 8 weeks to process, so NRIs should initiate it well before signing the sale agreement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the buyer fails to deduct TDS when buying property from an NRI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The buyer becomes an assessee in default under Section 201 (now Section 398) and is personally liable to pay the full TDS amount that should have been deducted, plus interest — 1% per month for the period of non-deduction and 1.5% per month for any period where TDS was deducted but not deposited. A penalty equal to the TDS amount can also be levied under Section 271C, and willful non-deposit can attract prosecution under Section 276B. The buyer\'s PAN can be flagged by the Income Tax department, which may affect future property registrations and bank approvals. The NRI seller\'s tax obligation is separate — non-deduction by the buyer does not eliminate the NRI\'s liability.',
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
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>
              &larr; Back to Insights
            </Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                TDS on NRI Property Sale in India (FY 2026-27): Rates, Form 27Q &amp; Refund Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 1, 2026</span>
                <span aria-hidden>•</span>
                <span>Updated July 11, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <p>When an Indian resident buys property from a Non-Resident Indian, the obligation to deduct tax at source falls on the <strong>buyer</strong>, not the seller. Most buyers discover this only after the transaction — at which point they are already personally liable for the TDS that should have been deducted, plus interest and penalty. For the NRI seller, the same transaction usually means paying far more TDS upfront than the actual tax works out to. This guide covers both sides for FY 2026-27: the buyer&apos;s rates, TAN and filing obligations, and the NRI seller&apos;s options for cutting the TDS burden or claiming it back.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Budget 2026 Update</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The Income Tax Act 2025 (effective April 1, 2026) renumbers the provisions in this guide: Section 195 is now <strong>Section 393(2)</strong>, Form 13 is now <strong>Form 128</strong>, Form 27Q is now <strong>Form 144</strong>, Form 16A is now <strong>Form 131</strong>, and Section 197 is now <strong>Section 395</strong>. We use both names below since search volume is still on the old terms.</p>
                  <p style={{ margin: '0.75rem 0 0' }}><strong>One correction worth flagging:</strong> several sources are reporting that Budget 2026 &quot;scraps the TAN requirement&quot; for NRI property sales from October 1, 2026. Based on our reading of the amendment, this is incorrect as applied to NRI sellers. The new PAN-based mechanism (Form 141) that removes the TAN requirement from October 1, 2026 is explicitly restricted to <strong>resident sellers</strong>. Where the seller is an NRI, Form 141 does not apply — the buyer continues to need a TAN and must file under Section 393(2)/Form 144, with no confirmed end date for that requirement. Don&apos;t skip TAN registration for an NRI purchase based on the &quot;TAN scrapped&quot; headlines circulating online.</p>
                </div>

                <h2>Why the Buyer Bears the TDS Obligation</h2>
                <p>Section 195 (now Section 393(2) under the Income Tax Act 2025) of the Income Tax Act requires any person making a payment to a non-resident that constitutes income in the non-resident&apos;s hands to deduct tax at source before remitting the amount. Property sale proceeds are capital gains income for the NRI seller. The buyer is the payer — so the TDS obligation is entirely theirs, with no minimum threshold. This contrasts with Section 194-IA (resident seller), which applies only above ₹50 lakh. With an NRI seller, every rupee of consideration is subject to TDS deduction, regardless of the sale value.</p>

                <h2>TDS Rate Table for FY 2026-27</h2>
                <p>TDS on an NRI&apos;s property sale is computed on the full sale consideration, using the base rate for the holding period plus surcharge (based on the consideration band) plus 4% cess:</p>
                <table>
                  <thead>
                    <tr>
                      <th>Sale Consideration Band</th>
                      <th>Base Rate</th>
                      <th>Surcharge</th>
                      <th>Effective Rate (LTCG)</th>
                      <th>Effective Rate (STCG)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Up to ₹50 lakh</td><td>12.5% / 30%</td><td>Nil</td><td>13.00%</td><td>31.20%</td></tr>
                    <tr><td>₹50 lakh – ₹1 crore</td><td>12.5% / 30%</td><td>10%</td><td>14.30%</td><td>34.32%</td></tr>
                    <tr><td>₹1 crore – ₹2 crore</td><td>12.5% / 30%</td><td>15%</td><td>14.95%</td><td>35.88%</td></tr>
                    <tr><td>₹2 crore – ₹5 crore</td><td>12.5% / 30%</td><td>25%</td><td>16.25%</td><td>39.00%</td></tr>
                    <tr><td>Above ₹5 crore</td><td>12.5% / 30%</td><td>37%</td><td>17.81%</td><td>42.74%</td></tr>
                  </tbody>
                </table>
                <p><strong>LTCG (Long-Term Capital Gains)</strong> applies when the property was held more than 2 years — 12.5% without indexation, per Finance Act 2024, for transfers after July 23, 2024. For properties acquired before that date, the NRI may opt for the lower of 20% with indexation or 12.5% without. <strong>STCG (Short-Term Capital Gains)</strong> applies when held 2 years or less, taxed at 30%. Remember: these rates apply to the entire sale consideration, not the profit — if an NRI sells a ₹1.5 crore property with an actual gain of ₹15 lakh, the buyer still deducts TDS on the full ₹1.5 crore.</p>

                <h2>TDS vs Stamp Duty Value: Which Amount Matters?</h2>
                <p><Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195</Link> TDS is deducted on the <strong>actual sale consideration</strong> — the amount actually paid or payable to the NRI seller — not on the stamp duty valuation used by the sub-registrar for registration purposes. This is a common point of confusion because Section 194-IA (resident sellers) and Form 26QB reference stamp duty value in certain contexts, and buyers sometimes assume the same rule carries over.</p>
                <p>It doesn&apos;t change the buyer&apos;s deduction, but it does affect the NRI&apos;s final tax bill: under Section 50C/56(2)(x), if the stamp duty value exceeds the actual consideration by more than the permitted tolerance (currently 10%), the higher stamp duty value is deemed the sale consideration for computing the NRI&apos;s actual capital gain. That higher figure — not the amount the buyer paid — is what should go into the Form 13 computation and the eventual ITR, since the tax department will use it regardless.</p>

                <h2>Does a DTAA Reduce TDS on NRI Property Sale?</h2>
                <p>No — and this is worth stating plainly because it&apos;s one of the most common misconceptions we hear from NRI clients in the UAE, US, and UK. Most Double Taxation Avoidance Agreements give India, as the country where the property is situated, an unrestricted right to tax gains on immovable property. Unlike interest or dividend income — where a DTAA often caps withholding at 10–15% on production of a Tax Residency Certificate and Form 10F — capital gains on Indian real estate are typically <strong>not</strong> reduced by treaty benefits.</p>
                <p>In practice, this means a Tax Residency Certificate has no effect on the TDS rate for a property sale. The only legitimate route to reduce TDS below the statutory rate shown in the table above is a <strong>Form 13 lower deduction certificate</strong>, not a treaty claim. If your CA or the buyer suggests applying DTAA rates to a property sale TDS deduction, that advice does not hold up under Section 195 as it applies to immovable property.</p>

                <h2>Who Counts as an &quot;NRI Seller&quot; for Section 195 Purposes</h2>
                <p>Section 195 applies based on the seller&apos;s <strong>residential status for the financial year of the sale</strong> under Section 6 of the Income Tax Act — not citizenship, and not the status the seller held when the property was originally purchased. A Person of Indian Origin (PIO) or OCI cardholder who is non-resident in the year of sale is treated the same as any other NRI seller for this purpose. Conversely, an NRI who has since returned to India and qualifies as a resident (including under the <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR transitional status</Link>) in the year of sale is <strong>not</strong> subject to Section 195 — the buyer instead follows the resident-seller process under Section 194-IA and Form 26QB. Getting this determination wrong in either direction — treating a resident as an NRI, or vice versa — leads to the wrong form being filed and the wrong TDS rate being applied.</p>

                <h2>Multiple Buyers or Joint Ownership</h2>
                <p>When a property is jointly owned by two or more buyers, each buyer is independently liable to deduct TDS on their proportionate share of the consideration paid to the NRI seller, and each typically needs their own TAN and files their own Form 27Q for their share. Similarly, if the NRI seller co-owns the property with a resident seller, the Section 195 obligation applies only to the NRI co-owner&apos;s share of the consideration — the resident co-owner&apos;s share follows Section 194-IA instead, meaning a single sale transaction can require both a Form 27Q and a Form 26QB, filed separately for the two sellers&apos; shares.</p>

                <h2>How Buyers Apply for a TAN</h2>
                <p>Because Section 195 requires full TDS compliance rather than the simplified PAN-based Form 26QB process used for resident sellers, every buyer purchasing from an NRI must hold a Tax Deduction Account Number before deducting any tax. Skipping this step is one of the most common — and most costly — buyer mistakes.</p>
                <ol>
                  <li><strong>Apply on the Protean (NSDL) portal:</strong> Submit Form 49B online, along with the buyer&apos;s PAN, address proof, and a nominal fee of about ₹65.</li>
                  <li><strong>Processing time:</strong> TAN is typically allotted within 7 to 10 working days and delivered electronically.</li>
                  <li><strong>Apply before the transaction, not after:</strong> TAN is a prerequisite for depositing TDS via challan and for filing Form 27Q — it cannot be backdated once payment to the NRI has already been made.</li>
                  <li><strong>One TAN, multiple deductions:</strong> The same TAN can be reused for future Section 195 deductions if the buyer purchases from other non-residents.</li>
                </ol>
                <p>See our full <Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN application guide for buyers purchasing from an NRI</Link> for the complete Form 49B walkthrough.</p>

                <h2>Step-by-Step: Deducting, Depositing and Filing TDS</h2>
                <ol>
                  <li><strong>Obtain a TAN:</strong> As above — required before any payment to the NRI seller.</li>
                  <li><strong>Calculate the TDS amount:</strong> Apply the correct rate from the table above to the full sale consideration. If the transaction involves multiple instalments, TDS must be deducted on each instalment at the time of payment.</li>
                  <li><strong>Deposit the TDS:</strong> Pay the deducted amount to the government via Challan ITNS-281 by the 7th of the month following deduction (by April 30 if deducted in March).</li>
                  <li><strong>File Form 27Q (now Form 144):</strong> This is the quarterly TDS return for payments made to non-residents under Section 195. It is filed on the TRACES/e-filing portal by the standard quarterly due dates: 31 July (Q1: Apr-Jun), 31 October (Q2: Jul-Sep), 31 January (Q3: Oct-Dec), and 31 May (Q4: Jan-Mar). <strong>Form 26QB does not apply here</strong> — that form is exclusively for TDS under Section 194-IA on resident sellers above ₹50 lakh.</li>
                  <li><strong>Issue Form 16A (now Form 131):</strong> Download Form 16A from TRACES within 15 days of the Form 27Q due date, and provide it to the NRI seller. The NRI needs Form 16A, not Form 16B, to claim TDS credit in their Indian ITR.</li>
                </ol>

                <h2>Lower Deduction Certificate (Form 13, now Form 128): The NRI&apos;s Best Option</h2>
                <p>Since TDS is computed on the full sale price and not the net gain, NRIs whose actual taxable gain is significantly smaller than the consideration often face substantial over-deduction. The remedy is to apply for a <strong>Lower or Nil TDS Certificate under Section 197 (now Section 395)</strong> using Form 13 (now Form 128), before the sale is finalized.</p>
                <p>Applications are filed online through the TRACES portal and are typically reviewed by the Assessing Officer in the <strong>International Taxation charge</strong> that holds jurisdiction over the NRI&apos;s PAN — not a local resident ward, which is a common source of confusion and misdirected paperwork. Documents generally required include:</p>
                <ul>
                  <li>Computation of capital gains — cost of acquisition (indexed, if the pre-July 2024 option applies), cost of improvement, and expected tax payable</li>
                  <li>Copy of the sale agreement or agreement to sell, with the agreed consideration</li>
                  <li>Purchase deed or allotment letter evidencing the original cost of acquisition</li>
                  <li>PAN and prior years&apos; ITR acknowledgments, if available</li>
                  <li>Bank account details (usually NRO) for any eventual refund</li>
                </ul>
                <p>Read our full guide on the <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 application process, documents, and timeline</Link> for a step-by-step walkthrough. If the property was inherited or received as a gift rather than purchased directly, the cost of acquisition follows different carryover rules — see our guide on <Link href="/blog/nri-capital-gains-inherited-gifted-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>capital gains for NRIs on inherited or gifted property</Link>.</p>
                <p>If satisfied, the AO issues a certificate authorizing deduction at a specified lower (or nil) rate. The buyer then deducts at that rate instead of the statutory rate, eliminating the need for the NRI to wait months for a large refund. Processing typically takes 4 to 8 weeks — initiate well before executing the sale agreement. Our <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory team</Link> handles Form 13 applications end-to-end.</p>

                <h2>Worked Example: TDS on a ₹1.5 Crore Property Sale</h2>
                <p>Consider an NRI selling a property for ₹1.5 crore, held for more than 2 years (LTCG), with an actual capital gain of ₹15 lakh after deducting the cost of acquisition. The consideration falls in the ₹1 crore–₹2 crore band, so the standard TDS rate is 14.95% (12.5% + 15% surcharge + 4% cess):</p>
                <table>
                  <thead>
                    <tr><th></th><th>TDS Deducted at Sale</th><th>Actual Tax Liability</th><th>Recoverable Gap</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Without Form 13</strong></td><td>₹22,42,500 (14.95% of ₹1.5Cr)</td><td>~₹1,95,000 (12.5% of ₹15L + 4% cess, no surcharge at this income level)</td><td>~₹20,47,500 — refundable only by filing an Indian ITR</td></tr>
                    <tr><td><strong>With Form 13</strong></td><td>~₹1,95,000 (AO-specified rate)</td><td>~₹1,95,000</td><td>Nil — no refund wait</td></tr>
                  </tbody>
                </table>
                <p>This ₹20+ lakh gap is exactly what a lower deduction certificate is designed to avoid. Without it, the NRI has effectively given the government an interest-bearing loan until the refund is processed.</p>
                <p>Want to run your own numbers? Use our free <Link href="/tools/nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Property TDS Calculator</Link> to estimate the TDS, surcharge, cess, and net proceeds for any sale value and holding period.</p>

                <h2>How NRIs Can Claim a TDS Refund on Property Sale</h2>
                <p>If a lower deduction certificate wasn&apos;t obtained before the sale, the NRI recovers the excess TDS by filing an Indian income tax return (typically ITR-2, or ITR-3 if the NRI also has business income) for the year of sale — even if they have no other Indian income. The return reports the actual capital gain computation and claims credit for the TDS reflected in Form 16A.</p>
                <ul>
                  <li><strong>Filing deadline:</strong> 31 July for most NRIs (31 October if reporting foreign assets or if an audit applies).</li>
                  <li><strong>Verification:</strong> NRIs without an Aadhaar-linked Indian mobile number typically verify via a Digital Signature Certificate or bank-account-linked EVC rather than Aadhaar OTP.</li>
                  <li><strong>Refund credit:</strong> Refunds are credited to an Indian bank account, usually the NRO account the sale proceeds were deposited into.</li>
                  <li><strong>Refund interest:</strong> Section 244A entitles the NRI to statutory interest on the refund for the period of delay, partially offsetting the cost of the over-deduction.</li>
                </ul>
                <p>Filing for a refund after the fact works, but it ties up capital for months. Applying for Form 13 before the sale — covered above — avoids the wait entirely and is the better option whenever the gap between TDS and actual liability is large. Read our full guide on <Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>claiming a TDS refund on property sale</Link> for the complete ITR filing and documentation process.</p>

                <h2>Repatriating Sale Proceeds Under the New Income Tax Act 2025</h2>
                <p>The new Income Tax Act 2025 (effective April 1, 2026) replaced the earlier remittance forms. The full repatriation sequence now looks like this:</p>
                <ol>
                  <li><strong>Proceeds land in the NRO account:</strong> Sale consideration from an NRI seller must first be credited to their <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO (Non-Resident Ordinary) account</Link> — it cannot be remitted directly abroad.</li>
                  <li><strong>Settle the tax position:</strong> Ensure TDS has been correctly deducted and, where applicable, the ITR refund or Form 13 certificate has resolved any gap between TDS and actual liability.</li>
                  <li><strong>File Form 145</strong> (replaces Form 15CA): Filed by the NRI on the Income Tax portal before initiating the bank remittance, declaring the nature of the remittance and confirming tax compliance.</li>
                  <li><strong>Obtain Form 146</strong> (replaces Form 15CB): Issued by a Chartered Accountant certifying that taxes have been paid or TDS has been correctly deducted and deposited. Required for remittances above ₹5 lakh.</li>
                  <li><strong>Submit to the Authorised Dealer (AD) Bank:</strong> Along with the FEMA declaration, sale deed, Form 16A, Form 145 acknowledgment, and Form 146.</li>
                  <li><strong>Repatriation limit:</strong> Up to <strong>USD 1 million per financial year</strong>, cumulative across all NRO repatriations (not just this one sale), can be remitted once the AD Bank is satisfied. Amounts beyond this require specific RBI approval.</li>
                </ol>
                <p>Banks typically take 5 to 10 working days to process the remittance once all documentation is in order — plan for this alongside the Form 13 and ITR timelines above, not after them. Read our full guide on <Link href="/blog/nri-repatriation-property-sale-proceeds" style={{ color: 'var(--primary)', fontWeight: 600 }}>repatriating NRI property sale proceeds</Link> for the complete Form 145/146 and USD 1 million scheme walkthrough.</p>

                <h2>Penalties for Buyer Non-Compliance</h2>
                <p>Buyers who get this wrong don&apos;t just risk a notice — the liability is personal and immediate:</p>
                <ul>
                  <li><strong>Assessee in default (Section 201, now Section 398):</strong> The buyer becomes personally liable for the full TDS amount that should have been deducted, regardless of whether the NRI seller has since paid tax independently.</li>
                  <li><strong>Interest (Section 201(1A)):</strong> 1% per month for the period of non-deduction (from the date TDS was deductible to the date actually deducted), and 1.5% per month for any period where TDS was deducted but not deposited (from the date of deduction to the date of deposit).</li>
                  <li><strong>Penalty (Section 271C):</strong> Equal to the amount of tax not deducted or not deposited.</li>
                  <li><strong>Prosecution (Section 276B):</strong> Willful failure to deposit deducted TDS can attract rigorous imprisonment from 3 months to 7 years, plus a fine — rare in practice, but a real exposure for deliberate defaults.</li>
                  <li><strong>Downstream friction:</strong> A flagged PAN can complicate future property registrations and bank approvals.</li>
                </ul>

                <h2>Common Mistakes That Create Buyer Liability</h2>
                <ul>
                  <li>Deducting TDS only on the estimated &quot;profit&quot; instead of the full consideration</li>
                  <li>Missing the monthly deposit deadline or the quarterly Form 27Q filing deadline — interest accrues from the date TDS should have been deducted or deposited</li>
                  <li>Assuming Form 26QB applies because it&apos;s the form used for resident-seller property purchases — for an NRI seller, Section 195 requires a TAN and Form 27Q, not Form 26QB</li>
                  <li>Assuming the NRI will handle TDS — the buyer&apos;s obligation under Section 195 cannot be delegated</li>
                  <li>Not obtaining a TAN before the transaction date</li>
                  <li>Forgetting to issue Form 16A — without it, the NRI cannot claim TDS credit in their ITR</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with NRI property TDS or sale proceeds repatriation?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle Form 13 applications, Form 27Q filing, and Form 145/146 compliance for NRI property transactions across India.</p>
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

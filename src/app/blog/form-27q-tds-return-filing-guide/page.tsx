import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Form 27Q: TDS Return Filing Guide (FY 2026-27)',
  description: 'Form 27Q filing guide for payers deducting TDS on payments to NRIs: who must file, due dates, return structure, correction statements, penalties, and how it differs from Form 27QB for property purchases.',
  keywords: [
    'form 27Q', 'form 27Q filing', 'form 27Q due date', 'TDS return for NRI payments',
    'form 27Q vs 27QB', 'form 27Q correction statement', 'quarterly TDS return NRI',
    'who should file form 27Q', 'form 27Q penalty', 'TRACES form 27Q',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-27q-tds-return-filing-guide' },
  openGraph: {
    title: 'Form 27Q: TDS Return Filing Guide (FY 2026-27)',
    description: 'Who must file Form 27Q, due dates, return structure, correction statements, penalties, and how it differs from Form 27QB.',
    url: 'https://agrawalkhandelwal.com/blog/form-27q-tds-return-filing-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 27Q: TDS Return Filing Guide (FY 2026-27)',
    description: 'Due dates, structure, correction statements, and common mistakes for Form 27Q, the quarterly TDS return for payments to NRIs.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Form 27Q: TDS Return Filing Guide (FY 2026-27)', 'form-27q-tds-return-filing-guide')

const articleLd = buildArticleLd({
  headline: 'Form 27Q: TDS Return Filing Guide (FY 2026-27)',
  description: 'Who must file Form 27Q, quarterly due dates, return structure and annexures, correction statements, penalties for late or incorrect filing, and how it differs from Form 27QB for property purchases from NRIs.',
  datePublished: '2026-09-08',
  slug: 'form-27q-tds-return-filing-guide',
})

const faqs: [string, string][] = [
  [
    'What is Form 27Q used for?',
    'Form 27Q is the quarterly TDS return that any payer must file after deducting tax at source under Section 195 (now Section 393(2)) on payments made to a non-resident (other than salary). It covers payments such as interest, professional fees, royalty, and other sums, and reports the deductee\'s details, the nature of payment, and the TDS deducted and deposited for that quarter.',
  ],
  [
    'Who is required to file Form 27Q?',
    'The payer, called the deductor, is responsible for filing Form 27Q, not the NRI who receives the payment. This includes companies paying interest or royalty to a non-resident, individuals or firms paying professional fees to a non-resident consultant, and any other person or entity making a payment to a non-resident that attracts TDS under Section 195. The deductor must hold a Tax Deduction Account Number (TAN) before filing.',
  ],
  [
    'What are the due dates for filing Form 27Q?',
    'Form 27Q follows the standard quarterly TDS return schedule: 31 July for Q1 (April-June), 31 October for Q2 (July-September), 31 January for Q3 (October-December), and 31 May for Q4 (January-March). These are the same due dates that apply to the resident-payment TDS returns, Form 24Q and Form 26Q.',
  ],
  [
    'How is Form 27Q different from Form 27QB?',
    'Form 27Q is the general quarterly TDS return for all payments made to non-residents under Section 195, filed by a deductor holding a TAN. Form 27QB is a specific one-time challan-cum-statement used only when buying immovable property from an NRI seller, filed using the buyer\'s PAN rather than a TAN. If the payment is a property purchase from an NRI, Form 27QB applies instead of Form 27Q; for every other type of payment to an NRI, such as interest, rent (not on property purchase), or professional fees, Form 27Q is the correct return. See our dedicated comparison of the two forms for a fuller breakdown.',
  ],
  [
    'What happens if Form 27Q is filed late or with errors?',
    'Late filing attracts a fee under Section 234E of Rs 200 per day of delay, capped at the TDS amount, plus interest on any TDS not deposited on time. A penalty under Section 271H, ranging from Rs 10,000 to Rs 1,00,000, can also be levied for failure to file within one year of the due date or for filing an incorrect return, though it is generally waived if the return is filed late but correctly with tax and interest paid in full. Errors such as an incorrect PAN or TAN typically require a correction statement to be filed on TRACES to fix the deductee\'s TDS credit.',
  ],
  [
    'Can Form 27Q be corrected after filing?',
    'Yes. If an error is discovered after filing, such as a wrong deductee PAN, an incorrect TDS amount, or a missing challan mapping, the deductor files a correction statement on the TRACES portal referencing the original return. Correcting mismatches promptly matters because the non-resident deductee cannot claim TDS credit in their Indian ITR until the details in Form 27Q correctly reflect the deduction against their PAN.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Form27QBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">NRI Taxation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Form 27Q: Complete TDS Return Filing Guide for Payments to NRIs</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 8, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>

            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Form 27Q is the quarterly TDS return any <strong>payer</strong> files after deducting tax under Section 195 on a payment to a non-resident, other than salary.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Due dates follow the standard quarterly TDS schedule: 31 July, 31 October, 31 January, and 31 May.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Buying property from an NRI uses <strong>Form 27QB</strong> instead, not Form 27Q - the two are not interchangeable.</li>
                  <li style={{ marginBottom: 0 }}>Late or incorrect filing attracts a Section 234E fee and a possible Section 271H penalty, and errors block the NRI&apos;s ability to claim TDS credit until corrected.</li>
                </ul>
              </div>

              <p>Any business or individual that deducts tax at source on a payment to a non-resident, whether that is interest on a loan, royalty, professional fees, or rent, has a filing obligation that goes beyond simply depositing the TDS. That obligation is Form 27Q, the quarterly return that reports the deduction to the Income Tax Department and, critically, is what allows the non-resident payee to eventually claim credit for that TDS in their own return. This guide covers who must file, the filing calendar, what the return contains, and the mistakes that most often cause it to be filed late or incorrectly.</p>

              <h2>What Form 27Q Covers</h2>
              <p>Form 27Q is the TDS return prescribed for reporting tax deducted under Section 195 (now Section 393(2) of the Income Tax Act 2025) on any payment made to a non-resident that is not salary. Salary paid to a non-resident is reported instead in Form 24Q, the same return used for resident employees. Form 27Q applies to a wide range of payment types:</p>
              <ul>
                <li>Interest paid to a non-resident, including on NRO deposits, loans, or debentures</li>
                <li>Professional or technical fees paid to a non-resident consultant or contractor</li>
                <li>Royalty or fees for technical services paid to a foreign entity</li>
                <li>Rent paid to a non-resident landlord (where the payment is not a property purchase)</li>
                <li>Any other sum chargeable to tax in the hands of a non-resident recipient</li>
              </ul>
              <p>Property purchases from an NRI seller are a specific exception, covered separately below.</p>

              <h2>Who Must File</h2>
              <p>The obligation sits with the <strong>deductor</strong>, meaning whoever makes the payment, not the non-resident who receives it. This includes Indian companies paying interest or royalty abroad, individuals or firms engaging non-resident consultants, and any other payer who deducts TDS under Section 195. A prerequisite for filing is holding a <strong>Tax Deduction Account Number (TAN)</strong>, obtained via Form 49B on the Protean (NSDL) portal, since Form 27Q cannot be filed on PAN alone the way Form 27QB can for property purchases.</p>

              <h2>Filing Calendar</h2>
              <p>Form 27Q is filed quarterly, on the same schedule used for the resident-payment returns Form 24Q and Form 26Q:</p>
              <table>
                <thead>
                  <tr><th>Quarter</th><th>Period</th><th>Due Date</th></tr>
                </thead>
                <tbody>
                  <tr><td>Q1</td><td>April - June</td><td>31 July</td></tr>
                  <tr><td>Q2</td><td>July - September</td><td>31 October</td></tr>
                  <tr><td>Q3</td><td>October - December</td><td>31 January</td></tr>
                  <tr><td>Q4</td><td>January - March</td><td>31 May</td></tr>
                </tbody>
              </table>
              <p>TDS itself must be deposited monthly, by the 7th of the following month (30 April for amounts deducted in March), independent of the quarterly return deadline. The return reports and reconciles all deductions made across the quarter.</p>

              <h2>Structure of the Return</h2>
              <p>Form 27Q is filed electronically through the TRACES/e-filing ecosystem using return preparation utilities, and broadly consists of:</p>
              <ul>
                <li><strong>Deductor details:</strong> TAN, PAN, name, and address of the person making the payment</li>
                <li><strong>Challan details:</strong> Each TDS deposit made during the quarter, matched to the relevant BSR code and challan serial number</li>
                <li><strong>Deductee details:</strong> Each non-resident payee&apos;s name, country of residence, PAN (if available) or an alternative identification where the payee does not hold a PAN, the nature and amount of payment, and the TDS deducted, including any lower rate applied under a DTAA or a Form 13/197 certificate</li>
              </ul>
              <p>Where a lower DTAA rate has been applied instead of the standard statutory rate, the return should reflect the treaty article relied upon, supported by the payee&apos;s Tax Residency Certificate and Form 10F on the deductor&apos;s file.</p>

              <h2>Issuing Form 16A After Filing</h2>
              <p>Once Form 27Q is filed, the deductor must download Form 16A (now Form 131) from TRACES within 15 days of the return due date and issue it to the non-resident payee. This certificate is what the payee needs to claim TDS credit in their own Indian income tax return; without a correctly filed Form 27Q and a matching Form 16A, that credit is not available.</p>

              <h2>Form 27Q vs Form 27QB: Not the Same Form</h2>
              <p>A common point of confusion is treating Form 27Q and Form 27QB as interchangeable. They are not:</p>
              <table>
                <thead>
                  <tr><th></th><th>Form 27Q</th><th>Form 27QB</th></tr>
                </thead>
                <tbody>
                  <tr><td>Applies to</td><td>Interest, royalty, professional fees, rent, and other payments to non-residents</td><td>Purchase of immovable property from an NRI seller only</td></tr>
                  <tr><td>Filed using</td><td>TAN</td><td>Buyer&apos;s PAN (no TAN needed)</td></tr>
                  <tr><td>Frequency</td><td>Quarterly return</td><td>One-time, per property transaction</td></tr>
                  <tr><td>Filed by</td><td>Deductor (payer)</td><td>Buyer</td></tr>
                </tbody>
              </table>
              <p>If your payment to an NRI is specifically for buying property, see our dedicated guide on the <Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN application process for property buyers</Link> and our full <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI property sale guide</Link>, and our side-by-side <Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>26QB vs 27Q comparison</Link> for the resident-vs-NRI seller distinction. This guide focuses on Form 27Q for every other kind of payment to a non-resident.</p>

              <h2>Correcting a Filed Return</h2>
              <p>Errors are common, particularly around the deductee&apos;s PAN, the challan mapping, or the TDS amount. These are fixed by filing a <strong>correction statement</strong> on TRACES that references the original return&apos;s acknowledgment number. Until the correction is processed, the affected deductee&apos;s TDS credit in Form 26AS/AIS remains incorrect or missing, which can delay or block their ability to file their own Indian return and claim the credit.</p>

              <h2>Penalties for Late or Incorrect Filing</h2>
              <ul>
                <li><strong>Late filing fee (Section 234E):</strong> Rs 200 per day of delay, capped at the amount of TDS deductible for the quarter.</li>
                <li><strong>Penalty for failure to file (Section 271H):</strong> Between Rs 10,000 and Rs 1,00,000, applicable if the return is not filed within one year of the due date, or if incorrect information is furnished. This penalty is generally not levied if the return is eventually filed correctly with the tax, interest, and late fee paid in full.</li>
                <li><strong>Interest on late deposit:</strong> Separate from the return filing penalty, 1.5% per month applies for any period the deducted TDS was not deposited on time.</li>
              </ul>

              <h2>Common Mistakes Payers Make</h2>
              <ul>
                <li>Filing Form 27QB instead of Form 27Q, or vice versa, based on confusing the two forms rather than the nature of the payment</li>
                <li>Not obtaining a TAN before making the first payment, which blocks timely filing</li>
                <li>Applying a DTAA rate on the payment without a valid Tax Residency Certificate and Form 10F on file to support it</li>
                <li>Mismatched challan and deductee mapping, which triggers TRACES defaults and holds up the payee&apos;s credit</li>
                <li>Forgetting to issue Form 16A after filing, leaving the non-resident payee unable to claim credit even though the return was filed correctly</li>
              </ul>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help filing Form 27Q or fixing a TRACES mismatch?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle TAN registration, quarterly Form 27Q filing, correction statements, and Form 16A issuance for businesses and individuals paying non-residents.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/26qb-vs-27q-nri-property-tds" style={{ color: 'var(--primary)', fontWeight: 600 }}>26QB vs 27Q: Which TDS Form When Buying Property from an NRI?</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-195-tds-nri-payments-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 195 TDS on Payments to NRIs</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tan-application-guide-buyer-nri-property" style={{ color: 'var(--primary)', fontWeight: 600 }}>TAN Application Guide for Buyers</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/nro-tds-refund-claim-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account TDS Refund: Claim Process</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

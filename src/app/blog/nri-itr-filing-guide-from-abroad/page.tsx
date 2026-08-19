import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NRI ITR Filing from Abroad (FY 2026-27)',
  description: 'How NRIs file Indian income tax returns from abroad: which ITR form (ITR-2 vs ITR-3), documents needed, e-verification without Aadhaar, filing deadline, and common mistakes that trigger notices.',
  keywords: [
    'NRI ITR filing India', 'NRI income tax return', 'how to file ITR as NRI',
    'NRI ITR-2', 'NRI ITR from abroad', 'NRI e-verification ITR',
    'NRI tax filing India 2026', 'NRI ITR deadline', 'NRI ITR documents',
    'file income tax return NRI', 'NRI ITR online',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-itr-filing-guide-from-abroad' },
  openGraph: {
    title: 'NRI ITR Filing Guide: Which Form, How to File from Abroad',
    description: 'ITR form selection, documents, e-verification, deadline, and common mistakes for NRI filers.',
    url: 'https://agrawalkhandelwal.com/blog/nri-itr-filing-guide-from-abroad',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI ITR Filing from Abroad (FY 2026-27)',
    description: 'Which form, how to e-verify without Aadhaar, and the documents you need.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'NRI ITR Filing from Abroad (FY 2026-27)',
  description: 'How NRIs file Indian income tax returns from abroad.',
  datePublished: '2026-07-22', dateModified: '2026-07-22',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/nri-itr-filing-guide-from-abroad',
}

const faqs: [string, string][] = [
  ['When is an NRI required to file an Indian ITR?', 'An NRI must file an ITR if their total Indian income (before deductions) exceeds the basic exemption limit (Rs 3 lakh under the new regime for FY 2026-27), or if they want to claim a TDS refund. Even if total income is below the threshold, filing is mandatory if the NRI wants to carry forward capital losses, or if TDS has been deducted and a refund is due. NRIs are not required to file if their only Indian income is interest/dividends on which TDS has been fully deducted and they have no refund to claim.'],
  ['Which ITR form should NRIs use?', 'Most NRIs should use ITR-2, which covers salary, house property, capital gains, and other sources. If the NRI has business or professional income in India, ITR-3 is required. ITR-1 (Sahaj) cannot be used by NRIs. If the NRI has only salary income and no capital gains or house property, ITR-2 is still the correct form since ITR-1 explicitly excludes non-residents.'],
  ['How can NRIs e-verify ITR without Aadhaar?', 'NRIs who do not have Aadhaar (or whose Aadhaar is not linked to an Indian mobile) can e-verify using: (1) Digital Signature Certificate (DSC) registered on the e-filing portal, (2) Electronic Verification Code (EVC) generated through net banking of a bank where the NRI has an account, or (3) sending a signed physical ITR-V to CPC Bengaluru within 120 days of filing. DSC is the most reliable method for NRIs abroad.'],
  ['What is the ITR filing deadline for NRIs?', 'The standard deadline is July 31 of the assessment year (i.e., July 31, 2027 for FY 2026-27). If the NRI is required to get a tax audit (turnover exceeds Rs 1 crore, or Rs 10 crore with certain conditions), the deadline extends to October 31. A belated return can be filed until December 31 of the assessment year, but late filing attracts a penalty of Rs 5,000 (Rs 1,000 if income is below Rs 5 lakh).'],
  ['Can an NRI file ITR from abroad without visiting India?', 'Yes. The entire ITR filing process can be completed online from abroad through the Income Tax e-filing portal (eportal.incometax.gov.in). E-verification can be done via DSC or net banking EVC. No physical presence in India is required. Many NRIs engage a CA in India to prepare and file the return on their behalf using a registered DSC.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function NRIITRFilingBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section">
          <div className="container">
            <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
            <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI ITR Filing: Which Form, How to File from Abroad, and What Most People Get Wrong</h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 22, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>
              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>NRIs must file ITR if Indian income exceeds Rs 3 lakh, or to claim a TDS refund.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Use <strong>ITR-2</strong> (most NRIs) or <strong>ITR-3</strong> (if business income). Never ITR-1.</li>
                    <li style={{ marginBottom: '0.4rem' }}>E-verify via <strong>DSC</strong> or <strong>net banking EVC</strong> - no Aadhaar needed.</li>
                    <li style={{ marginBottom: 0 }}>Deadline: <strong>July 31</strong> of the assessment year. Late filing costs Rs 5,000.</li>
                  </ul>
                </div>

                <p>Filing an Indian ITR from abroad sounds complicated, but the process is fully online and does not require visiting India. The real complexity is in getting the inputs right: determining your <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>residential status</Link>, choosing the correct form, computing income correctly (especially capital gains), and claiming TDS credits that often exceed your actual liability. Here is the step-by-step guide.</p>

                <h2>When Must an NRI File an Indian ITR?</h2>
                <p>Filing is mandatory if:</p>
                <ul>
                  <li><strong>Total Indian income exceeds Rs 3 lakh</strong> (basic exemption under the new tax regime for FY 2026-27).</li>
                  <li><strong>You want a TDS refund.</strong> If TDS was deducted on property sale, rent, mutual fund redemption, or NRO interest, and the actual tax is lower, the only way to get the excess back is to file an ITR.</li>
                  <li><strong>You want to carry forward capital losses</strong> to set off against future gains.</li>
                  <li><strong>You have assets above the prescribed threshold</strong> and are required to file under the mandatory filing rules.</li>
                </ul>
                <p>Filing is optional (but often beneficial) if your only Indian income is NRO interest or dividends on which TDS has been deducted at 30%, and you have no refund to claim.</p>

                <h2>Which ITR Form?</h2>
                <ul>
                  <li><strong>ITR-1 (Sahaj):</strong> Cannot be used by NRIs. It is exclusively for residents with total income up to Rs 50 lakh from salary, one house property, and other sources.</li>
                  <li><strong>ITR-2:</strong> The standard form for most NRIs. Covers salary, house property, capital gains, and other sources. Use this if you have rental income, property sale gains, mutual fund gains, or NRO interest.</li>
                  <li><strong>ITR-3:</strong> If you have business or professional income in India (e.g., freelance consulting fees, a proprietorship). Everything in ITR-2 plus business schedules.</li>
                </ul>

                <h2>Documents You Need</h2>
                <ul>
                  <li><strong>Form 131 (earlier Form 16A):</strong> TDS certificates from buyers (property), tenants (rent), AMCs (mutual funds), and banks (NRO interest). Download from TRACES if not received.</li>
                  <li><strong>Form 26AS / Annual Information Statement (AIS):</strong> Cross-check all TDS credits on the Income Tax portal. Every TDS deduction should appear here. If it does not, the credit will not be granted.</li>
                  <li><strong>Capital gains computation:</strong> For property sales, mutual fund redemptions, or stock sales. Include cost of acquisition, holding period, indexed cost (where applicable), and sale consideration.</li>
                  <li><strong>Bank statements:</strong> NRO and NRE account statements showing interest income, rent credits, and property sale proceeds.</li>
                  <li><strong>Home loan interest certificate:</strong> From the bank, if claiming <Link href="/blog/nri-rental-income-tax-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>rental income deductions</Link>.</li>
                  <li><strong>Passport:</strong> For residential status determination (day count from entry/exit stamps).</li>
                </ul>

                <h2>Step-by-Step Filing Process</h2>
                <ol>
                  <li><strong>Register or log in</strong> to the Income Tax e-filing portal (eportal.incometax.gov.in) using your PAN.</li>
                  <li><strong>Download Form 26AS and AIS</strong> to verify all TDS credits. Raise a dispute if any TDS is missing.</li>
                  <li><strong>Select the correct ITR form</strong> (ITR-2 for most NRIs) and the assessment year.</li>
                  <li><strong>Fill Part A - General Information:</strong> Select residential status as &quot;Non-Resident&quot; and the applicable country of residence.</li>
                  <li><strong>Report income by source:</strong> House property (rental income with deductions), capital gains (property, shares, mutual funds), other sources (NRO interest, dividends). Do NOT report foreign income (it is not taxable for NRIs).</li>
                  <li><strong>Claim TDS credits:</strong> The portal auto-populates from Form 26AS. Verify each entry matches your Form 16A certificates.</li>
                  <li><strong>Compute tax and refund:</strong> The portal calculates total tax payable, credits TDS, and shows the refund due (or tax payable).</li>
                  <li><strong>Pay any self-assessment tax</strong> due via Challan 280 before submitting.</li>
                  <li><strong>Submit and e-verify.</strong></li>
                </ol>

                <h2>E-Verification from Abroad</h2>
                <p>An ITR is not valid until e-verified. NRIs have three options:</p>
                <ul>
                  <li><strong>Digital Signature Certificate (DSC):</strong> Register a Class 2 or Class 3 DSC on the e-filing portal. This is the most reliable method for NRIs abroad and is the method CAs use when filing on behalf of clients.</li>
                  <li><strong>Net banking EVC:</strong> Generate an Electronic Verification Code through the net banking portal of a bank where you have an active account. Works from abroad if your net banking is active.</li>
                  <li><strong>Physical ITR-V:</strong> Print, sign, and mail the ITR-V acknowledgment to CPC Bengaluru within 120 days. This is the fallback option but involves postal delays and is not recommended.</li>
                </ul>
                <p>Aadhaar OTP verification typically does not work for NRIs who do not have an Indian mobile number linked to Aadhaar.</p>

                <h2>Common Mistakes That Trigger Notices</h2>
                <ul>
                  <li><strong>Using ITR-1:</strong> The portal may accept it, but the assessment will flag it since ITR-1 is not permitted for NRIs. This leads to a defective return notice under Section 139(9).</li>
                  <li><strong>Selecting &quot;Resident&quot; status:</strong> Some NRIs select resident to avoid the NRI compliance requirements. This results in worldwide income being taxable, which is worse.</li>
                  <li><strong>Not reporting capital gains:</strong> Even if TDS has been deducted on a property sale or mutual fund redemption, the capital gain must be reported in the ITR. The TDS credit is granted only if the income is reported.</li>
                  <li><strong>Mismatched TDS:</strong> If the TDS claimed in the ITR does not match Form 26AS, the credit is rejected. Always reconcile before filing.</li>
                  <li><strong>Missing the e-verification step:</strong> Filing without e-verifying means the ITR is treated as not filed. The 120-day window for ITR-V or DSC verification is strict.</li>
                  <li><strong>Not filing at all:</strong> NRIs who have had TDS deducted are leaving money on the table by not filing. The refund does not come automatically; it requires an ITR.</li>
                </ul>

                <h2>New Tax Regime vs Old Regime for NRIs</h2>
                <p>NRIs can choose between the old and new tax regimes. The new regime (default from FY 2024-25 onwards) has lower slab rates but fewer deductions. For NRIs whose primary Indian income is capital gains (which are taxed at special rates regardless of regime) or rental income (where the 30% standard deduction is available under both regimes), the choice often makes little difference. However, if you have significant Indian salary income or claim deductions under Section 80C, 80D, etc., compare both before filing.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help filing your Indian ITR from abroad?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We prepare and file ITRs for NRIs worldwide, handle TDS refund claims, and manage e-verification via DSC.</p>
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
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: 182-Day Rule</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>How NRIs Claim TDS Refund</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-rental-income-tax-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Rental Income Tax</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nri-mutual-fund-stock-taxation-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Mutual Fund & Stock Taxation</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'How to File ITR Online: Step-by-Step Guide (Salaried)',
  description: 'A step-by-step guide for salaried individuals to file their income tax return online: documents needed, Form 16 reconciliation, choosing a regime, common mistakes, and e-verification.',
  keywords: [
    'how to file ITR online', 'ITR filing guide salaried', 'e-filing income tax return',
    'ITR e-verification process', 'Form 16 ITR filing', 'AIS 26AS reconciliation',
    'income tax return filing steps', 'ITR portal filing guide',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/how-to-file-itr-online-salaried-guide' },
  openGraph: {
    title: 'How to File ITR Online: Step-by-Step Guide (Salaried)',
    description: 'Documents, portal steps, regime selection, and e-verification for salaried individuals filing their ITR online.',
    url: 'https://agrawalkhandelwal.com/blog/how-to-file-itr-online-salaried-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to File ITR Online: Step-by-Step Guide (Salaried)',
    description: 'A practical, step-by-step ITR e-filing walkthrough for salaried taxpayers.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('How to File ITR Online: Step-by-Step Guide for Salaried Individuals', 'how-to-file-itr-online-salaried-guide')

const articleLd = buildArticleLd({
  headline: 'How to File ITR Online: Step-by-Step Guide for Salaried Individuals',
  description: 'A practical walkthrough for salaried individuals filing their income tax return online: documents needed, Form 16/AIS/26AS reconciliation, regime selection, the e-filing steps, and e-verification.',
  datePublished: '2026-07-20',
  slug: 'how-to-file-itr-online-salaried-guide',
})

const faqs: [string, string][] = [
  [
    'What documents do I need to file my ITR online?',
    'At a minimum: Form 16 from your employer, Form 26AS and the Annual Information Statement (AIS) from the income tax portal, bank statements, home loan interest certificate if applicable, and proof of deductions such as 80C investments, 80D health insurance premium, and any rent receipts for HRA. If you have capital gains from mutual funds or stocks, keep your broker or fund statements ready too.',
  ],
  [
    'Can I file my ITR without Form 16?',
    'Yes, though it takes more care. You can reconstruct your salary income and TDS details from your salary slips, Form 26AS, and the AIS, but Form 16 makes reconciliation far easier since it already breaks down the salary components and deductions your employer has considered.',
  ],
  [
    'What happens if I don\'t e-verify my ITR after filing?',
    'An ITR that is filed but not e-verified within the prescribed window (currently 30 days from filing) is treated as not filed at all. You would need to file again, and if the original due date has passed, it may then count as a belated return with the associated late fee under Section 234F.',
  ],
  [
    'Should I file under the old regime or new regime?',
    'It depends on how much you can claim in deductions such as HRA, home loan interest, and 80C investments; the new regime\'s lower slab rates often win for taxpayers with fewer deductions, while the old regime can still be better for those with a large home loan or maxed-out 80C. See our detailed comparison in the slabs guide linked below, or compute both ways before submitting.',
  ],
  [
    'What if there is a mismatch between my Form 16 and the AIS?',
    'Reconcile the difference before filing rather than after. Common causes include interest income the employer didn\'t know about, dividend income, or a TDS entry not yet reflected. If the mismatch is on the AIS side and appears incorrect, you can raise feedback directly on the AIS interface; if it changes your taxable income, report the correct figure in your return regardless of what Form 16 shows.',
  ],
  [
    'Can I revise my ITR after filing if I find a mistake?',
    'Yes. A revised return can be filed under Section 139(5) before the end of the relevant assessment year or before the tax department completes assessment, whichever is earlier. There is no penalty for filing a revised return itself, but any additional tax due still carries applicable interest from the original due date.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function HowToFileITROnlineBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                How to File ITR Online: Step-by-Step Guide for Salaried Individuals
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 20, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Gather Form 16, Form 26AS, and the AIS before you start; reconcile them, don&apos;t just copy Form 16 blindly.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Pick the right ITR form (usually ITR-1 for most salaried taxpayers; see our form-selection guide if you have capital gains or multiple house properties).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Compare tax liability under both regimes before submitting; the pre-filled default may not be the cheaper option for you.</li>
                    <li style={{ marginBottom: 0 }}>Filing isn&apos;t complete until you <strong>e-verify</strong>; an unverified return is treated as not filed at all.</li>
                  </ul>
                </div>

                <p>Filing your own ITR online is entirely doable for most salaried individuals with straightforward income, provided you get the sequence right. The mistakes that create problems later, mismatched income figures, the wrong ITR form, or forgetting to e-verify, are all avoidable if you follow the steps in order. Here is the process end to end.</p>

                <h2>Step 1: Gather Your Documents</h2>
                <p>Before logging into the portal, collect these:</p>
                <ul>
                  <li><strong>Form 16</strong> from your employer, showing salary breakup and TDS deducted.</li>
                  <li><strong>Form 26AS</strong> and the <strong>Annual Information Statement (AIS)</strong>, both downloadable from the income tax e-filing portal, which show all TDS/TCS credited to your PAN and other reported financial transactions.</li>
                  <li><strong>Bank account statements</strong> for interest income and to identify any transactions the AIS may have picked up.</li>
                  <li><strong>Investment proofs</strong> for 80C (PF, ELSS, life insurance, PPF), 80D (health insurance premium), and home loan interest certificate if you have one.</li>
                  <li><strong>Capital gains statements</strong> from your broker or mutual fund platform, if you sold any shares, mutual funds, or property during the year.</li>
                  <li><strong>Rent receipts and landlord PAN</strong> (if rent exceeds Rs 1 lakh a year) if you are claiming HRA.</li>
                </ul>

                <h2>Step 2: Reconcile Form 16, 26AS, and AIS</h2>
                <p>This step is where most filing errors originate. Form 16 reflects what your employer has reported; the AIS pulls in a broader set of financial data reported by banks, registrars, and other entities, and can include interest income, dividend income, or securities transactions your employer never saw. Before entering any figures, check that the TDS shown in Form 16 matches Form 26AS, and cross-check any additional income the AIS shows that isn&apos;t on your Form 16. If the AIS contains an entry you believe is incorrect or duplicated, you can submit feedback directly on the AIS screen; if it is correct and simply new income you hadn&apos;t accounted for, include it in your return.</p>

                <h2>Step 3: Choose the Right ITR Form</h2>
                <p><strong>Most salaried individuals with income under Rs 50 lakh, at most two house properties, and no complex capital gains file ITR-1.</strong> If you have capital gains, income from more than one source that doesn&apos;t fit ITR-1&apos;s limits, or foreign assets, you likely need ITR-2. Choosing the wrong form is a common reason returns get flagged as defective. See our detailed comparison in <Link href="/blog/which-itr-form-to-file-itr1-itr2-itr3-itr4" style={{ color: 'var(--primary)', fontWeight: 600 }}>Which ITR Form Should You File</Link> if you are unsure.</p>

                <h2>Step 4: Log In and Start Your Return</h2>
                <ol>
                  <li>Log in to the income tax e-filing portal using your PAN as the user ID.</li>
                  <li>Go to <strong>e-File &gt; Income Tax Return &gt; File Income Tax Return</strong>, select the correct assessment year, and choose <strong>Online</strong> as the filing mode.</li>
                  <li>Select your applicable ITR form, and choose the correct status (Individual).</li>
                  <li>Most of your salary, TDS, and personal details will be pre-filled from Form 26AS, AIS, and your employer&apos;s TDS return; review every pre-filled field rather than assuming it is complete or correct.</li>
                </ol>

                <h2>Step 5: Choose Your Tax Regime</h2>
                <p>The portal will ask you to confirm or select your regime for the year. The new regime is the default, but salaried individuals can switch to the old regime at the time of filing if it works out cheaper for them, based on eligible deductions like 80C, 80D, HRA, and home loan interest. Run the comparison before confirming; see our <Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>old vs new regime guide</Link> for the current slab rates and a decision framework.</p>

                <h2>Step 6: Enter Deductions and Verify Computed Tax</h2>
                <p>Fill in Chapter VI-A deductions (80C, 80D, 80G, etc.) if you are on the old regime, along with any HRA exemption and home loan interest claims. The portal computes your tax liability automatically once all schedules are complete; review the computation summary carefully, especially if any refund or additional payable amount appears, before proceeding to submit.</p>

                <h2>Step 7: Submit and E-Verify</h2>
                <p>Once submitted, the return is not considered filed until it is <strong>e-verified</strong>. You can e-verify instantly using Aadhaar OTP, net banking, or a bank/demat account EVC, or send a signed physical ITR-V to the CPC in Bengaluru within the prescribed window if you cannot e-verify online. E-verification currently has to be completed within 30 days of filing; an unverified return is treated as though it was never filed, which can mean losing the original due date and, in some cases, attracting a late fee under Section 234F if the deadline has passed by the time you refile.</p>

                <h2>Common Mistakes to Avoid</h2>
                <ul>
                  <li><strong>Blindly trusting the pre-filled data</strong> without cross-checking against your own AIS and bank statements.</li>
                  <li><strong>Forgetting to report interest income</strong> from savings accounts or fixed deposits just because TDS wasn&apos;t deducted; income below the TDS threshold is still taxable and must be reported.</li>
                  <li><strong>Choosing the wrong regime</strong> without actually comparing both computations.</li>
                  <li><strong>Skipping e-verification</strong>, which is the single most common reason a return that was genuinely filed on time still ends up treated as not filed.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Want your return reviewed before you submit?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We reconcile Form 16 against AIS/26AS, pick the right ITR form and regime, and file end to end so nothing gets missed.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/which-itr-form-to-file-itr1-itr2-itr3-itr4" style={{ color: 'var(--primary)', fontWeight: 600 }}>Which ITR Form Should You File?</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-slabs-fy-2026-27-old-vs-new-regime" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Slabs FY 2026-27: Old vs New Regime</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/understanding-new-tax-regime-2025-26" style={{ color: 'var(--primary)', fontWeight: 600 }}>Understanding the New Tax Regime (FY 2025-26)</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing Guide: Which Form, How to File from Abroad</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

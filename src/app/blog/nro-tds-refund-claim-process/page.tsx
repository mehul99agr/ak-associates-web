import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'NRO Account TDS Refund: Claim Process (FY 2026-27)',
  description: 'Step-by-step process for NRIs to claim a refund of excess TDS deducted on NRO account interest and other NRO credits: which ITR to file, documents needed, Form 26AS reconciliation, and how repatriation limits apply once the refund lands.',
  keywords: [
    'NRO account TDS refund', 'how to claim TDS refund on NRO account', 'NRO TDS refund process',
    'excess TDS NRO interest refund', 'NRO account tax refund NRI', 'TDS refund NRO India',
    'NRO repatriation limit refund', 'NRO account refund documents', 'how to avoid TDS on NRO account',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nro-tds-refund-claim-process' },
  openGraph: {
    title: 'NRO Account TDS Refund: Claim Process (FY 2026-27)',
    description: 'How NRIs claim back excess TDS deducted on NRO interest, documents required, and how the USD 1 million repatriation limit applies to the refund.',
    url: 'https://agrawalkhandelwal.com/blog/nro-tds-refund-claim-process',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRO Account TDS Refund: Claim Process (FY 2026-27)',
    description: 'Step-by-step refund process for excess TDS on NRO account interest, plus how repatriation limits apply to the refunded amount.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRO Account TDS Refund: Claim Process (FY 2026-27)', 'nro-tds-refund-claim-process')

const articleLd = buildArticleLd({
  headline: 'NRO Account TDS Refund: Claim Process (FY 2026-27)',
  description: 'How NRIs claim a refund of excess TDS deducted on NRO account interest: ITR selection, documents, Form 26AS reconciliation, and repatriation of the refunded amount.',
  datePublished: '2026-09-08',
  slug: 'nro-tds-refund-claim-process',
})

const faqs: [string, string][] = [
  [
    'How do I claim a TDS refund on my NRO account?',
    'File an Indian income tax return (ITR-2, or ITR-3 if you also have business income) for the financial year in which the TDS was deducted, even if you have no other taxable Indian income. Report the NRO interest or other credited income under the relevant schedule, compute your actual tax liability (using the DTAA rate if applicable), and claim credit for the TDS reflected in Form 26AS/AIS. Any excess over your actual liability is refunded, usually to the same NRO account.',
  ],
  [
    'Why was 30% TDS deducted on my NRO account when my actual tax liability is lower?',
    'Banks apply the default domestic TDS rate on NRO interest, commonly cited at 30% plus surcharge and cess under Section 195 (now Section 393(2)), unless you have proactively submitted a Tax Residency Certificate and Form 10F to claim a lower DTAA treaty rate. Banks deduct at the higher statutory rate by default because they have no way to verify treaty eligibility on their own, which is why the gap between TDS deducted and actual liability is usually recoverable only via ITR or a prior DTAA declaration, not automatically.',
  ],
  [
    'How long does an NRO TDS refund take?',
    'Refunds are typically processed within a few months of e-verifying the return, though timelines vary depending on Income Tax Department processing volumes and whether the return is picked up for scrutiny. Refunds also carry statutory interest under Section 244A for the period of delay, which partially offsets the cost of the over-deduction while you wait.',
  ],
  [
    'Do I need a Tax Residency Certificate to get my NRO TDS refund?',
    'Only if you are claiming a lower DTAA treaty rate instead of the domestic rate in your return. If your actual liability is below the taxable threshold entirely (for example, total Indian income is within the basic exemption limit), you can claim the refund without a TRC. But if the gap arises because a treaty rate should have applied, the TRC and Form 10F support that claim and should be kept on file even though they may not need to be uploaded with the return itself.',
  ],
  [
    'Can I repatriate an NRO TDS refund abroad once I receive it?',
    'Yes, once the refund is credited to your NRO account it is repatriable like any other NRO balance, subject to the standard USD 1 million per financial year cumulative limit and the usual Form 145/146 (formerly Form 15CA/15CB) compliance for remittances above the prescribed threshold. The refund itself does not need separate approval, but it does count toward your overall annual repatriation cap alongside any other NRO outflows in the same year.',
  ],
  [
    'Should I get a Form 13 certificate instead of waiting for a refund?',
    'If you can anticipate the over-deduction in advance, such as before a large NRO fixed deposit is booked or before a lump-sum credit, applying for a lower or nil TDS certificate under Section 197 (now Section 395) using Form 13 (now Form 128) avoids the refund wait entirely. For ongoing NRO interest, most NRIs instead submit a TRC and Form 10F to the bank each year to get the DTAA rate applied at source, which is simpler than repeated Form 13 applications for recurring interest income.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NROTDSRefundBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRO Account TDS Refund: How to Claim Back Excess Tax Deducted</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 8, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>

            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Banks commonly deduct TDS on NRO interest at the domestic rate widely cited as 30% plus surcharge and cess, worth double-checking against the current notified rate before you file.</li>
                  <li style={{ marginBottom: '0.4rem' }}>If your actual liability is lower, whether because of a DTAA treaty rate or because your total Indian income is below the taxable threshold, the excess is recoverable only by filing an Indian ITR.</li>
                  <li style={{ marginBottom: '0.4rem' }}>File ITR-2 (or ITR-3 with business income), reconcile the TDS shown in Form 26AS/AIS, and claim the refund even with no other Indian income.</li>
                  <li style={{ marginBottom: 0 }}>Once refunded to your NRO account, the amount is repatriable within the standard <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>USD 1 million annual limit</Link>.</li>
                </ul>
              </div>

              <p>Most NRIs discover the gap between TDS deducted on their NRO account and their actual Indian tax liability only when a CA points it out at return-filing time. Banks deduct TDS on NRO interest and other credits at the domestic statutory rate by default, since they have no independent way to confirm treaty eligibility or your overall income position. When the real liability turns out to be lower, sometimes substantially lower, the only way to get that money back is a formal refund claim through your Indian income tax return. This guide walks through that claim process specifically for NRO account TDS, separate from the property-sale TDS refund process and separate from the mechanics of moving money out of India once you have it back.</p>

              <h2>Why NRO TDS Refunds Happen</h2>
              <p>NRO interest, along with other NRO credits such as rent or dividends, is subject to TDS under Section 195 (now Section 393(2) of the Income Tax Act 2025) at the applicable domestic rate, commonly cited at 30% plus surcharge and cess (worth confirming against the current notified rate, since rates and surcharge slabs are periodically revised). Two common situations create a refund opportunity:</p>
              <ul>
                <li><strong>DTAA treaty rate applies:</strong> If you are tax resident in a country with a Double Taxation Avoidance Agreement with India, the treaty rate on interest income is often lower than the domestic rate. If this was not claimed at source through a Tax Residency Certificate and Form 10F submitted to the bank in advance, the difference is recoverable only via ITR.</li>
                <li><strong>Total income below the taxable threshold:</strong> If the NRO interest is your only Indian income and it falls within the basic exemption limit after applicable deductions, the TDS deducted may exceed your actual tax liability entirely, even before considering any treaty benefit.</li>
              </ul>

              <h2>Which ITR Form to File</h2>
              <p>NRIs claiming an NRO TDS refund typically file <strong>ITR-2</strong>, which covers capital gains, house property, and other-source income (including NRO interest) for individuals without business income. If you also have business or professional income in India, <strong>ITR-3</strong> applies instead. The return must be filed for the financial year in which the TDS was deducted, even if you have no other Indian tax obligation for that year.</p>

              <h2>Step-by-Step: Claiming the Refund</h2>
              <ol>
                <li><strong>Reconcile Form 26AS and AIS.</strong> Confirm the exact TDS amount your bank has reported against your PAN. Discrepancies between what was actually deducted and what shows on Form 26AS/AIS are common and need to be resolved with the bank before filing, since the department processes refunds against the reported figure.</li>
                <li><strong>Compute the actual tax liability.</strong> Report NRO interest under &quot;Income from Other Sources.&quot; If a DTAA rate applies, compute liability at the treaty rate and disclose the treaty claim in the relevant schedule of the return, supported by your Tax Residency Certificate and Form 10F on file.</li>
                <li><strong>Claim TDS credit.</strong> The return automatically nets the TDS credit against computed liability; any excess becomes the refund amount.</li>
                <li><strong>Verify the return.</strong> NRIs without an Aadhaar-linked Indian mobile number typically verify via a Digital Signature Certificate or a bank-account-linked Electronic Verification Code rather than Aadhaar OTP.</li>
                <li><strong>Track processing and refund credit.</strong> Refunds are credited to the bank account nominated in the return, usually the same NRO account the interest was earned in. Processing generally takes a few months from e-verification, and refunds carry statutory interest under Section 244A for the period of delay.</li>
              </ol>

              <h2>Documents to Keep Ready</h2>
              <ul>
                <li>Bank interest certificates for the NRO account(s) for the relevant financial year</li>
                <li>Form 26AS and Annual Information Statement (AIS) downloaded from the Income Tax portal</li>
                <li>TDS certificates issued by the bank (Form 16A, now Form 131)</li>
                <li>Tax Residency Certificate and Form 10F acknowledgment, if claiming a DTAA rate</li>
                <li>PAN and, where applicable, prior years&apos; ITR acknowledgments</li>
              </ul>

              <h2>Avoiding the Refund Wait: Fix It at Source</h2>
              <p>A refund claim recovers the money, but it ties up capital for months in the meantime. For NRO interest specifically, most NRIs are better served by submitting a Tax Residency Certificate and Form 10F to the bank each year so the DTAA rate is applied at source going forward, rather than repeatedly filing for refunds on the same recurring income. For a one-off large NRO credit where a treaty rate does not apply but your actual liability is still clearly lower than the standard rate, a Section 197 lower or nil deduction certificate (Form 13, now Form 128) obtained in advance achieves the same result.</p>

              <h2>Repatriating the Refund</h2>
              <p>Once the refund lands in your NRO account, it is repatriable like any other NRO balance. It is not exempt from the usual <Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>USD 1 million per financial year cumulative limit</Link>, and remittances above the prescribed threshold still require Form 145/146 (formerly Form 15CA/15CB) compliance. If you are repatriating the refund alongside other NRO outflows in the same year, such as rental income or property sale proceeds, all of it counts toward the same annual cap.</p>

              <h2>Common Mistakes That Delay or Reduce the Refund</h2>
              <ul>
                <li>Filing under the wrong ITR form for the income profile (using ITR-1, which is not available to NRIs, or ITR-2 when business income requires ITR-3)</li>
                <li>Not reconciling Form 26AS/AIS before filing, leading to a credit mismatch that the department flags</li>
                <li>Claiming a DTAA rate in the return without having a valid Tax Residency Certificate for the relevant year on file</li>
                <li>Missing the return filing deadline, which can restrict the ability to claim the refund or carry forward certain benefits</li>
                <li>Assuming the refund is automatic once TDS is over-deducted, when in fact it requires an affirmative ITR claim every year</li>
              </ul>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Overpaying TDS on your NRO account?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle DTAA rate applications at the bank, Form 13 lower deduction certificates, and end-to-end ITR filing for NRO TDS refunds.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-nro-interest-fd-dtaa-relief" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRO Interest &amp; FD: DTAA Relief</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nro-account-repatriation-rules-process" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRO Account Repatriation: Rules &amp; Process</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA Repatriation Limits</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-tds-refund-property-sale" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS Refund on Property Sale (Not NRO Interest)</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/form-27q-tds-return-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 27Q: TDS Return Filing Guide</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

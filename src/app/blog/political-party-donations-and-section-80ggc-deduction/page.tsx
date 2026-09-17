import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Political Party Donations & Section 80GGC Deduction' },
  description: 'How the Section 80GGC deduction for donations to political parties works, the cash-donation restriction, and why the Income Tax Department is scrutinising these claims closely.',
  keywords: [
    'section 80GGC deduction', 'political party donation tax deduction', '80GGC cash donation disallowed',
    'political donation income tax notice', '80GGC scrutiny', 'electoral trust donation deduction',
    'section 137 Income Tax Act 2025', 'bogus political donation claims',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/political-party-donations-and-section-80ggc-deduction' },
  openGraph: {
    title: 'Political Party Donations & Section 80GGC Deduction',
    description: 'Eligibility, the cash-donation restriction, and the recent scrutiny wave targeting inflated or fabricated Section 80GGC claims.',
    url: 'https://agrawalkhandelwal.com/blog/political-party-donations-and-section-80ggc-deduction',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Political Party Donations & Section 80GGC Deduction',
    description: 'Eligibility, the cash-donation restriction, and the recent scrutiny wave targeting inflated or fabricated Section 80GGC claims.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Political Party Donations & Section 80GGC Deduction', 'political-party-donations-and-section-80ggc-deduction')

const articleLd = buildArticleLd({
  headline: 'Political Party Donations & Section 80GGC Deduction',
  description: 'How the Section 80GGC deduction for political party donations works, its cash-donation restriction, and the Income Tax Department scrutiny wave on inflated or bogus claims.',
  datePublished: '2026-10-05',
  slug: 'political-party-donations-and-section-80ggc-deduction',
})

const faqs: [string, string][] = [
  [
    'How much can I deduct under Section 80GGC?',
    '100% of the amount donated to a registered political party or an eligible electoral trust can be claimed as a deduction, with no fixed upper rupee ceiling specific to this section. Because it falls under Chapter VI-A, the total deduction claimed cannot exceed your gross total income for the year, and the deduction is available only under the old tax regime, since Chapter VI-A deductions are largely not available under the default new regime.',
  ],
  [
    'Can I donate in cash and still claim the deduction?',
    'No. A cash donation to a political party gives zero deduction under Section 80GGC, regardless of how genuine the payment was. The donation must be made through a banking channel, such as cheque, demand draft, net banking, or another electronic mode, to qualify. This restriction exists specifically because cash donations are far harder to trace and verify.',
  ],
  [
    'Why is the Income Tax Department scrutinising Section 80GGC claims?',
    'The department has intensified scrutiny of 80GGC claims over the past few assessment years amid concern that a meaningful share of claimed donations are inflated or entirely fabricated, including cases where money was routed back to the "donor" in cash after a commission was deducted, and cases where deductions were claimed for donations to parties that are not validly registered under the Representation of the People Act. Many recipients of such notices are asked to furnish proof of the donation and evidence of the source of funds.',
  ],
  [
    'What documentation should I keep to support a Section 80GGC claim?',
    'Keep the donation receipt issued by the political party or electoral trust (showing PAN, registration details, and the amount), the bank statement or payment confirmation showing the funds actually left your account through a banking channel, and confirmation that the recipient was a party registered under Section 29A of the Representation of the People Act, 1951, or a recognised electoral trust, at the time of donation. Retain this for as long as the assessment for that year can be reopened.',
  ],
  [
    'What is the penalty if a claimed donation is found to be bogus?',
    'Beyond simple disallowance of the deduction and the resulting tax demand with interest, a false or unsubstantiated claim found on scrutiny or reassessment can attract penalty under the misreporting-of-income provisions, which can run up to 200% of the tax sought to be evaded, in addition to the tax and interest itself. Search and survey proceedings against political parties or intermediaries facilitating bogus donations have also led to disallowances for individual donors linked to those transactions.',
  ],
  [
    'Does Section 80GGC have a new section number under the Income Tax Act 2025?',
    'Yes. Section 80GGC has been renumbered as Section 137 under the Income Tax Act 2025, a mapping that has been independently verified and is used elsewhere on this site. The deduction mechanics described in this guide, cash restriction, banking-channel requirement, and no fixed ceiling subject to gross total income, carry over under the new numbering; always confirm the current-year form references when actually filing.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function PoliticalDonations80GGCBlog() {
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
                Political Party Donations &amp; Section 80GGC Deduction
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 5, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 80GGC</strong> (now <strong>Section 137</strong> under the Income Tax Act 2025) allows a 100% deduction for donations to a registered political party or eligible electoral trust, available only under the old tax regime.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Cash donations get zero deduction.</strong> Payment must go through a banking channel.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The Income Tax Department has been actively scrutinising 80GGC claims for the past few assessment years, targeting inflated amounts and donations to unregistered or dubious recipients.</li>
                    <li style={{ marginBottom: 0 }}>Keep the donation receipt, bank proof, and recipient registration evidence; a claim without paper backing is now a real audit risk, not a theoretical one.</li>
                  </ul>
                </div>

                <p>Section 80GGC is one of the more generous deductions on the statute book: a full 100% of the amount donated to an eligible political party or electoral trust, with no rupee cap of its own. That generosity is exactly why it has become one of the most actively misused deductions in recent years, and why the Income Tax Department has stepped up scrutiny of claims made under it. Understanding both the mechanics and the current enforcement climate matters before claiming it.</p>

                <h2>Who Can Claim, and How Much</h2>
                <p>Any individual taxpayer (the parallel provision for companies is Section 80GGB) who contributes to a political party registered under <strong>Section 29A of the Representation of the People Act, 1951</strong>, or to a recognised electoral trust, can claim the amount donated as a deduction from gross total income. There is no fixed monetary ceiling specific to Section 80GGC itself, but since it sits under Chapter VI-A, the total deduction claimed cannot exceed the taxpayer\'s gross total income for the year, and the deduction is available only if the taxpayer opts for the <strong>old tax regime</strong>, as most Chapter VI-A deductions are not available under the default new regime.</p>

                <h2>The Cash Restriction: A Hard Line, Not a Preference</h2>
                <p><strong>A cash donation to a political party attracts zero deduction under Section 80GGC, full stop.</strong> The payment must be made through a banking channel: cheque, demand draft, internet banking, UPI, credit or debit card, or another electronic mode that leaves a verifiable trail. This is not a matter of the department preferring documented donations; a cash contribution simply does not qualify for the deduction at all, regardless of how genuine the underlying support for the party may be. Taxpayers sometimes assume a lower deduction applies to cash donations, the way some other sections scale down cash payments; that is not how Section 80GGC works. The deduction is either the full amount, via a banking channel, or nothing.</p>

                <h2>Why This Deduction Is Under Active Scrutiny</h2>
                <p>Over the past two to three assessment years, the Income Tax Department has intensified scrutiny specifically targeting 80GGC claims, with taxpayers receiving notices (often by email or SMS in the first instance) asking them to furnish proof of the donation and to clarify the source of funds. The concern driving this is a pattern the department has identified through search and survey action: certain intermediaries and, in some documented cases, political entities accepting donations through banking channels and then returning the money in cash to the "donor," after deducting a commission, effectively selling a paper deduction rather than facilitating a genuine political contribution. Other flagged patterns include claims for donations that were never actually made, and donations shown as made to entities that are not validly registered political parties or recognised electoral trusts under the Representation of the People Act, which disqualifies them from the deduction regardless of the amount or payment mode.</p>
                <p>The practical effect for an honest taxpayer who made a genuine, banking-channel donation to a properly registered party is not that the deduction is unavailable; it is that the burden of proof has become real rather than theoretical. A deduction claimed without supporting paperwork is now materially more likely to draw a notice than it was a few years ago.</p>

                <h2>What to Keep on File</h2>
                <ul>
                  <li>The <strong>donation receipt</strong> issued by the party or electoral trust, showing its PAN, registration reference, the amount, and the date.</li>
                  <li>The <strong>bank statement or electronic payment confirmation</strong> showing the funds actually left your account through a traceable banking channel, matching the receipt.</li>
                  <li>Evidence that the recipient was a <strong>party registered under Section 29A</strong> of the Representation of the People Act, 1951, or a recognised electoral trust, at the time the donation was made. A party's registration status is a fact that can be checked, and should be, before donating if the deduction matters to the decision.</li>
                </ul>
                <p>Retain this documentation for as long as the return for that year remains open to scrutiny or reassessment, the same discipline covered in our guide to <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices under Sections 143(1), 143(2) and 148</Link>. If a genuine claim does draw a notice, complete documentation is usually enough to close the query; the taxpayers who run into real difficulty are the ones who cannot produce a paper trail at all.</p>

                <h2>The Cost of Getting Caught With a Bogus Claim</h2>
                <p>Beyond the straightforward disallowance and resulting tax demand with interest, a claim found to be false or unsubstantiated on scrutiny can attract penalty for misreporting of income, which can run up to <strong>200% of the tax sought to be evaded</strong>, on top of the tax and interest itself. Where the department's search or survey action against a party or intermediary has already established a pattern of cash-back arrangements, individual donors linked to those transactions have seen their claims disallowed even where they characterised the donation as genuine, because the documentary trail (or the lack of a credible one) has not supported that position.</p>
                <p>The deduction remains a legitimate and valuable one for taxpayers who actually donate through proper channels to properly registered recipients. The current environment simply means that "I have a receipt" is no longer, by itself, sufficient; the banking trail and the recipient's registration status both need to hold up.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Received a notice on a political donation claim?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help individuals document genuine 80GGC claims correctly and respond to scrutiny notices with the right evidence.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20a%20Section%2080GGC%20donation%20claim." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-saving-investments-beyond-section-80c" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax-Saving Investments Beyond Section 80C</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-compliance-calendar-for-ngos-and-trusts-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual Compliance Calendar for NGOs and Trusts in India</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

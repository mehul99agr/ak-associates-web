import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Section 43B(h): MSME Payment Disallowance Rules for Buyers',
  description: 'The 45-day and 15-day MSME payment rules under Section 43B(h), which suppliers count as micro or small, and how a buyer\'s year-end unpaid dues get disallowed as a deduction.',
  keywords: [
    'section 43B(h) MSME', 'MSME 45 day payment rule', 'section 43B(h) disallowance',
    'MSME payment income tax act', '15 day payment MSME', 'micro small enterprise payment rule',
    'MSMED Act 43B(h)', 'section 43B(h) buyer compliance',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-43bh-msme-payment-disallowance-buyers' },
  openGraph: {
    title: 'Section 43B(h): MSME Payment Disallowance Rules for Buyers',
    description: 'The 45-day/15-day MSME payment deadline, which suppliers it covers, and how unpaid dues get disallowed for the buyer at year-end.',
    url: 'https://agrawalkhandelwal.com/blog/section-43bh-msme-payment-disallowance-buyers',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 43B(h): MSME Payment Disallowance Rules',
    description: 'Pay registered micro/small suppliers within 45 (or 15) days, or lose the deduction this year. A buyer\'s guide.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 43B(h): MSME Payment Disallowance Rules for Buyers', 'section-43bh-msme-payment-disallowance-buyers')

const articleLd = buildArticleLd({
  headline: 'Section 43B(h): MSME Payment Disallowance Rules for Buyers',
  description: 'The 45-day and 15-day MSME payment rules under Section 43B(h) (now Section 37 under the Income Tax Act 2025), which suppliers count as micro or small, and how unpaid year-end dues get disallowed for the buyer.',
  datePublished: '2026-08-11',
  slug: 'section-43bh-msme-payment-disallowance-buyers',
})

const faqs: [string, string][] = [
  ['What is the Section 43B(h) 45-day payment rule?', 'Section 43B(h) denies a buyer the expense deduction for amounts payable to a registered micro or small enterprise unless it is paid within the time limit under the MSMED Act, 2006: 15 days if there is no written agreement, or a period specified in a written agreement, capped at 45 days even if the agreement states longer. If the amount remains unpaid beyond that deadline as of March 31, the deduction is disallowed for that year.'],
  ['Does Section 43B(h) apply to payments to medium enterprises?', 'No. Section 43B(h) applies only to registered micro and small enterprises as classified under the MSMED Act. Medium enterprises are outside this provision, so delayed payments to a medium-classified supplier do not trigger the disallowance, though they may still attract MSME Act interest liability under other provisions.'],
  ['Can a buyer avoid disallowance by paying just before the tax audit or return filing date?', 'No. The test is whether the amount was paid within the 15/45-day statutory window from acceptance of goods or services, not whether it was paid before the return was filed. If it was unpaid beyond the statutory deadline as on March 31, it is disallowed for that year regardless of when it is eventually paid; the deduction simply shifts to the year of actual payment.'],
  ['Does Section 43B(h) apply on cash basis or accrual basis?', 'Section 43B is fundamentally a cash-basis override for specified expenses: even where accounts are maintained on accrual basis, the deduction is allowed only in the year of actual payment once the statutory time limit has been breached. If payment is made within the 15/45-day window, the buyer gets the deduction in the year the expense accrued, as usual.'],
  ['How does a buyer know if a supplier is a registered micro or small enterprise?', 'Only suppliers registered under the Udyam Registration portal as micro or small enterprises are covered. A buyer should ask suppliers for Udyam registration details as part of vendor onboarding and periodically confirm classification, since a supplier\'s Udyam status (and therefore this obligation) can change if their turnover or investment crosses a threshold.'],
  ['Is there a separate MSME interest liability apart from the tax disallowance?', 'Yes. Independent of the income tax disallowance, Section 16 of the MSMED Act makes a buyer liable to pay compound interest (at three times the RBI bank rate) on the delayed amount if payment is not made within the agreed or statutory period. That interest is a separate MSME Act consequence and is itself generally not deductible for tax purposes.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Section43BhBlog() {
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
                Section 43B(h): MSME Payment Disallowance Rules for Buyers
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 11, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>If you buy from a registered <strong>micro or small</strong> enterprise, you must pay within <strong>15 days</strong> (no written agreement) or <strong>45 days</strong> (written agreement cap), whichever applies.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Miss the deadline and the amount is unpaid on <strong>March 31</strong>: the expense is <strong>disallowed</strong> for that year under Section 43B(h) (now Section 37 under the Income Tax Act 2025).</li>
                    <li style={{ marginBottom: '0.4rem' }}>The deduction is not lost forever; it moves to the year you actually pay, on a cash basis.</li>
                    <li style={{ marginBottom: 0 }}>Medium enterprises are not covered. This applies to micro and small suppliers only.</li>
                  </ul>
                </div>

                <p>Since its introduction, Section 43B(h) has quietly become one of the most consequential compliance points for any business that buys goods or services from small vendors. It does not change how much tax you owe on your own income; it changes the <em>timing</em> of a deduction you would otherwise take for granted, and it does so by importing a payment deadline from an entirely different statute, the MSMED Act, 2006, into your income tax computation.</p>

                <h2>What Section 43B(h) Actually Says</h2>
                <p>Section 43B, in general, is a list of expenses that are allowed as a deduction only on actual payment, overriding the normal accrual-basis rule for those specific items (statutory dues, certain interest, employee contributions, and so on). Clause (h), added to this list, adds <strong>"any sum payable by the assessee to a micro or small enterprise beyond the time limit specified in Section 15 of the MSMED Act, 2006."</strong></p>
                <p>In plain terms: if you owe money to a registered micro or small supplier for goods or services and you do not pay within the statutory window, that amount cannot be deducted as a business expense in the year it was incurred. It becomes deductible only in the year you actually pay it, exactly like the cash-basis treatment already applied to items such as unpaid GST, PF, or bonus under the older parts of Section 43B. Under the Income Tax Act 2025, this provision is renumbered as <strong>Section 37</strong>; the underlying rule is unchanged.</p>

                <h2>The 15-Day and 45-Day Rule</h2>
                <p>The payment deadline itself comes from Section 15 of the MSMED Act, not from the Income Tax Act. It works as follows:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Situation</th><th style={thStyle}>Payment Deadline</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>No written agreement between buyer and supplier</td><td style={tdStyle}>15 days from the date of acceptance of goods or services</td></tr>
                      <tr><td style={tdAltStyle}>Written agreement specifies a credit period</td><td style={tdAltStyle}>The agreed period, but capped at a maximum of <strong>45 days</strong> even if the agreement states longer</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>The practical effect is that no agreement, however generous, can push the effective ceiling past 45 days for a registered micro or small supplier. A purchase order that states "payment terms: 90 days" is simply unenforceable for this purpose; the MSMED Act deadline overrides it, and the 45-day clock still runs.</p>

                <h2>Which Suppliers Are Covered: Micro and Small, Not Medium</h2>
                <p>This is the single most common point of confusion. The MSMED Act (and the Udyam Registration classification that implements it) recognises three categories: micro, small, and medium enterprises, based on investment in plant and machinery/equipment and annual turnover. <strong>Section 43B(h) applies only to micro and small enterprises.</strong> A supplier classified as medium under Udyam is entirely outside this provision, no matter how late the payment is; the buyer faces no tax disallowance risk on that account, though ordinary commercial and contractual consequences of late payment still apply.</p>
                <p>The coverage is also limited to suppliers who are actually <strong>registered on the Udyam portal</strong> as micro or small at the time of the transaction. A small unregistered vendor, however genuinely small in practice, does not trigger Section 43B(h) exposure for the buyer, because the provision is tied to formal MSME registration status, not informal size. This makes vendor-level Udyam verification a real compliance step, not a formality: businesses that buy from a large, changing vendor base should build Udyam status checks into onboarding and periodic vendor reviews, since a supplier's classification can shift over time as their own turnover grows or shrinks.</p>
                <p>It is also worth noting this only covers payments for goods or services purchased by the buyer for its business; it is not a general rule about every payment a business makes to every small counterparty.</p>

                <h2>How the Disallowance Actually Works</h2>
                <p>The mechanics follow the same pattern as other Section 43B items:</p>
                <ol>
                  <li><strong>During the year:</strong> The expense is recorded on accrual basis in the books as usual, when the goods or services are received and the liability arises.</li>
                  <li><strong>At year-end (March 31):</strong> Check every amount payable to a registered micro or small supplier that is still outstanding. For each one, work out whether the 15-day or 45-day deadline (as applicable) has already passed.</li>
                  <li><strong>If the deadline has passed and the amount is still unpaid:</strong> That amount must be added back to income in the computation of total income for that year, effectively disallowing the deduction, via the tax audit report and the return.</li>
                  <li><strong>In the year of actual payment:</strong> The amount becomes deductible in that later year, on a straightforward cash basis, once it is finally paid.</li>
                </ol>
                <p>So the provision does not create a permanent loss of deduction; it is a timing shift, similar in spirit to how unpaid statutory dues work elsewhere in Section 43B. But the timing shift is real money in the year it bites: a company with a large volume of overdue MSME payables at year-end can see a material addition to its taxable income for that year, with the offsetting deduction available only later, and only once actually paid.</p>

                <h2>Interaction With the Tax Audit Report</h2>
                <p>Businesses subject to a <Link href="/blog/tax-audit-section-44ab-turnover-limits-fy-2026-27" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax audit under Section 44AB</Link> must report Section 43B disallowances, including the MSME payment position, as part of the particulars furnished with the audit report (Form 3CD for years before April 1, 2026; Parts A/B of the consolidated Form 26 from that date onward). This makes the auditor's review of vendor ageing and Udyam status an integral part of the audit process, not a side note; the auditor needs supplier-wise outstanding balances, their Udyam classification, and the applicable payment deadline for each, cross-checked against actual payment dates. Businesses that maintain clean, dated purchase records and periodically refresh vendor Udyam status make this exercise materially faster and reduce the risk of a disputed disallowance figure in the audit report itself, which is covered in the accompanying <Link href="/blog/tax-audit-report-forms-3ca-3cb-3cd-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax audit report forms guide</Link>.</p>

                <h2>Practical Steps for Buyers</h2>
                <ul>
                  <li><strong>Identify and tag MSME vendors:</strong> Maintain a vendor master that flags Udyam-registered micro and small suppliers separately from medium enterprises and unregistered vendors.</li>
                  <li><strong>Track the payment clock from acceptance, not invoice date:</strong> The 15/45-day period runs from acceptance of goods or services, so ageing reports should be built around that trigger point.</li>
                  <li><strong>Revisit standard purchase order terms:</strong> Any boilerplate 60- or 90-day payment term is void as against a registered micro or small supplier; align contract templates with the 45-day statutory cap.</li>
                  <li><strong>Reconcile outstanding MSME payables before year-end:</strong> A pre-March 31 review, prioritising payments closest to breaching the deadline, can materially reduce the disallowance for the year.</li>
                  <li><strong>Remember the separate MSME Act interest exposure:</strong> Beyond the tax disallowance, delayed payment can also trigger compound interest liability to the supplier under the MSMED Act itself, an independent consequence worth tracking alongside the tax position.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help reviewing your MSME payment exposure?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses classify vendors, track the 15/45-day payment clock, and get the Section 43B(h) disclosure right in the tax audit report.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-audit-section-44ab-turnover-limits-fy-2026-27" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Audit Under Section 44AB: Turnover Limits FY 2026-27</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-audit-report-forms-3ca-3cb-3cd-explained" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Audit Report Forms: 3CA vs 3CB vs 3CD</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/presumptive-taxation-scheme-section-44ad" style={{ color: 'var(--primary)', fontWeight: 600 }}>Presumptive Taxation Scheme: Section 44AD</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/essential-compliance-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Essential Compliance for Indian Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax &amp; Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

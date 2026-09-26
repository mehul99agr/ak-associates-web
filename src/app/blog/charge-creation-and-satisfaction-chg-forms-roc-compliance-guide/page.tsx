import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Charge Creation & Satisfaction (CHG Forms): ROC Compliance Guide' },
  description: 'How to register and satisfy a charge on company assets with the Registrar: Form CHG-1, CHG-4, and CHG-9, filing timelines, condonation windows, and what happens if a charge is missed.',
  keywords: [
    'chg-1 form', 'chg-4 form', 'chg-9 form', 'charge registration companies act', 'satisfaction of charge roc',
    'section 77 companies act charge', 'register charge roc', 'charge creation timeline',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/charge-creation-and-satisfaction-chg-forms-roc-compliance-guide' },
  openGraph: {
    title: 'Charge Creation & Satisfaction (CHG Forms): ROC Compliance Guide',
    description: 'CHG-1, CHG-4, and CHG-9 filing requirements, timelines, and condonation windows for registering and satisfying charges on company assets.',
    url: 'https://agrawalkhandelwal.com/blog/charge-creation-and-satisfaction-chg-forms-roc-compliance-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charge Creation & Satisfaction (CHG Forms): ROC Compliance Guide',
    description: 'How and when to file CHG-1, CHG-4, and CHG-9 with the Registrar of Companies.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Charge Creation & Satisfaction (CHG Forms): ROC Compliance Guide', 'charge-creation-and-satisfaction-chg-forms-roc-compliance-guide')

const articleLd = buildArticleLd({
  headline: 'Charge Creation & Satisfaction (CHG Forms): ROC Compliance Guide',
  description: 'CHG-1, CHG-4, and CHG-9 filing requirements for registering and satisfying charges on company assets, with timelines and condonation windows.',
  datePublished: '2026-09-01',
  slug: 'charge-creation-and-satisfaction-chg-forms-roc-compliance-guide',
})

const faqs: [string, string][] = [
  [
    'What is a "charge" on a company\'s assets and why does it need to be registered?',
    'A charge is a right created in favour of a lender over a company\'s property or assets as security for a loan or debt, such as a mortgage, hypothecation, pledge, or lien. Under Section 77 of the Companies Act, 2013, most charges must be registered with the Registrar of Companies within the prescribed time, and until registered, the charge is not valid against the liquidator or other creditors of the company, even though it may still bind the company itself.',
  ],
  [
    'What is the difference between CHG-1, CHG-4, and CHG-9?',
    'Form CHG-1 is used to register the creation or modification of a charge for most types of borrowing (mortgages, hypothecation, pledges, and similar security). Form CHG-9 is the equivalent form specifically for charges created or modified in relation to debentures. Form CHG-4 is filed later, once the underlying loan is fully repaid, to record that the charge has been satisfied and should be released from the company\'s charge register.',
  ],
  [
    'How long do I have to register a newly created charge?',
    'A charge should generally be filed within 30 days of its creation. If missed, filing is typically still possible up to 60 days from creation with an additional fee, and beyond that, up to a further outer limit with payment of ad valorem fees or through a condonation application, depending on how long the delay has run. The exact fee escalation and outer limit depend on the current rules in force, so confirm the applicable window with your CA before assuming any specific cut-off.',
  ],
  [
    'What happens if a charge is never registered?',
    'An unregistered charge is void against the liquidator and other creditors of the company, meaning the lender loses its priority security position if the company is later wound up, even though the loan itself remains due. This is precisely the risk registration is designed to prevent, and it is also why lenders routinely make timely CHG filing a condition precedent or an immediate post-disbursement requirement in loan documentation.',
  ],
  [
    'Do I need to file CHG-4 as soon as a loan is repaid?',
    'Yes, satisfaction of a charge should be filed once the debt is fully repaid or otherwise satisfied, generally within 30 days of the date of satisfaction, with a longer window available on payment of additional fees if that deadline is missed. Companies frequently forget this step after closing out a loan, leaving a satisfied charge showing as open on the company\'s master data, which then has to be explained during due diligence for the next round of funding or a sale.',
  ],
  [
    'Does an open, unsatisfied charge affect due diligence or a future funding round?',
    'Yes, materially. A charge still showing as active against assets that have actually been paid off is one of the most common flags in legal and financial due diligence, since it suggests either an unresolved liability or simply lapsed housekeeping. Either way, it typically has to be cleared up, by filing the overdue CHG-4, before a lender, investor, or acquirer will proceed, so it is worth reconciling the charge register whenever a company closes a loan rather than waiting until diligence forces the issue.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function ChargeCreationSatisfactionBlog() {
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
              <span className="section-badge">Company Incorporation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Charge Creation &amp; Satisfaction (CHG Forms): ROC Compliance Guide
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published September 1, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>CHG-1</strong> registers most new or modified charges (mortgage, hypothecation, pledge); <strong>CHG-9</strong> is the debenture-specific equivalent.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>CHG-4</strong> records that a charge has been fully satisfied once the underlying loan is repaid.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Standard filing window is <strong>30 days</strong> from creation or satisfaction, with extended windows available on payment of additional fees or through condonation beyond that.</li>
                    <li style={{ marginBottom: 0 }}>An unregistered charge is void against a liquidator and other creditors; a satisfied-but-unfiled charge is a recurring due diligence flag.</li>
                  </ul>
                </div>

                <p>Whenever a company borrows against its assets, whether through a term loan secured by a mortgage on property, a working capital facility secured by hypothecation of inventory and receivables, or a pledge of shares, that security interest has to be registered with the Registrar of Companies. This registration, called a &quot;charge,&quot; is not optional paperwork; under Section 77 of the Companies Act, 2013, an unregistered charge loses its priority against the company&apos;s liquidator and other creditors, which is exactly the protection the lender took the security for in the first place. Getting the CHG forms right, both at creation and later at satisfaction, is a compliance step that directly protects the lender&apos;s and the company&apos;s position.</p>

                <h2>Form CHG-1: Registering a New or Modified Charge</h2>
                <p><strong>Form CHG-1</strong> is filed to register the creation, or a subsequent modification, of a charge on a company&apos;s assets, covering the common categories: mortgages, hypothecation of movable or immovable property, pledges, liens, and assignment of receivables in favour of a lender. It requires details of the charge holder, the instrument creating the charge (such as the loan agreement or deed of hypothecation), the assets charged, and the amount secured, and is generally certified by the company&apos;s directors or authorised signatory along with supporting documents.</p>
                <p>Once filed and approved, the Registrar issues a <strong>Certificate of Registration of Charge</strong>, which is the document that actually evidences the charge is properly recorded against the company on the public record.</p>

                <h2>Form CHG-9: The Debenture-Specific Form</h2>
                <p>Where the charge is being created or modified specifically in connection with the issue of <strong>debentures</strong>, the company files <strong>Form CHG-9</strong> instead of CHG-1. The underlying logic and timeline are the same; the separate form exists because debenture-secured charges often involve a debenture trustee and a trust deed structure that differs from a straightforward bank loan, so the form captures those particulars.</p>

                <h2>Filing Timeline for Creation</h2>
                <p>A charge should be registered within <strong>30 days</strong> of the date it is created or modified. Where that window is missed, the rules typically allow filing within a further extended period, up to <strong>60 days</strong> from creation, on payment of additional fees, and beyond that, filing may still be possible up to a longer outer limit with higher ad valorem fees, or may require a formal condonation application depending on how long the delay has run. Because the exact fee slabs and outer limits have been revised by amendment in the past, do not assume a specific cut-off without checking the rules currently in force; missing the earliest 30-day window is the point to avoid, since every day beyond it adds cost and, past a certain point, procedural complexity.</p>

                <h2>Form CHG-4: Satisfying a Charge</h2>
                <p>Once the loan or other secured obligation is <strong>fully repaid or otherwise satisfied</strong>, the company must file <strong>Form CHG-4</strong> to record that the charge is released. This should generally be filed within 30 days of the date of satisfaction, with a longer window (commonly cited as up to around 300 days) available on payment of additional fees where the initial deadline is missed, and condonation required for longer delays. Once CHG-4 is processed, the Registrar issues a certificate confirming the charge has been satisfied, and the company&apos;s charge register is updated to reflect the release.</p>
                <p>This step is the one companies most often forget. Creating a charge is tied to disbursement of a loan, an event everyone is watching closely; satisfying it is tied to the final repayment, which can happen quietly, sometimes years later, with no lender pushing the company to file. The result is a charge register that shows security as still open against assets the company has, in substance, cleared.</p>

                <h2>Why Open Charges Surface in Due Diligence</h2>
                <p>A charge still marked active on a company&apos;s master data at the Ministry of Corporate Affairs is one of the standard items a lawyer or accountant checks during due diligence for a new funding round, an acquisition, or even a fresh loan from a different bank. If the underlying loan was actually repaid years ago but CHG-4 was never filed, that mismatch has to be explained and cleared before the transaction can proceed cleanly, which usually means filing the overdue satisfaction form under whatever extended timeline and fee applies at that point. Reconciling the charge register against actual outstanding loans, alongside the company&apos;s other <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filings</Link>, is worth doing as a periodic housekeeping exercise rather than only when a transaction forces the issue.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Extended Timelines</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The exact number of days available for late filing of creation or satisfaction, and the fee structure that applies at each stage, has been amended by the Ministry of Corporate Affairs over time. This guide describes the general 30-day base window and the broad shape of the extended windows that follow it, but always confirm the precise timeline and applicable fees in force on the date of filing with your CA rather than relying on a fixed number.</p>
                </div>

                <h2>Practical Checklist</h2>
                <ul>
                  <li>File CHG-1 (or CHG-9 for debentures) within 30 days of every new charge or material modification, not at the next convenient compliance cycle.</li>
                  <li>Track loan closures against the charge register; the moment a secured loan is fully repaid, calendar the CHG-4 filing.</li>
                  <li>Before any funding round, acquisition, or new secured borrowing, pull the company&apos;s current charge status from the MCA portal and reconcile it against actual outstanding facilities.</li>
                  <li>If a charge was missed at creation or satisfaction, file it now under the applicable extended-timeline fee rather than leaving it open indefinitely; the cost only increases with time.</li>
                </ul>
              </div>

              <PostCTA
            heading="Need to register or clear up a charge?"
            description="We file CHG-1, CHG-9, and CHG-4 within deadline, and reconcile stale charge entries before your next funding round or audit."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20a%20charge%20registration%20or%20satisfaction%20filing."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/secretarial-audit-applicability-and-what-it-covers" style={{ color: 'var(--primary)', fontWeight: 600 }}>Secretarial Audit: Applicability &amp; What It Covers</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Startup Fundraising</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Company Incorporation Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

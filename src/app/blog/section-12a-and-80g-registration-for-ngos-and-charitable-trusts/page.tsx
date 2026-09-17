import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Section 12A & 80G Registration for NGOs & Charitable Trusts' },
  description: 'How Section 12A and Section 80G registration work for NGOs and charitable trusts: provisional vs regular registration, the Form 10AB renewal process, and validity periods.',
  keywords: [
    'section 12A registration', 'section 80G registration', '12AB registration NGO',
    'provisional registration trust', 'form 10AB renewal', '12A 80G renewal',
    'charitable trust registration India', 'NGO tax exemption registration',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/section-12a-and-80g-registration-for-ngos-and-charitable-trusts' },
  openGraph: {
    title: 'Section 12A & 80G Registration for NGOs & Charitable Trusts',
    description: 'Provisional vs regular 12A/12AB registration, Section 80G approval, the Form 10AB renewal process, and validity periods for NGOs and charitable trusts.',
    url: 'https://agrawalkhandelwal.com/blog/section-12a-and-80g-registration-for-ngos-and-charitable-trusts',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 12A & 80G Registration for NGOs & Charitable Trusts',
    description: 'Provisional vs regular 12A/12AB registration, Section 80G approval, the Form 10AB renewal process, and validity periods for NGOs and charitable trusts.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Section 12A & 80G Registration for NGOs & Charitable Trusts', 'section-12a-and-80g-registration-for-ngos-and-charitable-trusts')

const articleLd = buildArticleLd({
  headline: 'Section 12A & 80G Registration for NGOs & Charitable Trusts',
  description: 'Section 12A/12AB registration and Section 80G approval for NGOs and charitable trusts: provisional vs regular registration, Form 10AB renewal, and validity periods.',
  datePublished: '2026-09-09',
  slug: 'section-12a-and-80g-registration-for-ngos-and-charitable-trusts',
})

const faqs: [string, string][] = [
  [
    'What is the difference between Section 12A registration and Section 80G registration?',
    'Section 12A registration exempts the NGO or charitable trust\'s own income from tax, subject to the income being applied for charitable purposes as required under the Act. Section 80G approval is separate and benefits the donor: it allows donors to claim a deduction on their own taxable income for donations made to the registered entity. An NGO typically applies for both, but they are two distinct registrations, not one combined approval, even though they are commonly processed together.',
  ],
  [
    'What is provisional registration and how long is it valid?',
    'Provisional registration under Section 12AB is granted to newly formed NGOs and trusts, generally before they have started charitable activity or have limited operating history, and is valid for 3 years from the assessment year for which it is granted. It must be converted to regular registration before expiry, or before commencing activity if that happens sooner, by filing an application at least 6 months before the provisional registration expires or within 6 months of the start of activity, whichever is earlier.',
  ],
  [
    'How long does regular 12AB registration last and how is it renewed?',
    'Regular registration was earlier granted for 5 years. Under recent changes, if the trust or institution\'s total income does not exceed Rs 5 crore in each of the two immediately preceding previous years, the renewed registration can be granted for a longer 10-year validity period instead of the standard 5-year cycle. Either way, renewal is filed using Form 10AB on the income tax e-filing portal, and must be submitted at least 6 months before the current registration expires.',
  ],
  [
    'What happens if an NGO misses the Form 10AB renewal deadline?',
    'Missing the renewal deadline risks a lapse in both the tax exemption on the NGO\'s own income and its ability to issue valid 80G certificates to donors for that period, which can also disrupt CSR eligibility for corporate donors relying on the NGO\'s 80G status. Given the real risk, NGOs should calendar the renewal deadline the moment a registration is granted rather than waiting until closer to expiry, since document preparation and any departmental queries can extend the actual processing time.',
  ],
  [
    'Does Section 80G have a new section number under the Income Tax Act 2025?',
    'Yes. Section 80G has been verified to correspond to Section 133 under the Income Tax Act 2025. This mapping has been independently confirmed and is safe to cite when referring to the new Act.',
  ],
  [
    'Does Section 12A have a confirmed new section number under the Income Tax Act 2025?',
    'Not as a single clean section reference. Registration and related compliance for charitable trusts and institutions is spread across a range of provisions in Chapter XVII-B of the Income Tax Act 2025 (broadly Sections 332-355), rather than mapping to one specific renumbered section the way Section 80G does. This guide therefore refers to Section 12A/12AB by their familiar old-Act names throughout and describes the new-Act location only in general terms; confirm the precise section citation with your CA or the Act itself before relying on it for a filing.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function Section12A80GBlog() {
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
              <span className="section-badge">Trusts &amp; NGOs</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Section 12A &amp; 80G Registration for NGOs &amp; Charitable Trusts
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 17, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 12A/12AB</strong> exempts the NGO&apos;s own income; <strong>Section 80G</strong> lets donors claim a deduction on their donations, two separate registrations usually applied for together.</li>
                    <li style={{ marginBottom: '0.4rem' }}>New NGOs get <strong>provisional registration valid for 3 years</strong>; it must convert to regular registration before expiry or before activity begins, whichever is earlier.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Regular registration runs <strong>5 years</strong>, extendable to <strong>10 years</strong> if total income stayed under Rs 5 crore in each of the two preceding years.</li>
                    <li style={{ marginBottom: 0 }}>Renewal is filed via <strong>Form 10AB</strong>, at least 6 months before expiry, non-negotiable given no grace period for a lapsed registration.</li>
                  </ul>
                </div>

                <p>NGOs and charitable trusts in India rely on two separate but related tax registrations to function effectively: one that exempts their own income from tax, and one that makes donations to them attractive to donors by letting the donor claim a deduction. Both are commonly discussed together, and both are periodically renewable rather than permanent, a structural change from the old regime that still catches organisations off guard when a renewal deadline passes unnoticed.</p>

                <h2>Section 12A/12AB: Exemption on the NGO's Own Income</h2>
                <p><strong>Section 12A registration (administered today under the Section 12AB regime) is what allows a charitable trust, society, or Section 8 company's income to be exempt from tax</strong>, subject to that income being applied toward the charitable or religious purposes stated in its governing document, within the limits and conditions the Act prescribes. Without this registration, an NGO's income is taxed like any other entity's, materially reducing what is actually available for its charitable activity.</p>
                <p>Registration today is not a one-time, permanent grant. It follows a two-stage structure:</p>
                <ul>
                  <li><strong>Provisional registration</strong> — granted to newly formed trusts and NGOs, typically before they have a track record of charitable activity, valid for 3 years from the relevant assessment year.</li>
                  <li><strong>Regular registration</strong> — what a provisionally registered entity converts to once it has commenced activity, or what an entity applies for directly if already operating with a history to show. Regular registration is valid for 5 years, extendable to 10 years where the trust's total income has not exceeded Rs 5 crore in each of the two immediately preceding previous years.</li>
                </ul>
                <p>The conversion from provisional to regular registration is not automatic. The entity must apply, using Form 10AB, at least 6 months before the provisional registration expires, or within 6 months of the start of its charitable activity, whichever is earlier. Missing this window can interrupt the exemption at a stage when the organisation is often least equipped to absorb an unexpected tax liability.</p>

                <h2>Section 80G: Making Donations Deductible for Donors</h2>
                <p><strong>Section 80G approval is a separate registration that benefits the donor, not the NGO directly</strong>: it allows a person or entity donating to the approved NGO to claim a deduction on their own taxable income for that donation, subject to the limits and conditions the Act specifies. An NGO without valid 80G approval can still be Section 12A-registered and tax-exempt on its own income, but it loses a significant fundraising advantage, since many individual and corporate donors, including those directing CSR spending, specifically look for 80G-approved organisations before donating.</p>
                <p>Section 80G has been verified to correspond to <strong>Section 133 under the Income Tax Act 2025</strong>. 80G approval follows the same provisional-then-regular structure and the same Form 10AB renewal mechanism as 12A/12AB, and in practice most NGOs apply for both registrations together rather than sequentially, since the underlying activity and documentation review overlaps substantially.</p>

                <h2>The Form 10AB Renewal Process</h2>
                <p>Whether renewing 12A/12AB, 80G, or both together, the process runs through Form 10AB on the income tax e-filing portal:</p>
                <ol>
                  <li>Track the expiry date of the current registration from the date it was granted, not from when a reminder eventually surfaces.</li>
                  <li>File Form 10AB at least 6 months before expiry (for a regular-to-regular renewal) or per the earlier-of-6-months rule for a provisional-to-regular conversion.</li>
                  <li>Submit supporting documents: trust deed or governing document, activity reports, audited financial statements, and details of the entity's objects and actual activities carried out.</li>
                  <li>Respond promptly to any queries raised by the Principal Commissioner or Commissioner of Income Tax reviewing the application; processing that would otherwise take roughly 1 to 3 months can extend to 3 to 6 months if queries are raised and responses are delayed.</li>
                  <li>Retain the renewed registration certificate and update donors/CSR partners with the current validity period where relevant.</li>
                </ol>
                <p>NGOs setting up for the first time, or converting from an informal structure to a registered trust or Section 8 company, may also find our <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link> useful for sequencing entity setup, PAN/TAN, and these tax registrations in the right order, and our guide on <Link href="/blog/section-43bh-msme-payment-disallowance-buyers" style={{ color: 'var(--primary)', fontWeight: 600 }}>MSME payment compliance</Link> relevant if the trust also runs any commercial arm alongside its charitable activity.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Section 80G maps cleanly to Section 133 of the Income Tax Act 2025. Section 12A/12AB does not have one confirmed equivalent; compliance for charitable trusts and institutions is spread across Chapter XVII-B (broadly Sections 332-355) of the new Act rather than a single renumbered section, so this guide uses the familiar old-Act name throughout for 12A and describes its new-Act location only in general terms. Confirm the precise citation with your CA before relying on it for a filing.</p>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Managing 12A/80G registration or renewal for your NGO?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help trusts, societies, and Section 8 companies with provisional and regular registration, Form 10AB renewals, and staying ahead of the deadlines that matter.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%2012A%2F80G%20registration%20for%20my%20NGO." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>Deciphering the New Income Tax Act &amp; Rules 2025</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

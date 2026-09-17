import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Taxation of Charitable Trusts: Exemptions & Compliance' },
  description: 'How Section 11 and Section 12 exemption works for charitable trusts: the 85% application requirement, accumulation rules, anonymous donation taxation under Section 115BBC, and 12A/12AB registration.',
  keywords: [
    'section 11 income tax act', 'section 12 charitable trust', '85% application charitable trust',
    'accumulation of income section 11(2)', 'anonymous donation section 115BBC', '12A 12AB registration',
    'charitable trust tax exemption India', 'taxation of NGO income',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/taxation-of-charitable-trusts-exemptions-and-compliance' },
  openGraph: {
    title: 'Taxation of Charitable Trusts: Exemptions & Compliance',
    description: 'The Section 11/12 exemption framework, the 85% application requirement, accumulation rules, and anonymous donation taxation for charitable trusts.',
    url: 'https://agrawalkhandelwal.com/blog/taxation-of-charitable-trusts-exemptions-and-compliance',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxation of Charitable Trusts: Exemptions & Compliance',
    description: 'How the 85% application rule, accumulation, and anonymous donation taxation work for a registered charitable trust.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Taxation of Charitable Trusts: Exemptions & Compliance', 'taxation-of-charitable-trusts-exemptions-and-compliance')

const articleLd = buildArticleLd({
  headline: 'Taxation of Charitable Trusts: Exemptions & Compliance',
  description: 'The Section 11/12 exemption framework for charitable trusts, the 85% application requirement, accumulation rules under Section 11(2), and anonymous donation taxation under Section 115BBC.',
  datePublished: '2026-09-11',
  slug: 'taxation-of-charitable-trusts-exemptions-and-compliance',
})

const faqs: [string, string][] = [
  [
    'What is the 85% application rule for charitable trusts?',
    'A registered charitable trust must apply at least 85% of its income for charitable purposes in the same financial year to claim full exemption under Section 11. If less than 85% is applied, the shortfall is treated as taxable income unless the trust formally elects to accumulate or set apart the unapplied portion under the conditions in Section 11(2), or the shortfall is due to income not being received or other specified reasons covered by an Explanation to Section 11(1).',
  ],
  [
    'How long can a trust accumulate unapplied income, and what are the conditions?',
    'Income accumulated or set apart under Section 11(2) can be carried forward for application within a maximum period of 5 years from the end of the year in which it is accumulated. To validly accumulate, the trust must specify the purpose of accumulation, invest or deposit the funds in the modes prescribed under Section 11(5), and file Form 10 along with its income tax return by the due date under Section 139(1). Missing the Form 10/return due date forfeits the exemption on the accumulated amount, so this is a hard procedural deadline, not a formality.',
  ],
  [
    'What happens to accumulated income that is not applied within 5 years?',
    'If the accumulated income is not actually applied for the specified charitable purpose within the 5-year window, it becomes taxable as income of the trust in the year the period expires. It is also taxable earlier if it is applied for a purpose other than the one specified, or if it ceases to remain invested in the prescribed modes, or if the trust is dissolved before the period ends.',
  ],
  [
    'When is a donation to a trust treated as an "anonymous donation" and taxed?',
    'A donation is treated as anonymous under Section 115BBC when the trust does not maintain a record of the donor\'s identity, specifically their name and address, along with other prescribed particulars. Such anonymous donations are taxed at a flat 30% to the extent they exceed the higher of Rs 1 lakh or 5% of the trust\'s total donations received in the year; the excess over this threshold is added to the trust\'s income and taxed at 30%, separate from its normal exempt income computation. Wholly religious trusts (and mixed religious-cum-charitable trusts, except where the donation is specifically for an educational or medical institution they run) are generally outside this provision.',
  ],
  [
    'Is 12A/12AB registration a one-time approval or does it need renewal?',
    'Under the current regime, 12AB registration (which replaced the older, permanent 12A/12AA registration for most trusts) is granted for a limited period and needs periodic renewal, rather than being a one-time, lifetime approval. Missing a renewal deadline can result in a lapse of exemption eligibility, so tracking the registration\'s validity period is now an active compliance task rather than a set-and-forget filing.',
  ],
  [
    'Does the Income Tax Act 2025 change how charitable trusts are taxed?',
    'The underlying exemption logic (income applied for charitable purposes is exempt, subject to the 85% application and accumulation framework) carries forward into the Income Tax Act 2025, but the provisions have been consolidated and renumbered, moving away from the old Sections 11/12/12A/115BBC framework into a dedicated Part of the new Act dealing with registered non-profit organisations. Given how recently this renumbering took effect, always confirm the exact current section reference with your CA or the return utility before citing a section number in a filing.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function TaxationOfCharitableTrustsBlog() {
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
                Taxation of Charitable Trusts: Exemptions &amp; Compliance
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 15, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A registered trust must apply <strong>at least 85%</strong> of its income for charitable purposes in the same year to claim full exemption.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Unapplied income can be validly <strong>accumulated for up to 5 years</strong>, but only if Form 10 and the return are filed by the due date and funds stay invested in prescribed modes.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Donations with no donor identity on record are <strong>anonymous donations</strong>, taxed at 30% on the amount exceeding the higher of Rs 1 lakh or 5% of total donations.</li>
                    <li style={{ marginBottom: 0 }}>12AB registration now needs periodic renewal, not a one-time lifetime approval; track its validity like any other compliance deadline.</li>
                  </ul>
                </div>

                <p>A charitable trust does not get a blanket exemption from income tax simply by registering as a nonprofit. The exemption under Sections 11 and 12 is conditional, and it is built around one central test: how much of the trust's income was actually applied for charitable purposes, and how it accounts for whatever wasn't. Get the application percentage, the accumulation paperwork, or the donor-recording discipline wrong, and a genuinely charitable trust can end up with a real tax bill. This guide walks through the framework.</p>

                <h2>The Core Rule: 85% Application</h2>
                <p><strong>To claim full exemption on its income, a registered trust must apply at least 85% of that income for charitable or religious purposes during the same financial year.</strong> "Applied" here means actually spent or utilised toward the trust's objects, not merely earned or received. If the trust applies less than 85%, the shortfall does not automatically become taxable; income can also be treated as applied under limited circumstances covered by an Explanation to Section 11(1), for instance where income is not actually received during the year or could not be applied for reasons beyond the trust's control, subject to specified conditions and timelines for eventual application. Outside those specific exceptions, a genuine shortfall against the 85% threshold is taxable unless it is validly carried forward through the accumulation route below.</p>

                <h2>Accumulating the Unapplied Balance: Section 11(2)</h2>
                <p>Where a trust cannot apply the full 85% in the current year, it is not forced to pay tax immediately; it can formally set apart the balance for future application under <strong>Section 11(2)</strong>, subject to a fairly strict procedural checklist:</p>
                <ul>
                  <li><strong>Specify the purpose</strong> for which the income is being accumulated, and the period of accumulation.</li>
                  <li><strong>Invest or deposit the accumulated funds</strong> only in the modes prescribed under Section 11(5) (specified government securities, notified bonds, deposits with scheduled banks, and similar low-risk instruments), not in the trust's general operating account or unrestricted investments.</li>
                  <li><strong>File Form 10</strong> (the statutory accumulation statement) electronically, along with the trust's income tax return, by the due date under Section 139(1).</li>
                </ul>
                <p>The <strong>maximum accumulation period is 5 years</strong> from the end of the financial year in which the income was accumulated. Miss the Form 10/return filing deadline and the accumulation is not validly made at all, meaning the exemption on that unapplied income is lost for the year, regardless of whether the trust genuinely intended to spend it later. This is one of the more common, avoidable ways trusts lose exemption: the underlying charitable intent is real, but the procedural deadline is missed.</p>
                <p>If the accumulated income is not actually applied to the stated purpose within the 5-year window, or is applied to a different purpose, or ceases to remain invested in the prescribed modes, or the trust dissolves before the period ends, the unapplied balance becomes taxable at that point, not retroactively from the year it was accumulated.</p>

                <h2>Anonymous Donations: Section 115BBC</h2>
                <p>Charitable trusts often receive cash or in-kind donations from donors who are not individually tracked, festival collection boxes, walk-in contributions, and similar sources. <strong>Under Section 115BBC, any donation where the trust does not maintain the donor's name, address, and other prescribed particulars is treated as an "anonymous donation."</strong> The tax treatment is specific: anonymous donations are taxed at a flat <strong>30%</strong> to the extent they exceed the <strong>higher of Rs 1 lakh or 5% of the trust's total donations</strong> received during the year. Only the excess over that threshold is taxed; the portion within the threshold is not taxed under this provision and remains part of the trust's normal exempt income computation (subject to the general 85% application rule).</p>
                <p>Two carve-outs matter here. First, this provision generally does not apply to trusts created wholly for religious purposes. Second, for trusts that are religious-cum-charitable, the anonymous donation rule still applies specifically to donations made toward any educational or medical institution the trust runs. Given how easy it is for cash collections to slip into "anonymous" territory without deliberate intent, trusts that handle significant cash donations should build a basic donor-record process (even a simple register capturing name and address above a reasonable threshold) into their day-to-day collection process, not just year-end accounting.</p>

                <h2>12A/12AB Registration Is Now Time-Bound</h2>
                <p>None of the exemptions above are available without a valid registration in the first place. Under the current framework, <strong>12AB registration is granted for a defined validity period and requires periodic renewal</strong>, a meaningful shift from the earlier regime where 12A/12AA registration, once granted, was effectively permanent. A trust that lets its 12AB registration lapse without renewing on time risks losing exemption eligibility for the period it operates unregistered, even if its charitable activities and application of funds are otherwise fully compliant. Registration validity should sit on the same compliance calendar as the FC-4 return covered in our <Link href="/blog/fcra-registration-foreign-contribution-compliance-for-ngos" style={{ color: 'var(--primary)', fontWeight: 600 }}>FCRA compliance guide</Link>, tracked proactively rather than discovered after the fact.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Sections 11, 12, 12A/12AB, and 115BBC have all been renumbered and reorganised under the Income Tax Act 2025, which consolidates the charitable-trust framework (now referred to as provisions for a "Registered Non-Profit Organisation") into a dedicated part of the new Act. Because this renumbering is still recent, this guide refers to the provisions by their familiar old-Act numbers throughout; confirm the precise current section citation with your CA or the applicable return utility before relying on a specific number in a filing.</p>
                </div>

                <p>The exemption framework for charitable trusts rewards discipline more than intent: applying 85% (or properly accumulating the rest with Form 10 filed on time), keeping donor records so genuine donations don't get swept into the anonymous-donation tax, and renewing 12AB registration before it lapses are the three areas where otherwise well-run trusts most often trip up. None of them require complex tax planning, just a compliance calendar that treats these deadlines as seriously as any other statutory filing.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with trust taxation or 12AB renewal?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle 85% application computation, Form 10 accumulation filings, 12AB renewal, and anonymous donation review for charitable trusts.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/trust-vs-society-vs-section-8-company-choosing-the-right-structure-for" style={{ color: 'var(--primary)', fontWeight: 600 }}>Trust vs Society vs Section 8 Company: Choosing the Right Structure</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fcra-registration-foreign-contribution-compliance-for-ngos" style={{ color: 'var(--primary)', fontWeight: 600 }}>FCRA Registration: Foreign Contribution Compliance for NGOs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/new-income-tax-act-rules-2025" style={{ color: 'var(--primary)', fontWeight: 600 }}>Deciphering the New Income Tax Act &amp; Rules 2025</Link></li>
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

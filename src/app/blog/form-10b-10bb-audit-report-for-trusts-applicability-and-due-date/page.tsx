import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Form 10B/10BB Audit Report for Trusts: Applicability & Due Date',
  description: 'Which trusts and NGOs must file Form 10B vs Form 10BB, the Rs 5 crore income threshold and foreign-contribution trigger that decide between them, and the current filing due date.',
  keywords: [
    'form 10B trust audit report', 'form 10BB applicability', 'form 10B vs 10BB',
    'trust audit report due date', 'section 12AB audit report', 'charitable trust audit form',
    'rule 16CC rule 17B trust audit', 'NGO audit report form',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-10b-10bb-audit-report-for-trusts-applicability-and-due-date' },
  openGraph: {
    title: 'Form 10B/10BB Audit Report for Trusts: Applicability & Due Date',
    description: 'The Rs 5 crore threshold and foreign-contribution trigger that decide between Form 10B and Form 10BB, and the current filing due date.',
    url: 'https://agrawalkhandelwal.com/blog/form-10b-10bb-audit-report-for-trusts-applicability-and-due-date',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 10B/10BB Audit Report for Trusts',
    description: 'Which trusts file Form 10B, which file Form 10BB, and when it is due.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Form 10B/10BB Audit Report for Trusts: Applicability & Due Date', 'form-10b-10bb-audit-report-for-trusts-applicability-and-due-date')

const articleLd = buildArticleLd({
  headline: 'Form 10B/10BB Audit Report for Trusts: Applicability & Due Date',
  description: 'The three conditions that decide whether a Section 12AB trust or Section 10(23C) institution must file Form 10B or the simpler Form 10BB, and the current filing due date.',
  datePublished: '2026-09-17',
  slug: 'form-10b-10bb-audit-report-for-trusts-applicability-and-due-date',
})

const faqs: [string, string][] = [
  ['What decides whether a trust files Form 10B or Form 10BB?', 'Three conditions, tested together, decide it. Form 10B is required if the trust\'s total income (computed without giving effect to the Section 11/12 or Section 10(23C) exemptions) exceeds Rs 5 crore in the year, OR the trust received any foreign contribution during the year, OR the trust applied any part of its income outside India during the year. If none of these three apply, the simpler Form 10BB is sufficient.'],
  ['Is Form 10B only for Section 12AB trusts and Form 10BB only for Section 10(23C) institutions?', 'That was the position before April 2023, but the rules were rewritten so both forms now apply on the same three-condition test regardless of whether the entity is registered under Section 12AB or approved under Section 10(23C). The applicability test is now purely mechanical based on income level, foreign contribution, and application of income outside India, not which registration route the entity holds.'],
  ['What is the due date for filing Form 10B or 10BB?', 'The audit report must be filed at least one month before the due date for filing the trust\'s income tax return, since the return cannot be filed without a valid audit report reference number already on record. For most trusts this works out to filing by September 30 following the financial year, ahead of the October 31 return due date, though CBDT extensions have moved these dates in recent years, so always confirm the current-year notified date rather than assuming the standard calendar applies.'],
  ['What happens if a trust files the wrong form?', 'Filing Form 10BB when the trust actually meets one of the three Form 10B triggers (income above Rs 5 crore, foreign contribution received, or income applied outside India) is treated as a defective or invalid filing, which can put the trust\'s exemption claim at risk since a valid audit report is a precondition for claiming Section 11/12 exemption. It is worth checking all three conditions afresh each year rather than assuming last year\'s form choice still applies, since crossing the Rs 5 crore threshold or receiving foreign funds for the first time changes the answer.'],
  ['Does receiving FCRA-registered foreign contribution automatically trigger Form 10B?', 'Yes. Receiving any foreign contribution during the year, whether or not the trust is separately registered under FCRA, is one of the three independent triggers for Form 10B, regardless of the trust\'s total income level. A trust with modest domestic income that also receives foreign donations still falls into the Form 10B category on that basis alone.'],
  ['Who can file Form 10B or Form 10BB on behalf of a trust?', 'The audit report must be furnished by a chartered accountant in practice, who examines the trust\'s books of account and certifies the prescribed particulars electronically on the income tax portal using their digital signature, after which the trust references the resulting acknowledgment number in its own return filing.'],
]

const faqLd = buildFaqLd(faqs)

export default function Form10B10BBBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Trusts &amp; NGOs</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Form 10B/10BB Audit Report for Trusts: Applicability &amp; Due Date</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 17, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Three conditions decide the form: income above <strong>Rs 5 crore</strong> (pre-exemption), <strong>foreign contribution</strong> received, or income <strong>applied outside India</strong>. Any one triggers Form 10B; none of them means Form 10BB.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The old split (10B for Section 12AB trusts, 10BB for Section 10(23C) institutions) no longer applies; both entity types now use the same three-condition test.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The audit report must be filed roughly a <strong>month before</strong> the trust&apos;s return due date, since the return needs the audit report&apos;s acknowledgment number.</li>
                  <li style={{ marginBottom: 0 }}>Filing the wrong form can jeopardise the exemption claim; re-check all three conditions every year.</li>
                </ul>
              </div>

              <p>A charitable trust or institution claiming exemption under Section 11 (via Section 12AB registration) or Section 10(23C) approval has to get its books audited by a chartered accountant and file that audit report electronically before it can file its own income tax return. Since 2023, two forms exist for this, Form 10B and Form 10BB, and which one applies is decided by a fixed test rather than by which registration the trust holds. Getting this wrong is a common and avoidable way to put an otherwise valid exemption claim at risk.</p>

              <h2>The Three Conditions That Decide the Form</h2>
              <p>Under the current Rules 16CC and 17B, a trust or institution must file the more detailed <strong>Form 10B</strong> if any one of the following applies in the relevant financial year:</p>
              <ol>
                <li>Its total income, computed <strong>without giving effect to</strong> the Section 11/12 exemption or the Section 10(23C) exemption, exceeds <strong>Rs 5 crore</strong>; or</li>
                <li>It received any <strong>foreign contribution</strong> during the year; or</li>
                <li>It applied any part of its income <strong>outside India</strong> during the year.</li>
              </ol>
              <p>If none of these three conditions is met, the trust or institution files the shorter, less detailed <strong>Form 10BB</strong> instead. Note the first test is computed on gross, pre-exemption income; a large trust that would otherwise show a small taxable surplus after applying its exemption can still cross the Rs 5 crore mark before the exemption is applied, and therefore still fall into the Form 10B category.</p>

              <h2>Why the Old 12AB vs 10(23C) Split No Longer Applies</h2>
              <p>Before April 2023, the two forms were tied to how the entity was recognised: trusts registered under Section 12AB generally filed Form 10B, while institutions approved under Section 10(23C), such as universities, hospitals, and specified government-notified bodies, filed Form 10BB. Rules 16CC and 17B were rewritten to remove that distinction. Both Section 12AB trusts and Section 10(23C) institutions now apply the same three-condition test above, and the form to be used depends purely on whether the trust crosses the income threshold or has foreign-contribution or outside-India-application activity, not on the underlying registration route. A trust that has always filed Form 10BB in past years should not assume that continues automatically; if its income grows past Rs 5 crore or it starts receiving foreign donations for the first time, the correct form for that year changes to Form 10B even though the registration itself is unchanged.</p>

              <h2>What Form 10B Covers That Form 10BB Doesn&apos;t</h2>
              <p>Form 10B is the more detailed of the two, requiring additional particulars around specified violations, related-party and specified-person transactions, application of income across categories, accumulation and its utilisation, and investment pattern disclosures that Form 10BB does not require in the same depth. This reflects the underlying policy logic: entities that are larger, receive foreign money, or send funds outside India carry a higher compliance and scrutiny profile, so the audit report asks for correspondingly more detail. Trusts that expect to grow past the Rs 5 crore threshold should build the additional Form 10B-level record-keeping into their processes ahead of the year they actually cross it, rather than scrambling at audit time.</p>

              <h2>Filing Due Date</h2>
              <p>The audit report, whichever form applies, must be filed before the trust can file its own income tax return, and current practice requires it to be furnished at least one month ahead of the return filing due date. For most trusts this works out to a <strong>September 30</strong> filing deadline for the audit report, ahead of the <strong>October 31</strong> return due date for entities required to get their accounts audited. The CBDT has extended these dates in recent assessment years in response to portal issues or representations from professional bodies, so trusts and their auditors should confirm the specific notified date for the relevant assessment year rather than treating September 30/October 31 as fixed every year without checking.</p>

              <h2>Consequences of Filing the Wrong Form or Missing the Deadline</h2>
              <p>Since a valid audit report is a precondition for claiming Section 11/12 or Section 10(23C) exemption, filing the wrong form, or filing it late, can put the entire exemption claim at risk for that year, not just create a procedural penalty. A trust that files Form 10BB when it should have filed Form 10B because it crossed the Rs 5 crore threshold or received foreign contribution for the first time may find its return treated as unsupported by a valid audit report, exposing the full income to tax without the benefit of the exemption it otherwise qualifies for. This makes the three-condition check a mandatory annual exercise, not a one-time classification decided when the trust was first registered.</p>

              <h2>Practical Steps for Trustees and Finance Teams</h2>
              <ul>
                <li><strong>Re-test all three conditions every year</strong> before engaging the auditor, rather than defaulting to last year&apos;s form.</li>
                <li><strong>Track gross pre-exemption income</strong> against the Rs 5 crore threshold through the year, not just at audit time.</li>
                <li><strong>Flag any foreign contribution received</strong>, even a single donation, since it independently triggers Form 10B regardless of income level.</li>
                <li><strong>Coordinate the audit timeline with the CA</strong> well ahead of the deadline, since the return cannot be filed without the audit report&apos;s acknowledgment already generated.</li>
                <li><strong>Keep an eye on the annual compliance calendar</strong> for trusts alongside 12A/80G renewal and FCRA obligations, since these deadlines often cluster in the same filing season.</li>
              </ul>
            </div>

            <PostCTA
            heading="Not sure whether your trust needs Form 10B or Form 10BB?"
            description="We handle the applicability check, the audit itself, and timely filing so your trust&apos;s exemption claim stays protected."
            secondaryLabel="Our Services"
            secondaryHref="/services"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-12a-and-80g-registration-for-ngos-and-charitable-trusts" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 12A &amp; 80G Registration for NGOs</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/taxation-of-charitable-trusts-exemptions-and-compliance" style={{ color: 'var(--primary)', fontWeight: 600 }}>Taxation of Charitable Trusts: Exemptions &amp; Compliance</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fcra-registration-foreign-contribution-compliance-for-ngos" style={{ color: 'var(--primary)', fontWeight: 600 }}>FCRA Registration: Foreign Contribution Compliance</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-compliance-calendar-for-ngos-and-trusts-in-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual Compliance Calendar for NGOs and Trusts</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax &amp; Compliance Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

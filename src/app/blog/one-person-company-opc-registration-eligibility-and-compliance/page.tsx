import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'One Person Company (OPC) Registration: Eligibility & Compliance',
  description: 'Who can incorporate a One Person Company in India, the nominee requirement, why the old paid-up capital and turnover conversion thresholds no longer apply, and the ongoing compliance an OPC must maintain.',
  keywords: [
    'one person company registration', 'OPC eligibility India', 'OPC nominee requirement',
    'OPC incorporation process', 'OPC compliance India', 'OPC vs private limited company',
    'one person company 2026', 'OPC annual compliance',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/one-person-company-opc-registration-eligibility-and-compliance' },
  openGraph: {
    title: 'One Person Company (OPC) Registration: Eligibility & Compliance',
    description: 'Who can incorporate an OPC, the nominee requirement, and the ongoing annual compliance an OPC must maintain.',
    url: 'https://agrawalkhandelwal.com/blog/one-person-company-opc-registration-eligibility-and-compliance',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Person Company (OPC) Registration Guide',
    description: 'Eligibility, the nominee requirement, and ongoing compliance for a One Person Company in India.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('One Person Company (OPC) Registration: Eligibility & Compliance', 'one-person-company-opc-registration-eligibility-and-compliance')

const articleLd = buildArticleLd({
  headline: 'One Person Company (OPC) Registration: Eligibility & Compliance',
  description: 'Eligibility rules for incorporating a One Person Company in India, the mandatory resident-citizen nominee requirement, why paid-up capital and turnover no longer force conversion, and ongoing annual compliance obligations.',
  datePublished: '2026-09-17',
  slug: 'one-person-company-opc-registration-eligibility-and-compliance',
})

const faqs: [string, string][] = [
  ['Who is eligible to incorporate a One Person Company in India?', 'Only a natural person who is both an Indian citizen and an Indian resident can be the sole member of an OPC. A company or an LLP cannot incorporate an OPC, and a person can be the member of only one OPC at a time. Minors cannot be a member or nominee of an OPC.'],
  ['Is a nominee mandatory for an OPC?', 'Yes. At incorporation, the sole member must nominate another individual, who must also be an Indian citizen and resident, who will become the member of the company if the original member dies or becomes otherwise incapable of entering into a contract. The nominee\'s written consent (Form INC-3) is a mandatory incorporation document, and the nominee can be changed later by giving notice to the Registrar.'],
  ['Is there still a paid-up capital or turnover limit that forces an OPC to convert?', 'No, not anymore. The Companies (Incorporation) Second Amendment Rules, 2021 removed the earlier mandatory-conversion trigger (Rs 50 lakh paid-up capital / Rs 2 crore average annual turnover) effective April 1, 2021. An OPC today can grow its capital and turnover without any threshold forcing a mandatory conversion into a private or public company.'],
  ['Can an OPC convert to a private limited company voluntarily?', 'Yes, and the 2021 amendment also removed the earlier two-year minimum holding period from incorporation before voluntary conversion was allowed. An OPC can now convert into a private or public company at the member\'s discretion at any time, most commonly to bring in a co-founder, raise institutional funding, or set up an ESOP pool, none of which an OPC structure permits with a single shareholder. See our dedicated guide on converting an OPC to a private limited company for the step-by-step process.'],
  ['Can an OPC carry out any type of business?', 'Most ordinary trading, service, and manufacturing businesses can be run through an OPC. The structure is restricted from carrying out non-banking financial investment activities, including investing in the securities of any corporate body, and cannot be incorporated as, or voluntarily converted into, a Section 8 (not-for-profit) company.'],
  ['What ongoing annual compliance does an OPC have to maintain?', 'An OPC must maintain proper books of account, get its accounts audited annually by a chartered accountant if the audit threshold applies, hold at least one Board meeting in each half of the calendar year with a gap of at least 90 days between them, and file the standard annual ROC forms (financial statements and annual return) each year, along with DIR-3 KYC for its director. It is exempt from certain private-limited-only requirements, such as the general obligation to prepare a cash flow statement, but is not exempt from ROC filings altogether.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function OPCRegistrationBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Company Incorporation</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>One Person Company (OPC) Registration: Eligibility &amp; Compliance</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 17, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Only a resident Indian citizen can incorporate an OPC, and a resident-citizen <strong>nominee</strong> is mandatory from day one.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The old Rs 50 lakh capital / Rs 2 crore turnover mandatory-conversion trigger was <strong>removed in 2021</strong>; an OPC can now grow without a forced conversion.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Voluntary conversion to a private limited company no longer needs a two-year wait either; it can be done any time the member chooses.</li>
                  <li style={{ marginBottom: 0 }}>An OPC still has real annual ROC compliance; it is a simplified structure, not a compliance-free one.</li>
                </ul>
              </div>

              <p>A One Person Company gives a solo founder the benefit of a separate legal entity and limited liability without needing a second shareholder or a full multi-member Board, a structure that suits a single-owner services or consulting business well. But eligibility and ongoing compliance for an OPC are governed by specific rules under the Companies Act, and a few of the commonly cited restrictions, particularly around forced conversion, have actually been removed since 2021 and are still misreported in a lot of online guidance. This is a companion piece to our existing guide on <Link href="/blog/opc-to-private-limited-conversion-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>converting an OPC to a private limited company</Link>, which covers what to do once you decide to move out of the OPC structure; this post covers the incorporation and ongoing-compliance side instead.</p>

              <h2>Who Can Incorporate an OPC</h2>
              <p>The member of an OPC must be a <strong>natural person who is both an Indian citizen and an Indian resident</strong>. A company, an LLP, or any other body corporate cannot itself be the member of an OPC; it has to be an individual. Two further restrictions apply:</p>
              <ul>
                <li>A person can be the member of <strong>only one OPC at a time</strong>. Someone who already has an OPC cannot incorporate a second one until they exit the first.</li>
                <li><strong>Minors cannot be a member or nominee</strong> of an OPC at any point.</li>
              </ul>
              <p>&quot;Resident&quot; for this purpose carries a specific meaning under the rules, generally tied to a minimum period of stay in India during the preceding financial year, so an Indian citizen who has been abroad for most of the year may not currently qualify even though citizenship is not in question. This is worth checking before assuming eligibility, particularly for founders who split time between India and another country.</p>

              <h2>The Mandatory Nominee Requirement</h2>
              <p>Every OPC must have a nominee named at the time of incorporation, someone who is prepared to step into the sole member&apos;s shoes if the member dies or otherwise becomes incapable of entering into a contract. The nominee must independently satisfy the same eligibility conditions as the member: an Indian citizen and resident. Practically, this means:</p>
              <ul>
                <li>The nominee&apos;s <strong>written consent</strong> (on the prescribed form) is filed as part of the incorporation documents; a nominee cannot be named without their knowledge or agreement.</li>
                <li>The member can change the nominee at any time after incorporation by giving notice to the company and filing the change with the Registrar.</li>
                <li>If the nominee themselves later becomes ineligible or wishes to withdraw, a replacement nominee must be arranged.</li>
              </ul>
              <p>Many first-time founders treat the nominee as a formality at incorporation and never revisit it. It is worth treating the nominee choice with the same seriousness as a Will, since it is functionally the mechanism by which the business continues if something happens to the sole owner.</p>

              <h2>The Capital and Turnover Thresholds No Longer Force Conversion</h2>
              <p>A significant and still commonly misunderstood point: OPCs were originally subject to mandatory conversion into a private or public company once paid-up capital crossed <strong>Rs 50 lakh</strong> or average annual turnover crossed <strong>Rs 2 crore</strong> over three consecutive years. The <strong>Companies (Incorporation) Second Amendment Rules, 2021</strong>, effective <strong>April 1, 2021</strong>, removed this mandatory-conversion trigger entirely. As of today, an OPC can grow its paid-up capital and turnover without any threshold forcing it to convert into a different company type.</p>
              <p>The same 2021 amendment also removed the earlier requirement that an OPC wait a minimum of two years from incorporation before voluntarily converting into a private or public company. A member can now choose to convert at any time, most commonly to bring in a co-founder or investor, raise institutional funding (most VCs will not invest in an OPC), or set up an ESOP pool, all of which require more than one shareholder. The practical takeaway is that conversion today is entirely a strategic decision driven by the business&apos;s actual capital-raising or ownership needs, not a compliance deadline triggered by crossing a number.</p>

              <h2>Activities an OPC Cannot Carry Out</h2>
              <p>Two restrictions apply regardless of size or turnover: an OPC cannot carry on non-banking financial investment activities, including investing in the securities of any body corporate, and it cannot be incorporated as, or later converted into, a <strong>Section 8 company</strong> (the not-for-profit company structure). Founders planning an investment-holding structure or a not-for-profit venture should choose a different entity type from the outset rather than incorporating an OPC and expecting to pivot into either of these later.</p>

              <h2>Ongoing Annual Compliance for an OPC</h2>
              <p>An OPC is a simplified structure relative to a private limited company, but it is not a compliance-free one. Ongoing obligations include:</p>
              <ul>
                <li><strong>Maintaining proper books of account</strong> from incorporation onward.</li>
                <li><strong>Statutory audit</strong> by a chartered accountant, subject to the applicable audit exemption thresholds under the Companies Act.</li>
                <li><strong>At least one Board meeting in each half of the calendar year</strong>, with a minimum gap of 90 days between the two meetings, a relaxed requirement compared to the quarterly minimum for a private limited company.</li>
                <li><strong>Annual ROC filings</strong>, including the financial statements and annual return forms, each year without exception.</li>
                <li><strong>DIR-3 KYC</strong> for the sole director, filed annually like any other company director.</li>
                <li><strong>Income tax return filing</strong> and, where applicable, tax audit under the standard turnover-based thresholds that apply to any company.</li>
              </ul>
              <p>An OPC is exempt from a handful of private-limited-specific requirements, such as the general obligation to prepare a cash flow statement as part of its financial statements, but the exemptions are narrow and specific rather than a blanket compliance holiday. Founders who incorporate an OPC expecting near-zero ongoing filing obligations, on the assumption that a single-shareholder company means minimal paperwork, are often surprised by the actual ROC and audit calendar once the business is running.</p>

              <h2>Choosing Between an OPC and a Private Limited Company</h2>
              <p>An OPC makes the most sense for a genuinely solo founder who wants limited liability and a formal corporate structure without the overhead of a multi-member Board, and who does not expect to raise outside equity funding in the near term. The moment a co-founder, investor, or ESOP pool enters the picture, a private limited company becomes the more practical starting point, since converting later, while now unrestricted by the old thresholds, still involves its own MOA/AOA changes, ROC filings, and share issuance process. See our comparison of <Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited</Link> structures for the broader decision framework if you are still choosing an entity type from scratch.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Planning to incorporate an OPC, or unsure if it is the right structure?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle OPC incorporation end-to-end, from name reservation to nominee documentation, and manage the ongoing ROC and audit compliance once it is running.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/company-incorporation" className="btn btn-outline">Incorporation Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/opc-to-private-limited-conversion-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>OPC to Private Limited Company Conversion</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited Company</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

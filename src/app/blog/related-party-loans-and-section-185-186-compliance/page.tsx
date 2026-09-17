import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Related Party Loans & Section 185/186 Compliance' },
  description: 'How Section 185 restricts loans to directors and Section 186 governs inter-corporate loans and investments under the Companies Act 2013, including limits, approvals, and penalties.',
  keywords: [
    'section 185 companies act', 'section 186 companies act', 'loans to directors companies act',
    'inter-corporate loans limits', 'related party loans compliance', 'section 186 60% 100% limit',
    'loan and investment by company', 'companies act 2013 loan restrictions',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/related-party-loans-and-section-185-186-compliance' },
  openGraph: {
    title: 'Related Party Loans & Section 185/186 Compliance',
    description: 'What Section 185 restricts on director loans, how Section 186 caps inter-corporate loans and investments, and the approvals both require.',
    url: 'https://agrawalkhandelwal.com/blog/related-party-loans-and-section-185-186-compliance',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Related Party Loans & Section 185/186 Compliance',
    description: 'Loans to directors under Section 185 and inter-corporate loans/investments under Section 186, explained with limits and approval requirements.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Related Party Loans & Section 185/186 Compliance', 'related-party-loans-and-section-185-186-compliance')

const articleLd = buildArticleLd({
  headline: 'Related Party Loans & Section 185/186 Compliance',
  description: 'Section 185 restrictions on loans to directors and Section 186 limits on inter-corporate loans, guarantees, and investments under the Companies Act 2013.',
  datePublished: '2026-10-09',
  slug: 'related-party-loans-and-section-185-186-compliance',
})

const faqs: [string, string][] = [
  [
    'Can a private company give a loan to its own director?',
    'Generally no, under Section 185 a company cannot advance a loan (or give a guarantee/security for a loan) to its directors, directors of its holding company, or their relatives and related firms, subject to narrow exceptions. Some wholly-owned subsidiary and ordinary-course-of-business exceptions exist, but the default rule is a prohibition, not a restriction subject to approval.',
  ],
  [
    'What is the difference between Section 185 and Section 186?',
    'Section 185 deals specifically with loans and guarantees to directors and connected persons/entities, and is largely prohibitive. Section 186 deals with a company’s loans, guarantees, and investments to any other body corporate or person (not limited to directors), and is permissive subject to board/shareholder approval and numerical limits, not an outright ban.',
  ],
  [
    'What is the Section 186 limit on inter-corporate loans and investments?',
    'A company can give loans, guarantees, and security, and make investments, up to 60% of its paid-up share capital, free reserves, and securities premium account, or 100% of its free reserves and securities premium account, whichever is higher. Going beyond this combined limit requires a special resolution passed by shareholders before the loan or investment is made.',
  ],
  [
    'Does a wholly-owned subsidiary loan still need Section 186 approval?',
    'Loans, guarantees, or investments made to a wholly-owned subsidiary, or investment in the shares of a joint venture company, are exempted from the specific approval requirements of Section 186, though the company must still disclose the particulars of the loan or investment in its financial statements.',
  ],
  [
    'What happens if a company breaches Section 185 or 186?',
    'Both sections carry monetary penalties on the company and every officer in default, and a Section 185 violation can additionally result in penalties on the director who receives the loan. Beyond the statutory penalty, auditors typically flag such breaches in the audit report, and the loan itself does not become invalid merely because it was extended in contravention, which can create a difficult recovery and disclosure position.',
  ],
  [
    'Is board approval alone enough, or is a special resolution always required?',
    'It depends on the amount. Loans, guarantees, and investments within the Section 186 threshold need approval of all directors present at a board meeting (with unanimous approval required where the company has a term loan from a public financial institution). Once the aggregate crosses the prescribed limit, a special resolution of shareholders is required in addition to board approval, before the transaction is undertaken.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function RelatedPartyLoansSection185186Blog() {
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
              <span className="section-badge">Corporate Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Related Party Loans &amp; Section 185/186 Compliance
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 185</strong> largely prohibits a company from lending to its own directors, directors of its holding company, or their relatives and related firms, with narrow exceptions.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 186</strong> permits loans, guarantees, and investments to other bodies corporate or persons, but caps them at 60% of paid-up capital plus reserves and securities premium, or 100% of free reserves plus securities premium, whichever is higher.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Crossing the Section 186 limit needs a special resolution before the transaction, not after.</li>
                    <li style={{ marginBottom: 0 }}>Interest on any Section 186 loan cannot be lower than the prevailing yield of the closest-tenor government security.</li>
                  </ul>
                </div>

                <p>Related party lending is one of the more common ways companies unintentionally fall out of compliance under the Companies Act 2013. A promoter lends the company&apos;s spare cash to a director for a personal need, or one group company funds another without checking the numbers, and both can trigger a breach even when the intent was entirely routine. Sections 185 and 186 govern these two different situations, and confusing one for the other is where most mistakes happen.</p>

                <h2>Section 185: Loans to Directors, Prohibited by Default</h2>
                <p>Section 185 restricts a company from directly or indirectly advancing a loan, including a loan represented by a book debt, or giving a guarantee or security in connection with a loan, to any of its directors, a director of its holding company, or any partner or relative of such a director, or a firm in which such a director or relative is a partner. The provision is drafted as a prohibition, not a permission-with-conditions clause, which is the key difference from Section 186.</p>
                <p>There are exceptions, and they are narrow. A company can give a loan to a managing or whole-time director if it is part of the conditions of service extended to all employees, or if it is pursuant to a scheme approved by a special resolution. Loans made by a holding company to its wholly-owned subsidiary, or a guarantee/security given by a holding company for a loan taken by its wholly-owned subsidiary, are also exempted, provided the loan is used for the subsidiary&apos;s principal business activities. Any structure outside these exceptions should be assumed to be caught by the prohibition until confirmed otherwise.</p>

                <h2>Section 186: Inter-Corporate Loans, Guarantees, and Investments</h2>
                <p>Section 186 governs a company&apos;s loans, guarantees, and investments made to any other body corporate or person, and unlike Section 185 it is permissive: the transaction is allowed, subject to a numerical ceiling and an approval process that scales with the amount involved.</p>
                <p><strong>The combined limit</strong> on loans given, guarantees or security provided, and investments made under this section is 60% of the company&apos;s paid-up share capital, free reserves, and securities premium account, or 100% of its free reserves and securities premium account, whichever is higher. This is a cumulative, running limit across all such transactions, not a per-transaction cap, so a company needs to track its aggregate exposure rather than clearing each new loan against the limit in isolation.</p>
                <p>Going beyond this limit is not automatically barred; it requires prior approval by a special resolution passed at a general meeting, before the loan, guarantee, security, or investment is made. Approval after the fact does not cure the breach.</p>
                <p>Two further conditions apply to every loan made under this section, whether or not it crosses the ceiling:</p>
                <ul>
                  <li><strong>Board approval</strong> is required with the consent of all directors present at the meeting, and where the company has any term loan subsisting from a public financial institution, prior approval of that institution is also needed unless the aggregate of the proposed transaction and existing loans/investments is within the limit and there is no default in repayment.</li>
                  <li><strong>Interest rate floor</strong>: no loan can be given at a rate lower than the prevailing yield of the one-year, three-year, five-year, or ten-year government security closest to the tenor of the loan, so intra-group loans at nominal or zero interest are not permitted.</li>
                </ul>
                <p>Certain transactions are exempted from the specific approval machinery of Section 186, notably loans, guarantees, or investments made to a wholly-owned subsidiary, and investment in shares of a joint venture company, though the particulars still need to be disclosed in the financial statements as required under the section.</p>

                <h2>Why These Two Sections Get Confused</h2>
                <p>The practical trigger for confusion is a director who is also a shareholder or promoter in a related company. If the company lends money to that related company, and the director&apos;s involvement is incidental, Section 186 applies. If the loan is, in substance, being extended to benefit the director personally, rather than as a genuine inter-corporate transaction, Section 185 exposure can still arise even if the paperwork is structured as a loan to an entity. Getting the structuring and documentation right at the outset, rather than after a loan has already been disbursed, is the difference between a routine board resolution and a compliance breach that needs remediation.</p>

                <h2>Penalties for Non-Compliance</h2>
                <p>A contravention of Section 185 attracts a monetary penalty on the company and every officer in default, and separately on the director or other person to whom the loan, guarantee, or security was given. A contravention of Section 186 similarly attracts penalties on the company and every officer in default. In both cases, the loan itself is not automatically voided by the contravention, which can leave the company in an awkward position of holding a non-compliant transaction on its books that still needs to be disclosed, explained to auditors, and often unwound. This is exactly the kind of related-party structuring question worth raising with your CA before the transaction is executed, alongside the broader <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filing</Link> disclosures these loans eventually feed into.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Practical Checklist</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Identify whether the counterparty is a director/relative (Section 185) or a separate body corporate/person (Section 186) before structuring the transaction.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Check the cumulative Section 186 exposure across all existing loans, guarantees, and investments, not just the new one.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Confirm the interest rate against the relevant government security yield.</li>
                    <li style={{ marginBottom: 0 }}>If the aggregate crosses the limit, get the special resolution passed before disbursing, not after.</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Structuring a related party loan or inter-corporate investment?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We review the Section 185/186 position before you disburse, prepare the board and shareholder resolutions, and handle the related disclosures.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/xbrl-filing-requirements-for-companies" style={{ color: 'var(--primary)', fontWeight: 600 }}>XBRL Filing Requirements for Companies</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/founder-agreement-essentials-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Founder Agreement Essentials</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Corporate Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

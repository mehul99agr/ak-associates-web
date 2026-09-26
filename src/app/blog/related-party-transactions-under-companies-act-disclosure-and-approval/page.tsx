import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Related Party Transactions Under Companies Act: Disclosure & Approval' },
  description: 'Section 188 of the Companies Act 2013: which transactions need board approval, when shareholder approval kicks in, and how Form AOC-2 disclosure works.',
  keywords: [
    'related party transactions companies act', 'section 188 companies act', 'form AOC-2', 'RPT board approval',
    'related party transaction disclosure India', 'section 188 threshold', 'arm\'s length related party transaction',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/related-party-transactions-under-companies-act-disclosure-and-approval' },
  openGraph: {
    title: 'Related Party Transactions Under Companies Act: Disclosure & Approval',
    description: 'Board and shareholder approval requirements for related party transactions under Section 188, and how Form AOC-2 disclosure works.',
    url: 'https://agrawalkhandelwal.com/blog/related-party-transactions-under-companies-act-disclosure-and-approval',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Related Party Transactions Under Companies Act: Disclosure & Approval',
    description: 'Section 188 approval thresholds, board vs shareholder approval, and Form AOC-2 disclosure for related party transactions.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Related Party Transactions Under Companies Act: Disclosure & Approval', 'related-party-transactions-under-companies-act-disclosure-and-approval')

const articleLd = buildArticleLd({
  headline: 'Related Party Transactions Under Companies Act: Disclosure & Approval',
  description: 'Section 188 board and shareholder approval thresholds for related party transactions, and Form AOC-2 disclosure requirements.',
  datePublished: '2026-08-29',
  slug: 'related-party-transactions-under-companies-act-disclosure-and-approval',
})

const faqs: [string, string][] = [
  [
    'What counts as a related party transaction under Section 188?',
    'Section 188 covers contracts or arrangements a company enters into with a related party (directors, key managerial personnel, their relatives, or entities in which they hold a significant interest) covering sale, purchase, or supply of goods or materials, leasing of property, appointment of an agent, appointment to a place of profit, and underwriting of securities, among other specified categories.',
  ],
  [
    'Is board approval required for every related party transaction, even in a private limited company?',
    'Yes. Board approval at a duly convened board meeting is mandatory for every related party transaction covered under Section 188, regardless of company size, and the interested director must not participate in the discussion or vote on that resolution.',
  ],
  [
    'When does shareholder approval become necessary?',
    'Shareholder approval by ordinary resolution is required once the transaction value crosses the thresholds prescribed in Rule 15(3) of the Companies (Meetings of Board and its Powers) Rules, such as a percentage of turnover or a rupee value, whichever is lower, for the relevant category of transaction. Related parties are barred from voting on that resolution. Government notifications have exempted private companies from the special-resolution route in specific circumstances, but board approval remains mandatory throughout; always confirm the current applicable rule and threshold for your company\'s specific transaction before proceeding.',
  ],
  [
    'What is Form AOC-2 and when is it needed?',
    'Form AOC-2, prescribed under Rule 8(2) of the Companies (Accounts) Rules 2014, is an annexure to the Board\'s Report disclosing particulars of contracts or arrangements with related parties: both those not on an arm\'s length basis and material contracts on an arm\'s length basis, along with the parties, duration, salient terms, and the date of board or shareholder approval. It is filed every year alongside the annual financial statements, not just in years with a major transaction.',
  ],
  [
    'What happens if a related party transaction is entered into without the required approval?',
    'An unapproved related party transaction can be voidable at the option of the board or shareholders, and if not ratified within three months, any director or authorised person who entered into it becomes liable to indemnify the company for the resulting loss. Separately, contravention of Section 188 can attract penalties on the company and on every director or officer in default.',
  ],
  [
    'Do transactions between a wholly-owned subsidiary and its holding company still need Section 188 approval?',
    'Certain transactions between a holding company and its wholly-owned subsidiary are exempted from the ordinary-resolution shareholder approval requirement (since the sole shareholder is the holding company itself), but this exemption is narrow and fact-specific; it does not remove the disclosure or board-approval requirement generally. Get the specific structure checked before assuming an exemption applies.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function RelatedPartyTransactionsBlog() {
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
                Related Party Transactions Under Companies Act: Disclosure &amp; Approval
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>August 29, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Board approval is mandatory</strong> for every related party transaction under Section 188, in every company size, with the interested director abstaining.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Shareholder approval</strong> by ordinary resolution is triggered once the transaction crosses the Rule 15(3) thresholds; related parties cannot vote.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Form AOC-2</strong> discloses related party contracts every year as an annexure to the Board's Report, not just in years with a major transaction.</li>
                    <li style={{ marginBottom: 0 }}>Unapproved transactions can be <strong>voidable</strong>, and non-compliance carries penalties on the company and officers in default.</li>
                  </ul>
                </div>

                <p>Family-run and founder-led businesses routinely transact with entities controlled by the same promoters: a group company leasing office space, a director's relative supplying raw material, or a common vendor shared across group entities. None of that is inherently improper, but the Companies Act 2013 requires these transactions to be approved and disclosed through a specific process, precisely because the people on both sides of the deal are the same people. Section 188 governs how.</p>

                <h2>What Counts as a Related Party Transaction</h2>
                <p>Section 188 applies to contracts or arrangements with a related party, a term that covers directors and key managerial personnel, their relatives, firms in which a director or relative is a partner, private companies in which a director is a member or director, and other entities where a director exercises significant influence, among other categories defined under Section 2(76). The covered transaction types include:</p>
                <ul>
                  <li>Sale, purchase, or supply of any goods or materials</li>
                  <li>Selling or disposing of, or buying, property of any kind</li>
                  <li>Leasing of property of any kind</li>
                  <li>Availing or rendering of any services</li>
                  <li>Appointment of a related party to any office or place of profit in the company, subsidiary, or associate company</li>
                  <li>Underwriting the subscription of securities or derivatives of the company</li>
                </ul>
                <p>Note that ordinary transactions carried out at arm's length in the company's usual course of business are treated differently under the disclosure rules than transactions not at arm's length, but the disclosure obligation via Form AOC-2 applies to both categories, not just the non-arm's-length ones.</p>

                <h2>Board Approval: Always Required</h2>
                <p><strong>Every related party transaction covered under Section 188 requires approval at a properly convened board meeting, regardless of the company's size or the transaction's value.</strong> The resolution cannot be passed by circulation; it has to go through an actual board meeting. Any director who is interested in the transaction, whether directly or through a relative, must not be present during the discussion and must not vote on that particular resolution. This is a stricter conflict-of-interest rule than ordinary board business, precisely because the transaction involves the decision-maker's own interest.</p>

                <h2>When Shareholder Approval Is Also Needed</h2>
                <p><strong>Once the transaction value crosses the thresholds prescribed under Rule 15(3) of the Companies (Meetings of Board and its Powers) Rules, an ordinary resolution of the shareholders is additionally required, before board approval alone is treated as sufficient.</strong> The thresholds are expressed as a percentage of turnover, net worth, or a specified rupee value depending on the category of transaction (goods and materials, property, services, and so on), and the lower of the applicable limits generally governs. Related parties (and their votes) are excluded from this resolution, so the approving majority genuinely reflects unrelated shareholders.</p>
                <p>Government notifications issued under Section 462 have relaxed the shareholder-approval route for certain private companies in specific circumstances over the years. Because these thresholds and exemptions are amended periodically and depend on the exact transaction category, confirm the currently applicable Rule 15(3) figures and any private-company relaxation against your company's specific facts before relying on them; board approval, in any case, is never dispensed with.</p>

                <h2>Form AOC-2: Annual Disclosure</h2>
                <p><strong>Form AOC-2 is filed every year as an annexure to the Board's Report</strong>, disclosing particulars of contracts or arrangements with related parties under Section 188: both those not on an arm's length basis, and material contracts on an arm's length basis. The form requires the name of the related party and nature of relationship, the nature, duration, and salient terms of the contract, the amount involved if any, the date of board or shareholder approval where applicable, and any advance paid. A common gap in practice is treating AOC-2 as needed only when a "big" related party deal has happened during the year; it is a standing annual disclosure requirement, filed as a nil or populated annexure regardless.</p>

                <h2>Consequences of Getting It Wrong</h2>
                <p>A related party transaction entered into without the required board or shareholder approval is voidable at the option of the board or, in appropriate cases, the shareholders. If the transaction is not ratified within three months of being entered into, the director or authorised person who arranged it becomes personally liable to indemnify the company for any loss it suffers, and to account for any gain made. Separately, non-compliance with Section 188 attracts monetary penalties on the company and on every officer in default, and where the transaction was undertaken fraudulently, the exposure extends further to the fraud provisions of the Act. This links directly to the personal liability exposure directors carry more generally; see our companion piece on <Link href="/blog/director-responsibility-and-liability-under-the-companies-act" style={{ color: 'var(--primary)', fontWeight: 600 }}>director responsibility and liability under the Companies Act</Link>.</p>
                <p>The practical discipline that avoids most disputes: flag any transaction with a director, KMP, their relatives, or a related entity before it is signed, not after, route it through a board resolution with the interested director recused, check it against the Rule 15(3) thresholds for shareholder approval, and make sure it lands correctly in that year's AOC-2. Getting related party approvals right is also one of the first things reviewed in <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>fundraising due diligence</Link>.</p>
              </div>

              <PostCTA
            heading="Structuring a related party transaction?"
            description="We review related party arrangements against Section 188, prepare board and shareholder resolutions, and file Form AOC-2 as part of your annual compliance."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/director-responsibility-and-liability-under-the-companies-act" style={{ color: 'var(--primary)', fontWeight: 600 }}>Director Responsibility &amp; Liability Under the Companies Act</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/board-meeting-and-agm-compliance-calendar-for-private-limited-companie" style={{ color: 'var(--primary)', fontWeight: 600 }}>Board Meeting &amp; AGM Compliance Calendar</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Startup Fundraising</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

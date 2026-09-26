import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Board Meeting & AGM Compliance Calendar for Private Limited Companies' },
  description: 'Minimum board meeting frequency under Section 173, AGM deadlines under Section 96, and quorum rules every private limited company in India needs to track.',
  keywords: [
    'board meeting compliance companies act', 'minimum board meetings per year', 'AGM due date private limited company',
    'section 173 companies act', 'section 96 AGM', 'quorum board meeting section 174', 'annual general meeting deadline India',
    'board meeting calendar private limited',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/board-meeting-and-agm-compliance-calendar-for-private-limited-companie' },
  openGraph: {
    title: 'Board Meeting & AGM Compliance Calendar for Private Limited Companies',
    description: 'How many board meetings a private limited company must hold, when the AGM is due, and the quorum rules that make a meeting valid.',
    url: 'https://agrawalkhandelwal.com/blog/board-meeting-and-agm-compliance-calendar-for-private-limited-companie',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Board Meeting & AGM Compliance Calendar for Private Limited Companies',
    description: 'Board meeting frequency, AGM deadlines, and quorum rules for private limited companies under the Companies Act 2013.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Board Meeting & AGM Compliance Calendar for Private Limited Companies', 'board-meeting-and-agm-compliance-calendar-for-private-limited-companie')

const articleLd = buildArticleLd({
  headline: 'Board Meeting & AGM Compliance Calendar for Private Limited Companies',
  description: 'Minimum board meeting frequency under Section 173, AGM deadlines under Section 96, and quorum rules for private limited companies.',
  datePublished: '2026-08-29',
  slug: 'board-meeting-and-agm-compliance-calendar-for-private-limited-companie',
})

const faqs: [string, string][] = [
  [
    'How many board meetings must a private limited company hold in a year?',
    'A minimum of four board meetings in each calendar year, with a gap of not more than 120 days between two consecutive meetings, under Section 173 of the Companies Act 2013. Small companies, One Person Companies, dormant companies, and certain start-up private companies can meet the requirement by holding at least one meeting in each half of the calendar year, with a minimum gap of 90 days between the two.',
  ],
  [
    'When is the AGM due for a private limited company?',
    'The first AGM must be held within nine months of the end of the company\'s first financial year (no extension is available for this deadline). For every subsequent year, the AGM must be held within six months of the end of that financial year, and in any case not more than fifteen months after the date of the previous AGM. Both conditions have to be satisfied together.',
  ],
  [
    'Can the AGM deadline be extended?',
    'For subsequent AGMs (not the first), the Registrar of Companies can grant an extension of up to three months on a special-reason application filed in Form GNL-1, ideally before the original due date. There is no provision to extend the first AGM deadline.',
  ],
  [
    'What is the quorum for a board meeting?',
    'Under Section 174, the quorum is one-third of the total strength of directors, or two directors, whichever is higher. Directors participating through video conferencing or other audio-visual means count toward this quorum, so a physically thin attendance does not automatically invalidate a meeting.',
  ],
  [
    'What happens if a company misses its board meeting or AGM deadlines?',
    'Both are treated as compliance defaults under the Companies Act 2013 and attract penalties on the company and its officers in default, in addition to reputational exposure during due diligence, funding rounds, or bank facility renewals. Persistent non-compliance also feeds into broader annual filing defaults and, in some scenarios, director disqualification risk.',
  ],
  [
    'Do these requirements apply to a One Person Company (OPC)?',
    'OPCs get relief on board meeting frequency (the half-yearly, 90-day-gap rule applies) and are exempt from holding an AGM altogether, since an OPC has only one member. All other governance and filing obligations under the Companies Act still apply.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function BoardMeetingAgmComplianceCalendarBlog() {
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
                Board Meeting &amp; AGM Compliance Calendar for Private Limited Companies
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
                    <li style={{ marginBottom: '0.4rem' }}>A private limited company needs <strong>at least 4 board meetings a year</strong>, with no more than <strong>120 days</strong> between two consecutive meetings.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The <strong>first AGM</strong> is due within 9 months of the first financial year end; every <strong>subsequent AGM</strong> is due within 6 months of the financial year end, and never more than 15 months after the previous AGM.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Only subsequent-year AGM deadlines can be extended, by up to 3 months, through a Registrar application on Form GNL-1. The first AGM deadline cannot be extended.</li>
                    <li style={{ marginBottom: 0 }}>Board meeting quorum is <strong>1/3rd of directors or 2, whichever is higher</strong>; video-conferencing attendance counts.</li>
                  </ul>
                </div>

                <p>Board meetings and the Annual General Meeting (AGM) are two of the most frequently missed compliance items for private limited companies, not because the rules are complex, but because they are easy to lose track of once the initial incorporation paperwork is behind you. Both are governed by the Companies Act 2013, both carry penalties for default, and both are among the first things a lender, investor, or auditor checks during due diligence. This guide lays out the calendar every private limited company should be tracking.</p>

                <h2>Board Meeting Frequency: Section 173</h2>
                <p><strong>Every private limited company must hold a minimum of four board meetings in each calendar year, and the gap between any two consecutive meetings cannot exceed 120 days.</strong> This is not a "four meetings spread across the year however you like" rule; the 120-day cap forces reasonably even spacing, so you cannot, for example, hold three meetings in the first quarter and then go silent for eight months.</p>
                <p>A relaxed version of this rule applies to small companies, One Person Companies (OPCs), dormant companies, and certain start-up private companies: they are deemed compliant if they hold at least one board meeting in each half of the calendar year, with a minimum gap of 90 days between the two. Note that this is a floor, not a ceiling; a growing company usually needs to meet more often than the statutory minimum simply to run the business.</p>
                <p>Directors must receive at least seven days' notice of a board meeting, in writing or electronically, and every meeting needs to be properly minuted and the minutes signed within the prescribed timeline. Missing minutes is one of the most common gaps found during a later compliance clean-up, even when the meetings themselves were actually held.</p>

                <h2>Quorum: Section 174</h2>
                <p><strong>The quorum for a board meeting is one-third of the total strength of directors, or two directors, whichever is higher.</strong> "Total strength" means the number of directors actually on the board at that time, not the maximum permitted under the Articles of Association. Directors joining through video conferencing or other approved audio-visual means are counted toward quorum, which matters for companies with directors based outside the city or the country, including firms with an NRI or foreign director on the board.</p>
                <p>If quorum is not present within thirty minutes of the scheduled time, the meeting automatically stands adjourned to the same day the following week, at the same time and place (or as otherwise decided by the board), unless the Articles specify a different adjournment rule. Resolutions passed without a valid quorum are void, which is why quorum should be recorded explicitly in the minutes, not assumed.</p>

                <h2>AGM Deadlines: Section 96</h2>
                <p><strong>The first AGM must be held within nine months from the end of the company's first financial year.</strong> Because there is no provision to extend this deadline, it is worth calendaring the moment incorporation is complete rather than waiting until the financial year closes.</p>
                <p><strong>Every subsequent AGM must be held within six months of the end of the relevant financial year, and in no case more than fifteen months after the date of the previous AGM.</strong> Both conditions apply together; satisfying only one is not enough. For a company on an April-to-March financial year, this ordinarily means the AGM falls by September 30.</p>
                <p>If genuine special reasons prevent the company from holding the AGM within the statutory window, the company can apply to the Registrar of Companies in Form GNL-1 for an extension of up to three months, along with a board resolution and supporting explanation, ideally filed before the original due date lapses. This extension route is available only for subsequent AGMs, not the first.</p>

                <h2>Why This Calendar Matters Beyond the Penalty</h2>
                <p>Board meeting and AGM compliance feed directly into other filings that depend on them. The AGM is where the financial statements are adopted, auditors are (re)appointed, and dividends (if any) are declared, all of which then need to be reflected in the <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filings (AOC-4 and MGT-7)</Link> within their own separate deadlines measured from the AGM date. A late or unheld AGM has a knock-on effect on every filing downstream of it. It is also one of the first governance checks an investor's legal team runs during a funding round, alongside the <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>fundraising due diligence checklist</Link>.</p>
                <p>A simple annual calendar, anchored to the financial year close, with board meeting dates spaced roughly quarterly and the AGM date fixed early, removes most of the risk. Companies that treat this as a running checklist rather than a year-end scramble rarely run into default notices.</p>
              </div>

              <PostCTA
            heading="Need help setting up your compliance calendar?"
            description="We handle board meeting scheduling, minutes, AGM preparation, and the full annual ROC filing cycle for private limited companies."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/related-party-transactions-under-companies-act-disclosure-and-approval" style={{ color: 'var(--primary)', fontWeight: 600 }}>Related Party Transactions Under Companies Act</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/director-responsibility-and-liability-under-the-companies-act" style={{ color: 'var(--primary)', fontWeight: 600 }}>Director Responsibility &amp; Liability Under the Companies Act</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

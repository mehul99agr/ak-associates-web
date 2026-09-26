import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Director Responsibility & Liability Under the Companies Act' },
  description: 'Director fiduciary duties under Section 166, when personal liability attaches, and the Section 164 grounds for director disqualification.',
  keywords: [
    'director liability companies act', 'section 166 duties of directors', 'director disqualification section 164',
    'personal liability of directors India', 'fiduciary duty director companies act', 'director disqualification grounds',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/director-responsibility-and-liability-under-the-companies-act' },
  openGraph: {
    title: 'Director Responsibility & Liability Under the Companies Act',
    description: 'What directors owe the company under Section 166, when personal liability kicks in, and the Section 164 disqualification grounds.',
    url: 'https://agrawalkhandelwal.com/blog/director-responsibility-and-liability-under-the-companies-act',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Director Responsibility & Liability Under the Companies Act',
    description: 'Fiduciary duties, personal liability scenarios, and disqualification grounds for directors under the Companies Act 2013.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Director Responsibility & Liability Under the Companies Act', 'director-responsibility-and-liability-under-the-companies-act')

const articleLd = buildArticleLd({
  headline: 'Director Responsibility & Liability Under the Companies Act',
  description: 'Director fiduciary duties under Section 166, personal liability scenarios, and Section 164 director disqualification grounds.',
  datePublished: '2026-08-30',
  slug: 'director-responsibility-and-liability-under-the-companies-act',
})

const faqs: [string, string][] = [
  [
    'What are the core duties of a director under Section 166?',
    'A director must act in good faith to promote the company\'s objects for the benefit of its members as a whole and in the best interests of the company, its employees, shareholders, and the community; exercise duties with reasonable care, skill, and diligence and independent judgment; avoid situations of direct or indirect conflict of interest; not achieve or attempt undue gain or advantage for themselves or their associates; and not assign their office to another person.',
  ],
  [
    'Can a director be held personally liable for the company\'s debts or defaults?',
    'As a general rule, a company is a separate legal entity and directors are not personally liable for its debts. Personal liability attaches in specific scenarios: breach of fiduciary duty under Section 166, undue gain (which must be paid back to the company), fraud, acting beyond authority, signing off on financial statements or filings known to be inaccurate, and certain statutory defaults such as unpaid TDS or GST dues in prescribed circumstances, or where a court lifts the corporate veil.',
  ],
  [
    'What is the penalty for violating Section 166 duties?',
    'Contravention of Section 166 is punishable with a fine of not less than Rs 1 lakh, which may extend to Rs 5 lakh. A director found to have made undue gain in breach of duty must also pay that gain back to the company, separately from the statutory fine.',
  ],
  [
    'What are the main grounds for director disqualification under Section 164?',
    'Absolute grounds include unsound mind (as declared by a competent court) and undischarged insolvency. Conditional grounds include being a director of a company that has failed to file financial statements or annual returns for three consecutive financial years, or a company that has failed to repay deposits, redeem debentures, or pay declared dividends for specified periods. A disqualified director cannot be appointed as director of that company or any other company for five years.',
  ],
  [
    'Does resigning from a company protect a director from liability for past acts?',
    'No. Resignation stops liability from accruing going forward but does not erase responsibility for decisions taken or defaults committed while the person was a director. A resigning director should ensure Form DIR-11 is filed and the resignation is properly recorded, and should keep evidence of the resignation date, since liability questions often turn on exactly when someone ceased to be a director.',
  ],
  [
    'Are independent or non-executive directors held to the same liability standard as executive directors?',
    'Independent directors are generally liable only for acts of omission or commission that occurred with their knowledge (attributable through board processes), with their consent or connivance, or where they failed to act diligently, rather than for the day-to-day operational conduct of the company. This is a narrower standard than for whole-time or executive directors, but it is not blanket immunity, and independent directors who rubber-stamp decisions without genuine oversight remain exposed.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function DirectorResponsibilityLiabilityBlog() {
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
                Director Responsibility &amp; Liability Under the Companies Act
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>August 30, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 166</strong> codifies fiduciary duties: good faith, reasonable care, avoiding conflicts of interest, and no undue personal gain.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The company's separate legal identity generally shields directors from its debts, but <strong>personal liability attaches</strong> for breach of duty, fraud, undue gain, and certain statutory defaults.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 164</strong> disqualifies a director for grounds ranging from unsound mind and insolvency to three consecutive years of non-filing by any company they directed, with a five-year bar.</li>
                    <li style={{ marginBottom: 0 }}>Independent directors face a narrower liability standard tied to knowledge and diligence, not blanket immunity.</li>
                  </ul>
                </div>

                <p>Being appointed a director carries more legal weight than the title suggests. The Companies Act 2013 places specific, codified duties on every director and creates real scenarios, not theoretical ones, in which personal assets and personal eligibility to hold future directorships are on the line. This matters most for founder-directors and family-business directors who wear the hat casually, without necessarily tracking what the role legally requires.</p>

                <h2>The Fiduciary Duties: Section 166</h2>
                <p>Before 2013, a director's fiduciary duties existed mainly as common-law and equitable principles built up through case law. <strong>Section 166 codified them into statute for the first time</strong>, and the core duties are:</p>
                <ul>
                  <li><strong>Act in good faith</strong> to promote the company's objects for the benefit of its members as a whole, and in the best interests of the company, its employees, shareholders, the community, and the environment.</li>
                  <li><strong>Exercise reasonable care, skill, and diligence,</strong> and exercise independent judgment rather than simply deferring to a dominant promoter or co-director.</li>
                  <li><strong>Avoid conflicts of interest,</strong> direct or indirect, with the company's interests.</li>
                  <li><strong>Not achieve or attempt undue gain or advantage,</strong> for themselves, their relatives, partners, or associates; if found guilty, the director must pay the gain back to the company.</li>
                  <li><strong>Not assign the office of director</strong> to any other person; any such assignment is void.</li>
                </ul>
                <p>These duties are not exhaustive, older common-law fiduciary principles continue to apply wherever the statute is silent, and contravention of Section 166 carries a fine of not less than Rs 1 lakh, extendable to Rs 5 lakh, over and above any disgorgement of undue gain.</p>

                <h2>When Personal Liability Actually Attaches</h2>
                <p>The starting position under company law is that a company is a separate legal person, and its debts and obligations are its own, not its directors'. Directors are not personally liable for ordinary business losses or a company simply running into financial difficulty. Personal exposure arises in narrower, specific circumstances:</p>
                <ul>
                  <li><strong>Breach of Section 166 duties,</strong> including acting in bad faith, self-dealing, or undue gain.</li>
                  <li><strong>Fraud,</strong> where the corporate veil can be lifted and directors held personally accountable for fraudulent conduct.</li>
                  <li><strong>Acting beyond the company's or the board's authority (ultra vires acts),</strong> which can expose the individual director rather than the company.</li>
                  <li><strong>Signing off on financial statements, returns, or representations known to be false or misleading.</strong></li>
                  <li><strong>Certain statutory defaults,</strong> such as specified categories of unpaid TDS or GST liabilities, where the relevant tax statute independently fixes responsibility on directors of a private company in defined circumstances.</li>
                  <li><strong>Related party transactions entered into without required approval,</strong> where the interested director can become liable to indemnify the company for resulting loss (see our companion post on <Link href="/blog/related-party-transactions-under-companies-act-disclosure-and-approval" style={{ color: 'var(--primary)', fontWeight: 600 }}>related party transactions under Section 188</Link>).</li>
                </ul>
                <p>Independent and non-executive directors face a narrower version of this exposure: they are ordinarily liable only for acts that occurred with their knowledge, consent, or connivance, or where they failed to act with diligence, rather than for day-to-day operational decisions they were not part of. This is meaningful protection, but it depends on the director actually engaging with board matters and documenting dissent where warranted, not simply holding the title.</p>

                <h2>Disqualification: Section 164</h2>
                <p>Separate from personal financial liability, Section 164 sets out grounds on which a person becomes disqualified from being appointed or continuing as a director. The absolute grounds under Section 164(1) include being of unsound mind as declared by a competent court, and being an undischarged insolvent or having a pending insolvency application. The conditional grounds under Section 164(2) are the ones that trip up otherwise well-meaning directors most often: <strong>if a company has failed to file its financial statements or annual returns for three consecutive financial years,</strong> or has failed to repay accepted deposits, redeem debentures on the due date, or pay declared dividends for the periods specified, every director of that company at the relevant time becomes disqualified.</p>
                <p>The consequence is significant: a disqualified director cannot be appointed as a director of that company, or of any other company, for five years from the date the default arose. This is why a founder sitting on the board of multiple group entities needs every entity's filing compliance current, not just the flagship company's; a filing lapse in one dormant group company can disqualify the same individual across every board seat they hold.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Practical Takeaway</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>The single most common trigger for both disqualification and downstream personal liability exposure is not fraud or misconduct; it is unfiled annual returns and financial statements accumulating quietly across group entities. Keeping <Link href="/blog/board-meeting-and-agm-compliance-calendar-for-private-limited-companie" style={{ color: 'var(--primary)', fontWeight: 600 }}>board meeting and AGM compliance</Link> current, and the resulting <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>ROC filings</Link> on time, is the cheapest form of director-liability insurance available.</p>
                </div>

                <p>None of this is a reason to avoid directorships; it is a reason to treat the role with the seriousness the statute assigns it. Understand what the company you are a director of is actually filing, question transactions that look self-dealing before they happen, and make sure every entity you sit on the board of, however small or dormant, stays current on its statutory filings.</p>
              </div>

              <PostCTA
            heading="Concerned about a director liability or disqualification issue?"
            description="We review board compliance across group entities, help remove director disqualification flags, and advise on personal liability exposure before it becomes a dispute."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/board-meeting-and-agm-compliance-calendar-for-private-limited-companie" style={{ color: 'var(--primary)', fontWeight: 600 }}>Board Meeting &amp; AGM Compliance Calendar</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/related-party-transactions-under-companies-act-disclosure-and-approval" style={{ color: 'var(--primary)', fontWeight: 600 }}>Related Party Transactions Under Companies Act</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC &amp; DIN Application: A Director's Guide</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

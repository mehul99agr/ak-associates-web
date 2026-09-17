import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Cap Table Management: Common Mistakes Founders Make',
  description: 'Why cap tables go wrong for Indian startups: stale updates after funding rounds, fully-diluted vs issued-basis confusion, dilution modeling mistakes, and reconciling against ROC filings.',
  keywords: [
    'cap table management startup', 'cap table mistakes founders', 'fully diluted cap table',
    'startup equity dilution', 'cap table ESOP pool', 'cap table India startup',
    'cap table reconciliation ROC', 'startup share capital table',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/cap-table-management-common-mistakes-founders-make' },
  openGraph: {
    title: 'Cap Table Management: Common Mistakes Founders Make',
    description: 'The recurring cap table errors that cost founders equity, delay fundraising, and create ROC mismatches.',
    url: 'https://agrawalkhandelwal.com/blog/cap-table-management-common-mistakes-founders-make',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cap Table Management: Common Mistakes Founders Make',
    description: 'A practical look at where Indian startup cap tables go wrong, and how to keep yours clean.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Cap Table Management: Common Mistakes Founders Make', 'cap-table-management-common-mistakes-founders-make')

const articleLd = buildArticleLd({
  headline: 'Cap Table Management: Common Mistakes Founders Make',
  description: 'Common cap table errors: stale updates, fully-diluted vs issued-basis confusion, poor dilution modeling, spreadsheet tooling failures, and mismatches against ROC filings.',
  datePublished: '2026-11-01',
  slug: 'cap-table-management-common-mistakes-founders-make',
})

const faqs: [string, string][] = [
  [
    'What is a cap table and why does it matter so much for a startup?',
    'A capitalisation table (cap table) is the record of who owns what percentage of a company: founders, investors, ESOP pool holders, and any convertible instruments, across every funding round. It matters because every future decision, a new funding round, an ESOP grant, a founder exit, or an acquisition, is priced and structured off the cap table. An inaccurate cap table means every one of those decisions is being made on wrong numbers.',
  ],
  [
    'What is the difference between a fully-diluted and an issued-share-basis cap table?',
    'An issued-share-basis cap table shows ownership based only on shares actually allotted today. A fully-diluted cap table also accounts for shares that could be issued later: the unallocated ESOP pool, unexercised options, and convertible instruments like CCPS or CCDs assumed converted. Investors almost always price a round and calculate their percentage on a fully-diluted basis, so a founder looking only at the issued-basis number will consistently overestimate their own post-round ownership.',
  ],
  [
    'How often should a startup update its cap table?',
    'Immediately after every event that changes ownership or could change it: a funding round closing, an ESOP grant or exercise, a share transfer, a convertible note or SAFE conversion, or a buyback. Waiting until the next fundraise to reconcile the cap table is the single most common cause of the errors and disputes described above, because small unrecorded changes compound across rounds.',
  ],
  [
    'Should a startup use a spreadsheet or dedicated cap table software?',
    'A spreadsheet works fine for a pre-seed company with two or three founders and no outside capital. Once a startup has raised external funding, granted ESOPs, or brought on more than a handful of shareholders, dedicated cap table software (or at minimum, a professionally maintained and version-controlled spreadsheet with a clear audit trail) becomes worth the cost, because manual formula errors in fully-diluted dilution math are extremely easy to make and hard to spot without a second set of eyes.',
  ],
  [
    'What happens if the cap table doesn\'t match the company\'s ROC filings?',
    'A mismatch between the cap table and the actual share allotments reflected in ROC records (via PAS-3 return of allotment filings, the register of members, and share certificates) is a red flag that surfaces during due diligence for the next funding round or an acquisition. It can delay or derail a deal while the discrepancy is investigated and corrected, and in some cases points to shares that were verbally promised or informally tracked but never legally issued.',
  ],
  [
    'Can a messy cap table be fixed once a startup already has investors?',
    'Yes, but it takes real work: pulling every allotment, transfer, and ESOP document, reconstructing ownership history event by event, and reconciling it against ROC filings and share certificates. It is far cheaper and less disruptive to do this reconciliation before the next fundraise or due diligence process forces it, rather than during one, when time pressure and investor scrutiny make errors more costly to unwind.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function CapTableManagementBlog() {
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
              <span className="section-badge">Startup Advisory</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Cap Table Management: Common Mistakes Founders Make
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published November 1, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Update the cap table <strong>immediately</strong> after every round, ESOP grant, or transfer; waiting until the next fundraise is where most errors compound.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Investors price rounds on a <strong>fully-diluted</strong> basis, not issued-share basis; confusing the two leads founders to overestimate their real ownership.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Model dilution <strong>before</strong> agreeing to a valuation or ESOP pool size, not after the term sheet is signed.</li>
                    <li style={{ marginBottom: 0 }}>Reconcile the cap table against actual <strong>ROC filings and share certificates</strong> periodically, not only when an investor asks during due diligence.</li>
                  </ul>
                </div>

                <p>A cap table looks like a simple spreadsheet: names, share counts, percentages. In practice it is the single most consequential document a startup maintains after its incorporation papers, because every equity decision, a new investor&apos;s stake, an ESOP grant, a co-founder&apos;s exit terms, is priced directly off it. We see the same handful of cap table mistakes recur across founders at very different stages, from pre-seed to Series A, and they are almost always avoidable with a bit of discipline rather than legal complexity.</p>

                <h2>What a Cap Table Actually Is</h2>
                <p>A capitalisation table records every class of ownership in a company: equity shares held by founders, preference shares or CCPS held by investors, the ESOP pool (both granted and unallocated), and any outstanding convertible instruments such as convertible notes or SAFEs that haven&apos;t converted into equity yet. A properly maintained cap table shows, at any point in time, exactly who owns what percentage of the company on both an issued and a fully-diluted basis, and it should trace back cleanly to actual board resolutions, allotment filings, and share certificates rather than existing only as a founder&apos;s private spreadsheet.</p>

                <h2>Mistake 1: Not Updating It After Every Round or ESOP Grant</h2>
                <p>The most common failure mode is treating the cap table as a document you revisit only when it&apos;s needed, typically right before the next fundraise. Between rounds, ESOP grants get made informally, small share transfers happen among co-founders, and convertible instruments accrue interest or approach their conversion trigger, none of which gets reflected until someone finally sits down to reconstruct the history. By the time that reconstruction happens, memories are fuzzy, some approvals were never formally documented, and reconciling the true position takes far longer than it would have taken to update the cap table in real time after each event.</p>
                <p>The fix is procedural, not technical: designate updating the cap table as a standing action item every time the board approves an allotment, ESOP grant, or transfer, not a task deferred to whenever there&apos;s free time.</p>

                <h2>Mistake 2: Confusing Fully-Diluted and Issued-Basis Ownership</h2>
                <p>Founders frequently calculate their own ownership percentage using only shares currently issued, ignoring the unallocated ESOP pool and any convertible instruments that will eventually convert into equity. Investors, by contrast, almost universally price a round and state their stake on a <strong>fully-diluted basis</strong>, meaning the ESOP pool and convertibles are assumed converted upfront. This mismatch causes a founder to believe they hold, say, 60% of the company when the fully-diluted number, once the ESOP pool and outstanding convertibles are folded in, is meaningfully lower. This gap tends to surprise founders most acutely when a new ESOP pool is created or topped up as part of a funding round, since that dilution usually comes disproportionately out of existing (mostly founder) shareholding rather than being spread evenly across all shareholders.</p>

                <h2>Mistake 3: Not Modeling Dilution Before Agreeing to Terms</h2>
                <p>A term sheet negotiation moves fast, and it is tempting to agree to a headline valuation and an ESOP pool size without first running the actual dilution math on the existing cap table. The size of a pre-money ESOP pool top-up, in particular, has an outsized effect on founder dilution because it is typically carved out of the pre-money valuation, meaning existing shareholders (mostly founders, at early stages) absorb that dilution before the new investor&apos;s money even comes in. Running the numbers on the actual cap table before signing, not after, is the only way to know what the round genuinely costs founders in percentage terms, as opposed to what the headline valuation implies.</p>

                <h2>Mistake 4: Poor Cap Table Tooling as the Company Scales</h2>
                <p>A basic spreadsheet is perfectly adequate for a two or three-founder pre-seed company with no outside capital. It becomes a liability once a startup has raised multiple rounds, granted ESOPs to a growing team, and accumulated several classes of shares with different rights. Manual formula errors, a dilution calculation that wasn&apos;t updated after a new tranche of shares, a percentage column that references the wrong row, are easy to introduce and difficult to catch without a structured review process or dedicated cap table software. At scale, an error in the cap table isn&apos;t just an internal inconvenience; it can produce numbers that don&apos;t match what investors are independently calculating, which is an uncomfortable conversation to have mid-negotiation.</p>

                <h2>Mistake 5: Not Reconciling the Cap Table Against ROC Filings</h2>
                <p>A cap table is only as accurate as the underlying legal record it&apos;s meant to represent. Every share allotment should be backed by a board resolution, a PAS-3 return of allotment filed with the Registrar of Companies, an entry in the statutory register of members, and an issued share certificate. When founders maintain the cap table as a separate tracking document without periodically checking it against these actual filings, gaps creep in: shares that were verbally promised but never formally allotted, allotments that were filed with the ROC but never reflected back in the internal spreadsheet, or founder shareholding that doesn&apos;t match what MCA records show. These discrepancies are exactly the kind of thing that surfaces during <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>due diligence for a fundraise</Link>, and unwinding them under deal-timeline pressure is far more stressful than catching them during a routine periodic reconciliation.</p>

                <h2>Getting Cap Table Hygiene Right</h2>
                <p>None of this requires sophisticated tooling or legal complexity; it requires treating the cap table as a live legal record rather than a static reference spreadsheet. Update it the same day any ownership-affecting event is approved, always distinguish fully-diluted from issued-basis figures when discussing ownership percentages, model dilution against the real cap table before agreeing to term sheet numbers, and periodically reconcile the spreadsheet against actual ROC filings and share certificates rather than waiting for an investor&apos;s diligence team to find the gap first. This discipline pairs naturally with the broader compliance rhythm covered in our <Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup compliance calendar</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help cleaning up or maintaining your cap table?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We reconcile cap tables against ROC filings, model dilution before term sheets are signed, and set up processes to keep the cap table accurate round after round.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Startup Fundraising</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-structuring-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Structuring for Indian Startups</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/founder-agreement-essentials-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Founder Agreement Essentials for Indian Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Startup Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Survey Under Section 133A: Rights & Obligations of Taxpayers' },
  description: 'What an income tax survey under Section 133A can and cannot do, the business-hours rule, impounding limits, and what a taxpayer is and is not required to do.',
  keywords: [
    'section 133a survey income tax', 'income tax survey rights', 'survey vs search income tax',
    'section 133a impounding books', 'income tax survey procedure', 'power of survey income tax',
    'income tax survey business premises', 'section 133a taxpayer rights',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/survey-under-section-133a-rights-and-obligations-of-taxpayers' },
  openGraph: {
    title: 'Survey Under Section 133A: Rights & Obligations of Taxpayers',
    description: 'What an income tax authority can and cannot do during a Section 133A survey, and what a taxpayer is and is not required to do.',
    url: 'https://agrawalkhandelwal.com/blog/survey-under-section-133a-rights-and-obligations-of-taxpayers',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survey Under Section 133A: Rights & Obligations of Taxpayers',
    description: 'The business-hours rule, impounding limits, and taxpayer rights during an income tax survey.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Survey Under Section 133A: Rights & Obligations of Taxpayers', 'survey-under-section-133a-rights-and-obligations-of-taxpayers')

const articleLd = buildArticleLd({
  headline: 'Survey Under Section 133A: Rights & Obligations of Taxpayers',
  description: 'What a Section 133A income tax survey can and cannot do, the business-hours entry rule, impounding limits on books of account, and taxpayer rights and obligations during one.',
  datePublished: '2026-08-19',
  slug: 'survey-under-section-133a-rights-and-obligations-of-taxpayers',
})

const faqs: [string, string][] = [
  [
    'What is the difference between a survey under Section 133A and a search under Section 132?',
    'A survey is a verification exercise: income tax authorities can enter business premises, inspect books and stock, record statements, and impound documents, but they cannot seize cash, stock, or other valuables. A search (commonly called a raid) is a stronger enforcement action authorised separately under Section 132, carried out with a warrant, and does allow seizure of undisclosed cash, stock, and other assets. A survey cannot itself become a seizure exercise; that requires the separate search authorisation.',
  ],
  [
    'When can income tax authorities enter my premises for a survey?',
    'For a place of business or profession, the authority can enter only during the hours that place is actually open for business. For any other place where books of account, documents, cash, stock, or valuables relating to the business are kept, entry is restricted to between sunrise and sunset. A survey conducted outside these windows, or at a location with no genuine connection to the business, can be challenged on that ground.',
  ],
  [
    'Can books of account be taken away during a survey?',
    'Books of account and documents can be impounded, meaning retained by the authority, but this requires the officer to record reasons in writing. Retention beyond 15 working days requires approval from a Principal Chief Commissioner, Chief Commissioner, Principal Director General, or Director General. Cash, stock, and other valuable articles, by contrast, cannot be seized during a survey at all; that requires a separate search action.',
  ],
  [
    'Am I required to answer every question during a survey?',
    'The authority can record statements of persons found at the premises, including the taxpayer and employees, and these statements can later be used as evidence. However, a statement recorded during a survey does not carry the same evidentiary weight by default as one recorded under oath during a search, and courts have repeatedly held that additions to income cannot be based solely on a survey statement without corroborating material. You are expected to cooperate and answer truthfully, but a statement made under pressure, without supporting documents, is not by itself conclusive proof of undisclosed income.',
  ],
  [
    'What should I do if a survey team arrives at my business?',
    'Verify the identity and authorisation of the officials before allowing entry, cooperate with the inspection of books, stock, and records within the legal scope described above, and avoid signing any statement you have not had a chance to read and understand. It is reasonable to request that your CA be informed and, where practical, be present or reachable during the process; note down what is impounded and obtain an inventory or receipt for anything taken.',
  ],
  [
    'Has Section 133A been renumbered under the Income Tax Act 2025?',
    'This provision has been renumbered under the Income Tax Act 2025. This guide was unable to confirm a reliable, corroborated new-Act section reference at the time of writing, so it refers to the familiar old-Act number, Section 133A, throughout. Always confirm the exact current section citation with your CA before relying on it in any formal submission.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function SurveySection133ABlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Survey Under Section 133A: Rights &amp; Obligations of Taxpayers
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 19, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>A <strong>Section 133A survey</strong> lets income tax authorities enter, inspect, and verify books, stock, and records; it is a verification exercise, not a seizure action.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Entry to a place of business is limited to its actual business hours; other premises can only be entered between sunrise and sunset.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Books can be impounded with recorded reasons, but retention beyond 15 working days needs higher approval; cash and stock cannot be seized during a survey.</li>
                    <li style={{ marginBottom: 0 }}>This provision has been renumbered under the Income Tax Act 2025; a reliable new-Act section number was not confirmed at the time of writing, so this guide uses the familiar old-Act name throughout.</li>
                  </ul>
                </div>

                <p>A <strong>survey under Section 133A</strong> is one of the more disruptive but least understood interactions a business can have with the Income Tax Department, because it happens with no advance notice and often generates confusion about what officials are actually allowed to do. Unlike a search, a survey is a verification tool, and its powers are correspondingly narrower. Knowing exactly where the legal boundary sits protects both compliance and the taxpayer&apos;s rights during the process itself.</p>

                <h2>What a Survey Is For</h2>
                <p>A survey allows an income tax authority to enter business or professional premises to verify books of account, cash, stock, and other records against what has been reported, and to check for any income or transactions that are not properly recorded. It can be triggered by a mismatch between reported figures and third-party information, a tip-off, or as part of a wider verification drive in a particular sector or location. It is fundamentally a fact-finding and verification exercise, distinct from the enforcement character of a search under Section 132, which is a separate, more intrusive action carried out under its own warrant-based authorisation and does permit seizure of assets.</p>

                <h2>Where and When Entry Is Allowed</h2>
                <p>The law draws a clear line based on the type of premises:</p>
                <ul>
                  <li><strong>A place of business or profession</strong> can only be entered during the hours that place is actually open for the conduct of that business or profession.</li>
                  <li><strong>Any other place</strong> where books of account, documents, cash, stock, or other valuables relating to the business are kept, such as a residence used to store records, can only be entered between sunrise and sunset.</li>
                </ul>
                <p>Entry outside these windows, or at a location that has no genuine connection to the business under verification, falls outside the scope of what the provision authorises and is a point worth raising with your CA if it occurs.</p>

                <h2>What Can and Cannot Happen During a Survey</h2>
                <p>Within a lawful survey, the authority can:</p>
                <ul>
                  <li>Inspect books of account, documents, and records maintained at the premises.</li>
                  <li>Verify cash, stock, and other valuable articles present, and make a reasonable inventory of them.</li>
                  <li>Take copies of, or extracts from, books and documents.</li>
                  <li>Record the statement of any person found at the premises that may be useful for, or relevant to, the proceedings.</li>
                  <li><strong>Impound</strong> books of account or documents, provided the officer records the reasons for doing so; retention beyond 15 working days requires approval from senior authorities such as a Principal Chief Commissioner or Chief Commissioner.</li>
                </ul>
                <p>What a survey <strong>cannot</strong> do is seize cash, stock, or other valuable articles; that power exists only under a search authorised separately. This distinction is the single most important thing to know during a survey: officials can verify, document, and impound paperwork, but they cannot walk away with physical cash or goods on the strength of a survey alone.</p>

                <h2>Statements Recorded During a Survey</h2>
                <p>Authorities can and do record statements of the business owner, partners, or staff present during a survey, and these statements are later relied on in assessment proceedings. It is worth knowing that a statement recorded during a survey is treated differently from one recorded on oath during a search; courts have repeatedly taken the view that an addition to income cannot rest solely on a survey statement without independent corroborating material, particularly where the statement is later retracted with a credible explanation. This does not mean statements can be made carelessly, since retraction without genuine grounds carries its own credibility cost, but it does mean an off-the-cuff or pressured admission is not automatically the final word on the matter.</p>

                <h2>Practical Guidance If a Survey Team Arrives</h2>
                <ol>
                  <li><strong>Verify identity and authorisation</strong> of the officials before granting entry.</li>
                  <li><strong>Cooperate with the inspection</strong> of books, stock, and records within the legal scope described above; obstruction creates its own separate problems.</li>
                  <li><strong>Avoid signing any statement</strong> you have not read and fully understood; you are entitled to review what is being recorded.</li>
                  <li><strong>Inform your CA promptly</strong> and, where practical, have them reachable or present during the process.</li>
                  <li><strong>Obtain an inventory or receipt</strong> for anything impounded, and note the reasons given for the impounding.</li>
                </ol>
                <p>Businesses that have already been through, or are anticipating, a survey often benefit from a broader compliance review afterward; our related guide on responding to <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices</Link> covers the assessment stage that frequently follows a survey once the department has reviewed the impounded material.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Section 133A has been renumbered under the Income Tax Act 2025. At the time of writing, a reliable, independently corroborated new-Act section reference for this specific provision was not confirmed, so this guide deliberately refers to it by its familiar old-Act number throughout, the same approach the site already takes for provisions like GAAR. Confirm the current section citation with your CA before relying on it in any formal response or submission.</p>
                </div>

                <h2>After the Survey</h2>
                <p>A survey itself does not conclude a case; it generates material that the department can use in subsequent assessment or reassessment proceedings. Reviewing what was impounded, reconstructing any records that were taken, and preparing a considered response to whatever discrepancies were flagged are the priorities in the days that follow, rather than treating the survey as a closed chapter. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory and representation services</Link> cover both survey support and the assessment proceedings that can follow one.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Facing or anticipating an income tax survey?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses understand what a survey can and cannot involve, and manage the assessment proceedings that follow.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20question%20about%20an%20income%20tax%20survey." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/reassessment-notice-under-section-148-time-limits-and-response" style={{ color: 'var(--primary)', fontWeight: 600 }}>Reassessment Notice Under Section 148: Time Limits &amp; Response</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/best-judgment-assessment-under-section-144-what-it-means" style={{ color: 'var(--primary)', fontWeight: 600 }}>Best Judgment Assessment Under Section 144: What It Means</Link></li>
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

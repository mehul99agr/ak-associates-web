import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Form 5471 vs 5472 vs 8858: Which Applies to You',
  description: 'Form 5471, Form 5472, and Form 8858 explained: which one applies depending on whether you are a US person owning a foreign entity or a foreign person owning a US entity, and the penalties for missing them.',
  keywords: [
    'Form 5471 vs 5472', 'Form 8858 foreign disregarded entity',
    'foreign-owned US LLC reporting', '25 percent foreign ownership Form 5472',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/form-5471-5472-8858-foreign-owned-us-entity' },
  openGraph: {
    title: 'Form 5471 vs 5472 vs 8858: Which Applies to You',
    description: 'Which IRS information return applies depending on entity type and ownership direction.',
    url: 'https://agrawalkhandelwal.com/blog/form-5471-5472-8858-foreign-owned-us-entity',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form 5471 vs 5472 vs 8858',
    description: 'Which IRS foreign-ownership information return applies to your entity.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Form 5471 vs 5472 vs 8858: Which Applies to You', 'form-5471-5472-8858-foreign-owned-us-entity')

const articleLd = buildArticleLd({
  headline: 'Form 5471 vs 5472 vs 8858: Which Applies to You',
  description: 'How to determine whether Form 5471, Form 5472, or Form 8858 applies to your foreign-owned US entity or US-owned foreign entity, and the penalties for missing the filing.',
  datePublished: '2025-10-15',
  slug: 'form-5471-5472-8858-foreign-owned-us-entity',
})

const faqs: [string, string][] = [
  ['Which form applies to a US LLC that is wholly owned by an Indian founder?', 'A US LLC that is a disregarded entity and wholly owned by a foreign person is generally treated as a separate corporation for the limited purposes of Section 6038A, and it files Form 5472 to report reportable transactions with its foreign owner, such as capital contributions and distributions.'],
  ['What is the difference between Form 5471 and Form 5472?', 'Form 5471 is filed by a US person who owns or controls a foreign corporation, reporting the US person\'s interest in that foreign entity. Form 5472 runs in the opposite direction: it is filed by, or on behalf of, a US entity that is at least 25 percent foreign-owned, reporting transactions between the US entity and its foreign owner or related parties.'],
  ['When does Form 8858 apply instead?', 'Form 8858 applies to a foreign disregarded entity or a foreign branch owned by a US person, essentially the reverse structure of the foreign-owned US LLC scenario. It is filed by US persons with an interest in these foreign entities, not by foreign owners of a US entity.'],
  ['What counts as a "reportable transaction" that triggers Form 5472?', 'Reportable transactions between a foreign-owned US entity and its foreign owner or related parties include capital contributions, distributions, loans, and payments for services or the use of property, among others. Even a single-member LLC with no employees and modest activity can still have reportable transactions simply through owner contributions and withdrawals.'],
  ['What are the penalties for missing these filings?', 'Penalties for Form 5471, Form 8858, and Form 8865 generally start around 10,000 US dollars per form per year, while Form 5472 penalties start around 25,000 US dollars, and penalties can increase for continued non-compliance after IRS notice. Given these figures, a founder should confirm filing obligations proactively rather than after the fact.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Form5471Form5472Form8858Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">US Cross-Border</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Form 5471 vs 5472 vs 8858: Which One Applies to Your Foreign-Owned US Entity</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published October 15, 2025</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Form 5471: a US person reporting ownership of a foreign corporation.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Form 5472: a US entity at least 25% foreign-owned, reporting transactions with the foreign owner.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Form 8858: a US person reporting a foreign disregarded entity or branch they own.</li>
                  <li style={{ marginBottom: 0 }}>A single-member US LLC owned by an Indian founder almost always needs Form 5472, not 5471.</li>
                </ul>
              </div>

              <p>These three IRS information returns get confused constantly because their names sound similar and they all deal with cross-border ownership, but the direction of ownership is what determines which one applies, and getting it wrong is a common and costly mistake for founders setting up US structures from India.</p>

              <h2>The Direction Test</h2>
              <p>The fastest way to tell these forms apart is to ask which direction the ownership runs. Form 5471 and Form 8858 apply when a <strong>US person</strong> owns a <strong>foreign</strong> entity, a foreign corporation for 5471, a foreign disregarded entity or branch for 8858. Form 5472 applies in the opposite direction, when a <strong>foreign person</strong> owns at least 25 percent of a <strong>US</strong> entity. For an Indian founder who has set up a US LLC or corporation, the relevant form is almost always Form 5472, not 5471, since the founder is the foreign owner of a US entity, not a US person owning something abroad.</p>

              <h2>Form 5472 and the Foreign-Owned Single-Member LLC</h2>
              <p>This is the scenario most Indian founders actually fall into: a single-member US LLC, wholly owned by a foreign individual, that would normally be a disregarded entity for tax purposes. Under rules effective for tax years beginning on or after 2017, such an entity is treated as a separate corporation for the limited purpose of the reporting requirements under Section 6038A, which means it must file Form 5472 to report reportable transactions with its foreign owner. This catches many founders off guard, since the LLC may have no employees, minimal revenue, and still be required to file, simply because owner contributions and distributions themselves count as reportable transactions.</p>

              <h2>What Counts as a Reportable Transaction</h2>
              <p>Reportable transactions are broader than most founders assume. They include capital the founder puts into the LLC, distributions taken out, loans between the founder and the entity, and payments for services or the use of property between the two. A founder who simply funds the LLC's bank account and later withdraws profit has already created reportable transactions requiring disclosure.</p>

              <h2>Form 8858: The Reverse Scenario</h2>
              <p>Form 8858 becomes relevant in the less common scenario for an Indian founder: where a US person or US entity owns a foreign disregarded entity or a foreign branch, for example a US company operating a wholly foreign-owned Indian subsidiary structured to be treated as disregarded. This is the mirror image of the 5472 situation and applies to the US side of a cross-border structure rather than to an Indian founder's US LLC.</p>

              <h2>Penalties Make This Worth Getting Right</h2>
              <p>Penalties for Form 5471 and Form 8858 non-compliance generally start around 10,000 US dollars per form per tax year, while Form 5472 non-compliance penalties start around 25,000 US dollars, and continued failure after IRS notice can increase the exposure further. Given the increasing data-sharing between the IRS and FinCEN on beneficial ownership information, a founder should confirm which of these filings applies at the time the entity is set up, not discover it during an eventual audit.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Not sure which IRS information return applies to your entity?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders identify and file the correct foreign-ownership disclosures on time.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/offshore-accounting" className="btn btn-outline">Offshore Accounting Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fbar-fatca-us-llc-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>FBAR and FATCA for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-annual-compliance-calendar-non-resident" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC Annual Compliance Calendar</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/offshore-accounting" style={{ color: 'var(--primary)', fontWeight: 600 }}>Offshore Accounting Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

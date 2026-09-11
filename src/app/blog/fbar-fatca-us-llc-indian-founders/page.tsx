import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'FBAR and FATCA for Indian Founders with a US LLC',
  description: 'FBAR (FinCEN Form 114) and FATCA (Form 8938) disclosure rules for an Indian founder with a US LLC: thresholds, who must file, and the difference between the two.',
  keywords: [
    'FBAR US LLC foreign owner', 'FATCA Form 8938 threshold',
    'FinCEN Form 114 filing requirement', 'foreign financial account disclosure US LLC',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/fbar-fatca-us-llc-indian-founders' },
  openGraph: {
    title: 'FBAR and FATCA for Indian Founders with a US LLC',
    description: 'Thresholds, who must file, and the difference between FBAR and FATCA disclosure.',
    url: 'https://agrawalkhandelwal.com/blog/fbar-fatca-us-llc-indian-founders',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FBAR and FATCA for Indian Founders with a US LLC',
    description: 'FBAR and FATCA thresholds and disclosure rules explained.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('FBAR and FATCA for Indian Founders with a US LLC', 'fbar-fatca-us-llc-indian-founders')

const articleLd = buildArticleLd({
  headline: 'FBAR and FATCA for Indian Founders with a US LLC',
  description: 'FBAR and FATCA disclosure thresholds and filing rules for an Indian founder who owns a US LLC or has signature authority over its accounts.',
  datePublished: '2025-08-09',
  slug: 'fbar-fatca-us-llc-indian-founders',
})

const faqs: [string, string][] = [
  ['What is the FBAR threshold?', 'An FBAR (FinCEN Form 114) filing is required if the aggregate value of all reportable foreign financial accounts exceeded 10,000 US dollars at any single point during the calendar year, not just at year-end. This applies to individuals and to certain US entities, including LLCs and corporations, with foreign financial accounts.'],
  ['Is a US LLC bank account a "foreign" account for FBAR purposes?', 'No, an account held in the US by a US LLC is a domestic account and does not itself trigger FBAR. FBAR concerns foreign financial accounts, so it becomes relevant when the LLC, or an individual with signature authority, holds accounts outside the US, such as an Indian bank account connected to the business.'],
  ['What is Form 8938 and how is it different from FBAR?', 'Form 8938 is the FATCA reporting form, filed with the individual\'s tax return, and it is a separate filing requirement from the FBAR with its own thresholds, generally 50,000 US dollars in specified foreign financial assets at year-end or 75,000 US dollars at any point during the year, with different thresholds for joint filers and for those living abroad. Meeting one filing requirement does not exempt you from the other if both are triggered.'],
  ['Does having signature authority without ownership still trigger FBAR?', 'Yes. FBAR filing can be required based on signature authority or other authority over a foreign financial account, even if the account is not legally owned by the individual, such as an employee or officer with authority to direct fund movement.'],
  ['What happens if FBAR or FATCA filings are missed?', 'Penalties for non-compliance can be significant and escalate for willful violations, so a founder unsure whether a filing is required should get it reviewed rather than assume it doesn\'t apply, particularly once both an Indian and a US financial footprint exist.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function FbarFatcaBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>FBAR and FATCA for Indian Founders with a US LLC: What Must Be Disclosed</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 9, 2025</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>FBAR triggers at 10,000 US dollars aggregate in foreign financial accounts at any point in the year.</li>
                  <li style={{ marginBottom: '0.4rem' }}>FATCA (Form 8938) has its own, separate thresholds, generally 50,000 or 75,000 US dollars.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A US LLC's own US bank account is not a "foreign" account for this purpose.</li>
                  <li style={{ marginBottom: 0 }}>Signature authority over a foreign account can trigger FBAR even without formal ownership.</li>
                </ul>
              </div>

              <p>FBAR and FATCA are two different US disclosure regimes that founders with a US LLC and Indian financial ties frequently confuse, often assuming they are the same filing or that meeting one requirement covers the other. They don't, and the confusion tends to surface only when a founder is already mid-way through a bank account opening or a tax filing and realizes they may have missed a disclosure.</p>

              <h2>FBAR: The 10,000 Dollar Aggregate Trigger</h2>
              <p>The Report of Foreign Bank and Financial Accounts, commonly called FBAR and filed as FinCEN Form 114, is required when the aggregate value of all reportable foreign financial accounts exceeds 10,000 US dollars at any single point during the calendar year, not merely at year-end. This applies to US persons and to entities formed under US law, including LLCs, that hold foreign financial accounts. It is a Treasury filing, separate from the IRS income tax return, with its own deadline of April 15 and an automatic extension to October 15.</p>

              <h2>What Counts as a "Foreign" Account Here</h2>
              <p>This is the point of most confusion for a founder running a US LLC: the LLC's own bank account, held at a US bank, is a domestic account and does not itself create an FBAR obligation. FBAR becomes relevant when the founder, or the LLC, holds financial accounts outside the US, most commonly an Indian bank account, an Indian brokerage or mutual fund account, or a foreign account the LLC uses for a specific business purpose.</p>

              <h2>FATCA and Form 8938: A Separate Requirement</h2>
              <p>FATCA reporting, done through Form 8938 filed with the individual's federal tax return, is governed by a different law with different thresholds than FBAR. Broadly, a filing is required where total specified foreign financial assets exceed 50,000 US dollars at year-end or 75,000 US dollars at any point during the year, with higher thresholds for joint filers and for those living abroad. Crucially, satisfying the FBAR requirement does not satisfy the FATCA requirement or vice versa. A founder who meets both sets of conditions has to file both.</p>

              <h2>Signature Authority Can Be Enough</h2>
              <p>A founder does not need to personally own an account to have an FBAR obligation. Signature authority or other authority to control the disposition of funds in a foreign account, even one held in the LLC's name rather than personally, can itself create a filing requirement. Founders who set up a foreign account for the business and forget this rule are a common source of missed filings.</p>

              <h2>Getting This Right From the Start</h2>
              <p>Because both regimes carry meaningful penalties for non-compliance, including for late or incomplete filings, the more practical approach is to map out every account, personal and business, Indian and US, at the point the LLC is set up, and review annually whether new accounts have changed the picture, rather than reconstructing the history retroactively once a question comes up during tax filing.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Not sure if FBAR or FATCA applies to you?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders map their US and Indian accounts and file both correctly.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/offshore-accounting" className="btn btn-outline">Offshore Accounting Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-5471-5472-8858-foreign-owned-us-entity" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 5471 vs 5472 vs 8858</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-annual-compliance-calendar-non-resident" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC Annual Compliance Calendar</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/schedule-fa-foreign-asset-disclosure-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Schedule FA Foreign Asset Disclosure (India side)</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/offshore-accounting" style={{ color: 'var(--primary)', fontWeight: 600 }}>Offshore Accounting Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

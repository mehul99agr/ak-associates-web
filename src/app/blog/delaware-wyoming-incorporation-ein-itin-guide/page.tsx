import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Delaware/Wyoming Incorporation, EIN and ITIN Guide',
  description: 'How an Indian founder incorporates in Delaware or Wyoming, applies for an EIN without an SSN, and when a personal ITIN is actually needed versus optional.',
  keywords: [
    'Delaware incorporation Indian founder', 'Wyoming LLC for non-resident',
    'EIN without SSN', 'ITIN for non-resident founder', 'Form SS-4 foreign applicant',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/delaware-wyoming-incorporation-ein-itin-guide' },
  openGraph: {
    title: 'Delaware/Wyoming Incorporation, EIN and ITIN Guide',
    description: 'The correct order of steps: incorporate, get an EIN without an SSN, then apply for an ITIN only when you actually need to file a return.',
    url: 'https://agrawalkhandelwal.com/blog/delaware-wyoming-incorporation-ein-itin-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delaware/Wyoming Incorporation, EIN and ITIN Guide',
    description: 'Incorporation, EIN, and ITIN steps for non-resident founders.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Delaware/Wyoming Incorporation, EIN and ITIN Guide', 'delaware-wyoming-incorporation-ein-itin-guide')

const articleLd = buildArticleLd({
  headline: 'Delaware/Wyoming Incorporation, EIN and ITIN Guide',
  description: 'The incorporation process in Delaware or Wyoming for a non-resident founder, how to get an EIN without an SSN, and when an ITIN is actually required.',
  datePublished: '2025-06-27',
  slug: 'delaware-wyoming-incorporation-ein-itin-guide',
})

const faqs: [string, string][] = [
  ['Do I need to visit the US to incorporate in Delaware or Wyoming?', 'No. Both states allow incorporation entirely remotely through a registered agent, which every LLC or corporation in these states is required to appoint regardless of the owner\'s location.'],
  ['Can I get an EIN without a Social Security Number?', 'Yes. The IRS allows a non-resident founder to obtain an EIN for a US entity without an SSN or ITIN through its international applicant process on Form SS-4, typically filed by fax or mail rather than online, since the online EIN application requires an SSN or ITIN.'],
  ['What is the right order: incorporate, EIN, or ITIN first?', 'Incorporate the entity first, then apply for the EIN using Form SS-4, then open a US business bank account using the EIN. An ITIN is a separate, personal filing requirement that is only needed once the founder has an individual US tax return to file, so it comes later, not at the start.'],
  ['When does a founder actually need an ITIN?', 'An ITIN is required when a non-resident alien owner has an individual US filing obligation, most commonly when they must personally file Form 1040-NR, such as an LLC owner reporting pass-through income. An ITIN application generally must be filed together with the tax return itself, unless a specific exception applies.'],
  ['Why do people choose Wyoming over Delaware, or the other way around?', 'Delaware is the traditional choice for startups planning to raise venture capital, given its well-established corporate law and investor familiarity. Wyoming is often chosen for its lower ongoing fees and simpler annual filings, which can suit a smaller bootstrapped LLC without fundraising plans. The right choice depends on the business plan, not a fixed rule.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function DelawareWyomingEinItinBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Delaware or Wyoming Incorporation for Indian Founders: EIN and ITIN Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published June 27, 2025</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Both Delaware and Wyoming let a non-resident incorporate fully remotely via a registered agent.</li>
                  <li style={{ marginBottom: '0.4rem' }}>An EIN can be obtained without an SSN or ITIN, through Form SS-4 filed by fax or mail.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Correct order: incorporate, then EIN, then bank account, then ITIN only when a personal return is due.</li>
                  <li style={{ marginBottom: 0 }}>An ITIN application is generally filed together with the actual tax return, not as a standalone step.</li>
                </ul>
              </div>

              <p>Incorporating in the US as an Indian founder is more procedural than most people expect, and the confusion usually isn't about the incorporation itself, it's about the EIN and ITIN that follow it. Getting the sequence wrong wastes weeks. Here is the process in the order it should actually happen.</p>

              <h2>Step One: Incorporate the Entity</h2>
              <p>Both Delaware and Wyoming allow a founder to incorporate entirely remotely. Every entity in either state must appoint a registered agent, a person or company with a physical address in that state who receives official notices and legal correspondence on the entity's behalf. This is a mandatory ongoing service, not a one-time formality, since a missed notice from the registered agent can mean a missed compliance deadline. Delaware is the more common choice for startups with fundraising plans given its established corporate law and investor familiarity, while Wyoming is often chosen for lower ongoing state fees on a bootstrapped LLC with no near-term fundraising plan.</p>

              <h2>Step Two: Get an EIN, Even Without an SSN</h2>
              <p>An EIN (Employer Identification Number) identifies the business entity itself for tax and banking purposes, and it is required before the entity can open a US bank account, regardless of whether it has employees. A non-resident founder without a Social Security Number can still obtain one: the IRS provides an international applicant process for exactly this situation, filed on Form SS-4. Since the standard online EIN application requires an SSN or ITIN, a non-resident founder generally applies by fax or mail instead, which takes longer, so this step should be started as early as possible in the incorporation timeline rather than left until the bank account is needed urgently.</p>

              <h2>Step Three: Open the Bank Account</h2>
              <p>With the entity formed and the EIN in hand, the business bank account can be opened. This is usually the step founders are most anxious about, and requirements vary by bank, but having the incorporation documents and EIN confirmation ready in advance avoids most delays.</p>

              <h2>Step Four: The ITIN, Only When You Actually Need One</h2>
              <p>This is where the EIN and ITIN get confused most often. The EIN belongs to the entity; the ITIN (Individual Taxpayer Identification Number) belongs to the individual founder personally, and it is not required simply because a US entity exists. An ITIN becomes necessary when the founder personally has a US tax filing obligation and is not eligible for an SSN, most commonly a non-resident alien LLC owner who must file Form 1040-NR to report pass-through income. Critically, an ITIN application on Form W-7 is generally filed together with the actual tax return it supports, not on its own ahead of time, except in a limited set of exception cases. Applying too early, before there is a return to attach, typically results in a rejected application.</p>

              <h2>Timing It Around Tax Season</h2>
              <p>Because ITIN processing during peak filing months can run considerably longer than at other times of year, and because international mailing adds further delay, a founder who knows they will need to file a US return should build in extra lead time rather than assuming the process moves quickly close to a deadline.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Setting up a US entity from India?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders sequence incorporation, EIN, banking, and ITIN correctly the first time.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/company-incorporation" className="btn btn-outline">Incorporation Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-annual-compliance-calendar-non-resident" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC Annual Compliance Calendar</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fbar-fatca-us-llc-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>FBAR and FATCA for Indian Founders</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

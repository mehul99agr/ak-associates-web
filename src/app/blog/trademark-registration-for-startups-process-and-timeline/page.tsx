import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Trademark Registration for Startups: Process & Timeline' },
  description: 'How startups register a trademark in India: choosing the right class, the Form TM-A filing process, realistic timelines, and the reduced fee available to DPIIT-recognised startups.',
  keywords: [
    'trademark registration for startups', 'trademark registration process India', 'trademark class selection',
    'trademark registration timeline India', 'DPIIT startup trademark fee', 'TM-A filing', 'trademark opposition India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/trademark-registration-for-startups-process-and-timeline' },
  openGraph: {
    title: 'Trademark Registration for Startups: Process & Timeline',
    description: 'Class selection, the TM-A filing process, realistic 2026 timelines, and the reduced government fee for DPIIT-recognised startups.',
    url: 'https://agrawalkhandelwal.com/blog/trademark-registration-for-startups-process-and-timeline',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trademark Registration for Startups: Process & Timeline',
    description: 'What it actually takes to register a trademark in India, from class selection to certificate.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Trademark Registration for Startups: Process & Timeline', 'trademark-registration-for-startups-process-and-timeline')

const articleLd = buildArticleLd({
  headline: 'Trademark Registration for Startups: Process & Timeline',
  description: 'Class selection, the Form TM-A filing process, realistic timelines, and the reduced fee for DPIIT-recognised startups and Udyam-registered MSMEs.',
  datePublished: '2026-09-06',
  slug: 'trademark-registration-for-startups-process-and-timeline',
})

const faqs: [string, string][] = [
  [
    'How much does trademark registration cost for a startup in India?',
    'The government filing fee is Rs 4,500 per class for individuals, startups, and MSMEs (registered under Udyam), versus Rs 9,000 per class for companies and LLPs that do not qualify for the reduced tier. Filing online (e-filing) is also cheaper than physical filing by roughly Rs 500 per application. This is the official fee only; if you engage a CA or trademark agent, their professional fee is separate.',
  ],
  [
    'How long does trademark registration actually take?',
    'For an uncontested application with no objections and no opposition, the realistic timeline runs 12 to 18 months from filing to registration certificate, not the few weeks sometimes advertised. Filing to first examination report typically takes 1-3 months, and if there is no objection, publication in the Trade Marks Journal follows within another 1-2 months. The four-month opposition window after publication, plus 1-2 months for certificate issuance if unopposed, accounts for most of the total time. If the department raises an objection or a third party opposes the mark, the timeline extends further.',
  ],
  [
    'Can a startup get free or subsidised trademark registration?',
    'DPIIT-recognised startups can use the Startup India Intellectual Property Protection (SIPP) scheme, under which the government reimburses the facilitator\'s professional fee for trademark filing, so the startup pays only the government filing fee itself (still Rs 4,500 per class). This is a fee subsidy on professional charges, not a waiver of the statutory government fee.',
  ],
  [
    'What happens if someone objects to or opposes my trademark application?',
    'An examination objection (typically on grounds of similarity to an existing mark or descriptiveness) requires a written reply, and often a show-cause hearing, before the application can proceed to publication. Opposition is different: it happens after publication, when a third party formally objects within the four-month window, triggering a quasi-judicial proceeding before the Registrar. Both add months, sometimes over a year, to the total timeline, which is why a proper clearance search before filing matters more than most applicants assume.',
  ],
  [
    'Do I need to register in multiple classes?',
    'Only if your business genuinely operates across more than one class of goods or services that you want protected under the same mark. Each additional class is filed and charged separately, so classes should be chosen to match your actual or clearly planned business activity, not filed speculatively across unrelated categories.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function TrademarkRegistrationStartupsBlog() {
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
                Trademark Registration for Startups: Process &amp; Timeline
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Government filing fee is <strong>Rs 4,500 per class</strong> for individuals, startups and MSMEs, versus <strong>Rs 9,000 per class</strong> for companies and LLPs outside that reduced tier.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Realistic timeline for an uncontested mark is <strong>12-18 months</strong> from filing to certificate, not the fast turnaround sometimes advertised.</li>
                    <li style={{ marginBottom: '0.4rem' }}>DPIIT-recognised startups can use the <strong>SIPP scheme</strong> to get the facilitator&apos;s professional fee reimbursed by the government.</li>
                    <li style={{ marginBottom: 0 }}>A proper clearance search before filing is the single biggest lever to avoid objections and opposition, which are what actually stretch the timeline.</li>
                  </ul>
                </div>

                <p>A trademark protects the name, logo, or tagline a startup builds its brand around, and unlike company incorporation, it is not a one-time formality; it is a multi-month legal process with real risk of objection or opposition along the way. Most founders underestimate both the timeline and the importance of getting the class selection and clearance search right at the outset. This guide walks through what actually happens between filing and getting a registered trademark in 2026.</p>

                <h2>Step 1: Choosing the Right Class</h2>
                <p>Trademarks in India are registered under the Nice Classification system, which groups goods and services into 45 classes, 34 for goods and 11 for services. A software product and its associated consulting services, for example, may need separate classes. Filing in the wrong class, or missing a class your business actually operates in, is one of the most common startup mistakes; the registration only protects the mark within the classes actually filed, so a competitor operating in an unfiled class is not infringing by using a similar mark there.</p>
                <p>Before filing, a clearance search of the Trade Marks Registry database (and ideally a broader market search) checks whether an identical or deceptively similar mark already exists in your class. Skipping this step is the single biggest cause of objections and opposition later in the process.</p>

                <h2>Step 2: Filing Form TM-A</h2>
                <p>The application itself is filed as <strong>Form TM-A</strong> with the Trade Marks Registry, either online through the IP India portal or physically. Filing requires the applicant&apos;s details, the mark itself (word, logo, or both), the class(es), and, for startups claiming the reduced fee, proof of DPIIT recognition or Udyam registration. See our guide on <Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT registration</Link> if that recognition isn&apos;t in place yet, since it directly affects the fee tier you file at.</p>
                <p>Once filed, an examination report is issued, typically within 1-3 months, either accepting the mark for publication or raising objections (commonly on grounds of similarity to an existing mark, or that the mark is too descriptive/generic to be distinctive). An objection requires a written reply, and sometimes a show-cause hearing, before the application can move forward.</p>

                <h2>Step 3: Publication and the Opposition Window</h2>
                <p>Once accepted, the mark is published in the Trade Marks Journal for a <strong>four-month opposition period</strong>, during which any third party can formally oppose the registration. If no opposition is filed, the registration certificate is typically issued within another 1-2 months. If opposition is filed, it becomes a quasi-judicial proceeding before the Registrar involving evidence and hearings, which can add many months, sometimes well over a year, to the total timeline.</p>
                <p>Put together, an uncontested application realistically takes <strong>12 to 18 months</strong> end to end. Applications advertised as "trademark registration in a few weeks" are typically describing the filing step alone, not the full path to a registered mark with legal protection.</p>

                <h2>Fees and the Startup/MSME Concession</h2>
                <p>The government filing fee is <strong>Rs 4,500 per class</strong> for individuals, startups (with valid proof of status), and Udyam-registered MSMEs, compared to <strong>Rs 9,000 per class</strong> for companies and LLPs that don&apos;t qualify for that reduced tier. Physical filing costs roughly Rs 500 more than e-filing in each category. Expedited examination under Rule 34 is available for an additional fee, but does not guarantee a faster overall outcome if objections or opposition still arise.</p>
                <p>Separately, DPIIT-recognised startups can access the <strong>Startup India Intellectual Property Protection (SIPP)</strong> scheme, under which the government reimburses the facilitator&apos;s professional fee for filing, meaning the startup effectively pays only the statutory government fee. This is a genuine cost reduction, but it is a professional-fee subsidy, not a waiver of the Rs 4,500-per-class government fee itself.</p>

                <h2>Practical Filing Discipline</h2>
                <ul>
                  <li>Run a clearance search before filing, not after receiving an objection.</li>
                  <li>File in every class your business genuinely operates in or has concrete near-term plans for, not speculatively across unrelated categories.</li>
                  <li>Keep DPIIT recognition or Udyam registration proof ready at filing time to claim the reduced fee tier from day one.</li>
                  <li>Track the four-month publication window closely; a missed response to an opposition notice can result in the application being deemed abandoned.</li>
                </ul>

                <p>Trademark filing is usually one part of a broader IP and compliance sequence for a new venture, alongside incorporation, DPIIT recognition, and GST registration. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>company incorporation and startup advisory services</Link> cover this sequencing so filings happen in the right order rather than reactively.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Filing a trademark for your startup?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle class selection, clearance search, TM-A filing, and objection/opposition responses end to end.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT Registration for Startups: Eligibility, Process &amp; 80-IAC Tax Benefit</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-india-registration-vs-dpiit-recognition-what-is-the-difference" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup India Registration vs DPIIT Recognition: What Is the Difference</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist for New Companies</Link></li>
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

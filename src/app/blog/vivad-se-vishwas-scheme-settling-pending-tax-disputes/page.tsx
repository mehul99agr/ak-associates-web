import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Vivad Se Vishwas Scheme: Settling Pending Tax Disputes' },
  description: 'How the Direct Tax Vivad Se Vishwas (VSV 2.0) scheme worked, why it closed to new declarations on April 30, 2025, and what options remain for settling a pending income tax dispute today.',
  keywords: [
    'vivad se vishwas scheme', 'vivad se vishwas 2.0', 'dtvsv 2024', 'direct tax vivad se vishwas',
    'settling income tax disputes India', 'tax dispute resolution scheme', 'form 4 vivad se vishwas',
    'income tax appeal settlement scheme',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/vivad-se-vishwas-scheme-settling-pending-tax-disputes' },
  openGraph: {
    title: 'Vivad Se Vishwas Scheme: Settling Pending Tax Disputes',
    description: 'How the Direct Tax Vivad Se Vishwas (VSV 2.0) scheme worked, its April 30, 2025 closure to new filings, and what options remain today.',
    url: 'https://agrawalkhandelwal.com/blog/vivad-se-vishwas-scheme-settling-pending-tax-disputes',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivad Se Vishwas Scheme: Settling Pending Tax Disputes',
    description: 'What the Vivad Se Vishwas scheme was, why it is no longer open for new declarations, and what to do with a pending tax dispute now.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Vivad Se Vishwas Scheme: Settling Pending Tax Disputes', 'vivad-se-vishwas-scheme-settling-pending-tax-disputes')

const articleLd = buildArticleLd({
  headline: 'Vivad Se Vishwas Scheme: Settling Pending Tax Disputes',
  description: 'How the Direct Tax Vivad Se Vishwas (VSV 2.0) scheme worked, why it is closed to new declarations since April 30, 2025, and what a taxpayer with a pending dispute can do now.',
  datePublished: '2026-08-23',
  slug: 'vivad-se-vishwas-scheme-settling-pending-tax-disputes',
})

const faqs: [string, string][] = [
  [
    'Is the Vivad Se Vishwas scheme still open for new applications?',
    'No. The Direct Tax Vivad Se Vishwas Scheme, 2024 (also called VSV 2.0), opened for declarations on October 1, 2024 and closed permanently to new filings on April 30, 2025. As of this writing, there is no active window to file a fresh declaration under this scheme; if you have a pending dispute today, VSV 2.0 is not an available route.',
  ],
  [
    'I filed a declaration before the deadline. Is my case still being processed?',
    'Yes, processing of declarations filed before the April 30, 2025 cutoff continued well beyond that date. Designated Authorities kept issuing Form-2 certificates (determining the amount payable) and Form-4 final orders into late 2025 and 2026 as the backlog from the final weeks of filing was worked through. If you filed on time and are still waiting on a Form-4, follow up with your jurisdictional Designated Authority rather than assuming the matter lapsed; the closure affected new filings only.',
  ],
  [
    'What did the Vivad Se Vishwas scheme actually offer?',
    'VSV 2.0 let taxpayers with an income tax appeal, writ petition, or special leave petition pending as of July 22, 2024 settle the dispute by paying a defined percentage of the disputed tax (with different, generally lower, rates for disputes limited to interest, penalty, or fees alone), in exchange for a full waiver of the remaining interest and penalty and immunity from related prosecution. It was a one-time settlement window, not a permanent standing option.',
  ],
  [
    'If Vivad Se Vishwas is closed, how do I settle a pending tax dispute now?',
    'Outside a fresh VSV-style scheme (none is currently open), the standing routes are the normal appeal process (Commissioner (Appeals), Income Tax Appellate Tribunal, and higher courts), rectification of an order where the dispute is a genuine apparent error, and, in defined circumstances, an application before the Income Tax Settlement mechanism where eligible. A stay of demand can also be sought to manage recovery while an appeal is pending; see our companion guide on that process.',
  ],
  [
    'Will there be another Vivad Se Vishwas scheme?',
    'There is no confirmed announcement of a further edition of the scheme as of this writing. The government has introduced dispute-settlement schemes periodically (an earlier version ran in 2020, and VSV 2.0 ran through 2024-2025), so a future scheme is plausible but not something to plan around or delay a genuine dispute resolution strategy for. Rely on the appeal and stay-of-demand process available today rather than waiting for a scheme that may not materialise on any particular timeline.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function VivadSeVishwasBlog() {
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
                Vivad Se Vishwas Scheme: Settling Pending Tax Disputes
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 23, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>The <strong>Direct Tax Vivad Se Vishwas Scheme, 2024 (VSV 2.0)</strong> closed to new declarations on <strong>April 30, 2025</strong>. It is not currently open, and there is no confirmed new edition as of this writing.</li>
                    <li style={{ marginBottom: '0.4rem' }}>If you filed a declaration before that deadline, processing (Form-2 and Form-4) has continued into 2026; follow up with your Designated Authority if you are still waiting.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The scheme offered a waiver of interest and penalty in exchange for paying a defined percentage of disputed tax, for disputes pending as of July 22, 2024.</li>
                    <li style={{ marginBottom: 0 }}>With the scheme closed, a pending dispute today goes through the standard appeal process, or a stay of demand while that appeal is heard.</li>
                  </ul>
                </div>

                <p>"Vivad Se Vishwas," meaning "from dispute to trust," has run as a periodic one-time settlement scheme rather than a standing option, and it is important to know exactly where it stands before assuming it is available to you. The most recent edition, the <strong>Direct Tax Vivad Se Vishwas Scheme, 2024 (VSV 2.0)</strong>, closed to new filings well before this article was written. Here is what the scheme covered, what its actual current status is, and what to do if you have a dispute pending now.</p>

                <h2>What VSV 2.0 Was</h2>
                <p>Enacted under Chapter IV of the Finance (No. 2) Act, 2024, the Direct Tax Vivad Se Vishwas Scheme, 2024 let taxpayers with an income tax appeal, writ petition, or special leave petition pending as of <strong>July 22, 2024</strong> settle the dispute by paying a defined percentage of the disputed tax, interest, or penalty. In exchange, the taxpayer received a full waiver of the remaining interest and penalty on the settled amount, and immunity from prosecution on that dispute. The scheme opened for declarations on October 1, 2024.</p>

                <h2>It Closed to New Filings on April 30, 2025</h2>
                <p><strong>The scheme stopped accepting new declarations on April 30, 2025, and has not reopened since.</strong> This is the single most important fact for anyone searching for this scheme today: if you have a tax dispute that arose, or is only now reaching a stage where you are considering settlement, after that date, VSV 2.0 is simply not an available route. There is no live window to file into.</p>
                <p>If you filed your declaration on or before the deadline, the closure does not affect you; it only stopped new entrants. Given the volume of filings in the final weeks before the deadline, Designated Authorities across jurisdictions have continued issuing <strong>Form-2 certificates</strong> (confirming the amount payable) and <strong>Form-4 final orders</strong> (closing the matter once payment is made and proof furnished) well into late 2025 and through 2026. If you filed in time and have not yet received a Form-4, the practical step is to follow up directly with your jurisdictional Designated Authority rather than assume the matter has lapsed or fallen through the cracks.</p>

                <h2>What to Do With a Dispute Today, With the Scheme Closed</h2>
                <p>With no active settlement scheme, a pending or new income tax dispute runs through the standard channels:</p>
                <ul>
                  <li><strong>The regular appeal process</strong>, starting with the Commissioner (Appeals) and, if needed, the Income Tax Appellate Tribunal and higher courts. See our guide on <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices</Link> for how disputes typically originate.</li>
                  <li><strong>A stay of demand</strong> to pause recovery while the appeal is pending, since an appeal alone does not stop the department from pursuing the demand. Our companion guide on <Link href="/blog/stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment" style={{ color: 'var(--primary)', fontWeight: 600 }}>applying for a stay of demand</Link> covers this in detail.</li>
                  <li><strong>Rectification</strong>, where the dispute stems from a genuine apparent error in the order rather than a substantive disagreement, which is a faster and narrower route than a full appeal.</li>
                  <li><strong>The Income Tax Settlement mechanism</strong>, where eligible, for cases that meet its specific conditions; this is a separate, narrower avenue from a Vivad Se Vishwas-style scheme and has its own eligibility criteria that should be checked with a CA before assuming it applies.</li>
                </ul>

                <h2>Will There Be Another Scheme?</h2>
                <p>The government has run dispute-settlement schemes periodically, an earlier Vivad Se Vishwas ran in 2020, and VSV 2.0 followed in 2024-2025, so a future edition is plausible in principle. As of this writing there is no confirmed announcement of a further scheme, and there is no reliable basis to predict when, or whether, one might be introduced. <strong>The practical guidance is not to delay resolving a genuine dispute on the assumption that a new scheme will appear</strong>; pursue the appeal, rectification, or stay-of-demand routes that are actually available now, and treat any future scheme as a bonus option if and when it is announced, not a plan.</p>

                <p>Disputes involving disputed tax, interest, and penalty computations are easy to get wrong on your own, both in deciding whether a route like rectification genuinely applies and in calculating what a stay of demand deposit or an eventual settlement would actually cost. Our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory services</Link> include dispute strategy, appeal drafting, and representation before the relevant authority.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Have a pending tax dispute?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help you evaluate the right route, appeal, rectification, stay of demand, or settlement mechanism, based on your specific facts.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20pending%20income%20tax%20dispute%20and%20need%20advice." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/stay-of-demand-how-to-apply-when-you-dispute-a-tax-assessment" style={{ color: 'var(--primary)', fontWeight: 600 }}>Stay of Demand: How to Apply When You Dispute a Tax Assessment</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: Section 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/condonation-of-delay-filing-itr-how-to-apply" style={{ color: 'var(--primary)', fontWeight: 600 }}>Condonation of Delay in Filing ITR</Link></li>
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

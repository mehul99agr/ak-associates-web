import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'FAST-DS 2026: Foreign Assets Disclosure Scheme Explained',
  description: 'FAST-DS 2026 (Foreign Assets of Small Taxpayers - Disclosure Scheme): eligibility, the Rs 1 crore asset limit, the 30%+30% tax structure, the December 31, 2026 window, and what protection it actually gives.',
  keywords: [
    'FAST-DS 2026', 'Foreign Assets of Small Taxpayers Disclosure Scheme',
    'foreign asset disclosure scheme India', 'Black Money Act voluntary disclosure',
    'undisclosed foreign income scheme 2026', 'Schedule FA disclosure scheme',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/fast-ds-2026-foreign-assets-disclosure-scheme' },
  openGraph: {
    title: 'FAST-DS 2026: Foreign Assets Disclosure Scheme Explained',
    description: 'Eligibility, tax structure, and the December 31, 2026 declaration window for the Foreign Assets of Small Taxpayers - Disclosure Scheme.',
    url: 'https://agrawalkhandelwal.com/blog/fast-ds-2026-foreign-assets-disclosure-scheme',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAST-DS 2026 Explained',
    description: 'Eligibility, tax structure, and the declaration window for the Foreign Assets of Small Taxpayers - Disclosure Scheme, 2026.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('FAST-DS 2026: Foreign Assets Disclosure Scheme Explained', 'fast-ds-2026-foreign-assets-disclosure-scheme')

const articleLd = buildArticleLd({
  headline: 'FAST-DS 2026: Foreign Assets of Small Taxpayers - Disclosure Scheme Explained',
  description: 'Eligibility, legal basis, tax structure, and the declaration window for FAST-DS 2026, the one-time scheme to disclose previously unreported foreign assets or income.',
  datePublished: '2026-09-01',
  slug: 'fast-ds-2026-foreign-assets-disclosure-scheme',
})

const faqs: FaqPair[] = [
  ['What is FAST-DS 2026?', 'FAST-DS stands for the Foreign Assets of Small Taxpayers - Disclosure Scheme, 2026, a one-time voluntary disclosure scheme introduced under Chapter IV (Sections 130-144) of the Finance Act, 2026 and the FAST-DS Rules, 2026. It lets eligible taxpayers declare foreign assets or foreign income that were not previously reported or taxed, in exchange for a fixed tax outcome and protection from further action.'],
  ['Who is eligible to declare under FAST-DS 2026?', 'The scheme is aimed at "small taxpayers" whose aggregate undisclosed foreign assets or foreign income being declared do not exceed Rs 1 crore in value. It is meant for genuine cases of a missed Schedule FA disclosure or unreported small foreign holding, not as a general amnesty for large or structured non-disclosure.'],
  ['What is the last date to declare under FAST-DS 2026?', 'The scheme became effective from August 16, 2026, and the declaration window is open until December 31, 2026. Declarations need to be filed within this window; the scheme does not currently provide for extensions beyond it.'],
  ['How much tax do I pay if I declare under FAST-DS 2026?', 'The scheme charges tax at 30% of the value of the undisclosed foreign asset or income, plus an additional amount equal to that tax, taking the effective levy to 60% of the declared value. This is a fixed structure rather than a computation based on your regular income tax slab.'],
  ['Does FAST-DS 2026 protect against Black Money Act prosecution?', 'A valid declaration made within the scheme is intended to give protection from further tax demands, penalties, and prosecution under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015, in respect of the specific asset or income declared. The protection is tied to what is actually declared and accepted, so the declaration needs to be accurate and complete.'],
  ['What if my undisclosed foreign assets are worth more than Rs 1 crore?', 'FAST-DS 2026 is scoped to declarations where the aggregate value does not exceed Rs 1 crore. If your position is larger or more complex, this scheme is unlikely to be the right route, and the correct course of action needs a case-by-case review rather than a general answer here - talk to us before deciding how to proceed.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function FastDs2026Blog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Tax Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>FAST-DS 2026: Foreign Assets of Small Taxpayers - Disclosure Scheme Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 1, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>FAST-DS 2026 is a one-time window to declare small, previously unreported foreign assets or income.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>For undisclosed foreign assets/income up to Rs 1 crore in aggregate value.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Declaration window: August 16, 2026 to December 31, 2026.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Effective tax cost: 30% plus an equal additional amount, i.e. 60% of the declared value.</li>
                  <li style={{ marginBottom: 0 }}>Aimed at protecting genuine small omissions from Black Money Act exposure, not a route for large or structured non-disclosure.</li>
                </ul>
              </div>

              <p>Every year, a number of taxpayers with a genuine but modest foreign holding - a small overseas bank account, a handful of foreign shares from an old ESOP grant, a inherited account never formally reported - realise only later that it should have gone into Schedule FA of their income tax return. Until now, fixing that meant confronting the Black Money Act&apos;s steep penalty and prosecution regime, even where the amount involved was small and the omission was not deliberate. <strong>FAST-DS 2026</strong> is a narrowly scoped, one-time scheme designed to give exactly this category of taxpayer a defined way to come clean.</p>

              <h2>What Is FAST-DS 2026</h2>
              <p>FAST-DS stands for the <strong>Foreign Assets of Small Taxpayers - Disclosure Scheme, 2026</strong>. It is contained in <strong>Chapter IV (Sections 130 to 144) of the Finance Act, 2026</strong>, operationalised through the <strong>FAST-DS Rules, 2026</strong>. The scheme allows an eligible taxpayer to voluntarily declare foreign income or foreign assets that were not previously offered to tax or reported, and to settle the position through a fixed tax payment rather than facing open-ended penalty and prosecution risk.</p>

              <h2>Who Can Use It</h2>
              <p>The scheme is targeted at <strong>small taxpayers</strong>: the aggregate value of the undisclosed foreign asset(s) or foreign income being declared must <strong>not exceed Rs 1 crore</strong>. This ceiling is what defines the scheme&apos;s scope - it is built for a missed Schedule FA entry or a modest unreported foreign holding, not as a general amnesty route for large or deliberately structured non-disclosure. If your position is larger, more layered, or involves multiple jurisdictions, this scheme is unlikely to be the appropriate route and needs a different, case-specific approach.</p>

              <h2>The Declaration Window</h2>
              <p>FAST-DS 2026 became effective from <strong>August 16, 2026</strong>, and the declaration window runs until <strong>December 31, 2026</strong>. This is a defined, time-bound opportunity - declarations need to be filed within this period, and there is no indication currently of an extension mechanism built into the scheme.</p>

              <h2>Tax and Fee Structure</h2>
              <p>Rather than taxing the declared amount at your normal slab rate, FAST-DS applies a fixed structure: <strong>30% tax</strong> on the value of the undisclosed foreign asset or income, <strong>plus an additional amount equal to that tax</strong> - taking the effective cost to <strong>60% of the declared value</strong>. This is meaningfully lower than the penalty exposure under the Black Money Act for the same omission if it were instead detected through scrutiny or an information exchange, which is the core trade-off the scheme is built around: a known, fixed cost today versus an open-ended and potentially much larger exposure later.</p>

              <h2>What Protection It Gives</h2>
              <p>A valid, accepted declaration under FAST-DS is intended to protect the declarant from further tax demands, penalty proceedings, and prosecution under the <strong>Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015</strong>, specifically in respect of the asset or income actually declared. That protection is scoped to what is disclosed - an incomplete or inaccurate declaration does not carry the same shelter, which is why getting the valuation and disclosure right the first time matters more here than in most routine filings.</p>

              <h2>Should You Use It</h2>
              <p>If you have a genuine, modest foreign holding that was never reported - whether from before becoming aware of the Schedule FA requirement, an inherited foreign account, or a small legacy ESOP or investment abroad - FAST-DS 2026 is worth evaluating before the December 31, 2026 window closes. The right first step is a private review of exactly what needs to be declared, its value, and how it fits the scheme&apos;s Rs 1 crore threshold, rather than assuming eligibility or filing without that assessment.</p>
              <p>This is closely connected to the residency and disclosure questions returning NRIs and resident Indians with overseas ties routinely face - see our guides on <Link href="/blog/schedule-fa-foreign-asset-disclosure-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Schedule FA foreign asset disclosure</Link> and <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR status for returning NRIs</Link> for the broader compliance picture around foreign holdings once you become a resident Indian taxpayer.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Have an unreported foreign asset and want to know if FAST-DS 2026 applies?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We review your specific position - value, jurisdiction, and history - before you file, so the declaration is accurate and the protection actually holds.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/schedule-fa-foreign-asset-disclosure-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Schedule FA: Foreign Asset Disclosure Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status for Returning NRIs</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Returning to India: Financial Checklist</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'NRI GAAR Exposure: Anti-Avoidance Rules & Cross-Border Structures',
  description: 'When India\'s General Anti-Avoidance Rule (GAAR) can apply to an NRI\'s cross-border structure: the Impermissible Avoidance Arrangement test, the Rs 3 crore tax benefit threshold, and common NRI scenarios that attract scrutiny.',
  keywords: [
    'NRI GAAR', 'GAAR impermissible avoidance arrangement', 'GAAR Rs 3 crore threshold',
    'GAAR NRI treaty shopping', 'GAAR Part T Income Tax Act 2025', 'GAAR cross border structure India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-gaar-cross-border-structures' },
  openGraph: {
    title: 'NRI GAAR Exposure: Anti-Avoidance Rules & Cross-Border Structures',
    description: 'When GAAR can apply to an NRI\'s cross-border structure: the Impermissible Avoidance Arrangement test, the Rs 3 crore threshold, and common scenarios.',
    url: 'https://agrawalkhandelwal.com/blog/nri-gaar-cross-border-structures',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI GAAR Exposure Explained',
    description: 'When India\'s General Anti-Avoidance Rule can apply to an NRI\'s cross-border structure, and what it does not cover.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI GAAR Exposure: Anti-Avoidance Rules & Cross-Border Structures', 'nri-gaar-cross-border-structures')

const articleLd = buildArticleLd({
  headline: 'NRI GAAR Exposure: When Anti-Avoidance Rules Apply to Cross-Border Structures',
  description: 'When India\'s General Anti-Avoidance Rule (GAAR) can apply to an NRI\'s cross-border structure, the Impermissible Avoidance Arrangement test, the Rs 3 crore tax benefit threshold, and common NRI scenarios that attract scrutiny.',
  datePublished: '2026-08-22',
  slug: 'nri-gaar-cross-border-structures',
})

const faqs: FaqPair[] = [
  ['What is GAAR?', 'GAAR stands for General Anti-Avoidance Rule; a set of provisions that empower Indian tax authorities to disregard or recharacterize an arrangement if its main purpose was to obtain a tax benefit and it lacks genuine commercial substance. Under the Income Tax Act 2025, these provisions sit in Part T (they were Sections 95 to 102, under Chapter X-A of the 1961 Act, commonly called the GAAR chapter).'],
  ['Does GAAR apply to every cross-border arrangement involving an NRI?', 'No. A specific safe harbour under Rule 10U exempts an arrangement from GAAR where the aggregate tax benefit to all parties in the relevant assessment year does not exceed Rs 3 crore. This threshold is meant to filter out routine, modest-value transactions from GAAR scrutiny, leaving it focused on larger, more deliberately structured arrangements.'],
  ['What makes an arrangement an "Impermissible Avoidance Arrangement" (IAA)?', 'An arrangement can be treated as an IAA if its main purpose is to obtain a tax benefit, and it either creates rights/obligations not ordinarily created between parties dealing at arm\'s length, results in misuse or abuse of the tax law provisions, lacks commercial substance, or is entered into in a manner not normally employed for bona fide purposes. Any one of these features, alongside a tax-benefit main purpose, can bring GAAR into play.'],
  ['Can GAAR apply to a treaty-based structure, like using a specific DTAA jurisdiction?', 'Yes, potentially. GAAR can apply to an arrangement that relies on a treaty benefit (sometimes called treaty shopping) if the arrangement otherwise meets the Impermissible Avoidance Arrangement test; for example, an entity interposed in a treaty jurisdiction purely to access a favourable capital gains or withholding rate, with no real business substance in that jurisdiction. A structure with genuine business operations, staff, and decision-making in the treaty jurisdiction stands on materially different footing than one that exists only on paper.'],
  ['Does having a genuine business reason protect a structure from GAAR?', 'Largely, yes; GAAR is specifically aimed at arrangements where the tax benefit is the main purpose, not merely one benefit among genuine commercial reasons. An arrangement backed by real commercial substance and business objectives, where tax efficiency is incidental rather than the primary driver, sits outside what GAAR is designed to target. The difficulty in practice is evidencing that commercial substance convincingly if the arrangement is ever questioned.'],
  ['What should an NRI with a cross-border holding structure do to reduce GAAR risk?', 'Ensure the structure has demonstrable commercial substance; genuine business activity, decision-making, and economic presence in the relevant jurisdiction, not just a registered entity; keep contemporaneous documentation of the non-tax business reasons for the structure; and get transactions above the Rs 3 crore tax-benefit range specifically reviewed rather than assuming a structure that worked years ago remains safe as rules, treaty texts, and enforcement focus evolve.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NriGaarBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">International Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>NRI GAAR Exposure: When Anti-Avoidance Rules Apply to Cross-Border Structures</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published August 22, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <p style={{ marginBottom: '0.6rem', fontWeight: 600 }}>GAAR lets Indian tax authorities disregard arrangements whose main purpose is a tax benefit and that lack genuine commercial substance.</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Now under Part T of the Income Tax Act 2025 (earlier Sections 95-102, Chapter X-A of the 1961 Act).</li>
                  <li style={{ marginBottom: '0.4rem' }}>A Rs 3 crore aggregate tax-benefit threshold (Rule 10U) exempts most routine, smaller transactions.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Treaty-based structures with no real business substance in the treaty jurisdiction are a common target.</li>
                  <li style={{ marginBottom: 0 }}>Genuine commercial substance and documented non-tax business reasons are the primary defence.</li>
                </ul>
              </div>

              <p>Most NRI cross-border tax planning; choosing where to hold investments, how to structure a family holding entity, or which jurisdiction to route an exit through; sits well within ordinary, legitimate tax planning. But at a certain scale, and particularly where a structure&apos;s only real function seems to be accessing a favourable tax outcome, India&apos;s <strong>General Anti-Avoidance Rule</strong> becomes a live consideration, not a theoretical one. Understanding where that line sits matters more than trying to memorise every technical trigger.</p>

              <h2>What GAAR Actually Does</h2>
              <p>GAAR empowers tax authorities to <strong>disregard or recharacterize</strong> an arrangement; denying a treaty benefit, ignoring an interposed entity, or reallocating income to where it was substantively earned; where the arrangement qualifies as an <strong>Impermissible Avoidance Arrangement (IAA)</strong>. Under the <strong>Income Tax Act, 2025</strong>, these provisions are consolidated in <strong>Part T</strong> (the corresponding provisions under the 1961 Act were <strong>Sections 95 to 102</strong>, commonly referred to as Chapter X-A). The restatement under the new Act simplifies the language and structure, but the underlying substantive test remains the same anti-avoidance framework.</p>

              <h2>The Impermissible Avoidance Arrangement Test</h2>
              <p>An arrangement can be treated as an IAA where its <strong>main purpose is to obtain a tax benefit</strong>, combined with at least one of the following features:</p>
              <ul>
                <li>Creating rights or obligations not ordinarily created between parties dealing at arm&apos;s length</li>
                <li>Resulting in misuse or abuse of the provisions of the tax law</li>
                <li>Lacking commercial substance, in whole or in part</li>
                <li>Being entered into or carried out in a manner not normally employed for bona fide business purposes</li>
              </ul>
              <p>The "main purpose" language matters: GAAR is not triggered simply because a structure happens to be tax-efficient. An arrangement with genuine commercial substance, where tax efficiency is incidental to real business objectives, sits outside what the provision is built to target.</p>

              <h2>The Rs 3 Crore Threshold</h2>
              <p>Not every arrangement with any tax advantage is exposed to GAAR scrutiny. Under <strong>Rule 10U</strong>, GAAR does not apply where the <strong>aggregate tax benefit to all parties</strong> to the arrangement, in the relevant assessment year, does <strong>not exceed Rs 3 crore</strong>. This threshold is a deliberate filter, intended to keep GAAR focused on larger, more consequential structures rather than routine cross-border transactions that happen to carry some tax advantage as a byproduct.</p>

              <h2>Where This Shows Up for NRIs</h2>
              <p>A handful of recurring scenarios bring GAAR into an NRI&apos;s planning conversation:</p>
              <ul>
                <li><strong>Treaty shopping structures</strong>: interposing an entity in a favourable treaty jurisdiction purely to access a lower capital gains or withholding rate, without genuine business operations, staff, or decision-making located there. A holding entity with real commercial substance in that jurisdiction stands on very different footing than a shell used only to route a transaction.</li>
                <li><strong>Round-tripping arrangements</strong>: structures where funds effectively move out of and back into India through layered entities, primarily to achieve a tax or regulatory outcome rather than a genuine investment purpose.</li>
                <li><strong>Large family wealth restructuring</strong>: reorganising holdings across jurisdictions ahead of a significant liquidity event (a business sale, an IPO, a large property disposal), where the restructuring timing and the absence of any operating rationale can itself draw scrutiny.</li>
              </ul>
              <p>None of these are automatically GAAR violations; the test is always whether genuine commercial substance and bona fide purpose exist alongside the tax outcome, not whether a tax outcome exists at all.</p>

              <h2>The Practical Defence: Commercial Substance</h2>
              <p>The single most important factor in withstanding GAAR scrutiny is demonstrable <strong>commercial substance</strong>: real economic activity, decision-making authority, and business risk genuinely located where the structure claims it to be, supported by contemporaneous documentation of the non-tax reasons for the arrangement. Structures assembled reactively, with documentation created only after a query is raised, are far harder to defend than ones where the commercial rationale was recorded and the structure operated consistently with that rationale from the outset.</p>
              <p>This connects directly to broader NRI cross-border structuring questions; see our guides on <Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>DTAA relief by country</Link> and <Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>POEM (Place of Effective Management)</Link>, since both treaty residence claims and POEM determinations turn on the same underlying question GAAR asks: is there real substance behind the structure, or only a filing?</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Reviewing a cross-border holding or exit structure?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We assess GAAR and treaty-substance exposure before a structure is finalised, not after a notice arrives.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dtaa-guide-nri-country-wise" style={{ color: 'var(--primary)', fontWeight: 600 }}>India DTAA Guide for NRIs by Country</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>POEM: Place of Effective Management</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-selling-shares-indian-private-company-tax-fema" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Selling Shares in an Indian Private Company</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

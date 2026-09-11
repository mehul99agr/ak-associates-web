import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'US LLC vs C-Corp for Indian Founders',
  description: 'Delaware LLC or C-Corp for an Indian founder: pass-through taxation and phantom income vs corporate-level tax, and why most VC-track startups pick a C-Corp while bootstrapped ones pick an LLC.',
  keywords: [
    'US LLC vs C-Corp Indian founders', 'Delaware C-Corp for Indian startup',
    'LLC pass-through taxation NRI', 'phantom income US LLC India',
    'US entity structure Indian founder',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/us-llc-vs-c-corp-indian-founders' },
  openGraph: {
    title: 'US LLC vs C-Corp for Indian Founders',
    description: 'Pass-through taxation and phantom income vs corporate-level tax, and which structure fits your fundraising plans.',
    url: 'https://agrawalkhandelwal.com/blog/us-llc-vs-c-corp-indian-founders',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US LLC vs C-Corp for Indian Founders',
    description: 'Which US entity structure fits your startup and fundraising plans.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('US LLC vs C-Corp for Indian Founders', 'us-llc-vs-c-corp-indian-founders')

const articleLd = buildArticleLd({
  headline: 'US LLC vs C-Corp for Indian Founders',
  description: 'How LLC pass-through taxation and phantom income compare to Delaware C-Corp taxation for an Indian founder, and which structure fits bootstrapped vs VC-track startups.',
  datePublished: '2025-05-14',
  slug: 'us-llc-vs-c-corp-indian-founders',
})

const faqs: [string, string][] = [
  ['Can an Indian citizen own a US LLC or C-Corp without living in the US?', 'Yes. Neither US citizenship nor US residency is required to own a Delaware LLC or C-Corp. An Indian founder can be the sole member or shareholder, though certain filings such as an EIN and, in some cases, an ITIN are still required to operate and file taxes correctly.'],
  ['What is "phantom income" and why does it matter for an LLC?', 'An LLC is a pass-through entity, so its profit is attributed to the owner\'s personal return in the year it is earned, whether or not any cash was actually distributed. For an Indian founder this can also translate into taxable income in India in the same year, even if the money stays in the US business account.'],
  ['Why do venture capital investors prefer a Delaware C-Corp over an LLC?', 'Institutional investors, including VC funds and most accelerators, are structured to invest in stock, not LLC membership interests. A C-Corp\'s capital structure supports preferred share classes, liquidation preferences, and standard protective provisions that an LLC\'s operating agreement is not designed around, which is why most VC-track startups incorporate as a C-Corp from the outset.'],
  ['Is it expensive to convert an LLC into a C-Corp later?', 'Converting later is possible but adds legal, accounting, and sometimes tax cost compared to starting with the right structure. If a fundraise from institutional investors is a realistic near-term plan, incorporating directly as a Delaware C-Corp usually avoids this cost.'],
  ['Do Indian founders need an Indian entity as well as a US one?', 'Many founders running a US-facing product keep a US parent (commonly a Delaware C-Corp) for fundraising and customer contracts, alongside an Indian subsidiary or LLP for local operations, R&D, and hiring. The right structure depends on where revenue is generated, where the team sits, and the funding plan, so this should be assessed case by case.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function UsLlcVsCCorpBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>US LLC vs C-Corp for Indian Founders: Which Structure Fits Your Startup</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published May 14, 2025</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>An LLC is pass-through: profit is taxed on your personal return as it is earned, even if not withdrawn ("phantom income").</li>
                  <li style={{ marginBottom: '0.4rem' }}>A C-Corp pays its own corporate tax and keeps that filing off your personal return.</li>
                  <li style={{ marginBottom: '0.4rem' }}>VC funds and accelerators almost exclusively invest in Delaware C-Corps, not LLCs.</li>
                  <li style={{ marginBottom: 0 }}>Bootstrapped, revenue-funded businesses often find an LLC simpler and cheaper to run.</li>
                </ul>
              </div>

              <p>One of the first decisions an Indian founder setting up a US entity has to make is LLC or C-Corp, and it is not a formality. The two structures are taxed differently, are treated differently by investors, and cost different amounts to maintain, and the wrong choice made early can be expensive to reverse once revenue or funding is already flowing through the entity.</p>

              <h2>How an LLC Is Taxed</h2>
              <p>A US LLC is, by default, a pass-through entity for tax purposes. It does not pay federal income tax at the entity level; instead, its profit passes through to the owner, who reports it personally, typically on Form 1040-NR for a non-resident alien owner. This creates what is often called phantom income: the profit is taxable in the year it is earned, whether or not the founder actually withdrew any cash from the business. For an Indian founder, that income can also become taxable in India in the same year under India's tax rules, which makes cash-flow planning around tax payments important even when the business is reinvesting its profit rather than distributing it.</p>

              <h2>How a C-Corp Is Taxed</h2>
              <p>A Delaware C-Corp pays federal corporate income tax at the entity level on its own profits, and that tax obligation is separate from the founder's personal return. Dividends paid out to shareholders are taxed again at the shareholder level, which is the "double taxation" a C-Corp is known for, but for a startup that is reinvesting profit rather than distributing it, this is often less of a practical concern than the LLC's phantom income issue.</p>

              <h2>Why Investors Care About the Structure</h2>
              <p>Venture capital funds, seed accelerators, and most institutional angel investors are built to hold stock, not LLC membership interests. A C-Corp's capital structure supports preferred stock classes, liquidation preferences, vesting schedules, and standard protective provisions in a way an LLC's operating agreement generally is not designed for. This is the single biggest reason a startup planning to raise institutional capital, even a seed round, is almost always steered toward incorporating as a Delaware C-Corp from day one rather than starting as an LLC and converting later.</p>

              <h2>When an LLC Makes More Sense</h2>
              <p>Founders running a bootstrapped, revenue-generating business, such as a SaaS product, a service business, or an e-commerce operation, without near-term plans to raise institutional venture capital, often find the LLC's lower compliance overhead and simpler tax filing genuinely easier to manage. The phantom income issue is manageable when the founder is actively planning around it rather than being surprised by it at filing time.</p>

              <h2>The Common Two-Entity Structure</h2>
              <p>A pattern seen often among Indian founders building for a US market is a Delaware C-Corp as the global parent holding company, paired with an Indian subsidiary, frequently a Private Limited company, that handles local operations, R&amp;D, and hiring. This lets the founder raise US capital into the entity investors expect, while keeping day-to-day India operations under a structure suited to Indian labour and tax compliance. Getting this structure right at incorporation avoids a costly restructuring later, and it should be planned alongside, not after, the US entity choice.</p>

              <h2>Making the Call</h2>
              <p>There is no universally right answer, only a right answer for a given founder's plan. If institutional fundraising is realistically on the table in the next year or two, incorporate as a C-Corp. If the business is being built on its own revenue with no near-term fundraising plan, an LLC is usually the simpler and cheaper structure to run, provided the phantom income tax exposure is planned for from the start.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Planning a US entity for your startup?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help Indian founders choose and structure the right US entity alongside their Indian compliance and accounting.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/offshore-accounting" className="btn btn-outline">Offshore Accounting Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/delaware-wyoming-incorporation-ein-itin-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Delaware/Wyoming Incorporation, EIN and ITIN Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/india-us-dtaa-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>India-US DTAA Guide</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-5471-5472-8858-foreign-owned-us-entity" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 5471 vs 5472 vs 8858</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'US Sales Tax Nexus for Indian SaaS Companies',
  description: 'How US economic nexus rules for sales tax apply to an Indian SaaS or services company selling into the US, without any physical presence or US office.',
  keywords: [
    'US economic nexus SaaS', 'sales tax nexus foreign company',
    'Indian SaaS US sales tax', 'economic nexus threshold states',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/us-sales-tax-nexus-indian-saas-companies' },
  openGraph: {
    title: 'US Sales Tax Nexus for Indian SaaS Companies',
    description: 'Why physical presence in the US is no longer required to trigger a sales tax obligation.',
    url: 'https://agrawalkhandelwal.com/blog/us-sales-tax-nexus-indian-saas-companies',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'US Sales Tax Nexus for Indian SaaS Companies',
    description: 'How economic nexus rules apply to Indian SaaS and services companies.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('US Sales Tax Nexus for Indian SaaS Companies', 'us-sales-tax-nexus-indian-saas-companies')

const articleLd = buildArticleLd({
  headline: 'US Sales Tax Nexus for Indian SaaS Companies',
  description: 'How US state economic nexus rules apply to an Indian SaaS or services company selling into the US without a physical presence, and how to track exposure across states.',
  datePublished: '2025-11-22',
  slug: 'us-sales-tax-nexus-indian-saas-companies',
})

const faqs: [string, string][] = [
  ['Can a company with no US office really owe US sales tax?', 'Yes. Since the introduction of economic nexus rules, a state can require sales tax registration and collection based purely on the volume of sales into that state, with no physical presence, office, or employees required. A US LLC or a foreign company selling remotely into the US can trigger this the same way a US-based seller does.'],
  ['What is a typical economic nexus threshold?', 'Many states use a threshold around 100,000 US dollars in annual sales into that state, sometimes combined with or replaced by a transaction-count threshold, though this varies significantly. Some states set materially higher thresholds, for example Texas at 500,000 US dollars, and threshold structures have been changing, so state-specific figures should always be confirmed rather than assumed from a single reference point.'],
  ['Does SaaS actually count as taxable for sales tax purposes?', 'This depends entirely on the state; some states tax SaaS and digital subscriptions as taxable services or digital goods, while others do not tax SaaS at all or tax only specific categories of digital products. There is no single national answer, so each state a company has meaningful revenue in needs to be assessed individually.'],
  ['Do I need to register in every state as soon as I start selling there?', 'No, registration is only required once a state\'s specific economic nexus threshold is actually crossed. Selling a small amount into a state without crossing its threshold does not create a registration obligation in that state, but revenue should be tracked state by state so the threshold isn\'t crossed unnoticed.'],
  ['Is this the same as US federal income tax?', 'No. Sales tax nexus and federal income tax exposure are governed by entirely different rules; a company can have a sales tax obligation in a state without necessarily having a state or federal income tax permanent establishment there, and vice versa. Each needs to be assessed on its own terms.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function UsSalesTaxNexusBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>US Sales Tax Economic Nexus for Indian SaaS and Services Companies</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 22, 2025</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Economic nexus means a sales tax obligation can arise from sales volume alone, no US office needed.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Thresholds vary by state, commonly around 100,000 US dollars in annual sales, but not uniform.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Whether SaaS is even taxable differs state by state; there is no single national rule.</li>
                  <li style={{ marginBottom: 0 }}>Track revenue by state so a threshold isn't crossed without noticing.</li>
                </ul>
              </div>

              <p>An Indian SaaS or services company selling to US customers through a US LLC often assumes sales tax is someone else's problem, since there is no US office, no US employees, and no physical footprint. That assumption used to be closer to correct. It no longer is.</p>

              <h2>What Changed: Economic Nexus</h2>
              <p>Sales tax nexus, the legal connection to a state that creates a registration and collection obligation, used to depend on physical presence: an office, a warehouse, an employee. Economic nexus rules changed that by allowing a state to require sales tax registration purely based on the volume of sales made into that state, with no physical presence at all. This applies to any seller crossing that state's threshold, US-based or not, and it is the reason a foreign SaaS company can end up with US state tax obligations despite having no employees or offices anywhere in the country.</p>

              <h2>How Thresholds Generally Work</h2>
              <p>Most states set an economic nexus threshold based on annual sales revenue into that state, commonly in the region of 100,000 US dollars, sometimes alongside or in place of a separate transaction-count threshold. These figures are not uniform: some states set materially higher revenue thresholds, and threshold structures have been adjusted over time in various states, including some tightening rules by removing transaction-count alternatives. Because of this variation, a company should check the current threshold structure for each state where it has meaningful revenue rather than relying on a single number as a universal rule.</p>

              <h2>Is SaaS Even Taxable? It Depends on the State</h2>
              <p>This is the step founders most often skip. Even once a threshold is crossed, whether SaaS or a digital subscription is a taxable transaction at all depends entirely on that state's specific tax code. Some states treat SaaS and digital services as taxable, others exclude software delivered as a service from sales tax entirely, and the categorization can differ for adjacent products like downloaded software versus cloud-hosted software. A blanket assumption in either direction, that SaaS is always taxable or never taxable, will be wrong in some states.</p>

              <h2>Building a Practical Monitoring Process</h2>
              <p>The realistic approach for a growing SaaS company is not to register everywhere preemptively, since registration and ongoing filing in a state where no threshold has been crossed creates unnecessary compliance cost. Instead, track revenue by state on an ongoing basis, flag states approaching their published threshold, and register and begin collecting only once a threshold is actually crossed in that specific state. As US revenue grows and expands into more states, this monitoring needs to become a routine part of the accounting process rather than an annual afterthought.</p>

              <h2>This Is Separate from Income Tax</h2>
              <p>Sales tax nexus and income tax nexus, including permanent establishment questions under a tax treaty, are governed by different rules and should not be conflated. A company can owe sales tax in a state without having an income tax presence there, and the reverse is also possible. Each needs its own assessment as the business scales into new states.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Selling SaaS into the US and unsure of your sales tax exposure?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help founders track state-by-state exposure and stay compliant as US revenue grows.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/offshore-accounting" className="btn btn-outline">Offshore Accounting Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-vs-c-corp-indian-founders" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC vs C-Corp for Indian Founders</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/us-llc-annual-compliance-calendar-non-resident" style={{ color: 'var(--primary)', fontWeight: 600 }}>US LLC Annual Compliance Calendar</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/india-us-dtaa-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>India-US DTAA Guide</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/offshore-accounting" style={{ color: 'var(--primary)', fontWeight: 600 }}>Offshore Accounting Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

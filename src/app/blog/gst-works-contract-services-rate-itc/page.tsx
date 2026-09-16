import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'GST on Works Contract Services: Rate & ITC Rules',
  description: 'GST on works contract services in India: the current 18% rate, why Section 17(5)(c)/(d) blocks input tax credit for the recipient, and when a contractor can still claim it.',
  keywords: [
    'GST on works contract', 'works contract GST rate', 'ITC on works contract services',
    'section 17(5) works contract', 'blocked credit works contract GST', 'GST works contract construction',
    'works contract GST India', 'immovable property ITC GST',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-works-contract-services-rate-itc' },
  openGraph: {
    title: 'GST on Works Contract Services: Rate & ITC Rules',
    description: 'The current works contract GST rate, and why Section 17(5) blocks input tax credit for most recipients even though the contractor can claim it.',
    url: 'https://agrawalkhandelwal.com/blog/gst-works-contract-services-rate-itc',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST on Works Contract Services: Rate & ITC Rules',
    description: 'GST rate on works contract services and the Section 17(5) rules that block ITC for most recipients.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST on Works Contract Services: Rate & ITC Rules', 'gst-works-contract-services-rate-itc')

const articleLd = buildArticleLd({
  headline: 'GST on Works Contract Services: Rate & ITC Rules',
  description: 'The current GST rate on works contract services and the Section 17(5)(c)/(d) rules that block input tax credit for the recipient in most construction scenarios.',
  datePublished: '2026-09-20',
  slug: 'gst-works-contract-services-rate-itc',
})

const faqs: [string, string][] = [
  ['What is the GST rate on works contract services?', 'Works contract services for both government and private contracts are taxed at 18% GST following the GST 2.0 rate rationalisation that removed the separate 12% slab. Always confirm the applicable rate at the time of supply, since rate schedules can be revised by notification.'],
  ['Can a business claim ITC on works contract services used to build its office?', 'No, in most cases. Section 17(5)(c) and (d) block input tax credit on works contract services and on goods or services used for construction of an immovable property on one\'s own account, other than plant and machinery. This applies even though GST was charged and paid on the contractor\'s invoice.'],
  ['Can a contractor claim ITC on inputs used to execute a works contract?', 'Yes. The blocking under Section 17(5) applies to the recipient of a works contract service for construction on its own account, not to a contractor who is making a further taxable supply of works contract services. A contractor providing taxable output can generally claim ITC on inputs, input services, and capital goods used to execute that contract.'],
  ['Is ITC available on works contract services for plant and machinery?', 'Yes. The block under Section 17(5)(c) specifically excludes plant and machinery, so works contract services used to install or construct plant and machinery remain eligible for ITC, subject to the general conditions for claiming credit.'],
  ['Does GST on works contract apply differently to government contracts?', 'Historically, government works contracts (roads, irrigation, and similar public works) attracted a concessional 12% rate, but that concessional slab was withdrawn as part of the broader GST rate rationalisation, bringing both government and private works contracts to the standard 18% rate. Check the notification in force for the specific contract date before finalising pricing.'],
  ['What documentation should a contractor keep to defend ITC claims on a works contract?', 'Maintain tax invoices from suppliers, proof that the credit is reflected in GSTR-2B, a clear link between the inputs procured and the specific works contract being executed, and a note on whether the underlying supply is a further works contract service or construction on own account. This distinction is exactly what a GST audit tests first.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function GSTWorksContractBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">GST</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>GST on Works Contract Services: Rate and ITC Rules Explained</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 20, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Works contract services, government or private, are taxed at a standard <strong>18% GST</strong> rate.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Section 17(5)(c)/(d) blocks ITC for a recipient building immovable property on its own account, even though GST was paid on the contractor&apos;s bill.</li>
                  <li style={{ marginBottom: '0.4rem' }}>A contractor executing the works contract as a further taxable supply is not caught by the block and can generally claim ITC on inputs used.</li>
                  <li style={{ marginBottom: 0 }}>Plant and machinery is carved out of the block; works contract services for plant and machinery remain eligible for credit.</li>
                </ul>
              </div>

              <p>&quot;Works contract&quot; is one of the more litigated corners of GST because a single contract usually bundles goods and services (construction materials plus labour, or supply plus installation) that GST law treats as one composite supply of service. Getting the rate right is the easy part; getting the input tax credit position right is where most businesses trip up.</p>

              <h2>What Counts as a Works Contract Under GST</h2>
              <p>GST defines a works contract as a contract for building, construction, fabrication, erection, installation, fitting out, improvement, modification, repair, maintenance, renovation, alteration, or commissioning of any immovable property, where transfer of property in goods (whether as goods or in some other form) is involved in the execution of the contract. Because it is deemed a supply of service in its entirety, a works contract is not split into a goods component and a services component for tax purposes; one rate applies to the whole value.</p>

              <h2>Current GST Rate on Works Contract Services</h2>
              <p>Works contract services for both government works (roads, irrigation, and other public infrastructure) and private construction contracts are currently taxed at <strong>18%</strong>, following the rate rationalisation that removed the earlier concessional 12% slab that used to apply to specified government works contracts. Because GST rate schedules are revised by notification from time to time, always confirm the rate in force for the specific contract date before finalising a quotation or invoice, particularly for long-running contracts that may span a rate change.</p>

              <h2>The ITC Block: Section 17(5)(c) and (d)</h2>
              <p>This is the part that catches most businesses off guard. Section 17(5)(c) blocks input tax credit on works contract services when supplied for construction of an immovable property, other than plant and machinery, except where the works contract service is an input service for further supply of works contract service. Section 17(5)(d) extends a similar block to goods or services received by a taxable person for construction of an immovable property on their own account, again excluding plant and machinery, even when such goods or services are used in the course or furtherance of business.</p>
              <p>In practice this means:</p>
              <ul>
                <li>A company that hires a contractor to build its own factory shed or office building <strong>cannot claim ITC</strong> on the contractor&apos;s GST, even though the shed is used for business.</li>
                <li>A real estate developer that engages a sub-contractor to build a project it will sell is generally treated differently, because the developer&apos;s own construction is not &quot;on own account&quot; in the same sense; this area has specific rules for the real estate sector and needs a separate look.</li>
                <li>A contractor who buys cement, steel, and hires labour to execute a works contract for a client is <strong>not blocked</strong>, because the contractor is making a further taxable supply of works contract service, not constructing property on its own account.</li>
              </ul>

              <h2>The Plant and Machinery Exception</h2>
              <p>Both Section 17(5)(c) and (d) carve out plant and machinery from the block. Works contract services used to install, erect, or construct plant and machinery (as distinct from a building or civil structure housing that plant and machinery) remain eligible for ITC, subject to meeting the ordinary conditions: a valid tax invoice, the credit reflecting in GSTR-2B, receipt of the goods or services, and payment to the supplier within the prescribed period. The distinction between &quot;plant and machinery&quot; and the civil structure that supports it is often the exact point of dispute in a GST audit, so keep engineering and accounting records that clearly separate the two components of a project.</p>

              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Scenario</th><th style={thStyle}>ITC Position</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Company builds its own office/factory building</td><td style={tdStyle}>Blocked under Section 17(5)(d)</td></tr>
                    <tr><td style={tdAltStyle}>Contractor executes a works contract for a client (further supply)</td><td style={tdAltStyle}>Generally available</td></tr>
                    <tr><td style={tdStyle}>Works contract service for plant and machinery</td><td style={tdStyle}>Available (carved out of the block)</td></tr>
                    <tr><td style={tdAltStyle}>Repair/renovation of own immovable property capitalised in the books</td><td style={tdAltStyle}>Generally blocked where capitalised</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Practical Steps Before Signing a Works Contract</h2>
              <p>Before finalising pricing on a construction or works contract, work out whether the ITC on that contract will actually be available to you as the recipient. If it is blocked, the 18% GST is a real cost that should be factored into your project budget rather than assumed as a pass-through credit. If you are the contractor, keep your procurement clearly linked to the specific works contract being executed, and maintain a clean paper trail distinguishing self-construction from further-supply situations, since this is the first thing a GST officer will test on scrutiny.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Structuring a works contract or unsure about your ITC position?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help businesses classify contracts correctly, work through the Section 17(5) ITC analysis, and stay audit-ready on GST compliance.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-for-ecommerce-sellers-tcs-section-52" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST for E-Commerce Sellers: TCS Under Section 52</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-late-fees-interest-calculation" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Late Fees and Interest: How They Are Calculated</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'GST Registration Process in India: Complete Guide' },
  description: 'Who needs GST registration, the exact turnover thresholds for goods vs services, documents required, the online process, and timelines for new businesses.',
  keywords: [
    'GST registration process India', 'GST registration turnover limit', 'documents for GST registration',
    'GST registration online', 'voluntary GST registration', 'GST registration for new business',
    'multi-state GST registration', 'GST registration threshold goods services',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-registration-process-india-guide' },
  openGraph: {
    title: 'GST Registration Process in India: Complete Guide',
    description: 'Thresholds, documents, process, and timelines for GST registration, explained for any new business.',
    url: 'https://agrawalkhandelwal.com/blog/gst-registration-process-india-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Registration Process in India: Complete Guide',
    description: 'Thresholds, documents, process, and timelines for GST registration, explained for any new business.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST Registration Process in India: Complete Guide', 'gst-registration-process-india-guide')

const articleLd = buildArticleLd({
  headline: 'GST Registration Process in India: Complete Guide for New Businesses',
  description: 'A complete walkthrough of GST registration in India: turnover thresholds for goods and services, compulsory registration categories, documents, the online process, and multi-state registration.',
  datePublished: '2026-09-17',
  slug: 'gst-registration-process-india-guide',
})

const faqs: [string, string][] = [
  [
    'What is the turnover limit for GST registration in India?',
    'For suppliers of goods, GST registration becomes mandatory once aggregate turnover crosses Rs 40 lakh in a financial year (Rs 20 lakh in special category states). For suppliers of services, the threshold is Rs 20 lakh (Rs 10 lakh in special category states). These are the thresholds under Section 22 of the CGST Act; several categories of suppliers must register regardless of turnover under Section 24, covered below.',
  ],
  [
    'Do I need GST registration if my turnover is below the threshold?',
    'Not compulsorily, unless you fall under one of the Section 24 categories that require registration irrespective of turnover, such as inter-state suppliers, e-commerce sellers, or businesses required to deduct or collect tax at source. Many businesses below the threshold still opt for voluntary registration to claim input tax credit and to be able to bill business customers who expect a GST invoice.',
  ],
  [
    'How long does GST registration take?',
    'If the application and documents are in order and Aadhaar authentication is completed, GST registration is typically granted within 7 working days. Where the officer flags the application for physical verification or additional documents, it can take longer, generally up to 30 days.',
  ],
  [
    'Can a business have GST registration in more than one state?',
    'Yes, and it is required if you have a place of business (an office, warehouse, or fixed establishment from which you supply goods or services) in more than one state. GST registration is state-wise, not PAN-wise, so each state where you operate needs a separate GSTIN, even though all of them share the same PAN.',
  ],
  [
    'What documents are required for GST registration?',
    'PAN of the business or proprietor, identity and address proof of the promoters/partners/directors, proof of the principal place of business (rent agreement or ownership document plus a utility bill or property tax receipt), bank account proof, and the constitution document (partnership deed, LLP agreement, or certificate of incorporation, depending on the entity type).',
  ],
  [
    'Is GST registration compulsory for an online seller regardless of turnover?',
    'Yes. Anyone supplying goods or services through an e-commerce operator that is required to collect tax at source generally needs GST registration irrespective of turnover, under Section 24. This is one of the most common reasons small businesses end up registering well before crossing the general threshold.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function GstRegistrationProcessGuideBlog() {
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
              <span className="section-badge">GST</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                GST Registration Process in India: Complete Guide for New Businesses
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 17, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Registration is mandatory once turnover crosses <strong>Rs 40 lakh for goods</strong> or <strong>Rs 20 lakh for services</strong> (lower in special category states) under Section 22.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Several categories, such as inter-state suppliers and certain e-commerce sellers, must register under Section 24 regardless of turnover.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Registration is state-wise: a business with a place of operation in multiple states needs a separate GSTIN in each.</li>
                    <li style={{ marginBottom: 0 }}>With Aadhaar authentication and clean documents, approval typically takes about 7 working days.</li>
                  </ul>
                </div>
                <p>GST registration is usually the first compliance step a new business takes, and it is also where founders make the most avoidable mistakes: registering too early, registering in the wrong state, or missing a compulsory-registration trigger that has nothing to do with turnover. This guide walks through who actually needs to register, when, and how, for any business supplying goods or services, whatever the legal structure.</p>

                <h2>Who Must Register for GST</h2>
                <p>Under <strong>Section 22 of the CGST Act</strong>, registration becomes mandatory once a person&apos;s aggregate turnover in a financial year crosses the prescribed threshold. The threshold depends on what you supply and where:</p>
                <ul>
                  <li><strong>Goods:</strong> Rs 40 lakh in most states; Rs 20 lakh in special category states (Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, Uttarakhand).</li>
                  <li><strong>Services:</strong> Rs 20 lakh in most states; Rs 10 lakh in special category states.</li>
                  <li><strong>Mixed supply of goods and services:</strong> generally follows the services threshold once any service component is involved, so check this with your CA if your business supplies both.</li>
                </ul>
                <p>&quot;Aggregate turnover&quot; is computed on an all-India, PAN-wide basis, across all your business verticals and branches, not per state or per GSTIN.</p>

                <h2>Compulsory Registration Regardless of Turnover (Section 24)</h2>
                <p>Turnover thresholds do not apply to certain categories of suppliers, who must register the moment they start that activity, even with zero turnover so far:</p>
                <ul>
                  <li>Persons making any inter-state taxable supply</li>
                  <li>Casual taxable persons and non-resident taxable persons</li>
                  <li>Persons required to pay tax under reverse charge</li>
                  <li>E-commerce operators, and in many cases suppliers selling through an e-commerce operator required to collect tax at source</li>
                  <li>Input service distributors</li>
                  <li>Persons required to deduct tax at source (TDS under GST)</li>
                  <li>Agents supplying on behalf of other taxable persons</li>
                </ul>
                <p>This is the most common trap for new online sellers and consultants who assume they are safe below the general threshold, then find they triggered a compulsory-registration category on day one.</p>

                <h2>Should You Register Voluntarily Even Below the Threshold?</h2>
                <p>Voluntary registration below the threshold is allowed and is often a sound business decision, not just a compliance formality. It lets you claim input tax credit on business purchases, issue GST-compliant invoices that larger business customers often insist on before they will pay an invoice, and it signals a degree of formality that can matter when raising funds or bidding for larger contracts. The trade-off is the ongoing filing burden (return, whether monthly or quarterly), so weigh it against your actual customer base and purchase volume.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Registration Is State-Wise, Not PAN-Wise</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>A single PAN can hold multiple GSTINs, one for each state where the business has a place of supply, such as an office, warehouse, or fixed establishment. If you expand into a second state, you generally need a fresh registration there even though it is the same legal entity, not an amendment to your existing one. Plan this before signing a lease or warehouse contract in a new state so the GSTIN is ready before you start billing from there.</p>
                </div>

                <h2>Documents Required</h2>
                <ul>
                  <li>PAN card of the business entity or the proprietor</li>
                  <li>Identity and address proof of promoters, partners, or directors, with photographs</li>
                  <li>Proof of the principal place of business: ownership document or rent/lease agreement, plus a recent electricity bill or property tax receipt</li>
                  <li>Bank account proof: a cancelled cheque, bank statement, or the first page of the passbook</li>
                  <li>Constitution document appropriate to the entity: partnership deed for a firm, LLP agreement for an LLP, or the certificate of incorporation and MOA/AOA for a company</li>
                  <li>Digital signature (mandatory for companies and LLPs; optional but useful for proprietorships and partnerships)</li>
                </ul>

                <h2>Step-by-Step Registration Process</h2>
                <ol>
                  <li><strong>File Part A of Form GST REG-01</strong> on the GST portal with PAN, mobile number, and email; you receive a Temporary Reference Number (TRN) after OTP verification.</li>
                  <li><strong>File Part B</strong> using the TRN, uploading business details and the documents listed above.</li>
                  <li><strong>Complete Aadhaar authentication</strong> for the primary authorized signatory. This is the single biggest factor in how fast your application moves; authenticated applications are fast-tracked, unauthenticated ones default to physical verification.</li>
                  <li><strong>Officer review:</strong> if the application is complete and authenticated, the GSTIN is typically issued within about 7 working days. If flagged for site verification or additional documents, it can extend to around 30 days.</li>
                  <li><strong>GSTIN and registration certificate issued</strong> electronically via Form GST REG-06, after which you can start raising GST-compliant invoices.</li>
                </ol>

                <h2>Common Mistakes That Delay Registration</h2>
                <p>Address proof that does not match the applicant&apos;s name, an expired or mismatched rent agreement, skipping Aadhaar authentication, and applying with the wrong constitution type for the entity are the most frequent causes of delay or rejection. Getting these right the first time is far faster than correcting them after a query is raised, since each query response resets part of the processing clock.</p>

                <p>If you are registering GST specifically as part of setting up a new startup and want the sequence tied into your broader post-incorporation compliance, see our dedicated guide on <Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST registration and first return for startups</Link>. This post covers the general registration rules that apply to any business, goods or services, any structure; that one walks through the startup-specific sequence and first GSTR-3B filing.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need help with GST registration?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle GST registration, multi-state GSTIN setup, and ongoing return filing for businesses across structures and industries.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20GST%20registration%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration and First Return for Startups</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-composition-scheme-eligibility-rates" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Composition Scheme: Eligibility, Rates &amp; When to Opt In</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gstr-1-vs-gstr-3b-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-1 vs GSTR-3B: Filing Guide &amp; Common Mistakes</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

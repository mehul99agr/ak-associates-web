import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'HRA Exemption: Calculation & Documents Needed',
  description: 'How House Rent Allowance exemption is calculated under the least-of-three rule, metro vs non-metro rates, landlord PAN requirements, and why it only applies under the old tax regime.',
  keywords: [
    'HRA exemption calculation', 'house rent allowance exemption', 'HRA documents needed',
    'landlord PAN rent receipt', 'HRA old regime vs new regime', 'HRA exemption formula',
    'rent receipts for HRA claim', 'HRA metro non-metro rate',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/hra-exemption-calculation-documents-needed' },
  openGraph: {
    title: 'HRA Exemption: Calculation & Documents Needed',
    description: 'The least-of-three calculation, metro vs non-metro rates, and the documents you need to actually claim it.',
    url: 'https://agrawalkhandelwal.com/blog/hra-exemption-calculation-documents-needed',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRA Exemption: Calculation & Documents Needed',
    description: 'The least-of-three calculation, metro vs non-metro rates, and required documents.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('HRA Exemption: Calculation & Documents Needed', 'hra-exemption-calculation-documents-needed')

const articleLd = buildArticleLd({
  headline: 'HRA Exemption: Calculation & Documents Needed',
  description: 'How House Rent Allowance exemption is calculated, metro vs non-metro rates, documentation requirements including landlord PAN, and why it applies only under the old tax regime.',
  datePublished: '2026-09-23',
  slug: 'hra-exemption-calculation-documents-needed',
})

const faqs: [string, string][] = [
  ['How is HRA exemption calculated?', 'HRA exemption is the least of three amounts: the actual HRA received from the employer, rent paid minus 10% of basic salary (plus dearness allowance, if any), or 50% of basic salary for a metro city residence (40% for a non-metro residence). Whichever of the three is lowest is the exempt amount.'],
  ['Which cities count as metro for the higher 50% HRA rate?', 'Only Delhi, Mumbai, Kolkata, and Chennai qualify for the 50%-of-basic-salary metro rate. Every other city, including Nashik, Pune, and Sillod, falls under the non-metro 40% rate.'],
  ['What documents are needed to claim HRA exemption?', 'You typically need signed rent receipts for the claimed period, a rent agreement, and proof of rent payment such as bank transfer records. If total annual rent exceeds Rs 1 lakh, the landlord\'s PAN is mandatory; if the landlord does not have a PAN, a declaration from the landlord is required instead.'],
  ['Can I claim HRA exemption under the new tax regime?', 'No. HRA exemption is available only under the old tax regime. The new tax regime, which is now the default, does not allow this or most other Chapter VI-A/Section 10 exemptions, offering lower slab rates in exchange.'],
  ['Can I claim HRA if I pay rent to my parents?', 'Yes, provided the arrangement is genuine: a proper rent agreement, actual rent paid through a traceable bank transfer, and the parent declaring the rent received as income in their own return. The parent should not be a joint owner of the same property with you claiming a home loan deduction on it, as that combination invites scrutiny.'],
  ['What if I don\'t receive HRA as part of my salary but still pay rent?', 'If your salary structure does not include an HRA component, you cannot claim Section 10(13A) exemption, but you may be eligible for a deduction under Section 80GG instead, subject to its own conditions and a lower cap, and provided you, your spouse, or your minor child does not own residential accommodation in the city of employment.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function HraExemptionBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Income Tax</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>House Rent Allowance (HRA) Exemption: Calculation &amp; Documents Needed</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published September 23, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>HRA exemption is the <strong>lowest of three amounts</strong>: actual HRA received, rent paid minus 10% of basic salary, or 50%/40% of basic salary for metro/non-metro cities.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Only Delhi, Mumbai, Kolkata, and Chennai count as metro; Nashik and Sillod both fall under the 40% non-metro rate.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Rent above <strong>Rs 1 lakh a year</strong> needs the landlord&apos;s PAN on file, or a declaration if they don&apos;t have one.</li>
                  <li style={{ marginBottom: 0 }}>HRA exemption is available <strong>only under the old tax regime</strong>, not the new regime.</li>
                </ul>
              </div>

              <p>HRA is one of the largest exempt components in most salary structures, but the exemption is not automatically the full HRA you receive. It is calculated using a specific formula, and claiming it correctly means getting both the math and the paperwork right.</p>

              <h2>The Least-of-Three Rule</h2>
              <p>Under Section 10(13A) (a provision expected to be reorganised in presentation, though not in substance, once the Income Tax Act 2025 fully takes effect from April 1, 2026), HRA exemption is the <strong>lowest</strong> of the following three amounts, computed for each period your salary structure or rented accommodation changes during the year:</p>
              <ol>
                <li>Actual HRA received from the employer</li>
                <li>Rent paid, minus 10% of basic salary (plus dearness allowance forming part of retirement benefits, if applicable)</li>
                <li>50% of basic salary if the rented accommodation is in a metro city, or 40% if it is in a non-metro city</li>
              </ol>
              <p>Whichever of these three figures is the smallest becomes your exempt HRA; the remainder of the HRA you receive is taxable as salary.</p>

              <h2>Metro vs Non-Metro: Where Nashik and Sillod Stand</h2>
              <p>Only four cities qualify for the higher 50% metro rate: <strong>Delhi, Mumbai, Kolkata, and Chennai</strong>. Every other city in India, including Nashik and Sillod, is treated as non-metro and uses the <strong>40%</strong> rate in the calculation above. This is a common point of confusion for taxpayers who assume any large city qualifies for the metro rate; it does not.</p>

              <h2>Worked Example</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                  <thead><tr><th style={thStyle}>Particulars</th><th style={thStyle}>Amount (Annual)</th></tr></thead>
                  <tbody>
                    <tr><td style={tdStyle}>Basic salary</td><td style={tdStyle}>Rs 6,00,000</td></tr>
                    <tr><td style={tdAltStyle}>HRA received</td><td style={tdAltStyle}>Rs 3,00,000</td></tr>
                    <tr><td style={tdStyle}>Rent paid (city: Nashik, non-metro)</td><td style={tdStyle}>Rs 2,40,000</td></tr>
                    <tr><td style={tdAltStyle}>10% of basic salary</td><td style={tdAltStyle}>Rs 60,000</td></tr>
                    <tr><td style={tdStyle}>Rent paid minus 10% of basic</td><td style={tdStyle}>Rs 1,80,000</td></tr>
                    <tr><td style={tdAltStyle}>40% of basic salary (non-metro)</td><td style={tdAltStyle}>Rs 2,40,000</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The three figures being compared are Rs 3,00,000 (actual HRA), Rs 1,80,000 (rent minus 10% of basic), and Rs 2,40,000 (40% of basic). The lowest is <strong>Rs 1,80,000</strong>, so that is the exempt amount; the remaining Rs 1,20,000 of the HRA received is added to taxable salary.</p>

              <h2>Documents You Need to Support the Claim</h2>
              <ul>
                <li><strong>Rent receipts</strong> for the period claimed, signed by the landlord, ideally monthly or at least periodically through the year</li>
                <li><strong>A rent agreement</strong> stating the monthly rent, tenancy period, and both parties&apos; details</li>
                <li><strong>Proof of payment</strong>, such as bank transfer or UPI records; paying rent in cash without any traceable record weakens the claim if questioned</li>
                <li><strong>Landlord&apos;s PAN</strong>, mandatory if total rent for the year exceeds <strong>Rs 1 lakh</strong>; if the landlord does not have a PAN, a signed declaration to that effect from the landlord is required instead</li>
              </ul>
              <p>Employers usually collect these documents once a year to compute TDS on salary correctly, but you should retain your own copies regardless, since the assessing officer can call for them even after the return is processed.</p>

              <h2>HRA Only Works Under the Old Regime</h2>
              <p>This is the detail that trips up the most taxpayers: HRA exemption, along with most other Chapter VI-A deductions and Section 10 exemptions such as <Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C</Link>, is available <strong>only if you opt for the old tax regime</strong>. The new tax regime, now the default unless you actively opt out, offers lower slab rates but does not allow an HRA exemption at all. Before deciding which regime to pick for a year, run both computations, factoring in your actual rent and other eligible deductions, rather than assuming the new regime is automatically better simply because it is the default.</p>

              <h2>No HRA in Your Salary but You Pay Rent?</h2>
              <p>If your salary structure has no HRA component, Section 10(13A) does not apply to you at all, regardless of rent paid. You may instead be eligible for a deduction under Section 80GG, which comes with its own formula and cap and requires that you, your spouse, or your minor child do not own residential property in the city where you work or reside. This route is far less generous than HRA exemption but is the correct fallback in that situation.</p>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li>Claiming the metro rate for a city that doesn&apos;t qualify for it</li>
                <li>Not collecting the landlord&apos;s PAN when rent crosses Rs 1 lakh a year, leading to the claim being questioned later</li>
                <li>Paying rent to a parent without a genuine agreement and traceable payment trail</li>
                <li>Assuming HRA works the same way under the new regime; it doesn&apos;t</li>
              </ul>
              <p>Getting the documentation right at the start of the year, rather than scrambling at filing time, is what makes an HRA claim easy to defend if it is ever questioned.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Not sure which tax regime works out cheaper for you?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We run the old-regime versus new-regime comparison factoring in your actual rent, deductions, and salary structure before you file.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/services" className="btn btn-outline">Explore Our Services</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/form-16-explained-how-to-read-file-itr" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 16 Explained: How to Read It and File Your ITR</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/section-80c-deductions-eligible-investments-list" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 80C: Complete List of Eligible Investments</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status for Returning NRIs</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

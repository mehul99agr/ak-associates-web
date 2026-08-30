import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Essential Compliance for Indian Startups',
  description: 'Complete compliance checklist for Indian startups: MCA filings (AOC-4, MGT-7, DIR-3 KYC), GST returns, TDS, advance tax, FEMA reporting, and ESOP compliance. Avoid penalties and stay DPIIT-eligible.',
  keywords: ['startup compliance India', 'MCA filing startup', 'GST compliance startup India', 'FEMA FC-GPR reporting', 'DPIIT compliance India', 'startup regulatory checklist'],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/essential-compliance-indian-startups' },
  openGraph: { title: 'Essential Compliance for Indian Startups', description: 'MCA, GST, TDS, advance tax, and FEMA reporting checklist for Indian startups.', url: 'https://agrawalkhandelwal.com/blog/essential-compliance-indian-startups', type: 'article' },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Essential Compliance for Indian Startups', 'essential-compliance-indian-startups')

const articleLd = buildArticleLd({ headline: 'Essential Compliance for Indian Startups', description: 'Complete compliance checklist for Indian startups.', datePublished: '2026-03-12', dateModified: '2026-08-16', slug: 'essential-compliance-indian-startups' })

const faqs: [string, string][] = [
  ['What happens if a startup misses MCA annual filings?', 'Missing AOC-4 or MGT-7 attracts a penalty of Rs 100 per day per form with no cap. For startups that have not filed for 2-3 years, accumulated penalties can cross Rs 10-15 lakh. Additionally, non-filing can lead to the company being struck off by the ROC and directors being disqualified under Section 164(2).'],
  ['Is GST registration mandatory for all startups?', 'GST registration is mandatory if turnover exceeds Rs 40 lakh (Rs 20 lakh for service providers) or if the startup makes interstate supplies regardless of turnover. Even below the threshold, voluntary registration is often beneficial for claiming input tax credit and appearing professional to B2B clients.'],
  ['What FEMA filings are required after raising foreign investment?', 'After receiving foreign investment, the startup must file FC-GPR with the AD Bank within 30 days of share allotment, and an Annual Return on Foreign Liabilities and Assets (FLA return) by July 15 each year. Late FC-GPR filing attracts compounding penalties from RBI that can run to 3x the investment amount.'],
  ['How does compliance affect DPIIT recognition?', 'DPIIT recognition requires the startup to be compliant with all applicable regulations. Non-filing of MCA returns, pending tax demands, or FEMA violations can block or revoke DPIIT recognition, which in turn blocks the Section 80-IAC tax holiday and other startup benefits.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function EssentialComplianceBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Essential Compliance for Indian Startups: The Checklist That Prevents Expensive Surprises</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published March 12, 2026</span><span aria-hidden>&bull;</span><span>Updated August 16, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>From day one, startups must file with MCA (AOC-4, MGT-7, DIR-3 KYC), GST department, Income Tax (TDS + advance tax), and RBI (if foreign-funded).</li>
                  <li style={{ marginBottom: '0.4rem' }}>Missing MCA filings costs Rs 100/day/form with no cap. Missing FC-GPR attracts 3x penalties from RBI.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Non-compliance blocks <Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT recognition</Link> and derails fundraising due diligence.</li>
                  <li style={{ marginBottom: 0 }}>Build a compliance calendar from day one - the cost of prevention is a fraction of the cost of cleanup.</li>
                </ul>
              </div>

              <p>Navigating the regulatory landscape in India can be daunting for new founders. From the day of <Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>incorporation</Link>, your startup enters a cycle of mandatory filings across multiple regulators - MCA, GST department, Income Tax, RBI, and EPFO. Missing deadlines does not just attract penalties; it can block DPIIT recognition, delay fundraising due diligence, and create liabilities that haunt you at Series A.</p>

              <h2>1. MCA (Ministry of Corporate Affairs) Filings</h2>
              <p>Every Private Limited Company and LLP must file annual forms with the Registrar of Companies (RoC):</p>
              <ul>
                <li><strong>AOC-4</strong> - Financial statements (within 30 days of AGM, typically by October 29)</li>
                <li><strong>MGT-7</strong> - Annual return (within 60 days of AGM, typically by November 29)</li>
                <li><strong>DIR-3 KYC</strong> - Annual KYC for all directors (by September 30 each year)</li>
                <li><strong>ADT-1</strong> - Appointment of statutory auditor (within 15 days of AGM)</li>
              </ul>
              <p>Missing AOC-4 or MGT-7 attracts a penalty of Rs 100 per day per form, with no cap. For startups that have not filed for 2-3 years, accumulated penalties can cross Rs 10-15 lakh before they realise it.</p>

              <h2>2. GST Compliance</h2>
              <p>If your turnover exceeds Rs 40 lakh (Rs 20 lakh for services), GST registration is mandatory. Once registered, you must file:</p>
              <ul>
                <li><strong>GSTR-1</strong> - Monthly (11th of next month) or quarterly outward supply return</li>
                <li><strong>GSTR-3B</strong> - Monthly summary return with tax payment (20th of next month)</li>
                <li><strong>GSTR-9</strong> - Annual return (December 31 each year)</li>
              </ul>
              <p>Startups on the QRMP scheme file GSTR-1 quarterly but must pay tax monthly via PMT-06. Input tax credit (ITC) mismatches between your GSTR-2B and books are a common audit trigger - reconcile monthly, not annually. If you export services, see our guide on <Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST zero-rated vs exempt supplies</Link>.</p>

              <h2>3. Income Tax & Advance Tax</h2>
              <p>Startups must pay advance tax if their estimated tax liability for the year exceeds Rs 10,000:</p>
              <ul>
                <li>15% by June 15</li>
                <li>45% by September 15</li>
                <li>75% by December 15</li>
                <li>100% by March 15</li>
              </ul>
              <p><Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT-recognised startups</Link> can claim a 100% tax deduction on profits under Section 80-IAC for any 3 consecutive years within the first 10 years of incorporation - but only if an Inter-Ministerial Board (IMB) certificate is obtained. Missing the ITR deadline disqualifies you from certain deductions.</p>

              <h2>4. TDS (Tax Deducted at Source)</h2>
              <p>If your startup pays salary, rent, contractor fees, or professional charges, you must deduct TDS and deposit it by the 7th of the following month. Quarterly TDS returns (Form 26Q, 24Q) are due within 31 days of quarter end. Errors in TDS - wrong PAN, wrong section, short deduction - result in notices and interest under Section 398 (earlier Section 201).</p>

              <h2>5. FEMA & Foreign Investment Reporting</h2>
              <p>If you have raised angel or VC funding from foreign investors, <Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA reporting</Link> is non-negotiable:</p>
              <ul>
                <li><strong>FC-GPR</strong> - Filed within 30 days of allotment of shares to a foreign investor</li>
                <li><strong>Annual Return on Foreign Liabilities and Assets (FLA)</strong> - Filed by July 15 each year if you have foreign investment on your balance sheet</li>
                <li><strong>FC-TRS</strong> - Required when shares transfer between a resident and non-resident</li>
              </ul>
              <p>Late FC-GPR filing attracts compounding penalties from RBI, which can run to 3x the amount of foreign investment received. Many startups discover this gap during Series A due diligence - an expensive surprise.</p>

              <h2>6. ESOP Compliance</h2>
              <p>Startups issuing ESOPs under a registered scheme must file a return with the RoC (PAS-3) when options are exercised and shares are allotted. TDS applies at exercise (perquisite income) and at sale (capital gains), with different rates depending on whether the startup has DPIIT recognition.</p>

              <h2>Common Mistakes to Avoid</h2>
              <ul>
                <li>Not appointing a statutory auditor within 30 days of incorporation</li>
                <li>Skipping GST registration because &quot;revenue is low&quot; - registration is mandatory above threshold regardless of profitability</li>
                <li>Not filing nil returns - even months with zero activity require a GSTR-3B filing</li>
                <li>Missing FLA return - routinely forgotten by early-stage startups with foreign seed investment</li>
                <li>Not maintaining a statutory register of members, directors, and charges</li>
              </ul>
              <p>Building a compliance calendar from day one - and assigning ownership of each deadline - costs far less than the penalties and advisory fees of cleaning up a backlog before fundraising.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need help staying compliant?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle MCA filings, GST returns, TDS compliance, and FEMA reporting for startups across India.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT Registration & 80-IAC Tax Benefit</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/fema-compliance-foreign-investment-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>FEMA Compliance for Foreign-Funded Startups</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/company-incorporation-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>How to Incorporate a Company in India</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

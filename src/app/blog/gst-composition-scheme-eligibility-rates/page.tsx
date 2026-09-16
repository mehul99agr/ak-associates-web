import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'GST Composition Scheme: Eligibility, Rates & When to Opt In' },
  description: 'GST composition scheme turnover limits, flat tax rates for traders and services, CMP-08 and GSTR-4 filing, and when opting in actually helps a small business.',
  keywords: [
    'GST composition scheme eligibility', 'GST composition scheme rates', 'CMP-08 due date',
    'GSTR-4 annual return', 'composition scheme turnover limit', 'GST composition scheme for services',
    'composition scheme vs regular GST', 'when to opt composition scheme',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-composition-scheme-eligibility-rates' },
  openGraph: {
    title: 'GST Composition Scheme: Eligibility, Rates & When to Opt In',
    description: 'Turnover limits, flat tax rates, filing requirements, and a practical framework for deciding whether the composition scheme suits your business.',
    url: 'https://agrawalkhandelwal.com/blog/gst-composition-scheme-eligibility-rates',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Composition Scheme: Eligibility, Rates & When to Opt In',
    description: 'Turnover limits, flat tax rates, filing requirements, and a practical framework for deciding whether the composition scheme suits your business.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST Composition Scheme: Eligibility, Rates & When to Opt In', 'gst-composition-scheme-eligibility-rates')

const articleLd = buildArticleLd({
  headline: 'GST Composition Scheme: Eligibility, Rates & When to Opt In',
  description: 'A practical guide to the GST composition scheme: turnover eligibility for goods and services, flat tax rates, CMP-08 and GSTR-4 filing, restrictions, and when it genuinely benefits a small business.',
  datePublished: '2026-09-17',
  slug: 'gst-composition-scheme-eligibility-rates',
})

const faqs: [string, string][] = [
  [
    'What is the turnover limit for the GST composition scheme?',
    'For traders, manufacturers, and restaurants (not serving alcohol), the limit is aggregate turnover up to Rs 1.5 crore in the preceding financial year, reduced to Rs 75 lakh in special category states. Service providers have a separate composition option under Section 10(2A) capped at Rs 50 lakh turnover.',
  ],
  [
    'What are the GST composition scheme tax rates?',
    'Traders and manufacturers pay 1% of turnover, restaurants (non-alcohol-serving) pay 5%, and eligible service providers under the Section 10(2A) scheme pay 6%. These are flat rates on turnover, split as CGST plus SGST, and are paid without the ability to claim input tax credit.',
  ],
  [
    'Can a composition dealer issue a tax invoice with GST charged separately?',
    'No. A composition dealer must issue a Bill of Supply, not a tax invoice, and cannot show GST separately on it or collect tax from the customer. The composition tax is paid by the dealer out of their own margin, which is why the scheme suits businesses selling to end consumers rather than GST-registered business buyers who need credit.',
  ],
  [
    'Can a composition dealer make inter-state sales?',
    'No. A registered person under the composition scheme cannot make any inter-state outward supply of goods. The moment a business needs to sell across state lines, it must exit the scheme and move to regular GST registration.',
  ],
  [
    'What returns does a composition dealer file?',
    'A composition dealer files Form CMP-08, a quarterly self-assessed tax payment statement, by the 18th of the month following each quarter, plus an annual return in Form GSTR-4. This is a much lighter filing load than the monthly or quarterly GSTR-1 and GSTR-3B cycle that regular taxpayers follow.',
  ],
  [
    'Is the composition scheme available for e-commerce sellers?',
    'No. A person supplying goods through an e-commerce operator required to collect tax at source is not eligible for the composition scheme. This rules out most online marketplace sellers regardless of their turnover.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function GstCompositionSchemeBlog() {
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
                GST Composition Scheme: Eligibility, Rates &amp; When to Opt In
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
                    <li style={{ marginBottom: '0.4rem' }}>Traders/manufacturers up to <strong>Rs 1.5 crore</strong> turnover pay a flat <strong>1%</strong>; eligible services up to <strong>Rs 50 lakh</strong> pay <strong>6%</strong>; restaurants pay <strong>5%</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>No input tax credit, no inter-state sales, and only a Bill of Supply, not a tax invoice with GST shown.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Filing is light: quarterly <strong>CMP-08</strong> plus annual <strong>GSTR-4</strong>, instead of monthly GSTR-1/3B.</li>
                    <li style={{ marginBottom: 0 }}>It suits businesses selling mainly to end consumers with low input costs; it usually hurts businesses selling to GST-registered buyers who need credit.</li>
                  </ul>
                </div>
                <p>The composition scheme trades away input tax credit and inter-state selling in exchange for a low flat tax rate and much lighter compliance. For the right kind of small business, that trade is a clear win. For the wrong kind, it quietly costs more than regular GST would. Here is how to tell which one you are.</p>

                <h2>Who Is Eligible</h2>
                <p>Eligibility is based on aggregate turnover in the preceding financial year, and the limit differs by the nature of the business:</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Category</th>
                      <th style={thStyle}>Turnover Limit</th>
                      <th style={thStyle}>Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>Traders &amp; manufacturers</td>
                      <td style={tdStyle}>Up to Rs 1.5 crore (Rs 75 lakh in special category states)</td>
                      <td style={tdStyle}>1% of turnover</td>
                    </tr>
                    <tr>
                      <td style={tdAltStyle}>Restaurants (non-alcohol-serving)</td>
                      <td style={tdAltStyle}>Up to Rs 1.5 crore</td>
                      <td style={tdAltStyle}>5% of turnover</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>Service providers (Section 10(2A))</td>
                      <td style={tdStyle}>Up to Rs 50 lakh</td>
                      <td style={tdStyle}>6% of turnover</td>
                    </tr>
                  </tbody>
                </table>
                <p>These rates are split evenly between CGST and SGST and are calculated on turnover, not on profit margin, which is exactly why the scheme rewards businesses with thin, high-volume, low-input-cost operations and penalizes businesses with heavy input purchases they would otherwise claim credit on.</p>

                <h2>Who Cannot Opt for the Composition Scheme</h2>
                <ul>
                  <li>Any business making inter-state outward supplies of goods</li>
                  <li>Manufacturers of certain notified goods (such as ice cream, pan masala, and tobacco)</li>
                  <li>Suppliers through an e-commerce operator required to collect tax at source</li>
                  <li>A casual taxable person or non-resident taxable person</li>
                  <li>A business that also supplies goods or services not leviable to GST</li>
                </ul>
                <p>If your business plans to sell across state borders even occasionally, or sell through a marketplace like Amazon or Flipkart, the composition scheme is not available, and it is not worth structuring around this restriction just to access the lower rate.</p>

                <h2>What You Give Up: No Input Tax Credit</h2>
                <p>The single biggest trade-off is that a composition dealer cannot claim input tax credit on purchases, and cannot show GST separately on invoices; sales are billed via a <strong>Bill of Supply</strong>, not a tax invoice. This means GST paid on inputs, rent, and services becomes a cost that sits inside your pricing rather than being recovered. It also means business customers who need input credit on what they buy from you generally will not want to buy from a composition dealer, since there is no GST component for them to claim back.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>The Real Decision Factor: Who Buys From You</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>If most of your customers are individual end consumers who don&apos;t need a GST invoice, composition can genuinely lower your effective tax and compliance cost. If most of your customers are GST-registered businesses that want input credit on their purchase, staying in the regular scheme, even at a higher effective rate, is usually the better commercial call because it keeps you competitive on price for those buyers.</p>
                </div>

                <h2>Filing Requirements: CMP-08 and GSTR-4</h2>
                <p>Composition dealers file far less often than regular taxpayers:</p>
                <ul>
                  <li><strong>Form CMP-08:</strong> a quarterly statement-cum-challan declaring self-assessed tax liability, due by the <strong>18th of the month following the quarter</strong>.</li>
                  <li><strong>Form GSTR-4:</strong> the annual return, consolidating the year&apos;s turnover, tax paid, and inward supplies.</li>
                </ul>
                <p>This is a much lighter cycle than the monthly or quarterly GSTR-1 and GSTR-3B pairing that regular taxpayers manage, which is the compliance-side benefit that makes the scheme attractive to very small operations with limited bookkeeping bandwidth. See our companion guide on <Link href="/blog/gstr-1-vs-gstr-3b-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-1 vs GSTR-3B</Link> to see exactly what regular registration involves by comparison.</p>

                <h2>Switching In or Out</h2>
                <p>A business can opt into the composition scheme at the start of a financial year by filing Form CMP-02 before the year begins, or immediately on new registration. If turnover crosses the eligible limit during the year, or the business starts making an inter-state supply, it must exit the scheme and switch to regular registration from that point, filing Form CMP-04 to intimate the withdrawal. Switching schemes mid-year has GST implications on stock in hand (input tax credit on closing stock becomes available on exit), so plan the transition with your CA rather than reacting after the threshold is crossed.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure if composition suits your business?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We run the numbers both ways, regular GST vs composition, based on your actual customer mix and input costs, before you commit.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20know%20if%20the%20GST%20composition%20scheme%20suits%20my%20business." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-process-india-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration Process in India: Complete Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gstr-1-vs-gstr-3b-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-1 vs GSTR-3B: Filing Guide &amp; Common Mistakes</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration and First Return for Startups</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

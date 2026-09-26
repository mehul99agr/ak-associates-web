import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'GST Registration Cancellation & Revocation: Process & Grounds',
  description: 'When GST registration gets cancelled (by you or by the officer), the grounds under Rule 21, and how to file a revocation application under Rule 23 before the window closes.',
  keywords: [
    'GST registration cancellation', 'GST revocation process', 'GST registration cancellation grounds',
    'Rule 21 GST cancellation', 'revocation of cancelled GST registration', 'GST REG-21 form',
    'GST registration cancelled by officer', 'voluntary GST cancellation process',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/gst-registration-cancellation-revocation' },
  openGraph: {
    title: 'GST Registration Cancellation & Revocation: Process & Grounds',
    description: 'The grounds for GST cancellation under Rule 21, the difference between voluntary and officer-initiated cancellation, and the Rule 23 revocation process and timeline.',
    url: 'https://agrawalkhandelwal.com/blog/gst-registration-cancellation-revocation',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Registration Cancellation & Revocation: Process & Grounds',
    description: 'Grounds for cancellation, the revocation process under Rule 23, and what happens if you miss the window.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('GST Registration Cancellation & Revocation: Process & Grounds', 'gst-registration-cancellation-revocation')

const articleLd = buildArticleLd({
  headline: 'GST Registration Cancellation & Revocation: Process & Grounds',
  description: 'Grounds for GST registration cancellation under Rule 21, voluntary vs officer-initiated cancellation, and the revocation process and timeline under Rule 23.',
  datePublished: '2026-07-19',
  slug: 'gst-registration-cancellation-revocation',
})

const faqs: [string, string][] = [
  [
    'Can I apply for revocation if I cancelled my own GST registration voluntarily?',
    'No. Revocation under Rule 23 is available only where the tax officer cancelled the registration on their own motion (suo moto), typically for non-filing of returns or other compliance defaults. If you applied for cancellation yourself and it was approved, there is no revocation route; you would need to apply for a fresh GST registration if you want to resume business.',
  ],
  [
    'What is the time limit to file for revocation of a cancelled GST registration?',
    'The standard window under Rule 23 is 90 days from the date the cancellation order is served, with a statutory extension mechanism available in genuine cases where the delay is explained. Courts have in specific cases allowed revocation applications beyond even the extended window where the taxpayer showed genuine hardship and had since filed all pending returns, but relying on that is a legal risk, not a plan; file within the window.',
  ],
  [
    'Do I have to file pending returns before applying for revocation?',
    'Yes, if the cancellation was for non-filing of returns. You cannot file a revocation application until you have filed all pending returns and paid the tax, interest, penalty, and late fees due on them. The revocation application itself will be rejected if outstanding returns are not cleared first.',
  ],
  [
    'What happens to input tax credit and outstanding liabilities when GST registration is cancelled?',
    'On cancellation, the taxpayer must pay an amount equal to the ITC on stock (inputs, semi-finished and finished goods) held on the cancellation date, or the output tax on those goods, whichever is higher, along with tax on capital goods based on their remaining useful life. This is filed through Form GSTR-10, the final return, within 3 months of the cancellation date or the order date, whichever is later.',
  ],
  [
    'Can the department cancel my GST registration retrospectively?',
    'Yes, and this is one of the more damaging outcomes for a business, because a retrospective cancellation can invalidate ITC claimed by every buyer who transacted with you during that backdated period, not just your own credit. If you receive a show-cause notice proposing retrospective cancellation, respond promptly with your reply and supporting documents rather than ignoring it, since a retrospective order is far harder to unwind than a cancellation effective from the notice date.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function GSTRegistrationCancellationRevocationBlog() {
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
                GST Registration Cancellation &amp; Revocation: Process &amp; Grounds
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>July 19, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>GST registration can be cancelled voluntarily by the taxpayer, or by the officer on grounds under <strong>Rule 21</strong>, most commonly non-filing of returns.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Revocation is only available for officer-cancelled registrations</strong>, not voluntary ones, and only within the Rule 23 window.</li>
                    <li style={{ marginBottom: '0.4rem' }}>You must clear all pending returns and dues before a revocation application will even be accepted.</li>
                    <li style={{ marginBottom: 0 }}>Missing the revocation window means starting over with a fresh registration; and losing continuity of your GSTIN and compliance history.</li>
                  </ul>
                </div>
                <p>A cancelled GST registration is not always the end of the road, but the path back depends entirely on how it was cancelled and how quickly you act. Businesses often assume cancellation is reversible on request; it is not, and the rules distinguish sharply between a registration you cancelled yourself and one the department cancelled on its own initiative. Here is how the two tracks actually work.</p>

                <h2>Voluntary Cancellation vs Officer-Initiated Cancellation</h2>
                <p>GST registration can end in two very different ways, and the distinction matters for everything that follows:</p>
                <ul>
                  <li><strong>Voluntary cancellation:</strong> The taxpayer applies for cancellation, typically because the business has closed, been transferred, converted to a different structure, or has fallen below the mandatory registration threshold. This is a final, deliberate step; there is no revocation route back once it is approved.</li>
                  <li><strong>Officer-initiated (suo moto) cancellation:</strong> The tax officer cancels the registration on their own motion under Rule 21, usually after a show-cause notice, because of a compliance default. This is the only category eligible for revocation under Rule 23.</li>
                </ul>

                <h2>Grounds for Officer-Initiated Cancellation (Rule 21)</h2>
                <p>Under Rule 21 of the CGST Rules, a registration is liable to cancellation where the taxpayer:</p>
                <ul>
                  <li>Does not conduct any business from the declared principal place of business</li>
                  <li>Issues an invoice or bill without an actual supply of goods or services (fake billing)</li>
                  <li>Violates the anti-profiteering provisions under Section 171</li>
                  <li>Fails to file returns for the prescribed continuous period</li>
                  <li>Has obtained registration by fraud, wilful misstatement, or suppression of facts</li>
                  <li>Violates the input tax credit rules, including availing credit in excess of what is permissible</li>
                </ul>
                <p>The most common trigger by far, especially for small and mid-sized businesses, is continuous non-filing of GSTR-3B or GSTR-1. The officer issues a show-cause notice in Form GST REG-17 first; a reply must be filed within the stated period (typically 7 working days) before the cancellation order follows.</p>

                <h2>The Revocation Process Under Rule 23</h2>
                <p>If your registration was cancelled by the officer, not by you, revocation is available. The steps:</p>
                <ol>
                  <li><strong>Clear the default first.</strong> If cancellation was for non-filing, file every pending return and pay the tax, interest, late fee, and penalty due on them. The revocation application will not be entertained otherwise.</li>
                  <li><strong>File the revocation application (Form GST REG-21)</strong> on the GST portal, within the prescribed window from the date the cancellation order was served; the standard period is 90 days, with a statutory extension mechanism for genuine delay.</li>
                  <li><strong>Officer review.</strong> The officer may approve the revocation, or issue a notice in Form GST REG-23 seeking clarification if not satisfied, to which you must respond in Form GST REG-24.</li>
                  <li><strong>Order passed.</strong> If satisfied, the officer revokes the cancellation via Form GST REG-22, and the GSTIN becomes active again with continuity preserved.</li>
                </ol>
                <p>Courts have, in specific cases involving genuine hardship and subsequent compliance, permitted revocation applications beyond even the extended statutory window. That relief is fact-specific and litigated, not guaranteed; the safe approach is always to file well within the 90-day period rather than count on judicial discretion later.</p>

                <h2>What Happens If You Miss the Revocation Window</h2>
                <p>Once the revocation window lapses without an application, the cancellation becomes final. There is no further administrative remedy to reactivate the same GSTIN; the only option is to apply for a fresh GST registration. That means a new GSTIN, no continuity with the compliance history of the old registration, and re-establishing your GST profile with vendors and customers from scratch. For a business that depends on GST-registered status for input tax credit and B2B billing, this gap can be costly, which is why acting inside the window (and, ideally, never letting the default happen in the first place) matters far more than most businesses realise until it is too late.</p>

                <h2>Final Return and Closing Out Correctly (Form GSTR-10)</h2>
                <p>Whether cancellation is voluntary or officer-initiated and not revoked, the taxpayer must file <strong>Form GSTR-10</strong>, the final return, within 3 months of the date of cancellation or the date of the cancellation order, whichever is later. This return requires paying an amount equal to the input tax credit on stock held as inputs, semi-finished goods, and finished goods on the cancellation date (or the output tax on those goods, whichever is higher), plus tax on capital goods based on remaining useful life. Skipping GSTR-10 attracts a late fee and keeps the matter open with the department even after the GSTIN is inactive.</p>

                <h2>Retrospective Cancellation: A Separate Risk</h2>
                <p>In some fraud or fake-invoicing cases, the officer cancels registration with retrospective effect, from a date before the show-cause notice. This is more serious than it looks, because it can retroactively invalidate the input tax credit claimed by every business that transacted with you during that backdated window, triggering disputes and demands well beyond your own compliance. If a show-cause notice proposes retrospective cancellation, respond within the deadline with full supporting records; a retrospective order, once passed, is significantly harder to reverse than the underlying default that caused it.</p>

                <p>If your GST registration has been cancelled, or you have received a show-cause notice proposing cancellation, our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Advisory team</Link> can review the notice, clear pending compliance, and file the revocation application within the window.</p>
              </div>

              <PostCTA
            heading="GST registration cancelled or under show-cause notice?"
            description="We help clear pending returns, respond to cancellation notices, and file revocation applications before the window closes."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20GST%20registration%20cancellation%20or%20revocation."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-audit-applicability-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Audit: Applicability &amp; What Auditors Check</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-registration-startups-first-return" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST Registration for Startups</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on Exports: Zero-Rated vs Exempt</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/essential-compliance-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Essential Compliance for Indian Startups</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

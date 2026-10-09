import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: '57th GST Council Meeting (Oct 2026): Key Recommendations' },
  description: '57th GST Council meeting of October 8, 2026: arrest power to go, prosecution limit Rs 5 crore, lower penalties, faster refunds and return changes explained.',
  keywords: [
    '57th GST Council meeting', 'GST Council meeting October 2026', 'GST Council recommendations 2026',
    'section 69 CGST arrest omitted', 'GST prosecution limit 5 crore', 'GST penalty reduced section 125',
    'ITC refund input services inverted duty', 'GST show cause notice minimum 10000',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/57th-gst-council-meeting-key-recommendations' },
  openGraph: {
    title: '57th GST Council Meeting (Oct 2026): Key Recommendations',
    description: '57th GST Council meeting of October 8, 2026: arrest power to go, prosecution limit Rs 5 crore, lower penalties, faster refunds and return changes explained.',
    url: 'https://agrawalkhandelwal.com/blog/57th-gst-council-meeting-key-recommendations',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: '57th GST Council Meeting (Oct 2026): Key Recommendations',
    description: '57th GST Council meeting of October 8, 2026: arrest power to go, prosecution limit Rs 5 crore, lower penalties, faster refunds and return changes explained.',
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('57th GST Council Meeting (Oct 2026): Key Recommendations', '57th-gst-council-meeting-key-recommendations')

const articleLd = buildArticleLd({
  headline: '57th GST Council Meeting (Oct 2026): Key Recommendations',
  description: '57th GST Council meeting of October 8, 2026: arrest power to go, prosecution limit Rs 5 crore, lower penalties, faster refunds and return changes explained.',
  datePublished: '2026-10-09',
  slug: '57th-gst-council-meeting-key-recommendations',
})

const faqs: [string, string][] = [
  ['Are the 57th GST Council recommendations in force?', 'No. The Council met on October 8, 2026 and made recommendations. They take effect only after the CGST Act, the rules or the rate notifications are amended, or a circular is issued. Until then the existing law applies.'],
  ['Has the power of arrest under GST been removed?', 'Not yet. The Council recommended omitting Section 69 of the CGST Act, which contains the arrest power. Because this is a change to the Act itself, it needs a legislative amendment before it takes effect.'],
  ['What is the new prosecution threshold under GST?', 'The Council recommended raising the monetary threshold for prosecution under Section 132 from Rs 1 crore to Rs 5 crore, along with a revised list of offences and rationalised punishments. It applies once the amendment is enacted.'],
  ['From when can a refund of ITC on input services be claimed under an inverted duty structure?', 'The recommendation is to allow the refund in specified inverted duty cases for credit availed on or after November 1, 2026. For capital goods, the date is April 1, 2027, with the refund spread over 60 months. Both need to be notified first.'],
  ['Did the 57th GST Council change GST rates?', 'There was no broad rate revision. The reported changes are specific: a nil rate on psyllium (Isabgol) seeds, reverse charge and 2% TDS for specified waste and scrap, and classification clarifications for toys and seaweed extract bio-stimulants.'],
]

const faqLd = buildFaqLd(faqs)

export default function GstCouncil57Blog() {
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
                57th GST Council Meeting (Oct 2026): Key Recommendations
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>The 57th GST Council met in New Delhi on <strong>October 8, 2026</strong>. Everything below is a <strong>recommendation</strong>; nothing changes until the law, rules or notifications are amended.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Enforcement:</strong> omit the arrest power in Section 69, and raise the prosecution threshold from Rs 1 crore to <strong>Rs 5 crore</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Penalties:</strong> general penalty down from Rs 25,000 to <strong>Rs 10,000</strong>, no show cause notice below Rs 10,000, and a 5% penalty in non-fraud cases that are paid promptly.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Refunds:</strong> accumulated ITC on input services for credit availed from <strong>November 1, 2026</strong>, and on capital goods from April 1, 2027.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Returns:</strong> a mechanism to correct GSTR-1 and GSTR-3B mismatches from the <strong>April 2027</strong> return period.</li>
                  </ul>
                </div>

                <p>The GST Council held its 57th meeting in New Delhi on October 8, 2026, chaired by the Union Finance Minister. This was a procedure and enforcement meeting more than a rate meeting: most of the recommendations deal with arrest, prosecution, penalties, refunds and return corrections. This post sets out what was recommended, what has a date attached, and what a business should and should not do in response.</p>

                <h2>Status: Recommendations, Not Yet Law</h2>
                <p>A Council recommendation is not enforceable by itself. Changes to the CGST Act, such as omitting a section, need an amendment passed by Parliament and the State legislatures. Changes to rules, rates and forms need notifications, and clarifications come through circulars. Until those are issued, the existing law applies in full. Where the Council attached a date, we have stated it below; where it did not, treat the timing as open.</p>

                <h2>Enforcement: Arrest, Prosecution and Goods in Transit</h2>
                <ul>
                  <li><strong>Arrest:</strong> the Council recommended omitting Section 69 of the CGST Act, which is the provision that gives GST officers the power to arrest.</li>
                  <li><strong>Prosecution:</strong> the monetary threshold for prosecution under Section 132 would rise from Rs 1 crore to Rs 5 crore, with the list of offences and the punishments rationalised.</li>
                  <li><strong>Vehicle interception:</strong> goods in transit could be intercepted only on specific intelligence and with authorisation from an officer of at least Joint Commissioner rank.</li>
                  <li><strong>Transit States:</strong> a State through which goods merely pass would generally not inspect, detain or seize them, except where no e-way bill was generated or the documents are missing.</li>
                  <li><strong>Confiscation:</strong> goods and conveyances merely in transit would be kept out of confiscation under Section 130 in the specified circumstances.</li>
                </ul>
                <p>For the current e-way bill requirements, which continue to apply, see our guide to <Link href="/blog/e-way-bill-rules-validity-penalties" style={{ color: 'var(--primary)', fontWeight: 600 }}>e-way bill rules, validity and penalties</Link>.</p>

                <h2>Penalties, Notices and Appeals</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table>
                    <thead>
                      <tr><th>Item</th><th>Recommendation</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>General penalty (Section 125)</td><td>Maximum reduced from Rs 25,000 to Rs 10,000</td></tr>
                      <tr><td>Prosecution threshold (Section 132)</td><td>Raised from Rs 1 crore to Rs 5 crore</td></tr>
                      <tr><td>Show cause notices</td><td>No notice where the aggregate tax across CGST, SGST, IGST and cess is below Rs 10,000</td></tr>
                      <tr><td>Penalty in non-fraud cases</td><td>5%, where tax and interest are paid within 30 days of the order under Section 73, or within 60 days under Section 74A</td></tr>
                      <tr><td>Appeal pre-deposit, penalty-only orders</td><td>Capped at Rs 40 crore (Rs 20 crore CGST plus Rs 20 crore SGST or UTGST)</td></tr>
                      <tr><td>ITC blocked under Rule 86A</td><td>Taxpayer may object and get a personal hearing before the officer decides</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>The Rs 10,000 floor for show cause notices is not a waiver of tax below that amount; it limits when a notice is issued. How interest and late fees are computed today is covered in our post on <Link href="/blog/gst-late-fees-interest-calculation" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST late fees and interest</Link>.</p>

                <h2>Input Tax Credit and Refunds</h2>
                <ul>
                  <li><strong>Input services, inverted duty structure:</strong> refund of accumulated ITC on input services would be allowed in specified cases, for credit availed on or after <strong>November 1, 2026</strong>.</li>
                  <li><strong>Capital goods:</strong> refund of accumulated ITC on capital goods in specified zero-rated and inverted duty cases, spread over 60 months, for credit availed on or after <strong>April 1, 2027</strong>.</li>
                  <li><strong>Faster processing:</strong> the time to issue an acknowledgement or deficiency memo would fall from 15 days to 10 days, with a deemed acknowledgement if neither is issued.</li>
                  <li><strong>Provisional refunds:</strong> 90% of eligible zero-rated and inverted duty claims would be sanctioned provisionally through a risk-based automated process.</li>
                </ul>
                <p>These refund changes do not alter the basic conditions for claiming credit, which are set out in our <Link href="/blog/input-tax-credit-itc-gst-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>input tax credit guide</Link>. Exporters should also read <Link href="/blog/gst-on-exports-zero-rated-vs-exempt-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST on exports: zero-rated vs exempt</Link>.</p>

                <h2>Returns, Registration and E-Invoicing</h2>
                <ul>
                  <li><strong>Return corrections:</strong> a mechanism to correct mismatches between GSTR-1, GSTR-3B and ITC, with a revised Form GST DRC-03, from the <strong>April 2027</strong> return period.</li>
                  <li><strong>Late fee:</strong> a waiver of late fee on returns under Section 39(1) for taxpayers with prior-year turnover up to Rs 5 crore, if the return is filed by the end of the month in which it was due.</li>
                  <li><strong>Annual Return Quarterly Payment scheme:</strong> approved in principle as an option for taxpayers up to Rs 5 crore turnover with only B2C supplies. The framework is still to be written.</li>
                  <li><strong>Registration:</strong> most amendments to be accepted automatically, simpler cancellation and revocation, and a new Rule 14B letting small e-commerce sellers register in a State using the operator warehouse as their place of business.</li>
                  <li><strong>E-invoicing:</strong> to be extended to specified reverse charge supplies from unregistered persons and to import of services, for taxpayers with turnover of Rs 5 crore or more.</li>
                </ul>
                <p>Related reading: <Link href="/blog/gstr-1-vs-gstr-3b-filing-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>GSTR-1 vs GSTR-3B filing guide</Link>, <Link href="/blog/gst-registration-cancellation-revocation" style={{ color: 'var(--primary)', fontWeight: 600 }}>GST registration cancellation and revocation</Link>, and <Link href="/blog/e-invoicing-gst-applicability-threshold" style={{ color: 'var(--primary)', fontWeight: 600 }}>e-invoicing applicability</Link>.</p>

                <h2>Rate and Classification Changes</h2>
                <p>There was no broad rate revision. The specific items reported are:</p>
                <ul>
                  <li><strong>Psyllium (Isabgol) seeds:</strong> nil rate, whether fresh, chilled, frozen or dried.</li>
                  <li><strong>Waste and scrap</strong> (plastic, electrical and electronic, tyre waste, used cooking oil): reverse charge where an unregistered person supplies to a registered person, and 2% GST TDS on specified supplies between registered persons.</li>
                  <li><strong>Second-hand vehicle dealers under the margin scheme:</strong> ITC allowed on inputs and input services other than the vehicles themselves, such as spares, repairs and rent.</li>
                  <li><strong>Seaweed extract bio-stimulants</strong> registered under the Fertiliser Control Order: classifiable as fertilisers under heading 3101.</li>
                  <li><strong>Toys:</strong> the rate entries are clarified to cover all toys under heading 9503.</li>
                </ul>

                <h2>What Businesses Should Do Now</h2>
                <ol>
                  <li><strong>Change nothing in your compliance yet.</strong> File, pay and reconcile under the existing law until each change is notified.</li>
                  <li><strong>If you have an inverted duty structure,</strong> start tracking input services credit availed from November 1, 2026 separately, so a refund claim is ready when the notification arrives.</li>
                  <li><strong>Keep reconciling GSTR-1, GSTR-3B and GSTR-2B every month.</strong> The correction mechanism is not due until the April 2027 return period.</li>
                  <li><strong>If you deal in the listed scrap categories,</strong> review your purchase and sale flows for the reverse charge and TDS proposals.</li>
                  <li><strong>If you have a pending notice or penalty,</strong> ask your adviser whether the lower penalty and the notice floor are likely to reach it once the amendments are worded. That depends on the final text.</li>
                </ol>
              </div>

              <PostFooterLinks slug="57th-gst-council-meeting-key-recommendations" />

              <PostCTA
                heading="Want to know what the GST Council changes mean for your business?"
                description="We review your refund position, pending notices and return reconciliations against each change as it is notified."
                secondaryLabel="Ask on WhatsApp"
                secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20question%20on%20the%2057th%20GST%20Council%20recommendations."
                secondaryExternal
              />

              <FaqSection faqs={faqs} />
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

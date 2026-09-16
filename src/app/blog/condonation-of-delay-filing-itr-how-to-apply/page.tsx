import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: { absolute: 'Condonation of Delay in Filing ITR: When & How to Apply' },
  description: 'How to apply for condonation of delay under Section 119(2)(b) to file a belated return or claim a refund, loss carry-forward, or deduction after missing the deadline.',
  keywords: [
    'condonation of delay ITR', 'section 119(2)(b) income tax', 'condonation of delay income tax return',
    'CBDT circular condonation of delay', 'file ITR after deadline missed', 'refund claim after due date',
    'loss carry forward condonation', 'genuine hardship income tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/condonation-of-delay-filing-itr-how-to-apply' },
  openGraph: {
    title: 'Condonation of Delay in Filing ITR: When & How to Apply',
    description: 'Who can apply for condonation of delay under Section 119(2)(b), the CBDT monetary limits by authority, the 5-year window, and how to file.',
    url: 'https://agrawalkhandelwal.com/blog/condonation-of-delay-filing-itr-how-to-apply',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Condonation of Delay in Filing ITR: When & How to Apply',
    description: 'Who can apply for condonation of delay under Section 119(2)(b), the CBDT monetary limits by authority, the 5-year window, and how to file.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Condonation of Delay in Filing ITR: When & How to Apply', 'condonation-of-delay-filing-itr-how-to-apply')

const articleLd = buildArticleLd({
  headline: 'Condonation of Delay in Filing ITR: When & How to Apply',
  description: 'How to apply for condonation of delay under Section 119(2)(b) to file a belated return or claim a refund, loss carry-forward, or deduction after missing the deadline, including the CBDT monetary limits by authority and the application process.',
  datePublished: '2026-09-28',
  slug: 'condonation-of-delay-filing-itr-how-to-apply',
})

const faqs: [string, string][] = [
  [
    'Can I still claim a refund if I missed the ITR filing deadline entirely?',
    'Yes, potentially. If you missed both the original and belated return deadlines, you can apply for condonation of delay under Section 119(2)(b), which allows the tax department to accept a return filed late specifically to process a refund, loss carry-forward, or certain deductions, provided you can show genuine hardship in not filing on time.',
  ],
  [
    'What counts as "genuine hardship" for condonation of delay?',
    'There is no fixed checklist; it is assessed case by case, but accepted reasons commonly include serious illness or hospitalisation, the death of a family member, natural calamities, being outside India for reasons beyond your control, or a genuine technical failure on the e-filing portal near the deadline. A simple oversight or lack of awareness of the deadline is generally not treated as genuine hardship on its own.',
  ],
  [
    'How long do I have to apply for condonation of delay?',
    'An application must generally be filed within five years from the end of the relevant assessment year for which the return should have been filed. Applying as soon as possible after realising the deadline was missed strengthens the case and avoids the application itself becoming time-barred.',
  ],
  [
    'Which authority decides my condonation application?',
    'It depends on the claim amount involved: applications up to Rs 10 lakh are decided by the Principal Commissioner/Commissioner of Income Tax, those between Rs 10 lakh and Rs 50 lakh by the Principal Chief Commissioner/Chief Commissioner, and those above Rs 50 lakh by the CBDT itself, per the monetary limits set out in CBDT Circular No. 11/2024.',
  ],
  [
    'How long does the tax department take to decide a condonation application?',
    'The prescribed timeline is that the application should be disposed of within six months from the end of the month in which it is filed, though actual processing time can vary depending on the complexity of the case and the completeness of the documents submitted.',
  ],
  [
    'What happens if my condonation application is rejected?',
    'If the application is rejected, the return cannot be filed or the refund/loss claim cannot proceed for that assessment year through this route. You can typically request a review or file a fresh, better-substantiated application if the rejection was on account of insufficient documentation, but a rejection on merits (hardship not accepted) is harder to reverse without new evidence.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function CondonationOfDelayBlog() {
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
              <span className="section-badge">Income Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Condonation of Delay in Filing ITR: When & How to Apply
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>September 28, 2026</span>
                <span aria-hidden>•</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>•</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Missing the ITR deadline entirely does not automatically close the door on a refund or loss claim; <strong>Section 119(2)(b)</strong> lets you apply for condonation of delay.</li>
                    <li style={{ marginBottom: '0.4rem' }}>You must show <strong>genuine hardship</strong>, not just an oversight, and apply within <strong>5 years</strong> from the end of the relevant assessment year.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Which officer decides depends on the claim amount: Commissioner up to Rs 10 lakh, Chief Commissioner up to Rs 50 lakh, CBDT above that, per CBDT Circular No. 11/2024.</li>
                    <li style={{ marginBottom: 0 }}>Applications are meant to be decided within 6 months from the end of the month of filing, though this can vary in practice.</li>
                  </ul>
                </div>
                <p>Missing the income tax return deadline is stressful enough when a belated return is still an option. It is worse when even the belated return window has closed, and you are sitting on a refund, a carried-forward loss, or a deduction you never got to claim. Section 119(2)(b) of the Income Tax Act exists exactly for this situation: it empowers the tax authorities to condone the delay and accept the return in genuine cases, so the claim is not lost purely on account of a missed date.</p>

                <h2>What Condonation of Delay Actually Does</h2>
                <p><strong>Condonation of delay under Section 119(2)(b) allows the tax department to permit a return to be filed, or a claim to be made, after the normal filing deadlines have passed, specifically for refund claims, carry-forward of losses, or claims to deductions and exemptions.</strong> It is not an automatic right; it is a discretionary relief granted by the tax authority when the applicant can demonstrate genuine hardship that prevented timely filing.</p>
                <p>This is different from a belated return filed under Section 139(4), which any taxpayer can file (with applicable late fees and interest) within the statutory belated-return window without needing to show any special reason. Condonation is the route that opens up only after that window has also closed.</p>

                <h2>When Should You Apply</h2>
                <p>Condonation of delay is relevant when:</p>
                <ul>
                  <li>You missed both the original due date and the belated return deadline, and you are entitled to a refund of tax already paid or deducted at source.</li>
                  <li>You want to carry forward a business or capital loss that would otherwise lapse because the return reporting it was not filed on time.</li>
                  <li>You are eligible for a deduction or exemption (for example, under Chapter VI-A) that requires a return to be filed to be claimed, and the filing window has passed.</li>
                </ul>
                <p>It is not a mechanism to avoid late fees or interest on a return that could still be filed as a belated return; use the normal belated-return route in that case. Condonation is specifically for situations where the normal routes are no longer available.</p>

                <h2>What Counts as Genuine Hardship</h2>
                <p>The law does not define a rigid list, and each case is assessed on its own facts, but circumstances that are commonly accepted include serious illness or hospitalisation of the taxpayer or an immediate family member, death of a family member around the filing period, a natural calamity affecting the taxpayer&apos;s location, being stranded outside India for reasons genuinely beyond the taxpayer&apos;s control, or a demonstrable technical failure on the e-filing portal close to the deadline. A simple lack of awareness of the deadline, or forgetting to file, is generally not accepted as genuine hardship on its own; the stronger and better-documented the reason, the better the chance of approval.</p>

                <h2>Monetary Limits: Which Authority Decides</h2>
                <p>Per CBDT Circular No. 11/2024, the authority empowered to decide a condonation application depends on the value of the claim involved (refund amount or the tax effect of the loss/deduction being claimed):</p>
                <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Claim Amount</th>
                        <th style={thStyle}>Deciding Authority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}>Up to Rs 10 lakh</td>
                        <td style={tdStyle}>Principal Commissioner / Commissioner of Income Tax</td>
                      </tr>
                      <tr>
                        <td style={tdAltStyle}>Above Rs 10 lakh and up to Rs 50 lakh</td>
                        <td style={tdAltStyle}>Principal Chief Commissioner / Chief Commissioner of Income Tax</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Above Rs 50 lakh</td>
                        <td style={tdStyle}>Central Board of Direct Taxes (CBDT)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>These limits determine where the application is filed and considered; the application process itself (documentation, reasoning) is broadly similar across all three levels.</p>

                <h2>Time Limit to Apply</h2>
                <p>An application for condonation of delay must generally be filed <strong>within five years from the end of the relevant assessment year</strong> for which the claim relates. This is a firm outer limit; applying well within this window, and as soon as practicable after the hardship is resolved, materially improves the chances of a favourable outcome, since a very late application (even within the 5-year limit) can itself invite scrutiny of why it took so long.</p>
                <p>Once filed, the tax authority is expected to dispose of the application within six months from the end of the month in which it was filed, though actual timelines can vary depending on the case and how complete the initial submission is.</p>

                <h2>How to Apply: Step by Step</h2>
                <ol>
                  <li><strong>Prepare the application</strong> addressed to the relevant authority (based on the monetary limits above), stating the assessment year, the nature of the claim (refund, loss carry-forward, or deduction), and the specific reason for the delay.</li>
                  <li><strong>Attach supporting evidence</strong> for the hardship claimed: medical records, hospital bills, death certificates, travel records, or portal error screenshots and grievance tickets, whichever is relevant.</li>
                  <li><strong>Submit through the prescribed channel</strong>, which for most cases today is via the income tax e-filing portal or, for CBDT-level applications, as directed by the Board's process.</li>
                  <li><strong>Respond promptly to any query</strong> raised by the authority while the application is under consideration.</li>
                  <li><strong>File the return promptly once condonation is granted</strong>, within the timeframe specified in the condonation order, so the approval does not lapse.</li>
                </ol>
                <p>Because the outcome hinges on how well the hardship is documented and framed, it is worth having a CA review the application before submission, especially for claims above the Rs 10 lakh threshold where the file goes to a more senior authority. If your situation instead involves a scrutiny or reassessment notice rather than a missed deadline, see our guide on <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>income tax notices under Sections 143(1), 143(2), and 148</Link>.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Missed your ITR deadline and need to claim a refund or loss?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help prepare and file condonation of delay applications with the right documentation for the relevant authority.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20missed%20my%20ITR%20deadline%20and%20need%20help%20with%20condonation%20of%20delay." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: 143(1), 143(2) & 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/faceless-assessment-scheme-how-it-works" style={{ color: 'var(--primary)', fontWeight: 600 }}>Faceless Assessment Scheme: How It Works</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-itr-filing-guide-from-abroad" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI ITR Filing Guide</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

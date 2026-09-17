import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Winding Up / Strike Off a Private Limited Company: Process & Timeline' },
  description: 'How to close a private limited company through the Fast Track Exit (Form STK-2) route: eligibility conditions, documents required, filing steps, and realistic timelines.',
  keywords: [
    'strike off private limited company', 'form stk-2', 'fast track exit company closure',
    'winding up private limited company india', 'close a company section 248', 'stk-2 eligibility',
    'company strike off process', 'dormant company closure roc',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/winding-up-strike-off-a-private-limited-company-process-and-timeline' },
  openGraph: {
    title: 'Winding Up / Strike Off a Private Limited Company: Process & Timeline',
    description: 'Eligibility, documents, and timeline for closing a private limited company via Fast Track Exit under Form STK-2.',
    url: 'https://agrawalkhandelwal.com/blog/winding-up-strike-off-a-private-limited-company-process-and-timeline',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winding Up / Strike Off a Private Limited Company: Process & Timeline',
    description: 'How Fast Track Exit under Form STK-2 works, who is eligible, and how long company closure actually takes.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Winding Up / Strike Off a Private Limited Company: Process & Timeline', 'winding-up-strike-off-a-private-limited-company-process-and-timeline')

const articleLd = buildArticleLd({
  headline: 'Winding Up / Strike Off a Private Limited Company: Process & Timeline',
  description: 'Eligibility conditions, documents, filing steps under Form STK-2, and realistic timelines for closing a private limited company through Fast Track Exit.',
  datePublished: '2026-10-09',
  slug: 'winding-up-strike-off-a-private-limited-company-process-and-timeline',
})

const faqs: [string, string][] = [
  [
    'Which companies are eligible for Fast Track Exit under STK-2?',
    'A company is generally eligible if it has no assets and no liabilities (or has settled all liabilities), has not commenced business within a year of incorporation, or has not carried on any business or operations for two or more immediately preceding financial years and has not applied for dormant status. All due statutory returns should be filed before applying, and at least two-thirds of the directors (or partners, for an LLP context) must approve the application by resolution.',
  ],
  [
    'Can a company with pending litigation or ongoing liabilities apply for strike off?',
    'No. A company with any pending litigation, outstanding public deposits, unpaid dues to creditors, or an open charge registered against its assets is not eligible to apply under Form STK-2 until those matters are resolved or the charge is satisfied and reflected with the Registrar.',
  ],
  [
    'How long does the strike off process actually take?',
    'End to end, most straightforward Fast Track Exit filings take roughly three to six months from filing Form STK-2 to the company\'s name being struck off in the Official Gazette, depending on ROC processing time, whether any queries are raised, and the mandatory public notice period during which objections can be filed. Cases with pending compliance to clear up first take longer.',
  ],
  [
    'What documents are needed to file Form STK-2?',
    'Typically an indemnity bond from every director (Form STK-3), a statement of accounts showing nil assets and nil liabilities certified by a chartered accountant and made up to a date not older than thirty days before filing, an affidavit from every director (Form STK-4), a board resolution or special resolution authorising the closure, a statement regarding pending litigations if any, and the company\'s PAN along with the closure of its bank account.',
  ],
  [
    'What happens to directors after the company is struck off?',
    'Once the Registrar publishes the notice striking off the company\'s name, the company ceases to exist as a legal entity and its ongoing statutory compliance obligations end. However, the liability of directors, managers, and other officers who were personally liable continues to exist and can still be enforced as if the company had not been dissolved, and the Registrar can still pursue action for offences committed before dissolution.',
  ],
  [
    'Is a reduced-fee closure scheme available right now?',
    'MCA has periodically run time-bound relief schemes that reduce the STK-2 filing fee and cut accumulated late fees on pending annual filings for companies wanting to exit cleanly. These schemes carry specific eligibility conditions and cut-off dates, so confirm the current scheme status and deadline with your CA before assuming a discounted fee applies to your filing.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function WindingUpStrikeOffBlog() {
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
              <span className="section-badge">Company Incorporation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Winding Up / Strike Off a Private Limited Company: Process &amp; Timeline
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>The <strong>Fast Track Exit</strong> route under <strong>Form STK-2</strong> lets an inactive, liability-free company voluntarily close instead of staying dormant with pending compliance.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Eligibility requires nil assets and liabilities (or settled liabilities), no business for the relevant period, no pending litigation, and no open charges.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Realistic timeline is roughly <strong>3 to 6 months</strong> from filing to the company&apos;s name being struck off in the Gazette.</li>
                    <li style={{ marginBottom: 0 }}>Director liability for pre-dissolution acts does not automatically end just because the company is struck off.</li>
                  </ul>
                </div>

                <p>A company that has stopped doing business does not simply disappear. As long as it remains on the Registrar of Companies&apos; records, it continues to attract annual filing obligations, DIN KYC requirements for its directors, and penalty exposure for missed deadlines, whether or not it is actually operating. For a genuinely inactive company with no assets and no liabilities, the <strong>Fast Track Exit (FTE)</strong> route under Section 248 of the Companies Act, 2013, filed through <strong>Form STK-2</strong>, is the standard way to formally close it and stop the compliance clock.</p>

                <h2>Who Is Eligible to Apply</h2>
                <p>Not every inactive company can simply file for strike off. The company generally needs to fall into one of these categories:</p>
                <ul>
                  <li>It has not commenced any business within one year of incorporation.</li>
                  <li>It has not carried on any business or operation for the two immediately preceding financial years and has not applied for dormant company status.</li>
                  <li>It has nil assets and nil liabilities as on the date of the application, or any liabilities have been fully settled.</li>
                </ul>
                <p>On top of the operational criteria, all due annual returns and financial statements should generally be filed up to date before the strike off application, all bank accounts must be closed with confirmation from the bank, and the company must not have any pending litigation, outstanding statutory dues, public deposits, or a charge registered against its assets that has not been satisfied. Approval by at least two-thirds of the directors, followed by a special resolution or consent of seventy-five percent of members in terms of paid-up share capital, is required before the application is filed.</p>

                <h2>Documents Required</h2>
                <p>A complete STK-2 filing typically bundles together:</p>
                <ul>
                  <li><strong>Indemnity bond (Form STK-3)</strong> from every director, individually or jointly.</li>
                  <li><strong>Statement of accounts</strong> reflecting nil assets and nil liabilities, made up to a date not more than thirty days before the filing date and certified by a chartered accountant.</li>
                  <li><strong>Affidavit (Form STK-4)</strong> from every director confirming the company has no liabilities and the information given is accurate.</li>
                  <li><strong>Board resolution</strong> authorising a director to file the application, and the special resolution or member consent noted above.</li>
                  <li><strong>Statement regarding pending litigations</strong>, if applicable, or a declaration confirming there are none.</li>
                  <li>PAN, the certificate of incorporation, and proof that bank accounts have been closed.</li>
                </ul>
                <p>Incomplete documentation, particularly a statement of accounts dated too far back or an indemnity bond missing a director&apos;s signature, is one of the most common reasons an STK-2 filing gets sent back with a Registrar query, adding weeks to the timeline.</p>

                <h2>The Filing Process, Step by Step</h2>
                <ol>
                  <li><strong>Board meeting</strong> to approve the closure and authorise a director to proceed.</li>
                  <li><strong>Clear pending compliance</strong>: file any overdue annual returns, financial statements, or other statutory forms, since the ROC will typically not process a strike off application while filings are outstanding.</li>
                  <li><strong>Close bank accounts</strong> and obtain a closure certificate or letter from the bank.</li>
                  <li><strong>Special resolution or member consent</strong> approving the strike off, followed by filing Form MGT-14 where applicable.</li>
                  <li><strong>File Form STK-2</strong> on the MCA portal with the indemnity bond, affidavits, statement of accounts, and supporting resolutions attached, along with the prescribed government fee.</li>
                  <li><strong>Registrar review and public notice</strong>: the Registrar examines the application and, if satisfied, publishes a notice (Form STK-6) inviting objections from the public, creditors, and other regulators within a specified window.</li>
                  <li><strong>Strike off and Gazette notification</strong>: if no valid objection is received, the Registrar strikes the company&apos;s name off the register and publishes the notice in the Official Gazette, at which point the company stands dissolved.</li>
                </ol>

                <h2>Realistic Timeline</h2>
                <p>For a company that already has clean compliance and simply needs to file STK-2, the process from filing to dissolution typically runs <strong>three to six months</strong>, driven mainly by the Registrar&apos;s public notice and objection window plus internal processing time rather than any action on the applicant&apos;s part. For a company that first needs to clear a backlog of overdue annual filings before it becomes eligible to apply, add the time needed to bring those filings current; this is often the longer part of the exercise in practice, not the STK-2 stage itself. Companies weighing whether to file overdue <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>AOC-4 and MGT-7 returns</Link> or close the entity instead should factor in accumulated late fees on both paths before deciding.</p>

                <h2>What Strike Off Does Not Erase</h2>
                <p>A company ceasing to exist does not automatically wipe the slate clean for its directors. The liability of every director, manager, or officer who was personally liable in respect of any dues, penalty, or offence continues even after the company is dissolved, and the Registrar retains the power to reopen the register in specific circumstances. Directors who assume strike off is a shortcut around unresolved liabilities or pending notices are often mistaken; the correct sequence is always to resolve outstanding matters first, then apply.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Relief Schemes</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>MCA has, at various points, run limited-period schemes that reduce the STK-2 government fee and cut accumulated late fees on pending annual filings to encourage genuinely defunct companies to exit cleanly instead of remaining non-compliant. These schemes have specific windows and conditions that change over time, so confirm current scheme availability with your CA before budgeting for a discounted filing.</p>
                </div>

                <p>Strike off is the right exit for a company that is genuinely inactive with nothing left to wind down; a company with assets to distribute, ongoing disputes, or creditors to settle needs a formal winding-up or liquidation process instead, which is a materially different (and longer) procedure under the Companies Act and the Insolvency and Bankruptcy Code. Before filing STK-2, it is worth confirming which route actually fits the company&apos;s situation rather than assuming the faster route applies.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Ready to close a dormant company?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We check eligibility, clear pending ROC filings if needed, and handle the full STK-2 filing end to end.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20want%20to%20close%20down%20my%20private%20limited%20company." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/opc-to-private-limited-conversion-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>OPC to Private Limited Conversion</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited Company: Which to Choose</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Company Incorporation Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Statutory Audit Requirements for Private Limited Companies' },
  description: 'Why every private limited company needs a statutory audit under the Companies Act 2013 regardless of turnover, how auditor appointment and rotation work, and where CARO 2020 applies.',
  keywords: [
    'statutory audit private limited company', 'companies act 2013 audit requirement', 'section 139 auditor appointment',
    'auditor rotation rules India', 'CARO 2020 applicability', 'statutory audit vs tax audit',
    'mandatory audit for all companies', 'section 143 companies act',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/statutory-audit-requirements-for-private-limited-companies' },
  openGraph: {
    title: 'Statutory Audit Requirements for Private Limited Companies',
    description: 'Every private limited company needs a statutory audit regardless of turnover. Auditor appointment, rotation rules, and CARO 2020 applicability explained.',
    url: 'https://agrawalkhandelwal.com/blog/statutory-audit-requirements-for-private-limited-companies',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Statutory Audit Requirements for Private Limited Companies',
    description: 'Statutory audit is mandatory for every company under the Companies Act 2013, regardless of turnover. Here is what that involves.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Statutory Audit Requirements for Private Limited Companies', 'statutory-audit-requirements-for-private-limited-companies')

const articleLd = buildArticleLd({
  headline: 'Statutory Audit Requirements for Private Limited Companies',
  description: 'Statutory audit under Sections 139 and 143 of the Companies Act 2013 is mandatory for every company regardless of turnover, distinct from the tax audit. Auditor appointment, rotation, and CARO 2020 applicability explained.',
  datePublished: '2026-08-28',
  slug: 'statutory-audit-requirements-for-private-limited-companies',
})

const faqs: [string, string][] = [
  [
    'Does a small private limited company with low turnover still need a statutory audit?',
    'Yes. Statutory audit under the Companies Act 2013 is mandatory for every company registered under the Act, regardless of turnover, paid-up capital, or whether the company has done any business at all during the year. Even a dormant or zero-revenue private limited company must get its accounts audited and file audited financial statements. There is no turnover-based exemption from statutory audit the way there is for income tax audit.',
  ],
  [
    'Is statutory audit the same as tax audit under Section 44AB?',
    'No, these are two separate audits with different triggers and different governing laws. Statutory audit under the Companies Act 2013 applies to every company regardless of turnover. Tax audit under the Income Tax Act (Section 44AB, renumbered as Section 63 under the Income Tax Act 2025) applies based on turnover or gross receipts thresholds, to a broader set of taxpayers including proprietorships and professionals, not just companies. A private limited company crossing the tax audit threshold needs both audits; one below the threshold still needs the statutory audit, just not the tax audit.',
  ],
  [
    'How soon after incorporation must a company appoint its first auditor?',
    'The Board of Directors must appoint the first auditor within 30 days of incorporation. If the Board fails to do so, the members must appoint the first auditor within 90 days at an extraordinary general meeting. The first auditor holds office until the conclusion of the company\'s first annual general meeting.',
  ],
  [
    'Does the auditor need to be reappointed and ratified every year?',
    'A subsequent auditor is appointed for a term of five years at a time, subject to the company meeting certain conditions at each AGM. The requirement to seek shareholder ratification of the auditor\'s appointment at every single AGM was removed by a later Companies Act amendment; the five-year appointment itself does not need to be re-ratified annually, though the appointment can still be reviewed by shareholders if there is cause to change auditors.',
  ],
  [
    'Which private companies are subject to mandatory auditor rotation?',
    'Auditor rotation under Section 139(2) applies to all listed companies, unlisted public companies with paid-up share capital of Rs 10 crore or more, private companies with paid-up share capital of Rs 50 crore or more, and any company (public or private) below those capital thresholds that has public borrowings from banks, financial institutions, or public deposits of Rs 50 crore or more. Where it applies, an individual auditor can serve one term of five consecutive years, and an audit firm can serve a maximum of two consecutive five-year terms, followed by a mandatory five-year cooling-off period before reappointment at the same company.',
  ],
  [
    'Does CARO 2020 apply to every private limited company\'s audit report?',
    'Not to every one. The Companies (Auditor\'s Report) Order 2020 applies broadly to statutory audit reports, but small companies and One Person Companies (OPCs) are exempt from CARO reporting, along with certain other categories such as banking, insurance, and Section 8 companies. Whether a specific private company falls within or outside the CARO exemption depends on its size classification and other criteria under the Order; this should be checked each year rather than assumed to carry over unchanged, since a company can move in or out of the "small company" exemption as its paid-up capital and turnover change.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function StatutoryAuditPrivateLimitedBlog() {
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
              <span className="section-badge">Corporate Compliance</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Statutory Audit Requirements for Private Limited Companies
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 28, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Statutory audit applies to every private limited company, regardless of turnover</strong> - unlike income tax audit, there is no threshold below which it is optional.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The first auditor is appointed by the Board within <strong>30 days of incorporation</strong>; subsequent auditors serve <strong>five-year terms</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Mandatory <strong>auditor rotation</strong> applies to listed companies and to private companies above specified paid-up capital or borrowing thresholds.</li>
                    <li style={{ marginBottom: 0 }}><strong>CARO 2020</strong> reporting is required for most companies, but small companies and OPCs are exempt.</li>
                  </ul>
                </div>

                <p>New founders often assume an audit is something that kicks in once a company crosses a certain revenue size, because that is how income tax audit works. Statutory audit under the Companies Act 2013 does not work that way. It is a corporate law requirement tied to the fact of being an incorporated company, not to how much the company earned in a given year, and skipping it because &quot;the company barely did any business this year&quot; is one of the more common and avoidable compliance failures among early-stage companies.</p>

                <h2>Every Company, Regardless of Turnover</h2>
                <p><strong>Statutory audit under Sections 139 and 143 of the Companies Act 2013 is mandatory for every company registered under the Act</strong>, private limited, public limited, or One Person Company alike, irrespective of turnover, paid-up capital, or whether the company transacted any business at all during the financial year. A private limited company that had zero revenue and no operations still needs its financial statements audited and filed with the Registrar of Companies. This is a fundamentally different trigger from the income tax audit under Section 44AB (renumbered Section 63 under the Income Tax Act 2025), which is turnover- and gross-receipts-based and applies to a much wider set of taxpayers, including proprietorships and professionals, not only companies.</p>
                <p>The distinction matters in practice: a company can be well below the tax audit turnover threshold and still be legally required to complete a full statutory audit of its books every single year from the year of incorporation onward, with no grace period for a dormant first year.</p>

                <h2>Auditor Appointment: Timelines That Matter</h2>
                <p>Getting the first auditor appointment right sets the clock for everything that follows:</p>
                <ul>
                  <li><strong>First auditor:</strong> The Board of Directors must appoint the company&apos;s first auditor within 30 days of incorporation. If the Board misses this window, the members must step in and appoint the first auditor within 90 days, at an extraordinary general meeting called for the purpose. The first auditor holds office until the conclusion of the first annual general meeting.</li>
                  <li><strong>Subsequent auditors:</strong> After the first AGM, an auditor is typically appointed for a term of five years at a time, subject to the conditions prescribed under the Act being met at each AGM. The earlier requirement to place the auditor&apos;s appointment before shareholders for ratification at every single AGM during that five-year term was removed by a later amendment to the Act, which simplified the ongoing compliance burden once the five-year appointment is made.</li>
                </ul>
                <p>Missing the first-auditor appointment window, or letting an auditor&apos;s term lapse without a fresh appointment resolution, creates a compliance gap that can complicate everything from bank account operations to due diligence in a future fundraise. This is one of the checklist items worth locking down as part of a broader <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link>.</p>

                <h2>Mandatory Auditor Rotation</h2>
                <p>Beyond the standard five-year appointment, Section 139(2) of the Companies Act imposes mandatory rotation for a defined set of companies, intended to prevent an auditor from becoming too familiar (and too comfortable) with a single client over decades. Rotation applies to:</p>
                <ul>
                  <li>All <strong>listed companies</strong>.</li>
                  <li><strong>Unlisted public companies</strong> with paid-up share capital of Rs 10 crore or more.</li>
                  <li><strong>Private companies</strong> with paid-up share capital of Rs 50 crore or more.</li>
                  <li>Any company, public or private, below those capital thresholds that nonetheless has <strong>public borrowings</strong> from banks, financial institutions, or public deposits of Rs 50 crore or more.</li>
                </ul>
                <p>Where rotation applies, an <strong>individual</strong> appointed as auditor can serve only one term of five consecutive years at that company. An <strong>audit firm</strong> can serve a maximum of two consecutive five-year terms, a total of ten years, after which a mandatory five-year cooling-off period applies before the same firm can be reappointed at that company. Most small and mid-sized private limited companies fall below these thresholds and are not subject to mandatory rotation, but growth-stage companies approaching these capital or borrowing levels should plan for rotation well before it becomes mandatory, since transitioning statutory auditors mid-cycle takes real lead time.</p>

                <h2>CARO 2020: When the Extra Reporting Kicks In</h2>
                <p>The <strong>Companies (Auditor&apos;s Report) Order 2020 (CARO 2020)</strong> requires auditors to report on a detailed additional set of matters beyond the standard audit opinion, covering areas like fixed assets, inventory, related-party transactions, statutory dues, and loans and guarantees. CARO 2020 applies broadly across companies, but <strong>small companies and One Person Companies (OPCs) are exempt</strong> from CARO reporting, along with certain other specified categories such as banking, insurance, and Section 8 (not-for-profit) companies.</p>
                <p>Because a company&apos;s &quot;small company&quot; classification depends on its paid-up capital and turnover, both of which can change year to year, whether CARO applies to a given company&apos;s audit report should be reassessed at the start of each audit cycle rather than assumed to carry over from the prior year. A company that grows past the small-company thresholds during the year can find CARO reporting applying for the first time without warning if this isn&apos;t checked proactively.</p>

                <h2>Getting Statutory Audit Right From Year One</h2>
                <p>The most common mistake is treating statutory audit as something to think about only once the company is generating meaningful revenue. Because the requirement attaches from incorporation, the practical discipline is to appoint the first auditor within the 30-day window, maintain proper books from day one so the first audit isn&apos;t a scramble, and build the audit timeline into the same annual compliance calendar as ROC filings like AOC-4 and MGT-7. Our guide to <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filing</Link> covers how the audited financial statements feed directly into those filings.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Need a statutory auditor or unsure if CARO applies to you?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We handle statutory audits for private limited companies of all sizes and help you get auditor appointment timelines right from incorporation.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist: First 30 Days</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-audit-vs-statutory-audit-vs-gst-audit" style={{ color: 'var(--primary)', fontWeight: 600 }}>Tax Audit vs Statutory Audit vs GST Audit</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Audit &amp; Assurance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

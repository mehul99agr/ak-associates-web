import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Secretarial Audit: Applicability & What It Covers' },
  description: 'Who must get a secretarial audit under Section 204 of the Companies Act, the Rule 9 turnover and paid-up capital thresholds, and what a Form MR-3 report actually examines.',
  keywords: [
    'secretarial audit applicability', 'section 204 companies act', 'form mr-3', 'secretarial audit report',
    'secretarial audit threshold', 'company secretary in practice audit', 'rule 9 secretarial audit',
    'secretarial audit private company',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/secretarial-audit-applicability-and-what-it-covers' },
  openGraph: {
    title: 'Secretarial Audit: Applicability & What It Covers',
    description: 'Section 204 applicability thresholds, who must file Form MR-3, and what a secretarial audit report actually examines.',
    url: 'https://agrawalkhandelwal.com/blog/secretarial-audit-applicability-and-what-it-covers',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secretarial Audit: Applicability & What It Covers',
    description: 'Which companies need a secretarial audit, the turnover/capital thresholds, and what Form MR-3 covers.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Secretarial Audit: Applicability & What It Covers', 'secretarial-audit-applicability-and-what-it-covers')

const articleLd = buildArticleLd({
  headline: 'Secretarial Audit: Applicability & What It Covers',
  description: 'Section 204 Companies Act applicability thresholds for secretarial audit, the Rule 9 turnover and paid-up capital limits, and what a Form MR-3 report examines.',
  datePublished: '2026-08-31',
  slug: 'secretarial-audit-applicability-and-what-it-covers',
})

const faqs: [string, string][] = [
  [
    'Which companies are required to conduct a secretarial audit?',
    'Under Section 204 read with Rule 9 of the Companies (Appointment and Remuneration of Managerial Personnel) Rules, every listed company must conduct a secretarial audit. Beyond listed companies, it also applies to every public company with a paid-up share capital of Rs 50 crore or more, or a turnover of Rs 250 crore or more, and separately to every company (public or private) with outstanding loans or borrowings from banks or public financial institutions of Rs 100 crore or more.',
  ],
  [
    'Do private companies ever need a secretarial audit?',
    'Yes. While the paid-up capital and turnover thresholds apply only to public companies, the Rs 100 crore outstanding loans/borrowings threshold applies to both public and private companies. A private company that has crossed that borrowing level based on its last audited financial statement falls within the requirement even though it is not public and not listed.',
  ],
  [
    'What figures are used to check whether the threshold is crossed?',
    'The applicability check is based on the figures in the company\'s last audited financial statement. If paid-up capital, turnover, or outstanding loans/borrowings crossed the relevant threshold as at the end of the previous financial year, the secretarial audit requirement applies for the current financial year, even if the company expects the figure to fall back below the threshold later in the year.',
  ],
  [
    'Who can conduct a secretarial audit and issue Form MR-3?',
    'Only a Company Secretary in Practice (a member of the Institute of Company Secretaries of India holding a valid certificate of practice) can conduct a secretarial audit and sign the report. It cannot be self-certified by the company\'s own directors or in-house company secretary acting outside a practising capacity, and it cannot be issued by a chartered accountant instead of a practising CS.',
  ],
  [
    'What happens if a company required to do a secretarial audit skips it?',
    'A company that meets the Section 204 threshold but does not get a secretarial audit done, or does not annex the report to its Board\'s Report, is in default and exposes itself and its officers to penalties under the Companies Act. The gap is also the kind of finding auditors and lenders flag during due diligence, so it tends to surface later even if it is missed in the year it should have been done.',
  ],
  [
    'Is secretarial audit the same as a statutory financial audit?',
    'No. A statutory audit under the Companies Act examines the financial statements for a true and fair view. A secretarial audit is a compliance audit: it examines whether the company has complied with the Companies Act, SEBI regulations (where applicable), FEMA, and other specified laws in the way it has conducted its corporate affairs, and reports on process and governance, not on the accuracy of the financial numbers themselves.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function SecretarialAuditBlog() {
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
                Secretarial Audit: Applicability &amp; What It Covers
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 31, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 204</strong> makes secretarial audit mandatory for every listed company, plus public companies crossing <strong>Rs 50 crore paid-up capital</strong> or <strong>Rs 250 crore turnover</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>A separate <strong>Rs 100 crore outstanding loans/borrowings</strong> threshold applies to both public and private companies.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Only a practising Company Secretary can conduct the audit and issue the report in <strong>Form MR-3</strong>, annexed to the Board&apos;s Report.</li>
                    <li style={{ marginBottom: 0 }}>It is a compliance audit of process and governance, not a financial audit of the accounts.</li>
                  </ul>
                </div>

                <p>Secretarial audit is often assumed to be a listed-company formality, and for smaller private companies it is easy to overlook entirely until a lender, investor, or due diligence exercise asks for the report. That assumption is only half right. The applicability thresholds under Section 204 of the Companies Act, 2013 pull in a wider set of companies than most people expect, including private companies that have simply borrowed enough to cross one specific limit.</p>

                <h2>Who Section 204 Applies To</h2>
                <p>Secretarial audit is mandatory for:</p>
                <ul>
                  <li><strong>Every listed company</strong>, regardless of size.</li>
                  <li><strong>Every public company</strong> with a paid-up share capital of <strong>Rs 50 crore or more</strong>.</li>
                  <li><strong>Every public company</strong> with a turnover of <strong>Rs 250 crore or more</strong>.</li>
                  <li><strong>Every company, public or private,</strong> with outstanding loans or borrowings from banks or public financial institutions of <strong>Rs 100 crore or more</strong>.</li>
                </ul>
                <p>The first three limbs (listed status, the paid-up capital limb, and the turnover limb) apply only to public companies. The fourth limb, the outstanding borrowings threshold, is the one that catches private companies: it applies irrespective of whether the company is public or private, listed or unlisted. A private company that has taken on Rs 100 crore or more in bank or financial-institution debt is in scope even though none of the capital or turnover limbs apply to it.</p>
                <p>These are independent, either/or thresholds. A company only needs to cross one of them, not all, to fall within the requirement.</p>

                <h2>How the Threshold Is Checked</h2>
                <p>The relevant figures are taken from the company&apos;s <strong>last audited financial statement</strong>. If paid-up capital, turnover, or outstanding borrowings crossed the applicable threshold as at the end of the immediately preceding financial year, the secretarial audit obligation kicks in for the current financial year. This means the check is retrospective and mechanical: a company cannot avoid the requirement by pointing to a lower figure expected at the current year-end, and equally, a company that genuinely fell back below the threshold in the prior year is not caught simply because it was above it earlier.</p>
                <p>This is the same kind of backward-looking, prior-year-figure test used for several other Companies Act thresholds, so it is worth checking alongside other size-linked obligations, such as the composition and filing requirements covered in our <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing guide</Link>, whenever a company crosses a growth milestone.</p>

                <h2>Who Can Conduct the Audit</h2>
                <p>Only a <strong>Company Secretary in Practice</strong>, meaning a member of the Institute of Company Secretaries of India holding a valid certificate of practice, is authorised to conduct a secretarial audit and sign the resulting report. It is not something the company&apos;s own in-house company secretary can self-certify while acting in an employee capacity, and it is not within a chartered accountant&apos;s scope to issue, even though CAs and CS professionals often work together on the surrounding compliance for a company of this size.</p>

                <h2>What Form MR-3 Actually Examines</h2>
                <p>The secretarial audit report is issued in <strong>Form MR-3</strong> and annexed to the Board&apos;s Report. Rather than verifying financial statement accuracy, it examines whether the company has complied, in substance and in process, with specified laws during the year under review, typically including:</p>
                <ul>
                  <li>The Companies Act, 2013 and the rules made under it, including board and general meeting procedures, filings, and maintenance of statutory registers.</li>
                  <li>The Depositories Act, 1996 and related SEBI (Depositories and Participants) regulations, where applicable.</li>
                  <li>Foreign Exchange Management Act, 1999 provisions relating to foreign direct investment, overseas direct investment, and external commercial borrowings.</li>
                  <li>SEBI regulations covering matters such as substantial acquisition of shares and takeovers, insider trading, and listing obligations, where the company is listed.</li>
                  <li>Other laws specifically applicable to the company given its industry, and secretarial standards issued by the ICSI.</li>
                </ul>
                <p>The report is a compliance opinion, not a financial one: it states whether the company has complied with the applicable framework and flags specific instances of non-compliance or deviation, giving the board, shareholders, and any lender or investor reviewing the company a governance-focused check that a financial audit does not provide.</p>

                <h2>Why It Matters Even If You Are Just Under the Threshold</h2>
                <p>Companies approaching Rs 100 crore in borrowings, or a public company nearing the Rs 50 crore capital or Rs 250 crore turnover marks, are often better served getting their governance processes in order before the audit becomes mandatory, rather than scrambling in the year it first applies. Lenders and investors evaluating a company for the next round of debt or equity frequently ask for a secretarial audit report even when it is not yet legally required, simply as a governance signal, so building the underlying discipline early tends to pay off beyond the compliance trigger itself.</p>
              </div>

              <PostCTA
            heading="Not sure if secretarial audit applies to you?"
            description="We check your thresholds against the last audited financials and coordinate with a practising Company Secretary where the requirement applies."
            secondaryLabel="Ask on WhatsApp"
            secondaryHref="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20checking%20secretarial%20audit%20applicability."
            secondaryExternal
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/charge-creation-and-satisfaction-chg-forms-roc-compliance-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>Charge Creation &amp; Satisfaction: ROC Compliance Guide</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dsc-din-application-director-guide" style={{ color: 'var(--primary)', fontWeight: 600 }}>DSC/DIN Application Guide</Link></li>
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

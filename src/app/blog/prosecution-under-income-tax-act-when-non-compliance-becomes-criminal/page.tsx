import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Prosecution Under Income Tax Act: When Non-Compliance Becomes Criminal' },
  description: 'When income tax non-compliance stops being a civil penalty matter and becomes criminal prosecution: willful evasion, failure to file, imprisonment ranges, and how compounding works.',
  keywords: [
    'prosecution income tax act', 'section 276C willful evasion', 'section 276CC failure to file',
    'income tax criminal prosecution India', 'imprisonment income tax act', 'compounding of offences income tax',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/prosecution-under-income-tax-act-when-non-compliance-becomes-criminal' },
  openGraph: {
    title: 'Prosecution Under Income Tax Act: When Non-Compliance Becomes Criminal',
    description: 'What separates a civil penalty from criminal prosecution under the Income Tax Act, and the imprisonment ranges involved.',
    url: 'https://agrawalkhandelwal.com/blog/prosecution-under-income-tax-act-when-non-compliance-becomes-criminal',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosecution Under Income Tax Act: When Non-Compliance Becomes Criminal',
    description: 'When income tax non-compliance becomes criminal prosecution, and how compounding can resolve it.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Prosecution Under Income Tax Act: When Non-Compliance Becomes Criminal', 'prosecution-under-income-tax-act-when-non-compliance-becomes-criminal')

const articleLd = buildArticleLd({
  headline: 'Prosecution Under Income Tax Act: When Non-Compliance Becomes Criminal',
  description: 'When income tax non-compliance escalates from a civil penalty to criminal prosecution, the sections involved, imprisonment ranges, and compounding.',
  datePublished: '2026-08-25',
  slug: 'prosecution-under-income-tax-act-when-non-compliance-becomes-criminal',
})

const faqs: [string, string][] = [
  [
    'What is the difference between a tax penalty and tax prosecution?',
    'A penalty is a civil, monetary consequence, typically a percentage of the tax involved, imposed by the assessing officer. Prosecution is a criminal proceeding filed before a magistrate, which can result in imprisonment and a fine on conviction, on top of, not instead of, the civil penalty. Prosecution is generally reserved for cases involving willfulness or deliberate intent, not every instance of tax shortfall or delay.',
  ],
  [
    'Can I go to jail just for filing my ITR late?',
    'A genuinely late but honest filing, with tax paid and no intent to evade, is ordinarily dealt with through late fees and interest, not prosecution. Prosecution under Section 276CC specifically targets failure to file with the intent to evade tax, and in practice the department has discretion, and internal monetary/case-selection guidelines, on which cases it pursues criminally. Prosecution for a first-time, low-value, non-willful delay is not the norm, but the legal exposure exists and should not be dismissed casually.',
  ],
  [
    'What imprisonment terms apply for willful tax evasion under Section 276C?',
    'Under Section 276C, if the amount of tax sought to be evaded exceeds Rs 25 lakh, imprisonment can range from six months to seven years, along with a fine. Where the amount is Rs 25 lakh or below, imprisonment ranges from three months to two years, along with a fine. These are the ranges a court can impose on conviction; they are not automatic or guaranteed outcomes of every case that reaches prosecution.',
  ],
  [
    'What is compounding of offences, and can it stop a prosecution?',
    'Compounding lets a taxpayer settle certain income tax offences with the department by paying a compounding fee and complying with prescribed conditions, in exchange for the department not proceeding with (or withdrawing) criminal prosecution. It is available at the department\'s discretion, generally more readily before a prosecution complaint is actually filed in court, and is not available for every category of offence or every repeat offender. It is a meaningful off-ramp, but not a guaranteed right.',
  ],
  [
    'Do these prosecution provisions have new numbers under the Income Tax Act 2025?',
    'Sections 276C and 276CC, along with related prosecution provisions, have been renumbered under the Income Tax Act 2025. The exact new-Act section references were not consistently confirmed across authoritative sources at the time of writing, so this guide uses the familiar old-Act numbers throughout; confirm the current section citation with your CA before relying on it in any formal submission.',
  ],
  [
    'Is a company director personally liable for prosecution over the company\'s tax offence?',
    'Yes, potentially. Where the offence is committed by a company, every person who was in charge of and responsible for the conduct of the business at the time, typically directors, can be deemed guilty and liable to be proceeded against, unless they can show the offence was committed without their knowledge or that they exercised due diligence to prevent it. This is a real personal exposure that goes beyond the company\'s own liability.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function ProsecutionIncomeTaxActBlog() {
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
                Prosecution Under Income Tax Act: When Non-Compliance Becomes Criminal
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 25, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Most tax shortfalls end in a civil penalty. <strong>Prosecution</strong> is a separate, criminal proceeding reserved for cases involving willfulness, such as willful evasion (Section 276C) or willful failure to file (Section 276CC).</li>
                    <li style={{ marginBottom: '0.4rem' }}>Imprisonment ranges from <strong>3 months to 7 years</strong> depending on the section and the amount of tax involved, with the higher range applying once the evaded amount exceeds Rs 25 lakh.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Company directors and persons in charge of a business can be personally prosecuted for the company&apos;s offence unless they show it happened without their knowledge and despite due diligence.</li>
                    <li style={{ marginBottom: 0 }}><strong>Compounding of offences</strong> is a discretionary route to resolve certain prosecutions by paying a fee and meeting conditions, generally easier to access before a prosecution complaint is filed in court.</li>
                  </ul>
                </div>

                <p>Almost every income tax issue a taxpayer runs into, a missed deadline, an understated deduction, a mismatch flagged during scrutiny, is resolved through interest, a monetary penalty, or a reassessment. That is deliberate: the Income Tax Act is built primarily as a civil, not criminal, compliance framework. But a narrower band of non-compliance, specifically conduct involving willfulness or deliberate concealment, crosses into criminal territory, with prosecution, court proceedings, and the possibility of imprisonment on conviction. Knowing where that line sits matters more than the rare severity of the outcome suggests.</p>

                <h2>Penalty vs Prosecution: Two Different Tracks</h2>
                <p>A <strong>penalty</strong> is a civil consequence imposed administratively by the tax department, usually a percentage of the tax involved, for things like under-reporting of income, misreporting, or specific procedural defaults. It does not require a court and does not carry imprisonment.</p>
                <p><strong>Prosecution</strong> is different in kind. It is a criminal complaint filed by the department before a magistrate, and if the case proceeds to conviction, it can result in imprisonment and a fine, in addition to, not instead of, any civil penalty already levied. Prosecution requires the department to establish the specific elements of the offence, most importantly willfulness or deliberate intent in the more serious sections, which is a materially higher bar than the strict-liability standard that often applies to civil penalties.</p>

                <h2>Section 276C: Willful Attempt to Evade Tax</h2>
                <p>Section 276C covers a person who <strong>willfully attempts to evade</strong> tax, penalty, or interest, or under-reports income in a manner that would lead to tax evasion. "Willful" is the operative word: conduct such as maintaining false books of account, making false entries, deliberately omitting entries that should have been made, or otherwise engineering circumstances to reduce a genuine tax liability falls within this section.</p>
                <p>The imprisonment ranges depend on the amount involved:</p>
                <ul>
                  <li><strong>Where the amount of tax evaded (or tax on under-reported income) exceeds Rs 25 lakh</strong>, imprisonment can range from six months to seven years, along with a fine.</li>
                  <li><strong>Where the amount is Rs 25 lakh or below</strong>, imprisonment ranges from three months to two years, along with a fine.</li>
                </ul>
                <p>These are the statutory ranges a court can impose on conviction, not an automatic sentence attached to every case that reaches prosecution; actual outcomes depend on the facts, the evidence of willfulness, and how the case is conducted.</p>

                <h2>Section 276CC: Willful Failure to File a Return</h2>
                <p>Section 276CC applies where a person <strong>willfully fails to file</strong> a return of income within the time allowed, and that failure is done with the intent to evade tax. A genuinely delayed but honest filing, where the person eventually files and pays what is due, is treated very differently from a deliberate, repeated refusal to file in order to keep income concealed.</p>
                <p>The imprisonment ranges under Section 276CC mirror those under Section 276C: six months to seven years where the tax evaded exceeds Rs 25 lakh, and three months to two years otherwise, in each case along with a fine. The law does build in some relief for smaller cases and certain categories of taxpayers where the tax payable is below a specified threshold, which is one of several reasons this is not a section to interpret from a general summary without checking the specific facts against current provisions.</p>

                <h2>Director and Officer Liability for Company Offences</h2>
                <p>Where the offence is committed by a company, HUF, firm, or other entity, the Income Tax Act extends liability beyond the entity itself. Every person who, at the time the offence was committed, was <strong>in charge of and responsible for the conduct of the business</strong>, ordinarily the directors of a company or the partners of a firm, can be deemed guilty and prosecuted alongside the entity. The defence available is narrow: showing the offence was committed without that person's knowledge, or that they exercised all due diligence to prevent it. This is a genuine personal exposure, not a formality, and is one reason founders and directors should treat the company's tax compliance as a personal risk item, not purely a corporate one.</p>

                <h2>Compounding of Offences: The Off-Ramp</h2>
                <p>Prosecution is not always the end of the road once initiated. The Income Tax Act allows certain offences to be <strong>compounded</strong>, meaning the taxpayer pays a compounding fee and satisfies conditions set by the competent authority, in exchange for the department not proceeding with, or withdrawing, the criminal complaint. Compounding is discretionary, not a right, and is generally easier to obtain before a formal prosecution complaint has actually been filed in court than after. It is also not uniformly available across every offence category or for every repeat or high-severity case. Where prosecution risk is live, evaluating a compounding application early, rather than after proceedings have progressed, is usually the more favourable path.</p>

                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Note on Section Numbering</p>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>Sections 276C, 276CC, and the related prosecution and compounding provisions have all been renumbered under the Income Tax Act 2025. At the time of writing, the exact new-Act section references for these specific provisions were not consistently confirmed across authoritative sources, so this guide refers to them by their familiar old-Act numbers throughout, consistent with the approach this site takes for other provisions still awaiting reliable new-Act citations. Confirm the current section citation with your CA before relying on it in any notice response or court submission.</p>
                </div>

                <h2>What Actually Reduces Prosecution Risk</h2>
                <ul>
                  <li>File returns on time, even if the payment cannot be made in full immediately; a filed-but-unpaid return is a fundamentally different position from an unfiled one when intent is examined.</li>
                  <li>Do not maintain false or manipulated books of account, or omit entries deliberately, even for a single transaction; this is the specific conduct Section 276C targets.</li>
                  <li>Respond properly to every <Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>notice or scrutiny query</Link> rather than ignoring it; an unanswered notice that escalates into a reassessment strengthens, not weakens, a case for willfulness.</li>
                  <li>If a genuine error or omission is found before the department finds it, correct it through a <Link href="/blog/rectification-under-section-154-itr-errors" style={{ color: 'var(--primary)', fontWeight: 600 }}>rectification</Link> or a properly filed updated/revised return; voluntary correction is treated very differently from a concealment discovered during scrutiny.</li>
                  <li>If prosecution risk is already live, get professional advice on a compounding application early rather than defaulting to a court-only defence strategy.</li>
                </ul>
                <p>Prosecution under the Income Tax Act is real, but it is also narrower and more deliberate a remedy than most taxpayers assume, reserved for willful, deliberate conduct rather than honest mistakes or cash-flow-driven delays. The practical protection is straightforward: file on time, keep clean records, respond to notices, and correct errors voluntarily the moment they are found. Where a genuine prosecution risk exists, our <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>tax advisory and representation services</Link> include evaluating compounding options and coordinating with legal counsel.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Facing a prosecution notice or a serious scrutiny escalation?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help evaluate exposure, prepare responses, and coordinate compounding applications where prosecution risk is live.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20need%20help%20with%20an%20income%20tax%20prosecution%20or%20scrutiny%20matter." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-notices-explained-143-1-143-2-148" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Notices Explained: 143(1), 143(2) &amp; 148</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/income-tax-scrutiny-assessment-how-to-respond" style={{ color: 'var(--primary)', fontWeight: 600 }}>Income Tax Scrutiny Assessment: How to Respond</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/condonation-of-delay-filing-itr-how-to-apply" style={{ color: 'var(--primary)', fontWeight: 600 }}>Condonation of Delay in Filing ITR</Link></li>
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

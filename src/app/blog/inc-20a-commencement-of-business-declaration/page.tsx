import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import ServiceOffer from '../_components/ServiceOffer'
import PostFooterLinks from '../_components/PostFooterLinks'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'
import { OG_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: { absolute: "INC-20A Commencement of Business: 180-Day Rule & Penalty" },
  description: "INC-20A must be filed within 180 days of incorporation. Know the Rs 50,000 company penalty, officer penalty, strike-off risk and the steps to file.",
  keywords: ["INC-20A", "commencement of business declaration", "Section 10A Companies Act", "INC-20A penalty", "INC-20A due date", "INC-20A late filing", "private limited company compliance"],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/inc-20a-commencement-of-business-declaration' },
  openGraph: {
    title: "INC-20A Commencement of Business: 180-Day Rule & Penalty",
    description: "INC-20A must be filed within 180 days of incorporation. Know the Rs 50,000 company penalty, officer penalty, strike-off risk and the steps to file.",
    url: 'https://agrawalkhandelwal.com/blog/inc-20a-commencement-of-business-declaration',
    type: 'article',
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: "INC-20A Commencement of Business: 180-Day Rule & Penalty",
    description: "INC-20A must be filed within 180 days of incorporation. Know the Rs 50,000 company penalty, officer penalty, strike-off risk and the steps to file.",
    images: OG_IMAGES,
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd("INC-20A Declaration of Commencement of Business: 180-Day Deadline, Penalty and Steps", 'inc-20a-commencement-of-business-declaration')

const articleLd = buildArticleLd({
  headline: "INC-20A Declaration of Commencement of Business: 180-Day Deadline, Penalty and Steps",
  description: "INC-20A must be filed within 180 days of incorporation. Know the Rs 50,000 company penalty, officer penalty, strike-off risk and the steps to file.",
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  slug: 'inc-20a-commencement-of-business-declaration',
})

const faqs: [string, string][] = [
  ["What is the due date for INC-20A?", "INC-20A must be filed within 180 days of the date of incorporation under Section 10A of the Companies Act, 2013. It applies to companies with share capital incorporated on or after November 2, 2018. It is a one-time filing, not annual."],
  ["What is the penalty for not filing INC-20A?", "Section 10A(2) provides a penalty of Rs 50,000 on the company and Rs 1,000 per day on each officer in default, up to Rs 1 lakh. Additional MCA fees apply to a late form. Small companies, one person companies and startup companies may get relief under Section 446B. Confirm current figures on the MCA portal at the time of filing."],
  ["Can my company start business without filing INC-20A?", "No. Until the declaration is filed, a company covered by Section 10A should not commence business or exercise borrowing powers. Receiving the Certificate of Incorporation alone is not enough."],
  ["Can the ROC strike off my company for not filing INC-20A?", "If the declaration is not filed within 180 days and the Registrar has reasonable cause to believe the company is not carrying on business, the Registrar may initiate action to remove its name from the register. This is a power, not an automatic result."],
  ["What proof is needed to file INC-20A?", "You need a bank statement of the company showing that each subscriber has paid the value of shares agreed to be taken, verification of the registered office address, a director DSC, and certification by a practising CA, CS or CMA."],
  ["Is INC-20A required if the company has no turnover yet?", "Yes. The requirement depends on the incorporation date and share capital, not on turnover. A company with no revenue still has to file the declaration within the 180-day window."],
]

const faqLd = buildFaqLd(faqs)

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Compliance</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>INC-20A Declaration of Commencement of Business: 180-Day Deadline, Penalty and Steps</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published November 18, 2026</span><span aria-hidden>&bull;</span><Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}><strong>INC-20A</strong> is the one-time declaration under Section 10A of the Companies Act that a company with share capital has received its subscription money. It applies to companies incorporated on or after November 2, 2018.</li>
                  <li style={{ marginBottom: '0.4rem' }}>File it <strong>within 180 days</strong> of the date of incorporation. Until it is filed, the company should not commence business or exercise borrowing powers.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Penalty under Section 10A(2): <strong>Rs 50,000 on the company</strong> and <strong>Rs 1,000 per day on each officer in default, capped at Rs 1 lakh</strong>. Confirm current amounts at filing time.</li>
                  <li style={{ marginBottom: '0.4rem' }}>If no declaration is filed and the Registrar believes the company is not carrying on business, the Registrar may start action to <strong>remove the company name</strong> from the register.</li>
                  <li style={{ marginBottom: 0 }}>Proof needed: every subscriber has paid the value of shares agreed to be taken, shown by a <strong>bank statement</strong>, and the registered office is verified.</li>
                </ul>
              </div>
              <ServiceOffer variant="startup" />

              <p>Many founders assume that the Certificate of Incorporation means they can start trading. For a company with share capital, it does not fully do that. Section 10A of the Companies Act, 2013 bars the company from commencing business or exercising borrowing powers until a declaration is filed in Form INC-20A. If you registered your company recently and have not filed it, this is the first compliance to clear.</p>

              <h2>Who Must File INC-20A</h2>
              <p>The requirement applies to companies having share capital that were incorporated on or after November 2, 2018. A typical private limited startup falls squarely within it. A company without share capital does not. The filing is one-time, not annual.</p>

              <h2>The 180-Day Window</h2>
              <p>The declaration must be filed within <strong>180 days from the date of incorporation</strong> shown on your certificate. Count calendar days, not working days. A company incorporated on July 1, 2026 should plan to file well before the end of December 2026. Do not leave it for the last week, because the form needs a bank statement and a professional&apos;s certification.</p>

              <h2>What You Are Declaring</h2>
              <p>The directors declare that every subscriber to the memorandum has paid the value of the shares agreed to be taken by them on the date of the declaration, and that the company has filed the verification of its registered office address. In plain terms: the money promised at incorporation has actually come into the company&apos;s bank account.</p>

              <h2>Proof of Subscription Money</h2>
              <p>This is where most delays happen. Practically, you need:</p>
              <ul>
                <li>A <strong>current bank account in the company&apos;s name</strong>, opened after incorporation.</li>
                <li>Subscription money deposited by each subscriber, visible as a credit on the <strong>bank statement</strong> with the subscriber&apos;s name or a clear reference.</li>
                <li>A match between the amounts paid and the subscribed capital in the MoA. A shortfall means the declaration cannot honestly be made until the balance is paid in.</li>
                <li>Verification of the registered office, with the usual address proof such as a utility bill and a rent or ownership document.</li>
                <li>A director DSC, and certification by a practising CA, CS or CMA.</li>
              </ul>
              <p>If the company is an NBFC or in a regulated sector, regulator approvals can also be required. For help sequencing the bank account and other early tasks, see our <Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>post-incorporation checklist</Link>.</p>

              <h2>Penalty for Missing the Deadline</h2>
              <p>Section 10A(2) imposes a penalty of <strong>Rs 50,000 on the company</strong> and <strong>Rs 1,000 for each day of continuing default on every officer in default, subject to a maximum of Rs 1 lakh</strong>. MCA also charges additional fees for a late form filing. Section 446B gives relief to small companies, one person companies and startup companies by limiting penalties to one-half of the amount, so check whether your company qualifies. These figures are reported consistently by professional sources, but confirm the current MCA fee schedule on the day you file.</p>

              <h2>The Bigger Risk: Strike-Off and Blocked Filings</h2>
              <p>The money penalty is not the real cost. Under Section 10A(3), if the declaration is not filed within 180 days and the Registrar has reasonable cause to believe the company is not carrying on business, the Registrar may initiate action to remove the company&apos;s name from the register. Banks and investors also flag a missing INC-20A during due diligence, and professionals report that other MCA filings can be held up until it is done. A struck-off company has to be revived through the NCLT, which is slow and costly. For the reverse process, see our guide to <Link href="/blog/winding-up-strike-off-a-private-limited-company-process-and-timeline" style={{ color: 'var(--primary)', fontWeight: 600 }}>strike-off and winding up</Link>.</p>

              <h2>Practical Steps to File</h2>
              <ol>
                <li><strong>Days 1 to 15:</strong> open the company bank account and obtain a DSC for the signing director.</li>
                <li><strong>Days 15 to 45:</strong> subscribers transfer the full subscription amount from their own accounts. Avoid cash deposits and third-party payments.</li>
                <li><strong>Before day 120:</strong> collect the bank statement showing the credits, and the registered office address proof.</li>
                <li><strong>Before day 150:</strong> file INC-20A on the MCA V3 portal with the professional&apos;s certification.</li>
                <li>Keep the SRN and acknowledgment with the statutory records, then diarise the next items in your <Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup compliance calendar</Link>, starting with the first auditor appointment under the <Link href="/blog/statutory-audit-requirements-for-private-limited-companies" style={{ color: 'var(--primary)', fontWeight: 600 }}>statutory audit rules</Link>.</li>
              </ol>

              <h2>If You Have Already Missed 180 Days</h2>
              <p>File as soon as possible rather than waiting. The form can generally still be filed after the window with the additional fee, and exposure is smaller if the default is cured quickly and the company has genuinely received the money. Do not backdate any transaction or deposit to fit the window. If your shareholders never paid the subscription money, the right course is to have them pay it in, or to reduce the capital through a proper process, not to file a declaration that is not true. Our <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup advisory</Link> team can review the position and tell you which route applies.</p>
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', marginTop: '2rem' }}>
              <strong>Official sources:</strong> Section 10A and Section 446B of the Companies Act, 2013; Form INC-20A on the MCA V3 portal. See <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Corporate Affairs</a>.
            </p>
            <PostFooterLinks slug="inc-20a-commencement-of-business-declaration" />

            <PostCTA segment="startup"
            heading="Incorporated recently and unsure about INC-20A?"
            description="We check your bank records, prepare the declaration and file INC-20A within the 180-day window."
            secondaryLabel="Startup Advisory"
            secondaryHref="/startups"
          />

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/post-incorporation-checklist-first-30-days" style={{ color: 'var(--primary)', fontWeight: 600 }}>Post-Incorporation Checklist</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-compliance-calendar-year-1-3" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Compliance Calendar, Year 1 to 3</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7, DIR-3 KYC</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

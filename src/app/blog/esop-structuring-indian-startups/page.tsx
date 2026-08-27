import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'ESOP Structuring for Indian Startups',
  description: 'How to design an ESOP for an Indian Private Limited startup: pool sizing, vesting schedules, exercise price, Companies Act mechanics, valuation, and the two-stage employee tax.',
  keywords: [
    'ESOP structuring India', 'ESOP scheme design startup', 'ESOP vesting schedule India',
    'ESOP tax India', 'DPIIT ESOP deferral', 'SH-12 PAS-3 ESOP',
    'employee stock option plan India', 'ESOP pool sizing startup',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/esop-structuring-indian-startups' },
  openGraph: {
    title: 'ESOP Structuring for Indian Startups',
    description: 'Pool sizing, vesting, exercise price, Companies Act mechanics, and the two-stage employee tax.',
    url: 'https://agrawalkhandelwal.com/blog/esop-structuring-indian-startups',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESOP Structuring for Indian Startups',
    description: 'Pool sizing, vesting schedules, exercise price, and the two-stage employee tax explained.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('ESOP Structuring for Indian Startups', 'esop-structuring-indian-startups')

const articleLd = buildArticleLd({
  headline: 'ESOP Structuring for Indian Startups',
  description: 'How to design an ESOP for an Indian Private Limited startup: pool sizing, vesting, exercise price, Companies Act mechanics, valuation, and employee tax.',
  datePublished: '2026-07-17',
  slug: 'esop-structuring-indian-startups',
})

const faqs: [string, string][] = [
  ['How much ESOP pool should an Indian startup create before raising a seed round?', 'There is no fixed percentage that works for every company. Build the pool from your hiring plan through the next financing round, then model founder dilution and investor expectations on a fully diluted basis before finalising the number.'],
  ['Is four-year vesting with a one-year cliff compulsory for ESOPs in India?', 'No. It is a common commercial structure, not a statutory requirement. The company can adopt a different vesting schedule as long as it is properly approved by shareholders and clearly documented in the scheme.'],
  ['When does an employee pay tax on ESOP shares in India?', 'Tax generally arises first at exercise, as a salary perquisite on the FMV of shares less the exercise price, and again on sale as capital gains. Eligible employees of a DPIIT-recognised startup may qualify for a deferral, subject to current conditions.'],
  ['Can a startup give employees only 30 days to exercise ESOPs after resignation?', 'A scheme can specify a short post-exit exercise window, but founders should assess whether it is commercially realistic - employees may need cash for both the exercise price and perquisite tax while the shares remain illiquid.'],
  ['Does an ESOP require shareholder approval in a private limited company?', 'Yes. An Indian private limited company generally needs shareholder approval by special resolution for an ESOP scheme, plus applicable ROC filings including SH-12 and PAS-3 when options are exercised and shares allotted.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function ESOPStructuringBlog() {
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
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>ESOP Structuring for Indian Startups: Scheme Design, Vesting and Tax</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 17, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>An ESOP is a retention and ownership tool, not a substitute for competitive cash compensation.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Pool size, vesting, exercise price, and post-exit exercise period should be decided before the next funding round.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Employees generally face tax at exercise and again when they sell the shares - a two-stage event.</li>
                  <li style={{ marginBottom: 0 }}>DPIIT-recognised startups may offer eligible employees a perquisite-tax deferral, subject to current conditions.</li>
                </ul>
              </div>

              <p>For a seed or Series A startup, cash is usually the scarcest resource. An Employee Stock Option Plan, or ESOP, lets the company offer key employees a meaningful opportunity to participate in value creation without immediately increasing fixed salary costs. But a poorly designed ESOP that gives small, unclear grants or creates an impractical exercise process can frustrate employees rather than retain them. A useful scheme explains what the employee receives, when it vests, how it may be exercised, what happens on exit, and the likely tax cost.</p>

              <h2>Start With the ESOP Pool and Cap Table</h2>
              <p>The ESOP pool is commonly expressed as a percentage of the company&apos;s fully diluted share capital - issued shares plus shares reserved under the ESOP pool and shares issuable on conversion of instruments such as CCPS. There is no legally correct universal pool percentage. The right pool depends on the number and seniority of hires planned before the next fundraise, whether founders expect to use equity for advisers or independent directors, the company&apos;s sector and talent market, and existing investor requirements.</p>
              <p>Model at least three cases: conservative hiring, planned hiring, and aggressive hiring. A pool that is too small creates repeated shareholder approval and valuation work. A pool that is too large can dilute founders unnecessarily, particularly if investors require the pool to be created before their investment. Keep a live, fully diluted cap table showing issued shares, reserved options, granted options, vested options, exercised options, cancelled options, convertible securities, and ownership percentage under each scenario.</p>

              <h2>Choose Vesting Terms That Match Retention Goals</h2>
              <p>Vesting determines when an employee earns the right to exercise options. A common commercial structure is four-year vesting with a one-year cliff - no option vests if the employee leaves before completing one year, then a defined portion vests (often 25%) on the first anniversary, with the balance vesting monthly or quarterly over the remaining period. This is commercially familiar but not mandatory - senior hires may negotiate accelerated vesting on a company sale, while junior employees receive standard vesting after the cliff.</p>
              <p>The scheme should clearly address resignation before the cliff, termination for cause and without cause, disability or death, notice period treatment, acceleration on change of control, and treatment of unvested options on departure. Avoid relying on informal assurances - if an employee believes options will vest on an acquisition but the scheme says otherwise, the dispute can become a transaction risk during due diligence.</p>

              <h2>Set Exercise Price and Exercise Windows Carefully</h2>
              <p>The exercise price is the amount an employee pays to convert a vested option into shares - it may be set at face value, at Fair Market Value, or at another price permitted by the scheme and applicable law. A low exercise price can make the benefit attractive but may increase the employee&apos;s perquisite tax exposure at exercise. A high exercise price reduces that spread but may make the options commercially unattractive.</p>
              <p>The exercise window after resignation or termination is equally important. If the employee has only a short time to exercise, they may need to fund both the exercise price and tax without a liquid market for the shares. Many startups review whether a longer post-exit exercise period is appropriate for good leavers, while retaining stricter treatment for bad leavers - and the scheme should define both terms carefully rather than leaving them to discretion.</p>

              <h2>Companies Act Mechanics for an ESOP</h2>
              <p>For an Indian private limited company, an ESOP requires documented corporate approvals, not just a contract between the company and employees. The process generally includes preparing an ESOP scheme and grant documentation, obtaining Board approval, obtaining shareholder approval by <strong>special resolution</strong>, making applicable ROC filings including <strong>SH-12</strong> nomination form and <strong>PAS-3</strong> on exercise/allotment, maintaining option and share records, and issuing shares following valid exercise and allotment.</p>
              <p>The scheme and explanatory statement should disclose the categories of employees, total options, vesting requirements, exercise price or formula, exercise period, lock-in if any, and variation procedure. If the company changes the scheme after grants have been issued, consider whether the change is adverse to option holders and whether fresh approvals or consents are needed - never assume a Board resolution alone cures an unfavourable change.</p>

              <h2>Valuation and Accounting Discipline</h2>
              <p>Fair Market Value, or FMV, is relevant for accounting and employee tax purposes. In practice, a startup may obtain valuation support from a Registered Valuer, merchant banker, or other eligible professional depending on the legal purpose. For ESOP tax, the employee&apos;s perquisite value is broadly based on the FMV of shares on the exercise date less the amount paid by the employee - the valuation method, date, and valuer eligibility must be checked against applicable income tax rules.</p>
              <p>A valuation prepared for fundraising is not automatically suitable for every ESOP, company law, or FEMA purpose. Document why the method was selected, the financial projections and assumptions used, the valuation date, the class of shares being valued, and the professional&apos;s eligibility for the specific legal requirement.</p>

              <h2>Employee Tax: Exercise Is Not the Same as Sale</h2>
              <p>ESOP taxation generally occurs in two stages. <strong>At exercise</strong>, the difference between the FMV on exercise and the exercise price paid by the employee is generally taxed as a salary perquisite, with the employer ordinarily responsible for withholding. <strong>At sale</strong>, the employee may have capital gains tax on the difference between the sale price and the value used for perquisite taxation at exercise, with the holding period and treatment depending on the nature of the shares.</p>
              <p>This is why employees need practical tax communication before they exercise - an employee may hold valuable unlisted shares but still face tax before receiving cash from a sale. For eligible employees of a DPIIT-recognised startup, tax withholding on the ESOP perquisite may be deferred under the special startup regime, broadly linked to a period of up to five years, sale of the shares, or resignation - whichever occurs earlier. Confirm the current DPIIT ESOP deferral conditions before relying on this, since eligibility criteria are periodically revised.</p>

              <h2>Governance Practices That Prevent Future Problems</h2>
              <p>Run the ESOP as a controlled equity process, not an HR spreadsheet. Maintain grant registers, vesting schedules, Board approvals, option-holder communications, and cap table reconciliations. Every grant should be traceable from approval to grant letter to vesting calculation to exercise to allotment - particularly important in a funding round, acquisition, statutory audit, or employee dispute.</p>
              <p>This article concerns domestic scheme design and structuring. Cross-border ownership, overseas employees, and NRI holders need separate analysis - see our guide on <Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP taxation for NRIs</Link> for the tax treatment when an option holder becomes non-resident.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Designing an ESOP for your startup?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We draft ESOP schemes, handle shareholder and Board approvals, ROC filings, and valuation coordination for Indian startups.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
              </div>
            </div>

            <FaqSection faqs={faqs} />

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/founder-agreement-essentials-indian-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Founder Agreement Essentials</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

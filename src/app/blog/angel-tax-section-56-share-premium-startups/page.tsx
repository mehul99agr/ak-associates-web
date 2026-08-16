import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Angel Tax (Section 56(2)(viib)): Abolished for All Investors from FY 2024-25',
  description: 'Angel tax under Section 56(2)(viib) was abolished for all investors, resident and non-resident, effective FY 2024-25. What this means for new fundraising, and why historic rounds still need review.',
  keywords: [
    'angel tax India abolished', 'section 56(2)(viib)', 'angel tax removed startups',
    'angel tax resident investors', 'DPIIT angel tax exemption', 'share premium taxation India',
    'finance act 2024 angel tax', 'startup valuation tax India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/angel-tax-section-56-share-premium-startups' },
  openGraph: {
    title: 'Angel Tax: Abolished for All Investors from FY 2024-25',
    description: 'What the abolition of Section 56(2)(viib) means for new fundraising, and why historic rounds still need review.',
    url: 'https://agrawalkhandelwal.com/blog/angel-tax-section-56-share-premium-startups',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Tax: Abolished for All Investors (FY 2024-25)',
    description: 'Section 56(2)(viib) no longer applies to any investor class. What that means for founders.',
  },
}

const articleLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Angel Tax (Section 56(2)(viib)): Abolished for All Investors from FY 2024-25',
  description: 'Angel tax under Section 56(2)(viib) was abolished for all investors, resident and non-resident, effective FY 2024-25.',
  datePublished: '2026-07-21', dateModified: '2026-07-21',
  author: { '@type': 'Person', '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal', name: 'CA Mehul Agrawal' },
  publisher: { '@type': 'Organization', '@id': 'https://agrawalkhandelwal.com/#organization', name: 'Agrawal Khandelwal & Associates LLP', logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' } },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/angel-tax-section-56-share-premium-startups',
}

const faqs: [string, string][] = [
  ['Does angel tax still apply to resident investors in India?', 'No. Section 56(2)(viib) was abolished for all classes of investors - both resident and non-resident - by the Finance (No. 2) Act, 2024, effective from FY 2024-25 (April 1, 2024). It does not apply to new share issues from that year onward regardless of who the investor is.'],
  ['Was angel tax removed only for foreign investors?', 'No, this is a common misunderstanding. Budget 2023 had actually extended angel tax to cover non-resident investors for the first time (it previously applied only to residents). Budget 2024 then abolished the provision entirely for all investors starting FY 2024-25.'],
  ['Should a startup still get a valuation report after angel tax was abolished?', 'Yes. Valuation remains important for investor negotiations, ESOP pricing, company law actions, FEMA pricing on foreign investment, and historic tax diligence - it is no longer driven by Section 56(2)(viib) risk, but it has not become optional.'],
  ['Can old angel tax notices still affect a startup after the provision was abolished?', 'Yes. Abolition applies prospectively from FY 2024-25. Rounds raised in FY 2023-24 or earlier can still be assessed, questioned, or litigated under the old provision, so historic documentation and DPIIT exemption records should be preserved.'],
  ['Is DPIIT Form 2 still required for a new domestic funding round?', 'No, not for angel tax purposes - since Section 56(2)(viib) no longer applies to any investor, the DPIIT exemption declaration route built around it is no longer a live requirement for new rounds. Check current DPIIT procedures separately for any other startup benefit you intend to claim.'],
]

const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function AngelTaxBlog() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
        <div className="section"><div className="container">
          <Link href="/blog" style={{ color: 'var(--accent)', marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}>&larr; Back to Insights</Link>
          <article className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Startup Advisory</span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>Angel Tax and Share Premium: What Changed Under Section 56(2)(viib)</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
              <span>Published July 21, 2026</span><span aria-hidden>&bull;</span><span>CA Mehul Agrawal</span><span aria-hidden>&bull;</span><span>Agrawal Khandelwal &amp; Associates LLP</span>
            </div>
            <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
              <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Section 56(2)(viib) - &quot;angel tax&quot; - was <strong>abolished for all investors</strong>, resident and non-resident alike, by the Finance (No. 2) Act, 2024.</li>
                  <li style={{ marginBottom: '0.4rem' }}>The abolition is effective from <strong>FY 2024-25 (April 1, 2024)</strong> onward - it does not apply to FY 2026-27 fundraising.</li>
                  <li style={{ marginBottom: '0.4rem' }}>Rounds raised in FY 2023-24 or earlier can still be assessed under the old provision - historic documentation still matters.</li>
                  <li style={{ marginBottom: 0 }}>Valuation discipline remains important for investor negotiations, ESOPs, FEMA pricing, and company law - not just tax.</li>
                </ul>
              </div>

              <p>The starting point needs to be stated clearly, because a lot of outdated commentary still circulates: Section 56(2)(viib), commonly called the angel tax provision, was <strong>abolished for all classes of investors</strong> by the Finance (No. 2) Act, 2024, effective from FY 2024-25 (April 1, 2024). For FY 2026-27, it does not tax a closely held company merely because it issues shares at a premium above Fair Market Value - to a resident investor or a non-resident investor.</p>
              <p>This corrects a common but wrong summary that says only the non-resident scope was removed while resident investors remain covered. The actual sequence was the opposite: Budget 2023 had <em>extended</em> angel tax to non-resident investors for the first time (it previously applied only to residents), which caused significant industry pushback. Budget 2024 then abolished the provision entirely, for every investor class, starting FY 2024-25.</p>

              <h2>How the Historical Provision Worked</h2>
              <p>Before its abolition, Section 56(2)(viib) broadly applied where a closely held company issued shares to an investor at a price exceeding the prescribed FMV. The excess over FMV could be treated as income of the company under &quot;Income from Other Sources,&quot; subject to statutory exclusions and exemptions. A simplified historical example: if a company issued shares at Rs 200 per share and the applicable FMV was Rs 140, the Rs 60 excess per share could create tax exposure, subject to the law applicable for that year.</p>
              <p>The provision was significant because seed-stage companies often raise capital based on future potential rather than current assets or profits. A company with low revenue could have a high negotiated valuation, creating tension between commercial fundraising terms and tax valuation rules - which is exactly why its abolition was welcomed across the startup ecosystem.</p>

              <h2>Why Historic Exposure Still Matters</h2>
              <p>Even though the provision no longer applies to new FY 2026-27 issues, founders should not ignore older rounds. Review is sensible if the company raised equity before April 1, 2024, claimed a DPIIT-related exemption in an earlier year, received an income tax notice or assessment query, used aggressive projections without adequate valuation support, or has incomplete investor and Board documentation from that period.</p>
              <p>An investor conducting due diligence today may still ask whether any historic Section 56(2)(viib) exposure has been assessed, contested, settled, or provided for in the financial statements. A clean answer requires records, not recollection.</p>

              <h2>DPIIT Recognition and the Historical Exemption Route</h2>
              <p>Under the earlier angel tax exemption framework, an eligible DPIIT-recognised startup could make a declaration through Form 2 and satisfy prescribed conditions relating to aggregate paid-up share capital and share premium after the proposed issue. Because Section 56(2)(viib) has been abolished for new issues, this historical exemption route should not be presented as a current tax prerequisite for FY 2026-27 fundraising.</p>
              <p>However, retain all historical declarations, recognition certificates, valuation reports, and investment documents from earlier funding rounds - these remain relevant to prior assessment years and investor diligence into the company&apos;s history.</p>

              <h2>Valuation Methods and Rule 11UA Context</h2>
              <p>Historically, Rule 11UA provided valuation rules and safe-harbour concepts for the angel tax provision. The methods commonly discussed were Net Asset Value (NAV), based largely on the company&apos;s balance sheet, and Discounted Cash Flow (DCF), which estimates future cash flows and discounts them to present value. NAV can be a poor commercial fit for an early-stage technology business whose value lies in intellectual property and growth prospects rather than current assets. DCF is often more aligned with startup financing, but only when projections are prepared honestly, assumptions are documented, and the model can withstand review. See our <Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>startup valuation guide</Link> for a fuller treatment of these methods and when each applies today.</p>

              <h2>Practical Funding Impact Today</h2>
              <p>For a new domestic or foreign angel or seed round in FY 2026-27, founders should not build the transaction around a current Section 56(2)(viib) tax risk - the provision has been abolished. Instead, focus on the issues that remain live: whether the valuation is credible to investors, whether rights attached to the shares are properly documented, whether the cap table and prior allotments reconcile, whether the company has met Companies Act approval and filing requirements, and whether FEMA pricing and reporting apply because any investor is non-resident.</p>
              <p>A valuation report is not merely a compliance document that has become optional - it is the financial narrative that investors, auditors, and future buyers use to understand why the round was priced as it was.</p>

              <h2>Preserve a Defensible Valuation File</h2>
              <p>For each funding round, keep a file containing the term sheet, Board and shareholder approvals, valuation report, financial model, key assumptions, investor subscription documents, bank receipts, share allotment records, and ROC filings. If the company uses DCF, document the business drivers behind revenue growth, gross margin, hiring, customer acquisition, working capital, and terminal value. A spreadsheet without a written assumptions note is difficult to defend after the founding team has changed - or after a tax officer asks about a round raised years ago under the old provision.</p>
            </div>

            <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Need to review a historic funding round or plan a new one?</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We review historic angel tax exposure, coordinate valuation reports, and structure new funding rounds for Indian startups.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                <Link href="/startups" className="btn btn-outline">Startup Advisory</Link>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map(([q, a], i) => (
                  <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/startup-valuation-methods-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Valuation Methods in India</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/dpiit-registration-startups-india-80iac" style={{ color: 'var(--primary)', fontWeight: 600 }}>DPIIT Registration &amp; 80-IAC Tax Benefit</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/convertible-notes-vs-equity-fema-startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Convertible Notes vs Equity (FEMA)</Link></li>
                <li style={{ marginBottom: 0 }}><Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory Services</Link></li>
              </ul>
            </div>
          </article>
        </div></div>
      </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Significant Beneficial Owner (SBO) Reporting Requirements' },
  description: 'Who qualifies as a Significant Beneficial Owner under Section 90 of the Companies Act, the 10% threshold, and how to file Form BEN-1 and BEN-2 on time.',
  keywords: [
    'significant beneficial owner', 'SBO reporting requirements', 'section 90 companies act',
    'form BEN-1', 'form BEN-2', 'SBO 10% threshold', 'beneficial ownership disclosure India',
    'SBO compliance companies act',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/significant-beneficial-owner-sbo-reporting-requirements' },
  openGraph: {
    title: 'Significant Beneficial Owner (SBO) Reporting Requirements',
    description: 'Who counts as an SBO under Section 90, the 10% threshold, and the BEN-1/BEN-2 filing process and deadlines.',
    url: 'https://agrawalkhandelwal.com/blog/significant-beneficial-owner-sbo-reporting-requirements',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Significant Beneficial Owner (SBO) Reporting Requirements',
    description: 'A practical guide to Section 90 SBO identification, the 10% threshold, and Form BEN-1/BEN-2 filing.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Significant Beneficial Owner (SBO) Reporting Requirements', 'significant-beneficial-owner-sbo-reporting-requirements')

const articleLd = buildArticleLd({
  headline: 'Significant Beneficial Owner (SBO) Reporting Requirements',
  description: 'Who qualifies as a Significant Beneficial Owner under Section 90 of the Companies Act, the 10% threshold, and the Form BEN-1/BEN-2 filing process.',
  datePublished: '2026-10-09',
  slug: 'significant-beneficial-owner-sbo-reporting-requirements',
})

const faqs: [string, string][] = [
  [
    'What is a Significant Beneficial Owner (SBO)?',
    'An SBO is an individual who, acting alone or with others, holds a significant stake or exercises significant control or influence over a company, even though the shares may be legally held in the name of another entity or a layered chain of entities. Section 90 of the Companies Act, 2013 requires every applicable company to identify these individuals and report them, so that the real person behind the shareholding is on record, not just the immediate registered shareholder.',
  ],
  [
    'What is the SBO threshold?',
    'The threshold is 10% or more of shares, voting rights, or the right to receive or participate in dividend or other distributions, held directly or indirectly, or the exercise of significant influence or control through other means even below that shareholding percentage. This 10% threshold replaced the original 25% threshold under an amendment to the SBO Rules, bringing the Indian framework closer to international beneficial-ownership disclosure standards.',
  ],
  [
    'What is the difference between Form BEN-1 and Form BEN-2?',
    'Form BEN-1 is filed by the individual: it is the declaration an SBO gives to the company disclosing their beneficial interest, generally within 30 days of becoming an SBO or of any change in that status. Form BEN-2 is filed by the company: within 30 days of receiving a BEN-1 declaration, the company must file a return with the Registrar of Companies disclosing the SBO details captured in that declaration.',
  ],
  [
    'What happens if a company does not comply with SBO reporting?',
    'Non-compliance carries monetary penalties for both the company and the individual SBO, and a company can also serve a notice under Section 90(5) on any member reasonably believed to be an SBO who has not made the required disclosure; continued non-response can lead to restrictions on the relevant shares. Beyond the direct penalty exposure, an incomplete SBO register is a red flag in due diligence during fundraising, M&A, or bank credit checks.',
  ],
  [
    'Does every company have to comply with SBO rules?',
    'Most companies with a shareholding structure that includes indirect holdings, layered entities, or trusts need to check applicability, but certain categories, such as government companies and specified exempted entities, are excluded under the rules. Even a company with a simple, fully Indian, directly-held shareholder base should still verify whether any shareholder itself holds shares on behalf of another person, since indirect holding is exactly what the SBO framework is designed to surface.',
  ],
  [
    'Who is responsible for identifying SBOs within a company?',
    'The company itself carries the primary obligation: it must take reasonable steps to find out if there is any individual who is an SBO, including by giving notice under Section 90(5) to members it reasonably believes may qualify. Relying solely on shareholders to proactively self-declare without the company taking its own steps to identify them does not satisfy the compliance requirement.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function SignificantBeneficialOwnerSBOBlog() {
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
                Significant Beneficial Owner (SBO) Reporting Requirements
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>October 9, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>An <strong>SBO</strong> is the real individual behind a shareholding, even when shares are legally held through another entity or a chain of entities.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The threshold is <strong>10% or more</strong> of shares, voting rights, or dividend rights, direct or indirect, or significant control/influence even below that.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The individual files <strong>Form BEN-1</strong> with the company; the company then files <strong>Form BEN-2</strong> with the Registrar of Companies, each within 30 days.</li>
                    <li style={{ marginBottom: 0 }}>Non-compliance carries monetary penalties for both the company and the SBO, and shows up as a gap in due diligence checks.</li>
                  </ul>
                </div>
                <p>Most shareholding disclosures stop at whoever is named in the register of members. The Significant Beneficial Owner framework under Section 90 of the Companies Act, 2013 goes one layer deeper: it requires companies to identify and report the actual individuals who ultimately own or control the company, even when that ownership is routed through holding companies, LLPs, partnership firms, or trusts. For companies with any layered or indirect shareholding, this is not optional paperwork; it is a distinct compliance obligation with its own filings, deadlines, and penalties.</p>

                <h2>Who Qualifies as an SBO</h2>
                <p>An individual is a Significant Beneficial Owner in relation to a reporting company if, acting alone or together with others, or through one or more persons or trusts, they hold at least the specified threshold of shares, voting rights, or the right to receive or participate in dividends or other distributions, or they exercise significant influence or control over the company through means other than direct shareholding. The key idea is indirect holding: if Individual A owns a holding company that in turn owns shares in the reporting company, A may be the SBO of the reporting company even though A&apos;s name never appears in that company&apos;s own share register.</p>
                <p>This is precisely why the exercise cannot be limited to reading the register of members. A company with only direct, individually-held Indian shareholders below the threshold may still need to verify layered holdings, and every company should document the analysis, not assume it does not apply.</p>

                <h2>The 10% Threshold</h2>
                <p><strong>The applicable threshold under the current SBO Rules is 10% or more</strong> of shares, voting rights, or the right to receive or participate in dividend or other distribution, held directly or indirectly. This replaced the original 25% threshold set when the SBO Rules were first notified; the reduction was made specifically to align India&apos;s beneficial-ownership disclosure regime with international standards used by financial-crime and anti-money-laundering frameworks. Control or significant influence exercised through means other than shareholding, such as the right to appoint a majority of directors or to direct financial and operating decisions, can also trigger SBO status even where the shareholding percentage itself is below 10%.</p>

                <h2>Form BEN-1 and Form BEN-2: The Two-Step Filing</h2>
                <p>SBO compliance works as a two-step disclosure chain between the individual and the company:</p>
                <ul>
                  <li><strong>Form BEN-1</strong> is filed by the individual who qualifies as an SBO, declaring their beneficial interest to the company. This is generally required within 30 days of acquiring SBO status, and again whenever there is a change in that status.</li>
                  <li><strong>Form BEN-2</strong> is filed by the company with the Registrar of Companies, within 30 days of receiving a BEN-1 declaration, reporting the SBO&apos;s details on record.</li>
                  <li>The company is also required to maintain a <strong>register of significant beneficial owners</strong> capturing this information, available for inspection as prescribed.</li>
                </ul>
                <p>The obligation does not rest passively on the individual to come forward. A company is required to take reasonable steps to identify whether any person qualifies as an SBO, including issuing a notice under Section 90(5) to any member it reasonably believes may be, or may know the identity of, an SBO. If that member fails to respond within the specified time, or gives an unsatisfactory answer, the company can apply to the Tribunal for an order restricting the rights attached to the relevant shares, including suspension of voting rights and dividend rights, until the disclosure is made.</p>

                <h2>Why This Gets Missed</h2>
                <p>SBO non-compliance is common in practice for a few recurring reasons: companies assume it only applies to large or foreign-owned entities, holding structures get restructured (a new holding company added, shares transferred to a family trust) without anyone revisiting the SBO analysis, and the BEN-2 filing gets treated as a one-time exercise rather than something to revisit whenever shareholding or control changes. This matters especially for companies going through <Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>foreign subsidiary registration</Link> or any structure involving a holding entity, where indirect ownership through a parent is the norm rather than the exception, and for companies preparing for <Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>fundraising due diligence</Link>, where investors routinely check the SBO register as part of their compliance review.</p>
                <p>Penalties for default apply to both the company (and its officers in default) and to the individual SBO who fails to make the required declaration, in addition to the Tribunal&apos;s power to restrict share rights. Given that exposure, the practical approach is to run an SBO applicability check whenever the shareholding structure is set up or changes, rather than treating it as an afterthought alongside the routine <Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>annual ROC filings</Link>.</p>

                <h2>A Practical Compliance Checklist</h2>
                <ul>
                  <li>Map the full shareholding chain, including any holding companies, LLPs, partnership firms, or trusts that hold shares in the company.</li>
                  <li>Identify every individual who crosses the 10% threshold, directly or indirectly, or who exercises significant control or influence through other means.</li>
                  <li>Issue Section 90(5) notices to members reasonably believed to hold on behalf of, or to know the identity of, an SBO who has not declared.</li>
                  <li>Collect Form BEN-1 declarations and file Form BEN-2 with the ROC within the prescribed timelines.</li>
                  <li>Maintain and keep the register of SBOs current, and revisit the analysis whenever the shareholding or control structure changes.</li>
                </ul>
                <p>SBO reporting sits alongside the company&apos;s other corporate law obligations, and it is worth reviewing as part of a company&apos;s broader <Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>compliance and company secretarial support</Link>, particularly whenever new shareholders, holding entities, or investors are introduced into the structure.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Not sure if your company has an SBO to report?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We map shareholding structures, identify SBOs, and handle Form BEN-1/BEN-2 filings end to end.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20question%20about%20SBO%20reporting%20for%20my%20company." target="_blank" rel="noopener noreferrer" className="btn btn-outline">Ask on WhatsApp</a>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc" style={{ color: 'var(--primary)', fontWeight: 600 }}>Annual ROC Filing: AOC-4, MGT-7 &amp; DIR-3 KYC</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foreign Subsidiary Registration in India: The FDI Route</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/due-diligence-checklist-startup-fundraising" style={{ color: 'var(--primary)', fontWeight: 600 }}>Due Diligence Checklist for Startup Fundraising</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our Company Secretarial &amp; Compliance Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

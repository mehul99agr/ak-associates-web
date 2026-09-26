import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Corporate Tax Rates in India: Domestic Company vs New Manufacturing Regime',
  description: 'Comparing Section 115BAA (22% concessional rate for domestic companies) with Section 115BAB (15% rate for new manufacturing companies), the conditions, exemption trade-offs, and effective tax rates for FY 2026-27.',
  keywords: [
    'section 115BAA domestic company tax rate', 'section 115BAB new manufacturing company',
    'corporate tax rate India FY 2026-27', '22% concessional tax rate company', '15% manufacturing company tax rate',
    'domestic company tax rate comparison', 'form 10-IC form 10-ID',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg' },
  openGraph: {
    title: 'Corporate Tax Rates in India: Domestic Company vs New Manufacturing Regime',
    description: 'Section 115BAA (22%) vs Section 115BAB (15%): conditions, exemption trade-offs, and effective tax rates compared.',
    url: 'https://agrawalkhandelwal.com/blog/corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Tax Rates in India: Domestic Company vs New Manufacturing Regime',
    description: 'Section 115BAA (22%) vs Section 115BAB (15%): which concessional corporate tax regime fits your company.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Corporate Tax Rates in India: Domestic Company vs New Manufacturing Regime', 'corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg')

const articleLd = buildArticleLd({
  headline: 'Corporate Tax Rates in India: Domestic Company vs New Manufacturing Regime',
  description: 'How the Section 115BAA 22% concessional rate for domestic companies compares with the Section 115BAB 15% rate for new manufacturing companies, including conditions, exemption trade-offs, and effective rates.',
  datePublished: '2026-08-26',
  slug: 'corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg',
})

const faqs: [string, string][] = [
  [
    'What is the tax rate under Section 115BAA?',
    'Section 115BAA gives any domestic company the option of a concessional 22% base tax rate, without the surcharge/turnover-linked tiers of the regular regime. With the applicable 10% surcharge and 4% health and education cess, the effective rate works out to approximately 25.17%. The trade-off is that the company gives up most exemptions and deductions, including those under Chapter VI-A (other than a couple of narrow exceptions) and additional depreciation.',
  ],
  [
    'What is the tax rate under Section 115BAB and who can use it?',
    'Section 115BAB offers a lower 15% base rate (effective roughly in the mid-to-high teens after surcharge and cess) but only to new domestic manufacturing companies incorporated on or after October 1, 2019, that commence manufacturing by the deadline prescribed in the section, don\'t use previously used plant and machinery beyond specified limits, and aren\'t formed by splitting up or reconstructing an existing business. It is narrower and stricter than Section 115BAA, but the rate is meaningfully lower.',
  ],
  [
    'Can a company switch back to the old regime after opting for 115BAA or 115BAB?',
    'Once exercised, the option under either section is generally irrevocable for that company going forward; a company cannot opt in one year, revert to the old regime the next, and opt back in later. This makes the decision a structural one that should account for a multi-year view of profitability, capex plans, and available deductions, not just the current year\'s numbers.',
  ],
  [
    'Do 115BAA and 115BAB companies still pay Minimum Alternate Tax (MAT)?',
    'No. Companies opting for either Section 115BAA or Section 115BAB are exempt from MAT under Section 115JB, which is one of the practical benefits of these regimes beyond the headline rate itself, since MAT can otherwise apply even when book profit exceeds tax computed under other provisions.',
  ],
  [
    'How do I know whether 115BAA or the regular tax regime works out better for my company?',
    'It depends entirely on how much your company relies on exemptions and deductions currently available under the regular regime, such as accumulated brought-forward losses tied to exemptions, additional depreciation, or specific tax holidays. A company with few deductions to give up is usually better off under Section 115BAA; one with substantial deductions still in play may find the regular regime, or a delayed switch, more efficient for a few more years. This needs an actual side-by-side computation, not a rule of thumb, since it varies by company.',
  ],
  [
    'Have these sections been renumbered under the Income Tax Act 2025?',
    'The concessional corporate tax provisions have been renumbered under the Income Tax Act 2025 along with the rest of the Act, but a reliably corroborated new-Act section number for 115BAA and 115BAB specifically was not available at the time of writing. This guide refers to them by their familiar old-Act numbers throughout; confirm the current section citation with your CA before filing Form 10-IC or Form 10-ID.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function CorporateTaxRatesBlog() {
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
              <span className="section-badge">Corporate Tax</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Corporate Tax Rates in India: Domestic Company vs New Manufacturing Regime
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 26, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 115BAA:</strong> 22% base rate for any domestic company (effective ~25.17% with surcharge and cess), in exchange for giving up most exemptions and deductions.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 115BAB:</strong> 15% base rate, but only for new manufacturing companies incorporated on or after October 1, 2019, meeting stricter conditions on plant and machinery and business formation.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Both options are exempt from MAT under Section 115JB, and once exercised, the choice is generally irrevocable.</li>
                    <li style={{ marginBottom: 0 }}>The right regime depends on how much value a company&apos;s existing deductions are worth versus the flat lower rate; this needs an actual computation, not a default choice.</li>
                  </ul>
                </div>

                <p>India runs three parallel corporate tax tracks for domestic companies: the regular regime with its exemptions and higher headline rates, the Section 115BAA concessional regime open to any domestic company, and the Section 115BAB regime reserved for new manufacturing companies. Choosing between them is one of the more consequential, and irreversible, tax decisions a company makes, so it&apos;s worth understanding exactly what each one trades away.</p>

                <h2>Section 115BAA: The General Concessional Regime</h2>
                <p>Any domestic company, regardless of when it was incorporated or what business it carries on, can opt into <strong>Section 115BAA</strong> and pay tax at a flat <strong>22%</strong> base rate. With the standard 10% surcharge and 4% health and education cess layered on, the effective rate comes to approximately <strong>25.17%</strong>, applied uniformly without the turnover-linked surcharge tiers that complicate the regular regime.</p>
                <p>The condition attached is that the company must forgo most exemptions and incentive deductions under the Act, including Chapter VI-A deductions (other than a narrow set such as the employer&apos;s contribution to a notified pension scheme), additional depreciation, and various investment-linked incentives. Once a company opts in by filing <strong>Form 10-IC</strong>, MAT under Section 115JB no longer applies, and the option, once exercised, generally cannot be withdrawn in a later year. This makes 115BAA most attractive to companies that were never leaning heavily on these deductions in the first place, or whose deduction-driven tax savings under the old regime are smaller than the rate reduction itself.</p>

                <h2>Section 115BAB: The Manufacturing-Specific Regime</h2>
                <p><strong>Section 115BAB</strong> is narrower and stricter, but the rate is lower still: a <strong>15%</strong> base rate for new domestic manufacturing companies. Eligibility requires the company to be incorporated on or after <strong>October 1, 2019</strong>, and to commence manufacturing or production by the statutory deadline prescribed in the section. The company also cannot be formed by splitting up or reconstructing an existing business (other than in specified reorganisation scenarios), and cannot use previously-used plant and machinery beyond a limited threshold, along with a few other conditions around business type exclusions.</p>
                <p>Companies opting for 115BAB file <strong>Form 10-ID</strong>, and like 115BAA, the option is irrevocable once exercised and MAT exemption applies. Because the eligibility bar is higher, this regime is really aimed at genuinely new manufacturing capacity, not an existing company simply rebranding an activity as manufacturing to access the lower rate.</p>

                <h2>Side-by-Side: 115BAA vs 115BAB</h2>
                <ul>
                  <li><strong>Base rate:</strong> 115BAA is 22%; 115BAB is 15%, a meaningful gap for a company that qualifies for both.</li>
                  <li><strong>Eligibility:</strong> 115BAA is open to any domestic company; 115BAB is restricted to new manufacturing companies meeting incorporation-date and plant-and-machinery conditions.</li>
                  <li><strong>Deductions forgone:</strong> both require giving up most Chapter VI-A deductions and additional depreciation; the trade-off structure is similar even though the rates differ.</li>
                  <li><strong>MAT:</strong> neither regime attracts MAT under Section 115JB.</li>
                  <li><strong>Reversibility:</strong> both options are effectively a one-way door once exercised, so the decision should be modelled over several years of expected profitability, not just the year of election.</li>
                </ul>

                <h2>Making the Choice: What Actually Drives the Decision</h2>
                <p>The regular regime, with its higher headline rates but full access to exemptions and deductions, can still work out cheaper for a company that has substantial brought-forward tax holiday benefits, significant additional depreciation on recent capex, or other deduction-heavy positions still in play. For a company with few such deductions, 115BAA&apos;s flat 22% (or 115BAB&apos;s 15%, if genuinely eligible as a new manufacturer) is usually the better outcome, both for the lower rate and for the simplicity of not tracking a deduction-heavy computation every year.</p>
                <p>Because the election is irrevocable, this isn&apos;t a decision to make purely off the current year&apos;s numbers. A multi-year projection, factoring in planned capex, expected profitability, and any deductions currently in the pipeline, should sit behind the choice of Form 10-IC, Form 10-ID, or staying on the regular regime. Companies planning a foreign subsidiary or FDI-route manufacturing entity in India should factor the 115BAB rate into their entity structuring from day one; see our <Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>foreign subsidiary registration guide</Link> for the incorporation side of that decision.</p>
              </div>

              <PostCTA
            heading="Deciding between the regular regime, 115BAA, or 115BAB?"
            description="We run the side-by-side computation for your company&apos;s actual numbers before you file Form 10-IC or Form 10-ID."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/mat-minimum-alternate-tax-vs-amt-applicability-and-computation" style={{ color: 'var(--primary)', fontWeight: 600 }}>MAT vs AMT: Applicability &amp; Computation</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/foreign-subsidiary-registration-india-fdi" style={{ color: 'var(--primary)', fontWeight: 600 }}>Foreign Subsidiary Registration in India (FDI Route)</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/llp-vs-private-limited-comparison-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>LLP vs Private Limited: Which Structure Fits</Link></li>
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

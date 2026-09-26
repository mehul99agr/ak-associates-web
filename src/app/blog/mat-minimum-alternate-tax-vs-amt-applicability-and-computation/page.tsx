import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'MAT (Minimum Alternate Tax) vs AMT: Applicability & Computation',
  description: 'How Minimum Alternate Tax under Section 115JB applies to companies at 15% of book profit, how Alternate Minimum Tax under Section 115JC applies to non-corporate taxpayers, and how MAT/AMT credit works.',
  keywords: [
    'minimum alternate tax MAT', 'section 115JB MAT rate', 'alternate minimum tax AMT section 115JC',
    'MAT credit carry forward', 'MAT vs AMT difference', 'book profit MAT computation', 'AMT non-corporate taxpayers',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/mat-minimum-alternate-tax-vs-amt-applicability-and-computation' },
  openGraph: {
    title: 'MAT (Minimum Alternate Tax) vs AMT: Applicability & Computation',
    description: 'MAT under Section 115JB for companies vs AMT under Section 115JC for non-corporates: rates, computation, and credit carry-forward.',
    url: 'https://agrawalkhandelwal.com/blog/mat-minimum-alternate-tax-vs-amt-applicability-and-computation',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAT (Minimum Alternate Tax) vs AMT: Applicability & Computation',
    description: 'MAT for companies vs AMT for non-corporate taxpayers: who it applies to and how it is computed.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('MAT (Minimum Alternate Tax) vs AMT: Applicability & Computation', 'mat-minimum-alternate-tax-vs-amt-applicability-and-computation')

const articleLd = buildArticleLd({
  headline: 'MAT (Minimum Alternate Tax) vs AMT: Applicability & Computation',
  description: 'Minimum Alternate Tax under Section 115JB for companies versus Alternate Minimum Tax under Section 115JC for non-corporate taxpayers: applicability, rates, book-profit computation, and credit carry-forward.',
  datePublished: '2026-08-26',
  slug: 'mat-minimum-alternate-tax-vs-amt-applicability-and-computation',
})

const faqs: [string, string][] = [
  [
    'What is the current MAT rate under Section 115JB?',
    'MAT is levied at 15% of book profit (plus applicable surcharge and health and education cess), a rate that has been in effect since AY 2020-21 after being reduced from the earlier 18.5%. Every company, other than those that have opted into a concessional regime like Section 115BAA or 115BAB, is liable to pay MAT if the tax computed under normal Income Tax Act provisions is less than 15% of book profit.',
  ],
  [
    'Who is liable to pay AMT under Section 115JC?',
    'Section 115JC applies AMT to non-corporate taxpayers, including individuals, HUFs, firms, LLPs, AOPs, and BOIs, but generally only where they have claimed specified deductions (such as certain profit-linked deductions or the deduction for units in an SEZ) and their adjusted total income exceeds prescribed thresholds. A non-corporate taxpayer with no such deductions claimed typically falls outside AMT entirely, unlike MAT, which applies more broadly to companies by default.',
  ],
  [
    'What is the difference between MAT and AMT?',
    'MAT under Section 115JB applies to companies and is computed on book profit, meaning accounting profit adjusted for specified additions and deletions under the Act. AMT under Section 115JC applies to non-corporate taxpayers and is computed on adjusted total income, meaning regular taxable income added back for the specific deductions that trigger AMT applicability in the first place. The underlying purpose, ensuring a minimum tax is paid despite deductions and exemptions, is the same, but the base and the taxpayer categories differ.',
  ],
  [
    'Do companies that opt for Section 115BAA or 115BAB still pay MAT?',
    'No. Companies that have exercised the option under Section 115BAA (22% concessional rate) or Section 115BAB (15% rate for new manufacturing companies) are specifically exempt from MAT under Section 115JB. This is one of the practical benefits of those regimes beyond the headline rate itself.',
  ],
  [
    'Can MAT or AMT paid in one year be claimed back in a later year?',
    'Yes, through the MAT credit (Section 115JAA) or AMT credit (Section 115JD) mechanism. The excess of MAT or AMT paid over the tax that would otherwise have been payable under normal provisions is carried forward as credit and can be set off against normal tax liability in a future year once regular tax exceeds MAT/AMT for that year, subject to the carry-forward time limit prescribed under the Act.',
  ],
  [
    'Have Sections 115JB and 115JC been renumbered under the Income Tax Act 2025?',
    'MAT and AMT provisions have been renumbered along with the rest of the Act under the Income Tax Act 2025, but a reliably corroborated new-Act section number for 115JB and 115JC specifically was not available at the time of writing. This guide uses the familiar old-Act numbers throughout; confirm the current section citation with your CA before relying on it for a specific filing.',
  ],
]

const faqLd = buildFaqLd(faqs)


export default function MatVsAmtBlog() {
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
                MAT (Minimum Alternate Tax) vs AMT: Applicability &amp; Computation
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
                    <li style={{ marginBottom: '0.4rem' }}><strong>MAT (Section 115JB)</strong> applies to companies at <strong>15% of book profit</strong>, unless the company has opted for the Section 115BAA or 115BAB concessional regime, which is exempt from MAT entirely.</li>
                    <li style={{ marginBottom: '0.4rem' }}><strong>AMT (Section 115JC)</strong> applies to non-corporate taxpayers, but generally only when specified deductions have been claimed and adjusted total income crosses prescribed thresholds, unlike MAT&apos;s broader default applicability to companies.</li>
                    <li style={{ marginBottom: '0.4rem' }}>MAT is computed on book profit (accounting profit adjusted under the Act); AMT is computed on adjusted total income (taxable income added back for specific deductions).</li>
                    <li style={{ marginBottom: 0 }}>Excess MAT or AMT paid can be carried forward as credit under Section 115JAA or 115JD and set off against future normal tax liability.</li>
                  </ul>
                </div>

                <p>Both MAT and AMT exist for the same underlying reason: to make sure a taxpayer with substantial exemptions and deductions still pays some minimum tax, rather than reducing taxable income to near zero through legitimate but aggressive use of the deduction provisions. MAT does this for companies; AMT does the equivalent for non-corporate taxpayers. The mechanics, the base each is computed on, and who actually falls within scope, differ meaningfully between the two.</p>

                <h2>MAT Under Section 115JB: How It Applies to Companies</h2>
                <p>Every company is potentially liable for MAT if the income tax payable on its total income, computed under the normal provisions of the Act, works out to less than <strong>15% of its book profit</strong> (plus applicable surcharge and health and education cess). Book profit starts from the company&apos;s net profit as per its profit and loss account prepared under the Companies Act, then applies a defined list of additions (certain provisions, disallowed expenses, specific reserves) and deletions (specified exempt income, brought-forward business losses or unabsorbed depreciation, whichever is lower) laid down in Section 115JB itself.</p>
                <p>This 15% rate has been in place since AY 2020-21; it was reduced from an earlier <strong>18.5%</strong> as part of a broader corporate tax relief package. MAT does not apply to companies that have opted for the Section 115BAA (22%) or Section 115BAB (15% for new manufacturing companies) concessional regimes, since those regimes are explicitly carved out of Section 115JB. For a company weighing whether to opt into one of those regimes, MAT exemption is a real part of the calculation, not just the headline rate difference; see our <Link href="/blog/corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg" style={{ color: 'var(--primary)', fontWeight: 600 }}>115BAA vs 115BAB comparison</Link> for the full picture.</p>

                <h2>AMT Under Section 115JC: The Non-Corporate Equivalent</h2>
                <p><strong>Section 115JC</strong> extends a similar minimum-tax concept to non-corporate taxpayers: individuals, HUFs, firms, LLPs, AOPs, BOIs, and certain artificial juridical persons. Unlike MAT, AMT does not apply to every non-corporate taxpayer by default. It is generally triggered only where the taxpayer has claimed specified deductions, such as certain profit-linked deductions under Chapter VI-A or the deduction available to units in a Special Economic Zone, and where adjusted total income exceeds the threshold prescribed in the section. A non-corporate taxpayer who hasn&apos;t claimed any of the specified deductions typically stays outside AMT&apos;s scope entirely.</p>
                <p>Where AMT does apply, it is computed on <strong>adjusted total income</strong> rather than book profit; this means starting from the taxpayer&apos;s regular total income and adding back the specific deductions that made AMT relevant in the first place, then comparing the resulting AMT liability against tax computed under normal provisions and paying whichever is higher.</p>

                <h2>MAT vs AMT: Side by Side</h2>
                <ul>
                  <li><strong>Who it applies to:</strong> MAT applies broadly to companies; AMT applies narrowly to non-corporate taxpayers claiming specified deductions above a threshold.</li>
                  <li><strong>Computation base:</strong> MAT uses book profit derived from the profit and loss account; AMT uses adjusted total income derived from regular taxable income.</li>
                  <li><strong>Current rate:</strong> MAT is 15% of book profit; AMT rates and thresholds are set separately under Section 115JC and should be confirmed for the specific taxpayer category and year.</li>
                  <li><strong>Exemptions:</strong> companies on the Section 115BAA/115BAB concessional regimes are exempt from MAT; non-corporate taxpayers with no specified deductions claimed generally fall outside AMT without needing a formal exemption.</li>
                  <li><strong>Credit mechanism:</strong> MAT credit carries forward under Section 115JAA; AMT credit carries forward under Section 115JD, each set off against future years&apos; normal tax once it exceeds MAT/AMT for that year.</li>
                </ul>

                <h2>MAT and AMT Credit: Getting the Money Back</h2>
                <p>Neither MAT nor AMT is a permanent extra cost by design; both build in a credit mechanism so the additional tax paid in a low-book-profit or high-deduction year isn&apos;t simply lost. The excess of MAT (or AMT) paid over what would have been payable under normal provisions is carried forward as credit, available for set-off in a future year once the taxpayer&apos;s normal tax liability exceeds the MAT/AMT figure for that year, subject to the carry-forward period prescribed under the Act. Tracking this credit accurately year over year, and factoring it into cash flow and tax planning rather than treating each year&apos;s MAT/AMT payment as a sunk cost, is a routine but easily overlooked part of corporate tax compliance, particularly for companies with volatile book profit due to depreciation timing, provisions, or one-off accounting entries.</p>
                <p>For companies weighing whether staying on the regular regime (with MAT exposure) or shifting to a concessional, MAT-exempt regime makes more sense, this needs to be modelled alongside the broader rate comparison covered in our <Link href="/blog/corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg" style={{ color: 'var(--primary)', fontWeight: 600 }}>domestic company tax rate guide</Link>, since the MAT credit balance already accumulated can itself be a reason to delay switching regimes in a given year.</p>
              </div>

              <PostCTA
            heading="Not sure if MAT or AMT applies to you?"
            description="We compute book profit and adjusted total income, track your MAT/AMT credit balance, and plan regime elections around it."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/corporate-tax-rates-in-india-domestic-company-vs-new-manufacturing-reg" style={{ color: 'var(--primary)', fontWeight: 600 }}>Corporate Tax Rates: Domestic Company vs New Manufacturing Regime</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tax-audit-section-44ab-turnover-limits-fy-2026-27" style={{ color: 'var(--primary)', fontWeight: 600 }}>Section 44AB Tax Audit Turnover Limits FY 2026-27</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/set-off-carry-forward-losses-income-tax" style={{ color: 'var(--primary)', fontWeight: 600 }}>Set-Off &amp; Carry Forward of Losses</Link></li>
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

import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: { absolute: 'Dividend Distribution & Taxation: Company and Shareholder Perspective' },
  description: 'How dividends are taxed in India after the abolition of Dividend Distribution Tax: shareholder-level taxability, TDS under Section 194, and what companies must do at the time of payout.',
  keywords: [
    'dividend distribution tax abolished', 'dividend taxation in shareholders hands', 'section 194 TDS on dividend',
    'DDT abolition India', 'dividend income tax India', 'TDS on dividend for resident shareholders',
    'dividend tax rate FY 2026-27', 'section 195 dividend NRI',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/dividend-distribution-and-taxation-company-and-shareholder-perspective' },
  openGraph: {
    title: 'Dividend Distribution & Taxation: Company and Shareholder Perspective',
    description: 'Dividend taxability in the shareholder\'s hands, TDS under Section 194, and what companies must do at payout, post-DDT abolition.',
    url: 'https://agrawalkhandelwal.com/blog/dividend-distribution-and-taxation-company-and-shareholder-perspective',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dividend Distribution & Taxation: Company and Shareholder Perspective',
    description: 'How dividends are taxed in India today, from both the company\'s and the shareholder\'s side.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Dividend Distribution & Taxation: Company and Shareholder Perspective', 'dividend-distribution-and-taxation-company-and-shareholder-perspective')

const articleLd = buildArticleLd({
  headline: 'Dividend Distribution & Taxation: Company and Shareholder Perspective',
  description: 'Dividend taxation since the abolition of DDT, taxability in the shareholder\'s hands, TDS under Section 194, and the company\'s compliance obligations at payout.',
  datePublished: '2026-08-27',
  slug: 'dividend-distribution-and-taxation-company-and-shareholder-perspective',
})

const faqs: [string, string][] = [
  [
    'Is Dividend Distribution Tax (DDT) still applicable?',
    'No. DDT was abolished with effect from April 1, 2020 (Finance Act 2020). Since then, companies do not pay a distribution tax before paying out dividends; instead, the dividend is taxable directly in the hands of the shareholder receiving it, at their applicable slab rate or the rate applicable to their category of assessee.',
  ],
  [
    'At what rate is dividend income taxed for a resident individual shareholder?',
    'There is no special concessional rate for dividend income received by a resident individual; it is added to the shareholder\'s total income and taxed at their applicable slab rate under the regular income tax slabs. This is different from long-term capital gains on shares, which carry their own concessional rate structure.',
  ],
  [
    'What is the TDS rate on dividends under Section 194?',
    'A company paying dividend to a resident shareholder must deduct TDS under Section 194 if the aggregate dividend paid to that shareholder in a financial year exceeds the prescribed threshold (Rs 10,000, revised upward from the original Rs 5,000 by the Finance Act 2025). Where deduction applies, the standard rate is 10% of the dividend amount, provided the shareholder has furnished a valid PAN; a higher rate applies if PAN is not furnished or the shareholder is otherwise subject to a higher TDS rate under other provisions.',
  ],
  [
    'How is dividend paid to an NRI shareholder taxed?',
    'Dividend paid to a non-resident shareholder is subject to TDS under Section 195 rather than Section 194, generally at 20% (plus applicable surcharge and cess) unless a lower rate is available and claimed under the relevant Double Taxation Avoidance Agreement (DTAA), which typically requires the NRI to furnish a Tax Residency Certificate and Form 10F. The dividend remains taxable in the NRI\'s hands, with credit for the TDS available while filing their Indian return.',
  ],
  [
    'Can a shareholder claim any deduction against dividend income?',
    'Deductions against dividend income are narrowly restricted. Only interest expense incurred to earn the dividend is allowed as a deduction, and it is capped at 20% of the dividend income for that year; no deduction is available for any other expense connected with earning the dividend.',
  ],
  [
    'Does a company still need to maintain any compliance around dividend payout after DDT abolition?',
    'Yes. Even though the company no longer pays DDT, it must still deduct TDS under Section 194/195 as applicable, deposit it within the prescribed timeline, issue Form 16A to shareholders, and report the dividend paid and tax deducted through its TDS returns. The Companies Act 2013 requirements around declaring dividend out of profits, transferring unpaid dividend to the Unpaid Dividend Account, and eventual transfer to the Investor Education and Protection Fund also continue unchanged.',
  ],
]

const faqLd = buildFaqLd(faqs)

const bookingLink = BOOKING_LINK

export default function DividendDistributionTaxationBlog() {
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
                Dividend Distribution &amp; Taxation: Company and Shareholder Perspective
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 27, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Dividend Distribution Tax (DDT) was abolished from April 1, 2020.</strong> Dividends are now taxed directly in the shareholder&apos;s hands, not at the company level.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Resident individual shareholders pay tax on dividend income at their <strong>applicable slab rate</strong>, with no concessional rate.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Companies must deduct <strong>TDS under Section 194</strong> at 10% once dividend to a shareholder crosses the prescribed threshold in a financial year.</li>
                    <li style={{ marginBottom: 0 }}>NRI shareholders are subject to TDS under <strong>Section 195</strong>, typically at 20% plus surcharge/cess, unless a lower DTAA rate is claimed.</li>
                  </ul>
                </div>

                <p>Until March 2020, a company declaring dividend paid a Dividend Distribution Tax before the payout reached shareholders, and the dividend itself was largely tax-free in the recipient&apos;s hands. That system was scrapped by the Finance Act 2020, and the shift has real consequences for how companies plan payouts and how shareholders, particularly high-slab individuals and NRIs, plan their tax exposure. This guide covers both sides: what the company must do, and what the shareholder owes.</p>

                <h2>Why DDT Was Abolished and What Replaced It</h2>
                <p><strong>Dividend Distribution Tax stood abolished with effect from April 1, 2020.</strong> Under the old regime, the company paid DDT on the dividend amount before distribution, and the dividend was exempt in the shareholder&apos;s hands (subject to a separate additional tax for shareholders receiving more than a specified amount). The stated rationale for the switch was progressivity: a flat DDT rate meant a small investor and a high-net-worth investor bore the same effective distribution tax, whereas taxing dividend as ordinary income in the recipient&apos;s hands means the tax burden now scales with the shareholder&apos;s own slab rate.</p>
                <p>The practical effect: companies save the DDT outflow at declaration, but every shareholder receiving dividend now needs to account for it as income when filing their own return, and companies have picked up a fresh TDS compliance obligation they did not previously carry on dividend payouts.</p>

                <h2>Taxability in the Shareholder&apos;s Hands</h2>
                <p>Dividend income is classified under &quot;Income from Other Sources&quot; for most shareholders and is added to their total income for the year. <strong>There is no special concessional rate</strong>: a resident individual pays tax on dividend income at whatever slab rate applies to their total income, which for shareholders in the higher tax brackets can mean a materially higher effective rate than the flat DDT that used to apply at the company level.</p>
                <p>Deductions against dividend income are deliberately narrow. Only interest expense incurred to earn the dividend, for instance interest on a loan taken to purchase the shares, is deductible, and even that is capped at 20% of the dividend income for the year. No deduction is available for any other cost associated with earning or collecting the dividend, such as collection charges or general investment advisory fees.</p>
                <p>Companies and other entities holding shares as a category of assessee (firms, LLPs, HUFs, trusts) are taxed on dividend income according to the rules applicable to their category, generally also without a concessional rate specific to dividends.</p>

                <h2>TDS Under Section 194: The Company&apos;s Obligation</h2>
                <p>A domestic company paying dividend to a resident shareholder must deduct tax at source under <strong>Section 194</strong> once the aggregate dividend paid to that shareholder in a financial year crosses the prescribed threshold. Where TDS applies, the standard rate is 10% of the dividend amount if the shareholder has furnished a valid PAN; a higher rate applies under Section 206AA if PAN is not available. The company deposits this TDS with the government, issues Form 16A to the shareholder as proof, and reports the deduction in its quarterly TDS returns.</p>
                <p>For shareholders who are non-resident, the company instead deducts TDS under <strong>Section 195</strong>, typically at 20% plus applicable surcharge and cess on the gross dividend, unless the shareholder furnishes a Tax Residency Certificate and Form 10F to claim a lower treaty rate under the relevant DTAA. Many DTAAs India has signed provide for a lower withholding rate on dividends (commonly in the 5-15% range depending on the treaty and the shareholder&apos;s shareholding percentage), so NRI shareholders receiving significant dividend income should check their specific treaty position rather than assume the domestic 20% rate is final.</p>
                <p>Either way, TDS deducted is not the final tax; it is a credit against the shareholder&apos;s actual tax liability computed at their slab rate (or treaty rate, for NRIs) when they file their return. A shareholder in a lower slab bracket may find the TDS deducted exceeds their actual liability and become entitled to a refund.</p>

                <h2>What the Company Must Still Do at Payout</h2>
                <p>Even without DDT, dividend payout remains a compliance event for the company, not just a cash transaction:</p>
                <ul>
                  <li>Dividend can only be declared out of current or accumulated profits (or, for final dividend, as recommended by the Board and approved by shareholders at the AGM), consistent with the Companies Act 2013 provisions governing dividend declaration.</li>
                  <li>TDS must be deducted at the time of payment or credit to the shareholder&apos;s account, whichever is earlier, and deposited within the statutory timeline.</li>
                  <li>Unclaimed or unpaid dividend must be transferred to a separate Unpaid Dividend Account within the prescribed period, and amounts remaining unclaimed for seven years must eventually be transferred to the Investor Education and Protection Fund (IEPF), along with the corresponding shares in certain cases.</li>
                  <li>Form 16A must be issued to every shareholder from whom TDS was deducted, and the deduction reported in the company&apos;s TDS returns.</li>
                </ul>

                <h2>Planning Implications</h2>
                <p>For promoters and closely held companies, the shift to shareholder-level taxation changes the calculus around dividend versus other forms of extraction such as remuneration, rent, or buyback (which carries its own distinct tax treatment; see our related guide on <Link href="/blog/buyback-of-shares-tax-implications-for-companies-and-shareholders" style={{ color: 'var(--primary)', fontWeight: 600 }}>buyback of shares taxation</Link>). A shareholder already in the highest slab bracket bears a materially different effective tax cost on dividend income today than they would have under the old DDT-plus-exempt-dividend regime, and this is worth modelling before finalising a payout policy, particularly for family-owned companies with multiple shareholder tax profiles across generations.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Planning a dividend payout or reviewing shareholder tax exposure?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help companies structure payouts correctly and help shareholders, including NRIs, plan for dividend tax and TDS credit.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/buyback-of-shares-tax-implications-for-companies-and-shareholders" style={{ color: 'var(--primary)', fontWeight: 600 }}>Buyback of Shares: Tax Implications for Companies &amp; Shareholders</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA &amp; Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-nro-interest-fd-dtaa-relief" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRO Interest &amp; FD: DTAA Relief</Link></li>
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

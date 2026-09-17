import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'NRI Life Insurance & ULIP Taxation Rules',
  description: 'Can NRIs buy Indian life insurance and ULIPs, which premium payment channels apply, when maturity proceeds are exempt under Section 10(10D), and TDS on payouts to NRIs.',
  keywords: [
    'NRI life insurance India', 'NRI ULIP taxation', 'section 10(10D) NRI', 'NRI ULIP premium NRE NRO',
    'life insurance maturity NRI TDS', 'section 194DA section 195 NRI insurance', 'ULIP premium threshold exemption',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/nri-life-insurance-and-ulip-taxation-rules' },
  openGraph: {
    title: 'NRI Life Insurance & ULIP Taxation Rules',
    description: 'Buying Indian life insurance and ULIPs as an NRI, premium payment channels, Section 10(10D) exemption thresholds, and TDS on maturity payouts.',
    url: 'https://agrawalkhandelwal.com/blog/nri-life-insurance-and-ulip-taxation-rules',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Life Insurance & ULIP Taxation Rules',
    description: 'Section 10(10D) exemption thresholds and TDS on life insurance/ULIP maturity payouts to NRIs.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('NRI Life Insurance & ULIP Taxation Rules', 'nri-life-insurance-and-ulip-taxation-rules')

const articleLd = buildArticleLd({
  headline: 'NRI Life Insurance & ULIP Taxation Rules',
  description: 'Whether NRIs can buy Indian life insurance and ULIPs, premium payment channels, Section 10(10D) exemption thresholds for ULIPs and other policies, and TDS on maturity payouts to NRIs.',
  datePublished: '2026-08-08',
  slug: 'nri-life-insurance-and-ulip-taxation-rules',
})

const faqs: [string, string][] = [
  [
    'Can NRIs buy life insurance and ULIP policies from Indian insurers?',
    'Yes. Most Indian life insurers sell policies to NRIs, though the process typically involves additional documentation (passport, visa/OCI status, overseas address proof) and some insurers restrict certain plans or apply country-specific underwriting based on the NRI\'s country of residence. It is worth confirming with the insurer upfront whether a specific plan is available for the applicant\'s country of residence.',
  ],
  [
    'Which bank account should an NRI use to pay life insurance or ULIP premiums?',
    'Premiums can be paid from an NRE account, an NRO account, or an FCNR(B) account, or through direct remittance from abroad. Using the NRE route generally keeps future maturity proceeds more easily repatriable, while NRO-funded policies may involve more documentation at the repatriation stage; this is a good point to confirm with the insurer and bank before starting the policy.',
  ],
  [
    'Is the ULIP maturity amount always tax-free under Section 10(10D)?',
    'No. For ULIPs issued on or after February 1, 2021, the maturity proceeds are exempt under Section 10(10D) only if the total annual premium across all such ULIPs held by the individual does not exceed Rs 2.5 lakh in any year of the policy term. If annual premiums exceed this threshold, the maturity gain is taxable as a capital gain rather than being exempt. Death benefits remain fully exempt regardless of the premium amount.',
  ],
  [
    'What is the premium threshold for exemption on non-ULIP life insurance policies?',
    'For non-linked (traditional) life insurance policies issued on or after April 1, 2023, Section 10(10D) exemption is denied if the total annual premium payable across all such policies exceeds Rs 5 lakh in any year of the policy term. Where this cap is breached, the maturity proceeds are taxable, though the amount attributable to the sum assured death benefit stays exempt in all cases.',
  ],
  [
    'Is TDS deducted on life insurance or ULIP maturity paid to an NRI?',
    'If the payout is fully exempt under Section 10(10D), no TDS applies. Where the payout is not exempt, and the recipient is an NRI, TDS is deducted under Section 195 rather than the resident-focused Section 194DA, generally at a materially higher effective rate on the taxable income component, with the exact rate depending on the nature of the gain and any applicable DTAA relief the policyholder claims.',
  ],
  [
    'Can an NRI reduce TDS on insurance maturity payouts using a DTAA?',
    'Yes, in principle, by submitting a Tax Residency Certificate and Form 10F to claim treaty relief, though in practice this depends on how the specific treaty characterises the payout (as insurance proceeds, capital gains, or other income) and insurers may require a lower-deduction certificate from the tax department before applying a reduced rate at source rather than adjusting it themselves.',
  ],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function NriLifeInsuranceUlipBlog() {
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
              <span className="section-badge">NRI Taxation</span>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginTop: '1rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                NRI Life Insurance &amp; ULIP Taxation Rules
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 8, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>NRIs can buy Indian life insurance and ULIPs, paying premiums via <strong>NRE, NRO, or FCNR(B)</strong> accounts.</li>
                    <li style={{ marginBottom: '0.4rem' }}>ULIPs issued after Feb 1, 2021 lose Section 10(10D) exemption if annual premium exceeds <strong>Rs 2.5 lakh</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Other life policies issued after Apr 1, 2023 lose exemption if annual premium exceeds <strong>Rs 5 lakh</strong>; death benefit stays exempt regardless.</li>
                    <li style={{ marginBottom: 0 }}>Non-exempt payouts to NRIs face TDS under <strong>Section 195</strong>, not the resident-focused Section 194DA, with DTAA relief possible.</li>
                  </ul>
                </div>

                <p>Life insurance and ULIPs remain popular with NRIs both as a protection product and, historically, as a tax-efficient savings vehicle. Two rounds of tightening; the ULIP premium cap introduced from February 2021 and the broader life insurance premium cap from April 2023; have narrowed how much of that maturity value actually comes out tax-free, and the rules apply slightly differently once an NRI's TDS treatment is layered on top. This guide walks through purchase eligibility, premium payment channels, when Section 10(10D) exemption actually applies, and TDS on payouts.</p>

                <h2>Can NRIs Buy Life Insurance and ULIPs in India?</h2>
                <p>Yes, most major Indian insurers issue life insurance and ULIP policies to NRIs, though the underwriting and documentation process is somewhat heavier than for a resident applicant. Expect to provide passport copies, visa or OCI/PIO status, overseas address proof, and sometimes additional medical or financial documentation depending on the sum assured. Two practical points worth checking before applying: not every plan is available in every country (insurers restrict certain products by country of residence due to local regulatory considerations), and some insurers apply different premium rates or exclusions for NRI policyholders based on occupation or destination country risk factors.</p>

                <h2>Which Account Should Fund the Premiums?</h2>
                <p>Premiums can be paid from an NRE account, an NRO account, an FCNR(B) account, or by direct inward remittance. The choice has downstream consequences at maturity:</p>
                <ul>
                  <li><strong>NRE-funded premiums</strong> generally keep the eventual maturity proceeds more straightforwardly repatriable abroad, since the source of funds is already established as foreign-origin.</li>
                  <li><strong>NRO-funded premiums</strong> can still be used, but repatriation of the maturity proceeds later may need more documentation to establish the tax position, similar to any other NRO-sourced repatriation.</li>
                </ul>
                <p>For a fuller comparison of how these two accounts work and their respective repatriation limits, see our <Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO guide</Link>.</p>

                <h2>Section 10(10D): When Maturity Proceeds Are Actually Exempt</h2>
                <p>Section 10(10D) is the exemption provision for life insurance and ULIP maturity or surrender proceeds. It has always carried a broad condition tying exemption to the premium not exceeding a stated percentage of the sum assured, but two more recent, product-specific premium caps now sit alongside that general rule and are the ones most policyholders actually run into:</p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead><tr><th style={thStyle}>Policy Type</th><th style={thStyle}>Issued On/After</th><th style={thStyle}>Annual Premium Threshold</th><th style={thStyle}>Effect if Exceeded</th></tr></thead>
                    <tbody>
                      <tr><td style={tdStyle}>ULIP (linked insurance plan)</td><td style={tdStyle}>February 1, 2021</td><td style={tdStyle}>Rs 2.5 lakh (aggregate across all such ULIPs)</td><td style={tdStyle}>Maturity gain taxable as capital gains; not exempt</td></tr>
                      <tr><td style={tdAltStyle}>Non-linked (traditional) life insurance</td><td style={tdAltStyle}>April 1, 2023</td><td style={tdAltStyle}>Rs 5 lakh (aggregate across all such policies)</td><td style={tdAltStyle}>Maturity proceeds taxable as income from other sources</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Two points apply across both thresholds. First, the aggregation is across all policies of that type held by the individual, not per policy; someone holding three ULIPs with combined annual premiums of Rs 3 lakh loses the exemption on all three, not just the excess. Second, the <strong>death benefit</strong> paid to nominees on the death of the life assured remains fully exempt under Section 10(10D) in every case, irrespective of how much premium was paid; these premium caps only affect maturity and surrender proceeds paid to a living policyholder.</p>
                <p>For an NRI evaluating a large-ticket ULIP or endowment plan as a savings vehicle rather than pure protection, checking the premium against these thresholds before committing to the premium amount matters more than it did a few years ago, since the tax-free positioning that made these products attractive is conditional now, not automatic.</p>

                <h2>TDS on Maturity Payouts: Different Rules for NRIs</h2>
                <p>Where the maturity or surrender proceeds are not exempt under Section 10(10D), tax must be withheld at the time of payout. For resident policyholders, this happens under Section 194DA, deducted on the income component (payout minus premiums paid), not the full payout. For NRI policyholders, the withholding instead falls under <strong>Section 195</strong>, the general TDS provision for payments to non-residents, rather than Section 194DA.</p>
                <p>This distinction matters in practice: Section 195 withholding tends to be applied at a materially higher effective rate than the resident-focused Section 194DA rate, and insurers typically deduct conservatively at source given the compliance risk of under-withholding on a non-resident payment. An NRI expecting a specific net payout should account for this before relying on the insurer's illustration, which is often built around resident tax treatment by default.</p>
                <p>NRIs can seek to reduce this withholding through Double Taxation Avoidance Agreement relief, by furnishing a Tax Residency Certificate and Form 10F, though the practical process usually requires either the insurer being willing to apply a treaty rate directly (uncommon without a lower-deduction certificate) or the policyholder claiming a refund of excess TDS when filing the Indian tax return for that year. Either way, the excess withholding is recoverable, not lost, but it does mean cash flow planning should assume the higher upfront deduction rather than the treaty-adjusted figure.</p>

                <h2>Practical Takeaways</h2>
                <ul>
                  <li>Confirm plan availability and any country-specific restrictions with the insurer before applying.</li>
                  <li>Fund premiums from NRE where repatriability of the eventual maturity proceeds is a priority.</li>
                  <li>Check aggregate annual premium across all ULIPs (Rs 2.5 lakh) or all other life policies (Rs 5 lakh) issued after the respective cutoff dates before assuming maturity proceeds will be tax-free.</li>
                  <li>Budget for Section 195 withholding on any non-exempt payout, and plan to recover excess TDS through DTAA relief or the annual tax return rather than expecting a reduced rate at source by default.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Holding an Indian life insurance policy or ULIP as an NRI?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We help NRIs work out Section 10(10D) exemption eligibility, plan around premium thresholds, and claim DTAA relief on TDS from maturity payouts.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA &amp; Repatriation Limits</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRI Property Sale in India</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status: A Tax Guide for Returning NRIs</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our NRI Tax Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

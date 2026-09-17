import Link from 'next/link'
import type { Metadata } from 'next'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd, type FaqPair } from '@/lib/schema'
import { BOOKING_LINK } from '@/lib/constants'
import FaqSection from '../_components/FaqSection'
import { tableStyle, thStyle, tdStyle, tdAltStyle } from '../_components/tableStyles'

export const metadata: Metadata = {
  title: 'Double Taxation Relief for NRIs: Foreign Tax Credit Under Section 91',
  description: 'How Section 91 unilateral relief works for NRIs and residents with foreign income when India has no DTAA with the source country, how it differs from Section 90 DTAA relief, and how to claim it.',
  keywords: [
    'section 91 income tax act', 'foreign tax credit no DTAA', 'unilateral relief double taxation',
    'section 90 vs section 91', 'foreign tax credit India', 'double taxation relief NRI',
    'FTC rule 128 income tax', 'no DTAA country tax relief India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/double-taxation-relief-for-nris-foreign-tax-credit-under-section-91' },
  openGraph: {
    title: 'Double Taxation Relief for NRIs: Foreign Tax Credit Under Section 91',
    description: 'Section 91 unilateral relief for foreign income when there is no DTAA with the source country, how it differs from Section 90, and how to claim it.',
    url: 'https://agrawalkhandelwal.com/blog/double-taxation-relief-for-nris-foreign-tax-credit-under-section-91',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Double Taxation Relief for NRIs: Section 91 Foreign Tax Credit',
    description: 'What happens when there is no DTAA with the country where you paid foreign tax, and how Section 91 relief works instead.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Double Taxation Relief for NRIs: Foreign Tax Credit Under Section 91', 'double-taxation-relief-for-nris-foreign-tax-credit-under-section-91')

const articleLd = buildArticleLd({
  headline: 'Double Taxation Relief for NRIs: Foreign Tax Credit Under Section 91',
  description: 'Section 91 unilateral relief mechanics for income taxed abroad where India has no DTAA with the source country, how it differs from Section 90 treaty relief, and how to claim the credit.',
  datePublished: '2026-07-18',
  slug: 'double-taxation-relief-for-nris-foreign-tax-credit-under-section-91',
})

const faqs: FaqPair[] = [
  ['What is Section 91 relief and when does it apply?', 'Section 91 of the Income Tax Act gives unilateral relief from double taxation on income that has been taxed both in a foreign country and in India, specifically for cases where India does not have a Double Taxation Avoidance Agreement (DTAA) with that country. It applies to both residents and non-residents (including NRIs and RNORs) with respect to income taxable in both jurisdictions on which no treaty relief is available.'],
  ['How is the Section 91 tax credit calculated?', 'The relief is the lower of the Indian tax rate or the foreign tax rate applicable to the doubly taxed income, applied to that income. If the foreign tax rate is higher than the average Indian tax rate on that income, the credit is capped at the Indian rate; the excess foreign tax paid is not creditable and effectively becomes a real cost. If the Indian rate is higher, the credit is capped at the actual foreign tax paid.'],
  ['Does Section 91 apply if India does have a DTAA with the country?', 'No. Where a DTAA exists with the relevant country, relief is claimed under Section 90 (or Section 90A for specified associations) instead, following the credit or exemption method specified in that treaty. Section 91 is specifically the fallback provision for income sourced from a country with no DTAA in force with India, or, in limited cases, for doubly taxed income a DTAA does not actually cover.'],
  ['What documents does an NRI need to claim Section 91 relief?', 'The taxpayer needs to file Form 67 before the due date of filing the return (or, per the relevant CBDT relaxation, before the end of the relevant assessment year in some cases) along with evidence of the foreign income and tax paid, typically a certificate or statement from the foreign tax authority, a self-certified copy of the foreign tax return, or a bank/payslip-type document evidencing the deduction. Unlike Section 90 DTAA relief, a Tax Residency Certificate is not a requirement for Section 91, since the relief is unilateral rather than treaty-based.'],
  ['Can an NRI claim Section 91 relief on income already exempt in India?', 'No. Section 91 relief is only available on income that is taxable in India and has also suffered tax in the foreign country; it does not apply to income that is exempt in India in the first place (such as NRE or FCNR interest), since there is no Indian tax liability against which to claim the credit in that case.'],
]

const faqLd = buildFaqLd(faqs)
const bookingLink = BOOKING_LINK

export default function Section91DoubleTaxationBlog() {
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
                Double Taxation Relief for NRIs: Foreign Tax Credit Under Section 91
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published July 18, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}><strong>Section 91</strong> gives unilateral double-taxation relief when India has <strong>no DTAA</strong> with the country where the tax was paid; Section 90 handles the treaty case instead.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The credit is the <strong>lower of the Indian tax rate or the foreign tax rate</strong> on the doubly taxed income, not a flat reimbursement of whatever was paid abroad.</li>
                    <li style={{ marginBottom: '0.4rem' }}>No Tax Residency Certificate is required, unlike Section 90 relief; the claim rests on <strong>Form 67</strong> and proof of foreign tax paid instead.</li>
                    <li style={{ marginBottom: 0 }}>If the foreign tax rate is higher than India&apos;s, the excess is not creditable; that gap is a real cost, not a paperwork gap.</li>
                  </ul>
                </div>

                <p>Most NRI tax planning around double taxation focuses on DTAA relief under Section 90, because most of the countries NRIs live in (UAE, US, UK, Singapore, Australia, Canada) have a treaty with India. But a meaningful number of NRIs and residents with foreign-sourced income earn it, or pay tax on it, in a jurisdiction India has no treaty with at all. Section 91 exists precisely for that gap, and it works differently enough from Section 90 that assuming the same process applies is a common, costly mistake.</p>

                <h2>What Section 91 Actually Does</h2>
                <p>Section 91 of the Income Tax Act provides <strong>unilateral relief from double taxation</strong>: relief India grants on its own, not because a treaty requires it, on income that has been taxed both in a foreign country and in India, where <strong>no DTAA exists between India and that country</strong>. It applies to residents and non-residents alike (including NRIs and those in RNOR status) with respect to income that is taxable in both jurisdictions.</p>
                <p>The practical trigger is straightforward: an individual has income sourced in, or taxed by, a country India has no double taxation treaty with, and the same income is also taxable in India (either because the individual is a resident being taxed on global income, or because specific India-sourced income of an NRI happens to have also suffered tax abroad). Without Section 91, that income would be taxed twice in full, once by the foreign country and again by India, with no credit for either.</p>

                <h2>Section 90 vs Section 91: The Key Difference</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Feature</th>
                        <th style={thStyle}>Section 90 (DTAA relief)</th>
                        <th style={thStyle}>Section 91 (unilateral relief)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={tdStyle}>Applies when</td>
                        <td style={tdStyle}>India has a DTAA with the relevant country</td>
                        <td style={tdAltStyle}>India has <strong>no DTAA</strong> with the relevant country</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Basis of relief</td>
                        <td style={tdStyle}>Terms of the specific treaty (exemption or credit method, treaty-specific rates)</td>
                        <td style={tdAltStyle}>Statutory formula: lower of Indian rate or foreign rate</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Tax Residency Certificate</td>
                        <td style={tdStyle}>Generally required</td>
                        <td style={tdAltStyle}>Not required</td>
                      </tr>
                      <tr>
                        <td style={tdStyle}>Claim mechanism</td>
                        <td style={tdStyle}>Form 67 + TRC + Form 10F</td>
                        <td style={tdAltStyle}>Form 67 + proof of foreign tax paid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>The two sections are mutually exclusive in application: you use whichever one matches whether a treaty exists, not whichever gives a better result. If a DTAA is in force, Section 90 governs, even for income types the treaty happens to tax less favourably than Section 91&apos;s formula would.</p>

                <h2>How the Section 91 Credit Is Computed</h2>
                <p>The relief is calculated as a credit equal to the <strong>lower of the Indian tax rate or the foreign tax rate</strong> applicable to the doubly taxed income, applied against that income:</p>
                <ul>
                  <li><strong>If the foreign tax rate is lower than the Indian rate:</strong> the full foreign tax paid is creditable against the Indian tax liability on that income; the balance up to the Indian rate is still payable in India.</li>
                  <li><strong>If the foreign tax rate is higher than the Indian rate:</strong> the credit is capped at the Indian rate&apos;s worth of tax; the excess foreign tax above that is simply not recoverable as a credit and becomes a real, uncredited cost to the taxpayer.</li>
                </ul>
                <p>This asymmetry is the single most important practical point about Section 91: unlike some countries&apos; foreign tax credit systems that allow carry-forward of excess credit, Section 91 gives no such carry-forward. A taxpayer earning income from a high-tax, no-DTAA jurisdiction should factor this capped-credit exposure into planning before assuming the two tax bills will simply offset.</p>

                <h2>Who Actually Needs This</h2>
                <p>In practice, Section 91 comes up for NRIs and residents with income connections to countries that don&apos;t have a DTAA with India, or where the specific income type falls outside what an existing DTAA covers. It also matters for <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>returning NRIs in RNOR status</Link> who still hold foreign income streams (a foreign pension, residual foreign employment income, or investment income) from a jurisdiction outside India&apos;s treaty network, and for residents with foreign consulting, rental, or investment income from such a country. It is worth checking treaty coverage before assuming Section 91 versus Section 90 applies; the two are not interchangeable and the wrong claim can be rejected outright on processing.</p>

                <h2>Claiming the Credit: Form 67</h2>
                <p>Both Section 90 and Section 91 relief are claimed through <strong>Form 67</strong>, filed electronically on the income tax portal, which must generally be filed on or before the due date of filing the return of income for the relevant assessment year to be valid (CBDT has, in specific circumstances, permitted later filing, but the safer practice is always to file on time rather than rely on a relaxation). For a Section 91 claim specifically, supporting documentation should establish:</p>
                <ul>
                  <li>The nature and amount of the foreign income</li>
                  <li>The foreign tax actually paid or deducted on that income, evidenced by a statement or certificate from the foreign tax authority, the foreign tax return, or an equivalent document such as a payslip/bank statement showing the deduction</li>
                  <li>The Indian tax computation showing how that same income has also been included and taxed in the Indian return</li>
                </ul>
                <p>No Tax Residency Certificate is needed for a Section 91 claim, since the relief does not depend on treaty residency tie-breaker rules; it is purely a statutory domestic provision. This is a genuine simplification compared to Section 90 relief, though it does not reduce the need for solid documentary evidence of the actual foreign tax paid, which assessing officers do scrutinise on review.</p>

                <h2>A Worked Illustration</h2>
                <p>Suppose an NRI has consulting income of ₹20 lakh sourced from a country with no DTAA with India, and that country has taxed it at an effective rate of 25% (₹5 lakh). The same income is includible in the NRI&apos;s Indian tax computation (to the extent it is taxable in India based on residential status and source rules), and works out to an effective Indian rate of 20% (₹4 lakh) on that income. Because the Indian rate (20%) is lower than the foreign rate (25%), the Section 91 credit is capped at ₹4 lakh, the Indian-rate equivalent; the additional ₹1 lakh paid abroad above the Indian rate is not creditable and is an absorbed cost. Had the rates been reversed, i.e. the Indian rate higher than the foreign rate, the full ₹5 lakh foreign tax would have been creditable, with the remaining Indian liability payable on top.</p>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Paying tax in a country with no DTAA with India?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We compute Section 91 foreign tax credit exposure, prepare Form 67 filings, and structure income to minimise the uncredited gap where foreign rates exceed India&apos;s.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status: Tax Guide for Returning NRIs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/tds-nro-interest-fd-dtaa-relief" style={{ color: 'var(--primary)', fontWeight: 600 }}>TDS on NRO Interest &amp; FD: DTAA Relief</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/nri-gaar-cross-border-structures" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI GAAR &amp; Cross-Border Structures</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

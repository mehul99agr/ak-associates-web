import Link from 'next/link'
import type { Metadata } from 'next'
import PostCTA from '../_components/PostCTA'
import { buildBlogBreadcrumbLd, buildArticleLd, buildFaqLd } from '@/lib/schema'
import FaqSection from '../_components/FaqSection'

export const metadata: Metadata = {
  title: 'Seafarer (Merchant Navy) Taxation: NRI Status & Exemptions',
  description: 'How residential status is determined for seafarers using the CDC day-counting rule, taxability of NRE salary for voyages outside Indian waters, and common compliance mistakes.',
  keywords: [
    'seafarer taxation India', 'merchant navy tax NRI', 'CDC continuous discharge certificate tax',
    'seafarer NRI status', 'seafarer NRE account salary tax', 'merchant navy 182 day rule',
    'seafarer residential status income tax', 'CBDT circular seafarer salary',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/seafarer-merchant-navy-taxation-nri-status-and-exemptions' },
  openGraph: {
    title: 'Seafarer (Merchant Navy) Taxation: NRI Status & Exemptions',
    description: 'The CDC day-counting rule for seafarer residential status, NRE salary exemption, and common compliance mistakes merchant navy officers make.',
    url: 'https://agrawalkhandelwal.com/blog/seafarer-merchant-navy-taxation-nri-status-and-exemptions',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seafarer (Merchant Navy) Taxation: NRI Status & Exemptions',
    description: 'How the CDC rule determines seafarer residential status, and when salary credited to an NRE account is exempt.',
  },
}

const breadcrumbLd = buildBlogBreadcrumbLd('Seafarer (Merchant Navy) Taxation: NRI Status & Exemptions', 'seafarer-merchant-navy-taxation-nri-status-and-exemptions')

const articleLd = buildArticleLd({
  headline: 'Seafarer (Merchant Navy) Taxation: NRI Status & Exemptions',
  description: 'How the CDC (Continuous Discharge Certificate) day-counting rule determines residential status for seafarers, taxability of NRE salary for foreign-going voyages, and common compliance mistakes.',
  datePublished: '2026-08-17',
  slug: 'seafarer-merchant-navy-taxation-nri-status-and-exemptions',
})

const faqs: [string, string][] = [
  [
    'How is residential status determined for a seafarer?',
    'A seafarer\'s residential status is determined under the same Section 6 framework as any other individual, but with a special day-counting carve-out: for the period spent on an eligible foreign-going ship, the days covered by the seafarer\'s Continuous Discharge Certificate (CDC), from the date of joining the ship to the date of signing off, are excluded while counting days present in India for that voyage, even if the ship briefly touched or passed through Indian territorial waters during that period.',
  ],
  [
    'What is a Continuous Discharge Certificate (CDC) and why does it matter for tax?',
    'A CDC is the official seafarer identity and service record document issued to Indian merchant navy officers and crew, recording each voyage\'s joining and sign-off dates and the vessel details. For tax purposes, the CDC is the primary evidence used to establish the eligible voyage period that gets excluded from the day-count when determining whether the 182-day (or applicable) threshold under Section 6 has been crossed for the year.',
  ],
  [
    'Is salary credited to an NRE account for a foreign voyage always tax-free?',
    'Salary earned by a seafarer for services rendered on a foreign-going ship, for the period covered by the CDC outside Indian territorial waters, and credited to an NRE (Non-Resident External) account, is treated as income received outside India and is not taxable in India, per CBDT Circular No. 13/2017. This treatment depends on the salary actually being credited to an NRE account and the underlying voyage qualifying as foreign-going for the relevant period; salary credited to an NRO account or earned for a voyage that does not meet the eligibility conditions does not automatically get the same treatment.',
  ],
  [
    'Does a seafarer still need to file an Income Tax Return in India?',
    'It depends on total Indian income and residential status. Many seafarers who qualify as non-resident and have no other significant India-sourced income may have limited or no filing obligation on the foreign voyage salary itself, but filing may still be needed if the seafarer has other taxable income in India (such as interest on an NRO account, rental income, or capital gains), or simply to maintain a clean compliance record, claim a refund of TDS deducted on Indian income, or support future visa, loan, or property transactions.',
  ],
  [
    'What are the most common tax mistakes seafarers make?',
    'Common mistakes include: crediting foreign voyage salary to an NRO account instead of an NRE account and losing the clean exemption treatment; not maintaining or losing the CDC and voyage records needed to prove eligible days when residential status is questioned; miscounting days by including days the ship was in Indian territorial waters as India-presence when the CDC period should be excluded; not tracking the additional 120-day deemed-resident condition that can apply once Indian taxable income (excluding voyage salary) crosses the applicable threshold; and assuming NRI status automatically without actually running the day count for the specific financial year.',
  ],
  [
    'Does the standard 182-day NRI rule apply differently to seafarers than to other NRIs?',
    'The underlying Section 6 thresholds are the same law, but the mechanics of the day count differ because of the CDC exclusion: for other NRIs, every day physically present in India counts, but for a seafarer on an eligible foreign-going voyage, the CDC-covered period is excluded from the count entirely for that voyage, which is a seafarer-specific relief not available to individuals leaving India for ordinary employment abroad. Our broader guide to the general framework is available at NRI Residential Status: The 182-Day Rule, which explains the standard test this carve-out sits alongside.',
  ],
]

const faqLd = buildFaqLd(faqs)

export default function SeafarerTaxationBlog() {
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
                Seafarer (Merchant Navy) Taxation: NRI Status &amp; Exemptions
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 17, 2026</span>
                <span aria-hidden>&bull;</span>
                <span>CA Mehul Agrawal</span>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Seafarers get a special day-counting rule: the period on the <strong>Continuous Discharge Certificate (CDC)</strong> for an eligible foreign-going voyage is excluded from India-presence days, even if the ship briefly enters Indian waters.</li>
                    <li style={{ marginBottom: '0.4rem' }}>Salary for that voyage credited to an <strong>NRE account</strong> is treated as received outside India and is not taxable, per <strong>CBDT Circular No. 13/2017</strong>.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The same Section 6 residential-status framework applies as for other NRIs; the CDC exclusion is the seafarer-specific carve-out layered on top of it.</li>
                    <li style={{ marginBottom: 0 }}>Crediting salary to an NRO account, losing CDC records, or miscounting days are the most common compliance mistakes.</li>
                  </ul>
                </div>

                <p>Seafarers serving on foreign-going merchant vessels occupy an unusual position in Indian tax law: they spend most of the year physically outside conventional &quot;Indian soil&quot; while at sea, yet the ship itself may pass through or briefly dock in Indian territorial waters during a voyage. Ordinary day-counting rules would create absurd results if applied literally to this pattern, which is why the law carves out a specific mechanism, tied to the seafarer&apos;s Continuous Discharge Certificate (CDC), for determining residential status and the taxability of voyage salary.</p>

                <h2>Residential Status for Seafarers: The CDC Day-Counting Rule</h2>
                <p>Residential status for a seafarer is still determined under Section 6 of the Income Tax Act, the same provision that applies to every individual, based on the number of days present in India during the financial year (and the preceding years, for the not-ordinarily-resident test). What differs for seafarers is how those days are counted for a voyage on an eligible foreign-going ship: the entire period recorded on the CDC, starting from the date of joining the ship and ending on the date of signing off, is excluded from the count of days present in India for that voyage, even if the vessel&apos;s route took it through Indian territorial waters during that time.</p>
                <p>This exclusion exists because a seafarer stationed on a ship that happens to pass through Indian coastal waters is not, in any practical sense, present in India the way someone on land is; the CDC period reflects genuine sea service, and the law treats it accordingly. Without this carve-out, a seafarer could be pulled into resident status purely because their ship&apos;s route technically crossed Indian waters during a long foreign voyage, which would defeat the purpose of the residency test entirely.</p>
                <p>This is a seafarer-specific mechanism layered on top of the general framework; the core 182-day and 60-day/365-day tests under Section 6 still apply once the CDC-excluded days are removed from the count. Our broader explainer on the general test, including the standard exceptions for Indian citizens leaving for employment abroad, is at <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: The 182-Day Rule</Link>.</p>

                <h2>What the CDC Actually Is, and Why It Is the Key Evidence</h2>
                <p>The Continuous Discharge Certificate is the official identity and service-record document issued to Indian merchant navy seafarers, recording each voyage&apos;s joining date, sign-off date, and vessel details. For tax purposes, the CDC (along with the voyage/wage records the shipping company maintains) is the primary documentary evidence used to establish exactly which days qualify as an eligible foreign-going voyage period for exclusion. A seafarer who cannot produce clean CDC records for the year in question will struggle to substantiate a non-resident claim if it is questioned, regardless of how the actual voyage pattern played out. Maintaining organised, dated CDC and payslip records for every voyage across the financial year is, in practice, the single most important compliance habit for seafarers.</p>

                <h2>Taxability of Salary Credited to an NRE Account</h2>
                <p>The second major relief for seafarers concerns the taxability of the salary itself, not just residential status. Per CBDT Circular No. 13/2017, salary earned by a seafarer for services rendered on a foreign-going ship, for the CDC-covered period outside Indian territorial waters, is treated as income received outside India when that salary is credited to a Non-Resident External (NRE) bank account. Because it is treated as received outside India, it falls outside the scope of Indian taxation on that basis, rather than needing to separately qualify as exempt income.</p>
                <p>Two conditions matter for this treatment to hold cleanly:</p>
                <ul>
                  <li><strong>The salary must actually be credited to an NRE account,</strong> not an NRO account or a domestic resident account. Crediting the same salary to an NRO account changes its character for this purpose and can bring it back within the scope of Indian taxation, or at minimum create a documentation dispute about what the money represents.</li>
                  <li><strong>The underlying voyage must qualify as an eligible foreign-going voyage for the relevant CDC period.</strong> Salary for time spent on non-qualifying assignments, shore postings, or periods not covered by an eligible CDC entry does not automatically get this treatment.</li>
                </ul>
                <p>Interest earned on the NRE account itself also generally carries its own separate tax-exempt treatment for as long as the account holder qualifies as a non-resident, which is worth tracking alongside the salary position, particularly across a year where residential status might shift partway through.</p>

                <h2>Common Compliance Mistakes Seafarers Make</h2>
                <ul>
                  <li><strong>Crediting voyage salary to an NRO account by default,</strong> often because it is easier to manage day-to-day, without realising this can undermine the NRE-linked exemption treatment for that income.</li>
                  <li><strong>Not retaining CDC and voyage documentation</strong> in an organised way across the year, making it difficult to substantiate the excluded days if residential status is later questioned during assessment.</li>
                  <li><strong>Miscounting India-presence days</strong> by treating time the ship spent in Indian territorial waters as ordinary India presence, instead of correctly excluding the full CDC-covered voyage period.</li>
                  <li><strong>Overlooking the additional deemed-resident condition</strong> that can come into play once a seafarer&apos;s other Indian taxable income (excluding the foreign voyage salary) crosses the applicable threshold in a year, which changes the day-count test that applies.</li>
                  <li><strong>Assuming non-resident status automatically</strong> based on being a seafarer generally, rather than actually running the day count, CDC exclusions, and applicable thresholds for that specific financial year, which can change year to year based on voyage schedules and shore leave.</li>
                  <li><strong>Ignoring other India-sourced income</strong> such as NRO interest, rental income, or capital gains, which remain taxable in India regardless of NRI status on the voyage salary, and can carry their own filing and TDS obligations.</li>
                </ul>
                <p>Because a seafarer&apos;s residential status can genuinely shift from year to year depending on voyage schedules, sign-off dates, and shore time, this is not a &quot;determine once and forget&quot; exercise; it needs to be checked afresh each financial year against that year&apos;s actual CDC record.</p>
              </div>

              <PostCTA
            heading="Need help with your residential status or voyage salary tax position?"
            description="We work with seafarers and merchant navy officers on CDC-based residential status determination, NRE account structuring, and Indian income tax filing."
            secondaryLabel="View Our Services"
            secondaryHref="/services"
          />

              <FaqSection faqs={faqs} />

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: The 182-Day Rule</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status: A Tax Guide for Returning NRIs</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nre-vs-nro-account-fema-repatriation-limits" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRE vs NRO Account: FEMA &amp; Repatriation Limits</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/services" style={{ color: 'var(--primary)', fontWeight: 600 }}>Our NRI Advisory Services</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

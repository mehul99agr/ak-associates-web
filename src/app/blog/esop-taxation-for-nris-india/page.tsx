import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ESOP Taxation for NRIs (2026 Guide)',
  description: 'How ESOPs are taxed for NRIs: perquisite tax at exercise, capital gains at sale, TDS obligations, the startup ESOP deferral, and how to avoid double taxation under DTAA.',
  keywords: [
    'ESOP taxation NRI', 'ESOP tax India NRI', 'NRI ESOP exercise tax',
    'ESOP capital gains NRI', 'ESOP double taxation DTAA', 'startup ESOP deferral NRI',
    'perquisite tax ESOP India', 'RSU taxation NRI India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/esop-taxation-for-nris-india' },
  openGraph: {
    title: 'ESOP Taxation for NRIs (2026 Guide)',
    description: 'Perquisite tax at exercise, capital gains at sale, TDS obligations, the startup ESOP deferral, and how to avoid double taxation under DTAA.',
    url: 'https://agrawalkhandelwal.com/blog/esop-taxation-for-nris-india',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESOP Taxation for NRIs: Exercise, Sale & DTAA Relief',
    description: 'Perquisite tax at exercise, capital gains at sale, and how to avoid double taxation under DTAA.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'ESOP Taxation for NRIs (2026 Guide)', item: 'https://agrawalkhandelwal.com/blog/esop-taxation-for-nris-india' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'ESOP Taxation for NRIs (2026 Guide)',
  description: 'How ESOPs are taxed for NRIs: perquisite tax at exercise, capital gains at sale, TDS obligations, the startup ESOP deferral, and how to avoid double taxation under DTAA.',
  datePublished: '2026-08-08',
  dateModified: '2026-08-08',
  author: {
    '@type': 'Person',
    '@id': 'https://agrawalkhandelwal.com/#mehul-agrawal',
    name: 'CA Mehul Agrawal',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://agrawalkhandelwal.com/#organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' },
  },
  inLanguage: 'en-IN',
  isPartOf: { '@type': 'Blog', '@id': 'https://agrawalkhandelwal.com/blog#blog', name: 'Agrawal Khandelwal & Associates LLP Insights' },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/esop-taxation-for-nris-india',
}

const faqs: [string, string][] = [
  [
    'Are ESOPs taxed twice, once at exercise and again at sale?',
    'Yes, but on two different amounts, not the same value twice. At exercise, the perquisite (fair market value on the exercise date minus the exercise price) is taxed as salary income. At sale, capital gains tax applies only on the further appreciation, sale price minus the fair market value already taxed at exercise, which becomes the cost of acquisition for capital gains purposes.',
  ],
  [
    'Does an NRI have to pay Indian tax on ESOPs from an Indian company after leaving India?',
    'Often yes. If the ESOPs relate to services rendered while the employee was resident and working in India, the perquisite is treated as income accruing in India under the source rule, and remains taxable in India even if exercised after the employee becomes an NRI. Residential status at the time of exercise does not override where the underlying employment services were performed.',
  ],
  [
    'What is the startup ESOP TDS deferral, and does it help NRIs?',
    'Section 192(1C) lets eligible DPIIT-recognised startups defer depositing TDS on the ESOP perquisite for up to 48 months from the end of the relevant assessment year, or until the shares are sold, or until the employee leaves the company, whichever is earliest. The deferral only defers when TDS is deposited, not whether the perquisite is taxable, the income is still taxed in the year of exercise. NRIs who leave the company or move abroad can trigger early crystallisation of the deferred TDS, so the timeline needs active tracking, not passive assumption.',
  ],
  [
    'Can DTAA prevent double taxation on ESOPs?',
    'Often, yes, through the foreign tax credit mechanism, but not automatically. Many countries tax equity compensation on a different event or timeline than India, some tax at vesting, some at exercise, some at sale, which can create timing mismatches even where a DTAA applies. Claiming relief requires matching the Indian tax paid against the specific foreign tax year and category correctly, which is where most NRIs need professional help rather than attempting it via a standard tax-filing app.',
  ],
  [
    'How is capital gains on ESOP shares calculated for an NRI?',
    'The cost of acquisition for capital gains purposes is the fair market value of the shares on the date of exercise, the same value already used to compute the perquisite. Capital gains equal the sale price minus this cost of acquisition. For unlisted shares (common with startup ESOPs before an IPO), long-term treatment requires a holding period of more than 24 months from the exercise date; shorter holding periods are taxed as short-term capital gains at the applicable slab or flat rate.',
  ],
  [
    'Does TDS apply when an NRI sells shares acquired through ESOPs?',
    'Yes. When an NRI sells unlisted shares, including ESOP shares in a private company, the buyer is generally required to deduct TDS under Section 195 (now Section 393(2) under the Income Tax Act 2025) on the capital gains payment, similar to the TDS regime that applies to NRI property sales. The NRI can apply for a Form 13 (now Form 128) lower deduction certificate if the TDS on gross proceeds significantly overstates the actual tax on the gain.',
  ],
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export default function ESOPNRIBlog() {
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
                ESOP Taxation for NRIs: Exercise, Sale &amp; DTAA Relief
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
                    <li style={{ marginBottom: '0.4rem' }}>ESOPs are taxed twice on different amounts: as salary perquisite at exercise, and as capital gains on further appreciation at sale.</li>
                    <li style={{ marginBottom: '0.4rem' }}>ESOPs earned for services rendered in India usually stay taxable in India even after you become an NRI.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The startup TDS deferral (Section 192(1C)) delays when tax is deposited, not whether it's owed, and leaving the company can trigger it early.</li>
                    <li style={{ marginBottom: 0 }}>DTAA can prevent double taxation, but only if the mismatch between India's exercise-based timing and your resident country's rules is handled correctly.</li>
                  </ul>
                </div>

                <p>Equity compensation is one of the most common tax surprises for NRIs, not because the rules are secret, but because they involve two separate taxable events, on two different amounts, sometimes in two different countries. Here is exactly how ESOP taxation works for NRIs, and where the double-taxation risk actually comes from.</p>

                <h2>The Two Taxable Events</h2>
                <p>Indian tax law treats ESOPs (and similar equity awards) as generating tax at two distinct points, not one:</p>
                <h3>1. At Exercise: Perquisite Tax</h3>
                <p>When you exercise your option and shares are actually allotted to you, the difference between the <strong>fair market value (FMV) of the shares on the exercise date</strong> and the <strong>exercise price you paid</strong> is treated as a perquisite, taxed as <strong>salary income</strong> under Section 17(2)(vi). This is taxed at your applicable slab rate for that year, exactly like a cash bonus would be, and the employer is generally required to withhold TDS on it under Section 192.</p>
                <h3>2. At Sale: Capital Gains Tax</h3>
                <p>When you eventually sell the shares, the FMV already taxed at exercise becomes your <strong>cost of acquisition</strong>. Capital gains tax applies only to the <strong>further appreciation</strong> between the exercise-date FMV and the actual sale price, not the full sale value. For unlisted shares (the norm for startup ESOPs before a listing event), long-term capital gains treatment requires a holding period of more than 24 months from the exercise date; shorter holdings are taxed as short-term gains.</p>
                <p>The two events are not double taxation of the same value, they tax two different slices of the total gain, at exercise and at sale respectively. The confusion usually comes from not realising these are separate computations with separate cost bases.</p>

                <h2>Why NRIs Still Owe Indian Tax After Leaving</h2>
                <p>A common assumption is that becoming a non-resident removes Indian ESOP exposure. It doesn't, if the underlying employment services were rendered in India. Under the source rule in Section 9(1)(ii), salary is deemed to accrue or arise in India, and is taxable in India, if it relates to services rendered in India, <strong>regardless of the employee's residential status when the income is actually received or the option is exercised</strong>. An employee who worked in India for years, accumulated vested options, then relocated abroad and exercises those same options as an NRI, is still liable to Indian perquisite tax on the exercise, because the services that earned the option were performed in India.</p>
                <p>This is a frequent trip-up for employees moving to the UAE, Singapore, or elsewhere after a Series B or pre-IPO vesting event, the move abroad changes future salary taxation, but it does not erase the Indian tax liability already attached to options earned during the India-resident years.</p>

                <h2>The Startup ESOP TDS Deferral</h2>
                <p>Section 192(1C) gives employees of DPIIT-recognised eligible startups a genuine cash-flow benefit: the employer can defer <strong>depositing</strong> the TDS on the ESOP perquisite for up to <strong>48 months</strong> from the end of the relevant assessment year, or until the employee sells the shares, or until the employee ceases to be an employee of the company, whichever happens earliest.</p>
                <p>Two things NRIs consistently misunderstand about this deferral:</p>
                <ul>
                  <li><strong>It defers deposit, not liability.</strong> The perquisite income is still taxed in the year of exercise for computing your total income and filing your return, the deferral only changes when the TDS amount is actually paid to the government.</li>
                  <li><strong>Leaving the company or India can trigger it early.</strong> If you resign, or the company treats a move abroad as a change in employment status, the 48-month clock can be cut short and the deferred TDS becomes due immediately, an unwelcome surprise if you assumed the full 4-year window applied regardless of your employment status.</li>
                </ul>
                <p>See our related guide on DPIIT recognition and startup tax benefits for the eligibility criteria that determine whether a given startup's ESOP scheme even qualifies for this deferral.</p>

                <h2>Avoiding Double Taxation: What DTAA Actually Does</h2>
                <p>If you are tax resident in a country that also taxes equity compensation, the risk of paying tax twice on the same economic gain is real, but the fix is not automatic. The complication is that different countries tax equity awards at different trigger points: India taxes at exercise (perquisite) and sale (capital gains); some countries tax at vesting; others tax only at sale. These mismatched timings mean the "same" gain can fall into different tax years in different countries, which makes claiming a straightforward foreign tax credit harder than it sounds.</p>
                <p>In practice, DTAA relief for ESOP double taxation generally works through:</p>
                <ul>
                  <li><strong>Foreign tax credit</strong> claimed in your country of residence for Indian tax paid on the perquisite or capital gains, subject to that country's own credit rules and documentation requirements (typically a certificate of Indian tax paid or withheld).</li>
                  <li><strong>Correct characterisation</strong> of the income (employment income vs capital gains) under the treaty, since the applicable article, and therefore the credit mechanism, differs between the two.</li>
                  <li><strong>Careful year-matching</strong>, aligning the Indian tax year in which perquisite or capital gains tax was paid against the foreign tax year in which the corresponding income is reported, which rarely lines up neatly given the timing mismatches above.</li>
                </ul>
                <p>This is genuinely one of the more technical areas of NRI taxation, because it depends on the specific treaty, the specific country's equity compensation rules, and the specific timeline of your vesting, exercise, and sale. It is not something a standard tax-filing tool handles well.</p>

                <h2>TDS When an NRI Sells ESOP Shares</h2>
                <p>When an NRI sells shares, including unlisted ESOP shares in a private company, to a buyer, the buyer is generally required to deduct TDS under Section 195 (now Section 393(2) under the Income Tax Act 2025) on the capital gains element of the payment, the same regime that governs NRI property sale TDS. Because TDS is often computed conservatively on the full consideration rather than the actual gain, NRIs facing a large ESOP share sale (for example, in a company buyback or secondary sale ahead of an IPO) can apply for a <Link href="/blog/form-13-lower-deduction-certificate-nri" style={{ color: 'var(--primary)', fontWeight: 600 }}>Form 13 lower deduction certificate</Link> to bring the withholding closer to the actual tax owed, rather than waiting for a refund after filing an Indian return.</p>

                <h2>Practical Checklist for NRIs With ESOPs</h2>
                <ol>
                  <li><strong>Track exercise-date FMV carefully</strong>, this figure drives both your perquisite tax and your future capital gains cost base, and startups don't always provide it proactively once you've left the company.</li>
                  <li><strong>Confirm whether TDS was actually deposited</strong> on exercise, especially if the startup used the Section 192(1C) deferral, and know what triggers early crystallisation.</li>
                  <li><strong>Model the DTAA position before exercising</strong>, not after, since the exercise date itself is often a discretionary decision you control, and timing it against your residency status and the foreign country's tax year can materially change the outcome.</li>
                  <li><strong>Plan for Section 195 TDS on any future share sale</strong>, and evaluate a Form 13 application if the sale is large relative to your actual computed gain.</li>
                  <li><strong>Keep documentation</strong>, grant letters, exercise notices, FMV valuation reports, and TDS certificates, since reconstructing this years later across two countries is far harder than keeping it as you go.</li>
                </ol>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Exercising or selling ESOPs as an NRI?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We compute perquisite and capital gains tax, structure exercise timing against DTAA relief, and handle Section 195 / Form 13 compliance for NRI equity compensation.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqLd.mainEntity.map((faq, i) => (
                    <div key={i} style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{faq.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.91rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

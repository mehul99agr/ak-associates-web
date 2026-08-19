import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retirement Fund Tax for NRIs (2026)',
  description: 'How India taxes US 401(k), UK pension, and Australian superannuation withdrawals for returning NRIs: RNOR window strategy, DTAA relief, and the timing decisions that save you lakhs.',
  keywords: [
    'NRI 401k taxation India', 'foreign retirement fund tax India', 'UK pension India tax',
    'superannuation India NRI', 'NRI pension taxability', 'foreign retirement account India',
    '401k withdrawal NRI India', 'NRI pension DTAA', 'returning NRI pension tax',
    'foreign pension India RNOR', 'retirement fund returning NRI',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/foreign-retirement-fund-taxation-nri' },
  openGraph: {
    title: 'Foreign Retirement Fund Taxation for NRIs: 401(k), Pension & Superannuation',
    description: 'How India taxes foreign retirement withdrawals, RNOR window strategy, and DTAA relief for returning NRIs.',
    url: 'https://agrawalkhandelwal.com/blog/foreign-retirement-fund-taxation-nri',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '401(k) & Foreign Pension Tax for Returning NRIs',
    description: 'RNOR window, DTAA relief, and timing strategies for foreign retirement fund withdrawals.',
  },
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://agrawalkhandelwal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Retirement Fund Tax for NRIs (2026)', item: 'https://agrawalkhandelwal.com/blog/foreign-retirement-fund-taxation-nri' },
  ],
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Retirement Fund Tax for NRIs (2026)',
  description: 'How India taxes US 401(k), UK pension, and Australian superannuation withdrawals for returning NRIs.',
  datePublished: '2026-08-06',
  dateModified: '2026-08-06',
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
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/foreign-retirement-fund-taxation-nri',
}

const faqs: [string, string][] = [
  [
    'Is my US 401(k) taxable in India when I return?',
    'It depends on when you withdraw and your residential status at that time. Contributions you made and the growth are not taxed in India while the 401(k) remains untouched. When you withdraw, the treatment depends on your status: as an NRI, the withdrawal is typically taxable only in the US. As RNOR, a withdrawal from a foreign retirement account that is not received in India may remain outside Indian tax. As ROR (full resident), the withdrawal is part of your worldwide income and taxable in India, with a credit for US taxes paid under the India-US DTAA.',
  ],
  [
    'Should I withdraw my 401(k) before or after returning to India?',
    'This is one of the most valuable timing decisions. Withdrawing while you are still NRI means India has no taxing right (only the US taxes it). Withdrawing during RNOR years may keep it outside Indian tax if the funds are not received in India. Withdrawing after becoming ROR means India taxes it as worldwide income (with DTAA credit for US tax). The optimal strategy depends on your US tax bracket, the DTAA provisions, and how large the withdrawal is relative to your other income. Early withdrawal penalties (10% in the US for withdrawals before age 59.5) must also be factored in.',
  ],
  [
    'How is a UK pension taxed for NRIs returning to India?',
    'Under the India-UK DTAA, pension income is generally taxable in the country of residence of the recipient. So a returning NRI who becomes an Indian resident and draws a UK pension will likely be taxable in India on that pension income. The UK may also withhold tax, and a DTAA credit would apply to avoid double taxation. The 25% tax-free lump sum available in the UK may have different treatment under Indian tax law. UK state pension (not private pension) has specific DTAA provisions that may differ.',
  ],
  [
    'Can I transfer my foreign retirement fund to India?',
    'India does not have a formal mechanism to "roll over" a foreign retirement fund into an Indian retirement account like EPF or NPS. You would need to withdraw from the foreign fund (triggering the foreign country\'s tax and any early withdrawal penalties), bring the proceeds to India, and then invest separately in Indian instruments. The transfer of funds itself is not taxable in India - only the withdrawal from the foreign fund is a taxable event.',
  ],
  [
    'What is the RNOR window strategy for retirement funds?',
    'During RNOR years (typically 2-3 years after returning), foreign income not received in India is exempt from Indian tax. If you can time retirement fund withdrawals during RNOR years and ensure the proceeds go to a foreign bank account (not received in India), you may avoid Indian tax on those withdrawals. You would still owe tax to the country where the fund is located. This strategy works best for partial withdrawals spread across RNOR years, combined with DTAA planning to minimise the total cross-border tax burden.',
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

export default function ForeignRetirementFundBlog() {
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
                Foreign Retirement Fund Taxation: What Returning NRIs Need to Know About 401(k), Pension, and Superannuation
              </h1>
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '0.9rem', fontWeight: 600, flexWrap: 'wrap', alignItems: 'center' }}>
                <span>Published August 6, 2026</span>
                <span aria-hidden>&bull;</span>
                <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>
                <span aria-hidden>&bull;</span>
                <span>Agrawal Khandelwal &amp; Associates LLP</span>
              </div>

              <div className="blog-content" style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--text-main)' }}>
                <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
                  <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    <li style={{ marginBottom: '0.4rem' }}>Foreign retirement funds (401k, UK pension, superannuation) are not automatically taxable in India while they sit untouched.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The tax event is the <strong>withdrawal</strong>, and the treatment depends entirely on your <Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>residential status</Link> at the time of withdrawal.</li>
                    <li style={{ marginBottom: '0.4rem' }}>The <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR window</Link> (2-3 years after return) is the planning sweet spot for partial withdrawals.</li>
                    <li style={{ marginBottom: 0 }}>DTAA relief prevents double taxation but does not eliminate it. The net tax depends on timing, amount, and which country taxes first.</li>
                  </ul>
                </div>

                <p>This is the question we hear from almost every NRI planning to return from the US, UK, or Australia: &quot;What happens to my 401(k)?&quot; or &quot;Will India tax my pension?&quot; The answer is almost never a simple yes or no. It depends on when you withdraw, where the money goes, what your residential status is at that point, and what the DTAA between India and your country of employment says. Here is how each major retirement system is treated, and the timing decisions that can save you significant money.</p>

                <h2>The General Principle</h2>
                <p>India does not have a concept equivalent to &quot;tax-deferred retirement accounts&quot; in its domestic law. It does not recognise a US 401(k), UK pension, or Australian super as a special tax-sheltered vehicle. When the money comes out:</p>
                <ul>
                  <li>If you are <strong>NRI</strong> at the time of withdrawal: India has no taxing right. Only the country where the fund is located taxes it.</li>
                  <li>If you are <strong>RNOR</strong>: Withdrawals that are not received in or deemed to accrue in India may remain exempt from Indian tax. This is the planning window.</li>
                  <li>If you are <strong>ROR</strong> (full resident): The withdrawal is part of your worldwide income. India taxes it, with a credit for foreign taxes paid under the applicable DTAA.</li>
                </ul>

                <h2>US 401(k) and IRA</h2>
                <p>The India-US DTAA (Article 20) provides that pension distributions are taxable in the country of residence. For a returning NRI who has become an Indian resident:</p>
                <ul>
                  <li><strong>While NRI:</strong> Withdrawals are taxable only in the US. Early withdrawal penalty (10% before age 59.5) applies. No Indian tax.</li>
                  <li><strong>While RNOR:</strong> If the withdrawal goes to a US bank account and is not received in India, it may not be taxable in India. The US will still withhold tax (typically 30% for non-residents, or 10-20% if treaty benefits are claimed). This is the planning window for partial withdrawals.</li>
                  <li><strong>While ROR:</strong> The withdrawal is taxable as income in India at slab rates. You can claim credit for US taxes withheld under Section 90/91, subject to filing Form 67 before the ITR due date.</li>
                </ul>
                <p><strong>Roth 401(k)/IRA:</strong> Qualified Roth withdrawals are tax-free in the US. India, however, may treat the entire withdrawal (including the tax-free portion) as income, since India does not recognise the Roth structure. DTAA interpretation varies, and this is an area where professional advice is essential before withdrawal.</p>

                <h2>UK Pension</h2>
                <p>UK pensions come in several forms, and the DTAA treatment differs:</p>
                <ul>
                  <li><strong>Workplace and personal pensions:</strong> Under the India-UK DTAA (Article 19), pension income paid for past employment services is generally taxable in the country of residence. For a returning NRI who becomes Indian resident, this means India has taxing rights, with credit for UK tax withheld.</li>
                  <li><strong>UK State Pension:</strong> Also taxable in the country of residence under the DTAA.</li>
                  <li><strong>25% tax-free lump sum:</strong> UK law allows a 25% tax-free pension commencement lump sum. India does not recognise this exemption. The lump sum may be treated as taxable income in India when you are ROR. During RNOR years, if received in a UK bank account, it may remain outside Indian tax.</li>
                  <li><strong>QROPS transfers:</strong> Transferring a UK pension to a Qualifying Recognised Overseas Pension Scheme has its own UK tax consequences (potential overseas transfer charge). India does not have approved QROPS schemes, so this is typically relevant only if the NRI is moving to a third country first.</li>
                </ul>

                <h2>Australian Superannuation</h2>
                <p>Australian superannuation has unique features that create complexity for returning NRIs:</p>
                <ul>
                  <li><strong>While NRI:</strong> The Departing Australia Superannuation Payment (DASP) allows withdrawal of most super after leaving Australia. Tax applies at 35-65% depending on the component (taxed vs untaxed, tax-free threshold). India has no additional tax.</li>
                  <li><strong>While resident in India:</strong> The India-Australia DTAA (Article 18) provides that pensions are taxable only in the country of residence. So lump-sum or periodic withdrawals after becoming Indian resident are taxable in India, with credit for Australian tax.</li>
                  <li><strong>Leaving super in Australia:</strong> Unlike 401(k), leaving super in Australia until preservation age (currently 60) has benefits - tax-free withdrawals after 60 in Australia. But if you are Indian resident at withdrawal, India taxes it. The RNOR window is relevant here for partial withdrawals.</li>
                </ul>

                <h2>The RNOR Window Strategy</h2>
                <p>The 2-3 year <Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR window</Link> after returning is the most tax-efficient time for partial retirement fund withdrawals, if structured correctly:</p>
                <ol>
                  <li><strong>Calculate your RNOR years</strong> based on your specific day-count history.</li>
                  <li><strong>Withdraw during RNOR years</strong> and ensure the proceeds go to a foreign bank account, not to an Indian account.</li>
                  <li><strong>Pay the foreign country&apos;s tax</strong> (US withholding, UK PAYE, or Australian exit tax).</li>
                  <li><strong>The Indian tax exposure may be nil or minimal</strong> because the income is foreign income not received in India during RNOR years.</li>
                  <li><strong>Spread withdrawals across multiple RNOR years</strong> to stay within optimal tax brackets in the foreign country.</li>
                </ol>
                <p>This strategy does not work for everyone. If you need the money in India immediately, receiving it in a foreign account and then remitting it to India may not achieve the &quot;not received in India&quot; test. The transfer to India could be treated as receiving the income in India, negating the RNOR benefit. Professional structuring is critical here.</p>

                <h2>DTAA Relief: How It Actually Works</h2>
                <p>DTAAs prevent double taxation but do not eliminate taxation. The typical mechanism:</p>
                <ul>
                  <li>Country A (where the fund is) withholds tax on the withdrawal.</li>
                  <li>India (as country of residence) taxes the same income as worldwide income.</li>
                  <li>India grants a credit (under Section 90/91) for the tax paid to Country A, subject to limits.</li>
                  <li>You file <strong>Form 67</strong> on the Income Tax portal <strong>before</strong> the ITR due date to claim the foreign tax credit.</li>
                </ul>
                <p>The credit is typically limited to the Indian tax rate on that income, not the full foreign tax paid. If Country A&apos;s rate is higher than India&apos;s effective rate on that income, you lose the excess credit. This is another reason why withdrawal timing (choosing years with lower total Indian income) matters.</p>

                <h2>What India Does NOT Recognise</h2>
                <ul>
                  <li><strong>Tax-deferred status:</strong> India does not treat a 401(k) or super as a tax-sheltered account. The concept of deferral is a domestic US/Australian concept.</li>
                  <li><strong>Roth tax-free withdrawals:</strong> Qualified Roth withdrawals are tax-free in the US. India may treat them as taxable income.</li>
                  <li><strong>UK tax-free lump sum:</strong> The 25% PCLS is a UK tax concept. India does not mirror it.</li>
                  <li><strong>Rollover/transfer protection:</strong> Moving funds between retirement accounts (401k to IRA, UK pension to QROPS) may be non-taxable in the origin country but India&apos;s treatment is uncertain and should be verified before execution.</li>
                </ul>
              </div>

              <div style={{ marginTop: '3.5rem', padding: '2.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Returning to India with a foreign retirement fund?</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We advise returning NRIs on withdrawal timing, RNOR planning, DTAA relief, and Form 67 filing for 401(k), UK pension, and Australian superannuation.</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
                  <Link href="/nri-tax-advisory" className="btn btn-outline">NRI Tax Advisory</Link>
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
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Reviewed By</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', margin: 0 }}>
                  <Link href="/about#mehul-agrawal" style={{ color: 'var(--primary)', fontWeight: 700 }}>CA Mehul Agrawal</Link>, Chartered Accountant (ICAI), UAE Corporate Taxation certified. Last reviewed August 6, 2026.
                </p>
                <h3 style={{ fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>Sources & References</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.4rem' }}>Income Tax Department, Government of India — <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>incometax.gov.in</a></li>
                  <li style={{ marginBottom: 0 }}>Reserve Bank of India (FEMA / repatriation rules) — <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>rbi.org.in</a></li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Related Guides</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/rnor-status-tax-guide-returning-nris" style={{ color: 'var(--primary)', fontWeight: 600 }}>RNOR Status: How Long Is the Tax Holiday?</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-returning-india-financial-checklist" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Returning to India: Financial Checklist</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><Link href="/blog/nri-residential-status-182-day-rule" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Residential Status: 182-Day Rule Explained</Link></li>
                  <li style={{ marginBottom: 0 }}><Link href="/blog/esop-taxation-for-nris-india" style={{ color: 'var(--primary)', fontWeight: 600 }}>ESOP Taxation for NRIs</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

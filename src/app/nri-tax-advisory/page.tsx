import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NRI Tax Advisory India | ITR Filing, Property Sale, FEMA & DTAA | AK & Associates',
  description: 'Expert CA advisory for Non-Resident Indians: ITR filing, TDS refunds, property sale & repatriation (Form 15CA/15CB, now Form 145/146), DTAA claims, and FEMA compliance. Serving NRIs in UAE, US, UK, Singapore, and Australia.',
  keywords: [
    'NRI tax consultant India', 'NRI ITR filing India',
    'NRI property sale tax India', 'NRI taxation India 2026',
    'DTAA NRI India', 'FEMA NRI compliance India',
    'form 15CA 15CB NRI', 'form 145 146 NRI India',
    'NRI income tax India', 'RNOR status India',
    'NRI TDS refund India', 'NRI repatriation India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/nri-tax-advisory' },
  openGraph: {
    title: 'NRI Tax Advisory India | ITR, Property Sale, FEMA & DTAA',
    description: 'End-to-end tax advisory for Non-Resident Indians: ITR filing, repatriation, DTAA claims, and FEMA compliance under the new Income Tax Act 2025.',
    url: 'https://agrawalkhandelwal.com/nri-tax-advisory',
  },
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'NRI Tax Advisory Services India',
  description: 'End-to-end tax advisory for Non-Resident Indians: ITR filing, TDS refunds, property sale repatriation, DTAA claims, and FEMA compliance. Serving NRIs in UAE, US, UK, Singapore, and Australia.',
  provider: {
    '@type': 'AccountingService',
    name: 'Agrawal Khandelwal & Associates LLP',
    url: 'https://agrawalkhandelwal.com',
    telephone: '+91-95275-33506',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka',
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: '422011',
      addressCountry: 'IN',
    },
  },
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'NRI Tax Advisory',
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://agrawalkhandelwal.com' },
    { '@type': 'ListItem', position: 2, name: 'NRI Tax Advisory', item: 'https://agrawalkhandelwal.com/nri-tax-advisory' },
  ],
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do NRIs need to file an income tax return in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if your total income from Indian sources (rent, interest, capital gains, etc.) exceeds ₹2.5 lakh in a financial year, you are required to file an ITR in India, regardless of where you live. If TDS has been deducted and you have no other taxable income, filing is still advisable to claim a refund.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the TDS rate on NRI fixed deposits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Banks deduct TDS at 30% (plus surcharge and cess) on interest earned on NRO fixed deposits. NRE and FCNR deposit interest is fully tax-exempt. If your country of residence has a DTAA with India, the rate may be reduced, typically to 10–15%, subject to submitting a Tax Residency Certificate (TRC).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an NRI sell property in India and send money abroad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The sale proceeds are subject to capital gains tax in India. The buyer is required to deduct TDS (typically 20–22.88% on long-term gains). After paying tax, the NRI can repatriate up to USD 1 million per financial year from the NRO account. Under the new Income Tax Act 2025, the foreign remittance process now uses Form 145 (replacing Form 15CA) and Form 146 (replacing Form 15CB), effective April 1, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is RNOR status and how does it work under the new Income Tax Act 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RNOR (Resident but Not Ordinarily Resident) is a transitional status for NRIs returning to India. Under the new Income Tax Act 2025 (effective April 1, 2026), you qualify as RNOR if you spend 120 or more days in India in a year AND have spent 365 or more days in India over the previous four years. As RNOR, only your Indian-sourced income is taxable, your global income remains tax-free in India. This status lasts up to 3 years after your return.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if an NRI does not file an ITR in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you have taxable income in India and fail to file, you are liable to interest under Sections 234A, 234B, and 234C of the Income Tax Act, plus a late filing penalty of up to ₹5,000. More significantly, non-filing can trigger scrutiny notices, block property transactions requiring NOCs, and complicate future DTAA claims.',
      },
    },
  ],
}

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const services = [
  {
    title: 'ITR Filing for NRIs',
    desc: 'Correct form selection (ITR-2/ITR-3), Schedule FA (foreign assets) reporting, foreign tax credit claims, and timely filing before the October 31 deadline for NRIs with foreign assets.',
  },
  {
    title: 'TDS Refund Claims',
    desc: 'Banks routinely deduct TDS at the maximum rate on NRO deposits and rent. We file refund claims and, where a DTAA applies, obtain lower-deduction certificates to stop over-deduction at source.',
  },
  {
    title: 'Property Sale & Repatriation',
    desc: 'Capital gains computation, buyer TDS advisory, and complete repatriation documentation. Under the new Income Tax Act 2025, this includes Form 145 (previously Form 15CA) and Form 146 (previously Form 15CB), mandatory before funds leave India.',
  },
  {
    title: 'DTAA Benefit Claims',
    desc: 'If India has a tax treaty with your country of residence, you may pay significantly less tax on Indian income. We obtain your Tax Residency Certificate (TRC), submit Form 10F, and apply the correct treaty rate.',
  },
  {
    title: 'FEMA Compliance',
    desc: 'Guidance on NRE vs NRO vs FCNR accounts, Liberalised Remittance Scheme (LRS) for outward remittances, ODI reporting for overseas investments, and account conversion when your residency status changes.',
  },
  {
    title: 'Return to India Planning',
    desc: 'The RNOR window (up to 3 years) is the most valuable and most wasted tax planning opportunity for returning NRIs. We help you structure your assets and income before you lose the exemption on global income.',
  },
]

const deadlines = [
  { date: '31 Jul', title: 'ITR Deadline (Basic)', desc: 'For NRIs without foreign assets or audit requirement.' },
  { date: '31 Oct', title: 'ITR Deadline (Foreign Assets)', desc: 'Extended deadline for NRIs reporting foreign assets in Schedule FA.' },
  { date: '15 Mar', title: 'Advance Tax (4th instalment)', desc: 'If Indian income tax liability exceeds ₹10,000 for the year.' },
  { date: 'Before remittance', title: 'Form 145 / Form 146', desc: 'Must be filed before any taxable foreign remittance is executed.' },
]

export default function NRITaxAdvisory() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        {/* Hero */}
        <section className="hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="hero-badge">NRI Tax Advisory</span>
            <h1>India Tax Advisory for Non-Resident Indians</h1>
            <p>
              We handle ITR filing, TDS refunds, property repatriation, and DTAA claims for NRIs in the UAE, US, UK, Singapore, and Australia.
            </p>
            <div className="hero-cta">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Book an NRI Tax Call
              </a>
            </div>
          </div>
        </section>

        {/* Residency Section */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Know Your Status</span>
              <h2 className="section-title">Are You Actually Taxable in India?</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto' }}>
                Most NRIs assume their India tax obligation is simple. The residency rules say otherwise, especially after the new Income Tax Act 2025.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                {
                  label: 'Standard NRI',
                  rule: 'Less than 182 days in India in the financial year',
                  tax: 'Only Indian-sourced income is taxable.',
                  color: 'var(--accent)',
                },
                {
                  label: 'RNOR: New Rules from April 2026',
                  rule: '120+ days in India AND 365+ days over previous 4 years',
                  tax: 'Only Indian income taxable. Global income remains exempt for up to 3 years after returning.',
                  color: '#f59e0b',
                  highlight: true,
                },
                {
                  label: 'Deemed Resident',
                  rule: 'Indian income ₹15L+ and zero taxes paid in any foreign country',
                  tax: 'Treated as a full Indian resident even with 0 days spent in India.',
                  color: '#ef4444',
                },
              ].map((item, i) => (
                <div key={i} className="card" style={{ borderTop: `4px solid ${item.color}`, position: 'relative' }}>
                  {item.highlight && (
                    <div style={{ position: 'absolute', top: '-1px', right: '1.5rem', background: '#f59e0b', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '2px 10px', borderRadius: '0 0 6px 6px', letterSpacing: '0.5px' }}>NEW RULE</div>
                  )}
                  <div style={{ fontWeight: 800, color: item.color, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>{item.label}</div>
                  <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{item.rule}</p>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.tax}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <p style={{ color: 'var(--text-light)', fontSize: '0.93rem' }}>
                Not sure which category applies to you? <a href={bookingLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 700 }}>Let&apos;s work it out together.</a>
              </p>
            </div>
          </div>
        </section>

        {/* New Act Alert */}
        <section style={{ background: 'var(--primary)', padding: '2.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>⚡</div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>New Income Tax Act 2025: What Changed for NRIs (Effective April 1, 2026)</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  {[
                    { old: 'Form 15CA', new: 'Form 145', note: 'Filed before taxable foreign remittance' },
                    { old: 'Form 15CB', new: 'Form 146', note: 'CA certificate for remittances above ₹5L' },
                    { old: '60-day RNOR threshold', new: '120-day threshold', note: 'For Indian citizens visiting India frequently' },
                  ].map((change, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through', fontSize: '0.9rem' }}>{change.old}</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>→</span>
                        <span style={{ color: '#86efac', fontWeight: 800, fontSize: '0.95rem' }}>{change.new}</span>
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem' }}>{change.note}</div>
                    </div>
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', marginTop: '1rem', margin: '1rem 0 0' }}>
                  Forms 15CA/15CB filed before March 31, 2026 remain valid for remittances made on or before that date.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">What We Handle</span>
              <h2 className="section-title">NRI Tax Services</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                End-to-end compliance for Non-Resident Indians, handled remotely, with full documentation.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {services.map((s, i) => (
                <div key={i} className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Calendar */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Key Deadlines</span>
              <h2 className="section-title">NRI Compliance Calendar</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
              {deadlines.map((d, i) => (
                <div key={i} className="card">
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{d.date}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px', fontSize: '0.95rem' }}>{d.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">FAQs</span>
              <h2 className="section-title">Common NRI Tax Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqLd.mainEntity.map((faq, i) => (
                <div key={i} className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--primary)' }}>{faq.name}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', color: '#fff', textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Get Your NRI Tax Situation Sorted</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                We work with NRIs remotely across UAE, US, UK, Singapore, and Australia. One call to understand your situation: no hourly billing surprises.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Book an NRI Tax Call
                </a>
                <Link href="/blog" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  Read Our Tax Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_LINK } from '@/lib/constants'
import { buildBreadcrumbLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'NRI Tax Advisory',
  description: 'CA advisory for NRIs: ITR filing, TDS refunds, property repatriation, DTAA claims, and FEMA compliance. Serving NRIs in UAE, US, UK, Singapore, and Australia.',
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

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'NRI Tax Advisory', item: 'https://agrawalkhandelwal.com/nri-tax-advisory' },
])

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
        text: 'Yes. The sale proceeds are subject to capital gains tax in India. The buyer is required to deduct TDS at 12.5% on long-term gains (held over 2 years) or 30% on short-term gains, plus surcharge and 4% cess — effectively 13% to 17.81% for most long-term sales, depending on the sale value. After paying tax, the NRI can repatriate up to USD 1 million per financial year from the NRO account. Under the new Income Tax Act 2025, the foreign remittance process now uses Form 145 (replacing Form 15CA) and Form 146 (replacing Form 15CB), effective April 1, 2026.',
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

const bookingLink = BOOKING_LINK
const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'm%20an%20NRI%20and%20need%20help%20with%20my%20India%20tax%20situation."

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

const relatedReading = [
  { title: 'TDS on NRI Property Sale in India (FY 2026-27): Rates, Form 27Q & Refund Guide', link: '/blog/tds-on-nri-property-sale-india' },
  { title: 'NRI Property TDS Calculator', link: '/tools/nri-property-tds' },
  { title: 'Form 13 for NRI Property Sale: How to Get Lower TDS Certificate', link: '/blog/form-13-lower-deduction-certificate-nri' },
  { title: 'How NRIs Can Claim a TDS Refund on Property Sale in India', link: '/blog/nri-tds-refund-property-sale' },
  { title: 'TAN Application Guide for Buyers Purchasing Property from an NRI', link: '/blog/tan-application-guide-buyer-nri-property' },
  { title: 'Repatriating NRI Property Sale Proceeds: Form 145/146 & USD 1 Million Scheme', link: '/blog/nri-repatriation-property-sale-proceeds' },
  { title: 'Capital Gains Tax for NRIs on Inherited or Gifted Property in India', link: '/blog/nri-capital-gains-inherited-gifted-property' },
  { title: 'RNOR Status for Returning NRIs: How Long Is the Tax Holiday?', link: '/blog/rnor-status-tax-guide-returning-nris' },
  { title: 'NRE vs NRO Account: FEMA Repatriation Limits Explained', link: '/blog/nre-vs-nro-account-fema-repatriation-limits' },
  { title: 'ESOP Taxation for NRIs: Exercise, Sale & DTAA Relief', link: '/blog/esop-taxation-for-nris-india' },
  { title: 'POEM: When Does a Foreign Company Become an Indian Tax Resident?', link: '/blog/poem-place-of-effective-management-india' },
  { title: 'FEMA Compliance When Raising Foreign Funding: Startup Checklist', link: '/blog/fema-compliance-foreign-investment-startups' },
  { title: 'Dubai Company Registration Guide for Indian Entrepreneurs', link: '/blog/dubai-company-registration-guide' },
  { title: 'Section 195 TDS on Payments to NRIs: Complete Guide', link: '/blog/section-195-tds-nri-payments-guide' },
  { title: '26QB vs 27Q: Which TDS Form for NRI Property?', link: '/blog/26qb-vs-27q-nri-property-tds' },
  { title: 'NRO Account Repatriation: Rules, Limits & Process', link: '/blog/nro-account-repatriation-rules-process' },
  { title: 'Form 15CA & 15CB (145/146): Remittance Compliance', link: '/blog/form-15ca-15cb-nri-remittance-guide' },
  { title: 'NRI Returning to India: Financial Checklist', link: '/blog/nri-returning-india-financial-checklist' },
  { title: 'NRI Residential Status: 182-Day Rule Explained', link: '/blog/nri-residential-status-182-day-rule' },
  { title: 'Foreign Retirement Fund Taxation: 401(k), Pension & Super', link: '/blog/foreign-retirement-fund-taxation-nri' },
  { title: 'NRI Mutual Fund & Stock Taxation in India', link: '/blog/nri-mutual-fund-stock-taxation-india' },
  { title: 'NRI Rental Income Tax: TDS, Deductions & Filing', link: '/blog/nri-rental-income-tax-india' },
  { title: 'NRI ITR Filing Guide from Abroad', link: '/blog/nri-itr-filing-guide-from-abroad' },
  { title: 'India DTAA Guide for NRIs by Country', link: '/blog/dtaa-guide-nri-country-wise' },
  { title: 'TDS on NRO Interest & FD: DTAA Relief', link: '/blog/tds-nro-interest-fd-dtaa-relief' },
  { title: 'NRI Gift & Inheritance Tax Rules', link: '/blog/nri-gift-inheritance-tax-rules' },
  { title: 'Schedule FA: Foreign Asset Disclosure', link: '/blog/schedule-fa-foreign-asset-disclosure-nri' },
  { title: 'PAN Card for NRIs: Application & Aadhaar', link: '/blog/pan-card-nri-application-aadhaar-linking' },
  { title: 'NRI Tax Compliance Calendar (FY 2026-27)', link: '/blog/nri-tax-compliance-calendar-deadlines' },
  { title: 'LRS: USD 250K Limit & TCS Guide', link: '/blog/lrs-liberalised-remittance-scheme-guide' },
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
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
              We offer evening and weekend call slots to match US, UK, and Gulf time zones — most of our NRI clients never need to take time off work to talk to us.
            </p>
            <div className="hero-cta">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Book an NRI Tax Call
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Who is an NRI for Tax Purposes */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Who is an NRI for Tax Purposes in India?</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.02rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
              A Non-Resident Indian (NRI) for income tax purposes is an Indian citizen or person of Indian origin who spends <strong style={{ color: 'var(--text-main)' }}>fewer than 182 days in India</strong> during a financial year. NRIs are taxed in India only on income earned or received in India — rent from Indian property, interest on NRO accounts, capital gains on Indian shares or real estate, and income from any Indian business or profession. Global income remains fully exempt from Indian tax. The residency threshold was revised under the new Income Tax Act 2025 (effective April 1, 2026) for certain categories of Indian citizens.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
              {[
                { term: 'NRI (Non-Resident Indian)', def: 'Spends fewer than 182 days in India in a financial year. Taxed only on Indian-sourced income.' },
                { term: 'RNOR (Resident but Not Ordinarily Resident)', def: 'Transitional status for returning NRIs — global income remains tax-free for up to 3 years after return to India.' },
                { term: 'Deemed Resident', def: 'An Indian citizen with Indian income above ₹15 lakh who is not taxed in any other country is treated as an Indian resident.' },
                { term: 'NRO vs NRE Account', def: 'NRO accounts hold Indian-sourced income (taxable); NRE accounts hold foreign earnings repatriated to India (tax-exempt interest).' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.88rem' }}>{item.term}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.def}</div>
                </div>
              ))}
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

        {/* Related Reading */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Property Sale Guides</span>
              <h2 className="section-title">NRI Property TDS &amp; Repatriation Reading</h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto' }}>
                Selling property in India as an NRI? Our full guide series covers TDS rates, TAN, Form 13, refunds, and repatriation in detail.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
              {relatedReading.map((item, i) => (
                <Link key={i} href={item.link} className="card" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                  <p style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.5, flex: 1, margin: 0 }}>{item.title}</p>
                  <div style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                    Read Guide <span>→</span>
                  </div>
                </Link>
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
                We work with NRIs remotely across UAE, US, UK, Singapore, and Australia, with evening and weekend slots to match your time zone. One call to understand your situation: no hourly billing surprises.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Book an NRI Tax Call
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  Message Us on WhatsApp
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

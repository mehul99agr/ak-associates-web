import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'
import { BOOKING_LINK } from '@/lib/constants'
import { buildBreadcrumbLd, buildFaqLd, buildServiceLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'UAE Corporate Tax',
  description: 'UAE Corporate Tax consultants for Indian businesses. UAE CT compliance (9%), India-UAE DTAA advisory, Free Zone structuring, and repatriation planning.',
  keywords: [
    'UAE corporate tax consultant India', 'UAE CT advisory India',
    'India UAE DTAA consultant', 'UAE corporate tax India',
    'UAE tax advisor India', 'UAE 9% corporate tax India',
    'India UAE double taxation', 'UAE free zone tax India',
    'UAE CT compliance India', 'UAE corporate tax filing India',
    'India UAE tax planning', 'UAE corporate tax CA India',
    'UAE corporate tax Mumbai', 'UAE corporate tax Nashik',
    'UAE corporate tax Bangalore', 'Indian company UAE tax',
    'repatriation UAE India', 'DTAA UAE India benefits',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/uae-tax-advisory' },
  openGraph: {
    title: 'UAE Corporate Tax Consultant India | India-UAE DTAA | Agrawal Khandelwal & Associates LLP',
    description: 'Certified UAE CT advisory for Indian businesses. 9% CT compliance, India-UAE DTAA claims, Free Zone structuring, and repatriation planning by a UAE CT-certified CA.',
    url: 'https://agrawalkhandelwal.com/uae-tax-advisory',
  },
}

const bookingLink = BOOKING_LINK

const services = [
  {
    icon: 'flag',
    title: 'UAE Corporate Tax (CT) Compliance',
    desc: 'Registration with the Federal Tax Authority (FTA), determination of taxable vs. exempt income, CT return preparation, and filing for UAE entities - including mainland, Free Zone, and group structures.',
  },
  {
    icon: 'scale',
    title: 'India-UAE DTAA Advisory',
    desc: 'The India-UAE Double Taxation Avoidance Agreement (DTAA) significantly reduces withholding taxes on dividends, interest, and royalties. We advise on treaty eligibility, LOB provisions, and the most tax-efficient payment structures between India and UAE entities.',
  },
  {
    icon: 'building',
    title: 'Free Zone Entity Structuring',
    desc: 'UAE Free Zone companies must meet Qualifying Free Zone Person (QFZP) criteria to maintain the 0% CT rate. We assess your structure against QFZP conditions - substance requirements, qualifying income tests, and de minimis thresholds - and advise on any restructuring required.',
  },
  {
    icon: 'rupee',
    title: 'Repatriation & Dividend Planning',
    desc: 'Moving profits from UAE to India, or vice versa, involves FTA rules, DTAA withholding rates, FEMA compliance, and Indian tax implications. We structure repatriation to minimise tax leakage at both ends.',
  },
  {
    icon: 'package',
    title: 'Transfer Pricing - UAE to India',
    desc: 'Transactions between an Indian subsidiary and its UAE parent (or sister entity) require arm\'s length pricing documentation on both sides. We prepare consistent TP documentation covering both Indian and UAE regulatory requirements.',
  },
  {
    icon: 'rocket',
    title: 'India Entry for UAE Businesses',
    desc: 'UAE companies looking to set up in India face a complex entry decision: branch, subsidiary, or LLP. We advise on optimal structure, FEMA compliance, FDI approvals, and ongoing transfer pricing between the UAE parent and Indian entity.',
  },
]

const faqs = [
  {
    q: 'Does a UAE company owned by Indians need to file UAE Corporate Tax?',
    a: 'Yes. The UAE Corporate Tax regime (effective for financial years starting on or after 1 June 2023) applies to all UAE-resident entities including those owned by Indian nationals or Indian companies. The standard rate is 9% on taxable income exceeding AED 375,000. Entities with income below this threshold pay 0% but must still register with the FTA and, depending on their status, file a return.',
  },
  {
    q: 'How does the India-UAE DTAA reduce double taxation?',
    a: 'The India-UAE DTAA (signed 1993, amended 2007) provides reduced withholding tax rates: dividends are taxed at 10% (vs the standard 20% under Indian domestic law), interest at 12.5%, and royalties at 10%. To claim these rates, the UAE entity must provide a valid Tax Residency Certificate (TRC) issued by the UAE MoF and file Form 10F with the Indian tax authorities. Without a TRC, the Indian payer must deduct at the higher domestic rate.',
  },
  {
    q: 'What is a Qualifying Free Zone Person (QFZP) and how does it affect CT?',
    a: 'A Qualifying Free Zone Person (QFZP) is a Free Zone entity that meets specific UAE CT requirements to benefit from a 0% tax rate on its Qualifying Income. To qualify, the entity must: (1) maintain adequate substance in the UAE Free Zone; (2) derive only Qualifying Income (income from transactions with other Free Zone entities or from specific permitted activities); (3) not have elected to be subject to standard CT; and (4) comply with transfer pricing rules. Income from transactions with mainland UAE parties or income that doesn\'t meet the qualifying test is taxed at 9%. We assess QFZP eligibility as part of our UAE CT engagement.',
  },
  {
    q: 'What FEMA obligations arise when an Indian company receives dividends from a UAE subsidiary?',
    a: 'When an Indian company receives dividends from its overseas subsidiary, the dividends are repatriated under RBI\'s Liberalised Remittance Scheme (LRS) framework for corporates. The Indian company must: (1) report the receipt in its annual FEMA return (APR - Annual Performance Report); (2) include the foreign dividend in its Indian taxable income (Section 115BBD provides a concessional 15% tax rate on certain foreign dividends); and (3) claim the DTAA benefit to avoid double taxation on the same income. We manage this end-to-end.',
  },
  {
    q: 'Does having a UAE entity create a Permanent Establishment (PE) risk in India?',
    a: 'Yes, Permanent Establishment risk is a critical concern for UAE businesses operating in India. If the UAE company has employees, agents, or a fixed place of business in India that conclude contracts on its behalf, the Indian tax authorities may treat the UAE entity as having a PE in India - making its profits attributable to India taxable here. We review your operational structure, employee roles, and contract flows to identify and mitigate PE exposure before it becomes a problem.',
  },
]

const faqLd = buildFaqLd(faqs)

const serviceLd = buildServiceLd({
  name: 'UAE Corporate Tax Advisory - Agrawal Khandelwal & Associates LLP',
  description: 'UAE Corporate Tax compliance, India-UAE DTAA advisory, Free Zone structuring, and repatriation planning for Indian businesses and UAE companies with India operations.',
  url: 'https://agrawalkhandelwal.com/uae-tax-advisory',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: ['UAE Corporate Tax Filing', 'India-UAE DTAA Advisory', 'Free Zone QFZP Analysis', 'Repatriation Planning', 'PE Risk Assessment', 'Transfer Pricing UAE-India'],
})

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'UAE Tax Advisory', item: 'https://agrawalkhandelwal.com/uae-tax-advisory' },
])

export default function UAETaxAdvisory() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

        {/* Hero */}
        <section className="hero">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="hero-badge">UAE Corporate Tax · India-UAE DTAA</span>
            <h1>
              UAE Corporate Tax Advisory<br />for Indian Businesses
            </h1>
            <p>
              Whether you run a UAE Free Zone company, an Indian subsidiary of a UAE parent, or are structuring a cross-border business - we provide expert UAE CT compliance and India-UAE tax advisory.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,215,0,0.15)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '8px', padding: '10px 18px', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🏆</span>
              <span style={{ color: '#fde68a', fontSize: '0.88rem', fontWeight: 700 }}>CA Mehul Agrawal holds a UAE Corporate Taxation certification - one of very few CAs in India with this credential.</span>
            </div>
            <div className="hero-cta">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Book a UAE Tax Consultation
              </a>
            </div>
          </div>
        </section>

        {/* What is UAE Corporate Tax */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What is UAE Corporate Tax?</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.02rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
              UAE Corporate Tax (CT) is a federal tax effective for financial years beginning on or after June 1, 2023, levied at a standard rate of <strong style={{ color: 'var(--text-main)' }}>9% on taxable profits above AED 375,000</strong> (approximately ₹85 lakh). It applies to all UAE-resident entities — mainland companies, Free Zone entities, branches, and subsidiaries — including those owned by Indian nationals or Indian companies. Free Zone businesses can maintain a <strong style={{ color: 'var(--text-main)' }}>0% rate on Qualifying Income</strong> provided they meet substance requirements as a Qualifying Free Zone Person (QFZP); income from mainland UAE transactions or non-qualifying activities is taxed at the standard 9%.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
              {[
                { term: 'Standard CT Rate', def: '9% on taxable income above AED 375,000 (~₹85 lakh). Income below this threshold is taxed at 0%.' },
                { term: 'Qualifying Free Zone Person (QFZP)', def: 'A Free Zone entity meeting UAE substance and activity tests that earns a 0% CT rate on its Qualifying Income only.' },
                { term: 'Small Business Relief', def: 'Businesses with revenue below AED 3 million can elect Small Business Relief and pay 0% CT for financial years up to Dec 31, 2026.' },
                { term: 'India-UAE DTAA', def: 'The India-UAE Double Taxation Avoidance Agreement reduces withholding tax on dividends to 10% and interest to 12.5%, preventing double taxation.' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.88rem' }}>{item.term}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.def}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CT overview */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">The New Landscape</span>
              <h2 className="section-title">UAE Corporate Tax - What Indian Businesses Must Know</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
              {[
                { label: 'Standard CT Rate', value: '9%', note: 'On taxable income above AED 375,000 (~₹85 lakh)', color: 'var(--accent)' },
                { label: 'Small Business Relief', value: '0%', note: 'Revenue below AED 3 million for qualifying SMEs', color: '#10b981' },
                { label: 'Free Zone Rate', value: '0%', note: 'Only on Qualifying Income for QFZPs - other income taxed at 9%', color: '#f59e0b' },
                { label: 'Effective Date', value: 'Jun 2023', note: 'For financial years beginning on or after 1 June 2023', color: 'var(--primary)' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', borderTop: `4px solid ${item.color}` }}>
                  <div style={{ fontWeight: 800, color: item.color, fontSize: '1.8rem', marginBottom: '0.25rem' }}>{item.value}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{item.label}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.83rem', lineHeight: 1.5 }}>{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="section-badge">Our Services</span>
              <h2 className="section-title">UAE Tax Advisory Services</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
              {services.map((s, i) => (
                <div key={i} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                  <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}><Icon name={s.icon} size={32} /></div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study */}
        <section className="section bg-surface">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Proven Result</span>
              <h2 className="section-title">India-UAE Structure That Delivered</h2>
            </div>
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Cross-Border Tax Optimisation - UAE Parent, Indian Subsidiary</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Structured a tax-efficient route for a UAE-based client incorporating an Indian subsidiary. Optimised the India-UAE DTAA position on management fees and royalties, prepared TP documentation for both jurisdictions, and ensured FEMA compliance - resulting in 100% regulatory compliance and an estimated 15% reduction in cross-border tax leakage.
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Sunny Stephen</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultant, BMG India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet CA */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">Your UAE Tax CA</span>
              <h2 className="section-title">Who Handles Your UAE Advisory</h2>
            </div>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                  <Image src="/mehul.jpg" alt="CA Mehul Agrawal - UAE Corporate Tax Consultant India" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner - UAE & International Tax</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(210,43,43,0.08)', border: '1px solid rgba(210,43,43,0.2)', borderRadius: '6px', padding: '6px 14px', marginBottom: '1.25rem' }}>
                  <span>🏆</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent)' }}>UAE Corporate Taxation - Certified</span>
                </div>
                <p style={{ fontSize: '0.93rem', color: 'var(--text-light)', lineHeight: 1.8, textAlign: 'justify' }}>
                  CA Mehul is one of very few Chartered Accountants in India to hold a formal UAE Corporate Taxation certification. He advises Indian businesses operating in UAE, UAE companies setting up in India, and NRI entrepreneurs managing cross-border structures - with a specialisation in India-UAE DTAA, Free Zone compliance, and transfer pricing between both jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-surface">
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge">UAE Tax Questions</span>
              <h2 className="section-title">UAE Corporate Tax FAQs for Indian Businesses</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="card">
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--primary)' }}>{q}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>India-UAE Tax - Sorted by a Certified Expert</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                Whether you need UAE CT registration, DTAA planning, or a full India-UAE structure review - we bring the only UAE Corporate Taxation-certified CA practice to the conversation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  Book a UAE Tax Call
                </a>
                <Link href="/nri-tax-advisory" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  NRI Tax Advisory
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <Link href="/blog/poem-place-of-effective-management-india" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  POEM: When a UAE company becomes an Indian tax resident
                </Link>
                <Link href="/blog/dubai-company-registration-guide" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  Dubai company registration guide
                </Link>
                <Link href="/blog/india-uae-transfer-pricing-compliance" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  India-UAE transfer pricing compliance
                </Link>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}

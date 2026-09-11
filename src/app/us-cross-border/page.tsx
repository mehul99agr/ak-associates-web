import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../Icon'
import { BOOKING_LINK } from '@/lib/constants'
import { buildBreadcrumbLd, buildFaqLd, buildServiceLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'US Incorporation & Compliance for Indian Founders',
  description: 'US entity structuring for Indian founders: LLC vs C-Corp, EIN/ITIN, FBAR/FATCA, Form 5471/5472/8858, US sales tax nexus, and India-US DTAA advisory.',
  keywords: [
    'US incorporation for Indian founders', 'US LLC compliance India',
    'FBAR FATCA filing India', 'Form 5472 foreign owned LLC',
    'US sales tax nexus India', 'India US DTAA advisory',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/us-cross-border' },
  openGraph: {
    title: 'US Incorporation & Compliance for Indian Founders | Agrawal Khandelwal & Associates LLP',
    description: 'LLC vs C-Corp structuring, EIN/ITIN, FBAR/FATCA, IRS foreign-ownership filings, US sales tax nexus, and India-US DTAA advisory for Indian founders running a US entity.',
    url: 'https://agrawalkhandelwal.com/us-cross-border',
  },
}

const bookingLink = BOOKING_LINK

const services = [
  {
    icon: 'building',
    title: 'Entity Structuring: LLC vs C-Corp',
    desc: 'Choosing between a pass-through LLC and a Delaware C-Corp based on your fundraising plans, and structuring the common two-entity setup pairing a US parent with an Indian subsidiary.',
    link: '/blog/us-llc-vs-c-corp-indian-founders',
  },
  {
    icon: 'document',
    title: 'Incorporation, EIN & ITIN',
    desc: 'Remote incorporation in Delaware or Wyoming, EIN applications without an SSN, and correctly sequencing your ITIN application only when a personal US filing is actually due.',
    link: '/blog/delaware-wyoming-incorporation-ein-itin-guide',
  },
  {
    icon: 'shield',
    title: 'FBAR & FATCA Disclosure',
    desc: 'Mapping your US and Indian financial accounts against the FBAR $10,000 aggregate threshold and the separate FATCA Form 8938 thresholds, so nothing gets missed.',
    link: '/blog/fbar-fatca-us-llc-indian-founders',
  },
  {
    icon: 'scale',
    title: 'IRS Foreign-Ownership Filings',
    desc: 'Identifying whether Form 5471, 5472, or 8858 applies to your structure, and filing the one your foreign-owned US LLC actually needs.',
    link: '/blog/form-5471-5472-8858-foreign-owned-us-entity',
  },
  {
    icon: 'globe',
    title: 'US Sales Tax Nexus',
    desc: 'Tracking state-by-state economic nexus thresholds for your SaaS or services revenue, and registering only once a threshold is actually crossed.',
    link: '/blog/us-sales-tax-nexus-indian-saas-companies',
  },
  {
    icon: 'calendar',
    title: 'Annual Compliance Calendar',
    desc: 'Annual report and franchise tax deadlines, registered agent renewal, estimated tax payments, and confirming your BOI reporting exemption as a domestic LLC.',
    link: '/blog/us-llc-annual-compliance-calendar-non-resident',
  },
]

const faqs = [
  {
    q: 'I run a US LLC from India. What compliance actually applies to me?',
    a: 'At minimum: an annual state filing (annual report and/or franchise tax), a federal information return if your LLC is foreign-owned (usually Form 5472), and an FBAR/FATCA review of your Indian and US accounts. If you have US sales revenue, add state sales tax nexus monitoring. We map this out specific to your entity and state of formation.',
  },
  {
    q: 'Should I set up an LLC or a Delaware C-Corp?',
    a: 'If you plan to raise institutional venture capital, a Delaware C-Corp is almost always the right call - VC funds are structured to invest in stock, not LLC membership interests. If you are bootstrapping on your own revenue with no near-term fundraising plan, an LLC is usually simpler and cheaper to run, provided you plan for its pass-through "phantom income" tax treatment.',
  },
  {
    q: 'Do I need to file Form 5471 or Form 5472?',
    a: 'It depends on the direction of ownership. Form 5472 applies when a foreign person (you) owns at least 25% of a US entity - this is the form almost every Indian-owned single-member US LLC needs. Form 5471 runs the other way, for a US person owning a foreign corporation, which is not the typical scenario for an Indian founder with a US LLC.',
  },
  {
    q: 'Is a US LLC I own from India exempt from BOI reporting?',
    a: 'Yes, since FinCEN\'s March 2025 interim final rule. A domestic US LLC - including one wholly owned by a foreign person - is no longer required to file beneficial ownership information, because "reporting company" now only covers entities formed under a foreign country\'s law that register to do business in the US.',
  },
  {
    q: 'Can you handle both my US entity compliance and my Indian tax filings?',
    a: 'Yes. Running both under one engagement means your US LLC/C-Corp compliance, your Indian ITR and GST filings, and your India-US DTAA position are handled with a single point of accountability, rather than coordinating between two separate advisors who don\'t see each other\'s work.',
  },
]

const faqLd = buildFaqLd(faqs)

const serviceLd = buildServiceLd({
  name: 'US Incorporation & Compliance Advisory - Agrawal Khandelwal & Associates LLP',
  description: 'US entity structuring, EIN/ITIN, FBAR/FATCA, IRS foreign-ownership filings, US sales tax nexus, and India-US DTAA advisory for Indian founders.',
  url: 'https://agrawalkhandelwal.com/us-cross-border',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
  ],
  serviceType: ['US LLC & C-Corp Structuring', 'EIN & ITIN Filing', 'FBAR & FATCA Compliance', 'Form 5472 Filing', 'US Sales Tax Nexus Advisory', 'India-US DTAA Advisory'],
})

const breadcrumbLd = buildBreadcrumbLd([
  { name: 'Home', item: 'https://agrawalkhandelwal.com' },
  { name: 'US Cross-Border', item: 'https://agrawalkhandelwal.com/us-cross-border' },
])

export default function UsCrossBorder() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Hero */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="hero-badge">US Incorporation · FBAR/FATCA · India-US DTAA</span>
          <h1>
            US Incorporation & Compliance<br />for Indian Founders
          </h1>
          <p>
            Running a US LLC or C-Corp from India comes with its own compliance calendar - separate from, but connected to, your Indian filings. We handle both under one engagement.
          </p>
          <div className="hero-cta">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Book a US Compliance Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Why This Needs a Specialist, Not Just a Generalist CA</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.02rem', lineHeight: 1.9, marginBottom: '1.75rem' }}>
            An Indian founder with a US LLC or C-Corp is sitting on two overlapping compliance calendars: US state and federal filings, and Indian income tax and FEMA obligations. Missing either side is expensive - <strong style={{ color: 'var(--text-main)' }}>Form 5472 penalties alone start at $25,000</strong> per year for a foreign-owned US entity that fails to file. We run both sides under a single engagement so nothing falls into the gap between a US-side accountant who doesn&apos;t know your Indian position, and an Indian CA who doesn&apos;t track US filings.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1rem' }}>
            {[
              { term: 'FBAR Threshold', def: '$10,000 aggregate across foreign financial accounts at any point in the year triggers a FinCEN Form 114 filing.' },
              { term: 'Form 5472 Penalty', def: 'Starts at $25,000 per year for a foreign-owned US LLC or corporation that misses this federal information return.' },
              { term: 'BOI Reporting', def: 'A domestic US LLC, even if wholly foreign-owned, has been exempt from beneficial ownership reporting since March 2025.' },
              { term: 'Economic Nexus', def: 'US states can require sales tax registration from sales volume alone - commonly around $100,000 - with no physical presence required.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.88rem' }}>{item.term}</div>
                <div style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">US Cross-Border Compliance Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <Link key={i} href={s.link} className="card" style={{ display: 'block', textDecoration: 'none', borderLeft: '4px solid var(--primary)' }}>
                <div style={{ marginBottom: '1rem', color: 'var(--primary)' }}><Icon name={s.icon} size={32} /></div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>{s.desc}</p>
                <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.85rem' }}>Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet CA */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Your Cross-Border CA</span>
            <h2 className="section-title">Who Handles Your US Compliance</h2>
          </div>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal - US Cross-Border Compliance Consultant" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner - International & Cross-Border Tax</p>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-light)', lineHeight: 1.8, textAlign: 'justify' }}>
                Mehul advises Indian founders running US LLCs and C-Corps on entity structuring, IRS foreign-ownership filings, FBAR/FATCA disclosure, and how their US position interacts with Indian tax and FEMA compliance - the same cross-border discipline he applies to UAE Corporate Tax and transfer pricing engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Common Questions</span>
            <h2 className="section-title">US Cross-Border FAQs for Indian Founders</h2>
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
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Two Compliance Calendars, One Point of Accountability</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Whether you need entity structuring advice, an overdue Form 5472, or a full US-India compliance review - we bring both sides of the border into one engagement.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Book a US Compliance Call
              </a>
              <Link href="/uae-tax-advisory" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
                UAE Tax Advisory
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/blog/india-us-dtaa-guide" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'underline' }}>
                India-US DTAA: permanent establishment guide
              </Link>
              <Link href="/blog/us-sales-tax-nexus-indian-saas-companies" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textDecoration: 'underline' }}>
                US sales tax nexus for SaaS companies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

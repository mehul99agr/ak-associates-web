import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '../Icon'
import { OG_IMAGES } from '@/lib/constants'
import BreadcrumbLd from '@/app/_components/BreadcrumbLd'

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What CA services does Agrawal Khandelwal & Associates LLP offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three practice groups: NRI Taxation (NRI returns, property sales, lower TDS certificates, repatriation, DTAA and FEMA), International Tax & Transfer Pricing (Form 3CEB, benchmarking, DTAA positions, UAE Corporate Tax, US entity compliance for Indian founders), and Companies & Startups (incorporation, foreign subsidiaries, ROC compliance, statutory audit, FDI reporting and ESOPs).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle GST or routine income tax return filing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We focus on NRI, transfer pricing and cross-border work, plus incorporation and company compliance. For GST and routine domestic income tax filing we suggest a local practitioner; we work alongside them on the international side.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Agrawal Khandelwal different from a typical CA firm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most CA firms are built around domestic compliance filing. Our practice is built around cross-border questions: transfer pricing documentation, DTAA and FEMA positions, NRI property sales and repatriation, UAE corporate tax and US entity filings for Indian founders. That is why NRIs and founders bring us questions their existing CA cannot answer.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'NRI, Transfer Pricing & International Tax Services',
  description: 'NRI taxation and FEMA, transfer pricing, DTAA, UAE Corporate Tax, US entity compliance for Indian founders, company incorporation and ROC compliance.',
  keywords: [
    'international tax consultant India', 'transfer pricing consultant India',
    'DTAA advisory India', 'FEMA compliance India',
    'UAE corporate tax India', 'NRI taxation consultant',
    'statutory audit India', 'Form 3CEB transfer pricing',
    'CA services Mumbai', 'CA services Bangalore',
    'offshore accounting India', 'outsourced bookkeeping India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/services' },
  openGraph: {
    title: 'NRI, Transfer Pricing & International Tax Services',
    description: 'NRI taxation, transfer pricing, DTAA, FEMA, UAE Corporate Tax, US entity compliance and company incorporation.',
    url: 'https://agrawalkhandelwal.com/services',
    images: OG_IMAGES,
  },
}

const categories = [
  {
    title: 'NRI Taxation',
    id: 'nri',
    icon: 'globe',
    items: [
      { name: 'NRI Income Tax Returns', detail: 'Residential status, the right ITR form, DTAA relief and TDS refunds, filed remotely.', link: '/nri-tax-advisory', linkLabel: 'View details' },
      { name: 'NRI Property Sale', detail: 'Capital gains, lower TDS certificate (Form 128) and Form 145/146 for repatriation.', link: '/blog/tds-on-nri-property-sale-india', linkLabel: 'Read the guide' },
      { name: 'NRE / NRO & Repatriation', detail: 'Which account money belongs in, NRO TDS, and moving funds abroad under FEMA.', link: '/blog/nre-vs-nro-account-fema-repatriation-limits', linkLabel: 'Read the guide' },
      { name: 'Returning NRIs (RNOR)', detail: 'Planning the RNOR window and foreign income when you move back to India.', link: '/blog/rnor-status-tax-guide-returning-nris', linkLabel: 'Read the guide' },
    ],
  },
  {
    title: 'International Tax & Transfer Pricing',
    id: 'international',
    icon: 'scale',
    items: [
      { name: 'Transfer Pricing', detail: 'Benchmarking, Local File, Form 3CEB, Master File and CbCR, and TP assessments.', link: '/transfer-pricing', linkLabel: 'View details' },
      { name: 'DTAA & Cross-Border Structuring', detail: 'Treaty positions, POEM, GAAR and holding structures across India, the UAE and the US.', link: '/blog/navigating-international-taxation-dtaa', linkLabel: 'Read the guide' },
      { name: 'UAE Corporate Tax', detail: '9% CT compliance, Free Zone structuring and the India-UAE DTAA.', link: '/uae-tax-advisory', linkLabel: 'View details' },
      { name: 'US Entity Compliance', detail: 'Form 1120 / 5472, Delaware franchise tax and FBAR for Indian founders.', link: '/us-cross-border', linkLabel: 'View details' },
    ],
  },
  {
    title: 'Companies & Startups',
    id: 'company',
    icon: 'rocket',
    items: [
      { name: 'Company & LLP Incorporation', detail: 'Pvt Ltd, LLP and OPC registration, and Indian subsidiaries of foreign companies.', link: '/company-incorporation', linkLabel: 'View details' },
      { name: 'ROC Compliance & Statutory Audit', detail: 'AOC-4, MGT-7, DIR-3 KYC and the audit under the Companies Act.', link: '/blog/annual-roc-filing-aoc4-mgt7-dir3-kyc', linkLabel: 'Read the guide' },
      { name: 'FEMA & Foreign Investment', detail: 'FDI reporting (FC-GPR), ODI for overseas subsidiaries, and RBI compliance.', link: '/blog/fema-compliance-foreign-investment-startups', linkLabel: 'Read the guide' },
      { name: 'Startups & Virtual CFO', detail: 'ESOPs, valuation, fundraising support and finance for funded startups.', link: '/startups', linkLabel: 'View details' },
    ],
  },
]

export default function Services() {
  return (
    <>
    <BreadcrumbLd items={[{ name: 'Services', path: '/services' }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-badge">Our Capabilities</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>NRI, Transfer Pricing &amp; International Tax</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              A focused practice for NRIs, Indian founders and international groups, with the incorporation and company compliance that goes with it.
            </p>
          </div>

          <div className="blog-content" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
            <h2>What Does a Chartered Accountant Firm for NRIs and International Tax Do?</h2>
            <p>Agrawal Khandelwal &amp; Associates LLP is a Chartered Accountant firm built around three practice groups: <strong>NRI Taxation</strong> (returns, property sales, repatriation, DTAA and FEMA), <strong>International Tax &amp; Transfer Pricing</strong> (Form 3CEB, benchmarking, DTAA, UAE Corporate Tax, US entity compliance), and <strong>Companies &amp; Startups</strong> (incorporation, foreign subsidiaries, ROC compliance, statutory audit, foreign investment). Founded in 2023 and led by CA Mehul Agrawal (Nashik) and CA Rupesh Khandelwal (Sillod), we serve NRIs, founders and groups with cross-border exposure. We do not take on GST or routine domestic income tax work.</p>

            <h2>How to Choose the Right Service for Your Situation</h2>
            <p>Most engagements start in one of three places. If you are <strong>raising foreign investment or setting up abroad</strong> (UAE, or FDI into an Indian entity), start with <Link href="/transfer-pricing" style={{ color: 'var(--primary)', fontWeight: 600 }}>Transfer Pricing</Link> or <Link href="/uae-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>UAE Tax Advisory</Link>. If you are an <strong>NRI</strong> dealing with property sale, repatriation, or Indian income, start with <Link href="/nri-tax-advisory" style={{ color: 'var(--primary)', fontWeight: 600 }}>NRI Tax Advisory</Link>. If you are a <strong>founder incorporating or scaling a startup</strong>, start with <Link href="/company-incorporation" style={{ color: 'var(--primary)', fontWeight: 600 }}>Company Incorporation</Link> or <Link href="/startups" style={{ color: 'var(--primary)', fontWeight: 600 }}>Startup Advisory</Link>. For a group with entities in more than one country, the same team keeps the transfer pricing, DTAA and FEMA positions consistent.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem' }}>
            {categories.map((cat, i) => (
              <div key={i} id={cat.id} className="card" style={{ padding: '2.5rem', scrollMarginTop: '110px' }}>
                <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={cat.icon} size={44} /></div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>{cat.title}</h2>
                <ul style={{ listStyle: 'none' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: j < cat.items.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <h3 style={{ fontSize: '1rem', marginBottom: '6px', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontWeight: 700 }}>{item.name}</h3>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>{item.detail}</p>
                      <Link href={item.link} style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>{item.linkLabel} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4.5rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Specialised Practice Areas</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {[
                { label: 'NRI Tax Advisory', href: '/nri-tax-advisory' },
                { label: 'Transfer Pricing', href: '/transfer-pricing' },
                { label: 'US Cross-Border Compliance', href: '/us-cross-border' },
                { label: 'UAE Tax Advisory', href: '/uae-tax-advisory' },
                { label: 'Offshore Accounting', href: '/offshore-accounting' },
                { label: 'Company Incorporation', href: '/company-incorporation' },
                { label: 'Startup Advisory', href: '/startups' },
              ].map(s => (
                <Link key={s.href} href={s.href} style={{ padding: '10px 22px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>{s.label} →</Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4.5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqLd.mainEntity.map((faq, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{faq.name}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4.5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}>Related Guides</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {[
                { label: 'Form 3CEB & Transfer Pricing Audit', href: '/blog/form-3ceb-transfer-pricing-audit-report' },
                { label: 'TDS on NRI Property Sale', href: '/blog/tds-on-nri-property-sale-india' },
                { label: 'Company Name Reservation (SPICe+ / RUN)', href: '/blog/company-name-reservation-run-form-india' },
              ].map(g => (
                <Link key={g.href} href={g.href} style={{ padding: '10px 22px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '50px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent)' }}>{g.label} →</Link>
              ))}
            </div>
          </div>

          <div style={{ margin: '80px auto 0', maxWidth: '800px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Need a Specialized Strategy?</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-light)', fontSize: '1rem' }}>
              Tell us about your NRI, transfer pricing or cross-border matter and we will tell you how we can help.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/consult" className="btn btn-primary">Book a Consultation</a>
              <a href="mailto:mehul@agrawalkhandelwal.com" className="btn btn-outline">Email Our Experts</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tax Insights & Advisory | International Tax, Startup & UAE Compliance',
  description: 'CA insights on International Tax, Transfer Pricing, DTAA, UAE Corporate Tax, startup compliance, and NRI taxation. Agrawal Khandelwal & Associates LLP.',
  keywords: [
    'international tax insights India', 'transfer pricing India blog',
    'UAE corporate tax news', 'startup compliance India',
    'DTAA India guide', 'NRI taxation India',
    'GST compliance updates', 'CA insights India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog' },
  openGraph: {
    title: 'Tax Insights & Advisory | International Tax, Startup & UAE Compliance',
    description: 'Expert insights on International Tax, Transfer Pricing, DTAA, UAE Corporate Tax, and startup compliance from our CA team.',
    url: 'https://agrawalkhandelwal.com/blog',
  },
}

const posts = [
  {
    title: 'NRI Tax Compliance Calendar: Every Deadline (FY 2026-27)',
    slug: 'nri-tax-compliance-calendar-deadlines',
    date: 'August 14, 2026',
    category: 'NRI Taxation',
    summary: 'Advance tax, ITR filing, Form 27Q, Form 145/146, and every other deadline NRIs need to track.',
  },
  {
    title: 'India DTAA Guide for NRIs by Country: US, UK, UAE, Canada, Australia, Singapore',
    slug: 'dtaa-guide-nri-country-wise',
    date: 'August 11, 2026',
    category: 'International Tax',
    summary: 'Treaty rates for 6 key NRI corridors, TRC and Form 10F process, and foreign tax credit claims.',
  },
  {
    title: 'Foreign Retirement Fund Taxation: 401(k), UK Pension & Superannuation',
    slug: 'foreign-retirement-fund-taxation-nri',
    date: 'August 6, 2026',
    category: 'NRI Taxation',
    summary: 'How India taxes US 401(k), UK pension, and Australian super withdrawals. RNOR window strategy, DTAA relief, and timing decisions.',
  },
  {
    title: 'NRI Returning to India: Complete Financial Checklist (2026)',
    slug: 'nri-returning-india-financial-checklist',
    date: 'August 1, 2026',
    category: 'NRI Taxation',
    summary: 'Bank account conversion, RNOR planning, investment restructuring, insurance, and FEMA steps for NRIs moving back to India.',
  },
  {
    title: 'Schedule FA: Foreign Asset Disclosure for Returning Indians',
    slug: 'schedule-fa-foreign-asset-disclosure-nri',
    date: 'July 28, 2026',
    category: 'NRI Taxation',
    summary: 'When Schedule FA kicks in (Resident/RNOR only), what to declare, and Rs 10 lakh penalty for non-disclosure.',
  },
  {
    title: 'NRI ITR Filing Guide: Which Form, How to File from Abroad',
    slug: 'nri-itr-filing-guide-from-abroad',
    date: 'July 22, 2026',
    category: 'NRI Taxation',
    summary: 'ITR-2 vs ITR-3, documents needed, e-verification without Aadhaar, filing deadline, and common mistakes.',
  },
  {
    title: 'NRI Mutual Fund & Stock Taxation in India (FY 2026-27)',
    slug: 'nri-mutual-fund-stock-taxation-india',
    date: 'July 16, 2026',
    category: 'NRI Taxation',
    summary: 'LTCG/STCG rates, TDS on redemption, PIS account for direct equity, and FATCA restrictions for US/Canada NRIs.',
  },
  {
    title: 'NRI Rental Income Tax in India: TDS, Deductions & Filing',
    slug: 'nri-rental-income-tax-india',
    date: 'July 14, 2026',
    category: 'NRI Taxation',
    summary: '30% TDS by tenant, standard deduction, home loan interest, ITR refund process, and Form 13 for NRI landlords.',
  },
  {
    title: 'TDS on NRO Account Interest and FD: Rates & DTAA Relief',
    slug: 'tds-nro-interest-fd-dtaa-relief',
    date: 'July 8, 2026',
    category: 'NRI Taxation',
    summary: '30% TDS on NRO interest and how to cut it to 10-15% with DTAA treaty rates using TRC and Form 10F.',
  },
  {
    title: 'NRO Account Repatriation: Rules, USD 1 Million Limit & Step-by-Step Process',
    slug: 'nro-account-repatriation-rules-process',
    date: 'July 4, 2026',
    category: 'NRI Taxation',
    summary: 'How to repatriate from an NRO account: USD 1 million annual limit, Form 145/146 process, documents needed, and common bank rejections.',
  },
  {
    title: 'Form 15CA & 15CB (Now 145 & 146): NRI Remittance Compliance Guide',
    slug: 'form-15ca-15cb-nri-remittance-guide',
    date: 'June 27, 2026',
    category: 'NRI Taxation',
    summary: 'The 4 parts of Form 15CA, when CA certificate (15CB) is needed, step-by-step filing, and what happens if you skip it.',
  },
  {
    title: 'LRS (Liberalised Remittance Scheme): USD 250K Limit & TCS',
    slug: 'lrs-liberalised-remittance-scheme-guide',
    date: 'June 20, 2026',
    category: 'FEMA & Compliance',
    summary: 'USD 250,000 annual limit, permitted purposes, TCS rates (5-20%), Form A2, and how LRS affects NRI families.',
  },
  {
    title: 'Section 195 TDS on Payments to NRIs: Complete Guide (FY 2026-27)',
    slug: 'section-195-tds-nri-payments-guide',
    date: 'June 12, 2026',
    category: 'NRI Taxation',
    summary: 'When and how to deduct TDS under Section 195 on payments to NRIs: property sale, rent, professional fees, interest. Rate table, TAN requirement, Form 27Q filing, and penalties.',
  },
  {
    title: '26QB vs 27Q: Which TDS Form When Buying Property from an NRI?',
    slug: '26qb-vs-27q-nri-property-tds',
    date: 'June 5, 2026',
    category: 'NRI Taxation',
    summary: 'Form 26QB is for resident sellers, Form 27Q is for NRI sellers. Side-by-side comparison: rates, TAN, filing process, and the penalty for using the wrong form.',
  },
  {
    title: 'NRI Gift & Inheritance Tax: What Is Taxable and What Is Not',
    slug: 'nri-gift-inheritance-tax-rules',
    date: 'May 29, 2026',
    category: 'NRI Taxation',
    summary: 'Inheritance (not taxable), gifts from relatives (exempt), gifts from non-relatives (Rs 50K threshold), and FEMA compliance.',
  },
  {
    title: 'NRI Residential Status: How the 182-Day and 120-Day Rules Work',
    slug: 'nri-residential-status-182-day-rule',
    date: 'May 15, 2026',
    category: 'NRI Taxation',
    summary: 'How to determine if you are NRI, RNOR, or Resident: the 182-day rule, the 120-day deemed resident rule, and what each status means for your taxes.',
  },
  {
    title: 'PAN Card for NRIs: Application, Aadhaar Linking & Exemptions',
    slug: 'pan-card-nri-application-aadhaar-linking',
    date: 'April 18, 2026',
    category: 'NRI Taxation',
    summary: 'How to apply from abroad (Form 49A/49AA), Aadhaar-PAN linking exemption, and why no-PAN means 20% TDS.',
  },
  {
    title: 'RNOR Status for Returning NRIs: How Long Does the Tax Holiday Last?',
    slug: 'rnor-status-tax-guide-returning-nris',
    date: 'August 8, 2026',
    category: 'NRI Taxation',
    summary: 'The two RNOR tests, how many tax-free years returning NRIs actually get, what foreign income stays exempt, and the planning checklist before RNOR status ends.',
  },
  {
    title: 'POEM: When Does a Foreign Company Become an Indian Tax Resident?',
    slug: 'poem-place-of-effective-management-india',
    date: 'August 8, 2026',
    category: 'International Tax',
    summary: 'Place of Effective Management explained: the ABOI test, the Rs 50 crore exemption, and how Indian promoters accidentally trigger Indian residency for a UAE entity.',
  },
  {
    title: 'NRE vs NRO Account: FEMA Repatriation Limits Explained',
    slug: 'nre-vs-nro-account-fema-repatriation-limits',
    date: 'August 8, 2026',
    category: 'NRI Taxation',
    summary: 'Which income goes into which account, tax treatment, the USD 1 million repatriation cap, and the FEMA mistakes that get NRI remittances frozen.',
  },
  {
    title: 'ESOP Taxation for NRIs: Exercise, Sale & DTAA Relief',
    slug: 'esop-taxation-for-nris-india',
    date: 'August 8, 2026',
    category: 'NRI Taxation',
    summary: 'Perquisite tax at exercise, capital gains at sale, the startup TDS deferral, and how to avoid double taxation on ESOPs under DTAA.',
  },
  {
    title: 'DPIIT Registration for Startups: Eligibility, Process & 80-IAC Tax Benefit (2026)',
    slug: 'dpiit-registration-startups-india-80iac',
    date: 'July 25, 2026',
    category: 'Startup Compliance',
    summary: 'How to get DPIIT recognition, what eligibility criteria apply, the 80-IAC three-year tax holiday and why it requires a separate IMB application, and what changed on angel tax in Finance Act 2025.',
  },
  {
    title: 'GST on Exports: Zero-Rated vs Exempt — What Indian Exporters Get Wrong',
    slug: 'gst-on-exports-zero-rated-vs-exempt-india',
    date: 'July 18, 2026',
    category: 'GST',
    summary: 'The difference between zero-rated and exempt supplies, why it matters for ITC claims, how to file a Letter of Undertaking (LUT), and the five conditions for export of services under GST.',
  },
  {
    title: 'Transfer Pricing Documentation Checklist for Indian Subsidiaries (2026)',
    slug: 'transfer-pricing-documentation-checklist-india',
    date: 'July 11, 2026',
    category: 'International Tax',
    summary: 'Complete TP documentation checklist: Form 3CEB vs Local File vs Master File thresholds, due dates, benchmarking requirements, and the documentation gaps that trigger transfer pricing audits.',
  },
  {
    title: 'TDS on NRI Property Sale in India (FY 2026-27): Rates, Form 27Q & Refund Guide',
    slug: 'tds-on-nri-property-sale-india',
    date: 'July 1, 2026',
    category: 'NRI Taxation',
    summary: 'Full TDS rate table with surcharge slabs, the buyer\'s TAN and Form 27Q process, Form 13 lower deduction certificates, how NRIs claim a TDS refund, and repatriation under the new Income Tax Act 2025.',
  },
  {
    title: 'Form 13 Lower Deduction Certificate for NRIs: Process, Documents & Timeline',
    slug: 'form-13-lower-deduction-certificate-nri',
    date: 'July 11, 2026',
    category: 'NRI Taxation',
    summary: 'How NRIs apply for a Form 13 lower or nil TDS certificate under Section 197 before a property sale — documents required, jurisdictional AO, and processing timeline.',
  },
  {
    title: 'How NRIs Can Claim a TDS Refund on Property Sale in India',
    slug: 'nri-tds-refund-property-sale',
    date: 'July 11, 2026',
    category: 'NRI Taxation',
    summary: 'Which ITR to file, documents needed, e-verification options, refund timelines, and Section 244A interest for NRIs recovering excess TDS on a property sale.',
  },
  {
    title: 'TAN Application Guide for Buyers Purchasing Property from an NRI',
    slug: 'tan-application-guide-buyer-nri-property',
    date: 'July 11, 2026',
    category: 'NRI Taxation',
    summary: 'Form 49B process, documents, fees, and timeline for buyers who need a TAN to purchase property from an NRI seller under Section 195.',
  },
  {
    title: 'Repatriating NRI Property Sale Proceeds: Form 145/146 & USD 1 Million Scheme',
    slug: 'nri-repatriation-property-sale-proceeds',
    date: 'July 11, 2026',
    category: 'NRI Taxation',
    summary: 'NRO account rules, Form 145 (ex-15CA), Form 146 (ex-15CB) CA certification, and the USD 1 million scheme for repatriating Indian property sale proceeds.',
  },
  {
    title: 'Capital Gains Tax for NRIs on Inherited or Gifted Property in India',
    slug: 'nri-capital-gains-inherited-gifted-property',
    date: 'July 11, 2026',
    category: 'NRI Taxation',
    summary: 'Cost and holding period carryover rules from the original owner, TDS implications, and why Form 13 is especially valuable for inherited or gifted property sales.',
  },
  {
    title: 'FEMA Compliance for Indian Startups Raising Foreign Investment (2026 Guide)',
    slug: 'fema-compliance-foreign-investment-startups',
    date: 'June 08, 2026',
    category: 'Startup Compliance',
    summary: 'FDI routes, the 30-day RBI reporting window, FC-GPR filing, the annual FLA return, and the most common FEMA mistakes that lead to penalties - a practical checklist for funded startups.',
  },
  {
    title: 'Dubai Company Registration: Complete Guide for Indian Entrepreneurs (2026)',
    slug: 'dubai-company-registration-guide',
    date: 'May 19, 2026',
    category: 'International Tax',
    summary: 'Mainland vs Free Zone vs Offshore, real costs in INR, FEMA and ODI compliance, UAE Corporate Tax, and documents required — everything before you register a Dubai company.',
  },
  {
    title: 'How to Incorporate a Company in India: Private Limited vs LLP vs OPC (2026 Guide)',
    slug: 'company-incorporation-india-guide',
    date: 'May 08, 2026',
    category: 'Corporate Law',
    summary: 'Complete guide to company registration in India, which structure to choose, the step-by-step process, what it costs, documents required, and mistakes to avoid.',
  },
  {
    title: 'UAE Entity Setup: When It Makes Sense (And When It Doesn\'t)',
    slug: 'uae-entity-setup-when-it-makes-sense',
    date: 'May 08, 2026',
    category: 'International Tax',
    summary: 'Formation costs ₹3–6L, ongoing compliance, and FEMA exposure: here\'s the honest breakdown of when a Dubai company actually works for Indian businesses, and when it\'s expensive FOMO.',
  },
  {
    title: 'Deciphering the New Income Tax Act & Rules 2025',
    slug: 'new-income-tax-act-rules-2025',
    date: 'March 20, 2026',
    category: 'Tax Reform',
    summary: 'An in-depth look at the proposed structural changes in the Income Tax Act, focusing on simplification and the new computational rules.',
  },
  {
    title: 'Understanding the New Tax Regime (FY 2025-26)',
    slug: 'understanding-new-tax-regime-2025-26',
    date: 'March 18, 2026',
    category: 'Tax Planning',
    summary: 'A detailed breakdown of the recent changes in the Finance Act and how it affects middle-income earners in India.',
  },
  {
    title: 'Essential Compliance for Indian Startups',
    slug: 'essential-compliance-indian-startups',
    date: 'March 12, 2026',
    category: 'Corporate Law',
    summary: 'Navigating the complex landscape of MCA filings, GST returns, and initial FEMA compliance for newly incorporated entities.',
  },
  {
    title: 'UAE Corporate Tax: Impact on Indian Businesses',
    slug: 'uae-corporate-tax-indian-impact',
    date: 'March 08, 2026',
    category: 'International Tax',
    summary: 'With the implementation of Corporate Tax in UAE, how should Indian businesses with Gulf operations restructure their holdings?',
  },
  {
    title: 'Navigating International Taxation & DTAA',
    slug: 'navigating-international-taxation-dtaa',
    date: 'March 05, 2026',
    category: 'International Tax',
    summary: 'How multinationals can leverage Double Taxation Avoidance Agreements to optimize their global tax footprint.',
  },
  {
    title: 'The Strategic Value of Virtual CFO Services',
    slug: 'strategic-value-virtual-cfo-services',
    date: 'February 25, 2026',
    category: 'Advisory',
    summary: 'Why scaling SMEs need institutional-grade financial leadership long before they can afford a full-time CFO.',
  },
]

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tax Insights & Advisory - Blog Posts',
  description: 'Expert analysis on International Tax, GST, Transfer Pricing, UAE Corporate Tax, startup compliance, and NRI taxation from Agrawal Khandelwal & Associates LLP.',
  url: 'https://agrawalkhandelwal.com/blog',
  itemListElement: posts.map((post, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://agrawalkhandelwal.com/blog/${post.slug}`,
    name: post.title,
  })),
}

// Regenerate at most hourly so the compliance calendar tracks the current month
export const revalidate = 3600

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

type Deadline = { day: number; title: string; desc: string }

function getComplianceDeadlines(m: number, year: number) {
  const abbr = MONTH_ABBR[m]
  const prevM = (m + 11) % 12
  const prevLabel = `${MONTH_NAMES[prevM]} ${m === 0 ? year - 1 : year}`

  // Filings that recur every month (for the previous month's transactions)
  const recurring: Deadline[] = [
    { day: 7, title: 'TDS/TCS Deposit', desc: `Deposit of TDS/TCS deducted or collected for ${prevLabel}.` },
    { day: 11, title: 'GSTR-1 Filing', desc: `Monthly GSTR-1 for ${prevLabel} (taxpayers not under QRMP).` },
    { day: 15, title: 'PF & ESI Payment', desc: `Provident Fund and ESI contribution for ${prevLabel}.` },
    { day: 20, title: 'GSTR-3B Filing', desc: `Monthly GSTR-3B for ${prevLabel} (monthly filers).` },
  ]

  // Deadlines specific to certain months (month index 0 = January)
  const monthSpecific: Record<number, Deadline[]> = {
    0: [{ day: 31, title: 'TDS Return (Q3)', desc: 'Quarterly TDS return (Form 24Q/26Q) for Oct to Dec.' }],
    2: [{ day: 15, title: 'Advance Tax (4th)', desc: 'Final instalment (100%) of advance tax for the financial year.' }],
    4: [{ day: 31, title: 'TDS Return (Q4)', desc: 'Quarterly TDS return (Form 24Q/26Q) for Jan to Mar.' }],
    5: [{ day: 15, title: 'Advance Tax (1st)', desc: '1st instalment (15%) of advance tax. Form 16 to employees also due.' }],
    6: [
      { day: 15, title: 'TDS Return (Q1)', desc: 'Quarterly TDS return for Apr to Jun.' },
      { day: 31, title: 'ITR Filing', desc: 'Income tax return due for non-audit taxpayers.' },
    ],
    8: [
      { day: 15, title: 'Advance Tax (2nd)', desc: '2nd instalment (45%) of advance tax.' },
      { day: 30, title: 'Tax Audit Report', desc: 'Tax audit report (Form 3CD) filing due.' },
    ],
    9: [{ day: 31, title: 'TDS Return (Q2)', desc: 'Quarterly TDS return for Jul to Sep.' }],
    10: [{ day: 30, title: 'Audit ITR & 3CEB', desc: 'ITR for audit cases and transfer pricing Form 3CEB.' }],
    11: [
      { day: 15, title: 'Advance Tax (3rd)', desc: '3rd instalment (75%) of advance tax.' },
      { day: 31, title: 'GSTR-9 Annual', desc: 'Annual GST return (GSTR-9 / 9C) for the previous financial year.' },
    ],
  }

  const all = [...recurring, ...(monthSpecific[m] ?? [])].sort((a, b) => a.day - b.day)
  return {
    label: `${MONTH_NAMES[m]} ${year}`,
    items: all.map(d => ({ date: `${d.day} ${abbr}`, title: d.title, desc: d.desc })),
  }
}

export default function Blog() {
  // Shift to IST so the month rolls over at midnight India time, not UTC
  const ist = new Date(Date.now() + 5.5 * 3600 * 1000)
  const cal = getComplianceDeadlines(ist.getUTCMonth(), ist.getUTCFullYear())
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '100px' }}>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-badge">Knowledge Center</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Tax Insights & Advisory</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              Expert analysis on the latest regulatory shifts, tax optimizations, and strategic financial guidance.
            </p>
          </div>

          {/* Compliance Calendar */}
          <div className="card" style={{ marginBottom: '3.5rem', borderLeft: '4px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>Upcoming Compliance Deadlines: {cal.label}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1rem' }}>
              {cal.items.map((item, idx) => (
                <div key={idx} style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '4px' }}>{item.date}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px', fontSize: '0.95rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
            {posts.map((post, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.category}</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', lineHeight: 1.4 }}>{post.title}</h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{post.summary}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  Read Full Insight <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Closing CTA */}
          <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: '#fff', textAlign: 'center', marginTop: '5rem', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Have a Question on Any of This?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px', margin: '0.75rem auto 2.5rem' }}>
              Book a free consultation with our partners, or message us on WhatsApp for a quick answer.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700 }}>Book Free Consultation</a>
              <a href="https://wa.me/919527533506?text=Hi,%20I%20have%20a%20tax%20question." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Incorporate a Company in India: Private Limited vs LLP vs OPC (2026 Guide)',
  description: 'Complete guide to company incorporation in India — Private Limited Company, LLP, or OPC. Covers the step-by-step process, costs, timeline, documents required, and how to choose the right structure for your business.',
  keywords: [
    'company incorporation India', 'how to incorporate company India',
    'private limited company registration India', 'LLP registration India',
    'private limited vs LLP India', 'OPC registration India',
    'company registration process India', 'company incorporation cost India',
    'how to register company India 2026', 'CA for company incorporation India',
  ],
  alternates: { canonical: 'https://agrawalkhandelwal.com/blog/company-incorporation-india-guide' },
  openGraph: {
    title: 'How to Incorporate a Company in India: Private Limited vs LLP vs OPC (2026 Guide)',
    description: 'Step-by-step guide to company registration in India — which structure to choose, what the process looks like, what it costs, and what mistakes to avoid.',
    url: 'https://agrawalkhandelwal.com/blog/company-incorporation-india-guide',
    type: 'article',
  },
}

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Incorporate a Company in India: Private Limited vs LLP vs OPC (2026 Guide)',
  description: 'Complete guide to company incorporation in India — structure comparison, step-by-step process, costs, timeline, and documents.',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: {
    '@type': 'Organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    url: 'https://agrawalkhandelwal.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Agrawal Khandelwal & Associates LLP',
    logo: { '@type': 'ImageObject', url: 'https://agrawalkhandelwal.com/logo.png' },
  },
  mainEntityOfPage: 'https://agrawalkhandelwal.com/blog/company-incorporation-india-guide',
}

export default function CompanyIncorporationGuideBlog() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <Link href="/blog" style={{ color: 'var(--accent)', fontWeight: 700, display: 'inline-block', marginBottom: '2rem' }}>
          &larr; Back to Insights
        </Link>

        <article className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <span className="section-badge" style={{ background: 'var(--primary)', color: 'white' }}>Corporate Law</span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
              How to Incorporate a Company in India: Private Limited vs LLP vs OPC (2026 Guide)
            </h1>
            <p style={{ color: 'var(--text-light)', fontWeight: 600 }}>Published on May 08, 2026 • By Mehul Agrawal, CA</p>
          </div>

          <div style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Every week, founders and small business owners ask us the same question: &ldquo;How do I register my company in India, and which structure should I choose?&rdquo; It sounds simple. It isn&apos;t. The structure you pick on day one affects your ability to raise funding, your tax liability, your annual compliance burden, and how easy it is to bring in co-founders or exit years later.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              This guide covers everything you need to know — the three main options, how to choose between them, the step-by-step registration process, what it costs, and what mistakes to avoid.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>The Three Main Options</h2>
            <p style={{ marginBottom: '1.5rem' }}>In India, most businesses incorporate as one of three structures:</p>

            <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: 'var(--primary)', color: '#fff' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Factor</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Private Limited (Pvt Ltd)</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>LLP</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>OPC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Best for', 'Startups seeking funding', 'Professional services, agencies', 'Solo founders'],
                    ['Min. members', '2 directors, 2 shareholders', '2 designated partners', '1 director'],
                    ['Raise VC/Angel funding', 'Yes', 'Very difficult', 'No'],
                    ['Issue ESOPs', 'Yes', 'No', 'No'],
                    ['Annual compliance', 'Moderate–High', 'Low', 'Moderate'],
                    ['Tax rate (base)', '22% (existing) / 15% (new mfg)', '30% on profits', '22%'],
                    ['Audit required', 'Yes (always)', 'Only above ₹40L turnover', 'Yes (always)'],
                    ['Incorporation cost', '₹8,000–₹15,000 (govt fees)', '₹5,000–₹10,000', '₹5,000–₹8,000'],
                  ].map(([factor, pvt, llp, opc], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 700 }}>{factor}</td>
                      <td style={{ padding: '10px 16px' }}>{pvt}</td>
                      <td style={{ padding: '10px 16px' }}>{llp}</td>
                      <td style={{ padding: '10px 16px' }}>{opc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>Which Structure Should You Choose?</h2>

            <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Choose a Private Limited Company if:</h3>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>You plan to raise Angel or VC funding — investors almost exclusively require a Pvt Ltd structure</li>
              <li style={{ marginBottom: '0.5rem' }}>You want to issue ESOPs to attract and retain talent</li>
              <li style={{ marginBottom: '0.5rem' }}>You&apos;re building a scalable product or SaaS business</li>
              <li style={{ marginBottom: '0.5rem' }}>You want a clear exit path via acquisition or IPO</li>
            </ul>

            <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Choose an LLP if:</h3>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>You&apos;re in professional services — consulting, design, law, architecture, accounting</li>
              <li style={{ marginBottom: '0.5rem' }}>You want limited liability without the full compliance burden of a company</li>
              <li style={{ marginBottom: '0.5rem' }}>You are bootstrapping and annual turnover will be below ₹40 lakhs (avoiding mandatory audit)</li>
              <li style={{ marginBottom: '0.5rem' }}>You have two or more partners and prefer a flexible profit-sharing arrangement</li>
            </ul>

            <h3 style={{ color: 'var(--primary)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.3rem' }}>Choose an OPC if:</h3>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>You are a solo founder who wants the credibility and limited liability of a company</li>
              <li style={{ marginBottom: '0.5rem' }}>You do not plan to raise institutional funding (yet)</li>
              <li style={{ marginBottom: '0.5rem' }}>You can convert to a Pvt Ltd later if the business scales</li>
            </ul>

            <div style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', borderLeft: '5px solid var(--accent)', margin: '3rem 0' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Not sure which one fits you?</h3>
              <p style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>
                Use our free <strong>Company Type Finder</strong> — answer 4 questions and get a CA-backed recommendation in under 2 minutes.
              </p>
              <Link href="/tools/incorporation-wizard" className="btn btn-primary" style={{ display: 'inline-block' }}>
                Take the Quiz
              </Link>
            </div>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>Step-by-Step: How to Incorporate a Private Limited Company</h2>
            <p style={{ marginBottom: '1.5rem' }}>This is the most common registration and the one with the most steps. Here&apos;s the full process:</p>

            {[
              {
                step: '1',
                title: 'Obtain DSC (Digital Signature Certificate)',
                desc: 'All proposed directors need a Class-3 DSC from a certified authority. This is used to digitally sign all MCA filings. Takes 1–2 days.',
              },
              {
                step: '2',
                title: 'Apply for DIN (Director Identification Number)',
                desc: 'Each director needs a unique DIN from the Ministry of Corporate Affairs. This is now integrated into the SPICe+ form (Step 4), so a separate application is rarely needed.',
              },
              {
                step: '3',
                title: 'Name Reservation (RUN Form)',
                desc: 'Apply for your company name on the MCA portal using the RUN (Reserve Unique Name) form. You can propose two names in order of preference. The name must not conflict with existing registered companies or trademarks. Takes 2–5 working days.',
              },
              {
                step: '4',
                title: 'File SPICe+ Form (The Main Incorporation Form)',
                desc: 'SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) is the integrated form that handles: company incorporation, DIN allotment, PAN & TAN application, GSTIN registration, EPFO & ESIC registration, and bank account opening (with select banks). This single form has replaced what used to be 5 separate applications.',
              },
              {
                step: '5',
                title: 'Draft MOA & AOA',
                desc: 'The Memorandum of Association (MOA) defines the company\'s objectives. The Articles of Association (AOA) defines internal rules. Both are filed electronically with SPICe+. Getting these right matters — poorly drafted MOA objects can restrict your business activities later.',
              },
              {
                step: '6',
                title: 'Certificate of Incorporation',
                desc: 'Once the MCA approves the application, you receive a Certificate of Incorporation (CoI) with your Corporate Identification Number (CIN). This is your company\'s birth certificate. Timeline: 7–15 working days from form submission.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}>{item.step}</div>
                <div>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-main)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>Documents Required</h2>
            <p style={{ marginBottom: '1rem' }}>For each proposed director/shareholder:</p>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>PAN Card</li>
              <li style={{ marginBottom: '0.5rem' }}>Aadhaar Card</li>
              <li style={{ marginBottom: '0.5rem' }}>Passport-size photograph</li>
              <li style={{ marginBottom: '0.5rem' }}>Address proof (bank statement or utility bill, not older than 2 months)</li>
              <li style={{ marginBottom: '0.5rem' }}>Email ID and mobile number</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>For the registered office address:</p>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Utility bill of the premises (electricity bill, not older than 2 months)</li>
              <li style={{ marginBottom: '0.5rem' }}>NOC from the property owner (if rented)</li>
            </ul>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>What Does It Cost?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { label: 'Govt. filing fees', value: '₹8,000–₹15,000', note: 'Depends on authorised capital' },
                { label: 'CA / professional fees', value: '₹5,000–₹25,000', note: 'Varies by firm and complexity' },
                { label: 'DSC (per director)', value: '₹1,000–₹2,000', note: '2-year validity' },
                { label: 'Total typical range', value: '₹15,000–₹40,000', note: 'Pvt Ltd all-in' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--bg-surface)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '4px' }}>{item.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{item.note}</div>
                </div>
              ))}
            </div>
            <p style={{ marginBottom: '1.5rem' }}>
              Be wary of extremely low-cost offers online. The ₹999 incorporation packages typically exclude government fees, DSC costs, and any advisory on MOA objects or shareholder agreements — all of which matter significantly as your business grows.
            </p>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>Common Mistakes to Avoid</h2>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Choosing the wrong structure for future plans.</strong> Switching from LLP to Pvt Ltd later is expensive and complex. Think ahead to your 3-year goals before you incorporate.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Drafting a narrow MOA.</strong> If your company&apos;s stated objects are too specific, you may need to pass a special resolution and file with MCA just to add a new business line later.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Not having a Shareholders&apos; Agreement.</strong> The AOA is a public document with standard clauses. The SHA is a private contract between founders that governs vesting, anti-dilution, drag-along rights, and dispute resolution. Most founders skip it early and regret it at the first external investment.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Using a home address without consent.</strong> Many founders use their home as the registered office. That address becomes a public MCA record. Ensure you have the owner&apos;s NOC in writing.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Ignoring post-incorporation compliance.</strong> Incorporation is day one. Within 30 days you need to: open a bank account, issue share certificates, file INC-20A (declaration of commencement), and appoint an auditor. Missing these attracts penalties.
              </li>
            </ul>

            <h2 style={{ color: 'var(--primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.8rem' }}>What Happens After Incorporation?</h2>
            <p style={{ marginBottom: '1rem' }}>Once incorporated, your annual compliance calendar includes:</p>
            <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Statutory Audit (mandatory for Pvt Ltd)</li>
              <li style={{ marginBottom: '0.5rem' }}>Annual ROC filings: AOC-4 (financials) and MGT-7 (annual return)</li>
              <li style={{ marginBottom: '0.5rem' }}>Income Tax Return filing</li>
              <li style={{ marginBottom: '0.5rem' }}>GST returns (monthly or quarterly, if registered)</li>
              <li style={{ marginBottom: '0.5rem' }}>TDS deposits and quarterly returns</li>
              <li style={{ marginBottom: '0.5rem' }}>Board meetings (minimum 4 per year for Pvt Ltd)</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>
              The typical annual compliance cost for a Pvt Ltd with a CA firm ranges from <strong>₹30,000–₹80,000</strong> depending on turnover and transaction volume.
            </p>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '0.75rem', color: 'var(--text-main)' }}>Ready to incorporate? Let&apos;s do it properly.</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              We handle the full incorporation process — structure advice, MOA drafting, MCA filings, and post-incorporation compliance setup.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book an Incorporation Call
              </a>
              <Link href="/tools/incorporation-wizard" className="btn btn-outline">
                Find My Structure First
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

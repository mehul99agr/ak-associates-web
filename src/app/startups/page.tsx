import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Startup Advisory Services | Incorporation, DPIIT & Virtual CFO',
  description: 'Specialized financial, taxation, and advisory services for startups. DPIIT registration, company incorporation, pitch deck support, ESOP structuring, and Virtual CFO services across India.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/startups' },
  openGraph: {
    title: 'Startup Advisory | Agrawal Khandelwal & Associates LLP',
    description: 'From DPIIT registration to seed-round financial modeling — we handle compliances so you can focus on building your product.',
    url: 'https://agrawalkhandelwal.com/startups',
  },
}

const bookingLink = "https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7"

const startupServices = [
  {
    title: 'Company Incorporation & Structuring',
    desc: 'Expert guidance on choosing the right entity (Private Limited vs. LLP) and executing a hassle-free registration process.',
    icon: '🚀',
  },
  {
    title: 'DPIIT Registration (Startup India)',
    desc: 'End-to-end assistance in obtaining DPIIT recognition to unlock tax exemptions, easy winding up, and public procurement norms.',
    icon: '📜',
  },
  {
    title: 'Pitch Deck & Valuation',
    desc: 'Build compelling financial models and business valuations (DCF, Net Asset Value) required by angel investors and VCs.',
    icon: '📊',
  },
  {
    title: 'Virtual CFO for Startups',
    desc: 'Strategic cash flow management, investor reporting (MIS), burn-rate tracking, and financial strategy without the full-time cost.',
    icon: '💼',
  },
  {
    title: 'ESOP Structuring',
    desc: 'Design and implement Employee Stock Option Plans to attract and retain top talent while ensuring tax compliance.',
    icon: '🤝',
  },
  {
    title: 'FDI & FEMA Compliance',
    desc: 'Regulatory adherence for startups raising funds from foreign investors, including RBI reporting and FCGPR filings.',
    icon: '🌐',
  },
]

export default function StartupsPage() {
  return (
    <div style={{ paddingTop: '90px' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', color: '#fff', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50px',
            fontSize: '0.78rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: '#fff',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}>
            Dedicated Startup Desk
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: 1.15 }}>
            Fueling Your Growth from Seed to Scale
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.82)', maxWidth: '680px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
            Navigate the complexities of scaling a startup. We handle your compliances, valuations, and financial strategies so you can focus on building your product.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Book a Strategy Call
            </a>
            <Link href="/tools" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.1)' }}>
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Why Tech & Modern Startups Trust Us</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
              We don&apos;t just do bookkeeping. We act as your strategic financial partners.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.875rem' }}>Proactive Advisory</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                We anticipate your financial roadblocks before they happen, from cash-flow crunches to unexpected tax liabilities during fundraises.
              </p>
            </div>
            <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.875rem' }}>Investor-Ready Reporting</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                Our MIS reports and financial models are built to meet the rigorous standards of top-tier Venture Capital firms and Angel Syndicates.
              </p>
            </div>
            <div className="card" style={{ borderTop: '4px solid #10b981' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.875rem' }}>Tech-Enabled Processes</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', lineHeight: 1.7 }}>
                We leverage modern cloud accounting tools to ensure your data is always accessible, secure, and up-to-date in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Our Offerings</span>
            <h2 className="section-title">Comprehensive Startup Services</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {startupServices.map((service, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', flex: 1, lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #0A2E5B 0%, #1e40af 100%)', color: '#fff', textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Ready to Scale Your Startup?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Let&apos;s discuss your current stage and how our customized financial strategies can help you secure funding and maintain compliance.
            </p>
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: '#fff', fontSize: '1rem', fontWeight: 700 }}>
              Consult an Expert Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

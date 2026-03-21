import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Startup Advisory Services | Agrawal Khandelwal & Associates LLP',
  description: 'Specialized financial, taxation, and advisory services for startups. From DPIIT registration to Pitch Deck support and Virtual CFO services.',
}

export default function StartupsPage() {
  const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20discuss%20services%20for%20my%20startup.";

  const startupServices = [
    {
      title: 'Company Incorporation & Structuring',
      desc: 'Expert guidance on choosing the right entity (Private Limited vs. LLP) and executing a hassle-free registration process.',
      icon: '🚀'
    },
    {
      title: 'DPIIT Registration (Startup India)',
      desc: 'End-to-end assistance in obtaining DPIIT recognition to unlock tax exemptions, easy winding up, and public procurement norms.',
      icon: '📜'
    },
    {
      title: 'Pitch Deck & Valuation',
      desc: 'Build compelling financial models and business valuations (DCF, Net Asset Value) required by angel investors and VCs.',
      icon: '📊'
    },
    {
      title: 'Virtual CFO for Startups',
      desc: 'Strategic cash flow management, investor reporting (MIS), burn-rate tracking, and financial strategy without the full-time cost.',
      icon: '💼'
    },
    {
      title: 'ESOP Structuring',
      desc: 'Design and implement Employee Stock Option Plans to attract and retain top talent while ensuring tax compliance.',
      icon: '🤝'
    },
    {
      title: 'FDI & FEMA Compliance',
      desc: 'Regulatory adherence for startups raising funds from foreign investors, including RBI reporting and FCGPR filings.',
      icon: '🌐'
    }
  ];

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container">
          <span className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
            Dedicated Startup Desk
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Fueling Your Growth from Seed to Scale
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#d1d5db', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            Navigate the complexities of scaling a startup. We handle your compliances, valuations, and financial strategies so you can focus on building your product.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: '#fff' }}>
              Book a Strategy Call
            </a>
            <Link href="/tax-calculator" className="btn btn-secondary">
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Startups */}
      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Why Tech & Modern Startups Trust Us</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
              We don&apos;t just do bookkeeping. We act as your strategic financial partners.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Proactive Advisory</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                We anticipate your financial roadblocks before they happen, from cash-flow crunches to unexpected tax liabilities during fundraises.
              </p>
            </div>
            <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Investor-Ready Reporting</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                Our MIS reports and financial models are built to meet the rigorous standards of top-tier Venture Capital firms and Angel Syndicates.
              </p>
            </div>
            <div className="card" style={{ borderTop: '4px solid #10b981' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Tech-Enabled Processes</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {startupServices.map((service, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', flex: 1 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-surface">
        <div className="container">
          <div className="card" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center', padding: '4rem 2rem' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Ready to Scale Your Startup?</h2>
            <p style={{ color: '#d1d5db', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Let&apos;s discuss your current stage and how our customized financial strategies can help you secure funding and maintain compliance.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: '#fff', fontSize: '1.1rem' }}>
              Consult an Expert Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

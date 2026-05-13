import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'CA for Startups & International Tax | Bangalore, Mumbai | AK & Associates LLP',
  description: 'Trusted Chartered Accountants for startups in Bangalore, MNCs in Mumbai, and NRI/UAE clients. Experts in International Taxation, Transfer Pricing, DTAA, FEMA, UAE Corporate Tax, Startup Incorporation, and Virtual CFO services.',
  alternates: { canonical: 'https://agrawalkhandelwal.com' },
}

const bookingLink = "https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7"
const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation."

const services = [
  {
    title: 'Business Incorporation & Structuring',
    desc: 'Complete guidance on company and LLP formation, optimal corporate structure selection, and regulatory compliance setup.',
    icon: '🏢',
    features: ['Company & LLP Formation', 'Optimal Structure Advisory', 'Regulatory Compliance Setup', 'Foreign Investment Approvals'],
    link: '/company-incorporation',
  },
  {
    title: 'Tax Planning & Compliance',
    desc: 'Strategic income tax return (ITR) and GST return filing, tax planning, and comprehensive compliance management across India.',
    icon: '📄',
    features: ['ITR Filing & Planning', 'GST Return & Compliance', 'Tax Optimization Strategies', 'Tax Audit Representation'],
  },
  {
    title: 'International Tax & Transfer Pricing',
    desc: 'Expert guidance on cross-border taxation, transfer pricing compliance, and international regulatory requirements.',
    icon: '🌍',
    features: ['Transfer Pricing Documentation', 'Treaty Benefits & DTAA', 'International Tax Planning', 'Cross-border Structuring'],
  },
  {
    title: 'Virtual CFO Services',
    desc: 'Strategic financial leadership and advisory services without the overhead of a full-time CFO.',
    icon: '📈',
    features: ['Financial Strategy & Planning', 'Budgeting & Forecasting', 'Investment Advisory', 'Performance Analysis'],
  },
  {
    title: 'Audit & Assurance',
    desc: 'Comprehensive statutory audits, internal audits, tax audits, and thorough due diligence to ensure transparency.',
    icon: '🛡️',
    features: ['Statutory & Tax Audits', 'Internal Audit Systems', 'Due Diligence Reports', 'Risk Assessment'],
  },
  {
    title: 'Financial Advisory',
    desc: 'Strategic financial consulting, modeling, and advisory services for business growth and optimization.',
    icon: '📊',
    features: ['Financial Modeling', 'Valuation Services', 'Business Restructuring', 'Funding Advisory'],
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge">
            <span>⭐</span>
            <span>Trusted by 100+ Businesses Across India</span>
          </div>
          <h1>Simplify your finances,<br />Empower your decisions.</h1>
          <p>
            With over five years of professional experience, we serve a diverse portfolio of clients, from startups and SMEs to multinational corporations. Our expertise spans Finance, Taxation, Auditing, and Management Consulting.
          </p>
          <div className="hero-cta">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book Free Consultation
            </a>
            <Link href="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Clients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Expert Consultants</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Office Locations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section bg-surface" id="about">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Meet Our Team</span>
            <h2 className="section-title">Leading Professionals</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.05rem' }}>
              Our seasoned partners bring deep expertise in taxation, audit, and financial consulting, empowering businesses to achieve their objectives with confidence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Mehul Agrawal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner & International Tax Expert</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Mehul is a distinguished Chartered Accountant specializing in International Taxation, Transfer Pricing, and Corporate Structuring. He advises multinational companies on cross-border transactions and enables them to optimize tax strategies while maintaining strict compliance.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specializations & Certifications</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ International Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ FEMA & RBI Compliance</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ M&A Advisory</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 Concurrent Audits of Bank</li>
                  <li style={{ color: 'var(--accent)', fontWeight: 700 }}>🏆 UAE Corporate Taxation</li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '140px', height: '140px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)', flexShrink: 0 }}>
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal" width={140} height={140} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>CA Rupesh Khandelwal</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.25rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Partner & Domestic Tax Specialist</p>
              <p style={{ fontSize: '0.93rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Rupesh brings valuable insights from leading firms, including Deloitte. His expertise spans Automobiles, IT, and Pharma. He has a strong track record in tax planning, regulatory compliance, and representing clients before tax authorities.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <strong style={{ fontSize: '0.82rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Specializations</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.75rem', fontSize: '0.87rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ color: 'var(--text-light)' }}>✓ Domestic Tax Planning</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Statutory & Internal Audits</li>
                  <li style={{ color: 'var(--text-light)' }}>✓ Business Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title">Comprehensive Services</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              From business incorporation to complex international tax planning, we provide end-to-end financial solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {services.map((s, i) => {
              const inner = (
                <>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ color: 'var(--text-light)' }}>✓ {f}</li>
                    ))}
                  </ul>
                  {s.link && <div style={{ marginTop: '1.25rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.88rem' }}>Learn more →</div>}
                </>
              )
              return s.link
                ? <Link key={i} href={s.link} className="card" style={{ display: 'block', textDecoration: 'none' }}>{inner}</Link>
                : <div key={i} className="card">{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="section bg-surface" id="testimonials">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Proven Results</span>
            <h2 className="section-title">Success Stories & Impact</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Cross-Border Tax Optimization</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                Structured a tax-efficient route for a UAE-based client incorporating an Indian subsidiary, resulting in 100% regulatory compliance with DTAA benefits and an estimated 15% reduction in cross-border tax leakages.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>Sunny Stephen</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultant, BMG India</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Startup Financial Strategy</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '0.95rem' }}>
                Acted as Virtual CFO for a high-growth AI startup, managing their DPIIT registration, seed-round financial modeling, and ensuring complete ROC/GST compliance, allowing the founders to focus strictly on product development.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700 }}>Nilay Kulkarni</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Founder, Vitt AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Global Reach</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '580px', margin: '0.75rem auto 2.5rem' }}>
              Headquartered in Maharashtra with a footprint that extends across India and key international jurisdictions.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              {['Nashik', 'Sillod', 'Mumbai', 'Bangalore', 'Delhi', 'UAE'].map((location, idx) => (
                <span key={idx} style={{
                  padding: '10px 22px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--primary)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  📍 {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Ready to Optimize Your Finances?</h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-light)' }}>
              Schedule a free consultation to discuss your financial goals. We serve clients across Nashik, Sillod, Mumbai, and Bangalore.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>📍</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem' }}>Nashik Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik – 422011</p>
              <a href="tel:+919527533506" style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 700 }}>+91 95275 33506</a>
              <a href="mailto:mehul@agrawalkhandelwal.com" style={{ display: 'block', marginTop: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>mehul@agrawalkhandelwal.com</a>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem' }}>Sillod Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Near Datta Mandir, Tilak Nagar, Sillod – 431112</p>
              <a href="tel:+919595585953" style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 700 }}>+91 95955 85953</a>
              <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ display: 'block', marginTop: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>rupesh@agrawalkhandelwal.com</a>
            </div>

            {/* WhatsApp CTA: uses explicit dark blue to work in both modes */}
            <div className="card" style={{ textAlign: 'center', background: '#0A2E5B', borderColor: '#0A2E5B' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>📅</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: '#ffffff' }}>Book a Consultation</h3>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem' }}>Book a free 30-minute session to explore how we can help your business thrive.</p>
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>
                📅 Schedule on Google Calendar
              </a>
            </div>
          </div>

          <div style={{ marginTop: '4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7879464!3d19.1947607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb199f0a712f%3A0x2bb8a26b71bd9b72!2sRam%20Plaza%2C%20Mumbai%20Naka%2C%20Nashik%2C%20Maharashtra%20422011!5e0!3m2!1sen!2sin!4v1717777777777"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="Agrawal Khandelwal & Associates LLP – Nashik office location"
            />
          </div>
        </div>
      </section>
    </>
  )
}

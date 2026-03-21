import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const whatsappLink = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation.";

  const services = [
    { 
      title: 'Business Incorporation & Structuring', 
      desc: 'Complete guidance on company and LLP formation, optimal corporate structure selection, and regulatory compliance setup.',
      icon: '🏢',
      features: ['Company & LLP Formation', 'Optimal Structure Advisory', 'Regulatory Compliance Setup', 'Foreign Investment Approvals']
    },
    { 
      title: 'Tax Planning & Compliance', 
      desc: 'Strategic income tax return (ITR) and GST return filing, tax planning, and comprehensive compliance management across India.',
      icon: '📄',
      features: ['ITR Filing & Planning', 'GST Return & Compliance', 'Tax Optimization Strategies', 'Tax Audit Representation']
    },
    { 
      title: 'International Tax & Transfer Pricing', 
      desc: 'Expert guidance on cross-border taxation, transfer pricing compliance, and international regulatory requirements.',
      icon: '🌍',
      features: ['Transfer Pricing Documentation', 'Treaty Benefits & DTAA', 'International Tax Planning', 'Cross-border Structuring']
    },
    { 
      title: 'Virtual CFO Services', 
      desc: 'Strategic financial leadership and advisory services without the overhead of a full-time CFO.',
      icon: '📈',
      features: ['Financial Strategy & Planning', 'Budgeting & Forecasting', 'Investment Advisory', 'Performance Analysis']
    },
    { 
      title: 'Audit & Assurance', 
      desc: 'Comprehensive statutory audits, internal audits, tax audits, and thorough due diligence to ensure transparency.',
      icon: '🛡️',
      features: ['Statutory & Tax Audits', 'Internal Audit Systems', 'Due Diligence Reports', 'Risk Assessment']
    },
    { 
      title: 'Financial Advisory', 
      desc: 'Strategic financial consulting, modeling, and advisory services for business growth and optimization.',
      icon: '📊',
      features: ['Financial Modeling', 'Valuation Services', 'Business Restructuring', 'Funding Advisory']
    },
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span>Trusted by 100+ Businesses Across India</span>
          </div>
          <h1>Simplify your finances,<br />Empower your decisions.</h1>
          <p>
            With over five years of professional experience, we successfully serve a diverse portfolio of clients—ranging from startups and SMEs to large multinational corporations. Our expertise spans Finance, Taxation, Auditing, and Management Consulting.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Free Consultation</a>
            <Link href="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

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

      <section className="section bg-surface" id="about">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Meet Our Team</span>
            <h2 className="section-title">Leading Professionals</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem' }}>
              Our seasoned partners bring deep expertise in taxation, audit, and financial consulting, empowering businesses to achieve objectives with confidence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '150px', height: '150px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal" width={150} height={150} style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>CA Mehul Agrawal</h3>
              <p style={{ color: 'var(--text-light)', fontWeight: 600, marginBottom: '1.5rem' }}>Partner & International Tax Expert</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Mehul is a distinguished Chartered Accountant specializing in International Taxation, Transfer Pricing, and Corporate Structuring. He advises multinational companies on cross-border transactions and enables them to optimize tax strategies while maintaining strict compliance.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>Specializations & Certifications:</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <li style={{ marginBottom: '5px' }}>✓ International Tax Planning</li>
                  <li style={{ marginBottom: '5px' }}>✓ FEMA & RBI Compliance</li>
                  <li style={{ marginBottom: '5px' }}>✓ M&A Advisory</li>
                  <li style={{ marginBottom: '5px', color: 'var(--accent)', fontWeight: 600 }}>🏆 Concurrent Audits of Bank</li>
                  <li style={{ marginBottom: '5px', color: 'var(--accent)', fontWeight: 600 }}>🏆 UAE Corporate Taxation</li>
                </ul>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '150px', height: '150px', margin: '0 auto 2rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--primary)' }}>
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal" width={150} height={150} style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>CA Rupesh Khandelwal</h3>
              <p style={{ color: 'var(--text-light)', fontWeight: 600, marginBottom: '1.5rem' }}>Partner & Domestic Tax Specialist</p>
              <p style={{ fontSize: '0.95rem', textAlign: 'justify', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Rupesh brings valuable insights from leading firms, including Deloitte. His expertise spans Automobiles, IT, and Pharma. He has a strong track record in tax planning, regulatory compliance, and representing clients before tax authorities.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
                <strong style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>Specializations:</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <li style={{ marginBottom: '5px' }}>✓ Domestic Tax Planning</li>
                  <li style={{ marginBottom: '5px' }}>✓ Statutory & Internal Audits</li>
                  <li style={{ marginBottom: '5px' }}>✓ Business Consulting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title">Comprehensive Services</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              From business incorporation to complex international tax planning, we provide end-to-end financial solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', fontSize: '0.9rem' }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ marginBottom: '8px', color: 'var(--text-light)' }}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="testimonials">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Proven Results</span>
            <h2 className="section-title">Success Stories & Impact</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Cross-Border Tax Optimization</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Structured a tax-efficient route for a UAE-based client incorporating an Indian subsidiary, resulting in 100% regulatory compliance with DTAA benefits and an estimated 15% reduction in cross-border tax leakages.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem' }}>Sunny Stephen</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultant, BMG India</p>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Startup Financial Strategy</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Acted as Virtual CFO for a high-growth AI startup, managing their DPIIT registration, seed-round financial modeling, and ensuring complete ROC/GST compliance, allowing the founders to focus strictly on product development.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div>
                  <h4 style={{ fontSize: '0.9rem' }}>Nilay Kulkarni</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Founder, Vitt AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach Map UI */}
          <div style={{ marginTop: '6rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Global Reach</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Headquartered in Maharashtra with a footprint that extends across India and key international jurisdictions.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              {['Nashik', 'Sillod', 'Mumbai', 'Bangalore', 'Delhi', 'UAE'].map((location, idx) => (
                <span key={idx} style={{ 
                  padding: '10px 25px', 
                  background: 'var(--bg-card)', 
                  border: '1px solid var(--border)', 
                  borderRadius: '50px', 
                  fontWeight: 700, 
                  color: 'var(--primary)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                  📍 {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Ready to Optimize Your Finances?</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
              Schedule a free consultation to discuss your financial goals. We serve clients across Nashik, Sillod, Mumbai, and Bangalore.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>📍</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Nashik Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik - 422011</p>
              <a href="mailto:mehul@agrawalkhandelwal.com" style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 700 }}>mehul@agrawalkhandelwal.com</a>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Sillod Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Near Datta Mandir, Tilak Nagar, Sillod - 431112</p>
              <a href="mailto:rupesh@agrawalkhandelwal.com" style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)', fontWeight: 700 }}>rupesh@agrawalkhandelwal.com</a>
            </div>

            <div className="card" style={{ textAlign: 'center', background: 'var(--primary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>📅</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--white)' }}>Consultation</h3>
              <p style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Book a free 30-minute session to explore how we can help thrive your business.</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>Message on WhatsApp</a>
            </div>
          </div>

          <div style={{ marginTop: '4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '2px solid var(--primary)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7879464!3d19.1947607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb199f0a712f%3A0x2bb8a26b71bd9b72!2sRam%20Plaza%2C%20Mumbai%20Naka%2C%20Nashik%2C%20Maharashtra%20422011!5e0!3m2!1sen!2sin!4v1717777777777" 
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
              title="Google Maps showing our Nashik office location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

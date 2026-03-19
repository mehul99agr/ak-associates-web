import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
            <Link href="/#contact" className="btn btn-primary">Book Free Consultation</Link>
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
                <strong style={{ fontSize: '0.9rem', color: var(--primary) }}>Specializations:</strong>
                <ul style={{ listStyle: 'none', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <li style={{ marginBottom: '5px' }}>✓ International Tax Planning</li>
                  <li style={{ marginBottom: '5px' }}>✓ FEMA & RBI Compliance</li>
                  <li style={{ marginBottom: '5px' }}>✓ M&A Advisory</li>
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
                <strong style={{ fontSize: '0.9rem', color: var(--primary) }}>Specializations:</strong>
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
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8' }}>
                &quot;Mehul&apos;s expertise in international tax planning and cross-border compliance has been invaluable for our global operations. Highly professional and reliable partner.&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary)', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>SS</div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Sunny Stephen</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultant, BMG India</p>
                </div>
              </div>
            </div>

            <div className="card">
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8' }}>
                &quot;Outstanding service quality and deep expertise. They provided prompt, expert guidance on complex international compliance. Our go-to advisors for all taxation.&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--primary)', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>NK</div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>Nilay Kulkarni</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Founder, Vitt AI</p>
                </div>
              </div>
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

            <div className="card" style={{ textAlign: 'center', background: 'var(--primary)', color: '#fff' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>📅</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>Consultation</h3>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Book a free 30-minute session to explore how we can help thrive your business.</p>
              <a href="tel:+919527533506" className="btn btn-secondary" style={{ marginTop: '1.5rem', width: '100%' }}>Call Now</a>
            </div>
          </div>

          <div style={{ marginTop: '4rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '2px solid var(--primary)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.034561772485!2d73.7879464!3d19.1947607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb199f0a712f%3A0x2bb8a26b71bd9b72!2sRam%20Plaza%2C%20Mumbai%20Naka%2C%20Nashik%2C%20Maharashtra%20422011!5e0!3m2!1sen!2sin!4v1717777777777" 
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

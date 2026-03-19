import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const services = [
    { 
      title: 'International Taxation', 
      desc: 'Expertise in cross-border taxation, Transfer Pricing documentation, Treaty benefits (DTAA), and international regulatory compliance for global businesses.',
      icon: '🌍'
    },
    { 
      title: 'Virtual CFO Services', 
      desc: 'Strategic financial leadership, budgeting, forecasting, and investment advisory for startups and SMEs without the overhead of a full-time CFO.',
      icon: '📈'
    },
    { 
      title: 'Audit & Assurance', 
      desc: 'Comprehensive statutory audits, internal audits, tax audits, and thorough due diligence to ensure transparency and complete regulatory compliance.',
      icon: '🛡️'
    },
    { 
      title: 'Tax Planning & GST', 
      desc: 'Hassle-free ITR and GST return filing, tax optimization strategies, and expert representation for individuals and corporate entities.',
      icon: '🏛️'
    },
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 600px' }}>
              <h2 style={{ color: 'var(--accent)', fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>Agrawal Khandelwal & Associates LLP</h2>
              <h1>Precision in Accounting.<br />Strategic in Growth.</h1>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '40px', color: '#e2e8f0' }}>Institutional-grade financial frameworks for the modern global economy. Specializing in International Tax, Audit, and Virtual CFO services.</p>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Link href="/#contact" className="btn btn-primary">Book Consultation</Link>
                <Link href="/services" className="btn btn-outline-light">Our Expertise</Link>
              </div>
            </div>
            <div style={{ flex: '1 1 400px', background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '10px' }}>Quick Tax Estimate</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Compare FY 2025-26 slabs instantly.</p>
              </div>
              <Link href="/tax-calculator" className="btn btn-primary" style={{ width: '100%' }}>Open Calculator</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Industries We Serve</h2>
            <p style={{ color: 'var(--text-light)' }}>Specialized financial consulting tailored to the unique operational demands of diverse sectors.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {['Startups & IT', 'Manufacturing', 'Healthcare', 'Pharma', 'Real Estate', 'E-commerce'].map((industry, idx) => (
              <div key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border)', transition: 'var(--transition)' }} className="hover-lift">
                <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginBottom: '10px' }}>✦</div>
                <h4 style={{ fontSize: '1rem', color: 'var(--primary)' }}>{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Strategic Process</h2>
            <p style={{ color: 'var(--text-light)' }}>A systematic approach to financial excellence and regulatory compliance.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { step: '01', title: 'Diagnostic Review', desc: 'Thorough analysis of your current financial health and compliance status.' },
              { step: '02', title: 'Strategic Planning', desc: 'Customized tax and financial frameworks designed for your specific goals.' },
              { step: '03', title: 'Execution', desc: 'Seamless implementation of optimized accounting and regulatory systems.' },
              { step: '04', title: 'Continuous Audit', desc: 'Ongoing monitoring to ensure sustained excellence and risk mitigation.' }
            ].map((item, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <span style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--bg-surface)', position: 'absolute', top: '-40px', left: '0', zIndex: -1 }}>{item.step}</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-number">100+</div>
              <div className="trust-label">Businesses Trusted Us</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">5+</div>
              <div className="trust-label">Years of Experience</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">2</div>
              <div className="trust-label">Office Locations (Nashik & Sillod)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="expertise">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '10px', fontFamily: 'Inter' }}>Core Services</h4>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Comprehensive Financial Solutions</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>From business incorporation to complex cross-border M&A, we offer tailored services designed to meet your specific financial goals.</p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/services" className="service-link">
                  Detailed Services <span style={{ marginLeft: '5px' }}>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '10px', fontFamily: 'Inter' }}>Why Choose Us</h4>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Partnering in Your Growth Journey</h2>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                We don&apos;t just crunch numbers; we provide the strategic foresight needed to navigate complex regulatory landscapes.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '30px' }}>
                <li style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>✓</span>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>Strategic Global Perspective</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Deep expertise in international taxation and FEMA helps your business scale across borders seamlessly.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>✓</span>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>Proactive Compliance</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>We stay ahead of regulatory shifts so you can focus on core business operations without compliance stress.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>✓</span>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>Technology-Driven Approach</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Utilizing modern financial tools and digital audit frameworks for maximum precision and transparency.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: '40px', borderRadius: '16px', border: '1px solid var(--border)', position: 'relative' }}>
               <div style={{ padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ marginBottom: '15px' }}>Client-Centric Audit</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Our audit process is designed to identify operational bottlenecks, not just financial discrepancies.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ height: '4px', background: 'var(--accent)', width: '60%', borderRadius: '2px' }}></div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>98% Accuracy</span>
                  </div>
               </div>
               <div style={{ padding: '30px', background: 'var(--primary)', color: '#fff', borderRadius: '12px', marginTop: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ marginBottom: '15px', color: '#fff' }}>24/7 Advisor Access</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '0' }}>Direct access to partners for critical financial decisions and emergency tax representation.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Meet Our Partners</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>Led by distinguished Chartered Accountants with extensive sector expertise and backgrounds in top-tier global firms.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', background: 'var(--bg-surface)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ minWidth: '150px' }}>
                <Image src="/mehul.jpg" alt="CA Mehul Agrawal" width={150} height={180} style={{ borderRadius: '8px', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>CA Mehul Agrawal</h3>
                <p style={{ color: 'var(--text-light)', fontWeight: 500, marginBottom: '12px', fontSize: '0.9rem' }}>Partner & International Tax Expert</p>
                <p style={{ fontSize: '0.95rem' }}>Specializes in International Taxation, Transfer Pricing, FEMA regulations, and cross-border M&A. Advises multinationals on inbound/outbound investments.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', background: 'var(--bg-surface)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ minWidth: '150px' }}>
                <Image src="/rupesh.jpg" alt="CA Rupesh Khandelwal" width={150} height={180} style={{ borderRadius: '8px', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>CA Rupesh Khandelwal</h3>
                <p style={{ color: 'var(--text-light)', fontWeight: 500, marginBottom: '12px', fontSize: '0.9rem' }}>Partner & Domestic Tax Specialist</p>
                <p style={{ fontSize: '0.95rem' }}>Former experience at Deloitte. Extensive background in Domestic Taxation, Statutory Audits, and consulting for Automobiles, IT, Healthcare, and Pharma sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>What Our Clients Say</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '30px' }}>Our commitment to proactive guidance and expert solutions has saved our clients significant resources and time.</p>
              
              <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '20px', marginBottom: '20px' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>&quot;Their expertise in international tax planning and execution is unmatched. They provided significant savings through tax optimization.&quot;</p>
                <p style={{ fontWeight: 'bold' }}>- Sunny Stephen, Breakthrough Management Group India</p>
              </div>
              
              <div style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '20px' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>&quot;Prompt, expert guidance on complex international compliance. A truly proactive approach to our startup&apos;s needs.&quot;</p>
                <p style={{ fontWeight: 'bold' }}>- Nilay Kulkarni, Founder, Vitt AI</p>
              </div>
            </div>
            
            <div style={{ flex: '1 1 400px', background: 'var(--primary)', color: '#fff', padding: '60px 40px', borderRadius: '12px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '20px', fontSize: '2rem' }}>Insights</h3>
              <h4 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>Stay Updated on Compliance</h4>
              <p style={{ color: '#cbd5e1', marginBottom: '30px' }}>Join our mailing list to receive our latest insights on Indian taxation, GST updates, and regulatory changes directly to your inbox.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="email" placeholder="Enter your business email" aria-label="Business Email" style={{ padding: '16px', borderRadius: '4px', border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} />
                <button className="btn btn-primary" style={{ width: '100%' }}>Subscribe to Insights</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
            <div>
              <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '10px' }}>Connect With Us</h4>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Start a Conversation</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '30px', fontSize: '1.1rem' }}>
                Have a specific query about International Taxation, Audit, or Business Scaling? Our partners are ready to provide expert guidance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ fontSize: '1.5rem' }}>📞</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '2px' }}>Call Support</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>+91 95275 33506 (Nashik)</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '2px' }}>Email Inquiries</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>mehul@agrawalkhandelwal.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'var(--bg-surface)', padding: '40px', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="Full Name" aria-label="Full Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid var(--border)' }} />
                  <input type="email" placeholder="Business Email" aria-label="Business Email" style={{ padding: '15px', borderRadius: '8px', border: '1px solid var(--border)' }} />
                </div>
                <input type="text" placeholder="Subject" aria-label="Subject" style={{ padding: '15px', borderRadius: '8px', border: '1px solid var(--border)' }} />
                <textarea placeholder="How can we help your business?" aria-label="Message" rows={5} style={{ padding: '15px', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'inherit' }}></textarea>
                <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ margin: '0 auto 100px' }}>
        <h2>Ready for Financial Excellence?</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Join the growing list of businesses that trust AK & Associates for strategic growth and compliance.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link href="/services" className="btn btn-primary">View All Services</Link>
          <a href="tel:+919527533506" className="btn btn-outline">Direct Call</a>
        </div>
      </section>
    </>
  )
}

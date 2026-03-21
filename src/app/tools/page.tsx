import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial & Tax Tools | Agrawal Khandelwal & Associates LLP',
  description: 'Free interactive financial tools including Tax Calculator, GST Search, SIP Planner, and Incorporation Wizard.',
}

export default function ToolsHubPage() {
  const tools = [
    {
      title: 'Income Tax Estimator',
      desc: 'Calculate your tax liability based on the latest Union Budget regimes.',
      icon: '💵',
      link: '/tax-calculator'
    },
    {
      title: 'GSTIN Search & Verify',
      desc: 'Verify the authenticity and filing status of any GST Identification Number.',
      icon: '🔍',
      link: '/tools/gst-search'
    },
    {
      title: 'Capital Gains Calculator',
      desc: 'Estimate tax on short-term and long-term gains from property and equities.',
      icon: '📈',
      link: '/tools/capital-gains'
    },
    {
      title: 'SIP & Retirement Planner',
      desc: 'Plan your mutual fund investments and visualize long-term compounding.',
      icon: '🌱',
      link: '/tools/sip-planner'
    },
    {
      title: 'Incorporation Wizard',
      desc: 'Not sure whether to register as an LLP or Pvt Ltd? Take our 5-question quiz.',
      icon: '🏢',
      link: '/tools/incorporation-wizard'
    }
  ]

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Client Resources</h4>
          <h1 className="section-title">Financial & Tax Tools</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Empower your financial decisions with our suite of free calculators and wizards. 
            For personalized advice, consult our expert CA team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {tools.map((tool, index) => (
            <Link href={tool.link} key={index} className="card" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', textDecoration: 'none' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{tool.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--primary)' }}>{tool.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1rem', flex: 1 }}>{tool.desc}</p>
              <div style={{ marginTop: '1.5rem', fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                Open Tool <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

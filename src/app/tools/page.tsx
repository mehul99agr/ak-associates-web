import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '../Icon'

export const metadata: Metadata = {
  title: 'Free Tax & Finance Tools | Income Tax, SIP Calculator',
  description: 'Free financial tools: Income Tax Calculator, Capital Gains Calculator, SIP Planner, and Incorporation Wizard. Powered by Agrawal Khandelwal & Associates LLP.',
  alternates: { canonical: 'https://agrawalkhandelwal.com/tools' },
  openGraph: {
    title: 'Free Tax & Finance Tools | Agrawal Khandelwal & Associates LLP',
    description: 'Calculate income tax, capital gains, and SIP returns, all free tools from our expert CA team.',
    url: 'https://agrawalkhandelwal.com/tools',
  },
}

const tools = [
  {
    title: 'Income Tax Estimator',
    desc: 'Calculate your tax liability under Old or New Regime based on the latest Union Budget updates.',
    icon: 'rupee',
    link: '/tax-calculator',
  },
  {
    title: 'Capital Gains Calculator',
    desc: 'Estimate tax on short-term and long-term gains from property and equities.',
    icon: 'chart',
    link: '/tools/capital-gains',
  },
  {
    title: 'SIP & Retirement Planner',
    desc: 'Plan your mutual fund investments and visualize long-term compounding growth.',
    icon: 'sprout',
    link: '/tools/sip-planner',
  },
  {
    title: 'Incorporation Wizard',
    desc: 'Not sure whether to register as an LLP or Pvt Ltd? Take our 5-question quiz.',
    icon: 'building',
    link: '/tools/incorporation-wizard',
  },
]

export default function ToolsHubPage() {
  return (
    <div style={{ background: 'var(--bg-surface)', minHeight: '100dvh', paddingTop: '130px' }}>
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span className="section-badge">Client Resources</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Financial &amp; Tax Tools</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem' }}>
              Empower your financial decisions with our suite of free calculators and wizards.
              For personalized advice, consult our expert CA team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.75rem' }}>
            {tools.map((tool, index) => (
              <Link
                href={tool.link}
                key={index}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              >
                <div style={{ marginBottom: '1.25rem', color: 'var(--primary)' }}><Icon name={tool.icon} size={44} /></div>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{tool.title}</h2>
                <p style={{ color: 'var(--text-light)', fontSize: '0.93rem', flex: 1, lineHeight: 1.7 }}>{tool.desc}</p>
                <div style={{ marginTop: '1.5rem', fontWeight: 700, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}>
                  Open Tool <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

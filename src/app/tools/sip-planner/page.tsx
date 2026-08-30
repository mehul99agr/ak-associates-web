'use client'
import { useState } from 'react'

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What return rate should I assume when planning a SIP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Equity mutual fund SIPs in India have historically delivered 10-14% annualized returns over long periods (10+ years), though returns are not guaranteed and vary by fund and market cycle. A conservative planning assumption of 10-12% is common; using a higher rate like 15%+ risks overestimating your future corpus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SIP investment tax-free in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, SIP investments themselves are not tax-free unless made through an ELSS (tax-saving) mutual fund, which qualifies for deduction up to ₹1.5 lakh under Section 123 (earlier Section 80C). Returns from equity mutual fund SIPs are subject to capital gains tax: 12.5% LTCG (over ₹1.25 lakh/year) if held beyond 12 months, or 20% STCG if held 12 months or less.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the power of compounding in SIP investments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compounding means your investment returns are reinvested and start earning their own returns. In a SIP, each monthly instalment compounds over the remaining investment period, so contributions made early grow for longer and contribute disproportionately more to the final corpus than later contributions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change or stop my SIP amount later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SIPs in India are flexible — you can increase the instalment amount (step-up SIP), pause it temporarily, or stop it altogether without any penalty from the mutual fund house, though exit load may apply depending on the fund and holding period.',
      },
    },
  ],
}

export default function SIPPlanner() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000)
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(12)
  const [years, setYears] = useState<number>(10)
  
  const [result, setResult] = useState<{ invested: number, wealth: number, total: number } | null>(null)

  const calculateSIP = () => {
    const i = expectedReturnRate / 12 / 100;
    const n = years * 12;
    const p = monthlyInvestment;

    const futureValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvested = p * n;
    const wealthGained = futureValue - totalInvested;

    setResult({ invested: totalInvested, wealth: wealthGained, total: futureValue });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Financial Tools</h4>
          <h1 className="section-title" style={{ color: 'var(--primary)' }}>SIP & Wealth Planner</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Visualize the power of compounding. Plan your mutual fund investments to reach your long-term financial goals.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '30px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontWeight: 700, color: 'var(--primary)' }}>Monthly Investment</label>
                <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>₹{monthlyInvestment.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" min="500" max="500000" step="500"
                value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontWeight: 700, color: 'var(--primary)' }}>Expected Return Rate (p.a)</label>
                <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{expectedReturnRate}%</span>
              </div>
              <input 
                type="range" min="1" max="30" step="0.5"
                value={expectedReturnRate} onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontWeight: 700, color: 'var(--primary)' }}>Time Period</label>
                <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{years} Years</span>
              </div>
              <input 
                type="range" min="1" max="40" step="1"
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculateSIP} style={{ width: '100%' }}>Calculate Future Value</button>

          {result && (
            <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Total Investment</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)' }}>₹{Math.round(result.invested).toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Estimated Wealth Gain</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#10b981' }}>+ ₹{Math.round(result.wealth).toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)' }}>Total Future Value</span>
                <span style={{ fontWeight: 900, fontSize: '2rem', color: 'var(--accent)' }}>₹{Math.round(result.total).toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ maxWidth: '700px', margin: '3.5rem auto 0' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqLd.mainEntity.map((q) => (
              <div key={q.name} style={{ background: 'var(--bg-card)', borderRadius: '10px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{q.name}</h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

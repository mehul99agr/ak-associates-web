'use client'
import { useState } from 'react'

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
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Financial Tools</h4>
          <h1 className="section-title">SIP & Wealth Planner</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Visualize the power of compounding. Plan your mutual fund investments to reach your long-term financial goals.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '30px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontWeight: 700, color: 'var(--primary)' }}>Monthly Investment</label>
                <span style={{ fontWeight: 700 }}>₹{monthlyInvestment.toLocaleString('en-IN')}</span>
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
                <span style={{ fontWeight: 700 }}>{expectedReturnRate}%</span>
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
                <span style={{ fontWeight: 700 }}>{years} Years</span>
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
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>₹{Math.round(result.invested).toLocaleString('en-IN')}</span>
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
      </div>
    </div>
  )
}

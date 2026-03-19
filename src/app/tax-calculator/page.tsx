'use client'
import { useState } from 'react'

export default function TaxCalculator() {
  const [income, setIncome] = useState<number>(0)
  const [regime, setRegime] = useState<'old' | 'new'>('new')
  const [fy, setFy] = useState<'24-25' | '25-26'>('25-26')
  const [taxResult, setTaxResult] = useState<{ tax: number; cess: number; total: number; savings?: number } | null>(null)

  const calculateTax = () => {
    let tax = 0
    const val = Number(income)

    if (regime === 'new') {
      // New Tax Regime (FY 2025-26 / AY 2026-27)
      const standardDeduction = 75000
      const taxable = Math.max(0, val - standardDeduction)
      
      if (fy === '25-26') {
        if (taxable <= 400000) tax = 0
        else if (taxable <= 800000) tax = (taxable - 400000) * 0.05
        else if (taxable <= 1200000) tax = 20000 + (taxable - 800000) * 0.10
        else if (taxable <= 1600000) tax = 60000 + (taxable - 1200000) * 0.15
        else if (taxable <= 2000000) tax = 120000 + (taxable - 1600000) * 0.20
        else if (taxable <= 2400000) tax = 200000 + (taxable - 2000000) * 0.25
        else tax = 300000 + (taxable - 2400000) * 0.30
        
        // Rebate u/s 87A (Nil tax up to 12L for certain conditions, simplified here to 7L-10L range)
        if (taxable <= 700000) tax = 0
      } else {
        // FY 2024-25
        if (taxable <= 300000) tax = 0
        else if (taxable <= 600000) tax = (taxable - 300000) * 0.05
        else if (taxable <= 900000) tax = 15000 + (taxable - 600000) * 0.10
        else if (taxable <= 1200000) tax = 45000 + (taxable - 900000) * 0.15
        else if (taxable <= 1500000) tax = 90000 + (taxable - 1200000) * 0.20
        else tax = 150000 + (taxable - 1500000) * 0.30
        if (taxable <= 700000) tax = 0
      }
    } else {
      // Old Tax Regime
      const standardDeduction = 50000
      const taxable = Math.max(0, val - standardDeduction)
      if (taxable <= 250000) tax = 0
      else if (taxable <= 500000) tax = (taxable - 250000) * 0.05
      else if (taxable <= 1000000) tax = 12500 + (taxable - 500000) * 0.20
      else tax = 112500 + (taxable - 1000000) * 0.30
      if (taxable <= 500000) tax = 0
    }

    const cess = tax * 0.04
    setTaxResult({ tax, cess, total: tax + cess })
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '10px', fontFamily: 'Inter' }}>Tax Tools</h4>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Income Tax Estimator</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Get a precise estimate of your tax liability for FY 2025-26. Compare Old vs. New tax regimes instantly.
          </p>
        </div>

        <div style={{ background: '#fff', padding: '50px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', maxWidth: '800px', margin: '0 auto', border: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div className="input-group">
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px', fontSize: '0.95rem' }}>Gross Annual Income (₹)</label>
              <input 
                type="number" 
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                aria-label="Gross Annual Income"
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem' }}
                placeholder="e.g. 1200000"
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px', fontSize: '0.95rem' }}>Select Assessment Year</label>
              <select 
                value={fy}
                onChange={(e) => setFy(e.target.value as '24-25' | '25-26')}
                aria-label="Select Assessment Year"
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: '#fff' }}
              >
                <option value="25-26">FY 2025-26 (AY 2026-27)</option>
                <option value="24-25">FY 2024-25 (AY 2025-26)</option>
              </select>
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px', fontSize: '0.95rem' }}>Select Tax Regime</label>
              <select 
                value={regime}
                onChange={(e) => setRegime(e.target.value as 'old' | 'new')}
                aria-label="Select Tax Regime"
                style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: '#fff' }}
              >
                <option value="new">New Tax Regime (Default)</option>
                <option value="old">Old Tax Regime</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculateTax} style={{ width: '100%', fontSize: '1.1rem', padding: '16px' }}>
            Calculate Liability
          </button>

          {taxResult && (
            <div style={{ marginTop: '50px', padding: '30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-light)' }}>Basic Tax</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>₹{taxResult.tax.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-light)' }}>Health & Education Cess (4%)</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>₹{taxResult.cess.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>Total Estimated Tax</span>
                <span style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--accent)' }}>₹{taxResult.total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}

          <div style={{ marginTop: '30px', padding: '20px', background: '#fff9e6', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ fontSize: '0.85rem', color: '#856404', lineHeight: 1.5 }}>
              <strong>Disclaimer:</strong> This calculator provides an approximate estimation based on simplified slabs. Professional tax planning considers various deductions (like 80C, 80D, HRA) not included here. Please consult with our partners for a comprehensive tax audit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

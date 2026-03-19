'use client'
import { useState } from 'react'

export default function TaxCalculator() {
  const [income, setIncome] = useState<number>(0)
  const [regime, setRegime] = useState<'old' | 'new'>('new')
  const [fy, setFy] = useState<'24-25' | '25-26'>('25-26')
  const [taxResult, setTaxResult] = useState<{ tax: number; cess: number; total: number; rebate: number } | null>(null)

  const calculateTax = () => {
    let tax = 0
    let rebate = 0
    const grossIncome = Number(income)

    if (regime === 'new') {
      const standardDeduction = 75000
      const taxableIncome = Math.max(0, grossIncome - standardDeduction)
      
      if (fy === '25-26') {
        // FY 2025-26 New Regime Slabs
        if (taxableIncome <= 400000) tax = 0
        else if (taxableIncome <= 800000) tax = (taxableIncome - 400000) * 0.05
        else if (taxableIncome <= 1200000) tax = 20000 + (taxableIncome - 800000) * 0.10
        else if (taxableIncome <= 1600000) tax = 60000 + (taxableIncome - 1200000) * 0.15
        else if (taxableIncome <= 2000000) tax = 120000 + (taxableIncome - 1600000) * 0.20
        else if (taxableIncome <= 2400000) tax = 200000 + (taxableIncome - 2000000) * 0.25
        else tax = 300000 + (taxableIncome - 2400000) * 0.30

        // Rebate 87A for FY 25-26: No tax if taxable income <= 12L
        if (taxableIncome <= 1200000) {
          rebate = tax
          tax = 0
        }
      } else {
        // FY 2024-25 New Regime Slabs
        if (taxableIncome <= 300000) tax = 0
        else if (taxableIncome <= 700000) tax = (taxableIncome - 300000) * 0.05
        else if (taxableIncome <= 1000000) tax = 20000 + (taxableIncome - 700000) * 0.10
        else if (taxableIncome <= 1200000) tax = 50000 + (taxableIncome - 1000000) * 0.15
        else if (taxableIncome <= 1500000) tax = 80000 + (taxableIncome - 1200000) * 0.20
        else tax = 140000 + (taxableIncome - 1500000) * 0.30

        // Rebate 87A for FY 24-25: No tax if taxable income <= 7L
        if (taxableIncome <= 700000) {
          rebate = tax
          tax = 0
        }
      }
    } else {
      // Old Regime (Same for both years)
      const standardDeduction = 50000
      const taxableIncome = Math.max(0, grossIncome - standardDeduction)
      
      if (taxableIncome <= 250000) tax = 0
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20
      else tax = 112500 + (taxableIncome - 1000000) * 0.30

      // Rebate 87A for Old Regime: No tax if taxable income <= 5L
      if (taxableIncome <= 500000) {
        rebate = tax
        tax = 0
      }
    }

    const cess = tax * 0.04
    setTaxResult({ tax, cess, total: tax + cess, rebate })
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Tax Tools</h4>
          <h1 className="section-title">Income Tax Estimator</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Calculate your tax liability based on the latest Union Budget {fy === '25-26' ? '2025' : '2024'} updates.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div className="input-group">
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem', color: 'var(--primary)' }}>Gross Annual Income (₹)</label>
              <input 
                type="number" 
                value={income || ''}
                onChange={(e) => setIncome(Number(e.target.value))}
                aria-label="Gross Annual Income"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1.1rem', fontWeight: 600 }}
                placeholder="e.g. 1500000"
              />
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem', color: 'var(--primary)' }}>Financial Year</label>
              <select 
                value={fy}
                onChange={(e) => setFy(e.target.value as '24-25' | '25-26')}
                aria-label="Select Financial Year"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: '#fff', fontWeight: 600 }}
              >
                <option value="25-26">FY 2025-26 (AY 2026-27)</option>
                <option value="24-25">FY 2024-25 (AY 2025-26)</option>
              </select>
            </div>
            <div className="input-group">
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem', color: 'var(--primary)' }}>Tax Regime</label>
              <select 
                value={regime}
                onChange={(e) => setRegime(e.target.value as 'old' | 'new')}
                aria-label="Select Tax Regime"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: '#fff', fontWeight: 600 }}
              >
                <option value="new">New Tax Regime (Default)</option>
                <option value="old">Old Tax Regime</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculateTax} style={{ width: '100%', fontSize: '1.1rem', padding: '1.2rem', fontWeight: 800 }}>
            CALCULATE TAX
          </button>

          {taxResult && (
            <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Basic Tax</span>
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>₹{taxResult.tax.toLocaleString('en-IN')}</span>
              </div>
              {taxResult.rebate > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)', color: '#059669' }}>
                  <span style={{ fontWeight: 600 }}>Tax Rebate (u/s 87A)</span>
                  <span style={{ fontWeight: 700 }}>- ₹{taxResult.rebate.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Health & Education Cess (4%)</span>
                <span style={{ fontWeight: 700 }}>₹{taxResult.cess.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)' }}>Total Tax Liability</span>
                <span style={{ fontWeight: 900, fontSize: '2.2rem', color: 'var(--accent)' }}>₹{Math.round(taxResult.total).toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}

          <div style={{ marginTop: '30px', padding: '20px', background: '#fffbeb', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
            <p style={{ fontSize: '0.85rem', color: '#92400e', lineHeight: 1.6 }}>
              <strong>Note:</strong> This is a simplified estimator. The New Tax Regime includes a <strong>Standard Deduction of ₹75,000</strong>. The Old Regime calculation assumes a standard deduction of ₹50,000 but does not account for specific 80C/80D deductions. For a detailed tax plan, please consult with our experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

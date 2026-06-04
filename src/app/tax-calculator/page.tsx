'use client'
import { useState } from 'react'

type RegimeResult = { taxable: number; tax: number; rebate: number; cess: number; total: number }

const bookingLink = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

const formatINR = (n: number) => n.toLocaleString('en-IN')
const parseNum = (s: string) => Number(s.replace(/[^0-9]/g, '')) || 0

function calcNew(gross: number, fy: '24-25' | '25-26'): RegimeResult {
  const taxable = Math.max(0, gross - 75000)
  let tax = 0
  if (fy === '25-26') {
    if (taxable <= 400000) tax = 0
    else if (taxable <= 800000) tax = (taxable - 400000) * 0.05
    else if (taxable <= 1200000) tax = 20000 + (taxable - 800000) * 0.10
    else if (taxable <= 1600000) tax = 60000 + (taxable - 1200000) * 0.15
    else if (taxable <= 2000000) tax = 120000 + (taxable - 1600000) * 0.20
    else if (taxable <= 2400000) tax = 200000 + (taxable - 2000000) * 0.25
    else tax = 300000 + (taxable - 2400000) * 0.30
  } else {
    if (taxable <= 300000) tax = 0
    else if (taxable <= 700000) tax = (taxable - 300000) * 0.05
    else if (taxable <= 1000000) tax = 20000 + (taxable - 700000) * 0.10
    else if (taxable <= 1200000) tax = 50000 + (taxable - 1000000) * 0.15
    else if (taxable <= 1500000) tax = 80000 + (taxable - 1200000) * 0.20
    else tax = 140000 + (taxable - 1500000) * 0.30
  }
  let rebate = 0
  const rebateCap = fy === '25-26' ? 1200000 : 700000
  if (taxable <= rebateCap) { rebate = tax; tax = 0 }
  const cess = tax * 0.04
  return { taxable, tax, rebate, cess, total: Math.round(tax + cess) }
}

function calcOld(gross: number, deductions: number): RegimeResult {
  const taxable = Math.max(0, gross - 50000 - deductions)
  let tax = 0
  if (taxable <= 250000) tax = 0
  else if (taxable <= 500000) tax = (taxable - 250000) * 0.05
  else if (taxable <= 1000000) tax = 12500 + (taxable - 500000) * 0.20
  else tax = 112500 + (taxable - 1000000) * 0.30
  let rebate = 0
  if (taxable <= 500000) { rebate = tax; tax = 0 }
  const cess = tax * 0.04
  return { taxable, tax, rebate, cess, total: Math.round(tax + cess) }
}

export default function TaxCalculator() {
  const [income, setIncome] = useState<number>(0)
  const [deductions, setDeductions] = useState<number>(0)
  const [fy, setFy] = useState<'24-25' | '25-26'>('25-26')
  const [result, setResult] = useState<{ newR: RegimeResult; oldR: RegimeResult } | null>(null)

  const calculate = () => {
    setResult({ newR: calcNew(income, fy), oldR: calcOld(income, deductions) })
  }

  const better = result ? (result.newR.total <= result.oldR.total ? 'new' : 'old') : null
  const saving = result ? Math.abs(result.newR.total - result.oldR.total) : 0

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Tax Tools</h4>
          <h1 className="section-title">Income Tax Estimator</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Compare the Old and New regimes side by side and see which one saves you more, based on the latest Union Budget {fy === '25-26' ? '2025' : '2024'} slabs.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '24px', marginBottom: '32px' }}>
            <div>
              <label htmlFor="income" style={{ display: 'block', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem', color: 'var(--primary)' }}>Gross Annual Income (₹)</label>
              <input
                id="income"
                type="text"
                inputMode="numeric"
                value={income ? formatINR(income) : ''}
                onChange={(e) => setIncome(parseNum(e.target.value))}
                aria-label="Gross Annual Income"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1.1rem', fontWeight: 600, background: 'var(--bg-card)', color: 'var(--text-main)' }}
                placeholder="e.g. 15,00,000"
              />
            </div>
            <div>
              <label htmlFor="fy" style={{ display: 'block', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem', color: 'var(--primary)' }}>Financial Year</label>
              <select
                id="fy"
                value={fy}
                onChange={(e) => setFy(e.target.value as '24-25' | '25-26')}
                aria-label="Select Financial Year"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: 'var(--bg-card)', color: 'var(--text-main)', fontWeight: 600 }}
              >
                <option value="25-26">FY 2025-26 (AY 2026-27)</option>
                <option value="24-25">FY 2024-25 (AY 2025-26)</option>
              </select>
            </div>
            <div>
              <label htmlFor="ded" style={{ display: 'block', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem', color: 'var(--primary)' }}>Old-Regime Deductions (₹)</label>
              <input
                id="ded"
                type="text"
                inputMode="numeric"
                value={deductions ? formatINR(deductions) : ''}
                onChange={(e) => setDeductions(parseNum(e.target.value))}
                aria-label="Total Old Regime Deductions"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1.1rem', fontWeight: 600, background: 'var(--bg-card)', color: 'var(--text-main)' }}
                placeholder="80C, 80D, HRA, home loan..."
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} style={{ width: '100%', fontSize: '1.1rem', padding: '1.2rem', fontWeight: 800 }}>
            COMPARE BOTH REGIMES
          </button>

          {result && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '20px', marginTop: '36px' }}>
                {([
                  { key: 'new', label: 'New Regime', r: result.newR },
                  { key: 'old', label: 'Old Regime', r: result.oldR },
                ] as const).map(({ key, label, r }) => (
                  <div key={key} style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-surface)', border: better === key ? '2px solid #10b981' : '1px solid var(--border)', position: 'relative' }}>
                    {better === key && (
                      <span style={{ position: 'absolute', top: '-12px', left: '20px', background: '#10b981', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '3px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Lower Tax</span>
                    )}
                    <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '14px' }}>{label}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-light)', marginBottom: '6px' }}><span>Taxable income</span><span>₹{formatINR(r.taxable)}</span></div>
                    {r.rebate > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: '#10b981', marginBottom: '6px' }}><span>Rebate u/s 87A</span><span>- ₹{formatINR(Math.round(r.rebate))}</span></div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-light)', marginBottom: '12px' }}><span>Cess (4%)</span><span>₹{formatINR(Math.round(r.cess))}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                      <span style={{ fontWeight: 800, color: 'var(--primary)' }}>Total tax</span>
                      <span style={{ fontWeight: 900, fontSize: '1.6rem', color: better === key ? '#10b981' : 'var(--text-main)' }}>₹{formatINR(r.total)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', padding: '20px 24px', background: 'var(--primary)', borderRadius: '12px', textAlign: 'center', color: '#fff' }}>
                {saving === 0 ? (
                  <p style={{ margin: 0, color: '#fff', fontWeight: 600 }}>Both regimes give the same tax for these numbers.</p>
                ) : (
                  <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
                    The {better === 'new' ? 'New' : 'Old'} Regime saves you about <span style={{ color: 'var(--gold-light)' }}>₹{formatINR(saving)}</span> this year.
                  </p>
                )}
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700, marginTop: '16px' }}>
                  Get a personalised tax plan
                </a>
              </div>
            </>
          )}

          <div style={{ marginTop: '30px', padding: '20px', background: 'var(--bg-surface)', borderRadius: '8px', borderLeft: '4px solid var(--gold)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
              <strong>Note:</strong> A simplified estimator. The New Regime applies a <strong>₹75,000 standard deduction</strong>; the Old Regime applies <strong>₹50,000</strong> plus the deductions you enter (80C, 80D, HRA, home loan interest, etc.). It does not handle surcharge on very high incomes or special-rate capital gains. For a precise plan, consult our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

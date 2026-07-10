'use client'
import { useState } from 'react'
import Link from 'next/link'

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this TDS calculator accurate for FY 2026-27 rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. It uses the current Section 195 base rates (12.5% for long-term gains, 30% for short-term gains), the applicable surcharge slab based on sale value, and 4% health and education cess. It gives a statutory-rate estimate — it does not replace a Form 13 lower deduction certificate computation, which can reduce TDS well below these figures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this calculator account for Form 13 lower deduction certificates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This tool shows the standard statutory TDS the buyer must deduct at the full rate. If the NRI seller\'s actual capital gain is much smaller than the sale value, applying for a Form 13 lower deduction certificate before the sale can reduce TDS closer to the real tax liability instead of waiting for a refund.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TDS calculated on the sale value or the actual profit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDS under Section 195 is deducted on the entire sale consideration, not on the NRI seller\'s profit. This is why the TDS amount shown here is often much higher than the seller\'s actual tax liability, and why many NRIs either apply for a Form 13 certificate in advance or claim a refund by filing an Indian ITR.',
      },
    },
  ],
}

type Result = {
  baseRate: number
  surchargeRate: number
  tdsBase: number
  surcharge: number
  cess: number
  totalTDS: number
  netProceeds: number
  effectiveRate: number
}

function getSurchargeRate(saleValue: number): number {
  if (saleValue <= 5000000) return 0
  if (saleValue <= 10000000) return 0.10
  if (saleValue <= 20000000) return 0.15
  if (saleValue <= 50000000) return 0.25
  return 0.37
}

export default function NRIPropertyTDSCalculator() {
  const [saleValue, setSaleValue] = useState<number>(0)
  const [holdingPeriod, setHoldingPeriod] = useState<'ltcg' | 'stcg'>('ltcg')
  const [result, setResult] = useState<Result | null>(null)

  const calculate = () => {
    if (saleValue <= 0) {
      setResult(null)
      return
    }
    const baseRate = holdingPeriod === 'ltcg' ? 0.125 : 0.30
    const surchargeRate = getSurchargeRate(saleValue)
    const tdsBase = saleValue * baseRate
    const surcharge = tdsBase * surchargeRate
    const cess = (tdsBase + surcharge) * 0.04
    const totalTDS = tdsBase + surcharge + cess
    const netProceeds = saleValue - totalTDS
    const effectiveRate = (totalTDS / saleValue) * 100

    setResult({ baseRate, surchargeRate, tdsBase, surcharge, cess, totalTDS, netProceeds, effectiveRate })
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <h4 className="section-badge">Tax Tools</h4>
            <h1 className="section-title">NRI Property TDS Calculator</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
              Estimate the TDS a buyer must deduct under Section 195 when purchasing property from an NRI seller, using FY 2026-27 rates, surcharge slabs, and cess.
            </p>
          </div>

          <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>Sale Value (₹)</label>
                <input
                  type="number" value={saleValue || ''} onChange={(e) => setSaleValue(Number(e.target.value))}
                  placeholder="e.g. 15000000"
                  style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-main)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>Holding Period</label>
                <select
                  value={holdingPeriod}
                  onChange={(e) => setHoldingPeriod(e.target.value as 'ltcg' | 'stcg')}
                  style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: 'var(--bg-card)', color: 'var(--text-main)' }}
                >
                  <option value="ltcg">More than 2 years (Long-Term)</option>
                  <option value="stcg">2 years or less (Short-Term)</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary" onClick={calculate} style={{ width: '100%' }}>Calculate TDS</button>

            {result && (
              <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Base TDS ({(result.baseRate * 100).toFixed(1)}%)</span>
                  <span style={{ fontWeight: 700 }}>₹{Math.round(result.tdsBase).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Surcharge ({(result.surchargeRate * 100).toFixed(0)}%)</span>
                  <span style={{ fontWeight: 700 }}>₹{Math.round(result.surcharge).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Health &amp; Education Cess (4%)</span>
                  <span style={{ fontWeight: 700 }}>₹{Math.round(result.cess).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>Total TDS ({result.effectiveRate.toFixed(2)}% effective)</span>
                  <span style={{ fontWeight: 900, fontSize: '1.6rem', color: 'var(--accent)' }}>₹{Math.round(result.totalTDS).toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>Net Proceeds to Seller</span>
                  <span style={{ fontWeight: 900, fontSize: '1.6rem' }}>₹{Math.round(result.netProceeds).toLocaleString('en-IN')}</span>
                </div>
                <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                  *TDS is deducted on the full sale consideration, not the actual profit. If your actual capital gain is much smaller than this sale value, a <Link href="/blog/tds-on-nri-property-sale-india" style={{ color: 'var(--accent)', fontWeight: 700 }}>Form 13 lower deduction certificate</Link> can reduce TDS significantly. See our <Link href="/nri-tax-advisory" style={{ color: 'var(--accent)', fontWeight: 700 }}>NRI Tax Advisory</Link> services for help.
                </p>
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

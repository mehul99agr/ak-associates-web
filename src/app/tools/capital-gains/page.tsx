'use client'
import { useState } from 'react'

export default function CapitalGainsCalculator() {
  const [assetType, setAssetType] = useState('equity')
  const [purchasePrice, setPurchasePrice] = useState<number>(0)
  const [salePrice, setSalePrice] = useState<number>(0)
  const [holdingPeriodMonths, setHoldingPeriodMonths] = useState<number>(0)
  
  const [result, setResult] = useState<{gain: number, isLTCG: boolean, tax: number} | null>(null)

  const calculate = () => {
    const gain = salePrice - purchasePrice;
    if (gain <= 0) {
      setResult({ gain, isLTCG: false, tax: 0 });
      return;
    }

    let isLTCG = false;
    let taxRate = 0;

    // As per new Budget 2024 updates
    if (assetType === 'equity') {
      isLTCG = holdingPeriodMonths > 12;
      taxRate = isLTCG ? 0.125 : 0.20; // 12.5% LTCG, 20% STCG
    } else if (assetType === 'property') {
      isLTCG = holdingPeriodMonths > 24;
      taxRate = isLTCG ? 0.125 : 0.30; // Assuming 30% slab for STCG for simplicity, 12.5% LTCG without indexation
    }

    let taxableGain = gain;
    
    // 1.25L exemption for Equity LTCG
    if (assetType === 'equity' && isLTCG) {
      taxableGain = Math.max(0, gain - 125000);
    }

    const tax = taxableGain * taxRate;
    setResult({ gain, isLTCG, tax });
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Tax Tools</h4>
          <h1 className="section-title">Capital Gains Calculator</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Estimate your Short-Term and Long-Term Capital Gains tax on Equity and Real Estate based on the latest Budget 2024 regulations.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>Asset Type</label>
              <select 
                value={assetType}
                onChange={(e) => setAssetType(e.target.value)}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', background: '#fff' }}
              >
                <option value="equity">Equity Shares / Equity Mutual Funds</option>
                <option value="property">Real Estate / Property</option>
              </select>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>Purchase Price (₹)</label>
                <input 
                  type="number" value={purchasePrice || ''} onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>Sale Price (₹)</label>
                <input 
                  type="number" value={salePrice || ''} onChange={(e) => setSalePrice(Number(e.target.value))}
                  style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '8px', color: 'var(--primary)' }}>Holding Period (in Months)</label>
              <input 
                type="number" value={holdingPeriodMonths || ''} onChange={(e) => setHoldingPeriodMonths(Number(e.target.value))}
                placeholder="e.g. 15"
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} style={{ width: '100%' }}>Calculate Gains</button>

          {result && (
            <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              {result.gain <= 0 ? (
                <div style={{ color: 'var(--accent)', fontWeight: 700, textAlign: 'center', fontSize: '1.2rem' }}>
                  Capital Loss: ₹{Math.abs(result.gain).toLocaleString('en-IN')}<br/>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>No tax liability. Loss can be carried forward.</span>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Total Gain</span>
                    <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#10b981' }}>₹{result.gain.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>Nature of Gain</span>
                    <span style={{ fontWeight: 700, background: '#e0e7ff', color: '#4338ca', padding: '2px 10px', borderRadius: '4px' }}>
                      {result.isLTCG ? 'Long-Term (LTCG)' : 'Short-Term (STCG)'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)' }}>Estimated Tax</span>
                    <span style={{ fontWeight: 900, fontSize: '2rem', color: 'var(--accent)' }}>₹{Math.round(result.tax).toLocaleString('en-IN')}</span>
                  </div>
                  <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
                    *Estimates based on Budget 2024 rates (STCG Equity 20%, LTCG Equity 12.5% over 1.25L. Real Estate LTCG 12.5% without indexation). Cess & Surcharge extra.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

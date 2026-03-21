'use client'
import { useState } from 'react'

export default function GSTSearchPage() {
  const [gstin, setGstin] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (gstin.length !== 15) {
      alert("Please enter a valid 15-digit GSTIN");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        legalName: 'AGRAWAL KHANDELWAL & ASSOCIATES LLP',
        tradeName: 'AK & ASSOCIATES',
        status: 'Active',
        taxpayerType: 'Regular',
        dateOfRegistration: '15-Jul-2018',
        jurisdiction: 'Maharashtra'
      });
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Tax Tools</h4>
          <h1 className="section-title">GSTIN Search & Verify</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Enter any 15-digit Goods and Services Tax Identification Number (GSTIN) to instantly verify the taxpayer's details and filing status.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
            <label style={{ fontWeight: 700, color: 'var(--primary)' }}>Enter GSTIN</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                placeholder="e.g. 27AAAAA0000A1Z5"
                maxLength={15}
                style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1.1rem', textTransform: 'uppercase' }}
              />
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Format: 2 digits (State Code) + 10 digits (PAN) + 1 digit (Entity) + Z + 1 digit (Checksum)</p>
          </form>

          {result && (
            <div style={{ marginTop: '40px', padding: '30px', background: '#fff', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '15px' }}>
                <h3 style={{ fontSize: '1.4rem' }}>Taxpayer Details</h3>
                <span style={{ padding: '5px 12px', background: '#dcfce7', color: '#059669', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700 }}>
                  {result.status}
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '5px' }}>Legal Name of Business</p>
                  <p style={{ fontWeight: 700 }}>{result.legalName}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '5px' }}>Trade Name</p>
                  <p style={{ fontWeight: 700 }}>{result.tradeName}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '5px' }}>Taxpayer Type</p>
                  <p style={{ fontWeight: 700 }}>{result.taxpayerType}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '5px' }}>State Jurisdiction</p>
                  <p style={{ fontWeight: 700 }}>{result.jurisdiction}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '5px' }}>Date of Registration</p>
                  <p style={{ fontWeight: 700 }}>{result.dateOfRegistration}</p>
                </div>
              </div>
              
              <div style={{ marginTop: '20px', padding: '15px', background: '#f3f4f6', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                *Note: This is a simulated response for demonstration purposes. In a production environment, this would connect to the official GSTN API or a public clearinghouse.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

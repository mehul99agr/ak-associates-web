'use client'
import { useState } from 'react'

export default function GSTSearchPage() {
  const [gstin, setGstin] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (gstin.length !== 15) {
      setError("Please enter a valid 15-digit GSTIN");
      return;
    }

    setLoading(true);

    try {
      /**
       * PRODUCTION API INTEGRATION
       * -------------------------
       * To enable real-time data, replace the demo logic below with a call to a service 
       * like Razorpay, Zoop, or the official GST portal API.
       */

      // DEMO / PLACEHOLDER LOGIC
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockData = {
        legalName: 'AGRAWAL KHANDELWAL & ASSOCIATES LLP',
        tradeName: 'AK & ASSOCIATES',
        status: 'Active',
        taxpayerType: 'Regular',
        dateOfRegistration: '15-Jul-2018',
        jurisdiction: 'Maharashtra',
        address: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik - 422011'
      };

      setResult(mockData);
    } catch (err) {
      setError("Failed to fetch GST details. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section" style={{ background: 'var(--bg-surface)', minHeight: '100vh', paddingTop: '140px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <h4 className="section-badge">Tax Tools</h4>
          <h1 className="section-title">GSTIN Search & Verify</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Verify the authenticity and filing status of any GST Identification Number instantly.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
            <label style={{ fontWeight: 700, color: 'var(--primary)' }}>Enter 15-Digit GSTIN</label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                placeholder="e.g. 27AAAAA0000A1Z5"
                maxLength={15}
                style={{ flex: 1, minWidth: '200px', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1.1rem', textTransform: 'uppercase', background: 'var(--bg-card)', color: 'var(--text-main)' }}
              />
              <button type="submit" className="btn btn-primary" disabled={loading} style={{ minWidth: '140px' }}>
                {loading ? 'Searching...' : 'Verify Now'}
              </button>
            </div>
            {error && <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600 }}>⚠️ {error}</p>}
          </form>

          {result && (
            <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-card)', borderRadius: '12px', border: '2px solid var(--primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '15px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>Business Entity Found</h3>
                <span style={{ padding: '5px 15px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800 }}>
                  {result.status.toUpperCase()}
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Legal Name</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.legalName}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Trade Name</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.tradeName || 'N/A'}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Taxpayer Type</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.taxpayerType}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Registration Date</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.dateOfRegistration}</p>
                </div>
              </div>

              <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Principal Place of Business</p>
                <p style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{result.address}</p>
              </div>
              
              <div style={{ marginTop: '25px', padding: '15px', background: 'var(--bg-surface)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-light)', borderLeft: '4px solid var(--primary)' }}>
                <strong>Pro Tip:</strong> Always verify the GSTIN before onboarding new vendors to ensure you can claim Input Tax Credit (ITC) safely.
              </div>
            </div>
          )}

          <div style={{ marginTop: '40px', padding: '20px', borderRadius: '12px', border: '1px dashed var(--border)', background: 'var(--bg-surface)' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--primary)' }}>API Configuration (For Admin)</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
              This tool is currently in <strong>Demo Mode</strong>. To connect to the live GSTN database, please provide your API endpoint and keys in the <code>handleSearch</code> function within <code>src/app/tools/gst-search/page.tsx</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

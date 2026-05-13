'use client'
import { useState, useEffect, useCallback } from 'react'

export default function GSTSearchPage() {
  const [gstin, setGstin] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaUrl, setCaptchaUrl] = useState<string | null>(null)
  const [captchaLoading, setCaptchaLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadCaptcha = useCallback(async () => {
    setCaptchaLoading(true)
    setCaptchaAnswer('')
    setError(null)
    // Bust the cache so a fresh captcha is always fetched
    setCaptchaUrl(`/api/gst-captcha?t=${Date.now()}`)
    setCaptchaLoading(false)
  }, [])

  useEffect(() => { loadCaptcha() }, [loadCaptcha])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setResult(null)

    if (gstin.length !== 15) {
      setError('Please enter a valid 15-digit GSTIN')
      return
    }
    if (!captchaAnswer.trim()) {
      setError('Please enter the captcha text')
      return
    }

    setLoading(true)

    try {
      const res = await fetch(`/api/gst-search?gstin=${gstin}&captcha=${encodeURIComponent(captchaAnswer.trim())}`)
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to fetch GST details. Please try again.')
        // Refresh captcha on any error
        loadCaptcha()
        return
      }

      setResult(data)
    } catch {
      setError('Network error. Please check your connection and try again.')
      loadCaptcha()
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    fontSize: '1rem',
    background: 'var(--bg-card)',
    color: 'var(--text-main)',
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

            {/* GSTIN input */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
                Enter 15-Digit GSTIN
              </label>
              <input
                type="text"
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                placeholder="e.g. 27AAAAA0000A1Z5"
                maxLength={15}
                style={{ ...inputStyle, width: '100%', fontSize: '1.1rem', textTransform: 'uppercase', boxSizing: 'border-box' }}
              />
            </div>

            {/* Captcha */}
            <div>
              <label style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', marginBottom: '8px' }}>
                Enter Captcha
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                {captchaUrl && (
                  <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', background: '#fff', lineHeight: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={captchaUrl}
                      alt="Captcha"
                      style={{ display: 'block', height: '52px', minWidth: '140px' }}
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={loadCaptcha}
                  disabled={captchaLoading}
                  style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', color: 'var(--text-light)', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
                >
                  {captchaLoading ? 'Loading...' : '↻ Refresh'}
                </button>
              </div>
              <input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                placeholder="Type the characters shown above"
                autoComplete="off"
                style={{ ...inputStyle, width: '100%', boxSizing: 'border-box' }}
              />
            </div>

            {error && (
              <p style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>
                ⚠️ {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading} style={{ alignSelf: 'flex-start', minWidth: '160px' }}>
              {loading ? 'Searching...' : 'Verify Now'}
            </button>
          </form>

          {result && (
            <div style={{ marginTop: '40px', padding: '30px', background: 'var(--bg-card)', borderRadius: '12px', border: `2px solid ${result.status?.toLowerCase() === 'active' ? 'var(--primary)' : 'var(--accent)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border)', paddingBottom: '15px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>Business Entity Found</h3>
                <span style={{
                  padding: '5px 15px',
                  background: result.status?.toLowerCase() === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: result.status?.toLowerCase() === 'active' ? '#10b981' : '#ef4444',
                  borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800,
                }}>
                  {result.status?.toUpperCase()}
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
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Constitution</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.constitutionOfBusiness || 'N/A'}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Registration Date</p>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.dateOfRegistration}</p>
                </div>
                {result.state && (
                  <div>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>State</p>
                    <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>{result.state}</p>
                  </div>
                )}
              </div>

              {result.address && (
                <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '5px' }}>Principal Place of Business</p>
                  <p style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{result.address}</p>
                </div>
              )}

              <div style={{ marginTop: '25px', padding: '15px', background: 'var(--bg-surface)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-light)', borderLeft: '4px solid var(--primary)' }}>
                <strong>Pro Tip:</strong> Always verify the GSTIN before onboarding new vendors to ensure you can claim Input Tax Credit (ITC) safely.
              </div>
            </div>
          )}

          <div style={{ marginTop: '40px', padding: '20px', borderRadius: '12px', border: '1px dashed var(--border)', background: 'var(--bg-surface)', fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
            <strong>Note:</strong> Data is fetched in real-time from the GSTN portal. Results reflect the latest available information.
          </div>
        </div>
      </div>
    </div>
  )
}

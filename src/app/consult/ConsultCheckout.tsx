'use client'
import { useEffect, useState } from 'react'
import { CONSULT_OFFER, CONSULT_PARTNERS, ConsultPartner, isConsultPartner } from '@/lib/consult'
import { FIRM_NAME, OFFICES } from '@/lib/constants'

type RazorpayResponse = { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }
type Unlocked = { partner: ConsultPartner; bookingUrl: string | null; whatsappNumber: string | null; whatsappUrl: string | null }
type Saved = Partial<Record<ConsultPartner, Unlocked>>

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void; on: (event: string, cb: (r: unknown) => void) => void }
  }
}

// v3: one product (30-minute call) that unlocks both the calendar and WhatsApp.
const STORAGE_KEY = 'consult_unlocked_v3'
const CHECKOUT_SRC = 'https://checkout.razorpay.com/v1/checkout.js'
const PARTNERS: ConsultPartner[] = ['mehul', 'rupesh']

function loadCheckout(): Promise<boolean> {
  if (window.Razorpay) return Promise.resolve(true)
  return new Promise((resolve) => {
    const s = document.createElement('script')
    s.src = CHECKOUT_SRC
    s.onload = () => resolve(true)
    s.onerror = () => resolve(false)
    document.body.appendChild(s)
  })
}

function readSaved(): Saved {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function save(u: Unlocked) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readSaved(), [u.partner]: u }))
  } catch {
    // Storage blocked: the result is still shown for this visit.
  }
}

export default function ConsultCheckout() {
  const [partner, setPartner] = useState<ConsultPartner | null>(null)
  const [unlocked, setUnlocked] = useState<Saved>({})
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setUnlocked(readSaved())
    const p = new URLSearchParams(window.location.search).get('partner')
    if (isConsultPartner(p)) setPartner(p)
  }, [])

  async function pay() {
    if (!partner) return
    const who = CONSULT_PARTNERS[partner]
    const email = partner === 'rupesh' ? OFFICES.sillod.email : OFFICES.nashik.email
    setError(null)
    setBusy(true)
    try {
      const [ok, orderRes] = await Promise.all([
        loadCheckout(),
        fetch('/api/consult/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ partner }),
        }),
      ])
      const order = await orderRes.json()
      if (!orderRes.ok) throw new Error(order.error || 'Could not start the payment.')
      if (!ok || !window.Razorpay) throw new Error('The payment window could not load. Check your connection and try again.')

      const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: 'INR',
        name: FIRM_NAME,
        description: `${CONSULT_OFFER.title} - ${who.name}`,
        order_id: order.orderId,
        theme: primary ? { color: primary } : undefined,
        modal: { ondismiss: () => setBusy(false) },
        handler: async (r: RazorpayResponse) => {
          try {
            const vRes = await fetch('/api/consult/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ orderId: r.razorpay_order_id, paymentId: r.razorpay_payment_id, signature: r.razorpay_signature }),
            })
            const v = await vRes.json()
            if (!vRes.ok) throw new Error(v.error || 'Payment could not be verified.')
            const u = v as Unlocked
            save(u)
            setUnlocked((prev) => ({ ...prev, [u.partner]: u }))
            window.gtag?.('event', 'consult_purchase', { partner, value: CONSULT_OFFER.price, currency: 'INR' })
          } catch (e) {
            setError(`${(e as Error).message} Your payment ID is ${r.razorpay_payment_id}. Email it to ${email} and we will send the details.`)
          } finally {
            setBusy(false)
          }
        },
      })
      rzp.on('payment.failed', () => {
        setError('The payment did not go through. You have not been charged; please try again.')
        setBusy(false)
      })
      rzp.open()
    } catch (e) {
      setError(`${(e as Error).message} You can also email ${email} and we will reply within one business day.`)
      setBusy(false)
    }
  }

  const u = partner ? unlocked[partner] : undefined

  return (
    <>
      <h2 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '1.25rem' }}>1. Who would you like to talk to?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
        {PARTNERS.map((p) => {
          const info = CONSULT_PARTNERS[p]
          const selected = partner === p
          return (
            <button
              key={p}
              type="button"
              aria-pressed={selected}
              onClick={() => { setPartner(p); setError(null) }}
              className="card"
              style={{
                textAlign: 'left',
                cursor: 'pointer',
                font: 'inherit',
                border: selected ? '2px solid var(--primary)' : '2px solid var(--border)',
                background: selected ? 'var(--bg-main)' : 'var(--bg-card)',
              }}
            >
              <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                {selected ? '✓ ' : ''}{info.name}
              </span>
              <span style={{ display: 'block', color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.6rem' }}>
                {info.office}
              </span>
              <span style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.6 }}>{info.focus}</span>
            </button>
          )
        })}
      </div>

      <h2 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '1.25rem', opacity: partner ? 1 : 0.5 }}>
        2. {partner ? `Book your call with ${CONSULT_PARTNERS[partner].name}` : 'Book your call'}
      </h2>
      {!partner && (
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '1.5rem' }}>Pick a partner above to continue.</p>
      )}

      {error && (
        <p role="alert" style={{ maxWidth: '760px', margin: '0 auto 2rem', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)', border: '1px solid var(--danger)', color: 'var(--text-main)' }}>
          {error}
        </p>
      )}
      <div className="card" style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', border: '2px solid var(--primary)', opacity: partner ? 1 : 0.5 }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{CONSULT_OFFER.title}</h3>
        <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', margin: '0.5rem 0', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
          ₹{CONSULT_OFFER.price}
        </p>
        <ul style={{ color: 'var(--text-light)', lineHeight: 1.8, paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
          {CONSULT_OFFER.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
        <div role="status">
          {u && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {u.bookingUrl && (
                <a href={u.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Paid: pick your slot
                </a>
              )}
              {u.whatsappNumber && u.whatsappUrl && (
                <>
                  <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)', margin: 0, textAlign: 'center' }}>WhatsApp: {u.whatsappNumber}</p>
                  <a href={u.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                    Open WhatsApp
                  </a>
                </>
              )}
            </div>
          )}
        </div>
        {!u && (
          <button type="button" className="btn btn-primary" onClick={pay} disabled={!partner || busy} style={{ width: '100%' }}>
            {!partner ? 'Choose a partner first' : busy ? 'Opening payment...' : `Pay ₹${CONSULT_OFFER.price}`}
          </button>
        )}
      </div>
    </>
  )
}

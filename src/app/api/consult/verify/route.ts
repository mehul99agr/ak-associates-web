import { createHmac, timingSafeEqual } from 'crypto'
import { NextResponse } from 'next/server'
import { CONSULT_OFFER, CONSULT_PARTNERS, CONSULT_PRODUCT_ID, isConsultPartner } from '@/lib/consult'

export const runtime = 'nodejs'

// Checks the Razorpay signature for a completed payment and, only if it is
// valid, returns BOTH the calendar link and the WhatsApp number for the partner the
// order was created for. Partner, product and amount are read from the order on
// Razorpay's side, so an older or cheaper order cannot unlock them.
export async function POST(req: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keyId || !keySecret) {
    return NextResponse.json({ error: 'Payments are not configured yet.' }, { status: 503 })
  }

  const body = await req.json().catch(() => null)
  const orderId = body?.orderId
  const paymentId = body?.paymentId
  const signature = body?.signature
  if (typeof orderId !== 'string' || typeof paymentId !== 'string' || typeof signature !== 'string') {
    return NextResponse.json({ error: 'Missing payment details.' }, { status: 400 })
  }

  const expected = createHmac('sha256', keySecret).update(`${orderId}|${paymentId}`).digest('hex')
  const a = Buffer.from(expected)
  const b = Buffer.from(signature)
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return NextResponse.json({ error: 'Payment could not be verified.' }, { status: 400 })
  }

  const res = await fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(orderId)}`, {
    headers: { Authorization: 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64') },
    cache: 'no-store',
  })
  if (!res.ok) {
    console.error('Razorpay order fetch failed', res.status, await res.text())
    return NextResponse.json({ error: 'Payment could not be verified. Please try again.' }, { status: 502 })
  }
  const order = await res.json()
  const product = order?.notes?.product
  const partner = order?.notes?.partner
  if (product !== CONSULT_PRODUCT_ID || order?.amount !== CONSULT_OFFER.price * 100 || !isConsultPartner(partner)) {
    return NextResponse.json({ error: 'Payment could not be verified.' }, { status: 400 })
  }

  const suffix = CONSULT_PARTNERS[partner].envSuffix
  const bookingUrl = process.env[`CONSULT_BOOKING_URL_${suffix}`] || null
  const number = (process.env[`CONSULT_WHATSAPP_NUMBER_${suffix}`] || '').replace(/\D/g, '')
  if (!bookingUrl && !number) {
    return NextResponse.json({ error: 'Contact details are not configured. Please email us.' }, { status: 503 })
  }
  const display = number.length === 12 && number.startsWith('91')
    ? `+91 ${number.slice(2, 7)} ${number.slice(7)}`
    : `+${number}`
  return NextResponse.json({
    partner,
    bookingUrl,
    whatsappNumber: number ? display : null,
    whatsappUrl: number
      ? `https://wa.me/${number}?text=${encodeURIComponent(`Hi, I booked a consultation call on your website (payment ${paymentId}).`)}`
      : null,
  })
}

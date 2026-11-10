import { NextResponse } from 'next/server'
import { CONSULT_OFFER, CONSULT_PRODUCT_ID, isConsultPartner } from '@/lib/consult'

export const runtime = 'nodejs'

// Creates a Razorpay order for the /consult call with one partner. The amount comes
// from CONSULT_OFFER, never from the request.
export async function POST(req: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keyId || !keySecret) {
    return NextResponse.json({ error: 'Payments are not configured yet.' }, { status: 503 })
  }

  const body = await req.json().catch(() => null)
  const partner = body?.partner
  if (!isConsultPartner(partner)) {
    return NextResponse.json({ error: 'Unknown option.' }, { status: 400 })
  }

  const amount = CONSULT_OFFER.price * 100
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency: 'INR',
      receipt: `consult_${partner}_${Date.now()}`,
      notes: { product: CONSULT_PRODUCT_ID, partner },
    }),
  })

  if (!res.ok) {
    console.error('Razorpay order failed', res.status, await res.text())
    return NextResponse.json({ error: 'Could not start the payment. Please try again.' }, { status: 502 })
  }

  const order = await res.json()
  return NextResponse.json({ orderId: order.id, amount, keyId })
}

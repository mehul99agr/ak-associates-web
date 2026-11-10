// Paid contact options sold on /consult. Prices live here so they can be changed
// in one place; the server routes read the same table, so a visitor cannot pay a
// different amount by editing the request.
//
// The calendar links and WhatsApp numbers themselves are NOT in the code. They are
// read from Vercel environment variables by the verify route and returned only
// after Razorpay confirms the payment:
//   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET,
//   CONSULT_BOOKING_URL_MEHUL, CONSULT_WHATSAPP_NUMBER_MEHUL,
//   CONSULT_BOOKING_URL_RUPESH, CONSULT_WHATSAPP_NUMBER_RUPESH

export type ConsultProduct = 'call' | 'whatsapp'
export type ConsultPartner = 'mehul' | 'rupesh'

export const CONSULT_PARTNERS: Record<ConsultPartner, { name: string; office: string; focus: string; envSuffix: string }> = {
  mehul: {
    name: 'CA Mehul Agrawal',
    office: 'Nashik office',
    focus: 'International tax, NRI taxation, transfer pricing, UAE corporate tax, FEMA and startups',
    envSuffix: 'MEHUL',
  },
  rupesh: {
    name: 'CA Rupesh Khandelwal',
    office: 'Sillod office',
    focus: 'Income tax, GST, statutory and internal audit, and business consulting in the Sillod / Chhatrapati Sambhajinagar region',
    envSuffix: 'RUPESH',
  },
}

export const CONSULT_PRODUCTS: Record<ConsultProduct, { title: string; price: number; summary: string; points: string[] }> = {
  call: {
    title: 'Book a consultation call',
    price: 499,
    summary: 'Pick a slot on the partner\'s calendar for a call.',
    points: [
      'Choose your own time slot right after payment',
      'Fee is adjusted against our professional fee if you engage us',
      'Bring your documents and questions to the call',
    ],
  },
  whatsapp: {
    title: 'Get the WhatsApp number',
    price: 199,
    summary: 'Message the partner directly on WhatsApp.',
    points: [
      'Number shown right after payment',
      'Good for short questions and sharing documents',
      'Replies within one business day',
    ],
  },
}

export function isConsultProduct(v: unknown): v is ConsultProduct {
  return v === 'call' || v === 'whatsapp'
}

export function isConsultPartner(v: unknown): v is ConsultPartner {
  return v === 'mehul' || v === 'rupesh'
}

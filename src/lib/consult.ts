// The one paid contact option sold on /consult: a 30-minute call with a partner.
// After payment the visitor gets BOTH that partner's calendar link and WhatsApp
// number, so neither is ever available for less than the call fee (user decision,
// Nov 10, 2026). The server routes read the price from here, so a visitor cannot
// pay a different amount by editing the request.
//
// The calendar links and WhatsApp numbers themselves are NOT in the code. They are
// read from Vercel environment variables by the verify route and returned only
// after Razorpay confirms the payment:
//   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET,
//   CONSULT_BOOKING_URL_MEHUL, CONSULT_WHATSAPP_NUMBER_MEHUL,
//   CONSULT_BOOKING_URL_RUPESH, CONSULT_WHATSAPP_NUMBER_RUPESH

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

/** Stored on the Razorpay order; the verify route only unlocks orders carrying it. */
export const CONSULT_PRODUCT_ID = 'call-30'

export const CONSULT_OFFER = {
  title: '30-minute consultation call',
  price: 999,
  minutes: 30,
  points: [
    'Pick your slot on the partner\'s calendar right after payment',
    'You also get the partner\'s WhatsApp number to send documents',
    'Fee is adjusted against our professional fee if you engage us',
  ],
}

export function isConsultPartner(v: unknown): v is ConsultPartner {
  return v === 'mehul' || v === 'rupesh'
}

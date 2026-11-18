// The one paid contact option sold on /consult: a 30-minute call at Rs 1,000
// (user decision Nov 18, 2026; was Rs 999). Zoho Bookings charges in INR via
// Razorpay, so overseas visitors pay Rs 1,000 on their card; `usdApprox` is the
// shown equivalent. If a USD-priced event is set up later, put its link in
// CONSULT_BOOKING_URL_INTL and the page shows a separate US$ button.
//
// Nov 10, 2026 (user decision): every call is booked on CA Mehul Agrawal's Zoho
// Bookings calendar, including visitors who came for CA Rupesh Khandelwal (Mehul
// supports those clients). Zoho Bookings collects the full fee before the slot is
// confirmed, so the booking link is itself behind payment and is safe to publish.
// The WhatsApp number is NOT on the site: it goes out in Zoho's "Booked"
// confirmation email, so it is never available for less than the call fee.

export const CONSULT_BOOKING_URL = 'https://agrawalkhandelwalassociatesllp.zohobookings.in/489389000000033045'

export const CONSULT_BOOKING_URL_INTL: string | null = null

export const CONSULT_HOST = 'CA Mehul Agrawal'

export const CONSULT_OFFER = {
  title: '30-minute consultation call',
  price: 1000,
  priceLabel: '₹1,000',
  usdApprox: 'about US$11',
  minutes: 30,
  points: [
    'Pick a slot in your own time zone and pay securely on our booking page',
    'Google Meet video call, so you can join from India, the US, the UK or the Gulf',
    'Your booking confirmation includes our WhatsApp number to send documents',
    'Fee is adjusted against our professional fee if you engage us',
  ],
}

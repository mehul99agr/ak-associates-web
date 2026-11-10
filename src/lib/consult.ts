// The one paid contact option sold on /consult: a 30-minute call at Rs 999.
//
// Nov 10, 2026 (user decision): every call is booked on CA Mehul Agrawal's Zoho
// Bookings calendar, including visitors who came for CA Rupesh Khandelwal (Mehul
// supports those clients). Zoho Bookings collects the full fee before the slot is
// confirmed, so the booking link is itself behind payment and is safe to publish.
// The WhatsApp number is NOT on the site: it goes out in Zoho's "Booked"
// confirmation email, so it is never available for less than the call fee.

export const CONSULT_BOOKING_URL = 'https://agrawalkhandelwalassociatesllp.zohobookings.in/489389000000033045'

export const CONSULT_HOST = 'CA Mehul Agrawal'

export const CONSULT_OFFER = {
  title: '30-minute consultation call',
  price: 999,
  minutes: 30,
  points: [
    'Pick a slot and pay securely on our booking page',
    'Your booking confirmation includes our WhatsApp number to send documents',
    'Fee is adjusted against our professional fee if you engage us',
  ],
}

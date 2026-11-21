// The one paid contact option sold on /consult: a 30-minute call at Rs 999
// (Nov 18, 2026 it was briefly Rs 1,000; user set it back to Rs 999 on Nov 21, 2026 to match Zoho). Zoho Bookings charges in INR via
// Razorpay, so overseas visitors pay Rs 999 on their card; `usdApprox` is the
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
  price: 999,
  priceLabel: '₹999',
  usdApprox: 'about US$11',
  minutes: 30,
  headline: 'Fully adjusted against our fee if you engage us',
  points: [
    'Detailed advice on your matter: structure, tax position, filings and next steps',
    'Pick a slot in your own time zone and pay securely on our booking page',
    'Google Meet video call, so you can join from India, the US, the UK or the Gulf',
    'Your booking confirmation includes our WhatsApp number to send documents',
  ],
}

// Nov 21, 2026 (user decision): bookings fell from ~5-7 a month on the old free
// Google Calendar link to ~1 after the paid-only call went live, so a free
// 15-minute intro call sits next to the paid one. It is screened: the visitor
// answers the enquiry form first (topic, country, timeline) and only then sees the
// booking link. Zoho's free plan allows only one event, so the free call is a
// Google Calendar appointment schedule ("15 min call with CA Mehul Agrawal", user
// decision Nov 21, 2026). If set to null, the form promises a slot by email instead.
export const FREE_CALL_BOOKING_URL: string | null = 'https://calendar.app.google/bpXoaqzsoohX36Zf6'

export const FREE_CALL_OFFER = {
  title: 'Free 15-minute intro call',
  minutes: 15,
  points: [
    'Tell us what you need in three quick questions',
    'We confirm whether we can help, how, and the likely fee',
    'No charge and no obligation',
  ],
}

// Topics for the enquiry form. `slug` is what service pages pass as ?topic= on
// links to /consult so the form arrives preselected.
export const ENQUIRY_TOPICS = [
  { slug: 'us-cross-border', label: 'US LLC / C-Corp compliance, ODI or FEMA' },
  { slug: 'company-incorporation', label: 'Company or LLP registration in India' },
  { slug: 'startups', label: 'Startup compliance or Virtual CFO' },
  { slug: 'nri-tax', label: 'NRI tax, property sale or DTAA' },
  { slug: 'uae-tax', label: 'UAE corporate tax or entity setup' },
  { slug: 'transfer-pricing', label: 'Transfer pricing' },
  { slug: 'offshore-accounting', label: 'Offshore accounting for CPA / CA firms' },
  { slug: 'tax-gst-audit', label: 'Income tax, GST, TDS or audit' },
  { slug: 'other', label: 'Something else' },
] as const

export type EnquiryTopic = (typeof ENQUIRY_TOPICS)[number]['slug']

export const ENQUIRY_TIMELINES = [
  { slug: 'urgent', label: 'Urgent: within 2 weeks' },
  { slug: 'soon', label: 'In the next 1 to 3 months' },
  { slug: 'exploring', label: 'Just exploring for now' },
] as const

// Web3Forms delivers form submissions to mehul@agrawalkhandelwal.com (form "Website
// Enquiries - agrawalkhandelwal.com", created Nov 21, 2026). Web3Forms documents the
// access key as public and meant for client code, so it is kept here; an env var can
// override it without a code change.
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '4c189f4a-bfd1-4107-950e-30e21126f009'

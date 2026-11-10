// Shared literals used across many pages. Single source of truth so a phone/link
// change doesn't require grepping every page.tsx individually.

export const BASE_URL = 'https://agrawalkhandelwal.com'

export const FIRM_NAME = 'Agrawal Khandelwal & Associates LLP'

// Booking and WhatsApp are paid and unlocked on /consult (see src/lib/consult.ts).
// Phone numbers, the calendar link and the WhatsApp number are deliberately not
// in the code; only email is public.
export const BOOKING_LINK = '/consult'

export const WHATSAPP_LINK = '/consult?for=whatsapp'
export const WHATSAPP_ARTICLE_LINK = '/consult?for=whatsapp'

export const MEHUL_PERSON_ID = `${BASE_URL}/#mehul-agrawal`
export const RUPESH_PERSON_ID = `${BASE_URL}/#rupesh-khandelwal`
export const ORGANIZATION_ID = `${BASE_URL}/#organization`

export const OFFICES = {
  nashik: {
    name: 'Nashik Office',
    id: `${BASE_URL}/#nashik-office`,
    streetAddress: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka',
    addressLine: 'Shop No. 12 & 13, Ram Plaza, Mumbai Naka, Nashik – 422011',
    locality: 'Nashik',
    region: 'Maharashtra',
    postalCode: '422011',
    email: 'mehul@agrawalkhandelwal.com',
    latitude: '19.1947607',
    longitude: '73.7879464',
  },
  sillod: {
    name: 'Sillod Office',
    id: `${BASE_URL}/#sillod-office`,
    streetAddress: 'Near Datta Mandir, Tilak Nagar',
    addressLine: 'Near Datta Mandir, Tilak Nagar, Sillod – 431112',
    locality: 'Sillod',
    region: 'Maharashtra',
    postalCode: '431112',
    email: 'rupesh@agrawalkhandelwal.com',
    latitude: '20.1040',
    longitude: '75.6496',
  },
} as const

// Share image for pages that define their own `openGraph` / `twitter` metadata.
// A page-level block replaces the root one wholesale, so the root
// opengraph-image is not inherited and has to be named explicitly.
export const OG_IMAGES = [
  { url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${FIRM_NAME}: Chartered Accountants` },
]

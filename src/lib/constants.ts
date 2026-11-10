// Shared literals used across many pages. Single source of truth so a phone/link
// change doesn't require grepping every page.tsx individually.

export const BASE_URL = 'https://agrawalkhandelwal.com'

export const FIRM_NAME = 'Agrawal Khandelwal & Associates LLP'

// Calls are paid and booked on /consult (see src/lib/consult.ts). Email is the only
// free channel. Phone numbers and the WhatsApp number are deliberately not in the
// code: the WhatsApp number goes out only in Zoho's booking confirmation email.
export const BOOKING_LINK = '/consult'

export const EMAIL_LINK = 'mailto:mehul@agrawalkhandelwal.com'

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

// Shared literals used across many pages. Single source of truth so a phone/link
// change doesn't require grepping every page.tsx individually.

export const BASE_URL = 'https://agrawalkhandelwal.com'

export const FIRM_NAME = 'Agrawal Khandelwal & Associates LLP'

// Nov 28, 2026 (user decision): both partners' mobile numbers are back on the site
// (call + WhatsApp) to bring in direct leads. This reverses the Nov 21 "no phone
// numbers" rule. Change numbers only here.
export const BOOKING_LINK = '/consult'

export const EMAIL_LINK = 'mailto:mehul@agrawalkhandelwal.com'

export const MEHUL_PERSON_ID = `${BASE_URL}/#mehul-agrawal`
export const RUPESH_PERSON_ID = `${BASE_URL}/#rupesh-khandelwal`
export const ORGANIZATION_ID = `${BASE_URL}/#organization`

export const OFFICES = {
  nashik: {
    name: 'Nashik Office',
    id: `${BASE_URL}/#nashik-office`,
    streetAddress: 'Shop No. 12&13, Ram Plaza, Bhabha Nagar, Mumbai Naka',
    addressLine: 'Shop No. 12&13, Ram Plaza, Bhabha Nagar, Mumbai Naka, Nashik – 422011',
    locality: 'Nashik',
    region: 'Maharashtra',
    postalCode: '422011',
    email: 'mehul@agrawalkhandelwal.com',
    phone: '+919527533506',
    phoneDisplay: '+91 95275 33506',
    whatsapp: 'https://wa.me/919527533506',
    latitude: '19.9877793',
    longitude: '73.7898192',
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
    phone: '+919595585953',
    phoneDisplay: '+91 95955 85953',
    whatsapp: 'https://wa.me/919595585953',
    latitude: '20.3055',
    longitude: '75.6518',
  },
} as const

// Share image for pages that define their own `openGraph` / `twitter` metadata.
// A page-level block replaces the root one wholesale, so the root
// opengraph-image is not inherited and has to be named explicitly.
export const OG_IMAGES = [
  { url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: `${FIRM_NAME}: Chartered Accountants` },
]

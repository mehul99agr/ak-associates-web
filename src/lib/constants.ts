// Shared literals used across many pages. Single source of truth so a phone/link
// change doesn't require grepping every page.tsx individually.

export const BASE_URL = 'https://agrawalkhandelwal.com'

export const FIRM_NAME = 'Agrawal Khandelwal & Associates LLP'

export const BOOKING_LINK = 'https://calendar.app.google/Ln2Xg6PeDQ4dTrgT7'

export const WHATSAPP_LINK = "https://wa.me/919527533506?text=Hi,%20I'd%20like%20to%20book%20a%20consultation."
export const WHATSAPP_ARTICLE_LINK = 'https://wa.me/919527533506?text=Hi,%20I%20read%20your%20article%20and%20have%20a%20question.'

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
    phoneDisplay: '+91 95275 33506',
    phoneHref: 'tel:+919527533506',
    phoneE164: '+91-95275-33506',
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
    phoneDisplay: '+91 95955 85953',
    phoneHref: 'tel:+919595585953',
    phoneE164: '+91-95955-85953',
    email: 'rupesh@agrawalkhandelwal.com',
    latitude: '20.1040',
    longitude: '75.6496',
  },
} as const

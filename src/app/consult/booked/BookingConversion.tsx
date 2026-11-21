'use client'
import { useEffect } from 'react'
import { CONSULT_OFFER } from '@/lib/consult'

// Fires once per visit to /consult/booked, the page Zoho Bookings redirects to after
// a paid booking. Mark `booking_complete` as a key event in GA4.
export default function BookingConversion() {
  useEffect(() => {
    const key = 'ak_booking_complete_sent'
    try {
      if (sessionStorage.getItem(key)) return
      sessionStorage.setItem(key, '1')
    } catch {}
    window.gtag?.('event', 'booking_complete', { value: CONSULT_OFFER.price, currency: 'INR', call: 'paid_30' })
  }, [])
  return null
}

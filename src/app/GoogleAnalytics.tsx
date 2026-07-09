'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from './cookieConsentConfig'

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const check = () => setConsented(localStorage.getItem(COOKIE_CONSENT_KEY) === 'granted')
    check()
    window.addEventListener(COOKIE_CONSENT_EVENT, check)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, check)
  }, [])

  if (!gaId || gaId === 'G-XXXXXXXXXX' || !consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  )
}

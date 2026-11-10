'use client'
import Script from 'next/script'
import { useEffect } from 'react'
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from './cookieConsentConfig'

// Google Consent Mode v2 (user decision, Nov 10, 2026).
// GA4 loads for every visitor, but analytics_storage starts as "denied": until a
// visitor clicks Accept, GA sets no cookies and sends only cookieless pings that
// Google uses for modelled counts. Accept switches analytics_storage to "granted";
// Decline keeps it denied. Advertising signals are always denied (we run no ads).

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    const apply = () => {
      const choice = localStorage.getItem(COOKIE_CONSENT_KEY)
      window.gtag?.('consent', 'update', { analytics_storage: choice === 'granted' ? 'granted' : 'denied' })
    }
    window.addEventListener(COOKIE_CONSENT_EVENT, apply)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, apply)
  }, [])

  if (!gaId || gaId === 'G-XXXXXXXXXX') return null

  return (
    <>
      <Script id="gtag-consent-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var granted = false;
          try { granted = localStorage.getItem('${COOKIE_CONSENT_KEY}') === 'granted'; } catch (e) {}
          gtag('consent', 'default', {
            analytics_storage: granted ? 'granted' : 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('js', new Date());
          gtag('config', '${gaId}', { page_path: window.location.pathname });
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
    </>
  )
}

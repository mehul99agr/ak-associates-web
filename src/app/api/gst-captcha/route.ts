import { NextResponse } from 'next/server'

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

function extractCookies(setCookieHeader: string | null): Record<string, string> {
  if (!setCookieHeader) return {}
  const cookies: Record<string, string> = {}
  // Each Set-Cookie directive is separated by comma, but dates also contain commas.
  // Split on ", " only when followed by a token= pattern (start of a new cookie).
  const parts = setCookieHeader.split(/,\s*(?=[A-Za-z0-9_-]+=)/)
  for (const part of parts) {
    const nameValue = part.split(';')[0].trim()
    const eqIdx = nameValue.indexOf('=')
    if (eqIdx > 0) {
      const name = nameValue.slice(0, eqIdx).trim()
      const value = nameValue.slice(eqIdx + 1).trim()
      cookies[name] = value
    }
  }
  return cookies
}

function cookieHeader(cookies: Record<string, string>): string {
  return Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ')
}

export async function GET() {
  try {
    // Step 1 — init session by visiting the search page (sets initial cookies)
    const sessionRes = await fetch('https://services.gst.gov.in/services/searchtp', {
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(10000),
    })
    const sessionCookies = extractCookies(sessionRes.headers.get('set-cookie'))

    // Step 2 — fetch captcha image (sets CaptchaCookie)
    const captchaRes = await fetch(
      `https://services.gst.gov.in/services/captcha?rnd=${Math.random()}`,
      {
        headers: {
          'User-Agent': UA,
          'Referer': 'https://services.gst.gov.in/services/searchtp',
          'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          ...(Object.keys(sessionCookies).length ? { 'Cookie': cookieHeader(sessionCookies) } : {}),
        },
        signal: AbortSignal.timeout(10000),
      }
    )

    if (!captchaRes.ok) {
      return NextResponse.json({ error: 'GST portal failed to return captcha' }, { status: 502 })
    }

    const captchaCookies = extractCookies(captchaRes.headers.get('set-cookie'))
    const allCookies = { ...sessionCookies, ...captchaCookies }

    const buffer = await captchaRes.arrayBuffer()
    const contentType = captchaRes.headers.get('content-type') ?? 'image/png'

    const response = new NextResponse(Buffer.from(buffer), {
      headers: { 'Content-Type': contentType },
    })

    // Store all GSTN cookies server-side so /api/gst-search can forward them
    response.cookies.set('gst_cookies', JSON.stringify(allCookies), {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 300,
    })

    return response
  } catch (err: any) {
    if (err?.name === 'TimeoutError') {
      return NextResponse.json({ error: 'GST portal timed out' }, { status: 504 })
    }
    return NextResponse.json({ error: 'Failed to load captcha' }, { status: 502 })
  }
}

import { NextResponse } from 'next/server'

const HEADERS = {
  'Referer': 'https://services.gst.gov.in/services/searchtp',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
}

export async function GET() {
  try {
    const res = await fetch('https://services.gst.gov.in/services/captcha', {
      headers: HEADERS,
      signal: AbortSignal.timeout(10000),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to load captcha from GST portal' }, { status: 502 })
    }

    const buffer = await res.arrayBuffer()
    const contentType = res.headers.get('content-type') ?? 'image/png'

    // Extract the JSESSIONID from GSTN's Set-Cookie to use in subsequent search request
    const setCookie = res.headers.get('set-cookie') ?? ''
    const sessionMatch = setCookie.match(/JSESSIONID=([^;,\s]+)/)
    const jsessionid = sessionMatch?.[1] ?? ''

    const response = new NextResponse(Buffer.from(buffer), {
      headers: { 'Content-Type': contentType },
    })

    // Store session server-side (httpOnly so JS can't read it, sent automatically with /api/gst-search)
    if (jsessionid) {
      response.cookies.set('gst_jsessionid', jsessionid, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/api/gst-search',
        maxAge: 300, // 5 minutes
      })
    }

    return response
  } catch (err: any) {
    if (err?.name === 'TimeoutError') {
      return NextResponse.json({ error: 'GST portal timed out loading captcha' }, { status: 504 })
    }
    return NextResponse.json({ error: 'Failed to load captcha' }, { status: 502 })
  }
}

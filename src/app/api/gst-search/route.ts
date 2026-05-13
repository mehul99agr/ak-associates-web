import { NextRequest, NextResponse } from 'next/server'

const BASE = 'https://services.gst.gov.in/services/api/search/taxpayerDetails'

const HEADERS = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Origin': 'https://services.gst.gov.in',
  'Referer': 'https://services.gst.gov.in/services/searchtp',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}

export async function GET(request: NextRequest) {
  const gstin = request.nextUrl.searchParams.get('gstin')
  const captcha = request.nextUrl.searchParams.get('captcha')

  if (!gstin || gstin.length !== 15) {
    return NextResponse.json({ error: 'Invalid GSTIN' }, { status: 400 })
  }

  if (!captcha) {
    return NextResponse.json({ error: 'Captcha answer is required' }, { status: 400 })
  }

  // Retrieve the GSTN session cookie set by /api/gst-captcha
  const jsessionid = request.cookies.get('gst_jsessionid')?.value

  try {
    const url = `${BASE}?gstin=${encodeURIComponent(gstin)}&captcha=${encodeURIComponent(captcha)}`

    const res = await fetch(url, {
      headers: {
        ...HEADERS,
        ...(jsessionid ? { 'Cookie': `JSESSIONID=${jsessionid}` } : {}),
      },
      signal: AbortSignal.timeout(12000),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      const isCaptchaError = text.toLowerCase().includes('captcha') || res.status === 401 || res.status === 403
      return NextResponse.json(
        { error: isCaptchaError ? 'Incorrect captcha. Please refresh and try again.' : 'GSTIN not found or portal error.' },
        { status: res.status }
      )
    }

    const data = await res.json()

    if (data.errorCode || data.error || data.status === 'ERROR') {
      const msg: string = data.errorMessage || data.message || ''
      const isCaptchaError = msg.toLowerCase().includes('captcha')
      return NextResponse.json(
        { error: isCaptchaError ? 'Incorrect captcha. Please refresh and try again.' : 'GSTIN not found in GST database.' },
        { status: 404 }
      )
    }

    const addr = data.pradr?.addr
    const addressParts = [
      addr?.bno, addr?.bnm, addr?.flno, addr?.st, addr?.loc, addr?.city, addr?.dst, addr?.stcd, addr?.pncd,
    ].filter(Boolean)

    return NextResponse.json({
      gstin: data.gstin,
      legalName: data.lgnm,
      tradeName: data.tradeNam || null,
      status: data.sts,
      taxpayerType: data.dty,
      constitutionOfBusiness: data.ctb,
      dateOfRegistration: data.rgdt,
      cancellationDate: data.cxdt || null,
      state: addr?.stcd || null,
      address: addressParts.join(', ') || data.pradr?.adr || null,
      lastUpdated: data.lstupdt || null,
    })
  } catch (err: any) {
    if (err?.name === 'TimeoutError') {
      return NextResponse.json({ error: 'GST portal is not responding. Please try again.' }, { status: 504 })
    }
    return NextResponse.json({ error: 'Failed to reach GST portal.' }, { status: 502 })
  }
}

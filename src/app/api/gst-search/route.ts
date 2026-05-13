import { NextRequest, NextResponse } from 'next/server'

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

export async function GET(request: NextRequest) {
  const gstin = request.nextUrl.searchParams.get('gstin')
  const captcha = request.nextUrl.searchParams.get('captcha')

  if (!gstin || gstin.length !== 15) {
    return NextResponse.json({ error: 'Invalid GSTIN' }, { status: 400 })
  }
  if (!captcha) {
    return NextResponse.json({ error: 'Captcha answer is required' }, { status: 400 })
  }

  // Retrieve the GSTN session cookies set by /api/gst-captcha
  const storedCookies = request.cookies.get('gst_cookies')?.value
  const cookies: Record<string, string> = storedCookies ? JSON.parse(storedCookies) : {}
  const cookieStr = Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ')

  try {
    const res = await fetch(
      'https://services.gst.gov.in/services/api/search/taxpayerDetails',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
          'Origin': 'https://services.gst.gov.in',
          'Referer': 'https://services.gst.gov.in/services/searchtp',
          'User-Agent': UA,
          ...(cookieStr ? { 'Cookie': cookieStr } : {}),
        },
        body: JSON.stringify({ gstin, captcha }),
        signal: AbortSignal.timeout(12000),
      }
    )

    const data = await res.json().catch(() => null)

    if (!res.ok || !data) {
      const isCaptchaError =
        data?.errorCode === 'SWEB_9000' ||
        (data?.message ?? '').toLowerCase().includes('captcha')
      return NextResponse.json(
        { error: isCaptchaError ? 'Incorrect captcha. Please refresh and try again.' : 'GSTIN not found or portal error.' },
        { status: res.status }
      )
    }

    if (data.errorCode) {
      if (data.errorCode === 'SWEB_9000') {
        return NextResponse.json({ error: 'Incorrect captcha. Please refresh and try again.' }, { status: 422 })
      }
      if (data.errorCode === 'SWEB_9035') {
        return NextResponse.json({ error: 'GSTIN not found in GST database.' }, { status: 404 })
      }
      return NextResponse.json({ error: data.message || 'GST portal returned an error.' }, { status: 400 })
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

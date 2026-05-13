import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const gstin = request.nextUrl.searchParams.get('gstin')

  if (!gstin || gstin.length !== 15) {
    return NextResponse.json({ error: 'Invalid GSTIN' }, { status: 400 })
  }

  try {
    const res = await fetch(
      `https://commonapi.gst.gov.in/commonapi/v1.1/taxpayerSearch/${gstin}`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0',
        },
        // 8-second timeout
        signal: AbortSignal.timeout(8000),
      }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: 'GSTIN not found or GST portal unavailable' },
        { status: res.status }
      )
    }

    const data = await res.json()

    // The GSTN API returns { errorCode: "RETOTPCNT0001" } when GSTIN is invalid/not found
    if (data.errorCode || data.error) {
      return NextResponse.json({ error: 'GSTIN not found in GST database' }, { status: 404 })
    }

    const addr = data.pradr?.addr
    const addressParts = [
      addr?.bno, addr?.bnm, addr?.flno, addr?.st, addr?.loc, addr?.city, addr?.dst, addr?.stcd, addr?.pncd
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
      return NextResponse.json({ error: 'GST portal timed out. Please try again.' }, { status: 504 })
    }
    return NextResponse.json({ error: 'Failed to reach GST portal' }, { status: 502 })
  }
}

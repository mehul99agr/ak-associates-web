import { ImageResponse } from 'next/og'

export const alt = 'Agrawal Khandelwal & Associates LLP: Chartered Accountants'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #091f3d 0%, #0A2E5B 50%, #1a3a6b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Red top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '7px',
            background: '#D22B2B',
          }}
        />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
          <div
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              marginBottom: '22px',
            }}
          >
            Chartered Accountants
          </div>

          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '6px',
            }}
          >
            Agrawal Khandelwal
          </div>

          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ color: '#D22B2B' }}>&amp;</span>
            <span>Associates LLP</span>
          </div>

          {/* Service pills */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '36px',
            }}
          >
            {[
              'International Tax',
              'Transfer Pricing',
              'Startup Advisory',
              'UAE Corporate Tax',
              'Virtual CFO',
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 20px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  borderRadius: '50px',
                  color: '#fff',
                  fontSize: '18px',
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Cities */}
          <div
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '1px',
            }}
          >
            Bangalore · Mumbai · Nashik · UAE · Global
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '60px',
            fontSize: '17px',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          agrawalkhandelwal.com
        </div>
      </div>
    ),
    size,
  )
}

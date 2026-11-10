import type { ServicePackage } from '@/lib/servicePricing'
import { PACKAGE_NOTE } from '@/lib/servicePricing'

export default function ServicePackages({
  packages,
  ctaHref,
  ctaLabel = 'Book a Call to Start',
}: {
  packages: ServicePackage[]
  ctaHref: string
  ctaLabel?: string
}) {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        {packages.map((p) => (
          <div key={p.id} id={p.id} className="card" style={{ borderTop: '4px solid var(--accent)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{p.name}</h3>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>{p.price}</span>
              <span style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginLeft: '0.4rem' }}>{p.unit}</span>
            </div>
            <ul style={{ margin: '0 0 1.5rem', paddingLeft: '1.1rem', color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, flex: 1 }}>
              {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
            <a href={ctaHref} className="btn btn-primary" style={{ textAlign: 'center' }}>{ctaLabel}</a>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '1.25rem' }}>{PACKAGE_NOTE}</p>
    </>
  )
}

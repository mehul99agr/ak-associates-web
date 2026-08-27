import Link from 'next/link'

export default function RelatedGuides({ heading = 'Related Guides', links }: { heading?: string; links: { href: string; label: string }[] }) {
  return (
    <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
      <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>{heading}</h3>
      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
        {links.map((l, i) => (
          <li key={i} style={{ marginBottom: i === links.length - 1 ? 0 : '0.5rem' }}>
            <Link href={l.href} style={{ color: 'var(--primary)', fontWeight: 600 }}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

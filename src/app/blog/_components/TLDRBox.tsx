export default function TLDRBox({ items }: { items: React.ReactNode[] }) {
  return (
    <div style={{ padding: '1.5rem 1.75rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)', marginBottom: '2rem' }}>
      <p style={{ fontWeight: 800, color: 'var(--accent)', marginBottom: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>TL;DR</p>
      <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
        {items.map((item, i) => (
          <li key={i} style={{ marginBottom: i === items.length - 1 ? 0 : '0.4rem' }}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

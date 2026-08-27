import type { CSSProperties } from 'react'

export const tableStyle: CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', fontSize: '0.95rem' }
export const thStyle: CSSProperties = { background: 'var(--primary)', color: '#fff', padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }
export const tdStyle: CSSProperties = { padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)', color: 'var(--text-main)', verticalAlign: 'top' }
export const tdAltStyle: CSSProperties = { ...tdStyle, background: 'var(--bg-surface)' }

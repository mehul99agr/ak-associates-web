'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'

type Post = {
  title: string
  slug: string
  date: string
  category: string
  summary: string
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const categories = useMemo(
    () => Array.from(new Set(posts.map(p => p.category))).sort(),
    [posts]
  )
  const [active, setActive] = useState<string>('All')
  const visible = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter guides by topic"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2.5rem' }}
      >
        {['All', ...categories].map(cat => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '50px',
                border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                color: isActive ? '#fff' : 'var(--text-main)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Showing {visible.length} of {posts.length} guides
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
        {visible.map((post) => (
          <div key={post.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.category}</span>
                <span style={{ color: 'var(--text-light)', fontSize: '0.82rem' }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', lineHeight: 1.4 }}>{post.title}</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7 }}>{post.summary}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              Read Full Insight <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

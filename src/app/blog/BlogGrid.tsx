'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'

type Post = {
  title: string
  slug: string
  date: string
  category: string
  summary: string
}

// Filter + search state is mirrored to the URL (?topic=...&q=...) so a filtered view can be shared.
// Every card is rendered on first load (server HTML keeps all internal links crawlable);
// content-visibility keeps the long list cheap to paint.
export default function BlogGrid({ posts }: { posts: Post[] }) {
  const categories = useMemo(
    () => Array.from(new Set(posts.map(p => p.category))).sort(),
    [posts]
  )
  const [active, setActive] = useState<string>('All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const topic = params.get('topic')
    if (topic && categories.includes(topic)) setActive(topic)
    setQuery(params.get('q') || '')
  }, [categories])

  const syncUrl = (topic: string, q: string) => {
    const params = new URLSearchParams()
    if (topic !== 'All') params.set('topic', topic)
    if (q.trim()) params.set('q', q.trim())
    const qs = params.toString()
    window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname)
  }

  const needle = query.trim().toLowerCase()
  const visible = posts.filter(p =>
    (active === 'All' || p.category === active) &&
    (!needle || `${p.title} ${p.summary} ${p.category}`.toLowerCase().includes(needle))
  )

  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="blog-search" className="sr-only">Search guides</label>
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={e => { setQuery(e.target.value); syncUrl(active, e.target.value) }}
          placeholder="Search guides, e.g. TDS on NRI property, GST, Form 10B"
          style={{ width: '100%', maxWidth: '520px', padding: '0.85rem 1.1rem', borderRadius: '50px', fontSize: '0.95rem' }}
        />
      </div>

      <div
        role="group"
        aria-label="Filter guides by topic"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}
      >
        {['All', ...categories].map(cat => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => { setActive(cat); syncUrl(cat, query) }}
              style={{
                padding: '8px 18px',
                borderRadius: '50px',
                border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                color: isActive ? 'var(--white)' : 'var(--text-main)',
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

      <p role="status" style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
        Showing {visible.length} of {posts.length} guides
      </p>

      {visible.length === 0 && (
        <p style={{ color: 'var(--text-light)' }}>
          No guides match your search. Try a shorter keyword, or <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: 700 }}>ask us directly</Link>.
        </p>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
        {visible.map((post) => (
          <div key={post.slug} className="card blog-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
              Read guide<span className="sr-only">: {post.title}</span> <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

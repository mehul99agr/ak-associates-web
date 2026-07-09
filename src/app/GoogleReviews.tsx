type PlaceReview = {
  rating: number
  text?: { text: string }
  authorAttribution?: { displayName: string }
}

type PlaceDetails = {
  rating?: number
  userRatingCount?: number
  reviews?: PlaceReview[]
}

async function getPlaceReviews(): Promise<PlaceDetails | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) return null

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function GoogleReviews() {
  const data = await getPlaceReviews()
  if (!data?.reviews?.length) return null

  return (
    <section className="section bg-surface">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-badge">Google Reviews</span>
          <h2 className="section-title">What Clients Say on Google</h2>
          {data.rating && (
            <p style={{ color: 'var(--text-light)' }}>
              {data.rating}★ average from {data.userRatingCount} Google reviews
            </p>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
          {data.reviews.slice(0, 3).map((r, i) => (
            <div key={i} className="card">
              <p style={{ color: 'var(--accent)', marginBottom: '0.75rem', letterSpacing: '2px' }}>
                {'★'.repeat(r.rating)}
                {'☆'.repeat(5 - r.rating)}
              </p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                &ldquo;{r.text?.text}&rdquo;
              </p>
              <p style={{ fontWeight: 700, fontSize: '0.85rem' }}>{r.authorAttribution?.displayName ?? 'Google User'}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Reviews powered by Google
        </p>
      </div>
    </section>
  )
}

// Shared JSON-LD builders for blog/article pages. These produce the exact same
// object shape that was previously hand-copied into every page.tsx file, so
// output (and therefore rendered <script> tags) is unchanged.

import { BASE_URL, MEHUL_PERSON_ID, ORGANIZATION_ID, FIRM_NAME } from './constants'

export type FaqPair = [string, string]

export interface BreadcrumbItem {
  name: string
  item: string
}

export function buildBreadcrumbLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  }
}

/** Convenience wrapper for the common Home > Blog > Post breadcrumb used on every blog page. */
export function buildBlogBreadcrumbLd(postTitle: string, slug: string) {
  return buildBreadcrumbLd([
    { name: 'Home', item: BASE_URL },
    { name: 'Blog', item: `${BASE_URL}/blog` },
    { name: postTitle, item: `${BASE_URL}/blog/${slug}` },
  ])
}

export function buildArticleLd(opts: {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  slug: string
  authorId?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      '@id': opts.authorId ?? MEHUL_PERSON_ID,
      name: opts.authorName ?? 'CA Mehul Agrawal',
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: FIRM_NAME,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'Blog', '@id': `${BASE_URL}/blog#blog`, name: `${FIRM_NAME} Insights` },
    mainEntityOfPage: `${BASE_URL}/blog/${opts.slug}`,
  }
}

export type FaqQA = { q: string; a: string }

export function buildFaqLd(faqs: FaqPair[] | FaqQA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((entry) => {
      const [q, a] = Array.isArray(entry) ? entry : [entry.q, entry.a]
      return {
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      }
    }),
  }
}

export function buildServiceLd(opts: {
  name: string
  description: string
  url: string
  serviceType?: string[]
  areaServed?: { '@type': string; name: string } | { '@type': string; name: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: opts.areaServed ?? { '@type': 'Country', name: 'India' },
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
  }
}

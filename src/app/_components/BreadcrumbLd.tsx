const SITE = 'https://agrawalkhandelwal.com'

type Crumb = { name: string; path: string }

/** BreadcrumbList JSON-LD. Home is added automatically as the first item. */
export default function BreadcrumbLd({ items }: { items: Crumb[] }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '' }, ...items].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE + c.path,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
}

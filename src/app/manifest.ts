import type { MetadataRoute } from 'next'
import { FIRM_NAME } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: FIRM_NAME,
    short_name: 'Agrawal Khandelwal',
    description: 'Chartered Accountants in Nashik and Sillod, Maharashtra.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0A2E5B',
    icons: [{ src: '/logo.png', sizes: 'any', type: 'image/png' }],
  }
}

import { SITE_URL } from '../lib/site'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: '2026-10-08',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

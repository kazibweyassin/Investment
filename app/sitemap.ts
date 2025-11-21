import { MetadataRoute } from 'next'
import { COMPANY_NAME } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://axleafricapartners.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/gold-minerals',
    '/services/government-contracts',
    '/services/real-estate',
    '/services/contract-implementation',
    '/opportunities',
    '/opportunities/gold-minerals',
    '/opportunities/coffee-exports',
    '/opportunities/land-acquisitions',
    '/opportunities/government-contracts',
    '/opportunities/agriculture-processing',
    '/opportunities/infrastructure-technology',
    '/why-uganda',
    '/resources',
    '/resources/articles/verify-dgsm-gold-license',
    '/resources/articles/ppda-tender-checklist',
    '/resources/articles/gold-export-requirements',
    '/resources/articles/tender-disqualification-reasons',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
    '/sitemap',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/opportunities') ? 0.9 : 0.7,
  }))
}


import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_LOCATION } from "@/lib/constants"

export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://axleafricapartners.com"
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_NAME,
    "url": baseUrl,
    "email": COMPANY_EMAIL,
    "telephone": COMPANY_PHONE,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": COMPANY_LOCATION,
      "addressCountry": "UG"
    },
    "sameAs": [
      // Add social media links when available
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Investment Facilitation",
    "provider": {
      "@type": "Organization",
      "name": COMPANY_NAME
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gold & Mineral Export Facilitation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Government Contract Navigation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Acquisition"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contract Implementation & Delivery"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}


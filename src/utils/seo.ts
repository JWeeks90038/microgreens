import { Metadata } from 'next'

export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
  structured?: any
}

export const defaultSEO = {
  title: "Thriving Greens | Fresh Indoor Microgreens in California",
  description: "Thriving Greens grows fresh, nutrient-dense microgreens indoors in Murrieta, California. Locally grown, harvested fresh, and delivered with care.",
  keywords: [
    "microgreens",
    "fresh greens", 
    "indoor farming",
    "Murrieta California microgreens",
    "local produce",
    "healthy greens", 
    "fresh microgreens delivery",
    "California microgreens",
    "organic microgreens",
    "nutrient dense greens"
  ],
  siteUrl: "https://thrivinggreens.com",
  ogImage: "/og-image.jpg"
}

export const businessInfo = {
  name: "Thriving Greens",
  email: "thrivinggreens.co@gmail.com",
  location: "Murrieta, California, USA",
  instagram: "https://www.instagram.com/thrivinggreens.co/?hl=en",
  facebook: "https://www.facebook.com/profile.php?id=61570673604333",
  phone: "(555) 123-4567"
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const title = config.title ? `${config.title} | ${businessInfo.name}` : defaultSEO.title
  const description = config.description || defaultSEO.description
  const keywords = config.keywords || defaultSEO.keywords
  const url = config.canonical ? `${defaultSEO.siteUrl}${config.canonical}` : defaultSEO.siteUrl
  const ogImage = config.ogImage || defaultSEO.ogImage

  return {
    title,
    description,
    keywords: keywords.join(', '),
    
    // Favicon and icons
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ]
    },
    
    // Open Graph
    openGraph: {
      title,
      description,
      url,
      siteName: businessInfo.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },

    // Additional meta tags
    robots: config.noIndex ? 'noindex,nofollow' : 'index,follow',
    
    // Alternates for canonical URL
    alternates: {
      canonical: url
    },
    
    // Verification tags (add your verification codes here when needed)
    verification: {
      // google: 'your-google-verification-code',
      // bing: 'your-bing-verification-code',
    },

    // App info
    applicationName: businessInfo.name,
    generator: 'Next.js',
    
    // Geo tags for local SEO
    other: {
      'geo.region': 'US-CA',
      'geo.placename': 'Murrieta',
      'geo.position': '33.5539;-117.2139', // Murrieta coordinates
    }
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${defaultSEO.siteUrl}/#organization`,
    "name": businessInfo.name,
    "description": "Indoor microgreens farm specializing in fresh, locally grown microgreens in Murrieta, California.",
    "url": defaultSEO.siteUrl,
    "logo": `${defaultSEO.siteUrl}/tglogo-new.png`,
    "image": `${defaultSEO.siteUrl}/og-image.jpg`,
    "email": businessInfo.email,
    "telephone": businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Murrieta", 
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5539",
      "longitude": "-117.2139"
    },
    "sameAs": [
      businessInfo.instagram
    ],
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-14:00"
    ],
    "priceRange": "$$",
    "servesCuisine": "Fresh Produce",
    "paymentAccepted": "Credit Card, Debit Card",
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.5539",
        "longitude": "-117.2139"
      },
      "geoRadius": "50000"
    }
  }
}

export function generateProductSchema(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `${defaultSEO.siteUrl}${product.image}`,
    "sku": product.id.toString(),
    "brand": {
      "@type": "Brand",
      "name": businessInfo.name
    },
    "offers": {
      "@type": "Offer", 
      "price": product.price.toString(),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": businessInfo.name
      }
    },
    "category": "Fresh Produce",
    "freshness": "Fresh"
  }
}
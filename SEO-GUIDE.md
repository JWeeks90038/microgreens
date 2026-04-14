# Thriving Greens - SEO Implementation Guide

## 🔍 SEO Features Implemented

### Core SEO Files
- **robots.txt** - Search engine crawling instructions
- **sitemap.xml** - Static XML sitemap for immediate use
- **sitemap.ts** - Dynamic Next.js sitemap generator
- **SEO utilities** (`/src/utils/seo.ts`) - Reusable SEO functions
- **SEO component** (`/src/components/SEOHead.tsx`) - Structured data injection

### Local Business SEO
- Complete LocalBusiness structured data (JSON-LD)
- Geo-targeting for Murrieta, California
- Service area optimization (50km radius)
- Business hours and contact information

### Page-Level SEO
All pages include:
- Unique title tags with brand consistency
- Optimized meta descriptions
- Proper H1 hierarchy
- Semantic HTML structure
- Local keywords integration

### Technical SEO
- Mobile-first responsive design
- Image optimization with Next.js Image component
- Clean URL structure
- Fast loading with Next.js optimization
- Structured data for products and business

## 📊 SEO Monitoring & Maintenance

### Google Search Console Setup
1. Verify ownership: `https://thrivinggreens.com`
2. Submit sitemap: `https://thrivinggreens.com/sitemap.xml`
3. Monitor performance and indexing issues

### Regular SEO Tasks
- Update sitemap when adding new products
- Monitor local search rankings for "microgreens Murrieta"
- Update business information if location/hours change
- Add new product structured data as inventory grows

### Key Performance Indicators (KPIs)
- Local pack ranking for "microgreens near me"
- Organic traffic from microgreens-related keywords
- Click-through rates from Google Business Profile
- Conversion rate from organic search traffic

## 🎯 Target Keywords

### Primary Keywords
- "microgreens Murrieta California"
- "fresh microgreens delivery"
- "indoor grown microgreens"
- "local microgreens farm"

### Secondary Keywords
- "pea shoot microgreens"
- "sunflower microgreens"
- "broccoli microgreens"
- "healthy microgreens California"

## 🔧 SEO Utilities Usage

### Adding SEO to New Pages
```typescript
import { generateMetadata } from '@/utils/seo'

export const metadata = generateMetadata({
  title: "Your Page Title",
  description: "Your page description",
  keywords: ["keyword1", "keyword2"],
  canonical: "/your-page-path"
})
```

### Adding Product Structured Data
```typescript
import { generateProductSchema } from '@/utils/seo'
import SEOHead from '@/components/SEOHead'

const productSchema = generateProductSchema(product)
return <SEOHead structuredData={[productSchema]} />
```

## 📱 Google Business Profile Optimization

### Recommended Profile Setup
- Business name: "Thriving Greens"
- Category: "Indoor Farm" or "Produce Market"
- Address: Murrieta, CA (specific address when available)
- Phone: (760) 271-1244
- Website: https://thrivinggreens.com
- Hours: Mo-Fr 08:00-17:00, Sa 08:00-14:00

### Regular Profile Maintenance
- Post weekly updates about fresh harvests
- Share high-quality photos of microgreens
- Respond to customer reviews promptly
- Update special offers and seasonal availability

## 🚀 Performance Optimization

### Image SEO
- All product images include descriptive alt text
- Images are optimized using Next.js Image component
- OG image placeholder at `/public/og-image.jpg` (replace with actual image)

### Loading Speed
- Lazy loading for non-critical images
- Optimized fonts (Inter, Poppins)
- Efficient CSS with Tailwind
- Minimal JavaScript bundles

## 🔮 Future SEO Opportunities

### Content Marketing
- Blog section about microgreens nutrition
- Growing guides and recipes
- Customer success stories
- Seasonal growing information

### Advanced Features
- Schema markup for recipes using microgreens
- Video structured data for growing process
- FAQ schema for common questions
- Review/rating schema for customer testimonials

### Local SEO Expansion
- Partnerships with local restaurants
- Farmers market presence optimization
- Community event participation
- Local food blogger relationships

## 📝 SEO Checklist for New Content

- [ ] Unique, descriptive title (50-60 characters)
- [ ] Compelling meta description (150-160 characters)
- [ ] Proper H1 tag with target keyword
- [ ] Internal links to related pages
- [ ] Optimized images with alt text
- [ ] Local keywords when relevant
- [ ] Structured data when applicable
- [ ] Mobile-friendly design
- [ ] Fast loading time
- [ ] Clear call-to-action

## 🛠️ Technical Contact Information

For SEO maintenance and updates, the following files may need modification:
- `/src/utils/seo.ts` - Global SEO configuration
- `/public/robots.txt` - Search engine instructions
- `/src/app/sitemap.ts` - Dynamic sitemap generation
- Page-level metadata exports in each `page.tsx`

Remember to update the sitemap and resubmit to Google Search Console when adding new products or pages.
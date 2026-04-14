'use client'

interface SEOHeadProps {
  structuredData?: any[]
  children?: React.ReactNode
}

export default function SEOHead({ structuredData = [], children }: SEOHeadProps) {
  return (
    <>
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 2)
          }}
        />
      ))}
      
      {/* Additional head elements */}
      {children}
    </>
  )
}
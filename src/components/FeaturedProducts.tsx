'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { Product } from '@/contexts/CartContext'

// Enhanced function to make microgreens really stand out
const highlightMicrogreens = (text: string) => {
  const parts = text.split(/(microgreens)/gi);
  return parts.map((part, index) => 
    part.toLowerCase() === 'microgreens' ? (
      <span 
        key={index} 
        className="font-extrabold px-1 py-0.5 rounded-md transform hover:scale-105 transition-all duration-300" 
        style={{ 
          color: 'rgb(var(--color-primary-500))', 
          backgroundColor: 'rgba(var(--color-primary-100), 0.3)',
          textShadow: '0 0 15px rgba(74, 150, 82, 0.4)',
          border: '1px solid rgba(var(--color-primary-300), 0.3)'
        }}
      >{part}</span>
    ) : part
  );
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load products from JSON file
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const data = await response.json()
          // Filter for featured products only
          const featuredProducts = data.filter((product: Product) => product.featured)
          setProducts(featuredProducts)
        }
      } catch (error) {
        console.error('Failed to load products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-4">
              Featured <span className="font-extrabold" style={{ color: 'rgb(var(--color-primary-500))', textShadow: '0 0 15px rgba(var(--color-primary-300), 0.2)' }}>Microgreens</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-2xl"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="flex justify-between">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-4">
            Featured <span className="font-extrabold" style={{ color: 'rgb(var(--color-primary-500))', textShadow: '0 0 15px rgba(var(--color-primary-300), 0.2)' }}>Microgreens</span>
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto mb-8">
            Discover our most popular varieties, loved by chefs and health enthusiasts alike. 
            Each microgreen is harvested at peak freshness for maximum flavor and nutrition.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Featured Products Fallback */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-sage-600 text-lg">No featured products available at the moment.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-soft-md border border-sage-100/30">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-800 mb-4">
              Explore Our Full Collection
            </h3>
            <p className="text-sage-600 mb-6 max-w-2xl mx-auto">
              From delicate pea shoots to robust sunflower <span className="font-semibold" style={{ color: 'rgb(var(--color-primary-600))' }}>microgreens</span>, discover the perfect 
              varieties for your culinary creations and health goals.
            </p>
            <Link 
              href="/shop"
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-200"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

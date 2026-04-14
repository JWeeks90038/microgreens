'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/contexts/CartContext'
import SEOHead from '@/components/SEOHead'
import { generateProductSchema } from '@/utils/seo'

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
          textShadow: '0 0 20px rgba(74, 150, 82, 0.4), 0 0 40px rgba(74, 150, 82, 0.2)',
          border: '1px solid rgba(var(--color-primary-300), 0.3)'
        }}
      >{part}</span>
    ) : part
  );
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('name')

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'shoots', label: 'Shoots' },
    { value: 'brassicas', label: 'Brassicas' },
    { value: 'leafy', label: 'Leafy Greens' },
    { value: 'asian', label: 'Asian Varieties' },
  ]

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'featured', label: 'Featured First' },
  ]

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const data = await response.json()
          setProducts(data)
          setFilteredProducts(data)
        }
      } catch (error) {
        console.error('Failed to load products:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategory, sortBy])

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded mb-4 w-64 mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          
          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
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
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-4">
            Premium <span className="font-extrabold" style={{ color: 'rgb(var(--color-primary-500))', textShadow: '0 0 20px rgba(var(--color-primary-300), 0.3)' }}>Microgreens</span>
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Discover our complete collection of fresh, nutrient-dense <span className="font-semibold" style={{ color: 'rgb(var(--color-primary-600))' }}>microgreens</span>. 
            Each variety is carefully grown to deliver maximum flavor and nutritional value.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-sage-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sage-700 font-medium text-sm">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-sage-200 rounded-lg px-3 py-2 text-sage-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-soft"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-8">
          <p className="text-sage-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'all' && (
              <span className="font-medium"> in {categories.find(c => c.value === selectedCategory)?.label}</span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 mx-auto text-sage-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33M15 17H9.34l-.762 1.523A1 1 0 017.725 19H4.001v-3.133c0-.361.195-.694.513-.874L12 12.01l7.486 2.983c.318.18.513.513.513.874V19h-3.724a1 1 0 01-.853-.477L15 17z" />
              </svg>
              <h3 className="font-semibold text-xl text-sage-700 mb-2">No products found</h3>
              <p className="text-sage-600">
                No products match your current filter criteria. Try selecting a different category or adjusting your search.
              </p>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-soft-md border border-sage-100/30">
          <div className="text-center">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-800 mb-4">
              Stay Fresh with Weekly Updates
            </h3>
            <p className="text-sage-600 mb-6 max-w-2xl mx-auto">
              Get notified about new harvest drops, seasonal varieties, and exclusive offers. 
              Join our community of microgreen enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border border-sage-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white shadow-inner-soft"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
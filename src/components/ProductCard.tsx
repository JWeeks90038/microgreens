'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/contexts/CartContext'
import { useCart } from '@/contexts/CartContext'

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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <Link href={`/shop/${product.id}`}>
      <div 
        className="rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden group cursor-pointer border"
        style={{ 
          backgroundColor: 'white',
          borderColor: 'rgba(var(--color-sage-100), 0.5)'
        }}
      >
        {/* Product Image */}
        <div 
          className="relative h-48 overflow-hidden"
          style={{ backgroundColor: 'rgb(var(--color-cream-100))' }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.featured && (
            <span 
              className="absolute top-3 left-3 text-white text-xs px-2 py-1 rounded-full font-medium"
              style={{ backgroundColor: 'rgb(var(--color-primary-500))' }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 
              className="font-semibold text-lg group-hover:opacity-80 transition-all duration-200"
              style={{ color: 'rgb(var(--color-primary-800))' }}
            >
              {product.name}
            </h3>
            <span 
              className="font-bold text-lg"
              style={{ color: 'rgb(var(--color-primary-600))' }}
            >
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          <p 
            className="text-sm mb-4 line-clamp-2"
            style={{ color: 'rgb(var(--color-sage-600))' }}
          >
            {highlightMicrogreens(product.shortDescription)}
          </p>

          <div className="flex justify-between items-center">
            <span 
              className="inline-block text-xs px-2 py-1 rounded-full font-medium capitalize"
              style={{ 
                backgroundColor: 'rgb(var(--color-sage-100))',
                color: 'rgb(var(--color-sage-700))'
              }}
            >
              {product.category}
            </span>
            
            <button
              onClick={handleAddToCart}
              className="text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              style={{ backgroundColor: 'rgb(var(--color-primary-500))' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-600))'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-500))'}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

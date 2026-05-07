'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Product, useCart } from '@/contexts/CartContext'
import ProductCard from '@/components/ProductCard'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedWeightOz, setSelectedWeightOz] = useState<number | null>(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const products: Product[] = await response.json()
          const productId = parseInt(params.id as string)
          const foundProduct = products.find(p => p.id === productId)
          
          if (foundProduct) {
            setProduct(foundProduct)
            setSelectedWeightOz(foundProduct.weightOptions[0]?.weightOz ?? 1)
            
            // Find related products (same category, excluding current product)
            const related = products
              .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
              .slice(0, 3)
            setRelatedProducts(related)
          } else {
            // Product not found, redirect to shop
            router.push('/shop')
          }
        }
      } catch (error) {
        console.error('Failed to load product:', error)
        router.push('/shop')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      loadProduct()
    }
  }, [params.id, router])

  const handleAddToCart = () => {
    if (product) {
      const weightToAdd = selectedWeightOz ?? product.weightOptions[0]?.weightOz ?? 1
      for (let i = 0; i < quantity; i++) {
        addItem(product, weightToAdd)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image skeleton */}
            <div className="h-96 lg:h-[500px] bg-gray-200 rounded-2xl animate-pulse"></div>
            
            {/* Content skeleton */}
            <div>
              <div className="h-8 bg-gray-200 rounded mb-4 w-3/4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded mb-6 w-1/2 animate-pulse"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              </div>
              <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return null
  }

  const selectedWeightOption = product.weightOptions.find(
    (option) => option.weightOz === selectedWeightOz
  ) ?? product.weightOptions[0]

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sage-600">
            <Link href="/" className="hover:text-primary-600 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary-600 transition-colors duration-200">
              Shop
            </Link>
            <span>/</span>
            <span className="text-primary-700 font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] bg-white rounded-2xl shadow-soft overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-primary-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-primary-600">
                ${selectedWeightOption.price.toFixed(2)}
              </p>
              <p className="text-sm text-sage-600 mt-1">
                From ${product.price.toFixed(2)} • selected size: {selectedWeightOption.weightOz} oz
              </p>
              <span className="inline-block mt-2 bg-sage-100 text-sage-700 text-sm px-3 py-1 rounded-full font-medium capitalize">
                {product.category}
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary-800 mb-2">Description</h3>
              <p className="text-sage-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary-800 mb-2">Flavor Profile</h3>
              <p className="text-sage-700">{product.flavorProfile}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary-800 mb-2">Nutritional Benefits</h3>
              <p className="text-sage-700">{product.nutritionalBenefits}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary-800 mb-2">Best Uses</h3>
              <div className="flex flex-wrap gap-2">
                {product.bestUses.map((use) => (
                  <span 
                    key={use}
                    className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <div className="mb-5">
                <label className="block font-semibold text-primary-800 mb-3">
                  Weight
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {product.weightOptions.map((option) => {
                    const isSelected = option.weightOz === selectedWeightOption.weightOz

                    return (
                      <button
                        key={option.weightOz}
                        type="button"
                        onClick={() => setSelectedWeightOz(option.weightOz)}
                        className="rounded-2xl border px-4 py-3 text-left transition-colors duration-200"
                        style={{
                          borderColor: isSelected
                            ? 'rgb(var(--color-primary-500))'
                            : 'rgba(var(--color-sage-200), 1)',
                          backgroundColor: isSelected
                            ? 'rgba(var(--color-primary-100), 0.35)'
                            : 'white',
                          color: 'rgb(var(--color-primary-800))'
                        }}
                      >
                        <span className="block font-semibold">{option.weightOz} oz</span>
                        <span className="block text-sm text-sage-600">${option.price.toFixed(2)}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor="quantity" className="font-semibold text-primary-800">
                  Quantity:
                </label>
                <div className="flex items-center border border-sage-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sage-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-medium text-primary-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sage-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-full text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h6m0 0l2.5-5" />
                </svg>
                <span>Add {quantity > 1 ? `${quantity} ` : ''}{selectedWeightOption.weightOz} oz to Cart</span>
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-sage-600">
                  <span className="font-medium text-primary-700">Fresh guarantee:</span> Harvested within 24 hours of delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-800 mb-4">
                You May Also Like
              </h2>
              <p className="text-lg text-sage-600">
                More delicious microgreens from the same category
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <div 
                  key={relatedProduct.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
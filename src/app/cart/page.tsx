'use client'

import Link from 'next/link'
import Image from 'next/image'
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

export default function CartPage() {
  const { state, removeItem, updateQuantity, clearCart } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="max-w-md mx-auto">
              {/* Empty Cart Icon */}
              <div className="w-32 h-32 mx-auto mb-8 bg-sage-100 rounded-full flex items-center justify-center">
                <svg className="w-16 h-16 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h6m0 0l2.5-5" />
                </svg>
              </div>
              
              <h1 className="font-display font-bold text-4xl text-primary-800 mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-sage-600 mb-8">
                Looks like you haven't added any fresh {highlightMicrogreens('microgreens')} to your cart yet. 
                Let's change that!
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="/shop"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-200"
                >
                  Browse Microgreens
                </Link>
                <div>
                  <Link 
                    href="/"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-2">
            Your Cart
          </h1>
          <p className="text-lg text-sage-600">
            {state.items.length} {state.items.length === 1 ? 'item' : 'items'} ready for checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.product.id}-${item.selectedWeightOz}`} className="bg-white rounded-2xl shadow-soft p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="relative w-full sm:w-24 h-24 bg-cream-100 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      href={`/shop/${item.product.id}`}
                      className="font-semibold text-lg text-primary-800 hover:text-primary-600 transition-colors duration-200 block"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sage-600 text-sm mt-1 line-clamp-2">
                      {item.product.shortDescription}
                    </p>
                    <p className="font-semibold text-primary-600 mt-2">
                      {item.selectedWeightOz} oz • ${item.unitPrice.toFixed(2)} each
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-sage-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedWeightOz, item.quantity - 1)}
                        className="px-3 py-2 text-sage-600 hover:text-primary-600 transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-3 py-2 font-medium text-primary-800 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedWeightOz, item.quantity + 1)}
                        className="px-3 py-2 text-sage-600 hover:text-primary-600 transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id, item.selectedWeightOz)}
                      className="text-red-500 hover:text-red-600 transition-colors duration-200 p-2"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-sage-100">
                  <span className="text-sage-600">Subtotal:</span>
                  <span className="font-semibold text-lg text-primary-800">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Clear Cart</span>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-20">
              <h2 className="font-bold text-xl text-primary-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sage-700">
                  <span>Subtotal:</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sage-700">
                  <span>Delivery:</span>
                  <span>FREE</span>
                </div>
                <div className="border-t border-sage-200 pt-3 flex justify-between font-bold text-lg text-primary-800">
                  <span>Total:</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-full text-lg transition-colors duration-200 mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center">
                <Link 
                  href="/shop"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  ← Continue Shopping
                </Link>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="font-medium text-primary-800 text-sm">Fresh Delivery</p>
                    <p className="text-primary-700 text-xs mt-1">
                      Your {highlightMicrogreens('microgreens')} will be harvested within 24 hours of delivery 
                      to ensure maximum freshness and nutritional value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'Our Process' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 shadow-lg"
         style={{ 
           backgroundColor: 'rgba(255, 255, 255, 0.9)', 
           backdropFilter: 'blur(12px)',
           borderBottomColor: 'rgb(var(--color-sage-200) / 0.5)' 
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/tglogo-new.png"
              alt="Thriving Greens Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <span className="font-light opacity-60"
                  style={{ 
                    color: 'rgb(var(--color-primary-700))',
                    fontSize: '9px',
                    lineHeight: '1'
                  }}>
              Eat small. Live strong. Thrive daily
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-200"
                style={{ color: 'rgb(var(--color-primary-700))' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-500))'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-700))'}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center space-x-1 px-3 py-2 rounded-full transition-colors duration-200"
              style={{ 
                backgroundColor: 'rgb(var(--color-primary-100))',
                color: 'rgb(var(--color-primary-700))'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-200))'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-100))'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(var(--color-primary-700))' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h6m0 0l2.5-5" />
              </svg>
              <span className="font-medium" style={{ color: 'rgb(var(--color-primary-700))' }}>Cart</span>
              {cartItemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(var(--color-primary-500))' }}
                >
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Cart Icon */}
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(var(--color-primary-700))' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h6m0 0l2.5-5" />
              </svg>
              {cartItemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(var(--color-primary-500))' }}
                >
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none transition-colors duration-200"
              style={{ color: 'rgb(var(--color-primary-700))' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-500))'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-700))'}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden py-4 animate-fade-in"
            style={{ borderTop: '1px solid rgb(var(--color-primary-100))' }}
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium px-2 py-1 transition-colors duration-200"
                  style={{ color: 'rgb(var(--color-primary-700))' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-500))'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-700))'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

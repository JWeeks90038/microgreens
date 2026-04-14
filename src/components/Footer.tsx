'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'rgb(var(--color-primary-800))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/tglogo-new.png"
                alt="Thriving Greens Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-display font-bold text-xl">Thriving Greens</span>
            </div>
            <p 
              className="mb-6 max-w-md"
              style={{ color: 'rgb(var(--color-primary-200))' }}
            >
              Fresh <span className="font-extrabold px-1 py-0.5 rounded-md" style={{ color: 'rgb(var(--color-primary-400))', backgroundColor: 'rgba(var(--color-primary-200), 0.3)', textShadow: '0 0 15px rgba(74, 150, 82, 0.3)' }}>microgreens</span> grown locally, delivered daily. We're passionate about providing 
              the highest quality, nutrient-dense <span className="font-extrabold px-1 py-0.5 rounded-md" style={{ color: 'rgb(var(--color-primary-400))', backgroundColor: 'rgba(var(--color-primary-200), 0.3)', textShadow: '0 0 15px rgba(74, 150, 82, 0.3)' }}>microgreens</span> for chefs and health-conscious individuals.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}

              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.740-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thrivinggreens.co/?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors duration-200"
                 aria-label="Follow us on Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570673604333" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-white transition-colors duration-200"
                 aria-label="Follow us on Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="transition-colors duration-200"
                  style={{ color: 'rgb(var(--color-primary-200))' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-200))'}
                >Home</Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className="transition-colors duration-200"
                  style={{ color: 'rgb(var(--color-primary-200))' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-200))'}
                >Shop</Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="transition-colors duration-200"
                  style={{ color: 'rgb(var(--color-primary-200))' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-200))'}
                >Our Process</Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="transition-colors duration-200"
                  style={{ color: 'rgb(var(--color-primary-200))' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-200))'}
                >Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2" style={{ color: 'rgb(var(--color-primary-200))' }}>
              <p>Email: thrivinggreens.co@gmail.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Local Delivery Available in Southern California</p>
              <div className="mt-4">
                <p className="text-sm">Fresh harvest notifications:</p>
                <div className="mt-2 flex">
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="px-3 py-2 border rounded-l-md text-white focus:outline-none flex-1"
                    style={{ 
                      backgroundColor: 'rgb(var(--color-primary-700))',
                      borderColor: 'rgb(var(--color-primary-600))'
                    }}
                  />
                  <button 
                    className="px-4 py-2 rounded-r-md transition-colors duration-200"
                    style={{ backgroundColor: 'rgb(var(--color-primary-500))' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-400))'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-500))'}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-8 pt-8 border-t text-center"
          style={{ borderColor: 'rgb(var(--color-primary-700))' }}
        >
          <p 
            className="text-sm mb-4"
            style={{ color: 'rgb(var(--color-primary-300))' }}
          >
            © 2024 Thriving Greens. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/privacy-policy" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgb(var(--color-primary-300))' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-300))'}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgb(var(--color-primary-300))' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-300))'}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'

// Enhanced function to make microgreens really stand out
const highlightMicrogreens = (text: string) => {
  const parts = text.split(/(microgreens)/gi);
  return parts.map((part, index) => 
    part.toLowerCase() === 'microgreens' ? (
      <span 
        key={index} 
        className="font-extrabold px-1 py-0.5 rounded-md" 
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "thrivinggreens.co@gmail.com",
      link: "mailto:thrivinggreens.co@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Farm Location",
      content: "Murrieta, California",
      link: "#"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Farm Tours",
      content: "Saturdays 10 AM - 2 PM (By appointment)",
      link: "#"
    }
  ]

  const faqs = [
    {
      question: "How fresh are your microgreens?",
      answer: <>Our {highlightMicrogreens('microgreens')} are harvested within 24 hours of delivery to ensure maximum freshness and nutritional value.</>
    },
    {
      question: "Do you deliver outside the local area?",
      answer: "Currently, we provide local delivery within a 75-mile radius. Contact us to see if we serve your area."
    },
    {
      question: "Are your microgreens organic?",
      answer: <>Yes! All our {highlightMicrogreens('microgreens')} are naturally grown using certified organic seeds and sustainable growing practices.</>
    },
    {
      question: "Do you offer bulk pricing for restaurants?",
      answer: "Yes, we offer special pricing for restaurants and commercial customers. Contact us to discuss your needs."
    }
  ]

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-cream-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-800 leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Have questions about our {highlightMicrogreens('microgreens')}? Want to schedule a farm visit? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          {/* <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12">
            <h2 className="font-display font-bold text-3xl text-primary-800 mb-6">
              Send us a Message
            </h2>
            
            {isSubmitted && (
              <div className="mb-6 bg-primary-50 border border-primary-200 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-primary-800 font-medium">Message sent successfully!</p>
                </div>
                <p className="text-primary-700 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-800 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-sage-400 text-white font-semibold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div> */}

          {/* Contact Information & Image */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="bg-white rounded-2xl shadow-soft p-6 text-center group hover:shadow-soft-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 group-hover:bg-primary-200 rounded-xl mb-4 text-primary-600 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-primary-800 mb-2">
                    {info.title}
                  </h3>
                  {info.link !== "#" ? (
                    <a 
                      href={info.link}
                      className="text-sage-600 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sage-600">{info.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Farm Image */}
            <div className="relative h-64 bg-white rounded-2xl shadow-soft overflow-hidden">
              <Image
                src="/images/farm-contact.jpg"
                alt="Thriving Greens farm"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Hours & Delivery Info */}
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h3 className="font-semibold text-lg text-primary-800 mb-4 text-center">
                Business Hours & Delivery
              </h3>
              <div className="space-y-3 text-sage-700">
                <div className="flex justify-between">
                  <span>Farm Tours:</span>
                  <span className="font-medium">Saturdays 10 AM - 2 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Processing:</span>
                  <span className="font-medium">Monday - Friday</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Days:</span>
                  <span className="font-medium">Tuesday, Thursday, Saturday</span>
                </div>
                <div className="pt-3 border-t border-sage-100">
                  <p className="text-sm text-primary-700 font-medium text-center">
                    💡 Pro tip: Order by 6 PM for next-day delivery availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-primary-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-sage-600">
              Quick answers to common questions about our {highlightMicrogreens('microgreens')} and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-semibold text-lg text-primary-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sage-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-20">
          <div className="bg-primary-800 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Stay Connected
            </h2>
            <p className="text-primary-200 text-lg mb-6 max-w-2xl mx-auto">
              Get the latest updates on new varieties, seasonal offerings, and growing tips 
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full text-primary-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-800 hover:bg-cream-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
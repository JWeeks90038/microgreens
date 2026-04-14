import { Metadata } from 'next'

// SEO metadata for terms of service page
export const metadata: Metadata = {
  title: "Terms of Service | Thriving Greens",
  description: "Read Thriving Greens' terms of service for microgreens delivery, including our freshness guarantee, delivery policies, and customer guidelines.",
  keywords: "terms of service, microgreens delivery terms, freshness guarantee, delivery policy",
  robots: "index,follow",
}

export default function TermsOfService() {
  return (
    <section className="py-20"
             style={{ background: 'linear-gradient(135deg, rgb(var(--color-cream-100)), rgb(var(--color-sage-50)))' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-center mb-12"
            style={{ color: 'rgb(var(--color-primary-800))' }}>
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none" style={{ color: 'rgb(var(--color-sage-800))' }}>
          <p className="text-lg mb-8">
            <strong>Effective Date:</strong> March 1, 2026
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Acceptance of Terms
          </h2>
          <p className="mb-8">
            By accessing and using Thriving Greens' website and services, you accept and agree to be 
            bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Products and Services
          </h2>
          <p className="mb-6">
            Thriving Greens provides fresh, locally grown microgreens for delivery in Southern California. 
            Our services include:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• Fresh microgreens harvested within 24 hours of delivery</li>
            <li>• Local delivery services in authorized areas</li>
            <li>• Harvest notifications and pre-orders</li>
            <li>• Customer support and growing information</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Orders and Payment
          </h2>
          <p className="mb-6">
            By placing an order, you agree to:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• Provide accurate and complete information</li>
            <li>• Pay all charges associated with your order</li>
            <li>• Be available to receive deliveries at the specified address</li>
            <li>• Accept that product availability may vary based on seasonal growing conditions</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Delivery and Freshness Guarantee
          </h2>
          <p className="mb-6">
            We guarantee:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• Delivery within our specified service areas</li>
            <li>• Freshness of products when delivered correctly</li>
            <li>• Replacement or refund for products not meeting our quality standards</li>
            <li>• Communication of any delays or availability issues</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Cancellation and Refunds
          </h2>
          <p className="mb-8">
            Orders may be cancelled up to 24 hours before scheduled harvest. Refunds will be processed 
            within 5-7 business days. We reserve the right to cancel orders due to weather conditions 
            or other circumstances beyond our control.
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Limitation of Liability
          </h2>
          <p className="mb-8">
            Thriving Greens' liability is limited to the purchase price of products. We are not 
            responsible for indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Food Safety
          </h2>
          <p className="mb-8">
            Our microgreens are grown using safe, natural methods. However, consumers are responsible 
            for proper handling and storage after delivery. We recommend washing all produce before consumption.
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Changes to Terms
          </h2>
          <p className="mb-8">
            We reserve the right to modify these terms at any time. Changes will be effective 
            immediately upon posting on our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Contact Information
          </h2>
          <p className="mb-4">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary-200">
            <p><strong>Email:</strong> thrivinggreens.co@gmail.com</p>
            <p><strong>Phone:</strong> (760) 271-1244</p>
            <p><strong>Service Area:</strong> Southern California</p>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Metadata } from 'next'

// SEO metadata for privacy policy page
export const metadata: Metadata = {
  title: "Privacy Policy | Thriving Greens",
  description: "Read Thriving Greens' privacy policy to understand how we collect, use, and protect your personal information when you order microgreens.",
  keywords: "privacy policy, data protection, personal information, microgreens delivery privacy",
  robots: "index,follow",
}

export default function PrivacyPolicy() {
  return (
    <section className="py-20"
             style={{ background: 'linear-gradient(135deg, rgb(var(--color-cream-100)), rgb(var(--color-sage-50)))' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-center mb-12"
            style={{ color: 'rgb(var(--color-primary-800))' }}>
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none" style={{ color: 'rgb(var(--color-sage-800))' }}>
          <p className="text-lg mb-8">
            <strong>Effective Date:</strong> March 1, 2026
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Information We Collect
          </h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you create an account, 
            make a purchase, subscribe to our newsletter, or contact us for support. This may include:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• Name, email address, and phone number</li>
            <li>• Shipping and billing addresses</li>
            <li>• Payment information (processed securely through third-party providers)</li>
            <li>• Order history and preferences</li>
            <li>• Communications with our customer service team</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            How We Use Your Information
          </h2>
          <p className="mb-6">
            We use the information we collect to:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• Process and fulfill your orders</li>
            <li>• Send you harvest notifications and delivery updates</li>
            <li>• Provide customer support</li>
            <li>• Improve our products and services</li>
            <li>• Send marketing communications (with your consent)</li>
            <li>• Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Information Sharing
          </h2>
          <p className="mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share 
            your information only in the following circumstances:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• With service providers who help us operate our business</li>
            <li>• When required by law or to protect our rights</li>
            <li>• In connection with a business transfer or merger</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Data Security
          </h2>
          <p className="mb-8">
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Your Rights
          </h2>
          <p className="mb-6">
            You have the right to:
          </p>
          <ul className="mb-8 space-y-2 pl-6">
            <li>• Access and update your personal information</li>
            <li>• Unsubscribe from marketing communications</li>
            <li>• Request deletion of your personal information</li>
            <li>• Contact us with questions about this privacy policy</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--color-primary-700))' }}>
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary-200">
            <p><strong>Email:</strong> thrivinggreens.co@gmail.com</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  )
}
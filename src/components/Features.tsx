'use client'

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

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Freshly Harvested",
      description: "Microgreens harvested at peak freshness for exceptional flavor and nutritional value in every order."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(var(--color-primary-600))' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Nutrient Dense",
      description: "Packed with up to 40 times more vitamins and minerals than mature vegetables. Maximum nutrition in every bite."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(var(--color-primary-600))' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Locally Grown",
      description: "Cultivated in our local urban farm with sustainable, naturally minded growing practices for fresher, better-tasting microgreens."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgb(var(--color-primary-600))' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Chef Quality",
      description: "Restaurant-grade microgreens trusted by professional chefs. Perfect for fine dining and gourmet home cooking."
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: 'rgb(var(--color-primary-800))' }}
          >
            Why Choose Thriving Greens?
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(var(--color-sage-600))' }}
          >
            We're committed to delivering the finest <span className="font-semibold" style={{ color: 'rgb(var(--color-primary-600))' }}>microgreens</span> with uncompromising quality, 
            freshness, and nutritional value straight from our farm to your table.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Circle */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-colors duration-300 group-hover:opacity-90"
                style={{ backgroundColor: 'rgb(var(--color-primary-100))' }}
              >
                <div style={{ color: 'rgb(var(--color-primary-600))' }}>
                  {feature.icon}
                </div>
              </div>
              
              {/* Feature Content */}
              <h3 
                className="font-semibold text-xl mb-4"
                style={{ color: 'rgb(var(--color-primary-800))' }}
              >
                {feature.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: 'rgb(var(--color-sage-600))' }}
              >
                {highlightMicrogreens(feature.description)}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div 
            className="rounded-3xl p-8 md:p-12 border shadow-soft-md"
            style={{ 
              background: 'linear-gradient(to right, rgb(var(--color-sage-50)), rgb(var(--color-cream-100)))',
              borderColor: 'rgba(var(--color-sage-100), 0.5)'
            }}
          >
            <h3 
              className="font-display font-bold text-3xl md:text-4xl mb-4"
              style={{ color: 'rgb(var(--color-primary-800))' }}
            >
              Ready to Experience the Difference?
            </h3>
            <p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: 'rgb(var(--color-sage-700))' }}
            >
              Join local chefs and health enthusiasts who trust Thriving Greens 
              for their daily dose of premium <span className="font-semibold" style={{ color: 'rgb(var(--color-primary-600))' }}>microgreens</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/shop"
                className="text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-200 inline-block"
                style={{ backgroundColor: 'rgb(var(--color-primary-600))' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-700))'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-600))'}
              >
                Browse Products
              </a>
              <a 
                href="/about"
                className="font-semibold px-8 py-3 text-lg transition-colors duration-200 inline-block"
                style={{ color: 'rgb(var(--color-primary-600))' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-700))'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-600))'}
              >
                Learn More About Our Process →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

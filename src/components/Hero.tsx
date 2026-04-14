'use client'

import Link from 'next/link'

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

export default function Hero() {
  return (
    <section className="relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, rgb(var(--color-cream-100)), rgb(var(--color-sage-50)), rgb(var(--color-primary-50)))' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat opacity-20" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
      </div>

      {/* Title Above Video */}
      <div className="relative text-center pt-6 pb-4">
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ color: 'rgb(var(--color-primary-800))' }}>
          Thriving <span style={{ color: 'rgb(var(--color-primary-600))' }}>Greens</span>
        </h1>
      </div>

      {/* Full Width Video */}
      <div className="w-full">
        <video 
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
          autoPlay 
          muted 
          loop
          playsInline
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(console.log);
          }}
        >
          <source src="/videos/microgreens-hero.mp4" type="video/mp4" />
          <source src="/videos/microgreens-hero.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Centered Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="text-center animate-fade-in">
          <p className="text-xl md:text-2xl mb-3 leading-relaxed"
             style={{ color: 'rgb(var(--color-sage-700))' }}>
            Fresh {highlightMicrogreens('microgreens')} grown locally, 
            <span className="block font-semibold" style={{ color: 'rgb(var(--color-primary-700))' }}>delivered daily</span>
          </p>

          <p className="text-lg text-sage-600 mb-10 max-w-4xl mx-auto">
            Experience the pure taste of energy packed, nutrient-dense {highlightMicrogreens('microgreens')}, 
            carefully cultivated for chefs and health enthusiasts who demand the finest quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/shop"
              className="font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg transform hover:scale-105 inline-block text-white"
              style={{ 
                backgroundColor: 'rgb(var(--color-primary-600))'
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-700))'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-600))'}
            >
              Shop Now
            </Link>
            <Link 
              href="/about"
              className="font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 inline-block border-2"
              style={{ 
                borderColor: 'rgb(var(--color-primary-600))',
                color: 'rgb(var(--color-primary-600))'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgb(var(--color-primary-600))';
                (e.target as HTMLElement).style.color = 'white'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = 'rgb(var(--color-primary-600))'
              }}
            >
              View Our Process
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sage-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Naturally cultivated</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Local Grown</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Daily Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

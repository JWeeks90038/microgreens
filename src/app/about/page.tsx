import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

// SEO metadata for about page
export const metadata: Metadata = {
  title: "Our Growing Process & Story | Thriving Greens",
  description: "Learn about Thriving Greens' indoor microgreens growing process in Murrieta, California. Discover our sustainable farming methods and commitment to fresh, local produce.",
  keywords: "indoor farming, microgreens growing process, sustainable agriculture, Murrieta farm, organic microgreens, controlled environment agriculture",
}

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

export default function AboutPage() {
  const processSteps = [
    {
      number: "01",
      title: "Seed Selection",
      description: "We carefully select only the finest organic, non-GMO seeds from trusted suppliers. Each variety is chosen for its flavor profile, nutritional density, and growing characteristics.",
      image: "/images/process-seeds.jpg"
    },
    {
      number: "02", 
      title: "Germination",
      description: "Seeds are soaked and placed in optimal growing conditions with controlled temperature and humidity. We monitor each tray to ensure perfect germination rates.",
      image: "/images/process-germination.jpg"
    },
    {
      number: "03",
      title: "Growing Trays",
      description: "Sprouted seeds are transferred to growing trays with all-natural growing medium. Our climate-controlled environment ensures consistent, healthy growth.",
      image: "/images/process-growing.jpg"
    },
    {
      number: "04",
      title: "Harvesting",
      description: <>At peak freshness and nutritional content, {highlightMicrogreens('microgreens')} are hand-harvested with precision timing. This ensures maximum flavor and health benefits.</>,
      image: "/images/process-harvest.jpg"
    },
    {
      number: "05",
      title: "Packaging & Delivery",
      description: <>Freshly harvested {highlightMicrogreens('microgreens')} are carefully packaged in breathable containers and delivered within 24 hours to maintain peak quality.</>,
      image: "/images/process-delivery.jpg"
    }
  ]

  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Passion for Quality",
      description: "Every microgreen is grown with love and attention to detail, ensuring you receive only the best."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Sustainable Practices",
      description: "We use environmentally responsible growing methods that minimize waste and maximize nutrition."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Community Focus",
      description: "Supporting local health and wellness by providing fresh, accessible nutrition to our community."
    }
  ]

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-cream-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-primary-800 leading-tight mb-6">
                Our Growing
                <span className="block text-primary-600">Process</span>
              </h1>
              <p className="text-xl text-sage-700 leading-relaxed mb-8">
                From seed to harvest, we're committed to growing the most nutritious and 
                flavorful microgreens through pure, natural, sustainable practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/shop"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-center"
                >
                  Shop Fresh <span className="font-semibold" style={{ color: 'rgb(var(--color-cream-100))', textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>Microgreens</span>
                </Link>
                <Link 
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-semibold px-8 py-3 text-center transition-colors duration-200"
                >
                  Visit Our Farm →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-soft-lg">
                <Image
                  src="/images/farm-overview.jpg"
                  alt="Thriving Greens farm overview"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-sage-700">
            <p className="text-xl leading-relaxed mb-6">
              Thriving Greens began with a simple belief: everyone deserves access to the freshest, 
              most nutritious produce possible. What started as a small passion project has grown 
              into a thriving urban farm dedicated to providing premium {highlightMicrogreens('microgreens')} to our community.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We've spent years perfecting our growing techniques, working with local chefs, 
              and learning from nutrition experts to create the perfect growing environment for 
              each variety of microgreen we cultivate.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to supply restaurants, health-conscious individuals, and 
              families with {highlightMicrogreens('microgreens')} that are not just fresh, but harvested at the peak 
              of their nutritional value and delivered within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Growing Process Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-4">
              From Seed to Harvest
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Follow the journey of our {highlightMicrogreens('microgreens')} through our carefully controlled 
              five-step growing process.
            </p>
          </div>

          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl font-bold text-primary-200 mr-4">
                      {step.number}
                    </span>
                    <h3 className="font-display font-bold text-3xl text-primary-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-sage-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative h-64 lg:h-80 bg-white rounded-2xl shadow-soft overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              The principles that guide everything we do, from seed selection to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-2xl mb-6 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl text-primary-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-800 mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-sage-600">
              Take a look inside our growing facility and see the care that goes into every microgreen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative h-64 bg-white rounded-2xl shadow-soft overflow-hidden group">
                <Image
                  src={`/images/gallery-${index}.jpg`}
                  alt={`Behind the scenes ${index}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Experience the freshest, most flavorful {highlightMicrogreens('microgreens')} you've ever tasted. 
            Order now and taste the Thriving Greens difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop"
              className="bg-white text-primary-800 hover:bg-cream-100 font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
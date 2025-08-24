// sections/ServicesWeOffer.tsx
import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import image1 from '../assets/images/serviceImageOne.svg';
import image2 from '../assets/images/serviceImageTwo.svg';
import image3 from '../assets/images/serviceImageThree.svg';

const ServicesWeOffer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      image: image1,
      title: 'Upstream E&P',
      description: 'Accelerating exploration and production. Delivered 20% faster time-to-first-oil across three West African basins.',
      linkText: 'See Our Upstream Expertise',
      background: '#E6EEFA'
    },
    {
      image: image2,
      title: 'Midstream Infrastructure',
      description: 'Safe, efficient transport of resources. Over 500 km of pipelines with 99% uptime in Nigeria & Ghana.',
      linkText: 'Explore Midstream Solutions',
      background: '#FFE6E6'
    },
    {
      image: image3,
      title: 'Downstream and Marketing',
      description: 'Reliable energy products for industries and communities. 95% on-time delivery to partners across West Africa.',
      linkText: 'View Our Downstream Projects',
      background: '#E6EEFA'
    },
    {
      image: image1,
      title: 'Power Generation',
      description: 'Clean, scalable energy. 12 GW capacity, including Nigeria\'s first hybrid gas-to-solar plant.',
      linkText: 'Learn About Our Power Projects',
      background: '#FFE6E6'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services cover the full energy value chain — from exploration to power generation — helping 
            governments and industries secure reliable, efficient, and future-ready energy infrastructure.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.image}
                title={service.title}
                description={service.description}
                linkText={service.linkText}
                bg={service.background}
              />
            ))}
          </div>
        </div>

        {/* Mobile View with Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                We combine technology, expertise and sustainability to 
                create smarter ways of generating and managing energy.
              </h3>
            </div>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <ServiceCard
                      imageSrc={service.image}
                      title={service.title}
                      description={service.description}
                      linkText={service.linkText}
                      bg={service.background}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;
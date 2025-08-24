// sections/MapSection.tsx
import React from 'react';
import detailMap from '../assets/images/detailMap.svg';

interface MapSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mapImageSrc?: string;
  className?: string;
}

const MapSection: React.FC<MapSectionProps> = ({
  subtitle = "",
  description = "",
  mapImageSrc = detailMap,
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 max-w-4xl lg:w-[600px] leading-tight">
            We Tailor Our <span className='text-[#ef4444]'>Energy Services</span> To Meet Your Specific Energy<span className='text-[#ef4444]'> Needs and Budget.</span>
          </h2>
          
          {/* Subtitle */}
          {subtitle && (
            <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
              {subtitle}
            </h3>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Map Container */}
        <div className="relative">
          {/* Map Image */}
            <img
              src={mapImageSrc}
              alt="Global energy services map showing IAK Energy Group operations across Africa and other regions"
              className="w-full h-auto"
            />

          {/* Africa Label */}
          {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-md">
            <h4 className="font-bold text-lg text-gray-900">AFRICA</h4>
            <p className="text-sm text-gray-600">Our primary focus region</p>
          </div> */}
        </div>

        {/* Optional Stats or Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="text-2xl font-bold text-blue-600 mb-2">5+</h4>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="text-2xl font-bold text-green-600 mb-2">100+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <h4 className="text-2xl font-bold text-red-600 mb-2">24/7</h4>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
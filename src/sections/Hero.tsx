// sections/Hero.tsx
import React from 'react';
import Button from '../components/Button';
import backgroundImage from '../assets/images/heroImageOne.svg';
import { scrollToElement } from '../utils/scrollToFooter';

const Hero: React.FC = ({}) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powering Africa with 
            <span className="block">Sustainable Energy</span>
            <span className="block">Solutions</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 font-medium">
            Trusted by 10+ governments and industries across West Africa
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 font-medium">
            with 1.2 GW in projects delivered.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
              <Button
                text="Explore Our Projects"
                onClick={() => scrollToElement("exploreProjects", () => {})}
                backgroundColor="#ef4444"
                textColor="white"
                className="hover:bg-red-600 text-base px-8 py-3"
              />
            
              <Button
                text="Learn About Our Impact"
                onClick={() => scrollToElement("OurProvenImpact", () => {})}
                backgroundColor="rgba(255, 255, 255, 0.1)"
                textColor="white"
                borderColor="white"
                className="hover:bg-white hover:text-gray-900 backdrop-blur-sm text-base px-8 py-3"
              />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Optional */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        onClick={() => scrollToElement("footer", () => {})}
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
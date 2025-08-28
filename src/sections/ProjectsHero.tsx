// sections/projectsHero.tsx
import React from 'react';
import projectsHeroImg from '../assets/images/projectHero.svg';
import { scrollToElement } from '../utils/scrollToFooter';

interface projectsHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const projectsHero: React.FC<projectsHeroProps> = ({
  title = "Our Projects",
  subtitle = "",
  description = "We combine technology, expertise, and sustainability to create smarter ways of generating and managing energy",
  className = ""
}) => {
  return (
    <section className={`relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${projectsHeroImg})` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-black px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-4 leading-tight">
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <h2 className="text-xl md:text-2xl text-black font-medium mb-6 text-gray-200">
            {subtitle}
          </h2>
        )}
        
        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      
      {/* Scroll Indicator (optional) */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={() => scrollToElement("footer", () => {})}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default projectsHero;
// sections/ServiceCatgory.tsx
import React from 'react';
import ServiceCategoryCard from '../components/ServiceCategoryCard';
import barrelWhite from '../assets/images/barrelWhite.svg';
import busWhite from '../assets/images/busWhite.svg';
import boxWhite from '../assets/images/boxWhite.svg';
import anchorWhite from '../assets/images/anchorWhite.svg';
import plugWhite from '../assets/images/plugWhite.svg';
import precisionWhite from '../assets/images/precisionWhite.svg';
import bulbWhite from '../assets/images/bulbWhite.svg';

interface MissionSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ServiceCatgory: React.FC<MissionSectionProps> = ({
  title = "Service Categories",
  subtitle = "Guiding Values behind Our Dedication to powering Africa with Sustainable Energy",
  className = ""
}) => {
  const missionCards = [
    {
      id: 'Upstream Exploration',
      iconSrc: barrelWhite,
      title: 'Upstream Exploration & Production',
      description: 'Advanced extraction techniques customized to maximize hydrocarbon yields while upholding safety and environmental standards.',
      titleColor: 'text-blue-600',
      linkText: 'Explore Our Upstream Series'
    },
    {
      id: 'Midstream Infrastructure',
      iconSrc: busWhite,
      title: 'Midstream Infrastructure',
      description: 'Adopting new technologies and practices to improve energy recovery.',
      titleColor: 'text-blue-600',
      linkText: 'Explore Our Midstream Structure'
    },
    {
      id: 'Downstream-Marketing',
      iconSrc: boxWhite,
      title: 'Downstream & Marketing',
      description: 'Refining and supplying premium fuels and petrochemicals optimized for global markets and commercial applications.',
      titleColor: 'text-blue-600',
      linkText: 'Discover Our Downstream...'
    },
    {
      id: 'Power Generation',
      iconSrc: plugWhite,
      title: 'Power Generation',
      description: 'End-to-end power solutions—from planning to commissioning—tailored for scalability, efficiency, and carbon-conscious operation.',
      titleColor: 'text-blue-600',
      linkText: 'See How Our Power Works...'
    },
    {
      id: 'Epcc',
      iconSrc: precisionWhite,
      title: 'EPCC (Engineering, Procurement, Construction & Commissioning)',
      description: 'Refining and supplying premium fuels and petrochemicals optimized for global markets and commercial applications.',
      titleColor: 'text-blue-600',
      linkText: 'View Our EPCC Structures'
    },
    {
      id: 'Innovation-Technology',
      iconSrc: bulbWhite,
      title: 'Innovation & Technology Integration',
      description: 'Pioneering digital and clean energy technologies—like virtual pipelines—to enhance energy access and drive decarbonization."',
      titleColor: 'text-blue-600',
      linkText: 'Explore Our Tech Integrations'
    },
    {
      id: 'Marine-Logistics',
      iconSrc: anchorWhite,
      title: 'Marine Logistics & Vessel Charter',
      description: 'Pioneering digital and clean energy technologies—like virtual pipelines—to enhance energy access and drive decarbonization.',
      titleColor: 'text-blue-600',
      linkText: 'Discover Our Marine Logistics'
    },
  ];

  return (
    <section className={`py-16 md:py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 md:text-lg lg:w-1/3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {missionCards.map((card) => (
            <ServiceCategoryCard
              key={card.id}
              iconSrc={card.iconSrc}
              iconColor='bg-white'
              title={card.title}
              description={card.description}
              titleColor={card.titleColor}
              linkText={card.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCatgory;
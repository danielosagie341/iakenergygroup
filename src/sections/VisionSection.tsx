// sections/VisionSection.tsx
import React from 'react';
import ImpactCard from '../components/ImpactCard';
import globeWhite from '../assets/images/globeWhite.svg';
import batteryWhite from '../assets/images/batteryWhite.svg';
import peopleIcon from '../assets/images/peopleIcon.svg';
import rocketWhite from '../assets/images/rocketWhite.svg';

interface VisionSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({
  title = "Vision Highlights",
  subtitle = "Guiding Values behind Our Dedication to powering Africa with Sustainable Energy",
  className = ""
}) => {
  const visionCards = [
    {
      id: 'global-energy-leadership',
      iconSrc: globeWhite,
      title: 'Global Energy Leadership',
      description: 'Becoming a world-class energy company with international reach.',
      titleColor: 'text-blue-600'
    },
    {
      id: 'future-ready-energy',
      iconSrc: batteryWhite,
      title: 'Future-Ready Energy',
      description: 'Shaping the future of energy with forward-thinking strategies.',
      titleColor: 'text-blue-600'
    },
    {
      id: 'people-empowerment',
      iconSrc: peopleIcon,
      title: 'People Empowerment',
      description: 'Building human capacity and nurturing local talent in energy industries.',
      titleColor: 'text-blue-600'
    },
    {
      id: 'innovative-transformation',
      iconSrc: rocketWhite,
      title: 'Innovative Transformation',
      description: 'Transforming Africa\'s energy sector through technology and innovation.',
      titleColor: 'text-blue-600'
    }
  ];

  return (
    <section className={`py-16 md:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg lg:w-1/3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visionCards.map((card) => (
            <ImpactCard
              key={card.id}
              iconSrc={card.iconSrc}
              iconColor='bg-white'
              title={card.title}
              description={card.description}
              titleColor={card.titleColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
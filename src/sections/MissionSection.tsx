// sections/MissionSection.tsx
import React from 'react';
import ImpactCard from '../components/ImpactCard';
import settingsWhite from '../assets/images/settingsWhite.svg';
import bulbWhite from '../assets/images/bulbWhite.svg';
import leafWhite from '../assets/images/leafWhite.svg';
import coinWhite from '../assets/images/coinWhite.svg';

interface MissionSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({
  title = "Mission Highlights",
  subtitle = "Guiding Values behind Our Dedication to powering Africa with Sustainable Energy",
  className = ""
}) => {
  const missionCards = [
    {
      id: 'operational-excellence',
      iconSrc: settingsWhite,
      title: 'Operational Excellence',
      description: 'Delivering safe, efficient, and high-value energy operations across all sectors.',
      titleColor: 'text-blue-600'
    },
    {
      id: 'innovative-solutions',
      iconSrc: bulbWhite,
      title: 'Innovative Solutions',
      description: 'Adopting new technologies and practices to improve energy recovery.',
      titleColor: 'text-blue-600'
    },
    {
      id: 'sustainability-commitment',
      iconSrc: leafWhite,
      title: 'Sustainability Commitment',
      description: 'Ensuring environmental responsibility while pursuing energy growth.',
      titleColor: 'text-blue-600'
    },
    {
      id: 'value-creation',
      iconSrc: coinWhite,
      title: 'Value Creation',
      description: 'Driving long-term benefits for stakeholders, communities, and the economy.',
      titleColor: 'text-blue-600'
    }
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

export default MissionSection;
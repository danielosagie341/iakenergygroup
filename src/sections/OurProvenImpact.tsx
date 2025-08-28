// sections/OurProvenImpact.tsx
import React from 'react';
import ImpactCard from '../components/ImpactCard';
import lightning from '../assets/images/lightning.svg';
import infrastructure from '../assets/images/infrastructure.svg';
import tree from '../assets/images/tree.svg';
import personIcon from '../assets/images/personIcon.svg';
import globe from '../assets/images/globe.svg';

const OurProvenImpact: React.FC = () => {
  const impacts = [
    {
      icon: lightning,
      title: '500MW+ Power Delivered',
      description: 'Reliable electricity lighting up homes and industries.',
    },
    {
      icon: infrastructure,
      title: '100km+ Energy Infrastructure',
      description: 'Systems connecting resources to government.',
    },
    {
      icon: lightning,
      title: '500MW+ Power Delivered',
      description: 'Reliable electricity lighting up homes and industries.',
    },
    {
      icon: tree,
      title: 'Investment in Clean Energy',
      description: 'Reliable electricity lighting up homes and industries.',
    },
    {
      icon: personIcon,
      title: 'Thousands of Jobs Created',
      description: 'Building opportunities and empowering African talent.',
    },
    {
      icon: globe,
      title: '5+ West African Nations',
      description: 'Expanding access to energy across borders.',
    },
  ];

  return (
    <section id='OurProvenImpact' className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers that show our commitment to powering 
            Africa sustainably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              iconSrc={impact.icon}
              title={impact.title}
              description={impact.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProvenImpact;
// sections/WhoWeAre.tsx
import React from 'react';
import RedIcon from '../components/RedIcon';
import barrel from '../assets/images/barrel.svg';
import pipeline from '../assets/images/pipeline.svg';
import fan from '../assets/images/fan.svg';
import leaf from '../assets/images/leaf.svg';
import hands from '../assets/images/hands.svg';
import map from '../assets/images/mapBackground.svg';

const WhoWeAre: React.FC = () => {
  const values = [
    {
      number: 1,
      title: 'Energy Exploration',
      description: 'Responsible discovery and production of Africa\'s hydrocarbon resources.',
      icon: barrel,
      position: 'left'
    },
    {
      number: 2,
      title: 'Infrastructure Development',
      description: 'Building systems that move energy efficiently to people and industries.',
      icon: pipeline,
      position: 'right'
    },
    {
      number: 3,
      title: 'Power Generation',
      description: 'Delivering scalable, sustainable power for West Africa\'s growth.',
      icon: fan,
      position: 'left'
    },
    {
      number: 4,
      title: 'Sustainability & Innovation',
      description: 'Driving clean technologies and renewable solutions for the future.',
      icon: leaf,
      position: 'right'
    },
    {
      number: 5,
      title: 'Empowering Communities',
      description: 'Creating opportunities, partnerships, and local economic growth.',
      icon: hands,
      position: 'left'
    }
  ];

  return (
    <section 
      className="bg-gray-50 py-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${map})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering energy solutions at the intersection of technology, expertise, and 
            sustainability — creating smarter ways to generate and manage power.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative">
          <div className="relative max-w-4xl mx-auto">
            {/* Central red vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[50px] px-10 -top-5 h-full bg-gradient-to-b from-red-600 to-red-200 to-red-100 to-red-50 to-red-0 rounded-full"></div>
            
            {values.map((value, index) => (
              <div key={index} className={`relative mb-16 lg:-mx-20 -mx-5 ${value.position === 'center' ? 'text-left' : 'flex items-center'}`}>
                {value.position === 'left' && (
                  <>
                    <div className='lg:w-1/2'>
                        <div className="lg:w-3/4 w-[75%] lg:pr-12 text-right">
                            <div className="inline-flex items-center space-x-3 mb-2">
                                <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                                {value.number}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                            </div>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <RedIcon iconSrc={value.icon} />
                    </div>
                    <div className="w-1/2"></div>
                  </>
                )}
                
                {value.position === 'right' && (
                  <>
                    <div className=" w-[45%]"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                      <RedIcon iconSrc={value.icon} />
                    </div>
                    <div className='lg:w-1/2 flex justify-end'>
                        <div className="lg:w-3/4 lg:pl-12">
                            <div className="inline-flex items-center space-x-3 mb-2">
                                <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                                {value.number}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                            </div>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    </div>
                  </>
                )}
                
                {value.position === 'center' && (
                  <div className="flex flex-col items-center">
                    <RedIcon iconSrc={value.icon} />
                    <div className="mt-4">
                      <div className="inline-flex items-center space-x-3 mb-2">
                        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                          {value.number}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                      </div>
                      <p className="text-gray-600 max-w-sm mx-auto">{value.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Pioneering energy solutions at the intersection of technology, 
              expertise and sustainability — creating smarter ways to 
              generate and manage power.
            </p>
          </div>
          
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {value.number}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
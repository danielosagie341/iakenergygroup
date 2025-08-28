import React, { useState } from 'react';
import turnkeyGasImage from '../assets/images/turnkeyGasImage.svg';
import deepwaterImage from '../assets/images/deepwaterImage.svg';
import nationalCngImage from '../assets/images/nationalCngImage.svg';
import anchor from '../assets/images/anchor.svg';
import polytank from '../assets/images/polytank.svg';
import globe from '../assets/images/globe.svg';
import vehicle from '../assets/images/vehicle.svg';
import hazard from '../assets/images/hazard.svg';
import battery from '../assets/images/battery.svg';
import lightning from '../assets/images/lightning.svg';
import infrastructure from '../assets/images/infrastructure.svg';
import worker from '../assets/images/worker.svg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  featureIcons: string[];
  status: string;
}

const ProjectSection: React.FC = () => {
    
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Icon mapping for features

  const projectsData: Project[] = [
        {
            id: 1,
            title: 'Deepwater Drilling Campaign',
            description: 'Exclusive access to the Tiger 1 Drillship enabled advanced deepwater drilling offshore Nigeria. Leveraging real-time monitoring and well intervention techniques, we maximized hydrocarbon recovery while maintaining strict safety and environmental standards.',
            image: deepwaterImage,
            featureIcons: [anchor, polytank, globe,],
            features: [
            'Tiger I Drilling exclusive deployment',
            'Maximized recovery through real-time monitoring',
            'Operated under strict HSE standards'
            ],
            status: 'Next Project'
        },
        {
            id: 2,
            title: 'National CNG Initiative',
            description: 'Pioneering a large-scale compressed natural gas (CNG) rollout across Nigeria, reducing reliance on diesel and petrol. This initiative promotes cleaner, more affordable fuel alternatives for transport and industry.',
            image: nationalCngImage,
            featureIcons: [vehicle, hazard, battery,],
            features: [
            'Over 500+ CNG vehicles deployed',
            '40% reduction in emissions',
            'Enhanced fuel affordability & access'
            ],
            status: 'Next Project'
        },
        {
            id: 3,
            title: 'Turnkey Gas-Fired Power Plant',
            description: 'Delivered a complete gas-fired power plant on a turnkeybasis—covering design, engineering, procurement, construction, and commissioning. Strengthening energy access and powering industrial growth in Africa.',
            image: turnkeyGasImage,
            featureIcons: [lightning, infrastructure, worker],
            features: [
            '250MW capacity installed',
            'EPCC delivery from start to finish',
            'Local workforce training included'
            ],
            status: 'Next Project'
        }
    ];

    const handleProjectTransition = (direction: 'next' | 'prev') => {
        setIsTransitioning(true);
        setTimeout(() => {
        if (direction === 'next') {
            setCurrentProject((prev) => (prev + 1) % projectsData.length);
        } else {
            setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
        }
        setIsTransitioning(false);
        }, 300);
    };

  return (
        <div className="container max-w-4xl my-20 mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Project Content */}
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 lg:h-full lg:min-h-[400px]">
                <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={projectsData[currentProject].image} 
                      className='h-full w-full object-cover' 
                      alt={projectsData[currentProject].title} 
                    />
                    {/* Bottom gradient overlay for progress dots */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                      <div className="flex space-x-2">
                        {projectsData.map((_, index) => (
                          <div
                            key={index}
                            className={`transition-all duration-300 ${
                              index === currentProject 
                                ? 'w-8 h-1.5 bg-red-600 rounded-full' 
                                : 'w-2 h-2 bg-white/60 rounded-full'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-blue-600 mb-4 leading-tight">
                    {projectsData[currentProject].title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                    {projectsData[currentProject].description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {projectsData[currentProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center shadow-md my-6 p-5 rounded-md space-x-3">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <img 
                            src={projectsData[currentProject].featureIcons[index]} 
                            alt="" 
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Previous Project Button */}
                  {currentProject > 0 && (
                    <button 
                      onClick={() => handleProjectTransition('prev')}
                      className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 underline"
                    >
                      Previous Project
                    </button>
                  )}
                  
                  {/* Spacer for when no previous button */}
                  {currentProject === 0 && <div></div>}

                  <button 
                    onClick={() => handleProjectTransition('next')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors duration-200 shadow-sm"
                  >
                    {projectsData[currentProject].status}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProjectSection;
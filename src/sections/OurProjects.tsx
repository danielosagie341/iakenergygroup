// sections/OurProjects.tsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import exploration from '../assets/images/barrelNeutral.svg';
import safety from '../assets/images/safetyNeutral.svg';
import serviceImageOne from '../assets/images/serviceImageOne.svg';
import serviceImageTwo from '../assets/images/serviceImageTwo.svg';
import serviceImageThree from '../assets/images/serviceImageThree.svg';

const OurProjects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      firstButtonIcon: exploration,
      firstButtonText: 'Exploration',
      secondButtonIcon: safety,
      secondButtonText: 'Safety first',
      firstTitle: 'Upstream E&P',
      secondTitle: 'Deepwater Drilling Campaign',
      description: 'This deepwater drilling project offshore Nigeria used the Tiger I Drillship. We maximized hydrocarbon recovery with real-time monitoring and advanced well interventions, all while upholding strict safety and environmental standards.',
      imageSrc: serviceImageOne,
      linkText: 'View Our Deepwater Drilling Campaign',
      backgroundColor: 'bg-blue-50'
    },
    {
      firstButtonIcon: exploration,
      firstButtonText: 'Exploration',
      secondButtonIcon: safety,
      secondButtonText: 'Safety first',
      firstTitle: 'Upstream E&P',
      secondTitle: 'National CNG Initiative',
      description: 'This deepwater drilling project offshore Nigeria used the Tiger I Drillship. We maximized hydrocarbon recovery with real-time monitoring and advanced well interventions, all while upholding strict safety and environmental standards.',
      imageSrc: serviceImageTwo,
      linkText: 'View Our National CNG Initiative',
      backgroundColor: 'bg-red-50'
    },
    {
      firstButtonIcon: exploration,
      firstButtonText: 'Exploration',
      secondButtonIcon: safety,
      secondButtonText: 'Safety first',
      firstTitle: 'Upstream E&P',
      secondTitle: 'Turnkey Gas-Fired Power Plant',
      description: 'This deepwater drilling project offshore Nigeria used the Tiger I Drillship. We maximized hydrocarbon recovery with real-time monitoring and advanced well interventions, all while upholding strict safety and environmental standards.',
      imageSrc: serviceImageThree,
      linkText: 'View Our Turnkey Gas-Fired Power Plant',
      backgroundColor: 'bg-blue-50'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id='exploreProjects' className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers that show our commitment to powering 
            Africa sustainably.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative">

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-3">
                    <ProjectCard
                      firstButtonIcon={project.firstButtonIcon}
                      firstButtonText={project.firstButtonText}
                      secondButtonIcon={project.secondButtonIcon}
                      secondButtonText={project.secondButtonText}
                      firstTitle={project.firstTitle}
                      secondTitle={project.secondTitle}
                      description={project.description}
                      linkHref='/projects'
                      imageSrc={project.imageSrc}
                      linkText={project.linkText}
                      backgroundColor={project.backgroundColor}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-6">
              Our projects reflect a steadfast commitment to 
              sustainable energy solutions across Africa, 
              showcasing our impact through measurable 
              achievements.
            </p>
          </div>

          <div className="w-full relative overflow-hidden">
            <div 
                className=" w-full flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <ProjectCard
                      firstButtonIcon={project.firstButtonIcon}
                      firstButtonText={project.firstButtonText}
                      secondButtonIcon={project.secondButtonIcon}
                      secondButtonText={project.secondButtonText}
                      firstTitle={project.firstTitle}
                      secondTitle={project.secondTitle}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      linkText={project.linkText}
                      backgroundColor={project.backgroundColor}
                    />
                  </div>
                ))}
              </div>

              {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex justify-center items-center space-x-4 mt-8">
              {/* <span className="text-sm text-gray-500">03 / 04</span> */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
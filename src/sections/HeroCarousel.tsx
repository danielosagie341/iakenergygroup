// sections/HeroCarousel.tsx
import React, { useEffect, useRef } from 'react';
import logo1 from '../assets/images/heroCarouselOne.svg';
import logo2 from '../assets/images/heroCarouselTwo.svg';
import logo3 from '../assets/images/heroCarouselThree.svg';
import logo4 from '../assets/images/heroCarouselFour.svg';
import logo5 from '../assets/images/heroCarouselFive.svg';

const HeroCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'Halliburton', logo: logo1 },
    { name: 'Servier', logo: logo2 },
    { name: 'SLB', logo: logo3 },
    { name: 'Transoceanic', logo: logo4 },
    { name: 'Government', logo: logo5 },
  ];

  // Duplicate the partners array multiple times for seamless scrolling
  const extendedPartners = [
    ...partners,
    ...partners,
    ...partners,
    ...partners
  ];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust this value to control speed (pixels per frame)

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
      const singleSetWidth = scrollElement.scrollWidth / 4; // Since we have 4 copies
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }

      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="bg-white py-12">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex items-center gap-12"
            style={{ width: 'fit-content' }}
          >
            {extendedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
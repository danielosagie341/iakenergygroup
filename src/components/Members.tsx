// components/Members.tsx
import React, { useRef, useState, useEffect } from 'react';
import MemberCard from './MemberCard';

interface Member {
  id: string;
  name: string;
  position: string;
  company: string;
  imageSrc: string;
  countryFlag?: string;
}

interface MembersProps {
  members: Member[];
  title?: string;
  subtitle?: string;
}

const Members: React.FC<MembersProps> = ({ members, title, subtitle }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [members]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            position={member.position}
            company={member.company}
            imageSrc={member.imageSrc}
            countryFlag={member.countryFlag}
          />
        ))}
      </div>

      {/* Mobile Scrollable */}
      <div className="md:hidden relative">
        {/* Scroll Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full transition-colors ${
              canScrollLeft 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-600' 
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`p-2 rounded-full transition-colors ${
              canScrollRight 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-600' 
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {members.map((member) => (
            <div key={member.id} className="flex-shrink-0 w-full">
              <MemberCard
                name={member.name}
                position={member.position}
                company={member.company}
                imageSrc={member.imageSrc}
                countryFlag={member.countryFlag}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
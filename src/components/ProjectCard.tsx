// components/ProjectCard.tsx
import React from 'react';
import IconButton from './IconButton';

interface ProjectCardProps {
  firstButtonIcon: string;
  firstButtonText: string;
  secondButtonIcon?: string;
  secondButtonText?: string;
  firstTitle: string;
  secondTitle: string;
  description: string;
  imageSrc: string;
  linkText: string;
  linkHref?: string;
  onLinkClick?: () => void;
  backgroundColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  firstButtonIcon,
  firstButtonText,
  secondButtonIcon,
  secondButtonText,
  firstTitle,
  secondTitle,
  description,
  imageSrc,
  linkText,
  linkHref = '#',
  onLinkClick,
  backgroundColor = 'bg-white'
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick();
    }
  };

  return (
    <div className={`${backgroundColor} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
      {/* Header with buttons */}
      <div className="p-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-8">
          <IconButton 
            iconSrc={firstButtonIcon} 
            text={firstButtonText}
          />
          {secondButtonIcon && secondButtonText && (
            <IconButton 
              iconSrc={secondButtonIcon} 
              text={secondButtonText}
            />
          )}
        </div>

        {/* Titles */}
        <div className="mb-5">
          <p className="text-sm text-gray-600 font-medium">{firstTitle}</p>
          <h3 className="text-xl font-semibold text-gray-900">{secondTitle}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={secondTitle}
          className="w-full scale-[150%] h-full object-cover hover:scale-[175%] transition-transform duration-300"
        />
      </div>

      {/* Link */}
      <div className="p-6 pt-4">
        <a 
          href={linkHref}
          onClick={handleLinkClick}
          className="text-red-700 hover:text-red-400 font-medium text-sm inline-flex items-center group/link"
        >
          
          <span className="block h-0.5 w-full mt-1 underline">{linkText}</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
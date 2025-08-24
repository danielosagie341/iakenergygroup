// components/ServiceCatergorCard.tsx
import React from 'react';
import BlueIcon from './BlueIcon';

interface ServiceCatergorCardProps {
  iconSrc: string;
  iconColor?: string;
  title: string;
  description: string;
  titleColor?: string;
  linkText: string;
  linkHref?: string;
  onLinkClick?: () => void;
}

const ServiceCatergorCard: React.FC<ServiceCatergorCardProps> = ({
  iconSrc,
  iconColor,
  title,
  description,
  titleColor,
  linkText,
  linkHref = '#',
  onLinkClick,
}) => {
    const handleLinkClick = (e: React.MouseEvent) => {
        if (onLinkClick) {
          e.preventDefault();
          onLinkClick();
        }
    };

  return (
    <div className="text-left shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-10 space-y-4">
      {/* Icon */}
      <div className="flex justify-start">
        <BlueIcon iconSrc={iconSrc} iconColor={iconColor} className='shadow-md' size="lg" />
      </div>
      
      {/* Title */}
      <h3 className={`text-lg lg:min-h-[80px] font-semibold ${titleColor ? titleColor : 'text-gray-900'}`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm lg:min-h-[100px] text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Red underlined link */}
        <a 
          href={linkHref}
          onClick={handleLinkClick}
          className="text-red-600 hover:text-red-400 font-medium text-sm inline-flex items-center group/link"
        >
          <span className="underline w-full mt-1 transition-colors duration-200">{linkText}</span>
        </a>
    </div>
  );
};

export default ServiceCatergorCard;
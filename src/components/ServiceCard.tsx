// components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  bg?: string;
  title: string;
  description: string;
  linkText: string;
  linkHref?: string;
  onLinkClick?: () => void;
  onClick?: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  bg,
  title,
  description,
  linkText,
  linkHref = '#',
  onLinkClick,
  onClick
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick();
    }
  };

  return (
    <div className=" lg:h-[420px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group" style={{ backgroundColor: `${bg}` }}>
      {/* Image Container */}
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover scale-[150%] group-hover:scale-[175%] transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-md font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 lg:h-[100px] text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Red underlined link */}
        <a 
          href={linkHref}
          onClick={() => {
            handleLinkClick
             onClick
          }}
          className="text-red-600 hover:text-red-400 font-medium text-sm inline-flex items-center group/link"
        >
          <span className="underline w-full mt-1 transition-colors duration-200">{linkText}</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
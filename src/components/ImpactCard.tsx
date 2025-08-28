// components/ImpactCard.tsx
import React from 'react';
import BlueIcon from './BlueIcon';

interface ImpactCardProps {
  iconSrc: string;
  iconColor?: string;
  title: string;
  description: string;
  titleColor?: string;
  descriptionClass?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  iconSrc,
  iconColor,
  title,
  description,
  titleColor,
  descriptionClass
}) => {
  return (
    <div className="text-left shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-10 space-y-4">
      {/* Icon */}
      <div className="flex justify-start">
        <BlueIcon iconSrc={iconSrc} iconColor={iconColor} className='shadow-md' size="lg" />
      </div>
      
      {/* Title */}
      <h3 className={`text-lg font-semibold ${titleColor ? titleColor : 'text-gray-900'}`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className={`${descriptionClass}text-sm text-gray-600 leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

export default ImpactCard;
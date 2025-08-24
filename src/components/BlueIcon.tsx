// components/BlueIcon.tsx
import React from 'react';

interface BlueIconProps {
  iconSrc: string;
  iconColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BlueIcon: React.FC<BlueIconProps> = ({ 
  iconSrc, 
  iconColor,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 p-2',
    md: 'w-12 h-12 p-3',
    lg: 'w-16 h-16 p-4'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`
      ${iconColor? iconColor: 'bg-blue-100'} rounded-full flex items-center justify-center
      ${sizeClasses[size]} ${className}
    `}>
      <img 
        src={iconSrc} 
        alt="Icon"
        className={`${iconSizes[size]} object-contain`}
      />
    </div>
  );
};

export default BlueIcon;
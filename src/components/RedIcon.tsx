// components/RedIcon.tsx
import React from 'react';

interface RedIconProps {
  iconSrc: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RedIcon: React.FC<RedIconProps> = ({ 
  iconSrc, 
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
      bg-red-100 rounded-full flex items-center justify-center
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

export default RedIcon;
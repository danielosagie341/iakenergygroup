// components/IconButton.tsx
import React from 'react';

interface IconButtonProps {
  iconSrc: string;
  text: string;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  text,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-4 py-2 bg-gray-200 rounded-md text-sm font-medium text-gray-700
        ${className}
      `}
    >
      <img src={iconSrc} alt=""  />
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
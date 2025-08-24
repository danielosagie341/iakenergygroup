// components/MemberCard.tsx
import React from 'react';

interface MemberCardProps {
  name: string;
  position: string;
  company: string;
  imageSrc: string;
  countryFlag?: string;
  className?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  position,
  company,
  imageSrc,
  countryFlag,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt={`${name} - ${position}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Member Info */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h3 className="font-semibold text-lg text-gray-900 leading-tight">
          {name}
        </h3>
        
        {/* Position */}
        <p className="text-sm text-gray-600 font-medium">
          {position}
        </p>
        
        {/* Company with Flag */}
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">
            {company}
          </p>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country flag"
              className="w-4 h-3 object-cover rounded-sm"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
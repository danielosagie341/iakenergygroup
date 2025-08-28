import React from 'react';

interface StatsCardProps {
  value: string;
  description: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  value,
  description,
  className = ""
}) => {
  return (
    <div className={`text-center p-6 ${className}`}>
      <div className="text-3xl md:text-4xl text-blue-600 mb-3">
        {value}
      </div>
      <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
};

export default StatsCard;
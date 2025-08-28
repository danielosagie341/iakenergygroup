import React from "react";

interface ESGActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'green' | 'blue' | 'orange';
  className?: string;
}

const ESGActionCard: React.FC<ESGActionCardProps> = ({
  icon,
  title,
  description,
  color,
  className = ""
}) => {
  const colorClasses = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    orange: 'text-orange-600'
  };

  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className={`flex-shrink-0 ${colorClasses[color]} mt-1`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className={`text-lg font-semibold mb-2 ${colorClasses[color]}`}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ESGActionCard;
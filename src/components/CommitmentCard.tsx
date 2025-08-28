import React from "react";

interface CommitmentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const CommitmentCard: React.FC<CommitmentCardProps> = ({
  icon,
  title,
  description,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default CommitmentCard;
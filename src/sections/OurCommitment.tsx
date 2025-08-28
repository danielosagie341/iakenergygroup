import React from "react";
import CommitmentCard from "../components/CommitmentCard";

const OurCommitment: React.FC = () => {
  // Using placeholder truck icons for now - replace with your actual icons
  const TruckIcon = () => (
    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between space-x-8">
          <CommitmentCard
            icon={<TruckIcon />}
            title="Environment"
            description="Reducing emissions & promoting clean energy."
            className="flex-1"
          />
          
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <CommitmentCard
            icon={<TruckIcon />}
            title="People"
            description="Safety and community development."
            className="flex-1"
          />

          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <CommitmentCard
            icon={<TruckIcon />}
            title="Innovation"
            description="Investing in renewables & efficiency"
            className="flex-1"
          />
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-6">
          <CommitmentCard
            icon={<TruckIcon />}
            title="Environment"
            description="Reducing emissions & promoting clean energy."
          />
          
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          <CommitmentCard
            icon={<TruckIcon />}
            title="People"
            description="Safety and community development."
          />

          <div className="flex justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          <CommitmentCard
            icon={<TruckIcon />}
            title="Innovation"
            description="Investing in renewables & efficiency"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
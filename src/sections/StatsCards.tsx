import React from "react";
import StatsCard from "../components/StatsCard";

const StatsCards: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:divide-x md:divide-gray-300">
          <StatsCard
            value="1.2 GW"
            description="renewable + thermal capacity."
          />
          <StatsCard
            value="25+"
            description="Community Program supported."
          />
          <StatsCard
            value="ISO"
            description="14001 & 45001 certified."
          />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          <div className="shadow-md rounded-lg">
            <StatsCard
              value="1.2 GW"
              description="renewable + thermal capacity."
            />
          </div>
          <div className="shadow-md rounded-lg">
            <StatsCard
              value="ISO"
              description="14001 & 45001 certified."
            />
          </div>
          <div className="shadow-md rounded-lg">
            <StatsCard
              value="25+"
              description="Community Program supported."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
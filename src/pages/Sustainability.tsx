import React from 'react';
import SustainabilityHero from '../sections/SustainabilityHero';
import OurCommitment from '../sections/OurCommitment';
import ESGInAction from '../sections/ESGInAction';
import StatsCards from '../sections/StatsCards';

const Sustainability: React.FC = () => {
  return (
    <div>
      <SustainabilityHero />
      <OurCommitment />
      <ESGInAction />
      <StatsCards />
    </div>
  );
};

export default Sustainability;

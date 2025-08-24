import React from 'react';
import Hero from '../sections/Hero';
import HeroCarousel from '../sections/HeroCarousel';
import ServicesWeOffer from '../sections/ServiceWeOffer';
import WhoWeAre from '../sections/WhoAreWe';
import OurProvenImpact from '../sections/OurProvenImpact';
import OurProjects from '../sections/OurProjects';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HeroCarousel />
      <ServicesWeOffer />
      <WhoWeAre />
      <OurProvenImpact />
      <OurProjects />
    </>
  );
};

export default Home;

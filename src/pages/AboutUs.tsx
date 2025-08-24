import React from 'react';
import AboutUsHero from '../sections/AboutUsHero';
import MissionSection from '../sections/MissionSection';
import VisionSection from '../sections/VisionSection';
import MapSection from '../sections/MapSection';
import InvestorMemberSection from '../sections/InvestorMemberSection';
import GallerySection from '../sections/GallerySection';

const AboutUs: React.FC = () => {
  return (
    <>
        <AboutUsHero />
        <MissionSection />
        <VisionSection />
        <GallerySection />
        <MapSection />
        <InvestorMemberSection />
    </>
  );
};

export default AboutUs;

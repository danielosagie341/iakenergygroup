import React from 'react';
import ContactHero from '../sections/ContactHero';
import ContactDetailSection from '../sections/ContactDetailSection';
import GeneralInquiries from '../sections/GeneralInquiries';

const Contact: React.FC = () => {
  return (
    <>
      <ContactHero />
      <ContactDetailSection />
      <GeneralInquiries />
    </>
  );
};

export default Contact;

// sections/InvestorMemberSection.tsx
import React from 'react';
import Members from '../components/Members';
import MemberImg from '../assets/images/members.svg';

interface InvestorMemberSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const InvestorMemberSection: React.FC<InvestorMemberSectionProps> = ({
  title = "Our Investor Members",
  subtitle = "What Are The Member's Key Achievements Or Contributions",
  className = ""
}) => {
  const investorMembers = [
    {
      id: 'chinedu-okafor',
      name: 'Chinedu Okafor',
      position: 'Chairman',
      company: 'Nigeria',
      imageSrc: MemberImg, // You'll need individual member images
      countryFlag: 'nigeria-flag' // Path to Nigeria flag
    },
    {
      id: 'kwame-mensah',
      name: 'Kwame Mensah',
      position: 'CEO',
      company: 'Ghana',
      imageSrc: MemberImg,
      countryFlag: 'ghana-flag' // Path to Ghana flag
    },
    {
      id: 'thabo-dlamini',
      name: 'Thabo Dlamini',
      position: 'COO',
      company: 'South Africa',
      imageSrc: MemberImg,
      countryFlag: 'south-africa-flag' // Path to South Africa flag
    },
    {
      id: 'amina-yusuf',
      name: 'Amina Yusuf',
      position: 'CTO',
      company: 'Egypt',
      imageSrc: MemberImg,
      countryFlag: 'egypt-flag' // Path to Egypt flag
    }
  ];

  return (
    <section className={`py-16 md:py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Members Component */}
        <Members 
          members={investorMembers}
          title={title}
          subtitle={subtitle}
        />

        {/* Optional Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Be part of Africa's energy transformation. Connect with our leadership team to explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Contact Leadership
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default InvestorMemberSection;
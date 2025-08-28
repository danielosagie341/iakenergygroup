import React from "react";
import ESGActionCard from "../components/ESGActionCard";
import adzan from "../assets/images/adzan.svg";
import environmentalIcon from "../assets/images/environmentalIcon.svg";
import userMultiple from "../assets/images/userMultiple.svg";
import esgImageTwo from "../assets/images/esgImageTwo.svg";
import esgImageOne from "../assets/images/esgImageOne.svg";

const ESGInAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              ESG in Action
            </h2>
            
            <div className="space-y-12">
              <ESGActionCard
                icon={<img src={environmentalIcon} alt="" className="" />}
                title="Environment (E)"
                description="We reduce carbon footprint through gas-to-power, renewables, and responsible drilling."
                color="green"
              />
              
              {/* Vertical line separator */}
              <div className="border-l-2 border-gray-200 h-24 ml-10"></div>
              
              <ESGActionCard
                icon={<img src={userMultiple} alt="" className="" />}
                title="Social (S)"
                description="We empower communities with jobs, training, and safe operations."
                color="blue"
              />
              
              {/* Vertical line separator */}
              <div className="border-l-2 border-gray-200 h-24 ml-10"></div>
              
              <ESGActionCard
                icon={<img src={adzan} alt="" className="" />}
                title="Governance (G)"
                description="We operate transparently, meeting ISO standards and global compliance."
                color="orange"
              />
            </div>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="relative lg:h-[600px]">
            {/* Top image - Wind turbines */}
            <div className="lg:absolute top-0 left-0 rounded-lg overflow-hidden z-20">
              <img 
                src={esgImageTwo} 
                alt="Wind turbines and renewable energy"
                className="w-full h-full"
              />
            </div>
            
            {/* Middle image - Operations */}
            <div className="lg:absolute top-16 right-8 md:top-20 md:right-12 lg:top-24 lg:right-0 rounded-lg overflow-hidden z-10">
              <img 
                src={esgImageOne} 
                alt="Industrial operations and drilling"
                className="w-full h-full"
              />
            </div>
            
            {/* Bottom image - Training center */}
            <div className="lg:absolute -bottom-10 left-5 rounded-lg overflow-hidden z-30">
              <img 
                src={esgImageTwo}
                alt="Training and community development"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ESGInAction;
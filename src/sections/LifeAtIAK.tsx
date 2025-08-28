import React from "react";
import lifeAtIakImageOne from "../assets/images/lifeAtIakImageOne.svg";
import lifeAtIakImageTwo from "../assets/images/lifeAtIakImageTwo.svg";
import lifeAtIakImageThree from "../assets/images/lifeAtIakImageThree.svg";

const LifeAtIAK: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Life at IAK
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="flex space-x-6">
          <div className="flex-3 aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with lifeAtIakImageOne */}
           <img src={lifeAtIakImageOne} className="object-cover" alt="Life At IAK" />
          </div>
          <div className="flex-2 aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with lifeAtIakImageTwo */}
            <img src={lifeAtIakImageTwo} className="object-cover" alt="Life At IAK" />
          </div>
          <div className="flex-1 aspect-[4/3] bg-gray-200 hidden lg:flex rounded-lg overflow-hidden">
            {/* Replace with lifeAtIakImageThree */}
            <img src={lifeAtIakImageThree} className="object-cover scale-y-[140%]" alt="Life At IAK" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LifeAtIAK;
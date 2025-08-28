import React from "react";
import MapEmbed from "../components/MapEmbed";

const GeneralInquiries: React.FC = () => {

  const officeAddress = "18 Mississippi Street, Maitama, Abuja, Nigeria"
  const officeLat = 9.0916585216244;
  const officeLng = 7.482299444204535;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              General Inquiries
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              For all general questions, comments, or feedback, please use the form below.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical bg-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Right Column - Map */}
          <div className="lg:pl-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with detailMap (rotated 90 degrees clockwise) */}
              <MapEmbed lat={officeLat} lng={officeLng} address={officeAddress} height="600px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInquiries;
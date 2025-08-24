// components/Footer.tsx
import React from 'react';
import logoSrc from "../assets/logo.svg";
import instagramSrc from "../assets/images/instagramLogo.svg";
import linkedInSrc from "../assets/images/linkedinLogo.svg";
import twitterSrc from "../assets/images/twitterLogo.svg";
import IAKBackgroundLogo from "../assets/images/IAKbackgroundLogo.svg";


const Footer: React.FC = ({}) => {
  return (
    <footer id="footer" className="bg-blue-50 pt-16 pb-8 relative">
        <div className='absolute lg:top-0 left-0 lg:w-full scale-[75%] lg:h-full lg:px-44 rotate-90 lg:rotate-0'>
            <img className=' w-full h-full object-fit' src={IAKBackgroundLogo} alt="logo" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 lg:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <img src={logoSrc} alt="IAK Energy Group" className="h-10 w-auto mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Join us as we build the future of Africa's energy landscape—
              illuminating pathways to prosperity and resilience for 
              generations to come.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src={linkedInSrc} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src={instagramSrc} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src={twitterSrc} alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Project Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Project Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Flagship Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Sustainability & ESG</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Innovation & Technology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Phone: 234 XXX XXX XXXX</p>
              <p>
                Email:{' '}
                <a href="mailto:info@iakenergygroup.com" className="text-red-600 hover:underline">
                  info@iakenergygroup.com
                </a>
              </p>
              <p>
                Address: 18 Mississippi Street, Maitama, Abuja, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logoSrc} alt="IAK Energy Group" className="h-8 w-auto mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Join us as we build the future of Africa's energy landscape—
              illuminating pathways to prosperity and resilience for 
              generations to come.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src={linkedInSrc} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src={instagramSrc} alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src={twitterSrc} alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-3">Project Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Flagship Projects</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Sustainability & ESG</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Innovation & Technology</a></li>
                <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors text-sm">Case Studies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-3">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Phone: 234 XXX XXX XXXX</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@iakenergygroup.com" className="text-red-600 hover:underline">
                    info@iakenergygroup.com
                  </a>
                </p>
                <p>
                  Address: 18 Mississippi Street, Maitama, Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 IAK Energy Group. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 text-sm">
              <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>
              <a href="#" className="text-red-600 hover:underline">Terms of Service</a>
              <a href="#" className="text-red-600 hover:underline">Cookies Setting</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
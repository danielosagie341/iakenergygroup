// sections/GallerySection.tsx
import React from 'react';
import Gallery from '../components/Gallery';
import galleriesImageOne from '../assets/images/galleriesImageOne.svg';
import galleriesImageTwo from '../assets/images/galleriesImageTwo.svg';
import galleriesImageThree from '../assets/images/galleriesImageThree.svg';

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title = "🖼️ Galleries",
  subtitle = "Check out how IAK Energy Group is lighting up Africa with their power solutions!",
  className = ""
}) => {
  const galleryImages = [
    {
      id: 'gallery-1',
      src: galleriesImageOne,
      alt: 'IAK Energy Group offshore drilling operations',
      caption: 'Guiding Values behind Our Dedication to powering Africa with Sustainable Energy',
      rowSpan: 'md:row-span-2',
      colSpan: 'md:col-span-1'
    },
    {
      id: 'gallery-2',
      src: galleriesImageTwo,
      alt: 'Energy infrastructure and operations',
      caption: 'Discover the incredible impact of our energy services through inspiring success stories',
      rowSpan: 'md:row-span-1',
      colSpan: 'md:col-span-1'
    },
    {
      id: 'gallery-3',
      src: galleriesImageThree,
      alt: 'Power generation facilities',
      caption: 'Showcasing how we\'ve transformed communities across Africa',
      rowSpan: 'md:row-span-1',
      colSpan: 'md:col-span-1'
    },
  ];

  return (
    <section className={`py-16 md:py-20 bg-blue-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          {/* Icon */}
          {/* <div className="flex justify-start mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div> */}
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          
          <div className='flex flex-wrap items-center'>
            {/* Subtitle */}
            <p className="text-gray-600 text-base md:text-lg my-5 lg:pr-20 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* Additional Text */}
            <p className="text-gray-600 text-sm md:text-base my-5 lg:pr-20 max-w-3xl">
              Discover the incredible impact of our energy services through inspiring success stories that showcase how we've transformed communities across Africa.
            </p>
          </div>
        </div>

        {/* Gallery Component */}
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
};

export default GallerySection;
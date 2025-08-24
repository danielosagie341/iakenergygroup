// components/Gallery.tsx
import React, { useState } from 'react';
import GalleryCard from './GalleryCard';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  colSpan?: string;
  rowSpan?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-8 text-center md:text-left">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-rows-2 gap-6">
        {images.map((image) => (
          <GalleryCard
            key={image.id}
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            colSpan={image.colSpan}
            rowSpan={image.rowSpan}
          />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image) => (
              <div key={image.id} className="w-full flex-shrink-0">
                <GalleryCard
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
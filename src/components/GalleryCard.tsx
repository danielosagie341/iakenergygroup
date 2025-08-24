// components/GalleryCard.tsx
import React from 'react';

interface GalleryCardProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ 
  src, 
  alt, 
  caption, 
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1"
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${colSpan} ${rowSpan} ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden h-full w-full">
        <img
          src={src}
          alt={alt}
          className="w-full min-h-[300px] object-cover md:scale-[120%] group-hover:scale-[130%] transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
        
        {/* Caption Overlay (if caption exists) */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-medium">
              {caption}
            </p>
          </div>
        )}
      </div>
      
      {/* Static Caption (below image) */}
      {caption && (
        <div className="p-3 min-h-[100px] bg-white md:hidden">
          <p className="text-gray-700 text-sm">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
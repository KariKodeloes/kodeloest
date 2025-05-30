
import React, { useState } from 'react';
import { Button } from './ui/button';

interface ImageCarouselListProps {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const ImageCarouselList: React.FC<ImageCarouselListProps> = ({ images, title, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={title}
        className="w-full h-full object-cover cursor-pointer"
        loading="lazy"
        onClick={() => onImageClick(currentImageIndex)}
      />
      
      {/* Image Navigation */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
          >
            <span className="material-icon">chevron_left</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
          >
            <span className="material-icon">chevron_right</span>
          </Button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarouselList;


import React, { useState } from 'react';
import { Button } from './ui/button';
import OptimizedMediaDisplay from './OptimizedMediaDisplay';
import { getAllMedia, isVideoFile } from '../utils/mediaUtils';

interface ImageCarouselProps {
  images: string[];
  videos?: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, videos = [], title, onImageClick }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const allMedia = getAllMedia({ images, videos });

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allMedia.length > 1) {
      setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length);
    }
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allMedia.length > 1) {
      setCurrentMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
    }
  };

  const currentMedia = allMedia[currentMediaIndex];
  const isVideo = isVideoFile(currentMedia);

  return (
    <div className="relative aspect-square overflow-hidden">
      <OptimizedMediaDisplay
        src={currentMedia}
        alt={title}
        className={`w-full h-full ${!isVideo ? 'hover:scale-105 transition-transform duration-300' : ''}`}
        onClick={() => onImageClick(currentMediaIndex)}
        isVideo={isVideo}
        controls={isVideo}
        muted={true}
        loop={true}
        context="thumbnail"
        loading="lazy"
        objectFit="cover"
      />
      
      {/* Media Navigation */}
      {allMedia.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={prevMedia}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="material-icon">chevron_left</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextMedia}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <span className="material-icon">chevron_right</span>
          </Button>
          
          {/* Media Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {allMedia.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentMediaIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;

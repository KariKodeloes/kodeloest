
import React, { useState } from 'react';
import { Button } from './ui/button';
import MediaDisplay from './MediaDisplay';
import { getAllMedia, isVideoFile } from '../utils/mediaUtils';

interface ImageCarouselListProps {
  images: string[];
  videos?: string[];
  title: string;
  onImageClick: (index: number) => void;
}

const ImageCarouselList: React.FC<ImageCarouselListProps> = ({ images, videos = [], title, onImageClick }) => {
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
    <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
      <MediaDisplay
        src={currentMedia}
        alt={title}
        className="w-full h-full object-cover"
        onClick={() => onImageClick(currentMediaIndex)}
        isVideo={isVideo}
        controls={isVideo}
        muted={true}
        loop={true}
      />
      
      {/* Media Navigation */}
      {allMedia.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={prevMedia}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
          >
            <span className="material-icon">chevron_left</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextMedia}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
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

export default ImageCarouselList;

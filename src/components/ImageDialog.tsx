
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import OptimizedMediaDisplay from './OptimizedMediaDisplay';
import { getAllMedia, isVideoFile } from '../utils/mediaUtils';

interface ImageDialogProps {
  images: string[];
  videos?: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  title?: string;
  altText?: string;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ 
  images, 
  videos = [],
  isOpen, 
  onClose, 
  initialIndex = 0,
  title,
  altText
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const allMedia = getAllMedia({ images, videos });

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextMedia();
    if (e.key === 'ArrowLeft') prevMedia();
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const currentMedia = allMedia[currentIndex];
  const isVideo = currentMedia ? isVideoFile(currentMedia) : false;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="!max-w-none !w-full !h-full !p-0 !border-0 !bg-black sm:!max-w-[95vw] sm:!max-h-[95vh] sm:!p-2"
        style={{ 
          backgroundColor: '#000000 !important',
          '--background': '0 0% 0%'
        } as React.CSSProperties}
      >
        {/* Hidden accessibility elements */}
        <DialogTitle className="sr-only">
          {title || `Media ${currentIndex + 1} of ${allMedia.length}`}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {altText || 'Use arrow keys to navigate between media items. Press escape to close.'}
        </DialogDescription>
        
        <div 
          className="relative w-full min-h-screen sm:min-h-[95vh] flex flex-col items-center justify-center p-4 sm:p-6 !bg-black"
          style={{ backgroundColor: '#000000' }}
        >
          {/* Close button - Always visible with blue icon */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 z-10 border border-white/20 shadow-lg hover:opacity-80"
            style={{ 
              touchAction: 'manipulation',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#066298 !important'
            }}
          >
            <X 
              className="h-4 w-4" 
              style={{ color: '#066298 !important' }}
              color="#066298"
            />
          </Button>

          {/* Navigation buttons - Always visible with blue icons */}
          {allMedia.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevMedia}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 border border-white/20 shadow-lg hover:opacity-80"
                style={{ 
                  touchAction: 'manipulation',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#066298 !important'
                }}
              >
                <ChevronLeft 
                  className="h-6 w-6" 
                  style={{ color: '#066298 !important' }}
                  color="#066298"
                />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextMedia}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 border border-white/20 shadow-lg hover:opacity-80"
                style={{ 
                  touchAction: 'manipulation',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#066298 !important'
                }}
              >
                <ChevronRight 
                  className="h-6 w-6" 
                  style={{ color: '#066298 !important' }}
                  color="#066298"
                />
              </Button>
            </>
          )}

          {/* Media container with proper flex sizing */}
          <div className="flex-1 flex items-center justify-center w-full max-w-full">
            {currentMedia && (
              <OptimizedMediaDisplay
                src={currentMedia}
                alt={title || `Media ${currentIndex + 1}`}
                altText={altText}
                className="max-w-[calc(100vw-4rem)] max-h-[calc(100vh-12rem)] sm:max-w-[calc(95vw-8rem)] sm:max-h-[calc(95vh-16rem)] md:max-w-[calc(95vw-6rem)] md:max-h-[calc(95vh-12rem)]"
                isVideo={isVideo}
                controls={isVideo}
                autoPlay={isVideo}
                muted={false}
                context="large"
                loading="eager"
                objectFit="contain"
              />
            )}
          </div>

          {/* Bottom UI elements */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center space-y-2 pb-4">
            {/* Media indicators */}
            {allMedia.length > 1 && (
              <div className="flex space-x-2">
                {allMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2 h-2 rounded-full transition-colors border border-white/20"
                    style={{ 
                      backgroundColor: index === currentIndex ? '#066298' : 'rgba(255, 255, 255, 0.7)',
                      touchAction: 'manipulation'
                    }}
                  />
                ))}
              </div>
            )}

            {/* Media counter */}
            {allMedia.length > 1 && (
              <div 
                className="px-3 py-1 rounded-full text-sm font-medium border border-white/20"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#066298'
                }}
              >
                {currentIndex + 1} / {allMedia.length}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;

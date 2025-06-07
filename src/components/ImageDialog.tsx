import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
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
}

const ImageDialog: React.FC<ImageDialogProps> = ({ 
  images, 
  videos = [],
  isOpen, 
  onClose, 
  initialIndex = 0,
  title 
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
      <DialogContent className="max-w-none w-full h-full p-0 bg-black border-0 sm:max-w-[95vw] sm:max-h-[95vh] sm:p-2">
        <div className="relative w-full min-h-screen sm:min-h-[95vh] flex flex-col items-center justify-center p-4 sm:p-6">
          {/* Close button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 z-10 bg-[rgb(var(--dialog-nav-blue))] text-white hover:bg-[rgb(var(--dialog-nav-blue))]/80"
            style={{ touchAction: 'manipulation' }}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Navigation buttons */}
          {allMedia.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevMedia}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[rgb(var(--dialog-nav-blue))] text-white hover:bg-[rgb(var(--dialog-nav-blue))]/80"
                style={{ touchAction: 'manipulation' }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextMedia}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[rgb(var(--dialog-nav-blue))] text-white hover:bg-[rgb(var(--dialog-nav-blue))]/80"
                style={{ touchAction: 'manipulation' }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Media container with proper flex sizing */}
          <div className="flex-1 flex items-center justify-center w-full max-w-full">
            {currentMedia && (
              <OptimizedMediaDisplay
                src={currentMedia}
                alt={title || `Media ${currentIndex + 1}`}
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
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[rgb(var(--dialog-nav-blue))]' : 'bg-white/80'
                    }`}
                    style={{ touchAction: 'manipulation' }}
                  />
                ))}
              </div>
            )}

            {/* Media counter */}
            {allMedia.length > 1 && (
              <div className="bg-[rgb(var(--dialog-nav-blue))] text-white px-3 py-1 rounded-full text-sm font-medium">
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

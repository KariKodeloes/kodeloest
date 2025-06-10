
import React, { useState, useEffect, useRef } from 'react';
import { getOptimalImageSize } from '../utils/imageCompression';

interface ImageSizes {
  thumbnail: string;
  medium: string;
  large: string;
}

interface OptimizedMediaDisplayProps {
  src: string;
  imageSizes?: ImageSizes;
  alt: string;
  className?: string;
  onClick?: () => void;
  isVideo?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  context?: 'thumbnail' | 'medium' | 'large';
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain';
  altText?: string;
}

const OptimizedMediaDisplay: React.FC<OptimizedMediaDisplayProps> = ({
  src,
  imageSizes,
  alt,
  className = '',
  onClick,
  isVideo = false,
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  context = 'medium',
  loading = 'lazy',
  objectFit = 'cover',
  altText
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showTapHint, setShowTapHint] = useState(false);
  const lastTapTime = useRef<number>(0);
  const tapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const optimalSrc = getOptimalImageSize(context, imageSizes, src);

  // Double-click handler for desktop
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }
  };

  // Touch handlers for mobile double-tap
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!onClick) return;
    
    e.preventDefault();
    const currentTime = Date.now();
    const timeDiff = currentTime - lastTapTime.current;
    
    if (timeDiff < 300 && timeDiff > 0) {
      // Double tap detected
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
        tapTimeoutRef.current = null;
      }
      setShowTapHint(false);
      onClick();
    } else {
      // First tap - show hint and set timeout
      lastTapTime.current = currentTime;
      setShowTapHint(true);
      
      // Clear hint after delay
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }
      tapTimeoutRef.current = setTimeout(() => {
        setShowTapHint(false);
      }, 1500);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (tapTimeoutRef.current) {
        clearTimeout(tapTimeoutRef.current);
      }
    };
  }, []);

  const finalAltText = altText || alt;

  if (isVideo) {
    return (
      <div className="relative">
        <video
          src={src}
          className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
          onDoubleClick={handleDoubleClick}
          onTouchStart={handleTouchStart}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload="metadata"
          style={{ userSelect: 'none', touchAction: 'manipulation' }}
          title={altText || undefined}
        >
          <source src={src} />
          Din nettleser støtter ikke video-elementet.
        </video>
        
        {showTapHint && onClick && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/80 px-3 py-2 rounded-lg text-sm animate-fade-in" style={{ color: 'white' }}>
              Dobbelttrykk for å åpne
            </div>
          </div>
        )}
      </div>
    );
  }

  // For contain mode (dialog), render image directly without wrapper
  if (objectFit === 'contain') {
    return (
      <div className="relative">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <img
          src={optimalSrc}
          alt={finalAltText}
          className={`${className} ${onClick ? 'cursor-pointer' : ''} ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 object-contain`}
          onDoubleClick={handleDoubleClick}
          onTouchStart={handleTouchStart}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={loading}
          style={{ userSelect: 'none', touchAction: 'manipulation' }}
          draggable={false}
          title={altText || undefined}
        />
        
        {imageError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Kunne ikke laste bildet</span>
          </div>
        )}

        {showTapHint && onClick && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/80 px-3 py-2 rounded-lg text-sm animate-fade-in" style={{ color: 'white' }}>
              Dobbelttrykk for å åpne
            </div>
          </div>
        )}
      </div>
    );
  }

  // For cover mode (project cards), use wrapper for proper aspect ratio
  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={optimalSrc}
        alt={finalAltText}
        className={`${onClick ? 'cursor-pointer' : ''} ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300 w-full h-full object-cover`}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loading}
        style={{ userSelect: 'none', touchAction: 'manipulation' }}
        draggable={false}
        title={altText || undefined}
      />
      
      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Kunne ikke laste bildet</span>
        </div>
      )}

      {showTapHint && onClick && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/80 px-3 py-2 rounded-lg text-sm animate-fade-in" style={{ color: 'white' }}>
            Dobbelttrykk for å åpne
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedMediaDisplay;

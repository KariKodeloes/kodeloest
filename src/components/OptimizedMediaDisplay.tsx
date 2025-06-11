
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
  onDoubleClick?: () => void;
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
  onDoubleClick,
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
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const clickCountRef = useRef(0);

  const optimalSrc = getOptimalImageSize(context, imageSizes, src);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If we have a double-click handler, implement double-click logic
    if (onDoubleClick) {
      clickCountRef.current += 1;

      if (clickCountRef.current === 1) {
        // Start timer for double-click detection
        clickTimeoutRef.current = setTimeout(() => {
          // Single click - call onClick if it exists
          if (onClick) {
            onClick();
          }
          clickCountRef.current = 0;
        }, 300);
      } else if (clickCountRef.current === 2) {
        // Double click detected
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
          clickTimeoutRef.current = null;
        }
        onDoubleClick();
        clickCountRef.current = 0;
      }
    } else if (onClick) {
      // No double-click handler, just use regular onClick
      onClick();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (onDoubleClick || onClick) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (onDoubleClick || onClick) {
      e.preventDefault();
      e.stopPropagation();
      
      // For touch devices, treat tap as click
      handleClick(e as any);
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
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // Use altText if provided, otherwise fall back to alt
  const finalAltText = altText || alt;

  if (isVideo) {
    return (
      <video
        src={src}
        className={`${className} ${(onClick || onDoubleClick) ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
    );
  }

  // For contain mode (dialog), render image directly without wrapper
  if (objectFit === 'contain') {
    return (
      <>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <img
          src={optimalSrc}
          alt={finalAltText}
          className={`${className} ${(onClick || onDoubleClick) ? 'cursor-pointer' : ''} ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 object-contain`}
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
      </>
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
        className={`${(onClick || onDoubleClick) ? 'cursor-pointer' : ''} ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300 w-full h-full object-cover`}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
    </div>
  );
};

export default OptimizedMediaDisplay;

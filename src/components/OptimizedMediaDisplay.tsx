
import React, { useState, useEffect } from 'react';
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
  loading = 'lazy'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const optimalSrc = getOptimalImageSize(context, imageSizes, src);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (onClick) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
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

  if (isVideo) {
    return (
      <video
        src={src}
        className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
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
      >
        <source src={src} />
        Din nettleser støtter ikke video-elementet.
      </video>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={optimalSrc}
        alt={alt}
        className={`${onClick ? 'cursor-pointer' : ''} ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300 max-w-full max-h-full object-contain`}
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

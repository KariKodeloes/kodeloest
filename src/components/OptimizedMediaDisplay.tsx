
import React from 'react';
import { getOptimalImageSize } from '../utils/imageCompression';

interface OptimizedMediaDisplayProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  isVideo?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  altText?: string;
  context?: 'thumbnail' | 'medium' | 'large';
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill';
}

const OptimizedMediaDisplay: React.FC<OptimizedMediaDisplayProps> = ({
  src,
  alt,
  className = '',
  onClick,
  isVideo = false,
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  altText,
  context = 'medium',
  loading = 'lazy',
  objectFit = 'cover'
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent right-click context menu
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault(); // Prevent drag and drop
  };

  // Use altText if provided, otherwise fall back to alt
  const finalAltText = altText || alt;

  // For data URLs or single URLs, use as-is
  // For future enhancement with responsive images, this could use getOptimalImageSize
  const optimizedSrc = src;

  if (isVideo) {
    return (
      <video
        src={optimizedSrc}
        className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        preload="metadata"
        style={{ 
          userSelect: 'none',
          objectFit: objectFit
        }}
        title={altText || undefined}
      >
        <source src={optimizedSrc} />
        Din nettleser støtter ikke video-elementet.
      </video>
    );
  }

  return (
    <img
      src={optimizedSrc}
      alt={finalAltText}
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      loading={loading}
      style={{ 
        userSelect: 'none',
        objectFit: objectFit
      }}
      draggable={false}
      title={altText || undefined}
      onError={(e) => {
        console.error('Failed to load optimized image:', src);
      }}
    />
  );
};

export default OptimizedMediaDisplay;

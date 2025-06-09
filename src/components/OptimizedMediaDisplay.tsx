
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

  // Improved URL validation to handle both data URLs and lovable-uploads paths
  const isValidUrl = (url: string) => {
    return url.startsWith('data:image/') ||
           url.startsWith('/lovable-uploads/') || 
           url.startsWith('http://') || 
           url.startsWith('https://') ||
           url.startsWith('./') ||
           url.startsWith('../');
  };

  // Use source as-is for now - optimization can be enhanced later
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

  // Check if URL is valid before rendering
  if (!isValidUrl(optimizedSrc)) {
    return (
      <div 
        className={`${className} bg-gray-100 flex items-center justify-center text-gray-400`}
        style={{ objectFit: objectFit }}
      >
        <div className="text-center text-sm">
          <span>Ugyldig bilde-URL</span>
        </div>
      </div>
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
        // Don't replace with placeholder, let the parent component handle fallback
      }}
    />
  );
};

export default OptimizedMediaDisplay;

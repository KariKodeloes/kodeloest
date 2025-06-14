
import React from 'react';

interface MediaDisplayProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  isVideo?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  altText?: string; // New prop for admin-set alt text
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({
  src,
  alt,
  className = '',
  onClick,
  isVideo = false,
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  altText
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

  if (isVideo) {
    return (
      <video
        src={src}
        className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        preload="metadata"
        style={{ userSelect: 'none' }}
        title={altText || undefined}
      >
        <source src={src} />
        Din nettleser støtter ikke video-elementet.
      </video>
    );
  }

  return (
    <img
      src={src}
      alt={finalAltText}
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      loading="lazy"
      style={{ userSelect: 'none' }}
      draggable={false}
      title={altText || undefined}
    />
  );
};

export default MediaDisplay;

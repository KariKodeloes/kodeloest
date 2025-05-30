
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
  loop = false
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (isVideo) {
    return (
      <video
        src={src}
        className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        preload="metadata"
      >
        <source src={src} />
        Din nettleser støtter ikke video-elementet.
      </video>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      loading="lazy"
    />
  );
};

export default MediaDisplay;

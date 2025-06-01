
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  isHomePage: boolean;
}

const SocialIcons = ({ isHomePage }: SocialIconsProps) => {
  if (isHomePage) return null; // Home page has its own social icons

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#000000';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'rgb(99, 68, 28)';
  };

  return (
    <>
      <a
        href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        aria-label="Følg meg på LinkedIn"
        style={{ color: 'rgb(99, 68, 28)' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Linkedin size={32} />
      </a>
      <a
        href="https://instagram.com/karis_pensel"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors"
        aria-label="Følg meg på Instagram"
        style={{ color: 'rgb(99, 68, 28)' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Instagram size={32} />
      </a>
    </>
  );
};

export default SocialIcons;

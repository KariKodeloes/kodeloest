
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  isHomePage: boolean;
}

const SocialIcons = ({ isHomePage }: SocialIconsProps) => {
  if (isHomePage) return null; // Home page has its own social icons

  return (
    <>
      <a
        href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground transition-colors"
        aria-label="Følg meg på LinkedIn"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#000000';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = '';
        }}
      >
        <Linkedin size={32} />
      </a>
      <a
        href="https://instagram.com/karis_pensel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground transition-colors"
        aria-label="Følg meg på Instagram"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#000000';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = '';
        }}
      >
        <Instagram size={32} />
      </a>
    </>
  );
};

export default SocialIcons;

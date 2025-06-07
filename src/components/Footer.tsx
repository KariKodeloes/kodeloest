
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.opacity = '0.8';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.opacity = '1';
  };

  return (
    <footer 
      className="relative mt-auto bg-cover bg-center bg-no-repeat text-white py-8"
      style={{
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/9b63042b-7977-4895-a9d2-c453310e5828.png)',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        minHeight: '100px'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Social media icons */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity"
              aria-label="Følg meg på LinkedIn"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://instagram.com/karis_pensel"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity"
              aria-label="Følg meg på Instagram"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Instagram size={32} />
            </a>
          </div>

          {/* Copyright text */}
          <p 
            className="font-roboto font-light leading-relaxed text-base"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            © Kari Walle Mikkelsen 2025. Alle bilder og kunstverk på sidene er beskyttet av åndsverkloven og kan ikke brukes uten{' '}
            <a 
              href="mailto:kari.fm@hotmail.com" 
              className="underline hover:opacity-80 transition-opacity footer-link"
            >
              skriftlig tillatelse
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';

interface HomePageHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const HomePageHeader = ({ isMenuOpen, setIsMenuOpen }: HomePageHeaderProps) => {
  return (
    <div className="text-center pt-8 pb-2 relative">
      {/* Mobile Menu Button positioned aligned with KODELØST for home page */}
      <button
        className="md:hidden absolute top-8 left-0 text-white transition-colors rounded p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Åpne meny"
        style={{ color: '#FFFFFF' }}
        onMouseEnter={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          const button = e.currentTarget;
          button.style.backgroundColor = 'transparent';
        }}
      >
        {isMenuOpen ? (
          <X size={32} style={{ color: '#FFFFFF' }} />
        ) : (
          <Menu size={32} style={{ color: '#FFFFFF' }} />
        )}
      </button>
      
      <h1 className="text-white font-oswald font-medium text-4xl" style={{ color: '#FFFFFF' }}>KODELØST</h1>
      
      {/* Social Icons positioned aligned with KODELØST */}
      <div className="absolute top-8 right-0 flex items-center space-x-3">
        <a
          href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors hover:bg-black/20 p-1 rounded"
          aria-label="Følg meg på LinkedIn"
          style={{ color: '#FFFFFF' }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = '#FAE6CC';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = '#FFFFFF';
          }}
        >
          <Linkedin size={32} style={{ color: '#FFFFFF' }} />
        </a>
        <a
          href="https://instagram.com/karis_pensel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition-colors hover:bg-black/20 p-1 rounded"
          aria-label="Følg meg på Instagram"
          style={{ color: '#FFFFFF' }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = '#FAE6CC';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = '#FFFFFF';
          }}
        >
          <Instagram size={32} style={{ color: '#FFFFFF' }} />
        </a>
      </div>
    </div>
  );
};

export default HomePageHeader;


import React from 'react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

interface HomePageHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const HomePageHeader = ({ isMenuOpen, setIsMenuOpen }: HomePageHeaderProps) => {
  return (
    <div className="text-center pt-8 pb-2 relative">
      {/* Mobile Menu Button positioned aligned with KODELØST for home page */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden absolute top-8 left-0 text-white hover:text-white hover:bg-white/10 p-1 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Åpne meny"
      >
        {isMenuOpen ? (
          <X size={32} className="text-white" style={{ color: '#FFFFFF' }} />
        ) : (
          <Menu size={32} className="text-white" style={{ color: '#FFFFFF' }} />
        )}
      </Button>
      
      <h1 className="text-white font-oswald font-medium text-4xl" style={{ color: '#FFFFFF' }}>KODELØST</h1>
      
      {/* Social Icons positioned aligned with KODELØST */}
      <div className="absolute top-8 right-0 flex items-center space-x-3">
        <a
          href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition-colors"
          aria-label="Følg meg på LinkedIn"
          style={{ color: '#FFFFFF' }}
        >
          <Linkedin size={32} style={{ color: '#FFFFFF' }} />
        </a>
        <a
          href="https://instagram.com/karis_pensel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition-colors"
          aria-label="Følg meg på Instagram"
          style={{ color: '#FFFFFF' }}
        >
          <Instagram size={32} style={{ color: '#FFFFFF' }} />
        </a>
      </div>
    </div>
  );
};

export default HomePageHeader;

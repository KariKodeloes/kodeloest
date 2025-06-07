
import React from 'react';
import { Menu, X } from 'lucide-react';

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
    </div>
  );
};

export default HomePageHeader;

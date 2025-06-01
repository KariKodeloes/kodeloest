
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen, isHomePage }: MobileMenuButtonProps) => {
  const iconSize = isHomePage ? 32 : 32;
  
  console.log('MobileMenuButton - isHomePage:', isHomePage, 'iconSize:', iconSize);
  
  if (isHomePage) {
    return (
      <button
        className="md:hidden mr-2 text-white transition-colors hover:bg-black/20 p-1 rounded"
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
          <X size={iconSize} style={{ color: '#FFFFFF' }} />
        ) : (
          <Menu size={iconSize} style={{ color: '#FFFFFF' }} />
        )}
      </button>
    );
  }
  
  return (
    <button
      className="md:hidden mr-2 text-foreground transition-colors hover:text-black"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
    >
      {isMenuOpen ? (
        <X size={iconSize} />
      ) : (
        <Menu size={iconSize} />
      )}
    </button>
  );
};

export default MobileMenuButton;


import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen, isHomePage }: MobileMenuButtonProps) => {
  const iconSize = 32;
  
  console.log('MobileMenuButton - isHomePage:', isHomePage, 'iconSize:', iconSize);
  
  if (isHomePage) {
    return (
      <button
        className="md:hidden mr-2 text-white transition-colors rounded p-1"
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
      className="md:hidden mr-2 transition-colors hover:bg-gray-100 p-1 rounded"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
      style={{ color: 'rgb(99, 68, 28)' }}
    >
      {isMenuOpen ? (
        <X size={iconSize} style={{ color: 'rgb(99, 68, 28)' }} />
      ) : (
        <Menu size={iconSize} style={{ color: 'rgb(99, 68, 28)' }} />
      )}
    </button>
  );
};

export default MobileMenuButton;

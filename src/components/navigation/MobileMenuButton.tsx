
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
  
  // Sub-page styling with brown color and hover effects
  const brownColor = 'rgb(99, 68, 28)';
  const blackColor = '#000000';
  
  return (
    <button
      className="md:hidden mr-2 transition-colors p-1 rounded"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
      style={{ 
        color: `${brownColor} !important`,
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = `${blackColor} !important`;
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = `${brownColor} !important`;
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {isMenuOpen ? (
        <X size={iconSize} style={{ color: 'inherit' }} />
      ) : (
        <Menu size={iconSize} style={{ color: 'inherit' }} />
      )}
    </button>
  );
};

export default MobileMenuButton;

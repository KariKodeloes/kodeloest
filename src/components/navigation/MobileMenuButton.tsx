
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
        className="md:hidden text-white transition-colors rounded p-1"
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
      className="md:hidden transition-colors p-1 rounded mobile-menu-button w-10 h-10 flex items-center justify-center"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
      style={{ 
        color: brownColor,
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = blackColor;
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = brownColor;
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {isMenuOpen ? (
        <X size={iconSize} className="mobile-menu-icon" />
      ) : (
        <Menu size={iconSize} className="mobile-menu-icon" />
      )}
    </button>
  );
};

export default MobileMenuButton;


import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen, isHomePage }: MobileMenuButtonProps) => {
  const iconSize = isHomePage ? 40 : 32;
  const iconColor = isHomePage ? '#FFFFFF !important' : 'rgb(98, 68, 28) !important';
  
  console.log('MobileMenuButton - isHomePage:', isHomePage, 'iconColor:', iconColor, 'iconSize:', iconSize);
  
  return (
    <button
      className="md:hidden mr-2 p-1 transition-colors"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
      style={{ color: iconColor }}
    >
      {isMenuOpen ? (
        <X size={iconSize} style={{ color: iconColor }} />
      ) : (
        <Menu size={iconSize} style={{ color: iconColor }} />
      )}
    </button>
  );
};

export default MobileMenuButton;


import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen, isHomePage }: MobileMenuButtonProps) => {
  const iconColor = isHomePage ? '#FFFFFF !important' : 'rgb(98, 68, 28) !important';
  
  return (
    <button
      className="md:hidden mr-2 p-1 transition-colors"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
      style={{ color: iconColor }}
    >
      {isMenuOpen ? (
        <X size={32} style={{ color: iconColor }} />
      ) : (
        <Menu size={32} style={{ color: iconColor }} />
      )}
    </button>
  );
};

export default MobileMenuButton;

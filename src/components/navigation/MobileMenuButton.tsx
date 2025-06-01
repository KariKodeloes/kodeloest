
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen, isHomePage }: MobileMenuButtonProps) => {
  if (isHomePage) return null; // Home page has its own mobile button

  return (
    <button
      className="md:hidden mr-2 p-1 transition-colors"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
    >
      {isMenuOpen ? (
        <X size={32} className="!text-[rgb(98,68,28)]" />
      ) : (
        <Menu size={32} className="!text-[rgb(98,68,28)]" />
      )}
    </button>
  );
};

export default MobileMenuButton;

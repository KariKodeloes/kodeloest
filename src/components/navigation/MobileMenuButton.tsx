
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isHomePage: boolean;
}

const MobileMenuButton = ({ isMenuOpen, setIsMenuOpen, isHomePage }: MobileMenuButtonProps) => {
  if (isHomePage) return null; // Home page has its own mobile button

  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden mr-2 p-1 text-foreground hover:text-black transition-colors"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
    >
      {isMenuOpen ? (
        <X size={32} className="text-foreground" />
      ) : (
        <Menu size={32} className="text-foreground" />
      )}
    </Button>
  );
};

export default MobileMenuButton;

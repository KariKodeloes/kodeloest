
import React from 'react';
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
      className="md:hidden mr-2 p-1 text-foreground hover:text-black"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Åpne meny"
    >
      <span className="material-icon text-3xl leading-none" style={{ fontSize: '32px' }}>
        {isMenuOpen ? 'close' : 'menu'}
      </span>
    </Button>
  );
};

export default MobileMenuButton;

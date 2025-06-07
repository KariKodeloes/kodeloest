
import React, { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import KodelostLogo from './KodelostLogo';
import MobileMenuButton from './MobileMenuButton';

interface NavigationItem {
  title: string;
  path: string;
}

interface SubPageNavigationProps {
  menuItems: NavigationItem[];
}

const SubPageNavigation = ({ menuItems }: SubPageNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('SubPageNavigation - isMenuOpen:', isMenuOpen);

  return (
    <nav className="border-b border-white shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      <div className="container mx-auto px-4" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="flex justify-between items-center h-16 md:justify-between" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
          {/* Mobile layout - hamburger on left, centered logo, spacer on right */}
          <div className="flex items-center md:hidden w-full" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <div className="w-12 flex justify-start">
              <MobileMenuButton 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                isHomePage={false}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <KodelostLogo />
            </div>
            <div className="w-12"> {/* Spacer to balance the hamburger button */}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center">
            <KodelostLogo />
          </div>

          {/* Desktop navigation - centered and expanded to take full width */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <DesktopNavigation 
              menuItems={menuItems}
              isHomePage={false}
            />
          </div>
        </div>

        <MobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
          isHomePage={false}
        />
      </div>
    </nav>
  );
};

export default SubPageNavigation;


import React, { useState } from 'react';
import DesktopNavigation from './DesktopNavigation';
import SocialIcons from './SocialIcons';
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
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:justify-between">
          {/* Mobile layout - hamburger on left, centered logo, spacer on right */}
          <div className="flex items-center md:hidden w-full">
            <MobileMenuButton 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isHomePage={false}
            />
            <div className="flex-1 flex justify-center">
              <KodelostLogo />
            </div>
            <div className="w-10"> {/* Spacer to balance the hamburger button */}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center">
            <KodelostLogo />
          </div>

          <DesktopNavigation 
            menuItems={menuItems}
            isHomePage={false}
          />

          <div className="flex items-center space-x-4">
            <SocialIcons isHomePage={false} />
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

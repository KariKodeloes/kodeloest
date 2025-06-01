
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
        <div className="flex justify-between items-center h-16">
          {/* Mobile and Desktop layout */}
          <div className="flex items-center">
            <MobileMenuButton 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isHomePage={false}
            />
            {/* Desktop logo */}
            <div className="hidden md:block">
              <KodelostLogo />
            </div>
          </div>

          {/* Mobile centered logo */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
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

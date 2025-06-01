
import React, { useState } from 'react';
import HomePageHeader from './HomePageHeader';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';

interface NavigationItem {
  title: string;
  path: string;
}

interface HomePageNavigationProps {
  menuItems: NavigationItem[];
}

const HomePageNavigation = ({ menuItems }: HomePageNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50 home-page-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageHeader 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        
        <div className="flex justify-between items-center h-16">
          <DesktopNavigation 
            menuItems={menuItems}
            isHomePage={true}
          />
        </div>

        <MobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
          isHomePage={true}
        />
      </div>
    </nav>
  );
};

export default HomePageNavigation;

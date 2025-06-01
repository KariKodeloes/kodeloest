
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomePageHeader from './navigation/HomePageHeader';
import MobileMenuButton from './navigation/MobileMenuButton';
import DesktopNavigation from './navigation/DesktopNavigation';
import SocialIcons from './navigation/SocialIcons';
import MobileMenu from './navigation/MobileMenu';
import KodelostLogo from './navigation/KodelostLogo';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Hjem', path: '/' },
    { title: 'Bildekunst', path: '/bilder' },
    { title: 'Foto', path: '/foto' },
    { title: 'Søm', path: '/som' },
    { title: 'Design', path: '/design' },
    { title: 'Om meg', path: '/om-meg' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`${isHomePage ? 'bg-transparent absolute top-0 left-0 right-0 z-50 home-page-nav' : 'bg-card border-b border-border shadow-sm sticky top-0 z-50'}`}>
      <div className={isHomePage ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "container mx-auto px-4"}>
        {/* Home page header */}
        {isHomePage && (
          <HomePageHeader 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
        
        <div className="flex justify-between items-center h-16">
          {/* Non-home page logo and mobile button */}
          {!isHomePage && (
            <div className="flex items-center">
              <MobileMenuButton 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                isHomePage={isHomePage}
              />
              <KodelostLogo />
            </div>
          )}

          {/* Desktop Navigation */}
          <DesktopNavigation 
            menuItems={menuItems}
            isHomePage={isHomePage}
          />

          {/* Social Icons for non-home pages */}
          <div className="flex items-center space-x-4">
            <SocialIcons isHomePage={isHomePage} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          menuItems={menuItems}
          isHomePage={isHomePage}
        />
      </div>
    </nav>
  );
};

export default Navigation;

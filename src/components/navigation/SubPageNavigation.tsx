
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DesktopNavigation from './DesktopNavigation';
import SocialIcons from './SocialIcons';
import MobileMenu from './MobileMenu';
import KodelostLogo from './KodelostLogo';

interface NavigationItem {
  title: string;
  path: string;
}

interface SubPageNavigationProps {
  menuItems: NavigationItem[];
}

const SubPageNavigation = ({ menuItems }: SubPageNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Mobile Menu Button with forced color */}
            <button
              className="md:hidden mr-2 p-1 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Åpne meny"
              style={{ color: 'rgb(98, 68, 28) !important' }}
            >
              {isMenuOpen ? (
                <X size={32} style={{ color: 'rgb(98, 68, 28) !important' }} />
              ) : (
                <Menu size={32} style={{ color: 'rgb(98, 68, 28) !important' }} />
              )}
            </button>
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

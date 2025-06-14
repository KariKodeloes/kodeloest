
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  title: string;
  path: string;
}

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  menuItems: NavigationItem[];
  isHomePage: boolean;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, menuItems, isHomePage }: MobileMenuProps) => {
  const location = useLocation();

  if (!isMenuOpen) return null;

  return (
    <div className={`md:hidden absolute left-0 right-0 z-[100] ${isHomePage ? 'top-20 bg-black/80 backdrop-blur-sm' : 'top-16 bg-white'} shadow-lg`}>
      <div className="px-2 py-2 space-y-1">
        {menuItems.slice(1).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-3 py-2 text-base font-medium transition-colors rounded touch-manipulation ${
              isHomePage
                ? 'text-white active:bg-white/20'
                : location.pathname === item.path
                  ? 'text-white hover:bg-[rgb(215,124,4)] hover:text-white'
                  : 'text-foreground active:bg-orange-100 hover:bg-orange-50 hover:text-black'
            }`}
            style={
              isHomePage
                ? { color: '#FFFFFF' }
                : location.pathname === item.path
                  ? { backgroundColor: 'rgb(215, 124, 4)', color: '#FFFFFF' }
                  : {}
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

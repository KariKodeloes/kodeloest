
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  title: string;
  path: string;
}

interface DesktopNavigationProps {
  menuItems: NavigationItem[];
  isHomePage: boolean;
}

const DesktopNavigation = ({ menuItems, isHomePage }: DesktopNavigationProps) => {
  const location = useLocation();

  console.log('DesktopNavigation render - isHomePage:', isHomePage, 'current path:', location.pathname);

  return (
    <div className={`hidden md:flex items-center space-x-4 ${isHomePage ? 'mx-auto' : ''}`}>
      {menuItems.slice(1).map((item, index) => (
        <React.Fragment key={item.path}>
          <Link
            to={item.path}
            className={`text-base font-medium transition-all duration-200 px-3 py-2 rounded ${
              isHomePage 
                ? 'text-white hover:text-white hover:bg-[#FAE6CC]' 
                : location.pathname === item.path
                  ? 'border-b-2 hover:text-black' 
                  : 'text-foreground hover:text-black'
            }`}
            style={
              isHomePage
                ? { color: '#FFFFFF' }
                : !isHomePage && location.pathname === item.path
                  ? { color: '#E68200', borderColor: '#E68200' }
                  : {}
            }
            onMouseEnter={(e) => {
              console.log('Mouse enter on:', item.title, 'isHomePage:', isHomePage, 'isCurrentPath:', location.pathname === item.path);
              if (!isHomePage && location.pathname !== item.path) {
                (e.target as HTMLElement).style.color = '#000000';
              }
            }}
            onMouseLeave={(e) => {
              console.log('Mouse leave on:', item.title);
              if (!isHomePage && location.pathname !== item.path) {
                (e.target as HTMLElement).style.color = '';
              }
            }}
          >
            {item.title}
          </Link>
          {/* Vertical separator between menu items, except for the last one */}
          {index < menuItems.slice(1).length - 1 && (
            <div className={`w-px h-4 ${isHomePage ? 'bg-white/30' : 'bg-border'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DesktopNavigation;

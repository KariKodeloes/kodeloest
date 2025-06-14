
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

  const isCurrentPath = (itemPath: string) => {
    if (itemPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname === itemPath || location.pathname.startsWith(itemPath + '/');
  };

  return (
    <div className={`hidden md:flex items-center space-x-4 ${isHomePage ? 'mx-auto' : ''}`}>
      {menuItems.slice(1).map((item, index) => (
        <React.Fragment key={item.path}>
          <Link
            to={item.path}
            className={`text-base font-medium transition-all duration-200 px-3 py-2 rounded ${
              isHomePage 
                ? 'text-white hover:bg-black/20' 
                : isCurrentPath(item.path)
                  ? 'border-b-2 hover:text-black' 
                  : 'text-foreground hover:text-black'
            }`}
            style={
              isHomePage
                ? { color: '#FFFFFF' }
                : !isHomePage && isCurrentPath(item.path)
                  ? { color: 'rgb(215, 124, 4)', borderColor: 'rgb(215, 124, 4)' }
                  : {}
            }
            onMouseEnter={(e) => {
              console.log('Mouse enter on:', item.title, 'isHomePage:', isHomePage, 'isCurrentPath:', isCurrentPath(item.path));
              if (isHomePage) {
                (e.target as HTMLElement).style.color = '#FAE6CC';
              } else if (!isCurrentPath(item.path)) {
                (e.target as HTMLElement).style.color = '#000000';
              }
            }}
            onMouseLeave={(e) => {
              console.log('Mouse leave on:', item.title);
              if (isHomePage) {
                (e.target as HTMLElement).style.color = '#FFFFFF';
              } else if (!isCurrentPath(item.path)) {
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

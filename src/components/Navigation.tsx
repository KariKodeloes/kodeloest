
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Hjem', path: '/' },
    { title: 'Bildekunst', path: '/bilder' },
    { title: 'Foto', path: '/foto' },
    { title: 'Søm', path: '/som' },
    { title: 'Design', path: '/design' },
    { title: 'DIY', path: '/diy' },
    { title: 'Om meg', path: '/om-meg' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`${isHomePage ? 'bg-transparent fixed top-0 left-0 right-0 z-50' : 'bg-card border-b border-border shadow-sm sticky top-0 z-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* KODELØST heading for home page with Instagram icon */}
        {isHomePage && (
          <div className="text-center pt-8 pb-2 relative">
            <h1 className="text-white font-oswald font-medium text-4xl">KODELØST</h1>
            {/* Instagram Icon positioned in top right corner, aligned with KODELØST */}
            <a
              href="https://instagram.com/karis_pensel"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-8 right-0 text-white hover:text-gray-200 transition-colors"
              aria-label="Følg meg på Instagram"
            >
              <Instagram size={40} />
            </a>
          </div>
        )}
        
        <div className="flex justify-between items-center h-16">
          {/* KODELØST home button for non-home pages */}
          {!isHomePage && (
            <Link to="/" className="flex items-center">
              <span className="text-foreground hover:text-primary font-oswald font-medium text-2xl transition-colors">
                KODELØST
              </span>
            </Link>
          )}

          {/* Desktop Navigation - centered for home page */}
          <div className={`hidden md:flex items-center space-x-4 ${isHomePage ? 'mx-auto' : ''}`}>
            {menuItems.slice(1).map((item, index) => (
              <React.Fragment key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isHomePage 
                      ? 'text-white hover:text-gray-200' 
                      : location.pathname === item.path
                        ? 'border-b-2' 
                        : 'text-foreground hover:text-primary'
                  }`}
                  style={
                    !isHomePage && location.pathname === item.path
                      ? { color: '#E68200', borderColor: '#E68200' }
                      : {}
                  }
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

          {/* Icons for non-home pages */}
          <div className="flex items-center space-x-4">
            {/* Instagram Icon for non-home pages */}
            {!isHomePage && (
              <a
                href="https://instagram.com/karis_pensel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Følg meg på Instagram"
              >
                <Instagram size={40} />
              </a>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden ${isHomePage ? 'text-white hover:text-gray-200 hover:bg-white/10' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Åpne meny"
            >
              <span className="material-icon">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isHomePage ? 'border-white/20 bg-black/50' : 'border-border bg-card'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isHomePage
                      ? 'text-white hover:text-gray-200'
                      : location.pathname === item.path
                        ? 'bg-accent'
                        : 'text-foreground hover:text-primary'
                  }`}
                  style={
                    !isHomePage && location.pathname === item.path
                      ? { color: '#E68200' }
                      : {}
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Hjem', path: '/' },
    { title: 'Bilder', path: '/bilder' },
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-oswald font-semibold ${isHomePage ? 'text-white' : 'text-primary'}`}>
              Kari Kodeløs
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isHomePage 
                    ? 'text-white hover:text-gray-200' 
                    : location.pathname === item.path
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Instagram Icon */}
            <a
              href="https://instagram.com/karis_pensel"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isHomePage 
                  ? 'text-white hover:text-gray-200' 
                  : 'text-foreground hover:text-primary'
              }`}
              aria-label="Følg meg på Instagram"
            >
              <span className="material-icon">photo_camera</span>
            </a>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={isHomePage ? 'text-white hover:text-gray-200 hover:bg-white/10' : ''}
              aria-label={theme === 'light' ? 'Bytt til mørk modus' : 'Bytt til lys modus'}
            >
              <span className="material-icon">
                {theme === 'light' ? 'dark_mode' : 'light_mode'}
              </span>
            </Button>

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
                        ? 'text-primary bg-accent'
                        : 'text-foreground hover:text-primary'
                  }`}
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

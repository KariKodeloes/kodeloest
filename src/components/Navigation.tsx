
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Instagram, Linkedin } from 'lucide-react';

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
    <nav className={`${isHomePage ? 'bg-transparent absolute top-0 left-0 right-0 z-50 home-page-nav' : 'bg-card border-b border-border shadow-sm sticky top-0 z-50'}`}>
      {/* Use container class for consistent alignment */}
      <div className={isHomePage ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "container mx-auto px-4"}>
        {/* KODELØST heading for home page with social icons */}
        {isHomePage && (
          <div className="text-center pt-8 pb-2 relative">
            {/* Mobile Menu Button positioned aligned with KODELØST for home page */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden absolute top-8 left-0 text-white hover:text-white hover:bg-white/10 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Åpne meny"
            >
              <span className="material-icon text-white text-3xl leading-none" style={{ fontSize: '32px', color: '#FFFFFF' }}>
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </Button>
            
            <h1 className="text-white font-oswald font-medium text-4xl" style={{ color: '#FFFFFF' }}>KODELØST</h1>
            {/* Social Icons positioned aligned with KODELØST */}
            <div className="absolute top-8 right-0 flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
                aria-label="Følg meg på LinkedIn"
                style={{ color: '#FFFFFF' }}
              >
                <Linkedin size={32} style={{ color: '#FFFFFF' }} />
              </a>
              <a
                href="https://instagram.com/karis_pensel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
                aria-label="Følg meg på Instagram"
                style={{ color: '#FFFFFF' }}
              >
                <Instagram size={32} style={{ color: '#FFFFFF' }} />
              </a>
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center h-16">
          {/* KODELØST home button for non-home pages */}
          {!isHomePage && (
            <div className="flex items-center">
              {/* Mobile Menu Button for non-home pages */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden mr-2 p-1 text-foreground hover:text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Åpne meny"
              >
                <span className="material-icon text-3xl leading-none" style={{ fontSize: '32px' }}>
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </Button>
              
              <Link to="/" className="flex items-center">
                <span 
                  className="text-foreground font-oswald font-medium text-2xl transition-colors"
                  style={{ 
                    color: location.pathname === '/' ? '#000000' : undefined,
                    ...(location.pathname !== '/' && {
                      ':hover': { color: '#000000' }
                    })
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/') {
                      (e.target as HTMLElement).style.color = '#000000';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/') {
                      (e.target as HTMLElement).style.color = '';
                    }
                  }}
                >
                  KODELØST
                </span>
              </Link>
            </div>
          )}

          {/* Desktop Navigation - centered for home page */}
          <div className={`hidden md:flex items-center space-x-4 ${isHomePage ? 'mx-auto' : ''}`}>
            {menuItems.slice(1).map((item, index) => (
              <React.Fragment key={item.path}>
                <Link
                  to={item.path}
                  className={`text-base font-medium transition-colors ${
                    isHomePage 
                      ? 'text-white hover:text-white' 
                      : location.pathname === item.path
                        ? 'border-b-2' 
                        : 'text-foreground'
                  }`}
                  style={
                    isHomePage
                      ? { color: '#FFFFFF' }
                      : !isHomePage && location.pathname === item.path
                        ? { color: '#E68200', borderColor: '#E68200' }
                        : {}
                  }
                  onMouseEnter={(e) => {
                    if (!isHomePage && location.pathname !== item.path) {
                      (e.target as HTMLElement).style.color = '#000000';
                    }
                  }}
                  onMouseLeave={(e) => {
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

          {/* Icons for non-home pages */}
          <div className="flex items-center space-x-4">
            {/* Social Icons for non-home pages */}
            {!isHomePage && (
              <>
                <a
                  href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors"
                  aria-label="Følg meg på LinkedIn"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="https://instagram.com/karis_pensel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors"
                  aria-label="Følg meg på Instagram"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
                >
                  <Instagram size={32} />
                </a>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden absolute left-0 right-0 z-[100] ${isHomePage ? 'top-20 border-white/20 bg-black/80 backdrop-blur-sm' : 'top-16 border-border bg-white'} border-t shadow-lg`}>
            <div className="px-2 py-2 space-y-1">
              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded touch-manipulation ${
                    isHomePage
                      ? 'text-white active:bg-white/20'
                      : location.pathname === item.path
                        ? 'bg-accent text-orange-600'
                        : 'text-foreground active:bg-orange-100 hover:bg-orange-50 hover:text-black'
                  }`}
                  style={
                    isHomePage
                      ? { color: '#FFFFFF' }
                      : !isHomePage && location.pathname === item.path
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

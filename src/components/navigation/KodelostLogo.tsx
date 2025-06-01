
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const KodelostLogo = () => {
  const location = useLocation();

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (location.pathname !== '/') {
      e.currentTarget.style.color = '#000000';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (location.pathname !== '/') {
      e.currentTarget.style.color = 'rgb(99, 68, 28)';
    }
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center ${location.pathname !== '/' ? 'hover:bg-black/5 rounded px-2 py-1 transition-all duration-200' : ''}`}
    >
      <span 
        className="font-oswald font-medium text-2xl transition-colors hover:text-black"
        style={{ 
          color: location.pathname === '/' ? '#000000' : 'rgb(99, 68, 28)'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        KODELØST
      </span>
    </Link>
  );
};

export default KodelostLogo;

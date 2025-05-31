
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const KodelostLogo = () => {
  const location = useLocation();

  return (
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
  );
};

export default KodelostLogo;

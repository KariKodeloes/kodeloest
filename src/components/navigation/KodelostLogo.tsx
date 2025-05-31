
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const KodelostLogo = () => {
  const location = useLocation();

  return (
    <Link to="/" className="flex items-center">
      <span 
        className={`text-foreground font-oswald font-medium text-2xl transition-colors ${
          location.pathname !== '/' ? 'hover:text-black' : ''
        }`}
        style={{ 
          color: location.pathname === '/' ? '#000000' : undefined
        }}
      >
        KODELØST
      </span>
    </Link>
  );
};

export default KodelostLogo;

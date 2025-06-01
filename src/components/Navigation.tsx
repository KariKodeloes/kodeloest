
import React from 'react';
import { useLocation } from 'react-router-dom';
import HomePageNavigation from './navigation/HomePageNavigation';
import SubPageNavigation from './navigation/SubPageNavigation';

const Navigation = () => {
  const location = useLocation();

  const menuItems = [
    { title: 'Hjem', path: '/' },
    { title: 'Bildekunst', path: '/bilder' },
    { title: 'Foto', path: '/foto' },
    { title: 'Søm', path: '/som' },
    { title: 'Design', path: '/design' },
    { title: 'Om meg', path: '/om-meg' },
  ];

  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return <HomePageNavigation menuItems={menuItems} />;
  }

  return <SubPageNavigation menuItems={menuItems} />;
};

export default Navigation;

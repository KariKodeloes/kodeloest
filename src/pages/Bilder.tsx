
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Bilder = () => {
  const projects = getProjectsByCategory('bilder');
  
  const subcategories = [
    { name: 'akvareller', path: '/bilder/akvareller', displayName: 'Akvareller' },
    { name: 'mixed-media', path: '/bilder/mixed-media', displayName: 'Mixed Media' },
    { name: 'strek', path: '/bilder/strek', displayName: 'Strek' }
  ];

  return (
    <CategoryPage
      title="Bilder"
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Bilder;

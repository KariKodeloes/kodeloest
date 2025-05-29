
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Bilder = () => {
  const projects = getProjectsByCategory('bilder');
  
  const subcategories = [
    { name: 'akvareller', path: '/bilder/akvareller', displayName: 'Akvareller' },
    { name: 'mixed-media', path: '/bilder/mixed-media', displayName: 'Mixed Media' },
    { name: 'tegning', path: '/bilder/tegning', displayName: 'Tegning' }
  ];

  return (
    <CategoryPage
      title="Bildekunst"
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Bilder;

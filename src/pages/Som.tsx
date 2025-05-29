
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Som = () => {
  const projects = getProjectsByCategory('som');
  
  const subcategories = [
    { name: 'redesign', path: '/som/redesign', displayName: 'Redesign' },
    { name: 'gjenbruk', path: '/som/gjenbruk', displayName: 'Gjenbruk' },
    { name: 'rett-fra-rullen', path: '/som/rett-fra-rullen', displayName: 'Rett fra rullen' }
  ];

  return (
    <CategoryPage
      title="Søm"
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Som;

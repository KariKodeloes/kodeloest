
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Foto = () => {
  const projects = getProjectsByCategory('foto');
  
  const subcategories = [
    { name: 'ved-sjoen', path: '/foto/ved-sjoen', displayName: 'Ved sjøen' },
    { name: 'i-fjellet', path: '/foto/i-fjellet', displayName: 'Fjell og mark' },
    { name: 'flora', path: '/foto/flora', displayName: 'Flora' },
    { name: 'byliv', path: '/foto/byliv', displayName: 'Byliv' },
    { name: 'dyr', path: '/foto/dyr', displayName: 'Dyr' }
  ];

  return (
    <CategoryPage
      title="Foto"
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Foto;


import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Foto = () => {
  const projects = getProjectsByCategory('foto');
  
  const subcategories = [
    { name: 'ved-sjoen', path: '/foto/ved-sjoen', displayName: 'Ved sjøen' },
    { name: 'i-fjellet', path: '/foto/i-fjellet', displayName: 'I fjellet' },
    { name: 'flora', path: '/foto/flora', displayName: 'Flora' },
    { name: 'byliv', path: '/foto/byliv', displayName: 'Byliv' }
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

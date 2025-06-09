
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Bilder = () => {
  console.log('🎨 Bilder page loading...');
  const projects = getProjectsByCategory('bilder');
  console.log('🎨 Bilder page - projects loaded:', projects.length, projects.map(p => ({ id: p.id, title: p.title })));
  
  const subcategories = [
    { name: 'akvareller', path: '/bilder/akvareller', displayName: 'Akvareller' },
    { name: 'mixed-media', path: '/bilder/mixed-media', displayName: 'Mixed Media' },
    { name: 'tegning', path: '/bilder/tegning', displayName: 'Tegning' }
  ];

  const bodyText = `Jeg har alltid likt å tegne.
I dag holder jeg mest på med akvareller, mixed media og tegning. Selv om jeg drømmer om store, nonfigurative motiver dras jeg mot det konkrete - ofte inspirert av egne foto.`;

  return (
    <CategoryPage
      title="Bildekunst"
      bodyText={bodyText}
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Bilder;

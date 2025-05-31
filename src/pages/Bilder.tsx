
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

  const bodyText = "Her finner du mitt utvalg av bildekunst i ulike teknikker - fra akvareller til mixed media og tegning. Verkene spenner fra naturmotiver til mer abstrakte uttrykk. Alle bilder og øvrig innhold er opphavsrettslig beskyttet.";

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

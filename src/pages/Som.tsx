
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

  const bodyText = "Mine sømprosjekter spenner fra gjenbruk av gamle tekstiler til nye kreasjoner. Jeg liker å gi gamle plagg nytt liv og skape funksjonelle og vakre ting for hverdagen. Alle bilder og øvrig innhold er opphavsrettslig beskyttet.";

  return (
    <CategoryPage
      title="Søm"
      bodyText={bodyText}
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Som;

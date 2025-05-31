
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const DIY = () => {
  const projects = getProjectsByCategory('diy');

  const bodyText = "DIY-prosjektene mine handler om å lage praktiske løsninger med det jeg har for hånden. Fra møbelhacks til hjemmelagde løsninger som gjør hverdagen litt enklere. Alle bilder og øvrig innhold er opphavsrettslig beskyttet.";

  return (
    <CategoryPage
      title="DIY"
      bodyText={bodyText}
      projects={projects}
    />
  );
};

export default DIY;

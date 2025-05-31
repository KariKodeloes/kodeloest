
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const DIY = () => {
  const projects = getProjectsByCategory('diy');

  const bodyText = "Om det er et gammelt bord i en container roper etter en kjærlig hånd eller en kjedelig oppgave skulle vært løst: Litt kreativitet har aldri skadet. Det er ikke alltid raskeste vei til målet, men du verden så artig jeg har det underveis. Og jammen har jeg ikke blitt venner med borhammeren!";

  return (
    <CategoryPage
      title="DIY"
      bodyText={bodyText}
      projects={projects}
    />
  );
};

export default DIY;

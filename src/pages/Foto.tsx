
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

  const bodyText = "Det har hendt jeg har drasset med meg en speilrefleks, men det krever jo planlegging - og ryggsekk. Når hodet først er i modus «utsnitt» og motivene dukker opp innrammet rundt meg, er mobilen gull verdt og ingen distraksjon. For meg handler det om å se og være tilstede.";

  return (
    <CategoryPage
      title="Foto"
      bodyText={bodyText}
      projects={projects}
      subcategories={subcategories}
    />
  );
};

export default Foto;

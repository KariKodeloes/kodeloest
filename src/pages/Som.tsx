
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

  const bodyText = "Jeg begynte å sy etter å ha sett første sesong av NRK’s «Symesterskapet». - Hvor vanskelig kan det være? tenkte jeg som knapt kunne tre en sysmaskin. Den kjørte og jeg satt på. Det første jeg kastet meg over var en kjole i en håpløst glatt stoff fra en restekurv. Siden har jeg sydd. Mye redesign og gjenbruk, men det hender jeg unner meg helt nye materialer.";

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

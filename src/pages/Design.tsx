
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Design = () => {
  const projects = getProjectsByCategory('design');

  const bodyText = "Hva er design? Og hvor ble det av boka med arbeidsprøver? Før var design for meg å lage en logo, lage årsrapporter, finne en vinkling og en rød tråd: Få ut budskapet på trykk og nå målgruppa. Siden 2012 har det stort sett handlet om å lage gode løsninger for brukere i rollen som UX-designer i Kantega. Noen private prosjekter blir det likevel tid til.";

  return (
    <CategoryPage
      title="Design"
      bodyText={bodyText}
      projects={projects}
    />
  );
};

export default Design;

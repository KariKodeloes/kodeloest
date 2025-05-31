
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Design = () => {
  const projects = getProjectsByCategory('design');

  const bodyText = "Her viser jeg designprosjekter som spenner fra grafisk design til tryksaker og branding. Jeg liker å lage funksjonelle og estetiske løsninger for ulike formål. Alle design og øvrig innhold er opphavsrettslig beskyttet.";

  return (
    <CategoryPage
      title="Design"
      bodyText={bodyText}
      projects={projects}
    />
  );
};

export default Design;

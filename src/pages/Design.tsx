
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const Design = () => {
  const projects = getProjectsByCategory('design');

  return (
    <CategoryPage
      title="Design"
      projects={projects}
    />
  );
};

export default Design;

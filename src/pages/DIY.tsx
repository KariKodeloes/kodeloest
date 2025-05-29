
import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { getProjectsByCategory } from '../data/mockData';

const DIY = () => {
  const projects = getProjectsByCategory('diy');

  return (
    <CategoryPage
      title="DIY"
      projects={projects}
    />
  );
};

export default DIY;

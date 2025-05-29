
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/mockData';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';

interface CategoryPageProps {
  title: string;
  projects: Project[];
  subcategories?: Array<{ name: string; path: string; displayName: string }>;
}

type ViewMode = 'grid' | 'list';
type SortOrder = 'newest' | 'oldest';

const CategoryPage: React.FC<CategoryPageProps> = ({ title, projects, subcategories }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOrder === 'newest') {
      return b.year - a.year;
    }
    return a.year - b.year;
  });

  const toggleSort = () => {
    setSortOrder(current => current === 'newest' ? 'oldest' : 'newest');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-oswald font-medium mb-4 text-foreground" style={{ fontSize: '1.75rem' }}>
            {title}
          </h2>
          
          {/* Subcategories */}
          {subcategories && subcategories.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-roboto font-medium mb-3 text-muted-foreground">
                Underkategorier:
              </h2>
              <div className="flex flex-wrap gap-3">
                {subcategories.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="bg-card border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    {sub.displayName}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {projects.length} prosjekt{projects.length !== 1 ? 'er' : ''}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sort */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleSort}
              className="flex items-center gap-2"
            >
              <span className="material-icon text-sm">swap_vert</span>
              {sortOrder === 'newest' ? 'Nyeste først' : 'Eldste først'}
            </Button>

            {/* View Mode */}
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none border-0"
                style={viewMode === 'grid' ? { backgroundColor: '#E68200', color: 'white' } : {}}
              >
                <span className="material-icon">view_module</span>
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none border-0"
                style={viewMode === 'list' ? { backgroundColor: '#E68200', color: 'white' } : {}}
              >
                <span className="material-icon">view_list</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {sortedProjects.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-6'
          }>
            {sortedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Ingen prosjekter funnet i denne kategorien ennå.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

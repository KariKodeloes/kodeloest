
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Project } from '../data/mockData';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLikes } from '../hooks/useLikes';

interface CategoryPageProps {
  title: string;
  projects: Project[];
  subcategories?: Array<{ name: string; path: string; displayName: string }>;
  currentCategory?: string;
  onCategoryChange?: (category: string) => void;
}

type ViewMode = 'grid' | 'list';
type SortOrder = 'most-liked' | 'least-liked';

const CategoryPage: React.FC<CategoryPageProps> = ({ 
  title, 
  projects, 
  subcategories, 
  currentCategory = 'alle',
  onCategoryChange 
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortOrder, setSortOrder] = useState<SortOrder>('most-liked');
  const [selectedCategory, setSelectedCategory] = useState(currentCategory);
  const location = useLocation();
  const { getLikes } = useLikes();

  useEffect(() => {
    // Extract category from URL path
    const pathParts = location.pathname.split('/');
    const urlCategory = pathParts[pathParts.length - 1];
    
    if (subcategories && subcategories.some(sub => sub.name === urlCategory)) {
      setSelectedCategory(urlCategory);
    } else {
      setSelectedCategory('alle');
    }
  }, [location.pathname, subcategories]);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'alle' 
    ? projects 
    : projects.filter(project => project.subcategory === selectedCategory);

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const likesA = getLikes(a.id, a.likes || 0);
    const likesB = getLikes(b.id, b.likes || 0);
    
    if (sortOrder === 'most-liked') {
      return likesB - likesA;
    }
    return likesA - likesB;
  });

  const toggleSort = () => {
    setSortOrder(current => current === 'most-liked' ? 'least-liked' : 'most-liked');
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (onCategoryChange) {
      onCategoryChange(categoryName);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-oswald font-medium mb-4 text-foreground" style={{ fontSize: '1.75rem' }}>
            {title}
          </h2>
          
          {/* Category Chips and Controls Combined */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            {/* Category Chips */}
            {subcategories && subcategories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {/* "Alle" chip */}
                <button
                  onClick={() => handleCategoryClick('alle')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-gray-300 ${
                    selectedCategory === 'alle' 
                      ? 'bg-[#E68200] text-white border-[#E68200]' 
                      : 'bg-white text-[#066298] hover:text-[#013B5E] border-gray-300'
                  }`}
                >
                  Alle
                </button>
                
                {/* Subcategory chips */}
                {subcategories.map((sub) => (
                  <button
                    key={sub.path}
                    onClick={() => handleCategoryClick(sub.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-gray-300 ${
                      selectedCategory === sub.name 
                        ? 'bg-[#E68200] text-white border-[#E68200]' 
                        : 'bg-white text-[#066298] hover:text-[#013B5E] border-gray-300'
                    }`}
                  >
                    {sub.displayName}
                  </button>
                ))}
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSort}
                className="flex items-center gap-2"
              >
                <span className="material-icon text-sm">favorite</span>
                {sortOrder === 'most-liked' ? 'Flest likes først' : 'Færrest likes først'}
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
        </div>

        {/* Project Count */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-muted-foreground">
            {sortedProjects.length} prosjekt{sortedProjects.length !== 1 ? 'er' : ''}
          </span>
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


import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/mockData';

interface GalleryProps {
  projects: Project[];
}

const Gallery: React.FC<GalleryProps> = ({ projects }) => {
  const getCategoryPath = (project: Project) => {
    // Always link to the main category page
    const categoryMap: Record<string, string> = {
      'bilder': '/bilder',
      'foto': '/foto',
      'som': '/som',
      'design': '/design',
      'diy': '/diy'
    };
    
    return categoryMap[project.category] || '/';
  };

  const getCategoryDisplayName = (project: Project) => {
    const categoryNames: Record<string, string> = {
      'bilder': 'Bilder',
      'foto': 'Foto',
      'som': 'Søm',
      'design': 'Design',
      'diy': 'DIY'
    };

    const subcategoryNames: Record<string, string> = {
      'akvareller': 'Akvareller',
      'mixed-media': 'Mixed Media',
      'strek': 'Strek',
      'ved-sjoen': 'Ved sjøen',
      'i-fjellet': 'I fjellet',
      'flora': 'Flora',
      'byliv': 'Byliv',
      'redesign': 'Redesign',
      'gjenbruk': 'Gjenbruk',
      'rett-fra-rullen': 'Rett fra rullen'
    };

    let displayName = categoryNames[project.category] || project.category;
    if (project.subcategory) {
      displayName += ` → ${subcategoryNames[project.subcategory] || project.subcategory}`;
    }
    
    return displayName;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={getCategoryPath(project)}
          className="gallery-item group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="gallery-overlay">
            <div className="text-center">
              <h3 className="text-lg font-quicksand font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm opacity-90">
                {getCategoryDisplayName(project)}
              </p>
              {project.subcategory && (
                <p className="text-xs opacity-75 mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;

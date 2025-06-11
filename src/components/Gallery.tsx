
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/mockData';
import { useLikes } from '../hooks/useLikes';
import { Heart } from 'lucide-react';

interface GalleryProps {
  projects: Project[];
  sortByLikes?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ projects, sortByLikes = false }) => {
  const { getLikes } = useLikes();

  const getCategoryPath = (project: Project) => {
    // Link to subcategory if available, otherwise main category
    const categoryMap: Record<string, string> = {
      'bilder': '/bilder',
      'foto': '/foto',
      'som': '/som',
      'design': '/design',
      'diy': '/diy'
    };
    
    const basePath = categoryMap[project.category] || '/';
    
    // Always navigate to subcategory if it exists, otherwise to main category
    if (project.subcategory) {
      return `${basePath}/${project.subcategory}`;
    }
    
    return basePath;
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
      'dyr': 'Dyr',
      'redesign-og-gjenbruk': 'Redesign og gjenbruk',
      'rett-fra-rullen': 'Rett fra rullen',
      'tegning': 'Tegning'
    };

    let displayName = categoryNames[project.category] || project.category;
    if (project.subcategory) {
      displayName += ` → ${subcategoryNames[project.subcategory] || project.subcategory}`;
    }
    
    return displayName;
  };

  // Sorter prosjekter etter likes hvis sortByLikes er true
  const sortedProjects = sortByLikes 
    ? [...projects].sort((a, b) => {
        const likesA = getLikes(a.id, a.likes || 0);
        const likesB = getLikes(b.id, b.likes || 0);
        return likesB - likesA;
      })
    : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedProjects.map((project) => {
        const currentLikes = getLikes(project.id, project.likes || 0);
        
        return (
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
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                
                {/* Vis kun antall likes (ikke klikkbar) */}
                <div className="flex items-center justify-center mt-3 gap-2">
                  <div className="p-2 rounded-full bg-white/20">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {currentLikes}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Gallery;

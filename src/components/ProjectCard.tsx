
import React, { useState } from 'react';
import { Project } from '../data/mockData';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-80 h-64 md:h-auto overflow-hidden">
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Image Navigation */}
            {project.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                >
                  <span className="material-icon">chevron_left</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                >
                  <span className="material-icon">chevron_right</span>
                </Button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-quicksand font-semibold text-foreground">
                {project.title}
              </h2>
              <span className="text-sm text-muted-foreground font-roboto">
                {project.year}
              </span>
            </div>
            
            {project.subtitle && (
              <h3 className="text-lg font-roboto text-muted-foreground mb-3">
                {project.subtitle}
              </h3>
            )}
            
            <p className="text-foreground text-base leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Image Navigation */}
        {project.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="material-icon">chevron_left</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="material-icon">chevron_right</span>
            </Button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-quicksand font-semibold text-foreground">
            {project.title}
          </h2>
          <span className="text-sm text-muted-foreground font-roboto">
            {project.year}
          </span>
        </div>
        
        {project.subtitle && (
          <h3 className="text-base font-roboto text-muted-foreground mb-2">
            {project.subtitle}
          </h3>
        )}
        
        <p className="text-foreground text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

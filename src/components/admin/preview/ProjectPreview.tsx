
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Image } from 'lucide-react';
import { Project } from '../../../data/mockData';

interface ProjectPreviewProps {
  project: Partial<Project>;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Image className="h-5 w-5 mr-2" />
          Forhåndsvisning
        </CardTitle>
      </CardHeader>
      <CardContent>
        {project.mainImage && (
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img
              src={project.mainImage}
              alt={project.altText || project.title || 'Prosjektbilde'}
              className="w-full h-full object-cover"
              title={project.altText || undefined}
            />
          </div>
        )}
        <h3 className="text-lg font-quicksand font-semibold mb-2">{project.title || 'Uten tittel'}</h3>
        {project.subtitle && (
          <h4 className="text-sm font-oswald text-gray-600 mb-2">{project.subtitle}</h4>
        )}
        <p className="text-sm text-gray-700 font-oswald font-light">{project.description}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        {project.subcategory && (
          <div className="mt-2 text-xs text-gray-600">
            <span>Underkategori: {project.subcategory}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;

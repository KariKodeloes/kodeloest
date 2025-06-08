
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
        {/* Main Image Preview */}
        <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
          {project.mainImage ? (
            <img
              src={project.mainImage}
              alt={project.altText || project.title || 'Prosjektbilde'}
              className="w-full h-full object-cover"
              title={project.altText || undefined}
              onError={(e) => {
                console.error('Failed to load preview image:', project.mainImage);
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <div className={`flex items-center justify-center text-gray-400 ${project.mainImage ? 'hidden' : ''}`}>
            <Image className="h-12 w-12" />
            <span className="ml-2 text-sm">Ingen hovedbilde</span>
          </div>
        </div>

        {/* Project Details */}
        <h3 className="text-lg font-quicksand font-semibold mb-2">
          {project.title || 'Uten tittel'}
        </h3>
        
        {project.subtitle && (
          <h4 className="text-sm font-oswald text-gray-600 mb-2">{project.subtitle}</h4>
        )}
        
        <p className="text-sm text-gray-700 font-oswald font-light mb-4">
          {project.description || 'Ingen beskrivelse'}
        </p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span>{project.category || 'Ingen kategori'}</span>
          <span>{project.year}</span>
        </div>
        
        {project.subcategory && (
          <div className="mb-4 text-xs text-gray-600">
            <span>Underkategori: {project.subcategory}</span>
          </div>
        )}

        {/* Alt Text Info */}
        <div className="text-xs p-2 bg-gray-50 rounded">
          <span className="font-medium">Alt-tekst: </span>
          <span className={project.altText ? 'text-green-600' : 'text-orange-600'}>
            {project.altText || 'Ikke satt (anbefales for tilgjengelighet)'}
          </span>
        </div>

        {/* Gallery Images Count */}
        {project.images && project.images.length > 0 && (
          <div className="text-xs text-gray-600 mt-2">
            <span>Galleribilder: {project.images.length} stk</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;

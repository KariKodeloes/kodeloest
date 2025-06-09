
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Image } from 'lucide-react';
import { Project } from '../../../data/mockData';

interface ProjectPreviewProps {
  project: Partial<Project>;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  const isValidImageUrl = (url: string) => {
    return url.startsWith('data:image/') ||
           url.startsWith('/lovable-uploads/') || 
           url.startsWith('http://') || 
           url.startsWith('https://');
  };

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
          {project.mainImage && isValidImageUrl(project.mainImage) ? (
            <img
              src={project.mainImage}
              alt={project.altText || project.title || 'Prosjektbilde'}
              className="w-full h-full object-cover"
              title={project.altText || undefined}
              onError={(e) => {
                console.error('Failed to load preview image:', project.mainImage);
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="flex items-center justify-center text-gray-400 w-full h-full"><div class="text-center"><svg class="h-12 w-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span class="text-sm">Kunne ikke laste bilde</span></div></div>';
                }
              }}
            />
          ) : (
            <div className="flex items-center justify-center text-gray-400">
              <div className="text-center">
                <Image className="h-12 w-12 mx-auto mb-2" />
                <span className="text-sm">
                  {project.mainImage ? 'Ugyldig bilde-URL' : 'Ingen hovedbilde'}
                </span>
              </div>
            </div>
          )}
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

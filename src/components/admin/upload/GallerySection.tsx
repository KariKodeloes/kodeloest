
import React from 'react';
import ImageUploader from '../ImageUploader';
import { Project } from '../../../data/mockData';

interface GallerySectionProps {
  project: Partial<Project>;
  onSingleGalleryImageUpload: (imageUrl: string) => void;
  onGalleryImagesUpdate: (imageUrls: string[]) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ 
  project, 
  onSingleGalleryImageUpload, 
  onGalleryImagesUpdate 
}) => {
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Bildegalleri</h3>
        <p className="mt-1 text-sm text-gray-600">Last opp flere bilder til galleriet</p>
      </div>
      
      <div className="px-6 py-6">
        <ImageUploader
          onImageUploaded={onSingleGalleryImageUpload}
          onImagesUploaded={onGalleryImagesUpdate}
          multiple={true}
          currentImages={project.images || []}
        />
      </div>
    </div>
  );
};

export default GallerySection;

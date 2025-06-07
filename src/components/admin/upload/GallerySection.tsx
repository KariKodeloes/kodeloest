
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
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
    <Card>
      <CardHeader>
        <CardTitle>Bildegalleri</CardTitle>
      </CardHeader>
      <CardContent>
        <ImageUploader
          onImageUploaded={onSingleGalleryImageUpload}
          onImagesUploaded={onGalleryImagesUpdate}
          multiple={true}
          currentImages={project.images || []}
        />
      </CardContent>
    </Card>
  );
};

export default GallerySection;


import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Input } from '../../ui/input';
import ImageUploader from '../ImageUploader';
import { Project } from '../../../data/mockData';

interface MainImageSectionProps {
  project: Partial<Project>;
  onMainImageUpload: (imageUrl: string) => void;
  onProjectChange: (field: keyof Project, value: any) => void;
}

const MainImageSection: React.FC<MainImageSectionProps> = ({ 
  project, 
  onMainImageUpload, 
  onProjectChange 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Hovedbilde <span className="text-red-500">*</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ImageUploader
          onImageUploaded={onMainImageUpload}
          multiple={false}
          className="mb-4"
        />
        {project.mainImage && (
          <div>
            <label className="block text-sm font-medium mb-2">Eller angi URL manuelt:</label>
            <Input
              value={project.mainImage || ''}
              onChange={(e) => onProjectChange('mainImage', e.target.value)}
              placeholder="/lovable-uploads/..."
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MainImageSection;

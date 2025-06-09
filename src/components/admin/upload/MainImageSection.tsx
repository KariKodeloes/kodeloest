
import React from 'react';
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
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Hovedbilde <span className="text-red-500">*</span>
        </h3>
        <p className="mt-1 text-sm text-gray-600">Last opp eller angi URL til hovedbildet</p>
      </div>
      
      <div className="space-y-6">
        <ImageUploader
          onImageUploaded={onMainImageUpload}
          multiple={false}
          className="mb-4"
        />
        
        {project.mainImage && (
          <div className="space-y-4">
            <div>
              <label htmlFor="mainImageUrl" className="block text-sm font-medium text-gray-700">
                Eller angi URL manuelt:
              </label>
              <div className="mt-1">
                <Input
                  id="mainImageUrl"
                  name="mainImageUrl"
                  value={project.mainImage || ''}
                  onChange={(e) => onProjectChange('mainImage', e.target.value)}
                  placeholder="/lovable-uploads/..."
                  className="block w-full"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bildevisning:
              </label>
              <div className="w-full max-w-md">
                <img
                  src={project.mainImage}
                  alt={project.title || 'Hovedbilde'}
                  className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJpbGRlIGlra2UgZnVubmV0PC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainImageSection;

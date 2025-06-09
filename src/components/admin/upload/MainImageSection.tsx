
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
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          Hovedbilde <span className="text-red-500">*</span>
        </h3>
        <p className="mt-1 text-sm text-gray-600">Last opp eller angi URL til hovedbildet</p>
      </div>
      
      <div className="px-6 py-6">
        <div className="space-y-6">
          <ImageUploader
            onImageUploaded={onMainImageUpload}
            multiple={false}
            className="mb-4"
          />
          
          {project.mainImage && (
            <div>
              <label htmlFor="mainImageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                Eller angi URL manuelt:
              </label>
              <div className="mt-2">
                <Input
                  id="mainImageUrl"
                  name="mainImageUrl"
                  value={project.mainImage || ''}
                  onChange={(e) => onProjectChange('mainImage', e.target.value)}
                  placeholder="/lovable-uploads/..."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainImageSection;

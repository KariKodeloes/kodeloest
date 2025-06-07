
import React from 'react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Project } from '../../../data/mockData';
import { getCategoryOptions, getSubcategoryOptions } from '../../../constants/categories';

interface ProjectDetailsFormProps {
  project: Partial<Project>;
  onProjectChange: (field: keyof Project, value: any) => void;
}

const ProjectDetailsForm: React.FC<ProjectDetailsFormProps> = ({ project, onProjectChange }) => {
  const categoryOptions = getCategoryOptions();
  const subcategoryOptions = getSubcategoryOptions(project.category || '');

  console.log('ProjectDetailsForm render - project:', project);
  console.log('Category options in form:', categoryOptions);
  console.log('Subcategory options in form:', subcategoryOptions);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prosjektdetaljer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Tittel <span className="text-red-500">*</span>
          </label>
          <Input
            value={project.title || ''}
            onChange={(e) => onProjectChange('title', e.target.value)}
            placeholder="Prosjekttittel"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Undertittel</label>
          <Input
            value={project.subtitle || ''}
            onChange={(e) => onProjectChange('subtitle', e.target.value)}
            placeholder="Teknikk, størrelse etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Beskrivelse</label>
          <Textarea
            value={project.description || ''}
            onChange={(e) => onProjectChange('description', e.target.value)}
            placeholder="Prosjektbeskrivelse"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Kategori <span className="text-red-500">*</span>
            </label>
            <Select
              value={project.category || ''}
              onValueChange={(value) => {
                console.log('Category selected:', value);
                onProjectChange('category', value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Velg kategori" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-[9999] max-h-60 overflow-auto">
                {categoryOptions.map((option) => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value}
                    className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">År</label>
            <Input
              type="number"
              value={project.year || ''}
              onChange={(e) => onProjectChange('year', parseInt(e.target.value))}
              placeholder="2024"
            />
          </div>
        </div>

        {subcategoryOptions.length > 0 && (
          <div>
            <label className="block text-sm font-medium mb-2">Underkategori</label>
            <Select
              value={project.subcategory || ''}
              onValueChange={(value) => {
                console.log('Subcategory selected:', value);
                onProjectChange('subcategory', value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Velg underkategori" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-[9999] max-h-60 overflow-auto">
                {subcategoryOptions.map((option) => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value}
                    className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">
            Alt-tekst for bilder
            <span className="text-xs text-gray-500 block">
              Beskrivelse som leses opp av skjermlesere
            </span>
          </label>
          <Textarea
            value={project.altText || ''}
            onChange={(e) => onProjectChange('altText', e.target.value)}
            placeholder="Detaljert beskrivelse av bildet for skjermlesere..."
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsForm;

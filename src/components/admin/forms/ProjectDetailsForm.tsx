
import React from 'react';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
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
  console.log('Current category value:', project.category);
  console.log('Current subcategory value:', project.subcategory);

  const handleCategoryChange = (value: string) => {
    console.log('Category change handler called with:', value);
    onProjectChange('category', value);
    // Clear subcategory when category changes
    onProjectChange('subcategory', '');
  };

  const handleSubcategoryChange = (value: string) => {
    console.log('Subcategory change handler called with:', value);
    onProjectChange('subcategory', value);
  };

  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Prosjektdetaljer</h3>
        <p className="mt-1 text-sm text-gray-600">Grunnleggende informasjon om prosjektet</p>
      </div>
      
      <div className="px-6 py-6">
        <div className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Tittel <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <Input
                id="title"
                name="title"
                value={project.title || ''}
                onChange={(e) => onProjectChange('title', e.target.value)}
                placeholder="Prosjekttittel"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Subtitle */}
          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium leading-6 text-gray-900">
              Undertittel
            </label>
            <div className="mt-2">
              <Input
                id="subtitle"
                name="subtitle"
                value={project.subtitle || ''}
                onChange={(e) => onProjectChange('subtitle', e.target.value)}
                placeholder="Teknikk, størrelse etc."
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Beskrivelse
            </label>
            <div className="mt-2">
              <Textarea
                id="description"
                name="description"
                value={project.description || ''}
                onChange={(e) => onProjectChange('description', e.target.value)}
                placeholder="Prosjektbeskrivelse"
                rows={4}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Category and Year Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Kategori <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <Select
                  value={project.category || ''}
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                    <SelectValue placeholder="Velg kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                År
              </label>
              <div className="mt-2">
                <Input
                  id="year"
                  name="year"
                  type="number"
                  value={project.year || ''}
                  onChange={(e) => onProjectChange('year', parseInt(e.target.value))}
                  placeholder="2024"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* Subcategory */}
          {subcategoryOptions.length > 0 && (
            <div>
              <label htmlFor="subcategory" className="block text-sm font-medium leading-6 text-gray-900">
                Underkategori
              </label>
              <div className="mt-2">
                <Select
                  value={project.subcategory || ''}
                  onValueChange={handleSubcategoryChange}
                >
                  <SelectTrigger className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                    <SelectValue placeholder="Velg underkategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategoryOptions.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Alt Text */}
          <div>
            <label htmlFor="altText" className="block text-sm font-medium leading-6 text-gray-900">
              Alt-tekst for bilder
            </label>
            <p className="mt-1 text-sm text-gray-600">Beskrivelse som leses opp av skjermlesere</p>
            <div className="mt-2">
              <Textarea
                id="altText"
                name="altText"
                value={project.altText || ''}
                onChange={(e) => onProjectChange('altText', e.target.value)}
                placeholder="Detaljert beskrivelse av bildet for skjermlesere..."
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;

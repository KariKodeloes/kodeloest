import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeft, Save, Image } from 'lucide-react';
import { mockProjects, Project } from '../../data/mockData';
import { useToast } from '../../hooks/use-toast';
import ImageUploader from './ImageUploader';
import { getCategoryOptions, getSubcategoryOptions } from '../../constants/categories';

interface ProjectEditorProps {
  projectId: string | null;
  onClose: () => void;
  isNewProject?: boolean;
}

const ProjectEditor: React.FC<ProjectEditorProps> = ({ projectId, onClose, isNewProject = false }) => {
  const [project, setProject] = useState<Partial<Project>>({
    title: '',
    subtitle: '',
    description: '',
    year: new Date().getFullYear(),
    category: '',
    subcategory: '',
    altText: '',
    images: [],
    videos: [],
    mainImage: '',
    likes: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const categoryOptions = getCategoryOptions();
  const subcategoryOptions = getSubcategoryOptions(project.category || '');

  useEffect(() => {
    if (projectId && !isNewProject) {
      // Load existing project from mockProjects first
      const existingProject = mockProjects.find(p => p.id === projectId);
      if (existingProject) {
        // Check if there are any saved edits for this project
        const savedEdits = localStorage.getItem('admin_project_edits');
        const edits = savedEdits ? JSON.parse(savedEdits) : {};
        
        // Merge original project with any saved edits
        const projectWithEdits = edits[projectId] ? { ...existingProject, ...edits[projectId] } : existingProject;
        setProject(projectWithEdits);
      }
    }
  }, [projectId, isNewProject]);

  const generateProjectId = (): string => {
    return `new_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const validateProject = (project: Partial<Project>): string[] => {
    const errors: string[] = [];
    
    if (!project.title?.trim()) {
      errors.push('Tittel er påkrevd');
    }
    if (!project.category?.trim()) {
      errors.push('Kategori er påkrevd');
    }
    if (!project.mainImage?.trim()) {
      errors.push('Hovedbilde er påkrevd');
    }
    
    return errors;
  };

  const handleSave = async () => {
    const validationErrors = validateProject(project);
    
    if (validationErrors.length > 0) {
      toast({
        title: 'Validering feilet',
        description: validationErrors.join(', '),
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      if (isNewProject) {
        // Handle new project creation
        const newProjectId = generateProjectId();
        const completeProject: Project = {
          id: newProjectId,
          title: project.title || '',
          subtitle: project.subtitle,
          description: project.description || '',
          year: project.year || new Date().getFullYear(),
          category: project.category || '',
          subcategory: project.subcategory,
          altText: project.altText,
          images: project.images || [],
          videos: project.videos || [],
          mainImage: project.mainImage || '',
          likes: project.likes || 0
        };

        // Save new projects separately
        const existingNewProjects = localStorage.getItem('admin_new_projects');
        const newProjects = existingNewProjects ? JSON.parse(existingNewProjects) : [];
        newProjects.push(completeProject);
        localStorage.setItem('admin_new_projects', JSON.stringify(newProjects));

        toast({
          title: 'Prosjekt opprettet',
          description: 'Det nye prosjektet ble lagret'
        });
      } else {
        // Handle existing project edits
        const existingData = localStorage.getItem('admin_project_edits');
        const edits = existingData ? JSON.parse(existingData) : {};
        
        if (projectId) {
          edits[projectId] = project;
        }
        
        localStorage.setItem('admin_project_edits', JSON.stringify(edits));
        
        toast({
          title: 'Lagret',
          description: 'Prosjektet ble oppdatert'
        });
      }
      
      onClose();
    } catch (error) {
      toast({
        title: 'Feil',
        description: 'Kunne ikke lagre prosjektet',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof Project, value: any) => {
    setProject(prev => {
      const updated = {
        ...prev,
        [field]: value
      };
      
      // Clear subcategory if category changes
      if (field === 'category') {
        updated.subcategory = '';
      }
      
      return updated;
    });
  };

  const handleMainImageUpload = (imageUrl: string) => {
    setProject(prev => ({
      ...prev,
      mainImage: imageUrl
    }));
  };

  const handleGalleryImagesUpload = (imageUrls: string[]) => {
    setProject(prev => ({
      ...prev,
      images: [...(prev.images || []), ...imageUrls]
    }));
  };

  const handleGalleryImagesUpdate = (imageUrls: string[]) => {
    setProject(prev => ({
      ...prev,
      images: imageUrls
    }));
  };

  const handleSingleGalleryImageUpload = (imageUrl: string) => {
    setProject(prev => ({
      ...prev,
      images: [...(prev.images || []), imageUrl]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onClose}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tilbake
            </Button>
            <h1 className="text-2xl font-quicksand font-semibold">
              {isNewProject ? 'Nytt prosjekt' : 'Rediger prosjekt'}
            </h1>
          </div>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Lagrer...' : 'Lagre'}
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
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
              {project.altText && (
                <div className="mt-3 p-2 bg-green-50 rounded text-xs">
                  <strong>Alt-tekst:</strong> {project.altText}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Edit Form */}
          <div className="space-y-6">
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
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Prosjekttittel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Undertittel</label>
                  <Input
                    value={project.subtitle || ''}
                    onChange={(e) => handleChange('subtitle', e.target.value)}
                    placeholder="Teknikk, størrelse etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Beskrivelse</label>
                  <Textarea
                    value={project.description || ''}
                    onChange={(e) => handleChange('description', e.target.value)}
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
                      onValueChange={(value) => handleChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Velg kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
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
                      onChange={(e) => handleChange('year', parseInt(e.target.value))}
                      placeholder="2024"
                    />
                  </div>
                </div>

                {subcategoryOptions.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Underkategori</label>
                    <Select
                      value={project.subcategory || ''}
                      onValueChange={(value) => handleChange('subcategory', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Velg underkategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {subcategoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
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
                    onChange={(e) => handleChange('altText', e.target.value)}
                    placeholder="Detaljert beskrivelse av bildet for skjermlesere..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Main Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Hovedbilde <span className="text-red-500">*</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUploader
                  onImageUploaded={handleMainImageUpload}
                  multiple={false}
                  className="mb-4"
                />
                {project.mainImage && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Eller angi URL manuelt:</label>
                    <Input
                      value={project.mainImage || ''}
                      onChange={(e) => handleChange('mainImage', e.target.value)}
                      placeholder="/lovable-uploads/..."
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Gallery Images */}
            <Card>
              <CardHeader>
                <CardTitle>Bildegalleri</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUploader
                  onImageUploaded={handleSingleGalleryImageUpload}
                  onImagesUploaded={handleGalleryImagesUpdate}
                  multiple={true}
                  currentImages={project.images || []}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEditor;

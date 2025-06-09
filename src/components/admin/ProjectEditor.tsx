import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ArrowLeft, Save, Image } from 'lucide-react';
import { mockProjects, Project } from '../../data/mockData';
import { useToast } from '../../hooks/use-toast';

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

  useEffect(() => {
    if (projectId && !isNewProject) {
      const existingProject = mockProjects.find(p => p.id === projectId);
      if (existingProject) {
        setProject(existingProject);
      }
    }
  }, [projectId, isNewProject]);

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (projectId && !isNewProject) {
      // Find and update the project in mockProjects
      const projectIndex = mockProjects.findIndex(p => p.id === projectId);
      if (projectIndex !== -1) {
        // Update the project directly in the mockProjects array
        Object.assign(mockProjects[projectIndex], project);
        console.log('Updated project:', mockProjects[projectIndex]);
      }
    }
    
    setIsLoading(false);
    
    toast({
      title: 'Lagret',
      description: 'Prosjektet ble lagret successfully'
    });
    
    onClose();
  };

  const handleChange = (field: keyof Project, value: any) => {
    setProject(prev => ({
      ...prev,
      [field]: value
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
              {project.altText && (
                <div className="mt-3 p-2 bg-green-50 rounded text-xs">
                  <strong>Alt-tekst:</strong> {project.altText}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Edit Form */}
          <Card>
            <CardHeader>
              <CardTitle>Prosjektdetaljer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="block text-sm font-medium mb-2">Tittel</Label>
                <Input
                  value={project.title || ''}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Prosjekttittel"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">Undertittel</Label>
                <Input
                  value={project.subtitle || ''}
                  onChange={(e) => handleChange('subtitle', e.target.value)}
                  placeholder="Teknikk, størrelse etc."
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">Beskrivelse</Label>
                <Textarea
                  value={project.description || ''}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Prosjektbeskrivelse"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-2">Kategori</Label>
                  <Input
                    value={project.category || ''}
                    onChange={(e) => handleChange('category', e.target.value)}
                    placeholder="bilder, foto, som, design"
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium mb-2">År</Label>
                  <Input
                    type="number"
                    value={project.year || ''}
                    onChange={(e) => handleChange('year', parseInt(e.target.value))}
                    placeholder="2024"
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">Underkategori</Label>
                <Input
                  value={project.subcategory || ''}
                  onChange={(e) => handleChange('subcategory', e.target.value)}
                  placeholder="akvareller, mixed-media, etc."
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Alt-tekst for bilder
                  <span className="text-xs text-gray-500 block">
                    Beskrivelse som leses opp av skjermlesere
                  </span>
                </Label>
                <Textarea
                  value={project.altText || ''}
                  onChange={(e) => handleChange('altText', e.target.value)}
                  placeholder="Detaljert beskrivelse av bildet for skjermlesere..."
                  rows={3}
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">Hovedbilde URL</Label>
                <Input
                  value={project.mainImage || ''}
                  onChange={(e) => handleChange('mainImage', e.target.value)}
                  placeholder="/lovable-uploads/..."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectEditor;

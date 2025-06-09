
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ArrowLeft, Save, Type } from 'lucide-react';
import { mockProjects } from '../../data/mockData';
import { useToast } from '../../hooks/use-toast';

interface BulkAltTextEditorProps {
  onClose: () => void;
}

const BulkAltTextEditor: React.FC<BulkAltTextEditorProps> = ({ onClose }) => {
  const [altTexts, setAltTexts] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    mockProjects.forEach(project => {
      initial[project.id] = project.altText || '';
    });
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const projectsWithoutAltText = mockProjects.filter(project => !project.altText);

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Update the projects in mockProjects array
    mockProjects.forEach(project => {
      if (altTexts[project.id]) {
        project.altText = altTexts[project.id];
      }
    });
    
    // Also save to localStorage for persistence
    const existingData = localStorage.getItem('admin_project_edits');
    const edits = existingData ? JSON.parse(existingData) : {};
    
    Object.keys(altTexts).forEach(projectId => {
      if (altTexts[projectId]) {
        if (!edits[projectId]) {
          edits[projectId] = {};
        }
        edits[projectId].altText = altTexts[projectId];
      }
    });
    
    localStorage.setItem('admin_project_edits', JSON.stringify(edits));
    
    setIsLoading(false);
    
    toast({
      title: 'Lagret',
      description: 'Alt-tekster ble oppdatert'
    });
    
    onClose();
  };

  const handleAltTextChange = (projectId: string, value: string) => {
    setAltTexts(prev => ({
      ...prev,
      [projectId]: value
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
              Rediger alt-tekst
            </h1>
          </div>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Lagrer...' : 'Lagre alle'}
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {projectsWithoutAltText.length > 0 && (
          <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center">
              <Type className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">
                {projectsWithoutAltText.length} prosjekt(er) mangler alt-tekst
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className={!project.altText ? 'border-orange-200' : ''}>
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg font-quicksand">{project.title}</CardTitle>
                    {project.subtitle && (
                      <p className="text-sm text-gray-600 font-oswald">{project.subtitle}</p>
                    )}
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <Label className="block text-sm font-medium mb-2">
                    Alt-tekst for bilder
                    <span className="text-xs text-gray-500 block">
                      Beskrivelse som leses opp av skjermlesere
                    </span>
                  </Label>
                  <Textarea
                    value={altTexts[project.id] || ''}
                    onChange={(e) => handleAltTextChange(project.id, e.target.value)}
                    placeholder="Detaljert beskrivelse av bildet for skjermlesere..."
                    rows={3}
                    className={!project.altText ? 'border-orange-300 focus:border-orange-500' : ''}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulkAltTextEditor;

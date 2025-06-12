
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ArrowLeft, Save, Type } from 'lucide-react';
import { mockProjects } from '../../data/mockData';
import { useToast } from '../../hooks/use-toast';
import { sanitizeInput } from '../../utils/security';

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

  // Count projects without alt text
  const projectsWithoutAltText = mockProjects.filter(project => {
    const currentAltText = altTexts[project.id];
    return !currentAltText;
  });

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // Validate all alt texts before saving
      const validatedAltTexts: Record<string, string> = {};
      for (const [projectId, altText] of Object.entries(altTexts)) {
        const sanitized = sanitizeInput(altText);
        if (sanitized.length > 500) {
          throw new Error(`Alt-tekst for prosjekt ${projectId} er for lang (maks 500 tegn)`);
        }
        validatedAltTexts[projectId] = sanitized;
      }
      
      // Simulate save delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update the projects in mockProjects array directly
      mockProjects.forEach(project => {
        if (validatedAltTexts[project.id]) {
          project.altText = validatedAltTexts[project.id];
        }
      });
      
      toast({
        title: 'Lagret',
        description: 'Alt-tekster ble oppdatert'
      });
      
      onClose();
    } catch (error) {
      toast({
        title: 'Feil',
        description: error instanceof Error ? error.message : 'Kunne ikke lagre alt-tekster',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAltTextChange = (projectId: string, value: string) => {
    // Sanitize input on change
    const sanitized = sanitizeInput(value);
    setAltTexts(prev => ({
      ...prev,
      [projectId]: sanitized
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
          {mockProjects.map((project) => {
            const currentAltText = altTexts[project.id];
            const hasAltText = !!currentAltText;
            const isTextTooLong = currentAltText && currentAltText.length > 500;
            
            return (
              <Card key={project.id} className={!hasAltText ? 'border-orange-200' : ''}>
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
                        Beskrivelse som leses opp av skjermlesere (maks 500 tegn)
                      </span>
                    </Label>
                    <Textarea
                      value={altTexts[project.id] || ''}
                      onChange={(e) => handleAltTextChange(project.id, e.target.value)}
                      placeholder="Detaljert beskrivelse av bildet for skjermlesere..."
                      rows={3}
                      maxLength={500}
                      className={`${!hasAltText ? 'border-orange-300 focus:border-orange-500' : ''} ${isTextTooLong ? 'border-red-300 focus:border-red-500' : ''}`}
                    />
                    <div className="mt-1 text-xs text-gray-500">
                      {currentAltText ? currentAltText.length : 0}/500 tegn
                      {isTextTooLong && (
                        <span className="text-red-600 ml-2">For lang tekst!</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BulkAltTextEditor;

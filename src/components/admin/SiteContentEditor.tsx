
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';
import { getSiteContent, saveSiteContent, SiteContent } from '../../data/siteContent';
import { useToast } from '../../hooks/use-toast';

interface SiteContentEditorProps {
  onClose: () => void;
}

const SiteContentEditor: React.FC<SiteContentEditorProps> = ({ onClose }) => {
  const [content, setContent] = useState<SiteContent>(getSiteContent());
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    saveSiteContent(content);
    
    setIsLoading(false);
    
    toast({
      title: 'Lagret',
      description: 'Nettstedsinnhold ble oppdatert'
    });
    
    onClose();
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...content.aboutMeQuestions];
    newQuestions[index] = value;
    setContent({ ...content, aboutMeQuestions: newQuestions });
  };

  const addQuestion = () => {
    setContent({
      ...content,
      aboutMeQuestions: [...content.aboutMeQuestions, '']
    });
  };

  const removeQuestion = (index: number) => {
    const newQuestions = content.aboutMeQuestions.filter((_, i) => i !== index);
    setContent({ ...content, aboutMeQuestions: newQuestions });
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
              Rediger nettstedsinnhold
            </h1>
          </div>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Lagrer...' : 'Lagre endringer'}
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Homepage Quote */}
          <Card>
            <CardHeader>
              <CardTitle className="font-quicksand">Forsidensitat</CardTitle>
            </CardHeader>
            <CardContent>
              <Label className="block text-sm font-medium mb-2">
                Sitat som vises på forsiden
              </Label>
              <Textarea
                value={content.homepageQuote}
                onChange={(e) => setContent({ ...content, homepageQuote: e.target.value })}
                placeholder="Skriv inn sitatet for forsiden..."
                rows={4}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* About Me Content */}
          <Card>
            <CardHeader>
              <CardTitle className="font-quicksand">"Om meg" innhold</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="block text-sm font-medium mb-2">
                  Introduksjonstekst
                </Label>
                <Textarea
                  value={content.aboutMeIntro}
                  onChange={(e) => setContent({ ...content, aboutMeIntro: e.target.value })}
                  placeholder="Introduksjonstekst for Om meg-siden..."
                  rows={2}
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Spørsmålsliste
                  <span className="text-xs text-gray-500 block">
                    Kulepunktliste med spørsmål
                  </span>
                </Label>
                <div className="space-y-2">
                  {content.aboutMeQuestions.map((question, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        value={question}
                        onChange={(e) => handleQuestionChange(index, e.target.value)}
                        placeholder={`Spørsmål ${index + 1}...`}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeQuestion(index)}
                        disabled={content.aboutMeQuestions.length <= 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={addQuestion}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Legg til spørsmål
                  </Button>
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Avsluttende tekst
                </Label>
                <Textarea
                  value={content.aboutMeClosing}
                  onChange={(e) => setContent({ ...content, aboutMeClosing: e.target.value })}
                  placeholder="Avsluttende tekst etter spørsmålslisten..."
                  rows={3}
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Historieintroduksjon
                  <span className="text-xs text-gray-500 block">
                    Tekst som kommer før "Teppefall"-historien
                  </span>
                </Label>
                <Textarea
                  value={content.aboutMeStoryIntro}
                  onChange={(e) => setContent({ ...content, aboutMeStoryIntro: e.target.value })}
                  placeholder="Introduksjonstekst til historien..."
                  rows={3}
                />
              </div>

              <div>
                <Label className="block text-sm font-medium mb-2">
                  Historieavslutning
                  <span className="text-xs text-gray-500 block">
                    Tekst som avslutter før "Teppefall"-historien starter
                  </span>
                </Label>
                <Textarea
                  value={content.aboutMeStoryClosing}
                  onChange={(e) => setContent({ ...content, aboutMeStoryClosing: e.target.value })}
                  placeholder="Avsluttende tekst til historieintroduksjonen..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SiteContentEditor;

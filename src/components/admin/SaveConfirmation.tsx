
import React from 'react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { CheckCircle, Eye, Plus, ArrowLeft } from 'lucide-react';
import { Project } from '../../data/mockData';

interface SaveConfirmationProps {
  project: Partial<Project>;
  isNewProject: boolean;
  onBackToDashboard: () => void;
  onContinueEditing: () => void;
  onCreateNew: () => void;
  onPreviewOnSite: () => void;
}

const SaveConfirmation: React.FC<SaveConfirmationProps> = ({
  project,
  isNewProject,
  onBackToDashboard,
  onContinueEditing,
  onCreateNew,
  onPreviewOnSite
}) => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-xl font-quicksand">
          {isNewProject ? 'Prosjekt opprettet!' : 'Prosjekt lagret!'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.category}</p>
        </div>

        <div className="space-y-2">
          <Button 
            onClick={onPreviewOnSite}
            className="w-full"
            variant="outline"
          >
            <Eye className="h-4 w-4 mr-2" />
            Se på hovedsiden
          </Button>

          <Button 
            onClick={onBackToDashboard}
            className="w-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tilbake til dashboard
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={onContinueEditing}
              variant="outline"
              size="sm"
            >
              Fortsett å redigere
            </Button>
            <Button 
              onClick={onCreateNew}
              variant="outline"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              Nytt prosjekt
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SaveConfirmation;


import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

interface CancelButtonProps {
  onCancel: () => void;
  hasUnsavedChanges?: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({ 
  onCancel, 
  hasUnsavedChanges = false 
}) => {
  if (!hasUnsavedChanges) {
    return (
      <Button onClick={onCancel} variant="outline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Avbryt
      </Button>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Avbryt
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Avbryt redigering?</AlertDialogTitle>
          <AlertDialogDescription>
            Du har ulagrede endringer som vil gå tapt hvis du avbryter nå.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Fortsett å redigere</AlertDialogCancel>
          <AlertDialogAction onClick={onCancel} className="bg-red-600 hover:bg-red-700">
            Ja, avbryt
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelButton;

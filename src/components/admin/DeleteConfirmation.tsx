
import React from 'react';
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
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

interface DeleteConfirmationProps {
  projectTitle: string;
  onConfirm: () => void;
  isDeleting?: boolean;
  trigger?: React.ReactNode;
  variant?: 'button' | 'icon';
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ 
  projectTitle, 
  onConfirm, 
  isDeleting = false,
  trigger,
  variant = 'button'
}) => {
  const defaultTrigger = variant === 'icon' ? (
    <Button variant="destructive" size="sm">
      <Trash2 className="h-3 w-3 mr-1" />
      Slett
    </Button>
  ) : (
    <Button variant="destructive" size="sm" className="w-full">
      <Trash2 className="h-3 w-3 mr-1" />
      Slett prosjekt
    </Button>
  );

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger || defaultTrigger}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Slett prosjekt?</AlertDialogTitle>
          <AlertDialogDescription>
            Er du sikker på at du vil slette prosjektet "{projectTitle}"? 
            Denne handlingen kan ikke angres.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Avbryt</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm} 
            className="bg-red-600 hover:bg-red-700"
            disabled={isDeleting}
          >
            {isDeleting ? 'Sletter...' : 'Ja, slett'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;

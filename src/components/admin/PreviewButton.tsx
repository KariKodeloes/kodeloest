
import React from 'react';
import { Button } from '../ui/button';
import { Eye } from 'lucide-react';
import { Project } from '../../data/mockData';

interface PreviewButtonProps {
  project: Partial<Project>;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ 
  project, 
  variant = 'outline',
  size = 'default'
}) => {
  const handlePreview = () => {
    if (!project.category) {
      console.warn('Cannot preview project without category');
      return;
    }

    // Map categories to routes
    const categoryRoutes: Record<string, string> = {
      'Akvareller': '/bilder/akvareller',
      'Mixed Media': '/bilder/mixed-media',
      'Tegning': '/bilder/tegning',
      'Ved sjøen': '/foto/ved-sjoen',
      'I fjellet': '/foto/i-fjellet',
      'Flora': '/foto/flora',
      'Byliv': '/foto/byliv',
      'Dyr': '/foto/dyr',
      'Redesign og gjenbruk': '/som/redesign-og-gjenbruk',
      'Rett fra rullen': '/som/rett-fra-rullen',
      'Design': '/design'
    };

    const route = categoryRoutes[project.category] || '/';
    window.open(route, '_blank');
  };

  return (
    <Button 
      onClick={handlePreview}
      variant={variant}
      size={size}
      disabled={!project.category}
    >
      <Eye className="h-4 w-4 mr-2" />
      Forhåndsvis på siden
    </Button>
  );
};

export default PreviewButton;

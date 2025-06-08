
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { mockProjects, Project } from '../../data/mockData';
import { useToast } from '../../hooks/use-toast';
import ProjectDetailsForm from './forms/ProjectDetailsForm';
import ProjectPreview from './preview/ProjectPreview';
import MainImageSection from './upload/MainImageSection';
import GallerySection from './upload/GallerySection';
import SaveConfirmation from './SaveConfirmation';
import PreviewButton from './PreviewButton';
import { useProjectValidation } from './hooks/useProjectValidation';
import { useProjectSave } from './hooks/useProjectSave';

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

  const { toast } = useToast();
  const { validateProject } = useProjectValidation();
  const { 
    saveProject, 
    isLoading, 
    showConfirmation, 
    savedProject, 
    wasNewProject, 
    hideConfirmation 
  } = useProjectSave();

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

    await saveProject(project, isNewProject, projectId);
  };

  const handleChange = (field: keyof Project, value: any) => {
    console.log('ProjectEditor handleChange:', field, value);
    setProject(prev => {
      const updated = {
        ...prev,
        [field]: value
      };
      
      // Clear subcategory if category changes
      if (field === 'category') {
        console.log('Category changed, clearing subcategory');
        updated.subcategory = '';
      }
      
      console.log('Updated project state:', updated);
      return updated;
    });
  };

  const handleMainImageUpload = (imageUrl: string) => {
    setProject(prev => ({
      ...prev,
      mainImage: imageUrl
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

  const handleConfirmationActions = {
    onBackToDashboard: () => {
      hideConfirmation();
      onClose();
    },
    onContinueEditing: () => {
      hideConfirmation();
    },
    onCreateNew: () => {
      hideConfirmation();
      setProject({
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
    },
    onPreviewOnSite: () => {
      if (savedProject?.category) {
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
        const route = categoryRoutes[savedProject.category] || '/';
        window.open(route, '_blank');
      }
    }
  };

  if (showConfirmation && savedProject) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <SaveConfirmation
          project={savedProject}
          isNewProject={wasNewProject}
          {...handleConfirmationActions}
        />
      </div>
    );
  }

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
          <div className="flex items-center space-x-2">
            <PreviewButton project={project} />
            <Button onClick={handleSave} disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? 'Lagrer...' : 'Lagre'}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <ProjectPreview project={project} />

          {/* Edit Form */}
          <div className="space-y-6">
            <ProjectDetailsForm 
              project={project} 
              onProjectChange={handleChange} 
            />

            <MainImageSection 
              project={project}
              onMainImageUpload={handleMainImageUpload}
              onProjectChange={handleChange}
            />

            <GallerySection 
              project={project}
              onSingleGalleryImageUpload={handleSingleGalleryImageUpload}
              onGalleryImagesUpdate={handleGalleryImagesUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEditor;

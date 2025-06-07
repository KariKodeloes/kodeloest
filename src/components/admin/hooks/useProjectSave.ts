
import { useState } from 'react';
import { Project } from '../../../data/mockData';
import { useToast } from '../../../hooks/use-toast';

export const useProjectSave = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateProjectId = (): string => {
    return `new_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const saveProject = async (
    project: Partial<Project>, 
    isNewProject: boolean, 
    projectId: string | null,
    onClose: () => void
  ) => {
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

  return { saveProject, isLoading };
};

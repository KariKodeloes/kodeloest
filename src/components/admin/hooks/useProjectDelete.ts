
import { useState } from 'react';
import { useToast } from '../../../hooks/use-toast';

export const useProjectDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const deleteProject = async (projectId: string) => {
    setIsDeleting(true);
    
    try {
      console.log('Deleting project:', projectId);
      
      // Check if it's a new project
      if (projectId.startsWith('new_')) {
        // Remove from new projects
        const newProjectsData = localStorage.getItem('admin_new_projects');
        if (newProjectsData) {
          const newProjects = JSON.parse(newProjectsData);
          const filteredProjects = newProjects.filter((p: any) => p.id !== projectId);
          localStorage.setItem('admin_new_projects', JSON.stringify(filteredProjects));
        }
      } else {
        // For original/edited projects, add to deleted list
        const deletedProjectsData = localStorage.getItem('admin_deleted_projects');
        const deletedProjects = deletedProjectsData ? JSON.parse(deletedProjectsData) : [];
        
        if (!deletedProjects.includes(projectId)) {
          deletedProjects.push(projectId);
          localStorage.setItem('admin_deleted_projects', JSON.stringify(deletedProjects));
        }
        
        // Also remove from edits if it exists there
        const editsData = localStorage.getItem('admin_project_edits');
        if (editsData) {
          const edits = JSON.parse(editsData);
          if (edits[projectId]) {
            delete edits[projectId];
            localStorage.setItem('admin_project_edits', JSON.stringify(edits));
          }
        }
      }
      
      toast({
        title: 'Prosjekt slettet',
        description: 'Prosjektet ble slettet permanent.',
      });
      
      return true;
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: 'Feil ved sletting',
        description: 'Kunne ikke slette prosjektet. Prøv igjen.',
        variant: 'destructive'
      });
      return false;
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    deleteProject,
    isDeleting
  };
};

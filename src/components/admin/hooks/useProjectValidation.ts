
import { Project } from '../../../data/mockData';

export const useProjectValidation = () => {
  const validateProject = (project: Partial<Project>): string[] => {
    const errors: string[] = [];
    
    if (!project.title?.trim()) {
      errors.push('Tittel er påkrevd');
    }
    if (!project.category?.trim()) {
      errors.push('Kategori er påkrevd');
    }
    if (!project.mainImage?.trim()) {
      errors.push('Hovedbilde er påkrevd');
    }
    
    return errors;
  };

  return { validateProject };
};

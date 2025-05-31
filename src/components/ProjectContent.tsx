
import React from 'react';
import { Project } from '../data/mockData';

interface ProjectContentProps {
  project: Project;
  isListView?: boolean;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project, isListView = false }) => {
  const titleClass = isListView ? "text-xl" : "text-lg";
  const descriptionClass = isListView ? "text-base" : "text-sm line-clamp-3";

  return (
    <div className={isListView ? "flex-1 p-6" : "p-4"}>
      <div className="mb-2">
        <h2 className={`${titleClass} font-quicksand font-semibold text-foreground`}>
          {project.title}
        </h2>
      </div>
      
      {project.subtitle && (
        <h4 className="font-oswald font-normal text-foreground mb-2" style={{ fontSize: '1rem' }}>
          {project.subtitle}
        </h4>
      )}
      
      <p className={`text-foreground leading-relaxed font-oswald font-light mb-3 ${descriptionClass} ${project.subtitle ? '' : 'mt-1'}`}>
        {project.description}
      </p>
    </div>
  );
};

export default ProjectContent;

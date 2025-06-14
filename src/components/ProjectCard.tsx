
import React, { useState } from 'react';
import { Project } from '../data/mockData';
import ImageDialog from './ImageDialog';
import ImageCarousel from './ImageCarousel';
import ImageCarouselList from './ImageCarouselList';
import ProjectContent from './ProjectContent';
import LikeButton from './LikeButton';

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, viewMode }) => {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  const [dialogImageIndex, setDialogImageIndex] = useState(0);

  // Get admin edits from localStorage
  const getProjectAltText = (projectId: string): string => {
    const existingData = localStorage.getItem('admin_project_edits');
    if (existingData) {
      const edits = JSON.parse(existingData);
      return edits[projectId]?.altText || project.altText || '';
    }
    return project.altText || '';
  };

  const altText = getProjectAltText(project.id);

  const openImageDialog = (index: number = 0) => {
    setDialogImageIndex(index);
    setIsImageDialogOpen(true);
  };

  if (viewMode === 'list') {
    return (
      <>
        <div className="rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(224, 218, 210)' }}>
          <div className="flex flex-col md:flex-row" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
            <ImageCarouselList
              images={project.images}
              videos={project.videos}
              title={project.title}
              onImageClick={openImageDialog}
              altText={altText}
            />

            <ProjectContent project={project} isListView={true} />
            
            {/* Like button container for list view */}
            <div className="p-6 pt-0 md:pt-6" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <LikeButton projectId={project.id} initialLikes={project.likes || 0} />
            </div>
          </div>
        </div>

        <ImageDialog
          images={project.images}
          videos={project.videos}
          isOpen={isImageDialogOpen}
          onClose={() => setIsImageDialogOpen(false)}
          initialIndex={dialogImageIndex}
          title={project.title}
          altText={altText}
        />
      </>
    );
  }

  return (
    <>
      <div className="rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden group" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(224, 218, 210)' }}>
        <ImageCarousel
          images={project.images}
          videos={project.videos}
          title={project.title}
          onImageClick={openImageDialog}
          altText={altText}
        />

        <ProjectContent project={project} />
        
        {/* Like button */}
        <div className="px-4 pb-4" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
          <LikeButton projectId={project.id} initialLikes={project.likes || 0} />
        </div>
      </div>

      <ImageDialog
        images={project.images}
        videos={project.videos}
        isOpen={isImageDialogOpen}
        onClose={() => setIsImageDialogOpen(false)}
        initialIndex={dialogImageIndex}
        title={project.title}
        altText={altText}
      />
    </>
  );
};

export default ProjectCard;

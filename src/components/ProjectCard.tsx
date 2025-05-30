
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

  const openImageDialog = (index: number = 0) => {
    setDialogImageIndex(index);
    setIsImageDialogOpen(true);
  };

  if (viewMode === 'list') {
    return (
      <>
        <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <ImageCarouselList
              images={project.images}
              videos={project.videos}
              title={project.title}
              onImageClick={openImageDialog}
            />

            <ProjectContent project={project} isListView={true} />
            
            {/* Like button container for list view */}
            <div className="p-6 pt-0 md:pt-6">
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
        />
      </>
    );
  }

  return (
    <>
      <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
        <ImageCarousel
          images={project.images}
          videos={project.videos}
          title={project.title}
          onImageClick={openImageDialog}
        />

        <ProjectContent project={project} />
        
        {/* Like button */}
        <div className="px-4 pb-4">
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
      />
    </>
  );
};

export default ProjectCard;

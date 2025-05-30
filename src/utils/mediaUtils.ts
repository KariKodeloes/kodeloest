
export const isVideoFile = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

export const getAllMedia = (project: { images: string[]; videos?: string[] }): string[] => {
  return [...project.images, ...(project.videos || [])];
};

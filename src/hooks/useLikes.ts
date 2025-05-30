
import { useState, useEffect } from 'react';

interface LikesData {
  [projectId: string]: number;
}

interface UserLikes {
  [projectId: string]: boolean;
}

export const useLikes = () => {
  const [likesData, setLikesData] = useState<LikesData>({});
  const [userLikes, setUserLikes] = useState<UserLikes>({});

  useEffect(() => {
    // Last inn likes-data fra localStorage
    const storedLikes = localStorage.getItem('project-likes');
    const storedUserLikes = localStorage.getItem('user-likes');
    
    if (storedLikes) {
      setLikesData(JSON.parse(storedLikes));
    }
    
    if (storedUserLikes) {
      setUserLikes(JSON.parse(storedUserLikes));
    }
  }, []);

  const toggleLike = (projectId: string, initialLikes: number = 0) => {
    const hasLiked = userLikes[projectId] || false;
    const currentLikes = likesData[projectId] ?? initialLikes;
    
    const newLikesData = {
      ...likesData,
      [projectId]: hasLiked ? currentLikes - 1 : currentLikes + 1
    };
    
    const newUserLikes = {
      ...userLikes,
      [projectId]: !hasLiked
    };
    
    setLikesData(newLikesData);
    setUserLikes(newUserLikes);
    
    // Lagre i localStorage
    localStorage.setItem('project-likes', JSON.stringify(newLikesData));
    localStorage.setItem('user-likes', JSON.stringify(newUserLikes));
  };

  const getLikes = (projectId: string, initialLikes: number = 0): number => {
    return likesData[projectId] ?? initialLikes;
  };

  const hasUserLiked = (projectId: string): boolean => {
    return userLikes[projectId] || false;
  };

  return {
    toggleLike,
    getLikes,
    hasUserLiked
  };
};

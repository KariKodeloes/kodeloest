
import React from 'react';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';
import { useLikes } from '../hooks/useLikes';

interface LikeButtonProps {
  projectId: string;
  initialLikes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ projectId, initialLikes }) => {
  const { toggleLike, getLikes, hasUserLiked } = useLikes();

  const currentLikes = getLikes(projectId, initialLikes);
  const userHasLiked = hasUserLiked(projectId);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLike(projectId, initialLikes);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleLikeClick}
        className={`p-2 rounded-full transition-colors ${
          userHasLiked 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
        }`}
      >
        <Heart 
          className={`w-4 h-4 ${userHasLiked ? 'fill-current' : ''}`} 
        />
      </Button>
      <span className="text-sm font-medium text-foreground">
        {currentLikes} like{currentLikes !== 1 ? 's' : ''}
      </span>
    </div>
  );
};

export default LikeButton;


import React from 'react';
import { Button } from './ui/button';

type SortOrder = 'most-liked' | 'least-liked';

interface SortButtonProps {
  sortOrder: SortOrder;
  onToggleSort: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ sortOrder, onToggleSort }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggleSort}
      className="sort-button flex items-center gap-2 bg-white text-[#066298] hover:text-[#013B5E] hover:bg-gray-50 disabled:bg-[#CDDFF0] disabled:text-gray-500 border-0"
    >
      <span className="material-icon text-sm">favorite</span>
      {sortOrder === 'most-liked' ? 'Flest likes først' : 'Færrest likes først'}
    </Button>
  );
};

export default SortButton;

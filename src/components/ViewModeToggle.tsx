
import React from 'react';
import { Button } from './ui/button';

type ViewMode = 'grid' | 'list';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center rounded-lg overflow-hidden shadow-sm" style={{ border: '1px solid rgb(255, 255, 255)', backgroundColor: 'rgb(255, 255, 255)' }}>
      <Button
        variant={viewMode === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewModeChange('grid')}
        className={`view-mode-button rounded-none border-0 ${
          viewMode === 'grid' 
            ? 'bg-[rgb(215,124,4)] text-white' 
            : 'bg-white text-[#066298] hover:bg-gray-50'
        }`}
        style={{
          border: '1px solid rgb(255, 255, 255)',
          backgroundColor: viewMode === 'grid' ? 'rgb(215, 124, 4)' : 'rgb(255, 255, 255)'
        }}
      >
        <span className={`material-icon ${viewMode === 'grid' ? 'text-white' : 'text-[#066298]'}`}>view_module</span>
      </Button>
      <Button
        variant={viewMode === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewModeChange('list')}
        className={`view-mode-button rounded-none border-0 ${
          viewMode === 'list' 
            ? 'bg-[rgb(215,124,4)] text-white' 
            : 'bg-white text-[#066298] hover:bg-gray-50'
        }`}
        style={{
          border: '1px solid rgb(255, 255, 255)',
          backgroundColor: viewMode === 'list' ? 'rgb(215, 124, 4)' : 'rgb(255, 255, 255)'
        }}
      >
        <span className={`material-icon ${viewMode === 'list' ? 'text-white' : 'text-[#066298]'}`}>view_list</span>
      </Button>
    </div>
  );
};

export default ViewModeToggle;

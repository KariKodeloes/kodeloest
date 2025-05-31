
import React from 'react';
import { Button } from './ui/button';

type ViewMode = 'grid' | 'list';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center border border-border rounded-lg overflow-hidden">
      <Button
        variant={viewMode === 'grid' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewModeChange('grid')}
        className="rounded-none border-0"
        style={viewMode === 'grid' ? { backgroundColor: '#E68200', color: 'white' } : {}}
      >
        <span className="material-icon">view_module</span>
      </Button>
      <Button
        variant={viewMode === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewModeChange('list')}
        className="rounded-none border-0"
        style={viewMode === 'list' ? { backgroundColor: '#E68200', color: 'white' } : {}}
      >
        <span className="material-icon">view_list</span>
      </Button>
    </div>
  );
};

export default ViewModeToggle;

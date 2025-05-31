
import React from 'react';

interface CategoryChipsProps {
  subcategories: Array<{ name: string; path: string; displayName: string }>;
  selectedCategory: string;
  onCategoryClick: (categoryName: string) => void;
}

const CategoryChips: React.FC<CategoryChipsProps> = ({
  subcategories,
  selectedCategory,
  onCategoryClick
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {/* "Alle" chip */}
      <button
        onClick={() => onCategoryClick('alle')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
          selectedCategory === 'alle' 
            ? 'bg-[#E68200] text-white border-[#E68200]' 
            : 'bg-white border-gray-300 disabled:bg-[#CDDFF0] disabled:text-gray-500 hover:bg-gray-50'
        }`}
        style={selectedCategory !== 'alle' ? { 
          color: '#066298 !important' 
        } : {}}
        onMouseEnter={(e) => {
          if (selectedCategory !== 'alle') {
            e.currentTarget.style.color = '#013B5E !important';
          }
        }}
        onMouseLeave={(e) => {
          if (selectedCategory !== 'alle') {
            e.currentTarget.style.color = '#066298 !important';
          }
        }}
      >
        Alle
      </button>
      
      {/* Subcategory chips */}
      {subcategories.map((sub) => (
        <button
          key={sub.path}
          onClick={() => onCategoryClick(sub.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
            selectedCategory === sub.name 
              ? 'bg-[#E68200] text-white border-[#E68200]' 
              : 'bg-white border-gray-300 disabled:bg-[#CDDFF0] disabled:text-gray-500 hover:bg-gray-50'
          }`}
          style={selectedCategory !== sub.name ? { 
            color: '#066298 !important' 
          } : {}}
          onMouseEnter={(e) => {
            if (selectedCategory !== sub.name) {
              e.currentTarget.style.color = '#013B5E !important';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedCategory !== sub.name) {
              e.currentTarget.style.color = '#066298 !important';
            }
          }}
        >
          {sub.displayName}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;

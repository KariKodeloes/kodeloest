
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
            : 'bg-white text-[#066298] hover:text-[#013B5E] hover:bg-gray-50 border-gray-300 disabled:bg-[#CDDFF0] disabled:text-gray-500'
        }`}
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
              : 'bg-white text-[#066298] hover:text-[#013B5E] hover:bg-gray-50 border-gray-300 disabled:bg-[#CDDFF0] disabled:text-gray-500'
          }`}
        >
          {sub.displayName}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;


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
        className={`category-chip px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          selectedCategory === 'alle' 
            ? 'selected bg-[rgb(215,124,4)] text-white' 
            : 'bg-white disabled:bg-[#CDDFF0] disabled:text-gray-500 hover:bg-gray-50'
        }`}
      >
        Alle
      </button>
      
      {/* Subcategory chips */}
      {subcategories.map((sub) => (
        <button
          key={sub.path}
          onClick={() => onCategoryClick(sub.name)}
          className={`category-chip px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            selectedCategory === sub.name 
              ? 'selected bg-[rgb(215,124,4)] text-white' 
              : 'bg-white disabled:bg-[#CDDFF0] disabled:text-gray-500 hover:bg-gray-50'
          }`}
        >
          {sub.displayName}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;

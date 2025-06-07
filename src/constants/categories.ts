
export const CATEGORIES = {
  bilder: {
    label: 'Bilder',
    subcategories: ['akvareller', 'mixed-media', 'tegning']
  },
  foto: {
    label: 'Foto',
    subcategories: ['dyr', 'flora', 'ved-sjoen', 'i-fjellet', 'byliv']
  },
  som: {
    label: 'Som',
    subcategories: ['redesign-og-gjenbruk', 'rett-fra-rullen']
  },
  design: {
    label: 'Design',
    subcategories: []
  },
  diy: {
    label: 'DIY',
    subcategories: []
  }
} as const;

export const getCategoryOptions = () => {
  const options = Object.entries(CATEGORIES).map(([key, value]) => ({
    value: key,
    label: value.label
  }));
  console.log('Category options:', options);
  return options;
};

export const getSubcategoryOptions = (category: string) => {
  console.log('Getting subcategories for category:', category);
  const categoryData = CATEGORIES[category as keyof typeof CATEGORIES];
  if (!categoryData || categoryData.subcategories.length === 0) {
    console.log('No subcategories found for category:', category);
    return [];
  }
  
  const subcategoryOptions = categoryData.subcategories.map(subcategory => ({
    value: subcategory,
    label: subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace(/-/g, ' ')
  }));
  console.log('Subcategory options:', subcategoryOptions);
  return subcategoryOptions;
};

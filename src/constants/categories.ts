
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
  return Object.entries(CATEGORIES).map(([key, value]) => ({
    value: key,
    label: value.label
  }));
};

export const getSubcategoryOptions = (category: string) => {
  const categoryData = CATEGORIES[category as keyof typeof CATEGORIES];
  if (!categoryData || categoryData.subcategories.length === 0) {
    return [];
  }
  
  return categoryData.subcategories.map(subcategory => ({
    value: subcategory,
    label: subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace(/-/g, ' ')
  }));
};

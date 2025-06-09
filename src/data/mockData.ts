export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: number;
  category: string;
  subcategory?: string;
  images?: string[];
  videos?: string[];
  mainImage?: string;
  altText?: string;
  likes?: number;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Akvarell av Skog',
    description: 'Et vakkert akvarellmaleri som fanger essensen av en rolig skog.',
    year: 2022,
    category: 'Bildekunst',
    subcategory: 'akvareller',
    images: ['/lovable-uploads/akvarell-1.webp'],
    altText: 'Akvarell av en skog med grønne trær og en blå himmel',
    likes: 10,
  },
  {
    id: '2',
    title: 'Fjellandskap Foto',
    description: 'Et fantastisk bilde av et majestetisk fjellandskap ved solnedgang.',
    year: 2023,
    category: 'Foto',
    subcategory: 'i-fjellet',
    images: ['/lovable-uploads/fjell-1.webp'],
    altText: 'Bilde av et fjellandskap med snødekte topper og en oransje himmel',
    likes: 15,
  },
  {
    id: '3',
    title: 'Redesign Jakke',
    description: 'En unik redesignet jakke laget av resirkulerte materialer.',
    year: 2022,
    category: 'Som',
    subcategory: 'redesign-og-gjenbruk',
    images: ['/lovable-uploads/redesign-1.webp'],
    altText: 'Redesignet jakke med forskjellige farger og mønstre',
    likes: 8,
  },
  {
    id: '4',
    title: 'Moderne Stol Design',
    description: 'En moderne stol designet med rene linjer og minimalistisk stil.',
    year: 2023,
    category: 'Design',
    images: ['/lovable-uploads/design-1.webp'],
    altText: 'Moderne stol med en hvit ramme og en grå pute',
    likes: 12,
  },
  {
    id: '5',
    title: 'DIY Smykker',
    description: 'Hjemmelagde smykker laget med forskjellige perler og materialer.',
    year: 2022,
    category: 'DIY',
    images: ['/lovable-uploads/diy-1.webp'],
    altText: 'Hjemmelagde smykker med forskjellige perler og farger',
    likes: 7,
  },
  {
    id: '6',
    title: 'Byliv Foto',
    description: 'Urban fotografi som viser det pulserende livet i en travel by.',
    year: 2023,
    category: 'Foto',
    subcategory: 'byliv',
    images: ['/lovable-uploads/byliv-1.webp'],
    altText: 'Bilde av en travel gate i en by med høye bygninger og mange mennesker',
    likes: 11,
  },
  {
    id: '7',
    title: 'Akvarell Blomster',
    description: 'Delikate akvarellmalerier av forskjellige blomster i lyse farger.',
    year: 2022,
    category: 'Bildekunst',
    subcategory: 'akvareller',
    images: ['/lovable-uploads/akvarell-2.webp'],
    altText: 'Akvarell av forskjellige blomster i lyse farger',
    likes: 9,
  },
  {
    id: '8',
    title: 'Gjenbruk Skulptur',
    description: 'En kreativ skulptur laget av gjenbrukte materialer og funnet objekter.',
    year: 2023,
    category: 'Som',
    subcategory: 'redesign-og-gjenbruk',
    images: ['/lovable-uploads/redesign-2.webp'],
    altText: 'Skulptur laget av gjenbrukte materialer og funnet objekter',
    likes: 14,
  },
  {
    id: '9',
    title: 'Flora Foto',
    description: 'Nærbilde fotografi av forskjellige plantearter og blomster.',
    year: 2022,
    category: 'Foto',
    subcategory: 'flora',
    images: ['/lovable-uploads/flora-1.webp'],
    altText: 'Nærbilde av en blomst med detaljerte kronblader og farger',
    likes: 13,
  },
  {
    id: '10',
    title: 'Tegning Portrett',
    description: 'En detaljert tegning av et portrett med realistiske trekk.',
    year: 2023,
    category: 'Bildekunst',
    subcategory: 'tegning',
    images: ['/lovable-uploads/tegning-1.webp'],
    altText: 'Detaljert tegning av et portrett med realistiske trekk',
    likes: 16,
  },
  {
    id: '11',
    title: 'Ved Sjøen Foto',
    description: 'Et fredelig fotografi av en kystlinje med bølger og sand.',
    year: 2022,
    category: 'Foto',
    subcategory: 'ved-sjoen',
    images: ['/lovable-uploads/ved-sjoen-1.webp'],
    altText: 'Fotografi av en kystlinje med bølger og sand',
    likes: 10,
  },
  {
    id: '12',
    title: 'Mixed Media Abstrakt',
    description: 'Et abstrakt kunstverk som kombinerer forskjellige materialer og teknikker.',
    year: 2023,
    category: 'Bildekunst',
    subcategory: 'mixed-media',
    images: ['/lovable-uploads/mixed-media-1.webp'],
    altText: 'Abstrakt kunstverk med forskjellige materialer og teknikker',
    likes: 15,
  },
  {
    id: '13',
    title: 'Rett Fra Rullen Tekstil',
    description: 'Tekstilkunst rett fra rullen, viser unike mønstre og design.',
    year: 2022,
    category: 'Som',
    subcategory: 'rett-fra-rullen',
    images: ['/lovable-uploads/rett-fra-rullen-1.webp'],
    altText: 'Tekstilkunst med unike mønstre og design',
    likes: 8,
  },
  {
    id: '14',
    title: 'Dyr Foto',
    description: 'Fotografi av forskjellige dyr i deres naturlige habitat.',
    year: 2023,
    category: 'Foto',
    subcategory: 'dyr',
    images: ['/lovable-uploads/dyr-1.webp'],
    altText: 'Fotografi av et dyr i sitt naturlige habitat',
    likes: 12,
  },
  {
    id: '15',
    title: 'Akvarell Landskap',
    description: 'En akvarell som fanger et idyllisk landskap med myke farger.',
    year: 2022,
    category: 'Bildekunst',
    subcategory: 'akvareller',
    images: ['/lovable-uploads/akvarell-3.webp'],
    altText: 'Akvarell av et landskap med myke farger',
    likes: 7,
  },
];

// Safe function to parse localStorage JSON with fallback
const safeParseLocalStorage = (key: string, fallback: any = null) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    // Clear corrupted data
    localStorage.removeItem(key);
    return fallback;
  }
};

export const getProjectsByCategory = (category: string): Project[] => {
  console.log('🔍 getProjectsByCategory called with:', category);
  
  // Start with original projects
  let allProjects = [...mockProjects];
  console.log('📦 Original mockProjects count:', allProjects.length);

  // Get deleted projects list with safe parsing
  const deletedProjects = safeParseLocalStorage('admin_deleted_projects', []);
  console.log('🗑️ Deleted projects:', deletedProjects);

  // Only filter if deletedProjects is a valid array
  if (Array.isArray(deletedProjects) && deletedProjects.length > 0) {
    allProjects = allProjects.filter(project => !deletedProjects.includes(project.id));
    console.log('📦 After removing deleted projects:', allProjects.length);
  } else {
    console.log('📦 No valid deleted projects list, keeping all original projects');
  }

  // Add new projects with safe parsing
  const newProjects = safeParseLocalStorage('admin_new_projects', []);
  if (Array.isArray(newProjects) && newProjects.length > 0) {
    console.log('✨ Found new projects:', newProjects);
    
    // Process new projects
    const processedNewProjects = newProjects.map((project: Project) => {
      if (project.mainImage && !project.images?.includes(project.mainImage)) {
        return {
          ...project,
          images: [project.mainImage, ...(project.images || [])]
        };
      }
      return project;
    });
    
    allProjects = [...allProjects, ...processedNewProjects];
    console.log('📦 After adding new projects:', allProjects.length);
  }

  // Apply edits to existing projects with safe parsing
  const edits = safeParseLocalStorage('admin_project_edits', {});
  if (edits && typeof edits === 'object' && Object.keys(edits).length > 0) {
    console.log('✏️ Found project edits:', edits);
    
    allProjects = allProjects.map(project => {
      if (edits[project.id]) {
        const editedProject = { ...project, ...edits[project.id] };
        console.log('✏️ Applied edits to project:', project.id, editedProject);
        
        // Ensure mainImage is properly set for display
        if (editedProject.mainImage && !editedProject.images?.includes(editedProject.mainImage)) {
          editedProject.images = [editedProject.mainImage, ...(editedProject.images || [])];
        }
        
        return editedProject;
      }
      return project;
    });
  }

  console.log('📦 Total projects after all processing:', allProjects.length);

  // Enhanced category filtering
  const filteredProjects = allProjects.filter(project => {
    const projectCategory = project.category.toLowerCase();
    const targetCategory = category.toLowerCase();
    
    // Direct match
    if (projectCategory === targetCategory) {
      console.log(`✅ Direct match: "${project.title}" category "${project.category}" matches "${category}"`);
      return true;
    }
    
    // Handle specific category mappings
    const categoryMappings: Record<string, string[]> = {
      'bilder': ['bildekunst', 'bilder'],
      'bildekunst': ['bildekunst', 'bilder'],
      'foto': ['foto'],
      'som': ['som'],
      'design': ['design'],
      'diy': ['diy']
    };
    
    const validCategories = categoryMappings[targetCategory] || [targetCategory];
    const matches = validCategories.includes(projectCategory);
    
    if (matches) {
      console.log(`✅ Mapping match: "${project.title}" category "${project.category}" matches "${category}"`);
    }
    
    return matches;
  });

  console.log(`✅ Final filtered projects for category "${category}":`, filteredProjects.map(p => ({ id: p.id, title: p.title, category: p.category })));
  
  // Sort by year (newest first) and then by title
  filteredProjects.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return a.title.localeCompare(b.title);
  });

  return filteredProjects;
};

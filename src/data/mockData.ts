
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: number;
  images: string[];
  category: string;
  subcategory?: string;
  mainImage: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Farvel vinter!',
    subtitle: 'Akvarell, 300 gr bomull - 32x24 cm.',
    description: 'Lengter mot sommer. Lek med pigment, salt og drømmer.',
    year: 2024,
    images: ['/lovable-uploads/f339d8fd-fe3d-4540-9f13-acfad88162cd.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/f339d8fd-fe3d-4540-9f13-acfad88162cd.png'
  },
  {
    id: '2',
    title: 'Blågrønt hav',
    subtitle: 'Akvarell, 300 gr bomull, 17x24 cm.',
    description: 'Fra en sommerdag i 2023 på vakre Vrnik, Korcula. En dag skal jeg tilbake dit.',
    year: 2023,
    images: ['/lovable-uploads/60faf3ef-db7d-4c44-8d6c-dff40616af79.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/60faf3ef-db7d-4c44-8d6c-dff40616af79.png'
  },
  {
    id: '3',
    title: 'Øyenstikker',
    subtitle: 'Monoprint akryl og akvarell, 300 gr bomull',
    description: 'Eget foto fra tur i marka i landskap med tjern. Mobilkamera er gull og alltid med.',
    year: 2024,
    images: ['/lovable-uploads/bab0576c-50ae-48f6-a998-2e953d6af2c3.png', '/lovable-uploads/cf0f53e3-5b2b-4bde-bb0f-0263cd35300b.png'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: '/lovable-uploads/bab0576c-50ae-48f6-a998-2e953d6af2c3.png'
  },
  {
    id: '4',
    title: 'Morgen ved kysten',
    subtitle: 'Fotoessay',
    description: 'Tidlig morgenlys ved den norske kysten. Fanget inn øyeblikket når sollyset treffer bølgene.',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'],
    category: 'foto',
    subcategory: 'ved-sjoen',
    mainImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop'
  },
  {
    id: '5',
    title: 'Vintage kjole redesign',
    subtitle: 'Ny stil på gammelt stoff',
    description: 'Forvandlet en kjole fra 80-tallet til en moderne, minimalistisk design med nye snitt og detaljer.',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'],
    category: 'som',
    subcategory: 'redesign',
    mainImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
  },
  {
    id: '6',
    title: 'Moderne plakat design',
    subtitle: 'Typografi og farger',
    description: 'Et rent og moderne plakatdesign som kombinerer typografi med organiske former.',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'],
    category: 'design',
    mainImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
  },
  {
    id: '7',
    title: 'Hjemmelaget keramikk',
    subtitle: 'Kopper og skåler',
    description: 'Håndlaget keramikk med naturlige farger og former. Perfekt for hverdagsbruk.',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop'],
    category: 'diy',
    mainImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop'
  }
];

export const getProjectsByCategory = (category: string, subcategory?: string): Project[] => {
  return mockProjects.filter(project => {
    if (subcategory) {
      return project.category === category && project.subcategory === subcategory;
    }
    return project.category === category;
  });
};

export const getRandomProjects = (excludeCategory?: string, count: number = 6): Project[] => {
  let filteredProjects = mockProjects;
  if (excludeCategory) {
    filteredProjects = mockProjects.filter(project => project.category !== excludeCategory);
  }
  
  return filteredProjects
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

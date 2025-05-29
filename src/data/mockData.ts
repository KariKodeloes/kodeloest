
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
    title: 'Fjelllandskap i akvarell',
    subtitle: 'Nordnorsk natur',
    description: 'Et maleri inspirert av fjellene i Lofoten. Brukte akvarellfarger for å fange den unike atmosfæren.',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    title: 'Abstrakt komposisjon',
    subtitle: 'Mixed media experiment',
    description: 'En kombinasjon av akryl, kull og pastellkritt på lerret. Utforsker kontrasten mellom varme og kalde farger.',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&h=600&fit=crop'
  },
  {
    id: '3',
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
    id: '4',
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
    id: '5',
    title: 'Moderne plakat design',
    subtitle: 'Typografi og farger',
    description: 'Et rent og moderne plakatdesign som kombinerer typografi med organiske former.',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'],
    category: 'design',
    mainImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
  },
  {
    id: '6',
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

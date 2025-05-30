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
  likes?: number;
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
    mainImage: '/lovable-uploads/f339d8fd-fe3d-4540-9f13-acfad88162cd.png',
    likes: 12
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
    mainImage: '/lovable-uploads/60faf3ef-db7d-4c44-8d6c-dff40616af79.png',
    likes: 8
  },
  {
    id: '3',
    title: 'Øyenstikker',
    subtitle: 'Monoprint akryl og akvarell, 300 gr bomull',
    description: 'Eget foto fra tur i marka i landskap med tjern. Mobilkamera er gull og alltid med.',
    year: 2024,
    images: ['/lovable-uploads/cf0f53e3-5b2b-4bde-bb0f-0263cd35300b.png', '/lovable-uploads/bab0576c-50ae-48f6-a998-2e953d6af2c3.png'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: '/lovable-uploads/cf0f53e3-5b2b-4bde-bb0f-0263cd35300b.png',
    likes: 15
  },
  {
    id: '4',
    title: 'Rådyr i kveldssol',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Et utrolig øyeblikk på vei hjem fra stranda en varm maikveld i 2024. Noen ganger er det helt ok at mobilen ikke er så langt unna.',
    year: 2024,
    images: ['/lovable-uploads/6a425ba4-8585-4f92-b02a-d48cb9454fcc.png'],
    category: 'foto',
    subcategory: 'dyr',
    mainImage: '/lovable-uploads/6a425ba4-8585-4f92-b02a-d48cb9454fcc.png',
    likes: 23
  },
  {
    id: '8',
    title: 'Gatekatt i Athen',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Midt mellom turister som kavet seg ned fra Akropolis dukket denne firbeinte pelsvarianten opp fra en kjeller.',
    year: 2024,
    images: ['/lovable-uploads/93938560-85b3-40d9-a065-0abdbe9405eb.png'],
    category: 'foto',
    subcategory: 'dyr',
    mainImage: '/lovable-uploads/93938560-85b3-40d9-a065-0abdbe9405eb.png',
    likes: 18
  },
  {
    id: '9',
    title: 'To rufsete kompiser',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'I en sving opp trappene til Chora på Serifos ventet disse to håpefulle. Kanskje hadde jeg en godbit på lur, eller i det minste litt kos. Sorry, pus.',
    year: 2024,
    images: ['/lovable-uploads/9ffa0aa0-c66f-4d2b-a1ca-702993533a31.png'],
    category: 'foto',
    subcategory: 'dyr',
    mainImage: '/lovable-uploads/9ffa0aa0-c66f-4d2b-a1ca-702993533a31.png',
    likes: 31
  },
  {
    id: '10',
    title: 'Hjort på naboøya',
    subtitle: 'Mobilfoto - Iphone 13',
    description: 'En liten svipptur med båt fra øya Korcula i Kroatia fikk vi nærkontakt med disse. De var vant til folk og lurte veldig på hva vi hadde i veskene våre. "Ikke mat dyrene!" holdt nok ikke i møte med disse dådyrøynene.',
    year: 2024,
    images: ['/lovable-uploads/07a06f19-03fd-4d01-be84-08e76e2c155e.png'],
    category: 'foto',
    subcategory: 'dyr',
    mainImage: '/lovable-uploads/07a06f19-03fd-4d01-be84-08e76e2c155e.png',
    likes: 5
  },
  {
    id: '11',
    title: 'Ridderspore en sommerkveld',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'I villnisset og et hav av andre blomster sto denne riddersporen og nikket mot duskregnet. Vakker og giftig.',
    year: 2024,
    images: ['/lovable-uploads/9bbed135-8fa4-45f2-ae37-25793d32edfe.png'],
    category: 'foto',
    subcategory: 'flora',
    mainImage: '/lovable-uploads/9bbed135-8fa4-45f2-ae37-25793d32edfe.png',
    likes: 3
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
    mainImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    likes: 7
  },
  {
    id: '6',
    title: 'Moderne plakat design',
    subtitle: 'Typografi og farger',
    description: 'Et rent og moderne plakatdesign som kombinerer typografi med organiske former.',
    year: 2024,
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'],
    category: 'design',
    mainImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    likes: 5
  },
  {
    id: '7',
    title: 'Hjemmelaget keramikk',
    subtitle: 'Kopper og skåler',
    description: 'Håndlaget keramikk med naturlige farger og former. Perfekt for hverdagsbruk.',
    year: 2023,
    images: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop'],
    category: 'diy',
    mainImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    likes: 9
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

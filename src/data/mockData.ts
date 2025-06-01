export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: number;
  images: string[];
  videos?: string[];
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
    images: ['/lovable-uploads/fb8e46a7-aaf8-4666-bea3-95e4b35bb947.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/fb8e46a7-aaf8-4666-bea3-95e4b35bb947.png',
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
    id: '25',
    title: 'Blå iris',
    subtitle: 'Akvarell, 300 gr bomull - 30x40 cm',
    description: 'Det lå lenge nederst i bunken, et tidlig første av litt størrelse. Ett år og en runde med svamp i dusjen. Utrolig hva papir av bomull tåler og en sjanse til kan gjøre med en "fiasko". Gicleé i A2 finnes.',
    year: 2024,
    images: ['/lovable-uploads/60f7a916-b435-406b-8d28-5db02ee31fbd.png', '/lovable-uploads/4c9ea0c4-5373-4762-953a-4ae3903afb41.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/60f7a916-b435-406b-8d28-5db02ee31fbd.png',
    likes: 0
  },
  {
    id: '26',
    title: 'Fra havet',
    subtitle: 'Akvarell, 300 gr bomull - 10,5x24 cm',
    description: 'Malt en tidlig morgen på balkongen i Hellas mens sola så vidt var over horisonten og jeg gledet meg til å snorkle.',
    year: 2024,
    images: ['/lovable-uploads/7036f89a-e144-49ae-a484-b56f45c894b3.png', '/lovable-uploads/8fb0357f-bd49-4a6d-9350-227685982ce8.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/7036f89a-e144-49ae-a484-b56f45c894b3.png',
    likes: 0
  },
  {
    id: '27',
    title: 'Fuglesky',
    subtitle: 'Akvarell, 300 gr bomull - 24x30 cm',
    description: 'De organiske formene til fugler trekker sydover om høsten ser nesten kunstige ut. Og de er ikke så lette å fange med penselen heller.',
    year: 2024,
    images: ['/lovable-uploads/d09022b6-9d2d-49e8-a189-898e90f36faf.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/d09022b6-9d2d-49e8-a189-898e90f36faf.png',
    likes: 0
  },
  {
    id: '28',
    title: 'Kuhaugen 1',
    subtitle: 'Monoprint og akvarell, 300 gr bomull - 24x17 cm',
    description: 'Jeg likte linjene i fotoet av Kuhaugen i snødrev og halvmørke. Et motiv jeg har kommet tilbake til.',
    year: 2024,
    images: ['/lovable-uploads/178f87a0-b030-44db-b5b6-9c0f7cb06047.png'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: '/lovable-uploads/178f87a0-b030-44db-b5b6-9c0f7cb06047.png',
    likes: 0
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
    id: '22',
    title: 'Faller 2',
    subtitle: 'Håndkolorert gicleétrykk - A2',
    description: 'Jeg tar sats og vet ikke helt hvor jeg lander eller om sikringene holder.',
    year: 2024,
    images: ['/lovable-uploads/01e8e2b5-0bb1-42ca-85f6-6f3e09838c7e.png'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: '/lovable-uploads/01e8e2b5-0bb1-42ca-85f6-6f3e09838c7e.png',
    likes: 0
  },
  {
    id: '24',
    title: 'Ridderspore',
    subtitle: 'Monoprint akryl og akvarell - 240 gr bomull',
    description: 'Et sommerminne fra Sandnessjøen ble til et trykk via gel-plate og akryl før akvarellfargene blir lagt på. Noen små detaljer påført med hvit tusj til slutt.',
    year: 2024,
    images: ['/lovable-uploads/4cf9aafb-69c8-482b-ac9e-41b60eac85a8.png', '/lovable-uploads/8107365d-1971-449a-ae2a-a2680e379a75.png'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: '/lovable-uploads/4cf9aafb-69c8-482b-ac9e-41b60eac85a8.png',
    likes: 0
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
    id: '5',
    title: 'Bluse i råsilke',
    subtitle: 'Mønster: Fibremood',
    description: 'Når noen rydder i gamle stoffrester hender det at det drypper på meg. Dette nydelige stoffet ble brukt til siste rest.',
    year: 2024,
    images: ['/lovable-uploads/270178c3-07b4-4cc5-bfce-2b2537185530.png', '/lovable-uploads/2c5ac3f3-2647-49c3-841c-ced119e9c1cc.png'],
    category: 'som',
    subcategory: 'gjenbruk',
    mainImage: '/lovable-uploads/270178c3-07b4-4cc5-bfce-2b2537185530.png',
    likes: 0
  },
  {
    id: '7',
    title: 'Sengegavl',
    subtitle: 'Ikea-hack',
    description: 'Lyst på sengegavl, men det må det gå an å lage selv? Buksehenger, rørisolasjon, madrassrest, symaskin og litt stoff. Vips - en uke senere og litt kvalitetstid med borhammeren: Oppe!',
    year: 2024,
    images: ['/lovable-uploads/7a70fc1b-b967-4946-941d-3e835ee417c2.png', '/lovable-uploads/674bf0fc-5a2b-4524-a692-49f6779c8bc8.png', '/lovable-uploads/e1968c75-7311-4fa2-b957-f3074b920289.png', '/lovable-uploads/8746cf39-6f07-4468-974e-f384c867280b.png'],
    category: 'diy',
    mainImage: '/lovable-uploads/7a70fc1b-b967-4946-941d-3e835ee417c2.png',
    likes: 0
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
    id: '12',
    title: 'Høst på Ladestien',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Fargene på høsten står ikke noe tilbake for sommerpaletten. Kan det være lind?',
    year: 2024,
    images: ['/lovable-uploads/509fe9b2-f186-42d2-8f77-d8c07c0a44dc.png'],
    category: 'foto',
    subcategory: 'flora',
    mainImage: '/lovable-uploads/509fe9b2-f186-42d2-8f77-d8c07c0a44dc.png',
    likes: 2
  },
  {
    id: '13',
    title: 'Horseidstranda pyntet og klar',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Ikke at det fantastiske landskapet på Horseidstranda trengte pynt. De popper flott opp der de ligger mellom sanddynene.',
    year: 2024,
    images: ['/lovable-uploads/cd2f8215-2c4a-496b-9a78-00ff8b9a4fcc.png'],
    category: 'foto',
    subcategory: 'ved-sjoen',
    mainImage: '/lovable-uploads/cd2f8215-2c4a-496b-9a78-00ff8b9a4fcc.png',
    likes: 4
  },
  {
    id: '14',
    title: 'Albuskjell på Haversand',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Når jeg kunne vasse rundt i 20 graders vann i Lofoten og knipse i vei på en av de vakreste strendene. Store Molla altså <3',
    year: 2024,
    images: ['/lovable-uploads/fa777469-8049-4193-a37a-bf39f2285185.png'],
    category: 'foto',
    subcategory: 'ved-sjoen',
    mainImage: '/lovable-uploads/fa777469-8049-4193-a37a-bf39f2285185.png',
    likes: 6
  },
  {
    id: '15',
    title: 'Fra løper til veske',
    subtitle: 'Mobilfoto - Iphone 8',
    description: 'Et brukfunn fra loppemarked fikk et nytt liv som veske. Så mye flott håndverk ligger stua bort i skuffer og skap.',
    year: 2024,
    images: ['/lovable-uploads/f9cb4e5a-3791-4fb8-8a98-89f9ab272f88.png', '/lovable-uploads/579a3d8f-7652-4fc8-9080-2060a08937fc.png'],
    category: 'som',
    subcategory: 'redesign',
    mainImage: '/lovable-uploads/f9cb4e5a-3791-4fb8-8a98-89f9ab272f88.png',
    likes: 0
  },
  {
    id: '16',
    title: 'Festdrakt til 17. mai',
    subtitle: 'Mobilfoto - Iphone 8',
    description: 'Etter et besøk i en stoffbutikk i Oslo dro jeg med meg hjem sort ullstoff, brunt og grønt brokadestoff til liv og gullfarget silkestoff til skjorte. Mønster: En billig festdrakt ble kopiert snittet fra før den ble videresolgt.',
    year: 2024,
    images: ['/lovable-uploads/77f69a42-7da3-4b1f-95b7-6b403489ea44.png', '/lovable-uploads/6389e454-0ba9-4358-ae94-c6f7ab914b6e.png', '/lovable-uploads/3dd1351b-341b-40d9-a14f-9306f5f2ad1c.png', '/lovable-uploads/65920c07-be36-493d-8d78-1a3de7828886.png'],
    category: 'som',
    subcategory: 'rett-fra-rullen',
    mainImage: '/lovable-uploads/77f69a42-7da3-4b1f-95b7-6b403489ea44.png',
    likes: 0
  },
  {
    id: '17',
    title: 'Forkledd som frihet',
    subtitle: 'Remarkable strek',
    description: 'Det er vanskelig å ikke bli engasjert når verden står på hodet og løgnene sitter løst. Tegnet til "Inktober" før valgkampen 2020.',
    year: 2020,
    images: ['/lovable-uploads/b616f4ad-a9a1-48bb-9ae1-bd95f9205c15.png'],
    category: 'bilder',
    subcategory: 'tegning',
    mainImage: '/lovable-uploads/b616f4ad-a9a1-48bb-9ae1-bd95f9205c15.png',
    likes: 0
  },
  {
    id: '18',
    title: 'Midtsandtangen',
    subtitle: 'Canon speilrefleks',
    description: 'Fargene ved sjøen en kald vinterdag på strandanlegget på Midtsandtangen står ikke noe tilbake for en varm sommerkveld.',
    year: 2024,
    images: ['/lovable-uploads/e5fd026f-3972-44eb-b147-0435173bdbd0.png', '/lovable-uploads/171f8dd1-6187-45d2-b10a-e9b505e98316.png'],
    category: 'foto',
    subcategory: 'ved-sjoen',
    mainImage: '/lovable-uploads/e5fd026f-3972-44eb-b147-0435173bdbd0.png',
    likes: 0
  },
  {
    id: '19',
    title: 'SUP og idyll på Skæret',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Bare en tusletur hjemmefra har jeg denne bademuligheten. Lyset og fargene på sensommerkvelder er magisk.',
    year: 2024,
    images: ['/lovable-uploads/081fdbc3-fa0c-4105-9984-843d121413f8.png'],
    category: 'foto',
    subcategory: 'ved-sjoen',
    mainImage: '/lovable-uploads/081fdbc3-fa0c-4105-9984-843d121413f8.png',
    likes: 0
  },
  {
    id: '20',
    title: 'Logodesign og branding',
    subtitle: 'Grafisk design',
    description: 'Sykkelspesialisten skulle ut av en kjede og ønsket hjelp til å finne nytt navn og design av logo. Og ja - de selger elsykler og har gnistrende god service.',
    year: 2024,
    images: ['/lovable-uploads/20ea83b1-f989-451b-890d-c561a008914b.png'],
    category: 'design',
    mainImage: '/lovable-uploads/20ea83b1-f989-451b-890d-c561a008914b.png',
    likes: 0
  },
  {
    id: '21',
    title: 'Bordkort og vimpler til dåp',
    subtitle: 'Akvarell, print og manuell stans',
    description: 'Når to små ser dagens lys er ikke nybakt mormor sen å be. Vimplene skal gjenbrukes på barnerommene etter dåpen.',
    year: 2024,
    images: ['/lovable-uploads/47f5f469-b2ab-425c-91a3-0b6abad22bc6.png', '/lovable-uploads/2055523a-9a8f-4869-af1a-7a7da4cc9258.png'],
    category: 'design',
    mainImage: '/lovable-uploads/47f5f469-b2ab-425c-91a3-0b6abad22bc6.png',
    likes: 0
  },
  {
    id: '23',
    title: 'Fra sofatrekk til kåpe',
    subtitle: 'Ikea-hack og burdamønster',
    description: 'Mange av gjenbrukstekstilene får jeg fra venner som rydder i skuffer og skap. Jeg skal slite med denne denimkåpa i 100\' martindale en stund.',
    year: 2024,
    images: ['/lovable-uploads/2c4a0928-dd65-4fcd-b3d6-8df04520061e.png', '/lovable-uploads/9b5d5876-67a8-4b64-a7fa-656a7f59224d.png'],
    category: 'som',
    subcategory: 'gjenbruk',
    mainImage: '/lovable-uploads/2c4a0928-dd65-4fcd-b3d6-8df04520061e.png',
    likes: 0
  },
  {
    id: '29',
    title: 'Lumpa 1',
    subtitle: 'Iphone 15',
    description: 'Høstfarger ved et tjern 3 mil sør for Trondheim.',
    year: 2024,
    images: ['/lovable-uploads/03a48a95-f221-4754-b54d-f40ab4d3d388.png'],
    category: 'foto',
    subcategory: 'i-fjellet',
    mainImage: '/lovable-uploads/03a48a95-f221-4754-b54d-f40ab4d3d388.png',
    likes: 0
  },
  {
    id: '30',
    title: 'Lumpa 2',
    subtitle: 'Iphone 15',
    description: 'Grafiske linjer og former i grønne, gule og grå toner i et lite tjern en høstdag. Lite bær - mye foto.',
    year: 2024,
    images: ['/lovable-uploads/e777e638-1922-4994-8d3e-082351568638.png'],
    category: 'foto',
    subcategory: 'i-fjellet',
    mainImage: '/lovable-uploads/e777e638-1922-4994-8d3e-082351568638.png',
    likes: 0
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

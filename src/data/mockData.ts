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
  altText?: string;
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
    likes: 12,
    altText: ''
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
    likes: 8,
    altText: ''
  },
  {
    id: '41',
    title: '3 Vintermotiver',
    subtitle: 'Akvarell, 300 gr bomull - 20x20 og 10x10',
    description: 'Lekne, kvadratiske vintermotiver hvor fargene har fått flyte.',
    year: 2024,
    images: ['/lovable-uploads/a877d46e-338c-4f28-9cef-2196ff060092.png', '/lovable-uploads/e73c9fae-c48d-4b27-8345-6557e8cfb328.png', '/lovable-uploads/7ea1c63b-de47-4ba5-a6de-500be985780c.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/a877d46e-338c-4f28-9cef-2196ff060092.png',
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
  },
  {
    id: '37',
    title: 'Rallsjå, Saltstraumen',
    subtitle: 'Monoprint akryl og akvarell, 240 gr bomull, A4',
    description: 'Utsikten dette falleferdige huset har: Rett mot spektakulære Saltstraumen og busslaster med turistene som kommer for å se tidevannet snu.',
    year: 2024,
    images: ['/lovable-uploads/f847c50d-aca0-4371-ad50-df9edeb2fa85.png'],
    category: 'bilder',
    subcategory: 'mixed-media',
    mainImage: '/lovable-uploads/f847c50d-aca0-4371-ad50-df9edeb2fa85.png',
    likes: 0,
    altText: ''
  },
  {
    id: '38',
    title: 'Julemarked 2024',
    subtitle: 'Akvarell, Photoshop og Figma',
    description: 'Drifitge damer gikk sammen og laget julemarked i ei gate på Lademoen. Salget gikk bra og kaféen myldra av folk. Inntektene fra loddsalget gikk til "Leger uten grenser".',
    year: 2024,
    images: ['/lovable-uploads/6235d691-91a8-46b5-b378-255395274627.png', '/lovable-uploads/5b88cc89-bdd6-4746-841b-dd46e9e09f7c.png'],
    category: 'design',
    mainImage: '/lovable-uploads/6235d691-91a8-46b5-b378-255395274627.png',
    likes: 0,
    altText: ''
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
    likes: 15,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 23,
    altText: ''
  },
  {
    id: '5',
    title: 'Bluse i råsilke',
    subtitle: 'Mønster: Fibremood',
    description: 'Når noen rydder i gamle stoffrester hender det at det drypper på meg. Dette nydelige stoffet ble brukt til siste rest.',
    year: 2024,
    images: ['/lovable-uploads/270178c3-07b4-4cc5-bfce-2b2537185530.png', '/lovable-uploads/2c5ac3f3-2647-49c3-841c-ced119e9c1cc.png'],
    category: 'som',
    subcategory: 'redesign-og-gjenbruk',
    mainImage: '/lovable-uploads/270178c3-07b4-4cc5-bfce-2b2537185530.png',
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 18,
    altText: ''
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
    likes: 31,
    altText: ''
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
    likes: 3,
    altText: ''
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
    likes: 2,
    altText: ''
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
    likes: 4,
    altText: ''
  },
  {
    id: '14',
    title: 'Albuskjell på Haversand',
    subtitle: 'Mobilfoto - Iphone 15',
    description: 'Når jeg kunne vasse rundt i 20 graders vann i Lofoten og knipse i vei på en av de vakreste strendene. Visste du forresten at de egentlig er snegler og ikke skjell? Store Molla altså <3',
    year: 2024,
    images: ['/lovable-uploads/fa777469-8049-4193-a37a-bf39f2285185.png'],
    category: 'foto',
    subcategory: 'ved-sjoen',
    mainImage: '/lovable-uploads/fa777469-8049-4193-a37a-bf39f2285185.png',
    likes: 6,
    altText: ''
  },
  {
    id: '15',
    title: 'Fra løper til veske',
    subtitle: 'Mobilfoto - Iphone 8',
    description: 'Et brukfunn fra loppemarked fikk et nytt liv som veske. Så mye flott håndverk ligger stua bort i skuffer og skap.',
    year: 2024,
    images: ['/lovable-uploads/f9cb4e5a-3791-4fb8-8a98-89f9ab272f88.png', '/lovable-uploads/579a3d8f-7652-4fc8-9080-2060a08937fc.png'],
    category: 'som',
    subcategory: 'redesign-og-gjenbruk',
    mainImage: '/lovable-uploads/f9cb4e5a-3791-4fb8-8a98-89f9ab272f88.png',
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
  },
  {
    id: '23',
    title: 'Fra sofatrekk til kåpe',
    subtitle: 'Ikea-hack og burdamønster',
    description: 'Mange av gjenbrukstekstilene får jeg fra venner som rydder i skuffer og skap. Jeg skal slite med denne denimkåpa i 100\' martindale en stund.',
    year: 2024,
    images: ['/lovable-uploads/2c4a0928-dd65-4fcd-b3d6-8df04520061e.png', '/lovable-uploads/9b5d5876-67a8-4b64-a7fa-656a7f59224d.png'],
    category: 'som',
    subcategory: 'redesign-og-gjenbruk',
    mainImage: '/lovable-uploads/2c4a0928-dd65-4fcd-b3d6-8df04520061e.png',
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
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
    likes: 0,
    altText: ''
  },
  {
    id: '31',
    title: 'Hvor ble dere av?',
    subtitle: 'Iphone 15',
    description: 'Ungsau på leting etter flokken sin i Trollheimen. Etter intens breking hørte vi bjeller i skaret bak: Lykkelig gjenforening og uhell i fossen avverget.',
    year: 2024,
    images: ['/lovable-uploads/82685a3b-5857-472a-9b59-c5d42cdf4317.png'],
    category: 'foto',
    subcategory: 'i-fjellet',
    mainImage: '/lovable-uploads/82685a3b-5857-472a-9b59-c5d42cdf4317.png',
    likes: 0,
    altText: ''
  },
  {
    id: '32',
    title: 'Irrgrønn sommerkveld',
    subtitle: 'Iphone 15',
    description: 'Grønnfargene som speiler seg i Estenstaddammen er det ingen grunn til å øke intensiteten på. Kveldshimmelen spiller også på lag.',
    year: 2024,
    images: ['/lovable-uploads/815c9c7f-8014-4f48-8886-09b45bbf1264.png'],
    category: 'foto',
    subcategory: 'i-fjellet',
    mainImage: '/lovable-uploads/815c9c7f-8014-4f48-8886-09b45bbf1264.png',
    likes: 0,
    altText: ''
  },
  {
    id: '33',
    title: 'Feststemte gardiner på vift',
    subtitle: 'Jakke og skjørt',
    description: 'I et skap hos en antikvitetshandler dukket noen fargerike stofflengder opp. Resultatet har jeg brukt mye, men sjelden sammen. Mønsteret er det samme som for boksy ulljakke, men jeg endret kragen slik at den fikk avrundede hjørner.',
    year: 2024,
    images: ['/lovable-uploads/1cee23b2-eb97-4ba2-a356-6440a2358329.png', '/lovable-uploads/b9448231-23ef-4992-9138-7d8eeb5f477c.png', '/lovable-uploads/a123573d-6664-4904-8ea1-cd4b761df923.png'],
    category: 'som',
    subcategory: 'redesign-og-gjenbruk',
    mainImage: '/lovable-uploads/1cee23b2-eb97-4ba2-a356-6440a2358329.png',
    likes: 0,
    altText: ''
  },
  {
    id: '34',
    title: 'Stjerneklart torg',
    subtitle: 'Iphone 13',
    description: 'Når det nærmer seg jul i Trondheim er sentrum vakkert lyssatt. En runde i pariserhjulet står fortsatt på to-do-lista mi.',
    year: 2024,
    images: ['/lovable-uploads/2138495a-b513-4632-abb4-70d15c403155.png'],
    category: 'foto',
    subcategory: 'byliv',
    mainImage: '/lovable-uploads/2138495a-b513-4632-abb4-70d15c403155.png',
    likes: 0,
    altText: ''
  },
  {
    id: '35',
    title: 'Myk stripematch',
    subtitle: 'Viscose',
    description: 'Det er ingen hemmelighet at jeg liker striper. Og når de treffer så godt er det ekstra artig å vimse rundt i myk, hjemmesydd raglangenser. Stoffet fant jeg i en butikk i Egersund. Et av mange feriekupp :)',
    year: 2024,
    images: ['/lovable-uploads/569fc2ae-ec14-4402-a321-efe3af5d5214.png', '/lovable-uploads/413087af-871e-473b-babd-fb5d7cef218e.png'],
    category: 'som',
    subcategory: 'rett-fra-rullen',
    mainImage: '/lovable-uploads/569fc2ae-ec14-4402-a321-efe3af5d5214.png',
    likes: 0,
    altText: ''
  },
  {
    id: '36',
    title: 'Fra pledd til jakke 1',
    subtitle: 'Burmamønster',
    description: 'I en bunke med pledd fant jeg dette bruktfunnet som kunne fått et langt liv i sofaen min. Lysten til å teste ut et nytt mønster og på en ny jakke ble for stor.',
    year: 2024,
    images: ['/lovable-uploads/8cac5d4d-c1b2-41e4-8e29-e63a90ecac34.png', '/lovable-uploads/72e83a49-8288-4359-b99b-d63c3d6e3de9.png', '/lovable-uploads/6e2ca778-7186-421b-b32a-141a7efd65a3.png'],
    category: 'som',
    subcategory: 'redesign-og-gjenbruk',
    mainImage: '/lovable-uploads/72e83a49-8288-4359-b99b-d63c3d6e3de9.png',
    likes: 0,
    altText: ''
  },
  {
    id: '39',
    title: 'Rød valmue',
    subtitle: 'Akvarell, 300 gr bomull - 34x54 cm',
    description: 'Dette lå lenge i bunken "mislykka", men ga det en ny sjanse. Etter runder med svam og ny maling klarte jeg endelig si "ferdig". Glad jeg ikke ga det opp.',
    year: 2024,
    images: ['/lovable-uploads/7b2a7d77-6996-4d82-a52d-68b801d8c3f9.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/7b2a7d77-6996-4d82-a52d-68b801d8c3f9.png',
    likes: 0,
    altText: ''
  },
  {
    id: '40',
    title: 'Katt og jul',
    subtitle: 'Akvarell, 300 gr bomull - 10,5 x 10,5 cm',
    description: 'Hva er mer naturlig for "crazy catlady" enn å bruke pus til motiver på julekort. Disse forsvant fort på julemarkedet. Flere som liker pus.',
    year: 2024,
    images: ['/lovable-uploads/c32a1b01-6fc1-47b2-bb10-8ef599f1728c.png', '/lovable-uploads/a55ed4d4-eea2-4fa1-b81a-7584c2c20750.png', '/lovable-uploads/86dd3aa2-d33f-42c8-91d2-2a2d358ed726.png'],
    category: 'bilder',
    subcategory: 'akvareller',
    mainImage: '/lovable-uploads/c32a1b01-6fc1-47b2-bb10-8ef599f1728c.png',
    likes: 0,
    altText: ''
  }
];

export const getProjectsByCategory = (category: string, subcategory?: string): Project[] => {
  // Get projects from mockProjects
  let mockFilteredProjects = mockProjects.filter(project => {
    if (subcategory) {
      return project.category === category && project.subcategory === subcategory;
    }
    return project.category === category;
  });

  // Get new projects from localStorage
  const savedNewProjects = localStorage.getItem('admin_new_projects');
  let newProjects: Project[] = [];
  if (savedNewProjects) {
    try {
      newProjects = JSON.parse(savedNewProjects);
      // Filter new projects by category/subcategory
      newProjects = newProjects.filter(project => {
        if (subcategory) {
          return project.category === category && project.subcategory === subcategory;
        }
        return project.category === category;
      });
    } catch (error) {
      console.error('Error parsing new projects from localStorage:', error);
    }
  }

  // Get edited projects from localStorage
  const savedEdits = localStorage.getItem('admin_project_edits');
  let editedProjects: { [key: string]: Partial<Project> } = {};
  if (savedEdits) {
    try {
      editedProjects = JSON.parse(savedEdits);
    } catch (error) {
      console.error('Error parsing project edits from localStorage:', error);
    }
  }

  // Apply edits to mock projects and filter out projects that have been replaced by new versions
  const projectsMap = new Map<string, Project>();
  
  // First add original mock projects with any edits applied
  mockFilteredProjects.forEach(project => {
    if (editedProjects[project.id]) {
      projectsMap.set(project.id, { ...project, ...editedProjects[project.id] } as Project);
    } else {
      projectsMap.set(project.id, project);
    }
  });
  
  // Then add new projects (these will overwrite any existing ones with same ID)
  newProjects.forEach(project => {
    projectsMap.set(project.id, project);
  });

  // Convert back to array and return
  return Array.from(projectsMap.values());
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

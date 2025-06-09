
export interface SiteContent {
  id: string;
  homepageQuote: string;
  aboutMeIntro: string;
  aboutMeQuestions: string[];
  aboutMeClosing: string;
  aboutMeStoryIntro: string;
  aboutMeStoryClosing: string;
}

export const defaultSiteContent: SiteContent = {
  id: 'site-content',
  homepageQuote: '"Jeg maler, knipser, skriver, syr og skrur. Nye infall popper opp. Idéer som: Kan jeg lage min egen hjemmeside helt uten å kunne kode?"',
  aboutMeIntro: 'Jeg har alltid vært nysgjerrig.',
  aboutMeQuestions: [
    'Klarer jeg å sy min egen festdrakt?',
    'Hva kan en hjemmesnekra sengegavl bygges av?',
    'Hvordan maler jeg en stooor akvarell?',
    'Hvor vanskelig er det å skrive en bok?',
    'Kan jeg lage en nettside uten å skrive en eneste kodelinje?'
  ],
  aboutMeClosing: 'Hva neste dypdykk blir er ikke godt å si. Jeg tror fortsatt ikke det blir koding. Hjemmesiden min er oppe og går helt for egen hånd og hode.',
  aboutMeStoryIntro: 'Jeg tror jeg var 10-12 år før vi fikk fasttelefon. Det var venteliste og syndig dyrt å ringe. På den tida skulle barn sees og helst ikke høres. Å komme for sent var også uhørt. Jeg blir fortsatt stresset bare ved tanken.',
  aboutMeStoryClosing: 'I novellen «Teppefall» tar jeg deg med til en førjulsmorgen midt på 70-tallet. Jeg er 7 år og skal ut å fly.'
};

export const getSiteContent = (): SiteContent => {
  try {
    const stored = localStorage.getItem('site_content');
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...defaultSiteContent, ...parsed };
    }
  } catch (error) {
    console.log('Error loading site content from localStorage:', error);
  }
  return defaultSiteContent;
};

export const saveSiteContent = (content: SiteContent): void => {
  try {
    localStorage.setItem('site_content', JSON.stringify(content));
  } catch (error) {
    console.log('Error saving site content to localStorage:', error);
  }
};

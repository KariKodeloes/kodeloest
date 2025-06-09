
export interface NovelParagraph {
  id: string;
  content: string;
}

export interface SiteContent {
  id: string;
  homepageQuote: string;
  aboutMeIntro: string;
  aboutMeQuestions: string[];
  aboutMeClosing: string;
  aboutMeStoryIntro: string;
  aboutMeStoryClosing: string;
  novel: {
    enabled: boolean;
    title: string;
    subtitle: string;
    publishedInfo: string;
    paragraphs: NovelParagraph[];
  };
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
  aboutMeStoryClosing: 'I novellen «Teppefall» tar jeg deg med til en førjulsmorgen midt på 70-tallet. Jeg er 7 år og skal ut å fly.',
  novel: {
    enabled: true,
    title: 'Teppefall',
    subtitle: '',
    publishedInfo: 'Publisert 2021 i antologien "Julemirakler"',
    paragraphs: [
      { id: '1', content: 'Det var så stille. Hjertet mitt hamret i mørket. «Mammmmmaaaaa – hvor mye er klokka?!».' },
      { id: '2', content: 'Alta var tung og hvit. Hvit av snø og tung av forventning. I skogen rett over veien stod furutrærne som hvite bomullsdotter mot den evige desemberhimmelen. Bak brøytekanten lyste en telefonkiosk opp. Alltid beredt som en firkantet, rød helårsnisse i metall stod den der i skinnet fra gatelysene.' },
      { id: '3', content: 'Fjordarmen er omkranset av høye fjell som stuper ned og forsvinner i havet, et spektakulært skue og ultimate forhold for turbulens. Innflygningen vekket alltid til live minner om sommerens besøk på det omreisende tivoliet.' },
      { id: '4', content: 'Det hendte vi dristet oss til å krysse furuskogen og gå helt bort dit trærne sluttet. Der forsvant jorda skrått ned mot den iskalde fjorden. Vi stoppet der på kanten. Til høyre snirklet ei gate seg bortover langs platået med hus på begge sider. Det var et annet og ennå uutforsket territorium. En innklemt sektor mellom fjorden og skoleveien min som gikk over Galgeberget. Nå føltes det som jeg aldri skulle gå opp den bakken igjen. Jeg var 7 år og to uker var en evighet.' },
      { id: '5', content: 'Kroppen min var spent som en buestreng og yr av reisefeber der jeg lå i køyesenga, med hjemmeklippet lugg og uten andre tydelige kjennetegn på at jeg var ei jente enn den gule nattkjolen.' },
      { id: '6', content: 'Tunet vårt bestod av tre firemannsboliger som omringet en lekeplass bygd på dugnad av gamle bildekk, sviller og kabeltrommer. Mange «søringer» kom flyttende opp tidlig på 70-tallet, fulle av pågangsmot, malte møbler og «make peace - not war» pins. Her fant de jobber, elver å fiske i og natur nok til alle. Min familie var en av dem, en flokk på fire. Mor, far, storebror og lillesøster slo seg ned i lærerboligen vi ble tildelt i furulunden mellom eneboliger og rekkehus.' },
      { id: '7', content: 'Under kjøkkenvinduet, inntil den lyseblå panelveggen stod stasjonsvogna vår. Snødyna hadde lagt seg i løpet av natta og skjulte nesten helt den oransje lakken, tiårets farge. Det var 3 dager igjen til jul, og ekstraavgangen vi hadde fått plass på gikk grytidlig.' },
      { id: '8', content: 'Jeg hadde nettopp våknet. Det gikk noen sekunder før jeg skjønte hvor jeg var. Hvorfor var det helt stille i huset? Var det ikke i dag vi skulle reise? Lyden av storebrors sovepust fra overkøya var den eneste lyden jeg kunne høre.' },
      { id: '9', content: '«Hvor mye er klokka?» ropte jeg, litt høyere denne gangen.' },
      { id: '10', content: 'Det utløste en serie av bevegelser, tumulter og mumling fra foreldrerommet som raskt steg i styrke og desibel, før pappas stemme gjallet: «Kom dere i klærne – klokka er 6!»' },
      { id: '11', content: 'Før to minutter hadde gått var vi påkledd alle som en.' },
      { id: '12', content: 'Regelen var at annenhver jul ble feiret sørpå. I Tønsberg ventet to sett med besteforeldre og en haug med slektninger. Der ventet også – og vel så viktig for oss barna – en haug med julegaver. Våre bidrag var for lengst pakket inn og ned. Midt på gulvet i stua, mellom reoler av malte ølkasser og den psykedelisk omtrukne sofaen, lå skaikoffertene våre. Vidåpne og gapende som store munner, klare til å bli smekket igjen så snart toalettsakene var fortært. Fliker av gavepapir tøyt ut mellom finklær og var stuas eneste synlige tegn på at jula var nært forestående.' },
      { id: '13', content: 'Vi hadde vært klare til å dra i lang tid. Billettene var kjøpt i våres. Avgangen var den siste sørover på denne siden av nyttår. Klokka 06:30 skulle flyet ta av. Innsjekkingen var i ferd med å stenge nede på flyplassen. Kanskje ble vi ropt opp med kontant Finnmarks dialekt i selvsamme øyeblikk.' },
      { id: '14', content: '«Kan familien Mikkelsen hut sæi til utgang nummer 3! Nu stenge vi».' },
      { id: '15', content: 'Flere kilometer unna stønnet mamma: «Herregud, dette rekker vi aldri». Hun var på gråten. Jeg kjente tårene presse og klumpen i halsen vokse. Her var det ikke så mye som en pepperkake å se. Gikk hele jula opp i røyk? Det var mye å ta inn over seg for ei lita jente.' },
      { id: '16', content: 'Pappa prøvde å være løsningsorientert, i grenselandet til urealistisk vil du kanskje tenke.' },
      { id: '17', content: '«Vi må prøve å få de til å holde igjen flyet. Jeg stikker over til Danielsen og ringer! Får jeg ikke liv i de prøver jeg telefonkiosken.» Han skal ha for pågangsmotet, pappa. Han røsket til seg boblejakka og for på dør. Fra kjøkkenvinduet så vi han bakse i lange klyv over lekeplassen. Tre håpefulle hoder stod igjen på kjøkkenet med nesene klemt mot det kalde glasset. På rekordtid rundet han hjørnet på nabohuset. Her kom en mann med ett mål: Å stoppe et fly!' },
      { id: '18', content: 'Vi tre var fanget i et tidløst vakuum. Sekundene gikk, men tida stod stille. Burde ikke lyset inne hos Danielsen ha kommet på nå?' },
      { id: '19', content: '«Kom igjen, da» mumlet mamma utålmodig og gløttet på armbåndsuret. Hun trippet og holdt trøstende rundt oss begge. Alt håp virket å være ute da det endelig kom på et svakt lys i den enden av stua hvor den hellige gralen – telefonen - stod. Håpet og stemninga steg. På en side ville vi at han skulle komme raskt tilbake med gode nyheter. Men dersom prosjekt «stopp flyet» feilet, hastet det ikke.' },
      { id: '20', content: 'Omsider dukket pappas lange skikkelse opp igjen. Han skøyt fart som en elg og forserte sandkassa i et imponerende tempo og svevde tilbake i eget tråkk. Vi kunne høre han ramle inn yttergangen og opp trappa vår. Vi sprang imot han for å få det overstått.' },
      { id: '21', content: 'Mellom skjegg og barter sprakk verdens bredeste smil opp.' },
      { id: '22', content: '«Flyet har ikke landet ennå. Det var snøstorm i Tromsø. Vi rekker det!»' },
      { id: '23', content: 'Det gikk ennå 5 år før vi fikk installert egen telefon.' }
    ]
  }
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

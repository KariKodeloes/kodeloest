
import React from 'react';
import { Button } from '@/components/ui/button';
import TextCard from '@/components/TextCard';

const OmMeg = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <h2 className="text-[28px] font-quicksand font-bold mb-4 text-foreground">
              Om meg
            </h2>
          </div>

          {/* Introduction with image */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8 shadow-sm">
            {/* Mobile layout - image above title */}
            <div className="block md:hidden mb-6">
              <div className="w-48 h-48 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/62a48b0c-30ef-4e00-a36c-4149de722c19.png"
                  alt="Kodeløse Kari"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop layout - image and content side by side */}
            <div className="md:flex md:gap-8">
              {/* Image - 1/3 width on desktop, hidden on mobile */}
              <div className="hidden md:block md:w-1/3 md:flex-shrink-0">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/lovable-uploads/62a48b0c-30ef-4e00-a36c-4149de722c19.png"
                    alt="Kodeløse Kari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content - 2/3 width on desktop */}
              <div className="md:w-2/3">
                <h3 className="font-oswald font-normal mb-4 text-foreground" style={{ fontSize: '1.5rem' }}>
                  Kodeløse Kari
                </h3>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Jeg har alltid vært nysgjerrig.
                </p>
                <ul className="text-foreground text-base leading-relaxed mb-4 list-disc list-inside">
                  <li>Klarer jeg å sy min egen festdrakt?</li>
                  <li>Hva kan en hjemmesnekra sengegavl bygges av?</li>
                  <li>Hvordan maler jeg en stooor akvarell?</li>
                  <li>Hvor vanskelig er det å skrive en bok?</li>
                  <li>Kan jeg lage en nettside uten å skrive en eneste kodelinje?</li>
                </ul>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Hva det neste dypdykk blir er ikke godt å si. Jeg tror fortsatt ikke det blir koding. Hjemmesiden min er oppe og går helt for egen hånd og hode.
                </p>
              </div>
            </div>

            {/* Full-width text that spans the entire card width */}
            <div className="mt-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                Jeg tror jeg var 10 år før vi fikk fasttelefon. Det var venteliste og syndig dyrt å ringe. På den tida skulle barn sees og helst ikke høres. Å komme for sent var også uhørt. Jeg blir fortsatt stresset bare ved tanken.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                I novellen «Teppefall» tar jeg deg med til en førjulsmorgen midt på 70-tallet. Jeg er 8 år og skal ut å fly.
              </p>
            </div>
          </div>

          {/* Childhood Story using new TextCard component */}
          <div className="mb-8">
            <TextCard title="Teppefall">
              <p className="text-muted-foreground text-sm mb-4 italic">
                Publisert 2021 i antologien "Julemirakler"
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Det var så stille. Hjertet mitt hamret i mørket. 
                «Mammmmmaaaaa – hvor mye er klokka?!».
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Alta var tung og hvit. Hvit av snø og tung av forventning. I skogen rett over veien stod furutrærne som hvite bomullsdotter mot den evige desemberhimmelen. Bak brøytekanten lyste en telefonkiosk opp. Alltid beredt som en firkantet, rød helårsnisse i metall stod den der i skinnet fra gatelysene.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Fjordarmen er omkranset av høye fjell som stuper ned og forsvinner i havet, et spektakulært skue og ultimate forhold for turbulens. Innflygningen vekket alltid til live minner om sommerens besøk på det omreisende tivoliet.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Det hendte vi dristet oss til å krysse furuskogen og gå helt bort dit trærne sluttet. Der forsvant jorda skrått ned mot den iskalde fjorden. Vi stoppet der på kanten. Til høyre snirklet ei gate seg bortover langs platået med hus på begge sider. Det var et annet og ennå uutforsket territorium. En innklemt sektor mellom fjorden og skoleveien min som gikk over Galgeberget. Nå føltes det som jeg aldri skulle gå opp den bakken igjen. Jeg var 7 år og to uker var en evighet.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Kroppen min var spent som en buestreng og yr av reisefeber der jeg lå i køyesenga, med hjemmeklippet lugg og uten andre tydelige kjennetegn på at jeg var ei jente enn den gule nattkjolen.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Tunet vårt bestod av tre firemannsboliger som omringet en lekeplass bygd på dugnad av gamle bildekk, sviller og kabeltrommer. Mange «søringer» kom flyttende opp tidlig på 70-tallet, fulle av pågangsmot, malte møbler og «make peace - not war» pins. Her fant de jobber, elver å fiske i og natur nok til alle. Min familie var en av dem, en flokk på fire. Mor, far, storebror og lillesøster slo seg ned i lærerboligen vi ble tildelt i furulunden mellom eneboliger og rekkehus.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Under kjøkkenvinduet, inntil den lyseblå panelveggen stod stasjonsvogna vår. Snødyna hadde lagt seg i løpet av natta og skjulte nesten helt den oransje lakken, tiårets farge. Det var 3 dager igjen til jul, og ekstraavgangen vi hadde fått plass på gikk grytidlig.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Jeg hadde nettopp våknet. Det gikk noen sekunder før jeg skjønte hvor jeg var. Hvorfor var det helt stille i huset? Var det ikke i dag vi skulle reise? Lyden av storebrors sovepust fra overkøya var den eneste lyden jeg kunne høre.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                «Hvor mye er klokka?» ropte jeg, litt høyere denne gangen.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Det utløste en serie av bevegelser, tumulter og mumling fra foreldrerommet som raskt steg i styrke og desibel, før pappas stemme gjallet: «Kom dere i klærne – klokka er 6!»
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Før to minutter hadde gått var vi påkledd alle som en.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Regelen var at annenhver jul ble feiret sørpå. I Tønsberg ventet to sett med besteforeldre og en haug med slektninger. Der ventet også – og vel så viktig for oss barna – en haug med julegaver. Våre bidrag var for lengst pakket inn og ned. Midt på gulvet i stua, mellom reoler av malte ølkasser og den psykedelisk omtrukne sofaen, lå skaikoffertene våre. Vidåpne og gapende som store munner, klare til å bli smekket igjen så snart toalettsakene var fortært. Fliker av gavepapir tøyt ut mellom finklær og var stuas eneste synlige tegn på at jula var nært forestående.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Vi hadde vært klare til å dra i lang tid. Billettene var kjøpt i våres. Avgangen var den siste sørover på denne siden av nyttår. Klokka 06:30 skulle flyet ta av. Innsjekkingen var i ferd med å stenge nede på flyplassen. Kanskje ble vi ropt opp med kontant Finnmarks dialekt i selvsamme øyeblikk.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                «Kan familien Mikkelsen hut sæi til utgang nummer 3! Nu stenge vi».
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Flere kilometer unna stønnet mamma: «Herregud, dette rekker vi aldri». Hun var på gråten. Jeg kjente tårene presse og klumpen i halsen vokse. Her var det ikke så mye som en pepperkake å se. Gikk hele jula opp i røyk? Det var mye å ta inn over seg for ei lita jente.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Pappa prøvde å være løsningsorientert, i grenselandet til urealistisk vil du kanskje tenke.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                «Vi må prøve å få de til å holde igjen flyet. Jeg stikker over til Danielsen og ringer! Får jeg ikke liv i de prøver jeg telefonkiosken.» Han skal ha for pågangsmotet, pappa. Han røsket til seg boblejakka og for på dør. Fra kjøkkenvinduet så vi han bakse i lange klyv over lekeplassen. Tre håpefulle hoder stod igjen på kjøkkenet med nesene klemt mot det kalde glasset. På rekordtid rundet han hjørnet på nabohuset. Her kom en mann med ett mål: Å stoppe et fly!
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Vi tre var fanget i et tidløst vakuum. Sekundene gikk, men tida stod stille. Burde ikke lyset inne hos Danielsen ha kommet på nå?
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                «Kom igjen, da» mumlet mamma utålmodig og gløttet på armbåndsuret. Hun trippet og holdt trøstende rundt oss begge. Alt håp virket å være ute da det endelig kom på et svakt lys i den enden av stua hvor den hellige gralen – telefonen - stod. Håpet og stemninga steg. På en side ville vi at han skulle komme raskt tilbake med gode nyheter. Men dersom prosjekt «stopp flyet» feilet, hastet det ikke.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Omsider dukket pappas lange skikkelse opp igjen. Han skøyt fart som en elg og forserte sandkassa i et imponerende tempo og svevde tilbake i eget tråkk. Vi kunne høre han ramle inn yttergangen og opp trappa vår. Vi sprang imot han for å få det overstått.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Mellom skjegg og barter sprakk verdens bredeste smil opp.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                «Flyet har ikke landet ennå. Det var snøstorm i Tromsø. Vi rekker det!»
              </p>
              <p className="text-foreground text-base leading-relaxed">
                Det gikk ennå 5 år før vi fikk installert egen telefon.
              </p>
            </TextCard>
          </div>

          {/* Contact Information */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-quicksand font-semibold mb-6 text-foreground">
              Ta kontakt
            </h2>
            <p className="text-foreground text-base leading-relaxed mb-6">
              Har du spørsmål om prosjektene mine, eller vil du bare si hei? Du kan følge meg og ta kontakt via sosiale medier!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* LinkedIn */}
              <Button asChild>
                <a
                  href="https://www.linkedin.com/in/kari-walle-mikkelsen-0b199516/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <span className="material-icon">work</span>
                  Følg meg på LinkedIn
                </a>
              </Button>
              
              {/* Instagram */}
              <Button asChild>
                <a
                  href="https://instagram.com/karis_pensel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <span className="material-icon">photo_camera</span>
                  Følg meg på Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmMeg;

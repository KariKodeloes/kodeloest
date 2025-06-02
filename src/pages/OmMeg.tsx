import React from 'react';
import { Button } from '@/components/ui/button';

const OmMeg = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <h1 className="text-2xl font-quicksand font-bold mb-4 text-foreground">
              Om meg
            </h1>
          </div>

          {/* Introduction with image */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8 shadow-sm">
            {/* Mobile layout - image above title */}
            <div className="block md:hidden mb-6">
              <div className="w-48 h-48 mx-auto rounded-lg overflow-hidden">
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
                <h3 className="text-2xl font-quicksand font-semibold mb-4 text-foreground" style={{ fontSize: '1.5rem' }}>
                  Kodeløse Kari
                </h3>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  Kreativitet har alltid vært en stor del av livet mitt. Fra jeg var liten har jeg elsket å skape noe med hendene mine - enten det er å male, tegne, sy eller bare eksperimentere med nye teknikker og materialer.
                </p>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  I dag driver jeg med alt fra akvarellmaleri og fotografi til søm og design. Jeg liker å utforske forskjellige uttrykksformer og finne nye måter å fortelle historier på gjennom kunsten min.
                </p>
                <p className="text-foreground text-base leading-relaxed">
                  På denne nettsiden deler jeg noen av prosjektene mine og håper du finner inspirasjon til dine egne kreative eventyr!
                </p>
              </div>
            </div>
          </div>

          {/* Childhood Story */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-quicksand font-semibold mb-6 text-foreground">
              En historie fra barndommen
            </h2>
            <div className="prose prose-stone dark:prose-invert max-w-none">
              <p className="text-foreground text-base leading-relaxed mb-4">
                Jeg var syv år gammel da jeg oppdaget den magiske verden av farger og pensler. Det var en grå, regnfull søndag i oktober, og jeg kjedet meg forferdelig. Mamma hadde akkurat kjøpt et lite akvarellsett til meg, men jeg hadde ikke tenkt så mye over det før den dagen.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                Jeg satte meg ved kjøkkenbordet med et stort ark papir foran meg. Det første jeg prøvde var å male solen - en gul sirkel som skulle være helt perfekt. Men akvarellene hadde sine egne planer. Fargen rant utover, blandet seg med det våte papiret, og skapte noe helt annet enn det jeg hadde tenkt.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                I stedet for å bli frustrert, ble jeg fascinert. Hvordan kunne noe så enkelt som vann og farge skape så mye magi? Jeg brukte hele dagen på å eksperimentere, og da pappa kom hjem fra jobb, hadde jeg laget tjue forskjellige "solbilder" - alle helt unike.
              </p>
              <p className="text-foreground text-base leading-relaxed mb-4">
                "Kari," sa han mens han så på kunstverkene mine, "jeg tror du har funnet noe spesielt her." Han hadde rett. Den dagen plantet frøet til det som skulle bli en livslang kjærlighet for å skape.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                I dag, mange år senere, husker jeg fortsatt følelsen av det første penseldragget på det våte papiret. Det er den samme følelsen jeg jakter på i alt jeg skaper - den magiske øyeblikket når noe nytt og uventet blir til.
              </p>
            </div>
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

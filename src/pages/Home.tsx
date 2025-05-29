

import React from 'react';
import Gallery from '../components/Gallery';
import { getRandomProjects } from '../data/mockData';

const Home = () => {
  const galleryProjects = getRandomProjects('om-meg', 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image - now goes to the very top */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/9b63042b-7977-4895-a9d2-c453310e5828.png)',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4rem), 0 100%)'
        }}
      >
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4 pt-16">
          <div className="max-w-4xl">
            <blockquote className="text-xl md:text-3xl font-oswald font-light mb-8 animate-fade-in">
              "Jeg har laget mye jeg er stolt av uten å kunne kode.<br />Denne nettsida foreksempel!"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative -mt-16 z-20 bg-background">
        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="bg-card rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-oswald font-semibold text-center mb-8 text-foreground">
              Mine Seneste Prosjekter
            </h2>
            <Gallery projects={galleryProjects} />
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground text-lg mb-6">
                Oppdage mer av mitt kreative arbeid i de ulike kategoriene
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { title: 'Bilder', path: '/bilder' },
                  { title: 'Foto', path: '/foto' },
                  { title: 'Søm', path: '/som' },
                  { title: 'Design', path: '/design' },
                  { title: 'DIY', path: '/diy' }
                ].map((category) => (
                  <a
                    key={category.path}
                    href={category.path}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


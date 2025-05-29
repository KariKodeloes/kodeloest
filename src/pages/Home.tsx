
import React from 'react';
import Gallery from '../components/Gallery';
import { getRandomProjects } from '../data/mockData';

const Home = () => {
  const galleryProjects = getRandomProjects('om-meg', 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image - now shows complete image */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/9b63042b-7977-4895-a9d2-c453310e5828.png)'
        }}
      >
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4 -mt-20">
          <div className="max-w-4xl">
            {/* Quote moved above logo with increased size and line height */}
            <blockquote className="text-3xl md:text-5xl font-oswald font-light mb-12 animate-fade-in" style={{ lineHeight: '1.5' }}>
              "Jeg har laget mye jeg er stolt av<br />uten å kunne kode.<br />Denna nettsida foreksempel!"
            </blockquote>
            
            {/* Logo now below the quote */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/092fa60a-3b25-44f7-bc70-4fabe5da4497.png" 
                alt="Kari Kodeløs" 
                className="h-20 w-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative -mt-40 z-20">
        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white">
            <div className="bg-transparent p-4">
              <Gallery projects={galleryProjects} />
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground text-lg mb-6">
                  Oppdage mer av mitt kreative arbeid i de ulike kategoriene
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { title: 'Bildekunst', path: '/bilder' },
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
    </div>
  );
};

export default Home;

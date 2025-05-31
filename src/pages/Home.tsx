
import React from 'react';
import Gallery from '../components/Gallery';
import { mockProjects } from '../data/mockData';

const Home = () => {
  // Show all projects instead of just 6 random ones
  const galleryProjects = mockProjects;

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
            <blockquote className="text-3xl md:text-5xl font-oswald font-light mb-12 animate-fade-in" style={{ lineHeight: '1.5', color: '#FFFFFF' }}>
              "Jeg liker å skape ting.<br />Noe av det kan du se her på nettsida,<br />som jeg også har laget - helt uten å kunne kode."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Gallery Section - now scrollable with all projects sorted by likes */}
      <div className="relative -mt-40 z-20">
        <div className="container mx-auto px-4 pt-8 pb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white max-h-[80vh] overflow-y-auto">
            <div className="bg-transparent p-4">
              <Gallery projects={galleryProjects} sortByLikes={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

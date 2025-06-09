
import React from 'react';
import Gallery from '../components/Gallery';
import { getProjectsByCategory } from '../data/mockData';

const Home = () => {
  // Get all projects using the correct category names
  const allProjects = [
    ...getProjectsByCategory('bildekunst'),
    ...getProjectsByCategory('foto'),
    ...getProjectsByCategory('som'),
    ...getProjectsByCategory('design')
  ];

  // Remove duplicates (in case projects appear in multiple categories)
  const uniqueProjects = allProjects.filter((project, index, self) =>
    index === self.findIndex(p => p.id === project.id)
  );

  console.log('Home page - displaying projects:', uniqueProjects.length);

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
              "Jeg maler, knipser, skriver, syr og skrur. Nye infall popper opp. Idéer som: Kan jeg lage min egen hjemmeside helt uten å kunne kode?"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Gallery Section - now full width without container restrictions */}
      <div className="relative -mt-40 z-20 w-full">
        <div className="w-full px-4 pt-8 pb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white max-h-[80vh] overflow-y-auto w-full">
            <div className="bg-transparent p-4">
              <Gallery projects={uniqueProjects} sortByLikes={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

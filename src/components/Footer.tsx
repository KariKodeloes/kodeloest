
import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="relative mt-auto bg-cover bg-center bg-no-repeat text-white py-8"
      style={{
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(/lovable-uploads/9b63042b-7977-4895-a9d2-c453310e5828.png)',
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        minHeight: '100px'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p 
            className="font-roboto leading-relaxed text-base"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            © Kari Walle Mikkelsen 2025. Alle bilder og kunstverk på denne siden er beskyttet av åndsverkloven og kan ikke brukes uten skriftlig tillatelse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

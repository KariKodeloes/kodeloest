
import React from 'react';
import TextCard from '@/components/TextCard';
import MediaDisplay from '@/components/MediaDisplay';
import { getSiteContent } from '../data/siteContent';

const OmMeg = () => {
  const siteContent = getSiteContent();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-left mb-2">
            <h2 className="text-[28px] font-quicksand font-bold mb-4 text-foreground">
              Om meg
            </h2>
          </div>

          {/* Introduction with image */}
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            {/* Mobile layout - image above title */}
            <div className="block md:hidden mb-6">
              <div className="w-48 h-48 rounded-lg overflow-hidden">
                <MediaDisplay
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
                  <MediaDisplay
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
                  {siteContent.aboutMeIntro}
                </p>
                <ul className="text-foreground text-base leading-relaxed mb-4 list-disc list-inside">
                  {siteContent.aboutMeQuestions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
                <p className="text-foreground text-base leading-relaxed mb-4">
                  {siteContent.aboutMeClosing}
                </p>
              </div>
            </div>

            {/* Full-width text that spans the entire card width */}
            <div className="mt-6">
              <p className="text-foreground text-base leading-relaxed mb-4">
                {siteContent.aboutMeStoryIntro}
              </p>
              <p className="text-foreground text-base leading-relaxed">
                {siteContent.aboutMeStoryClosing}
              </p>
            </div>
          </div>

          {/* Novel - conditionally rendered */}
          {siteContent.novel.enabled && (
            <div className="mb-8">
              <TextCard title={siteContent.novel.title}>
                {siteContent.novel.publishedInfo && (
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    {siteContent.novel.publishedInfo}
                  </p>
                )}
                {siteContent.novel.paragraphs.map((paragraph, index) => (
                  <p key={paragraph.id} className="text-foreground text-base leading-relaxed mb-4">
                    {paragraph.content}
                  </p>
                ))}
              </TextCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OmMeg;

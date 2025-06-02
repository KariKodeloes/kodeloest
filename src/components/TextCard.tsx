
import React from 'react';

interface TextCardProps {
  title: string;
  children: React.ReactNode;
}

const TextCard: React.FC<TextCardProps> = ({ title, children }) => {
  console.log('TextCard rendered with title:', title);
  
  return (
    <div className="rounded-lg shadow-sm overflow-hidden" style={{ backgroundColor: '#FEF7EE' }}>
      {/* Title bar */}
      <div 
        className="px-8 py-4"
        style={{ backgroundColor: 'rgb(99, 68, 28)' }}
      >
        <h2 
          className="text-2xl font-quicksand font-semibold" 
          style={{ color: 'rgb(255, 255, 255)' }}
        >
          {title}
        </h2>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <div className="prose prose-stone dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TextCard;

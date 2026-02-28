import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`mb-10 ${centered ? 'text-center' : ''}`}
    >
      <h2 
        className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight 
          ${light ? 'text-white' : 'text-gray-800'}
          ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-base md:text-lg max-w-3xl mx-auto 
            ${light ? 'text-gray-100' : 'text-gray-600'}
            ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

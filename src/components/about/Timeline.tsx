import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  isLeft,
  index 
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        isLeft ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white">{index + 1}</div>
      </div>
      <div 
        className={`order-1 bg-white rounded-lg shadow-md px-6 py-4 w-5/12 ${
          inView ? (isLeft ? 'animate-slideRight' : 'animate-slideLeft') : 'opacity-0'
        }`}
        style={{ 
          animationDelay: `${index * 0.2}s`,
          animation: inView 
            ? `${isLeft ? 'slideRight' : 'slideLeft'} 0.6s ease-out forwards` 
            : 'none'
        }}
      >
        <h3 className="mb-1 font-bold text-primary text-xl">{year}</h3>
        <h4 className="mb-2 font-bold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'FarmTrack was established with a mission to revolutionize African agriculture through innovative solutions.'
    },
    {
      year: '2012',
      title: 'First Product Line',
      description: 'Launched our first line of organic pest control products specifically designed for East African crops.'
    },
    {
      year: '2015',
      title: 'Research Partnership',
      description: 'Formed research partnerships with leading agricultural universities to develop next-generation farming solutions.'
    },
    {
      year: '2017',
      title: 'Regional Expansion',
      description: 'Expanded operations beyond Kenya to Tanzania, Uganda, and Rwanda, reaching thousands more farmers.'
    },
    {
      year: '2019',
      title: 'Equipment Division',
      description: 'Introduced agricultural equipment line to complement our biochemical solutions for a complete farming system.'
    },
    {
      year: '2022',
      title: 'Digital Innovation',
      description: 'Integrated digital technology with traditional farming practices to create smarter, more efficient systems.'
    },
    {
      year: '2025',
      title: 'Present Day',
      description: 'Today, FarmTrack products are used by over 200,000 farmers across East Africa, increasing yields by an average of 37%.'
    },
  ];

  return (
    <div className="relative w-full">
      <div className="border-2-2 absolute border-primary h-full border left-1/2"></div>
      <div className="container mx-auto w-full">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            isLeft={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
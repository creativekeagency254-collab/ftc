import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  value, 
  label, 
  suffix = '',
  delay = 0,
  duration = 2000
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    let timer: NodeJS.Timeout;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother counting
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(percentage);
      
      setCount(Math.floor(easedProgress * value));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
    };
  }, [inView, value, delay, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </p>
      <p className="text-current opacity-80">{label}</p>
    </div>
  );
};

export default StatCounter;
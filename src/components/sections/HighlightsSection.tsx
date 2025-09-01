'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ServiceHighlight {
  id: string;
  title: string;
}

const serviceHighlights: ServiceHighlight[] = [
  {
    id: '1',
    title: 'Fête Gourmande'
  },
  {
    id: '2',
    title: 'Qualité Premium'
  },
  {
    id: '3',
    title: 'Toujours Frais'
  },
  {
    id: '4',
    title: '24 / 7 services'
  }
];

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentCount = countRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentCount) {
      observer.observe(currentCount);
    }

    return () => {
      if (currentCount) {
        observer.unobserve(currentCount);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div ref={countRef} className="text-4xl font-serif font-bold text-[var(--color-brand)] mb-2">
      {count}
      {suffix}
    </div>
  );
}

const HighlightsSection: React.FC = () => {
  return (
    <motion.section 
      className="relative -top-66 py-16 bg-[var(--color-accent)] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {serviceHighlights.map((service, index) => {
            let end: number;
            let suffix: string;
            if (index === 0) {
              end = 64;
              suffix = '+';
            } else if (index === 1) {
              end = 6;
              suffix = '+';
            } else if (index === 2) {
              end = 100;
              suffix = '%';
            } else {
              end = 50;
              suffix = '';
            }
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Counter end={end} duration={2} suffix={suffix} />
                <div className="text-sm uppercase tracking-wider">{service.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default HighlightsSection;
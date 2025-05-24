'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/utils/tailwindcss';

import { Experience } from './';

interface Props {
  item: Experience;
}
const ExperienceCard: React.FC<Props> = ({ item }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <div ref={ref} className="group flex items-center justify-between md:justify-normal md:even:flex-row-reverse">
      <div
        id="icon"
        className={cn(
          'flex size-6 shrink-0 items-center justify-center rounded-full bg-accent shadow-md md:order-1 md:group-odd:translate-x-7 md:group-even:-translate-x-7',
          inView ? 'opacity-100 transition-opacity delay-1000 duration-1000 ease-out' : 'opacity-0'
        )}
      />

      <article
        className={cn(
          'relative w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)]',
          inView ? 'animate-slide-in-from-right md:group-odd:animate-slide-in-from-left' : 'opacity-0'
        )}
      >
        <div
          className={cn(
            'card space-y-4',
            'before:absolute before:top-1/2 before:left-0 before:size-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border-b before:border-l before:border-border/25 before:bg-background-light md:group-odd:before:left-full md:group-odd:before:border-t md:group-odd:before:border-r md:group-odd:before:border-b-0 md:group-odd:before:border-l-0'
          )}
        >
          <div>
            <h3 className="title-card">{item.title}</h3>
            <p className="card-muted">
              {item.dates} | <span className="font-semibold">{item.business}</span>, {item.location}
            </p>
          </div>
          <p>{item.description}</p>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
